import Image from "next/image";
import HeroPhone3D from "./HeroPhone3D";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16 sm:px-10 sm:pb-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-gold-ribbons.png"
          alt=""
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/70 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/40 to-transparent" />
      </div>

      <div className="glow -z-10 h-96 w-96" style={{ top: "20%", left: "55%" }} />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="rise-in eyebrow mb-6" style={{ animationDelay: "0.05s" }}>
            Marketing &amp; Automatisierung
          </p>

          <h1 className="display-heading max-w-3xl">
            <span className="rise-in block" style={{ animationDelay: "0.15s" }}>
              Fachgebiet automatisieren.
            </span>
            <span className="rise-in gold-text block" style={{ animationDelay: "0.35s" }}>
              Vertrauen aufbauen.
            </span>
          </h1>

          <p
            className="rise-in mt-8 max-w-lg text-base text-fg/60 sm:text-lg"
            style={{ animationDelay: "0.62s" }}
          >
            Ich helfe Professionals, die keine Zeit für Marketing haben, ihr
            Fachgebiet voll zu automatisieren und Vertrauen zu Endkunden
            aufzubauen — ohne sich in geringster Weise damit auskennen zu
            müssen.
          </p>

          <div
            className="rise-in mt-10 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "0.78s" }}
          >
            <a
              href="/kontakt"
              className="gold-btn inline-block rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-bg"
            >
              Erstgespräch buchen
            </a>
            <a
              href="/preise"
              className="text-sm font-medium text-fg/60 underline underline-offset-4 hover:text-fg"
            >
              Preise ansehen
            </a>
          </div>
        </div>

        <div
          className="rise-in relative h-[280px] w-full sm:h-[380px] lg:h-[520px]"
          style={{ animationDelay: "0.3s" }}
        >
          <HeroPhone3D />
        </div>
      </div>
    </section>
  );
}
