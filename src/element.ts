// @ambient-ui/color-is-box — Web Component wrapper
import { createColorPicker } from './index';
import type { ColorMode } from './types';

function hexToRgbSafe(hex: string): { r: number; g: number; b: number } {
  const m = hex.match(/^#?([0-9a-f]{6})$/i);
  if (!m) return { r: 255, g: 255, b: 255 };
  const n = parseInt(m[1], 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export class ColorIsBoxElement extends HTMLElement {
  private holder: HTMLElement | null = null;
  private picker: ReturnType<typeof createColorPicker> | null = null;
  private internal = false;

  static get observedAttributes(): string[] { return ['value', 'mode', 'size']; }

  connectedCallback(): void {
    if (this.picker) return;
    this.holder = document.createElement('div');
    this.appendChild(this.holder);
    const size = parseInt(this.getAttribute('size') || '280', 10);
    this.picker = createColorPicker(this.holder, {
      initialColor: hexToRgbSafe(this.getAttribute('value') || '#ffffff'),
      size,
      controls: true,
      showInputs: true,
      showModeToggle: true,
      showCorners: true,
    });
    this.picker.on('change', (c: any) => {
      if (this.internal) return;
      this.internal = true;
      this.setAttribute('value', c.hex);
      this.internal = false;
      this.dispatchEvent(new CustomEvent('change', { detail: c }));
      this.dispatchEvent(new CustomEvent('color-changed', { detail: c.hex }));
    });
    const mode = this.getAttribute('mode') as ColorMode | null;
    if (mode) this.picker.setMode(mode);
  }

  attributeChangedCallback(name: string, _o: string | null, val: string | null): void {
    if (!this.picker || !val || this.internal) return;
    if (name === 'value') this.picker.setColor(hexToRgbSafe(val));
    else if (name === 'mode') this.picker.setMode(val as ColorMode);
  }

  get value(): string { return this.getAttribute('value') || '#ffffff'; }
  set value(v: string) { this.setAttribute('value', v); }
  get mode(): ColorMode { return (this.getAttribute('mode') as ColorMode) || 'rgb'; }
  set mode(m: ColorMode) { this.setAttribute('mode', m); }

  disconnectedCallback(): void {
    try { this.picker?.destroy(); } catch { /* ignore */ }
    this.picker = null;
    if (this.holder) { try { this.holder.remove(); } catch { /* ignore */ } this.holder = null; }
  }
}

if (!customElements.get('color-is-box')) {
  customElements.define('color-is-box', ColorIsBoxElement);
}
export default ColorIsBoxElement;