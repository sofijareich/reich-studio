import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/kontakt",
  "Reich Studio — Contact",
  "A short message is enough. Sofija replies personally within one to two days."
);

const FAQ_ITEMS = [
  {
    q: "What happens after I reach out?",
    a: "I reply personally, usually within one to two days, and we set up a short first call.",
  },
  {
    q: "Does the first call cost anything?",
    a: "No. It's there to figure out if and how we'd work together.",
  },
  {
    q: "I don't know yet what I need — is that a problem?",
    a: "No. Most people don't know exactly. That's what the call is for.",
  },
  {
    q: "Do you work with clients outside your region?",
    a: "Yes. Collaboration runs mostly remote — a call and short messages are usually enough.",
  },
  {
    q: "What language do we work in?",
    a: "In English or German — whatever works for you.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        lines={["Let's", "talk."]}
        subtext="A short message is enough. I reply personally — usually within one to two days."
      />
      <Contact />
      <Faq eyebrow="Before you write" heading="Quick answers" items={FAQ_ITEMS} />
    </>
  );
}
