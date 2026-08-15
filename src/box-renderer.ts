import type { Vec2, Vec3, ColorMode, RGBColor, GuideVisibility, EdgeStyleConfig } from './types';
import { DEFAULT_GUIDES, DEFAULT_EDGE_CONFIG } from './types';
import { faceColor, valuesToRgb } from './color-math';
import { CameraConfig, BoxConfig, DEFAULT_CAMERA_CONFIG, DEFAULT_BOX_CONFIG, project3D, transform3D } from './camera-math';
import { drawGuides } from './guide-renderer';

export { CameraConfig, BoxConfig, DEFAULT_CAMERA_CONFIG, DEFAULT_BOX_CONFIG };

/** Project a 3D point to 2D screen coordinates. */
let invertMode = false;
/** 切换整个立方体的颜色翻转（所有面渐变取反，白↔黑） */
export function setBoxInvert(v: boolean): void { invertMode = v; }

// ── 独立相机与立方体几何参数 ──
let activeCamera: CameraConfig = { ...DEFAULT_CAMERA_CONFIG };
let activeBox: BoxConfig = { ...DEFAULT_BOX_CONFIG };

export function setCameraConfig(cam: Partial<CameraConfig>): void { activeCamera = { ...activeCamera, ...cam }; }
export function getCameraConfig(): CameraConfig { return { ...activeCamera }; }

export function setBoxGeometry(box: Partial<BoxConfig>): void { activeBox = { ...activeBox, ...box }; }
export function getBoxGeometry(): BoxConfig { return { ...activeBox }; }

export function setViewRotation(yaw: number, pitch: number): void {
  activeCamera.rotZRad = -30 * (Math.PI / 180) + yaw;
  activeCamera.rotXRad = 20 * (Math.PI / 180) + pitch;
}

export function getViewRotation(): { yaw: number; pitch: number } {
  return {
    yaw: activeCamera.rotZRad - (-30 * (Math.PI / 180)),
    pitch: activeCamera.rotXRad - (20 * (Math.PI / 180)),
  };
}

export function resetViewRotation(): void {
  activeCamera.rotXRad = 20 * (Math.PI / 180);
  activeCamera.rotYRad = 0;
  activeCamera.rotZRad = -30 * (Math.PI / 180);
}

export function getEulerRotation(): { rotX: number; rotY: number; rotZ: number } {
  return { rotX: activeCamera.rotXRad, rotY: activeCamera.rotYRad, rotZ: activeCamera.rotZRad };
}

export function setEulerRotation(rxRad: number, ryRad: number, rzRad: number): void {
  activeCamera.rotXRad = rxRad;
  activeCamera.rotYRad = ryRad;
  activeCamera.rotZRad = rzRad;
}

export function getRotationDeg(): { rotXDeg: number; rotYDeg: number; rotZDeg: number } {
  return {
    rotXDeg: Math.round((activeCamera.rotXRad * 180 / Math.PI) * 10) / 10,
    rotYDeg: Math.round((activeCamera.rotYRad * 180 / Math.PI) * 10) / 10,
    rotZDeg: Math.round((activeCamera.rotZRad * 180 / Math.PI) * 10) / 10,
  };
}

export function setRotationDeg(xDeg: number, yDeg: number, zDeg: number): void {
  activeCamera.rotXRad = (xDeg * Math.PI) / 180;
  activeCamera.rotYRad = (yDeg * Math.PI) / 180;
  activeCamera.rotZRad = (zDeg * Math.PI) / 180;
}

export function getCameraAnglesDeg(): { yawDeg: number; pitchDeg: number } {
  return {
    yawDeg: Math.round((activeCamera.rotZRad * 180 / Math.PI) * 10) / 10,
    pitchDeg: Math.round((activeCamera.rotXRad * 180 / Math.PI) * 10) / 10,
  };
}

export function setCameraAnglesDeg(yawDeg: number, pitchDeg: number): void {
  activeCamera.rotZRad = (yawDeg * Math.PI) / 180;
  activeCamera.rotXRad = (pitchDeg * Math.PI) / 180;
}

export function setZoomMultiplier(z: number): void { activeCamera.zoom = Math.max(0.1, Math.min(3.0, z)); }
export function getZoomMultiplier(): number { return activeCamera.zoom; }

export function setBoxDimensions(x: number, y: number, z: number): void {
  activeBox.sizeX = Math.max(0.1, Math.min(2.5, x));
  activeBox.sizeY = Math.max(0.1, Math.min(2.5, y));
  activeBox.sizeZ = Math.max(0.1, Math.min(2.5, z));
}
export function getBoxDimensions(): { sizeX: number; sizeY: number; sizeZ: number } {
  return { sizeX: activeBox.sizeX, sizeY: activeBox.sizeY, sizeZ: activeBox.sizeZ };
}

export function setBoxRadius(r: number): void {
  activeBox.radius = Math.max(0.0, Math.min(0.25, r));
}
export function getBoxRadius(): number {
  return activeBox.radius || 0.0;
}

export function project(p: Vec3, scale: number, center: Vec2): Vec2 {
  return project3D(p, scale, center, activeCamera, activeBox);
}

function cameraTransform(p: Vec3): Vec3 {
  return transform3D(p, activeCamera, activeBox);
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
  fixedValue: number;
  uAxis: number;
  vAxis: number;
  normal: Vec3;
}

export const FACES: FaceDef[] = [
  { quad: [3, 5, 7, 6], fixedAxis: 2, fixedValue: 1, uAxis: 0, vAxis: 1, normal: { x: 0, y: 0, z: 1 } },
  { quad: [1, 4, 7, 5], fixedAxis: 0, fixedValue: 1, uAxis: 1, vAxis: 2, normal: { x: 1, y: 0, z: 0 } },
  { quad: [2, 4, 7, 6], fixedAxis: 1, fixedValue: 1, uAxis: 0, vAxis: 2, normal: { x: 0, y: 1, z: 0 } },
  { quad: [0, 1, 4, 2], fixedAxis: 2, fixedValue: 0, uAxis: 0, vAxis: 1, normal: { x: 0, y: 0, z: -1 } },
  { quad: [0, 2, 6, 3], fixedAxis: 0, fixedValue: 0, uAxis: 1, vAxis: 2, normal: { x: -1, y: 0, z: 0 } },
  { quad: [0, 1, 5, 3], fixedAxis: 1, fixedValue: 0, uAxis: 0, vAxis: 2, normal: { x: 0, y: -1, z: 0 } },
];

const FACE_RES = 64;

export interface RenderContext {
  ctx: CanvasRenderingContext2D;
  scale: number;
  center: Vec2;
  width: number;
  height: number;
}

export interface RenderState {
  alphaMode: boolean;
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
  canvas.height = viewportSize * 1.0 * dpr;
  canvas.style.width = `${viewportSize}px`;
  canvas.style.height = `${viewportSize * 1.0}px`;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(dpr, dpr);

  return {
    ctx,
    scale: viewportSize * 0.26,
    center: { x: viewportSize / 2, y: viewportSize * 0.5 },
    width: viewportSize,
    height: viewportSize * 1.0,
  };
}

let activeEdgeStyle: EdgeStyleConfig = { ...DEFAULT_EDGE_CONFIG };

export function setEdgeStyle(style: Partial<EdgeStyleConfig>): void {
  activeEdgeStyle = { ...activeEdgeStyle, ...style };
}

export function getEdgeStyle(): EdgeStyleConfig {
  return { ...activeEdgeStyle };
}

/**
 * 立方体 12 条边以及其相邻的两个面在 FACES 数组中的索引：
 * FACES[0]: +Z (quad [3, 5, 7, 6])
 * FACES[1]: +X (quad [1, 4, 7, 5])
 * FACES[2]: +Y (quad [2, 4, 7, 6])
 * FACES[3]: -Z (quad [0, 1, 4, 2])
 * FACES[4]: -X (quad [0, 2, 6, 3])
 * FACES[5]: -Y (quad [0, 1, 5, 3])
 */
