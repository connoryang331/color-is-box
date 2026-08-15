import type { Vec2, Vec3 } from './types';
import {
  getAxisHandlePos,
  getAxisDirections,
  faceHitTest,
  faceHitTestUnclamped,
  FACES,
  ALPHA_R_OUT,
  ALPHA_R_IN,
  type RenderState,
  DEFAULT_RENDER_STATE,
} from './box-renderer';

const HANDLE_HIT_RADIUS = 22;

export function createInteraction(
  canvas: HTMLCanvasElement,
  getBoxExtent: () => Vec3,
  setBoxExtent: (v: Vec3) => void,
  getDotValues: () => Vec3,
  setDotValues: (v: Vec3, face: number) => void,
  getDotFace: () => number,
  getScale: () => number,
  getCenter: () => Vec2,
  requestRender: () => void,
  alphaEnabled: () => boolean,
  onAlphaChange: (a: number) => void,
  getAlpha: () => number,
  getDotScreenPos: () => Vec2,
) {
  const state: RenderState = { ...DEFAULT_RENDER_STATE };

  function canvasPoint(e: MouseEvent | Touch): Vec2 {

    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }
  // ── Alpha ring state machine ──────────────────────────────────────────
  let alphaDragging = false;
  const DOT_HIT_R = 9;
  const LONG_PRESS_MS = 1000; // 按压 1 秒进入 alpha 模式（双击反转不受影响：快速 up 即取消）
  let longPressTimer: ReturnType<typeof setTimeout> | null = null;
  function startLongPress(): void {
    cancelLongPress();
    longPressTimer = setTimeout(enterAlphaMode, LONG_PRESS_MS);
  }
  function cancelLongPress(): void {
    if (longPressTimer !== null) { clearTimeout(longPressTimer); longPressTimer = null; }
  }
  function enterAlphaMode(): void {
    longPressTimer = null;
    state.alphaMode = true;
    endAxisDrag();
    endFaceDrag(); // 结束进行中的选色拖拽，锁定 dot
    requestRender();
  }

  function distToDot(pt: Vec2): number {
    const c = getDotScreenPos();
    return Math.hypot(pt.x - c.x, pt.y - c.y);
  }
  // 12 点方向 = 0，顺时针增大，返回 0..2π
  function alphaAngleOf(pt: Vec2): number {
    const c = getDotScreenPos();
    return (Math.atan2(pt.x - c.x, -(pt.y - c.y)) + Math.PI * 2) % (Math.PI * 2);
  }
  function applyAlphaFromPoint(pt: Vec2): void {
    onAlphaChange(alphaAngleOf(pt) / (Math.PI * 2));
    requestRender();
  }
  function inAlphaRing(pt: Vec2): boolean {
    const d = distToDot(pt);
    return d >= ALPHA_R_IN - 4 && d <= ALPHA_R_OUT + 6;
  }

  // ── Hit testing ───────────────────────────────────────────────────────

  function hitTestAxisHandle(pt: Vec2): number {
    const ext = getBoxExtent();
    const scale = getScale();
    const center = getCenter();
    for (let i = 0; i < 3; i++) {
      const pos = getAxisHandlePos(i, ext, scale, center);
      const dx = pt.x - pos.x;
      const dy = pt.y - pos.y;
      if (dx * dx + dy * dy <= HANDLE_HIT_RADIUS * HANDLE_HIT_RADIUS) return i;
    }
    return -1;
  }

  function hitTestFace(pt: Vec2): { faceIndex: number; s: number; t: number } | null {
    const ext = getBoxExtent();
    const scale = getScale();
    const center = getCenter();
    // Test in reverse order (frontmost first)
    for (let fi = FACES.length - 1; fi >= 0; fi--) {
      const hit = faceHitTest(fi, pt, ext, scale, center);
      if (hit) return { faceIndex: fi, ...hit };
    }
    return null;
  }

  // ── Axis handle dragging (changes boxExtent only) ────────────────────

  let dragAxis = -1;
  let dragStartMouse: Vec2 = { x: 0, y: 0 };
  let dragStartValue = 0;

  function startAxisDrag(axisIndex: number, pt: Vec2): void {
    dragAxis = axisIndex;
    dragStartMouse = pt;
    const ext = getBoxExtent();
    const keys: (keyof Vec3)[] = ['x', 'y', 'z'];
    dragStartValue = ext[keys[axisIndex]];
    state.draggingAxisHandle = axisIndex;
    canvas.style.cursor = 'grabbing';
    requestRender();
  }

  function applyAxisDrag(pt: Vec2): void {
    cancelLongPress(); // 开始移动即取消长按
    if (dragAxis < 0) return;

    const dx = pt.x - dragStartMouse.x;
    const dy = pt.y - dragStartMouse.y;
    const dirs = getAxisDirections();
    const dir = dirs[dragAxis];
    const scale = getScale();

    const dot = dx * dir.x + dy * dir.y;
    const delta = dot / scale;
    const newVal = Math.max(0, Math.min(1, dragStartValue + delta));

    const ext = getBoxExtent();
    const keys: (keyof Vec3)[] = ['x', 'y', 'z'];
    const newExtent = { ...ext, [keys[dragAxis]]: newVal };
    setBoxExtent(newExtent);

    // Clamp dotValues to stay within the new box extent
    const dotVals = getDotValues();
    const dotFace = getDotFace();
    const face = dotFace >= 0 ? FACES[dotFace] : null;
    const newDot = { ...dotVals };

    if (face && dragAxis === face.fixedAxis) {
      // Fixed axis of the dot's face changed — dot tracks it
      (newDot as any)[keys[dragAxis]] = newVal;
    } else {
      // Varying axis or no face — clamp
      (newDot as any)[keys[dragAxis]] = Math.min(dotVals[keys[dragAxis]], newVal);
    }
    setDotValues(newDot, getDotFace());

    requestRender();
  }

  function endAxisDrag(): void {
    dragAxis = -1;
    state.draggingAxisHandle = -1;
  }

  // ── Face click/drag (changes dotValues only, not boxExtent) ──────────

  let dragFace = -1;
  let faceShiftLock: 'u' | 'v' | null = null; // shift-drag axis lock
  let faceShiftStart: { s: number; t: number } | null = null; // initial (s,t) when shift-drag began
  let faceShiftPending = false; // shift held but lock direction not yet determined

  function startFaceDrag(faceIndex: number, s: number, t: number, shift: boolean): void {
    dragFace = faceIndex;
    state.draggingFace = faceIndex;
    faceShiftLock = null;
    faceShiftStart = null;
    faceShiftPending = false;

    if (shift) {
      // Shift held: record starting position, wait for movement to determine lock axis
      faceShiftPending = true;
      faceShiftStart = { s, t };
    }

    applyFaceValues(faceIndex, s, t);
    canvas.style.cursor = 'crosshair';
    requestRender();
  }

  function applyFaceDrag(pt: Vec2, shift: boolean, alt: boolean): void {
    cancelLongPress(); // 开始移动即取消长按
    if (dragFace < 0) return;

    const ext = getBoxExtent();
    const scale = getScale();
    const center = getCenter();

    // Try current face first
    let hit = faceHitTest(dragFace, pt, ext, scale, center);
    let targetFace = dragFace;

    // If cursor left the current face, try adjacent faces (unless Option locks to face)
    if (!hit && !alt) {
      for (let fi = FACES.length - 1; fi >= 0; fi--) {
        if (fi === dragFace) continue;
        hit = faceHitTest(fi, pt, ext, scale, center);
        if (hit) {
          targetFace = fi;
          break;
        }
      }
    }

    // Option key: clamp to current face even if cursor is outside
    if (!hit && alt) {
      hit = faceHitTestUnclamped(dragFace, pt, ext, scale, center);
      targetFace = dragFace;
    }

    if (!hit) { requestRender(); return; }

    // If we switched faces, reset shift lock
    if (targetFace !== dragFace) {
      dragFace = targetFace;
      state.draggingFace = targetFace;
      faceShiftLock = null;
      faceShiftPending = false;
      faceShiftStart = null;
    }

    let { s, t } = hit;

    // Shift-drag axis locking
    if (shift && faceShiftStart) {
      if (faceShiftPending) {
        // Determine lock direction once movement exceeds threshold
        const ds = Math.abs(s - faceShiftStart.s);
        const dt = Math.abs(t - faceShiftStart.t);
        const threshold = 0.02;
        if (ds > threshold || dt > threshold) {
          faceShiftLock = ds >= dt ? 'u' : 'v';
          faceShiftPending = false;
        }
      }

      if (faceShiftLock === 'u') {
        t = faceShiftStart.t; // lock v-axis
      } else if (faceShiftLock === 'v') {
        s = faceShiftStart.s; // lock u-axis
      }
    } else if (!shift) {
      // Shift released mid-drag: clear lock
      faceShiftLock = null;
      faceShiftPending = false;
      faceShiftStart = null;
    }

    applyFaceValues(targetFace, s, t);
    requestRender();
  }

  function applyFaceValues(faceIndex: number, s: number, t: number): void {
    const face = FACES[faceIndex];
    const ext = getBoxExtent();
    const keys: (keyof Vec3)[] = ['x', 'y', 'z'];

    const newDot: Vec3 = { ...getDotValues() };
    (newDot as any)[keys[face.uAxis]] = s * ext[keys[face.uAxis]];
    (newDot as any)[keys[face.vAxis]] = t * ext[keys[face.vAxis]];
    (newDot as any)[keys[face.fixedAxis]] = ext[keys[face.fixedAxis]];

    setDotValues(newDot, faceIndex);
  }

  function endFaceDrag(): void {
    dragFace = -1;
    state.draggingFace = -1;
    faceShiftLock = null;
    faceShiftPending = false;
    faceShiftStart = null;
  }

  // ── Mouse events ──────────────────────────────────────────────────────

  function onMouseDown(e: MouseEvent): void {
    const pt = canvasPoint(e);

    // Alpha ring 状态机（仅启用 alpha 的模型生效）
    if (alphaEnabled()) {
      if (state.alphaMode) {
        if (distToDot(pt) <= DOT_HIT_R) {
          state.alphaMode = false; // 再按圆点：关闭
          requestRender();
          return;
        }
        if (inAlphaRing(pt)) {
          e.preventDefault();
          alphaDragging = true;
          applyAlphaFromPoint(pt);
          return;
        }
        state.alphaMode = false; // 点环外：关闭
        requestRender();
        return;
      }
      if (distToDot(pt) <= DOT_HIT_R) {
        startLongPress(); // 长按 1 秒开环；短按/拖动照常走 face 拖拽
      }
    }

    const axisHit = hitTestAxisHandle(pt);
    if (axisHit >= 0) {
      e.preventDefault();
      startAxisDrag(axisHit, pt);
      return;
    }

    const faceHit = hitTestFace(pt);
    if (faceHit) {
      e.preventDefault();
      startFaceDrag(faceHit.faceIndex, faceHit.s, faceHit.t, e.shiftKey);
    }
  }

  function onMouseMove(e: MouseEvent): void {
    const pt = canvasPoint(e);

    if (alphaDragging) {
      e.preventDefault();
      applyAlphaFromPoint(pt);
      return;
    }

    if (dragAxis >= 0) {
      e.preventDefault();
      applyAxisDrag(pt);
      return;
    }

    if (dragFace >= 0) {
      e.preventDefault();
      applyFaceDrag(pt, e.shiftKey, e.altKey);
      return;
    }

    // Hover
    const axisHit = hitTestAxisHandle(pt);
    const faceHit = hitTestFace(pt);
    const newAxisHover = axisHit;
    const newFaceHover = axisHit >= 0 ? -1 : (faceHit ? faceHit.faceIndex : -1);

    if (newAxisHover !== state.hoveredAxisHandle || newFaceHover !== state.hoveredFace) {
      state.hoveredAxisHandle = newAxisHover;
      state.hoveredFace = newFaceHover;
      canvas.style.cursor = newAxisHover >= 0 ? 'grab' : newFaceHover >= 0 ? 'crosshair' : 'default';
      requestRender();
    }
  }

  function onMouseUp(_e: MouseEvent): void {
    cancelLongPress();
    alphaDragging = false;
    const wasDragging = dragAxis >= 0 || dragFace >= 0;
    endAxisDrag();
    endFaceDrag();
    if (wasDragging) {
      state.hoveredAxisHandle = -1;
      state.hoveredFace = -1;
      canvas.style.cursor = 'default';
      requestRender();
    }
  }

  // ── Touch events ──────────────────────────────────────────────────────

  function onTouchStart(e: TouchEvent): void {
    if (e.touches.length !== 1) return;
    const pt = canvasPoint(e.touches[0]);

    if (alphaEnabled()) {
      if (state.alphaMode) {
        if (distToDot(pt) <= DOT_HIT_R) { state.alphaMode = false; requestRender(); return; }
        if (inAlphaRing(pt)) { e.preventDefault(); alphaDragging = true; applyAlphaFromPoint(pt); return; }
        state.alphaMode = false; requestRender(); return;
      }
      if (distToDot(pt) <= DOT_HIT_R) { startLongPress(); }
    }

    const axisHit = hitTestAxisHandle(pt);
    if (axisHit >= 0) { e.preventDefault(); startAxisDrag(axisHit, pt); return; }

    const faceHit = hitTestFace(pt);
    if (faceHit) { e.preventDefault(); startFaceDrag(faceHit.faceIndex, faceHit.s, faceHit.t, false); }
  }

  function onTouchMove(e: TouchEvent): void {
    if (e.touches.length !== 1) return;
    const pt = canvasPoint(e.touches[0]);
    if (alphaDragging) { e.preventDefault(); applyAlphaFromPoint(pt); }
    else if (dragAxis >= 0) { e.preventDefault(); applyAxisDrag(pt); }
    else if (dragFace >= 0) { e.preventDefault(); applyFaceDrag(pt, false, false); }
  }

  function onTouchEnd(_e: TouchEvent): void {
    cancelLongPress();
    alphaDragging = false;
    endAxisDrag();
    endFaceDrag();
    requestRender();
  }

  // ── Keyboard ──────────────────────────────────────────────────────────

  function onKeyDown(e: KeyboardEvent): void {
    if (state.alphaMode) {
      if (e.key === 'Escape') { state.alphaMode = false; requestRender(); return; }
      if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
        e.preventDefault();
        onAlphaChange(Math.min(1, getAlpha() + (e.shiftKey ? 0.08 : 0.02)));
        requestRender();
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
        e.preventDefault();
        onAlphaChange(Math.max(0, getAlpha() - (e.shiftKey ? 0.08 : 0.02)));
        requestRender();
        return;
      }
    }
    const step = e.shiftKey ? 0.04 : 0.004;
    const dotVals = getDotValues();
    const ext = getBoxExtent();
    const dirs = getAxisDirections();
    let screenDx = 0, screenDy = 0;

    switch (e.key) {
      case 'ArrowRight': screenDx = 1; break;
      case 'ArrowLeft': screenDx = -1; break;
      case 'ArrowUp': screenDy = -1; break;
      case 'ArrowDown': screenDy = 1; break;
      default: return;
    }

    e.preventDefault();
    const newDot = { ...dotVals };
    const keys: (keyof Vec3)[] = ['x', 'y', 'z'];

    for (let i = 0; i < 3; i++) {
      const dot = screenDx * dirs[i].x + screenDy * dirs[i].y;
      if (Math.abs(dot) > 0.3) {
        const v = dotVals[keys[i]] + step * Math.sign(dot);
        newDot[keys[i]] = Math.max(0, Math.min(ext[keys[i]], v));
      }
    }

    setDotValues(newDot, getDotFace());
    requestRender();
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────

  canvas.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('touchstart', onTouchStart, { passive: false });
  canvas.addEventListener('touchmove', onTouchMove, { passive: false });
  canvas.addEventListener('touchend', onTouchEnd);
  canvas.addEventListener('keydown', onKeyDown);
  canvas.setAttribute('tabindex', '0');

  function destroy(): void {
    cancelLongPress();
    canvas.removeEventListener('mousedown', onMouseDown);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    canvas.removeEventListener('touchstart', onTouchStart);
    canvas.removeEventListener('touchmove', onTouchMove);
    canvas.removeEventListener('touchend', onTouchEnd);
    canvas.removeEventListener('keydown', onKeyDown);
  }

  return { state, destroy };
}
