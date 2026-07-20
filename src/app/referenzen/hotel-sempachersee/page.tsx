import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";
import { caseStudies } from "@/lib/referenzen";

const study = caseStudies.find((s) => s.id === "hotel-sempachersee")!;

export const metadata: Metadata = {
  title: `Reich Studio — ${study.name}`,
  description: study.logline,
};

export default function Page() {
  return <CaseStudyPage study={study} />;
}
