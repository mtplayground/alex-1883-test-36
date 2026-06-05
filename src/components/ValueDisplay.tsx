type ValueDisplayProps = Readonly<{
  value: number;
}>;

const numberFormatter = new Intl.NumberFormat('en-US');

export function ValueDisplay({ value }: ValueDisplayProps) {
  return (
    <output
      aria-label="Current value"
      aria-live="polite"
      className="inline-flex min-w-40 flex-col gap-1 rounded-md border border-stone-300 bg-white/70 px-4 py-3 text-stone-950 shadow-sm sm:min-w-48"
    >
      <span className="text-xs font-bold tracking-wider text-stone-600 uppercase">
        Value
      </span>
      <span className="font-mono text-3xl leading-none font-semibold">
        {numberFormatter.format(value)}
      </span>
    </output>
  );
}
