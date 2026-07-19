import Reveal from "./Reveal";

export default function CtaBand({
  heading = "Bereit, Marketing abzugeben?",
  subtext = "Ein kurzes Gespräch reicht, um zu sehen, ob es passt.",
}: {
  heading?: string;
  subtext?: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:px-10">
      <div className="glow h-80 w-80" style={{ top: "10%", left: "50%" }} />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-fg/60">{subtext}</p>
        <a
          href="/kontakt"
          className="gold-btn mt-10 inline-block rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-bg"
        >
          Erstgespräch buchen
        </a>
      </Reveal>
    </section>
  );
}
