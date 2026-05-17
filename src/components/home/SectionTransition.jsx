// import { motion } from "framer-motion";

// const SectionTransition = ({ flip = false }) => {
//   return (
//     <div className="relative h-32 md:h-40 overflow-hidden bg-[#081219]">
//       {/* TOP FADE */}
//       <div
//         className="
//           absolute inset-0
//           bg-gradient-to-b
//           from-transparent
//           via-cyan-500/[0.015]
//           to-transparent
//         "
//       />

//       {/* DIAGONAL OVERLAY */}
//       <div
//         className={`
//           absolute
//           ${
//             flip
//               ? "-left-[10%] rotate-[-6deg]"
//               : "-right-[10%] rotate-[6deg]"
//           }
//           top-1/2
//           -translate-y-1/2
//           w-[140%]
//           h-32
//           bg-white/[0.015]
//           blur-3xl
//         `}
//       />

//       {/* CYAN AMBIENT */}
//       <motion.div
//         animate={{
//           x: [0, 40, 0],
//           opacity: [0.4, 0.7, 0.4],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           left-[10%]
//           top-0
//           w-[320px]
//           h-[320px]
//           rounded-full
//           bg-cyan-500/10
//           blur-[120px]
//         "
//       />

//       {/* EMERALD AMBIENT */}
//       <motion.div
//         animate={{
//           x: [0, -40, 0],
//           opacity: [0.4, 0.7, 0.4],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           right-[10%]
//           bottom-[-120px]
//           w-[320px]
//           h-[320px]
//           rounded-full
//           bg-emerald-500/10
//           blur-[120px]
//         "
//       />

//       {/* CENTER LIGHT */}
//       <div
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           -translate-x-1/2
//           -translate-y-1/2
//           w-[40%]
//           h-[1px]
//           bg-gradient-to-r
//           from-transparent
//           via-cyan-400/20
//           to-transparent
//         "
//       />
//     </div>
//   );
// };

// export default SectionTransition;



import { motion } from "framer-motion";

const SectionTransition = ({ flip = false }) => {
  return (
    <div
      className="
        relative
        isolate
        h-20 sm:h-24 md:h-32 lg:h-40
        overflow-hidden
        bg-[#081219]
      "
    >
      {/* BASE DEPTH */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-transparent
          via-cyan-500/[0.015]
          to-transparent
        "
      />

      {/* DIAGONAL ATMOSPHERIC LAYER */}
      <div
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          w-[140%]
          h-20 sm:h-24 md:h-32
          blur-3xl
          bg-white/[0.018]
          ${
            flip
              ? "-left-[12%] rotate-[-5deg]"
              : "-right-[12%] rotate-[5deg]"
          }
        `}
      />

      {/* CYAN AMBIENT */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-5%]
          top-[-30%]
          h-[220px] w-[220px]
          sm:h-[280px] sm:w-[280px]
          md:h-[340px] md:w-[340px]
          rounded-full
          bg-cyan-500/10
          blur-[90px] sm:blur-[110px]
        "
      />

      {/* EMERALD AMBIENT */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-5%]
          bottom-[-40%]
          h-[220px] w-[220px]
          sm:h-[280px] sm:w-[280px]
          md:h-[340px] md:w-[340px]
          rounded-full
          bg-emerald-500/10
          blur-[90px] sm:blur-[110px]
        "
      />

      {/* CENTER ENERGY LINE */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-px
          w-[55%] sm:w-[45%] lg:w-[35%]
          -translate-x-1/2
          -translate-y-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-400/25
          to-transparent
        "
      />

      {/* MICRO GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-1 w-1
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/70
          shadow-[0_0_20px_rgba(34,211,238,0.7)]
        "
      />

      {/* NOISE OVERLAY */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.015]
          mix-blend-screen
          bg-[url('https://www.transparenttextures.com/patterns/noise.png')]
        "
      />
    </div>
  );
};
export default SectionTransition;