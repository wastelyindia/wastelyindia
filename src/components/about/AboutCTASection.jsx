// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// import {
//   ArrowUpRight,
//   Waves,
//   Orbit,
//   Sparkles,
// } from "lucide-react";

// const floatingOrbs = Array.from({ length: 12 });

// const AboutCTASection = () => {

//   const navigate = useNavigate();

//   return (
//     <section className="relative py-52 overflow-hidden bg-[#081219]">

//       {/* ====================================================== */}
//       {/* ATMOSPHERIC BACKGROUND */}
//       {/* ====================================================== */}

//       {/* MAIN WHITE GLOW */}

//       <motion.div
//         animate={{
//           scale: [1, 1.08, 1],
//           x: [0, 30, 0],
//           y: [0, -20, 0],
//         }}
//         transition={{
//           duration: 16,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           top-1/2
//           left-1/2
//           -translate-x-1/2
//           -translate-y-1/2
//           w-[1200px]
//           h-[1200px]
//           bg-white/[0.05]
//           blur-[180px]
//           rounded-full
//         "
//       />

//       {/* CYAN GLOW */}

//       <motion.div
//         animate={{
//           x: [0, -40, 0],
//           y: [0, 30, 0],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           left-[-200px]
//           top-[10%]
//           w-[900px]
//           h-[900px]
//           bg-cyan-500/10
//           blur-[180px]
//           rounded-full
//         "
//       />

//       {/* ====================================================== */}
//       {/* RADIAL LIGHT */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute inset-0
//           bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]
//         "
//       />

//       {/* ====================================================== */}
//       {/* NOISE TEXTURE */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute inset-0
//           opacity-[0.05]
//           mix-blend-overlay
//           pointer-events-none
//         "
//         style={{
//           backgroundImage:
//             "url('https://www.transparenttextures.com/patterns/noise.png')",
//         }}
//       />

//       {/* ====================================================== */}
//       {/* LIGHT SHAFTS */}
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
//           rotate-[10deg]
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
//           from-white/10
//           to-transparent
//           blur-[140px]
//           -rotate-[10deg]
//           opacity-60
//         "
//       />

//       {/* ====================================================== */}
//       {/* FLOATING PARTICLES */}
//       {/* ====================================================== */}

//       <div className="absolute inset-0 overflow-hidden">

//         {floatingOrbs.map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -80, 0],
//               x: [0, 35, 0],
//               opacity: [0.08, 0.35, 0.08],
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
//               width: `${6 + (i % 8)}px`,
//               height: `${6 + (i % 8)}px`,
//               left: `${(i * 7) % 100}%`,
//               top: `${(i * 6) % 100}%`,
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
//           top-1/2
//           -translate-x-1/2
//           -translate-y-1/2
//           text-[160px]
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
//         FUTURE
//       </div>

//       {/* ====================================================== */}
//       {/* MAIN COMPOSITION */}
//       {/* ====================================================== */}

//       <div
//         className="
//           relative z-10
//           max-w-7xl
//           mx-auto
//           px-6
//         "
//       >

//         <div className="relative min-h-[850px] flex items-center justify-center">

//           {/* ================================================== */}
//           {/* CENTRAL ATMOSPHERIC CORE */}
//           {/* ================================================== */}

//           <motion.div
//             animate={{
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: 80,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="
//               absolute
//               w-[680px]
//               h-[680px]
//               border
//               border-white/[0.06]
//               rounded-full
//             "
//           />

//           <motion.div
//             animate={{
//               rotate: [360, 0],
//             }}
//             transition={{
//               duration: 90,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="
//               absolute
//               w-[540px]
//               h-[540px]
//               border
//               border-cyan-400/[0.08]
//               rounded-full
//             "
//           />

//           {/* ================================================== */}
//           {/* FLOATING SIDE NODES */}
//           {/* ================================================== */}

//           {/* LEFT NODE */}

//           <motion.div
//             animate={{
//               y: [0, -16, 0],
//             }}
//             transition={{
//               duration: 7,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               hidden xl:block
//               absolute
//               left-[2%]
//               top-[20%]
//               w-[280px]
//               rounded-[34px]
//               border border-white/10
//               bg-white/[0.04]
//               backdrop-blur-2xl
//               p-8
//               overflow-hidden
//               shadow-[0_0_70px_rgba(15,23,42,0.45)]
//             "
//           >

//             {/* INNER GLOW */}

//             <div
//               className="
//                 absolute inset-0
//                 bg-gradient-to-br
//                 from-cyan-500/10
//                 to-white/[0.04]
//               "
//             />

//             {/* GLASS REFLECTION */}

//             <div
//               className="
//                 absolute inset-0
//                 bg-gradient-to-br
//                 from-white/10
//                 via-transparent
//                 to-transparent
//                 opacity-40
//               "
//             />

//             <div className="relative z-10">

//               <div
//                 className="
//                   w-16 h-16
//                   rounded-2xl
//                   bg-cyan-500/10
//                   border border-cyan-400/20
//                   flex items-center justify-center
//                 "
//               >

//                 <Orbit
//                   size={30}
//                   className="text-cyan-200"
//                 />

//               </div>

//               <h3
//                 className="
//                   mt-6
//                   text-2xl
//                   font-semibold
//                   leading-tight
//                   text-white
//                 "
//               >
//                 Circular Environmental Systems
//               </h3>

//               <p
//                 className="
//                   mt-5
//                   leading-relaxed
//                   text-slate-400
//                 "
//               >
//                 Infrastructure designed to create resilient
//                 ecological recovery and sustainable circular
//                 water intelligence.
//               </p>

//             </div>

//           </motion.div>

//           {/* RIGHT NODE */}

//           <motion.div
//             animate={{
//               y: [0, -14, 0],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               hidden xl:block
//               absolute
//               right-[2%]
//               bottom-[16%]
//               w-[280px]
//               rounded-[34px]
//               border border-white/10
//               bg-white/[0.04]
//               backdrop-blur-2xl
//               p-8
//               overflow-hidden
//               shadow-[0_0_70px_rgba(15,23,42,0.45)]
//             "
//           >

//             {/* INNER GLOW */}

//             <div
//               className="
//                 absolute inset-0
//                 bg-gradient-to-br
//                 from-white/[0.06]
//                 to-cyan-500/[0.05]
//               "
//             />

//             {/* GLASS REFLECTION */}

//             <div
//               className="
//                 absolute inset-0
//                 bg-gradient-to-br
//                 from-white/10
//                 via-transparent
//                 to-transparent
//                 opacity-40
//               "
//             />

//             <div className="relative z-10">

//               <div
//                 className="
//                   w-16 h-16
//                   rounded-2xl
//                   bg-white/[0.05]
//                   border border-white/10
//                   flex items-center justify-center
//                 "
//               >

//                 <Sparkles
//                   size={30}
//                   className="text-white"
//                 />

//               </div>

//               <h3
//                 className="
//                   mt-6
//                   text-2xl
//                   font-semibold
//                   leading-tight
//                   text-white
//                 "
//               >
//                 Future Sustainability Intelligence
//               </h3>

//               <p
//                 className="
//                   mt-5
//                   leading-relaxed
//                   text-slate-400
//                 "
//               >
//                 Long-term environmental engineering focused
//                 on restoration, resilience and regenerative
//                 infrastructure ecosystems.
//               </p>

//             </div>

//           </motion.div>

//           {/* ================================================== */}
//           {/* CENTER CONTENT */}
//           {/* ================================================== */}

//           <div className="relative z-20 max-w-5xl mx-auto text-center">

//             {/* MICRO LABEL */}

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
//                 bg-white/[0.05]
//                 border border-white/10
//                 backdrop-blur-2xl
//                 rounded-full
//                 px-6
//                 py-3
//                 mb-12
//               "
//             >

//               <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

//               <span
//                 className="
//                   text-white
//                   uppercase
//                   tracking-[0.28em]
//                   text-[11px]
//                   font-medium
//                 "
//               >
//                 Ecological Future Partnership
//               </span>

//             </motion.div>

//             {/* HEADING */}

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
//                 xl:text-[8rem]
//                 font-semibold
//                 leading-[0.88]
//                 tracking-[-0.06em]
//                 text-white
//               "
//             >
//               Build The Future

//               <span
//                 className="
//                   block
//                   mt-3
//                   bg-gradient-to-r
//                   from-white
//                   via-cyan-200
//                   to-cyan-400
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Of Environmental
//               </span>

//               <span className="block mt-3">
//                 Restoration
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
//                 mt-12
//                 max-w-3xl
//                 mx-auto
//                 text-lg
//                 md:text-xl
//                 leading-relaxed
//                 text-slate-400
//               "
//             >
//               Partner with Wastely Aqua to create intelligent
//               environmental infrastructure systems that
//               restore ecosystems, optimize water recovery and
//               shape resilient sustainable futures.
//             </motion.p>

//             {/* CTA BUTTON */}

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
//                 duration: 1,
//                 delay: 0.35,
//               }}
//               viewport={{ once: true }}
//               className="mt-16"
//             >

//               <button
//                 onClick={() => navigate("/contact")}
//                 className="
//                   group
//                   relative
//                   inline-flex
//                   items-center
//                   gap-4
//                   overflow-hidden
//                   rounded-full
//                   border border-white/10
//                   bg-white/[0.05]
//                   backdrop-blur-2xl
//                   px-10
//                   py-5
//                   text-white
//                   shadow-[0_0_60px_rgba(255,255,255,0.08)]
//                   transition-all
//                   duration-500
//                   hover:scale-[1.03]
//                 "
//               >

//                 {/* BUTTON GLOW */}

//                 <div
//                   className="
//                     absolute inset-0
//                     bg-gradient-to-r
//                     from-cyan-500/20
//                     via-white/[0.08]
//                     to-cyan-500/20
//                     opacity-0
//                     transition-opacity
//                     duration-500
//                     group-hover:opacity-100
//                   "
//                 />

//                 {/* BUTTON REFLECTION */}

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     bg-gradient-to-br
//                     from-white/10
//                     via-transparent
//                     to-transparent
//                     opacity-40
//                   "
//                 />

//                 <div className="relative z-10 flex items-center gap-4">

//                   <div
//                     className="
//                       w-12 h-12
//                       rounded-full
//                       bg-cyan-500/10
//                       border border-cyan-400/20
//                       flex items-center justify-center
//                     "
//                   >

//                     <Waves
//                       size={22}
//                       className="text-cyan-200"
//                     />

//                   </div>

//                   <span
//                     className="
//                       text-sm
//                       uppercase
//                       tracking-[0.22em]
//                       font-medium
//                     "
//                   >
//                     Partner With Wastely Aqua
//                   </span>

//                   <ArrowUpRight
//                     size={22}
//                     className="
//                       transition-transform
//                       duration-300
//                       group-hover:translate-x-1
//                       group-hover:-translate-y-1
//                     "
//                   />

//                 </div>

//               </button>

//             </motion.div>

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

//       <div
//         className="
//           absolute
//           bottom-[-180px]
//           left-1/2
//           -translate-x-1/2
//           w-[1400px]
//           h-[340px]
//           bg-white/[0.06]
//           blur-[180px]
//           rounded-full
//         "
//       />

//     </section>
//   );
// };

// export default AboutCTASection;


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  ArrowUpRight,
  Waves,
  Orbit,
  Sparkles,
} from "lucide-react";

const floatingOrbs = Array.from({ length: 12 });

const AboutCTASection = () => {

  const navigate = useNavigate();

  return (
    <section className="relative isolate overflow-hidden bg-[#081219] py-24 sm:py-28 lg:py-44">

      {/* ====================================================== */}
      {/* ATMOSPHERIC BACKGROUND */}
      {/* ====================================================== */}

      {/* MAIN WHITE GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.04]
          blur-[100px]
          lg:h-[1200px]
          lg:w-[1200px]
          lg:blur-[180px]
        "
      />

      {/* CYAN GLOW */}

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
          pointer-events-none
          absolute
          left-[-120px]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[90px]
          lg:left-[-200px]
          lg:h-[900px]
          lg:w-[900px]
          lg:blur-[180px]
        "
      />

      {/* ====================================================== */}
      {/* RADIAL LIGHT */}
      {/* ====================================================== */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]
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
      {/* LIGHT SHAFTS */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-[20%]
          hidden lg:block
          h-full
          w-[240px]
          rotate-[10deg]
          bg-gradient-to-b
          from-cyan-400/10
          to-transparent
          blur-[140px]
          opacity-70
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
          w-[220px]
          -rotate-[10deg]
          bg-gradient-to-b
          from-white/10
          to-transparent
          blur-[140px]
          opacity-60
        "
      />

      {/* ====================================================== */}
      {/* FLOATING PARTICLES */}
      {/* ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {floatingOrbs.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -80, 0],
              x: [0, 35, 0],
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
              width: `${6 + (i % 8)}px`,
              height: `${6 + (i % 8)}px`,
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
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          select-none
          text-[80px]
          sm:text-[130px]
          md:text-[220px]
          xl:text-[420px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.015]
        "
      >
        FUTURE
      </div>

      {/* ====================================================== */}
      {/* MAIN COMPOSITION */}
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
            relative
            flex
            min-h-[620px]
            items-center
            justify-center
            sm:min-h-[700px]
            lg:min-h-[850px]
          "
        >

          {/* ================================================== */}
          {/* CENTRAL ATMOSPHERIC CORE */}
          {/* ================================================== */}

          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              hidden
              rounded-full
              border border-white/[0.06]
              lg:block
              lg:h-[680px]
              lg:w-[680px]
            "
          />

          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              hidden
              rounded-full
              border border-cyan-400/[0.08]
              lg:block
              lg:h-[540px]
              lg:w-[540px]
            "
          />

          {/* ================================================== */}
          {/* FLOATING SIDE NODES */}
          {/* ================================================== */}

          {/* LEFT NODE */}

          <motion.div
            animate={{
              y: [0, -16, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[2%]
              top-[14%]
              hidden
              w-[240px]
              overflow-hidden
              rounded-[30px]
              border border-white/10
              bg-white/[0.04]
              p-6
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(15,23,42,0.45)]
              xl:block
            "
          >

            {/* INNER GLOW */}

            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-cyan-500/10
                to-white/[0.04]
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
                  border border-cyan-400/20
                  bg-cyan-500/10
                "
              >

                <Orbit
                  size={28}
                  className="text-cyan-200"
                />

              </div>

              <h3
                className="
                  mt-5
                  text-[1.7rem]
                  font-semibold
                  leading-tight
                  text-white
                "
              >
                Circular Environmental Systems
              </h3>

              <p
                className="
                  mt-5
                  text-sm
                  leading-relaxed
                  text-slate-400
                "
              >
                Infrastructure designed to create resilient
                ecological recovery and sustainable circular
                water intelligence.
              </p>

            </div>

          </motion.div>

          {/* RIGHT NODE */}

          <motion.div
            animate={{
              y: [0, -14, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[14%]
              right-[2%]
              hidden
              w-[240px]
              overflow-hidden
              rounded-[30px]
              border border-white/10
              bg-white/[0.04]
              p-6
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(15,23,42,0.45)]
              xl:block
            "
          >

            {/* INNER GLOW */}

            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-white/[0.06]
                to-cyan-500/[0.05]
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
                  border border-white/10
                  bg-white/[0.05]
                "
              >

                <Sparkles
                  size={28}
                  className="text-white"
                />

              </div>

              <h3
                className="
                  mt-5
                  text-[1.7rem]
                  font-semibold
                  leading-tight
                  text-white
                "
              >
                Future Sustainability Intelligence
              </h3>

              <p
                className="
                  mt-5
                  text-sm
                  leading-relaxed
                  text-slate-400
                "
              >
                Long-term environmental engineering focused
                on restoration, resilience and regenerative
                infrastructure ecosystems.
              </p>

            </div>

          </motion.div>

          {/* ================================================== */}
          {/* CENTER CONTENT */}
          {/* ================================================== */}

          <div className="relative z-20 mx-auto max-w-5xl text-center">

            {/* MICRO LABEL */}

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
                Ecological Future Partnership
              </span>

            </motion.div>

            {/* HEADING */}

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
                text-[3rem]
                font-semibold
                leading-[0.9]
                tracking-[-0.06em]
                text-white
                sm:text-5xl
                lg:text-7xl
                xl:text-[8rem]
              "
            >
              Build The Future

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
                Of Environmental
              </span>

              <span className="mt-2 block sm:mt-3">
                Restoration
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
                lg:text-xl
              "
            >
              Partner with Wastely Aqua to create intelligent
              environmental infrastructure systems that
              restore ecosystems, optimize water recovery and
              shape resilient sustainable futures.
            </motion.p>

            {/* CTA BUTTON */}

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
                duration: 1,
                delay: 0.35,
              }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-16"
            >

              <button
                onClick={() => navigate("/contact")}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  border border-white/10
                  bg-white/[0.05]
                  px-5
                  py-4
                  text-white
                  backdrop-blur-2xl
                  shadow-[0_0_60px_rgba(255,255,255,0.08)]
                  transition-all
                  duration-500
                  hover:scale-[1.03]
                  sm:gap-4
                  sm:px-8
                  sm:py-5
                  lg:px-10
                "
              >

                {/* BUTTON GLOW */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-cyan-500/20
                    via-white/[0.08]
                    to-cyan-500/20
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* BUTTON REFLECTION */}

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

                <div className="relative z-10 flex items-center gap-3 sm:gap-4">

                  <div
                    className="
                      flex h-10 w-10
                      items-center
                      justify-center
                      rounded-full
                      border border-cyan-400/20
                      bg-cyan-500/10
                      sm:h-12
                      sm:w-12
                    "
                  >

                    <Waves
                      size={20}
                      className="text-cyan-200"
                    />

                  </div>

                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      sm:text-sm
                      sm:tracking-[0.22em]
                    "
                  >
                    Partner With Wastely Aqua
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </div>

              </button>

            </motion.div>

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
          bg-white/[0.05]
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

export default AboutCTASection;