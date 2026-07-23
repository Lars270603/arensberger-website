export default function DropCapParagraph({ children }: { children: string }) {
  const first = children.charAt(0);
  const rest = children.slice(1);
  return (
    <p className="font-body text-lg leading-relaxed text-secondary">
      <span className="float-left mr-3 mt-1 font-heading font-bold text-6xl leading-[0.75] text-accent">
        {first}
      </span>
      {rest}
    </p>
  );
}
