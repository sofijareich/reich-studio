export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center px-6 pt-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p
          className="rise-in mb-6 text-xs font-medium tracking-[0.3em] text-gold uppercase"
          style={{ animationDelay: "0.05s" }}
        >
          Marketing &amp; Automatisierung
        </p>

        <h1 className="max-w-4xl text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl sm:leading-[1.05]">
          <span className="rise-in block" style={{ animationDelay: "0.15s" }}>
            Ich helfe Professionals, die keine Zeit für Marketing haben,
          </span>
          <span className="rise-in block text-gold" style={{ animationDelay: "0.3s" }}>
            ihr Fachgebiet voll zu automatisieren
          </span>
          <span className="rise-in block" style={{ animationDelay: "0.45s" }}>
            und Vertrauen zu Endkunden aufzubauen — ohne sich damit auskennen
            zu müssen.
          </span>
        </h1>

        <p
          className="rise-in mt-8 max-w-md text-base text-fg/60"
          style={{ animationDelay: "0.6s" }}
        >
          Kein Agentur-Blabla, keine Reportings, die niemand liest. Systeme,
          die im Hintergrund laufen, während du dein Fachgebiet machst.
        </p>

        <div className="rise-in mt-10" style={{ animationDelay: "0.75s" }}>
          <a
            href="#kontakt"
            className="inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-bg transition-transform hover:scale-[1.03]"
          >
            Erstgespräch buchen
          </a>
        </div>
      </div>
    </section>
  );
}
