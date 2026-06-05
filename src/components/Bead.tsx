import type { BeadKind } from '../models/abacus';

type BeadProps = Readonly<{
  active: boolean;
  ariaLabel: string;
  kind: BeadKind;
  className?: string;
}>;

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Bead({ active, ariaLabel, className, kind }: BeadProps) {
  const activePosition = kind === 'heaven' ? 'translate-y-3' : '-translate-y-3';
  const positionClass = active ? activePosition : 'translate-y-0';
  const surfaceClass = active
    ? 'bg-amber-600 shadow-[inset_0_0.4rem_0.7rem_rgba(255,255,255,0.28),inset_0_-0.55rem_0.8rem_rgba(120,53,15,0.42),0_0.7rem_1.2rem_rgba(120,53,15,0.2)]'
    : 'bg-orange-900 shadow-[inset_0_0.35rem_0.65rem_rgba(255,255,255,0.18),inset_0_-0.55rem_0.8rem_rgba(67,20,7,0.46),0_0.55rem_0.9rem_rgba(67,20,7,0.18)]';

  return (
    <span
      aria-label={`${ariaLabel} (${active ? 'active' : 'inactive'})`}
      className={joinClasses(
        'block h-12 w-16 rounded-full border border-orange-950/35 transition-transform duration-200 ease-out will-change-transform motion-reduce:transition-none',
        positionClass,
        surfaceClass,
        className,
      )}
      data-active={active}
      data-kind={kind}
      role="img"
    />
  );
}
