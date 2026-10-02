import React from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Factory,
  Gauge,
  Hospital,
  Leaf,
  RefreshCw,
  ShieldCheck,
  Waves,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

/* =========================================================
   HYDRO-DIS TECHNOLOGY PAGE
   Route:
   /technologies/hydro-dis
   ========================================================= */

const applications = [
  {
    icon: Hospital,
    title: "Hospitals & Clinics",
    description:
      "Disinfection applications where microbiological control is an important treatment requirement.",
  },
  {
    icon: Droplets,
    title: "Potable Water",
    description:
      "Water-disinfection applications requiring controlled treatment without conventional chemical handling.",
  },
  {
    icon: Waves,
    title: "Lakes & Ponds",
    description:
      "Suitable waterbody applications where microbiological control is required.",
  },
  {
    icon: Factory,
    title: "Cooling Towers",
    description:
      "Water circuits where microbiological control and integration with existing systems are required.",
  },
  {
    icon: RefreshCw,
    title: "Treated Wastewater",
    description:
      "Disinfection of treated wastewater as part of the downstream treatment process.",
  },
  {
    icon: Droplets,
    title: "Swimming Pools",
    description:
      "Disinfection applications requiring continuous water treatment.",
  },
  {
    icon: Leaf,
    title: "Rainwater Harvesting",
    description:
      "Disinfection for suitable harvested-water applications.",
  },
];

const systemStages = [
  {
    number: "01",
    title: "Hydroxyl Radical Generation",
    description:
      "The supplied Hydro-dis material describes electrolytic conversion of water molecules into hydroxyl radicals.",
    formula: "2H₂O + 2e⁻ → 2OH• + H₂",
  },
  {
    number: "02",
    title: "Residual Disinfection",
    description:
      "Electro-catalytic conversion of chloride ions generates chlorine to maintain the required residual chlorine level.",
    formula: "2Cl⁻ + 2e⁻ → Cl₂",
  },
  {
    number: "03",
    title: "Treated Water",
    description:
      "The process is presented as producing purified water without conventional chemical dosing while maintaining pH.",
    formula: "Cl₂ + 2H₂O → 2HOCl + H⁺",
  },
];

const features = [
  {
    icon: Zap,
    title: "Automated Operation",
    text:
      "The source describes automated treatment for potable and wastewater applications with minimal maintenance.",
  },
  {
    icon: RefreshCw,
    title: "Self-Cleaning",
    text:
      "The Hydro-dis material describes a self-cleaning configuration intended to support service life and operating cost control.",
  },
  {
    icon: Wind,
    title: "Low Power Requirement",
    text:
      "The supplied material describes low-power operation and options for solar, in-situ and wind-powered applications.",
  },
  {
    icon: Factory,
    title: "Existing-System Integration",
    text:
      "Cells can be integrated into existing water circuits and the electronic control can be integrated with existing management systems.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Chemical Handling",
    text:
      "The technology is presented as removing the need to transport and store conventional hazardous disinfection chemicals.",
  },
  {
    icon: Leaf,
    title: "Reduced Chemical Footprint",
    text:
      "The source describes reduced environmental footprint associated with the manufacture and handling of treatment chemicals.",
  },
];

const installations = [
  {
    location: "MES, Shillong",
    capacity: "500 LPH",
    type: "Hydro-dis system installation",
  },
  {
    location: "Gandhi Medical College, Bhopal",
    capacity: "45,000 L/hr",
    type: "Hydro-dis dual disinfection system",
  },
  {
    location: "Gandhi Medical College, Indore",
    capacity: "110,000 L/hr",
    type: "Hydro-dis installation",
  },
  {
    location: "Gandhi Medical College, Indore",
    capacity: "100,000 L/hr",
    type: "Hydro-dis installation",
  },
  {
    location: "VIP Colony, Sikkim",
    capacity: "10,000 L/hr",
    type: "Hydro-dis installation",
  },
  {
    location: "Military Station, Jaipur, Rajasthan",
    capacity: "60,000 L/hr",
    type: "Hydro-dis installation",
  },
  {
    location: "Community Water Supply, Alwar, Rajasthan",
    capacity: "Two plants of 360 KLD",
    type: "Community water-supply installation",
  },
  {
    location: "Community Water Supply, Nagaland",
    capacity: "15,000 L/hr",
    type: "Hydro-dis installation in Mokokchung",
  },
];

