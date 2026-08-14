import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rgbToHsb, hsbToRgb, rgbToOklch, oklchToRgb, rgbToHex, hexToRgb, valuesToRgb, rgbToValues } from '../dist/color-math.js';

test('rgb -> hsb roundtrip', () => {
  const hsb = rgbToHsb({ r: 255, g: 0, b: 0 });
  assert.ok(Math.abs(hsb.h - 0) < 1 || Math.abs(hsb.h - 360) < 1);
  assert.equal(hsb.s, 100);
  assert.equal(hsb.b, 100);
  const rgb = hsbToRgb(hsb);
  assert.equal(rgb.r, 255);
  assert.ok(Math.abs(rgb.g) < 2);
});

test('white -> hsb -> white', () => {
  const hsb = rgbToHsb({ r: 255, g: 255, b: 255 });
  assert.equal(hsb.s, 0);
  assert.equal(hsb.b, 100);
  const rgb = hsbToRgb(hsb);
  assert.equal(rgb.r, 255);
  assert.equal(rgb.g, 255);
  assert.equal(rgb.b, 255);
});

test('rgb -> oklch roundtrip (approx)', () => {
  const src = { r: 255, g: 0, b: 0 };
  const oklch = rgbToOklch(src);
  assert.ok(oklch.l > 0.5 && oklch.l < 0.8);
  const rgb = oklchToRgb(oklch);
  assert.ok(Math.abs(rgb.r - 255) < 4);
  assert.ok(Math.abs(rgb.g) < 4);
  assert.ok(Math.abs(rgb.b) < 4);
});

test('hex roundtrip', () => {
  assert.equal(rgbToHex({ r: 255, g: 255, b: 255 }), '#ffffff');
  assert.deepEqual(hexToRgb('#ff0000'), { r: 255, g: 0, b: 0 });
});

test('values <-> rgb per mode', () => {
  const rgb = { r: 100, g: 150, b: 200 };
  for (const mode of ['rgb', 'hsb', 'oklch']) {
    const v = rgbToValues(rgb, mode);
    const back = valuesToRgb(v, mode);
    assert.ok(Math.abs(back.r - rgb.r) < 3, mode);
    assert.ok(Math.abs(back.g - rgb.g) < 3, mode);
    assert.ok(Math.abs(back.b - rgb.b) < 3, mode);
  }
});