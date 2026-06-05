const DEFAULT_ROD_COUNT = 9;
const MIN_ROD_COUNT = 1;
const MAX_ROD_COUNT = 15;

type IntegerEnvOptions = Readonly<{
  value: string | undefined;
  fallback: number;
  min: number;
  max: number;
}>;

function readIntegerEnv({ value, fallback, min, max }: IntegerEnvOptions) {
  if (!value) {
    return fallback;
  }

  const parsedValue = Number(value);

  if (!Number.isInteger(parsedValue)) {
    return fallback;
  }

  return Math.min(Math.max(parsedValue, min), max);
}

export const APP_CONFIG = Object.freeze({
  rodCount: readIntegerEnv({
    value: import.meta.env.VITE_ABACUS_ROD_COUNT,
    fallback: DEFAULT_ROD_COUNT,
    min: MIN_ROD_COUNT,
    max: MAX_ROD_COUNT,
  }),
});

export const CONFIG_LIMITS = Object.freeze({
  maxRodCount: MAX_ROD_COUNT,
  minRodCount: MIN_ROD_COUNT,
});
