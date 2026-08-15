import type {
  RGBColor, ColorMode, Vec3,
  PickerOptions, ColorOutput, ColorChangeCallback, BoxColorPicker,
} from './types';
import { AXIS_LABELS, AXIS_MAX } from './types';
import { rgbToHsb, hsbToRgb, rgbToOklch, rgbToHex, hexToRgb, rgbToValues, valuesToRgb, valuesToChannels } from './color-math';
import { createRenderContext, render, setBoxInvert, project, faceHitTest, FACES } from './box-renderer';
export { setBoxInvert };
import { createInteraction } from './interaction';
import cssText from './style.css?raw';

export type { RGBColor, ColorMode, ColorOutput, PickerOptions, BoxColorPicker };
/** shadcn 风格别名 */
export const createColorPicker = createBoxColorPicker;

let styleInjected = false;
/** 自动注入样式（单文件零依赖：无需外部 css） */
function injectStyle(): void {
  if (styleInjected || typeof document === 'undefined') return;
  styleInjected = true;
  const el = document.createElement('style');
  el.id = 'color-is-box-style';
  el.textContent = cssText;
  document.head.appendChild(el);
}

export function createBoxColorPicker(
  container: HTMLElement,
  options: PickerOptions = {},
): BoxColorPicker {
  const size = options.size ?? 300;
  const showControls = options.controls ?? true;
  const showInputs = options.showInputs ?? false;
  const showModeToggle = options.showModeToggle ?? false;
  const showCorners = options.showCorners ?? false;

  /** controls 模块回调（按需加载的输入框/模式/角按钮通过它驱动核心） */
  const controlsCtx = {
    mode: () => mode,
    switchMode: (m: ColorMode) => switchMode(m),
    onHexInput: (hex: string) => {
      const rgb = hexToRgb(hex);
      if (rgb) {
        dotValues = rgbToValues(boxInverted ? { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b } : rgb, mode);
        boxExtent = { x: Math.max(boxExtent.x, dotValues.x), y: Math.max(boxExtent.y, dotValues.y), z: Math.max(boxExtent.z, dotValues.z) };
        emitChange(); updateUI(); scheduleRender();
      } else { updateUI(); }
    },
    onChannelInput: (i: number, val: number, max: number) => {
      const clamped = Math.max(0, Math.min(max, val));
      const keys: (keyof Vec3)[] = ['x', 'y', 'z'];
      const normalized = clamped / max;
      if (boxInverted) {
        const dispVals = { ...dotValues, [keys[i]]: normalized };
        const dispRgb = valuesToRgb(dispVals, mode);
        dotValues = rgbToValues({ r: 255 - dispRgb.r, g: 255 - dispRgb.g, b: 255 - dispRgb.b }, mode);
      } else {
        dotValues = { ...dotValues, [keys[i]]: normalized };
      }
      if (normalized > boxExtent[keys[i]]) boxExtent = { ...boxExtent, [keys[i]]: normalized };
      emitChange(); updateUI(); scheduleRender();
    },
    getRgbForCopy: () => valuesToRgb(dotValues, mode),
    onRandom: (rgb: RGBColor) => setColor(rgb),
    onReset: () => setColor({ r: 0, g: 0, b: 0 }),
  };
  let mode: ColorMode = options.mode ?? 'rgb';

  // boxExtent: the box dimensions (0–1 per axis), controlled by axis handles.
  // dotValues: the selected color (0–1 per axis), controlled by face clicks.
  // dotFace: which face the dot is placed on (0=top, 1=right, 2=left).
  const initialColor = options.initialColor
    ? rgbToValues(options.initialColor, mode)
    : { x: 0.7, y: 0.4, z: 0.85 };

  let boxExtent: Vec3 = { x: 1, y: 1, z: 1 };
  let dotValues: Vec3 = { ...initialColor };
  let dotFace = 0; // start on the top face

  // ── Alpha（环形 alpha 交互，仅当提供 options.alpha 时启用）──
  const alphaEnabled = (): boolean => options.alpha !== undefined;
  let alpha = Math.max(0, Math.min(1, options.alpha ?? 1));
  function setAlpha(a: number): void {
    const v = Math.max(0, Math.min(1, a));
    if (v === alpha) return;
    alpha = v;
    emitChange();
    updateUI();
    scheduleRender();
  }

  // 旋转立方体（旋钮）：修改当前颜色的饱和度（HSV 中间转换，保持色相/明度不变）
  function setSaturation(s: number): void {
    const rgb = displayRgb();
    const hsb = rgbToHsb(rgb);
    hsb.s = Math.max(0, Math.min(100, s * 100));
    const newRgb = hsbToRgb(hsb);
    setColor(boxInverted ? { r: 255 - newRgb.r, g: 255 - newRgb.g, b: 255 - newRgb.b } : newRgb);
  }

  const listeners: Set<ColorChangeCallback> = new Set();

  // ── DOM ───────────────────────────────────────────────────────────────

  injectStyle();
  const root = document.createElement('div');
  root.className = 'box-picker';

  const canvas = document.createElement('canvas');
  canvas.style.cursor = 'grab'; // 暗示可拖拽（顶点拖轴 / 面内拖点）
  root.appendChild(canvas);

  const rc = createRenderContext(canvas, size);

  // Controls (hex, swatch, mode toggle, channels) — only if enabled
  let swatch: HTMLDivElement | null = null;
  const controls = document.createElement('div');
  controls.className = 'box-picker-controls';
  swatch = document.createElement('div');
  swatch.className = 'box-picker-swatch';
  controls.appendChild(swatch);
  root.appendChild(controls);
  // 可选控件（输入框/模式按钮/角按钮）按需加载——核心包保持精简
  if (showInputs || showModeToggle || showCorners) {
    import('./controls').then((m) => {
      m.createControls(controls, controlsCtx, { showInputs, showModeToggle, showCorners });
    }).catch(() => { /* ignore */ });
  }

  container.appendChild(root);

  // ── Interaction ───────────────────────────────────────────────────────

  const interaction = createInteraction(
    canvas,
    () => boxExtent,
    (ext) => { boxExtent = ext; },
    () => dotValues,
    (dv, face) => { dotValues = dv; dotFace = face; emitChange(); updateUI(); },
    () => dotFace,
    () => rc.scale,
    () => rc.center,
    scheduleRender,
    alphaEnabled,
    setAlpha,
    () => alpha,
    () => project(dotValues, rc.scale, rc.center),
    setSaturation,
    () => rgbToHsb(displayRgb()).s / 100,
  );

  let boxInverted = false;
  let showAxisLabels = true;
  // 鼠标进入/离开时随机切换 RGB 文本显示状态（无需按钮，多试几次即可看到两种状态）
  canvas.addEventListener('mouseenter', () => { showAxisLabels = true; scheduleRender(); });
  canvas.addEventListener('mouseleave', () => { showAxisLabels = false; scheduleRender(); });

  // 双击翻转颜色：整个立方体渐变取反 + 当前色取 RGB 补色（白色 ↔ 黑色；三个模式均生效）
  canvas.addEventListener('dblclick', () => {
    boxInverted = !boxInverted;
    setBoxInvert(boxInverted);
    // 指示器位置不动：反转后按反转布局取该位置色值（色块/数值/HEX 显示补色）
    emitChange();
    updateUI();
    scheduleRender();
  });

  function switchMode(newMode: ColorMode): void {
    if (newMode === mode) return;
    const rgb = valuesToRgb(dotValues, mode);
    const oldDot = { ...dotValues };
    const oldExt = { ...boxExtent };
    mode = newMode;
    const newDot = rgbToValues(rgb, mode);
    // Keep box at full extent for new mode
    const newExt = { x: 1, y: 1, z: 1 };
    // 先落地新坐标再刷新 UI：预览块立即显示新模式的正确颜色（修复切换瞬间用旧 RGB 坐标按新模式解读导致闪红/粉）
    dotValues = newDot;
    boxExtent = newExt;

    animateTransition(oldDot, newDot, oldExt, newExt, 300);
    updateUI();
  }

  // ── Animation ─────────────────────────────────────────────────────────

  let animationId: number | null = null;

  function animateTransition(
    fromDot: Vec3, toDot: Vec3,
    fromExt: Vec3, toExt: Vec3,
    durationMs: number,
  ): void {
    if (animationId !== null) cancelAnimationFrame(animationId);
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const ease = 1 - Math.pow(1 - t, 3);

      dotValues = {
        x: fromDot.x + (toDot.x - fromDot.x) * ease,
        y: fromDot.y + (toDot.y - fromDot.y) * ease,
        z: fromDot.z + (toDot.z - fromDot.z) * ease,
      };
      boxExtent = {
        x: fromExt.x + (toExt.x - fromExt.x) * ease,
        y: fromExt.y + (toExt.y - fromExt.y) * ease,
        z: fromExt.z + (toExt.z - fromExt.z) * ease,
      };

      renderFrame();
      emitChange();
      // 数值框在动画期间保持新模式下的目标值（不随插值跳动）

      if (t < 1) {
        animationId = requestAnimationFrame(tick);
      } else {
        animationId = null;
      }
    }

    animationId = requestAnimationFrame(tick);
  }

  // ── Rendering ─────────────────────────────────────────────────────────

  let renderScheduled = false;

  function scheduleRender(): void {
    if (renderScheduled) return;
    renderScheduled = true;
    requestAnimationFrame(() => {
      renderScheduled = false;
      renderFrame();
    });
  }

  function renderFrame(): void {
    render(rc, boxExtent, dotValues, dotFace, mode, interaction.state, showAxisLabels, { active: interaction.state.alphaMode, alpha, rgb: displayRgb() });
  }

  // ── UI updates ────────────────────────────────────────────────────────

  function mixChannel(c: number, target: number, amt: number): number { return Math.round(c + (target - c) * amt); }
  function shadeColor(rgb: { r: number; g: number; b: number }, amt: number): string {
    const t = amt > 0 ? 255 : 0;
    const a = Math.abs(amt);
    return rgbToHex({ r: mixChannel(rgb.r, t, a), g: mixChannel(rgb.g, t, a), b: mixChannel(rgb.b, t, a) });
  }
  /** 实时色块：等距 3D 立方体图标（顶面亮/左面原色/右面暗），用当前颜色着色。 */
  function renderSwatchBox(el: HTMLElement, hex: string): void {
    const rgb = hexToRgb(hex) || { r: 128, g: 128, b: 128 };
    const top = shadeColor(rgb, 0.35);
    const left = shadeColor(rgb, 0);
    const right = shadeColor(rgb, -0.35);
    el.innerHTML = `<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${top}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${left}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${right}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`;
    el.style.backgroundColor = 'transparent';
  }

  function copyToClipboard(text: string): void {
    try {
      navigator.clipboard.writeText(text).catch(() => { /* ignore */ });
    } catch { /* ignore */ }
  }
  /** 点击数值框的复制反馈：边框闪绿 */
  function flashInput(el: HTMLInputElement | null): void {
    if (!el) return;
    el.style.borderColor = '#4ade80';
    el.style.boxShadow = '0 0 0 2px rgba(74,222,128,.35)';
    setTimeout(() => { el.style.borderColor = ''; el.style.boxShadow = ''; }, 500);
  }

  function displayRgb(): RGBColor {
    const rgb = valuesToRgb(dotValues, mode);
    return boxInverted ? { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b } : rgb;
  }
  function updateUI(): void {
    if (!showControls) return;
    const rgb = displayRgb();
    const hex = rgbToHex(rgb);
    if (swatch) renderSwatchBox(swatch, hex);
    const hexEl = root.querySelector<HTMLInputElement>('.box-picker-hex');
    if (hexEl) hexEl.value = hex;
    updateChannelValues();
    if ((root as any)._updateModeButtons) (root as any)._updateModeButtons();
  }

  function updateChannelValues(): void {
    if (!showControls) return;
    const labels = AXIS_LABELS[mode];
    const dispValues = boxInverted ? rgbToValues(displayRgb(), mode) : dotValues;
    const channels = valuesToChannels(dispValues, mode);
    const inputs = root.querySelectorAll<HTMLInputElement>('.box-picker-channel input');
    const lbls = root.querySelectorAll<HTMLLabelElement>('.box-picker-channel label');
    for (let i = 0; i < inputs.length; i++) {
      lbls[i].textContent = labels[i];
      lbls[i].style.color = '';
      lbls[i].style.textShadow = 'none';
      inputs[i].value = String(channels[i]);
    }
  }

  // ── Events ────────────────────────────────────────────────────────────

  function emitChange(): void {
    const rgb = displayRgb();
    const output: ColorOutput = {
      rgb,
      hsb: rgbToHsb(rgb),
      oklch: rgbToOklch(rgb),
      hex: rgbToHex(rgb),
      alpha,
    };
    for (const cb of listeners) cb(output);
  }

  function getColor(): ColorOutput {
    const rgb = valuesToRgb(dotValues, mode);
    return { rgb, hsb: rgbToHsb(rgb), oklch: rgbToOklch(rgb), hex: rgbToHex(rgb) };
  }

  // ── Initialize ────────────────────────────────────────────────────────

  updateUI();
  renderFrame();

  // ── Public API ────────────────────────────────────────────────────────

  const setColor = (color: RGBColor): void => {
      dotValues = rgbToValues(color, mode);
      boxExtent = {
        x: Math.max(boxExtent.x, dotValues.x),
        y: Math.max(boxExtent.y, dotValues.y),
        z: Math.max(boxExtent.z, dotValues.z),
      };
      // 重判指示器所在面：确保新位置（如 Reset 回中心）正确显示
      const pt = project(dotValues, rc.scale, rc.center);
      dotFace = -1;
      for (let fi = FACES.length - 1; fi >= 0; fi--) {
        if (faceHitTest(fi, pt, boxExtent, rc.scale, rc.center)) { dotFace = fi; break; }
      }
      emitChange();
      updateUI();
      scheduleRender();

  };

  return {
    getColor,
    getMode: () => mode,

    setColor,
    setAlpha,
    getAlpha: () => alpha,
    setMode(m: ColorMode) {
      switchMode(m);
    },
    on(event: 'change', callback: ColorChangeCallback) {
      listeners.add(callback);
    },
    off(event: 'change', callback: ColorChangeCallback) {
      listeners.delete(callback);
    },
    destroy() {
      interaction.destroy();
      if (animationId !== null) cancelAnimationFrame(animationId);
      container.removeChild(root);
    },
  };
}
