// @ambient-ui/color-is-box — Web Component wrappers (vanilla-colorful style color models, incl. alpha)
import { createColorPicker } from './index';
import type { ColorMode } from './types';
import { parseModelValue, formatModelValue, type ColorModel } from './formats';
// 同时导出 JS API（?module 一个入口同时提供元素注册与 createColorPicker）
export * from './index';

function hexToRgbSafe(hex: string): { r: number; g: number; b: number } {
  const m = hex.match(/^#?([0-9a-f]{6})$/i);
  if (!m) return { r: 255, g: 255, b: 255 };
  const n = parseInt(m[1], 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

class ColorIsBoxModelElement extends HTMLElement {
  private holder: HTMLElement | null = null;
  private picker: ReturnType<typeof createColorPicker> | null = null;
  private internal = false;
  private model: ColorModel;
  private alpha = 1;

  constructor(model: ColorModel) {
    super();
    this.model = model;
  }

  static get observedAttributes(): string[] { return ['value', 'mode', 'size']; }

  connectedCallback(): void {
    if (this.picker) return;
    this.holder = document.createElement('div');
    this.appendChild(this.holder);
    const size = parseInt(this.getAttribute('size') || '280', 10);
    const mode = (this.getAttribute('mode') as ColorMode) || 'rgb';
    const val = this.getAttribute('value');
    const parsed = val ? parseModelValue(val, this.model) : null;
    this.alpha = parsed?.alpha ?? 1;
    const initial = parsed?.rgb ?? { r: 255, g: 255, b: 255 };
    const ALPHA_MODELS = new Set(['hex-alpha', 'rgba', 'hsla', 'hsva', 'oklcha', 'rgba-string', 'hsla-string', 'hsva-string']);
    this.picker = createColorPicker(this.holder, {
      initialColor: initial,
      size,
      controls: true,
      showInputs: this.getAttribute('show-inputs') === 'true',
      showModeToggle: this.getAttribute('show-mode-toggle') === 'true',
      showCorners: this.getAttribute('show-corners') === 'true',
      // alpha 模型：传入 alpha 启用环形 alpha 交互（替代线性滑杆）
      ...(ALPHA_MODELS.has(this.model) ? { alpha: this.alpha } : {}),
    });
    this.picker.on('change', (c: any) => {
      if (this.internal) return;
      this.internal = true;
      this.alpha = c.alpha;
      this.setAttribute('value', formatModelValue(c.rgb, this.model, c.alpha));
      this.internal = false;
      this.dispatchEvent(new CustomEvent('change', { detail: c }));
      this.dispatchEvent(new CustomEvent('color-changed', { detail: formatModelValue(c.rgb, this.model, c.alpha) }));
    });
    if (mode) this.picker.setMode(mode);

  }

  attributeChangedCallback(name: string, _o: string | null, val: string | null): void {
    if (!this.picker || !val || this.internal) return;
    if (name === 'value') {
      const parsed = parseModelValue(val, this.model);
      if (parsed) { this.alpha = parsed.alpha; this.picker.setColor(parsed.rgb); this.picker.setAlpha(parsed.alpha); }
    } else if (name === 'mode') {
      this.picker.setMode(val as ColorMode);
    }
  }

  get value(): string { return this.getAttribute('value') || formatModelValue({ r: 255, g: 255, b: 255 }, this.model, 1); }
  set value(v: string) { this.setAttribute('value', v); }
  get mode(): ColorMode { return (this.getAttribute('mode') as ColorMode) || 'rgb'; }
  set mode(m: ColorMode) { this.setAttribute('mode', m); }

  disconnectedCallback(): void {
    try { this.picker?.destroy(); } catch { /* ignore */ }
    this.picker = null;
    if (this.holder) { try { this.holder.remove(); } catch { /* ignore */ } this.holder = null; }
  }
}

export class ColorIsBoxElement extends ColorIsBoxModelElement {
  constructor() { super('hex'); }
}

const MODELS: Array<[string, ColorModel]> = [
  ['color-is-box', 'hex'],
  // vanilla-colorful compatible tags (14 pickers)
  ['hex-color-is-box', 'hex'],
  ['hex-alpha-color-is-box', 'hex-alpha'],
  ['rgb-color-is-box', 'rgb'],
  ['rgb-string-color-is-box', 'rgb-string'],
  ['rgba-color-is-box', 'rgba'],
  ['rgba-string-color-is-box', 'rgba-string'],
  ['hsl-color-is-box', 'hsl'],
  ['hsl-string-color-is-box', 'hsl-string'],
  ['hsla-color-is-box', 'hsla'],
  ['hsla-string-color-is-box', 'hsla-string'],
  ['hsv-color-is-box', 'hsv'],
  ['hsv-string-color-is-box', 'hsv-string'],
  ['oklch-color-is-box', 'oklch'],
  ['oklcha-color-is-box', 'oklcha'],
  ['hsva-color-is-box', 'hsva'],
  ['hsva-string-color-is-box', 'hsva-string'],
];
for (const [tag, model] of MODELS) {
  if (!customElements.get(tag)) {
    customElements.define(tag, class extends ColorIsBoxModelElement { constructor() { super(model); } });
  }
}
export default ColorIsBoxElement;
