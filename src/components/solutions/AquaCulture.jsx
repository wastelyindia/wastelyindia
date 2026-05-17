
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  BrainCircuit,
  Droplets,
  Fish,
  FlaskConical,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

import image from "../../assets/images/AquaHead.jpg";
import oxidation from "../../assets/images/AdvanceOxidation.jpg";

const treatmentMethods = [
  {
    title: "Chemical Treatment",
    description:
      "Coagulants, flocculants, and advanced chemical processes engineered to neutralize and remove contaminants efficiently.",
    icon: FlaskConical,
  },
  {
    title: "Biological Treatment",
    description:
      "Microbial ecosystems and biofiltration technologies designed for sustainable organic pollutant reduction.",
    icon: Leaf,
  },
  {
    title: "Mechanical Filtration",
    description:
      "High-efficiency screening and filtration systems separating suspended solids and impurities from wastewater.",
    icon: Waves,
  },
];

const pollutants = [
  {
    title: "Nutrients",
    description:
      "Nitrogen and phosphorus causing eutrophication and harmful algal blooms.",
  },
  {
    title: "Organic Matter",
    description:
      "Excess organic waste reducing oxygen levels and impacting aquatic ecosystems.",
  },
  {
    title: "Antibiotics & Chemicals",
    description:
      "Residual chemicals disrupting environmental balance and aquatic biodiversity.",
  },
];

const futureTech = [
  {
    title: "Advanced Oxidation",
    description:
      "Ozone and UV-based oxidation systems for high-efficiency pollutant degradation.",
    icon: BrainCircuit,
  },
  {
    title: "Membrane Filtration",
    description:
      "Next-generation membrane technologies delivering superior water purification.",
    icon: Droplets,
  },
  {
    title: "Algae-Based Systems",
    description:
      "Eco-friendly biological systems leveraging algae for nutrient recovery and purification.",
    icon: Recycle,
  },
];

const AquaCulture = () => {
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
                Aquaculture Water Treatment
              </div>

              <h1 className="mt-8 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[6rem] font-black leading-[0.9] tracking-[-0.04em]">
                Sustainable
                <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Aquaculture
                </span>
                Water Systems
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
                Advanced aquaculture wastewater treatment systems engineered to
                protect aquatic ecosystems, improve fish health, and enable
                sustainable water reuse for modern aquaculture operations.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/technologies"
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
                  Explore Solutions
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

              {/* STATS */}
              <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  {
                    value: "Eco",
                    label: "Friendly Systems",
                  },
                  {
                    value: "Reuse",
                    label: "Water Recovery",
                  },
                  {
                    value: "Smart",
                    label: "Aquaculture Tech",
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

              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]">
                <img
                  src={image}
                  alt="Aquaculture Wastewater Treatment"
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
                    <Fish size={28} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                      Sustainable Aquaculture
                    </p>

                    <h3 className="mt-1 text-2xl font-black">
                      Smart Water Ecosystems
                    </h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TREATMENT METHODS */}
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Treatment Methods
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
              Advanced Wastewater
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Treatment Technologies
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-20 grid gap-6 lg:grid-cols-3">
            {treatmentMethods.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border border-white/10
                    bg-white/[0.04]
                    p-7 md:p-10
                    backdrop-blur-2xl
                    transition-all duration-500
                    hover:border-cyan-400/20
                    hover:bg-white/[0.06]

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
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="relative z-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon size={38} />
                    </div>

                    <h3 className="mt-10 text-3xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-relaxed text-slate-400">
                      {item.description}
                    </p>

                    <button className="mt-8 inline-flex items-center gap-2 text-cyan-300 transition-all duration-300 group-hover:gap-3">
                      Learn More
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPORTANCE + POLLUTANTS */}
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
                Importance of Treatment
              </div>

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                Protecting
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Aquatic Ecosystems
                </span>
              </h2>

              <p className="mt-8 text-base md:text-lg leading-relaxed text-slate-400">
                Effective aquaculture wastewater treatment protects aquatic
                ecosystems, improves fish health, reduces environmental impact,
                and supports sustainable resource management.
              </p>

              <div className="mt-12 space-y-5">
                {[
                  "Environmental protection & pollution reduction",
                  "Improved fish health and productivity",
                  "Water reuse & resource conservation",
                  "Sustainable aquaculture operations",
                ].map((item, index) => (
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
                    <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />

                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {pollutants.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  className="
                    rounded-[32px]
                    border border-white/10
                    bg-white/[0.04]
                    p-6 md:p-8
                    backdrop-blur-2xl
                    transition-all duration-500
                    hover:border-cyan-400/20
                    hover:bg-white/[0.06]
                  "
                >
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FUTURE SECTION */}
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">
            {/* Background */}
            <div className="absolute inset-0">
              <img
                src={oxidation}
                alt="Future Aquaculture Technologies"
                loading="lazy"
                className="h-full w-full object-cover opacity-20"
              />

              <div className="absolute inset-0 bg-[#081219]/88" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 py-16 sm:px-8 md:px-12 md:py-20 xl:px-16 xl:py-24">
              <div className="max-w-4xl">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                  Future Technologies
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                  The Future of
                  <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Aquaculture Treatment
                  </span>
                </h2>

                <p className="mt-8 max-w-3xl text-base md:text-lg leading-relaxed text-slate-400">
                  Emerging technologies are redefining aquaculture wastewater
                  management through intelligent oxidation systems, membrane
                  filtration, and sustainable biological treatment ecosystems.
                </p>
              </div>

              {/* Tech Grid */}
              <div className="mt-16 grid gap-6 lg:grid-cols-3">
                {futureTech.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.4 }}
                      className="
                        rounded-[32px]
                        border border-white/10
                        bg-[#0b1620]/70
                        p-7 md:p-8
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

                      <h3 className="mt-8 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Optional Future CTA */}
              <div className="mt-16 flex flex-wrap gap-4">
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

export default AquaCulture;