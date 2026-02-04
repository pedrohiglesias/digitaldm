import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { StatsSection } from "@/components/landing/StatsSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { MechanismSection } from "@/components/landing/MechanismSection";
import { DmIaSection } from "@/components/landing/DmIaSection";
import { MethodSection } from "@/components/landing/MethodSection";
import { ResultsSection } from "@/components/landing/ResultsSection";
import { PartnersSection } from "@/components/landing/PartnersSection";
import { ProofSection } from "@/components/landing/ProofSection";
import { VideoTestimonialsSection } from "@/components/landing/VideoTestimonialsSection";
import { SegmentsSection } from "@/components/landing/SegmentsSection";
import { EligibilitySection } from "@/components/landing/EligibilitySection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <ProblemSection />
        <MechanismSection />
        <DmIaSection />
        <MethodSection />
        <ResultsSection />
        <PartnersSection />
        <ProofSection />
        <VideoTestimonialsSection />
        <SegmentsSection />
        <EligibilitySection />
        <PricingSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
