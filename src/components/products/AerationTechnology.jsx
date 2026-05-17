import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Atom,
  CheckCircle2,
  Cpu,
  Droplets,
  Factory,
  Fish,
  FlaskConical,
  Gauge,
  Layers3,
  Orbit,
  ShieldCheck,
  Sparkles,
  Waves,
  Wind,
  Zap,
  TrendingDown,
} from "lucide-react";

import HeroBg from "../../assets/images/nano-hero.png";
import NanoScienceImg from "../../assets/images/nano-science.png";
import SystemImg from "../../assets/images/nano-system.png";
import NanoPlantImg from "../../assets/images/nano-plant.png";

const aerationTypes = [
  {
    title: "Fine Bubble Diffusers",
    desc: "High-efficiency submerged aeration systems delivering superior oxygen transfer and optimized biological treatment.",
    icon: Droplets,
  },
  {
    title: "Coarse Bubble Diffusers",
    desc: "Robust aeration systems engineered for sludge stabilization and industrial wastewater operations.",
    icon: Waves,
  },
  {
    title: "Surface Aeration",
    desc: "High-performance aeration systems designed for shallow basins and rapid mixing performance.",
    icon: Wind,
  },
];

const oxygenMethods = [
  {
    title: "Mechanical Aeration",
    desc: "Industrial-grade mixers and aerators engineered for large-scale oxygen transfer.",
    icon: Factory,
  },
  {
    title: "Pure Oxygen Injection",
    desc: "Advanced oxygen enrichment systems delivering high dissolved oxygen efficiency.",
    icon: Zap,
  },
  {
    title: "Membrane Aeration",
    desc: "Energy-efficient membrane diffusion technology engineered for sustainable operations.",
    icon: ShieldCheck,
  },
];

const scienceCards = [
  {
    title: "Nanometer Scale",
    desc: "Ultra-fine bubbles engineered in nanometer range for superior gas dissolution.",
    icon: Atom,
  },
  {
    title: "Long Retention",
    desc: "Nanobubbles remain suspended for weeks or months inside water columns.",
    icon: Orbit,
  },
  {
    title: "High Surface Area",
    desc: "Exceptional surface area improves oxygen transfer performance.",
    icon: Layers3,
  },
  {
    title: "Brownian Motion",
    desc: "Continuous random movement stabilizes nano bubble distribution.",
    icon: Activity,
  },
  {
    title: "Slow Flotation",
    desc: "Extremely low flotation velocity enhances dissolved oxygen retention.",
    icon: Wind,
  },
  {
    title: "High Internal Pressure",
    desc: "Improves gas solubility and oxygen transfer efficiency.",
    icon: Gauge,
  },
];

const comparisonData = [
  {
    feature: "Bubble Size",
    micro: "Micrometer Range",
    nano: "Nanometer Range",
  },
  {
    feature: "Retention Time",
    micro: "Seconds / Minutes",
    nano: "Weeks / Months",
  },
  {
    feature: "Gas Transfer",
    micro: "Moderate",
    nano: "Very High",
  },
  {
    feature: "Flotation Velocity",
    micro: "Fast Rising",
    nano: "Extremely Slow",
  },
  {
    feature: "Energy Efficiency",
    micro: "Moderate",
    nano: "High Efficiency",
  },
];

const benefits = [
  {
    title: "Lower Energy Consumption",
    desc: "Reduced operational power requirements compared to conventional aeration systems.",
    icon: Zap,
  },
  {
    title: "Superior Oxygen Transfer",
    desc: "Nano-scale gas dissolution dramatically improves dissolved oxygen efficiency.",
    icon: Droplets,
  },
  {
    title: "Algae Reduction",
    desc: "Improves ecological balance and helps suppress harmful algae growth.",
    icon: Waves,
  },
  {
    title: "Microbial Enhancement",
    desc: "Boosts aerobic microbial activity for biological wastewater treatment.",
    icon: FlaskConical,
  },
  {
    title: "Water Clarity Improvement",
    desc: "Enhances transparency and overall water quality performance.",
    icon: Sparkles,
  },
  {
    title: "Reduced Operating Cost",
    desc: "Lower energy load and efficient oxygen transfer reduce long-term operational expenses.",
    icon: TrendingDown,
  },
];

const systemFlow = [
  "Pump",
  "Gas Injection",
  "Nano Bubble Generator",
  "Nano Bubble Formation",
  "Oxygen Dissolution",
  "DO Increase",
  "Water Restoration",
];

const applications = [
  {
    title: "Lakes & Reservoirs",
    icon: Waves,
  },
  {
    title: "Aquaculture",
    icon: Fish,
  },
  {
    title: "Fish Farms",
    icon: Activity,
  },
  {
    title: "STP Plants",
    icon: Factory,
  },
  {
    title: "ETP Systems",
    icon: FlaskConical,
  },
  {
    title: "Industrial Wastewater",
    icon: Droplets,
  },
];

const metrics = [
  "Higher DO Retention",
  "Reduced Energy Load",
  "Improved Biological Activity",
  "Better Pollutant Removal",
  "Enhanced Water Clarity",
  "Long-Term Oxygen Stability",
];

const deploymentFeatures = [
  "Integrated Oxygenation Systems",
  "Energy Efficient Operation",
  "SITC Deployment",
  "3-Year DLP Support",
  "Automation Integration",
  "Scalable Industrial Design",
];

const AerationTechnology = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* AMBIENT */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HeroBg}
            alt="Aeration Technology"
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#081219] via-[#081219]/90 to-[#081219]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-[#081219]/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid min-h-[100svh] items-center gap-14 py-28 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                <Sparkles size={14} />
                Advanced Aeration • Oxygenation • Nano Bubble Technology
              </div>

              <h1 className="mt-10 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[88px] font-black leading-[0.9] tracking-[-0.04em]">
                Advanced Aeration &
                <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Nano Bubble Oxygenation
                </span>
                Systems
              </h1>

              <p className="mt-8 max-w-3xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
                Industrial aeration and nano bubble oxygenation systems
                engineered for wastewater treatment, STP, ETP, reservoirs,
                aquaculture and intelligent dissolved oxygen enhancement.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
  <Link to="/technologies">
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
      Explore Solutions

      <ArrowRight
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

              <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ["98%", "Oxygen Efficiency"],
                  ["35%", "Energy Reduction"],
                  ["24/7", "Industrial Reliability"],
                  ["2x", "DO Performance"],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <h3 className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-3xl font-black text-transparent md:text-4xl">
                      {item[0]}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {item[1]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0b1620]/80 backdrop-blur-2xl">
                <img
                  src={NanoScienceImg}
                  alt="Nano Bubble Science"
                  className="h-[760px] w-full object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-transparent" />

                <div className="absolute left-6 top-6 rounded-3xl border border-white/10 bg-[#0b1620]/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <Cpu className="text-cyan-300" size={24} />
                    <div>
                      <h4 className="font-bold">Smart Oxygenation</h4>
                      <p className="text-sm text-slate-400">
                        Intelligent oxygen transfer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 rounded-3xl border border-white/10 bg-[#0b1620]/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <Gauge className="text-emerald-300" size={24} />
                    <div>
                      <h4 className="font-bold">High DO Efficiency</h4>
                      <p className="text-sm text-slate-400">
                        Long retention oxygenation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AERATION */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Aeration Technologies
            </div>

            <h2 className="mt-8 text-4xl font-black md:text-6xl">
              Advanced
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Aeration Systems
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {aerationTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OXYGENATION */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto grid gap-16 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
              Oxygenation Systems
            </div>

            <h2 className="mt-8 text-4xl font-black md:text-6xl">
              Intelligent Oxygen
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Transfer Systems
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-400">
              High-efficiency oxygenation technologies designed to optimize
              dissolved oxygen, improve microbial activity and enhance
              industrial wastewater treatment performance.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Activated sludge optimization",
                "Improved microbial performance",
                "Reduced odor formation",
                "Enhanced treatment efficiency",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 text-cyan-300"
                  />

                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {oxygenMethods.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCIENCE */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Nano Bubble Science
            </div>

            <h2 className="mt-8 text-4xl font-black md:text-6xl">
              The Science Behind
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Nano Bubble Technology
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {scienceCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-16 overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">
      <img
        src={SystemImg}
        alt="Nano Bubble Oxygenation"
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
            Intelligent Oxygen Transfer
          </div>

          <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-[-0.04em]">
            Engineering
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {" "}Next Generation Aeration
            </span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* COMPARISON */}
     {/* COMPARISON */}
<section className="relative py-16 sm:py-20 lg:py-28">
  <div className="container mx-auto px-4">
    {/* MOBILE CARDS */}
    <div className="space-y-4 md:hidden">
      {comparisonData.map((item, index) => (
        <div
          key={index}
          className="
            overflow-hidden
            rounded-[28px]
            border border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
          "
        >
          {/* FEATURE */}
          <div className="border-b border-white/10 px-5 py-4">
            <h3 className="text-base font-semibold text-white">
              {item.feature}
            </h3>
          </div>

          {/* VALUES */}
          <div className="grid grid-cols-2">
            <div className="border-r border-white/10 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Micro Bubble
              </p>

              <p className="text-sm leading-relaxed text-slate-300">
                {item.micro}
              </p>
            </div>

            <div className="p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Nano Bubble
              </p>

              <p className="text-sm font-medium leading-relaxed text-emerald-200">
                {item.nano}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* DESKTOP TABLE */}
    <div
      className="
        hidden
        overflow-hidden
        rounded-[40px]
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        md:block
      "
    >
      {/* HEADER */}
      <div className="grid grid-cols-3 border-b border-white/10">
        <div className="p-6 lg:p-8 text-slate-400 font-medium">
          Feature
        </div>

        <div
          className="
            border-l border-white/10
            p-6 lg:p-8
            text-center
            font-bold
            text-cyan-300
          "
        >
          Micro Bubble
        </div>

        <div
          className="
            border-l border-white/10
            p-6 lg:p-8
            text-center
            font-bold
            text-emerald-300
          "
        >
          Nano Bubble
        </div>
      </div>

      {/* ROWS */}
      {comparisonData.map((item, index) => (
        <div
          key={index}
          className="
            grid
            grid-cols-3
            border-b border-white/10
            last:border-0
          "
        >
          <div className="p-6 lg:p-8 font-semibold text-white">
            {item.feature}
          </div>

          <div
            className="
              border-l border-white/10
              p-6 lg:p-8
              text-center
              text-slate-400
            "
          >
            {item.micro}
          </div>

          <div
            className="
              border-l border-white/10
              p-6 lg:p-8
              text-center
              font-semibold
              text-emerald-300
            "
          >
            {item.nano}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* BENEFITS */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={36} />
                  </div>

                  <h3 className="mt-10 text-3xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COST COMPARISON */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="border-b border-white/10 p-8 text-center">
              <h2 className="text-4xl font-black md:text-5xl">
                Cost Efficiency Comparison
              </h2>
            </div>

            <div className="grid grid-cols-3 border-b border-white/10">
              <div className="p-6 font-bold">Technology</div>
              <div className="border-l border-white/10 p-6 font-bold text-center">
                Estimated Cost
              </div>
              <div className="border-l border-white/10 p-6 font-bold text-center">
                Benefits
              </div>
            </div>

            <div className="grid grid-cols-3 border-b border-white/10">
              <div className="p-6">
                Conventional Bio Remediation
              </div>

              <div className="border-l border-white/10 p-6 text-center text-red-300">
                ₹20 Crore
              </div>

              <div className="border-l border-white/10 p-6 text-center text-slate-400">
                High Maintenance & Operational Load
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="p-6">
                Nano Bubble Aeration
              </div>

              <div className="border-l border-white/10 p-6 text-center text-emerald-300">
                ₹10 Crore
              </div>

              <div className="border-l border-white/10 p-6 text-center text-emerald-300">
                High DO + Low Energy Consumption
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/5">
            <div className="absolute inset-0">
              <img
                src={SystemImg}
                alt="Nano Bubble System"
                className="h-full w-full object-cover opacity-20"
              />

              <div className="absolute inset-0 bg-[#081219]/90" />
            </div>

            <div className="relative z-10 px-6 py-20 md:px-16 md:py-24">
              <div className="text-center">
                <h2 className="text-4xl font-black md:text-6xl">
                  Intelligent Oxygen
                  <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Transfer Workflow
                  </span>
                </h2>
              </div>

              <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-7">
                {systemFlow.map((step, index) => (
                  <div
                    key={index}
                    className="rounded-[28px] border border-white/10 bg-[#0b1620]/80 p-6 text-center backdrop-blur-xl"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Droplets size={24} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold">
                      {step}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIAL */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto grid gap-16 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10">
              <img
                src={NanoPlantImg}
                alt="Industrial Nano Bubble Plant"
                className="h-[700px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Industrial Deployment
            </div>

            <h2 className="mt-8 text-4xl font-black md:text-6xl">
              Industrial Scale
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Deployment Systems
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-400">
              Complete turnkey nano bubble oxygenation systems for STPs,
              ETPs, reservoirs, aquaculture and industrial wastewater
              applications.
            </p>

            <div className="mt-12 space-y-5">
              {deploymentFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 text-cyan-300"
                  />

                  <p className="text-slate-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-4xl font-black md:text-6xl">
              Multi Industry
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {applications.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
  rounded-[36px]
  border border-white/10
  bg-white/[0.04]
  p-7 md:p-10
  backdrop-blur-xl
  transition-all duration-500
  hover:-translate-y-1
  hover:border-cyan-400/20
  hover:bg-white/[0.06]
"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={36} />
                  </div>

                  <h3 className="mt-10 text-3xl font-black">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="flex gap-4">
                  <CheckCircle2
                    size={22}
                    className="mt-1 text-cyan-300"
                  />

                  <div>
                    <h3 className="text-2xl font-black">
                      {metric}
                    </h3>

                    <p className="mt-4 leading-relaxed text-slate-400">
                      Advanced oxygen transfer improves long-term
                      treatment efficiency and water quality.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/5 px-8 py-20 text-center backdrop-blur-2xl md:px-20 md:py-24">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="relative z-10">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                Turnkey Deployment
              </div>

              <h2 className="mt-8 text-4xl font-black md:text-6xl">
                Ready For Industrial
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Oxygenation Deployment?
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
                Complete SITC execution, oxygenation system integration,
                automation and long-term deployment support for large-scale
                industrial applications.
              </p>

              <div className="mt-16 flex flex-wrap justify-center gap-5">
                <Link to="/contact">
                  <button className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105">
                    Discuss Deployment
                  </button>
                </Link>

                <Link to="/projects">
                  <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                    View Projects
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AerationTechnology;