import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Droplets,
  Fish,
  Gauge,
  Leaf,
  Sparkles,
  Trees,
  Waves,
  Wind,
  ShieldCheck,
  Atom,
  Radar,
  Flower2,
  TrendingUp,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

import Pollution from "../../assets/images/Rejuvenation_Pollution.png";
import Habitat from "../../assets/images/Rejuvenation_Habitat.png";
import Invasive from "../../assets/images/Rejuvenation_Invasive.jpg";
import Sedimentation from "../../assets/images/Rejuvenation_Sedimentation.jpg";

import KanglaBefore from "../../assets/images/kangla-before.png";
import KanglaAfter from "../../assets/images/kangla-after.png";

import NingthemBefore from "../../assets/images/ningthem-before.png";
import NingthemAfter from "../../assets/images/ningthem-after.png";

import ArunBefore from "../../assets/images/arun-before.png";
import ArunAfter from "../../assets/images/arun-after.png";

const problemData = [
  {
    title: "Eutrophication",
    description:
      "Excess nitrogen and phosphorous causing uncontrolled algae growth and ecological imbalance.",
    icon: Atom,
  },
  {
    title: "Algae Bloom",
    description:
      "Rapid algae formation reducing sunlight penetration and oxygen levels inside water bodies.",
    icon: Leaf,
  },
  {
    title: "Low Dissolved Oxygen",
    description:
      "Poor oxygen transfer causing unhealthy aquatic ecosystems and fish stress.",
    icon: Activity,
  },
  {
    title: "Black Water & Odor",
    description:
      "Anaerobic decomposition generating foul smell, black water and toxic conditions.",
    icon: Wind,
  },
  {
    title: "Sludge Accumulation",
    description:
      "Organic sludge build-up reducing depth and deteriorating overall water quality.",
    icon: Waves,
  },
  {
    title: "Fish Mortality",
    description:
      "Oxygen depletion and polluted water creating severe stress on aquatic biodiversity.",
    icon: Fish,
  },
];

const technologies = [
  {
    title: "Advanced Bioremediation",
    description:
      "Natural microbial remediation systems for reducing BOD, COD, sludge and nutrient load.",
    icon: FlaskConical,
  },
  {
    title: "Nano Bubble Aeration",
    description:
      "High-efficiency oxygen transfer technology improving DO and restoring biological balance.",
    icon: Droplets,
  },
  {
    title: "Floating Wetlands",
    description:
      "Engineered ecological islands supporting nutrient absorption and habitat restoration.",
    icon: Flower2,
  },
  {
    title: "Ultrasonic Algae Control",
    description:
      "Chemical-free algae suppression technology preventing bloom formation sustainably.",
    icon: Radar,
  },
  {
    title: "Decorative Oxygenation",
    description:
      "Aesthetic fountain systems combining visual enhancement with active oxygenation.",
    icon: Sparkles,
  },
];

const projectScale = [
  {
    amount: "₹20 Cr",
    title: "Bioremediation Project",
    subtitle: "SITC + 3 Year DLP",
  },
  {
    amount: "₹10 Cr",
    title: "Nano Bubble Aeration",
    subtitle: "Integrated Oxygenation System",
  },
  {
    amount: "₹3 Cr",
    title: "Floating Wetlands",
    subtitle: "Lily Jet Fountain + Luminaries",
  },
];

const metrics = [
  {
    title: "BOD Reduction",
    value: "89%",
    detail: "Reduction achieved in restoration programs",
    icon: TrendingUp,
  },
  {
    title: "COD Reduction",
    value: "67%",
    detail: "Organic pollution reduction",
    icon: Gauge,
  },
  {
    title: "DO Improvement",
    value: "2x+",
    detail: "Dissolved oxygen enhancement",
    icon: Activity,
  },
  {
    title: "Water Clarity",
    value: "4ft+",
    detail: "Visibility restoration improvement",
    icon: Sparkles,
  },
  {
    title: "Algae Reduction",
    value: "Major",
    detail: "Bloom suppression & ecosystem balancing",
    icon: Leaf,
  },
];

const beforeAfter = [
  {
    title: "Kangla Outer Moat",
    before: KanglaBefore,
    after: KanglaAfter,
  },
  {
    title: "Ningthem Pukhri",
    before: NingthemBefore,
    after: NingthemAfter,
  },
  {
    title: "Arun Sagar Lake",
    before: ArunBefore,
    after: ArunAfter,
  },
];

const challenges = [
  {
    title: "Pollution",
    description:
      "Industrial runoff, sewage inflow and nutrient loading damaging aquatic ecosystems.",
    image: Pollution,
    icon: Droplets,
  },
  {
    title: "Sedimentation",
    description:
      "Heavy sludge accumulation reducing storage capacity and water quality.",
    image: Sedimentation,
    icon: Waves,
  },
  {
    title: "Invasive Growth",
    description:
      "Excess algae and unwanted vegetation disrupting ecological equilibrium.",
    image: Invasive,
    icon: Fish,
  },
  {
    title: "Habitat Collapse",
    description:
      "Urbanization and oxygen depletion affecting biodiversity and aquatic life.",
    image: Habitat,
    icon: Trees,
  },
];

const Rejuvenation = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-140px] left-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-[-120px] top-[35%] h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[140px]" />

        <div className="absolute bottom-[-200px] left-[30%] h-[500px] w-[500px] rounded-full bg-cyan-400/5 blur-[170px]" />
      </div>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
  <div className="absolute inset-0">
    <img
      src={Habitat}
      alt="Lake Restoration"
      loading="lazy"
      className="h-full w-full object-cover opacity-20"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-[#081219]/30 via-[#081219]/80 to-[#081219]" />
  </div>

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl"
      >
        <Sparkles size={14} />
        Integrated Lake Restoration Systems
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.9 }}
        className="mt-10 max-w-6xl text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[88px] font-black leading-[0.9] tracking-[-0.04em]"
      >
        Integrated Lake Restoration &
        <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
          Ecological Rejuvenation
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        className="mt-8 max-w-4xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400"
      >
        Advanced bioremediation, nanobubble aeration, floating wetlands,
        algae control and real-time monitoring solutions for polluted
        lakes, ponds and urban water bodies.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.9 }}
        className="mt-12 flex flex-wrap gap-4"
      >
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
          Start Restoration

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
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
      </motion.div>

      {/* STATS */}
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {projectScale.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="
              relative
              overflow-hidden
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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/5" />

            <div className="relative z-10">
              <div className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-4xl md:text-5xl font-black text-transparent">
                {item.amount}
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* PROBLEMS */}
      <section className="relative py-24 md:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl">
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
        Water Challenges
      </div>

      <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
        Problems We
        <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Solve
        </span>
      </h2>

      <p className="mt-8 max-w-3xl text-base md:text-lg leading-relaxed text-slate-400">
        Comprehensive restoration strategies for polluted lakes, ponds,
        urban reservoirs and ecological water bodies suffering from
        contamination and oxygen depletion.
      </p>
    </div>

    <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {problemData.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
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
              hover:border-cyan-400/20
              hover:bg-white/[0.06]
            "
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

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
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      {/* TECHNOLOGIES */}
      <section className="relative py-24 md:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />

      <div className="relative z-10 px-6 py-16 sm:px-8 md:px-14 md:py-24">
        <div className="max-w-5xl">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
            Restoration Technologies
          </div>

          <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
            Advanced Ecological
            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Restoration Technologies
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-base md:text-lg leading-relaxed text-slate-400">
            High-performance environmental engineering systems designed
            for long-term water quality improvement and ecosystem recovery.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {technologies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-white/10
                  bg-[#0c1721]/80
                  p-6 md:p-7
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:border-cyan-400/20
                  hover:bg-[#0f1d29]
                "
              >
                <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* BEFORE AFTER */}
     <section className="relative py-24 md:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl">
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-xl">
        Restoration Results
      </div>

      <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
        Before & After
        <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Ecological Transformation
        </span>
      </h2>
    </div>

    <div className="mt-20 space-y-12">
      {beforeAfter.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
        >
          <div className="border-b border-white/10 px-6 py-6 md:px-8">
            <h3 className="text-2xl md:text-3xl font-black">
              {item.title}
            </h3>
          </div>

          <div className="grid lg:grid-cols-2">
            {/* BEFORE */}
            <div className="relative overflow-hidden">
              <img
                src={item.before}
                alt={`${item.title} Before`}
                loading="lazy"
                className="
                  h-[320px]
                  md:h-[420px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              <div className="absolute left-6 top-6 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-red-300 backdrop-blur-xl">
                Before
              </div>
            </div>

            {/* AFTER */}
            <div className="relative overflow-hidden">
              <img
                src={item.after}
                alt={`${item.title} After`}
                loading="lazy"
                className="
                  h-[320px]
                  md:h-[420px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              <div className="absolute left-6 top-6 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-xl">
                After
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* METRICS */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="relative z-10 px-6 py-20 md:px-16 md:py-24">
              <div className="max-w-4xl">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                  Water Quality Improvements
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                  Measurable
                  <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Water Quality Impact
                  </span>
                </h2>
              </div>

              <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                {metrics.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6 }}
                      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1620]/80 p-8 backdrop-blur-xl"
                    >
                      <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl" />

                      <div className="relative z-10">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                          <Icon size={28} />
                        </div>

                        <div className="mt-8 text-5xl font-black bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                          {item.value}
                        </div>

                        <h3 className="mt-4 text-2xl font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-slate-400">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Highlights */}
              <div className="mt-20 grid gap-5 md:grid-cols-2">
                {[
                  "Rapid reduction of BOD & COD",
                  "Elimination of foul odor and black water",
                  "Improved dissolved oxygen levels",
                  "Reduction in sludge accumulation",
                  "Enhanced water clarity and aesthetics",
                  "Improved aquatic biodiversity and fish population",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <div className="mt-1 text-emerald-400">
                      <CheckCircle2 size={20} />
                    </div>

                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES VISUAL */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Environmental Challenges
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
              Restoring Polluted
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Aquatic Ecosystems
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {challenges.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 min-h-[520px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-[#081219]/40 to-transparent" />

                  <div className="relative z-10 flex h-full flex-col justify-end p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 backdrop-blur-xl">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-8 text-3xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/5 px-8 py-20 md:px-20 md:py-24 text-center backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="absolute left-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="absolute bottom-[-120px] right-[-120px] h-[280px] w-[280px] rounded-full bg-emerald-500/20 blur-[120px]" />

            <div className="relative z-10">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                Sustainable Restoration
              </div>

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                Build Healthier
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Water Ecosystems
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
                Partner with Wastely Aqua for advanced lake rejuvenation,
                ecological restoration and long-term sustainable water
                management systems.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">
                <Link to="/contact">
                  <button className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-12px_rgba(14,165,233,0.45)]">
                    Request Consultation
                  </button>
                </Link>

                {/* <Link to="/projects">
                  <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                    View Restoration Projects
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rejuvenation;