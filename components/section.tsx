import type { CSSProperties, ReactNode } from "react";

// Stagger helper for scroll reveals: style={delay(120)}
export const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function SectionHeading({
  index,
  label,
  children,
  aside,
}: {
  index: string;
  label: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p data-reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="text-accent-ink">{index}</span>
          <span className="h-px w-8 bg-line-strong" />
          {label}
        </p>
        <h2
          data-reveal
          style={delay(80)}
          className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          {children}
        </h2>
      </div>
      {aside && (
        <div data-reveal style={delay(160)} className="max-w-sm text-muted md:text-right">
          {aside}
        </div>
      )}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-bg/50 px-3 py-1 font-mono text-[11px] tracking-wide text-muted">
      {children}
    </span>
  );
}
