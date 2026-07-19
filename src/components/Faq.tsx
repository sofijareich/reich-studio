import Reveal from "./Reveal";

export default function Faq({
  eyebrow = "Fragen",
  heading,
  items,
}: {
  eyebrow?: string;
  heading: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
        </Reveal>
        <div className="divide-y divide-white/10 border-t border-white/10">
          {items.map((item) => (
            <Reveal key={item.q}>
              <div className="py-6">
                <h3 className="font-medium text-fg">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/60">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
