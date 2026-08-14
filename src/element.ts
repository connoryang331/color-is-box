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
    this.picker = createColorPicker(this.holder, {
      initialColor: initial,
      size,
      controls: true,
      showInputs: this.getAttribute('show-inputs') === 'true',
      showModeToggle: this.getAttribute('show-mode-toggle') === 'true',
      showCorners: this.getAttribute('show-corners') === 'true',
    });
    this.picker.on('change', (c: any) => {
      if (this.internal) return;
      this.internal = true;
      this.setAttribute('value', formatModelValue(c.rgb, this.model, this.alpha));
      this.internal = false;
      this.dispatchEvent(new CustomEvent('change', { detail: c }));
      this.dispatchEvent(new CustomEvent('color-changed', { detail: formatModelValue(c.rgb, this.model, this.alpha) }));
    });
    if (mode) this.picker.setMode(mode);
  }

  attributeChangedCallback(name: string, _o: string | null, val: string | null): void {
    if (!this.picker || !val || this.internal) return;
    if (name === 'value') {
      const parsed = parseModelValue(val, this.model);
      if (parsed) { this.alpha = parsed.alpha; this.picker.setColor(parsed.rgb); }
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
  ['color-is-box-rgb', 'rgb'],
  ['color-is-box-hsl', 'hsl'],
  ['color-is-box-hsv', 'hsv'],
  ['color-is-box-oklch', 'oklch'],
  ['color-is-box-hex-alpha', 'hex-alpha'],
  ['color-is-box-rgba', 'rgba'],
  ['color-is-box-hsla', 'hsla'],
  ['color-is-box-hsva', 'hsva'],
];
for (const [tag, model] of MODELS) {
  if (!customElements.get(tag)) {
    customElements.define(tag, class extends ColorIsBoxModelElement { constructor() { super(model); } });
  }
}
export default ColorIsBoxElement;