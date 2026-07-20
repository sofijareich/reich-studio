import Image from "next/image";
import Reveal from "./Reveal";

const VALUES = [
  {
    title: "Ehrlich statt glatt",
    text: "Wenn etwas nicht funktioniert, sage ich das — bevor du dafür bezahlst.",
  },
  {
    title: "Verständlich statt kompliziert",
    text: "Du sollst verstehen, was läuft, nicht nur eine Rechnung dafür bekommen.",
  },
  {
    title: "Persönlich statt anonym",
    text: "Ein Ansprechpartner von Anfang bis Ende. Keine wechselnden Betreuer.",
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
                Hinter Reich Studio steht kein Team von zwanzig Leuten. Es
                steht Sofija.
              </p>
              <p>
                Ich habe Reich Studio gegründet, weil ich zu oft gesehen habe,
                wie fähige Professionals Kunden verlieren — nicht, weil ihre
                Arbeit schlecht ist, sondern weil niemand ihr Marketing
                übernimmt.
              </p>
              <p>
                Ich baue keine Kampagnen, die gut aussehen und nichts
                bringen. Ich baue Systeme, die laufen, messbar sind und die
                du verstehst, auch wenn du selbst nie etwas mit Marketing zu
                tun haben wolltest.
              </p>
              <p>
                Wenn wir zusammenarbeiten, sprichst du mit mir — nicht mit
                einem Account Manager, der drei Kunden weiterreicht.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-gold/30">
              <Image
                src="/images/sofija.jpg"
                alt="Sofija Reich, Gründerin von Reich Studio"
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
            <p className="eyebrow mb-4">Wie ich arbeite</p>
            <h2 className="mb-16 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Drei Dinge, auf die du dich verlassen kannst.
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
