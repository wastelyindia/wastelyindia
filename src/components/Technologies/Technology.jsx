import BiologicalSystems from "./BiologicalSystems"
import HybridSystems from "./HybridSystems"
import MechanicalSystems from "./MechanicalSystems"
import SmartMonitoringSystems from "./SmartMonitoringSystems"
import TechnologiesCTA from "./TechnologiesCTA"
import TechnologiesHero from "./TechnologiesHero"
import TechnologiesSideNav from "./TechnologiesSideNav"
import TechnologyBento from "./TechnologyBento"
import TechnologyCard from "./TechnologyCard"
import TechnologyCategories from "./TechnologyCategories"
import TechnologyComparison from "./TechnologyComparison"
import TechnologyEcosystemMap from "./TechnologyEcosystemMap"
import TechnologyWorkflow from "./TechnologyWorkflow"


const Technology = () => {
  return (
    <main className="relative isolate overflow-x-hidden bg-[#081219]">

      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-0 top-[40%] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      <TechnologiesSideNav />

      {/* HERO */}
      <TechnologiesHero />

      {/* MAIN TECHNOLOGY OVERVIEW */}
      <TechnologyBento />

      {/* ECOSYSTEM */}
      <div className="relative will-change-transform">
        <TechnologyEcosystemMap />
      </div>

      {/* BIOLOGICAL */}
      <BiologicalSystems />

      {/* MECHANICAL */}
      <MechanicalSystems />

      {/* SMART */}
      <SmartMonitoringSystems />

      {/* HYBRID */}
      <HybridSystems />

      {/* WORKFLOW */}
      <TechnologyWorkflow />

      {/* COMPARISON */}
      <div className="relative will-change-transform">
        <TechnologyComparison />
      </div>

      {/* CTA */}
      <TechnologiesCTA />

    </main>
  )
}


export default Technology