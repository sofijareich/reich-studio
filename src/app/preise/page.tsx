import PageHero from "@/components/PageHero";
import PricingDetail from "@/components/PricingDetail";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/preise",
  "Reich Studio — Pricing",
  "Three packages: Starter from CHF 2'800 one-time, Growth from CHF 2'500/month, Full-Service from CHF 5'000/month."
);

const FAQ_ITEMS = [
  {
    q: "Are these final prices?",
    a: "These are starting prices. The exact price depends on your field and scope — we clarify that in the first call, before anything becomes binding.",
  },
  {
    q: "Do I have to commit long-term?",
    a: "Starter is one-time, no subscription. For Growth and Full-Service, we discuss the term that makes sense for you in the first call.",
  },
  {
    q: "What if I don't know which package fits?",
    a: "That's the norm, not the exception. In the first call we look together at where you stand and what actually makes sense.",
  },
  {
    q: "Can I switch later?",
    a: "Yes. The packages are a starting point, not a contract set in stone — we adjust as your needs change.",
  },
  {
    q: "How fast will I see results?",
    a: "With Starter, usually within a few weeks of project start. With Growth and Full-Service it depends on scope — we discuss concrete timelines in the first call.",
  },
  {
    q: "What if my field is very niche?",
    a: "That's exactly what Reich Studio is for. The more specific your field, the more clearly we can build trust with your clients — we find the right approach together.",
  },
];

export default function PreisePage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        lines={["Clearly priced.", "No fine print."]}
        subtext="Three packages, three starting points. Exact scope gets tailored to your field in the first call."
      />
      <PricingDetail />
      <Faq heading="Pricing questions" items={FAQ_ITEMS} />
      <CtaBand
        heading="Which package fits you?"
        subtext="We'll figure it out together in the first call."
      />
    </>
  );
}
