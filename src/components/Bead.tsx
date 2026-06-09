import type { BeadKind } from '../models/abacus';

type BeadProps = Readonly<{
  active: boolean;
  ariaLabel: string;
  kind: BeadKind;
  className?: string;
  onPointerDown?: () => void;
  onPointerEnter?: () => void;
}>;

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Bead({
  active,
  ariaLabel,
  className,
  kind,
  onPointerDown,
  onPointerEnter,
}: BeadProps) {
  const activePosition =
    kind === 'heaven'
      ? 'translate-y-[calc(var(--bead-h)*0.25)]'
      : '-translate-y-[calc(var(--bead-h)*0.25)]';
  const positionClass = active ? activePosition : 'translate-y-0';
  const surfaceClass = active
    ? 'bg-sky-400 shadow-[inset_0_0.4rem_0.7rem_rgba(255,255,255,0.34),inset_0_-0.55rem_0.8rem_rgba(7,89,133,0.42),0_0.7rem_1.2rem_rgba(7,89,133,0.22)]'
    : 'bg-sky-800 shadow-[inset_0_0.35rem_0.65rem_rgba(255,255,255,0.2),inset_0_-0.55rem_0.8rem_rgba(8,47,73,0.46),0_0.55rem_0.9rem_rgba(8,47,73,0.18)]';

  return (
    <button
      aria-label={`${ariaLabel} (${active ? 'active' : 'inactive'})`}
      aria-pressed={active}
      className={joinClasses(
        'block h-[var(--bead-h)] min-h-11 w-[var(--bead-w)] min-w-14 touch-none rounded-full border border-sky-950/35 transition-transform duration-200 ease-out will-change-transform select-none focus-visible:ring-2 focus-visible:ring-sky-950 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none',
        onPointerDown ? 'cursor-grab active:cursor-grabbing' : 'cursor-default',
        positionClass,
        surfaceClass,
        className,
      )}
      data-active={active}
      data-kind={kind}
      onPointerDown={(event) => {
        event.preventDefault();
        onPointerDown?.();
      }}
      onPointerEnter={onPointerEnter}
      type="button"
    />
  );
}
