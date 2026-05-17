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

const technologies = [
  {
    title: "Biological Systems",
    description:
      "Nature-based restoration technologies using microbial ecosystems, floating wetlands and ecological recovery systems.",
    icon: Leaf,
    href: "/technologies/biological-systems",
    tags: [
      "Bioremediation",
      "Floating Wetlands",
      "Ecosystem Recovery",
    ],
    gradient:
      "from-emerald-400/20 via-emerald-400/5 to-transparent",
    glow:
      "shadow-[0_0_80px_-20px_rgba(16,185,129,0.25)]",
  },

  {
    title: "Mechanical Systems",
    description:
      "Industrial environmental infrastructure engineered for oxygenation, aeration and sludge processing.",
    icon: Waves,
    href: "/technologies/mechanical-systems",
    tags: [
      "Nano Bubble",
      "LTSD Dryer",
      "Oxygenation",
    ],
    gradient:
      "from-cyan-400/20 via-cyan-400/5 to-transparent",
    glow:
      "shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]",
  },

  {
    title: "Smart Monitoring",
    description:
      "AI-powered environmental intelligence with MPC buoys, IoT systems and predictive analytics.",
    icon: Radar,
    href: "/technologies/smart-monitoring",
    tags: [
      "IoT Systems",
      "MPC Buoy",
      "AI Analytics",
    ],
    gradient:
      "from-sky-400/20 via-sky-400/5 to-transparent",
    glow:
      "shadow-[0_0_80px_-20px_rgba(56,189,248,0.25)]",
  },

  {
    title: "Hybrid Ecosystems",
    description:
      "Integrated restoration ecosystems combining biology, oxygenation and intelligent monitoring systems.",
    icon: Orbit,
    href: "/technologies/hybrid-systems",
    tags: [
      "Integrated Recovery",
      "Hybrid Systems",
      "Multi-Tech",
    ],
    gradient:
      "from-cyan-400/20 via-emerald-400/10 to-transparent",
    glow:
      "shadow-[0_0_80px_-20px_rgba(45,212,191,0.25)]",
  },
];

const TechnologyCard = () => {
  return (
    <section className="relative overflow-hidden bg-[#081219] py-32">
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
            h-[650px] w-[650px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

        {/* EMERALD */}
        <div
          className="
            absolute right-[0%] bottom-[0%]
            h-[600px] w-[600px]
            rounded-full
            bg-emerald-500/10
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
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
              Environmental Technology Ecosystem
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
              text-5xl
              md:text-7xl
              font-black
              leading-[0.92]
              tracking-[-0.05em]
              text-white
            "
          >
            Integrated
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
              Technology Platforms
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
              text-lg
              md:text-xl
              leading-relaxed
              text-slate-300
            "
          >
            Advanced environmental engineering technologies
            designed for intelligent ecological recovery,
            oxygenation, monitoring and integrated water
            infrastructure systems.
          </motion.p>
        </div>

        {/* CARD GRID */}
        <div className="mt-24 grid gap-8 xl:grid-cols-2">
          {technologies.map((item, index) => {
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
                className="group"
              >
                <Link
                //   to={item.href}
                  to="#"
                  className={`
                    relative
                    block
                    overflow-hidden
                    rounded-[42px]
                    border border-white/10
                    bg-white/5
                    p-10
                    backdrop-blur-2xl
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-cyan-400/20
                    ${item.glow}
                  `}
                >
                  {/* BG */}
                  <div
                    className={`
                      absolute inset-0
                      opacity-0
                      transition-all duration-500
                      group-hover:opacity-100
                      bg-gradient-to-br
                      ${item.gradient}
                    `}
                  />

                  {/* TOP */}
                  <div
                    className="
                      relative z-10
                      flex flex-col gap-8
                      md:flex-row md:items-start md:justify-between
                    "
                  >
                    {/* LEFT */}
                    <div className="max-w-xl">
                      {/* ICON */}
                      <div
                        className="
                          flex h-20 w-20
                          items-center justify-center
                          rounded-3xl
                          border border-white/10
                          bg-[#081219]/50
                        "
                      >
                        <Icon
                          size={38}
                          className="text-cyan-300"
                        />
                      </div>

                      {/* TITLE */}
                      <h3
                        className="
                          mt-8
                          text-4xl
                          md:text-5xl
                          font-black
                          leading-[0.95]
                          tracking-[-0.04em]
                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      {/* DESC */}
                      <p
                        className="
                          mt-6
                          text-lg
                          leading-relaxed
                          text-slate-300
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* ARROW */}
                    <div
                      className="
                        flex h-18 w-18
                        items-center justify-center
                        rounded-3xl
                        border border-white/10
                        bg-white/5
                        transition-all duration-300
                        group-hover:bg-cyan-400/10
                      "
                    >
                      <ArrowRight
                        size={30}
                        className="
                          text-cyan-300
                          transition-transform duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </div>

                  {/* TAGS */}
                  <div className="relative z-10 mt-12 flex flex-wrap gap-4">
                    {item.tags.map((tag, idx) => (
                      <div
                        key={idx}
                        className="
                          rounded-full
                          border border-white/10
                          bg-[#081219]/50
                          px-5 py-3
                          backdrop-blur-xl
                        "
                      >
                        <span className="text-sm text-slate-200">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* FOOTER */}
                  <div
                    className="
                      relative z-10
                      mt-12
                      flex flex-col gap-5
                      border-t border-white/10
                      pt-8
                      md:flex-row md:items-center md:justify-between
                    "
                  >
                    {/* LABEL */}
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-cyan-400" />

                      <span
                        className="
                          text-xs
                          uppercase
                          tracking-[0.2em]
                          text-slate-400
                        "
                      >
                        Integrated Environmental Technology
                      </span>
                    </div>

                    {/* CTA */}
                    <div
                      className="
                        inline-flex items-center gap-3
                        text-cyan-300
                      "
                    >
                      <span className="text-sm">
                        Explore Technology
                      </span>

                      <ArrowRight
                        size={18}
                        className="
                          transition-transform duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </div>

                  {/* FLOATING LIGHT */}
                  <div
                    className="
                      absolute -right-20 -top-20
                      h-[220px] w-[220px]
                      rounded-full
                      bg-cyan-400/10
                      blur-[100px]
                    "
                  />
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
            rounded-[42px]
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
              xl:grid-cols-[1fr_0.9fr]
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
                Engineered As
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
                  One Intelligent Ecosystem
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
                Our technologies are not isolated products —
                they are engineered as interconnected
                environmental ecosystems optimized for
                intelligent restoration and sustainable water
                infrastructure.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: Droplets,
                  text: "Ecological Recovery",
                },

                {
                  icon: Radar,
                  text: "Smart Monitoring",
                },

                {
                  icon: Recycle,
                  text: "Integrated Restoration",
                },

                {
                  icon: BrainCircuit,
                  text: "AI Water Intelligence",
                },
              ].map((item, index) => {
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
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyCard;