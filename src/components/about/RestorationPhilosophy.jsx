// import { motion } from "framer-motion";

// const philosophyCards = [
//   {
//     number: "01",
//     title: "Restore",
//     description:
//       "We engineer environmental systems designed to restore ecological balance, regenerate water intelligence and create long-term sustainability for future ecosystems.",
//     glow: "from-cyan-500/20 to-emerald-500/10",
//   },

//   {
//     number: "02",
//     title: "Recover",
//     description:
//       "Our infrastructure solutions transform wastewater into reusable environmental resources through advanced circular recovery technologies and intelligent treatment systems.",
//     glow: "from-emerald-500/20 to-cyan-500/10",
//   },

//   {
//     number: "03",
//     title: "Regenerate",
//     description:
//       "Every engineered system is designed to give back more to ecosystems than it consumes through regenerative environmental infrastructure and restoration-focused innovation.",
//     glow: "from-cyan-400/20 to-white/5",
//   },

//   {
//     number: "04",
//     title: "Reuse",
//     description:
//       "We believe sustainable infrastructure must support circular environmental models that minimize waste, optimize water reuse and strengthen resilient communities.",
//     glow: "from-emerald-400/20 to-cyan-500/10",
//   },
// ];

// const floatingPills = [
//   {
//     text: "Regenerative Engineering",
//     position: "top-[12%] right-[10%]",
//   },

//   {
//     text: "Circular Infrastructure",
//     position: "top-[28%] right-[4%]",
//   },

//   {
//     text: "Environmental Intelligence",
//     position: "bottom-[30%] left-[52%]",
//   },

//   {
//     text: "Water Circularity",
//     position: "bottom-[12%] right-[14%]",
//   },
// ];

// const particles = Array.from({ length: 18 });

// const RestorationPhilosophy = () => {
//   return (
//     <section className="relative py-40 overflow-hidden bg-[#081219]">

//       {/* ====================================================== */}
//       {/* ATMOSPHERIC BACKGROUND */}
//       {/* ====================================================== */}

//       {/* TOP GLOW */}

//       <div
//         className="
//           absolute
//           top-[-300px]
//           left-[-200px]
//           w-[1000px]
//           h-[1000px]
//           bg-emerald-500/10
//           blur-[180px]
//           rounded-full
//         "
//       />

//       {/* BOTTOM GLOW */}

//       <div
//         className="
//           absolute
//           bottom-[-300px]
//           right-[-200px]
//           w-[1000px]
//           h-[1000px]
//           bg-cyan-500/10
//           blur-[180px]
//           rounded-full
//         "
//       />

//       {/* ====================================================== */}
//       {/* RADIAL ATMOSPHERE */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute inset-0
//           bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_65%)]
//         "
//       />

//       {/* ====================================================== */}
//       {/* BLUEPRINT GRID */}
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
//           backgroundSize: "90px 90px",
//         }}
//       />

//       {/* ====================================================== */}
//       {/* ARCHITECTURAL LINES */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute
//           top-0
//           left-[14%]
//           w-px
//           h-full
//           bg-gradient-to-b
//           from-transparent
//           via-emerald-400/10
//           to-transparent
//         "
//       />

//       <div
//         className="
//           absolute
//           top-0
//           right-[18%]
//           w-px
//           h-full
//           bg-gradient-to-b
//           from-transparent
//           via-cyan-400/10
//           to-transparent
//         "
//       />

//       {/* ====================================================== */}
//       {/* GRAIN / NOISE */}
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

//         {particles.map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -60, 0],
//               x: [0, 30, 0],
//               opacity: [0.12, 0.4, 0.12],
//             }}
//             transition={{
//               duration: 10 + i,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               rounded-full
//               bg-emerald-200/20
//               blur-md
//             "
//             style={{
//               width: `${5 + (i % 6)}px`,
//               height: `${5 + (i % 6)}px`,
//               left: `${(i * 6) % 100}%`,
//               top: `${(i * 5) % 100}%`,
//             }}
//           />
//         ))}

//       </div>

//       {/* ====================================================== */}
//       {/* HUGE TYPOGRAPHY */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute
//           left-[-5%]
//           top-[5%]
//           text-[140px]
//           md:text-[240px]
//           xl:text-[360px]
//           font-black
//           tracking-[-0.08em]
//           leading-none
//           text-white/[0.02]
//           pointer-events-none
//           select-none
//         "
//       >
//         RESTORE
//       </div>

//       {/* ====================================================== */}
//       {/* FLOATING MICRO PILLS */}
//       {/* ====================================================== */}

//       <div className="hidden xl:block">

//         {floatingPills.map((pill, index) => (
//           <motion.div
//             key={index}
//             animate={{
//               y: [0, -10, 0],
//             }}
//             transition={{
//               duration: 6 + index,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className={`
//               absolute
//               ${pill.position}
//               px-5
//               py-3
//               rounded-full
//               bg-white/[0.04]
//               border border-white/10
//               backdrop-blur-2xl
//               shadow-[0_0_30px_rgba(16,185,129,0.08)]
//             `}
//           >

//             <span
//               className="
//                 text-[11px]
//                 uppercase
//                 tracking-[0.22em]
//                 text-slate-300
//                 whitespace-nowrap
//               "
//             >
//               {pill.text}
//             </span>

//           </motion.div>
//         ))}

//       </div>

//       {/* ====================================================== */}
//       {/* MAIN CONTENT */}
//       {/* ====================================================== */}

//       <div
//         className="
//           relative z-10
//           max-w-7xl
//           mx-auto
//           px-6
//         "
//       >

//         <div
//           className="
//             grid
//             lg:grid-cols-[0.9fr_1.1fr]
//             gap-20
//             items-start
//           "
//         >

//           {/* ================================================== */}
//           {/* LEFT SIDE */}
//           {/* ================================================== */}

//           <div className="relative lg:sticky lg:top-32">

//             {/* LABEL */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.8,
//               }}
//               viewport={{ once: true }}
//               className="
//                 inline-flex
//                 items-center
//                 gap-3
//                 bg-emerald-500/10
//                 border border-emerald-400/20
//                 backdrop-blur-2xl
//                 rounded-full
//                 px-6
//                 py-3
//                 mb-10
//               "
//             >

//               <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

//               <span
//                 className="
//                   text-emerald-200
//                   uppercase
//                   tracking-[0.28em]
//                   text-[11px]
//                   font-medium
//                 "
//               >
//                 Restoration Philosophy
//               </span>

//             </motion.div>

//             {/* TITLE */}

//             <motion.h2
//               initial={{
//                 opacity: 0,
//                 y: 50,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 1,
//               }}
//               viewport={{ once: true }}
//               className="
//                 text-5xl
//                 md:text-7xl
//                 xl:text-[7rem]
//                 font-semibold
//                 leading-[0.9]
//                 tracking-[-0.06em]
//                 text-white
//               "
//             >
//               Principles Of

//               <span
//                 className="
//                   block
//                   mt-3
//                   bg-gradient-to-r
//                   from-emerald-300
//                   via-emerald-200
//                   to-cyan-400
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Regenerative
//               </span>

//               <span className="block mt-3">
//                 Engineering
//               </span>

//             </motion.h2>

//             {/* DESCRIPTION */}

//             <motion.p
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 1,
//                 delay: 0.2,
//               }}
//               viewport={{ once: true }}
//               className="
//                 mt-10
//                 max-w-xl
//                 text-lg
//                 leading-relaxed
//                 text-slate-400
//               "
//             >
//               Wastely Aqua believes environmental engineering
//               should restore ecosystems, optimize water
//               intelligence and create resilient circular
//               sustainability systems for future generations.
//             </motion.p>

//           </div>

//           {/* ================================================== */}
//           {/* RIGHT SIDE */}
//           {/* ================================================== */}

//           <div className="relative space-y-10">

//             {philosophyCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 80,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 1,
//                   delay: index * 0.1,
//                 }}
//                 viewport={{ once: true }}
//                 whileHover={{
//                   y: -10,
//                   rotateX: 2,
//                   rotateY: index % 2 === 0 ? 2 : -2,
//                 }}
//                 className={`
//                   relative
//                   overflow-hidden
//                   rounded-[40px]
//                   border border-white/10
//                   bg-white/[0.04]
//                   backdrop-blur-2xl
//                   p-10 md:p-14
//                   shadow-[0_0_70px_rgba(15,23,42,0.45)]
//                   ${
//                     index % 2 === 0
//                       ? "lg:mr-16"
//                       : "lg:ml-16"
//                   }
//                 `}
//                 style={{
//                   transformStyle: "preserve-3d",
//                 }}
//               >

//                 {/* ATMOSPHERIC GLOW */}

//                 <div
//                   className={`
//                     absolute
//                     inset-0
//                     bg-gradient-to-br
//                     ${card.glow}
//                   `}
//                 />

//                 {/* GLASS REFLECTION */}

//                 <div
//                   className="
//                     absolute inset-0
//                     bg-gradient-to-br
//                     from-white/10
//                     via-transparent
//                     to-transparent
//                     opacity-40
//                   "
//                 />

//                 {/* TOP LIGHT EDGE */}

//                 <div
//                   className="
//                     absolute
//                     top-0
//                     left-0
//                     w-full
//                     h-px
//                     bg-gradient-to-r
//                     from-transparent
//                     via-white/40
//                     to-transparent
//                   "
//                 />

//                 {/* HUGE NUMBER */}

//                 <div
//                   className="
//                     absolute
//                     right-6
//                     top-2
//                     text-[100px]
//                     md:text-[140px]
//                     font-black
//                     tracking-[-0.08em]
//                     leading-none
//                     text-white/[0.04]
//                     pointer-events-none
//                     select-none
//                   "
//                 >
//                   {card.number}
//                 </div>

//                 {/* CONTENT */}

//                 <div className="relative z-10">

//                   {/* MICRO LABEL */}

//                   <div
//                     className="
//                       inline-flex
//                       items-center
//                       gap-3
//                       px-5
//                       py-3
//                       rounded-full
//                       bg-white/[0.05]
//                       border border-white/10
//                       backdrop-blur-xl
//                     "
//                   >

//                     <div className="w-2 h-2 rounded-full bg-emerald-300" />

//                     <span
//                       className="
//                         text-[10px]
//                         uppercase
//                         tracking-[0.26em]
//                         text-slate-300
//                       "
//                     >
//                       Ecological Principle
//                     </span>

//                   </div>

//                   {/* TITLE */}

//                   <h3
//                     className="
//                       mt-10
//                       text-5xl
//                       md:text-6xl
//                       font-semibold
//                       leading-[0.95]
//                       tracking-[-0.05em]
//                       text-white
//                     "
//                   >
//                     {card.title}
//                   </h3>

//                   {/* DESCRIPTION */}

//                   <p
//                     className="
//                       mt-8
//                       max-w-2xl
//                       text-lg
//                       leading-relaxed
//                       text-slate-300
//                     "
//                   >
//                     {card.description}
//                   </p>

//                 </div>

//               </motion.div>
//             ))}

//           </div>

//         </div>

//       </div>

//       {/* ====================================================== */}
//       {/* BOTTOM ATMOSPHERIC TRANSITION */}
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

//       {/* FOG SEPARATOR */}

//       <div
//         className="
//           absolute
//           bottom-[-180px]
//           left-1/2
//           -translate-x-1/2
//           w-[1400px]
//           h-[340px]
//           bg-emerald-500/10
//           blur-[180px]
//           rounded-full
//         "
//       />

//     </section>
//   );
// };

// export default RestorationPhilosophy;



import { motion } from "framer-motion";

const philosophyCards = [
  {
    number: "01",
    title: "Restore",
    description:
      "We engineer environmental systems designed to restore ecological balance, regenerate water intelligence and create long-term sustainability for future ecosystems.",
    glow: "from-cyan-500/20 to-emerald-500/10",
  },

  {
    number: "02",
    title: "Recover",
    description:
      "Our infrastructure solutions transform wastewater into reusable environmental resources through advanced circular recovery technologies and intelligent treatment systems.",
    glow: "from-emerald-500/20 to-cyan-500/10",
  },

  {
    number: "03",
    title: "Regenerate",
    description:
      "Every engineered system is designed to give back more to ecosystems than it consumes through regenerative environmental infrastructure and restoration-focused innovation.",
    glow: "from-cyan-400/20 to-white/5",
  },

  {
    number: "04",
    title: "Reuse",
    description:
      "We believe sustainable infrastructure must support circular environmental models that minimize waste, optimize water reuse and strengthen resilient communities.",
    glow: "from-emerald-400/20 to-cyan-500/10",
  },
];

const floatingPills = [
  {
    text: "Regenerative Engineering",
    position: "top-[12%] right-[10%]",
  },

  {
    text: "Circular Infrastructure",
    position: "top-[28%] right-[4%]",
  },

  {
    text: "Environmental Intelligence",
    position: "bottom-[30%] left-[52%]",
  },

  {
    text: "Water Circularity",
    position: "bottom-[12%] right-[14%]",
  },
];

const particles = Array.from({ length: 14 });

const RestorationPhilosophy = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#081219] py-24 sm:py-28 lg:py-40">

      {/* ====================================================== */}
      {/* ATMOSPHERIC BACKGROUND */}
      {/* ====================================================== */}

      {/* TOP GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          top-[-180px]
          left-[-120px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-emerald-500/8
          blur-[90px]
          lg:top-[-300px]
          lg:left-[-200px]
          lg:h-[1000px]
          lg:w-[1000px]
          lg:blur-[180px]
        "
      />

      {/* BOTTOM GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[-120px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/8
          blur-[90px]
          lg:bottom-[-300px]
          lg:right-[-200px]
          lg:h-[1000px]
          lg:w-[1000px]
          lg:blur-[180px]
        "
      />

      {/* ====================================================== */}
      {/* RADIAL ATMOSPHERE */}
      {/* ====================================================== */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06),transparent_65%)]
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
      {/* ARCHITECTURAL LINES */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
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

      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-[18%]
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
      {/* GRAIN / NOISE */}
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

        {particles.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              x: [0, 30, 0],
              opacity: [0.08, 0.3, 0.08],
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
              left: `${(i * 7) % 100}%`,
              top: `${(i * 6) % 100}%`,
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
          left-[-4%]
          top-[3%]
          select-none
          text-[64px]
          sm:text-[100px]
          md:text-[180px]
          xl:text-[360px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.015]
        "
      >
        RESTORE
      </div>

      {/* ====================================================== */}
      {/* FLOATING MICRO PILLS */}
      {/* ====================================================== */}

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
              z-30
              ${pill.position}
              rounded-full
              border border-white/10
              bg-white/[0.03]
              px-5
              py-3
              backdrop-blur-2xl
              shadow-[0_0_30px_rgba(16,185,129,0.08)]
            `}
          >

            <span
              className="
                whitespace-nowrap
                text-[11px]
                uppercase
                tracking-[0.22em]
                text-slate-300
              "
            >
              {pill.text}
            </span>

          </motion.div>
        ))}

      </div>

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

        <div
          className="
            grid
            items-start
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-24
          "
        >

          {/* ================================================== */}
          {/* LEFT SIDE */}
          {/* ================================================== */}

          <div className="relative lg:sticky lg:top-32">

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
                Restoration Philosophy
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
                xl:text-[7rem]
              "
            >
              Principles Of

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
                Regenerative
              </span>

              <span className="mt-2 block sm:mt-3">
                Engineering
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
                mt-8
                max-w-xl
                text-[15px]
                leading-relaxed
                text-slate-400
                sm:mt-10
                sm:text-lg
              "
            >
              Wastely Aqua believes environmental engineering
              should restore ecosystems, optimize water
              intelligence and create resilient circular
              sustainability systems for future generations.
            </motion.p>

          </div>

          {/* ================================================== */}
          {/* RIGHT SIDE */}
          {/* ================================================== */}

          <div className="relative space-y-6 sm:space-y-8 lg:space-y-10">

            {philosophyCards.map((card, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className={`
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.04]
                  p-6
                  backdrop-blur-2xl
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  sm:p-8
                  lg:rounded-[40px]
                  lg:p-14
                  ${
                    index % 2 === 0
                      ? "lg:mr-12"
                      : "lg:ml-12"
                  }
                `}
              >

                {/* ATMOSPHERIC GLOW */}

                <div
                  className={`
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${card.glow}
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

                {/* TOP LIGHT EDGE */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                  "
                />

                {/* HUGE NUMBER */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-2
                    select-none
                    text-[70px]
                    sm:text-[100px]
                    md:text-[140px]
                    font-black
                    leading-none
                    tracking-[-0.08em]
                    text-white/[0.04]
                  "
                >
                  {card.number}
                </div>

                {/* CONTENT */}

                <div className="relative z-10">

                  {/* MICRO LABEL */}

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border border-white/10
                      bg-white/[0.05]
                      px-4
                      py-2.5
                      backdrop-blur-xl
                      sm:px-5
                      sm:py-3
                    "
                  >

                    <div className="h-2 w-2 rounded-full bg-emerald-300" />

                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.26em]
                        text-slate-300
                      "
                    >
                      Ecological Principle
                    </span>

                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-8
                      text-[2.4rem]
                      font-semibold
                      leading-[0.95]
                      tracking-[-0.05em]
                      text-white
                      sm:text-5xl
                      lg:text-6xl
                    "
                  >
                    {card.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-6
                      max-w-2xl
                      text-[15px]
                      leading-relaxed
                      text-slate-300
                      sm:mt-8
                      sm:text-lg
                    "
                  >
                    {card.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

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

      {/* FOG SEPARATOR */}

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

export default RestorationPhilosophy;