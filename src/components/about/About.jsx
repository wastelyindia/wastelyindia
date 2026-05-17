
import AboutHero from "./AboutHero";
import CinematicDivider from "./CinematicDivider";

import MissionVision from "./MissionVision";
import RestorationPhilosophy from "./RestorationPhilosophy";
import EnvironmentalTimeline from "./EnvironmentalTimeline";

import SustainabilitySection from "./SustainabilitySection";
import TrustLayer from "./trustMetrics";

import AboutCTASection from "./AboutCTASection";
import TestimonialMarquee from "./TestimonialMarquee";

import CardContainer from "./CardContainer";

const About = () => {
  return (
    <main className="relative isolate overflow-x-hidden bg-[#081219]">

      {/* ====================================================== */}
      {/* GLOBAL ATMOSPHERIC BACKGROUND */}
      {/* ====================================================== */}

      {/* TOP CYAN GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          top-[-300px]
          left-[-200px]
          w-[700px]
h-[700px]
lg:w-[1200px]
lg:h-[1200px]
          bg-cyan-500/6
blur-[140px]
          rounded-full
        "
      />

      {/* CENTER WHITE GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          top-[28%]
          left-1/2
          -translate-x-1/2
          w-[700px]
h-[700px]
lg:w-[1200px]
lg:h-[1200px]
          bg-white/[0.04]
          blur-[180px]
          rounded-full
        "
      />

      {/* BOTTOM EMERALD GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-400px]
          right-[-240px]
          w-[700px]
h-[700px]
lg:w-[1200px]
lg:h-[1200px]
          bg-emerald-500/10
          blur-[180px]
          rounded-full
        "
      />

      {/* ====================================================== */}
      {/* GLOBAL GRID TEXTURE */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.015]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* ====================================================== */}
      {/* GLOBAL NOISE TEXTURE */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

      {/* ====================================================== */}
      {/* GLOBAL LIGHT SHAFTS */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-[18%]
          w-[240px]
          h-full
          bg-gradient-to-b
          from-cyan-400/10
          via-transparent
          to-transparent
          blur-[100px]
opacity-40
          rotate-[8deg]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-[16%]
          w-[220px]
          h-full
          bg-gradient-to-b
          from-emerald-400/10
          via-transparent
          to-transparent
          blur-[140px]
          -rotate-[8deg]
          opacity-60
        "
      />

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative z-10">
        <AboutHero />
      </section>

      {/* ====================================================== */}
      {/* CINEMATIC TRANSITION */}
      {/* ====================================================== */}

      <div className="relative z-20">

        {/* ATMOSPHERIC FOG */}

        <div
          className="
            absolute
            -top-[120px]
            left-1/2
            -translate-x-1/2
            w-[900px]
h-[220px]
lg:w-[1400px]
lg:h-[320px]
blur-[120px]
lg:blur-[180px]
            bg-cyan-500/10
            rounded-full
          "
        />

        {/* ANGLED TRANSITION */}

        <div
          className="
            absolute
            -top-[100px]
            left-0
            w-full
            h-[220px]
            bg-[#081219]
            skew-y-[-3deg]
          "
        />

        <CinematicDivider />

      </div>

      {/* ====================================================== */}
      {/* MISSION & VISION */}
      {/* ====================================================== */}

      <section className="relative z-10 py-24 lg:py-32">
        <MissionVision />
      </section>

      {/* ====================================================== */}
      {/* RESTORATION PHILOSOPHY */}
      {/* ====================================================== */}

      <section className="relative z-10 py-24 lg:py-32">
        <RestorationPhilosophy />
      </section>

      {/* ====================================================== */}
      {/* ENVIRONMENTAL TIMELINE */}
      {/* ====================================================== */}

      <section className="relative z-10 py-24 lg:py-32">
        <EnvironmentalTimeline />
      </section>

      {/* ====================================================== */}
      {/* SUSTAINABILITY */}
      {/* ====================================================== */}

      <section className="relative z-10 py-24 lg:py-32">
        <SustainabilitySection />
      </section>

      {/* ====================================================== */}
      {/* TRUST LAYER */}
      {/* ====================================================== */}

      <section className="relative z-10 py-24 lg:py-32">
        <TrustLayer />
      </section>

      {/* ====================================================== */}
      {/* CTA SECTION */}
      {/* ====================================================== */}

      <section className="relative z-10 py-24 lg:py-32">
        <AboutCTASection />
      </section>

      {/* ====================================================== */}
      {/* TESTIMONIALS */}
      {/* ====================================================== */}

      <section className="relative z-10 py-24 lg:py-32">
        <TestimonialMarquee />
      </section>

      {/* ====================================================== */}
      {/* FINAL LUMINOUS EXIT */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-260px]
          left-1/2
          -translate-x-1/2
          w-[900px]
h-[280px]
lg:w-[1600px]
lg:h-[500px]
blur-[120px]
lg:blur-[220px]
          bg-white/[0.05]
          rounded-full
        "
      />

    </main>
  );
};

export default About;