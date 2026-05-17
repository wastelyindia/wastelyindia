import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

import membraneVideo from "../../assets/video/membrane.mp4";

import ifasHero from "../../assets/images/IFAS.jpg";
import membranePlant from "../../assets/images/membrane-plant.png";
import membraneSystem from "../../assets/images/membrane-system.png";

const membraneTechnologies = [
  {
    title: "Microfiltration",
    desc: "Low-pressure membrane separation engineered for suspended solids and particulate removal.",
    icon: Droplets,
  },
  {
    title: "Ultrafiltration",
    desc: "Advanced filtration systems removing bacteria, viruses, and microscopic contaminants.",
    icon: ShieldCheck,
  },
  {
    title: "Nanofiltration",
    desc: "Selective ion and dissolved organic compound separation technology.",
    icon: FlaskConical,
  },
  {
    title: "Reverse Osmosis",
    desc: "High-purity membrane systems for industrial reuse and advanced water recovery.",
    icon: Cpu,
  },
];

const benefits = [
  "Superior effluent quality",
  "Compact treatment footprint",
  "Reduced sludge production",
  "High biological stability",
  "Shock load resistance",
  "Industrial scalability",
];

const systemMetrics = [
  {
    value: "99%",
    label: "Effluent Clarity",
  },
  {
    value: "40%",
    label: "Reduced Footprint",
  },
  {
    value: "24/7",
    label: "Operational Reliability",
  },
  {
    value: "2X",
    label: "Biological Efficiency",
  },
];

const comparisonTable = [
  {
    feature: "Treatment Process",
    ifas: "Activated sludge + biofilm",
    mbr: "Membrane separation",
  },
  {
    feature: "Effluent Quality",
    ifas: "High",
    mbr: "Very High",
  },
  {
    feature: "Footprint",
    ifas: "Moderate",
    mbr: "Compact",
  },
  {
    feature: "Maintenance",
    ifas: "Moderate",
    mbr: "Advanced",
  },
  {
    feature: "Industrial Reuse",
    ifas: "Partial",
    mbr: "Excellent",
  },
];

const IFASMembrane = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* AMBIENT */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
  initial={{ scale: 1.08 }}
  animate={{ scale: 1 }}
  transition={{ duration: 8 }}
  className="absolute inset-0"
>
          <img
            src={ifasHero}
            alt="IFAS Membrane Technology"
            loading="lazy"
            className="h-full w-full object-cover opacity-45 scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#081219] via-[#081219]/78 to-[#081219]/35" />

          <div className="absolute inset-0 bg-cyan-500/[0.05] mix-blend-screen" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-[#081219]/30" />
        </motion.div>

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
                IFAS • MBR • Membrane Engineering
              </div>

              <h1 className="mt-10 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[88px] font-black leading-[0.9] tracking-[-0.04em]">
                Intelligent
                <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  IFAS & Membrane
                </span>
                Systems
              </h1>

              <p className="mt-8 max-w-3xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
                Advanced biological and membrane treatment technologies
                engineered for wastewater optimization, industrial reuse,
                high-efficiency filtration and sustainable water recovery.
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  to="/technologies"
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
                  Explore Technology

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/contact"
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
                  Contact Experts
                </Link>
              </div>

              {/* METRICS */}
              <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
                {systemMetrics.map((item, index) => (
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

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-[#0b1620]/80 backdrop-blur-2xl">
                <img
                  src={membranePlant}
                  alt="Membrane Facility"
                  loading="lazy"
                  className="h-[760px] w-full object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-transparent" />

                {/* CARD 1 */}
                <div className="absolute left-6 top-6 rounded-3xl border border-white/10 bg-[#0b1620]/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <Database className="text-cyan-300" size={24} />

                    <div>
                      <h4 className="font-bold">
                        Smart Filtration
                      </h4>

                      <p className="text-sm text-slate-400">
                        Intelligent separation
                      </p>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="absolute bottom-6 right-6 rounded-3xl border border-white/10 bg-[#0b1620]/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <Gauge className="text-emerald-300" size={24} />

                    <div>
                      <h4 className="font-bold">
                        High Purity Output
                      </h4>

                      <p className="text-sm text-slate-400">
                        Advanced reuse quality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY FLOW */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10">
                <video
                  controls
                  className="h-[320px] sm:h-[420px] md:h-[620px] w-full object-cover"
                >
                  <source src={membraneVideo} type="video/mp4" />
                </video>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
                Biological + Membrane Engineering
              </div>

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                Hybrid Wastewater
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Treatment Architecture
                </span>
              </h2>

              <p className="mt-8 text-base md:text-lg leading-relaxed text-slate-400">
                IFAS systems enhance biological performance while
                membrane separation technologies provide superior
                contaminant removal and premium effluent quality.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex items-start gap-4
                      rounded-[24px]
                      border border-white/10
                      bg-white/[0.04]
                      p-5
                      backdrop-blur-xl
                      transition-all duration-500
                      hover:border-cyan-400/20
                      hover:bg-white/[0.06]
                    "
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-cyan-300"
                    />

                    <p className="text-sm text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MEMBRANE CARDS */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADING */}
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Membrane Technologies
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
              Precision
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Water Separation
              </span>
            </h2>
          </div>

          {/* BENTO STYLE */}
          <div className="mt-20 grid gap-6 lg:grid-cols-12">
            {membraneTechnologies.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border border-white/10
                    bg-white/[0.04]
                    p-7 md:p-9
                    backdrop-blur-2xl
                    transition-all duration-500
                    hover:border-cyan-400/20
                    hover:bg-white/[0.06]

                    ${
                      index === 0
                        ? "lg:col-span-7"
                        : index === 1
                        ? "lg:col-span-5"
                        : index === 2
                        ? "lg:col-span-5"
                        : "lg:col-span-7"
                    }
                  `}
                >
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

                  <div className="relative z-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      {/* {Icon} */}
                      <Icon size={38} />
                    </div>

                    <h3 className="mt-10 text-3xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISUAL TRANSITION */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">
            <img
              src={membraneSystem}
              alt="Membrane Systems"
              loading="lazy"
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
                  Sustainable Water Reuse
                </div>

                <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-[-0.04em]">
                  Engineering
                  <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    {" "}Advanced Water Recovery
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
              Treatment Analysis
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
              IFAS vs
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Membrane Systems
              </span>
            </h2>
          </div>

          {/* TABLE */}
          <div className="mt-20 overflow-x-auto rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">
            <table className="w-full min-w-[760px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-left text-lg font-bold text-white">
                    Feature
                  </th>

                  <th className="p-6 text-left text-lg font-bold text-cyan-300">
                    IFAS
                  </th>

                  <th className="p-6 text-left text-lg font-bold text-emerald-300">
                    MBR
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 transition-all duration-300 hover:bg-white/[0.04]"
                  >
                    <td className="p-6 font-semibold text-white">
                      {row.feature}
                    </td>

                    <td className="p-6 text-slate-300">
                      {row.ifas}
                    </td>

                    <td className="p-6 text-slate-300">
                      {row.mbr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IFASMembrane;