const EDGE_TOPOLOGY: { edge: [number, number]; faces: [number, number] }[] = [
  // 底面 4 条边 (z=0, 相邻 -Z 面即 3)
  { edge: [0, 1], faces: [3, 5] }, // -Z(3), -Y(5)
  { edge: [1, 4], faces: [3, 1] }, // -Z(3), +X(1)
  { edge: [4, 2], faces: [3, 2] }, // -Z(3), +Y(2)
  { edge: [2, 0], faces: [3, 4] }, // -Z(3), -X(4)

  // 顶面 4 条边 (z=1, 相邻 +Z 面即 0)
  { edge: [3, 5], faces: [0, 5] }, // +Z(0), -Y(5)
  { edge: [5, 7], faces: [0, 1] }, // +Z(0), +X(1)
  { edge: [7, 6], faces: [0, 2] }, // +Z(0), +Y(2)
  { edge: [6, 3], faces: [0, 4] }, // +Z(0), -X(4)

  // 4 条纵向立柱边
  { edge: [0, 3], faces: [4, 5] }, // -X(4), -Y(5)
  { edge: [1, 5], faces: [1, 5] }, // +X(1), -Y(5)
  { edge: [4, 7], faces: [1, 2] }, // +X(1), +Y(2)
  { edge: [2, 6], faces: [4, 2] }, // -X(4), +Y(2)
];

/**
 * 绘制立方体 12 条棱边（严格根据面可见性精确区分 Front 前侧边 与 Back / Hidden 暗部透视边）
 */
function draw12CubeEdges(
  ctx: CanvasRenderingContext2D,
  verts2d: Vec2[],
  verts3: Vec3[],
  boxExtent: Vec3,
  style: EdgeStyleConfig,
): void {
  if (!style.showFront && !style.showBack) return;

  const ext = [boxExtent.x, boxExtent.y, boxExtent.z];
  const isFaceVisible: boolean[] = new Array(FACES.length).fill(false);

  // 1. 先计算 6 个面在当前相机视角下的可见性 (背面剔除)
  for (let fi = 0; fi < FACES.length; fi++) {
    const face = FACES[fi];
    const fixedVal = face.fixedValue * ext[face.fixedAxis];
    const uMax = ext[face.uAxis];
    const vMax = ext[face.vAxis];

    const center3: Vec3 = { x: 0, y: 0, z: 0 };
    const keys: (keyof Vec3)[] = ['x', 'y', 'z'];
    (center3 as any)[keys[face.fixedAxis]] = fixedVal;
    (center3 as any)[keys[face.uAxis]] = uMax * 0.5;
    (center3 as any)[keys[face.vAxis]] = vMax * 0.5;
    const camCenter = cameraTransform(center3);

    const normEnd: Vec3 = {
      x: center3.x + face.normal.x * 0.1,
      y: center3.y + face.normal.y * 0.1,
      z: center3.z + face.normal.z * 0.1,
    };
    const camNormEnd = cameraTransform(normEnd);
    const camNormZ = camNormEnd.z - camCenter.z;

    // 外法线朝向相机 (camNormZ > 0) 即为前向可见面
    if (camNormZ > 0) {
      isFaceVisible[fi] = true;
    }
  }

  // 2. 区分前侧可见边 (至少一个相邻面可见) 与 后侧透视暗边 (两个相邻面都不可见 / 背光)
  ctx.save();

  // 绘制后侧暗边 (Back / Hidden Edges)
  if (style.showBack) {
    ctx.lineWidth = style.backWidth;
    if (style.backDashed) ctx.setLineDash([4, 3]);
    else ctx.setLineDash([]);
    ctx.strokeStyle = style.backColor;
    ctx.globalAlpha = style.backOpacity;

    for (const item of EDGE_TOPOLOGY) {
      const [f1, f2] = item.faces;
      const isFrontEdge = isFaceVisible[f1] || isFaceVisible[f2];
      if (!isFrontEdge) {
        const [a, b] = item.edge;
        ctx.beginPath();
        ctx.moveTo(verts2d[a].x, verts2d[a].y);
        ctx.lineTo(verts2d[b].x, verts2d[b].y);
        ctx.stroke();
      }
    }
  }

  // 绘制前侧可见边 (Front Visible Edges)
  if (style.showFront) {
    ctx.lineWidth = style.frontWidth;
    if (style.frontDashed) ctx.setLineDash([4, 3]);
    else ctx.setLineDash([]);
    ctx.strokeStyle = style.frontColor;
    ctx.globalAlpha = style.frontOpacity;

    for (const item of EDGE_TOPOLOGY) {
      const [f1, f2] = item.faces;
      const isFrontEdge = isFaceVisible[f1] || isFaceVisible[f2];
      if (isFrontEdge) {
        const [a, b] = item.edge;
        ctx.beginPath();
        ctx.moveTo(verts2d[a].x, verts2d[a].y);
        ctx.lineTo(verts2d[b].x, verts2d[b].y);
        ctx.stroke();
      }
    }
  }

  ctx.restore();
}

