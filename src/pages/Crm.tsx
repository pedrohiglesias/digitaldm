import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { StatsSection } from "@/components/landing/StatsSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { MechanismSection } from "@/components/landing/MechanismSection";
import { TrafficSection } from "@/components/landing/TrafficSection";
import { DmIaSection } from "@/components/landing/DmIaSection";
import { ResultsSection } from "@/components/landing/ResultsSection";
import { PartnersSection } from "@/components/landing/PartnersSection";
import { ProofSection } from "@/components/landing/ProofSection";
import { VideoTestimonialsSection } from "@/components/landing/VideoTestimonialsSection";
import { EcommerceBenefitsSection } from "@/components/landing/EcommerceBenefitsSection";
import { EcommercePortfolioSection } from "@/components/landing/EcommercePortfolioSection";
import { EligibilitySection } from "@/components/landing/EligibilitySection";
import { CtaSection } from "@/components/landing/CtaSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";
import { AboutSection } from "@/components/landing/AboutSection";
import { MapSection } from "@/components/landing/MapSection";

const Crm = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <ProblemSection />
        <MechanismSection />
        <TrafficSection />
        <DmIaSection />
        <EcommerceBenefitsSection />
        <EcommercePortfolioSection />
        <ResultsSection />
        <ProofSection />
        <VideoTestimonialsSection />
        <EligibilitySection />
        <AboutSection />
        <MapSection />
        <PartnersSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Crm;
