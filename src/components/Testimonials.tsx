import Image from "next/image";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    name: "Simone Keller",
    role: "Physiotherapeutin",
    photo: "/testimonials/physio.png",
    quote:
      "Ich hatte nie Zeit für Social Media. Jetzt läuft mein Content automatisch, und ich bekomme trotzdem Anfragen von neuen Patient:innen.",
  },
  {
    name: "Beat Wyss",
    role: "Schreinerei-Inhaber",
    photo: "/testimonials/handwerk.png",
    quote:
      "Ich wusste nicht mal, was ein Funnel ist. Jetzt habe ich eine Website, die für mich Anfragen sammelt, während ich in der Werkstatt bin.",
  },
  {
    name: "Nadine Frei",
    role: "Business-Coach",
    photo: "/testimonials/coach.png",
    quote:
      "Reich Studio hat mir erklärt, was passiert — nicht nur eine Rechnung geschickt. Das hat mir das Vertrauen gegeben, das ich brauchte.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 pb-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">Stimmen</p>
          <h2 className="mb-16 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Was Kund:innen sagen.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name}>
              <div className="card-surface flex h-full flex-col rounded-2xl p-8">
                <p className="flex-1 text-sm leading-relaxed text-fg/70">
                  „{t.quote}“
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <Image src={t.photo} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg">{t.name}</p>
                    <p className="text-xs text-fg/40">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
