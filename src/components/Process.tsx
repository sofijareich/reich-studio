import Reveal from "./Reveal";

const STEPS = [
  {
    step: "01",
    title: "Get to know each other",
    text: "In the first call, we find where marketing is stealing your time — and what part of it can be automated.",
  },
  {
    step: "02",
    title: "Build it",
    text: "I build the website, content flow, and automations that fit your field.",
  },
  {
    step: "03",
    title: "Let it run",
    text: "The system runs in the background. You only get what matters — I handle the rest.",
  },
];

export default function Process() {
  return (
    <section className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">How we work</p>
          <h2 className="mb-16 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Three steps. No fine print.
          </h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-3">
          {STEPS.map((s) => (
            <Reveal key={s.step}>
              <div className="border-t border-gold/40 pt-6">
                <p className="gold-text text-4xl font-semibold">{s.step}</p>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/60">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