/**
 * 纯粹的渲染管线：立方体面绘制与辅助线绘制清晰解耦
 */
export function render(
  rc: RenderContext,
  boxExtent: Vec3,
  dotValues: Vec3,
  dotFace: number,
  mode: ColorMode,
  rs: RenderState,
  guides: boolean | GuideVisibility = true,
  alphaRing: { active: boolean; alpha: number; rgb: RGBColor } | null = null,
): void {
  const { ctx, scale, center, width, height } = rc;
  ctx.save();
  ctx.clearRect(0, 0, width, height);

  const verts3 = boxVertices(boxExtent);
  const verts2d = verts3.map(v => project(v, scale, center));

  // 1. 绘制 3D 色彩立方体面
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.35)';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  drawFaces(ctx, verts2d, verts3, boxExtent, mode, rs.viewRotating);
  ctx.restore();

  // 2. 绘制 12 条棱边（严格根据面可见性精确区分 Front / Back 透视边）
  draw12CubeEdges(ctx, verts2d, verts3, boxExtent, activeEdgeStyle);

  // 3. 绘制辅助参考线（解耦独立模块 guide-renderer）
  const g: GuideVisibility = typeof guides === 'boolean'
    ? (guides ? DEFAULT_GUIDES : { vertexX: false, vertexY: false, vertexZ: false, centerX: false, centerY: false, centerZ: false, yawArc: false, pitchArc: false })
    : guides;

  drawGuides(ctx, scale, center, activeCamera, activeBox, g);

  // 4. 绘制取色点
  if (dotFace >= 0) {
    const rgb = valuesToRgb(dotValues, mode);
    const dotRgb = invertMode ? { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b } : rgb;
    const dotPos = project(dotValues, scale, center);
    if (alphaRing && alphaRing.active) drawAlphaRing(ctx, dotPos, alphaRing.rgb, alphaRing.alpha);
    drawColorDot(ctx, dotPos, dotRgb);
  }

  ctx.restore();
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

  const visibleFaces: {
    face: FaceDef;
    corners: Vec2[];
    fixedVal: number;
    uMax: number;
    vMax: number;
    depth: number;
  }[] = [];

  for (let fi = 0; fi < FACES.length; fi++) {
    const face = FACES[fi];
    const fixedVal = face.fixedValue * ext[face.fixedAxis];
    const uMax = ext[face.uAxis];
    const vMax = ext[face.vAxis];
    if (uMax < 0.002 && vMax < 0.002) continue;

    // 面中心转换到相机空间
    const center3: Vec3 = { x: 0, y: 0, z: 0 };
    const keys: (keyof Vec3)[] = ['x', 'y', 'z'];
    (center3 as any)[keys[face.fixedAxis]] = fixedVal;
    (center3 as any)[keys[face.uAxis]] = uMax * 0.5;
    (center3 as any)[keys[face.vAxis]] = vMax * 0.5;
    const camCenter = cameraTransform(center3);

    // 面法线转换到相机空间：外法线如果朝向相机（Z < 0 或 dot(normal, camCenter) > 0）
    const normEnd: Vec3 = {
      x: center3.x + face.normal.x * 0.1,
      y: center3.y + face.normal.y * 0.1,
      z: center3.z + face.normal.z * 0.1,
    };
    const camNormEnd = cameraTransform(normEnd);
    const camNormZ = camNormEnd.z - camCenter.z;

    // 外法线朝向相机 (camNormZ > 0) 即为前向可见面
    if (camNormZ > 0) {
      const corners = face.quad.map(i => verts2d[i]);
      visibleFaces.push({
        face,
        corners,
        fixedVal,
        uMax,
        vMax,
        depth: camCenter.z,
      });
    }
  }

  // 从远(小Z)到近(大Z)排序绘制
  visibleFaces.sort((a, b) => a.depth - b.depth);

  for (const item of visibleFaces) {
    renderFaceGradient(
      ctx,
      item.corners,
      item.face.fixedAxis,
      item.fixedVal,
      item.uMax,
      item.vMax,
      mode,
    );
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

  // corners 顺序严格对应:
  // corners[0] = (u=0, v=0)
  // corners[1] = (u=1, v=0)
  // corners[2] = (u=1, v=1)
  // corners[3] = (u=0, v=1)
  const p00 = corners[0];
  const p10 = corners[1];
  const p11 = corners[2];
  const p01 = corners[3];
  const ax = p10.x - p00.x;
  const ay = p10.y - p00.y;
  const bx = p01.x - p00.x;
  const by = p01.y - p00.y;

  ctx.save();

  // Clip to the exact face shape (supports rounded corners / bevel when radius > 0)
  const rad = activeBox.radius || 0;
  ctx.beginPath();
  if (rad > 0.005) {
    // 4 corners 向量计算
    const rU = Math.min(rad, 0.45);
    const rV = Math.min(rad, 0.45);
    
    const p0 = { x: p00.x + ax * rU, y: p00.y + ay * rU };
    const p1 = { x: p10.x - ax * rU, y: p10.y - ay * rU };
    const p2 = { x: p10.x + bx * rV, y: p10.y + by * rV };
    const p3 = { x: p11.x - bx * rV, y: p11.y - by * rV };
    const p4 = { x: p11.x - ax * rU, y: p11.y - ay * rU };
    const p5 = { x: p01.x + ax * rU, y: p01.y + ay * rU };
    const p6 = { x: p01.x - bx * rV, y: p01.y - by * rV };
    const p7 = { x: p00.x + bx * rV, y: p00.y + by * rV };

    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.quadraticCurveTo(p10.x, p10.y, p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.quadraticCurveTo(p11.x, p11.y, p4.x, p4.y);
    ctx.lineTo(p5.x, p5.y);
    ctx.quadraticCurveTo(p01.x, p01.y, p6.x, p6.y);
    ctx.lineTo(p7.x, p7.y);
    ctx.quadraticCurveTo(p00.x, p00.y, p0.x, p0.y);
  } else {
    ctx.moveTo(p00.x, p00.y);
    ctx.lineTo(p10.x, p10.y);
    ctx.lineTo(p11.x, p11.y);
    ctx.lineTo(p01.x, p01.y);
  }
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
  (faceOrigin as any)[keys[face.fixedAxis]] = face.fixedValue * ext[face.fixedAxis];

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
  (faceOrigin as any)[keys[face.fixedAxis]] = face.fixedValue * ext[face.fixedAxis];

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
