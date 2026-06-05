import {
  EMPTY_ROD_STATE,
  type AbacusState,
  type BeadId,
  type EarthBeadIndex,
  type EarthBeadStates,
  type RodState,
} from '../models/abacus';

const EARTH_BEAD_INDEXES: readonly EarthBeadIndex[] = [0, 1, 2, 3];

function normalizeRodCount(rodCount: number) {
  return Math.max(0, Math.trunc(rodCount));
}

function updateRod(
  rods: AbacusState,
  rodIndex: number,
  update: (rod: RodState) => RodState,
) {
  if (rodIndex < 0 || rodIndex >= rods.length) {
    return rods;
  }

  return rods.map((rod, currentIndex) =>
    currentIndex === rodIndex ? update(rod) : rod,
  );
}

function getEarthBeadActiveState(
  currentIndex: EarthBeadIndex,
  targetIndex: EarthBeadIndex,
  active: boolean,
) {
  return active ? currentIndex <= targetIndex : currentIndex < targetIndex;
}

export function createAbacusState(rodCount: number): AbacusState {
  return Array.from(
    { length: normalizeRodCount(rodCount) },
    () => EMPTY_ROD_STATE,
  );
}

export function setHeavenBead(rod: RodState, active: boolean): RodState {
  return {
    ...rod,
    heaven: active,
  };
}

export function toggleHeavenBead(rod: RodState): RodState {
  return setHeavenBead(rod, !rod.heaven);
}

export function setEarthBead(
  rod: RodState,
  earthIndex: EarthBeadIndex,
  active: boolean,
): RodState {
  const earth: EarthBeadStates = [
    getEarthBeadActiveState(EARTH_BEAD_INDEXES[0], earthIndex, active),
    getEarthBeadActiveState(EARTH_BEAD_INDEXES[1], earthIndex, active),
    getEarthBeadActiveState(EARTH_BEAD_INDEXES[2], earthIndex, active),
    getEarthBeadActiveState(EARTH_BEAD_INDEXES[3], earthIndex, active),
  ];

  return {
    ...rod,
    earth,
  };
}

export function toggleEarthBead(
  rod: RodState,
  earthIndex: EarthBeadIndex,
): RodState {
  return setEarthBead(rod, earthIndex, !rod.earth[earthIndex]);
}

export function setBeadActive(
  rods: AbacusState,
  beadId: BeadId,
  active: boolean,
): AbacusState {
  return updateRod(rods, beadId.rodIndex, (rod) =>
    beadId.kind === 'heaven'
      ? setHeavenBead(rod, active)
      : setEarthBead(rod, beadId.earthIndex, active),
  );
}

export function getBeadActive(rods: AbacusState, beadId: BeadId) {
  const rod = rods[beadId.rodIndex];

  if (!rod) {
    return false;
  }

  return beadId.kind === 'heaven' ? rod.heaven : rod.earth[beadId.earthIndex];
}

export function toggleBead(rods: AbacusState, beadId: BeadId): AbacusState {
  return updateRod(rods, beadId.rodIndex, (rod) =>
    beadId.kind === 'heaven'
      ? toggleHeavenBead(rod)
      : toggleEarthBead(rod, beadId.earthIndex),
  );
}