const engineeringInputs = [
  "Required treatment flow",
  "Water source and quality",
  "Microbiological treatment objective",
  "Existing piping arrangement",
  "Available installation space",
  "Electrical supply",
  "Existing control system",
  "Operation and maintenance requirements",
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-3xl">
      <div
        className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] ${
          light ? "text-wastely-cyan-light" : "text-wastely-blue"
        }`}
      >
        <span className="h-px w-7 bg-wastely-cyan" />
        {eyebrow}
      </div>

      <h2
        className={`text-3xl font-bold leading-tight tracking-tight md:text-4xl ${
          light ? "text-white" : "text-wastely-deep"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 ${
            light ? "text-white/70" : "text-wastely-sub"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden shrink-0 text-wastely-cyan md:block">
      <ArrowRight size={22} strokeWidth={1.5} />
    </div>
  );
}

export default function HydroDis() {
  return (
    <main className="bg-white text-wastely-ink">
      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="relative overflow-hidden border-b border-wastely-line bg-wastely-bg-soft">
        {/* Engineering grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,59,92,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,59,92,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Ripple */}
        <div className="pointer-events-none absolute -right-24 top-12 h-[430px] w-[430px] rounded-full border border-wastely-cyan/20" />
        <div className="pointer-events-none absolute -right-8 top-28 h-[300px] w-[300px] rounded-full border border-wastely-cyan/20" />

        <div className="wastely-container relative">
          <div className="grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-wastely-blue">
                <span className="h-px w-8 bg-wastely-cyan" />
                Treatment Technology
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-wastely-deep sm:text-5xl lg:text-[3.7rem]">
                Chemical-free disinfection built around the water circuit.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-wastely-sub sm:text-lg">
                Hydro-dis® is presented as a dual-step electrochemical
                disinfection technology for potable water, wastewater and
                other applications where microbiological control is required.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="wastely-btn wastely-btn-primary"
                >
                  Request an Assessment
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="#operating-principle"
                  className="wastely-btn wastely-btn-secondary"
                >
                  See How It Works
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 border-y border-wastely-line">
                <div className="border-r border-wastely-line py-5 pr-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-wastely-sub">
                    Cell capacity
                  </p>
                  <p className="mt-1 text-lg font-bold text-wastely-deep">
                    12–15 m³/hr
                  </p>
                  <p className="mt-1 text-xs text-wastely-sub">
                    continuous flow
                  </p>
                </div>

                <div className="py-5 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-wastely-sub">
                    Process
                  </p>
                  <p className="mt-1 text-lg font-bold text-wastely-deep">
                    Dual step
                  </p>
                  <p className="mt-1 text-xs text-wastely-sub">
                    electrochemical disinfection
                  </p>
                </div>
              </div>
            </div>

            {/* Technical hero diagram */}
            <div className="relative">
              <div className="border border-wastely-line bg-white p-5 shadow-subtle">
                <div className="mb-4 flex items-center justify-between border-b border-wastely-line pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-blue">
                      System Architecture
                    </p>
                    <p className="mt-1 text-sm text-wastely-sub">
                      Hydro-dis® treatment circuit
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center border border-wastely-line text-wastely-blue">
                    <Activity size={18} />
                  </div>
                </div>

                <div className="relative min-h-[410px] overflow-hidden bg-wastely-bg-soft p-5">
                  {/* pipe */}
                  <div className="absolute left-7 right-7 top-[205px] h-5 bg-gradient-to-r from-wastely-blue via-wastely-cyan to-wastely-blue" />

                  <div className="absolute left-7 top-[196px] h-10 w-3 bg-wastely-blue" />

                  <div className="absolute right-7 top-[196px] h-10 w-3 bg-wastely-blue" />

                  {/* water direction */}
                  <div className="absolute left-14 top-[185px] flex items-center gap-2 text-xs font-semibold text-white">
                    <span>FLOW</span>
                    <ArrowRight size={15} />
                  </div>

                  {/* Hydro-dis cell */}
                  <div className="absolute left-1/2 top-[84px] w-[210px] -translate-x-1/2 border border-wastely-blue bg-white">
                    <div className="border-b border-wastely-line bg-wastely-blue px-4 py-3 text-center">
                      <p className="text-sm font-bold text-white">
                        Hydro-dis® Cell
                      </p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/70">
                        Electrochemical treatment
                      </p>
                    </div>

                    <div className="p-4">
                      <div className="mx-auto flex h-24 w-20 items-center justify-center border-4 border-wastely-blue bg-wastely-bg-soft">
                        <div className="h-14 w-5 border border-wastely-cyan bg-wastely-cyan/20" />
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-2 text-[10px]">
                        <div className="border border-wastely-line p-2 text-center">
                          Electrode
                        </div>
                        <div className="border border-wastely-line p-2 text-center">
                          Flow meter
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Controller */}
                  <div className="absolute bottom-10 right-8 w-32 border border-wastely-line bg-white">
                    <div className="border-b border-wastely-line bg-wastely-deep px-3 py-2 text-[10px] font-bold text-white">
                      CONTROL
                    </div>
                    <div className="space-y-2 p-3">
                      <div className="h-2 w-full bg-wastely-line" />
                      <div className="h-2 w-3/4 bg-wastely-cyan/40" />
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-wastely-cyan" />
                        <span className="h-2 w-2 rounded-full bg-wastely-blue" />
                        <span className="h-2 w-2 rounded-full bg-wastely-line" />
                      </div>
                    </div>
                  </div>

                  {/* Brine option */}
                  <div className="absolute bottom-10 left-8 max-w-[145px] border border-dashed border-wastely-line bg-white/90 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-wastely-sub">
                      Optional
                    </p>
                    <p className="mt-1 text-xs font-semibold text-wastely-deep">
                      Brine kit
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-wastely-sub">
                      Brine tank + recirculation pump arrangement.
                    </p>
                  </div>

                  {/* Output */}
                  <div className="absolute right-5 top-[170px] translate-x-full pl-4 text-xs font-semibold text-wastely-blue">
                    Treated water
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-wastely-sub">
                <span>Water circuit integration</span>
                <span className="font-semibold text-wastely-blue">
                  12–15 m³/hr cell
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY POSITIONING
          ===================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <SectionHeading
            eyebrow="Why Hydro-dis"
            title="Disinfection without building the project around chemical storage."
            description="The supplied Hydro-dis material positions the technology around chemical-free disinfection, reduced chemical handling and integration into existing water circuits."
          />

          <div className="mt-12 grid gap-0 border border-wastely-line md:grid-cols-3">
            <div className="border-b border-wastely-line p-7 md:border-b-0 md:border-r">
              <ShieldCheck
                size={26}
                strokeWidth={1.5}
                className="text-wastely-blue"
              />
              <h3 className="mt-5 text-lg font-bold text-wastely-deep">
                Reduced chemical handling
              </h3>
              <p className="mt-3 text-sm leading-6 text-wastely-sub">
                The source states that Hydro-dis removes the need for handling,
                storing, transporting and using dangerous hazardous chemicals.
              </p>
            </div>

            <div className="border-b border-wastely-line p-7 md:border-b-0 md:border-r">
              <Zap
                size={26}
                strokeWidth={1.5}
                className="text-wastely-blue"
              />
              <h3 className="mt-5 text-lg font-bold text-wastely-deep">
                Electrochemical process
              </h3>
              <p className="mt-3 text-sm leading-6 text-wastely-sub">
                Treatment is based on electrochemical generation of reactive
                species within the water-treatment process.
              </p>
            </div>

            <div className="p-7">
              <Factory
                size={26}
                strokeWidth={1.5}
                className="text-wastely-blue"
              />
              <h3 className="mt-5 text-lg font-bold text-wastely-deep">
                Existing-system integration
              </h3>
              <p className="mt-3 text-sm leading-6 text-wastely-sub">
                The supplied material describes integration of cells into
                existing water circuits and electronic controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OPERATING PRINCIPLE
          ===================================================== */}
      <section
        id="operating-principle"
        className="wastely-section wastely-section-dark relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="wastely-container relative">
          <SectionHeading
            light
            eyebrow="Operating Principle"
            title="Three stages inside one treatment architecture."
            description="The supplied technical material describes Hydro-dis as a dual-step process followed by the treated-water outcome."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {systemStages.map((stage) => (
              <div
                key={stage.number}
                className="border border-white/15 bg-white/[0.04] p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-wastely-cyan-light">
                    STAGE {stage.number}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/70">
                    <Activity size={17} />
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-bold text-white">
                  {stage.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/65">
                  {stage.description}
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-mono text-sm text-wastely-cyan-light">
                    {stage.formula}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-white/65">
              The source describes hydroxyl radicals as the first disinfection
              stage and residual chlorine generation as the second stage for
              sustained disinfection.
            </p>

            <div className="shrink-0 text-xs font-semibold uppercase tracking-wider text-wastely-cyan-light">
              Electrolysis → Residual protection
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM COMPONENTS
          ===================================================== */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <SectionHeading
            eyebrow="System Configuration"
            title="The cell sits inside the water circuit."
            description="The supplied Hydro-dis diagram shows a flow-through cell, electrode, flow meter, control unit and an optional brine arrangement."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div className="border border-wastely-line bg-white p-6">
              <div className="relative min-h-[390px] overflow-hidden bg-wastely-bg-soft">
                {/* Main pipe */}
                <div className="absolute left-8 right-8 top-[185px] h-6 bg-wastely-blue" />

                {/* Input */}
                <div className="absolute left-8 top-[110px] h-[88px] w-4 bg-wastely-blue" />

                {/* Cell */}
                <div className="absolute left-1/2 top-[78px] w-[190px] -translate-x-1/2 border border-wastely-blue bg-white">
                  <div className="bg-wastely-blue px-4 py-3 text-center text-sm font-bold text-white">
                    Hydro-dis® Cell
                  </div>

                  <div className="p-5">
                    <div className="mx-auto h-24 w-16 border-4 border-wastely-blue bg-wastely-bg-soft" />

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <span className="border border-wastely-line px-2 py-2 text-center text-[10px] text-wastely-sub">
                        Electrode
                      </span>
                      <span className="border border-wastely-line px-2 py-2 text-center text-[10px] text-wastely-sub">
                        Flow meter
                      </span>
                    </div>
                  </div>
                </div>

                {/* Controller */}
                <div className="absolute bottom-8 right-8 w-36 border border-wastely-line bg-white">
                  <div className="bg-wastely-deep px-3 py-2 text-[10px] font-bold text-white">
                    CONTROL PANEL
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-wastely-line" />
                      <div className="h-2 w-4/5 bg-wastely-cyan/40" />
                      <div className="h-2 w-3/5 bg-wastely-line" />
                    </div>
                  </div>
                </div>

                {/* Brine */}
                <div className="absolute bottom-8 left-8 border border-dashed border-wastely-line bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-wastely-sub">
                    Optional
                  </p>
                  <p className="mt-1 text-sm font-bold text-wastely-deep">
                    Brine kit
                  </p>
                  <p className="mt-1 text-[10px] text-wastely-sub">
                    Tank + recirculation pump
                  </p>
                </div>

                <div className="absolute left-5 top-[165px] text-xs font-bold text-wastely-blue">
                  INLET
                </div>

                <div className="absolute right-5 top-[165px] text-xs font-bold text-wastely-blue">
                  OUTLET
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                [
                  "01",
                  "Water circuit",
                  "The treatment cell is installed directly within the water circuit.",
                ],
                [
                  "02",
                  "Electrode",
                  "The electrode is central to the electrochemical treatment process.",
                ],
                [
                  "03",
                  "Flow measurement",
                  "Flow measurement forms part of the supplied system arrangement.",
                ],
                [
                  "04",
                  "Control",
                  "The system includes an electronic control arrangement for operation.",
                ],
                [
                  "05",
                  "Optional brine arrangement",
                  "The supplied diagram also shows an optional brine tank and recirculation pump.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="border border-wastely-line bg-white p-5"
                >
                  <div className="flex gap-4">
                    <span className="text-xs font-bold tracking-wider text-wastely-cyan">
                      {number}
                    </span>

                    <div>
                      <h3 className="text-sm font-bold text-wastely-deep">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-wastely-sub">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPACITY
          ===================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionHeading
                eyebrow="Hydro-dis Cell"
                title="Designed for continuous-flow treatment."
                description="The supplied Hydro-dis material specifies a cell capacity of 12–15 m³/hr continuous flow."
              />

              <div className="mt-8 border-l-2 border-wastely-cyan pl-5">
                <p className="text-4xl font-bold tracking-tight text-wastely-deep">
                  12–15
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-wastely-blue">
                  m³/hr continuous flow
                </p>
              </div>
            </div>

            <div className="border border-wastely-line bg-wastely-bg-soft p-7">
              <div className="flex items-center justify-between border-b border-wastely-line pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-blue">
                    Flow Envelope
                  </p>
                  <p className="mt-1 text-sm text-wastely-sub">
                    Supplied Hydro-dis cell specification
                  </p>
                </div>

                <Gauge
                  size={28}
                  strokeWidth={1.5}
                  className="text-wastely-blue"
                />
              </div>

              <div className="mt-8">
                <div className="flex items-end justify-between">
                  <span className="text-sm text-wastely-sub">
                    Continuous flow
                  </span>
                  <span className="text-lg font-bold text-wastely-deep">
                    12–15 m³/hr
                  </span>
                </div>

                <div className="mt-4 h-3 w-full bg-wastely-line">
                  <div className="h-full w-[82%] bg-gradient-to-r from-wastely-blue to-wastely-cyan" />
                </div>

                <div className="mt-3 flex justify-between text-xs text-wastely-sub">
                  <span>12 m³/hr</span>
                  <span>15 m³/hr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
          ===================================================== */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <SectionHeading
            eyebrow="System Characteristics"
            title="Designed to reduce operational complexity around disinfection."
            description="These characteristics are taken from the supplied Hydro-dis material and should be evaluated against the actual project application."
          />

          <div className="mt-12 grid gap-px border border-wastely-line bg-wastely-line md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="bg-white p-7">
                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    className="text-wastely-blue"
                  />

                  <h3 className="mt-5 text-lg font-bold text-wastely-deep">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-wastely-sub">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATIONS
          ===================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionHeading
              eyebrow="Targeted Applications"
              title="One technology, different water circuits."
              description="The supplied material identifies applications across potable water, wastewater, healthcare, waterbodies and other systems where microbiological control is a challenge."
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {applications.map((application) => {
                const Icon = application.icon;

                return (
                  <div
                    key={application.title}
                    className="group border border-wastely-line p-6 transition-colors duration-200 hover:border-wastely-cyan"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-wastely-blue"
                      />

                      <ArrowRight
                        size={17}
                        className="text-wastely-sub transition-transform duration-200 group-hover:translate-x-1 group-hover:text-wastely-cyan"
                      />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-wastely-deep">
                      {application.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-wastely-sub">
                      {application.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FIELD INSTALLATIONS
          ===================================================== */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <SectionHeading
            eyebrow="Selected Installations"
            title="Examples of Hydro-dis installations documented in the supplied material."
            description="The following project examples and capacities are reproduced from the supplied Hydro-dis presentation."
          />

          <div className="mt-12 overflow-hidden border border-wastely-line bg-white">
            <div className="hidden grid-cols-[1.3fr_0.7fr_1fr] border-b border-wastely-line bg-wastely-deep px-6 py-4 text-xs font-bold uppercase tracking-wider text-white md:grid">
              <span>Installation</span>
              <span>Capacity</span>
              <span>Application / description</span>
            </div>

            {installations.map((item, index) => (
              <div
                key={`${item.location}-${item.capacity}-${index}`}
                className="grid gap-2 border-b border-wastely-line p-6 last:border-b-0 md:grid-cols-[1.3fr_0.7fr_1fr] md:items-center md:gap-6"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-wastely-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-sm font-bold text-wastely-deep">
                    {item.location}
                  </p>
                </div>

                <p className="text-sm font-semibold text-wastely-blue">
                  {item.capacity}
                </p>

                <p className="text-sm leading-6 text-wastely-sub">
                  {item.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MAINTENANCE
          ===================================================== */}
      <section className="wastely-section wastely-section-dark">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                light
                eyebrow="Service & Maintenance"
                title="A defined inspection and service cycle."
                description="The supplied Hydro-dis material specifies quarterly inspection of plumbing, electrical connections and cell performance, with a full service annually."
              />

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-wastely-cyan-light">
                <Wrench size={19} />
                Quarterly inspection + annual full service
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border border-white/15 bg-white/[0.04] p-6">
                <p className="text-3xl font-bold text-white">7</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/55">
                  Years life
                </p>
              </div>

              <div className="border border-white/15 bg-white/[0.04] p-6">
                <p className="text-3xl font-bold text-white">25,500</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/55">
                  Hours
                </p>
              </div>

              <div className="border border-white/15 bg-white/[0.04] p-6">
                <p className="text-3xl font-bold text-white">10 hr</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/55">
                  Per day operation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT DEFINITION
          ===================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <SectionHeading
            eyebrow="Project Definition"
            title="The technology still starts with the application."
            description="Hydro-dis should be evaluated as part of the complete water-treatment arrangement. These are the project inputs that should be established before system configuration."
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringInputs.map((input, index) => (
              <div
                key={input}
                className="border border-wastely-line p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-wastely-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <CheckCircle2
                    size={17}
                    strokeWidth={1.5}
                    className="text-wastely-blue"
                  />
                </div>

                <p className="mt-5 text-sm font-semibold leading-6 text-wastely-deep">
                  {input}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HANDOFF
          ===================================================== */}
      <section className="border-t border-wastely-line bg-wastely-bg-soft py-16">
        <div className="wastely-container">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              to="/services/technology-process"
              className="group border border-wastely-line bg-white p-6 transition-colors hover:border-wastely-cyan"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-blue">
                Engineering
              </p>
              <h3 className="mt-3 text-lg font-bold text-wastely-deep">
                Technology Process
              </h3>
              <p className="mt-2 text-sm leading-6 text-wastely-sub">
                See how treatment technology is evaluated around water
                characteristics, process objectives and site conditions.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-wastely-blue">
                View service
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              to="/services/operation-maintenance"
              className="group border border-wastely-line bg-white p-6 transition-colors hover:border-wastely-cyan"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-blue">
                Plant Support
              </p>
              <h3 className="mt-3 text-lg font-bold text-wastely-deep">
                Operation & Maintenance
              </h3>
              <p className="mt-2 text-sm leading-6 text-wastely-sub">
                Connect the technology with ongoing plant operation,
                inspection and performance support.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-wastely-blue">
                View service
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              to="/technologies"
              className="group border border-wastely-line bg-white p-6 transition-colors hover:border-wastely-cyan"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-blue">
                Technology Library
              </p>
              <h3 className="mt-3 text-lg font-bold text-wastely-deep">
                Explore Technologies
              </h3>
              <p className="mt-2 text-sm leading-6 text-wastely-sub">
                Return to the complete treatment-technology overview.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-wastely-blue">
                View technologies
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}