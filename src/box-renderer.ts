import type { Vec2, Vec3, ColorMode, RGBColor } from './types';
import { AXIS_LABELS } from './types';
import { faceColor, valuesToRgb, rgbToHex } from './color-math';

const ISO_ANGLE = Math.PI / 6; // 30°
const COS30 = Math.cos(ISO_ANGLE);
const SIN30 = Math.sin(ISO_ANGLE);

/** Project a 3D point to 2D screen coordinates. */
let invertMode = false;
/** 切换整个立方体的颜色翻转（所有面渐变取反，白↔黑） */
export function setBoxInvert(v: boolean): void { invertMode = v; }

// ── 视角旋转（0,0 = 灰轴正对，六边形视图）──
let viewYaw = 0;
let viewPitch = 0;
export function setViewRotation(yaw: number, pitch: number): void { viewYaw = yaw; viewPitch = pitch; }
export function getViewRotation(): { yaw: number; pitch: number } { return { yaw: viewYaw, pitch: viewPitch }; }
export function resetViewRotation(): void { viewYaw = 0; viewPitch = 0; }

/** 方向向量旋转（无中心偏移，用于法线等） */
function rotDir(d: Vec3): Vec3 {
  if (viewYaw === 0 && viewPitch === 0) return d;
  const cy = Math.cos(viewYaw), sy = Math.sin(viewYaw);
  const cx = Math.cos(viewPitch), sx = Math.sin(viewPitch);
  const x = d.x * cy + d.z * sy;
  const y = d.y;
  const z = -d.x * sy + d.z * cy;
  const y2 = y * cx - z * sx;
  const z2 = y * sx + z * cx;
  return { x, y: y2, z: z2 };
}

/** 视角旋转后的 3D 坐标（0,0 视角 = 恒等） */
function rotPoint(p: Vec3): Vec3 {
  if (viewYaw === 0 && viewPitch === 0) return p;
  const v = { x: p.x - 0.5, y: p.y - 0.5, z: p.z - 0.5 };
  const cy = Math.cos(viewYaw), sy = Math.sin(viewYaw);
  const cx = Math.cos(viewPitch), sx = Math.sin(viewPitch);
  const x = v.x * cy + v.z * sy;
  const y = v.y;
  const z = -v.x * sy + v.z * cy;
  const y2 = y * cx - z * sx;
  const z2 = y * sx + z * cx;
  return { x: x + 0.5, y: y2 + 0.5, z: z2 + 0.5 };
}

export function project(p: Vec3, scale: number, center: Vec2): Vec2 {
  const q = rotPoint(p);
  return {
    x: center.x + (q.y - q.x) * COS30 * scale,
    y: center.y + q.z * scale - (q.x + q.y) * SIN30 * scale,
  };
}

function boxVertices(ext: Vec3): Vec3[] {
  const { x: w, y: h, z: d } = ext;
  return [
    { x: 0, y: 0, z: 0 },
    { x: w, y: 0, z: 0 },
    { x: 0, y: h, z: 0 },
    { x: 0, y: 0, z: d },
    { x: w, y: h, z: 0 },
    { x: w, y: 0, z: d },
    { x: 0, y: h, z: d },
    { x: w, y: h, z: d },
  ];
}

export interface FaceDef {
  quad: [number, number, number, number];
  fixedAxis: number;
  uAxis: number;
  vAxis: number;
  /** 外法线（用于旋转后的正/背面判定；不依赖 quad 顺序，渐变方向不受影响） */
  normal: Vec3;
}

