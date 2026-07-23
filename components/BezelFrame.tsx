export default function BezelFrame({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-[2rem] p-2 ring-1 ${
        dark ? "bg-white/5 ring-white/10" : "bg-black/5 ring-black/5"
      } ${className}`}
    >
      <div className="overflow-hidden rounded-[calc(2rem-0.5rem)]">{children}</div>
    </div>
  );
}
