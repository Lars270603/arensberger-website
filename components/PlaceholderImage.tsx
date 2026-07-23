type PlaceholderImageProps = {
  label: string;
  className?: string;
  fill?: boolean;
};

export default function PlaceholderImage({ label, className = "", fill = false }: PlaceholderImageProps) {
  return (
    <div
      className={`w-full overflow-hidden bg-surface ${fill ? "h-full" : "aspect-video"} ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(28,28,30,0.05) 0px, rgba(28,28,30,0.05) 2px, transparent 2px, transparent 18px)",
      }}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-secondary">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M4 8a2 2 0 0 1 2-2h1.2a1 1 0 0 0 .83-.45l.94-1.4A1 1 0 0 1 9.8 3.5h4.4a1 1 0 0 1 .83.45l.94 1.4a1 1 0 0 0 .83.45H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
            <circle cx="12" cy="13" r="3.2" />
          </svg>
          <p className="font-body text-xs uppercase tracking-[0.2em]">Foto folgt</p>
          <p className="font-body text-sm text-center px-4">{label}</p>
        </div>
      </div>
    </div>
  );
}
