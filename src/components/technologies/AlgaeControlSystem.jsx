import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Building2,
  Check,
  Database,
  Droplets,
  Factory,
  Gauge,
  LineChart,
  Radio,
  Radar,
  Settings2,
  Waves,
  Wind,
} from "lucide-react";

import HeroImg from "../../assets/images/algae-hero.png";
import BuoyImg from "../../assets/images/algae-buoy.png";
import DashboardImg from "../../assets/images/algae-dashboard.png";
import AnalyticsImg from "../../assets/images/algae-analytics.png";

/* =========================================================
   DATA
========================================================= */

const monitoringParameters = [
  {
    title: "Chlorophyll Monitoring",
    description:
      "Track indicators associated with algal activity and changes in water-body conditions.",
    icon: Activity,
  },
  {
    title: "Phycocyanin Detection",
    description:
      "Monitor cyanobacteria-related indicators where this parameter is relevant to the application.",
    icon: Waves,
  },
  {
    title: "Dissolved Oxygen & pH",
    description:
      "Observe important water-quality parameters that help characterize changing site conditions.",
    icon: Gauge,
  },
  {
    title: "Turbidity",
    description:
      "Track water clarity and suspended material as part of the wider site assessment.",
    icon: Droplets,
  },
];

const systemFunctions = [
  {
    number: "01",
    title: "Monitor",
    description:
      "Collect water-quality and environmental information from the treatment area.",
    icon: Radar,
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Interpret measured conditions to understand algae-related changes at the site.",
    icon: Database,
  },
  {
    number: "03",
    title: "Control",
    description:
      "Apply the selected algae-control approach according to the project requirement.",
    icon: Radio,
  },
  {
    number: "04",
    title: "Review",
    description:
      "Use operational observations and monitoring data to evaluate ongoing conditions.",
    icon: LineChart,
  },
];

const applications = [
  {
    title: "Urban Lakes",
    description:
      "Support algae-management programmes where water quality, appearance and ecological conditions need attention.",
    icon: Building2,
  },
  {
    title: "Reservoirs",
    description:
      "Monitor and manage algae-related conditions in larger stored-water environments.",
    icon: Droplets,
  },
  {
    title: "Wastewater Ponds",
    description:
      "Consider algae-control measures as part of broader wastewater-pond management.",
    icon: Factory,
  },
  {
    title: "Cooling & Industrial Water",
    description:
      "Support water-management programmes where biological growth can affect operational conditions.",
    icon: Wind,
  },
];

const projectInputs = [
  "Water-body size and geometry",
  "Existing algae condition",
  "Water-quality parameters",
  "Target treatment area",
  "Existing aeration or treatment systems",
  "Access and installation conditions",
  "Monitoring requirements",
  "Operating and maintenance requirements",
];

const serviceLinks = [
  {
    eyebrow: "Service",
    title: "Technology Process",
    description:
      "Define the treatment approach and integrate the selected technology with the wider water system.",
    to: "/services/technology-process",
  },
  {
    eyebrow: "Service",
    title: "Operation & Maintenance",
    description:
      "Support ongoing operation, monitoring, maintenance and performance requirements.",
    to: "/services/operation-maintenance",
  },
  {
    eyebrow: "Solution",
    title: "Water Body Restoration",
    description:
      "See how algae control can form part of a wider water-body restoration programme.",
    to: "/solutions/water-body-restoration",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const AlgaeControlSystem = () => {
  return (
    <main className="bg-wastely-bg text-wastely-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-wastely-line bg-wastely-bg">

        {/* Water contour lines */}
        <div className="pointer-events-none absolute inset-0 opacity-60">

          <svg
            viewBox="0 0 1200 700"
            className="absolute right-0 top-0 h-full w-[65%]"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M700 30 C900 100 850 180 1050 210 C1200 230 1150 330 900 350"
              fill="none"
              stroke="#2FB4CE"
              strokeWidth="1"
              opacity="0.22"
            />

            <path
              d="M650 90 C870 150 820 240 1080 260 C1190 270 1140 390 850 420"
              fill="none"
              stroke="#0E76A8"
              strokeWidth="1"
              opacity="0.14"
            />

            <path
              d="M620 160 C830 210 810 300 1090 320 C1180 330 1140 450 820 490"
              fill="none"
              stroke="#2FB4CE"
              strokeWidth="1"
              opacity="0.12"
            />

            <path
              d="M580 240 C800 270 790 360 1110 390"
              fill="none"
              stroke="#0E76A8"
              strokeWidth="1"
              opacity="0.10"
            />
          </svg>

        </div>

        <div className="wastely-container relative">

          <div className="grid min-h-[700px] items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            {/* LEFT */}

            <div className="relative z-10">

              <div className="wastely-section-eyebrow">
                Treatment Technology
              </div>

              <h1 className="mt-4 max-w-2xl text-[2.7rem] font-bold leading-[1.05] tracking-[-0.04em] text-wastely-deep sm:text-5xl lg:text-[4.1rem]">
                Control algae with a clearer view of the water.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-wastely-sub sm:text-lg">
                Algae management starts with understanding the water body.
                Monitoring, treatment and operational control can be combined
                into a site-specific system for managing algae-related
                conditions.
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
                  to="/solutions/water-body-restoration"
                  className="wastely-btn wastely-btn-secondary"
                >
                  Water Body Restoration
                </Link>

              </div>

              {/* Process rail */}

              <div className="mt-12 max-w-xl border-y border-wastely-line">

                <div className="grid grid-cols-2 sm:grid-cols-4">

                  {[
                    ["01", "Monitor"],
                    ["02", "Assess"],
                    ["03", "Control"],
                    ["04", "Review"],
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

            {/* RIGHT */}

            <div className="relative">

              <div className="relative border border-wastely-line bg-white p-3">

                <div className="relative overflow-hidden">

                  <img
                    src={HeroImg}
                    alt="Water body algae control system"
                    className="h-[500px] w-full object-cover sm:h-[600px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/80 via-transparent to-transparent" />

                  <div className="absolute left-6 top-6 border border-white/20 bg-wastely-deep/90 px-5 py-4">

                    <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-wastely-cyan">
                      Water-body technology
                    </div>

                    <div className="mt-1 text-sm font-semibold text-white">
                      Algae monitoring & control
                    </div>

                  </div>

                  <div className="absolute bottom-6 left-6 right-6 border border-white/15 bg-wastely-deep/90">

                    <div className="grid grid-cols-3">

                      <div className="border-r border-white/15 px-4 py-4">
                        <div className="text-[9px] uppercase tracking-[0.12em] text-white/45">
                          Focus
                        </div>

                        <div className="mt-1 text-xs font-semibold text-white">
                          Algae
                        </div>
                      </div>

                      <div className="border-r border-white/15 px-4 py-4">
                        <div className="text-[9px] uppercase tracking-[0.12em] text-white/45">
                          Method
                        </div>

                        <div className="mt-1 text-xs font-semibold text-white">
                          Monitor + Control
                        </div>
                      </div>

                      <div className="px-4 py-4">
                        <div className="text-[9px] uppercase tracking-[0.12em] text-white/45">
                          Application
                        </div>

                        <div className="mt-1 text-xs font-semibold text-white">
                          Water Bodies
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="absolute -bottom-8 -left-6 hidden w-[260px] border border-wastely-line bg-white p-5 shadow-[0_8px_24px_rgba(7,59,92,0.08)] md:block">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center border border-wastely-cyan bg-wastely-bg-soft">
                    <Activity
                      size={20}
                      className="text-wastely-blue"
                    />
                  </div>

                  <div>
                    <div className="text-xs font-bold text-wastely-deep">
                      Water-quality parameters
                    </div>

                    <div className="mt-1 text-[10px] leading-4 text-wastely-sub">
                      Site monitoring informs treatment decisions
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          THE PROBLEM
      ===================================================== */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                The Problem
              </div>

              <h2 className="wastely-section-title">
                Algae is a water-quality issue, not an isolated surface problem.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                Effective management depends on understanding the water body,
                the source of nutrients and the conditions that allow algae to
                develop. The treatment response therefore needs to be connected
                to the wider site condition.
              </p>

            </div>

            <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2">

              {[
                {
                  title: "Water Quality",
                  text: "Understand the parameters associated with changing algae conditions.",
                  icon: Droplets,
                },
                {
                  title: "Bloom Conditions",
                  text: "Identify environmental and operational conditions that contribute to algae growth.",
                  icon: Waves,
                },
                {
                  title: "Treatment Control",
                  text: "Select an appropriate control method for the specific water-body requirement.",
                  icon: Settings2,
                },
                {
                  title: "Ongoing Monitoring",
                  text: "Continue observing site conditions after treatment is introduced.",
                  icon: Activity,
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
          MONITORING PARAMETERS
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="max-w-3xl">

            <div className="wastely-section-eyebrow">
              Monitoring
            </div>

            <h2 className="wastely-section-title">
              Measure the conditions before deciding what to control.
            </h2>

            <p className="wastely-section-description">
              Monitoring parameters should be selected according to the water
              body, algae condition and project objective. The following are
              examples of parameters that can form part of the monitoring layer.
            </p>

          </div>

          <div className="mt-12 grid border-l border-t border-wastely-line bg-wastely-line md:grid-cols-2 xl:grid-cols-4">

            {monitoringParameters.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border-b border-r border-wastely-line bg-white p-7"
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
                      {String(index + 1).padStart(2, "0")}
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
          SYSTEM WORKFLOW
      ===================================================== */}

      <section className="relative overflow-hidden bg-wastely-deep">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="wastely-container relative py-20 sm:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow !text-wastely-cyan">
                System Workflow
              </div>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Monitoring and treatment work as one operating cycle.
              </h2>

              <p className="mt-5 text-sm leading-6 text-white/65">
                The technology should fit into the wider water-management
                programme rather than operate as a disconnected device.
              </p>

              <Link
                to="/services/technology-process"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-wastely-cyan"
              >
                See Technology Process
                <ArrowRight size={16} />
              </Link>

            </div>

            <div className="grid border-l border-t border-white/15 md:grid-cols-2">

              {systemFunctions.map((item) => {
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
                          strokeWidth={1.6}
                          className="text-wastely-cyan"
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
          FIELD CONTROL TECHNOLOGY
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

            <div className="relative border border-wastely-line bg-wastely-bg-soft p-3">

              <div className="relative overflow-hidden">

                <img
                  src={BuoyImg}
                  alt="Floating algae control and monitoring buoy"
                  className="h-[500px] w-full object-cover sm:h-[620px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">

                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                    <span className="h-px w-7 bg-wastely-cyan" />
                    Field Deployment
                  </div>

                  <div className="mt-2 max-w-md text-2xl font-bold text-white">
                    Treatment equipment should be designed around the water body.
                  </div>

                </div>

              </div>

            </div>

            <div>

              <div className="wastely-section-eyebrow">
                Control Technology
              </div>

              <h2 className="wastely-section-title">
                Connect the control system to the actual site condition.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                Depending on the project, an algae-control system can combine
                floating equipment, monitoring instruments, treatment devices
                and operational controls. The final arrangement should be
                established from the water-body assessment.
              </p>

              <div className="mt-9 border-t border-wastely-line">

                {[
                  "Site-specific equipment arrangement",
                  "Water-quality monitoring",
                  "Treatment-area definition",
                  "Operational monitoring",
                  "Maintenance access",
                  "Integration with existing restoration measures",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-wastely-line py-5"
                  >
                    <span className="text-[10px] font-bold tracking-[0.12em] text-wastely-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-semibold text-wastely-deep">
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
          DATA & MONITORING
      ===================================================== */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid gap-0 border border-wastely-line bg-white lg:grid-cols-[1.05fr_0.95fr]">

            <div className="relative min-h-[430px]">

              <img
                src={DashboardImg}
                alt="Water monitoring dashboard"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-wastely-deep/75 to-transparent" />

              <div className="absolute bottom-8 left-8 max-w-md">

                <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-wastely-cyan">
                  Monitoring Layer
                </div>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Turn field observations into usable operating information.
                </h2>

              </div>

            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">

              <div className="wastely-section-eyebrow">
                Data & Monitoring
              </div>

              <h3 className="text-2xl font-bold text-wastely-deep sm:text-3xl">
                Monitoring supports decisions. It does not replace them.
              </h3>

              <p className="mt-4 text-sm leading-6 text-wastely-sub">
                Water-quality data can help operators understand changes,
                compare conditions over time and review whether the selected
                treatment approach is addressing the project objective.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Water-quality trend monitoring",
                  "Historical condition review",
                  "Operational observations",
                  "Remote status information where applicable",
                  "Treatment performance review",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-wastely-line pb-4"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-wastely-cyan"
                    />

                    <span className="text-sm text-wastely-sub">
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
          APPLICATIONS
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="flex flex-col gap-5 border-b border-wastely-line pb-8 md:flex-row md:items-end md:justify-between">

            <div className="max-w-2xl">

              <div className="wastely-section-eyebrow">
                Applications
              </div>

              <h2 className="wastely-section-title">
                Algae management across different water environments.
              </h2>

            </div>

            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue"
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
          PROJECT DEFINITION
      ===================================================== */}

      <section className="wastely-section-sm bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <div className="wastely-section-eyebrow">
                Project Definition
              </div>

              <h2 className="text-2xl font-bold leading-tight text-wastely-deep sm:text-3xl">
                Define the control system from the water-body requirement.
              </h2>

              <p className="mt-4 text-sm leading-6 text-wastely-sub">
                The appropriate technology configuration depends on the
                characteristics of the site and the intended treatment
                objective.
              </p>

            </div>

            <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2">

              {projectInputs.map((item, index) => (
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
          TECHNOLOGY HANDOFF
      ===================================================== */}

      <section className="wastely-section-sm bg-white">

        <div className="wastely-container">

          <div className="grid border border-wastely-line bg-white lg:grid-cols-[1.1fr_0.9fr]">

            <div className="relative min-h-[360px]">

              <img
                src={AnalyticsImg}
                alt="Water analytics and algae monitoring"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-wastely-deep/70 to-transparent" />

              <div className="absolute bottom-7 left-7 max-w-md">

                <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-wastely-cyan">
                  Technology Integration
                </div>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Algae control works best as part of the wider water strategy.
                </h2>

              </div>

            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10">

              <div className="wastely-section-eyebrow">
                Technology Handoff
              </div>

              <h3 className="text-2xl font-bold text-wastely-deep">
                Connect the technology with the service around it.
              </h3>

              <p className="mt-4 text-sm leading-6 text-wastely-sub">
                Algae-control equipment is only one part of a successful
                water-body programme. Assessment, process integration,
                operation and maintenance remain important to the overall
                project.
              </p>

              <div className="mt-7 space-y-3">

                {serviceLinks.map((item) => (
                  <Link
                    key={item.title}
                    to={item.to}
                    className="group block border border-wastely-line p-5 transition-colors hover:border-wastely-cyan"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                          {item.eyebrow}
                        </div>

                        <div className="mt-1 text-sm font-bold text-wastely-deep">
                          {item.title}
                        </div>

                        <p className="mt-2 text-xs leading-5 text-wastely-sub">
                          {item.description}
                        </p>

                      </div>

                      <ArrowRight
                        size={17}
                        className="mt-1 shrink-0 text-wastely-blue transition-transform group-hover:translate-x-1"
                      />

                    </div>

                  </Link>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default AlgaeControlSystem;