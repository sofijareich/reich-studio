import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="ueber-uns" className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Über Reich Studio
          </p>
          <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
            Hinter Reich Studio steht kein Team von zwanzig Leuten. Es steht
            Sofija.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-fg/70">
            <p>
              Ich habe Reich Studio gegründet, weil ich zu oft gesehen habe,
              wie fähige Professionals Kunden verlieren — nicht, weil ihre
              Arbeit schlecht ist, sondern weil niemand ihr Marketing
              übernimmt.
            </p>
            <p>
              Ich baue keine Kampagnen, die gut aussehen und nichts bringen.
              Ich baue Systeme, die laufen, messbar sind und die du
              verstehst, auch wenn du selbst nie etwas mit Marketing zu tun
              haben wolltest.
            </p>
            <p>
              Wenn wir zusammenarbeiten, sprichst du mit mir — nicht mit
              einem Account Manager, der drei Kunden weiterreicht.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
