import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Building2,
  Check,
  Droplets,
  Factory,
  Gauge,
  Globe2,
  Network,
  Radar,
  Satellite,
  ScanLine,
  Waves,
  Workflow,
} from "lucide-react";

import HeroBg from "../../assets/images/water-body-hero.png";
import SmartCityImg from "../../assets/images/smart-city-water.png";
import ReservoirImg from "../../assets/images/reservoir-water.png";
import CanalImg from "../../assets/images/canal-water.png";
import RiverImg from "../../assets/images/river-restoration.png";

const waterBodies = [
  {
    number: "01",
    title: "Rivers",
    description:
      "Restoration planning for river stretches affected by pollution, reduced water quality and degraded ecological conditions.",
    image: RiverImg,
  },
  {
    number: "02",
    title: "Urban Canals",
    description:
      "Water-quality improvement strategies for canals and connected urban waterways.",
    image: CanalImg,
  },
  {
    number: "03",
    title: "Reservoirs",
    description:
      "Large-water-surface interventions focused on water quality, oxygenation and ecosystem conditions.",
    image: ReservoirImg,
  },
  {
    number: "04",
    title: "Urban Lakes",
    description:
      "Integrated restoration approaches for lakes within municipal and urban environments.",
    image: HeroBg,
  },
];

const restorationSystem = [
  {
    number: "01",
    title: "Assess",
    description:
      "Survey the water body, surrounding infrastructure, inflows, outfalls and existing site conditions.",
    icon: ScanLine,
  },
  {
    number: "02",
    title: "Diagnose",
    description:
      "Characterize water-quality conditions and identify the main factors affecting the system.",
    icon: Gauge,
  },
  {
    number: "03",
    title: "Intervene",
    description:
      "Select and integrate appropriate restoration, treatment and oxygenation measures.",
    icon: Waves,
  },
  {
    number: "04",
    title: "Monitor",
    description:
      "Use appropriate measurement and monitoring systems to track the condition of the restored water body.",
    icon: Activity,
  },
];

const projectDelivery = [
  "Site survey",
  "Water-quality assessment",
  "DPR & engineering design",
  "Technology selection",
  "SITC execution",
  "Commissioning",
  "Monitoring integration",
  "Performance support",
];

const applications = [
  {
    title: "Municipal Water Bodies",
    description:
      "Restoration programs for lakes, canals, reservoirs and other public water infrastructure.",
    icon: Building2,
  },
  {
    title: "Industrial Water Bodies",
    description:
      "Water-quality management for industrial ponds, reservoirs and process-related water bodies.",
    icon: Factory,
  },
  {
    title: "Urban Water Networks",
    description:
      "Connected interventions across waterways and water bodies within growing urban areas.",
    icon: Network,
  },
  {
    title: "Monitoring Infrastructure",
    description:
      "Measurement and monitoring systems that provide visibility into changing water conditions.",
    icon: Radar,
  },
];

const monitoringParameters = [
  "Dissolved Oxygen",
  "pH",
  "Turbidity",
  "Temperature",
  "Chlorophyll",
  "Water-quality trends",
];

