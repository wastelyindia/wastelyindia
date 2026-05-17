import { motion } from "framer-motion";
import {
  Leaf,
  Globe,
  Recycle,
  Waves,
  ArrowUpRight,
} from "lucide-react";

import sustainabilityImg from "../../assets/images/Wastely_hero_8.jpeg";

const floatingMetrics = [
  {
    value: "98%",
    label: "Recovery Efficiency",
    position:
      "top-[10%] left-[2%] xl:left-[6%]",
    glow: "from-emerald-500/20 to-cyan-500/10",
  },

  {
    value: "120M+",
    label: "Liters Recycled",
    position:
      "bottom-[10%] left-[-4%] xl:left-[0%]",
    glow: "from-cyan-500/20 to-emerald-500/10",
  },

  {
    value: "25+",
    label: "Cities Impacted",
    position:
      "top-[8%] right-[-2%] xl:right-[2%]",
    glow: "from-emerald-500/20 to-white/5",
  },
];

const sustainabilityNodes = [
  {
    icon: Leaf,
    title: "Regenerative Infrastructure",
    description:
      "Systems designed to restore ecological balance.",
    position:
      "top-[24%] right-[4%]",
  },

  {
    icon: Recycle,
    title: "Circular Recovery",
    description:
      "Advanced wastewater reuse and recovery intelligence.",
    position:
      "bottom-[6%] right-[2%]",
  },

  {
    icon: Globe,
    title: "Environmental Resilience",
    description:
      "Future-ready sustainability for resilient ecosystems.",
    position:
      "top-[30%] left-[4%]",
  },
];

const particles = Array.from({ length: 14 });

