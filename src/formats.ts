// @ambient-ui/color-is-box — color model parse/format adapters (vanilla-colorful style)
import { rgbToHsb, hsbToRgb, rgbToOklch, oklchToRgb, rgbToHex, hexToRgb } from './color-math';

export type ColorModel = 'hex' | 'rgb' | 'hsl' | 'hsv' | 'oklch';
export type RGB = { r: number; g: number; b: number };

export function parseModelValue(v: string, model: ColorModel): RGB | null {
  if (!v) return null;
  const s = v.trim();
  try {
    if (model === 'hex') return hexToRgb(s);
    if (model === 'rgb') {
      const m = s.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
      if (m) return { r: +m[1], g: +m[2], b: +m[3] };
      return null;
    }
    if (model === 'hsl') {
      const m = s.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);
      if (m) return hslToRgb(+m[1], +m[2], +m[3]);
      return null;
    }
    if (model === 'hsv') {
      const m = s.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);
      if (m) return hsbToRgb({ h: +m[1], s: +m[2], b: +m[3] });
      return null;
    }
    if (model === 'oklch') {
      const m = s.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);
      if (m) return oklchToRgb({ l: +m[1], c: +m[2], h: +m[3] });
      return null;
    }
  } catch { /* ignore */ }
  return null;
}

export function formatModelValue(rgb: RGB, model: ColorModel): string {
  if (model === 'hex') return rgbToHex(rgb);
  if (model === 'rgb') return `${rgb.r}, ${rgb.g}, ${rgb.b}`;
  if (model === 'hsl') {
    const h = rgbToHsl(rgb);
    return `${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.l)}%`;
  }
  if (model === 'hsv') {
    const h = rgbToHsb(rgb);
    return `${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.b)}%`;
  }
  const o = rgbToOklch(rgb);
  return `${o.l.toFixed(3)}, ${o.c.toFixed(3)}, ${o.h.toFixed(1)}`;
}

function hslToRgb(h: number, s: number, l: number): RGB {
  const sn = s / 100, ln = l / 100;
  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = ln - c / 2;
  let r1 = 0, g1 = 0, b1 = 0;
  if (h < 60) { r1 = c; g1 = x; }
  else if (h < 120) { r1 = x; g1 = c; }
  else if (h < 180) { g1 = c; b1 = x; }
  else if (h < 240) { g1 = x; b1 = c; }
  else if (h < 300) { r1 = x; b1 = c; }
  else { r1 = c; b1 = x; }
  return { r: Math.round((r1 + m) * 255), g: Math.round((g1 + m) * 255), b: Math.round((b1 + m) * 255) };
}
function rgbToHsl(rgb: RGB): { h: number; s: number; l: number } {
  const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: l * 100 };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
  else if (max === g) h = ((b - r) / d + 2) * 60;
  else h = ((r - g) / d + 4) * 60;
  return { h, s: s * 100, l: l * 100 };
}