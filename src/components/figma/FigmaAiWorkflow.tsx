import { getTranslations } from "next-intl/server";

function Arrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center text-black/40 ${
        vertical ? "h-8 w-full" : "h-full w-8"
      }`}
      aria-hidden="true"
    >
      {vertical ? (
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 0V20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
          <path d="M0 8H20M20 8L14 2M20 8L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

function Node({ label }: { label: string }) {
  return (
    <div className="fg-small border border-black px-5 py-2 text-center lowercase text-black">
      {label}
    </div>
  );
}

export default async function FigmaAiWorkflow() {
  const t = await getTranslations("AiWorkflow");
  const stages = t.raw("stages") as { step: string; tool: string; text: string }[];

  return (
    <section className="fg-page-x py-[clamp(3rem,8vh,6rem)]">
      <p className="fg-small uppercase text-black/50">{t("eyebrow")}</p>
      <h2 className="fg-h2 mt-[clamp(0.5rem,1.2vh,0.75rem)] max-w-2xl lowercase">{t("title")}</h2>
      <p className="fg-mid mt-[clamp(0.75rem,2vh,1.25rem)] max-w-[46ch] text-black/60">
        {t("subtext")}
      </p>

      <div className="mt-[clamp(2.5rem,6vh,4rem)]">
        {/* desktop: horizontal flow */}
        <div className="hidden md:block">
          <Node label={t("nodeStart")} />
          <div
            className="mt-2 grid items-stretch"
            style={{ gridTemplateColumns: "1fr 32px 1fr 32px 1fr 32px 1fr" }}
          >
            {stages.map((s, i) => (
              <div key={s.tool} className="contents">
                <div className="flex flex-col border border-black/15 p-[clamp(1rem,2vw,1.5rem)]">
                  <p className="fg-stat-value text-[clamp(1.5rem,2.4vw,2.25rem)]">{s.step}</p>
                  <h3 className="fg-mid mt-[0.6em] lowercase">{s.tool}</h3>
                  <p className="fg-small mt-[0.5em] text-black/60">{s.text}</p>
                </div>
                {i < stages.length - 1 && <Arrow />}
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-end">
            <Node label={t("nodeEnd")} />
          </div>
        </div>

        {/* mobile: vertical flow */}
        <div className="flex flex-col items-stretch gap-0 md:hidden">
          <Node label={t("nodeStart")} />
          <Arrow vertical />
          {stages.map((s) => (
            <div key={s.tool}>
              <div className="flex flex-col border border-black/15 p-[clamp(1rem,4vw,1.5rem)]">
                <p className="fg-stat-value text-[clamp(1.5rem,6vw,2.25rem)]">{s.step}</p>
                <h3 className="fg-mid mt-[0.6em] lowercase">{s.tool}</h3>
                <p className="fg-small mt-[0.5em] text-black/60">{s.text}</p>
              </div>
              <Arrow vertical />
            </div>
          ))}
          <Node label={t("nodeEnd")} />
        </div>
      </div>
    </section>
  );
}
