import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Droplets,
  Factory,
  Gauge,
  GitBranch,
  Leaf,
  Recycle,
  RefreshCw,
  ShieldCheck,
  Waves,
} from "lucide-react";

import integratedWater from "../../assets/images/integrated_water1.png";
import integratedWater1 from "../../assets/images/integrated_water2.png";
import integratedWater2 from "../../assets/images/integrated_water3.png";
import integratedWaterbg from "../../assets/images/integrated_water_background.png";

const systemAreas = [
  {
    number: "01",
    title: "Water Supply & Treatment",
    description:
      "Manage incoming water requirements and treatment processes as part of the wider site water system.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Wastewater Treatment",
    description:
      "Connect wastewater treatment with downstream discharge, recovery and reuse requirements.",
    icon: Waves,
  },
  {
    number: "03",
    title: "Water Reuse",
    description:
      "Identify suitable opportunities to recover treated water for applications where reuse is appropriate.",
    icon: RefreshCw,
  },
  {
    number: "04",
    title: "Resource Recovery",
    description:
      "Consider recoverable water, materials and process resources when developing the overall system.",
    icon: Recycle,
  },
];

const waterCycle = [
  {
    number: "01",
    title: "Source",
    description: "Water enters the site or infrastructure system.",
  },
  {
    number: "02",
    title: "Treat",
    description: "Water is treated according to its required quality.",
  },
  {
    number: "03",
    title: "Use",
    description: "Treated water is directed toward its intended application.",
  },
  {
    number: "04",
    title: "Recover",
    description: "Suitable water streams are considered for recovery and reuse.",
  },
  {
    number: "05",
    title: "Return",
    description: "Remaining flows are managed according to the required outcome.",
  },
];

const systemBenefits = [
  {
    icon: Droplets,
    title: "Water Efficiency",
    description:
      "Understand where water enters, moves through and leaves the system to identify practical efficiency opportunities.",
  },
  {
    icon: Recycle,
    title: "Reuse Opportunities",
    description:
      "Connect treatment performance with potential reuse applications instead of treating water streams in isolation.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Control",
    description:
      "Consider treatment, infrastructure and operating requirements together when planning the system.",
  },
  {
    icon: Leaf,
    title: "Environmental Management",
    description:
      "Coordinate water treatment, discharge and reuse decisions around the wider environmental requirement.",
  },
];

const projectContexts = [
  {
    icon: Factory,
    title: "Industrial Sites",
    description:
      "Coordinate process water, wastewater, treatment and potential reuse streams across an industrial facility.",
    image: integratedWater,
  },
  {
    icon: Waves,
    title: "Municipal & Urban Systems",
    description:
      "Connect water infrastructure, wastewater treatment and reuse requirements across a wider development or urban system.",
    image: integratedWater1,
  },
];

const IntegratedWaterSystem = () => {
  return (
    <main className="overflow-hidden bg-white text-wastely-ink">
      {/* =====================================================
          HERO
          Different from Water Treatment / Wastewater:
          visual language = connected water network
      ====================================================== */}
      <section className="relative overflow-hidden bg-wastely-bg-soft">
        {/* Engineering grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,59,92,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,59,92,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Large water ripple */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full border border-wastely-cyan/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[460px] w-[460px] rounded-full border border-wastely-cyan/10" />

        <div className="wastely-container relative">
          <div className="grid min-h-[calc(100svh-78px)] items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* LEFT */}
            <div className="relative z-10">
              <div className="wastely-section-eyebrow">
                Integrated Water System
              </div>

              <h1 className="max-w-3xl text-display-md sm:text-display-lg">
                Connect the water cycle.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-wastely-sub sm:text-lg">
                An integrated approach to water supply, treatment, wastewater,
                reuse and resource recovery — developed around how water
                actually moves through your site or infrastructure system.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/solutions"
                  className="wastely-btn wastely-btn-primary"
                >
                  Explore Solutions
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/technologies"
                  className="wastely-btn wastely-btn-secondary"
                >
                  View Technologies
                </Link>
              </div>

              {/* Small system indicators */}
              <div className="mt-10 grid max-w-xl grid-cols-2 border-l border-t border-wastely-line sm:grid-cols-4">
                {[
                  "Source",
                  "Treatment",
                  "Reuse",
                  "Recovery",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="border-b border-r border-wastely-line bg-white/60 px-4 py-4"
                  >
                    <span className="block text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
                      0{index + 1}
                    </span>

                    <span className="mt-1 block text-xs font-semibold text-wastely-deep">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — WATER SYSTEM VISUAL */}
            <div className="relative">
              <div className="relative mx-auto max-w-[650px]">
                {/* Main image */}
                <div className="relative overflow-hidden border border-wastely-line bg-white">
                  <img
                    src={integratedWaterbg}
                    alt="Integrated water infrastructure"
                    className="h-[430px] w-full object-cover sm:h-[540px] lg:h-[650px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/70 via-transparent to-wastely-deep/5" />

                  {/* Flow network */}
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 600 700"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M70 110 C190 150 170 260 300 300 C430 340 400 470 530 510"
                      fill="none"
                      stroke="#3BB8D9"
                      strokeWidth="2"
                      strokeDasharray="7 9"
                      opacity="0.75"
                    />

                    <path
                      d="M530 180 C420 220 430 330 300 360 C180 390 200 510 75 560"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeDasharray="5 10"
                      opacity="0.45"
                    />
                  </svg>

                  {/* Network nodes */}
                  <div className="absolute left-[9%] top-[13%] flex h-12 w-12 items-center justify-center border border-white/40 bg-wastely-deep/80 text-wastely-cyan-light backdrop-blur-sm">
                    <Droplets size={21} />
                  </div>

                  <div className="absolute left-[43%] top-[41%] flex h-14 w-14 items-center justify-center border border-wastely-cyan/50 bg-wastely-deep/85 text-wastely-cyan-light backdrop-blur-sm">
                    <Gauge size={23} />
                  </div>

                  <div className="absolute right-[9%] bottom-[20%] flex h-12 w-12 items-center justify-center border border-white/40 bg-wastely-deep/80 text-white backdrop-blur-sm">
                    <RefreshCw size={21} />
                  </div>

                  {/* Image information */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-wastely-deep/90 px-5 py-5">
                    <div className="flex items-center justify-between gap-5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-wastely-cyan-light">
                          Integrated Water Infrastructure
                        </p>

                        <p className="mt-1 text-sm text-white/75">
                          Connect · Treat · Reuse · Recover
                        </p>
                      </div>

                      <GitBranch
                        size={24}
                        className="shrink-0 text-wastely-cyan-light"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating technical label */}
                <div className="absolute -bottom-5 -left-5 hidden border border-wastely-line bg-white p-4 shadow-subtle sm:block lg:-left-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center bg-wastely-bg-soft text-wastely-blue">
                      <Waves size={18} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-wastely-cyan">
                        System View
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-wastely-deep">
                        Water flows as one system
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave divider */}
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
            </svg>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY INTEGRATE?
      ====================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                The Need
              </div>

              <h2 className="wastely-section-title">
                Water systems should be planned as connected flows.
              </h2>

              <p className="wastely-section-description">
                Water supply, treatment, wastewater and reuse are often
                connected physically and operationally. Looking at these
                streams together can create a clearer basis for engineering
                decisions.
              </p>
            </div>

            <div className="grid border-l border-t border-wastely-line sm:grid-cols-2">
              {systemAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group border-b border-r border-wastely-line bg-white p-6 transition-colors duration-200 hover:bg-wastely-bg-soft sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                        {item.number}
                      </span>

                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        className="text-wastely-blue"
                      />
                    </div>

                    <h3 className="mt-9 text-card-title">{item.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-wastely-sub">
                      {item.description}
                    </p>

                    <div className="mt-6 h-px w-8 bg-wastely-cyan transition-all duration-200 group-hover:w-14" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WATER CYCLE — MAIN DIFFERENTIATOR
      ====================================================== */}
      <section className="relative overflow-hidden bg-wastely-bg-soft py-20 md:py-24">
        {/* Ripple */}
        <div className="pointer-events-none absolute left-[-160px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-wastely-cyan/10" />
        <div className="pointer-events-none absolute left-[-100px] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-wastely-cyan/10" />

        <div className="wastely-container relative">
          <div className="max-w-3xl">
            <div className="wastely-section-eyebrow">
              The Water Cycle
            </div>

            <h2 className="wastely-section-title">
              One system. Multiple water streams.
            </h2>

            <p className="wastely-section-description">
              An integrated approach connects the major stages of the water
              cycle so treatment and reuse decisions can be considered
              together.
            </p>
          </div>

          {/* Desktop flow */}
          <div className="mt-14 hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[8%] right-[8%] top-8 h-px bg-wastely-cyan/30" />

              <div className="grid grid-cols-5">
                {waterCycle.map((item, index) => (
                  <div key={item.number} className="relative px-3">
                    <div className="relative mx-auto flex h-16 w-16 items-center justify-center border border-wastely-cyan/40 bg-white text-sm font-bold text-wastely-blue">
                      {item.number}
                    </div>

                    <div className="mt-7 text-center">
                      <h3 className="text-base font-bold text-wastely-deep">
                        {item.title}
                      </h3>

                      <p className="mx-auto mt-2 max-w-[180px] text-sm leading-6 text-wastely-sub">
                        {item.description}
                      </p>
                    </div>

                    {index !== waterCycle.length - 1 && (
                      <ArrowRight
                        size={16}
                        className="absolute right-[-8px] top-6 text-wastely-cyan"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/tablet flow */}
          <div className="mt-12 space-y-0 border-l border-wastely-line lg:hidden">
            {waterCycle.map((item) => (
              <div
                key={item.number}
                className="relative border-b border-r border-t border-wastely-line bg-white p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-cyan/30 text-xs font-bold text-wastely-blue">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="font-bold text-wastely-deep">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-wastely-sub">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM IMAGE / RESOURCE RECOVERY
      ====================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-wastely-cyan/40" />

              <div className="relative overflow-hidden border border-wastely-line">
                <img
                  src={integratedWater2}
                  alt="Integrated water treatment system"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-wastely-deep/65 to-transparent" />

                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-white/30 bg-wastely-deep/75 text-wastely-cyan-light backdrop-blur-sm">
                    <Recycle size={19} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                    Recovery & Reuse
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-wastely-cyan/40 sm:block" />
            </div>

            <div>
              <div className="wastely-section-eyebrow">
                Resource Recovery
              </div>

              <h2 className="wastely-section-title">
                Move from isolated treatment to connected water management.
              </h2>

              <p className="wastely-section-description">
                Where the site conditions and application allow, treated water
                can become part of a wider reuse strategy. The objective is to
                understand the complete flow and identify where treatment,
                recovery and reuse can work together.
              </p>

              <div className="mt-8 divide-y divide-wastely-line border-y border-wastely-line">
                {[
                  "Understand the complete water balance",
                  "Connect treatment and reuse requirements",
                  "Identify suitable recovery opportunities",
                  "Design around actual site conditions",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 py-4"
                  >
                    <span className="text-xs font-bold tracking-[0.12em] text-wastely-cyan">
                      0{index + 1}
                    </span>

                    <Check
                      size={17}
                      className="shrink-0 text-wastely-blue"
                    />

                    <span className="text-sm font-medium text-wastely-deep">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              System Outcomes
            </div>

            <h2 className="wastely-section-title">
              What an integrated approach can address.
            </h2>

            <p className="wastely-section-description">
              Integration is about connecting engineering decisions across
              water streams rather than treating every component as a
              standalone system.
            </p>
          </div>

          <div className="grid border-l border-t border-wastely-line md:grid-cols-2 xl:grid-cols-4">
            {systemBenefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group border-b border-r border-wastely-line bg-white p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                      0{index + 1}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center border border-wastely-cyan/30 bg-wastely-bg-soft text-wastely-blue">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3 className="mt-10 text-card-title">{item.title}</h3>

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
          PROJECT CONTEXT
      ====================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Project Context
            </div>

            <h2 className="wastely-section-title">
              Different sites. Same principle: understand the complete flow.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projectContexts.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group border border-wastely-line bg-white"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-wastely-deep/70 to-transparent" />

                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center border border-white/30 bg-wastely-deep/75 text-wastely-cyan-light backdrop-blur-sm">
                        <Icon size={19} />
                      </div>

                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8">
                    <p className="text-sm leading-6 text-wastely-sub">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY HANDOFF
          No CTA — Footer owns the main conversion.
      ====================================================== */}
      <section className="relative overflow-hidden bg-wastely-deep py-16 md:py-20">
        {/* Contour lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-100 320 C100 180 220 380 420 240 C620 100 760 330 980 180 C1100 100 1200 130 1320 50"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-100 360 C100 220 220 420 420 280 C620 140 760 370 980 220 C1100 140 1200 170 1320 90"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan-light">
                <span className="h-px w-8 bg-wastely-cyan" />
                Treatment Technologies
              </div>

              <h2 className="max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                Explore the treatment technologies that can form part of an
                integrated system.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65">
                Different water streams may require different treatment
                processes. Technologies are selected according to the
                application and overall system requirement.
              </p>
            </div>

            <Link
              to="/technologies"
              className="wastely-btn wastely-btn-light whitespace-nowrap"
            >
              View Technologies
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          NO CTA
          Global Footer contains "Request an Assessment".
      ====================================================== */}
    </main>
  );
};

export default IntegratedWaterSystem;