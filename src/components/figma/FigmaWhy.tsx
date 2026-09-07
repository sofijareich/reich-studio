import { getTranslations } from "next-intl/server";
import FigmaReveal from "./FigmaReveal";

type Point = { title: string; text: string };
type Step = { step: string; title: string; text: string };

function TriangleRight() {
  return (
    <svg
      viewBox="0 0 10 12"
      aria-hidden="true"
      className="mt-[0.45em] h-[0.5em] w-[0.42em] shrink-0 fill-black"
    >
      <path d="M0 0l10 6-10 6z" />
    </svg>
  );
}

function TriangleDown() {
  return (
    <svg viewBox="0 0 12 10" aria-hidden="true" className="h-3 w-3.5 fill-black">
      <path d="M0 0l6 10 6-10z" />
    </svg>
  );
}

function NumberedPoint({ index, point }: { index: number; point: Point }) {
  return (
    <div>
      <div className="flex items-start gap-[clamp(0.75rem,1.2vw,1.5rem)]">
        <p className="fg-numeral">{String(index + 1).padStart(2, "0")}</p>
        <p className="fg-small mt-[0.9em] max-w-[16ch] text-black/90">{point.text}</p>
      </div>
      <p className="fg-lead mt-[clamp(0.5rem,1.5vh,1.25rem)] lowercase">{point.title}</p>
    </div>
  );
}

export default async function FigmaWhy() {
  const tTrust = await getTranslations("TrustBar");
  const tProblem = await getTranslations("Problem");
  const tProcess = await getTranslations("Process");
  const tHome = await getTranslations("HomeFigma");

  const points = tTrust.raw("points") as Point[];
  const steps = tProcess.raw("steps") as Step[];

  return (
    <section>
      <div className="fg-page-x pb-[clamp(4rem,10vh,8rem)] pt-[clamp(3rem,8vh,6rem)]">
        <div className="grid gap-x-[clamp(1.5rem,3vw,4rem)] gap-y-[clamp(3rem,8vh,6rem)] lg:grid-cols-12">
          {points.slice(0, 2).map((point, i) => (
            <FigmaReveal key={point.title} delay={i * 0.1} className="lg:col-span-4">
              <NumberedPoint index={i} point={point} />
            </FigmaReveal>
          ))}

          <FigmaReveal className="lg:col-span-4">
            <h2 className="fg-display lowercase lg:text-right">{tHome("whyTitle")}</h2>
          </FigmaReveal>

          {points.slice(2).map((point, i) => (
            <FigmaReveal key={point.title} delay={i * 0.1} className="lg:col-span-4">
              <NumberedPoint index={i + 2} point={point} />
            </FigmaReveal>
          ))}

          <FigmaReveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <div className="flex gap-[clamp(0.5rem,1vw,1rem)]">
              <TriangleRight />
              <p className="fg-lead">{tProblem("lead")}</p>
            </div>
            <p className="fg-small mt-[clamp(1rem,2.5vh,2rem)] max-w-[62ch] text-black/80 lg:ml-auto lg:text-right">
              {tProblem("body")}
            </p>
          </FigmaReveal>
        </div>
      </div>

      {/* three steps, on the grey band */}
      <div className="fg-band fg-page-x py-[clamp(3rem,8vh,5.5rem)]">
        <div className="grid gap-[clamp(2.5rem,5vh,4rem)] sm:grid-cols-3">
          {steps.map((step, i) => (
            <FigmaReveal key={step.step} delay={i * 0.12} className="flex flex-col items-center text-center">
              <p className="fg-mid lowercase">{step.title}</p>
              <span className="my-[clamp(0.75rem,2vh,1.25rem)]">
                <TriangleDown />
              </span>
              <p className="fg-small max-w-[32ch] text-black/85">{step.text}</p>
            </FigmaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
