export type CanvasPoint = { x: number; y: number };
export type CanvasPersistedState = {
  version: 1;
  selected: string;
  scale: number;
  offset: CanvasPoint;
  positions: Record<string, CanvasPoint>;
};

export const CANVAS_STORAGE_KEY = 'omega-path-study:knowledge-canvas:v1';
const MIN_SCALE = 0.35;
const MAX_SCALE = 1.5;
const MAX_COORDINATE = 100_000;

type StorageReader = Pick<Storage, 'getItem'>;
type StorageWriter = Pick<Storage, 'setItem'>;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const finiteCoordinate = (value: unknown): number | null =>
  typeof value === 'number' && Number.isFinite(value) && Math.abs(value) <= MAX_COORDINATE
    ? value
    : null;

const readPoint = (value: unknown): CanvasPoint | null => {
  if (!isRecord(value)) return null;
  const x = finiteCoordinate(value.x);
  const y = finiteCoordinate(value.y);
  return x === null || y === null ? null : { x, y };
};

export function readCanvasState(storage?: StorageReader): Partial<CanvasPersistedState> {
  if (!storage) return {};
  try {
    const raw = storage.getItem(CANVAS_STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed) || parsed.version !== 1) return {};

    const selected = typeof parsed.selected === 'string' && parsed.selected.length <= 80
      ? parsed.selected
      : undefined;
    const scale = typeof parsed.scale === 'number' && Number.isFinite(parsed.scale)
      ? Math.min(MAX_SCALE, Math.max(MIN_SCALE, parsed.scale))
      : undefined;
    const offset = readPoint(parsed.offset);
    const positions: Record<string, CanvasPoint> = {};
    if (isRecord(parsed.positions)) {
      for (const [id, value] of Object.entries(parsed.positions)) {
        if (id.length > 80) continue;
        const point = readPoint(value);
        if (point) positions[id] = point;
      }
    }
    return {
      version: 1,
      ...(selected ? { selected } : {}),
      ...(scale !== undefined ? { scale } : {}),
      ...(offset ? { offset } : {}),
      positions,
    };
  } catch {
    return {};
  }
}

export function writeCanvasState(storage: StorageWriter | undefined, state: CanvasPersistedState): boolean {
  if (!storage) return false;
  try {
    storage.setItem(CANVAS_STORAGE_KEY, JSON.stringify({
      version: 1,
      selected: state.selected.slice(0, 80),
      scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, state.scale)),
      offset: {
        x: Math.max(-MAX_COORDINATE, Math.min(MAX_COORDINATE, state.offset.x)),
        y: Math.max(-MAX_COORDINATE, Math.min(MAX_COORDINATE, state.offset.y)),
      },
      positions: Object.fromEntries(
        Object.entries(state.positions)
          .filter(([id, point]) => id.length <= 80 && Number.isFinite(point.x) && Number.isFinite(point.y))
          .map(([id, point]) => [id, {
            x: Math.max(-MAX_COORDINATE, Math.min(MAX_COORDINATE, point.x)),
            y: Math.max(-MAX_COORDINATE, Math.min(MAX_COORDINATE, point.y)),
          }]),
      ),
    }));
    return true;
  } catch {
    return false;
  }
}