const SustainabilitySection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#081219] py-24 sm:py-28 lg:py-44">

      {/* ====================================================== */}
      {/* ATMOSPHERIC BACKGROUND */}
      {/* ====================================================== */}

      {/* TOP EMERALD GLOW */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          top-[-180px]
          left-[-120px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-emerald-500/8
          blur-[90px]
          lg:top-[-320px]
          lg:left-[-240px]
          lg:h-[1200px]
          lg:w-[1200px]
          lg:blur-[180px]
        "
      />

      {/* RIGHT AQUA GLOW */}

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[-120px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-500/8
          blur-[90px]
          lg:bottom-[-320px]
          lg:right-[-200px]
          lg:h-[1100px]
          lg:w-[1100px]
          lg:blur-[180px]
        "
      />

      {/* ====================================================== */}
      {/* RADIAL LIGHTING */}
      {/* ====================================================== */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06),transparent_70%)]
        "
      />

      {/* ====================================================== */}
      {/* BLUEPRINT GRID */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.015]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* ====================================================== */}
      {/* NOISE TEXTURE */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.03]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

      {/* ====================================================== */}
      {/* ARCHITECTURAL LINES */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-[16%]
          hidden lg:block
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-emerald-400/10
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-[14%]
          hidden lg:block
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-cyan-400/10
          to-transparent
        "
      />

      {/* ====================================================== */}
      {/* FLOATING PARTICLES */}
      {/* ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {particles.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -70, 0],
              x: [0, 30, 0],
              opacity: [0.08, 0.35, 0.08],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              rounded-full
              bg-emerald-200/20
              blur-md
            "
            style={{
              width: `${4 + (i % 6)}px`,
              height: `${4 + (i % 6)}px`,
              left: `${(i * 6) % 100}%`,
              top: `${(i * 5) % 100}%`,
            }}
          />
        ))}

      </div>

      {/* ====================================================== */}
      {/* HUGE TYPOGRAPHY */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[4%]
          -translate-x-1/2
          whitespace-nowrap
          select-none
          text-[60px]
          sm:text-[110px]
          md:text-[200px]
          xl:text-[380px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.015]
        "
      >
        SUSTAINABILITY
      </div>

      {/* ====================================================== */}
      {/* LIGHT SHAFTS */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-[22%]
          h-full
          w-[120px]
          rotate-[10deg]
          bg-gradient-to-b
          from-emerald-400/8
          to-transparent
          blur-[70px]
          opacity-40
          lg:w-[240px]
          lg:blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-[18%]
          h-full
          w-[120px]
          -rotate-[10deg]
          bg-gradient-to-b
          from-cyan-400/8
          to-transparent
          blur-[70px]
          opacity-40
          lg:w-[220px]
          lg:blur-[140px]
        "
      />

      {/* ====================================================== */}
      {/* MAIN CONTENT */}
      {/* ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto
          max-w-[90rem]
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* ================================================== */}
        {/* TOP EDITORIAL SECTION */}
        {/* ================================================== */}

        <div className="mx-auto max-w-[82rem] text-center">

          {/* LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="
              mb-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border border-emerald-400/20
              bg-emerald-500/10
              px-5
              py-2.5
              backdrop-blur-2xl
              sm:mb-10
              sm:px-6
              sm:py-3
            "
          >

            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-emerald-200
                sm:text-[11px]
              "
            >
              Sustainability Ecosystem
            </span>

          </motion.div>

          {/* TITLE */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="
              text-[2.8rem]
              font-semibold
              leading-[0.9]
              tracking-[-0.06em]
              text-white
              sm:text-5xl
              lg:text-7xl
              xl:text-[7.5rem]
            "
          >
            Engineering Systems

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-emerald-300
                via-emerald-200
                to-cyan-400
                bg-clip-text
                text-transparent
                sm:mt-3
              "
            >
              That Give Back
            </span>

            <span className="mt-2 block sm:mt-3">
              To Ecosystems
            </span>

          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-[15px]
              leading-relaxed
              text-slate-400
              sm:mt-10
              sm:text-lg
            "
          >
            Wastely Aqua transforms environmental
            infrastructure into intelligent regenerative
            systems that restore ecosystems, optimize water
            recovery and support resilient sustainable
            futures.
          </motion.p>

        </div>

        {/* ================================================== */}
        {/* IMMERSIVE ECOSYSTEM CHAMBER */}
        {/* ================================================== */}

        <div className="relative mt-20 sm:mt-24 lg:mt-32 lg:min-h-[980px]">

          {/* ================================================= */}
          {/* CENTER IMAGE CHAMBER */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="
              relative
              mx-auto
              max-w-5xl
            "
          >

            {/* OUTER GLOW */}

            <div
              className="
                absolute
                -inset-6
                rounded-[40px]
                bg-gradient-to-r
                from-emerald-500/15
                via-cyan-500/10
                to-emerald-500/10
                blur-[60px]
                lg:-inset-12
                lg:rounded-[60px]
                lg:blur-[120px]
              "
            />

            {/* FLOATING RINGS */}

            <div
              className="
                absolute
                inset-[-30px]
                rounded-[36px]
                border
                border-emerald-400/10
                lg:inset-[-80px]
                lg:rounded-[60px]
              "
            />

            <div
              className="
                absolute
                inset-[-14px]
                rounded-[30px]
                border
                border-cyan-400/10
                lg:inset-[-40px]
                lg:rounded-[50px]
              "
            />

            {/* IMAGE CONTAINER */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/10
                shadow-[0_20px_100px_rgba(16,185,129,0.14)]
                lg:rounded-[44px]
              "
            >

              {/* IMAGE */}

              <motion.img
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={sustainabilityImg}
                alt="Sustainability Ecosystem"
                className="
                  h-[380px]
                  w-full
                  object-cover
                  sm:h-[520px]
                  lg:h-[760px]
                "
              />

              {/* OVERLAY */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#081219]
                  via-[#081219]/10
                  to-transparent
                "
              />

              {/* WATER REFLECTION */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[35%]
                  w-full
                  bg-gradient-to-t
                  from-emerald-500/10
                  to-transparent
                  blur-[20px]
                "
              />

              {/* GLASS REFLECTION */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-white/10
                  via-transparent
                  to-transparent
                  opacity-50
                "
              />

            </motion.div>

          </motion.div>

          {/* ================================================= */}
          {/* FLOATING METRICS */}
          {/* ================================================= */}

          <div className="hidden xl:block">

            {floatingMetrics.map((item, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -14, 0],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`
                  absolute
                  z-20
                  ${item.position}
                  w-[220px]
                  overflow-hidden
                  rounded-[30px]
                  border border-white/10
                  bg-white/[0.05]
                  p-6
                  backdrop-blur-2xl
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                `}
              >

                {/* INNER GLOW */}

                <div
                  className={`
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${item.glow}
                  `}
                />

                {/* GLASS REFLECTION */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-white/10
                    via-transparent
                    to-transparent
                    opacity-40
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      h-3 w-3
                      rounded-full
                      bg-emerald-300
                      shadow-[0_0_20px_rgba(16,185,129,0.9)]
                    "
                  />

                  <h3
                    className="
                      mt-5
                      text-4xl
                      font-semibold
                      text-white
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      uppercase
                      tracking-[0.18em]
                      text-slate-400
                    "
                  >
                    {item.label}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

          {/* ================================================= */}
          {/* FLOATING ENVIRONMENTAL NODES */}
          {/* ================================================= */}

          <div className="hidden xl:block">

            {sustainabilityNodes.map((node, index) => {
              const Icon = node.icon;

              return (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 7 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`
                    absolute
                    z-30
                    ${node.position}
                    // ${index === 2 ? "xl:translate-x-6" : ""}
                    max-w-[230px]
                    overflow-hidden
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.04]
                    p-6
                    backdrop-blur-2xl
                    shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  `}
                >

                  {/* INNER GLOW */}

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-br
                      from-emerald-500/10
                      to-cyan-500/5
                    "
                  />

                  {/* GLASS REFLECTION */}

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-br
                      from-white/10
                      via-transparent
                      to-transparent
                      opacity-40
                    "
                  />

                  <div className="relative z-10">

                    <div
                      className="
                        flex h-14 w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border border-emerald-400/20
                        bg-emerald-500/10
                      "
                    >

                      <Icon
                        size={26}
                        className="text-emerald-300"
                      />

                    </div>

                    <h3
                      className="
                        mt-5
                        text-xl
                        font-semibold
                        leading-tight
                        text-white
                      "
                    >
                      {node.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-relaxed
                        text-slate-400
                      "
                    >
                      {node.description}
                    </p>

                    <div className="mt-5">

                      <button
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-sm
                          uppercase
                          tracking-[0.18em]
                          text-emerald-200
                        "
                      >
                        Explore

                        <ArrowUpRight size={16} />

                      </button>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* ================================================== */}
        {/* BOTTOM IMPACT BAR */}
        {/* ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[28px]
            border border-white/10
            bg-white/[0.04]
            p-6
            backdrop-blur-2xl
            sm:mt-20
            sm:p-8
            lg:rounded-[40px]
            lg:p-14
          "
        >

          {/* INNER GLOW */}

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-emerald-500/10
              via-cyan-500/5
              to-emerald-500/10
            "
          />

          {/* GLASS REFLECTION */}

          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-white/10
              via-transparent
              to-transparent
              opacity-40
            "
          />

          <div
            className="
              relative z-10
              grid
              gap-8
              md:grid-cols-3
              md:items-center
              lg:gap-10
            "
          >

            <div>

              <div
                className="
                  flex h-14 w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border border-emerald-400/20
                  bg-emerald-500/10
                  sm:h-16
                  sm:w-16
                "
              >

                <Waves
                  size={28}
                  className="text-emerald-300"
                />

              </div>

              <h3
                className="
                  mt-5
                  text-[2rem]
                  font-semibold
                  leading-tight
                  text-white
                  sm:text-3xl
                "
              >
                Environmental Intelligence
              </h3>

            </div>

            <p
              className="
                text-[15px]
                leading-relaxed
                text-slate-300
                md:col-span-2
                sm:text-lg
              "
            >
              Our sustainability ecosystem combines
              intelligent engineering, circular recovery
              infrastructure and regenerative environmental
              systems designed to restore ecosystems while
              creating resilient long-term sustainability
              outcomes for industries and communities.
            </p>

          </div>

        </motion.div>

      </div>

      {/* ====================================================== */}
      {/* BOTTOM ATMOSPHERIC TRANSITION */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          bottom-[-120px]
          left-0
          h-[220px]
          w-full
          origin-bottom-left
          skew-y-[-3deg]
          bg-[#081219]
          will-change-transform
          lg:bottom-[-140px]
          lg:h-[300px]
        "
      />

      {/* FOG TRANSITION */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-140px]
          left-1/2
          h-[180px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-emerald-500/8
          blur-[90px]
          lg:bottom-[-180px]
          lg:h-[340px]
          lg:w-[1400px]
          lg:blur-[180px]
        "
      />

    </section>
  );
};

export default SustainabilitySection;