import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  BrainCircuit,
  Droplets,
  Factory,
  Globe2,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

import integratedWater from "../../assets/images/integrated_water1.png";
import integratedWater1 from "../../assets/images/integrated_water2.png";
import integratedWater2 from "../../assets/images/integrated_water3.png";
import integratedWaterbg from "../../assets/images/integrated_water_background.png";

const systems = [
  {
    title: "Integrated Water Management",
    description:
      "A complete ecosystem approach connecting water supply, wastewater treatment, reuse, and stormwater systems into one sustainable infrastructure network.",
    image: integratedWater1,
    icon: Globe2,
  },
  {
    title: "Resource Recovery",
    description:
      "Recover reusable water, nutrients, and energy from wastewater streams using circular sustainability engineering systems.",
    image: integratedWater,
    icon: Recycle,
  },
  {
    title: "Integrated Treatment Processes",
    description:
      "Advanced physical, chemical, and biological treatment technologies integrated into intelligent multi-stage purification systems.",
    image: integratedWater2,
    icon: BrainCircuit,
  },
];

const benefits = [
  {
    title: "Reduced Water Scarcity",
    description:
      "Recover and reuse treated water to reduce dependence on freshwater resources.",
    icon: Droplets,
  },
  {
    title: "Environmental Protection",
    description:
      "Minimize ecosystem pollution through advanced treatment and sustainable discharge.",
    icon: Leaf,
  },
  {
    title: "Resource Efficiency",
    description:
      "Recover valuable nutrients, energy, and reusable resources for circular infrastructure.",
    icon: Factory,
  },
  {
    title: "Climate Resilience",
    description:
      "Diversified treatment and recovery systems designed for future environmental challenges.",
    icon: ShieldCheck,
  },
];

const IntegratedWaterSystem = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-[-160px] right-[-120px] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                <Sparkles size={14} />
                Integrated Water Systems
              </div>

              <h1 className="mt-8 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[6rem] font-black leading-[0.9] tracking-[-0.04em]">
                Intelligent
                <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Water Ecosystems
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
                Sustainable water infrastructure integrating treatment,
                recovery, reuse, and environmental protection into one advanced
                engineering ecosystem.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/industries"
                  className="
                    inline-flex items-center justify-center
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
                  View Technologies
                </Link>
              </div>

              {/* Mini Stats */}
              <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  {
                    value: "Smart",
                    label: "Infrastructure",
                  },
                  {
                    value: "Reuse",
                    label: "Water Recovery",
                  },
                  {
                    value: "Circular",
                    label: "Resource Systems",
                  },
                  {
                    value: "Future",
                    label: "Ready Solutions",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="
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
                    <h3 className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-2xl md:text-3xl font-black text-transparent">
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
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-3xl" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]">
                <img
                  src={integratedWaterbg}
                  alt="Integrated Water Infrastructure"
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-[#081219]/30 to-transparent" />
              </div>

              {/* Floating Card */}
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
                  shadow-[0_0_50px_-12px_rgba(14,165,233,0.35)]
                  md:block
                  lg:-left-8
                "
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Waves size={28} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                      Sustainable Cycle
                    </p>

                    <h3 className="mt-1 text-2xl font-black">
                      Integrated Systems
                    </h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SYSTEMS SECTION */}
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 md:space-y-32">
            {systems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-20 ${
                    index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="
                          h-[320px]
                          sm:h-[420px]
                          md:h-[520px]
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon size={38} />
                    </div>

                    <h2 className="mt-10 text-4xl md:text-5xl font-black leading-tight">
                      {item.title}
                    </h2>

                    <p className="mt-7 text-base md:text-lg leading-relaxed text-slate-400">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-10 flex flex-wrap gap-4">
                      {[
                        "Sustainable",
                        "Resource Recovery",
                        "Smart Infrastructure",
                      ].map((tag, idx) => (
                        <div
                          key={idx}
                          className="
                            rounded-full
                            border border-white/10
                            bg-white/[0.04]
                            px-5
                            py-3
                            text-sm
                            text-slate-300
                            backdrop-blur-xl
                          "
                        >
                          {tag}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to="/industries"
                      className="
                        mt-10
                        inline-flex
                        items-center
                        gap-3
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
                      Explore Solution
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">
            {/* Background */}
            <div className="absolute inset-0">
              <img
                src={integratedWaterbg}
                alt="Benefits Background"
                loading="lazy"
                className="h-full w-full object-cover opacity-40"
              />

              <div className="absolute inset-0 bg-[#081219]/88" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 py-16 sm:px-8 md:px-12 md:py-20 xl:px-16 xl:py-24">
              <div className="max-w-3xl">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                  System Benefits
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                  Sustainable &
                  <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Circular Water Ecosystems
                  </span>
                </h2>

                <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-400">
                  Advanced integrated systems engineered to optimize water
                  reuse, environmental sustainability, and long-term
                  infrastructure resilience.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {benefits.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.4 }}
                      className="
                        rounded-[28px]
                        border border-white/10
                        bg-[#0b1620]/70
                        p-6
                        backdrop-blur-xl
                        transition-all duration-500
                        hover:-translate-y-1
                        hover:border-cyan-400/20
                        hover:bg-[#0f1b26]/80
                      "
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon size={30} />
                      </div>

                      <h3 className="mt-6 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegratedWaterSystem;