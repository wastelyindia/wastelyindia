import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Cog,
  Factory,
  Layers3,
  Search,
  ShieldCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";

import revamping from "../../assets/images/revamping1.png";
import revampingAerial from "../../assets/images/revamping2.png";

const comparison = [
  {
    number: "01",
    title: "Revamping",
    subtitle: "Broader plant transformation",
    description:
      "A larger-scale intervention where the existing treatment system requires significant modernization, process changes or infrastructure improvements.",
    points: [
      "Plant modernization",
      "Process redesign",
      "Capacity-related improvements",
      "Integration of upgraded treatment systems",
    ],
  },
  {
    number: "02",
    title: "Retrofitting",
    subtitle: "Targeted plant improvement",
    description:
      "A focused intervention that improves selected equipment, processes or plant areas while retaining as much of the existing infrastructure as practical.",
    points: [
      "Selective equipment upgrades",
      "Targeted process improvements",
      "Improved use of existing infrastructure",
      "Phased implementation",
    ],
  },
];

const assessmentAreas = [
  {
    icon: Factory,
    title: "Existing Infrastructure",
    description:
      "Review tanks, piping, equipment, electrical systems and available plant infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "Plant Performance",
    description:
      "Understand current treatment performance, operating limitations and areas requiring improvement.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Requirements",
    description:
      "Identify treatment and operational requirements that the existing system needs to address.",
  },
  {
    icon: Cog,
    title: "Process & Equipment",
    description:
      "Evaluate process configuration and equipment condition to determine practical upgrade options.",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Assess",
    description:
      "Review the existing plant, operating conditions, infrastructure and performance requirements.",
  },
  {
    number: "02",
    title: "Diagnose",
    description:
      "Identify process limitations, equipment constraints and opportunities for improvement.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Develop an upgrade approach around the site's actual constraints and requirements.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Execute the agreed modifications while considering plant continuity and practical site conditions.",
  },
];

const upgradeAreas = [
  "Process configuration",
  "Treatment capacity",
  "Mechanical equipment",
  "Aeration systems",
  "Pumping and transfer systems",
  "Chemical dosing systems",
  "Instrumentation and controls",
  "Plant infrastructure",
];

const RevampingRetrofitting = () => {
  return (
    <main className="bg-white text-wastely-ink">
      {/* =========================================================
          HERO
          DISTINCT DESIGN:
          FULL-WIDTH ENGINEERING / BEFORE-AFTER COMPOSITION
      ========================================================= */}
      <section className="relative overflow-hidden bg-wastely-deep text-white">
        {/* subtle engineering grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* cyan technical line */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-wastely-gradient" />

        {/* water contour lines */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 h-[280px] w-full opacity-[0.12]"
          viewBox="0 0 1400 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-100 220 C140 120 260 290 500 180 S900 80 1500 190"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
          <path
            d="M-100 245 C140 145 260 315 500 205 S900 105 1500 215"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
          <path
            d="M-100 270 C140 170 260 340 500 230 S900 130 1500 240"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative z-10">
          {/* Top hero copy */}
          <div className="grid min-h-[560px] items-end gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div className="pb-2">
              <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-wastely-cyan-light">
                <span className="h-px w-8 bg-wastely-cyan" />
                Plant Modernization
              </div>

              <h1 className="max-w-3xl text-[2.65rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[4.25rem]">
                Upgrade what already exists.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                Revamping and retrofitting help existing water and wastewater
                treatment plants improve their process, equipment and
                infrastructure without treating every site as a completely
                new project.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="wastely-btn wastely-btn-light"
                >
                  Request an Assessment
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="#modernization"
                  className="wastely-btn border-white/30 text-white hover:border-white hover:bg-white hover:text-wastely-deep"
                >
                  Understand the Approach
                </a>
              </div>
            </div>

            {/* =====================================================
                HERO VISUAL
                Two images + engineering transition
            ===================================================== */}
            <div className="relative">
              {/* Main image */}
              <div className="relative ml-auto max-w-3xl">
                <div className="overflow-hidden border border-white/20 bg-white/5">
                  <img
                    src={revamping}
                    alt="Wastewater treatment plant modernization"
                    className="h-[320px] w-full object-cover sm:h-[390px] lg:h-[430px]"
                    loading="eager"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/75 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-wastely-cyan-light">
                        Existing Plant
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        Assess the system before changing it.
                      </p>
                    </div>

                    <div className="hidden h-10 w-10 items-center justify-center border border-white/25 bg-wastely-deep/60 sm:flex">
                      <Search size={18} />
                    </div>
                  </div>
                </div>

                {/* Intervention panel */}
                <div className="relative z-20 -mt-8 ml-auto mr-5 w-[88%] border border-wastely-cyan/30 bg-wastely-blue-deep p-5 sm:-mt-12 sm:mr-8 sm:w-[72%]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-wastely-cyan/40 text-wastely-cyan-light">
                      <Wrench size={20} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-wastely-cyan-light">
                        Upgrade Path
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Assess → Redesign → Upgrade
                      </p>
                    </div>
                  </div>
                </div>

                {/* Smaller second image */}
                <div className="absolute -bottom-20 -left-8 hidden w-44 border-4 border-wastely-deep bg-wastely-deep shadow-subtle sm:block lg:w-52">
                  <img
                    src={revampingAerial}
                    alt="Wastewater treatment facility"
                    className="h-32 w-full object-cover lg:h-36"
                    loading="lazy"
                  />

                  <div className="px-3 py-2">
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan-light">
                      Modernization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero bottom technical rail */}
          <div className="grid border-t border-white/15 sm:grid-cols-4">
            {[
              "Existing plant",
              "Performance review",
              "Targeted upgrades",
              "Operational continuity",
            ].map((item, index) => (
              <div
                key={item}
                className={`px-4 py-5 text-xs font-medium text-white/60 ${
                  index !== 0 ? "border-t border-white/15 sm:border-l sm:border-t-0" : ""
                }`}
              >
                <span className="mr-2 text-wastely-cyan">
                  0{index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY MODERNIZE
      ========================================================= */}
      <section
        id="modernization"
        className="wastely-section wastely-section-white"
      >
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                Why Modernize
              </div>

              <h2 className="wastely-section-title">
                Existing plants often need improvement, not replacement.
              </h2>

              <p className="wastely-section-description">
                Plant modernization starts with understanding what can be
                retained, what needs improvement and what must change to meet
                the site's current requirements.
              </p>
            </div>

            <div className="grid border-l border-t border-wastely-line sm:grid-cols-2">
              {assessmentAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border-b border-r border-wastely-line p-6 sm:p-7"
                  >
                    <div className="flex h-10 w-10 items-center justify-center bg-wastely-bg-soft text-wastely-blue">
                      <Icon size={19} />
                    </div>

                    <h3 className="mt-5 text-card-title text-wastely-deep">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-wastely-sub">
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
          REVAMP VS RETROFIT
      ========================================================= */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Two Modernization Routes
            </div>

            <h2 className="wastely-section-title">
              Revamping and retrofitting are not the same intervention.
            </h2>

            <p className="wastely-section-description">
              The appropriate approach depends on the condition of the
              existing plant, the performance gap and the extent of change
              required.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {comparison.map((item) => (
              <article
                key={item.number}
                className="relative overflow-hidden border border-wastely-line bg-white"
              >
                <div className="absolute right-0 top-0 h-28 w-28 border-b border-l border-wastely-line bg-wastely-bg-soft" />

                <div className="relative p-7 sm:p-9">
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-bold tracking-[0.15em] text-wastely-cyan">
                      {item.number}
                    </span>

                    <Layers3
                      size={21}
                      className="text-wastely-blue"
                    />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-wastely-deep">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-wastely-blue">
                    {item.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-wastely-sub">
                    {item.description}
                  </p>

                  <div className="mt-7 border-t border-wastely-line pt-5">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-wastely-sub">
                      Typical focus
                    </p>

                    <div className="space-y-3">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-wastely-cyan"
                          />

                          <span className="text-sm text-wastely-ink">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ASSESSMENT / DELIVERY
      ========================================================= */}
      <section className="relative overflow-hidden bg-wastely-deep text-white">
        <div className="wastely-container relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="wastely-section-eyebrow !text-wastely-cyan-light">
              Modernization Process
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
              Start with the plant you have.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/70">
              A practical upgrade begins with the existing system. The
              objective is to understand its constraints first, then define
              the intervention required.
            </p>
          </div>

          <div className="mt-14 grid border border-white/15 md:grid-cols-4">
            {deliverySteps.map((step, index) => (
              <div
                key={step.number}
                className={`p-6 sm:p-7 ${
                  index !== deliverySteps.length - 1
                    ? "border-b border-white/15 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <span className="text-xs font-bold tracking-[0.16em] text-wastely-cyan-light">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          UPGRADE AREAS
      ========================================================= */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                Upgrade Areas
              </div>

              <h2 className="wastely-section-title">
                The intervention depends on what the plant needs.
              </h2>

              <p className="wastely-section-description">
                Modernization can focus on a single plant area or combine
                several upgrades into a coordinated improvement program.
              </p>
            </div>

            <div className="grid border-l border-t border-wastely-line sm:grid-cols-2">
              {upgradeAreas.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-r border-wastely-line p-5 sm:p-6"
                >
                  <span className="text-xs font-bold text-wastely-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-wastely-ink">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXISTING PLANT VISUAL
      ========================================================= */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden border border-wastely-line bg-white">
              <img
                src={revampingAerial}
                alt="Wastewater treatment facility"
                className="h-[360px] w-full object-cover sm:h-[480px]"
                loading="lazy"
              />
            </div>

            <div>
              <div className="wastely-section-eyebrow">
                Practical Modernization
              </div>

              <h2 className="wastely-section-title">
                Improve the plant without losing sight of its existing
                infrastructure.
              </h2>

              <p className="wastely-section-description">
                Retrofitting and revamping should be driven by actual site
                conditions. Existing assets, process requirements, available
                space and implementation constraints all influence the final
                upgrade approach.
              </p>

              <div className="mt-7 border-l-2 border-wastely-cyan pl-5">
                <p className="text-sm font-semibold text-wastely-deep">
                  Assessment comes before intervention.
                </p>

                <p className="mt-2 text-sm leading-6 text-wastely-sub">
                  The modernization strategy should be defined around the
                  plant rather than forcing the plant into a predefined
                  solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No page-level CTA.
          Global Footer owns the primary Request an Assessment CTA. */}
    </main>
  );
};

export default RevampingRetrofitting;