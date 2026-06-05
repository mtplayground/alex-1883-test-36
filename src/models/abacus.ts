export const HEAVEN_BEAD_VALUE = 5;
export const EARTH_BEAD_VALUE = 1;
export const EARTH_BEAD_COUNT = 4;

export type BeadKind = 'heaven' | 'earth';
export type EarthBeadIndex = 0 | 1 | 2 | 3;
export type RodDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type EarthBeadStates = readonly [boolean, boolean, boolean, boolean];

export type HeavenBeadState = Readonly<{
  kind: 'heaven';
  active: boolean;
}>;

export type EarthBeadState = Readonly<{
  kind: 'earth';
  index: EarthBeadIndex;
  active: boolean;
}>;

export type BeadState = HeavenBeadState | EarthBeadState;

export type RodState = Readonly<{
  heaven: boolean;
  earth: EarthBeadStates;
}>;

export const EMPTY_EARTH_BEADS: EarthBeadStates = [false, false, false, false];

export const EMPTY_ROD_STATE: RodState = Object.freeze({
  heaven: false,
  earth: EMPTY_EARTH_BEADS,
});

export function getRodDigit(rod: RodState): RodDigit {
  const heavenValue = rod.heaven ? HEAVEN_BEAD_VALUE : 0;
  const earthValue = rod.earth.reduce(
    (total, isActive) => total + (isActive ? EARTH_BEAD_VALUE : 0),
    0,
  );

  return (heavenValue + earthValue) as RodDigit;
}
