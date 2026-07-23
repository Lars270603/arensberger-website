export default function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-9 items-center justify-center overflow-hidden bg-accent px-6 font-body text-white sm:justify-between">
      <span className="hidden whitespace-nowrap text-xs tracking-wide sm:inline">
        Direkt ab Werk — ohne Zwischenhändler
      </span>
      <span className="whitespace-nowrap text-xs tracking-wide sm:hidden">Seit 2004</span>
      <span className="hidden whitespace-nowrap text-xs tracking-wide sm:inline">
        Seit 2004 in Deutschland entwickelt
      </span>
    </div>
  );
}
