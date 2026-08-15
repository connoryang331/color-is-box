# color-is-box

Zero-dependency 3D **RGB / HSB / OKLCH** color picker — a color cube rendered as an
isometric hexagon. Tiny, framework-agnostic, works everywhere.
tiny, framework-agnostic, works everywhere.

## Features

- 🧊 **3D color cube** (isometric hexagon) — drag to pick on faces and axes
- 🎨 **RGB / HSB / OKLCH modes** — switch axes, letters follow color positions
- 🔄 **Double-click inverts** the whole cube (white ↔ black)
- 🎲 **Corner buttons** — random color (left) / reset to center (right)
- ⌨️ **Hex / channel inputs** — click to copy, type to set, theme-aware
- 🔌 **Web Component** `<color-is-box>` + vanilla JS API
- 🗜 **Small** — ~9 KB minified + gzipped (cube renderer, 3 spaces, CSS inlined)
- 🚀 **Fast** — standards-based Custom Element
- 🛡 **Bulletproof** — strict TypeScript, tests included (`npm test`)
- 🗂 **Typed** — types included
- 💬 **Accessible** — aria-labels, keyboard operable
- 📲 **Mobile-friendly** — touch-action support for touch screens
- 👫 **Framework-agnostic** — React / Vue / Svelte / vanilla
- 💨 **Zero dependencies, zero build needed** (IIFE) — also ESM + source
## Supported color models

| Element | Value format | Example |
| --- | --- | --- |
| `<hex-color-picker>` | HEX | `#ffffff` |
| `<hex-alpha-color-picker>` | HEX + alpha | `#ffffff88` |
| `<rgb-color-picker>` | RGB | `255, 255, 255` |
| `<rgb-string-color-picker>` | CSS string | `rgb(255, 255, 255)` |
| `<rgba-color-picker>` | RGBA | `255, 255, 255, 1` |
| `<rgba-string-color-picker>` | CSS string | `rgba(255, 255, 255, 1)` |
| `<hsl-color-picker>` | HSL | `0, 0%, 100%` |
| `<hsl-string-color-picker>` | CSS string | `hsl(0, 0%, 100%)` |
| `<hsla-color-picker>` | HSLA | `0, 0%, 100%, 1` |
| `<hsla-string-color-picker>` | CSS string | `hsla(0, 0%, 100%, 1)` |
| `<hsv-color-picker>` | HSV | `0, 0%, 100%` |
| `<hsv-string-color-picker>` | CSS string | `hsv(0, 0%, 100%)` |
| `<hsva-color-picker>` | HSVA | `0, 0%, 100%, 1` |
| `<hsva-string-color-picker>` | CSS string | `hsva(0, 0%, 100%, 1)` |

Also registered: `<color-is-box>` (hex) and `<color-is-box-rgb/hsl/hsv/oklch/hex-alpha/rgba/hsla/hsva>`.
Alpha models (rgba/hsla/hsva/hex-alpha + string variants) automatically show an alpha slider.
## Usage — Web Component

```html
<script src="https://unpkg.com/color-is-box/dist/color-is-box-element.iife.js"></script>

<color-is-box value="#ff0000" mode="hsb" size="300"></color-is-box>
<script>
  const picker = document.querySelector('color-is-box');
  picker.addEventListener('change', (e) => console.log(e.detail.hex)); // full ColorOutput
  picker.value = '#008fa0';      // set programmatically
  picker.mode = 'oklch';         // switch mode
</script>
```

### Attributes / properties

| Attribute | Type | Default | Notes |
| --- | --- | --- | --- |
| `value` | hex string | `#ffffff` | current color (two-way) |
| `mode` | `rgb` / `hsb` / `oklch` | `rgb` | color space |
| `size` | number | `280` | picker width in px |

### Events

| Event | Detail |
| --- | --- |
| `change` | full `ColorOutput` `{ rgb, hsb, oklch, hex }` |
| color-changed | hex string |

## Usage — JS API

```js
import { createColorPicker } from './dist/color-is-box.js';

const picker = createColorPicker(holderEl, {
  initialColor: { r: 255, g: 255, b: 255 },
  size: 280,
  controls: true,
});
picker.on('change', (c) => console.log(c.hex, c.rgb, c.hsb, c.oklch));
picker.setColor({ r: 0, g: 0, b: 0 });
picker.setMode('hsb');
```

## Files

- `src/` — TypeScript source (index, element, color-math, renderer, interaction, types, style)
- `dist/color-is-box.js` / `.iife.js` — component (ESM / global `ColorIsBox`)
- `dist/color-is-box-element.js` / `.iife.js` — Web Component (ESM / registers `<color-is-box>`)
- `demo/index.html` — JS API demo
- `demo/web-component.html` — Web Component demo

## Build

```bash
npm run build   # esbuild → 4 bundles (component + element, ESM + IIFE)
```

## Demo

Double-click `demo/index.html` or `demo/web-component.html` (no server needed).


