import { Bead } from './Bead';
import { EARTH_BEAD_COUNT, getRodDigit, type RodState } from '../models/abacus';

type RodProps = Readonly<{
  rod: RodState;
  className?: string;
  label?: string;
  rodIndex?: number;
}>;

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Rod({ className, label, rod, rodIndex }: RodProps) {
  const rodLabel =
    label ?? (rodIndex === undefined ? 'Rod' : `Rod ${rodIndex + 1}`);

  return (
    <section
      aria-label={`${rodLabel}, value ${getRodDigit(rod)}`}
      className={joinClasses(
        'relative flex w-24 flex-col items-center py-3',
        className,
      )}
      data-rod-value={getRodDigit(rod)}
    >
      <div
        aria-hidden="true"
        className="absolute top-3 bottom-3 left-1/2 w-1 -translate-x-1/2 rounded-full bg-stone-700/70"
      />
      <div className="relative flex h-20 items-end justify-center">
        <Bead
          active={rod.heaven}
          ariaLabel={`${rodLabel} heaven bead`}
          kind="heaven"
        />
      </div>
      <div
        aria-hidden="true"
        className="relative my-3 h-3 w-24 rounded-full bg-stone-900 shadow-sm"
      />
      <div className="relative flex flex-col gap-2">
        {rod.earth.map((active, earthIndex) => (
          <Bead
            active={active}
            ariaLabel={`${rodLabel} earth bead ${earthIndex + 1} of ${EARTH_BEAD_COUNT}`}
            key={earthIndex}
            kind="earth"
          />
        ))}
      </div>
    </section>
  );
}
