

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BatteryCharging,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Droplets,
  Gauge,
  Globe,
  Leaf,
  Orbit,
  Radar,
  Radio,
  Satellite,
  ShieldCheck,
  Sparkles,
  Sun,
  Waves,
  Wind,
  Database,
  LineChart,
  Wifi,
  Factory,
  Building2,
  FlaskConical,
  Workflow,
  TimerReset,
  Cloud,
  Shield,
} from "lucide-react";

import HeroImg from "../../assets/images/algae-hero.png";
import BuoyImg from "../../assets/images/algae-buoy.png";
import DashboardImg from "../../assets/images/algae-dashboard.png";
import AnalyticsImg from "../../assets/images/algae-analytics.png";

const kpis = [
  {
    value: "95%",
    label: "Algae Reduction",
  },
  {
    value: "800m",
    label: "Coverage Diameter",
  },
  {
    value: "24/7",
    label: "Autonomous Monitoring",
  },
  {
    value: "0",
    label: "Chemical Dependency",
  },
  {
    value: "10+ Years",
    label: "Water Intelligence Data",
  },
  {
    value: "Solar",
    label: "Energy Powered",
  },
];

const monitoringCards = [
  {
    title: "Chlorophyll α Monitoring",
    desc: "Real-time chlorophyll analysis for green algae bloom detection and ecosystem monitoring.",
    icon: Activity,
  },
  {
    title: "Phycocyanin Detection",
    desc: "Continuous cyanobacteria monitoring for harmful algae bloom prediction and prevention.",
    icon: Waves,
  },
  {
    title: "Dissolved Oxygen & pH",
    desc: "Industrial-grade water chemistry monitoring for ecological balance optimization.",
    icon: Gauge,
  },
  {
    title: "Turbidity Intelligence",
    desc: "Suspended solids and water clarity analytics for advanced treatment optimization.",
    icon: Droplets,
  },
];

const features = [
  {
    title: "Adaptive Ultrasonic Control",
    desc: "AI-optimized ultrasonic modulation dynamically adapts frequency, waveform and amplitude to changing algae conditions.",
    icon: Radio,
  },
  {
    title: "Predictive Analytics Engine",
    desc: "Advanced bloom prediction powered by historical water intelligence and real-time sensor telemetry.",
    icon: BrainCircuit,
  },
  {
    title: "Solar Autonomous Platform",
    desc: "Industrial solar-powered floating architecture designed for remote 24/7 autonomous operation.",
    icon: Sun,
  },
  {
    title: "Industrial Sensor Network",
    desc: "Integrated environmental sensor systems continuously monitoring water quality parameters.",
    icon: Radar,
  },
];

const workflow = [
  {
    title: "Monitor",
    desc: "Real-time sensor data acquisition",
    icon: Radar,
  },
  {
    title: "Analyze",
    desc: "AI-powered ecological analysis",
    icon: Database,
  },
  {
    title: "Predict",
    desc: "Forecast harmful algae blooms",
    icon: LineChart,
  },
  {
    title: "Control",
    desc: "Adaptive ultrasonic response",
    icon: Radio,
  },
  {
    title: "Restore",
    desc: "Ecological water recovery",
    icon: Leaf,
  },
];

const sectors = [
  {
    title: "Drinking Water Reservoirs",
    icon: Droplets,
    points: [
      "Reduce odor and taste issues",
      "Lower chemical consumption",
      "Improve drinking water quality",
    ],
  },
  {
    title: "Cooling Ponds",
    icon: Wind,
    points: [
      "Improve cooling efficiency",
      "Reduce biological fouling",
      "Enhance operational reliability",
    ],
  },
  {
    title: "Wastewater Ponds",
    icon: Factory,
    points: [
      "Reduce TSS and BOD levels",
      "Control harmful blooms",
      "Lower treatment complexity",
    ],
  },
  {
    title: "Hydroelectric Dams",
    icon: Building2,
    points: [
      "Improve water clarity",
      "Reduce maintenance burden",
      "Minimize chemical dependency",
    ],
  },
  {
    title: "Urban Lakes",
    icon: Globe,
    points: [
      "Restore ecological balance",
      "Reduce public odor complaints",
      "Prevent toxic bloom formation",
    ],
  },
  {
    title: "Irrigation Reservoirs",
    icon: Workflow,
    points: [
      "Prevent pipe clogging",
      "Improve irrigation reliability",
      "Reduce algae contamination",
    ],
  },
];

