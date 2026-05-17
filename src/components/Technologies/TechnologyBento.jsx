import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  BrainCircuit,
  Cpu,
  Droplets,
  Leaf,
  Orbit,
  Radar,
  Recycle,
  Waves,
} from "lucide-react";

import BioMain from "../../assets/images/bio-main.png";
import MechanicalMain from "../../assets/images/mechanical-main.png";
import MonitoringMain from "../../assets/images/monitoring-main.png";
import HybridMain from "../../assets/images/hybrid-main.png";

const cards = [
  {
    title: "Biological Systems",
    description:
      "Nature-based ecosystem recovery through microbial restoration and floating ecological infrastructure.",
    image: BioMain,
    icon: Leaf,
    href: "/technologies/biological-systems",
    size: "large",
    gradient:
      "from-emerald-500/25 via-emerald-400/10 to-transparent",
  },

  {
    title: "Mechanical Systems",
    description:
      "Nano bubble oxygenation, aeration and sludge infrastructure engineered for high-efficiency recovery.",
    image: MechanicalMain,
    icon: Waves,
    href: "/technologies/mechanical-systems",
    size: "medium",
    gradient:
      "from-cyan-500/25 via-cyan-400/10 to-transparent",
  },

  {
    title: "Smart Monitoring",
    description:
      "AI-powered environmental analytics, MPC buoys and real-time ecological intelligence.",
    image: MonitoringMain,
    icon: Radar,
    href: "/technologies/smart-monitoring",
    size: "small",
    gradient:
      "from-sky-500/25 via-cyan-400/10 to-transparent",
  },

  {
    title: "Hybrid Ecosystems",
    description:
      "Integrated environmental restoration systems combining biology, monitoring and oxygenation.",
    image: HybridMain,
    icon: Orbit,
    href: "/technologies/hybrid-systems",
    size: "wide",
    gradient:
      "from-cyan-500/20 via-emerald-400/10 to-transparent",
  },
];

const bottomFeatures = [
  {
    title: "Bioremediation",
    icon: Recycle,
  },

  {
    title: "Nano Bubble",
    icon: Droplets,
  },

  {
    title: "IoT Monitoring",
    icon: Cpu,
  },

  {
    title: "AI Analytics",
    icon: BrainCircuit,
  },
];

const TechnologyBento = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    className="relative overflow-hidden bg-[#060d14] py-20 md:py-28 xl:py-36">
      {/* GRID */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:120px_120px]
        "
      />

      {/* AMBIENT */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* CYAN */}
        <div
          className="
            absolute left-[5%] top-[5%]
            h-[700px] w-[700px]
            rounded-full
            bg-cyan-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />

        {/* EMERALD */}
        <div
          className="
            absolute right-[0%] bottom-[0%]
            h-[650px] w-[650px]
            rounded-full
            bg-emerald-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-5xl">
          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              inline-flex items-center gap-3
              rounded-full
              border border-cyan-400/20
              bg-cyan-400/10
              px-5 py-2
              backdrop-blur-xl
            "
          >
            <Cpu
              size={14}
              className="text-cyan-300"
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.24em]
                text-cyan-200
              "
            >
              Integrated Technology Architecture
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="
              mt-8
              text-4xl sm:text-5xl md:text-6xl xl:text-7xl
              font-black
              leading-[0.92]
              tracking-[-0.05em]
              text-white
            "
          >
            Environmental
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
              Technology Ecosystem
            </span>
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              mt-10
              max-w-3xl
              text-base
sm:text-lg
md:text-xl
              leading-relaxed
              text-slate-300
            "
          >
            Integrated environmental technologies engineered
            for intelligent ecological recovery, smart water
            infrastructure and long-term sustainability.
          </motion.p>
        </div>

        {/* BENTO GRID */}
        <div
  className="
    mt-16 md:mt-24
    grid
    gap-5 md:gap-7 xl:gap-8

    lg:grid-cols-6
    lg:auto-rows-[260px]
  "
