import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Beaker,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Filter,
  FlaskConical,
  Gauge,
  Layers3,
  Recycle,
  Search,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Waves,
  Wrench,
} from "lucide-react";

const processStages = [
  {
    id: "01",
    title: "Screening",
    icon: Filter,
    description:
      "Initial removal of larger particles, plastics and debris before downstream treatment.",
  },
  {
    id: "02",
    title: "Primary Treatment",
    icon: Waves,
    description:
      "Physical separation and settling reduce suspended material entering biological treatment.",
  },
  {
    id: "03",
    title: "Secondary Treatment",
    icon: Beaker,
    description:
      "Biological treatment processes address biodegradable organic pollutants.",
  },
  {
    id: "04",
    title: "Tertiary Treatment",
    icon: Droplets,
    description:
      "Additional treatment can be introduced when higher treated-water quality is required.",
  },
];

const engineeringFactors = [
  {
    icon: Search,
    title: "Application",
    description:
      "Understand where the treated water is coming from, where it is going and what the system needs to achieve.",
  },
  {
    icon: FlaskConical,
    title: "Water Quality",
    description:
      "Characterize the wastewater or water source and identify the treatment requirements that influence process selection.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Consider required treatment performance, operating conditions and the practical constraints of the site.",
  },
  {
    icon: Settings2,
    title: "Plant Conditions",
    description:
      "Available space, existing infrastructure, equipment and operational requirements influence the final process configuration.",
  },
];

const engineeringSteps = [
  {
    number: "01",
    title: "Characterize",
    description:
      "Understand the source, flow conditions and relevant water-quality requirements.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Establish treatment objectives and the required level of treatment.",
  },
  {
    number: "03",
    title: "Configure",
    description:
      "Develop the treatment-process arrangement around the application and site.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "Connect treatment stages, equipment and supporting systems into a workable plant configuration.",
  },
  {
    number: "05",
    title: "Operate",
    description:
      "Consider maintainability, monitoring and practical operating requirements from the beginning.",
  },
];

const advancedSystems = [
  {
    icon: ShieldCheck,
    title: "Disinfection",
    description:
      "Additional disinfection processes can be considered where the treated-water application requires pathogen control.",
  },
  {
    icon: Recycle,
    title: "Sludge Management",
    description:
      "Sludge handling and dewatering can form part of the overall treatment-process design.",
  },
  {
    icon: Layers3,
    title: "Advanced Treatment",
    description:
      "Membrane, filtration and other advanced treatment processes may be incorporated where application requirements justify them.",
  },
];

