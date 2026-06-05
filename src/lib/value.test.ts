import { describe, expect, it } from 'vitest';

import { createAbacusState, setEarthBead, setHeavenBead } from './abacusState';
import { getTotalValue } from './value';

describe('getTotalValue', () => {
  it('returns zero for an empty abacus', () => {
    expect(getTotalValue(createAbacusState(0))).toBe(0);
  });

  it('combines rod digits using left-to-right decimal place values', () => {
    const [hundreds, tens, ones] = createAbacusState(3);
    const rods = [
      setEarthBead(hundreds, 2, true),
      setHeavenBead(setEarthBead(tens, 3, true), true),
      setHeavenBead(ones, true),
    ];

    expect(getTotalValue(rods)).toBe(395);
  });

  it('includes leading zero rods in place-value calculation', () => {
    const [thousands, hundreds, tens, ones] = createAbacusState(4);
    const rods = [
      thousands,
      setEarthBead(hundreds, 0, true),
      setEarthBead(tens, 1, true),
      setHeavenBead(setEarthBead(ones, 3, true), true),
    ];

    expect(getTotalValue(rods)).toBe(129);
  });
});
