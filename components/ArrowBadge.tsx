export default function ArrowBadge({
  light = false,
  size = "md",
}: {
  light?: boolean;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-7 w-7 text-xs" : "h-9 w-9";
  return (
    <span
      className={`flex ${dim} shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1 ${
        light ? "bg-white/15 text-white backdrop-blur-xl" : "bg-accent/10 text-accent"
      }`}
    >
      ↗
    </span>
  );
}
