import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Atom,
  CheckCircle2,
  Droplets,
  Factory,
  Fish,
  Gauge,
  Layers3,
  Orbit,
  Recycle,
  ShieldCheck,
  Waves,
  Wind,
  Zap,
} from "lucide-react";

import HeroBg from "../../assets/images/nano-hero.png";
import NanoScienceImg from "../../assets/images/nano-science.png";
import SystemImg from "../../assets/images/nano-system.png";
import NanoPlantImg from "../../assets/images/nano-plant.png";

/* =========================================================
   DATA
========================================================= */

const aerationSystems = [
  {
    number: "01",
    title: "Fine Bubble Diffusers",
    description:
      "Submerged aeration systems for oxygen transfer within biological treatment processes.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Coarse Bubble Diffusers",
    description:
      "Robust aeration systems suited to mixing, sludge stabilization and industrial wastewater applications.",
    icon: Waves,
  },
  {
    number: "03",
    title: "Surface Aeration",
    description:
      "Surface-based aeration systems for suitable basin configurations where mixing and oxygen transfer are required.",
    icon: Wind,
  },
];

const oxygenMethods = [
  {
    number: "01",
    title: "Mechanical Aeration",
    description:
      "Mechanical mixers and aerators used to introduce oxygen and support mixing within treatment systems.",
    icon: Factory,
  },
  {
    number: "02",
    title: "Pure Oxygen Injection",
    description:
      "Oxygen-enrichment approaches for applications where higher oxygen availability is required.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Membrane Aeration",
    description:
      "Membrane-based diffusion systems for controlled gas transfer within suitable treatment configurations.",
    icon: ShieldCheck,
  },
];

const nanoScience = [
  {
    number: "01",
    title: "Nanometer Scale",
    description:
      "The source material describes nano bubbles as ultra-fine bubbles engineered at nanometer scale.",
    icon: Atom,
  },
  {
    number: "02",
    title: "Long Retention",
    description:
      "The technology is presented around prolonged bubble presence within the water column.",
    icon: Orbit,
  },
  {
    number: "03",
    title: "High Surface Area",
    description:
      "Small bubble dimensions provide a large gas-water interface for oxygen transfer.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Brownian Motion",
    description:
      "The source describes continuous random movement as part of nano-bubble behaviour.",
    icon: Activity,
  },
  {
    number: "05",
    title: "Slow Flotation",
    description:
      "Very low flotation velocity is presented as a characteristic supporting gas retention.",
    icon: Wind,
  },
  {
    number: "06",
    title: "Gas Dissolution",
    description:
      "The system is designed around transferring gas into water rather than simply introducing air.",
    icon: Gauge,
  },
];

const applications = [
  {
    title: "Lakes & Reservoirs",
    description:
      "Oxygenation systems for suitable waterbody restoration and water-quality applications.",
    icon: Waves,
  },
  {
    title: "Aquaculture",
    description:
      "Oxygenation support for aquatic production environments where dissolved oxygen is important.",
    icon: Fish,
  },
  {
    title: "Fish Farms",
    description:
      "Aeration and oxygenation for suitable intensive aquatic systems.",
    icon: Activity,
  },
  {
    title: "STP Plants",
    description:
      "Aeration support within biological sewage treatment processes.",
    icon: Factory,
  },
  {
    title: "ETP Systems",
    description:
      "Aeration and oxygen-transfer systems for industrial wastewater treatment.",
    icon: Recycle,
  },
  {
    title: "Industrial Wastewater",
    description:
      "Oxygenation systems selected around process load, basin configuration and treatment objectives.",
    icon: Droplets,
  },
];

const systemConsiderations = [
  "Required dissolved oxygen level",
  "Wastewater characteristics and biological load",
  "Tank or basin configuration",
  "Required mixing conditions",
  "Available power and operating conditions",
  "Existing treatment infrastructure",
];

const systemFlow = [
  "Water / Process Stream",
  "Gas Injection",
  "Bubble Generation",
  "Gas–Water Contact",
  "Oxygen Transfer",
  "Dissolved Oxygen",
  "Treatment Process",
];

/* =========================================================
   COMPONENT
========================================================= */

