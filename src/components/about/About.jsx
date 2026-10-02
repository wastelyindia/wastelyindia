
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
import WhoWeAre from "./WhoWeAre";
import AboutCapabilities from "./AboutCapabilities";
import HowWeWork from "./HowWeWork";
import OurApproach from "./OurApproach";
import AboutProof from "./AboutProof";
import AboutCTA from "./AboutCTA";

const About = () => {
  return (
    <main className="relative isolate overflow-x-hidden bg-[#081219]">
      <AboutHero />

      <WhoWeAre />

      <AboutCapabilities />

      <HowWeWork />

      <OurApproach />

      <AboutProof />

      <AboutCTA />
    </main>
  );
};

export default About;