>
          {cards.map((item, index) => {
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
                  group relative overflow-hidden

                  rounded-[28px] md:rounded-[36px] xl:rounded-[42px]

                  border border-white/10
                  bg-white/[0.07]

                  backdrop-blur-2xl

                  shadow-[0_0_40px_-25px_rgba(34,211,238,0.18)]

                  transition-[transform,border-color,box-shadow]
                  duration-500

                  md:hover:-translate-y-2
                  md:hover:border-cyan-400/20
                  md:hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]

                  ${
                    item.size === "large"
                      ? "lg:col-span-3 lg:row-span-2"
                      : ""
                  }

                  ${
                    item.size === "medium"
                      ? "lg:col-span-3 lg:row-span-1"
                      : ""
                  }

                  ${
                    item.size === "small"
                      ? "lg:col-span-2 lg:row-span-1"
                      : ""
                  }

                  ${
                    item.size === "wide"
                      ? "lg:col-span-4 lg:row-span-1"
                      : ""
                  }
                `}
              >
                <Link
                //   to={item.href}
                  to="#"
                  className="block h-full"
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
                      md:group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#060d14]/95
                      via-[#060d14]/55
                      to-[#060d14]/10
                      md:from-[#060d14]
                      md:via-[#060d14]/40
                    "
                  />

                  {/* GLOW */}
                  <div
                    className={`
                      absolute inset-0
                      bg-gradient-to-br
                      ${item.gradient}
                    `}
                  />

                  {/* CONTENT */}
                  <div
                    className="
                      relative z-10
                      flex h-full flex-col justify-between
                      p-5 sm:p-7 xl:p-8
                    "
                  >
                    {/* TOP */}
                    <div className="flex items-start justify-between gap-5">
                      {/* ICON */}
                      <div
                        className="
                          flex h-[60px] w-[60px]
sm:h-[72px] sm:w-[72px]
                          items-center justify-center
                          rounded-3xl
                          border border-white/10
                          bg-[#081219]/50
                          backdrop-blur-xl
                        "
                      >
                        <Icon
                          size={34}
                          className="text-cyan-300"
                        />
                      </div>

                      {/* ARROW */}
                      <div
                        className="
                          flex h-14 w-14
                          items-center justify-center
                          rounded-2xl
                          border border-white/10
                          bg-white/5
                          backdrop-blur-xl
                        "
                      >
                        <ArrowRight
                          size={22}
                          className="
                            text-cyan-300
                            transition-transform duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </div>
                    </div>

                    {/* BOTTOM */}
                    <div>
                      {/* LABEL */}
                      <div
                        className="
                          inline-flex items-center gap-2
                          rounded-full
                          border border-cyan-400/20
                          bg-cyan-400/10
                          px-4 py-2
                          backdrop-blur-xl
                        "
                      >
                        <div className="h-2 w-2 rounded-full bg-cyan-400" />

                        <span
                          className="
                            text-xs
                            uppercase
                            tracking-[0.18em]
                            text-cyan-200
                          "
                        >
                          Integrated Technology
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3
                        className={`
                          mt-6
                          font-black
                          leading-[0.95]
                          tracking-[-0.04em]
                          text-white

                          ${
                            item.size === "large"
                              ? "text-3xl sm:text-4xl xl:text-5xl"
                              : "text-2xl sm:text-3xl xl:text-4xl"
                          }
                        `}
                      >
                        {item.title}
                      </h3>

                      {/* DESC */}
                      <p
                        className="
                          mt-5
                          max-w-xl
                          text-sm
sm:text-base
leading-relaxed
                          text-slate-300
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[28px]
md:rounded-[36px]
xl:rounded-[42px]
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-10 md:p-14
          "
        >
          {/* BG */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-cyan-400/10
              via-transparent
              to-emerald-400/10
            "
          />

          <div
            className="
              relative z-10
              grid gap-10
              lg:grid-cols-[1fr_0.9fr]
              xl:items-center
            "
          >
            {/* LEFT */}
            <div>
              <h3
                className="
                  text-4xl
                  md:text-6xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-white
                "
              >
                Technologies Designed
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-cyan-300
                    to-emerald-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  To Work Together
                </span>
              </h3>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-slate-300
                "
              >
                Our restoration systems integrate biological,
                mechanical and intelligent monitoring
                technologies into one adaptive environmental
                ecosystem.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid gap-4 sm:grid-cols-2">
              {bottomFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      rounded-[28px]
                      border border-white/10
                      bg-[#081219]/50
                      px-6 py-5
                      backdrop-blur-2xl
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          flex h-12 w-12
                          items-center justify-center
                          rounded-2xl
                          border border-cyan-400/20
                          bg-cyan-400/10
                        "
                      >
                        <Icon
                          size={20}
                          className="text-cyan-300"
                        />
                      </div>

                      <p className="text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechnologyBento;