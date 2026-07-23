import Reveal from "../Reveal";
import { CHAPTER_GRADIENTS, type ChapterGradient } from "./gradients";

export default function ChapterDivider({
  eyebrow,
  title,
  variant = "a",
}: {
  eyebrow: string;
  title: string;
  variant?: ChapterGradient;
}) {
  return (
    <Reveal>
      <div className="relative my-16 flex h-[320px] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-accent-dark sm:h-[380px]">
        <div className="absolute inset-0" style={{ backgroundImage: CHAPTER_GRADIENTS[variant] }} />
        <div className="relative px-8 text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
          <p className="mt-4 font-serif italic text-2xl text-background sm:text-3xl">{title}</p>
        </div>
      </div>
    </Reveal>
  );
}
