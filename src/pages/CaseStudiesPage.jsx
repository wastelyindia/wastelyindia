import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Gauge,
  Leaf,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Waves,
  Wind,
  Building2,
  BarChart3,
  Cpu,
} from "lucide-react";

import ArunImg from "../assets/images/arun-sagar.jpg";
import KanglaImg from "../assets/images/kangla-moats.jpg";
import NingthemImg from "../assets/images/ningthem-pukhri.jpg";
import YaiskulImg from "../assets/images/yaiskul-lake.jpg";
import BijoyImg from "../assets/images/bijoy-govinda.jpg";
import case_study_hero from "../assets/images/case_study_hero.png";

const projects = [
  {
    title: "Arun Sagar Restoration",
    location: "Urban Lake Restoration",
    image: ArunImg,
    problem:
      "Severe eutrophication, foul odor, algae bloom, sludge accumulation and low dissolved oxygen levels affecting ecological balance.",
    technology: [
      "Nano Bubble Aeration",
      "Bioremediation",
      "Floating Wetlands",
      "Real-Time Monitoring",
    ],
    results: [
      "Improved dissolved oxygen levels",
      "Reduced algae bloom intensity",
      "Improved water clarity",
      "Restored ecological activity",
    ],
    metrics: [
      "DO Improvement",
      "BOD Reduction",
      "Algae Suppression",
      "Water Clarity Increase",
    ],
  },

  {
    title: "Kangla Moats",
    location: "Historic Water Body Restoration",
    image: KanglaImg,
    problem:
      "Black water conditions, nutrient loading, excessive algae formation and declining water quality in historic moat systems.",
    technology: [
      "Ultrasonic Algae Control",
      "Floating Wetlands",
      "Decorative Oxygenation",
      "MPC Monitoring Buoys",
    ],
    results: [
      "Reduced algae bloom",
      "Enhanced visual aesthetics",
      "Continuous ecological monitoring",
      "Improved oxygenation",
    ],
    metrics: [
      "Real-Time Monitoring",
      "Reduced Odor",
      "Improved Ecology",
      "Enhanced Aesthetics",
    ],
  },

  {
    title: "Ningthem Pukhri",
    location: "Urban Pond Rejuvenation",
    image: NingthemImg,
    problem:
      "Low DO, sludge deposition, stagnant water conditions and fish mortality due to poor water quality.",
    technology: [
      "Nano Bubble Oxygenation",
      "Bioremediation",
      "Floating Ecological Islands",
      "Integrated Fountain Systems",
    ],
    results: [
      "Enhanced oxygen transfer",
      "Reduced sludge accumulation",
      "Improved aquatic habitat",
      "Increased biodiversity",
    ],
    metrics: [
      "Fish Habitat Recovery",
      "DO Stabilization",
      "Reduced Sludge",
      "Cleaner Water",
    ],
  },

  {
    title: "Yaiskul Restoration",
    location: "Ecological Water Restoration",
    image: YaiskulImg,
    problem:
      "Polluted stagnant water body with algae infestation, poor circulation and deteriorating ecosystem conditions.",
    technology: [
      "Ultrasonic Algae Systems",
      "Smart Water Monitoring",
      "Floating Wetlands",
      "Oxygenation Systems",
    ],
    results: [
      "Improved circulation",
      "Controlled algae growth",
      "Enhanced ecological stability",
      "Improved visual landscape",
    ],
    metrics: [
      "Algae Reduction",
      "Water Quality Improvement",
      "Monitoring Automation",
      "Ecological Recovery",
    ],
  },

  {
    title: "Bijoy Govinda Water Body",
    location: "Integrated Rejuvenation Project",
    image: BijoyImg,
    problem:
      "Organic pollution, foul odor, nutrient loading and long-term ecological degradation in urban water systems.",
    technology: [
      "Bioremediation",
      "Nano Bubble Systems",
      "Decorative Floating Wetlands",
      "Predictive Analytics Monitoring",
    ],
    results: [
      "Reduced organic loading",
      "Improved ecosystem health",
      "Enhanced oxygen levels",
      "Long-term monitoring integration",
    ],
    metrics: [
      "COD Reduction",
      "Improved Clarity",
      "Reduced Odor",
      "Smart Monitoring",
    ],
  },
];

const stats = [
  ["₹33 Cr+", "Integrated Restoration Capability"],
  ["5+", "Major Water Restoration Projects"],
  ["24/7", "Smart Monitoring Infrastructure"],
  ["Multi-Tech", "Integrated Restoration Approach"],
];

const CaseStudies = () => {
  return (
    <div className="relative overflow-hidden bg-[#071018] text-white">
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-100px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-140px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
            {/* HERO IMAGE */}
            <img
                src={case_study_hero}
                alt="Water Restoration Projects"
                className="h-full w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[#071018]/55" />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#071018]/20 via-[#071018]/55 to-[#071018]" />

            {/* OPTIONAL PREMIUM GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_45%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 min-h-screen flex items-center py-28">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-cyan-300">
                <BarChart3 size={14} />
                Real Projects • Smart Restoration • Proven Results
              </div>

              <h1 className="mt-10 text-5xl md:text-7xl xl:text-[92px] font-black leading-[0.9]">
                Water Restoration
                <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                  Case Studies
                </span>
              </h1>

              <p className="mt-10 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-300">
                Integrated lake rejuvenation, smart monitoring, oxygenation,
                bioremediation and algae control projects transforming polluted
                water bodies into sustainable ecological environments.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <Link to="/contact">
                  <button className="group rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-12px_rgba(34,211,238,0.45)]">
                    <span className="flex items-center gap-2">
                      Discuss Restoration Project
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                    Request Technical Proposal
                  </button>
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-emerald-400/5" />

                    <div className="relative z-10">
                      <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
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
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-28">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid gap-14 items-center lg:grid-cols-[0.95fr_1.05fr] ${
                  index % 2 !== 0
                    ? "lg:grid-cols-[1.05fr_0.95fr]"
                    : ""
                }`}
              >
                {/* IMAGE */}
                <div
                  className={`relative ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-cyan-400/20 to-emerald-400/10 blur-3xl" />

                  <div className="relative overflow-hidden rounded-[42px] border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[720px] w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-transparent" />

                    {/* BEFORE / AFTER */}
                    <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-red-400/20 bg-[#0c151d]/80 p-5 backdrop-blur-xl">
                        <h4 className="text-sm uppercase tracking-[0.2em] text-red-300">
                          Before
                        </h4>

                        <p className="mt-2 text-sm text-slate-300">
                          Polluted water body with algae bloom and poor
                          ecological conditions.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-emerald-400/20 bg-[#0c151d]/80 p-5 backdrop-blur-xl">
                        <h4 className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                          After
                        </h4>

                        <p className="mt-2 text-sm text-slate-300">
                          Improved oxygenation, restored clarity and ecological
                          rejuvenation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className={`${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-cyan-300">
                    <MapPinned size={14} />
                    {project.location}
                  </div>

                  <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                    {project.title}
                  </h2>

                  {/* PROBLEM */}
                  <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-400/10 text-red-300">
                        <ShieldCheck size={26} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-black">
                          Problem
                        </h3>

                        <p className="mt-3 leading-relaxed text-slate-400">
                          {project.problem}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* TECHNOLOGY */}
                  <div className="mt-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <Cpu size={26} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-black">
                          Technologies Used
                        </h3>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      {project.technology.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-200 backdrop-blur-xl"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RESULTS */}
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                          <Sparkles size={26} />
                        </div>

                        <h3 className="text-2xl font-black">
                          Results
                        </h3>
                      </div>

                      <div className="mt-8 space-y-4">
                        {project.results.map((result, resultIndex) => (
                          <div
                            key={resultIndex}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-1 text-emerald-300"
                            />

                            <p className="text-slate-300">
                              {result}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* METRICS */}
                    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                          <BarChart3 size={26} />
                        </div>

                        <h3 className="text-2xl font-black">
                          Key Metrics
                        </h3>
                      </div>

                      <div className="mt-8 space-y-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <div
                            key={metricIndex}
                            className="rounded-2xl border border-white/10 bg-[#0d1820]/80 px-5 py-4"
                          >
                            <p className="text-slate-300">
                              {metric}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-emerald-400/10" />

            <div className="relative z-10 px-8 py-20 md:px-20 md:py-24 text-center">
              <div className="mx-auto max-w-5xl">
                <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                  Engineering Proven At Scale
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                  Build Your Next
                  <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                    Water Restoration Project
                  </span>
                </h2>

                <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-400">
                  Integrated ecological engineering, oxygenation,
                  bioremediation, algae control and smart monitoring systems for
                  sustainable water body restoration.
                </p>

                <div className="mt-12 flex flex-wrap justify-center gap-5">
                  <Link to="/contact">
                    <button className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-12px_rgba(34,211,238,0.45)]">
                      Start Restoration Discussion
                    </button>
                  </Link>

                  <Link to="/technologies">
                    <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                      Explore Technologies
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;