const AerationTechnology = () => {
  return (
    <main className="bg-wastely-bg text-wastely-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-wastely-line bg-wastely-bg-soft">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] opacity-60 lg:block"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,59,92,0.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,59,92,0.055) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[18%] top-[18%] hidden h-[420px] w-[420px] rounded-full border border-wastely-cyan/20 lg:block"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[25%] top-[26%] hidden h-[280px] w-[280px] rounded-full border border-wastely-cyan/15 lg:block"
        />

        <div className="wastely-container relative py-16 sm:py-20 lg:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">

            {/* LEFT */}

            <div className="max-w-2xl">

              <div className="wastely-section-eyebrow">
                Treatment Technology
              </div>

              <h1 className="mt-3 text-[2.7rem] font-bold leading-[1.08] tracking-[-0.035em] text-wastely-deep sm:text-5xl lg:text-[3.55rem]">
                Put oxygen where the treatment process needs it.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-wastely-sub sm:text-lg">
                Aeration and oxygenation systems support biological treatment,
                waterbody restoration and other applications where controlled
                oxygen transfer is part of the treatment requirement.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="wastely-btn wastely-btn-primary"
                >
                  Request an Assessment
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/technologies"
                  className="wastely-btn wastely-btn-secondary"
                >
                  View Technologies
                </Link>
              </div>

              <div className="mt-12 border-y border-wastely-line">
                <div className="grid grid-cols-2 sm:grid-cols-4">

                  <HeroSpec
                    label="System"
                    value="Aeration"
                  />

                  <HeroSpec
                    label="Function"
                    value="Oxygen Transfer"
                  />

                  <HeroSpec
                    label="Applications"
                    value="STP / ETP / Waterbody"
                  />

                  <HeroSpec
                    label="Configuration"
                    value="Site Specific"
                  />

                </div>
              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute -inset-5 bg-wastely-gradient opacity-10 blur-3xl" />

              <div className="relative border border-wastely-line bg-white">

                <div className="relative h-[420px] overflow-hidden sm:h-[500px]">

                  <img
                    src={HeroBg}
                    alt="Aeration and oxygenation system"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/75 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">

                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-wastely-cyan">
                        Treatment Technology
                      </div>

                      <div className="mt-1 text-lg font-bold text-white">
                        Aeration & Oxygenation
                      </div>
                    </div>

                    <div className="hidden border border-white/20 bg-wastely-deep/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:block">
                      Oxygen Transfer
                    </div>

                  </div>

                </div>

                <div className="grid grid-cols-3 border-t border-wastely-line">

                  <HeroRail number="01" label="Gas" />

                  <HeroRail
                    number="02"
                    label="Transfer"
                    bordered
                  />

                  <HeroRail
                    number="03"
                    label="Treatment"
                    bordered
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHERE AERATION FITS
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                Treatment Role
              </div>

              <h2 className="wastely-section-title">
                Aeration is a process input, not the entire treatment plant.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-wastely-sub">
                Aeration and oxygenation are selected according to the
                treatment process, water characteristics and operating
                conditions of the site.
              </p>

            </div>

            <div className="relative">

              <div className="hidden absolute left-0 right-0 top-[42px] h-px bg-wastely-line lg:block" />

              <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2 lg:grid-cols-3">

                <TreatmentRole
                  number="01"
                  title="Oxygen"
                  description="Introduce or transfer oxygen into the water."
                />

                <TreatmentRole
                  number="02"
                  title="Biological Process"
                  description="Support aerobic biological activity where required."
                />

                <TreatmentRole
                  number="03"
                  title="Mixing"
                  description="Maintain suitable movement and distribution."
                />

                <TreatmentRole
                  number="04"
                  title="Waterbody"
                  description="Support oxygenation in suitable restoration applications."
                />

                <TreatmentRole
                  number="05"
                  title="Process Control"
                  description="Match oxygenation to actual treatment requirements."
                />

                <TreatmentRole
                  number="06"
                  title="Plant Integration"
                  description="Connect the system to the wider treatment configuration."
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          AERATION CONFIGURATIONS
      ===================================================== */}

      <section className="wastely-section wastely-section-soft">

        <div className="wastely-container">

          <div className="wastely-section-header">

            <div className="wastely-section-eyebrow">
              Aeration Configurations
            </div>

            <h2 className="wastely-section-title">
              Different sites require different aeration arrangements.
            </h2>

            <p className="wastely-section-description">
              The appropriate configuration depends on basin geometry,
              treatment process, oxygen demand, mixing requirements and
              operating conditions.
            </p>

          </div>

          <div className="grid border-l border-t border-wastely-line bg-wastely-line md:grid-cols-3">

            {aerationSystems.map((system) => {
              const Icon = system.icon;

              return (
                <article
                  key={system.number}
                  className="border-b border-r border-wastely-line bg-white p-7 sm:p-8"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        className="text-wastely-blue"
                      />
                    </div>

                    <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                      {system.number}
                    </span>

                  </div>

                  <h3 className="mt-8 text-xl font-bold text-wastely-deep">
                    {system.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-wastely-sub">
                    {system.description}
                  </p>

                  <div className="mt-7 border-t border-wastely-line pt-5 text-xs font-semibold uppercase tracking-[0.1em] text-wastely-blue">
                    Aeration Configuration
                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          OXYGENATION METHODS
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                Oxygenation Methods
              </div>

              <h2 className="wastely-section-title">
                Oxygen can be introduced in different ways.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                Method selection should follow the required treatment
                conditions rather than a single technology preference.
              </p>

            </div>

            <div className="border-t border-wastely-line">

              {oxygenMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <div
                    key={method.number}
                    className="grid gap-5 border-b border-wastely-line py-7 md:grid-cols-[60px_0.65fr_1fr] md:items-center"
                  >

                    <div className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                      {method.number}
                    </div>

                    <div className="flex items-center gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-line bg-wastely-bg-soft">

                        <Icon
                          size={19}
                          strokeWidth={1.7}
                          className="text-wastely-blue"
                        />

                      </div>

                      <h3 className="text-base font-bold text-wastely-deep">
                        {method.title}
                      </h3>

                    </div>

                    <p className="text-sm leading-6 text-wastely-sub">
                      {method.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          NANO BUBBLE FEATURE
      ===================================================== */}

      <section className="relative overflow-hidden bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">

            <div className="relative min-h-[440px] overflow-hidden">

              <img
                src={NanoScienceImg}
                alt="Nano bubble technology"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-wastely-deep/35 to-wastely-deep/5" />

              <div className="absolute bottom-6 left-6 border border-white/20 bg-wastely-deep/75 px-5 py-4">

                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                  Nano Bubble Technology
                </div>

                <div className="mt-1 text-lg font-bold text-white">
                  Gas transfer at small scale
                </div>

              </div>

            </div>

            <div className="flex flex-col justify-center border border-wastely-line bg-white p-8 sm:p-10 lg:p-14">

              <div className="wastely-section-eyebrow">
                Nano Bubble Science
              </div>

              <h2 className="wastely-section-title">
                A different approach to gas–water contact.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                Nano-bubble systems are based on generating very small gas
                bubbles and increasing the gas-water interface available for
                oxygen transfer.
              </p>

              <div className="mt-9 border-t border-wastely-line">

                {nanoScience.slice(0, 4).map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="grid grid-cols-[35px_1fr] gap-4 border-b border-wastely-line py-5"
                    >

                      <div className="text-xs font-bold tracking-[0.1em] text-wastely-cyan">
                        {item.number}
                      </div>

                      <div>

                        <div className="flex items-center gap-2">

                          <Icon
                            size={16}
                            className="text-wastely-blue"
                          />

                          <h3 className="text-sm font-bold text-wastely-deep">
                            {item.title}
                          </h3>

                        </div>

                        <p className="mt-2 text-xs leading-5 text-wastely-sub">
                          {item.description}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          NANO SCIENCE
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="wastely-section-header">

            <div className="wastely-section-eyebrow">
              Technical Characteristics
            </div>

            <h2 className="wastely-section-title">
              What defines the nano-bubble approach.
            </h2>

            <p className="wastely-section-description">
              These characteristics describe the nano-bubble approach
              presented in the technology material.
            </p>

          </div>

          <div className="grid border-l border-t border-wastely-line bg-wastely-line md:grid-cols-2 lg:grid-cols-3">

            {nanoScience.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="border-b border-r border-wastely-line bg-white p-7"
                >

                  <div className="flex items-center justify-between">

                    <Icon
                      size={22}
                      strokeWidth={1.7}
                      className="text-wastely-blue"
                    />

                    <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-lg font-bold text-wastely-deep">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-wastely-sub">
                    {item.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          SYSTEM FLOW
      ===================================================== */}

      <section className="relative overflow-hidden bg-wastely-deep py-20 sm:py-24 lg:py-28">

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M-100 130 C180 -20 330 260 580 120 C850 -20 1050 190 1540 40"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-100 250 C170 90 350 370 620 220 C880 80 1080 300 1540 150"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-100 390 C180 220 370 500 650 350 C900 210 1120 430 1540 275"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative">

          <div className="max-w-3xl">

            <div className="wastely-section-eyebrow !text-wastely-cyan">
              System Flow
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              From gas input to oxygen available in the treatment process.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/65">
              A complete oxygenation system combines gas handling, bubble
              generation, transfer and integration with the treatment process.
            </p>

          </div>

          <div className="mt-14 overflow-x-auto pb-3">

            <div className="flex min-w-[900px] items-center">

              {systemFlow.map((step, index) => (
                <div
                  key={step}
                  className="flex flex-1 items-center"
                >

                  <div className="w-full border border-white/15 bg-white/[0.04] p-5">

                    <div className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="mt-4 text-sm font-semibold text-white">
                      {step}
                    </div>

                  </div>

                  {index < systemFlow.length - 1 && (
                    <ArrowRight
                      size={17}
                      className="mx-3 shrink-0 text-wastely-cyan"
                    />
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                Applications
              </div>

              <h2 className="wastely-section-title">
                Where aeration and oxygenation can fit.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                The same core function can serve very different applications.
                Configuration and operating requirements change with the
                process and site.
              </p>

            </div>

            <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2">

              {applications.map((application) => {
                const Icon = application.icon;

                return (
                  <article
                    key={application.title}
                    className="border-b border-r border-wastely-line bg-white p-7"
                  >

                    <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft">

                      <Icon
                        size={20}
                        strokeWidth={1.7}
                        className="text-wastely-blue"
                      />

                    </div>

                    <h3 className="mt-6 text-lg font-bold text-wastely-deep">
                      {application.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-wastely-sub">
                      {application.description}
                    </p>

                  </article>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ENGINEERING CONSIDERATIONS
      ===================================================== */}

      <section className="wastely-section wastely-section-soft">

        <div className="wastely-container">

          <div className="wastely-section-header">

            <div className="wastely-section-eyebrow">
              Engineering Considerations
            </div>

            <h2 className="wastely-section-title">
              Before selecting an aeration system, understand the site.
            </h2>

            <p className="wastely-section-description">
              Aeration equipment should be selected as part of the treatment
              configuration, not as an isolated equipment decision.
            </p>

          </div>

          <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2 lg:grid-cols-3">

            {systemConsiderations.map((item, index) => (
              <div
                key={item}
                className="border-b border-r border-wastely-line bg-white p-7"
              >

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={18}
                    strokeWidth={1.7}
                    className="text-wastely-cyan"
                  />

                  <span className="text-xs font-bold tracking-[0.12em] text-wastely-blue">
                    0{index + 1}
                  </span>

                </div>

                <p className="mt-5 text-sm font-medium leading-6 text-wastely-deep">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          TECHNOLOGY → SERVICES
      ===================================================== */}

      <section className="wastely-section-sm bg-white">

        <div className="wastely-container">

          <div className="grid border-y border-wastely-line md:grid-cols-2">

            <div className="border-b border-wastely-line p-7 md:border-b-0 md:border-r md:p-9">

              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                Technology → Process
              </div>

              <h2 className="mt-3 text-xl font-bold text-wastely-deep">
                See how aeration fits into treatment design.
              </h2>

              <p className="mt-3 text-sm leading-6 text-wastely-sub">
                Technology selection starts with the treatment requirement,
                process conditions and site configuration.
              </p>

              <Link
                to="/services/technology-process"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue"
              >
                Explore Technology Process
                <ArrowRight size={16} />
              </Link>

            </div>

            <div className="p-7 md:p-9">

              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                Technology → Plant Support
              </div>

              <h2 className="mt-3 text-xl font-bold text-wastely-deep">
                Keep the installed system performing.
              </h2>

              <p className="mt-3 text-sm leading-6 text-wastely-sub">
                Wastely Aqua can support operation, maintenance and
                modernization around the treatment system after implementation.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">

                <Link
                  to="/services/operation-maintenance"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue"
                >
                  Operation & Maintenance
                  <ArrowRight size={15} />
                </Link>

                <Link
                  to="/services/amc-services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue"
                >
                  AMC Services
                  <ArrowRight size={15} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

/* =========================================================
   SMALL COMPONENTS
========================================================= */

const HeroSpec = ({ label, value }) => {
  return (
    <div className="border-r border-wastely-line p-4 last:border-r-0 sm:p-5">

      <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-wastely-cyan">
        {label}
      </div>

      <div className="mt-2 text-xs font-semibold leading-5 text-wastely-deep">
        {value}
      </div>

    </div>
  );
};

const HeroRail = ({ number, label, bordered = false }) => {
  return (
    <div
      className={`p-4 ${
        bordered ? "border-l border-wastely-line" : ""
      }`}
    >

      <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-wastely-cyan">
        {number}
      </div>

      <div className="mt-1 text-xs font-semibold text-wastely-deep">
        {label}
      </div>

    </div>
  );
};

const TreatmentRole = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="relative border-b border-r border-wastely-line bg-white p-6">

      <div className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
        {number}
      </div>

      <h3 className="mt-6 text-base font-bold text-wastely-deep">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-wastely-sub">
        {description}
      </p>

    </div>
  );
};

export default AerationTechnology;