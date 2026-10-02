import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Droplets,
  Factory,
  Filter,
  Gauge,
  Layers3,
  RefreshCw,
  ShieldCheck,
  Waves,
} from "lucide-react";

import waterTreat1 from "../../assets/images/Wastely_Water_Treatment1.png";
import waterTreat2 from "../../assets/images/Wastely_Water_Treatment2.png";
import waterTreat3 from "../../assets/images/Wastely_Water_Treatment3.png";
import waterTreat4 from "../../assets/images/Wastely_Water_Treatment4.png";
import waterTreat5 from "../../assets/images/Wastely_Water_Treatment5.png";

const treatmentRequirements = [
  {
    number: "01",
    icon: Droplets,
    title: "Raw water quality",
    description:
      "Treatment begins with understanding the source water, its characteristics and the contaminants that need to be addressed.",
  },
  {
    number: "02",
    icon: Gauge,
    title: "Required capacity",
    description:
      "Process selection depends on the required flow, operating conditions and the expected variation in water demand.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Required water quality",
    description:
      "The treatment process is selected around the quality required for the final application, discharge or reuse.",
  },
  {
    number: "04",
    icon: Factory,
    title: "Site conditions",
    description:
      "Available space, existing infrastructure, utilities and operating requirements influence the final treatment configuration.",
  },
];

const treatmentApplications = [
  {
    icon: Waves,
    title: "Raw Water Treatment",
    description:
      "Treatment systems for water requiring clarification, filtration and conditioning before its intended use.",
  },
  {
    icon: Factory,
    title: "Industrial Water",
    description:
      "Water treatment solutions designed around industrial process requirements and site-specific water quality.",
  },
  {
    icon: Filter,
    title: "Process & Utility Water",
    description:
      "Treatment and polishing systems for process, utility and other controlled water applications.",
  },
  {
    icon: RefreshCw,
    title: "Water Reuse",
    description:
      "Treatment approaches that improve water quality for suitable reuse applications where the process allows.",
  },
];

const treatmentObjectives = [
  {
    title: "Turbidity & Suspended Solids",
    description:
      "Reduce particulate matter and improve water clarity through appropriate separation and filtration processes.",
  },
  {
    title: "Dissolved Contaminants",
    description:
      "Address specific dissolved constituents according to the source-water characteristics and required output quality.",
  },
  {
    title: "Water Quality",
    description:
      "Build the treatment train around the quality required for the intended application.",
  },
  {
    title: "Reliable Operation",
    description:
      "Consider maintainability, process control and operating conditions alongside the treatment objective.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Identify the source, application and treatment requirement.",
  },
  {
    number: "02",
    title: "Characterize",
    description:
      "Assess water quality, flow and relevant site conditions.",
  },
  {
    number: "03",
    title: "Select",
    description:
      "Develop a treatment process suited to the required outcome.",
  },
  {
    number: "04",
    title: "Treat",
    description:
      "Implement and operate the selected treatment system.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "Produce water appropriate for the defined application.",
  },
];

const Water_Treatment = () => {
  return (
    <main className="overflow-hidden bg-white text-wastely-ink">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-white">
        {/* Engineering grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,59,92,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,59,92,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Water glow */}
        <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-wastely-cyan/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-wastely-blue/5 blur-3xl" />

        {/* Ripple rings */}
        <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-[360px] w-[360px] lg:block">
          <div className="absolute inset-0 rounded-full border border-wastely-cyan/15" />
          <div className="absolute inset-[45px] rounded-full border border-wastely-cyan/12" />
          <div className="absolute inset-[90px] rounded-full border border-wastely-cyan/10" />
          <div className="absolute inset-[135px] rounded-full border border-wastely-cyan/10" />
        </div>

        <div className="wastely-container relative">
          <div className="grid min-h-[calc(100svh-78px)] items-center gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24">
            {/* Hero copy */}
            <div className="relative z-10">
              <div className="wastely-section-eyebrow">
                Water Treatment
              </div>

              <h1 className="max-w-3xl text-display-md sm:text-display-lg">
                Water treatment built around the required water quality.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-wastely-sub sm:text-lg">
                Treatment systems designed around the source water,
                application, capacity and site conditions — from raw water
                treatment to process water and suitable reuse applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/technologies"
                  className="wastely-btn wastely-btn-primary"
                >
                  Explore Technologies
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/solutions"
                  className="wastely-btn wastely-btn-secondary"
                >
                  View All Solutions
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-wastely-line pt-5 text-sm text-wastely-sub">
                <span>Raw Water</span>
                <span>Process Water</span>
                <span>Water Quality</span>
                <span>Reuse</span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="absolute -inset-4 border border-wastely-cyan/10" />

              <div className="relative overflow-hidden border border-wastely-line bg-wastely-bg-soft">
                <img
                  src={waterTreat1}
                  alt="Water treatment infrastructure"
                  className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[560px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/65 via-transparent to-transparent" />

                {/* Technical label */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-wastely-deep/85 px-5 py-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-wastely-cyan-light">
                        Water Infrastructure
                      </p>
                      <p className="mt-1 text-sm text-white/75">
                        Treatment · Filtration · Water Quality
                      </p>
                    </div>

                    <Droplets
                      size={24}
                      className="shrink-0 text-wastely-cyan-light"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Water flow divider */}
          <div className="relative h-10 overflow-hidden">
            <svg
              viewBox="0 0 1200 50"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M0 25 C150 5 250 45 400 25 C550 5 650 45 800 25 C950 5 1050 45 1200 25"
                fill="none"
                stroke="#2FB4CE"
                strokeWidth="1.5"
                opacity="0.55"
              />
              <path
                d="M0 32 C150 12 250 52 400 32 C550 12 650 52 800 32 C950 12 1050 52 1200 32"
                fill="none"
                stroke="#0E76A8"
                strokeWidth="1"
                opacity="0.2"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* =====================================================
          REQUIREMENTS
      ====================================================== */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              The Requirement
            </div>

            <h2 className="wastely-section-title">
              Water treatment starts with the water itself.
            </h2>

            <p className="wastely-section-description">
              There is no single treatment configuration for every source.
              Water quality, flow, intended use and site conditions all
              influence the treatment approach.
            </p>
          </div>

          <div className="grid border-l border-t border-wastely-line sm:grid-cols-2 lg:grid-cols-4">
            {treatmentRequirements.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group border-b border-r border-wastely-line bg-white p-6 transition-colors duration-200 hover:bg-wastely-bg-soft sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                      {item.number}
                    </span>

                    <Icon
                      size={22}
                      strokeWidth={1.6}
                      className="text-wastely-blue transition-transform duration-200 group-hover:translate-y-[-2px]"
                    />
                  </div>

                  <h3 className="mt-10 text-card-title">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-wastely-sub">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATIONS
      ====================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                What We Address
              </div>

              <h2 className="wastely-section-title">
                Treatment for different water requirements.
              </h2>

              <p className="wastely-section-description">
                The treatment objective changes with the source and the
                application. The process is developed around the required
                water quality rather than around a fixed equipment list.
              </p>

              <div className="mt-8 overflow-hidden border border-wastely-line bg-wastely-bg-soft">
                <img
                  src={waterTreat2}
                  alt="Water treatment process"
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>

            <div className="grid border-l border-t border-wastely-line sm:grid-cols-2">
              {treatmentApplications.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`group border-b border-r border-wastely-line p-6 sm:p-8 ${
                      index % 2 === 0 ? "bg-wastely-bg-soft/60" : "bg-white"
                    }`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center border border-wastely-cyan/30 bg-white text-wastely-blue">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-6 text-card-title">{item.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-wastely-sub">
                      {item.description}
                    </p>

                    <div className="mt-6 h-px w-8 bg-wastely-cyan transition-all duration-200 group-hover:w-14" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS BAND
      ====================================================== */}
      <section className="relative overflow-hidden bg-wastely-deep py-20 text-white md:py-24">
        {/* Technical contour lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-100 400 C120 260 200 470 420 320 C620 180 760 410 980 230 C1100 130 1200 180 1320 100"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
          <path
            d="M-100 440 C120 300 200 510 420 360 C620 220 760 450 980 270 C1100 170 1200 220 1320 140"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
          <path
            d="M-100 360 C120 220 200 430 420 280 C620 140 760 370 980 190 C1100 90 1200 140 1320 60"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan-light">
              <span className="h-px w-8 bg-wastely-cyan" />
              Treatment Approach
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              From source water to the required outcome.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
              The treatment train is developed around the characteristics of
              the water and the quality required at the end of the process.
            </p>
          </div>

          <div className="mt-14 grid border-l border-white/15 md:grid-cols-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative border-b border-r border-white/15 p-5 md:border-b-0 md:p-6"
              >
                <div className="text-xs font-bold tracking-[0.14em] text-wastely-cyan-light">
                  {step.number}
                </div>

                <h3 className="mt-7 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {step.description}
                </p>

                {step.number !== "05" && (
                  <ArrowRight
                    size={17}
                    className="mt-6 hidden text-wastely-cyan-light md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TREATMENT OBJECTIVES
      ====================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                Treatment Objectives
              </div>

              <h2 className="wastely-section-title">
                The process follows the water-quality objective.
              </h2>

              <p className="wastely-section-description">
                Depending on the source and intended application, treatment
                may combine different physical, chemical and filtration
                processes.
              </p>
            </div>

            <div className="divide-y divide-wastely-line border-y border-wastely-line">
              {treatmentObjectives.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-4 py-6 sm:grid-cols-[48px_1fr] sm:gap-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center border border-wastely-cyan/30 text-wastely-blue">
                    <Check size={17} strokeWidth={2} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold tracking-[0.12em] text-wastely-cyan">
                        0{index + 1}
                      </span>

                      <h3 className="text-base font-bold text-wastely-deep">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-wastely-sub">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEW / EXISTING PLANT
      ====================================================== */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Project Context
            </div>

            <h2 className="wastely-section-title">
              New treatment system or improvement of an existing plant.
            </h2>

            <p className="wastely-section-description">
              Water treatment requirements do not always start with a blank
              site. Existing infrastructure, available space and current
              performance can all influence the engineering approach.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* New system */}
            <article className="group border border-wastely-line bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={waterTreat3}
                  alt="New water treatment infrastructure"
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-wastely-deep/60 to-transparent" />
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-wastely-cyan/30 bg-wastely-bg-soft text-wastely-blue">
                    <Layers3 size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-cyan">
                      New System
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-wastely-deep">
                      New Treatment Infrastructure
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-wastely-sub">
                  Develop the treatment process around the source water,
                  required capacity, application and available site conditions.
                </p>
              </div>
            </article>

            {/* Existing system */}
            <article className="group border border-wastely-line bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={waterTreat4}
                  alt="Existing water treatment infrastructure"
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-wastely-deep/60 to-transparent" />
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-wastely-cyan/30 bg-wastely-bg-soft text-wastely-blue">
                    <RefreshCw size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-cyan">
                      Existing Plant
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-wastely-deep">
                      Improvement & Retrofitting
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-wastely-sub">
                  Assess existing treatment infrastructure and identify
                  practical opportunities for process improvement, capacity
                  changes or water-quality requirements.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING PRINCIPLES
      ====================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <div className="relative overflow-hidden border border-wastely-line">
              <img
                src={waterTreat5}
                alt="Water treatment facility"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />

              {/* Ripple overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-52 w-52 rounded-full border border-white/25">
                  <div className="m-8 h-36 rounded-full border border-white/20">
                    <div className="m-8 h-20 rounded-full border border-white/20" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="wastely-section-eyebrow">
                Engineering Principles
              </div>

              <h2 className="wastely-section-title">
                Technology supports the process. The requirement comes first.
              </h2>

              <p className="wastely-section-description">
                A treatment system should be selected around the actual water,
                application and operating environment rather than forcing
                every project into the same process configuration.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    title: "Application first",
                    text: "Define what the treated water needs to achieve.",
                  },
                  {
                    title: "Fit for the site",
                    text: "Consider footprint, existing infrastructure and operating conditions.",
                  },
                  {
                    title: "Clear treatment objective",
                    text: "Identify the water-quality parameters that matter for the application.",
                  },
                  {
                    title: "Technology as part of the process",
                    text: "Select treatment technologies according to the process requirement.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 border-b border-wastely-line pb-5"
                  >
                    <span className="mt-1 text-xs font-bold tracking-[0.12em] text-wastely-cyan">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-base font-bold text-wastely-deep">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-wastely-sub">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY HANDOFF
          No CTA — footer owns the conversion.
      ====================================================== */}
      <section className="relative overflow-hidden bg-wastely-bg-soft py-16 md:py-20">
        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full border border-wastely-cyan/10" />
        <div className="pointer-events-none absolute right-[-50px] top-[-50px] h-[200px] w-[200px] rounded-full border border-wastely-cyan/10" />

        <div className="wastely-container">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="wastely-section-eyebrow">
                Treatment Technologies
              </div>

              <h2 className="text-2xl font-bold text-wastely-deep sm:text-3xl">
                Explore the technologies used across water-treatment
                applications.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-wastely-sub">
                Explore treatment technologies separately to understand where
                different processes can fit within a complete water-treatment
                system.
              </p>
            </div>

            <Link
              to="/technologies"
              className="wastely-btn wastely-btn-secondary whitespace-nowrap"
            >
              View Technologies
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          NO CTA HERE
          Global Footer already contains:
          "Request an Assessment"
      ====================================================== */}
    </main>
  );
};

export default Water_Treatment;