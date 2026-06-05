import { describe, expect, it } from 'vitest';

import { getRodDigit, type EarthBeadStates, type RodState } from './abacus';

function createRod(heaven: boolean, earth: EarthBeadStates): RodState {
  return {
    heaven,
    earth,
  };
}

describe('getRodDigit', () => {
  it.each([
    [0, createRod(false, [false, false, false, false])],
    [1, createRod(false, [true, false, false, false])],
    [2, createRod(false, [true, true, false, false])],
    [3, createRod(false, [true, true, true, false])],
    [4, createRod(false, [true, true, true, true])],
    [5, createRod(true, [false, false, false, false])],
    [6, createRod(true, [true, false, false, false])],
    [7, createRod(true, [true, true, false, false])],
    [8, createRod(true, [true, true, true, false])],
    [9, createRod(true, [true, true, true, true])],
  ])('returns %i for representative bead positions', (digit, rod) => {
    expect(getRodDigit(rod)).toBe(digit);
  });
});