const specifications = [
  {
    label: "Coverage Diameter",
    value: "800m",
  },
  {
    label: "Solar Panels",
    value: "3x 250Wp",
  },
  {
    label: "Battery",
    value: "24V Lithium LiFePO4",
  },
  {
    label: "Communication",
    value: "4G / Satellite / LAN",
  },
  {
    label: "Protection",
    value: "IP68",
  },
  {
    label: "Frame",
    value: "UV Resistant HDPE",
  },
  {
    label: "Sensors",
    value: "DO / pH / Turbidity / Chlorophyll",
  },
  {
    label: "Operation",
    value: "24/7 Autonomous",
  },
];

const roiItems = [
  "Reduce chemical treatment costs",
  "Lower manual maintenance requirements",
  "Minimize odor and complaint incidents",
  "Improve operational efficiency",
  "Reduce recurring algae blooms",
  "Improve environmental compliance",
];

const analyticsFeatures = [
  "Real-time algae bloom prediction",
  "Integrated cloud analytics",
  "Historical trend intelligence",
  "Remote diagnostics and alerts",
  "Automated ultrasonic optimization",
  "Multi-site water monitoring",
];

const AlgaeControlSystem = () => {
  return (
    <div className="relative overflow-hidden bg-[#050b12] text-white">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15)_0,transparent_45%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_100%,80px_80px,80px_80px]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[5%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[0%] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-[180px]" />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HeroImg}
            alt="Hero"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center opacity-35 scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050b12] via-[#050b12]/90 to-[#050b12]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b12] via-transparent to-[#050b12]/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center py-32">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl ttext-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-cyan-300">
                <Satellite size={14} />
                AI Monitoring • Ultrasonic Control • MPC-Buoy Technology
              </div>

              <h1 className="mt-10 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[92px] font-black leading-[0.9] tracking-[-0.04em]">
                Autonomous
                <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                  Algae Control
                </span>
                Platform
              </h1>

              <p className="mt-8 max-w-3xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-300">
                Industrial-grade floating MPC-Buoy systems combining real-time
                environmental monitoring, predictive analytics and adaptive
                ultrasonic treatment for large-scale water restoration.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <Link to="/technologies">
                  <button className="group w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_-12px_rgba(34,211,238,0.45)] w-full sm:w-auto">
                    <span className="flex items-center gap-2">
                      Explore Solutions
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </Link>

                <Link to="/projects">
                  <button className="w-full sm:w-auto rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 w-full sm:w-auto">
                    View Deployments
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[680px]">
                <div className="absolute left-10 top-10 overflow-hidden rounded-[40px] border border-white/10 bg-[#0b1620]/80 backdrop-blur-2xl shadow-[0_0_50px_-20px_rgba(34,211,238,0.18)]">
                  <img
                    src={BuoyImg}
                    alt="MPC Buoy"
                    loading="lazy"
decoding="async"
                    className="h-[460px] w-[460px] object-cover"
                  />
                </div>

                <div className="absolute right-0 top-0 rounded-[32px] border border-white/10 bg-[#0d1820]/90 p-6 backdrop-blur-xl w-[280px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <BrainCircuit size={28} />
                    </div>

                    <div>
                      <h4 className="font-bold">Predictive Analytics</h4>
                      <p className="text-sm text-slate-400">
                        Real-time bloom forecasting
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute right-10 bottom-10 rounded-[32px] border border-white/10 bg-[#0d1820]/90 p-6 backdrop-blur-xl w-[320px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                      <Radar size={28} />
                    </div>

                    <div>
                      <h4 className="font-bold">Industrial Sensors</h4>
                      <p className="text-sm text-slate-400">
                        pH • DO • Chlorophyll • Turbidity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative -mt-10 z-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {kpis.map((item, index) => (
              <div
                key={index}
                className="
  rounded-[28px]
  border border-white/10
  bg-white/[0.04]
  p-5 md:p-6
  text-center
  backdrop-blur-xl
  transition-all duration-500
  hover:border-cyan-400/20
  hover:bg-white/[0.06]
"
              >
                <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Intelligent Monitoring
            </div>

            <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
              Real-Time Water
              <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Quality Intelligence
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {monitoringCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10" />

                  <div className="relative z-10">
                    <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 text-cyan-300">
                      <Icon size={34} />
                    </div>

                    <h3 className="mt-10 text-3xl font-black leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#081119] to-[#050b12]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
              Adaptive Ultrasonic Intelligence
            </div>

            <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
              How The Ultrasonic
              <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Ecosystem Works
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="
  relative
  overflow-hidden
  rounded-[32px]
  border border-white/10
  bg-[#0d1820]/80
  p-7 md:p-8
  text-center
  backdrop-blur-xl
  transition-all duration-500
  hover:-translate-y-1
  hover:border-cyan-400/20
"
                >
                  <div className="absolute right-[-10px] top-[-10px] text-[80px] font-black text-white/[0.03]">
                    {index + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 text-cyan-300">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="relative">
              <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-cyan-400/20 to-emerald-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[42px] border border-white/10">
                <img
                  src={DashboardImg}
                  alt="Dashboard"
                  loading="lazy"
decoding="async"
                  className="h-[420px] sm:h-[520px] md:h-[720px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050b12] via-transparent to-transparent" />
              </div>
            </div>

            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                MPC-View Analytics
              </div>

              <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
                Predictive
                <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  Water Intelligence
                </span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-400">
                Enterprise-grade monitoring and analytics software providing
                historical trends, real-time ecological insights and adaptive
                ultrasonic optimization.
              </p>

              <div className="mt-14 space-y-5">
                {analyticsFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <div className="mt-1 text-cyan-300">
                      <CheckCircle2 size={20} />
                    </div>

                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Engineering Specifications
            </div>

            <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
              Industrial-Grade
              <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Technical Architecture
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {specifications.map((item, index) => (
              <div
                key={index}
                className="
  rounded-[32px]
  border border-white/10
  bg-[#0d1820]/80
  p-7 md:p-8
  backdrop-blur-xl
  transition-all duration-500
  hover:border-cyan-400/20
"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>

                <h3 className="mt-4 text-2xl font-black leading-tight text-white">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
              Industrial Applications
            </div>

            <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
              Large Scale
              <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Water Infrastructure
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="
  group
  relative
  overflow-hidden
  rounded-[36px]
  border border-white/10
  bg-white/[0.04]
  p-7 md:p-8
  backdrop-blur-xl
  transition-all duration-500
  hover:-translate-y-1
  hover:border-cyan-400/20
  hover:bg-white/[0.06]
"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10" />

                  <div className="relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 text-cyan-300">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-8 text-3xl font-black leading-tight">
                      {item.title}
                    </h3>

                    <div className="mt-6 space-y-4">
                      {item.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-1 text-cyan-300"
                          />

                          <p className="text-slate-400">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[40px] md:rounded-[48px] border border-white/10 bg-white/[0.04]">
            <div className="absolute inset-0">
              <img
                src={AnalyticsImg}
                alt="ROI"
                loading="lazy"
decoding="async"
                className="h-full w-full object-cover opacity-15"
              />

              <div className="absolute inset-0 bg-[#050b12]/92" />
            </div>

            <div className="relative z-10 px-5 sm:px-8 py-16 md:px-20 md:py-24">
              <div className="text-center max-w-5xl mx-auto">
                <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                  Operational ROI
                </div>

                <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
                  Reduce Operational Costs
                  <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                    While Restoring Ecosystems
                  </span>
                </h2>
              </div>

              <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {roiItems.map((item, index) => (
                  <div
                    key={index}
                    className="
  rounded-[28px]
  border border-white/10
  bg-[#0d1820]/80
  p-5 md:p-6
  backdrop-blur-xl
  transition-all duration-500
  hover:border-cyan-400/20
"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 text-cyan-300">
                        <ShieldCheck size={24} />
                      </div>

                      <div>
                        <p className="text-lg font-semibold leading-relaxed text-slate-300">
                          {item}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlgaeControlSystem;
