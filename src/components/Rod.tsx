import { Bead } from './Bead';
import {
  EARTH_BEAD_COUNT,
  getRodDigit,
  type BeadId,
  type EarthBeadIndex,
  type RodState,
} from '../models/abacus';

type RodProps = Readonly<{
  rod: RodState;
  className?: string;
  label?: string;
  onBeadPointerDown?: (beadId: BeadId) => void;
  onBeadPointerEnter?: (beadId: BeadId) => void;
  rodIndex?: number;
  showBar?: boolean;
}>;

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Rod({
  className,
  label,
  onBeadPointerDown,
  onBeadPointerEnter,
  rod,
  rodIndex,
  showBar = true,
}: RodProps) {
  const stateRodIndex = rodIndex ?? 0;
  const rodLabel =
    label ?? (rodIndex === undefined ? 'Rod' : `Rod ${rodIndex + 1}`);
  const heavenBeadId: BeadId = {
    kind: 'heaven',
    rodIndex: stateRodIndex,
  };

  return (
    <section
      aria-label={`${rodLabel}, value ${getRodDigit(rod)}`}
      className={joinClasses(
        'relative flex w-[var(--rod-w)] flex-col items-center py-3',
        className,
      )}
      data-rod-value={getRodDigit(rod)}
    >
      <div
        aria-hidden="true"
        className="absolute top-3 bottom-3 left-1/2 w-1 -translate-x-1/2 rounded-full bg-stone-700/70"
      />
      <div className="relative flex h-[var(--heaven-h)] items-end justify-center">
        <Bead
          active={rod.heaven}
          ariaLabel={`${rodLabel} heaven bead`}
          kind="heaven"
          onPointerDown={() => onBeadPointerDown?.(heavenBeadId)}
          onPointerEnter={() => onBeadPointerEnter?.(heavenBeadId)}
        />
      </div>
      <div
        aria-hidden="true"
        className={joinClasses(
          'relative my-3 h-[var(--bar-h)] w-[var(--rod-w)] rounded-full',
          showBar ? 'bg-stone-900 shadow-sm' : 'bg-transparent',
        )}
      />
      <div className="relative flex flex-col gap-[clamp(0.375rem,1.25vw,0.5rem)]">
        {rod.earth.map((active, earthIndex) => {
          const earthBeadId: BeadId = {
            earthIndex: earthIndex as EarthBeadIndex,
            kind: 'earth',
            rodIndex: stateRodIndex,
          };

          return (
            <Bead
              active={active}
              ariaLabel={`${rodLabel} earth bead ${earthIndex + 1} of ${EARTH_BEAD_COUNT}`}
              key={earthIndex}
              kind="earth"
              onPointerDown={() => onBeadPointerDown?.(earthBeadId)}
              onPointerEnter={() => onBeadPointerEnter?.(earthBeadId)}
            />
          );
        })}
      </div>
    </section>
  );
}
