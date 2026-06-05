type ResetButtonProps = Readonly<{
  disabled?: boolean;
  onReset: () => void;
}>;

export function ResetButton({ disabled = false, onReset }: ResetButtonProps) {
  return (
    <button
      className="inline-flex h-11 items-center justify-center rounded-md border border-stone-900 bg-stone-900 px-4 text-sm font-bold text-white shadow-sm transition-colors hover:bg-stone-700 focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-stone-300 disabled:bg-stone-200 disabled:text-stone-500"
      disabled={disabled}
      onClick={onReset}
      type="button"
    >
      Clear
    </button>
  );
}