const WaterInfrastructure = () => {
  return (
    <main className="overflow-hidden bg-white text-wastely-ink">

      {/* =========================================================
          HERO — MASTERPLAN / INFRASTRUCTURE STYLE
      ========================================================= */}
      <section className="relative min-h-[760px] overflow-hidden bg-wastely-deep">

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HeroBg}
            alt="Water body infrastructure"
            className="h-full w-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-wastely-deep via-wastely-deep/90 to-wastely-deep/45" />
        </div>

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="wastely-container relative z-10">

          <div className="grid min-h-[760px] items-end gap-14 py-28 lg:grid-cols-[1fr_0.75fr] lg:items-center">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-wastely-cyan-light">
                <span className="h-px w-10 bg-wastely-cyan" />
                Water Body Restoration
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[5rem]">
                Restore water systems at
                <span className="block text-wastely-cyan-light">
                  the scale of the site.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Integrated restoration planning for rivers, canals,
                reservoirs and urban water bodies — combining site
                assessment, engineering, treatment interventions and
                ongoing monitoring.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="wastely-btn bg-white text-wastely-deep hover:bg-wastely-bg-soft"
                >
                  Request an Assessment
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/industries"
                  className="wastely-btn border-white/30 text-white hover:border-white hover:bg-white hover:text-wastely-deep"
                >
                  Explore Industries
                </Link>
              </div>

            </div>

            {/* RIGHT — MASTERPLAN PANEL */}
            <div className="relative hidden lg:block">

              <div className="relative border border-white/20 bg-white/[0.06] p-5 backdrop-blur-sm">

                <div className="border border-white/15">

                  <div className="flex items-center justify-between border-b border-white/15 px-5 py-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-wastely-cyan-light">
                      Restoration Framework
                    </div>

                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-wastely-cyan" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                    </div>
                  </div>

                  <div className="relative h-[430px] overflow-hidden">

                    <img
                      src={SmartCityImg}
                      alt="Water infrastructure system"
                      className="absolute inset-0 h-full w-full object-cover opacity-35"
                    />

                    <div className="absolute inset-0 bg-wastely-deep/55" />

                    {/* Network lines */}
                    <svg
                      viewBox="0 0 500 430"
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M40 320 C130 270 120 150 210 125 C300 100 290 220 370 185 C420 165 430 100 470 70"
                        fill="none"
                        stroke="#3BB8D9"
                        strokeWidth="1.5"
                        strokeDasharray="5 6"
                      />

                      <path
                        d="M65 90 C160 130 170 225 250 245 C335 265 350 335 455 340"
                        fill="none"
                        stroke="#ffffff"
                        strokeOpacity=".4"
                        strokeWidth="1"
                      />

                      {[
                        [40, 320],
                        [210, 125],
                        [370, 185],
                        [470, 70],
                        [65, 90],
                        [250, 245],
                        [455, 340],
                      ].map(([cx, cy], index) => (
                        <g key={index}>
                          <circle
                            cx={cx}
                            cy={cy}
                            r="7"
                            fill="#073B5C"
                            stroke="#3BB8D9"
                            strokeWidth="2"
                          />
                          <circle
                            cx={cx}
                            cy={cy}
                            r="2"
                            fill="#3BB8D9"
                          />
                        </g>
                      ))}
                    </svg>

                    {/* labels */}
                    <div className="absolute left-6 top-7 border-l border-wastely-cyan pl-3">
                      <div className="text-[9px] uppercase tracking-[0.18em] text-white/50">
                        Source
                      </div>
                      <div className="mt-1 text-xs font-semibold text-white">
                        Water body
                      </div>
                    </div>

                    <div className="absolute right-6 top-24 border-r border-wastely-cyan pr-3 text-right">
                      <div className="text-[9px] uppercase tracking-[0.18em] text-white/50">
                        Assess
                      </div>
                      <div className="mt-1 text-xs font-semibold text-white">
                        Conditions
                      </div>
                    </div>

                    <div className="absolute bottom-24 left-8 border-l border-wastely-cyan pl-3">
                      <div className="text-[9px] uppercase tracking-[0.18em] text-white/50">
                        Intervene
                      </div>
                      <div className="mt-1 text-xs font-semibold text-white">
                        Restoration
                      </div>
                    </div>

                    <div className="absolute bottom-8 right-8 border-r border-wastely-cyan pr-3 text-right">
                      <div className="text-[9px] uppercase tracking-[0.18em] text-white/50">
                        Monitor
                      </div>
                      <div className="mt-1 text-xs font-semibold text-white">
                        Performance
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* technical coordinate marker */}
              <div className="absolute -right-8 -top-8 h-24 w-24 border-r border-t border-wastely-cyan/60" />

              <div className="absolute -bottom-5 -left-5 bg-wastely-cyan px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-wastely-deep">
                Integrated Water Infrastructure
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SCALE OF RESTORATION
      ========================================================= */}
      <section className="wastely-section-white">
        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <div className="wastely-section-eyebrow">
                Restoration at different scales
              </div>

              <h2 className="wastely-section-title">
                One approach cannot fit every water body.
              </h2>

              <p className="wastely-section-description">
                The physical scale, surrounding land use, inflows and
                water-quality conditions all influence how a restoration
                program is designed and executed.
              </p>
            </div>

            <div className="grid border-l border-t border-wastely-line sm:grid-cols-2">

              {waterBodies.map((item) => (
                <article
                  key={item.number}
                  className="group relative min-h-[260px] overflow-hidden border-b border-r border-wastely-line"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-20 transition duration-500 group-hover:scale-105 group-hover:opacity-30"
                  />

                  <div className="absolute inset-0 bg-white/90" />

                  <div className="relative z-10 p-7 sm:p-8">

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.18em] text-wastely-cyan">
                        {item.number}
                      </span>

                      <Waves
                        size={20}
                        strokeWidth={1.6}
                        className="text-wastely-blue"
                      />
                    </div>

                    <h3 className="mt-12 text-2xl font-bold text-wastely-deep">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-wastely-sub">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          RESTORATION SYSTEM
      ========================================================= */}
      <section className="relative overflow-hidden bg-wastely-bg-soft py-20 lg:py-24">

        <div className="wastely-container">

          <div className="max-w-3xl">
            <div className="wastely-section-eyebrow">
              Restoration system
            </div>

            <h2 className="wastely-section-title">
              Connect diagnosis, intervention and monitoring.
            </h2>

            <p className="wastely-section-description">
              Water-body restoration becomes more manageable when the
              project is treated as a connected system rather than as a
              collection of individual technologies.
            </p>
          </div>

          <div className="relative mt-16">

            {/* horizontal engineering line */}
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-wastely-cyan/40 lg:block" />

            <div className="grid gap-10 lg:grid-cols-4">

              {restorationSystem.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.number} className="relative">

                    <div className="relative z-10 flex h-16 w-16 items-center justify-center border border-wastely-cyan bg-wastely-bg-soft text-wastely-blue">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-wastely-cyan">
                      Stage {item.number}
                    </div>

                    <h3 className="mt-2 text-xl font-bold text-wastely-deep">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-wastely-sub">
                      {item.description}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          PROJECT DELIVERY — DARK ENGINEERING BAND
      ========================================================= */}
      <section className="relative overflow-hidden bg-wastely-deep py-20 lg:py-24">

        {/* blueprint grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="wastely-container relative">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-wastely-cyan-light">
                <span className="h-px w-8 bg-wastely-cyan" />
                Project Delivery
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                From field survey to operational support.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65">
                The project lifecycle can bring site assessment, engineering,
                execution and monitoring into one coordinated delivery model.
              </p>
            </div>

            <div className="grid sm:grid-cols-2">

              {projectDelivery.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 border-b border-white/10 px-5 py-5 sm:px-6"
                >
                  <span className="text-[10px] font-bold tracking-[0.15em] text-wastely-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Check
                    size={16}
                    className="text-wastely-cyan-light"
                    strokeWidth={2}
                  />

                  <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONNECTED INFRASTRUCTURE
      ========================================================= */}
      <section className="wastely-section-white">
        <div className="wastely-container">

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            <div className="relative">

              <div className="absolute -left-5 -top-5 h-20 w-20 border-l border-t border-wastely-cyan" />

              <div className="border border-wastely-line bg-wastely-bg-soft p-2">

                <div className="relative overflow-hidden">
                  <img
                    src={SmartCityImg}
                    alt="Connected water infrastructure"
                    className="h-[520px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/75 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-wastely-cyan-light">
                        Connected Infrastructure
                      </div>

                      <div className="mt-2 text-lg font-bold text-white">
                        Water quality visibility
                      </div>
                    </div>

                    <div className="hidden border border-white/30 bg-wastely-deep/60 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-white/70 sm:block">
                      Field + Data
                    </div>

                  </div>
                </div>

              </div>

            </div>

            <div>

              <div className="wastely-section-eyebrow">
                Monitoring & visibility
              </div>

              <h2 className="wastely-section-title">
                See how the water body is changing.
              </h2>

              <p className="wastely-section-description">
                Where monitoring is part of the project requirement,
                relevant water-quality parameters can be tracked to support
                operational decisions and ongoing assessment.
              </p>

              <div className="mt-9 grid grid-cols-2 border-l border-t border-wastely-line">

                {monitoringParameters.map((parameter) => (
                  <div
                    key={parameter}
                    className="flex items-center gap-3 border-b border-r border-wastely-line p-4"
                  >
                    <Activity
                      size={16}
                      className="shrink-0 text-wastely-blue"
                    />

                    <span className="text-sm font-medium text-wastely-deep">
                      {parameter}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-8 flex items-start gap-4 border-l-2 border-wastely-cyan pl-5">
                <Satellite
                  size={21}
                  className="mt-1 shrink-0 text-wastely-blue"
                  strokeWidth={1.6}
                />

                <div>
                  <h3 className="font-bold text-wastely-deep">
                    Monitoring architecture can be site-specific.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-wastely-sub">
                    Instrumentation, communication and analytics should be
                    selected around the actual monitoring requirement rather
                    than treated as a fixed package.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATIONS
      ========================================================= */}
      <section className="wastely-section-soft">
        <div className="wastely-container">

          <div className="max-w-3xl">
            <div className="wastely-section-eyebrow">
              Where it applies
            </div>

            <h2 className="wastely-section-title">
              Infrastructure designed around the operating context.
            </h2>
          </div>

          <div className="mt-12 grid gap-0 border-l border-t border-wastely-line md:grid-cols-2">

            {applications.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group border-b border-r border-wastely-line bg-white p-8 transition-colors duration-200 hover:bg-wastely-bg-soft lg:p-10"
                >
                  <div className="flex items-start justify-between gap-5">

                    <div className="flex h-12 w-12 items-center justify-center border border-wastely-line text-wastely-blue">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-wastely-sub transition-transform duration-200 group-hover:translate-x-1 group-hover:text-wastely-blue"
                    />

                  </div>

                  <h3 className="mt-10 text-xl font-bold text-wastely-deep">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-wastely-sub">
                    {item.description}
                  </p>
                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY HANDOFF — NOT CTA
      ========================================================= */}
      <section className="border-t border-wastely-line bg-white py-10">
        <div className="wastely-container">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-wastely-blue">
                Technology
              </div>

              <div className="mt-2 text-lg font-bold text-wastely-deep">
                Explore the treatment technologies behind restoration projects.
              </div>
            </div>

            <Link
              to="/technologies"
              className="wastely-btn wastely-btn-secondary shrink-0"
            >
              View Technologies
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default WaterInfrastructure;