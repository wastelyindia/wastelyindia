import Hero from "./Hero";
import ImpactSection from "./ImpactSection";
import ApplicationCard from "./ApplicationCard";
import CardHome from "./CardHome";
import Industries from "./Industries";
import ProcessSection from "./ProcessSection";
import CTASection from "./CTASection";
import IntegratedEcosystem from "./IntegratedEcosystem";
import FeaturedTechnologies from "./FeaturedTechnologies";
import ImpactMetrics from "./ImpactMetrics";
import BeforeAfterShowcase from "./BeforeAfterShowcase";
import SmartMonitoring from "./SmartMonitoring";
import CaseStudyMarquee from "./CaseStudyMarquee";
import SectionTransition from "./SectionTransition";

const Home = () => {
  return (
    <main
      className="
        relative
        isolate
        overflow-x-hidden
        bg-[#081219]
        text-white
        antialiased
      "
    >
      {/* GLOBAL ATMOSPHERIC OVERLAYS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        <div
          className="
            absolute
            left-[-10%]
            top-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            top-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-emerald-500/10
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-[5%]
            left-[30%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-cyan-400/5
            blur-[140px]
          "
        />
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        <Hero />

        <SectionTransition />

        <IntegratedEcosystem />

        <SectionTransition flip />

        <ImpactMetrics />

        <SectionTransition />

        <FeaturedTechnologies />

        <SectionTransition flip />

        <BeforeAfterShowcase />

        <SectionTransition />

        <SmartMonitoring />

        <SectionTransition flip />

        <Industries />

        <SectionTransition />

        <ProcessSection />

        <SectionTransition flip />

        <CaseStudyMarquee />

        <SectionTransition />

        <CTASection />
      </div>
    </main>
  );
};

export default Home;