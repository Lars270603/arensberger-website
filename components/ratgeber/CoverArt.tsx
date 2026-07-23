import { CHAPTER_GRADIENTS, type ChapterGradient } from "./gradients";

export default function CoverArt({ variant = "a" }: { variant?: ChapterGradient }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-accent-dark">
      <div className="absolute inset-0" style={{ backgroundImage: CHAPTER_GRADIENTS[variant] }} />
    </div>
  );
}