export const FACES: FaceDef[] = [
  // Top face — z fixed (1), varying x and y
  { quad: [3, 5, 7, 6], fixedAxis: 2, uAxis: 0, vAxis: 1, normal: { x: 0, y: 0, z: 1 } },
  // Right face — x fixed (1), varying y and z
  { quad: [1, 4, 7, 5], fixedAxis: 0, uAxis: 1, vAxis: 2, normal: { x: 1, y: 0, z: 0 } },
  // Left face — y fixed (1), varying x and z
  { quad: [2, 4, 7, 6], fixedAxis: 1, uAxis: 0, vAxis: 2, normal: { x: 0, y: 1, z: 0 } },
  // Back faces（旋转后可见）
  { quad: [0, 2, 4, 1], fixedAxis: 2, uAxis: 1, vAxis: 0, normal: { x: 0, y: 0, z: -1 } }, // bottom — z fixed (0)
  { quad: [0, 3, 6, 2], fixedAxis: 0, uAxis: 2, vAxis: 1, normal: { x: -1, y: 0, z: 0 } }, // back-left — x fixed (0)
  { quad: [0, 1, 5, 3], fixedAxis: 1, uAxis: 0, vAxis: 2, normal: { x: 0, y: -1, z: 0 } }, // back-right — y fixed (0)
];

const FACE_RES = 64; // 128→64: 逐像素渐变计算量降为 1/4，300px 画布经 drawImage 平滑放大，视觉无感知

export interface RenderContext {
  ctx: CanvasRenderingContext2D;
  scale: number;
  center: Vec2;
  width: number;
  height: number;
}

export interface RenderState {
  alphaMode: boolean;
  /** 旋转立方体（旋钮调饱和度）进行中 */
  viewRotating: boolean;
  hoveredAxisHandle: number;
  draggingAxisHandle: number;
  hoveredFace: number;
  draggingFace: number;
}

export const DEFAULT_RENDER_STATE: RenderState = {
  alphaMode: false,
  viewRotating: false,
  hoveredAxisHandle: -1,
  draggingAxisHandle: -1,
  hoveredFace: -1,
  draggingFace: -1,
};

export function createRenderContext(canvas: HTMLCanvasElement, viewportSize: number): RenderContext {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = viewportSize * dpr;
  canvas.height = viewportSize * 0.84 * dpr; // 投影 0.64×viewport，顶部/底部预留标签与投影空间
  canvas.style.width = `${viewportSize}px`;
  canvas.style.height = `${viewportSize * 0.84}px`;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(dpr, dpr);

  return {
    ctx,
    scale: viewportSize * 0.32,
    center: { x: viewportSize / 2, y: viewportSize * 0.4 },
    width: viewportSize,
    height: viewportSize * 0.84,
  };
}

/**
 * Render the box.
 *
 * @param boxExtent  The box size along each axis (0–1), set by axis handles.
 * @param dotValues   The selected color (0–1 per axis), determines dot position.
 * @param dotFace     Which face the dot is on (0/1/2), or -1 for none.
 */