const TechnologyProcess = () => {
  return (
    <main className="bg-white text-wastely-ink">
      {/* =========================================================
          HERO
          DISTINCT DESIGN:
          ENGINEERING PROCESS MAP
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-wastely-line bg-wastely-bg-soft">
        {/* subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,59,92,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,59,92,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* large process-circle motif */}
        <div className="pointer-events-none absolute -right-32 top-16 h-[520px] w-[520px] rounded-full border border-wastely-cyan/20" />
        <div className="pointer-events-none absolute -right-10 top-40 h-[360px] w-[360px] rounded-full border border-wastely-cyan/15" />

        <div className="wastely-container relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <div className="wastely-section-eyebrow">
              Technology Process
            </div>

            <h1 className="max-w-4xl text-display-md sm:text-display-lg">
              The treatment process starts with the water.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-wastely-sub sm:text-lg">
              Treatment-process engineering connects water quality, application
              requirements, site conditions and operational needs into a
              practical treatment configuration.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="wastely-btn wastely-btn-primary"
              >
                Request an Assessment
                <ArrowRight size={17} />
              </Link>

              <a
                href="#process"
                className="wastely-btn wastely-btn-secondary"
              >
                Explore the Process
              </a>
            </div>
          </div>

          {/* =====================================================
              PROCESS MAP
          ===================================================== */}
          <div
            id="process"
            className="relative mt-16 border border-wastely-line bg-white"
          >
            {/* top technical bar */}
            <div className="flex items-center justify-between border-b border-wastely-line px-5 py-3 sm:px-7">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 bg-wastely-cyan" />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-wastely-blue">
                  Treatment Process Framework
                </span>
              </div>

              <span className="hidden text-[10px] font-medium uppercase tracking-[0.12em] text-wastely-sub sm:block">
                Source → Treatment → Output
              </span>
            </div>

            {/* flow */}
            <div className="grid lg:grid-cols-[0.8fr_2.2fr]">
              {/* Source */}
              <div className="border-b border-wastely-line bg-wastely-deep p-6 text-white lg:border-b-0 lg:border-r sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-wastely-cyan-light">
                  Input
                </p>

                <div className="mt-7">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/20">
                    <Droplets size={22} />
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-white">
                    Source Water
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Water characteristics and application requirements define
                    what the treatment process needs to achieve.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs text-wastely-cyan-light">
                  <ArrowDown size={15} />
                  Treatment train
                </div>
              </div>

              {/* Treatment stages */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-4">
                {processStages.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <div
                      key={stage.id}
                      className={`relative p-6 sm:p-7 ${
                        index < processStages.length - 1
                          ? "border-b border-wastely-line sm:border-r"
                          : ""
                      } ${
                        index === 1
                          ? "xl:border-r"
                          : ""
                      }`}
                    >
                      {/* connector */}
                      {index < processStages.length - 1 && (
                        <div className="absolute right-[-8px] top-12 z-10 hidden h-4 w-4 items-center justify-center bg-white text-wastely-cyan xl:flex">
                          <ArrowRight size={14} />
                        </div>
                      )}

                      <div className="flex items-start justify-between">
                        <span className="text-xs font-bold tracking-[0.12em] text-wastely-cyan">
                          {stage.id}
                        </span>

                        <div className="flex h-9 w-9 items-center justify-center bg-wastely-bg-soft text-wastely-blue">
                          <Icon size={18} />
                        </div>
                      </div>

                      <h3 className="mt-7 text-base font-bold text-wastely-deep">
                        {stage.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-wastely-sub">
                        {stage.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* output */}
            <div className="flex flex-col gap-4 border-t border-wastely-line px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-wastely-bg-soft text-wastely-blue">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-blue">
                    Output
                  </p>

                  <p className="text-sm text-wastely-sub">
                    Treated water aligned with the defined application.
                  </p>
                </div>
              </div>

              <div className="h-px flex-1 bg-wastely-line sm:mx-8" />

              <p className="text-xs font-medium text-wastely-sub">
                Process configuration varies by application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING INPUTS
      ========================================================= */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                Process Engineering
              </div>

              <h2 className="wastely-section-title">
                A treatment process should fit the application.
              </h2>

              <p className="wastely-section-description">
                There is no single treatment arrangement that fits every
                plant. Process selection starts with understanding the actual
                requirements of the site and the water being treated.
              </p>
            </div>

            <div className="grid border-l border-t border-wastely-line sm:grid-cols-2">
              {engineeringFactors.map((item) => {
                const Icon = item.icon;

                return (
                  <article
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
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS ENGINEERING JOURNEY
      ========================================================= */}
      <section className="relative overflow-hidden bg-wastely-deep text-white">
        {/* contour lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
          viewBox="0 0 1400 650"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-50 470 C180 330 300 560 540 400 S930 220 1450 390"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
          <path
            d="M-50 505 C180 365 300 595 540 435 S930 255 1450 425"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
          <path
            d="M-50 540 C180 400 300 630 540 470 S930 290 1450 460"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="wastely-section-eyebrow !text-wastely-cyan-light">
              Engineering Sequence
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
              From water characterization to a workable treatment system.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/70">
              Process engineering connects treatment objectives with the
              equipment, stages and operating conditions required at the site.
            </p>
          </div>

          <div className="mt-14 grid border border-white/15 lg:grid-cols-5">
            {engineeringSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative p-6 sm:p-7 ${
                  index !== engineeringSteps.length - 1
                    ? "border-b border-white/15 lg:border-b-0 lg:border-r"
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

                {index !== engineeringSteps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute right-5 top-7 hidden text-wastely-cyan lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TREATMENT OBJECTIVES
      ========================================================= */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Treatment Objectives
            </div>

            <h2 className="wastely-section-title">
              The process is built around what the treated water needs to do.
            </h2>

            <p className="wastely-section-description">
              Different applications require different levels and combinations
              of treatment. Process engineering determines which stages are
              required and how they work together.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                title: "Solids Removal",
                text: "Separate larger particles and suspended material through appropriate physical treatment stages.",
              },
              {
                number: "02",
                title: "Organic Reduction",
                text: "Use biological treatment where biodegradable organic pollutants need to be reduced.",
              },
              {
                number: "03",
                title: "Water Quality",
                text: "Introduce additional treatment where the required treated-water quality calls for it.",
              },
              {
                number: "04",
                title: "Reuse or Discharge",
                text: "Configure the treatment train around the intended destination and application of the treated water.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="border border-wastely-line bg-white p-6 sm:p-7"
              >
                <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                  {item.number}
                </span>

                <h3 className="mt-6 text-card-title text-wastely-deep">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-wastely-sub">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ADVANCED / SUPPORTING SYSTEMS
      ========================================================= */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                Supporting Treatment Systems
              </div>

              <h2 className="wastely-section-title">
                Additional treatment is added when the application requires
                it.
              </h2>

              <p className="wastely-section-description">
                Advanced systems are not the starting point. They become part
                of the process configuration when the water-quality objective,
                application or site requirements call for them.
              </p>

              <div className="mt-8 border-l-2 border-wastely-cyan pl-5">
                <p className="text-sm font-semibold text-wastely-deep">
                  Technology follows process requirements.
                </p>

                <p className="mt-2 text-sm leading-6 text-wastely-sub">
                  The treatment process defines where supporting technologies
                  fit into the overall system.
                </p>
              </div>
            </div>

            <div className="border-t border-wastely-line">
              {advancedSystems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="grid gap-5 border-b border-wastely-line py-7 sm:grid-cols-[48px_1fr] sm:items-start"
                  >
                    <div className="flex h-10 w-10 items-center justify-center bg-wastely-bg-soft text-wastely-blue">
                      <Icon size={19} />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-semibold text-wastely-deep">
                          {item.title}
                        </h3>

                        <span className="text-xs font-semibold text-wastely-cyan">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-wastely-sub">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY HANDOFF
          This connects Services -> Technologies
      ========================================================= */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="border border-wastely-line bg-white">
            <div className="grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              {/* Process */}
              <div className="p-7 sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center bg-wastely-bg-soft text-wastely-blue">
                  <SlidersHorizontal size={20} />
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-wastely-blue">
                  Service
                </p>

                <h3 className="mt-2 text-xl font-bold text-wastely-deep">
                  Technology Process
                </h3>

                <p className="mt-3 text-sm leading-6 text-wastely-sub">
                  Define the treatment requirements and process configuration.
                </p>
              </div>

              {/* Connector */}
              <div className="flex items-center justify-center border-y border-wastely-line bg-wastely-bg-soft px-7 py-5 lg:border-x lg:border-y-0">
                <ArrowRight
                  size={22}
                  className="hidden text-wastely-cyan lg:block"
                />

                <ArrowDown
                  size={22}
                  className="text-wastely-cyan lg:hidden"
                />
              </div>

              {/* Technology */}
              <div className="p-7 sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center bg-wastely-bg-soft text-wastely-blue">
                  <Layers3 size={20} />
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-wastely-blue">
                  Technology
                </p>

                <h3 className="mt-2 text-xl font-bold text-wastely-deep">
                  Treatment Technologies
                </h3>

                <p className="mt-3 text-sm leading-6 text-wastely-sub">
                  Explore the technologies that can form part of the treatment
                  process.
                </p>

                <Link
                  to="/technologies"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue hover:text-wastely-cyan"
                >
                  View Technologies
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No bottom CTA.
          Global Footer owns the main Request an Assessment CTA. */}
    </main>
  );
};

export default TechnologyProcess;