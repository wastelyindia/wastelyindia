
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Leaf,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

import WasteWater from "../../assets/images/wasteWaterSolution.png";

const solutions = [
  {
    title: "Industrial Wastewater",
    description:
      "High-efficiency treatment systems engineered for complex industrial discharge and compliance.",
    icon: Factory,
  },
  {
    title: "Municipal Sewage",
    description:
      "Scalable smart infrastructure for urban wastewater management and water recovery.",
    icon: Building2,
  },
  {
    title: "Resource Recovery",
    description:
      "Transform wastewater into reusable water, energy, and sustainable by-products.",
    icon: Leaf,
  },
];

const technologies = [
  "SBR • CYCLOPUR®",
  "MBR • MARAPUR®",
  "BIOPUR® Biofiltration",
  "MBBR & IFAS",
  "Nereda® Technology",
  "Advanced Oxidation",
];

const stats = [
  {
    value: "30M+",
    label: "Liters Treated Daily",
  },
  {
    value: "99%",
    label: "Compliance Efficiency",
  },
  {
    value: "24/7",
    label: "Monitoring Systems",
  },
  {
    value: "Smart",
    label: "Automation Ready",
  },
];

const WasteWaterTreatment = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-[-120px] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-[-180px] right-[-100px] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              {/* Label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                <Sparkles size={14} />
                Sustainable Water Solutions
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[6rem] font-black leading-[0.9] tracking-[-0.04em]">
                Advanced
                <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Wastewater
                </span>
                Treatment Systems
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
                Intelligent wastewater infrastructure engineered for
                sustainability, compliance, and resource recovery using
                next-generation treatment technologies.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
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
                  Request Consultation
                </Link>

                <Link
                  to="/technologies"
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
                  Explore Technologies
                </Link>
              </div>

              {/* TRUST STATS */}
              <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="
                      group
                      rounded-[28px]
                      border border-white/10
                      bg-white/[0.04]
                      p-5 md:p-6
                      backdrop-blur-2xl
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-cyan-400/20
                      hover:bg-white/[0.06]
                    "
                  >
                    <h3 className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-3xl font-black text-transparent">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-3xl" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]">
                <img
                  src={WasteWater}
                  alt="Wastewater Treatment Plant"
                  loading="lazy"
                  className="
                    h-[420px]
                    sm:h-[520px]
                    md:h-[640px]
                    xl:h-[760px]
                    w-full
                    object-cover
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-[#081219]/20 to-transparent" />
              </div>

              {/* Floating Panel */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-6
                  left-6
                  hidden
                  rounded-[28px]
                  border border-white/10
                  bg-[#0b1620]/80
                  p-6
                  backdrop-blur-2xl
                  shadow-[0_0_50px_-12px_rgba(16,185,129,0.35)]
                  md:block
                  lg:-left-8
                "
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Gauge size={28} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                      Efficiency
                    </p>

                    <h3 className="mt-1 text-3xl font-black">
                      High Performance
                    </h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLIENT-FOCUSED SOLUTIONS */}
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
                Industry Solutions
              </div>

              <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
                Engineered for
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Industrial & Municipal Needs
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
              Customized wastewater treatment systems designed for
              sustainability, operational reliability, and environmental
              compliance.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid gap-6 lg:grid-cols-3">
            {solutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border border-white/10
                    bg-white/5
                    p-8 md:p-10
                    backdrop-blur-2xl
                    transition-all duration-500
                    hover:border-cyan-400/20
                    hover:bg-white/[0.07]

                    before:absolute
                    before:inset-0
                    before:bg-gradient-to-br
                    before:from-cyan-400/[0.03]
                    before:to-emerald-400/[0.02]
                    before:opacity-0
                    before:transition-all
                    before:duration-700
                    hover:before:opacity-100
                  "
                >
                  {/* Glow */}
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                  <div className="relative z-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon size={36} />
                    </div>

                    <h3 className="mt-10 text-3xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-relaxed text-slate-400">
                      {item.description}
                    </p>

                    <button className="mt-10 inline-flex items-center gap-2 text-cyan-300 transition-all duration-300 group-hover:gap-3">
                      Discover Solution
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STRIP */}
      <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-10 backdrop-blur-xl">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 whitespace-nowrap will-change-transform"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
            >
              <BadgeCheck className="text-cyan-300" size={18} />

              <span className="text-lg font-medium text-slate-200">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* FEATURE SECTION */}
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT PANEL */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-7 sm:p-8 md:p-10 backdrop-blur-2xl"
            >
              <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <BrainCircuit size={38} />
                </div>

                <h3 className="mt-10 text-4xl font-black leading-tight">
                  Smart Water Recovery & Resource Optimization
                </h3>

                <p className="mt-6 leading-relaxed text-slate-400">
                  Wastely Aqua integrates automation, advanced membrane
                  systems, and intelligent monitoring to maximize treatment
                  efficiency while minimizing environmental impact.
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    "AI-assisted operational monitoring",
                    "Advanced membrane filtration",
                    "Micro-pollutant elimination",
                    "Energy-efficient treatment systems",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
                        flex items-start gap-4
                        rounded-[24px]
                        border border-white/10
                        bg-[#0b1620]/70
                        p-5
                        transition-all duration-500
                        hover:border-cyan-400/20
                        hover:bg-[#0f1b26]/80
                      "
                    >
                      <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />

                      <p className="text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                Why Wastely Aqua
              </div>

              <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
                Modern Infrastructure.
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Sustainable Results.
                </span>
              </h2>

              <p className="mt-8 text-base leading-relaxed text-slate-400 md:text-lg">
                Our solutions are built to help industries and municipalities
                achieve regulatory compliance, operational stability, and
                long-term water sustainability through innovative engineering.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Environmental Compliance",
                  },
                  {
                    icon: FlaskConical,
                    title: "Advanced Treatment Systems",
                  },
                  {
                    icon: Droplets,
                    title: "Water Reuse & Recovery",
                  },
                  {
                    icon: Waves,
                    title: "Scalable Infrastructure",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="
                        rounded-[28px]
                        border border-white/10
                        bg-white/5
                        p-6
                        backdrop-blur-xl
                        transition-all duration-500
                        hover:-translate-y-1
                        hover:border-cyan-400/20
                      "
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon size={26} />
                      </div>

                      <h3 className="mt-5 text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-24 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 px-6 sm:px-8 py-16 md:px-20 md:py-20 text-center backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                Wastely Aqua
              </div>

              <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
                Let’s Build Smarter
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Wastewater Infrastructure
                </span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-slate-400 md:text-lg">
                Future-ready wastewater solutions designed for performance,
                sustainability, and long-term operational excellence.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-emerald-400
                    px-8
                    py-4
                    font-semibold
                    text-black
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:scale-[1.03]
                    shadow-[0_10px_40px_-12px_rgba(34,211,238,0.45)]
                    hover:shadow-[0_20px_70px_-18px_rgba(34,211,238,0.55)]
                  "
                >
                  Talk to Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WasteWaterTreatment;