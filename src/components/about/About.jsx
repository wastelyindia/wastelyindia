
import AboutHero from "./AboutHero";
import WhoWeAre from "./WhoWeAre";
import AboutCapabilities from "./AboutCapabilities";
import HowWeWork from "./HowWeWork";
import OurApproach from "./OurApproach";
import AboutProof from "./AboutProof";
// import AboutCTA from "./AboutCTA";

const About = () => {
  return (
    <main className="relative isolate overflow-x-hidden bg-[#081219]">
      <AboutHero />

      <WhoWeAre />

      <AboutCapabilities />

      <HowWeWork />

      <OurApproach />

      <AboutProof />

      {/* <AboutCTA /> */}
    </main>
  );
};

export default About;