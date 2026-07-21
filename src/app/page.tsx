import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Services from "@/components/Services";
import ReferenzenTeaser from "@/components/ReferenzenTeaser";
import { WaitlistSection } from "@/components/Waitlist";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <Process />
      <Services />
      <ReferenzenTeaser />
      <WaitlistSection />
      <CtaBand />
    </>
  );
}
