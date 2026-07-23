export const CHAPTER_GRADIENTS = {
  a: "radial-gradient(circle at 18% 28%, rgba(69,77,159,0.5), transparent 55%), radial-gradient(circle at 82% 72%, rgba(232,233,244,0.3), transparent 60%)",
  b: "radial-gradient(circle at 78% 22%, rgba(69,77,159,0.45), transparent 55%), radial-gradient(circle at 22% 78%, rgba(31,35,80,0.55), transparent 60%)",
  c: "radial-gradient(circle at 50% 15%, rgba(232,233,244,0.35), transparent 50%), radial-gradient(circle at 30% 85%, rgba(69,77,159,0.45), transparent 55%)",
} as const;

export type ChapterGradient = keyof typeof CHAPTER_GRADIENTS;
