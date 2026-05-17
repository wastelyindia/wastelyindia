import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Beaker,
  Droplets,
  Filter,
  ShieldCheck,
  Waves,
  Recycle,
  Cpu,
  Sparkles,
} from "lucide-react";

import pump from "../../assets/images/tech-process.png";

const processSteps = [
  {
    id: "01",
    title: "Screening",
    icon: Filter,
    description:
      "Removal of large particles, plastics, and debris before entering the treatment process.",
  },
  {
    id: "02",
    title: "Primary Treatment",
    icon: Waves,
    description:
      "Settling and sedimentation processes separate suspended solids from wastewater.",
  },
  {
    id: "03",
    title: "Secondary Treatment",
    icon: Beaker,
    description:
      "Biological treatment using microorganisms to reduce organic pollutants.",
  },
  {
    id: "04",
    title: "Tertiary Treatment",
    icon: Droplets,
    description:
      "Advanced purification processes to achieve high-quality treated water.",
  },
];

const advancedSystems = [
  {
    title: "Disinfection Systems",
    description:
      "UV, chlorination, and ozonation technologies for pathogen removal.",
    icon: ShieldCheck,
  },
  {
    title: "Sludge Management",
    description:
      "Sustainable sludge handling with dewatering and resource recovery.",
    icon: Recycle,
  },
  {
    title: "Advanced Technologies",
    description:
      "RO, MBR, and advanced oxidation systems for high-end treatment.",
    icon: Cpu,
  },
];

const TechnologyProcess = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-[-160px] right-[-120px] h-[460px] w-[460px] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center py-28 md:py-32">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 backdrop-blur-xl text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-cyan-300">
                <Sparkles size={14} />
                Treatment Process
              </div>

              <h1 className="mt-8 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[88px] font-black leading-[0.92] tracking-[-0.04em]">
                Engineering the
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Future of Water
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
                Discover how advanced wastewater treatment technologies
                transform contaminated water into sustainable, reusable
                resources through intelligent engineering systems.
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <a href="#tech_process">
                  <button
                    className="
                      w-full sm:w-auto
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-emerald-400
                      px-8
                      py-4
                      font-semibold
                      text-black
                      transition-all duration-300
                      hover:scale-[1.02]
                      hover:shadow-[0_0_50px_-20px_rgba(14,165,233,0.18)]
                    "
                  >
                    Explore Process
                  </button>
                </a>

                <Link to="/technologies">
                  <button
                    className="
                      w-full sm:w-auto
                      rounded-full
                      border border-white/10
                      bg-white/[0.05]
                      px-8
                      py-4
                      backdrop-blur-xl
                      transition-all duration-300
                      hover:border-cyan-400/30
                      hover:bg-white/[0.08]
                    "
                  >
                    Learn Technologies
                  </button>
                </Link>
              </div>

              {/* MINI INDICATORS */}
              <div className="mt-16 flex flex-wrap gap-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/[0.04]
                      px-5
                      py-3
                      backdrop-blur-xl
                    "
                  >
                    <span className="text-sm font-medium text-slate-300">
                      {step.id} • {step.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-[120px]" />

              {/* Main Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  shadow-[0_0_50px_-20px_rgba(14,165,233,0.18)]
                "
              >
                <img
                  src={pump}
                  alt="Wastewater Treatment Process"
                  loading="lazy"
                  decoding="async"
                  className="
                    h-[420px]
                    sm:h-[520px]
                    md:h-[680px]
                    w-full
                    object-cover
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219]/70 via-[#081219]/10 to-transparent" />
              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-4
                  left-4
                  sm:bottom-8
                  sm:left-8
                  rounded-[28px]
                  border border-white/10
                  bg-[#0b1620]/80
                  p-5 sm:p-6
                  backdrop-blur-xl
                  shadow-[0_0_50px_-20px_rgba(14,165,233,0.18)]
                "
              >
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cyan-300">
                  Smart Treatment
                </p>

                <h3 className="mt-3 text-3xl sm:text-4xl font-black">
                  4 Stage
                </h3>

                <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-slate-400">
                  Multi-layer wastewater purification engineered for
                  sustainability and compliance.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS FLOW */}
      <section
        className="relative py-24 md:py-32"
        id="tech_process"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADING */}
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 backdrop-blur-xl text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-emerald-300">
              Process Flow
            </div>

            <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
              From Wastewater to
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}
                Reusable Water
              </span>
            </h2>
          </div>

          {/* TIMELINE */}
          <div className="relative mt-20">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 to-emerald-400/50 md:hidden" />

            <div className="space-y-8 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-5 md:space-y-0">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {index !== processSteps.length - 1 && (
                      <div className="hidden xl:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-cyan-400/40 to-emerald-400/20" />
                    )}

                    <div
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
                        hover:-translate-y-1
                        hover:border-cyan-400/20
                        hover:bg-white/[0.06]
                      "
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-5xl font-black text-white/10">
                          {step.id}
                        </span>

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                          <Icon size={30} />
                        </div>
                      </div>

                      <h3 className="mt-10 text-2xl font-bold">
                        {step.title}
                      </h3>

                      <p className="mt-4 leading-relaxed text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED SYSTEMS */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {advancedSystems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    className="
                      group
                      rounded-[32px]
                      border border-white/10
                      bg-white/[0.04]
                      p-7 md:p-8
                      backdrop-blur-xl
                      transition-all duration-500
                      hover:border-cyan-400/20
                      hover:bg-white/[0.07]
                    "
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon size={30} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-4 leading-relaxed text-slate-400">
                          {item.description}
                        </p>

                        <button className="mt-6 inline-flex items-center gap-2 text-cyan-300 transition-all duration-300 group-hover:gap-3">
                          Learn More
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 backdrop-blur-xl text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-cyan-300">
                Advanced Systems
              </div>

              <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
                Intelligent Treatment
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>

              <p className="mt-8 text-base md:text-lg leading-relaxed text-slate-400">
                Modern wastewater treatment plants integrate advanced membrane
                systems, automation technologies, disinfection processes, and
                smart monitoring systems to achieve superior water quality and
                operational efficiency.
              </p>

              {/* FEATURE BOX */}
              <div
                className="
                  relative
                  mt-12
                  overflow-hidden
                  rounded-[36px]
                  border border-white/10
                  bg-white/[0.04]
                  p-7 md:p-10
                  backdrop-blur-xl
                "
              >
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                    Future-Ready Infrastructure
                  </p>

                  <h3 className="mt-5 text-3xl md:text-4xl font-black leading-tight">
                    Smart Automation & Sustainable Water Recovery
                  </h3>

                  <p className="mt-5 leading-relaxed text-slate-400">
                    AI-assisted monitoring, advanced filtration systems, and
                    resource recovery technologies are redefining wastewater
                    engineering for modern industries and urban infrastructure.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyProcess;