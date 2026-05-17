// import { motion } from "framer-motion";

// const floatingParticles = Array.from({ length: 14 });

// const CinematicDivider = () => {
//   return (
//     <section className="relative py-36 md:py-52 overflow-hidden bg-[#081219]">

//       {/* ====================================================== */}
//       {/* ATMOSPHERIC BACKGROUND */}
//       {/* ====================================================== */}

//       {/* TOP GLOW */}
//       <div
//         className="
//           absolute
//           top-[-200px]
//           left-1/2
//           -translate-x-1/2
//           w-[1200px]
//           h-[500px]
//           bg-cyan-500/10
//           blur-[160px]
//           rounded-full
//           opacity-80
//         "
//       />

//       {/* LEFT EMERALD GLOW */}
//       <motion.div
//         animate={{
//           x: [0, 40, 0],
//           y: [0, -20, 0],
//         }}
//         transition={{
//           duration: 14,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           left-[-120px]
//           top-[10%]
//           w-[600px]
//           h-[600px]
//           bg-emerald-500/10
//           blur-[140px]
//           rounded-full
//         "
//       />

//       {/* RIGHT CYAN GLOW */}
//       <motion.div
//         animate={{
//           x: [0, -30, 0],
//           y: [0, 25, 0],
//         }}
//         transition={{
//           duration: 16,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           right-[-100px]
//           bottom-[0%]
//           w-[700px]
//           h-[700px]
//           bg-cyan-500/10
//           blur-[160px]
//           rounded-full
//         "
//       />

//       {/* ====================================================== */}
//       {/* RADIAL ATMOSPHERIC LIGHT */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute inset-0
//           bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_65%)]
//         "
//       />

//       {/* ====================================================== */}
//       {/* ARCHITECTURAL GRID */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute inset-0
//           opacity-[0.03]
//         "
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//           `,
//           backgroundSize: "80px 80px",
//         }}
//       />

//       {/* ====================================================== */}
//       {/* NOISE TEXTURE */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute inset-0
//           opacity-[0.06]
//           mix-blend-overlay
//           pointer-events-none
//         "
//         style={{
//           backgroundImage:
//             "url('https://www.transparenttextures.com/patterns/noise.png')",
//         }}
//       />

//       {/* ====================================================== */}
//       {/* FLOATING PARTICLES */}
//       {/* ====================================================== */}

//       <div className="absolute inset-0 overflow-hidden">

//         {floatingParticles.map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -70, 0],
//               x: [0, 35, 0],
//               opacity: [0.1, 0.45, 0.1],
//             }}
//             transition={{
//               duration: 10 + i,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               rounded-full
//               bg-cyan-200/20
//               blur-md
//             "
//             style={{
//               width: `${5 + (i % 7)}px`,
//               height: `${5 + (i % 7)}px`,
//               left: `${(i * 7) % 100}%`,
//               top: `${(i * 6) % 100}%`,
//             }}
//           />
//         ))}

//       </div>

//       {/* ====================================================== */}
//       {/* HUGE BACKGROUND TYPOGRAPHY */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           -translate-x-1/2
//           -translate-y-1/2
//           text-[140px]
//           md:text-[240px]
//           xl:text-[340px]
//           font-black
//           tracking-[-0.08em]
//           leading-none
//           text-white/[0.02]
//           pointer-events-none
//           select-none
//           whitespace-nowrap
//         "
//       >
//         RESTORE
//       </div>

//       {/* ====================================================== */}
//       {/* LIGHT BEAMS */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute
//           top-0
//           left-[20%]
//           w-[240px]
//           h-full
//           bg-gradient-to-b
//           from-cyan-400/10
//           to-transparent
//           blur-[140px]
//           rotate-[12deg]
//           opacity-70
//         "
//       />

//       <div
//         className="
//           absolute
//           top-0
//           right-[18%]
//           w-[220px]
//           h-full
//           bg-gradient-to-b
//           from-emerald-400/10
//           to-transparent
//           blur-[140px]
//           -rotate-[12deg]
//           opacity-60
//         "
//       />

//       {/* ====================================================== */}
//       {/* CENTER CONTENT */}
//       {/* ====================================================== */}

//       <div
//         className="
//           relative z-10
//           max-w-6xl
//           mx-auto
//           px-6
//           text-center
//         "
//       >

//         {/* MICRO LABEL */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.8,
//           }}
//           viewport={{ once: true }}
//           className="
//             inline-flex
//             items-center
//             gap-3
//             bg-white/[0.04]
//             border border-cyan-400/20
//             backdrop-blur-2xl
//             rounded-full
//             px-6
//             py-3
//             mb-12
//             shadow-[0_0_40px_rgba(34,211,238,0.08)]
//           "
//         >

//           <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

//           <span
//             className="
//               text-cyan-200
//               uppercase
//               tracking-[0.28em]
//               text-[11px]
//               font-medium
//             "
//           >
//             Ecological Philosophy
//           </span>

//         </motion.div>

//         {/* QUOTE */}

//         <motion.blockquote
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           viewport={{ once: true }}
//           className="
//             relative
//             text-4xl
//             sm:text-5xl
//             md:text-6xl
//             xl:text-7xl
//             font-semibold
//             leading-[1]
//             tracking-[-0.05em]
//             text-white
//             max-w-5xl
//             mx-auto
//           "
//         >

//           <span className="block">
//             Every Infrastructure
//           </span>

//           <span
//             className="
//               block
//               mt-3
//               bg-gradient-to-r
//               from-cyan-300
//               via-cyan-200
//               to-emerald-400
//               bg-clip-text
//               text-transparent
//             "
//           >
//             System We Build
//           </span>

//           <span className="block mt-3">
//             Is Designed To Return
//           </span>

//           <span className="block mt-3">
//             Balance Back To Ecosystems
//           </span>

//         </motion.blockquote>

//         {/* SUBTEXT */}

//         <motion.p
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//             delay: 0.2,
//           }}
//           viewport={{ once: true }}
//           className="
//             mt-12
//             max-w-3xl
//             mx-auto
//             text-lg
//             md:text-xl
//             leading-relaxed
//             text-slate-400
//           "
//         >
//           Wastely Aqua believes environmental engineering
//           should not only optimize infrastructure — it should
//           regenerate ecosystems, restore water intelligence
//           and create resilient environmental futures.
//         </motion.p>

//         {/* ATMOSPHERIC LINE */}

//         <motion.div
//           initial={{
//             width: 0,
//             opacity: 0,
//           }}
//           whileInView={{
//             width: "220px",
//             opacity: 1,
//           }}
//           transition={{
//             duration: 1.2,
//             delay: 0.4,
//           }}
//           viewport={{ once: true }}
//           className="
//             h-px
//             mx-auto
//             mt-16
//             bg-gradient-to-r
//             from-transparent
//             via-cyan-400/50
//             to-transparent
//           "
//         />

//       </div>

//       {/* ====================================================== */}
//       {/* BOTTOM FOG TRANSITION */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute
//           bottom-[-140px]
//           left-0
//           w-full
//           h-[300px]
//           bg-[#081219]
//           skew-y-[-3deg]
//           origin-bottom-left
//         "
//       />

//       <div
//         className="
//           absolute
//           bottom-[-180px]
//           left-1/2
//           -translate-x-1/2
//           w-[1300px]
//           h-[320px]
//           bg-cyan-500/10
//           blur-[160px]
//           rounded-full
//         "
//       />

//     </section>
//   );
// };

// export default CinematicDivider;



import { motion } from "framer-motion";

const floatingParticles = Array.from({ length: 12 });

const CinematicDivider = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#081219] py-24 sm:py-32 lg:py-44">

      {/* ====================================================== */}
      {/* ATMOSPHERIC BACKGROUND */}
      {/* ====================================================== */}

      {/* TOP CYAN GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          top-[-160px]
          left-1/2
          h-[260px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/6
          blur-[90px]
          opacity-70
          lg:top-[-200px]
          lg:h-[500px]
          lg:w-[1200px]
          lg:blur-[160px]
        "
      />

      {/* LEFT EMERALD GLOW */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-140px]
          top-[8%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-emerald-500/8
          blur-[70px]
          lg:left-[-120px]
          lg:h-[600px]
          lg:w-[600px]
          lg:blur-[140px]
        "
      />

      {/* RIGHT CYAN GLOW */}

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-120px]
          bottom-[0%]
          h-[340px]
          w-[340px]
          rounded-full
          bg-cyan-500/8
          blur-[80px]
          lg:right-[-100px]
          lg:h-[700px]
          lg:w-[700px]
          lg:blur-[160px]
        "
      />

      {/* ====================================================== */}
      {/* RADIAL ATMOSPHERIC LIGHT */}
      {/* ====================================================== */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_65%)]
        "
      />

      {/* ====================================================== */}
      {/* ARCHITECTURAL GRID */}
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
          backgroundSize: "80px 80px",
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
      {/* FLOATING PARTICLES */}
      {/* ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {floatingParticles.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
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
              bg-cyan-200/20
              blur-md
            "
            style={{
              width: `${4 + (i % 6)}px`,
              height: `${4 + (i % 6)}px`,
              left: `${(i * 8) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
          />
        ))}

      </div>

      {/* ====================================================== */}
      {/* HUGE BACKGROUND TYPOGRAPHY */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          select-none
          text-[90px]
          sm:text-[140px]
          md:text-[220px]
          xl:text-[340px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.015]
        "
      >
        RESTORE
      </div>

      {/* ====================================================== */}
      {/* LIGHT BEAMS */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-[18%]
          h-full
          w-[120px]
          rotate-[12deg]
          bg-gradient-to-b
          from-cyan-400/8
          to-transparent
          blur-[70px]
          opacity-40
          lg:w-[240px]
          lg:blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-[16%]
          h-full
          w-[120px]
          -rotate-[12deg]
          bg-gradient-to-b
          from-emerald-400/8
          to-transparent
          blur-[70px]
          opacity-40
          lg:w-[220px]
          lg:blur-[120px]
        "
      />

      {/* ====================================================== */}
      {/* CENTER CONTENT */}
      {/* ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto
          max-w-6xl
          px-5
          text-center
          sm:px-6
          lg:px-8
        "
      >

        {/* MICRO LABEL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            border border-cyan-400/20
            bg-white/[0.04]
            px-5
            py-2.5
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(34,211,238,0.08)]
            sm:mb-12
            sm:px-6
            sm:py-3
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
            Ecological Philosophy
          </span>

        </motion.div>

        {/* QUOTE */}

        <motion.blockquote
          initial={{
            opacity: 0,
            y: 40,
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
            mx-auto
            max-w-5xl
            text-[2.3rem]
            font-semibold
            leading-[0.95]
            tracking-[-0.05em]
            text-white
            sm:text-5xl
            md:text-6xl
            xl:text-7xl
          "
        >

          <span className="block">
            Every Infrastructure
          </span>

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
            System We Build
          </span>

          <span className="mt-2 block sm:mt-3">
            Is Designed To Return
          </span>

          <span className="mt-2 block sm:mt-3">
            Balance Back To Ecosystems
          </span>

        </motion.blockquote>

        {/* SUBTEXT */}

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
            sm:mt-12
            sm:text-lg
            md:text-xl
          "
        >
          Wastely Aqua believes environmental engineering
          should not only optimize infrastructure — it should
          regenerate ecosystems, restore water intelligence
          and create resilient environmental futures.
        </motion.p>

        {/* ATMOSPHERIC LINE */}

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: "180px",
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-12
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/50
            to-transparent
            sm:mt-16
            sm:w-[220px]
          "
        />

      </div>

      {/* ====================================================== */}
      {/* BOTTOM FOG TRANSITION */}
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
          bg-cyan-500/8
          blur-[90px]
          lg:bottom-[-180px]
          lg:h-[320px]
          lg:w-[1300px]
          lg:blur-[160px]
        "
      />

    </section>
  );
};

export default CinematicDivider;