export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-xs text-fg/40 sm:flex-row sm:items-center">
        <p>
          Reich <span className="text-gold">Studio</span> — © {new Date().getFullYear()}
        </p>
        <a href="mailto:sofijareich@gmail.com" className="hover:text-fg/70">
          sofijareich@gmail.com
        </a>
      </div>
    </footer>
  );
}