export function render(
  rc: RenderContext,
  boxExtent: Vec3,
  dotValues: Vec3,
  dotFace: number,
  mode: ColorMode,
  rs: RenderState,
  showLabels = true,
  alphaRing: { active: boolean; alpha: number; rgb: RGBColor } | null = null,
): void {
  const { ctx, scale, center, width, height } = rc;
  ctx.save();
  ctx.clearRect(0, 0, width, height);

  const verts3 = boxVertices(boxExtent);
  const verts2d = verts3.map(v => project(v, scale, center));

  drawAxisLines(ctx, scale, center, mode);
  // 边框阴影：贴合立方体外轮廓的柔和阴影（类似 CSS box-shadow 贴元素）
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.35)';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  drawFaces(ctx, verts2d, verts3, boxExtent, mode, rs.viewRotating);
  ctx.restore();
  // 旋转时隐藏顶点字母标签（旋转是空间操作，标签只属于默认视角）
  if (showLabels && !rs.viewRotating) drawAxisLabels(ctx, mode, scale, center);
  // 黑白端点圆点：白点（dot 为白时即其位置）的体对角线另一端 = 黑点，始终标出
  if (rs.viewRotating) {
    const pO = project({ x: 0, y: 0, z: 0 }, scale, center);
    const pW = project({ x: 1, y: 1, z: 1 }, scale, center);
    ctx.beginPath(); ctx.arc(pO.x, pO.y, 7, 0, Math.PI * 2); ctx.fillStyle = '#000'; ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.beginPath(); ctx.arc(pW.x, pW.y, 7, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill(); ctx.strokeStyle = 'rgba(0,0,0,.55)'; ctx.lineWidth = 1.2; ctx.stroke();
    ctx.font = '9px monospace';
    ctx.fillStyle = 'rgba(51,65,85,.85)';
    ctx.textAlign = 'left';
    ctx.fillText('0', pO.x + 10, pO.y + 12);
    ctx.fillText('255,255,255', pW.x + 10, pW.y + 12);
  }
  // 8 个顶点颜色圆点（旋转时）：白色顶点的体对角线另一端 = 黑色顶点，所有顶点颜色完整呈现
  if (rs.viewRotating) {
    const VPT = [
      { p: { x: 0, y: 0, z: 0 }, c: '#000000', r: 7 }, { p: { x: 1, y: 1, z: 1 }, c: '#ffffff', r: 7 },
      { p: { x: 1, y: 0, z: 0 }, c: '#ff0000', r: 5 }, { p: { x: 0, y: 1, z: 0 }, c: '#00cc00', r: 5 },
      { p: { x: 0, y: 0, z: 1 }, c: '#0000ff', r: 5 }, { p: { x: 1, y: 1, z: 0 }, c: '#ffff00', r: 5 },
      { p: { x: 0, y: 1, z: 1 }, c: '#00dddd', r: 5 }, { p: { x: 1, y: 0, z: 1 }, c: '#ff00aa', r: 5 },
    ];
    for (const vp of VPT) {
      const q = project(vp.p, scale, center);
      ctx.beginPath(); ctx.arc(q.x, q.y, vp.r, 0, Math.PI * 2);
      ctx.fillStyle = vp.c;
      ctx.fill();
      ctx.strokeStyle = vp.c === '#000000' ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.45)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
  }
  // 顶点圆点指示器已移除（drawAxisHandles 不再绘制）
  // 顶点圆点指示器已移除（drawAxisHandles 不再绘制）
  // 顶点圆点指示器已移除（drawAxisHandles 不再绘制）

  // Draw the color dot on the face
  if (dotFace >= 0) {
    const rgb = valuesToRgb(dotValues, mode);
    const dotRgb = invertMode ? { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b } : rgb; // 内芯 = 该位置反转布局下的色值（与色块/数值一致）
    const dotPos = project(dotValues, scale, center);
  if (alphaRing && alphaRing.active) drawAlphaRing(ctx, dotPos, alphaRing.rgb, alphaRing.alpha);
    drawColorDot(ctx, dotPos, dotRgb);
  }

  ctx.restore();
}

// ── Axis lines ────────────────────────────────────────────────────────────

const AXIS_COLORS: Record<ColorMode, [string, string, string]> = {
  rgb: ['rgba(255,100,100,0.4)', 'rgba(100,255,100,0.4)', 'rgba(100,150,255,0.4)'],
  hsb: ['rgba(255,100,100,0.4)', 'rgba(100,255,100,0.4)', 'rgba(100,150,255,0.4)'],
  oklch: ['rgba(220,220,220,0.4)', 'rgba(255,180,60,0.4)', 'rgba(180,120,255,0.4)'],
};

const HANDLE_COLORS: Record<ColorMode, [string, string, string]> = {
  rgb: ['rgba(255,100,100,0.9)', 'rgba(100,255,100,0.9)', 'rgba(100,150,255,0.9)'],
  hsb: ['rgba(255,100,100,0.9)', 'rgba(100,255,100,0.9)', 'rgba(100,150,255,0.9)'],
  oklch: ['rgba(220,220,220,0.9)', 'rgba(255,180,60,0.9)', 'rgba(180,120,255,0.9)'],
};

