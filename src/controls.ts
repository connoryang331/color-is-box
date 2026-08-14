// @ambient-ui/color-is-box — optional controls (inputs / mode toggle / corner buttons)
// Loaded on demand so the core bundle stays small.
import type { ColorMode } from './types';

export interface ControlsCtx {
  mode(): ColorMode;
  switchMode(m: ColorMode): void;
  onHexInput(hex: string): void;
  onChannelInput(i: number, value: number, max: number): void;
  getRgbForCopy(): { r: number; g: number; b: number };
  onRandom(rgb: { r: number; g: number; b: number }): void;
  onReset(): void;
}
export interface ControlsOptions {
  showInputs: boolean;
  showModeToggle: boolean;
  showCorners: boolean;
}

function copyToClipboard(text: string): void {
  try { navigator.clipboard.writeText(text).catch(() => { /* ignore */ }); } catch { /* ignore */ }
}
function flashInput(el: HTMLInputElement | null): void {
  if (!el) return;
  el.style.borderColor = '#4ade80';
  el.style.boxShadow = '0 0 0 2px rgba(74,222,128,.35)';
  setTimeout(() => { el.style.borderColor = ''; el.style.boxShadow = ''; }, 500);
}

export function createControls(container: HTMLElement, ctx: ControlsCtx, opts: ControlsOptions): void {
  // 模式切换按钮
  if (opts.showModeToggle) {
    const modeToggle = document.createElement('div');
    modeToggle.className = 'box-picker-mode-toggle';
    const mk = (label: ColorMode): HTMLButtonElement => {
      const b = document.createElement('button');
      b.textContent = label.toUpperCase();
      b.addEventListener('click', () => ctx.switchMode(label));
      modeToggle.appendChild(b);
      return b;
    };
    const oklchBtn = mk('oklch');
    const rgbBtn = mk('rgb');
    const hsbBtn = mk('hsb');
    const markActive = (): void => {
      const cur = ctx.mode();
      rgbBtn.classList.toggle('active', cur === 'rgb');
      hsbBtn.classList.toggle('active', cur === 'hsb');
      oklchBtn.classList.toggle('active', cur === 'oklch');
    };
    markActive();
    const orig = ctx.switchMode;
    (ctx as any)._markActive = markActive;
    container.appendChild(modeToggle);
    void orig;
  }

  // 数值输入（HEX + 通道）
  if (opts.showInputs) {
    const hexInput = document.createElement('input');
    hexInput.className = 'box-picker-hex';
    hexInput.type = 'text';
    hexInput.spellcheck = false;

    hexInput.addEventListener('change', () => {
      const v = hexInput.value;
      if (/^#?[0-9a-f]{6}$/i.test(v)) ctx.onHexInput(v);
      else ctx.onHexInput(''); // 无效输入 → 只刷新
    });
    hexInput.addEventListener('click', () => {
      copyToClipboard(ctx.getRgbForCopy() ? '#' + toHex(ctx.getRgbForCopy()) : '#ffffff');
      flashInput(hexInput);
    });

    const channelRow = document.createElement('div');
    channelRow.className = 'box-picker-channels';
    const inputs: HTMLInputElement[] = [];
    const labels: HTMLLabelElement[] = [];
    const CHANNEL_NAMES = ['R', 'G', 'B'];
    for (let i = 0; i < 3; i++) {
      const ch = document.createElement('div');
      ch.className = 'box-picker-channel';
      const label = document.createElement('label');
      label.textContent = CHANNEL_NAMES[i];
      const input = document.createElement('input');
      input.type = 'text';
      input.inputMode = 'numeric';
      ch.appendChild(label);
      ch.appendChild(input);
      channelRow.appendChild(ch);
      inputs.push(input);
      labels.push(label);
      input.addEventListener('change', () => {
        const val = parseFloat(input.value);
        if (isNaN(val)) return;
        ctx.onChannelInput(i, val, 255);
      });
      input.addEventListener('click', () => {
        const rgb = ctx.getRgbForCopy();
        copyToClipboard(`${rgb.r}, ${rgb.g}, ${rgb.b}`);
        flashInput(input);
      });
    }

    const hexRow = document.createElement('div');
    hexRow.className = 'box-picker-hexrow';
    const hexWrap = document.createElement('div');
    hexWrap.className = 'box-picker-hexwrap';
    const hexLabel = document.createElement('label');
    hexLabel.textContent = 'Hex';
    hexWrap.appendChild(hexLabel);
    hexWrap.appendChild(hexInput);
    hexRow.appendChild(channelRow);
    hexRow.appendChild(hexWrap);
    container.appendChild(hexRow);
    (container as any)._inputs = { hexInput, inputs, labels };
  }

  // 角按钮：随机色 / Reset
  if (opts.showCorners) {
    const rnd = document.createElement('button');
    rnd.className = 'box-corner-btn box-corner-left';
    rnd.title = 'Random color';
    rnd.setAttribute('aria-label', 'Random color');
    rnd.innerHTML = '<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>';
    rnd.addEventListener('click', () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      ctx.onRandom({ r, g, b });
    });
    container.appendChild(rnd);
    const rst = document.createElement('button');
    rst.className = 'box-corner-btn box-corner-right';
    rst.title = 'Reset';
    rst.setAttribute('aria-label', 'Reset');
    rst.innerHTML = '<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>';
    rst.addEventListener('click', () => ctx.onReset());
    container.appendChild(rst);
  }
}

function toHex(c: { r: number; g: number; b: number }): string {
  const p = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
  return p(c.r) + p(c.g) + p(c.b);
}