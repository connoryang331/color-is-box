import type { Vec2, Vec3, ColorMode } from './types';
import { AXIS_LABELS } from './types';
import { faceColor, valuesToRgb, rgbToHex } from './color-math';

const ISO_ANGLE = Math.PI / 6; // 30°
const COS30 = Math.cos(ISO_ANGLE);
const SIN30 = Math.sin(ISO_ANGLE);

/** Project a 3D point to 2D screen coordinates. */
let invertMode = false;
/** 切换整个立方体的颜色翻转（所有面渐变取反，白↔黑） */
export function setBoxInvert(v: boolean): void { invertMode = v; }

export function project(p: Vec3, scale: number, center: Vec2): Vec2 {
  return {
    x: center.x + (p.y - p.x) * COS30 * scale,
    y: center.y + p.z * scale - (p.x + p.y) * SIN30 * scale,
  };
}

function boxVertices(ext: Vec3): Vec3[] {
  const { x: w, y: h, z: d } = ext;
  return [
    { x: 0, y: 0, z: 0 },
    { x: w, y: 0, z: 0 },
    { x: 0, y: h, z: 0 },
    { x: 0, y: 0, z: d },
    { x: w, y: h, z: 0 },
    { x: w, y: 0, z: d },
    { x: 0, y: h, z: d },
    { x: w, y: h, z: d },
  ];
}

export interface FaceDef {
  quad: [number, number, number, number];
  fixedAxis: number;
  uAxis: number;
  vAxis: number;
}

export const FACES: FaceDef[] = [
  // Top face — z fixed, varying x and y
  { quad: [3, 5, 7, 6], fixedAxis: 2, uAxis: 0, vAxis: 1 },
  // Right face — x fixed, varying y and z
  { quad: [1, 4, 7, 5], fixedAxis: 0, uAxis: 1, vAxis: 2 },
  // Left face — y fixed, varying x and z
  { quad: [2, 4, 7, 6], fixedAxis: 1, uAxis: 0, vAxis: 2 },
];

const FACE_RES = 64; // 128→64: 逐像素渐变计算量降为 1/4，300px 画布经 drawImage 平滑放大，视觉无感知

export interface RenderContext {
  ctx: CanvasRenderingContext2D;
  scale: number;
  center: Vec2;
  width: number;
  height: number;
}

export interface RenderState {
  hoveredAxisHandle: number;
  draggingAxisHandle: number;
  hoveredFace: number;
  draggingFace: number;
}

export const DEFAULT_RENDER_STATE: RenderState = {
  hoveredAxisHandle: -1,
  draggingAxisHandle: -1,
  hoveredFace: -1,
  draggingFace: -1,
};

export function createRenderContext(canvas: HTMLCanvasElement, viewportSize: number): RenderContext {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = viewportSize * dpr;
  canvas.height = viewportSize * 0.84 * dpr; // 投影 0.64×viewport，顶部/底部预留标签与投影空间
  canvas.style.width = `${viewportSize}px`;
  canvas.style.height = `${viewportSize * 0.84}px`;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(dpr, dpr);

  return {
    ctx,
    scale: viewportSize * 0.32,
    center: { x: viewportSize / 2, y: viewportSize * 0.4 },
    width: viewportSize,
    height: viewportSize * 0.84,
  };
}

/**
 * Render the box.
 *
 * @param boxExtent  The box size along each axis (0–1), set by axis handles.
 * @param dotValues   The selected color (0–1 per axis), determines dot position.
 * @param dotFace     Which face the dot is on (0/1/2), or -1 for none.
 */
export function render(
  rc: RenderContext,
  boxExtent: Vec3,
  dotValues: Vec3,
  dotFace: number,
  mode: ColorMode,
  rs: RenderState,
  showLabels = true,
): void {
  const { ctx, scale, center, width, height } = rc;
  ctx.save();
  ctx.clearRect(0, 0, width, height);

  const verts2d = boxVertices(boxExtent).map(v => project(v, scale, center));


  drawAxisLines(ctx, scale, center, mode);
  // 边框阴影：贴合立方体外轮廓的柔和阴影（类似 CSS box-shadow 贴元素）
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.35)';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  drawFaces(ctx, verts2d, boxExtent, mode);
  ctx.restore();
  if (showLabels) drawAxisLabels(ctx, mode, scale, center);
  // 顶点圆点指示器已移除（drawAxisHandles 不再绘制）

  // Draw the color dot on the face
  if (dotFace >= 0) {
    const rgb = valuesToRgb(dotValues, mode);
    const dotRgb = invertMode ? { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b } : rgb; // 内芯 = 该位置反转布局下的色值（与色块/数值一致）
    const dotPos = project(dotValues, scale, center);
    drawColorDot(ctx, dotPos, dotRgb);
  }

  ctx.restore();
}

// ── Axis lines ────────────────────────────────────────────────────────────

const AXIS_COLORS: Record<ColorMode, [string, string, string]> = {
  rgb: ['rgba(255,100,100,0.4)', 'rgba(100,255,100,0.4)', 'rgba(100,150,255,0.4)'],
  hsb: ['rgba(255,100,100,0.4)', 'rgba(100,255,100,0.4)', 'rgba(100,150,255,0.4)'],
  oklch: ['rgba(220,220,220,0.4)', 'rgba(255,180,60,0.4)', 'rgba(180,120,255,0.4)'],
};

const HANDLE_COLORS: Record<ColorMode, [string, string, string]> = {
  rgb: ['rgba(255,100,100,0.9)', 'rgba(100,255,100,0.9)', 'rgba(100,150,255,0.9)'],
  hsb: ['rgba(255,100,100,0.9)', 'rgba(100,255,100,0.9)', 'rgba(100,150,255,0.9)'],
  oklch: ['rgba(220,220,220,0.9)', 'rgba(255,180,60,0.9)', 'rgba(180,120,255,0.9)'],
};

function drawAxisLines(ctx: CanvasRenderingContext2D, scale: number, center: Vec2, mode: ColorMode): void {
  const origin = project({ x: 0, y: 0, z: 0 }, scale, center);
  const tips = [
    project({ x: 1, y: 0, z: 0 }, scale, center),
    project({ x: 0, y: 1, z: 0 }, scale, center),
    project({ x: 0, y: 0, z: 1 }, scale, center),
  ];
  const colors = AXIS_COLORS[mode];
  ctx.lineWidth = 1.5;
  for (let i = 0; i < tips.length; i++) {
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(tips[i].x, tips[i].y);
    ctx.strokeStyle = colors[i];
    ctx.stroke();
  }
}

// ── Back edges ────────────────────────────────────────────────────────────

function drawBackEdges(ctx: CanvasRenderingContext2D, v: Vec2[]): void {
  const edges: [number, number][] = [[1, 3], [2, 3], [1, 2]];
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  for (const [a, b] of edges) {
    ctx.beginPath();
    ctx.moveTo(v[a].x, v[a].y);
    ctx.lineTo(v[b].x, v[b].y);
    ctx.stroke();
  }
}

// ── Faces ─────────────────────────────────────────────────────────────────

function drawFaces(
  ctx: CanvasRenderingContext2D,
  verts2d: Vec2[],
  boxExtent: Vec3,
  mode: ColorMode,
): void {
  const ext = [boxExtent.x, boxExtent.y, boxExtent.z];

  for (let fi = 0; fi < FACES.length; fi++) {
    const face = FACES[fi];
    const fixedVal = ext[face.fixedAxis];
    const uMax = ext[face.uAxis];
    const vMax = ext[face.vAxis];

    if (uMax < 0.002 && vMax < 0.002) continue;

    const corners = face.quad.map(i => verts2d[i]);
    renderFaceGradient(ctx, corners, face.fixedAxis, fixedVal, uMax, vMax, mode);

  }
}

function renderFaceGradient(
  ctx: CanvasRenderingContext2D,
  corners: Vec2[],
  fixedAxis: number,
  fixedVal: number,
  uMax: number,
  vMax: number,
  mode: ColorMode,
): void {
  const res = FACE_RES;
  const offscreen = document.createElement('canvas');
  offscreen.width = res;
  offscreen.height = res;
  const offCtx = offscreen.getContext('2d')!;
  const imgData = offCtx.createImageData(res, res);
  const data = imgData.data;

  for (let py = 0; py < res; py++) {
    for (let px = 0; px < res; px++) {
      const u = (px / (res - 1)) * uMax;
      const v = (py / (res - 1)) * vMax;
      const rgb = faceColor(fixedAxis, u, v, fixedVal, mode, invertMode);
      const idx = (py * res + px) * 4;
      data[idx] = rgb.r;
      data[idx + 1] = rgb.g;
      data[idx + 2] = rgb.b;
      data[idx + 3] = 255;
    }
  }
  offCtx.putImageData(imgData, 0, 0);

  const p00 = corners[0];
  const p10 = corners[1];
  const p11 = corners[2];
  const p01 = corners[3];
  const ax = p10.x - p00.x;
  const ay = p10.y - p00.y;
  const bx = p01.x - p00.x;
  const by = p01.y - p00.y;

  ctx.save();

  // Clip to the exact parallelogram so no antialiased fringe
  // bleeds at the seams between adjacent faces.
  ctx.beginPath();
  ctx.moveTo(p00.x, p00.y);
  ctx.lineTo(p10.x, p10.y);
  ctx.lineTo(p11.x, p11.y);
  ctx.lineTo(p01.x, p01.y);
  ctx.closePath();
  ctx.clip();

  // Draw the texture slightly oversized so it fills the clip
  // region edge-to-edge without any sub-pixel gaps.
  const extend = 2.0 / res;
  const ox = p00.x - ax * extend - bx * extend;
  const oy = p00.y - ay * extend - by * extend;
  const sx = 1 + 2 * extend;
  const sy = 1 + 2 * extend;

  ctx.transform(
    (ax * sx) / res, (ay * sx) / res,
    (bx * sy) / res, (by * sy) / res,
    ox, oy,
  );
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(offscreen, 0, 0);
  ctx.restore();
}

// ── Front edges ───────────────────────────────────────────────────────────

function drawFrontEdges(ctx: CanvasRenderingContext2D, v: Vec2[]): void {
  const edges: [number, number][] = [[7, 4], [7, 5], [7, 6]];
  ctx.strokeStyle = 'rgba(255,255,255,0.3)';
  ctx.lineWidth = 1;
  for (const [a, b] of edges) {
    ctx.beginPath();
    ctx.moveTo(v[a].x, v[a].y);
    ctx.lineTo(v[b].x, v[b].y);
    ctx.stroke();
  }
  const outerEdges: [number, number][] = [
    [3, 5], [5, 1], [1, 4], [4, 2], [2, 6], [6, 3],
  ];
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  for (const [a, b] of outerEdges) {
    ctx.beginPath();
    ctx.moveTo(v[a].x, v[a].y);
    ctx.lineTo(v[b].x, v[b].y);
    ctx.stroke();
  }
}

// ── Labels ────────────────────────────────────────────────────────────────

function drawAxisLabels(ctx: CanvasRenderingContext2D, mode: ColorMode, scale: number, center: Vec2): void {
  const labels = AXIS_LABELS[mode];
  const positions = invertMode
    ? [
        project({ x: 0, y: 1, z: 1 }, scale, center), // 反转后红色出现在原青区（右下）：R 文本跟随
        project({ x: 1, y: 0, z: 1 }, scale, center), // 反转后绿色出现在原品红区（左下）：G 文本跟随
        project({ x: 1, y: 1, z: 0 }, scale, center), // 反转后蓝色出现在原黄区（顶部）：B 文本跟随
      ]
    : [
        project({ x: 1, y: 0, z: 0 }, scale, center),
        project({ x: 0, y: 1, z: 0 }, scale, center),
        project({ x: 0, y: 0, z: 1 }, scale, center),
      ];
  const offsets: Vec2[] = invertMode
    ? [{ x: 14, y: 6 }, { x: -14, y: 6 }, { x: 0, y: -10 }]
    : [{ x: -16, y: -6 }, { x: 16, y: -6 }, { x: 0, y: 12 }];
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // 文字阴影（柔和投影）
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.35)';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  // 顶点字母：统一灰色加粗，固定绘制（不跟随顶点颜色）
  for (let i = 0; i < 3; i++) {
    const tx = positions[i].x + offsets[i].x;
    const ty = positions[i].y + offsets[i].y;
    ctx.globalAlpha = 0.9;
    ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.fillStyle = '#888888';
    ctx.fillText(labels[i], tx, ty);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

// ── Axis handles ──────────────────────────────────────────────────────────

function drawAxisHandles(ctx: CanvasRenderingContext2D, verts2d: Vec2[], rs: RenderState, mode: ColorMode): void {
  const handleVerts = [1, 2, 3];
  const colors = HANDLE_COLORS[mode];

  for (let i = 0; i < 3; i++) {
    const pos = verts2d[handleVerts[i]];
    const hovered = rs.hoveredAxisHandle === i;
    const dragging = rs.draggingAxisHandle === i;
    const radius = dragging ? 8 : hovered ? 7 : 5;

    if (hovered || dragging) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, radius + 5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius + 2, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = colors[i];
    ctx.fill();
  }
}

// ── Color dot ─────────────────────────────────────────────────────────────

function drawColorDot(ctx: CanvasRenderingContext2D, pos: Vec2, rgb: { r: number; g: number; b: number }): void {
  // 圆形选择指示器：外环白 + 内部当前色
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
  ctx.fillStyle = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
  ctx.fill();
}

// ── Geometry helpers ──────────────────────────────────────────────────────

export function getAxisHandlePos(axisIndex: number, boxExtent: Vec3, scale: number, center: Vec2): Vec2 {
  const positions: Vec3[] = [
    { x: boxExtent.x, y: 0, z: 0 },
    { x: 0, y: boxExtent.y, z: 0 },
    { x: 0, y: 0, z: boxExtent.z },
  ];
  return project(positions[axisIndex], scale, center);
}

export function getAxisDirections(): Vec2[] {
  const origin: Vec2 = { x: 0, y: 0 };
  const tips = [
    project({ x: 1, y: 0, z: 0 }, 1, origin),
    project({ x: 0, y: 1, z: 0 }, 1, origin),
    project({ x: 0, y: 0, z: 1 }, 1, origin),
  ];
  return tips.map(t => {
    const len = Math.sqrt(t.x * t.x + t.y * t.y);
    return len > 0 ? { x: t.x / len, y: t.y / len } : { x: 0, y: 0 };
  });
}

/**
 * Hit-test a point against a face's visible area (within boxExtent).
 * Returns (s, t) as fractions 0–1 of the face's current extent.
 * s=0,t=0 is the face origin; s=1,t=1 is the corner at the near vertex.
 */
export function faceHitTest(
  faceIndex: number,
  point: Vec2,
  boxExtent: Vec3,
  scale: number,
  center: Vec2,
): { s: number; t: number } | null {
  const face = FACES[faceIndex];
  const ext = [boxExtent.x, boxExtent.y, boxExtent.z];
  const uMax = ext[face.uAxis];
  const vMax = ext[face.vAxis];

  // Skip degenerate faces
  if (uMax < 0.002 || vMax < 0.002) return null;

  // Face origin in 3D: the corner where both varying axes are 0
  const faceOrigin: Vec3 = { x: 0, y: 0, z: 0 };
  const keys: (keyof Vec3)[] = ['x', 'y', 'z'];
  (faceOrigin as any)[keys[face.fixedAxis]] = ext[face.fixedAxis];

  // Basis vectors spanning the face (in 3D, scaled to boxExtent)
  const uEnd: Vec3 = { ...faceOrigin };
  (uEnd as any)[keys[face.uAxis]] = uMax;
  const vEnd: Vec3 = { ...faceOrigin };
  (vEnd as any)[keys[face.vAxis]] = vMax;

  const O = project(faceOrigin, scale, center);
  const U = project(uEnd, scale, center);
  const V = project(vEnd, scale, center);

  const ax = U.x - O.x;
  const ay = U.y - O.y;
  const bx = V.x - O.x;
  const by = V.y - O.y;

  const det = ax * by - ay * bx;
  if (Math.abs(det) < 1e-6) return null;

  const dx = point.x - O.x;
  const dy = point.y - O.y;
  const s = (dx * by - dy * bx) / det;
  const t = (dy * ax - dx * ay) / det;

  // Small tolerance for edge clicks
  if (s < -0.05 || s > 1.05 || t < -0.05 || t > 1.05) return null;

  return {
    s: Math.max(0, Math.min(1, s)),
    t: Math.max(0, Math.min(1, t)),
  };
}

/**
 * Like faceHitTest but always returns a result (clamped to 0–1),
 * even when the cursor is far outside the face. Used with Option-drag
 * to lock the dot to the current face.
 */
export function faceHitTestUnclamped(
  faceIndex: number,
  point: Vec2,
  boxExtent: Vec3,
  scale: number,
  center: Vec2,
): { s: number; t: number } | null {
  const face = FACES[faceIndex];
  const ext = [boxExtent.x, boxExtent.y, boxExtent.z];
  const uMax = ext[face.uAxis];
  const vMax = ext[face.vAxis];

  if (uMax < 0.002 || vMax < 0.002) return null;

  const faceOrigin: Vec3 = { x: 0, y: 0, z: 0 };
  const keys: (keyof Vec3)[] = ['x', 'y', 'z'];
  (faceOrigin as any)[keys[face.fixedAxis]] = ext[face.fixedAxis];

  const uEnd: Vec3 = { ...faceOrigin };
  (uEnd as any)[keys[face.uAxis]] = uMax;
  const vEnd: Vec3 = { ...faceOrigin };
  (vEnd as any)[keys[face.vAxis]] = vMax;

  const O = project(faceOrigin, scale, center);
  const U = project(uEnd, scale, center);
  const V = project(vEnd, scale, center);

  const ax = U.x - O.x;
  const ay = U.y - O.y;
  const bx = V.x - O.x;
  const by = V.y - O.y;

  const det = ax * by - ay * bx;
  if (Math.abs(det) < 1e-6) return null;

  const dx = point.x - O.x;
  const dy = point.y - O.y;
  const s = (dx * by - dy * bx) / det;
  const t = (dy * ax - dx * ay) / det;

  return {
    s: Math.max(0, Math.min(1, s)),
    t: Math.max(0, Math.min(1, t)),
  };
}
