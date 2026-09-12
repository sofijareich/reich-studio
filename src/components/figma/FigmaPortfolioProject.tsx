import FigmaPortfolioGallery from "./FigmaPortfolioGallery";
import FigmaReveal from "./FigmaReveal";
import FigmaRecede from "./FigmaRecede";
import type { PortfolioProject as PortfolioProjectType } from "@/lib/portfolio";
import { portfolioMedia } from "@/lib/portfolioMedia";

function formatStat(value: number, prefix?: string, suffix?: string) {
  return `${prefix ?? ""}${value.toLocaleString("de-CH")}${suffix ?? ""}`;
}

export default function FigmaPortfolioProject({
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
    <FigmaRecede>
      <section
        id={project.id}
        className="fg-page-x scroll-mt-20 border-t border-black/10 py-[clamp(3.5rem,9vh,7rem)]"
      >
        <FigmaReveal>
          <p className="fg-small uppercase text-black/50">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <h2 className="fg-h2 mt-[clamp(0.5rem,1.2vh,0.75rem)] max-w-4xl lowercase">
            {project.name}
          </h2>
          <p className="fg-lead mt-[clamp(1rem,2.5vh,1.75rem)] max-w-[52ch] text-black/80">
            {project.logline}
          </p>
          <p className="fg-small mt-[clamp(0.5rem,1.2vh,0.75rem)] text-black/45">
            {project.duration}
          </p>
        </FigmaReveal>

        {project.stats.length > 0 && (
          <div className="mt-[clamp(2.5rem,6vh,4.5rem)]">
            <div className="grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-[clamp(1.75rem,4vh,2.75rem)] sm:grid-cols-2 lg:grid-cols-4">
              {project.stats.map((stat, i) => (
                <FigmaReveal key={stat.label} delay={i * 0.08}>
                  <div className="border-t border-black pt-[clamp(0.75rem,1.6vh,1.25rem)]">
                    <p className="fg-stat-value">
                      {formatStat(stat.value, stat.prefix, stat.suffix)}
                    </p>
                    <p className="fg-small mt-[0.4em] lowercase text-black/80">{stat.label}</p>
                    {stat.sublabel && (
                      <p className="fg-small mt-[0.15em] text-black/45">{stat.sublabel}</p>
                    )}
                  </div>
                </FigmaReveal>
              ))}
            </div>
            {project.statsSource && (
              <p className="fg-small mt-[clamp(1rem,2.5vh,1.5rem)] max-w-[70ch] text-black/40">
                {project.statsSource}
              </p>
            )}
          </div>
        )}

        <div className="mt-[clamp(2.5rem,6vh,4.5rem)] grid gap-[clamp(2rem,4vw,3rem)] lg:grid-cols-2">
          <FigmaReveal className="border-t border-black pt-[clamp(0.75rem,1.6vh,1.25rem)]">
            <p className="fg-small uppercase text-black/50">{originLabel}</p>
            <p className="fg-mid mt-[clamp(0.75rem,1.6vh,1.25rem)] text-black/80">{project.origin}</p>
          </FigmaReveal>
          <FigmaReveal delay={0.1} className="border-t border-black pt-[clamp(0.75rem,1.6vh,1.25rem)]">
            <p className="fg-small uppercase text-black/50">{approachLabel}</p>
            <p className="fg-mid mt-[clamp(0.75rem,1.6vh,1.25rem)] text-black/80">{project.approach}</p>
          </FigmaReveal>
        </div>

        <FigmaPortfolioGallery
          media={media}
          captions={project.gallery.map((g) => g.alt)}
          labels={galleryLabels}
        />

        {project.testimonial && (
          <FigmaReveal>
            <figure className="mt-[clamp(2.5rem,6vh,4.5rem)] border-t border-black pt-[clamp(1rem,2.5vh,1.75rem)]">
              <blockquote className="fg-lead max-w-3xl space-y-[1em] text-black/85">
                {project.testimonial.quote.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </blockquote>
              <figcaption className="fg-small mt-[clamp(1rem,2.5vh,1.5rem)] text-black/60">
                {project.testimonial.author} · {project.testimonial.role}
              </figcaption>
            </figure>
          </FigmaReveal>
        )}
      </section>
    </FigmaRecede>
  );
}
