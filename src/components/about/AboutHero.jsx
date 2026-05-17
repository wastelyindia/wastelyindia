
import { motion } from "framer-motion";
import bgImage from "../../assets/images/Wastely_hero_1.jpeg";

const floatingCards = [
  {
    title: "Water Recovery",
    value: "98%",
    size: "large",
    position:
      "top-[10%] right-[-2%] lg:top-[12%] lg:right-[2%] xl:right-[6%]",
  },

  {
    title: "Circular Infrastructure",
    value: "120+",
    size: "medium",
    position:
      "top-[40%] right-[2%] lg:right-[8%]",
  },

  {
    title: "Cities Impacted",
    value: "25+",
    size: "medium",
    position:
      "bottom-[10%] right-[-1%] lg:bottom-[14%] lg:right-[4%]",
  },
];


const microPills = [
  {
    text: "Ecosystem Intelligence",
    position:
      "top-[18%] left-[34%] lg:left-[42%]",
  },

  {
    text: "Regenerative Systems",
    position:
      "top-[36%] left-[38%] lg:left-[46%]",
  },

  {
    text: "Water Circularity",
    position:
      "bottom-[28%] left-[36%] lg:left-[44%]",
  },

  {
    text: "Smart Infrastructure",
    position:
      "bottom-[16%] left-[32%] lg:left-[40%]",
  },
];

const particles = Array.from({ length: 18 });

const AboutHero = () => {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#081219]">

      {/* ====================================================== */}
      {/* BACKGROUND IMAGE */}
      {/* ====================================================== */}

      <motion.div
        animate={{
          scale: [1.02, 1.08],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <img
          src={bgImage}
          alt="About Wastely Aqua"
          className="
            h-full
            w-full
            object-cover
            brightness-[0.42]
            contrast-125
            saturate-[1.15]
            opacity-40
          "
        />
      </motion.div>

      {/* ====================================================== */}
      {/* CINEMATIC VIGNETTE */}
      {/* ====================================================== */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_10%,#081219_92%)]
        "
      />

      {/* ====================================================== */}
      {/* DARK OVERLAY */}
      {/* ====================================================== */}

      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#081219]
          via-[#081219]/78
          to-[#081219]/55
        "
      />

      {/* ====================================================== */}
      {/* ATMOSPHERIC FOG */}
      {/* ====================================================== */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-44
          left-1/2
          -translate-x-1/2
          h-[500px]
          w-[900px]
          lg:h-[600px]
          lg:w-[1300px]
          rounded-full
          bg-cyan-400/10
          blur-[90px]
          lg:blur-[180px]
          opacity-80
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-0
          left-[-120px]
          h-[500px]
          w-[500px]
          lg:h-[750px]
          lg:w-[750px]
          rounded-full
          bg-emerald-500/10
          blur-[90px]
          lg:blur-[180px]
          opacity-70
        "
      />

      {/* ====================================================== */}
      {/* GRADIENT MESH */}
      {/* ====================================================== */}

      <div className="absolute inset-0 opacity-50">

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[8%]
            left-[8%]
            h-[320px]
            w-[320px]
            lg:h-[520px]
            lg:w-[520px]
            rounded-full
            bg-cyan-500/20
            blur-[70px]
            lg:blur-[140px]
          "
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[0%]
            right-[8%]
            h-[300px]
            w-[300px]
            lg:h-[480px]
            lg:w-[480px]
            rounded-full
            bg-emerald-500/20
            blur-[70px]
            lg:blur-[140px]
          "
        />

      </div>

      {/* ====================================================== */}
      {/* LIGHT BEAMS */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          top-0
          left-[18%]
          h-full
          w-[180px]
          lg:w-[300px]
          rotate-[12deg]
          bg-gradient-to-b
          from-cyan-400/10
          to-transparent
          blur-[70px]
          lg:blur-[140px]
          opacity-70
        "
      />

      <div
        className="
          absolute
          top-0
          right-[12%]
          h-full
          w-[160px]
          lg:w-[240px]
          -rotate-[12deg]
          bg-gradient-to-b
          from-emerald-400/10
          to-transparent
          blur-[70px]
          lg:blur-[140px]
          opacity-60
        "
      />

      {/* ====================================================== */}
      {/* FOREGROUND DEPTH FOG */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          bottom-[-140px]
          left-[-100px]
          h-[220px]
          w-[500px]
          lg:h-[320px]
          lg:w-[800px]
          rounded-full
          bg-cyan-400/10
          blur-[80px]
          lg:blur-[150px]
          opacity-60
        "
      />

      <div
        className="
          absolute
          bottom-[-160px]
          right-[-120px]
          h-[220px]
          w-[450px]
          lg:h-[300px]
          lg:w-[700px]
          rounded-full
          bg-emerald-400/10
          blur-[80px]
          lg:blur-[150px]
          opacity-50
        "
      />

      {/* ====================================================== */}
      {/* NOISE / GRAIN */}
      {/* ====================================================== */}

      <div
        className="
          absolute inset-0
          opacity-[0.07]
          mix-blend-overlay
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

      {/* ====================================================== */}
      {/* FLOATING PARTICLES */}
      {/* ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {particles.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              x: [0, 30, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              rounded-full
              bg-cyan-200/20
              blur-md
            "
            style={{
              width: `${5 + (i % 6)}px`,
              height: `${5 + (i % 6)}px`,
              left: `${(i * 6) % 100}%`,
              top: `${(i * 5) % 100}%`,
            }}
          />
        ))}

      </div>

      {/* ====================================================== */}
      {/* ARCHITECTURAL LINES */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          top-0
          right-[24%]
          hidden lg:block
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-cyan-400/10
          to-transparent
        "
      />

      <div
        className="
          absolute
          top-0
          left-[14%]
          hidden lg:block
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-emerald-400/10
          to-transparent
        "
      />

      {/* ====================================================== */}
      {/* HUGE BACKGROUND TYPOGRAPHY */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          right-[-8%]
          top-1/2
          -translate-y-1/2
          pointer-events-none
          select-none
          text-[120px]
          sm:text-[180px]
          lg:text-[260px]
          xl:text-[420px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.015]
        "
      >
        AQUA
      </div>

      {/* ====================================================== */}
      {/* MAIN CONTENT */}
      {/* ====================================================== */}

      <div
        className="
          relative z-20
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[90rem]
          items-center
          px-5
          pt-28
          pb-20
          sm:px-6
          sm:pt-32
          sm:pb-24
          lg:px-8
          lg:pt-36
          lg:pb-28
          lg:items-end
        "
      >

        <div
          className="
            grid
            w-full
            items-center
            gap-20
            lg:grid-cols-[0.95fr_1.05fr]
            llg:gap-28
            xl:gap-24
          "
        >

          {/* ================================================== */}
          {/* LEFT CONTENT */}
          {/* ================================================== */}

          <div className="relative z-10 max-w-4xl">

            {/* LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border border-cyan-400/20
                bg-white/[0.04]
                px-5
                py-3
                backdrop-blur-2xl
                shadow-[0_0_40px_rgba(34,211,238,0.08)]
                sm:mb-10
                sm:px-6
              "
            >
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-cyan-200
                  sm:text-[11px]
                "
              >
                About Wastely Aqua
              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
                text-[3.2rem]
                font-semibold
                leading-[0.88]
                tracking-[-0.06em]
                text-white
                sm:text-[4.5rem]
                md:text-[6rem]
                xl:text-[8.5rem]
              "
            >
              We Restore

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-cyan-200
                  to-emerald-400
                  bg-clip-text
                  text-transparent
                  sm:mt-3
                "
              >
                Environmental
              </span>

              <span className="block">
                Balance
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="
                mt-8
                max-w-xl
                text-[15px]
                leading-relaxed
                text-slate-300
                sm:mt-10
                sm:text-lg
                md:text-xl
                lg:max-w-2xl
              "
            >
              Wastely Aqua designs advanced wastewater,
              recycling and environmental infrastructure
              systems that regenerate ecosystems, optimize
              water intelligence and engineer sustainable
              futures through restorative innovation.
            </motion.p>

            {/* MINI METRICS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.35,
              }}
              className="
                mt-12
                grid
                grid-cols-3
                gap-5
                sm:mt-14
                sm:flex
                sm:flex-wrap
                sm:gap-8
              "
            >

              {[
                {
                  number: "120+",
                  label: "Projects",
                },

                {
                  number: "98%",
                  label: "Recovery",
                },

                {
                  number: "25+",
                  label: "Cities",
                },
              ].map((item, index) => (
                <div key={index}>

                  <h3
                    className="
                      text-[2rem]
                      font-semibold
                      text-white
                      sm:text-4xl
                    "
                  >
                    {item.number}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-slate-500
                      sm:text-sm
                    "
                  >
                    {item.label}
                  </p>

                </div>
              ))}

            </motion.div>

          </div>

          {/* ================================================== */}
          {/* RIGHT VISUAL ECOSYSTEM */}
          {/* ================================================== */}

          <div
  className="
    relative
    hidden
    md:block
    min-h-[620px]
    lg:min-h-[720px]
    overflow-hidden
  "
>

            {/* FLOATING MICRO PILLS */}

            {microPills.map((pill, index) => (
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
                  z-30
                  ${pill.position}
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  px-3
py-2
lg:px-5
lg:py-3
                  backdrop-blur-2xl
                  shadow-[0_0_30px_rgba(34,211,238,0.08)]
                  lg:px-5
                  lg:py-3
                  opacity-80
                `}
              >
                <span
                  className="
                    whitespace-nowrap
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    text-slate-300
                    lg:text-[11px]
                  "
                >
                  {pill.text}
                </span>
              </motion.div>
            ))}

            {/* MAIN FLOATING CARDS */}

            {floatingCards.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: [0, -16, 0],
                }}
                transition={{
                  opacity: {
                    duration: 1,
                    delay: 0.4 + index * 0.2,
                  },

                  y: {
                    duration: 7 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`
                  absolute
                  z-20
                  ${item.position}
                  ${
                    item.size === "large"
                      ? "w-[210px] p-4 lg:w-[320px] lg:p-8"
                      : "w-[180px] p-4 lg:w-[260px] lg:p-7"
                  }
                  overflow-hidden
                  rounded-[30px]
                  lg:rounded-[34px]
                  border border-white/10
                  bg-white/[0.05]
                  backdrop-blur-2xl
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
shadow-cyan-500/10
                `}
              >

                {/* GLASS REFLECTION */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/10
                    via-transparent
                    to-transparent
                    opacity-40
                  "
                />

                {/* INNER GLOW */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-500/10
                    to-emerald-500/5
                  "
                />

                {/* TOP EDGE */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-300/40
                    to-transparent
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-cyan-300
                      shadow-[0_0_20px_rgba(34,211,238,0.9)]
                    "
                  />

                  <p
                    className="
                      mt-5
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-slate-400
                      lg:mt-6
                      lg:text-xs
                    "
                  >
                    {item.title}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-3xl
lg:text-5xl
font-semibold
text-white
                    "
                  >
                    {item.value}
                  </h3>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

      {/* ====================================================== */}
      {/* ANGLED STORY TRANSITION */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          bottom-[-140px]
          left-0
          h-[300px]
          w-full
          origin-bottom-left
          skew-y-[-3deg]
          bg-[#081219]
          will-change-transform
        "
      />

      {/* ====================================================== */}
      {/* FOG TRANSITION */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          bottom-[-160px]
          left-1/2
          h-[240px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[80px]
          lg:h-[300px]
          lg:w-[1300px]
          lg:blur-[140px]
        "
      />

    </section>
  );
};

export default AboutHero;