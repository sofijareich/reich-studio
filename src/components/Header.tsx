export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="text-sm font-semibold tracking-[0.2em] uppercase">
          Reich <span className="text-gold">Studio</span>
        </a>
        <a
          href="#kontakt"
          className="hidden rounded-full border border-gold px-5 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-bg sm:inline-block"
        >
          Erstgespräch buchen
        </a>
      </div>
    </header>
  );
}
