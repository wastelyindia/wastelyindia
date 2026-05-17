// import { motion } from "framer-motion";

// import {
//   Activity,
//   BrainCircuit,
//   Cpu,
//   Orbit,
//   Radar,
//   Recycle,
//   Waves,
// } from "lucide-react";

// const nodes = [
//   {
//     title: "Nano Bubble",
//     icon: Waves,
//     position:
//       "top-[10%] left-1/2 -translate-x-1/2",
//     glow: "shadow-cyan-500/30",
//   },

//   {
//     title: "Wetlands",
//     icon: Orbit,
//     position:
//       "top-1/2 left-[8%] -translate-y-1/2",
//     glow: "shadow-emerald-500/30",
//   },

//   {
//     title: "MPC Buoy",
//     icon: Radar,
//     position:
//       "top-1/2 right-[8%] -translate-y-1/2",
//     glow: "shadow-sky-500/30",
//   },

//   {
//     title: "Bioremediation",
//     icon: Recycle,
//     position:
//       "bottom-[12%] left-[20%]",
//     glow: "shadow-emerald-500/30",
//   },

//   {
//     title: "LTSD",
//     icon: Cpu,
//     position:
//       "bottom-[12%] right-[20%]",
//     glow: "shadow-cyan-500/30",
//   },

//   {
//     title: "AI Monitoring",
//     icon: BrainCircuit,
//     position:
//       "bottom-[2%] left-1/2 -translate-x-1/2",
//     glow: "shadow-cyan-500/30",
//   },
// ];

// const TechnologyEcosystemMap = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#050b11] py-36">
//       {/* GRID */}
//       <div
//         className="
//           absolute inset-0
//           opacity-[0.03]
//           bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
//           bg-[size:120px_120px]
//         "
//       />

//       {/* AMBIENT */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* CYAN */}
//         <div
//           className="
//             absolute left-[5%] top-[0%]
//             h-[700px] w-[700px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[180px]
//           "
//         />

//         {/* EMERALD */}
//         <div
//           className="
//             absolute right-[0%] bottom-[0%]
//             h-[650px] w-[650px]
//             rounded-full
//             bg-emerald-500/10
//             blur-[180px]
//           "
//         />

//         {/* RADIAL */}
//         <div
//           className="
//             absolute inset-0
//             bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]
//           "
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         {/* HEADER */}
//         <div className="max-w-5xl">
//           {/* BADGE */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="
//               inline-flex items-center gap-3
//               rounded-full
//               border border-cyan-400/20
//               bg-cyan-400/10
//               px-5 py-2
//               backdrop-blur-xl
//             "
//           >
//             <Activity
//               size={14}
//               className="text-cyan-300"
//             />

//             <span
//               className="
//                 text-xs
//                 uppercase
//                 tracking-[0.24em]
//                 text-cyan-200
//               "
//             >
//               Integrated Environmental Architecture
//             </span>
//           </motion.div>

//           {/* TITLE */}
//           <motion.h2
//             initial={{
//               opacity: 0,
//               y: 25,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.7,
//               delay: 0.1,
//             }}
//             viewport={{ once: true }}
//             className="
//               mt-8
//               text-5xl
//               md:text-7xl
//               font-black
//               leading-[0.92]
//               tracking-[-0.05em]
//               text-white
//             "
//           >
//             Intelligent
//             <span
//               className="
//                 block
//                 bg-gradient-to-r
//                 from-cyan-300
//                 via-cyan-400
//                 to-emerald-400
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Restoration Ecosystem
//             </span>
//           </motion.h2>

//           {/* DESC */}
//           <motion.p
//             initial={{
//               opacity: 0,
//               y: 25,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.7,
//               delay: 0.2,
//             }}
//             viewport={{ once: true }}
//             className="
//               mt-10
//               max-w-3xl
//               text-lg
//               md:text-xl
//               leading-relaxed
//               text-slate-300
//             "
//           >
//             Advanced environmental technologies integrated
//             into one intelligent ecological recovery platform
//             combining oxygenation, biological restoration and
//             smart infrastructure systems.
//           </motion.p>
//         </div>

//         {/* ECOSYSTEM MAP */}
//         <div
//           className="
//             relative
//             mt-28
//             min-h-[950px]
//             overflow-hidden
//             rounded-[52px]
//             border border-white/10
//             bg-white/5
//             backdrop-blur-2xl
//           "
//         >
//           {/* INNER GLOW */}
//           <div
//             className="
//               absolute inset-0
//               bg-gradient-to-br
//               from-cyan-400/10
//               via-transparent
//               to-emerald-400/10
//             "
//           />

//           {/* PARTICLES */}
//           {[...Array(20)].map((_, index) => (
//             <motion.div
//               key={index}
//               animate={{
//                 y: [0, -40, 0],
//                 opacity: [0.2, 1, 0.2],
//               }}
//               transition={{
//                 duration: 6 + index,
//                 repeat: Infinity,
//               }}
//               className="
//                 absolute
//                 h-2 w-2
//                 rounded-full
//                 bg-cyan-400/40
//               "
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//               }}
//             />
//           ))}

//           {/* SVG CONNECTIONS */}
//           <svg
//             className="absolute inset-0 h-full w-full"
//             viewBox="0 0 1200 900"
//             fill="none"
//           >
//             {/* TOP */}
//             <motion.line
//               x1="600"
//               y1="450"
//               x2="600"
//               y2="170"
//               stroke="rgba(34,211,238,0.3)"
//               strokeWidth="2"
//               strokeDasharray="8 8"
//               initial={{
//                 pathLength: 0,
//               }}
//               whileInView={{
//                 pathLength: 1,
//               }}
//               transition={{
//                 duration: 2,
//               }}
//             />

//             {/* LEFT */}
//             <motion.line
//               x1="600"
//               y1="450"
//               x2="250"
//               y2="450"
//               stroke="rgba(52,211,153,0.3)"
//               strokeWidth="2"
//               strokeDasharray="8 8"
//               initial={{
//                 pathLength: 0,
//               }}
//               whileInView={{
//                 pathLength: 1,
//               }}
//               transition={{
//                 duration: 2,
//                 delay: 0.2,
//               }}
//             />

//             {/* RIGHT */}
//             <motion.line
//               x1="600"
//               y1="450"
//               x2="950"
//               y2="450"
//               stroke="rgba(56,189,248,0.3)"
//               strokeWidth="2"
//               strokeDasharray="8 8"
//               initial={{
//                 pathLength: 0,
//               }}
//               whileInView={{
//                 pathLength: 1,
//               }}
//               transition={{
//                 duration: 2,
//                 delay: 0.4,
//               }}
//             />

//             {/* BOTTOM LEFT */}
//             <motion.line
//               x1="600"
//               y1="450"
//               x2="350"
//               y2="700"
//               stroke="rgba(52,211,153,0.3)"
//               strokeWidth="2"
//               strokeDasharray="8 8"
//               initial={{
//                 pathLength: 0,
//               }}
//               whileInView={{
//                 pathLength: 1,
//               }}
//               transition={{
//                 duration: 2,
//                 delay: 0.6,
//               }}
//             />

//             {/* BOTTOM RIGHT */}
//             <motion.line
//               x1="600"
//               y1="450"
//               x2="850"
//               y2="700"
//               stroke="rgba(34,211,238,0.3)"
//               strokeWidth="2"
//               strokeDasharray="8 8"
//               initial={{
//                 pathLength: 0,
//               }}
//               whileInView={{
//                 pathLength: 1,
//               }}
//               transition={{
//                 duration: 2,
//                 delay: 0.8,
//               }}
//             />

//             {/* BOTTOM CENTER */}
//             <motion.line
//               x1="600"
//               y1="450"
//               x2="600"
//               y2="820"
//               stroke="rgba(34,211,238,0.3)"
//               strokeWidth="2"
//               strokeDasharray="8 8"
//               initial={{
//                 pathLength: 0,
//               }}
//               whileInView={{
//                 pathLength: 1,
//               }}
//               transition={{
//                 duration: 2,
//                 delay: 1,
//               }}
//             />
//           </svg>

//           {/* CENTER CORE */}
//           <motion.div
//             initial={{
//               scale: 0.9,
//               opacity: 0,
//             }}
//             whileInView={{
//               scale: 1,
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//             viewport={{ once: true }}
//             className="
//               absolute left-1/2 top-1/2
//               z-20
//               flex h-[280px] w-[280px]
//               -translate-x-1/2 -translate-y-1/2
//               flex-col items-center justify-center
//               rounded-full
//               border border-cyan-400/20
//               bg-[#081219]/80
//               text-center
//               backdrop-blur-2xl
//               shadow-[0_0_120px_-20px_rgba(14,165,233,0.35)]
//             "
//           >
//             {/* PULSE */}
//             <motion.div
//               animate={{
//                 scale: [1, 1.15, 1],
//                 opacity: [0.2, 0.5, 0.2],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//               }}
//               className="
//                 absolute inset-0
//                 rounded-full
//                 border border-cyan-400/20
//               "
//             />

//             <div
//               className="
//                 flex h-20 w-20
//                 items-center justify-center
//                 rounded-3xl
//                 border border-cyan-400/20
//                 bg-cyan-400/10
//               "
//             >
//               <Activity
//                 size={38}
//                 className="text-cyan-300"
//               />
//             </div>

//             <h3
//               className="
//                 mt-8
//                 text-4xl
//                 font-black
//                 leading-[0.95]
//                 tracking-[-0.04em]
//                 text-white
//               "
//             >
//               Integrated
//               <span
//                 className="
//                   block
//                   bg-gradient-to-r
//                   from-cyan-300
//                   to-emerald-300
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Water Recovery
//               </span>
//             </h3>

//             <p
//               className="
//                 mt-5
//                 max-w-[220px]
//                 text-sm
//                 leading-relaxed
//                 text-slate-400
//               "
//             >
//               Intelligent environmental ecosystem combining
//               restoration, monitoring and oxygenation systems.
//             </p>
//           </motion.div>

//           {/* NODES */}
//           {nodes.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   scale: 0.8,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.1,
//                 }}
//                 viewport={{ once: true }}
//                 className={`
//                   absolute
//                   ${item.position}
//                   z-20
//                 `}
//               >
//                 <motion.div
//                   whileHover={{
//                     scale: 1.08,
//                   }}
//                   className="
//                     group
//                     relative
//                     overflow-hidden
//                     rounded-[34px]
//                     border border-white/10
//                     bg-[#081219]/70
//                     px-8 py-7
//                     backdrop-blur-2xl
//                     transition-all duration-500
//                     hover:border-cyan-400/20
//                     hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.35)]
//                   "
//                 >
//                   {/* GLOW */}
//                   <div
//                     className="
//                       absolute inset-0
//                       opacity-0
//                       transition-all duration-500
//                       group-hover:opacity-100
//                       bg-gradient-to-br
//                       from-cyan-400/10
//                       to-emerald-400/5
//                     "
//                   />

//                   {/* PULSE DOT */}
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.4, 1],
//                       opacity: [0.4, 1, 0.4],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                     }}
//                     className="
//                       absolute right-4 top-4
//                       h-3 w-3
//                       rounded-full
//                       bg-cyan-400
//                     "
//                   />

//                   {/* CONTENT */}
//                   <div className="relative z-10 flex items-center gap-5">
//                     <div
//                       className="
//                         flex h-18 w-18
//                         items-center justify-center
//                         rounded-3xl
//                         border border-cyan-400/20
//                         bg-cyan-400/10
//                       "
//                     >
//                       <Icon
//                         size={34}
//                         className="text-cyan-300"
//                       />
//                     </div>

//                     <div>
//                       <p
//                         className="
//                           text-xs
//                           uppercase
//                           tracking-[0.18em]
//                           text-cyan-200
//                         "
//                       >
//                         Integrated System
//                       </p>

//                       <h4
//                         className="
//                           mt-3
//                           text-2xl
//                           font-bold
//                           text-white
//                         "
//                       >
//                         {item.title}
//                       </h4>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechnologyEcosystemMap;


import { motion } from "framer-motion";

import {
  Activity,
  BrainCircuit,
  Cpu,
  Orbit,
  Radar,
  Recycle,
  Waves,
} from "lucide-react";

const nodes = [
  {
    title: "Nano Bubble",
    icon: Waves,
    position:
      "top-[10%] left-1/2 -translate-x-1/2",
  },

  {
    title: "Wetlands",
    icon: Orbit,
    position:
      "top-1/2 left-[8%] -translate-y-1/2",
  },

  {
    title: "MPC Buoy",
    icon: Radar,
    position:
      "top-1/2 right-[8%] -translate-y-1/2",
  },

  {
    title: "Bioremediation",
    icon: Recycle,
    position:
      "bottom-[12%] left-[20%]",
  },

  {
    title: "LTSD",
    icon: Cpu,
    position:
      "bottom-[12%] right-[20%]",
  },

  {
    title: "AI Monitoring",
    icon: BrainCircuit,
    position:
      "bottom-[2%] left-1/2 -translate-x-1/2",
  },
];

const TechnologyEcosystemMap = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#050b11]
        py-20 md:py-28 xl:py-36
      "
    >
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
            absolute left-[5%] top-[0%]
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

        {/* RADIAL */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]
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
            <Activity
              size={14}
              className="text-cyan-300"
            />

            <span
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.24em]
                text-cyan-200
              "
            >
              Integrated Environmental Architecture
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
              text-4xl
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
              font-black
              leading-[0.92]
              tracking-[-0.05em]
              text-white
            "
          >
            Intelligent

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
              Restoration Ecosystem
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
              mt-8 md:mt-10
              max-w-3xl
              text-base
              sm:text-lg
              md:text-xl
              leading-relaxed
              text-slate-300
            "
          >
            Advanced environmental technologies integrated
            into one intelligent ecological recovery platform
            combining oxygenation, biological restoration and
            smart infrastructure systems.
          </motion.p>
        </div>

        {/* MOBILE / TABLET VERSION */}
        <div className="mt-16 grid gap-5 lg:hidden">
          {/* CORE */}
          <div
            className="
              relative overflow-hidden
              rounded-[28px]
              border border-cyan-400/20
              bg-white/[0.06]
              p-8
              backdrop-blur-2xl
              shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]
            "
          >
            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-cyan-400/10
                via-transparent
                to-emerald-400/10
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex h-16 w-16
                  items-center justify-center
                  rounded-3xl
                  border border-cyan-400/20
                  bg-cyan-400/10
                "
              >
                <Activity
                  size={32}
                  className="text-cyan-300"
                />
              </div>

              <h3
                className="
                  mt-6
                  text-3xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-white
                "
              >
                Intelligent

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
                  Water Recovery
                </span>
              </h3>

              <p
                className="
                  mt-5
                  text-sm
                  leading-relaxed
                  text-slate-400
                "
              >
                Integrated environmental ecosystem combining
                restoration, monitoring and oxygenation systems.
              </p>
            </div>
          </div>

          {/* MOBILE SYSTEMS */}
          <div className="grid gap-4 sm:grid-cols-2">
            {nodes.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border border-white/10
                    bg-white/[0.05]
                    p-5
                    backdrop-blur-2xl

                    shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]

                    transition-[border-color,transform]
                    duration-300

                    active:scale-[0.98]
                  "
                >
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-br
                      from-cyan-400/5
                      to-emerald-400/5
                    "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        border border-cyan-400/20
                        bg-cyan-400/10
                      "
                    >
                      <Icon
                        size={26}
                        className="text-cyan-300"
                      />
                    </div>

                    <p
                      className="
                        mt-5
                        text-[11px]
                        uppercase
                        tracking-[0.18em]
                        text-cyan-200
                      "
                    >
                      Integrated System
                    </p>

                    <h4
                      className="
                        mt-2
                        text-xl
                        font-bold
                        text-white
                      "
                    >
                      {item.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP VERSION */}
        <div
          className="
            relative
            mt-28
            hidden
            min-h-[850px]
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-white/[0.05]
            backdrop-blur-2xl
            lg:block
            xl:min-h-[950px]
            xl:rounded-[52px]
          "
        >
          {/* INNER GLOW */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-cyan-400/10
              via-transparent
              to-emerald-400/10
            "
          />

          {/* PARTICLES */}
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
              }}
              className="
                absolute
                h-2 w-2
                rounded-full
                bg-cyan-400/40
              "
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* SVG CONNECTIONS */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 900"
            fill="none"
          >
            <motion.line
              x1="600"
              y1="450"
              x2="600"
              y2="170"
              stroke="rgba(34,211,238,0.3)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />

            <motion.line
              x1="600"
              y1="450"
              x2="250"
              y2="450"
              stroke="rgba(52,211,153,0.3)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.2 }}
            />

            <motion.line
              x1="600"
              y1="450"
              x2="950"
              y2="450"
              stroke="rgba(56,189,248,0.3)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
            />

            <motion.line
              x1="600"
              y1="450"
              x2="350"
              y2="700"
              stroke="rgba(52,211,153,0.3)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6 }}
            />

            <motion.line
              x1="600"
              y1="450"
              x2="850"
              y2="700"
              stroke="rgba(34,211,238,0.3)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            />

            <motion.line
              x1="600"
              y1="450"
              x2="600"
              y2="820"
              stroke="rgba(34,211,238,0.3)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
          </svg>

          {/* CENTER CORE */}
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="
              absolute left-1/2 top-1/2
              z-20
              flex h-[280px] w-[280px]
              -translate-x-1/2 -translate-y-1/2
              flex-col items-center justify-center
              rounded-full
              border border-cyan-400/20
              bg-[#081219]/80
              text-center
              backdrop-blur-2xl
              shadow-[0_0_120px_-20px_rgba(14,165,233,0.35)]
            "
          >
            {/* PULSE */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute inset-0
                rounded-full
                border border-cyan-400/20
              "
            />

            <div
              className="
                flex h-20 w-20
                items-center justify-center
                rounded-3xl
                border border-cyan-400/20
                bg-cyan-400/10
              "
            >
              <Activity
                size={38}
                className="text-cyan-300"
              />
            </div>

            <h3
              className="
                mt-8
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.04em]
                text-white
              "
            >
              Integrated

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
                Water Recovery
              </span>
            </h3>

            <p
              className="
                mt-5
                max-w-[220px]
                text-sm
                leading-relaxed
                text-slate-400
              "
            >
              Intelligent environmental ecosystem combining
              restoration, monitoring and oxygenation systems.
            </p>
          </motion.div>

          {/* DESKTOP NODES */}
          {nodes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`
                  absolute
                  ${item.position}
                  z-20
                `}
              >
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[34px]
                    border border-white/10
                    bg-[#081219]/70
                    px-8 py-7
                    backdrop-blur-2xl

                    shadow-[0_0_40px_-20px_rgba(34,211,238,0.2)]

                    transition-[border-color,box-shadow]
                    duration-500

                    hover:border-cyan-400/20
                    hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.35)]
                  "
                >
                  {/* GLOW */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                      bg-gradient-to-br
                      from-cyan-400/10
                      to-emerald-400/5
                    "
                  />

                  {/* PULSE DOT */}
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="
                      absolute right-4 top-4
                      h-3 w-3
                      rounded-full
                      bg-cyan-400
                    "
                  />

                  {/* CONTENT */}
                  <div className="relative z-10 flex items-center gap-5">
                    <div
                      className="
                        flex h-[72px] w-[72px]
                        items-center justify-center
                        rounded-3xl
                        border border-cyan-400/20
                        bg-cyan-400/10
                      "
                    >
                      <Icon
                        size={34}
                        className="text-cyan-300"
                      />
                    </div>

                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.18em]
                          text-cyan-200
                        "
                      >
                        Integrated System
                      </p>

                      <h4
                        className="
                          mt-3
                          text-2xl
                          font-bold
                          text-white
                        "
                      >
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyEcosystemMap;