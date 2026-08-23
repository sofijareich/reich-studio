import Reveal from "./Reveal";

export type ServiceBlock = { title: string; text: string };

export function ServiceIntro({ lead, body }: { lead: string; body: string }) {
  return (
    <section className="px-6 py-20 sm:px-10">
      <Reveal className="mx-auto max-w-3xl">
        <p className="text-2xl leading-snug font-medium sm:text-3xl">{lead}</p>
        <p className="mt-6 text-lg text-fg/60">{body}</p>
      </Reveal>
    </section>
  );
}

export function ServiceList({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string;
  items: ServiceBlock[];
}) {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {items.map((item) => (
            <Reveal key={item.title}>
              <div className="rounded-2xl border border-white/5 p-7">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-fg/60">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceJsonLd({
  name,
  description,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `https://reichstudio.ch${url}`,
    provider: { "@id": "https://reichstudio.ch/#organization" },
    areaServed: [
      { "@type": "City", name: "Sursee" },
      { "@type": "AdministrativeArea", name: "Luzern" },
      { "@type": "Country", name: "Schweiz" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
