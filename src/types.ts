export interface RGBColor {
  r: number; // 0–255
  g: number; // 0–255
  b: number; // 0–255
}

export interface HSBColor {
  h: number; // 0–360
  s: number; // 0–100
  b: number; // 0–100
}

export interface OKLCHColor {
  l: number; // 0–1
  c: number; // 0–0.4 (practical sRGB max ~0.33)
  h: number; // 0–360
}

export type ColorMode = 'rgb' | 'hsb' | 'oklch';

/** A point in 2D screen space. */
export interface Vec2 {
  x: number;
  y: number;
}

/** A point in 3D space (axis values normalized 0–1). */
export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

/** Which axes are active (unlocked) for dragging. */
export interface AxisLock {
  x: boolean;
  y: boolean;
  z: boolean;
}

/** The full state of the picker at any moment. */
export interface PickerState {
  /** Normalized axis values, each 0–1. */
  values: Vec3;
  mode: ColorMode;
  axisLock: AxisLock;
}

export interface EdgeStyleConfig {
  showVisible: boolean;   // 前景可见边
  showHidden: boolean;    // 背部遮挡暗边（透视骨架）
  width: number;          // 边线粗细 (px)
  dashed: boolean;        // 是否虚线
  color: string;          // 线条颜色 (支持 rgba / hex)
  opacity: number;        // 透明度 0..1
}

export const DEFAULT_EDGE_CONFIG: EdgeStyleConfig = {
  showVisible: true,
  showHidden: false,
  width: 1.5,
  dashed: false,
  color: '#ffffff',
  opacity: 0.45,
};

export interface GuideVisibility {
  vertexX: boolean;
  vertexY: boolean;
  vertexZ: boolean;
  centerX: boolean;
  centerY: boolean;
  centerZ: boolean;
  yawArc: boolean;
  pitchArc: boolean;
}

export const DEFAULT_GUIDES: GuideVisibility = {
  vertexX: true,
  vertexY: true,
  vertexZ: true,
  centerX: true,
  centerY: true,
  centerZ: true,
  yawArc: true,
  pitchArc: true,
};

/** Configuration options for creating the picker. */
export interface PickerOptions {
  initialColor?: RGBColor;
  /** 初始 alpha 0–1（提供即启用环形 alpha 交互），默认 undefined = 不启用 */
  alpha?: number;
  mode?: ColorMode;
  size?: number; // viewport size in px (square), default 300
  controls?: boolean;
  showInputs?: boolean;
  showModeToggle?: boolean;
  showCorners?: boolean;
}

/** The color output emitted on change events. */
export interface ColorOutput {
  rgb: RGBColor;
  hsb: HSBColor;
  oklch: OKLCHColor;
  hex: string;
  /** 0–1，默认 1 */
  alpha: number;
}

export type ColorChangeCallback = (color: ColorOutput) => void;

/** The public API returned by createBoxColorPicker. */
export interface BoxColorPicker {
  getColor(): ColorOutput;
  setColor(color: RGBColor): void;
  setMode(mode: ColorMode): void;
  getMode(): ColorMode;
  setAlpha(a: number): void;
  getAlpha(): number;
  getRotation(): { yawDeg: number; pitchDeg: number };
  setRotation(yawDeg: number, pitchDeg: number): void;
  getAxisRotation(): { rotXDeg: number; rotYDeg: number; rotZDeg: number };
  setAxisRotation(xDeg: number, yDeg: number, zDeg: number): void;
  getGuides(): GuideVisibility;
  setGuides(g: Partial<GuideVisibility>): void;
  toggleAllGuides(visible?: boolean): void;
  getEdgeStyle(): EdgeStyleConfig;
  setEdgeStyle(style: Partial<EdgeStyleConfig>): void;
  on(event: 'change', callback: ColorChangeCallback): void;
  off(event: 'change', callback: ColorChangeCallback): void;
  destroy(): void;
}

/** Axis identifiers for labeling and interaction. */
export const AXIS_LABELS: Record<ColorMode, [string, string, string]> = {
  rgb: ['R', 'G', 'B'],
  hsb: ['H', 'S', 'B'],
  oklch: ['L', 'C', 'H'],
};

/** Maximum raw values per channel for each mode. */
export const AXIS_MAX: Record<ColorMode, [number, number, number]> = {
  rgb: [255, 255, 255],
  hsb: [359, 100, 100],
  oklch: [100, 40, 359],
};
