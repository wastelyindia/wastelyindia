import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import {
  Boxes,
  Cpu,
  Factory,
  Gauge,
  Globe,
  Layers3,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import packageImg from "../../assets/images/packageTreatment.webp";
import packageImage from "../../assets/images/packageTreatment.jpg";
import packageImage1 from "../../assets/images/package-treatment.jpg";

const PackageTreatmentUnits = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[160px]" />

        <div className="absolute right-0 top-40 h-[380px] w-[380px] rounded-full bg-emerald-400/15 blur-[160px]" />
      </div>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[100svh] items-center gap-14 py-28 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 backdrop-blur-xl">
                <Sparkles
                  size={14}
                  className="text-cyan-400"
                />

                <span className="text-[11px] uppercase tracking-[0.25em] text-cyan-300">
                  Modular Wastewater Infrastructure
                </span>
              </div>

              <h1 className="mt-10 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[88px] font-black leading-[0.9] tracking-[-0.04em]">
                Package
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Treatment Plants
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
                Intelligent decentralized wastewater systems engineered for
                rapid deployment, compact infrastructure, and sustainable
                environmental performance.
              </p>

              {/* MINI FEATURES */}
              <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ["Modular", "Scalable"],
                  ["Fast", "Installation"],
                  ["Compact", "Footprint"],
                  ["Smart", "Operations"],
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="
                      rounded-[24px]
                      border border-white/10
                      bg-white/[0.04]
                      p-4 md:p-5
                      backdrop-blur-xl
                      transition-all duration-500
                      hover:border-cyan-400/20
                      hover:bg-white/[0.06]
                    "
                  >
                    <h3 className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-xl font-black text-transparent">
                      {item[0]}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {item[1]}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap gap-4">
                <Link to="/industries">
                  <button
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
                    Explore Systems

                    <MoveRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </Link>

                <Link to="/contact">
                  <button
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
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-cyan-400/20 to-emerald-400/10 blur-3xl" />

              {/* Floating Top Card */}
              <div
                className="
                  absolute
                  left-2
                  top-2
                  z-20
                  hidden
                  rounded-[28px]
                  border border-white/10
                  bg-[#0c161d]/80
                  p-5
                  backdrop-blur-2xl
                  md:block
                "
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Cpu size={24} />
                  </div>

                  <div>
                    <h4 className="font-bold">
                      Automated
                    </h4>

                    <p className="text-sm text-slate-400">
                      Smart control systems
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div
                className="
                  absolute
                  bottom-2
                  right-2
                  z-20
                  hidden
                  rounded-[28px]
                  border border-white/10
                  bg-[#0c161d]/80
                  p-5
                  backdrop-blur-2xl
                  md:block
                "
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <Workflow size={24} />
                  </div>

                  <div>
                    <h4 className="font-bold">
                      Plug & Play
                    </h4>

                    <p className="text-sm text-slate-400">
                      Rapid commissioning
                    </p>
                  </div>
                </div>
              </div>

              {/* MAIN IMAGE */}
              <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]">
                <img
                  src={packageImg}
                  alt="Package Treatment Plant"
                  className="
                    h-[420px]
                    sm:h-[520px]
                    md:h-[640px]
                    xl:h-[760px]
                    w-full
                    object-cover
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ADVANTAGES */}
      {/* ================================================= */}

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[180px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-20 max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-cyan-300">
              <Layers3 size={14} />
              System Performance
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Why Modular
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Treatment Systems
              </span>
            </h2>
          </div>

          {/* BENTO */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* LARGE CARD */}
            <motion.div
              whileHover={{ y: -5 }}
              className="
                lg:col-span-5
                rounded-[36px]
                border border-white/10
                bg-gradient-to-br
                from-cyan-400/10
                to-emerald-400/10
                p-7 md:p-8
                backdrop-blur-2xl
              "
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                <Factory size={30} />
              </div>

              <h3 className="mb-6 text-3xl font-black leading-tight">
                Factory-Built Infrastructure
              </h3>

              <p className="text-lg leading-relaxed text-slate-400">
                Pre-engineered package systems reduce civil construction,
                accelerate deployment, and simplify operational scalability for
                decentralized wastewater treatment.
              </p>
            </motion.div>

            {/* SMALL CARDS */}
            <div className="grid gap-6 md:grid-cols-2 lg:col-span-7">
              {[
                {
                  icon: <Zap size={26} />,
                  title: "Fast Installation",
                  desc: "Minimal disruption and rapid deployment.",
                },
                {
                  icon: <Boxes size={26} />,
                  title: "Flexible Expansion",
                  desc: "Scalable modular treatment capacity.",
                },
                {
                  icon: <Gauge size={26} />,
                  title: "Operational Simplicity",
                  desc: "Easy maintenance and system monitoring.",
                },
                {
                  icon: <ShieldCheck size={26} />,
                  title: "Reliable Treatment",
                  desc: "Consistent wastewater performance.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="
                    rounded-[32px]
                    border border-white/10
                    bg-white/[0.04]
                    p-7 md:p-8
                    backdrop-blur-2xl
                    transition-all duration-500
                    hover:border-cyan-400/20
                    hover:bg-white/[0.06]
                  "
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 text-cyan-300">
                    {item.icon}
                  </div>

                  <h3 className="mb-3 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* STICKY PROCESS */}
      {/* ================================================= */}

      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT */}
            <div className="lg:sticky top-24 h-fit">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                Technology Insights
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Operational
                <span className="block text-cyan-400">
                  Considerations
                </span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-400">
                While modular treatment systems provide outstanding flexibility
                and rapid deployment, proper engineering and operational
                planning remain essential for long-term sustainability.
              </p>
            </div>

            {/* RIGHT */}
            <div className="space-y-8">
              {[
                {
                  title: "Limited Capacity",
                  desc: "Package plants are optimized for decentralized and small-to-medium scale wastewater infrastructure.",
                },
                {
                  title: "Operational Cost Factors",
                  desc: "Maintenance frequency and process configuration influence long-term operational economics.",
                },
                {
                  title: "Environmental Performance",
                  desc: "Proper operation ensures compliance, sustainability, and minimal environmental impact.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="
                    rounded-[36px]
                    border border-white/10
                    bg-white/[0.04]
                    p-7 md:p-10
                    backdrop-blur-2xl
                    transition-all duration-500
                    hover:border-cyan-400/20
                    hover:bg-white/[0.06]
                  "
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="text-6xl font-black text-cyan-400/20">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="mb-4 text-3xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-lg leading-relaxed text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ASYMMETRIC VISUAL */}
      {/* ================================================= */}

      <section className="relative overflow-hidden pb-24 md:pb-32">
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[180px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-6 lg:grid-cols-12">
            {/* LEFT LARGE */}
            <motion.div
              whileHover={{ y: -4 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                lg:col-span-7
              "
            >
              <img
                src={packageImage}
                alt="Technology Layout"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#081219]/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
                  Technology Layout
                </div>

                <h3 className="max-w-xl text-3xl md:text-5xl font-black leading-tight">
                  Compact Engineering Infrastructure
                </h3>
              </div>
            </motion.div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              {/* TOP */}
              <motion.div
                whileHover={{ y: -4 }}
                className="
                  flex-1
                  rounded-[36px]
                  border border-white/10
                  bg-white/[0.04]
                  p-7 md:p-8
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:border-cyan-400/20
                  hover:bg-white/[0.06]
                "
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 text-cyan-300">
                  <Globe size={30} />
                </div>

                <h3 className="mb-6 text-3xl font-black">
                  Sustainable Deployment
                </h3>

                <p className="text-lg leading-relaxed text-slate-400">
                  Designed for remote infrastructure, industrial zones, smart
                  communities, and decentralized wastewater treatment
                  ecosystems.
                </p>
              </motion.div>

              {/* BOTTOM IMAGE */}
              <motion.div
                whileHover={{ y: -4 }}
                className="
                  group
                  overflow-hidden
                  rounded-[36px]
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                "
              >
                <img
                  src={packageImage1}
                  alt="Package Infrastructure"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageTreatmentUnits;