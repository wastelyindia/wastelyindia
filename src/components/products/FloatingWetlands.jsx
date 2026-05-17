import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Droplets,
  Fish,
  Flower2,
  Globe,
  Leaf,
  Lightbulb,
  Orbit,
  Palette,
  Recycle,
  ShieldCheck,
  Sparkles,
  Trees,
  Waves,
  Wind,
} from "lucide-react";

import floating from "../../assets/images/Floating-Wetlands.png";
import floating1 from "../../assets/images/Floating-wetland.jpg";
import floating2 from "../../assets/images/Floating-wetland.jpeg";
import floating3 from "../../assets/images/floating-custom.png";

const ecosystemCards = [
  {
    title: "Root Zone Filtration",
    desc: "Dense root systems create natural biological filtration zones improving water quality and ecological balance.",
    icon: Leaf,
  },
  {
    title: "Microbial Attachment",
    desc: "Plant roots and fiber media support microbial growth for pollutant degradation and biological treatment.",
    icon: Orbit,
  },
  {
    title: "Nutrient Absorption",
    desc: "Wetland vegetation naturally absorbs excess nitrogen and phosphorus from polluted water bodies.",
    icon: Droplets,
  },
  {
    title: "Ecosystem Restoration",
    desc: "Restores aquatic ecosystems while improving biodiversity and environmental resilience.",
    icon: Trees,
  },
];

const integratedSystems = [
  {
    title: "Wetland Planters",
    desc: "Modular floating planters engineered for ecological water restoration and natural phytoremediation.",
    icon: Flower2,
  },
  {
    title: "Integrated Aeration",
    desc: "Embedded aeration systems increase dissolved oxygen and enhance biological treatment efficiency.",
    icon: Wind,
  },
  {
    title: "Decorative Fountains",
    desc: "Integrated fountains improve circulation while enhancing environmental aesthetics.",
    icon: Waves,
  },
  {
    title: "Smart Lighting",
    desc: "Programmable lighting systems designed for modern floating landscape installations.",
    icon: Lightbulb,
  },
];

const benefitGrid = [
  {
    title: "BOD Reduction",
    desc: "Supports biological degradation and organic pollutant removal.",
    icon: Recycle,
  },
  {
    title: "Phosphorus Removal",
    desc: "Wetland plants naturally absorb nutrients and reduce eutrophication.",
    icon: Droplets,
  },
  {
    title: "Fish Habitat",
    desc: "Creates shaded aquatic ecosystems supporting biodiversity.",
    icon: Fish,
  },
  {
    title: "Algae Suppression",
    desc: "Reduces nutrient load and harmful algae bloom formation.",
    icon: ShieldCheck,
  },
  {
    title: "Water Clarity",
    desc: "Improves turbidity reduction and overall transparency.",
    icon: Sparkles,
  },
  {
    title: "Landscape Enhancement",
    desc: "Transforms polluted water bodies into attractive environments.",
    icon: Palette,
  },
];

const customizationShapes = [
  "Lotus Floating Islands",
  "Ecological Floating Parks",
  "Smart Lighting Wetlands",
  "Decorative Ecology Islands",
  "Custom Modular Shapes",
  "Landscape Floating Gardens",
];

const processFlow = [
  "Floating Platform",
  "Plant Root Systems",
  "Microbial Growth",
  "Nutrient Uptake",
  "Biological Treatment",
  "Water Restoration",
];

