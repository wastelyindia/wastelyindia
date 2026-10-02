import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Droplets,
  Fish,
  Gauge,
  Leaf,
  Recycle,
  RefreshCw,
  ShieldCheck,
  Waves,
} from "lucide-react";

import image from "../../assets/images/AquaHead.jpg";
import oxidation from "../../assets/images/AdvanceOxidation.jpg";

const waterChallenges = [
  {
    number: "01",
    title: "Nutrient Accumulation",
    description:
      "Nitrogen and phosphorus can accumulate in aquaculture water and influence water quality and aquatic conditions.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Organic Loading",
    description:
      "Uneaten feed, metabolic waste and other organic matter can increase the treatment demand within the system.",
    icon: Recycle,
  },
  {
    number: "03",
    title: "Suspended Solids",
    description:
      "Solids and particulate matter need to be managed to maintain suitable water-quality conditions.",
    icon: Waves,
  },
  {
    number: "04",
    title: "Water-Quality Variation",
    description:
      "Aquaculture systems can experience changing water conditions that require appropriate monitoring and treatment.",
    icon: Gauge,
  },
];

const managementCycle = [
  {
    number: "01",
    title: "Intake",
    description:
      "Understand the incoming water source and its quality.",
  },
  {
    number: "02",
    title: "Culture",
    description:
      "Manage water conditions around the aquatic production process.",
  },
  {
    number: "03",
    title: "Treat",
    description:
      "Remove or control relevant solids, organic matter and nutrients.",
  },
  {
    number: "04",
    title: "Condition",
    description:
      "Bring water toward the quality required by the system.",
  },
  {
    number: "05",
    title: "Recirculate",
    description:
      "Where appropriate, return suitable treated water to the process.",
  },
];

const treatmentApproaches = [
  {
    number: "01",
    title: "Physical Separation",
    description:
      "Screening, solids separation and filtration can help control suspended material and particulate loading.",
    icon: Waves,
  },
  {
    number: "02",
    title: "Biological Treatment",
    description:
      "Biological processes can support the reduction and transformation of organic matter and nutrients.",
    icon: Leaf,
  },
  {
    number: "03",
    title: "Water Conditioning",
    description:
      "Additional treatment can be considered where specific water-quality parameters require further control.",
    icon: Droplets,
  },
];

const applications = [
  {
    title: "Fish Farming",
    description:
      "Water-quality management for aquaculture facilities where maintaining suitable aquatic conditions is central to operation.",
    icon: Fish,
    image,
  },
  {
    title: "Recirculating Systems",
    description:
      "Treatment and water-management approaches for systems where treated water is returned to the production process.",
    icon: RefreshCw,
    image: oxidation,
  },
];

const outcomes = [
  "Better control of water-quality conditions",
  "Management of solids and organic loading",
  "Reduction of nutrient accumulation",
  "Suitable opportunities for water reuse",
];

const AquaCulture = () => {
  return (
    <main className="overflow-hidden bg-white text-wastely-ink">
      {/* =====================================================
          HERO
          Distinct visual direction:
          ecological water surface + circular ripple system
      ====================================================== */}
      <section className="relative overflow-hidden bg-white">
        {/* Soft water gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-wastely-bg-soft to-transparent" />

        {/* Ripple rings */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[700px] w-[700px] rounded-full border border-wastely-cyan/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[460px] w-[460px] rounded-full border border-wastely-cyan/10" />
        <div className="pointer-events-none absolute right-[8%] top-[12%] h-[220px] w-[220px] rounded-full border border-wastely-cyan/10" />

        {/* Small water particles */}
        <div className="pointer-events-none absolute right-[24%] top-[25%] h-2 w-2 rounded-full bg-wastely-cyan/30" />
        <div className="pointer-events-none absolute right-[18%] top-[38%] h-3 w-3 rounded-full bg-wastely-cyan/20" />
        <div className="pointer-events-none absolute right-[31%] top-[46%] h-1.5 w-1.5 rounded-full bg-wastely-blue/30" />

        <div className="wastely-container relative">
          <div className="grid min-h-[calc(100svh-78px)] items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Hero copy */}
            <div className="relative z-10">
              <div className="wastely-section-eyebrow">
                Aquaculture
              </div>

              <h1 className="max-w-2xl text-display-md sm:text-display-lg">
                Water quality is part of aquaculture performance.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-wastely-sub sm:text-lg">
                Water-management systems designed around aquaculture
                requirements, helping control solids, organic loading,
                nutrients and changing water-quality conditions.
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
                  View Solutions
                </Link>
              </div>

              {/* Aquaculture markers */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Fish Farming",
                  "Water Quality",
                  "Treatment",
                  "Reuse",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-wastely-line bg-wastely-bg-soft px-3 py-2 text-xs font-medium text-wastely-sub"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              {/* Technical frame */}
              <div className="absolute -inset-4 border border-wastely-cyan/10" />

              <div className="relative overflow-hidden border border-wastely-line bg-wastely-bg-soft">
                <img
                  src={image}
                  alt="Aquaculture water management"
                  className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[650px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/70 via-transparent to-transparent" />

                {/* Water-quality label */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-wastely-deep/90 px-5 py-5">
                  <div className="flex items-center justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-wastely-cyan-light">
                        Aquaculture Water Management
                      </p>

                      <p className="mt-1 text-sm text-white/70">
                        Water Quality · Treatment · Recirculation
                      </p>
                    </div>

                    <Fish
                      size={25}
                      className="shrink-0 text-wastely-cyan-light"
                    />
                  </div>
                </div>

                {/* Ripple overlay */}
                <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full border border-white/25">
                  <div className="m-5 h-[72px] rounded-full border border-white/20">
                    <div className="m-5 h-8 rounded-full border border-white/20" />
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
                d="M0 26 C150 6 250 46 400 26 C550 6 650 46 800 26 C950 6 1050 46 1200 26"
                fill="none"
                stroke="#2FB4CE"
                strokeWidth="1.5"
                opacity="0.55"
              />

              <path
                d="M0 34 C150 14 250 54 400 34 C550 14 650 54 800 34 C950 14 1050 54 1200 34"
                fill="none"
                stroke="#0E76A8"
                strokeWidth="1"
                opacity="0.18"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY WATER QUALITY MATTERS
      ====================================================== */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                The Aquaculture Challenge
              </div>

              <h2 className="wastely-section-title">
                The water system is part of the production environment.
              </h2>

              <p className="wastely-section-description">
                Aquaculture operations depend on maintaining suitable water
                conditions. Treatment requirements can change with feed,
                stocking, system design, water exchange and operating
                conditions.
              </p>
            </div>

            <div className="grid border-l border-t border-wastely-line sm:grid-cols-2">
              {waterChallenges.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group border-b border-r border-wastely-line bg-white p-6 sm:p-8"
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

                    <h3 className="mt-10 text-card-title">
                      {item.title}
                    </h3>

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
          MANAGEMENT CYCLE
          Main visual differentiator: circular water flow
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-24">
        {/* Large circular system */}
        <div className="pointer-events-none absolute left-1/2 top-[52%] hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-wastely-cyan/10 lg:block" />

        <div className="wastely-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="wastely-section-eyebrow justify-center">
              Water Management Cycle
            </div>

            <h2 className="wastely-section-title">
              Manage the water through the complete aquaculture cycle.
            </h2>

            <p className="wastely-section-description mx-auto">
              Treatment is not an isolated step. Intake, production,
              treatment, conditioning and recirculation can be considered as
              one connected water-management process.
            </p>
          </div>

          {/* Desktop circular layout */}
          <div className="relative mx-auto mt-16 hidden max-w-5xl lg:block">
            <div className="relative mx-auto h-[520px] w-[520px]">
              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full border border-wastely-line" />
              <div className="absolute inset-[55px] rounded-full border border-wastely-cyan/20" />
              <div className="absolute inset-[115px] rounded-full border border-wastely-cyan/10" />

              {/* Center */}
              <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border border-wastely-cyan/30 bg-wastely-bg-soft text-center">
                <Fish
                  size={34}
                  strokeWidth={1.4}
                  className="text-wastely-blue"
                />

                <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                  Aquaculture
                </p>

                <p className="mt-1 text-sm font-semibold text-wastely-deep">
                  Water System
                </p>
              </div>

              {/* Nodes */}
              {managementCycle.map((item, index) => {
                const positions = [
                  "left-1/2 top-[-20px] -translate-x-1/2",
                  "right-[-30px] top-1/2 -translate-y-1/2",
                  "bottom-[-20px] left-1/2 -translate-x-1/2",
                  "left-[-30px] top-1/2 -translate-y-1/2",
                  "right-[42px] bottom-[62px]",
                ];

                return (
                  <div
                    key={item.number}
                    className={`absolute ${positions[index]} w-40`}
                  >
                    <div className="border border-wastely-line bg-white p-4 text-center shadow-subtle">
                      <span className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
                        {item.number}
                      </span>

                      <h3 className="mt-2 text-sm font-bold text-wastely-deep">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-wastely-sub">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile flow */}
          <div className="mt-12 border-l border-wastely-line lg:hidden">
            {managementCycle.map((item) => (
              <div
                key={item.number}
                className="border-b border-r border-t border-wastely-line bg-wastely-bg-soft p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-cyan/30 bg-white text-xs font-bold text-wastely-blue">
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
          TREATMENT APPROACH
      ====================================================== */}
      <section className="relative overflow-hidden bg-wastely-deep py-20 text-white md:py-24">
        {/* Contour lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.13]"
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
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan-light">
                <span className="h-px w-8 bg-wastely-cyan" />
                Treatment Approach
              </div>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Treatment follows the water-quality requirement.
              </h2>

              <p className="mt-5 text-sm leading-6 text-white/65 sm:text-base">
                Different aquaculture systems require different treatment
                approaches. The process should be selected around the water
                characteristics and operating conditions.
              </p>
            </div>

            <div className="grid border-l border-white/15 md:grid-cols-3">
              {treatmentApproaches.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="border-b border-r border-white/15 p-6 md:border-b-0 md:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan-light">
                        {item.number}
                      </span>

                      <Icon
                        size={22}
                        strokeWidth={1.6}
                        className="text-wastely-cyan-light"
                      />
                    </div>

                    <h3 className="mt-9 text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/60">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATIONS
      ====================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Applications
            </div>

            <h2 className="wastely-section-title">
              Water management across aquaculture environments.
            </h2>

            <p className="wastely-section-description">
              Treatment requirements vary between production systems. The
              engineering approach starts with the specific operating
              environment.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {applications.map((item) => {
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
          SYSTEM OUTCOMES
      ====================================================== */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="relative overflow-hidden border border-wastely-line bg-white">
              <img
                src={image}
                alt="Aquaculture water environment"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />

              {/* Water surface treatment */}
              <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/65 via-transparent to-transparent" />

              {/* Ripple */}
              <div className="absolute bottom-12 right-12 h-32 w-32 rounded-full border border-white/30">
                <div className="m-5 h-20 rounded-full border border-white/20">
                  <div className="m-5 h-10 rounded-full border border-white/20" />
                </div>
              </div>
            </div>

            <div>
              <div className="wastely-section-eyebrow">
                System Outcomes
              </div>

              <h2 className="wastely-section-title">
                A controlled water environment supports the operation.
              </h2>

              <p className="wastely-section-description">
                The objective is not simply to treat water. It is to manage
                the water conditions required by the aquaculture system while
                considering treatment, reuse and operational requirements.
              </p>

              <div className="mt-8 divide-y divide-wastely-line border-y border-wastely-line">
                {outcomes.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 py-4"
                  >
                    <span className="text-xs font-bold tracking-[0.12em] text-wastely-cyan">
                      0{index + 1}
                    </span>

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-wastely-cyan/30 bg-white text-wastely-blue">
                      <Check size={14} />
                    </div>

                    <span className="text-sm font-medium text-wastely-deep">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 border-l-2 border-wastely-cyan pl-4">
                <ShieldCheck
                  size={19}
                  className="shrink-0 text-wastely-blue"
                />

                <p className="text-sm leading-6 text-wastely-sub">
                  Treatment selection should be based on the actual water
                  characteristics, production system and required operating
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY HANDOFF
          Navigation only — NOT a conversion CTA.
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full border border-wastely-cyan/10" />

        <div className="wastely-container relative">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="wastely-section-eyebrow">
                Treatment Technologies
              </div>

              <h2 className="max-w-3xl text-2xl font-bold leading-tight text-wastely-deep sm:text-3xl">
                Explore treatment technologies that can support aquaculture
                water management.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-wastely-sub">
                Treatment technologies are selected according to the
                application, water characteristics and overall system
                requirement.
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
          NO CTA
          Footer owns "Request an Assessment".
      ====================================================== */}
    </main>
  );
};

export default AquaCulture;