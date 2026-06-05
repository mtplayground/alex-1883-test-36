import { getRodDigit, type AbacusState } from '../models/abacus';

export function getTotalValue(rods: AbacusState) {
  return rods.reduce((total, rod, rodIndex) => {
    const placeValue = 10 ** (rods.length - rodIndex - 1);

    return total + getRodDigit(rod) * placeValue;
  }, 0);
}
