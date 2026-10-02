import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  Cog,
  Gauge,
  Search,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Activity,
    title: "Operation & Maintenance",
    description:
      "Ongoing plant operation and maintenance support focused on process performance, equipment readiness and day-to-day plant requirements.",
    points: [
      "Process monitoring",
      "Preventive maintenance",
      "Plant operations",
      "Performance reporting",
    ],
    path: "/services/operation-maintenance",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "AMC Services",
    description:
      "Maintenance-focused support for treatment equipment and systems, with planned inspections, technical assistance and maintenance records.",
    points: [
      "Planned maintenance",
      "Equipment support",
      "Inspection & condition checks",
      "Maintenance documentation",
    ],
    path: "/services/amc-services",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Revamping & Retrofitting",
    description:
      "Improve existing treatment infrastructure through targeted upgrades, process modifications and equipment improvements.",
    points: [
      "Existing plant assessment",
      "Process improvements",
      "Equipment upgrades",
      "Plant modernization",
    ],
    path: "/services/revamping-retrofitting",
  },
  {
    number: "04",
    icon: Settings2,
    title: "Technology Process",
    description:
      "Treatment-process engineering that connects water-quality requirements, treatment objectives, site conditions and practical plant configuration.",
    points: [
      "Water-quality assessment",
      "Treatment objectives",
      "Process configuration",
      "Plant integration",
    ],
    path: "/services/technology-process",
  },
];

const serviceLifecycle = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand the water source, plant condition, operating requirements and project objectives.",
    icon: Search,
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Translate treatment requirements into a practical process and system configuration.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Coordinate upgrades, equipment integration and treatment-system requirements around the site.",
    icon: Cog,
  },
  {
    number: "04",
    title: "Operate",
    description:
      "Support the plant through structured operation, monitoring and process management.",
    icon: Activity,
  },
  {
    number: "05",
    title: "Maintain",
    description:
      "Keep equipment and supporting systems maintained through planned technical support.",
    icon: Wrench,
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Use operational observations and plant requirements to identify practical improvements.",
    icon: Gauge,
  },
];

const servicePrinciples = [
  {
    number: "01",
    title: "Application first",
    text: "Service requirements begin with the actual water, wastewater and operating conditions of the site.",
  },
  {
    number: "02",
    title: "Existing infrastructure matters",
    text: "Where a plant already exists, the service approach considers what can be retained, modified or replaced.",
  },
  {
    number: "03",
    title: "Operation is part of the design",
    text: "Maintainability, monitoring and practical plant operation are considered alongside treatment performance.",
  },
];

const Services = () => {
  return (
    <main className="bg-wastely-bg text-wastely-ink">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-wastely-line bg-wastely-bg-soft">
        {/* Engineering grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,59,92,0.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,59,92,0.055) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Technical water lines */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8%] top-0 h-full w-[58%] opacity-30"
          viewBox="0 0 700 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M60 150 C190 40 280 260 410 150 C520 55 600 115 700 70"
            stroke="#2FB4CE"
            strokeWidth="1"
          />
          <path
            d="M0 235 C140 115 245 340 380 230 C500 130 590 190 700 145"
            stroke="#0E76A8"
            strokeWidth="1"
          />
          <path
            d="M70 330 C190 220 280 430 425 320 C535 235 620 300 700 255"
            stroke="#2FB4CE"
            strokeWidth="1"
          />
          <path
            d="M20 450 C150 330 265 535 400 425 C520 330 610 390 700 350"
            stroke="#0E76A8"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="wastely-section-eyebrow">
                Services
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-wastely-deep sm:text-5xl lg:text-[3.65rem]">
                Engineering, operation and maintenance support around the plant.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-wastely-sub sm:text-lg">
                From treatment-process engineering to ongoing plant operation,
                maintenance and modernization, our services are structured
                around the practical requirements of water and wastewater
                infrastructure.
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
                  href="#service-model"
                  className="wastely-btn wastely-btn-secondary"
                >
                  See How We Work
                </a>
              </div>
            </div>

            {/* Service model visual */}
            <div className="relative">
              <div className="relative border border-wastely-line bg-white">
                <div className="border-b border-wastely-line px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-wastely-blue">
                      Service framework
                    </span>

                    <span className="h-2 w-2 rounded-full bg-wastely-cyan" />
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="grid grid-cols-2 gap-px overflow-hidden border border-wastely-line bg-wastely-line">
                    {[
                      ["Assess", "01"],
                      ["Engineer", "02"],
                      ["Implement", "03"],
                      ["Operate", "04"],
                      ["Maintain", "05"],
                      ["Improve", "06"],
                    ].map(([title, number]) => (
                      <div
                        key={number}
                        className="bg-white p-5 sm:p-6"
                      >
                        <span className="text-[11px] font-bold tracking-[0.14em] text-wastely-cyan">
                          {number}
                        </span>

                        <div className="mt-2 text-sm font-bold text-wastely-deep sm:text-base">
                          {title}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3 text-xs font-medium text-wastely-sub">
                    <span className="h-px flex-1 bg-wastely-cyan" />
                    <span>Project requirements → plant support</span>
                    <span className="h-px flex-1 bg-wastely-cyan" />
                  </div>
                </div>
              </div>

              {/* Ripple detail */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full border border-wastely-cyan/30"
              >
                <div className="absolute inset-4 rounded-full border border-wastely-cyan/25" />
                <div className="absolute inset-8 rounded-full border border-wastely-cyan/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                How we support projects
              </div>

              <h2 className="wastely-section-title max-w-xl">
                Services that continue beyond the treatment process.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-base leading-7 text-wastely-sub sm:text-lg">
                A treatment system has to work within the conditions of the
                site. That means process configuration, plant operation,
                equipment maintenance and existing infrastructure all need to
                be considered together.
              </p>

              <p className="mt-5 text-base leading-7 text-wastely-sub">
                Wastely Aqua structures its services around these practical
                requirements, from assessing an existing system through
                ongoing operational and maintenance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUR SERVICES
      ========================================================== */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Service areas
            </div>

            <h2 className="wastely-section-title">
              Four ways we support water infrastructure.
            </h2>

            <p className="wastely-section-description">
              Each service has a different role. Together, they cover the
              engineering, operation, maintenance and improvement requirements
              that can arise across the life of a treatment plant.
            </p>
          </div>

          <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative border-b border-r border-wastely-line bg-white p-7 sm:p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft text-wastely-blue">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-wastely-deep">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-wastely-sub">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-wastely-line pt-5">
                    <ul className="space-y-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-wastely-ink"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-wastely-cyan" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.path}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue transition-colors hover:text-wastely-deep"
                  >
                    Explore service
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE LIFECYCLE
      ========================================================== */}
      <section
        id="service-model"
        className="relative overflow-hidden bg-wastely-deep py-20 sm:py-24 lg:py-28"
      >
        {/* Technical contour lines */}
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
              Service lifecycle
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Support can follow the project from assessment to operation.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              The exact scope depends on the project. Some sites need
              modernization, others require ongoing plant support, while new
              systems may require process engineering before implementation.
            </p>
          </div>

          <div className="mt-14 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLifecycle.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="border-b border-r border-white/15 p-6 sm:p-7 lg:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.16em] text-wastely-cyan">
                      {step.number}
                    </span>

                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="text-white/60"
                    />
                  </div>

                  <h3 className="mt-8 text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE RELATIONSHIP
      ========================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid items-start gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                Choosing the right service
              </div>

              <h2 className="wastely-section-title">
                Different plant situations need different support.
              </h2>

              <p className="wastely-section-description">
                Services are not interchangeable. The right scope depends on
                whether the requirement is operating a plant, maintaining its
                equipment, upgrading existing infrastructure or engineering
                the treatment process.
              </p>
            </div>

            <div className="border border-wastely-line">
              <div className="grid md:grid-cols-2">
                <div className="border-b border-wastely-line p-7 md:border-r md:border-b-0">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                    Existing plant
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-wastely-deep">
                    Improve what is already there.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-wastely-sub">
                    Revamping, retrofitting, O&M or AMC support may be required
                    depending on the plant condition and operating need.
                  </p>
                </div>

                <div className="p-7">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                    New or redesigned system
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-wastely-deep">
                    Configure the treatment process.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-wastely-sub">
                    Technology Process support helps translate water-quality
                    requirements and site conditions into a workable treatment
                    configuration.
                  </p>
                </div>
              </div>

              <div className="border-t border-wastely-line bg-wastely-bg-soft px-7 py-5">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-wastely-sub">
                  <span>Assess</span>
                  <ArrowRight size={14} className="text-wastely-cyan" />
                  <span>Engineer</span>
                  <ArrowRight size={14} className="text-wastely-cyan" />
                  <span>Operate</span>
                  <ArrowRight size={14} className="text-wastely-cyan" />
                  <span>Maintain</span>
                  <ArrowRight size={14} className="text-wastely-cyan" />
                  <span>Improve</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================== */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Service approach
            </div>

            <h2 className="wastely-section-title">
              Built around the conditions of the site.
            </h2>
          </div>

          <div className="grid border-l border-t border-wastely-line bg-wastely-line md:grid-cols-3">
            {servicePrinciples.map((principle) => (
              <article
                key={principle.number}
                className="border-b border-r border-wastely-line bg-white p-7 lg:p-8"
              >
                <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                  {principle.number}
                </span>

                <h3 className="mt-7 text-lg font-bold text-wastely-deep">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-wastely-sub">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY HANDOFF
      ========================================================== */}
      <section className="wastely-section-sm bg-white">
        <div className="wastely-container">
          <div className="flex flex-col gap-6 border-y border-wastely-line py-7 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                Next layer
              </div>

              <h2 className="mt-2 text-xl font-bold text-wastely-deep">
                See the treatment technologies behind the service.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-wastely-sub">
                Services define how we support the project. Technologies
                describe the treatment processes and systems that may be used
                within that project.
              </p>
            </div>

            <Link
              to="/technologies"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-wastely-blue hover:text-wastely-deep"
            >
              Explore Technologies
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;