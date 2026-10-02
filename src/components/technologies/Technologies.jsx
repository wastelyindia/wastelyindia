import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplets,
  Factory,
  Flower2,
  Gauge,
  Layers3,
  Recycle,
  Radar,
  Settings2,
  Wind,
} from "lucide-react";

/* =========================================================
   TECHNOLOGY AREAS
   ========================================================= */

const technologyAreas = [
  {
    number: "01",
    title: "Treatment Technologies",
    description:
      "Treatment systems selected around water quality, process requirements and the intended treatment objective.",
    technologies: [
      {
        name: "Aeration & Oxygenation",
        description:
          "Systems supporting oxygen transfer and aeration requirements.",
        icon: Wind,
        path: "/technologies/aeration-oxygenation",
      },
      {
        name: "IFAS / Membrane Systems",
        description:
          "Biological and membrane-based treatment systems.",
        icon: Layers3,
        path: "/technologies/ifas-membrane",
      },
      {
        name: "Floating Wetlands",
        description:
          "Nature-based systems for suitable waterbody applications.",
        icon: Flower2,
        path: "/technologies/floating-wetlands",
      },
      {
        name: "Algae Control System",
        description:
          "Technology supporting algae management in appropriate waterbody applications.",
        icon: Radar,
        path: "/technologies/algae-control",
      },
      {
        name: "Hydro-dis Disinfection",
        description:
          "Electrochemical disinfection technology for water and wastewater applications.",
        icon: Droplets,
        path: "/technologies/hydro-dis",
      },
    ],
  },

  {
    number: "02",
    title: "Sludge Management",
    description:
      "Integrated systems for sludge dewatering and drying, selected according to sludge characteristics and handling requirements.",
    technologies: [
      {
        name: "Sludge Management",
        description:
          "Dewatering and drying systems including mechanical and thermal processes.",
        icon: Recycle,
        path: "/technologies/sludge-management",
      },
    ],
  },

  {
    number: "03",
    title: "Packaged Infrastructure",
    description:
      "Compact treatment infrastructure configured around site requirements and deployment conditions.",
    technologies: [
      {
        name: "Package Treatment Units",
        description:
          "Compact and configurable packaged treatment systems.",
        icon: Factory,
        path: "/technologies/package-treatment-units",
      },
    ],
  },
];

/* =========================================================
   TECHNOLOGY SELECTION FACTORS
   ========================================================= */

const technologyFactors = [
  {
    number: "01",
    icon: Droplets,
    title: "Water characteristics",
    text:
      "The source water or wastewater and its relevant quality parameters influence the treatment approach.",
  },
  {
    number: "02",
    icon: Gauge,
    title: "Treatment objective",
    text:
      "The required discharge, reuse, restoration or operating objective determines the level of treatment required.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Site conditions",
    text:
      "Available space, existing infrastructure, utilities and operating conditions affect technology selection.",
  },
  {
    number: "04",
    icon: Settings2,
    title: "Operation",
    text:
      "Maintenance requirements, monitoring needs and practical plant operation are considered alongside process performance.",
  },
];

/* =========================================================
   TECHNOLOGY INTEGRATION FLOW
   ========================================================= */

const technologyFlow = [
  {
    number: "01",
    title: "Characterize",
    text: "Understand the water and wastewater requirement.",
  },
  {
    number: "02",
    title: "Define",
    text: "Establish the required treatment objective.",
  },
  {
    number: "03",
    title: "Select",
    text: "Identify appropriate treatment technologies.",
  },
  {
    number: "04",
    title: "Integrate",
    text: "Connect technologies into a workable process.",
  },
  {
    number: "05",
    title: "Operate",
    text: "Consider monitoring, maintenance and plant operation.",
  },
];

/* =========================================================
   TECHNOLOGY → SERVICE CONNECTION
   ========================================================= */

const supportingServices = [
  {
    number: "01",
    title: "Technology Process",
    description:
      "Process assessment and treatment engineering to determine how technologies fit the application.",
    path: "/services/technology-process",
  },
  {
    number: "02",
    title: "Operation & Maintenance",
    description:
      "Plant operation, process monitoring and maintenance support after implementation.",
    path: "/services/operation-maintenance",
  },
  {
    number: "03",
    title: "AMC Services",
    description:
      "Planned maintenance and technical support for treatment equipment and systems.",
    path: "/services/amc-services",
  },
  {
    number: "04",
    title: "Revamping & Retrofitting",
    description:
      "Technology upgrades and targeted improvements for existing treatment infrastructure.",
    path: "/services/revamping-retrofitting",
  },
];

/* =========================================================
   HERO TECHNOLOGY NODE
   ========================================================= */

const TechnologyNode = ({
  className,
  number,
  title,
  icon: Icon,
}) => {
  return (
    <div
      className={`absolute ${className} flex min-w-[150px] items-center gap-3 border border-wastely-line bg-white px-4 py-3`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
        <Icon
          size={17}
          strokeWidth={1.8}
          className="text-wastely-blue"
        />
      </div>

      <div>
        <div className="text-[9px] font-bold tracking-[0.12em] text-wastely-cyan">
          {number}
        </div>

        <div className="mt-0.5 text-xs font-bold uppercase tracking-[0.06em] text-wastely-deep">
          {title}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

const Technologies = () => {
  return (
    <main className="bg-wastely-bg text-wastely-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-wastely-line bg-wastely-bg-soft">

        {/* Engineering grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] opacity-60 lg:block"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,59,92,0.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,59,92,0.055) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Technical flow lines */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-[55%] opacity-35"
          viewBox="0 0 800 620"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120 C150 20 240 250 390 135 C520 35 620 150 800 70"
            stroke="#2FB4CE"
            strokeWidth="1"
          />

          <path
            d="M0 220 C145 115 250 350 410 225 C545 120 650 245 800 165"
            stroke="#0E76A8"
            strokeWidth="1"
          />

          <path
            d="M0 340 C155 220 270 470 430 335 C570 220 650 365 800 260"
            stroke="#2FB4CE"
            strokeWidth="1"
          />

          <path
            d="M0 475 C150 350 275 590 450 455 C580 355 680 470 800 380"
            stroke="#0E76A8"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

            {/* Hero copy */}
            <div className="max-w-3xl">

              <div className="wastely-section-eyebrow">
                Treatment Technologies
              </div>

              <h1 className="mt-2 max-w-3xl text-[2.6rem] font-bold leading-[1.08] tracking-[-0.035em] text-wastely-deep sm:text-[3.2rem] lg:text-[3.7rem]">
                Technologies selected around the treatment requirement.
              </h1>

              <p className="mt-7 max-w-[650px] text-base leading-7 text-wastely-sub sm:text-lg">
                Treatment technologies are selected according to the water
                characteristics, treatment objective, site conditions and
                practical operating requirements of the project.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#technology-areas"
                  className="wastely-btn wastely-btn-primary"
                >
                  Explore Technologies
                  <ArrowRight size={17} />
                </a>

                <Link
                  to="/services/technology-process"
                  className="wastely-btn wastely-btn-secondary"
                >
                  Technology Process
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-wastely-sub">
                <span className="h-px w-10 bg-wastely-cyan" />
                Treatment
                <span className="text-wastely-line">·</span>
                Sludge Management
                <span className="text-wastely-line">·</span>
                Packaged Infrastructure
              </div>
            </div>

            {/* Technology architecture */}
            <div className="relative hidden min-h-[420px] lg:block">

              {/* Outer rings */}
              <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-wastely-cyan/20" />

              <div className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-wastely-blue/20" />

              {/* Center */}
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-wastely-cyan bg-white">
                <div className="text-center">
                  <Droplets
                    size={27}
                    className="mx-auto text-wastely-blue"
                  />

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-wastely-deep">
                    Treatment
                  </p>
                </div>
              </div>

              <TechnologyNode
                className="left-0 top-8"
                number="01"
                title="Treatment"
                icon={Droplets}
              />

              <TechnologyNode
                className="right-0 top-8"
                number="02"
                title="Aeration"
                icon={Wind}
              />

              <TechnologyNode
                className="left-0 bottom-8"
                number="03"
                title="Sludge"
                icon={Recycle}
              />

              <TechnologyNode
                className="right-0 bottom-8"
                number="04"
                title="Packaged"
                icon={Factory}
              />

              {/* Flow lines */}
              <div className="absolute left-[24%] top-[27%] h-px w-[24%] rotate-[25deg] bg-wastely-cyan/40" />

              <div className="absolute right-[24%] top-[27%] h-px w-[24%] -rotate-[25deg] bg-wastely-cyan/40" />

              <div className="absolute bottom-[27%] left-[24%] h-px w-[24%] -rotate-[25deg] bg-wastely-cyan/40" />

              <div className="absolute bottom-[27%] right-[24%] h-px w-[24%] rotate-[25deg] bg-wastely-cyan/40" />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative h-8">
          <svg
            className="absolute bottom-0 left-0 h-8 w-full"
            viewBox="0 0 1440 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 20 C180 4 300 4 480 20 S780 36 960 20 S1260 4 1440 20"
              fill="none"
              stroke="#2FB4CE"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
          </svg>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY AREAS
      ===================================================== */}

      <section
        id="technology-areas"
        className="wastely-section wastely-section-soft"
      >
        <div className="wastely-container">

          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Technology areas
            </div>

            <h2 className="wastely-section-title">
              Treatment technologies organized around their role in the system.
            </h2>

            <p className="wastely-section-description">
              Wastely Aqua brings together treatment, sludge management and
              packaged infrastructure technologies according to the
              requirements of the application.
            </p>
          </div>

          <div className="space-y-8">
            {technologyAreas.map((area) => {
              const AreaIcon = area.technologies[0]?.icon;

              return (
                <section
                  key={area.number}
                  className="border border-wastely-line bg-white"
                >
                  {/* Area heading */}
                  <div className="grid border-b border-wastely-line lg:grid-cols-[0.8fr_1.2fr]">

                    <div className="border-b border-wastely-line p-7 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
                          {AreaIcon && (
                            <AreaIcon
                              size={21}
                              strokeWidth={1.8}
                              className="text-wastely-blue"
                            />
                          )}
                        </div>

                        <span className="text-xs font-semibold tracking-[0.12em] text-wastely-cyan">
                          {area.number}
                        </span>
                      </div>

                      <h3 className="mt-7 text-xl font-bold text-wastely-deep sm:text-2xl">
                        {area.title}
                      </h3>

                      <p className="mt-3 max-w-lg text-sm leading-6 text-wastely-sub">
                        {area.description}
                      </p>
                    </div>

                    {/* Technology links */}
                    <div className="grid sm:grid-cols-2">
                      {area.technologies.map((technology) => {
                        const Icon = technology.icon;

                        return (
                          <Link
                            key={technology.name}
                            to={technology.path}
                            className="group border-b border-wastely-line p-6 transition-colors hover:bg-wastely-bg-soft sm:p-7"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-line bg-white">
                                <Icon
                                  size={19}
                                  strokeWidth={1.8}
                                  className="text-wastely-blue"
                                />
                              </div>

                              <ArrowRight
                                size={17}
                                className="mt-1 text-wastely-sub transition-transform group-hover:translate-x-1 group-hover:text-wastely-blue"
                              />
                            </div>

                            <h4 className="mt-6 text-base font-bold text-wastely-deep">
                              {technology.name}
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-wastely-sub">
                              {technology.description}
                            </p>

                            <div className="mt-5 text-xs font-bold uppercase tracking-[0.1em] text-wastely-blue">
                              View technology
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY SELECTION
      ===================================================== */}

      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <div className="wastely-section-eyebrow">
                Technology selection
              </div>

              <h2 className="wastely-section-title">
                The technology follows the requirement.
              </h2>

              <p className="mt-5 max-w-[470px] text-sm leading-6 text-wastely-sub">
                The same treatment technology does not suit every
                application. Process selection needs to consider what enters
                the system, what the system needs to achieve and how the
                plant will be operated.
              </p>

              <div className="mt-8 border-l-2 border-wastely-cyan pl-5">
                <p className="text-sm font-medium leading-6 text-wastely-ink">
                  Technology selection is part of the engineering process,
                  not an isolated equipment decision.
                </p>
              </div>
            </div>

            <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2">
              {technologyFactors.map((factor) => {
                const Icon = factor.icon;

                return (
                  <article
                    key={factor.number}
                    className="border-b border-r border-wastely-line bg-white p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                        {factor.number}
                      </span>

                      <Icon
                        size={20}
                        strokeWidth={1.7}
                        className="text-wastely-blue"
                      />
                    </div>

                    <h3 className="mt-7 text-base font-bold text-wastely-deep">
                      {factor.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-wastely-sub">
                      {factor.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY INTEGRATION
      ===================================================== */}

      <section className="relative overflow-hidden bg-wastely-deep py-20 sm:py-24 lg:py-28">

        {/* Contour lines */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1440 700"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-80 170 C180 20 310 300 570 150 C820 5 1030 210 1520 60"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-100 260 C160 105 320 390 590 235 C860 80 1060 310 1530 145"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-100 365 C170 205 320 500 620 335 C890 190 1100 430 1530 250"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-100 490 C180 330 350 630 650 455 C940 290 1130 550 1530 370"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative">

          <div className="max-w-3xl">
            <div className="wastely-section-eyebrow !text-wastely-cyan">
              Technology integration
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Technologies work together as part of a treatment system.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              Technology selection is only one part of the engineering
              process. The selected systems need to work together within the
              process configuration and operating conditions of the site.
            </p>
          </div>

          <div className="mt-14 grid border-l border-t border-white/15 md:grid-cols-5">
            {technologyFlow.map((step, index) => (
              <div
                key={step.number}
                className="relative border-b border-r border-white/15 p-6 lg:p-7"
              >
                <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                  {step.number}
                </span>

                <h3 className="mt-8 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.text}
                </p>

                {index < technologyFlow.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute right-[-8px] top-8 z-10 hidden text-wastely-cyan md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY → SERVICES
      ===================================================== */}

      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">

          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Project support
            </div>

            <h2 className="wastely-section-title">
              Technology is one part of the project.
            </h2>

            <p className="wastely-section-description">
              The selected technology needs to be supported by appropriate
              engineering, operation, maintenance and modernization
              practices throughout the life of the treatment system.
            </p>
          </div>

          <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2 lg:grid-cols-4">
            {supportingServices.map((service) => (
              <Link
                key={service.number}
                to={service.path}
                className="group border-b border-r border-wastely-line bg-white p-7 transition-colors hover:bg-wastely-bg-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                    {service.number}
                  </span>

                  <ArrowRight
                    size={17}
                    className="text-wastely-sub transition-transform group-hover:translate-x-1 group-hover:text-wastely-blue"
                  />
                </div>

                <h3 className="mt-8 text-base font-bold text-wastely-deep">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-wastely-sub">
                  {service.description}
                </p>

                <div className="mt-6 text-xs font-bold uppercase tracking-[0.1em] text-wastely-blue">
                  View service
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-wastely-line pt-7 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                Services
              </div>

              <h3 className="mt-2 text-xl font-bold text-wastely-deep">
                From technology selection to plant support.
              </h3>
            </div>

            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-wastely-blue hover:text-wastely-deep"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Technologies;