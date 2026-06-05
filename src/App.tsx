import { useCallback, useMemo, useState } from 'react';
import { APP_CONFIG } from './config';
import { Abacus } from './components/Abacus';
import { ResetButton } from './components/ResetButton';
import { ValueDisplay } from './components/ValueDisplay';
import { useAbacusState } from './hooks/useAbacusState';
import { getBeadActive } from './lib/abacusState';
import { getTotalValue } from './lib/value';
import type { BeadId } from './models/abacus';

type DragIntent = Readonly<{
  active: boolean;
}>;

function App() {
  const { reset, rods, setBead } = useAbacusState(APP_CONFIG.rodCount);
  const [dragIntent, setDragIntent] = useState<DragIntent | null>(null);
  const totalValue = useMemo(() => getTotalValue(rods), [rods]);

  const handleBeadPointerDown = useCallback(
    (beadId: BeadId) => {
      const active = !getBeadActive(rods, beadId);

      setDragIntent({ active });
      setBead(beadId, active);
    },
    [rods, setBead],
  );

  const handleBeadPointerEnter = useCallback(
    (beadId: BeadId) => {
      if (!dragIntent) {
        return;
      }

      setBead(beadId, dragIntent.active);
    },
    [dragIntent, setBead],
  );

  const handleBeadInteractionEnd = useCallback(() => {
    setDragIntent(null);
  }, []);

  const handleReset = useCallback(() => {
    reset();
    setDragIntent(null);
  }, [reset]);

  return (
    <main
      className="flex min-h-screen items-center px-8 py-12"
      aria-labelledby="app-title"
    >
      <section className="mx-auto w-full max-w-2xl">
        <p className="mb-3 text-sm font-bold tracking-wider text-orange-800 uppercase">
          Issue #11
        </p>
        <h1
          id="app-title"
          className="text-4xl leading-none font-bold text-gray-950 sm:text-6xl lg:text-7xl"
        >
          Abacus app shell
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-700">
          The Vite React application is initialized and ready for the abacus
          model and components in the next issues. The default abacus is
          configured for {APP_CONFIG.rodCount} rods.
        </p>
        <div
          aria-label="Abacus frame preview"
          className="mt-8 flex max-w-full flex-col gap-4"
        >
          <div className="flex flex-wrap items-end gap-3">
            <ValueDisplay value={totalValue} />
            <ResetButton disabled={totalValue === 0} onReset={handleReset} />
          </div>
          <Abacus
            onBeadInteractionEnd={handleBeadInteractionEnd}
            onBeadPointerDown={handleBeadPointerDown}
            onBeadPointerEnter={handleBeadPointerEnter}
            rodCount={APP_CONFIG.rodCount}
            rods={rods}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
