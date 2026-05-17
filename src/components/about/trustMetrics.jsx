// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Globe2,
//   Waves,
//   Factory,
//   ArrowUpRight,
// } from "lucide-react";

// const trustMetrics = [
//   {
//     value: "120+",
//     label: "Infrastructure Projects",
//   },

//   {
//     value: "25+",
//     label: "Cities Impacted",
//   },

//   {
//     value: "98%",
//     label: "Recovery Efficiency",
//   },

//   {
//     value: "24/7",
//     label: "Operational Monitoring",
//   },
// ];

// const trustPillars = [
//   {
//     icon: ShieldCheck,
//     title: "Certified Environmental Standards",
//     description:
//       "Infrastructure engineered with long-term environmental compliance and sustainable operational reliability.",
//   },

//   {
//     icon: Globe2,
//     title: "Ecological Impact Intelligence",
//     description:
//       "Environmental systems designed to optimize recovery, resilience and ecosystem restoration outcomes.",
//   },

//   {
//     icon: Factory,
//     title: "Industrial Sustainability Systems",
//     description:
//       "Advanced treatment and recovery infrastructure for industries, municipalities and environmental facilities.",
//   },
// ];

// const floatingTags = [
//   {
//     text: "Circular Recovery Systems",
//     position: "top-[14%] left-[12%]",
//   },

//   {
//     text: "Environmental Intelligence",
//     position: "top-[24%] right-[14%]",
//   },

//   {
//     text: "Future Infrastructure",
//     position: "bottom-[18%] left-[18%]",
//   },

//   {
//     text: "Ecosystem Restoration",
//     position: "bottom-[10%] right-[10%]",
//   },
// ];

// const particles = Array.from({ length: 18 });

// const TrustLayer = () => {
//   return (
//     <section className="relative py-44 overflow-hidden bg-[#081219]">

//       {/* ====================================================== */}
//       {/* ATMOSPHERIC BACKGROUND */}
//       {/* ====================================================== */}

//       {/* LEFT CYAN GLOW */}

//       <motion.div
//         animate={{
//           x: [0, 40, 0],
//           y: [0, -30, 0],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           top-[-280px]
//           left-[-200px]
//           w-[1000px]
//           h-[1000px]
//           bg-cyan-500/10
//           blur-[180px]
//           rounded-full
//         "
//       />

//       {/* RIGHT WHITE GLOW */}

//       <motion.div
//         animate={{
//           x: [0, -30, 0],
//           y: [0, 30, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           bottom-[-300px]
//           right-[-180px]
//           w-[1100px]
//           h-[1100px]
//           bg-white/5
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
//           bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]
//         "
//       />

//       {/* ====================================================== */}
//       {/* GRID TEXTURE */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute inset-0
//           opacity-[0.025]
//         "
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//           `,
//           backgroundSize: "100px 100px",
//         }}
//       />

//       {/* ====================================================== */}
//       {/* ARCHITECTURAL LINES */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute
//           top-0
//           left-[18%]
//           w-px
//           h-full
//           bg-gradient-to-b
//           from-transparent
//           via-white/10
//           to-transparent
//         "
//       />

//       <div
//         className="
//           absolute
//           top-0
//           right-[16%]
//           w-px
//           h-full
//           bg-gradient-to-b
//           from-transparent
//           via-cyan-400/10
//           to-transparent
//         "
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

//         {particles.map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -70, 0],
//               x: [0, 30, 0],
//               opacity: [0.1, 0.4, 0.1],
//             }}
//             transition={{
//               duration: 10 + i,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               rounded-full
//               bg-white/20
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
//           left-1/2
//           top-[6%]
//           -translate-x-1/2
//           text-[140px]
//           md:text-[260px]
//           xl:text-[420px]
//           font-black
//           tracking-[-0.08em]
//           leading-none
//           text-white/[0.02]
//           pointer-events-none
//           select-none
//           whitespace-nowrap
//         "
//       >
//         TRUST
//       </div>

//       {/* ====================================================== */}
//       {/* FLOATING TAGS */}
//       {/* ====================================================== */}

//       <div className="hidden xl:block">

//         {floatingTags.map((tag, index) => (
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
//               ${tag.position}
//               px-5
//               py-3
//               rounded-full
//               bg-white/[0.04]
//               border border-white/10
//               backdrop-blur-2xl
//               shadow-[0_0_30px_rgba(255,255,255,0.05)]
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
//               {tag.text}
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

//         {/* ================================================== */}
//         {/* HEADER */}
//         {/* ================================================== */}

//         <div className="max-w-5xl mx-auto text-center">

//           {/* LABEL */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//             viewport={{ once: true }}
//             className="
//               inline-flex
//               items-center
//               gap-3
//               bg-white/[0.05]
//               border border-white/10
//               backdrop-blur-2xl
//               rounded-full
//               px-6
//               py-3
//               mb-10
//             "
//           >

//             <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

//             <span
//               className="
//                 text-white
//                 uppercase
//                 tracking-[0.28em]
//                 text-[11px]
//                 font-medium
//               "
//             >
//               Environmental Trust Layer
//             </span>

//           </motion.div>

//           {/* TITLE */}

//           <motion.h2
//             initial={{
//               opacity: 0,
//               y: 50,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 1,
//             }}
//             viewport={{ once: true }}
//             className="
//               text-5xl
//               md:text-7xl
//               xl:text-[7.5rem]
//               font-semibold
//               leading-[0.9]
//               tracking-[-0.06em]
//               text-white
//             "
//           >
//             Infrastructure Built

//             <span
//               className="
//                 block
//                 mt-3
//                 bg-gradient-to-r
//                 from-white
//                 via-cyan-200
//                 to-cyan-400
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               For Long-Term
//             </span>

//             <span className="block mt-3">
//               Environmental Impact
//             </span>

//           </motion.h2>

//           {/* DESCRIPTION */}

//           <motion.p
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 1,
//               delay: 0.2,
//             }}
//             viewport={{ once: true }}
//             className="
//               mt-10
//               max-w-3xl
//               mx-auto
//               text-lg
//               leading-relaxed
//               text-slate-400
//             "
//           >
//             Wastely Aqua combines intelligent environmental
//             engineering, circular recovery systems and
//             sustainable infrastructure expertise to create
//             resilient ecosystems trusted across industries
//             and communities.
//           </motion.p>

//         </div>

//         {/* ================================================== */}
//         {/* TRUST METRICS STRIP */}
//         {/* ================================================== */}

//         <div
//           className="
//             relative
//             grid
//             grid-cols-2
//             lg:grid-cols-4
//             gap-6
//             mt-24
//           "
//         >

//           {trustMetrics.map((metric, index) => (
//             <motion.div
//               key={index}
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
//                 delay: index * 0.1,
//               }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -10,
//               }}
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[34px]
//                 border border-white/10
//                 bg-white/[0.04]
//                 backdrop-blur-2xl
//                 p-8
//                 shadow-[0_0_60px_rgba(15,23,42,0.45)]
//               "
//             >

//               {/* INNER GLOW */}

//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-br
//                   from-white/[0.06]
//                   via-cyan-500/[0.03]
//                   to-transparent
//                 "
//               />

//               {/* GLASS REFLECTION */}

//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-br
//                   from-white/10
//                   via-transparent
//                   to-transparent
//                   opacity-40
//                 "
//               />

//               <div className="relative z-10">

//                 <h3
//                   className="
//                     text-5xl
//                     font-semibold
//                     text-white
//                   "
//                 >
//                   {metric.value}
//                 </h3>

//                 <p
//                   className="
//                     mt-4
//                     text-sm
//                     uppercase
//                     tracking-[0.18em]
//                     text-slate-400
//                   "
//                 >
//                   {metric.label}
//                 </p>

//               </div>

//             </motion.div>
//           ))}

//         </div>

//         {/* ================================================== */}
//         {/* TRUST PILLARS */}
//         {/* ================================================== */}

//         <div
//           className="
//             grid
//             lg:grid-cols-3
//             gap-8
//             mt-28
//           "
//         >

//           {trustPillars.map((pillar, index) => {
//             const Icon = pillar.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 60,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 1,
//                   delay: index * 0.15,
//                 }}
//                 viewport={{ once: true }}
//                 whileHover={{
//                   y: -12,
//                 }}
//                 className={`
//                   relative
//                   overflow-hidden
//                   rounded-[40px]
//                   border border-white/10
//                   bg-white/[0.04]
//                   backdrop-blur-2xl
//                   p-10
//                   shadow-[0_0_70px_rgba(15,23,42,0.45)]
//                   ${
//                     index === 1
//                       ? "lg:translate-y-12"
//                       : ""
//                   }
//                 `}
//               >

//                 {/* INNER GLOW */}

//                 <div
//                   className="
//                     absolute inset-0
//                     bg-gradient-to-br
//                     from-white/[0.06]
//                     via-cyan-500/[0.03]
//                     to-transparent
//                   "
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

//                 {/* HUGE NUMBER */}

//                 <div
//                   className="
//                     absolute
//                     right-4
//                     top-0
//                     text-[120px]
//                     font-black
//                     tracking-[-0.08em]
//                     leading-none
//                     text-white/[0.03]
//                     pointer-events-none
//                     select-none
//                   "
//                 >
//                   0{index + 1}
//                 </div>

//                 <div className="relative z-10">

//                   {/* ICON */}

//                   <div
//                     className="
//                       w-16 h-16
//                       rounded-2xl
//                       bg-white/[0.05]
//                       border border-white/10
//                       flex items-center justify-center
//                     "
//                   >

//                     <Icon
//                       size={30}
//                       className="text-cyan-200"
//                     />

//                   </div>

//                   {/* TITLE */}

//                   <h3
//                     className="
//                       mt-8
//                       text-3xl
//                       font-semibold
//                       leading-tight
//                       text-white
//                     "
//                   >
//                     {pillar.title}
//                   </h3>

//                   {/* DESCRIPTION */}

//                   <p
//                     className="
//                       mt-6
//                       leading-relaxed
//                       text-slate-400
//                     "
//                   >
//                     {pillar.description}
//                   </p>

//                   {/* FOOTER */}

//                   <div
//                     className="
//                       mt-10
//                       flex
//                       items-center
//                       justify-between
//                     "
//                   >

//                     <div
//                       className="
//                         inline-flex
//                         items-center
//                         gap-2
//                         text-[11px]
//                         uppercase
//                         tracking-[0.22em]
//                         text-slate-300
//                       "
//                     >

//                       <Waves size={14} />

//                       Environmental Layer

//                     </div>

//                     <ArrowUpRight
//                       size={18}
//                       className="text-cyan-200"
//                     />

//                   </div>

//                 </div>

//               </motion.div>
//             );
//           })}

//         </div>

//       </div>

//       {/* ====================================================== */}
//       {/* BOTTOM TRANSITION */}
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

//       {/* ATMOSPHERIC FOG */}

//       <div
//         className="
//           absolute
//           bottom-[-180px]
//           left-1/2
//           -translate-x-1/2
//           w-[1400px]
//           h-[340px]
//           bg-cyan-500/10
//           blur-[180px]
//           rounded-full
//         "
//       />

//     </section>
//   );
// };

// export default TrustLayer;

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe2,
  Waves,
  Factory,
  ArrowUpRight,
} from "lucide-react";

const trustMetrics = [
  {
    value: "120+",
    label: "Infrastructure Projects",
  },

  {
    value: "25+",
    label: "Cities Impacted",
  },

  {
    value: "98%",
    label: "Recovery Efficiency",
  },

  {
    value: "24/7",
    label: "Operational Monitoring",
  },
];

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "Certified Environmental Standards",
    description:
      "Infrastructure engineered with long-term environmental compliance and sustainable operational reliability.",
  },

  {
    icon: Globe2,
    title: "Ecological Impact Intelligence",
    description:
      "Environmental systems designed to optimize recovery, resilience and ecosystem restoration outcomes.",
  },

  {
    icon: Factory,
    title: "Industrial Sustainability Systems",
    description:
      "Advanced treatment and recovery infrastructure for industries, municipalities and environmental facilities.",
  },
];

const floatingTags = [
  {
    text: "Circular Recovery Systems",
    position: "top-[14%] left-[8%]",
  },

  {
    text: "Environmental Intelligence",
    position: "top-[24%] right-[10%]",
  },

  {
    text: "Future Infrastructure",
    position: "bottom-[18%] left-[16%]",
  },

  {
    text: "Ecosystem Restoration",
    position: "bottom-[10%] right-[8%]",
  },
];

const particles = Array.from({ length: 18 });

const TrustLayer = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#081219] py-24 sm:py-28 lg:py-44">

      {/* ====================================================== */}
      {/* ATMOSPHERIC BACKGROUND */}
      {/* ====================================================== */}

      {/* LEFT CYAN GLOW */}

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
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/8
          blur-[90px]
          lg:top-[-280px]
          lg:left-[-200px]
          lg:h-[1000px]
          lg:w-[1000px]
          lg:blur-[180px]
        "
      />

      {/* RIGHT WHITE GLOW */}

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
          bg-white/5
          blur-[90px]
          lg:bottom-[-300px]
          lg:right-[-180px]
          lg:h-[1100px]
          lg:w-[1100px]
          lg:blur-[180px]
        "
      />

      {/* ====================================================== */}
      {/* RADIAL ATMOSPHERE */}
      {/* ====================================================== */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]
        "
      />

      {/* ====================================================== */}
      {/* GRID TEXTURE */}
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
          backgroundSize: "100px 100px",
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
          left-[18%]
          hidden lg:block
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-white/10
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-[16%]
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
              bg-white/20
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
      {/* HUGE TYPOGRAPHY */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[6%]
          -translate-x-1/2
          whitespace-nowrap
          select-none
          text-[70px]
          sm:text-[120px]
          md:text-[220px]
          xl:text-[420px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.015]
        "
      >
        TRUST
      </div>

      {/* ====================================================== */}
      {/* FLOATING TAGS */}
      {/* ====================================================== */}

      <div className="hidden xl:block">

        {floatingTags.map((tag, index) => (
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
              z-20
              ${tag.position}
              rounded-full
              border border-white/10
              bg-white/[0.04]
              px-5
              py-3
              backdrop-blur-2xl
              shadow-[0_0_30px_rgba(255,255,255,0.05)]
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
              {tag.text}
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

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mx-auto max-w-5xl text-center">

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
              border border-white/10
              bg-white/[0.05]
              px-5
              py-2.5
              backdrop-blur-2xl
              sm:mb-10
              sm:px-6
              sm:py-3
            "
          >

            <div className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white
                sm:text-[11px]
              "
            >
              Environmental Trust Layer
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
            Infrastructure Built

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-white
                via-cyan-200
                to-cyan-400
                bg-clip-text
                text-transparent
                sm:mt-3
              "
            >
              For Long-Term
            </span>

            <span className="mt-2 block sm:mt-3">
              Environmental Impact
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
            Wastely Aqua combines intelligent environmental
            engineering, circular recovery systems and
            sustainable infrastructure expertise to create
            resilient ecosystems trusted across industries
            and communities.
          </motion.p>

        </div>

        {/* ================================================== */}
        {/* TRUST METRICS STRIP */}
        {/* ================================================== */}

        <div
          className="
            relative
            mt-16
            grid
            grid-cols-2
            gap-4
            sm:mt-20
            sm:gap-6
            lg:mt-24
            lg:grid-cols-4
          "
        >

          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                relative
                overflow-hidden
                rounded-[26px]
                border border-white/10
                bg-white/[0.04]
                p-5
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(15,23,42,0.45)]
                sm:rounded-[32px]
                sm:p-7
                lg:rounded-[36px]
                lg:p-8
              "
            >

              {/* INNER GLOW */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-white/[0.06]
                  via-cyan-500/[0.03]
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
                  opacity-40
                "
              />

              <div className="relative z-10">

                <h3
                  className="
                    text-3xl
                    font-semibold
                    text-white
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  {metric.value}
                </h3>

                <p
                  className="
                    mt-3
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-slate-400
                    sm:mt-4
                    sm:text-sm
                  "
                >
                  {metric.label}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* ================================================== */}
        {/* TRUST PILLARS */}
        {/* ================================================== */}

        <div
          className="
            mt-20
            grid
            gap-6
            sm:mt-24
            sm:gap-8
            lg:mt-28
            lg:grid-cols-3
          "
        >

          {trustPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={index}
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
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className={`
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.04]
                  p-6
                  backdrop-blur-2xl
                  shadow-[0_20px_80px_rgba(15,23,42,0.45)]
                  sm:rounded-[34px]
                  sm:p-8
                  lg:rounded-[40px]
                  lg:p-10
                  ${
                    index === 1
                      ? "lg:translate-y-10"
                      : ""
                  }
                `}
              >

                {/* INNER GLOW */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-white/[0.06]
                    via-cyan-500/[0.03]
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
                    opacity-40
                  "
                />

                {/* HUGE NUMBER */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-0
                    select-none
                    text-[70px]
                    sm:text-[100px]
                    lg:text-[120px]
                    font-black
                    leading-none
                    tracking-[-0.08em]
                    text-white/[0.03]
                  "
                >
                  0{index + 1}
                </div>

                <div className="relative z-10">

                  {/* ICON */}

                  <div
                    className="
                      flex h-14 w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.05]
                      sm:h-16
                      sm:w-16
                    "
                  >

                    <Icon
                      size={28}
                      className="text-cyan-200"
                    />

                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-6
                      text-[2rem]
                      font-semibold
                      leading-tight
                      text-white
                      sm:mt-8
                      sm:text-3xl
                    "
                  >
                    {pillar.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-5
                      text-[15px]
                      leading-relaxed
                      text-slate-400
                      sm:mt-6
                      sm:text-base
                    "
                  >
                    {pillar.description}
                  </p>

                  {/* FOOTER */}

                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      justify-between
                      sm:mt-10
                    "
                  >

                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-slate-300
                        sm:text-[11px]
                      "
                    >

                      <Waves size={14} />

                      Environmental Layer

                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-cyan-200"
                    />

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

      {/* ====================================================== */}
      {/* BOTTOM TRANSITION */}
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

      {/* ATMOSPHERIC FOG */}

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
          lg:h-[340px]
          lg:w-[1400px]
          lg:blur-[180px]
        "
      />

    </section>
  );
};

export default TrustLayer; 