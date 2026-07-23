import Reveal from "./Reveal";

export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <blockquote className="my-4 border-l-2 border-accent pl-6 font-serif italic text-2xl leading-snug sm:text-3xl">
        {children}
      </blockquote>
    </Reveal>
  );
}
