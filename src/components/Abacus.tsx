import { Rod } from './Rod';
import { EMPTY_ROD_STATE, type RodState } from '../models/abacus';

type AbacusProps = Readonly<{
  rodCount: number;
  className?: string;
  rods?: readonly RodState[];
}>;

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function buildFrameRods(rodCount: number, rods?: readonly RodState[]) {
  const normalizedRodCount = Math.max(0, Math.trunc(rodCount));

  return Array.from(
    { length: normalizedRodCount },
    (_, rodIndex) => rods?.[rodIndex] ?? EMPTY_ROD_STATE,
  );
}

export function Abacus({ className, rodCount, rods }: AbacusProps) {
  const frameRods = buildFrameRods(rodCount, rods);

  return (
    <section
      aria-label={`${frameRods.length} rod abacus`}
      className={joinClasses('w-full overflow-x-auto', className)}
    >
      <div className="inline-block rounded-md border-8 border-amber-950 bg-amber-100 p-4 shadow-2xl shadow-orange-950/20">
        <div className="relative isolate grid auto-cols-[6rem] grid-flow-col gap-2">
          <div
            aria-hidden="true"
            className="absolute top-[6.5rem] right-0 left-0 z-20 h-3 rounded-full bg-stone-950 shadow-md"
          />
          {frameRods.map((rod, rodIndex) => (
            <Rod
              className="z-10"
              key={rodIndex}
              rod={rod}
              rodIndex={rodIndex}
              showBar={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
