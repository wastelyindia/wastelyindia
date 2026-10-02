import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  Building2,
  CheckCircle2,
  Factory,
  Gauge,
  Layers3,
  MapPin,
  Package,
  Ruler,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Wrench,
} from "lucide-react";

import packageImg from "../../assets/images/packageTreatment.webp";
import packageImage from "../../assets/images/packageTreatment.jpg";
import packageImage1 from "../../assets/images/package-treatment.jpg";

/* =========================================================
   PACKAGE TREATMENT UNITS
   ========================================================= */

const deploymentSteps = [
  {
    number: "01",
    title: "Assess the Site",
    description:
      "Understand the wastewater source, available area, access conditions and required treatment application.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Configure the Unit",
    description:
      "Define the packaged treatment arrangement around the required process and site conditions.",
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Install & Integrate",
    description:
      "Position the packaged system, connect supporting services and integrate it with site infrastructure.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Operate & Maintain",
    description:
      "Operate the treatment unit with defined monitoring, maintenance and performance requirements.",
    icon: Settings2,
  },
];

const modularBenefits = [
  {
    number: "01",
    title: "Compact Infrastructure",
    description:
      "Packaged treatment arrangements can be considered where available civil or installation space is limited.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Modular Configuration",
    description:
      "Treatment stages can be configured around the application rather than forcing every site into the same plant arrangement.",
    icon: Boxes,
  },
  {
    number: "03",
    title: "Simplified Deployment",
    description:
      "Packaged equipment can reduce the amount of site assembly required compared with fully site-built arrangements.",
    icon: Package,
  },
  {
    number: "04",
    title: "Expansion Path",
    description:
      "Where the process and site allow it, modular infrastructure can provide a pathway for additional treatment capacity.",
    icon: Layers3,
  },
];

const siteFactors = [
  {
    title: "Available Footprint",
    description:
      "The physical area available for the treatment unit, access and supporting equipment.",
  },
  {
    title: "Wastewater Source",
    description:
      "The source and characteristics of the wastewater determine the appropriate treatment arrangement.",
  },
  {
    title: "Required Capacity",
    description:
      "Design flow and operating conditions must be established before selecting the final unit configuration.",
  },
  {
    title: "Installation Conditions",
    description:
      "Access, foundations, utilities, piping and electrical requirements influence deployment.",
  },
  {
    title: "Treated-Water Objective",
    description:
      "The required treated-water quality and final application define the treatment process.",
  },
  {
    title: "Maintenance Access",
    description:
      "Equipment layout should allow practical inspection, servicing and replacement of components.",
  },
];

const applications = [
  {
    title: "Remote Facilities",
    description:
      "Compact treatment infrastructure for locations where conventional plant construction is difficult.",
    icon: MapPin,
  },
  {
    title: "Industrial Sites",
    description:
      "Packaged treatment systems integrated with industrial wastewater management requirements.",
    icon: Factory,
  },
  {
    title: "Institutional Sites",
    description:
      "Treatment infrastructure for campuses, facilities and other distributed wastewater sources.",
    icon: Building2,
  },
  {
    title: "Decentralized Treatment",
    description:
      "Localized wastewater treatment where a centralized plant is not the preferred arrangement.",
    icon: Gauge,
  },
];

const configurationAreas = [
  "Treatment process",
  "Design flow",
  "Site footprint",
  "Tank and equipment arrangement",
  "Pumping requirements",
  "Electrical and controls",
  "Sludge handling",
  "Treated-water discharge or reuse",
];

/* =========================================================
   SECTION HEADING
   ========================================================= */

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-3xl">
      <div
        className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] ${
          light ? "text-wastely-cyan" : "text-wastely-blue"
        }`}
      >
        <span className="h-px w-7 bg-wastely-cyan" />
        {eyebrow}
      </div>

      <h2
        className={`text-3xl font-bold leading-tight tracking-tight md:text-4xl ${
          light ? "text-white" : "text-wastely-deep"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 ${
            light ? "text-white/65" : "text-wastely-sub"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

const PackageTreatmentUnits = () => {
  return (
    <main className="bg-wastely-bg text-wastely-ink">
      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="relative overflow-hidden border-b border-wastely-line bg-white">
        {/* Engineering grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(#E3EDF1 1px, transparent 1px),
              linear-gradient(90deg, #E3EDF1 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to right, black 0%, transparent 75%)",
          }}
        />

        {/* Technical corner lines */}
        <div className="pointer-events-none absolute left-0 top-20 h-px w-40 bg-wastely-cyan/50" />
        <div className="pointer-events-none absolute left-0 top-20 h-32 w-px bg-wastely-cyan/30" />

        <div className="wastely-container relative">
          <div className="grid min-h-[700px] items-center gap-12 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            {/* LEFT */}
            <div className="relative z-10">
              <div className="wastely-section-eyebrow">
                Packaged Infrastructure
              </div>

              <h1 className="mt-3 max-w-xl text-[2.65rem] font-bold leading-[1.06] tracking-[-0.035em] text-wastely-deep sm:text-5xl lg:text-[3.65rem]">
                Treatment infrastructure that fits the site.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-wastely-sub sm:text-lg">
                Packaged wastewater treatment systems provide a compact,
                configurable approach where treatment capacity, available
                footprint and installation conditions need to work together.
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
                  to="/services/technology-process"
                  className="wastely-btn wastely-btn-secondary"
                >
                  View Process Engineering
                </Link>
              </div>

              {/* Engineering descriptors */}
              <div className="mt-12 max-w-xl border-y border-wastely-line">
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {[
                    ["01", "Compact"],
                    ["02", "Modular"],
                    ["03", "Configurable"],
                    ["04", "Site-specific"],
                  ].map(([number, label]) => (
                    <div
                      key={number}
                      className="border-r border-wastely-line px-4 py-4 last:border-r-0"
                    >
                      <div className="text-[9px] font-bold tracking-[0.14em] text-wastely-cyan">
                        {number}
                      </div>

                      <div className="mt-1 text-xs font-semibold text-wastely-deep">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative">
              <div className="relative ml-auto max-w-[720px] border border-wastely-line bg-white p-3">
                <div className="relative overflow-hidden">
                  <img
                    src={packageImg}
                    alt="Packaged wastewater treatment unit"
                    className="h-[470px] w-full object-cover sm:h-[570px] lg:h-[650px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/70 via-transparent to-transparent" />

                  {/* Technical label */}
                  <div className="absolute left-7 top-7 border border-white/25 bg-wastely-deep/90 px-5 py-4">
                    <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-wastely-cyan">
                      Modular infrastructure
                    </div>

                    <div className="mt-1 text-sm font-semibold text-white">
                      Packaged treatment unit
                    </div>
                  </div>

                  {/* Bottom information rail */}
                  <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-wastely-deep/90">
                    <div className="grid grid-cols-3">
                      <div className="border-r border-white/15 px-4 py-4">
                        <div className="text-[9px] uppercase tracking-[0.12em] text-white/45">
                          Layout
                        </div>

                        <div className="mt-1 text-xs font-semibold text-white">
                          Site-specific
                        </div>
                      </div>

                      <div className="border-r border-white/15 px-4 py-4">
                        <div className="text-[9px] uppercase tracking-[0.12em] text-white/45">
                          Format
                        </div>

                        <div className="mt-1 text-xs font-semibold text-white">
                          Packaged
                        </div>
                      </div>

                      <div className="px-4 py-4">
                        <div className="text-[9px] uppercase tracking-[0.12em] text-white/45">
                          Application
                        </div>

                        <div className="mt-1 text-xs font-semibold text-white">
                          Decentralized
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating engineering marker */}
              <div className="absolute -bottom-7 -left-5 hidden w-[235px] border border-wastely-line bg-white p-5 shadow-subtle md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center border border-wastely-cyan bg-wastely-bg-soft">
                    <Ruler size={20} className="text-wastely-blue" />
                  </div>

                  <div>
                    <div className="text-xs font-bold text-wastely-deep">
                      Site footprint
                    </div>

                    <div className="mt-1 text-[10px] leading-4 text-wastely-sub">
                      Configuration follows available space
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT IS A PACKAGE SYSTEM?
          ===================================================== */}
      <section className="wastely-section bg-wastely-bg-soft">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="The Approach"
                title="A treatment plant arranged around the project site."
                description="Package treatment systems bring treatment equipment and supporting components together into a defined plant arrangement. The objective is not simply to make a smaller plant, but to make the treatment infrastructure practical for the application."
              />
            </div>

            <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2">
              {[
                {
                  title: "Compact",
                  text: "Useful where available installation area is constrained.",
                  icon: Ruler,
                },
                {
                  title: "Configurable",
                  text: "Process and equipment arrangements can be defined around the application.",
                  icon: SlidersHorizontal,
                },
                {
                  title: "Packaged",
                  text: "Equipment can be brought together as a coordinated treatment system.",
                  icon: Package,
                },
                {
                  title: "Maintainable",
                  text: "Access and equipment arrangement remain part of the plant design.",
                  icon: Wrench,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
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
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-wastely-sub">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MODULAR BENEFITS
          ===================================================== */}
      <section className="wastely-section bg-white">
        <div className="wastely-container">
          <SectionHeading
            eyebrow="Why Packaged Treatment"
            title="The value is in how the infrastructure fits the application."
            description="Packaged treatment can be useful when footprint, deployment conditions, process configuration and future requirements all need to be considered together."
          />

          <div className="mt-12 grid border-l border-t border-wastely-line bg-wastely-line lg:grid-cols-4">
            {modularBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="border-b border-r border-wastely-line bg-white p-7 lg:min-h-[310px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                        className="text-wastely-blue"
                      />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.15em] text-wastely-cyan">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-bold text-wastely-deep">
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
          DEPLOYMENT MODEL
          ===================================================== */}
      <section className="relative overflow-hidden bg-wastely-deep">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="wastely-container relative py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <SectionHeading
                light
                eyebrow="Deployment Model"
                title="From site assessment to commissioned treatment."
                description="A packaged plant still requires engineering. Site conditions, wastewater characteristics, utilities, access and operating requirements determine how the system is configured."
              />

              <Link
                to="/services/technology-process"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-wastely-cyan"
              >
                See Technology Process
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid border-l border-t border-white/15 md:grid-cols-2">
              {deploymentSteps.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="border-b border-r border-white/15 p-7 sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/5">
                        <Icon
                          size={21}
                          className="text-wastely-cyan"
                          strokeWidth={1.6}
                        />
                      </div>

                      <span className="text-[10px] font-bold tracking-[0.15em] text-white/40">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-lg font-bold text-white">
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
          SITE ENGINEERING
          ===================================================== */}
      <section className="wastely-section bg-white">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Site Engineering"
                title="The package is only one part of the system."
                description="Successful deployment depends on how the treatment unit connects to the existing site. Civil works, piping, electrical services, pumping, sludge handling and treated-water discharge all need to be considered."
              />

              <div className="mt-9 border-t border-wastely-line">
                {siteFactors.map((item, index) => (
                  <div
                    key={item.title}
                    className="grid grid-cols-[36px_1fr] gap-4 border-b border-wastely-line py-5 sm:grid-cols-[42px_180px_1fr]"
                  >
                    <span className="text-[10px] font-bold tracking-[0.12em] text-wastely-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-sm font-bold text-wastely-deep">
                      {item.title}
                    </h3>

                    <p className="col-span-2 text-xs leading-5 text-wastely-sub sm:col-span-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative border border-wastely-line bg-wastely-bg-soft p-3">
              <div className="relative h-full min-h-[560px] overflow-hidden">
                <img
                  src={packageImage}
                  alt="Package treatment infrastructure"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/90 via-wastely-deep/15 to-transparent" />

                <div className="absolute left-5 right-5 top-5 border border-white/20 bg-wastely-deep/85 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-wastely-cyan/50">
                      <Layers3
                        size={19}
                        className="text-wastely-cyan"
                      />
                    </div>

                    <div>
                      <div className="text-[9px] uppercase tracking-[0.14em] text-white/45">
                        System layout
                      </div>

                      <div className="mt-1 text-sm font-semibold text-white">
                        Treatment + supporting infrastructure
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                    <span className="h-px w-7 bg-wastely-cyan" />
                    Integration
                  </div>

                  <div className="mt-2 max-w-md text-xl font-bold text-white">
                    Design the unit around the way the site actually operates.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATIONS
          ===================================================== */}
      <section className="wastely-section bg-wastely-bg-soft">
        <div className="wastely-container">
          <div className="flex flex-col gap-5 border-b border-wastely-line pb-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Where It Fits"
              title="Applications where compact treatment infrastructure matters."
            />

            <Link
              to="/industries"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-wastely-blue"
            >
              View Industries
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border-b border-r border-wastely-line bg-white p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="text-wastely-blue"
                    />
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
          CONFIGURATION
          ===================================================== */}
      <section className="wastely-section-sm bg-white">
        <div className="wastely-container">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Configuration"
                title="Define the package around the actual treatment requirement."
                description="Final equipment selection and configuration should follow the project requirements rather than assuming one standard package fits every application."
              />
            </div>

            <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2">
              {configurationAreas.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-r border-wastely-line bg-white p-5"
                >
                  <span className="text-[10px] font-bold tracking-[0.12em] text-wastely-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-wastely-deep">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMAGE + ENGINEERING MESSAGE
          No bottom CTA — footer owns conversion.
          ===================================================== */}
      <section className="wastely-section-sm bg-wastely-bg-soft">
        <div className="wastely-container">
          <div className="grid gap-0 border border-wastely-line bg-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[360px]">
              <img
                src={packageImage1}
                alt="Package treatment system"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-wastely-deep/75 to-transparent" />

              <div className="absolute bottom-7 left-7 max-w-md">
                <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-wastely-cyan">
                  Package Infrastructure
                </div>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Compact does not mean generic.
                </h2>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="wastely-section-eyebrow">
                Engineering First
              </div>

              <h3 className="text-2xl font-bold text-wastely-deep">
                Start with the site and wastewater requirement.
              </h3>

              <p className="mt-4 text-sm leading-6 text-wastely-sub">
                The appropriate package treatment arrangement depends on the
                application, process requirement, available footprint and
                integration conditions.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/services/technology-process"
                  className="wastely-btn wastely-btn-secondary"
                >
                  Technology Process
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/services/operation-maintenance"
                  className="wastely-btn wastely-btn-secondary"
                >
                  Plant Support
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY / SERVICE HANDOFF
          ===================================================== */}
      <section className="wastely-section-sm bg-white">
        <div className="wastely-container">
          <div className="grid border-y border-wastely-line md:grid-cols-3">
            <HandoffCard
              eyebrow="Technology"
              title="Package Treatment Units"
              description="Compact, configurable wastewater treatment infrastructure for suitable site applications."
              to="/technologies/package-treatment-units"
              linkText="Current technology"
            />

            <HandoffCard
              eyebrow="Service"
              title="Technology Process"
              description="Process engineering for defining treatment stages and integrating the system with the site."
              to="/services/technology-process"
              linkText="View service"
            />

            <HandoffCard
              eyebrow="Service"
              title="Operation & Maintenance"
              description="Ongoing support for plant operation, maintenance, monitoring and performance requirements."
              to="/services/operation-maintenance"
              linkText="View service"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

/* =========================================================
   HANDOFF CARD
   ========================================================= */

const HandoffCard = ({
  eyebrow,
  title,
  description,
  to,
  linkText,
}) => {
  return (
    <div className="border-r border-wastely-line p-7 last:border-r-0 md:p-9">
      <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
        {eyebrow}
      </div>

      <h3 className="mt-3 text-lg font-bold text-wastely-deep">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-wastely-sub">
        {description}
      </p>

      <Link
        to={to}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue"
      >
        {linkText}
        <ArrowRight size={15} />
      </Link>
    </div>
  );
};

export default PackageTreatmentUnits;