import type {
  RGBColor, ColorMode, Vec3,
  PickerOptions, ColorOutput, ColorChangeCallback, BoxColorPicker,
} from './types';
import { AXIS_LABELS, AXIS_MAX } from './types';
import { rgbToHsb, rgbToOklch, rgbToHex, hexToRgb, rgbToValues, valuesToRgb, valuesToChannels } from './color-math';
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
  let hexInput: HTMLInputElement | null = null;
  const channelInputs: HTMLInputElement[] = [];
  const channelLabels: HTMLLabelElement[] = [];

  if (showControls) {
    const controls = document.createElement('div');
    controls.className = 'box-picker-controls';

    swatch = document.createElement('div');
    swatch.className = 'box-picker-swatch';

    hexInput = document.createElement('input');
    hexInput.className = 'box-picker-hex';
    hexInput.type = 'text';
    hexInput.spellcheck = false;


    const modeToggle = document.createElement('div');
    modeToggle.className = 'box-picker-mode-toggle';
    const rgbBtn = document.createElement('button');
    rgbBtn.textContent = 'RGB';
    const hsbBtn = document.createElement('button');
    hsbBtn.textContent = 'HSB';
    const oklchBtn = document.createElement('button');
    oklchBtn.textContent = 'OKLCH';
    modeToggle.appendChild(oklchBtn);
    modeToggle.appendChild(rgbBtn);
    modeToggle.appendChild(hsbBtn);



    rgbBtn.addEventListener('click', () => switchMode('rgb'));
    hsbBtn.addEventListener('click', () => switchMode('hsb'));
    oklchBtn.addEventListener('click', () => switchMode('oklch'));

    hexInput.addEventListener('change', () => {
      const rgb = hexToRgb(hexInput!.value);
      if (rgb) {
        dotValues = rgbToValues(boxInverted ? { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b } : rgb, mode);
        boxExtent = {
          x: Math.max(boxExtent.x, dotValues.x),
          y: Math.max(boxExtent.y, dotValues.y),
          z: Math.max(boxExtent.z, dotValues.z),
        };
        emitChange();
        updateUI();
        scheduleRender();
      } else {
        updateUI();
      }
    });

    // 点击 hex 框 → 复制 hex 数值（仍可输入修改）
    hexInput.addEventListener('click', () => {
      const rgbNow = valuesToRgb(dotValues, mode);
      copyToClipboard(rgbToHex(rgbNow) || '#ffffff');
      flashInput(hexInput);
    });

    // Channel displays
    const channelRow = document.createElement('div');
    channelRow.className = 'box-picker-channels';

    for (let i = 0; i < 3; i++) {
      const ch = document.createElement('div');
      ch.className = 'box-picker-channel';
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'text';
      input.inputMode = 'numeric';
      ch.appendChild(label);
      ch.appendChild(input);
      channelRow.appendChild(ch);
      channelInputs.push(input);
      channelLabels.push(label);

      input.addEventListener('change', () => {
        const max = AXIS_MAX[mode];
        const val = parseFloat(input.value);
        if (isNaN(val)) { updateUI(); return; }
        const clamped = Math.max(0, Math.min(max[i], val));
        const keys: (keyof Vec3)[] = ['x', 'y', 'z'];
        const normalized = clamped / max[i];
        if (boxInverted) {
          // 输入的是反转布局的显示值：先还原几何坐标（显示 rgb 取反再映射回当前模式）
          const dispVals = { ...dotValues, [keys[i]]: normalized };
          const dispRgb = valuesToRgb(dispVals, mode);
          dotValues = rgbToValues({ r: 255 - dispRgb.r, g: 255 - dispRgb.g, b: 255 - dispRgb.b }, mode);
        } else {
          dotValues = { ...dotValues, [keys[i]]: normalized };
        }
        if (normalized > boxExtent[keys[i]]) {
          boxExtent = { ...boxExtent, [keys[i]]: normalized };
        }
        emitChange();
        updateUI();
        scheduleRender();
      });

      // 点击任意 RGB 数值框 → 复制所有 RGB 数值（仍可输入修改）
      input.addEventListener('click', () => {
        const rgbNow = valuesToRgb(dotValues, mode);
        copyToClipboard(`${rgbNow.r}, ${rgbNow.g}, ${rgbNow.b}`);
        flashInput(input);
      });
    }
    // 布局：第一排实时色块 / 第二排 hex + 通道数值 / 第三排模式切换
    controls.appendChild(swatch);
    const hexRow = document.createElement('div');
    hexRow.className = 'box-picker-hexrow';
    // hex 框上方加 Hex 标签，与 R/G/B 标签平齐
    const hexWrap = document.createElement('div');
    hexWrap.className = 'box-picker-hexwrap';
    const hexLabel = document.createElement('label');
    hexLabel.textContent = 'Hex';
    hexWrap.appendChild(hexLabel);
    hexWrap.appendChild(hexInput);
    // RGB 数值框在左（宽 = 模式区 2/3），HEX 在右（剩余 1/3）
    hexRow.appendChild(channelRow);
    hexRow.appendChild(hexWrap);
    controls.appendChild(hexRow);
    controls.appendChild(modeToggle);
    root.appendChild(controls);
    // 第二排宽度与模式按钮区对齐（RGB 区 2/3 + HEX 区 1/3）；rAF 重测确保布局后测量
    try {
      const toggle = controls.querySelector('.box-picker-mode-toggle') as HTMLElement | null;
      const syncRow = (): void => { if (toggle && toggle.offsetWidth > 0) hexRow.style.width = toggle.offsetWidth + 'px'; };
      syncRow();
      requestAnimationFrame(() => syncRow());
    } catch { /* ignore */ }

    const updateModeButtons = () => {
      rgbBtn.classList.toggle('active', mode === 'rgb');
      hsbBtn.classList.toggle('active', mode === 'hsb');
      oklchBtn.classList.toggle('active', mode === 'oklch');
    };
    updateModeButtons();
    // Expose for updateUI
    (root as any)._updateModeButtons = updateModeButtons;
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
  );

  let boxInverted = false;
  let showAxisLabels = true;
  // 鼠标进入/离开时随机切换 RGB 文本显示状态（无需按钮，多试几次即可看到两种状态）
  canvas.addEventListener('mouseenter', () => { showAxisLabels = Math.random() < 0.5; scheduleRender(); });
  canvas.addEventListener('mouseleave', () => { showAxisLabels = Math.random() < 0.5; scheduleRender(); });

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

  // 呼吸动画循环：弹层打开期间持续低频重绘（小画布成本可接受），关闭即停
  let breathRunning = true;
  (function breathTick(): void {
    if (!breathRunning) return;
    scheduleRender();
    requestAnimationFrame(breathTick);
  })();

  function renderFrame(): void {
    render(rc, boxExtent, dotValues, dotFace, mode, interaction.state, showAxisLabels);
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
    if (hexInput) hexInput.value = hex;
    updateChannelValues();
    if ((root as any)._updateModeButtons) (root as any)._updateModeButtons();
  }

  function updateChannelValues(): void {
    if (!showControls) return;
    const labels = AXIS_LABELS[mode];
    const dispValues = boxInverted ? rgbToValues(displayRgb(), mode) : dotValues;
    const channels = valuesToChannels(dispValues, mode);
    for (let i = 0; i < channelInputs.length; i++) {
      channelLabels[i].textContent = labels[i];
      channelLabels[i].style.color = ''; // 标签统一默认灰（不需要通道色）
      channelLabels[i].style.textShadow = 'none';
      channelInputs[i].value = String(channels[i]);
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

  // 角按钮（controls 时）：左下随机色 / 右下 Reset（贴组件角部，hover 显示）
  if (showControls) {
    const rndBtn = document.createElement('button');
    rndBtn.className = 'box-corner-btn box-corner-left';
    rndBtn.title = 'Random color';
    rndBtn.innerHTML = '<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>';
    rndBtn.addEventListener('click', () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setColor({ r, g, b });
    });
    root.appendChild(rndBtn);
    const rstBtn = document.createElement('button');
    rstBtn.className = 'box-corner-btn box-corner-right';
    rstBtn.title = 'Reset';
    rstBtn.innerHTML = '<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>';
    rstBtn.addEventListener('click', () => {
      // Reset = 指示器回中心，取当前布局下中心位置的颜色
      setColor({ r: 0, g: 0, b: 0 });
    });
    root.appendChild(rstBtn);
  }
  return {
    getColor,
    getMode: () => mode,

    setColor,
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
      breathRunning = false;
      interaction.destroy();
      if (animationId !== null) cancelAnimationFrame(animationId);
      container.removeChild(root);
    },
  };
}
