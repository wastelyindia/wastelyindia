
// # Enterprise LTSD Sludge Drying System Page (Production Ready)

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Factory,
  Flame,
  Gauge,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Waves,
  Zap,
  Building2,
  FlaskConical,
  Cpu,
  Wind,
  Orbit,
  Activity,
  Thermometer,
  BatteryCharging,
  LineChart,
  Workflow,
  Shield,
  Package,
  BarChart3,
} from "lucide-react";

import sludgeHero from "../../assets/images/sludge-dewatering-transformed.png";
import sludgePlant from "../../assets/images/sludge dewatering.png";
import sludgeDryer from "../../assets/images/sludge-dryer.png";
import sludgeGranules from "../../assets/images/sludge-granules.png";

const kpis = [
  {
    value: "4.5kg",
    label: "H₂O / kWh Dehumidification",
  },
  {
    value: "50%",
    label: "Energy Saving",
  },
  {
    value: "80%",
    label: "Weight Reduction",
  },
  {
    value: "67%",
    label: "Volume Reduction",
  },
  {
    value: "80% → 10%",
    label: "Moisture Reduction",
  },
  {
    value: "24/7",
    label: "Autonomous Operation",
  },
];

const processSteps = [
  {
    title: "Sludge Feed",
    desc: "Dewatered sludge enters enclosed LTSD system",
    icon: Droplets,
  },
  {
    title: "Heat Pump Drying",
    desc: "Low temperature thermal drying process begins",
    icon: Thermometer,
  },
  {
    title: "Moisture Extraction",
    desc: "Optimized evaporation and condensation cycle",
    icon: Wind,
  },
  {
    title: "Granule Formation",
    desc: "Stabilized dry sludge granules generated",
    icon: Package,
  },
  {
    title: "Reuse / Disposal",
    desc: "Biofuel, cement or landfill utilization",
    icon: Recycle,
  },
];

const benefits = [
  {
    title: "Industrial Energy Efficiency",
    desc: "Advanced heat pump drying technology reduces operational energy demand by up to 50%.",
    icon: Zap,
  },
  {
    title: "Extreme Volume Reduction",
    desc: "Reduce sludge storage, transportation and landfill requirements significantly.",
    icon: Gauge,
  },
  {
    title: "Closed Cabinet Safety",
    desc: "Fully enclosed low-temperature architecture minimizes odor and environmental exposure.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Automation",
    desc: "24/7 autonomous sludge drying with minimized operator attendance.",
    icon: Cpu,
  },
  {
    title: "Eco-Friendly Operation",
    desc: "Sustainable drying process with reduced emissions and condensate reuse capability.",
    icon: Leaf,
  },
  {
    title: "Circular Reuse Potential",
    desc: "Dry sludge granules suitable for fuel, cement blending and construction applications.",
    icon: Recycle,
  },
];

const industries = [
  {
    title: "Municipal Wastewater",
    icon: Building2,
    points: [
      "Sewage sludge stabilization",
      "Landfill reduction",
      "Centralized sludge management",
    ],
  },
  {
    title: "Industrial Wastewater",
    icon: Factory,
    points: [
      "Chemical sludge drying",
      "Process waste stabilization",
      "Reduced disposal costs",
    ],
  },
  {
    title: "Textile & Dyeing",
    icon: Waves,
    points: [
      "Dye sludge treatment",
      "Reduced moisture content",
      "Safer transportation",
    ],
  },
  {
    title: "Mining & Minerals",
    icon: Activity,
    points: [
      "Tailings drying",
      "Mineral slurry processing",
      "Volume minimization",
    ],
  },
  {
    title: "Pulp & Paper",
    icon: Workflow,
    points: [
      "Paper mill sludge drying",
      "Fiber waste stabilization",
      "Industrial reuse applications",
    ],
  },
  {
    title: "Pharmaceutical",
    icon: FlaskConical,
    points: [
      "Hazardous sludge reduction",
      "Safe enclosed drying",
      "Controlled thermal processing",
    ],
  },
];

const specs = [
  {
    label: "Operating Temperature",
    value: "40°C – 75°C",
  },
  {
    label: "Moisture Reduction",
    value: "80% → 10%",
  },
  {
    label: "Operation Mode",
    value: "24/7 Autonomous",
  },
  {
    label: "Energy Consumption",
    value: "160 kWh/T",
  },
  {
    label: "Technology",
    value: "Heat Pump LTSD",
  },
  {
    label: "Design",
    value: "Closed Cabinet",
  },
  {
    label: "Output",
    value: "Dry Reusable Granules",
  },
  {
    label: "Environmental",
    value: "Low Odor Emission",
  },
];

const reuseCycle = [
  "Biofuel",
  "Cement Blending",
  "Construction Material",
  "Landfill Material",
  "Gasification",
  "Incineration",
];

const SludgeDewateringDrying = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-[180px]" />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid md:grid-cols-2">
          <div
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${sludgeHero})` }}
          >
            <div className="absolute inset-0 bg-[#081219]/85" />
          </div>

          <div
            className="relative hidden md:block bg-cover bg-center"
            style={{ backgroundImage: `url(${sludgeDryer})` }}
          >
            <div className="absolute inset-0 bg-[#081219]/88" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center py-28 md:py-32">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-cyan-300">
                <Flame size={14} />
                LTSD • Thermal Drying • Industrial Sludge Engineering
              </div>

              <h1 className="mt-10 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[90px] font-black leading-[0.9] tracking-[-0.04em]">
                Low Temperature
                <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Sludge Dryer
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-300">
                Industrial low-temperature sludge drying systems engineered for
                sludge stabilization, moisture reduction, sterilization and
                sustainable sludge reutilization.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <Link to="/contact">
                  <button className="group rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-12px_rgba(34,211,238,0.45)]">
                    <span className="flex items-center gap-2">
                      Explore LTSD Systems
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </Link>

                <Link to="/industries">
                  <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                    View Industrial Projects
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
              <div className="relative h-[760px]">
                <div className="absolute left-10 top-12 overflow-hidden rounded-[42px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(34,211,238,0.25)]">
                  <img
                    src={sludgePlant}
                    alt="LTSD System"
                    className="h-[460px] w-[460px] object-cover"
                  />
                </div>

                <div className="absolute right-0 top-0 rounded-[32px] border border-white/10 bg-[#0d1820]/90 p-6 backdrop-blur-2xl w-[280px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Thermometer size={28} />
                    </div>

                    <div>
                      <h4 className="font-bold">Low Temperature Process</h4>
                      <p className="text-sm text-slate-400">
                        Safe enclosed drying
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 rounded-[32px] border border-white/10 bg-[#0d1820]/90 p-6 backdrop-blur-2xl w-[320px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                      <Recycle size={28} />
                    </div>

                    <div>
                      <h4 className="font-bold">Circular Reuse</h4>
                      <p className="text-sm text-slate-400">
                        Fuel • Cement • Construction
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {kpis.map((item, index) => (
              <div
                key={index}
                className="
  rounded-[28px]
  border border-white/10
  bg-white/[0.04]
  p-5 md:p-6
  backdrop-blur-2xl
  text-center
  transition-all duration-500
  hover:-translate-y-1
  hover:border-cyan-400/20
  hover:bg-white/[0.06]
"
              >
                <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              LTSD Working Principle
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
              Thermal Sludge
              <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Transformation Workflow
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="
  group
  relative
  overflow-hidden
  rounded-[32px]
  border border-white/10
  bg-[#0c161d]/90
  p-7 md:p-8
  backdrop-blur-2xl
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

                    <p className="mt-4 text-sm leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-16 overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
  </div>

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">
      <img
        src={sludgeGranules}
        alt="Dried Sludge Reuse"
        className="
          h-[240px]
          sm:h-[320px]
          md:h-[420px]
          w-full
          object-cover
          opacity-70
        "
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#081219]/20 via-transparent to-[#081219]/80" />

      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-white/10 bg-black/20 px-5 py-2 backdrop-blur-xl text-[11px] uppercase tracking-[0.25em] text-cyan-300">
            Circular Resource Recovery
          </div>

          <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-[-0.04em]">
            Transforming Waste Into
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {" "}Reusable Industrial Resources
            </span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c161d] to-[#081219]" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-cyan-400/20 to-emerald-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[42px] border border-white/10">
                <img
                  src={sludgeDryer}
                  alt="LTSD Technology"
                  className="h-[720px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-transparent" />
              </div>
            </div>

            <div>
              <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
                Process Advantages
              </div>

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                Industrial Process
                <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  Optimization Benefits
                </span>
              </h2>

              <div className="mt-14 grid gap-5 md:grid-cols-2">
                {benefits.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="
  group
  rounded-[32px]
  border border-white/10
  bg-white/[0.04]
  p-6 md:p-7
  backdrop-blur-2xl
  transition-all duration-500
  hover:-translate-y-1
  hover:border-cyan-400/20
  hover:bg-white/[0.06]
"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 text-cyan-300">
                        <Icon size={26} />
                      </div>

                      <h3 className="mt-6 text-2xl font-black leading-tight">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-relaxed text-slate-400">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Technical Specifications
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
              Industrial Drying
              <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Engineering Parameters
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {specs.map((item, index) => (
              <div
                key={index}
                className="
  group
  relative
  overflow-hidden
  rounded-[32px]
  border border-white/10
  bg-[#0d1820]/80
  p-7 md:p-8
  backdrop-blur-2xl
  transition-all duration-500
  hover:border-cyan-400/20
  hover:bg-[#101d27]
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-white/5">
            <div className="absolute inset-0">
              <img
                src={sludgeGranules}
                alt="Reuse"
                className="h-full w-full object-cover opacity-20"
              />

              <div className="absolute inset-0 bg-[#081219]/92" />
            </div>

            <div className="relative z-10 px-8 py-20 md:px-20 md:py-24">
              <div className="max-w-5xl mx-auto text-center">
                <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
                  Circular Sludge Reuse
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                  From Wet Sludge
                  <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                    To Reusable Resources
                  </span>
                </h2>
              </div>

              <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {reuseCycle.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="rounded-[30px] border border-white/10 bg-[#0d1820]/80 p-8 backdrop-blur-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 text-cyan-300">
                        <Recycle size={26} />
                      </div>

                      <h3 className="text-2xl font-black">{item}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Industrial Applications
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
              Multi Industry
              <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Sludge Processing Solutions
              </span>
            </h2>
          </div>

          <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
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
    </div>
  );
};

export default SludgeDewateringDrying;
