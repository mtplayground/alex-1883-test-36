import { Rod } from './Rod';
import { EMPTY_ROD_STATE, type BeadId, type RodState } from '../models/abacus';

type AbacusProps = Readonly<{
  rodCount: number;
  className?: string;
  onBeadInteractionEnd?: () => void;
  onBeadPointerDown?: (beadId: BeadId) => void;
  onBeadPointerEnter?: (beadId: BeadId) => void;
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

export function Abacus({
  className,
  onBeadInteractionEnd,
  onBeadPointerDown,
  onBeadPointerEnter,
  rodCount,
  rods,
}: AbacusProps) {
  const frameRods = buildFrameRods(rodCount, rods);

  return (
    <section
      aria-label={`${frameRods.length} rod abacus`}
      className={joinClasses(
        'w-full overflow-x-auto overscroll-x-contain pb-2 [--bar-h:0.75rem] [--bar-top:calc(0.75rem+var(--heaven-h)+0.75rem)] [--bead-h:clamp(2.75rem,9vw,3rem)] [--bead-w:clamp(3.75rem,13vw,4rem)] [--heaven-h:clamp(4.75rem,17vw,5rem)] [--rod-w:clamp(5rem,17vw,6rem)]',
        className,
      )}
      onPointerCancel={onBeadInteractionEnd}
      onPointerLeave={onBeadInteractionEnd}
      onPointerUp={onBeadInteractionEnd}
    >
      <div className="inline-block rounded-md border-[clamp(0.375rem,1.5vw,0.5rem)] border-amber-950 bg-amber-100 p-[clamp(0.5rem,2vw,1rem)] shadow-2xl shadow-orange-950/20">
        <div className="relative isolate grid auto-cols-[var(--rod-w)] grid-flow-col gap-[clamp(0.25rem,1vw,0.5rem)]">
          <div
            aria-hidden="true"
            className="absolute top-[var(--bar-top)] right-0 left-0 z-20 h-[var(--bar-h)] rounded-full bg-stone-950 shadow-md"
          />
          {frameRods.map((rod, rodIndex) => (
            <Rod
              className="z-10"
              key={rodIndex}
              onBeadPointerDown={onBeadPointerDown}
              onBeadPointerEnter={onBeadPointerEnter}
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
