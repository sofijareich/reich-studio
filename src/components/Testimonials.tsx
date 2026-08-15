import Image from "next/image";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    name: "Simone Keller",
    role: "Physiotherapist",
    photo: "/testimonials/physio.png",
    quote:
      "I never had time for social media. Now my content runs automatically, and I still get inquiries from new patients.",
  },
  {
    name: "Beat Wyss",
    role: "Carpentry shop owner",
    photo: "/testimonials/handwerk.png",
    quote:
      "I didn't even know what a funnel was. Now I have a website that collects inquiries for me while I'm in the workshop.",
  },
  {
    name: "Nadine Frei",
    role: "Business coach",
    photo: "/testimonials/coach.png",
    quote:
      "Reich Studio explained what was happening — not just sent an invoice. That gave me the trust I needed.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 pb-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">Voices</p>
          <h2 className="mb-16 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            What clients say.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name}>
              <div className="card-surface flex h-full flex-col rounded-2xl p-8">
                <p className="flex-1 text-sm leading-relaxed text-fg/70">
                  &ldquo;{t.quote}&rdquo;
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
