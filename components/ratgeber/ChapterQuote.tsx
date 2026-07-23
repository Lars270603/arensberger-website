import Reveal from "../Reveal";

export default function ChapterQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-16 rounded-[2rem] bg-accent-tint px-8 py-16 text-center sm:px-16">
      <Reveal>
        <p className="font-serif italic text-2xl leading-snug sm:text-3xl">{children}</p>
      </Reveal>
    </div>
  );
}
