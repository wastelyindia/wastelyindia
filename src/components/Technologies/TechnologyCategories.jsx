import { motion } from "framer-motion";

import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Leaf,
  Orbit,
  Radar,
  Recycle,
  Waves,
} from "lucide-react";

import BiologicalImg from "../../assets/images/technology-biological.png";
import MechanicalImg from "../../assets/images/technology-mechanical.png";
import MonitoringImg from "../../assets/images/technology-monitoring.png";
import HybridImg from "../../assets/images/technology-hybrid.png";

const categories = [
  {
    title: "Biological Systems",
    subtitle:
      "Nature-Based Ecological Recovery",
    description:
      "Integrated biological restoration systems using microbial ecosystems, floating wetlands and ecological regeneration technologies for long-term aquatic sustainability.",
    image: BiologicalImg,
    icon: Leaf,
    accent: "from-emerald-400/20 to-cyan-400/5",
    border: "border-emerald-400/20",
    iconColor: "text-emerald-300",
    tags: [
      "Bioremediation",
      "Floating Wetlands",
      "Ecological Recovery",
      "Microbial Systems",
    ],
    size: "large",
  },

  {
    title: "Mechanical Systems",
    subtitle:
      "Advanced Environmental Infrastructure",
    description:
      "High-efficiency oxygenation, aeration and sludge processing systems engineered for industrial-scale environmental restoration and wastewater optimization.",
    image: MechanicalImg,
    icon: Activity,
    accent: "from-cyan-400/20 to-emerald-400/5",
    border: "border-cyan-400/20",
    iconColor: "text-cyan-300",
    tags: [
      "Nano Bubble",
      "Aeration",
      "LTSD Dryer",
      "Oxygenation",
    ],
    size: "medium",
  },

  {
    title: "Smart Monitoring",
    subtitle:
      "AI-Powered Water Intelligence",
    description:
      "Real-time analytics, IoT monitoring and predictive environmental intelligence systems for advanced ecosystem management.",
    image: MonitoringImg,
    icon: Radar,
    accent: "from-cyan-400/20 to-cyan-500/5",
    border: "border-cyan-400/20",
    iconColor: "text-cyan-300",
    tags: [
      "MPC Buoy",
      "IoT Systems",
      "Predictive AI",
      "Analytics",
    ],
    size: "medium",
  },

  {
    title: "Hybrid Restoration",
    subtitle:
      "Integrated Multi-Technology Ecosystems",
    description:
      "Combining nano bubble oxygenation, biological systems and smart monitoring into intelligent ecological restoration ecosystems.",
    image: HybridImg,
    icon: Orbit,
    accent: "from-emerald-400/20 to-cyan-400/10",
    border: "border-emerald-400/20",
    iconColor: "text-emerald-300",
    tags: [
      "Nano + Biology",
      "Integrated Systems",
      "Smart Restoration",
      "Ecological Recovery",
    ],
    size: "wide",
  },
];

const TechnologyCategories = () => {
  return (
    <section className="relative overflow-hidden bg-[#081219] py-32">
      {/* GRID */}
      <div
        className="
          absolute inset-0
          opacity-[0.04]
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:90px_90px]
        "
      />

      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* CYAN */}
        <div
          className="
            absolute left-[-120px] top-[10%]
            h-[520px] w-[520px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

        {/* EMERALD */}
        <div
          className="
            absolute right-[-120px] bottom-[5%]
            h-[520px] w-[520px]
            rounded-full
            bg-emerald-500/10
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="max-w-4xl">
          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-3
              rounded-full
              border border-cyan-400/20
              bg-cyan-400/10
              px-5 py-2
              backdrop-blur-xl
            "
          >
            <BrainCircuit
              size={14}
              className="text-cyan-300"
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-cyan-200
              "
            >
              Technology Ecosystem
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-8
              text-4xl
              md:text-6xl
              xl:text-7xl
              font-black
              leading-[0.95]
              tracking-[-0.04em]
              text-white
            "
          >
            Classified Environmental
            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-300
                via-cyan-400
                to-emerald-400
                bg-clip-text
                text-transparent
              "
            >
              Technology Systems
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              md:text-xl
              leading-relaxed
              text-slate-400
            "
          >
            Biological, mechanical and intelligent monitoring
            technologies engineered to function as integrated
            environmental restoration ecosystems.
          </p>
        </div>

        {/* BENTO GRID */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-12
            gap-6
            auto-rows-[320px]
          "
        >
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[40px]
                  border ${item.border}
                  bg-white/5
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]

                  ${
                    item.size === "large"
                      ? "xl:col-span-7 xl:row-span-2"
                      : ""
                  }

                  ${
                    item.size === "medium"
                      ? "xl:col-span-5 xl:row-span-1"
                      : ""
                  }

                  ${
                    item.size === "wide"
                      ? "xl:col-span-5 xl:row-span-2"
                      : ""
                  }
                `}
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#081219]
                    via-[#081219]/55
                    to-[#081219]/10
                  "
                />

                {/* ACCENT */}
                <div
                  className={`
                    absolute inset-0
                    bg-gradient-to-br
                    ${item.accent}
                  `}
                />

                {/* AMBIENT */}
                <div
                  className="
                    absolute right-[-60px] top-[-60px]
                    h-[220px] w-[220px]
                    rounded-full
                    bg-white/5
                    blur-3xl
                  "
                />

                {/* CONTENT */}
                <div
                  className="
                    relative z-10
                    flex h-full flex-col justify-between
                    p-8 md:p-10
                  "
                >
                  {/* TOP */}
                  <div>
                    {/* ICON */}
                    <div
                      className="
                        flex h-18 w-18
                        items-center justify-center
                        rounded-3xl
                        border border-white/10
                        bg-[#081219]/50
                        backdrop-blur-xl
                      "
                    >
                      <Icon
                        size={34}
                        className={item.iconColor}
                      />
                    </div>

                    {/* SUBTITLE */}
                    <p
                      className="
                        mt-8
                        text-xs
                        uppercase
                        tracking-[0.22em]
                        text-cyan-200
                      "
                    >
                      {item.subtitle}
                    </p>

                    {/* TITLE */}
                    <h3
                      className={`
                        mt-4
                        ${
                          item.size === "large"
                            ? "text-5xl"
                            : "text-3xl"
                        }
                        font-black
                        leading-tight
                        text-white
                      `}
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-5
                        max-w-2xl
                        leading-relaxed
                        text-slate-300
                      "
                    >
                      {item.description}
                    </p>

                    {/* TAGS */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {item.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="
                            rounded-full
                            border border-white/10
                            bg-[#081219]/50
                            px-4 py-2
                            text-sm
                            text-slate-200
                            backdrop-blur-xl
                          "
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-10 flex items-center justify-between">
                    {/* LEFT */}
                    <div
                      className="
                        flex items-center gap-2
                        text-sm
                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                      "
                    >
                      <div className="h-2 w-2 rounded-full bg-cyan-400" />

                      Integrated Infrastructure
                    </div>

                    {/* BUTTON */}
                    <div
                      className="
                        flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        border border-white/10
                        bg-[#081219]/50
                        backdrop-blur-xl
                      "
                    >
                      <ArrowUpRight
                        size={24}
                        className="
                          text-cyan-300
                          transition-transform duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* LARGE ORBITS */}
                {item.size === "large" && (
                  <>
                    <div
                      className="
                        absolute right-10 bottom-10
                        h-[180px] w-[180px]
                        rounded-full
                        border border-cyan-400/10
                      "
                    />

                    <div
                      className="
                        absolute right-[-40px] bottom-[-40px]
                        h-[280px] w-[280px]
                        rounded-full
                        border border-white/5
                      "
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyCategories;