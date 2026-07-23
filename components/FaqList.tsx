type Faq = {
  question: string;
  answer: string;
};

export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-surface border-t border-surface">
      {items.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading font-bold text-lg marker:content-none">
            {item.question}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 font-body text-accent transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 font-body text-secondary leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
