import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Cog,
  Factory,
  Layers3,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import revamping from "../../assets/images/revamping1.png";
import revampingAerial from "../../assets/images/revamping2.png";

const comparison = [
  {
    title: "Revamping",
    subtitle: "Full-Scale Infrastructure Transformation",
    points: [
      "Complete plant modernization",
      "Major capacity enhancement",
      "Advanced treatment integration",
      "Process redesign & optimization",
    ],
  },
  {
    title: "Retrofitting",
    subtitle: "Targeted Performance Upgrades",
    points: [
      "Selective equipment replacement",
      "Low downtime implementation",
      "Cost-effective modernization",
      "Specific process enhancements",
    ],
  },
];

const roadmap = [
  {
    icon: Layers3,
    title: "System Evaluation",
    description:
      "Detailed assessment of plant performance, infrastructure limitations, and compliance requirements.",
  },
  {
    icon: DollarSign,
    title: "Strategic Planning",
    description:
      "Cost optimization, phased execution planning, and long-term operational sustainability analysis.",
  },
  {
    icon: Cog,
    title: "Implementation",
    description:
      "Advanced engineering execution with seamless technology integration and operational continuity.",
  },
];

const RevampingRetrofitting = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Ambient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden py-28 md:py-32">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* TOP LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 backdrop-blur-xl text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-cyan-300">
                <Sparkles size={14} />
                Plant Modernization
              </div>
            </motion.div>

            {/* HERO CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-center"
            >
              <h1 className="mt-10 max-w-5xl mx-auto text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[88px] font-black leading-[0.92] tracking-[-0.04em]">
                Revamping &
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Retrofitting
                </span>{" "}
                Wastewater Infrastructure
              </h1>

              <p className="mt-8 max-w-3xl mx-auto text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
                Transform aging treatment plants into future-ready
                infrastructure with intelligent upgrades, process optimization,
                and sustainable engineering solutions.
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4">
                <Link to="/contact">
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
                    Modernize Infrastructure
                  </button>
                </Link>

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
                    Explore Solutions
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mt-20"
            >
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_50px_-20px_rgba(14,165,233,0.18)]">
                <img
                  src={revamping}
                  alt="Wastewater treatment modernization"
                  loading="lazy"
                  decoding="async"
                  className="h-[320px] sm:h-[420px] md:h-[650px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-transparent" />

                {/* FLOATING METRICS */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                      { value: "40%", label: "Efficiency Increase" },
                      { value: "24/7", label: "System Reliability" },
                      { value: "ISO", label: "Compliance Ready" },
                      { value: "Smart", label: "Automation Upgrade" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="
                          rounded-[24px]
                          border border-white/10
                          bg-[#081219]/70
                          p-4 md:p-5
                          backdrop-blur-xl
                        "
                      >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                          {item.value}
                        </h3>

                        <p className="mt-2 text-xs sm:text-sm text-slate-400">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY MODERNIZE */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 xl:grid-cols-[1fr_1.4fr] xl:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="xl:sticky xl:top-24"
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 backdrop-blur-xl text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-cyan-300">
                Why Upgrade
              </div>

              <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
                Future-Proof Existing
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Treatment Plants
                </span>
              </h2>

              <p className="mt-8 text-base md:text-lg leading-relaxed text-slate-400">
                Aging wastewater infrastructure requires modernization to meet
                stricter environmental regulations, operational demands, and
                sustainability goals.
              </p>
            </motion.div>

            {/* RIGHT */}
            <div className="space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Meet Advanced Compliance Standards",
                  desc: "Upgrade treatment systems to align with evolving environmental regulations.",
                },
                {
                  icon: TrendingUp,
                  title: "Increase Plant Capacity",
                  desc: "Handle growing industrial and municipal wastewater demands efficiently.",
                },
                {
                  icon: Factory,
                  title: "Modernize Aging Infrastructure",
                  desc: "Replace inefficient systems with intelligent process technologies.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="
                      group
                      rounded-[32px]
                      border border-white/10
                      bg-white/[0.04]
                      p-6 md:p-8
                      backdrop-blur-xl
                      transition-all duration-500
                      hover:border-cyan-400/20
                      hover:bg-white/[0.07]
                    "
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon size={34} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-3 leading-relaxed text-slate-400">
                          {item.desc}
                        </p>
                      </div>

                      <ArrowRight className="hidden md:block text-cyan-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 backdrop-blur-xl text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-emerald-300">
              Strategy Comparison
            </div>

            <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
              Revamp or Retrofit?
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-400">
              Choose the modernization strategy that aligns with your plant
              performance goals, budget, and operational requirements.
            </p>
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateX: 20, y: 40 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border border-white/10
                  bg-white/[0.04]
                  p-6 md:p-10
                  backdrop-blur-xl
                "
              >
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-5 text-3xl md:text-4xl font-black">
                    {item.title}
                  </h3>

                  <div className="mt-10 space-y-5">
                    {item.points.map((point, i) => (
                      <div
                        key={i}
                        className="
                          flex items-start gap-4
                          rounded-2xl
                          border border-white/10
                          bg-[#0b1620]/70
                          p-5
                        "
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-black">
                          <Check size={16} />
                        </div>

                        <p className="text-slate-300">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {roadmap.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border border-white/10
                    bg-white/[0.04]
                    p-7 md:p-10
                    backdrop-blur-xl
                  "
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-emerald-400" />

                  <div className="ml-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon size={36} />
                    </div>

                    <div className="mt-10">
                      <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                        Phase 0{index + 1}
                      </span>

                      <h3 className="mt-4 text-3xl font-black">
                        {item.title}
                      </h3>

                      <p className="mt-5 leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* BOTTOM IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              mt-20
              overflow-hidden
              rounded-[32px] md:rounded-[40px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
            "
          >
            <img
              src={revampingAerial}
              alt="Modernized wastewater treatment facility"
              loading="lazy"
              decoding="async"
              className="
  h-auto
  max-h-[820px]
  w-full
  object-contain
  bg-[#081219]
"
            />

            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-[#081219]/30 to-transparent" /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081219]/65 via-[#081219]/12 to-transparent" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RevampingRetrofitting;