import Reveal from "./Reveal";
import DecodeNumber from "./DecodeNumber";
import PortfolioGallery from "./PortfolioGallery";
import type { PortfolioProject as PortfolioProjectType } from "@/lib/portfolio";
import { portfolioMedia } from "@/lib/portfolioMedia";

export default function PortfolioProject({
  project,
  originLabel,
  approachLabel,
  index,
  galleryLabels,
}: {
  project: PortfolioProjectType;
  originLabel: string;
  approachLabel: string;
  index: number;
  galleryLabels: {
    viewAllPhotos: string;
    allPhotosHeading: string;
    closeLightbox: string;
    backToGrid: string;
    prevPhoto: string;
    nextPhoto: string;
  };
}) {
  const media = portfolioMedia[project.id] ?? [];

  return (
    <section
      id={project.id}
      className="scroll-mt-20 border-b border-white/5 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">
            {String(index + 1).padStart(2, "0")} — {project.category}
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            {project.name}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-fg/70">{project.logline}</p>
          <p className="mt-3 text-sm text-fg/40">{project.duration}</p>
        </Reveal>

        {project.stats.length > 0 && (
          <Reveal>
            <div
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              data-mascot-spot={`portfolio-${project.id}`}
            >
              {project.stats.map((stat) => (
                <div key={stat.label} className="card-surface-gold rounded-2xl p-5">
                  <p className="gold-text text-3xl font-bold tracking-tight sm:text-4xl">
                    <DecodeNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-fg">{stat.label}</p>
                  {stat.sublabel && (
                    <p className="mt-1 text-xs text-fg/45">{stat.sublabel}</p>
                  )}
                </div>
              ))}
            </div>
            {project.statsSource && (
              <p className="mt-4 text-xs text-fg/35">{project.statsSource}</p>
            )}
          </Reveal>
        )}

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="border-t border-gold/40 pt-6">
              <p className="eyebrow mb-3">{originLabel}</p>
              <p className="leading-relaxed text-fg/70">{project.origin}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="border-t border-gold/40 pt-6">
              <p className="eyebrow mb-3">{approachLabel}</p>
              <p className="leading-relaxed text-fg/70">{project.approach}</p>
            </div>
          </Reveal>
        </div>

        <PortfolioGallery
          media={media}
          captions={project.gallery.map((g) => g.alt)}
          labels={galleryLabels}
        />

        {project.testimonial && (
          <Reveal>
            <div className="card-surface-gold mt-14 rounded-2xl p-8 sm:p-10">
              <p className="gold-text mb-2 text-5xl font-serif leading-none">&ldquo;</p>
              <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-fg/80">
                {project.testimonial.quote.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-fg">
                {project.testimonial.author}
                <span className="ml-2 font-normal text-fg/45">
                  — {project.testimonial.role}
                </span>
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
