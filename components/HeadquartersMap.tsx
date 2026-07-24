import BezelFrame from "./BezelFrame";

export default function HeadquartersMap() {
  return (
    <BezelFrame>
      <div className="relative aspect-video w-full bg-background">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/karte-deutschland.svg"
          alt="Karte von Deutschland mit dem Arensberger Firmensitz in Nerdlen, Landkreis Vulkaneifel, markiert"
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    </BezelFrame>
  );
}
