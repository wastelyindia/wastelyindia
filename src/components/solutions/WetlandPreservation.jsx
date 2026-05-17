
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  Cpu,
  Database,
  Droplets,
  Gauge,
  Globe2,
  Network,
  Radar,
  Satellite,
  ScanLine,
  Sparkles,
  Waves,
  Workflow,
  Factory,
  ShieldCheck,
} from "lucide-react";

// HERO / BACKGROUND IMAGES
import HeroBg from "../../assets/images/water-body-hero.png";
import DashboardImg from "../../assets/images/dashboard-water.png";
import SmartCityImg from "../../assets/images/smart-city-water.png";
import ReservoirImg from "../../assets/images/reservoir-water.png";
import CanalImg from "../../assets/images/canal-water.png";
import RiverImg from "../../assets/images/river-restoration.png";
import MPCBuoyImg from "../../assets/images/mpc-buoy.png";

const heroStats = [
  {
    value: "800m",
    label: "Monitoring Radius",
  },
  {
    value: "95%",
    label: "Algae Reduction",
  },
  {
    value: "24/7",
    label: "IoT Monitoring",
  },
  {
    value: "Real-Time",
    label: "Analytics",
  },
];

const executionCards = [
  {
    title: "Municipal Restoration",
    description:
      "Large-scale restoration systems for urban lakes, canals, rivers and public reservoirs.",
    icon: Building2,
  },
  {
    title: "Smart City Water Systems",
    description:
      "Integrated restoration infrastructure with automation, IoT monitoring and analytics.",
    icon: Cpu,
  },
  {
    title: "Industrial Rehabilitation",
    description:
      "Water quality restoration for industrial ponds, cooling systems and process reservoirs.",
    icon: Factory,
  },
  {
    title: "Reservoir Infrastructure",
    description:
      "Advanced oxygenation, algae control and ecosystem balancing for large water surfaces.",
    icon: Waves,
  },
];

const waterBodies = [
  {
    title: "Rivers",
    image: RiverImg,
  },
  {
    title: "Urban Canals",
    image: CanalImg,
  },
  {
    title: "Reservoirs",
    image: ReservoirImg,
  },
  {
    title: "Smart Lakes",
    image: HeroBg,
  },
];

const workflow = [
  "Site Survey",
  "Water Quality Analysis",
  "DPR & Engineering Design",
  "Technology Selection",
  "SITC Execution",
  "Commissioning",
  "IoT Integration",
  "Monitoring & Analytics",
  "3-Year DLP Support",
];

const automationSystems = [
  {
    title: "MPC Buoy",
    description:
      "Solar-powered floating system combining real-time water quality monitoring and ultrasonic algae control.",
    icon: Radar,
  },
  {
    title: "IoT Monitoring",
    description:
      "Continuous live monitoring of DO, pH, temperature, turbidity and chlorophyll.",
    icon: Activity,
  },
  {
    title: "Predictive Analytics",
    description:
      "AI-assisted algae bloom prediction using historical and real-time environmental data.",
    icon: Database,
  },
  {
    title: "Real-Time Dashboards",
    description:
      "Integrated analytics platform with alerts, visualization and automated reporting systems.",
    icon: BarChart3,
  },
];

const sensors = [
  "Dissolved Oxygen",
  "pH",
  "Turbidity",
  "Temperature",
  "Chlorophyll α",
  "Phycocyanin",
];

const mpcFeatures = [
  "Solar Powered",
  "Ultrasonic Algae Control",
  "Real-Time Monitoring",
  "Predictive Analytics",
  "4G / Satellite Communication",
  "Autonomous Operation",
  "800m Treatment Diameter",
];

const WaterInfrastructure = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* GLOBAL GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src={HeroBg}
      alt="Water Infrastructure"
      loading="lazy"
      className="h-full w-full object-cover opacity-30"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#081219] via-[#081219]/90 to-[#081219]/60" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-[#081219]/40" />
  </div>

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid min-h-[100svh] items-center gap-14 py-28 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl text-[11px] uppercase tracking-[0.25em] text-cyan-300">
          <Sparkles size={14} />
          Municipal • Smart City • Industrial Restoration
        </div>

        <h1 className="mt-10 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[88px] font-black leading-[0.9] tracking-[-0.04em]">
          Smart Water
          <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            Infrastructure &
          </span>
          Restoration Systems
        </h1>

        <p className="mt-8 max-w-3xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
          Integrated engineering solutions for rivers, canals,
          reservoirs, urban lakes and industrial water bodies powered by
          restoration technologies, automation, IoT monitoring and
          predictive analytics.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="
              group
              inline-flex items-center justify-center gap-3
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-emerald-400
              px-8 md:px-9
              py-4
              text-sm md:text-base
              font-semibold
              text-black
              transition-all duration-500
              hover:-translate-y-1
              hover:scale-[1.03]
              shadow-[0_10px_40px_-12px_rgba(34,211,238,0.45)]
              hover:shadow-[0_20px_70px_-18px_rgba(34,211,238,0.55)]
            "
          >
            Start Infrastructure Project

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/industries"
            className="
              rounded-full
              border border-white/10
              bg-white/5
              px-8
              py-4
              backdrop-blur-xl
              transition-all duration-500
              hover:-translate-y-1
              hover:border-cyan-400/30
              hover:bg-white/[0.08]
            "
          >
            Explore Systems
          </Link>
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {heroStats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="
                rounded-[28px]
                border border-white/10
                bg-white/[0.04]
                p-5 md:p-6
                backdrop-blur-xl
                transition-all duration-500
                hover:border-cyan-400/20
                hover:bg-white/[0.06]
              "
            >
              <h3 className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-3xl md:text-4xl font-black text-transparent">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT DASHBOARD */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="relative hidden lg:block"
      >
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 blur-3xl" />

        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0b1620]/80 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]">
          <img
            src={DashboardImg}
            alt="Analytics Dashboard"
            loading="lazy"
            className="h-[760px] w-full object-cover opacity-90"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-transparent" />

          {/* FLOATING CARD 1 */}
          <div className="absolute left-6 top-6 rounded-3xl border border-white/10 bg-[#0b1620]/80 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Activity className="text-cyan-300" size={24} />

              <div>
                <h4 className="font-bold">Live Monitoring</h4>

                <p className="text-sm text-slate-400">
                  Real-time sensor data
                </p>
              </div>
            </div>
          </div>

          {/* FLOATING CARD 2 */}
          <div className="absolute bottom-6 right-6 rounded-3xl border border-white/10 bg-[#0b1620]/80 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Database className="text-emerald-300" size={24} />

              <div>
                <h4 className="font-bold">AI Analytics</h4>

                <p className="text-sm text-slate-400">
                  Predictive insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* EXECUTION */}
      <section className="relative py-24 md:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl">
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
        Large Scale Execution
      </div>

      <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
        Engineering Infrastructure
        <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Restoration Projects
        </span>
      </h2>
    </div>

    <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {executionCards.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border border-white/10
              bg-white/[0.04]
              p-7 md:p-8
              backdrop-blur-xl
              transition-all duration-500
              hover:border-cyan-400/20
              hover:bg-white/[0.06]
            "
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

            <div className="relative z-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Icon size={36} />
              </div>

              <h3 className="mt-10 text-3xl font-black leading-tight">
                {item.title}
              </h3>

              <p className="mt-5 leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      {/* WATER BODIES */}
      <section className="relative py-24 md:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {waterBodies.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className="
            group
            relative
            overflow-hidden
            rounded-[36px]
            border border-white/10
            bg-white/[0.04]
            min-h-[420px]
            md:min-h-[520px]
          "
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-[#081219]/40 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-end p-8">
            <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
              Infrastructure
            </div>

            <h3 className="mt-6 text-3xl md:text-4xl font-black">
              {item.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* WORKFLOW */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
              Restoration Workflow
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
              Engineering Execution
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Lifecycle
              </span>
            </h2>
          </div>

          <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="absolute right-[-20px] top-[-20px] text-[120px] font-black text-white/[0.03]">
                  {index + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Workflow size={28} />
                  </div>

                  <h3 className="mt-8 text-3xl font-black leading-tight">
                    {step}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MONITORING */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="relative z-10 px-6 py-20 md:px-16 md:py-24">
              <div className="max-w-5xl">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                  Monitoring & Automation
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                  AI Powered Monitoring
                  <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    & Automation Systems
                  </span>
                </h2>
              </div>

              <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {automationSystems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6 }}
                      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1620]/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/20"
                    >
                      <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

                      <div className="relative z-10">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                          <Icon size={28} />
                        </div>

                        <h3 className="mt-8 text-2xl font-black leading-tight">
                          {item.title}
                        </h3>

                        <p className="mt-5 leading-relaxed text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* SENSOR METRICS */}
              <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {sensors.map((sensor, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Gauge size={24} />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold">
                        {sensor}
                      </h4>

                      <p className="text-sm text-slate-400">
                        Real-time monitored parameter
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MPC BUOY */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10">
                <img
                  src={MPCBuoyImg}
                  alt="MPC Buoy"
                  className="h-[700px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                MPC Buoy System
              </div>

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                Monitor, Predict &
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Control Water Ecosystems
                </span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-400">
                Advanced floating monitoring platform integrating real-time
                analytics, algae prediction, ultrasonic treatment and smart
                communication infrastructure.
              </p>

              <div className="mt-12 space-y-5">
                {mpcFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <div className="mt-1 text-cyan-300">
                      <ShieldCheck size={20} />
                    </div>

                    <p className="text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SMART CITY */}
      <section className="relative pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/5">
            <div className="absolute inset-0">
              <img
                src={SmartCityImg}
                alt="Smart City Water Systems"
                className="h-full w-full object-cover opacity-25"
              />

              <div className="absolute inset-0 bg-[#081219]/85" />
            </div>

            <div className="relative z-10 px-8 py-20 md:px-20 md:py-24">
              <div className="max-w-5xl">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                  Smart Infrastructure
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                  Smart City Water
                  <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Infrastructure Systems
                  </span>
                </h2>

                <p className="mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400">
                  Integrated restoration infrastructure for smart cities,
                  municipal corporations, urban development authorities and
                  industrial ecosystems.
                </p>

                {/* GRID */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    {
                      icon: Globe2,
                      title: "Urban Water Systems",
                    },
                    {
                      icon: Network,
                      title: "Connected Monitoring",
                    },
                    {
                      icon: Satellite,
                      title: "Remote Analytics",
                    },
                    {
                      icon: ScanLine,
                      title: "Predictive Intelligence",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                          <Icon size={28} />
                        </div>

                        <h3 className="mt-6 text-2xl font-black">
                          {item.title}
                        </h3>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="mt-16 flex flex-wrap gap-5">
                  <Link to="/contact">
                    <button className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-12px_rgba(14,165,233,0.45)]">
                      Discuss Infrastructure Project
                    </button>
                  </Link>

                  {/* <Link to="/projects">
                    <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                      View Case Studies
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterInfrastructure;