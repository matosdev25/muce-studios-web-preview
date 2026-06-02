type Props = {
  className?: string;
};

export function MuceLogo({ className = "" }: Props) {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <span
        aria-hidden
        className="text-muce font-display font-bold text-2xl leading-none"
      >
        [
      </span>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold tracking-tight text-lg">
          MUCE
        </span>
        <span className="font-display tracking-[0.32em] text-[0.55rem] text-text-muted -mt-0.5">
          STUDIOS
        </span>
      </div>
      <span
        aria-hidden
        className="text-muce font-display font-bold text-2xl leading-none"
      >
        ]
      </span>
    </div>
  );
}

export function MuceMark({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="4" y="4" width="14" height="14" rx="2" fill="currentColor" />
      <rect x="22" y="4" width="14" height="14" rx="2" fill="currentColor" />
      <rect x="4" y="22" width="14" height="14" rx="2" fill="currentColor" />
      <rect x="22" y="22" width="14" height="14" rx="2" fill="currentColor" />
      <rect x="16" y="16" width="8" height="8" fill="#050507" />
    </svg>
  );
}
