import { useCallback, useMemo, useState } from 'react';
import {
  createAbacusState,
  setBeadActive,
  toggleBead,
} from '../lib/abacusState';
import type { BeadId } from '../models/abacus';

export function useAbacusState(rodCount: number) {
  const [rods, setRods] = useState(() => createAbacusState(rodCount));

  const setBead = useCallback((beadId: BeadId, active: boolean) => {
    setRods((currentRods) => setBeadActive(currentRods, beadId, active));
  }, []);

  const toggleBeadActive = useCallback((beadId: BeadId) => {
    setRods((currentRods) => toggleBead(currentRods, beadId));
  }, []);

  const reset = useCallback(() => {
    setRods(createAbacusState(rodCount));
  }, [rodCount]);

  return useMemo(
    () => ({
      reset,
      rods,
      setBead,
      toggleBead: toggleBeadActive,
    }),
    [reset, rods, setBead, toggleBeadActive],
  );
}
