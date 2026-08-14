var ColorIsBoxElement = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/element.ts
  var element_exports = {};
  __export(element_exports, {
    ColorIsBoxElement: () => ColorIsBoxElement,
    default: () => element_default
  });

  // src/types.ts
  var AXIS_LABELS = {
    rgb: ["R", "G", "B"],
    hsb: ["H", "S", "B"],
    oklch: ["L", "C", "H"]
  };
  var AXIS_MAX = {
    rgb: [255, 255, 255],
    hsb: [359, 100, 100],
    oklch: [100, 40, 359]
  };

  // src/color-math.ts
  function rgbToHsb(rgb) {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    let h = 0;
    if (d !== 0) {
      if (max === r) h = ((g - b) / d + 6) % 6;
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h *= 60;
    }
    const s = max === 0 ? 0 : d / max * 100;
    const brightness = max * 100;
    return { h, s, b: brightness };
  }
  function hsbToRgb(hsb) {
    const h = hsb.h;
    const s = hsb.s / 100;
    const v = hsb.b / 100;
    const c = v * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = v - c;
    let r1, g1, b1;
    if (h < 60) {
      r1 = c;
      g1 = x;
      b1 = 0;
    } else if (h < 120) {
      r1 = x;
      g1 = c;
      b1 = 0;
    } else if (h < 180) {
      r1 = 0;
      g1 = c;
      b1 = x;
    } else if (h < 240) {
      r1 = 0;
      g1 = x;
      b1 = c;
    } else if (h < 300) {
      r1 = x;
      g1 = 0;
      b1 = c;
    } else {
      r1 = c;
      g1 = 0;
      b1 = x;
    }
    return {
      r: Math.round((r1 + m) * 255),
      g: Math.round((g1 + m) * 255),
      b: Math.round((b1 + m) * 255)
    };
  }
  function srgbToLinear(c) {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  function linearToSrgb(c) {
    return c <= 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  }
  function rgbToOklab(rgb) {
    const r = srgbToLinear(rgb.r / 255);
    const g = srgbToLinear(rgb.g / 255);
    const b = srgbToLinear(rgb.b / 255);
    const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
    const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
    const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
    const l_ = Math.cbrt(l);
    const m_ = Math.cbrt(m);
    const s_ = Math.cbrt(s);
    return {
      L: 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
      a: 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
      b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_
    };
  }
  function oklabToRgb(L, a, b) {
    const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = L - 0.0894841775 * a - 1.291485548 * b;
    const l = l_ * l_ * l_;
    const m = m_ * m_ * m_;
    const s = s_ * s_ * s_;
    const r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
    const g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
    const bl = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
    return {
      r: Math.round(Math.max(0, Math.min(1, linearToSrgb(r))) * 255),
      g: Math.round(Math.max(0, Math.min(1, linearToSrgb(g))) * 255),
      b: Math.round(Math.max(0, Math.min(1, linearToSrgb(bl))) * 255)
    };
  }
  function rgbToOklch(rgb) {
    const lab = rgbToOklab(rgb);
    const c = Math.sqrt(lab.a * lab.a + lab.b * lab.b);
    let h = Math.atan2(lab.b, lab.a) * (180 / Math.PI);
    if (h < 0) h += 360;
    return { l: lab.L, c, h: c < 1e-4 ? 0 : h };
  }
  function oklchToRgb(oklch) {
    const hRad = oklch.h * (Math.PI / 180);
    const a = oklch.c * Math.cos(hRad);
    const b = oklch.c * Math.sin(hRad);
    return oklabToRgb(oklch.l, a, b);
  }
  function gamutClampOklch(l, c, h) {
    let rgb = oklchToRgb({ l, c, h });
    if (isInGamut(rgb)) return { l, c, h };
    let lo = 0;
    let hi = c;
    for (let i = 0; i < 20; i++) {
      const mid = (lo + hi) / 2;
      rgb = oklchToRgb({ l, c: mid, h });
      if (isInGamut(rgb)) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    return { l, c: lo, h };
  }
  function isInGamut(rgb) {
    return rgb.r >= 0 && rgb.r <= 255 && rgb.g >= 0 && rgb.g <= 255 && rgb.b >= 0 && rgb.b <= 255;
  }
  function rgbToHex(rgb) {
    const toHex = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
    return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
  }
  function hexToRgb(hex) {
    const match = hex.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (!match) return null;
    return {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16)
    };
  }
  var OKLCH_C_MAX = 0.4;
  function valuesToRgb(values, mode) {
    if (mode === "rgb") {
      return {
        r: Math.round(values.x * 255),
        g: Math.round(values.y * 255),
        b: Math.round(values.z * 255)
      };
    } else if (mode === "hsb") {
      return hsbToRgb({
        h: values.x * 359,
        s: values.y * 100,
        b: values.z * 100
      });
    } else {
      const l = values.x;
      const c = values.y * OKLCH_C_MAX;
      const h = values.z * 359;
      const clamped = gamutClampOklch(l, c, h);
      return oklchToRgb(clamped);
    }
  }
  function rgbToValues(rgb, mode) {
    if (mode === "rgb") {
      return { x: rgb.r / 255, y: rgb.g / 255, z: rgb.b / 255 };
    } else if (mode === "hsb") {
      const hsb = rgbToHsb(rgb);
      return { x: hsb.h / 359, y: hsb.s / 100, z: hsb.b / 100 };
    } else {
      const oklch = rgbToOklch(rgb);
      return {
        x: oklch.l,
        y: Math.min(oklch.c / OKLCH_C_MAX, 1),
        z: oklch.h / 359
      };
    }
  }
  function valuesToChannels(values, mode) {
    const max = AXIS_MAX[mode];
    return [
      Math.round(values.x * max[0]),
      Math.round(values.y * max[1]),
      Math.round(values.z * max[2])
    ];
  }
  function faceColor(faceAxis, u, v, fixedValue, mode, invert = false) {
    let values;
    if (faceAxis === 0) {
      values = { x: fixedValue, y: u, z: v };
    } else if (faceAxis === 1) {
      values = { x: u, y: fixedValue, z: v };
    } else {
      values = { x: u, y: v, z: fixedValue };
    }
    const c = valuesToRgb(values, mode);
    if (invert) return { r: 255 - c.r, g: 255 - c.g, b: 255 - c.b };
    return c;
  }

  // src/box-renderer.ts
  var ISO_ANGLE = Math.PI / 6;
  var COS30 = Math.cos(ISO_ANGLE);
  var SIN30 = Math.sin(ISO_ANGLE);
  var invertMode = false;
  function setBoxInvert(v) {
    invertMode = v;
  }
  function project(p, scale, center) {
    return {
      x: center.x + (p.y - p.x) * COS30 * scale,
      y: center.y + p.z * scale - (p.x + p.y) * SIN30 * scale
    };
  }
  function boxVertices(ext) {
    const { x: w, y: h, z: d } = ext;
    return [
      { x: 0, y: 0, z: 0 },
      { x: w, y: 0, z: 0 },
      { x: 0, y: h, z: 0 },
      { x: 0, y: 0, z: d },
      { x: w, y: h, z: 0 },
      { x: w, y: 0, z: d },
      { x: 0, y: h, z: d },
      { x: w, y: h, z: d }
    ];
  }
  var FACES = [
    // Top face — z fixed, varying x and y
    { quad: [3, 5, 7, 6], fixedAxis: 2, uAxis: 0, vAxis: 1 },
    // Right face — x fixed, varying y and z
    { quad: [1, 4, 7, 5], fixedAxis: 0, uAxis: 1, vAxis: 2 },
    // Left face — y fixed, varying x and z
    { quad: [2, 4, 7, 6], fixedAxis: 1, uAxis: 0, vAxis: 2 }
  ];
  var FACE_RES = 128;
  var DEFAULT_RENDER_STATE = {
    hoveredAxisHandle: -1,
    draggingAxisHandle: -1,
    hoveredFace: -1,
    draggingFace: -1
  };
  function createRenderContext(canvas, viewportSize) {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = viewportSize * dpr;
    canvas.height = viewportSize * 0.84 * dpr;
    canvas.style.width = `${viewportSize}px`;
    canvas.style.height = `${viewportSize * 0.84}px`;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    return {
      ctx,
      scale: viewportSize * 0.32,
      center: { x: viewportSize / 2, y: viewportSize * 0.4 },
      width: viewportSize,
      height: viewportSize * 0.84
    };
  }
  function render(rc, boxExtent, dotValues, dotFace, mode, rs, showLabels = true) {
    const { ctx, scale, center, width, height } = rc;
    ctx.save();
    ctx.clearRect(0, 0, width, height);
    const verts2d = boxVertices(boxExtent).map((v) => project(v, scale, center));
    drawAxisLines(ctx, scale, center, mode);
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.35)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;
    drawFaces(ctx, verts2d, boxExtent, mode);
    ctx.restore();
    if (showLabels) drawAxisLabels(ctx, mode, scale, center);
    if (dotFace >= 0) {
      const rgb = valuesToRgb(dotValues, mode);
      const dotRgb = invertMode ? { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b } : rgb;
      const dotPos = project(dotValues, scale, center);
      drawColorDot(ctx, dotPos, dotRgb);
    }
    ctx.restore();
  }
  var AXIS_COLORS = {
    rgb: ["rgba(255,100,100,0.4)", "rgba(100,255,100,0.4)", "rgba(100,150,255,0.4)"],
    hsb: ["rgba(255,100,100,0.4)", "rgba(100,255,100,0.4)", "rgba(100,150,255,0.4)"],
    oklch: ["rgba(220,220,220,0.4)", "rgba(255,180,60,0.4)", "rgba(180,120,255,0.4)"]
  };
  function drawAxisLines(ctx, scale, center, mode) {
    const origin = project({ x: 0, y: 0, z: 0 }, scale, center);
    const tips = [
      project({ x: 1, y: 0, z: 0 }, scale, center),
      project({ x: 0, y: 1, z: 0 }, scale, center),
      project({ x: 0, y: 0, z: 1 }, scale, center)
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
  function drawFaces(ctx, verts2d, boxExtent, mode) {
    const ext = [boxExtent.x, boxExtent.y, boxExtent.z];
    for (let fi = 0; fi < FACES.length; fi++) {
      const face = FACES[fi];
      const fixedVal = ext[face.fixedAxis];
      const uMax = ext[face.uAxis];
      const vMax = ext[face.vAxis];
      if (uMax < 2e-3 && vMax < 2e-3) continue;
      const corners = face.quad.map((i) => verts2d[i]);
      renderFaceGradient(ctx, corners, face.fixedAxis, fixedVal, uMax, vMax, mode);
    }
  }
  function renderFaceGradient(ctx, corners, fixedAxis, fixedVal, uMax, vMax, mode) {
    const res = FACE_RES;
    const offscreen = document.createElement("canvas");
    offscreen.width = res;
    offscreen.height = res;
    const offCtx = offscreen.getContext("2d");
    const imgData = offCtx.createImageData(res, res);
    const data = imgData.data;
    for (let py = 0; py < res; py++) {
      for (let px = 0; px < res; px++) {
        const u = px / (res - 1) * uMax;
        const v = py / (res - 1) * vMax;
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
    ctx.beginPath();
    ctx.moveTo(p00.x, p00.y);
    ctx.lineTo(p10.x, p10.y);
    ctx.lineTo(p11.x, p11.y);
    ctx.lineTo(p01.x, p01.y);
    ctx.closePath();
    ctx.clip();
    const extend = 2 / res;
    const ox = p00.x - ax * extend - bx * extend;
    const oy = p00.y - ay * extend - by * extend;
    const sx = 1 + 2 * extend;
    const sy = 1 + 2 * extend;
    ctx.transform(
      ax * sx / res,
      ay * sx / res,
      bx * sy / res,
      by * sy / res,
      ox,
      oy
    );
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(offscreen, 0, 0);
    ctx.restore();
  }
  function drawAxisLabels(ctx, mode, scale, center) {
    const labels = AXIS_LABELS[mode];
    const positions = invertMode ? [
      project({ x: 0, y: 1, z: 1 }, scale, center),
      // 反转后红色出现在原青区（右下）：R 文本跟随
      project({ x: 1, y: 0, z: 1 }, scale, center),
      // 反转后绿色出现在原品红区（左下）：G 文本跟随
      project({ x: 1, y: 1, z: 0 }, scale, center)
      // 反转后蓝色出现在原黄区（顶部）：B 文本跟随
    ] : [
      project({ x: 1, y: 0, z: 0 }, scale, center),
      project({ x: 0, y: 1, z: 0 }, scale, center),
      project({ x: 0, y: 0, z: 1 }, scale, center)
    ];
    const offsets = invertMode ? [{ x: 14, y: 6 }, { x: -14, y: 6 }, { x: 0, y: -10 }] : [{ x: -16, y: -6 }, { x: 16, y: -6 }, { x: 0, y: 12 }];
    const VERTEX_PTS = [
      { x: 1, y: 0, z: 0 },
      { x: 0, y: 1, z: 0 },
      { x: 0, y: 0, z: 1 }
    ];
    const labelColors = VERTEX_PTS.map((pt) => rgbToHex(valuesToRgb(pt, mode)));
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.35)";
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    const grayIdx = { rgb: [], hsb: [2], oklch: [0] };
    const t = performance.now() / 1e3;
    for (let i = 0; i < 3; i++) {
      const tx = positions[i].x + offsets[i].x;
      const ty = positions[i].y + offsets[i].y;
      const phase = t * 1.8 + i * 2.1;
      const breathe = 0.62 + 0.38 * (0.5 + 0.5 * Math.sin(phase));
      const size = 11 + Math.round(1.6 * (0.5 + 0.5 * Math.sin(phase)));
      ctx.globalAlpha = breathe;
      ctx.font = `bold ${size}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
      const isGray = grayIdx[mode].includes(i);
      const hexC = isGray ? "#888888" : labelColors[i];
      ctx.fillStyle = hexC;
      ctx.fillText(labels[i], tx, ty);
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }
  function drawColorDot(ctx, pos, rgb) {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
    ctx.fill();
  }
  function getAxisHandlePos(axisIndex, boxExtent, scale, center) {
    const positions = [
      { x: boxExtent.x, y: 0, z: 0 },
      { x: 0, y: boxExtent.y, z: 0 },
      { x: 0, y: 0, z: boxExtent.z }
    ];
    return project(positions[axisIndex], scale, center);
  }
  function getAxisDirections() {
    const origin = { x: 0, y: 0 };
    const tips = [
      project({ x: 1, y: 0, z: 0 }, 1, origin),
      project({ x: 0, y: 1, z: 0 }, 1, origin),
      project({ x: 0, y: 0, z: 1 }, 1, origin)
    ];
    return tips.map((t) => {
      const len = Math.sqrt(t.x * t.x + t.y * t.y);
      return len > 0 ? { x: t.x / len, y: t.y / len } : { x: 0, y: 0 };
    });
  }
  function faceHitTest(faceIndex, point, boxExtent, scale, center) {
    const face = FACES[faceIndex];
    const ext = [boxExtent.x, boxExtent.y, boxExtent.z];
    const uMax = ext[face.uAxis];
    const vMax = ext[face.vAxis];
    if (uMax < 2e-3 || vMax < 2e-3) return null;
    const faceOrigin = { x: 0, y: 0, z: 0 };
    const keys = ["x", "y", "z"];
    faceOrigin[keys[face.fixedAxis]] = ext[face.fixedAxis];
    const uEnd = { ...faceOrigin };
    uEnd[keys[face.uAxis]] = uMax;
    const vEnd = { ...faceOrigin };
    vEnd[keys[face.vAxis]] = vMax;
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
    if (s < -0.05 || s > 1.05 || t < -0.05 || t > 1.05) return null;
    return {
      s: Math.max(0, Math.min(1, s)),
      t: Math.max(0, Math.min(1, t))
    };
  }
  function faceHitTestUnclamped(faceIndex, point, boxExtent, scale, center) {
    const face = FACES[faceIndex];
    const ext = [boxExtent.x, boxExtent.y, boxExtent.z];
    const uMax = ext[face.uAxis];
    const vMax = ext[face.vAxis];
    if (uMax < 2e-3 || vMax < 2e-3) return null;
    const faceOrigin = { x: 0, y: 0, z: 0 };
    const keys = ["x", "y", "z"];
    faceOrigin[keys[face.fixedAxis]] = ext[face.fixedAxis];
    const uEnd = { ...faceOrigin };
    uEnd[keys[face.uAxis]] = uMax;
    const vEnd = { ...faceOrigin };
    vEnd[keys[face.vAxis]] = vMax;
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
      t: Math.max(0, Math.min(1, t))
    };
  }

  // src/interaction.ts
  var HANDLE_HIT_RADIUS = 22;
  function createInteraction(canvas, getBoxExtent, setBoxExtent, getDotValues, setDotValues, getDotFace, getScale, getCenter, requestRender) {
    const state = { ...DEFAULT_RENDER_STATE };
    function canvasPoint(e) {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function hitTestAxisHandle(pt) {
      const ext = getBoxExtent();
      const scale = getScale();
      const center = getCenter();
      for (let i = 0; i < 3; i++) {
        const pos = getAxisHandlePos(i, ext, scale, center);
        const dx = pt.x - pos.x;
        const dy = pt.y - pos.y;
        if (dx * dx + dy * dy <= HANDLE_HIT_RADIUS * HANDLE_HIT_RADIUS) return i;
      }
      return -1;
    }
    function hitTestFace(pt) {
      const ext = getBoxExtent();
      const scale = getScale();
      const center = getCenter();
      for (let fi = FACES.length - 1; fi >= 0; fi--) {
        const hit = faceHitTest(fi, pt, ext, scale, center);
        if (hit) return { faceIndex: fi, ...hit };
      }
      return null;
    }
    let dragAxis = -1;
    let dragStartMouse = { x: 0, y: 0 };
    let dragStartValue = 0;
    function startAxisDrag(axisIndex, pt) {
      dragAxis = axisIndex;
      dragStartMouse = pt;
      const ext = getBoxExtent();
      const keys = ["x", "y", "z"];
      dragStartValue = ext[keys[axisIndex]];
      state.draggingAxisHandle = axisIndex;
      canvas.style.cursor = "grabbing";
      requestRender();
    }
    function applyAxisDrag(pt) {
      if (dragAxis < 0) return;
      const dx = pt.x - dragStartMouse.x;
      const dy = pt.y - dragStartMouse.y;
      const dirs = getAxisDirections();
      const dir = dirs[dragAxis];
      const scale = getScale();
      const dot = dx * dir.x + dy * dir.y;
      const delta = dot / scale;
      const newVal = Math.max(0, Math.min(1, dragStartValue + delta));
      const ext = getBoxExtent();
      const keys = ["x", "y", "z"];
      const newExtent = { ...ext, [keys[dragAxis]]: newVal };
      setBoxExtent(newExtent);
      const dotVals = getDotValues();
      const dotFace = getDotFace();
      const face = dotFace >= 0 ? FACES[dotFace] : null;
      const newDot = { ...dotVals };
      if (face && dragAxis === face.fixedAxis) {
        newDot[keys[dragAxis]] = newVal;
      } else {
        newDot[keys[dragAxis]] = Math.min(dotVals[keys[dragAxis]], newVal);
      }
      setDotValues(newDot, getDotFace());
      requestRender();
    }
    function endAxisDrag() {
      dragAxis = -1;
      state.draggingAxisHandle = -1;
    }
    let dragFace = -1;
    let faceShiftLock = null;
    let faceShiftStart = null;
    let faceShiftPending = false;
    function startFaceDrag(faceIndex, s, t, shift) {
      dragFace = faceIndex;
      state.draggingFace = faceIndex;
      faceShiftLock = null;
      faceShiftStart = null;
      faceShiftPending = false;
      if (shift) {
        faceShiftPending = true;
        faceShiftStart = { s, t };
      }
      applyFaceValues(faceIndex, s, t);
      canvas.style.cursor = "crosshair";
      requestRender();
    }
    function applyFaceDrag(pt, shift, alt) {
      if (dragFace < 0) return;
      const ext = getBoxExtent();
      const scale = getScale();
      const center = getCenter();
      let hit = faceHitTest(dragFace, pt, ext, scale, center);
      let targetFace = dragFace;
      if (!hit && !alt) {
        for (let fi = FACES.length - 1; fi >= 0; fi--) {
          if (fi === dragFace) continue;
          hit = faceHitTest(fi, pt, ext, scale, center);
          if (hit) {
            targetFace = fi;
            break;
          }
        }
      }
      if (!hit && alt) {
        hit = faceHitTestUnclamped(dragFace, pt, ext, scale, center);
        targetFace = dragFace;
      }
      if (!hit) {
        requestRender();
        return;
      }
      if (targetFace !== dragFace) {
        dragFace = targetFace;
        state.draggingFace = targetFace;
        faceShiftLock = null;
        faceShiftPending = false;
        faceShiftStart = null;
      }
      let { s, t } = hit;
      if (shift && faceShiftStart) {
        if (faceShiftPending) {
          const ds = Math.abs(s - faceShiftStart.s);
          const dt = Math.abs(t - faceShiftStart.t);
          const threshold = 0.02;
          if (ds > threshold || dt > threshold) {
            faceShiftLock = ds >= dt ? "u" : "v";
            faceShiftPending = false;
          }
        }
        if (faceShiftLock === "u") {
          t = faceShiftStart.t;
        } else if (faceShiftLock === "v") {
          s = faceShiftStart.s;
        }
      } else if (!shift) {
        faceShiftLock = null;
        faceShiftPending = false;
        faceShiftStart = null;
      }
      applyFaceValues(targetFace, s, t);
      requestRender();
    }
    function applyFaceValues(faceIndex, s, t) {
      const face = FACES[faceIndex];
      const ext = getBoxExtent();
      const keys = ["x", "y", "z"];
      const newDot = { ...getDotValues() };
      newDot[keys[face.uAxis]] = s * ext[keys[face.uAxis]];
      newDot[keys[face.vAxis]] = t * ext[keys[face.vAxis]];
      newDot[keys[face.fixedAxis]] = ext[keys[face.fixedAxis]];
      setDotValues(newDot, faceIndex);
    }
    function endFaceDrag() {
      dragFace = -1;
      state.draggingFace = -1;
      faceShiftLock = null;
      faceShiftPending = false;
      faceShiftStart = null;
    }
    function onMouseDown(e) {
      const pt = canvasPoint(e);
      const axisHit = hitTestAxisHandle(pt);
      if (axisHit >= 0) {
        e.preventDefault();
        startAxisDrag(axisHit, pt);
        return;
      }
      const faceHit = hitTestFace(pt);
      if (faceHit) {
        e.preventDefault();
        startFaceDrag(faceHit.faceIndex, faceHit.s, faceHit.t, e.shiftKey);
      }
    }
    function onMouseMove(e) {
      const pt = canvasPoint(e);
      if (dragAxis >= 0) {
        e.preventDefault();
        applyAxisDrag(pt);
        return;
      }
      if (dragFace >= 0) {
        e.preventDefault();
        applyFaceDrag(pt, e.shiftKey, e.altKey);
        return;
      }
      const axisHit = hitTestAxisHandle(pt);
      const faceHit = hitTestFace(pt);
      const newAxisHover = axisHit;
      const newFaceHover = axisHit >= 0 ? -1 : faceHit ? faceHit.faceIndex : -1;
      if (newAxisHover !== state.hoveredAxisHandle || newFaceHover !== state.hoveredFace) {
        state.hoveredAxisHandle = newAxisHover;
        state.hoveredFace = newFaceHover;
        canvas.style.cursor = newAxisHover >= 0 ? "grab" : newFaceHover >= 0 ? "crosshair" : "default";
        requestRender();
      }
    }
    function onMouseUp(_e) {
      const wasDragging = dragAxis >= 0 || dragFace >= 0;
      endAxisDrag();
      endFaceDrag();
      if (wasDragging) {
        state.hoveredAxisHandle = -1;
        state.hoveredFace = -1;
        canvas.style.cursor = "default";
        requestRender();
      }
    }
    function onTouchStart(e) {
      if (e.touches.length !== 1) return;
      const pt = canvasPoint(e.touches[0]);
      const axisHit = hitTestAxisHandle(pt);
      if (axisHit >= 0) {
        e.preventDefault();
        startAxisDrag(axisHit, pt);
        return;
      }
      const faceHit = hitTestFace(pt);
      if (faceHit) {
        e.preventDefault();
        startFaceDrag(faceHit.faceIndex, faceHit.s, faceHit.t, false);
      }
    }
    function onTouchMove(e) {
      if (e.touches.length !== 1) return;
      const pt = canvasPoint(e.touches[0]);
      if (dragAxis >= 0) {
        e.preventDefault();
        applyAxisDrag(pt);
      } else if (dragFace >= 0) {
        e.preventDefault();
        applyFaceDrag(pt, false, false);
      }
    }
    function onTouchEnd(_e) {
      endAxisDrag();
      endFaceDrag();
      requestRender();
    }
    function onKeyDown(e) {
      const step = e.shiftKey ? 0.04 : 4e-3;
      const dotVals = getDotValues();
      const ext = getBoxExtent();
      const dirs = getAxisDirections();
      let screenDx = 0, screenDy = 0;
      switch (e.key) {
        case "ArrowRight":
          screenDx = 1;
          break;
        case "ArrowLeft":
          screenDx = -1;
          break;
        case "ArrowUp":
          screenDy = -1;
          break;
        case "ArrowDown":
          screenDy = 1;
          break;
        default:
          return;
      }
      e.preventDefault();
      const newDot = { ...dotVals };
      const keys = ["x", "y", "z"];
      for (let i = 0; i < 3; i++) {
        const dot = screenDx * dirs[i].x + screenDy * dirs[i].y;
        if (Math.abs(dot) > 0.3) {
          const v = dotVals[keys[i]] + step * Math.sign(dot);
          newDot[keys[i]] = Math.max(0, Math.min(ext[keys[i]], v));
        }
      }
      setDotValues(newDot, getDotFace());
      requestRender();
    }
    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);
    canvas.addEventListener("keydown", onKeyDown);
    canvas.setAttribute("tabindex", "0");
    function destroy() {
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      canvas.removeEventListener("keydown", onKeyDown);
    }
    return { state, destroy };
  }

  // src/style.css?raw
  var style_default = ".box-picker {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\r\n  color: #e0e0e0;\r\n}\r\n\r\n.box-picker canvas {\r\n  display: block;\r\n  border-radius: 8px;\r\n  outline: none;\r\n}\r\n\r\n.box-corner-btn {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 42px;\r\n  height: 42px;\r\n  border: none;\r\n  background: transparent;\r\n  display: block;\r\n  cursor: pointer;\r\n  padding: 0;\r\n  z-index: 5;\r\n  border-radius: 8px;\r\n  opacity: 0; /* \u9ED8\u8BA4\u4E0E\u80CC\u666F\u540C\u8272\uFF08\u878D\u5165\uFF09\uFF0Chover \u624D\u663E\u793A */\r\n  transition: opacity 0.15s, background 0.15s;\r\n}\r\n.box-corner-btn svg { width: 42px; height: 42px; fill: var(--interactive-accent, #7B8CDE); } /* \u8DDF\u968F Obsidian \u4E3B\u9898\u5F3A\u8C03\u8272 */ /* \u975B\u84DD\u6C34\u6EF4\uFF08\u53C2\u8003\u56FE\u6837\u5F0F\uFF09 */\r\n/* \u5F39\u5C42\u6574\u4F53 hover \u65F6\u89D2\u6309\u94AE\u5373\u6D6E\u73B0\uFF08\u65E0\u9700\u7CBE\u786E\u60AC\u505C\u6309\u94AE\u672C\u8EAB\uFF09 */\r\n/* \u5404\u81EA\u89D2 hover \u624D\u51FA\u73B0\uFF1Ahover \u53F3\u4E0B\u89D2 \u2192 \u53F3\u4E0B\u6309\u94AE\uFF1Bhover \u5DE6\u4E0B\u89D2 \u2192 \u5DE6\u4E0B\u6309\u94AE\uFF08\u4E0D\u6574\u4F53\u540C\u65F6\u51FA\u73B0\uFF09 */\r\n.osheet-tb-box:hover .box-corner-left, .box-picker:hover .box-corner-left, .box-corner-left:hover { opacity: 1; }\r\n.osheet-tb-box:hover .box-corner-right, .box-picker:hover .box-corner-right, .box-corner-right:hover { opacity: 1; }\r\n.box-corner-btn:hover { opacity: 1; background: var(--background-modifier-hover, rgba(0,0,0,0.07)); }\r\n.box-corner-btn:hover svg { fill: var(--interactive-accent-hover, #5A6CC8); }\r\n.box-corner-btn, .box-corner-btn:hover, .box-corner-btn:focus, .box-corner-btn:active {\r\n  border: none !important;\r\n  background: transparent !important;\r\n  outline: none !important;\r\n  box-shadow: none !important;\r\n}\r\n.box-corner-left { left: -2px; bottom: -2px; } /* \u8D34\u8FB9\u6846\u8FB9\u7F18\uFF0C\u65E0\u7F1D\u9699 */\r\n.box-corner-right { right: -2px; bottom: -2px; }\r\n\r\n.box-picker-controls {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding-bottom: 12px; /* \u6A21\u5F0F\u6309\u94AE\u4E0E\u5E95\u90E8\u4FDD\u6301\u8FB9\u8DDD */\r\n}\r\n.box-picker-hexrow {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\n.box-picker-hexwrap {\r\n  display: flex;\r\n  flex: 1;\r\n  min-width: 0;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2px;\r\n}\r\n\r\n.box-picker-hexwrap label {\r\n  font-size: 10px;\r\n  text-transform: uppercase;\r\n  color: var(--text-faint, #999);\r\n}\r\n\r\n.box-picker-swatch {\r\n  width: 64px;\r\n  height: 64px;\r\n  border: none;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.box-picker-hex {\r\n  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;\r\n  font-size: 12px;\r\n  background: var(--background-secondary, rgba(0,0,0,0.04));\r\n  border: 1px solid var(--background-modifier-border, #d0d7de);\r\n  border-radius: 6px;\r\n  color: var(--text-normal, #333);\r\n  height: 30px;\r\n  box-sizing: border-box;\r\n  padding: 0 4px;\r\n  width: 100%;\r\n  text-align: center;\r\n  outline: none;\r\n  transition: border-color 0.15s, box-shadow 0.15s;\r\n}\r\n\r\n.box-picker-hex:focus {\r\n  border-color: #007AFF;\r\n  box-shadow: 0 0 0 3px rgba(0,122,255,0.22);\r\n}\r\n\r\n.box-picker-channels {\r\n  display: flex;\r\n  flex: 2;\r\n  min-width: 0;\r\n  gap: 6px;\r\n  font-size: 12px;\r\n  color: var(--text-muted, #666);\r\n}\r\n\r\n.box-picker-channel {\r\n  display: flex;\r\n  flex: 1;\r\n  min-width: 0;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2px;\r\n}\r\n\r\n.box-picker-channel label {\r\n  font-size: 10px;\r\n  text-transform: uppercase;\r\n  color: var(--text-faint, #999);\r\n}\r\n\r\n.box-picker-channel input {\r\n  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;\r\n  font-size: 12px;\r\n  background: var(--background-secondary, rgba(0,0,0,0.04));\r\n  border: 1px solid var(--background-modifier-border, #d0d7de);\r\n  border-radius: 6px;\r\n  color: var(--text-normal, #333);\r\n  height: 30px;\r\n  box-sizing: border-box;\r\n  padding: 0 4px;\r\n  width: 100%;\r\n  text-align: center;\r\n  outline: none;\r\n  transition: border-color 0.15s, box-shadow 0.15s;\r\n}\r\n\r\n.box-picker-channel input:focus {\r\n  border-color: #007AFF;\r\n  box-shadow: 0 0 0 3px rgba(0,122,255,0.22);\r\n}\r\n\r\n\r\n\r\n.box-picker-mode-toggle {\r\n  display: flex;\r\n  width: fit-content;\r\n  margin: 0 auto;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  border: 1px solid var(--background-modifier-border, #d0d7de);\r\n  background: var(--background-secondary, rgba(0,0,0,0.04));\r\n}\r\n\r\n.box-picker-mode-toggle button {\r\n  flex: none;\r\n  width: 64px;\r\n  height: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-sizing: border-box;\r\n  background: transparent;\r\n  border: none;\r\n  color: var(--text-muted, #666);\r\n  padding: 0;\r\n  font-size: 11px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: background 0.15s, color 0.15s;\r\n}\r\n\r\n.box-picker-mode-toggle button.active {\r\n  background: #007AFF;\r\n  color: #fff;\r\n}\r\n\r\n.box-picker-mode-toggle button:not(:last-child) {\r\n  border-right: 1px solid rgba(255,255,255,0.1);\r\n}\r\n\r\n\r\n/* ==== Obsidian \u4E3B\u9898\u9002\u914D\uFF08\u8986\u76D6\u6DF1\u8272\u9ED8\u8BA4\uFF1B\u7528 Obsidian \u53D8\u91CF\uFF0C\u81EA\u9002\u5E94\u6D45/\u6DF1\u4E3B\u9898\uFF09 ==== */\r\n.box-picker { color: var(--text-normal, #1a1a1a); }\r\n.box-picker-swatch { border-color: var(--background-modifier-border, #d0d7de); }\r\n.box-picker-hex {\r\n  background: var(--background-primary, #fff);\r\n  border-color: var(--background-modifier-border, #d0d7de);\r\n  color: var(--text-normal, #1a1a1a);\r\n}\r\n.box-picker-hex:focus { border-color: var(--interactive-accent, #2b6de8); }\r\n.box-picker-channels { color: var(--text-muted, #666); }\r\n.box-picker-channel label { color: var(--text-faint, #999); }\r\n.box-picker-channel input {\r\n  background: var(--background-primary, #fff);\r\n  border-color: var(--background-modifier-border, #d0d7de);\r\n  color: var(--text-normal, #1a1a1a);\r\n}\r\n.box-picker-channel input:focus { border-color: var(--interactive-accent, #2b6de8); }\r\n/* copy removed */\r\n  background: var(--background-secondary, #f2f3f5);\r\n  border-color: var(--background-modifier-border, #d0d7de);\r\n  color: var(--text-muted, #666);\r\n}\r\n/* copy hover removed */ { background: var(--background-modifier-hover, #e8e8e8); color: var(--text-normal, #1a1a1a); }\r\n.box-picker-mode-toggle { border-color: var(--background-modifier-border, #d0d7de); }\r\n.box-picker-mode-toggle button { background: var(--background-secondary, #f2f3f5); color: var(--text-muted, #666); }\r\n.box-picker-mode-toggle button:hover { color: var(--text-normal, #1a1a1a); }\r\n.box-picker-mode-toggle button.active { background: var(--interactive-accent, #2b6de8); color: #fff; }\r\n.box-picker-mode-toggle button:not(:last-child) { border-right-color: var(--background-modifier-border, #d0d7de); }\r\n\r\n/* \u901A\u9053\u6570\u503C\u5F3A\u5236\u53EF\u8BFB\uFF08!important \u9632 Obsidian \u5168\u5C40 input \u6837\u5F0F\u5E72\u6270\uFF09 */\r\n.box-picker-channel input {\r\n  color: var(--text-normal, #1a1a1a) !important;\r\n  background: var(--background-primary, #fff) !important;\r\n  border-color: var(--background-modifier-border, #d0d7de) !important;\r\n  font-size: 13px !important;\r\n  opacity: 1 !important;\r\n}\r\n.box-picker-channel label { color: var(--text-muted, #666) !important; }\r\n.box-picker-hexwrap label { color: var(--text-muted, #666) !important; }\r\n";

  // src/index.ts
  var createColorPicker = createBoxColorPicker;
  var styleInjected = false;
  function injectStyle() {
    if (styleInjected || typeof document === "undefined") return;
    styleInjected = true;
    const el = document.createElement("style");
    el.id = "color-is-box-style";
    el.textContent = style_default;
    document.head.appendChild(el);
  }
  function createBoxColorPicker(container, options = {}) {
    const size = options.size ?? 300;
    const showControls = options.controls ?? true;
    let mode = options.mode ?? "rgb";
    const initialColor = options.initialColor ? rgbToValues(options.initialColor, mode) : { x: 0.7, y: 0.4, z: 0.85 };
    let boxExtent = { x: 1, y: 1, z: 1 };
    let dotValues = { ...initialColor };
    let dotFace = 0;
    const listeners = /* @__PURE__ */ new Set();
    injectStyle();
    const root = document.createElement("div");
    root.className = "box-picker";
    const canvas = document.createElement("canvas");
    canvas.style.cursor = "grab";
    root.appendChild(canvas);
    const rc = createRenderContext(canvas, size);
    let swatch = null;
    let hexInput = null;
    const channelInputs = [];
    const channelLabels = [];
    if (showControls) {
      const controls = document.createElement("div");
      controls.className = "box-picker-controls";
      swatch = document.createElement("div");
      swatch.className = "box-picker-swatch";
      hexInput = document.createElement("input");
      hexInput.className = "box-picker-hex";
      hexInput.type = "text";
      hexInput.spellcheck = false;
      const modeToggle = document.createElement("div");
      modeToggle.className = "box-picker-mode-toggle";
      const rgbBtn = document.createElement("button");
      rgbBtn.textContent = "RGB";
      const hsbBtn = document.createElement("button");
      hsbBtn.textContent = "HSB";
      const oklchBtn = document.createElement("button");
      oklchBtn.textContent = "OKLCH";
      modeToggle.appendChild(oklchBtn);
      modeToggle.appendChild(rgbBtn);
      modeToggle.appendChild(hsbBtn);
      rgbBtn.addEventListener("click", () => switchMode("rgb"));
      hsbBtn.addEventListener("click", () => switchMode("hsb"));
      oklchBtn.addEventListener("click", () => switchMode("oklch"));
      hexInput.addEventListener("change", () => {
        const rgb = hexToRgb(hexInput.value);
        if (rgb) {
          dotValues = rgbToValues(boxInverted ? { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b } : rgb, mode);
          boxExtent = {
            x: Math.max(boxExtent.x, dotValues.x),
            y: Math.max(boxExtent.y, dotValues.y),
            z: Math.max(boxExtent.z, dotValues.z)
          };
          emitChange();
          updateUI();
          scheduleRender();
        } else {
          updateUI();
        }
      });
      hexInput.addEventListener("click", () => {
        const rgbNow = valuesToRgb(dotValues, mode);
        copyToClipboard(rgbToHex(rgbNow) || "#ffffff");
        flashInput(hexInput);
      });
      const channelRow = document.createElement("div");
      channelRow.className = "box-picker-channels";
      for (let i = 0; i < 3; i++) {
        const ch = document.createElement("div");
        ch.className = "box-picker-channel";
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "text";
        input.inputMode = "numeric";
        ch.appendChild(label);
        ch.appendChild(input);
        channelRow.appendChild(ch);
        channelInputs.push(input);
        channelLabels.push(label);
        input.addEventListener("change", () => {
          const max = AXIS_MAX[mode];
          const val = parseFloat(input.value);
          if (isNaN(val)) {
            updateUI();
            return;
          }
          const clamped = Math.max(0, Math.min(max[i], val));
          const keys = ["x", "y", "z"];
          const normalized = clamped / max[i];
          if (boxInverted) {
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
        input.addEventListener("click", () => {
          const rgbNow = valuesToRgb(dotValues, mode);
          copyToClipboard(`${rgbNow.r}, ${rgbNow.g}, ${rgbNow.b}`);
          flashInput(input);
        });
      }
      controls.appendChild(swatch);
      const hexRow = document.createElement("div");
      hexRow.className = "box-picker-hexrow";
      const hexWrap = document.createElement("div");
      hexWrap.className = "box-picker-hexwrap";
      const hexLabel = document.createElement("label");
      hexLabel.textContent = "Hex";
      hexWrap.appendChild(hexLabel);
      hexWrap.appendChild(hexInput);
      hexRow.appendChild(channelRow);
      hexRow.appendChild(hexWrap);
      controls.appendChild(hexRow);
      controls.appendChild(modeToggle);
      root.appendChild(controls);
      try {
        const toggle = controls.querySelector(".box-picker-mode-toggle");
        const syncRow = () => {
          if (toggle && toggle.offsetWidth > 0) hexRow.style.width = toggle.offsetWidth + "px";
        };
        syncRow();
        requestAnimationFrame(() => syncRow());
      } catch {
      }
      const updateModeButtons = () => {
        rgbBtn.classList.toggle("active", mode === "rgb");
        hsbBtn.classList.toggle("active", mode === "hsb");
        oklchBtn.classList.toggle("active", mode === "oklch");
      };
      updateModeButtons();
      root._updateModeButtons = updateModeButtons;
    }
    container.appendChild(root);
    const interaction = createInteraction(
      canvas,
      () => boxExtent,
      (ext) => {
        boxExtent = ext;
      },
      () => dotValues,
      (dv, face) => {
        dotValues = dv;
        dotFace = face;
        emitChange();
        updateUI();
      },
      () => dotFace,
      () => rc.scale,
      () => rc.center,
      scheduleRender
    );
    let boxInverted = false;
    let showAxisLabels = true;
    canvas.addEventListener("mouseenter", () => {
      showAxisLabels = Math.random() < 0.5;
      scheduleRender();
    });
    canvas.addEventListener("mouseleave", () => {
      showAxisLabels = Math.random() < 0.5;
      scheduleRender();
    });
    canvas.addEventListener("dblclick", () => {
      boxInverted = !boxInverted;
      setBoxInvert(boxInverted);
      emitChange();
      updateUI();
      scheduleRender();
    });
    function switchMode(newMode) {
      if (newMode === mode) return;
      const rgb = valuesToRgb(dotValues, mode);
      const oldDot = { ...dotValues };
      const oldExt = { ...boxExtent };
      mode = newMode;
      const newDot = rgbToValues(rgb, mode);
      const newExt = { x: 1, y: 1, z: 1 };
      dotValues = newDot;
      boxExtent = newExt;
      animateTransition(oldDot, newDot, oldExt, newExt, 300);
      updateUI();
    }
    let animationId = null;
    function animateTransition(fromDot, toDot, fromExt, toExt, durationMs) {
      if (animationId !== null) cancelAnimationFrame(animationId);
      const start = performance.now();
      function tick(now) {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / durationMs);
        const ease = 1 - Math.pow(1 - t, 3);
        dotValues = {
          x: fromDot.x + (toDot.x - fromDot.x) * ease,
          y: fromDot.y + (toDot.y - fromDot.y) * ease,
          z: fromDot.z + (toDot.z - fromDot.z) * ease
        };
        boxExtent = {
          x: fromExt.x + (toExt.x - fromExt.x) * ease,
          y: fromExt.y + (toExt.y - fromExt.y) * ease,
          z: fromExt.z + (toExt.z - fromExt.z) * ease
        };
        renderFrame();
        emitChange();
        if (t < 1) {
          animationId = requestAnimationFrame(tick);
        } else {
          animationId = null;
        }
      }
      animationId = requestAnimationFrame(tick);
    }
    let renderScheduled = false;
    function scheduleRender() {
      if (renderScheduled) return;
      renderScheduled = true;
      requestAnimationFrame(() => {
        renderScheduled = false;
        renderFrame();
      });
    }
    let breathRunning = true;
    (function breathTick() {
      if (!breathRunning) return;
      scheduleRender();
      requestAnimationFrame(breathTick);
    })();
    function renderFrame() {
      render(rc, boxExtent, dotValues, dotFace, mode, interaction.state, showAxisLabels);
    }
    function mixChannel(c, target, amt) {
      return Math.round(c + (target - c) * amt);
    }
    function shadeColor(rgb, amt) {
      const t = amt > 0 ? 255 : 0;
      const a = Math.abs(amt);
      return rgbToHex({ r: mixChannel(rgb.r, t, a), g: mixChannel(rgb.g, t, a), b: mixChannel(rgb.b, t, a) });
    }
    function renderSwatchBox(el, hex) {
      const rgb = hexToRgb(hex) || { r: 128, g: 128, b: 128 };
      const top = shadeColor(rgb, 0.35);
      const left = shadeColor(rgb, 0);
      const right = shadeColor(rgb, -0.35);
      el.innerHTML = `<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${top}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${left}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${right}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`;
      el.style.backgroundColor = "transparent";
    }
    function copyToClipboard(text) {
      try {
        navigator.clipboard.writeText(text).catch(() => {
        });
      } catch {
      }
    }
    function flashInput(el) {
      if (!el) return;
      el.style.borderColor = "#4ade80";
      el.style.boxShadow = "0 0 0 2px rgba(74,222,128,.35)";
      setTimeout(() => {
        el.style.borderColor = "";
        el.style.boxShadow = "";
      }, 500);
    }
    function displayRgb() {
      const rgb = valuesToRgb(dotValues, mode);
      return boxInverted ? { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b } : rgb;
    }
    function updateUI() {
      if (!showControls) return;
      const rgb = displayRgb();
      const hex = rgbToHex(rgb);
      if (swatch) renderSwatchBox(swatch, hex);
      if (hexInput) hexInput.value = hex;
      updateChannelValues();
      if (root._updateModeButtons) root._updateModeButtons();
    }
    function updateChannelValues() {
      if (!showControls) return;
      const labels = AXIS_LABELS[mode];
      const dispValues = boxInverted ? rgbToValues(displayRgb(), mode) : dotValues;
      const channels = valuesToChannels(dispValues, mode);
      for (let i = 0; i < channelInputs.length; i++) {
        channelLabels[i].textContent = labels[i];
        channelLabels[i].style.color = "";
        channelLabels[i].style.textShadow = "none";
        channelInputs[i].value = String(channels[i]);
      }
    }
    function emitChange() {
      const rgb = displayRgb();
      const output = {
        rgb,
        hsb: rgbToHsb(rgb),
        oklch: rgbToOklch(rgb),
        hex: rgbToHex(rgb)
      };
      for (const cb of listeners) cb(output);
    }
    function getColor() {
      const rgb = valuesToRgb(dotValues, mode);
      return { rgb, hsb: rgbToHsb(rgb), oklch: rgbToOklch(rgb), hex: rgbToHex(rgb) };
    }
    updateUI();
    renderFrame();
    const setColor = (color) => {
      dotValues = rgbToValues(color, mode);
      boxExtent = {
        x: Math.max(boxExtent.x, dotValues.x),
        y: Math.max(boxExtent.y, dotValues.y),
        z: Math.max(boxExtent.z, dotValues.z)
      };
      const pt = project(dotValues, rc.scale, rc.center);
      dotFace = -1;
      for (let fi = FACES.length - 1; fi >= 0; fi--) {
        if (faceHitTest(fi, pt, boxExtent, rc.scale, rc.center)) {
          dotFace = fi;
          break;
        }
      }
      emitChange();
      updateUI();
      scheduleRender();
    };
    if (showControls) {
      const rndBtn = document.createElement("button");
      rndBtn.className = "box-corner-btn box-corner-left";
      rndBtn.title = "Random color";
      rndBtn.innerHTML = '<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>';
      rndBtn.addEventListener("click", () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor({ r, g, b });
      });
      root.appendChild(rndBtn);
      const rstBtn = document.createElement("button");
      rstBtn.className = "box-corner-btn box-corner-right";
      rstBtn.title = "Reset";
      rstBtn.innerHTML = '<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>';
      rstBtn.addEventListener("click", () => {
        setColor({ r: 0, g: 0, b: 0 });
      });
      root.appendChild(rstBtn);
    }
    return {
      getColor,
      getMode: () => mode,
      setColor,
      setMode(m) {
        switchMode(m);
      },
      on(event, callback) {
        listeners.add(callback);
      },
      off(event, callback) {
        listeners.delete(callback);
      },
      destroy() {
        breathRunning = false;
        interaction.destroy();
        if (animationId !== null) cancelAnimationFrame(animationId);
        container.removeChild(root);
      }
    };
  }

  // src/element.ts
  function hexToRgbSafe(hex) {
    const m = hex.match(/^#?([0-9a-f]{6})$/i);
    if (!m) return { r: 255, g: 255, b: 255 };
    const n = parseInt(m[1], 16);
    return { r: n >> 16 & 255, g: n >> 8 & 255, b: n & 255 };
  }
  var ColorIsBoxElement = class extends HTMLElement {
    holder = null;
    picker = null;
    internal = false;
    static get observedAttributes() {
      return ["value", "mode", "size"];
    }
    connectedCallback() {
      if (this.picker) return;
      this.holder = document.createElement("div");
      this.appendChild(this.holder);
      const size = parseInt(this.getAttribute("size") || "280", 10);
      this.picker = createColorPicker(this.holder, {
        initialColor: hexToRgbSafe(this.getAttribute("value") || "#ffffff"),
        size,
        controls: true
      });
      this.picker.on("change", (c) => {
        if (this.internal) return;
        this.internal = true;
        this.setAttribute("value", c.hex);
        this.internal = false;
        this.dispatchEvent(new CustomEvent("change", { detail: c }));
        this.dispatchEvent(new CustomEvent("color-changed", { detail: c.hex }));
      });
      const mode = this.getAttribute("mode");
      if (mode) this.picker.setMode(mode);
    }
    attributeChangedCallback(name, _o, val) {
      if (!this.picker || !val || this.internal) return;
      if (name === "value") this.picker.setColor(hexToRgbSafe(val));
      else if (name === "mode") this.picker.setMode(val);
    }
    get value() {
      return this.getAttribute("value") || "#ffffff";
    }
    set value(v) {
      this.setAttribute("value", v);
    }
    get mode() {
      return this.getAttribute("mode") || "rgb";
    }
    set mode(m) {
      this.setAttribute("mode", m);
    }
    disconnectedCallback() {
      try {
        this.picker?.destroy();
      } catch {
      }
      this.picker = null;
      if (this.holder) {
        try {
          this.holder.remove();
        } catch {
        }
        this.holder = null;
      }
    }
  };
  if (!customElements.get("color-is-box")) {
    customElements.define("color-is-box", ColorIsBoxElement);
  }
  var element_default = ColorIsBoxElement;
  return __toCommonJS(element_exports);
})();
