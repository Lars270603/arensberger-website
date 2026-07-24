import BezelFrame from "./BezelFrame";

export default function HeadquartersMap() {
  return (
    <BezelFrame>
      <div className="relative aspect-[930/1234] w-full bg-background">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/karte-rheinland-pfalz.svg"
          alt="Karte von Rheinland-Pfalz mit dem Arensberger Firmensitz in Nerdlen, Landkreis Vulkaneifel"
          className="absolute inset-0 h-full w-full object-contain"
        />
        <div
          className="absolute flex -translate-x-1/2 flex-col items-start gap-0.5 rounded-xl bg-white/90 px-3 py-2 shadow-md ring-1 ring-black/5 backdrop-blur"
          style={{ left: "32.8%", top: "17%" }}
        >
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-accent">
            Vulkaneifel
          </span>
          <span className="whitespace-nowrap font-heading text-sm font-bold text-foreground">
            Nerdlen — Firmensitz seit 2004
          </span>
        </div>
      </div>
    </BezelFrame>
  );
}
