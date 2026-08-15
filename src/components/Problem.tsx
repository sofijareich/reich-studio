import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-6">The situation</p>
          <p className="text-2xl leading-snug font-medium sm:text-3xl">
            You&apos;re good at what you do. But content, posts, and
            follow-ups eat exactly the time you need for clients.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-fg/60">
            Most marketing agencies sell you buzzwords and reports nobody
            understands. Reich Studio builds you systems that run
            automatically in the background instead — without you having
            to become a marketing expert yourself.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
