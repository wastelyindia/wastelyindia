import { Link } from "react-router-dom";
import {
  CalendarDays,
  Wrench,
  ShieldCheck,
  ClipboardCheck,
  Settings2,
  FileText,
  SearchCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import heroImage from "../../assets/images/Wastely_hero_4.png";

const maintenanceAreas = [
  {
    icon: Wrench,
    number: "01",
    title: "Preventive Maintenance",
    description:
      "Planned inspection and maintenance of treatment equipment to reduce avoidable failures and keep critical systems serviceable.",
  },
  {
    icon: Settings2,
    number: "02",
    title: "Equipment & System Support",
    description:
      "Technical support for pumps, blowers, aeration systems, dosing equipment and other plant components within the agreed AMC scope.",
  },
  {
    icon: SearchCheck,
    number: "03",
    title: "Inspection & Condition Checks",
    description:
      "Routine checks help identify wear, abnormal operation and maintenance requirements before they become larger plant issues.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Safety & Compliance Support",
    description:
      "Maintenance activities are organized with attention to safe working practices, plant procedures and applicable operational requirements.",
  },
];

const amcCoverage = [
  {
    icon: CalendarDays,
    title: "Planned Maintenance",
    description:
      "Maintenance activities organized around an agreed schedule and plant requirements.",
  },
  {
    icon: Wrench,
    title: "Repair Support",
    description:
      "Technical assistance when equipment or treatment-system components require corrective attention.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection",
    description:
      "Routine checks of equipment condition, operation and maintenance requirements.",
  },
  {
    icon: FileText,
    title: "Maintenance Records",
    description:
      "Documentation of maintenance activities, observations and follow-up requirements.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Review",
    description:
      "Understand the plant, equipment, operating conditions and existing maintenance requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define maintenance activities, frequency, responsibilities and priorities.",
  },
  {
    number: "03",
    title: "Maintain",
    description:
      "Carry out planned inspections, servicing and agreed technical support activities.",
  },
  {
    number: "04",
    title: "Report",
    description:
      "Record completed work, observations and items requiring further attention.",
  },
];

const AMCServices = () => {
  return (
    <main className="bg-white text-wastely-ink">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-wastely-line bg-white">
        {/* Engineering grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,59,92,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,59,92,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Water/ripple detail */}
        <div className="pointer-events-none absolute right-[-120px] top-20 h-[420px] w-[420px] rounded-full border border-wastely-cyan/20" />
        <div className="pointer-events-none absolute right-[-80px] top-40 h-[300px] w-[300px] rounded-full border border-wastely-cyan/15" />

        <div className="wastely-container relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            {/* Copy */}
            <div>
              <div className="wastely-section-eyebrow">
                AMC Services
              </div>

              <h1 className="max-w-3xl text-display-md sm:text-display-lg">
                Maintain the systems that keep your plant running.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-wastely-sub sm:text-lg">
                Annual Maintenance Contracts provide a structured approach to
                preventive maintenance, equipment support, inspections and
                maintenance documentation for water and wastewater treatment
                infrastructure.
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
                  href="#amc-scope"
                  className="wastely-btn wastely-btn-secondary"
                >
                  View AMC Scope
                </a>
              </div>

              {/* Contract characteristics */}
              <div className="mt-10 grid max-w-2xl grid-cols-2 border-y border-wastely-line sm:grid-cols-4">
                {[
                  "Planned",
                  "Preventive",
                  "Documented",
                  "Site-specific",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-r border-wastely-line px-3 py-4 first:pl-0 last:border-r-0"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-wastely-blue">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image / maintenance frame */}
            <div className="relative">
              <div className="absolute -inset-5 bg-wastely-gradient opacity-[0.08] blur-3xl" />

              <div className="relative overflow-hidden border border-wastely-line bg-wastely-bg-soft">
                <div className="absolute left-0 top-0 z-10 h-1 w-24 bg-wastely-gradient" />

                <img
                  src={heroImage}
                  alt="Water treatment infrastructure"
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/70 via-transparent to-transparent" />

                {/* Technical overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="border-l-2 border-wastely-cyan pl-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-wastely-cyan-light">
                      Maintenance Framework
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      Inspect → Maintain → Record → Follow up
                    </p>
                  </div>
                </div>
              </div>

              {/* Small technical marker */}
              <div className="absolute -bottom-5 -left-4 hidden border border-wastely-line bg-white p-4 shadow-subtle sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center bg-wastely-bg-soft text-wastely-blue">
                    <Wrench size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-wastely-sub">
                      Service model
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-wastely-deep">
                      Planned maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY AMC
      ========================================================= */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div className="wastely-section-header mb-0">
              <div className="wastely-section-eyebrow">
                Why AMC
              </div>

              <h2 className="wastely-section-title">
                Maintenance needs structure, not just response.
              </h2>

              <p className="wastely-section-description">
                Treatment plants depend on equipment that must remain
                serviceable over time. An AMC creates a defined maintenance
                framework around inspection, servicing, repair support and
                records.
              </p>
            </div>

            <div className="grid gap-0 border-l border-t border-wastely-line sm:grid-cols-2">
              {[
                {
                  title: "Reduce avoidable failures",
                  text:
                    "Regular inspection and preventive maintenance can identify equipment issues before they become larger operational problems.",
                },
                {
                  title: "Plan maintenance activities",
                  text:
                    "A defined maintenance schedule gives the plant team a clearer view of upcoming servicing and inspection requirements.",
                },
                {
                  title: "Maintain equipment condition",
                  text:
                    "Routine attention to critical components supports continued serviceability of treatment infrastructure.",
                },
                {
                  title: "Keep maintenance visible",
                  text:
                    "Records and follow-up actions provide a practical history of maintenance work carried out at the plant.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-b border-r border-wastely-line bg-white p-6 sm:p-7"
                >
                  <div className="mb-5 h-1 w-8 bg-wastely-cyan" />

                  <h3 className="text-card-title text-wastely-deep">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-wastely-sub">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AMC SCOPE
      ========================================================= */}
      <section
        id="amc-scope"
        className="wastely-section wastely-section-white"
      >
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              AMC Scope
            </div>

            <h2 className="wastely-section-title">
              Maintenance coverage built around the plant.
            </h2>

            <p className="wastely-section-description">
              The exact AMC scope can be defined according to the treatment
              process, equipment installed, site requirements and maintenance
              responsibilities.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {maintenanceAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="wastely-card wastely-card-hover group relative overflow-hidden p-6 sm:p-7"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 border-l border-b border-wastely-line bg-wastely-bg-soft" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft text-wastely-blue">
                        <Icon size={20} />
                      </div>

                      <span className="text-xs font-semibold tracking-[0.12em] text-wastely-cyan">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-card-title text-wastely-deep">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-wastely-sub">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          OPERATING MODEL — DISTINCT FROM O&M
      ========================================================= */}
      <section className="relative overflow-hidden bg-wastely-deep text-white">
        {/* Engineering contour lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-50 360 C160 230 250 450 470 300 S820 100 1250 260"
            fill="none"
            stroke="#2FB4CE"
            strokeWidth="1"
          />
          <path
            d="M-50 395 C160 265 250 485 470 335 S820 135 1250 295"
            fill="none"
            stroke="#2FB4CE"
            strokeWidth="1"
          />
          <path
            d="M-50 430 C160 300 250 520 470 370 S820 170 1250 330"
            fill="none"
            stroke="#2FB4CE"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="wastely-section-eyebrow !text-wastely-cyan-light">
              AMC Working Model
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
              A maintenance cycle that stays connected to plant conditions.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              AMC support should not be limited to isolated repair visits.
              Inspection, planned maintenance, corrective action and
              documentation work together as an ongoing maintenance cycle.
            </p>
          </div>

          <div className="mt-14 grid gap-0 border border-white/15 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative p-6 sm:p-7 ${
                  index !== processSteps.length - 1
                    ? "border-b border-white/15 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-wastely-cyan-light">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.description}
                </p>

                {index !== processSteps.length - 1 && (
                  <ArrowRight
                    className="absolute right-5 top-7 hidden text-wastely-cyan md:block"
                    size={17}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INCLUDED COVERAGE
      ========================================================= */}
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                Included Coverage
              </div>

              <h2 className="wastely-section-title">
                From scheduled servicing to maintenance records.
              </h2>

              <p className="wastely-section-description">
                Depending on the agreed scope, AMC support can cover the
                maintenance activities required to keep treatment-system
                equipment and associated infrastructure serviceable.
              </p>
            </div>

            <div className="border-t border-wastely-line">
              {amcCoverage.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="grid gap-4 border-b border-wastely-line py-6 sm:grid-cols-[48px_1fr] sm:items-start"
                  >
                    <div className="flex h-10 w-10 items-center justify-center bg-white text-wastely-blue">
                      <Icon size={19} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-base font-semibold text-wastely-deep">
                          {item.title}
                        </h3>

                        <span className="text-xs text-wastely-cyan">
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
          AMC VS O&M
      ========================================================= */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Service Structure
            </div>

            <h2 className="wastely-section-title">
              AMC and O&M serve different responsibilities.
            </h2>

            <p className="wastely-section-description">
              Both services support plant performance, but the responsibility
              and scope are different.
            </p>
          </div>

          <div className="grid overflow-hidden border border-wastely-line md:grid-cols-2">
            {/* AMC */}
            <div className="border-b border-wastely-line p-7 md:border-b-0 md:border-r md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-wastely-bg-soft text-wastely-blue">
                  <Wrench size={19} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-blue">
                  AMC Services
                </p>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-wastely-deep">
                Maintenance-focused support
              </h3>

              <p className="mt-4 text-sm leading-6 text-wastely-sub">
                A structured maintenance arrangement focused on planned
                servicing, inspection, repair support, equipment condition and
                maintenance records.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Preventive maintenance",
                  "Equipment servicing",
                  "Inspection and condition checks",
                  "Repair support",
                  "Maintenance documentation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-wastely-sub"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-wastely-cyan"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* O&M */}
            <div className="p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-wastely-bg-soft text-wastely-blue">
                  <Settings2 size={19} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-blue">
                  Operation & Maintenance
                </p>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-wastely-deep">
                Plant-operation support
              </h3>

              <p className="mt-4 text-sm leading-6 text-wastely-sub">
                A broader service model that can include day-to-day plant
                operation, process monitoring, operational adjustments,
                reporting and maintenance coordination.
              </p>

              <Link
                to="/services/operation-maintenance"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue hover:text-wastely-cyan"
              >
                View Operation & Maintenance
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* No bottom CTA here.
          The global Footer owns the primary Request an Assessment CTA. */}
    </main>
  );
};

export default AMCServices;