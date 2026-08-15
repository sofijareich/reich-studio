import Image from "next/image";
import Reveal from "./Reveal";

const VALUES = [
  {
    title: "Honest, not polished",
    text: "If something isn't working, I say so — before you pay for it.",
  },
  {
    title: "Clear, not complicated",
    text: "You should understand what's running, not just get an invoice for it.",
  },
  {
    title: "Personal, not anonymous",
    text: "One point of contact from start to finish. No rotating account managers.",
  },
];

export default function About() {
  return (
    <>
      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-fg/70">
              <p className="text-2xl font-medium text-fg">
                Behind Reich Studio isn&apos;t a team of twenty people.
                It&apos;s Sofija.
              </p>
              <p>
                I founded Reich Studio because I saw it too often: capable
                professionals losing clients — not because their work was
                bad, but because nobody was handling their marketing.
              </p>
              <p>
                I don&apos;t build campaigns that look good and do nothing.
                I build systems that run, that you can measure, and that
                you understand — even if you never wanted to deal with
                marketing yourself.
              </p>
              <p>
                When we work together, you talk to me — not an account
                manager juggling three other clients.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-gold/30">
              <Image
                src="/images/sofija.jpg"
                alt="Sofija Reich, founder of Reich Studio"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-4">How I work</p>
            <h2 className="mb-16 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Three things you can count on.
            </h2>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-3">
            {VALUES.map((v) => (
              <Reveal key={v.title}>
                <div className="border-t border-gold/40 pt-6">
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