const FloatingWetlands = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white selection:bg-cyan-400 selection:text-black">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />

        <div className="absolute right-[-100px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
            style={{ backgroundImage: `url(${floating2})` }}
          />

          <div className="absolute inset-0 bg-[#081219]/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#081219] via-[#081219]/85 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto min-h-screen px-4 sm:px-6 lg:px-8 flex items-center py-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-20 items-center w-full">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-cyan-300">
                <Leaf size={14} />
                Floating Wetland Technology
              </div>

              <h1 className="mt-8 text-[44px] sm:text-[58px] md:text-7xl xl:text-[90px] font-black leading-[0.95]">
                Floating
                <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                  Wetland Systems
                </span>
              </h1>

              <p className="mt-10 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-300">
                Nature-based ecological restoration systems integrating floating
                wetlands, biological filtration, integrated aeration,
                decorative ecological islands and sustainable aquatic ecosystem
                rehabilitation.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <Link to="/technologies">
                  <button className="group rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-12px_rgba(16,185,129,0.45)]">
                    <span className="flex items-center gap-2">
                      Explore Technology

                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30">
                    Contact Experts
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  ["100%", "Natural Filtration"],
                  ["24/7", "Passive Treatment"],
                  ["Eco", "Sustainable Design"],
                  ["Smart", "Integrated Systems"],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-cyan-400/5" />

                    <div className="relative z-10">
                      <h3 className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-3xl md:text-4xl font-black text-transparent">
                        {item[0]}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {item[1]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              {/* Mobile */}
              <div className="lg:hidden relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl">
                <img
                  src={floating}
                  alt="Floating Wetlands"
                  className="h-[420px] w-full object-cover"
                />
              </div>

              {/* Desktop */}
              <div className="hidden lg:block relative h-[720px]">
                {/* Main Image */}
                <div className="absolute left-10 top-10 overflow-hidden rounded-[42px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(16,185,129,0.25)]">
                  <img
                    src={floating}
                    alt="Floating Wetlands"
                    className="h-[450px] w-[450px] object-cover"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute right-0 top-0 rounded-[32px] border border-white/10 bg-[#0d1820]/90 p-6 backdrop-blur-2xl w-[260px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                      <Leaf size={26} />
                    </div>

                    <div>
                      <h4 className="font-bold">
                        Root Filtration
                      </h4>

                      <p className="text-sm text-slate-400">
                        Natural ecological treatment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute right-10 bottom-10 rounded-[32px] border border-white/10 bg-[#0d1820]/90 p-6 backdrop-blur-2xl w-[290px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Cpu size={26} />
                    </div>

                    <div>
                      <h4 className="font-bold">
                        Integrated Systems
                      </h4>

                      <p className="text-sm text-slate-400">
                        Aeration + Lighting + Ecology
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute bottom-36 left-0 h-40 w-40 rounded-full border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 backdrop-blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NATURE BASED RESTORATION */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10">
                <img
                  src={floating2}
                  alt="Nature Based Restoration"
                  className="h-[500px] md:h-[700px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
                Ecological Water Science
              </div>

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                Nature-Based
                <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  Restoration Technology
                </span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-400">
                Floating wetland systems combine engineered flotation
                structures, plant root ecosystems and microbial media to
                naturally restore polluted water bodies while improving
                ecological balance and biodiversity.
              </p>

              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ecosystemCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4 }}
                      className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                        <Icon size={24} />
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

      {/* INTEGRATED SYSTEMS */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c161d] to-[#081219]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Integrated Floating Systems
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
              Ecological Infrastructure
              <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Meets Smart Design
              </span>
            </h2>
          </div>

          <div className="mt-24 grid md:grid-cols-2 gap-8">
            {integratedSystems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 text-emerald-300">
                    <Icon size={38} />
                  </div>

                  <h3 className="mt-10 text-3xl font-black leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-lg leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
              Environmental Benefits
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
              Sustainable Ecological
              <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Water Treatment
              </span>
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {benefitGrid.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10" />

                  <div className="relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 text-cyan-300">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-8 text-2xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ECOLOGICAL DESIGN SYSTEM */}
<section className="relative py-24 md:py-32 overflow-hidden">
  {/* Organic Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-emerald-400/10 blur-[120px]" />

    <div className="absolute right-[10%] bottom-[10%] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[130px]" />
  </div>

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    {/* TOP */}
    <div className="max-w-5xl">
      <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
        Ecological Design Systems
      </div>

      <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
        Floating Landscapes
        <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
          Designed As Living Infrastructure
        </span>
      </h2>

      <p className="mt-8 max-w-3xl text-base md:text-lg leading-relaxed text-slate-400">
        Wastely Aqua floating wetlands are engineered as ecological
        infrastructure systems combining biological treatment,
        environmental restoration, public landscape integration and
        smart aquatic design.
      </p>
    </div>

    {/* ORGANIC LAYOUT */}
    <div className="mt-20 grid gap-6 lg:grid-cols-12">
      {/* LARGE IMAGE */}
      <motion.div
        whileHover={{ y: -5 }}
        className="
          group
          relative
          overflow-hidden
          rounded-[42px]
          border border-white/10
          lg:col-span-7
          min-h-[420px]
          md:min-h-[620px]
        "
      >
        <img
          src={floating3}
          alt="Floating Landscape Systems"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-[#081219]/20 to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
          <div className="inline-flex w-fit rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
            Living Ecosystems
          </div>

          <h3 className="mt-6 max-w-2xl text-3xl md:text-5xl font-black leading-tight">
            Ecological Infrastructure Integrated Into Urban Water Bodies
          </h3>
        </div>
      </motion.div>

      {/* RIGHT STACK */}
      <div className="flex flex-col gap-6 lg:col-span-5">
        {/* CARD */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border border-white/10
            bg-white/[0.04]
            p-7 md:p-8
            backdrop-blur-2xl
            transition-all duration-500
            hover:border-emerald-400/20
            hover:bg-white/[0.06]
          "
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
              <Flower2 size={30} />
            </div>

            <h3 className="mt-8 text-3xl font-black">
              Modular Floating Islands
            </h3>

            <p className="mt-5 leading-relaxed text-slate-400">
              Adaptive modular wetland systems customized for lakes,
              reservoirs, urban canals and ecological parks.
            </p>
          </div>
        </motion.div>

        {/* PROCESS FLOW */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border border-white/10
            bg-[#0c161d]/90
            p-7 md:p-8
            backdrop-blur-2xl
          "
        >
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <Orbit size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black">
                Ecological Flow
              </h3>

              <p className="text-sm text-slate-400">
                Natural restoration cycle
              </p>
            </div>
          </div>

          {/* FLOW */}
          <div className="mt-10 space-y-5">
            {processFlow.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                  {index + 1}
                </div>

                <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />

                <p className="w-[170px] text-sm text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* CUSTOM SHAPES */}
    <div className="mt-20 flex flex-wrap gap-4">
      {customizationShapes.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -3 }}
          className="
            rounded-full
            border border-white/10
            bg-white/[0.04]
            px-6
            py-4
            text-sm
            text-slate-300
            backdrop-blur-xl
            transition-all duration-300
            hover:border-cyan-400/20
            hover:bg-white/[0.06]
          "
        >
          {item}
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* FINAL CTA */}
      <section className="relative pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 md:p-16 text-center backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
                <Globe size={14} />
                Sustainable Environmental Systems
              </div>

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                Smart Ecological
                <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  Water Restoration
                </span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-300">
                Floating wetland systems provide scalable, sustainable and
                environmentally responsible solutions for wastewater treatment,
                lake restoration and ecological rehabilitation.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">
                <Link to="/contact">
                  <button className="group rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-12px_rgba(16,185,129,0.45)]">
                    <span className="flex items-center gap-2">
                      Contact Wastely Aqua

                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </Link>

                <Link to="/technologies">
                  <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30">
                    Explore Technologies
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

export default FloatingWetlands;