function drawAxisLines(ctx: CanvasRenderingContext2D, scale: number, center: Vec2, mode: ColorMode): void {
  const origin = project({ x: 0, y: 0, z: 0 }, scale, center);
  const tips = [
    project({ x: 1, y: 0, z: 0 }, scale, center),
    project({ x: 0, y: 1, z: 0 }, scale, center),
    project({ x: 0, y: 0, z: 1 }, scale, center),
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

// ── Back edges ────────────────────────────────────────────────────────────

function drawBackEdges(ctx: CanvasRenderingContext2D, v: Vec2[]): void {
  const edges: [number, number][] = [[1, 3], [2, 3], [1, 2]];
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  for (const [a, b] of edges) {
    ctx.beginPath();
    ctx.moveTo(v[a].x, v[a].y);
    ctx.lineTo(v[b].x, v[b].y);
    ctx.stroke();
  }
}

// ── Faces ─────────────────────────────────────────────────────────────────

function drawFaces(
  ctx: CanvasRenderingContext2D,
  verts2d: Vec2[],
  verts3: Vec3[],
  boxExtent: Vec3,
  mode: ColorMode,
  rotating: boolean,
): void {
  const ext = [boxExtent.x, boxExtent.y, boxExtent.z];

  for (let fi = 0; fi < FACES.length; fi++) {
    const face = FACES[fi];
    const fixedVal = ext[face.fixedAxis];
    const uMax = ext[face.uAxis];
    const vMax = ext[face.vAxis];
    if (uMax < 0.002 && vMax < 0.002) continue;

    // 旋转后法线 → 正/背面判定（观察者在 (1,1,1) 方向）
    const n = rotDir(face.normal);
    const front = n.x + n.y + n.z > 0;

    const corners = face.quad.map(i => verts2d[i]);
    if (front) {
      // 正面：完整渐变填充（颜色始终正确）
      renderFaceGradient(ctx, corners, face.fixedAxis, fixedVal, uMax, vMax, mode);
    } else {
      // 背面：同款渐变但淡色（旋转时立方体保持实体，颜色语义不变）
      ctx.save();
      ctx.globalAlpha = 0; // 背面不画：立方体不透明实体渲染（凸体自然遮挡）
      renderFaceGradient(ctx, corners, face.fixedAxis, fixedVal, uMax, vMax, mode);
      ctx.restore();
    }
  }
}

function renderFaceGradient(
  ctx: CanvasRenderingContext2D,
  corners: Vec2[],
  fixedAxis: number,
  fixedVal: number,
  uMax: number,
  vMax: number,
  mode: ColorMode,
): void {
  const res = FACE_RES;
  const offscreen = document.createElement('canvas');
  offscreen.width = res;
  offscreen.height = res;
  const offCtx = offscreen.getContext('2d')!;
  const imgData = offCtx.createImageData(res, res);
  const data = imgData.data;

  for (let py = 0; py < res; py++) {
    for (let px = 0; px < res; px++) {
      const u = (px / (res - 1)) * uMax;
      const v = (py / (res - 1)) * vMax;
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

  // Clip to the exact parallelogram so no antialiased fringe
  // bleeds at the seams between adjacent faces.
  ctx.beginPath();
  ctx.moveTo(p00.x, p00.y);
  ctx.lineTo(p10.x, p10.y);
  ctx.lineTo(p11.x, p11.y);
  ctx.lineTo(p01.x, p01.y);
  ctx.closePath();
  ctx.clip();

  // Draw the texture slightly oversized so it fills the clip
  // region edge-to-edge without any sub-pixel gaps.
  const extend = 2.0 / res;
  const ox = p00.x - ax * extend - bx * extend;
  const oy = p00.y - ay * extend - by * extend;
  const sx = 1 + 2 * extend;
  const sy = 1 + 2 * extend;

  ctx.transform(
    (ax * sx) / res, (ay * sx) / res,
    (bx * sy) / res, (by * sy) / res,
    ox, oy,
  );
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(offscreen, 0, 0);
  ctx.restore();
}

// ── Front edges ───────────────────────────────────────────────────────────

function drawFrontEdges(ctx: CanvasRenderingContext2D, v: Vec2[]): void {
  const edges: [number, number][] = [[7, 4], [7, 5], [7, 6]];
  ctx.strokeStyle = 'rgba(255,255,255,0.3)';
  ctx.lineWidth = 1;
  for (const [a, b] of edges) {
    ctx.beginPath();
    ctx.moveTo(v[a].x, v[a].y);
    ctx.lineTo(v[b].x, v[b].y);
    ctx.stroke();
  }
  const outerEdges: [number, number][] = [
    [3, 5], [5, 1], [1, 4], [4, 2], [2, 6], [6, 3],
  ];
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  for (const [a, b] of outerEdges) {
    ctx.beginPath();
    ctx.moveTo(v[a].x, v[a].y);
    ctx.lineTo(v[b].x, v[b].y);
    ctx.stroke();
  }
}

// ── Labels ────────────────────────────────────────────────────────────────

function drawAxisLabels(ctx: CanvasRenderingContext2D, mode: ColorMode, scale: number, center: Vec2): void {
  const labels = AXIS_LABELS[mode];
  const positions = invertMode
    ? [
        project({ x: 0, y: 1, z: 1 }, scale, center), // 反转后红色出现在原青区（右下）：R 文本跟随
        project({ x: 1, y: 0, z: 1 }, scale, center), // 反转后绿色出现在原品红区（左下）：G 文本跟随
        project({ x: 1, y: 1, z: 0 }, scale, center), // 反转后蓝色出现在原黄区（顶部）：B 文本跟随
      ]
    : [
        project({ x: 1, y: 0, z: 0 }, scale, center),
        project({ x: 0, y: 1, z: 0 }, scale, center),
        project({ x: 0, y: 0, z: 1 }, scale, center),
      ];
  const offsets: Vec2[] = invertMode
    ? [{ x: 14, y: 6 }, { x: -14, y: 6 }, { x: 0, y: -10 }]
    : [{ x: -16, y: -6 }, { x: 16, y: -6 }, { x: 0, y: 12 }];
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // 文字阴影（柔和投影）
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.35)';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  // 顶点字母：统一灰色加粗，固定绘制（不跟随顶点颜色）
  for (let i = 0; i < 3; i++) {
    const tx = positions[i].x + offsets[i].x;
    const ty = positions[i].y + offsets[i].y;
    ctx.globalAlpha = 0.9;
    ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.fillStyle = '#888888';
    ctx.fillText(labels[i], tx, ty);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

// ── Axis handles ──────────────────────────────────────────────────────────

function drawAxisHandles(ctx: CanvasRenderingContext2D, verts2d: Vec2[], rs: RenderState, mode: ColorMode): void {
  const handleVerts = [1, 2, 3];
  const colors = HANDLE_COLORS[mode];

  for (let i = 0; i < 3; i++) {
    const pos = verts2d[handleVerts[i]];
    const hovered = rs.hoveredAxisHandle === i;
    const dragging = rs.draggingAxisHandle === i;
    const radius = dragging ? 8 : hovered ? 7 : 5;

    if (hovered || dragging) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, radius + 5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius + 2, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = colors[i];
    ctx.fill();
  }
}

// ── Color dot ─────────────────────────────────────────────────────────────



// ── Alpha ring ────────────────────────────────────────────────────────────

export const ALPHA_R_OUT = 30;
export const ALPHA_R_IN = 13;

function drawAlphaRing(ctx: CanvasRenderingContext2D, center: Vec2, rgb: { r: number; g: number; b: number }, alpha: number): void {
  const mid = (ALPHA_R_OUT + ALPHA_R_IN) / 2;
  const cell = 5;
  const x0 = Math.floor(center.x / cell) * cell;
  const y0 = Math.floor(center.y / cell) * cell;
  const span = ALPHA_R_OUT * 2 + cell * 2;
  const a = Math.max(0, Math.min(1, alpha));

  // 环带裁剪
  ctx.save();
  ctx.beginPath();
  ctx.arc(center.x, center.y, ALPHA_R_OUT, 0, Math.PI * 2);
  ctx.arc(center.x, center.y, ALPHA_R_IN, 0, Math.PI * 2, true);
  ctx.clip();

  // 棋盘格底（透明指示）
  for (let i = -1; i * cell <= span; i++) {
    for (let j = -1; j * cell <= span; j++) {
      ctx.fillStyle = (i + j) % 2 === 0 ? '#ffffff' : '#d9d9d9';
      ctx.fillRect(x0 + i * cell, y0 + j * cell, cell, cell);
    }
  }

  // alpha 锥形渐变：12 点方向 = 0%，顺时针转满一圈 = 100%
  const rgba0 = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0)';
  const rgba1 = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',1)';
  const anyCtx = ctx as unknown as { createConicGradient?: (start: number, x: number, y: number) => CanvasGradient };
  if (typeof anyCtx.createConicGradient === 'function') {
    const grad = anyCtx.createConicGradient!(-Math.PI / 2, center.x, center.y);
    grad.addColorStop(0, rgba0);
    grad.addColorStop(1, rgba1);
    ctx.fillStyle = grad;
    ctx.fillRect(x0 - ALPHA_R_OUT, y0 - ALPHA_R_OUT, span, span);
  } else {
    // fallback：36 段 arc 模拟锥形渐变
    const SEG = 36;
    for (let k = 0; k < SEG; k++) {
      const a0 = -Math.PI / 2 + (k / SEG) * Math.PI * 2;
      const a1 = -Math.PI / 2 + ((k + 1) / SEG) * Math.PI * 2;
      const t = (k + 0.5) / SEG;
      ctx.beginPath();
      ctx.moveTo(center.x + Math.cos(a0) * ALPHA_R_IN, center.y + Math.sin(a0) * ALPHA_R_IN);
      ctx.arc(center.x, center.y, ALPHA_R_OUT, a0, a1);
      ctx.arc(center.x, center.y, ALPHA_R_IN, a1, a0, true);
      ctx.closePath();
      ctx.fillStyle = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + t.toFixed(3) + ')';
      ctx.fill();
    }
  }
  ctx.restore();

  // 环描边
  ctx.beginPath();
  ctx.arc(center.x, center.y, ALPHA_R_OUT, 0, Math.PI * 2);
  ctx.arc(center.x, center.y, ALPHA_R_IN, 0, Math.PI * 2, true);
  ctx.strokeStyle = 'rgba(0,0,0,.18)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // 12 点刻度
  ctx.beginPath();
  ctx.arc(center.x, center.y - ALPHA_R_OUT - 3, 1.8, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(0,0,0,.28)';
  ctx.fill();

  // alpha 指示器（中径白点）
  const ang = a * Math.PI * 2;
  const ix = center.x + mid * Math.sin(ang);
  const iy = center.y - mid * Math.cos(ang);
  ctx.beginPath();
  ctx.arc(ix, iy, 5.5, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,0,0,.45)';
  ctx.lineWidth = 1.2;
  ctx.stroke();
}
function drawColorDot(ctx: CanvasRenderingContext2D, pos: Vec2, rgb: { r: number; g: number; b: number }): void {
  // 圆形选择指示器：外环白 + 内部当前色
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
  ctx.fillStyle = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
  ctx.fill();
}

// ── Geometry helpers ──────────────────────────────────────────────────────

export function getAxisHandlePos(axisIndex: number, boxExtent: Vec3, scale: number, center: Vec2): Vec2 {
  const positions: Vec3[] = [
    { x: boxExtent.x, y: 0, z: 0 },
    { x: 0, y: boxExtent.y, z: 0 },
    { x: 0, y: 0, z: boxExtent.z },
  ];
  return project(positions[axisIndex], scale, center);
}

export function getAxisDirections(): Vec2[] {
  const origin: Vec2 = { x: 0, y: 0 };
  const tips = [
    project({ x: 1, y: 0, z: 0 }, 1, origin),
    project({ x: 0, y: 1, z: 0 }, 1, origin),
    project({ x: 0, y: 0, z: 1 }, 1, origin),
  ];
  return tips.map(t => {
    const len = Math.sqrt(t.x * t.x + t.y * t.y);
    return len > 0 ? { x: t.x / len, y: t.y / len } : { x: 0, y: 0 };
  });
}

/**
 * Hit-test a point against a face's visible area (within boxExtent).
 * Returns (s, t) as fractions 0–1 of the face's current extent.
 * s=0,t=0 is the face origin; s=1,t=1 is the corner at the near vertex.
 */
export function faceHitTest(
  faceIndex: number,
  point: Vec2,
  boxExtent: Vec3,
  scale: number,
  center: Vec2,
): { s: number; t: number } | null {
  const face = FACES[faceIndex];
  const ext = [boxExtent.x, boxExtent.y, boxExtent.z];
  const uMax = ext[face.uAxis];
  const vMax = ext[face.vAxis];

  // Skip degenerate faces
  if (uMax < 0.002 || vMax < 0.002) return null;

  // Face origin in 3D: the corner where both varying axes are 0
  const faceOrigin: Vec3 = { x: 0, y: 0, z: 0 };
  const keys: (keyof Vec3)[] = ['x', 'y', 'z'];
  (faceOrigin as any)[keys[face.fixedAxis]] = ext[face.fixedAxis];

  // Basis vectors spanning the face (in 3D, scaled to boxExtent)
  const uEnd: Vec3 = { ...faceOrigin };
  (uEnd as any)[keys[face.uAxis]] = uMax;
  const vEnd: Vec3 = { ...faceOrigin };
  (vEnd as any)[keys[face.vAxis]] = vMax;

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

  // Small tolerance for edge clicks
  if (s < -0.05 || s > 1.05 || t < -0.05 || t > 1.05) return null;

  return {
    s: Math.max(0, Math.min(1, s)),
    t: Math.max(0, Math.min(1, t)),
  };
}

/**
 * Like faceHitTest but always returns a result (clamped to 0–1),
 * even when the cursor is far outside the face. Used with Option-drag
 * to lock the dot to the current face.
 */
export function faceHitTestUnclamped(
  faceIndex: number,
  point: Vec2,
  boxExtent: Vec3,
  scale: number,
  center: Vec2,
): { s: number; t: number } | null {
  const face = FACES[faceIndex];
  const ext = [boxExtent.x, boxExtent.y, boxExtent.z];
  const uMax = ext[face.uAxis];
  const vMax = ext[face.vAxis];

  if (uMax < 0.002 || vMax < 0.002) return null;

  const faceOrigin: Vec3 = { x: 0, y: 0, z: 0 };
  const keys: (keyof Vec3)[] = ['x', 'y', 'z'];
  (faceOrigin as any)[keys[face.fixedAxis]] = ext[face.fixedAxis];

  const uEnd: Vec3 = { ...faceOrigin };
  (uEnd as any)[keys[face.uAxis]] = uMax;
  const vEnd: Vec3 = { ...faceOrigin };
  (vEnd as any)[keys[face.vAxis]] = vMax;

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
    t: Math.max(0, Math.min(1, t)),
  };
}
