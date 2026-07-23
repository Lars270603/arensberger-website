type SinceBadgeProps = {
  variant?: "accent" | "light";
  className?: string;
};

export default function SinceBadge({ variant = "accent", className = "" }: SinceBadgeProps) {
  const isLight = variant === "light";
  return (
    <div
      className={`flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border ${
        isLight ? "border-white/70 text-white" : "border-accent text-accent"
      } ${className}`}
    >
      <span className="font-body text-[10px] uppercase tracking-[0.25em]">Seit</span>
      <span className="font-heading font-bold text-3xl leading-none">2004</span>
      <span className="h-px w-6 bg-current opacity-50" />
    </div>
  );
}
