
import { motion } from "framer-motion";

import missionImg from "../../assets/images/Wastely_hero_6.jpeg";
import visionImg from "../../assets/images/Wastely_hero_9.jpeg";

const restorationStats = [
  {
    value: "120M+",
    label: "Liters Recycled",
  },

  {
    value: "25+",
    label: "Cities Impacted",
  },

  {
    value: "98%",
    label: "Recovery Efficiency",
  },
];

const floatingPills = [
  {
    text: "Regenerative Systems",
    position:
      "top-[14%] right-[12%]",
  },

  {
    text: "Environmental Intelligence",
    position:
      "top-[30%] right-[4%]",
  },

  {
    text: "Circular Infrastructure",
    position:
      "bottom-[18%] right-[10%]",
  },
];

const MissionVision = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#081219] py-24 sm:py-28 lg:py-36">

      {/* ====================================================== */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          top-[-250px]
          left-[-150px]
          w-[500px]
h-[500px]
blur-[80px]
lg:w-[900px]
lg:h-[900px]
lg:blur-[180px]
          bg-cyan-500/10
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-[-300px]
          right-[-200px]
          w-[1000px]
          h-[1000px]
          bg-emerald-500/10
          blur-[180px]
          rounded-full
        "
      />

      {/* GRID LINES */}

      <div
        className="
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

      {/* NOISE */}

      <div
        className="
          absolute inset-0
          opacity-[0.03]
          mix-blend-overlay
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

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

        {/* ====================================================== */}
        {/* MISSION SECTION */}
        {/* ====================================================== */}

        <div className="relative py-12 lg:min-h-[950px]">

          {/* HUGE TYPOGRAPHY */}

          <div
            className="
              absolute
              top-[-40px]
              left-[-20px]
              text-[64px]
sm:text-[100px]
md:text-[180px]
xl:text-[320px]
              font-black
              tracking-[-0.08em]
              leading-none
              text-white/[0.015]
              pointer-events-none
              select-none
            "
          >
            MISSION
          </div>

          {/* VERTICAL LINE */}

          <div
            className="
              hidden lg:block
absolute
left-[12px]
              top-[120px]
              bottom-[120px]
              w-px
              bg-gradient-to-b
              from-cyan-400/40
              via-cyan-400/10
              to-transparent
            "
          />

          {/* GLOW DOT */}

          <div
            className="
              absolute
              left-[5px]
              top-[220px]
              w-4
              h-4
              rounded-full
              bg-cyan-300
              shadow-[0_0_30px_rgba(34,211,238,0.9)]
            "
          />

          <div
            className="
              grid
              lg:grid-cols-[0.9fr_1.1fr]
              gap-12 lg:gap-20
              items-center
            "
          >

            {/* IMAGE SIDE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* OUTER GLOW */}

              <div
                className="
                  absolute
                  -inset-8
                  bg-gradient-to-r
                  from-cyan-500/20
                  to-emerald-500/10
                  blur-[80px]
                  rounded-[50px]
                "
              />

              {/* LIGHT BEAM */}

              <div
                className="
                  absolute
                  top-[-100px]
                  left-[30%]
                  w-[220px]
                  h-[120%]
                  bg-gradient-to-b
                  from-cyan-400/10
                  to-transparent
                  blur-[120px]
                  rotate-[10deg]
                "
              />

              {/* IMAGE CONTAINER */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px] lg:rounded-[40px]
                  border border-white/10
                  shadow-[0_0_60px_rgba(6,182,212,0.12)]
                "
              >

                {/* IMAGE */}

                <motion.img
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  src={missionImg}
                  alt="Mission"
                  className="
                    w-full
                    h-[420px]
sm:h-[520px]
lg:h-[760px]
                    object-cover
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#081219]
                    via-[#081219]/20
                    to-transparent
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

              </div>

            </motion.div>

            {/* CONTENT SIDE */}

            <div className="relative">

              {/* FLOATING GLASS PANEL */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
                className="
                  relative
                  xl:-ml-20
                  bg-white/[0.05]
                  border border-white/10
                  backdrop-blur-2xl
                  rounded-[28px] lg:rounded-[40px]
                  p-6 sm:p-8 lg:p-14
                  overflow-hidden
                  shadow-[0_0_80px_rgba(15,23,42,0.45)]
                "
              >

                {/* GLOW BORDER */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-[28px] lg:rounded-[40px]
                    border
                    border-cyan-400/10
                  "
                />

                {/* INNER GLOW */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-cyan-500/10
                    to-emerald-500/5
                  "
                />

                {/* TOP LIGHT EDGE */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-300/50
                    to-transparent
                  "
                />

                {/* BLUEPRINT LINES */}

                <div
                  className="
                    absolute
                    right-10
                    top-10
                    w-28
                    h-28
                    border
                    border-cyan-400/10
                    rounded-full
                  "
                />

                <div
                  className="
                    absolute
                    right-16
                    top-16
                    w-16
                    h-16
                    border
                    border-cyan-400/10
                    rounded-full
                  "
                />

                <div className="relative z-10">

                  {/* LABEL */}

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-3
                      bg-cyan-500/10
                      border border-cyan-400/20
                      rounded-full
                      px-5
                      py-3
                    "
                  >

                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                    <span
                      className="
                        text-cyan-200
                        uppercase
                        tracking-[0.25em]
                        text-[11px]
                        font-medium
                      "
                    >
                      Our Mission
                    </span>

                  </div>

                  {/* TITLE */}

                  <h2
                    className="
                      mt-10
                      text-[2.8rem]
sm:text-5xl
lg:text-7xl
                      font-semibold
                      leading-[0.92]
                      tracking-[-0.05em]
                      text-white
                    "
                  >
                    Engineering

                    <span
                      className="
                        block
                        mt-2
                        bg-gradient-to-r
                        from-cyan-300
                        to-emerald-400
                        bg-clip-text
                        text-transparent
                      "
                    >
                      Regenerative
                    </span>

                    <span className="block mt-2">
                      Infrastructure
                    </span>

                  </h2>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-10
                      text-[15px]
sm:text-lg
                      leading-relaxed
                      text-slate-300
                    "
                  >
                    Wastely Aqua develops advanced wastewater
                    and environmental infrastructure systems
                    designed to restore ecological balance,
                    optimize water intelligence and accelerate
                    sustainable transformation across
                    industries and communities.
                  </p>

                  <p
                    className="
                      mt-6
                      leading-relaxed
                      text-slate-400
                    "
                  >
                    Through intelligent engineering, circular
                    recovery systems and future-ready
                    environmental innovation, we create
                    infrastructure that gives more back to
                    ecosystems than it consumes.
                  </p>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

        {/* ====================================================== */}
        {/* VISION SECTION */}
        {/* ====================================================== */}

        <div className="relative mt-40 py-12 lg:min-h-[950px]">

          {/* HUGE TYPOGRAPHY */}

          <div
            className="
              absolute
              right-[-20px]
              top-[-80px]
              text-[64px]
sm:text-[100px]
md:text-[180px]
xl:text-[320px]
              font-black
              tracking-[-0.08em]
              leading-none
              text-white/[0.015]
              pointer-events-none
              select-none
            "
          >
            VISION
          </div>

          {/* FLOATING PILLS */}

          <div className="hidden xl:block">

            {floatingPills.map((pill, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`
                  absolute
                  ${pill.position}
                  px-5
                  py-3
                  rounded-full
                  bg-white/[0.04]
                  border border-white/10
                  backdrop-blur-2xl
                  shadow-[0_0_30px_rgba(34,211,238,0.08)]
                `}
              >

                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.22em]
                    text-slate-300
                    whitespace-nowrap
                  "
                >
                  {pill.text}
                </span>

              </motion.div>
            ))}

          </div>

          <div
            className="
              grid
              lg:grid-cols-[1fr_0.9fr]
              gap-14 lg:gap-24
              items-center
            "
          >

            {/* CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className="relative z-10"
            >

              {/* LABEL */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-emerald-500/10
                  border border-emerald-400/20
                  rounded-full
                  px-5
                  py-3
                "
              >

                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                <span
                  className="
                    text-emerald-200
                    uppercase
                    tracking-[0.25em]
                    text-[11px]
                    font-medium
                  "
                >
                  Our Vision
                </span>

              </div>

              {/* TITLE */}

              <h2
                className="
                  mt-10
                  text-[2.8rem]
sm:text-5xl
lg:text-7xl
                  font-semibold
                  leading-[0.92]
                  tracking-[-0.05em]
                  text-white
                "
              >
                Restoring

                <span
                  className="
                    block
                    mt-2
                    bg-gradient-to-r
                    from-emerald-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  Ecosystems
                </span>

                <span className="block mt-2">
                  Through Intelligence
                </span>

              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-10
                  text-[15px]
sm:text-lg
                  leading-relaxed
                  text-slate-300
                  max-w-2xl
                "
              >
                We envision a future where environmental
                infrastructure systems actively regenerate
                ecosystems, strengthen water resilience and
                create circular sustainability models for
                communities and industries worldwide.
              </p>

              <p
                className="
                  mt-6
                  leading-relaxed
                  text-slate-400
                  max-w-2xl
                "
              >
                Our long-term vision is to redefine how
                environmental engineering interacts with
                nature — transforming infrastructure into an
                intelligent restorative force.
              </p>

              {/* RESTORATION NUMBERS */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-3
                  gap-5
                  mt-16
                  max-w-4xl
                "
              >

                {restorationStats.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                    }}
                    className="
                      relative
                      overflow-hidden
                      bg-white/[0.05]
                      border border-white/10
                      backdrop-blur-2xl
                      rounded-[30px]
                      p-5 lg:p-7
                      shadow-[0_0_50px_rgba(6,182,212,0.08)]
                    "
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

                      <h3
                        className="
                          text-3xl lg:text-4xl
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

            </motion.div>

            {/* FLOATING IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className="
                relative
                xl:translate-x-12
              "
            >

              {/* OUTER GLOW */}

              <div
                className="
                  absolute
                  -inset-10
                  bg-gradient-to-r
                  from-emerald-500/20
                  to-cyan-500/10
                  blur-[90px]
                  rounded-[60px]
                "
              />

              {/* IMAGE */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[44px]
                  border border-white/10
                  shadow-[0_0_70px_rgba(16,185,129,0.12)]
                "
              >

                <motion.img
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  src={visionImg}
                  alt="Vision"
                  className="
                    w-full
                    h-[420px]
sm:h-[520px]
lg:h-[760px]
                    object-cover
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

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionVision;