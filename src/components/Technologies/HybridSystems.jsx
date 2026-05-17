// import { motion } from "framer-motion";

// import {
//   Activity,
//   ArrowRight,
//   BrainCircuit,
//   Cpu,
//   Droplets,
//   Leaf,
//   Orbit,
//   Radar,
//   Recycle,
//   Waves,
// } from "lucide-react";

// import HybridMain from "../../assets/images/hybrid-main.png";
// import HybridNano from "../../assets/images/hybrid-nano.png";
// import HybridWetland from "../../assets/images/hybrid-wetland.png";
// import HybridMonitoring from "../../assets/images/hybrid-monitoring.png";

// const ecosystemFlow = [
//   {
//     title: "Smart Monitoring",
//     icon: Radar,
//   },

//   {
//     title: "Nano Bubble Oxygenation",
//     icon: Waves,
//   },

//   {
//     title: "Biological Recovery",
//     icon: Recycle,
//   },

//   {
//     title: "Floating Wetlands",
//     icon: Leaf,
//   },

//   {
//     title: "Ecological Balance",
//     icon: Orbit,
//   },
// ];

// const ecosystemCards = [
//   {
//     title: "Nano Bubble + Biology",
//     description:
//       "Combining oxygen transfer and biological restoration for accelerated ecological recovery.",
//     image: HybridNano,
//     icon: Waves,
//   },

//   {
//     title: "Floating Ecosystems",
//     description:
//       "Integrated wetland systems supporting nutrient absorption and long-term sustainability.",
//     image: HybridWetland,
//     icon: Leaf,
//   },

//   {
//     title: "AI Environmental Intelligence",
//     description:
//       "Predictive monitoring and real-time ecosystem optimization powered by intelligent analytics.",
//     image: HybridMonitoring,
//     icon: BrainCircuit,
//   },
// ];

// const metrics = [
//   {
//     value: "Multi-Tech",
//     label: "Integrated Systems",
//   },

//   {
//     value: "AI + Biology",
//     label: "Hybrid Intelligence",
//   },

//   {
//     value: "24/7",
//     label: "Continuous Monitoring",
//   },

//   {
//     value: "Long-Term",
//     label: "Ecological Recovery",
//   },
// ];

// const HybridSystems = () => {
//   return (
//     <motion.section
//       initial={{
//         opacity: 0,
//         y: 60,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       transition={{
//         duration: 0.8,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.2,
//       }}
//     id="hybrid" className="relative overflow-hidden bg-[#060d14] py-32">
//       {/* BACKGROUND */}
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
//         <div
//           className="
//             absolute left-[10%] top-[5%]
//             h-[700px] w-[700px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[180px]
//           "
//         />

//         <div
//           className="
//             absolute right-[5%] bottom-[0%]
//             h-[650px] w-[650px]
//             rounded-full
//             bg-emerald-500/10
//             blur-[180px]
//           "
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         {/* HERO PANEL */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="
//             relative
//             overflow-hidden
//             rounded-[50px]
//             border border-white/10
//             bg-white/5
//             backdrop-blur-2xl
//           "
//         >
//           {/* IMAGE */}
//           <img
//             src={HybridMain}
//             alt="Hybrid Systems"
//             className="
//               absolute inset-0
//               h-full w-full
//               object-cover
//             "
//           />

//           {/* OVERLAY */}
//           <div
//             className="
//               absolute inset-0
//               bg-gradient-to-r
//               from-[#060d14]
//               via-[#060d14]/80
//               to-[#060d14]/30
//             "
//           />

//           {/* RADIAL LIGHT */}
//           <div
//             className="
//               absolute inset-0
//               bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]
//             "
//           />

//           {/* CONTENT */}
//           <div
//             className="
//               relative z-10
//               px-8 py-20
//               md:px-14
//               xl:px-20
//               xl:py-28
//             "
//           >
//             <div className="max-w-5xl">
//               {/* BADGE */}
//               <div
//                 className="
//                   inline-flex items-center gap-3
//                   rounded-full
//                   border border-cyan-400/20
//                   bg-white/5
//                   px-5 py-2
//                   backdrop-blur-xl
//                 "
//               >
//                 <Cpu
//                   size={14}
//                   className="text-cyan-300"
//                 />

//                 <span
//                   className="
//                     text-xs
//                     uppercase
//                     tracking-[0.25em]
//                     text-cyan-200
//                   "
//                 >
//                   Hybrid Restoration Ecosystems
//                 </span>
//               </div>

//               {/* TITLE */}
//               <h2
//                 className="
//                   mt-10
//                   text-5xl
//                   md:text-7xl
//                   xl:text-[88px]
//                   font-black
//                   leading-[0.9]
//                   tracking-[-0.05em]
//                   text-white
//                 "
//               >
//                 Intelligent
//                 <span
//                   className="
//                     block
//                     bg-gradient-to-r
//                     from-cyan-300
//                     via-cyan-400
//                     to-emerald-400
//                     bg-clip-text
//                     text-transparent
//                   "
//                 >
//                   Hybrid Restoration
//                 </span>

//                 Ecosystems
//               </h2>

//               {/* DESC */}
//               <p
//                 className="
//                   mt-10
//                   max-w-3xl
//                   text-lg
//                   md:text-xl
//                   leading-relaxed
//                   text-slate-300
//                 "
//               >
//                 Advanced integrated environmental systems
//                 combining nano bubble oxygenation, biological
//                 restoration and intelligent monitoring into a
//                 unified ecological recovery infrastructure.
//               </p>

//               {/* METRICS */}
//               <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
//                 {metrics.map((item, index) => (
//                   <div
//                     key={index}
//                     className="
//                       rounded-[28px]
//                       border border-white/10
//                       bg-[#081219]/50
//                       p-6
//                       backdrop-blur-2xl
//                     "
//                   >
//                     <h3
//                       className="
//                         text-4xl
//                         font-black
//                         leading-none
//                         bg-gradient-to-r
//                         from-cyan-300
//                         to-emerald-300
//                         bg-clip-text
//                         text-transparent
//                       "
//                     >
//                       {item.value}
//                     </h3>

//                     <p
//                       className="
//                         mt-4
//                         text-slate-400
//                       "
//                     >
//                       {item.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* FLOW SYSTEM */}
//         <div className="relative mt-28">
//           {/* LINE */}
//           <div
//             className="
//               absolute left-0 right-0 top-1/2
//               hidden h-[2px]
//               -translate-y-1/2
//               bg-gradient-to-r
//               from-transparent
//               via-cyan-400/20
//               to-transparent
//               xl:block
//             "
//           />

//           <div
//             className="
//               relative z-10
//               grid
//               gap-8
//               xl:grid-cols-5
//             "
//           >
//             {ecosystemFlow.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{
//                     opacity: 0,
//                     y: 35,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 0.7,
//                     delay: index * 0.08,
//                   }}
//                   viewport={{ once: true }}
//                   className="relative"
//                 >
//                   <div
//                     className="
//                       group
//                       relative
//                       overflow-hidden
//                       rounded-[34px]
//                       border border-white/10
//                       bg-white/5
//                       p-8
//                       text-center
//                       backdrop-blur-2xl
//                       transition-all duration-500
//                       hover:-translate-y-2
//                       hover:border-cyan-400/20
//                     "
//                   >
//                     {/* BG */}
//                     <div
//                       className="
//                         absolute inset-0
//                         opacity-0
//                         transition-all duration-500
//                         group-hover:opacity-100
//                         bg-gradient-to-br
//                         from-cyan-400/10
//                         to-emerald-400/5
//                       "
//                     />

//                     {/* ICON */}
//                     <div
//                       className="
//                         relative z-10
//                         mx-auto
//                         flex h-20 w-20
//                         items-center justify-center
//                         rounded-3xl
//                         border border-white/10
//                         bg-[#081219]/50
//                       "
//                     >
//                       <Icon
//                         size={38}
//                         className="text-cyan-300"
//                       />
//                     </div>

//                     {/* TITLE */}
//                     <h3
//                       className="
//                         relative z-10
//                         mt-7
//                         text-xl
//                         font-bold
//                         leading-tight
//                         text-white
//                       "
//                     >
//                       {item.title}
//                     </h3>

//                     {/* STEP */}
//                     <div
//                       className="
//                         relative z-10
//                         mt-6
//                         inline-flex items-center gap-2
//                         rounded-full
//                         border border-cyan-400/20
//                         bg-cyan-400/10
//                         px-4 py-2
//                       "
//                     >
//                       <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                       <span
//                         className="
//                           text-xs
//                           uppercase
//                           tracking-[0.18em]
//                           text-cyan-200
//                         "
//                       >
//                         Integrated Flow
//                       </span>
//                     </div>
//                   </div>

//                   {/* CONNECTOR */}
//                   {index !== ecosystemFlow.length - 1 && (
//                     <div
//                       className="
//                         absolute right-[-20px] top-1/2
//                         hidden -translate-y-1/2
//                         xl:block
//                       "
//                     >
//                       <ArrowRight
//                         size={26}
//                         className="text-cyan-400/40"
//                       />
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* SYSTEM CARDS */}
//         <div className="mt-28 grid gap-8 xl:grid-cols-3">
//           {ecosystemCards.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 35,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.08,
//                 }}
//                 viewport={{ once: true }}
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[40px]
//                   border border-white/10
//                   bg-white/5
//                   backdrop-blur-2xl
//                   transition-all duration-500
//                   hover:-translate-y-2
//                   hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]
//                 "
//               >
//                 {/* IMAGE */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="
//                       h-[320px] w-full
//                       object-cover
//                       transition-transform duration-700
//                       group-hover:scale-105
//                     "
//                   />

//                   {/* OVERLAY */}
//                   <div
//                     className="
//                       absolute inset-0
//                       bg-gradient-to-t
//                       from-[#060d14]
//                       via-[#060d14]/10
//                       to-transparent
//                     "
//                   />

//                   {/* ICON */}
//                   <div
//                     className="
//                       absolute left-6 top-6
//                       flex h-16 w-16
//                       items-center justify-center
//                       rounded-2xl
//                       border border-white/10
//                       bg-[#081219]/60
//                       backdrop-blur-xl
//                     "
//                   >
//                     <Icon
//                       size={30}
//                       className="text-cyan-300"
//                     />
//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-8">
//                   <h3
//                     className="
//                       text-3xl
//                       font-black
//                       leading-tight
//                       text-white
//                     "
//                   >
//                     {item.title}
//                   </h3>

//                   <p
//                     className="
//                       mt-6
//                       leading-relaxed
//                       text-slate-300
//                     "
//                   >
//                     {item.description}
//                   </p>

//                   {/* FOOTER */}
//                   <div
//                     className="
//                       mt-10
//                       flex items-center justify-between
//                     "
//                   >
//                     <div
//                       className="
//                         flex items-center gap-2
//                         text-xs
//                         uppercase
//                         tracking-[0.18em]
//                         text-slate-400
//                       "
//                     >
//                       <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                       Hybrid Infrastructure
//                     </div>

//                     <ArrowRight
//                       size={22}
//                       className="
//                         text-cyan-300
//                         transition-transform duration-300
//                         group-hover:translate-x-1
//                       "
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default HybridSystems;



import { motion } from "framer-motion";

import {
  ArrowRight,
  BrainCircuit,
  Cpu,
  Leaf,
  Orbit,
  Radar,
  Recycle,
  Waves,
} from "lucide-react";

import HybridMain from "../../assets/images/hybrid-main.png";
import HybridNano from "../../assets/images/hybrid-nano.png";
import HybridWetland from "../../assets/images/hybrid-wetland.png";
import HybridMonitoring from "../../assets/images/hybrid-monitoring.png";

const ecosystemFlow = [
  {
    title: "Smart Monitoring",
    icon: Radar,
  },

  {
    title: "Nano Bubble Oxygenation",
    icon: Waves,
  },

  {
    title: "Biological Recovery",
    icon: Recycle,
  },

  {
    title: "Floating Wetlands",
    icon: Leaf,
  },

  {
    title: "Ecological Balance",
    icon: Orbit,
  },
];

const ecosystemCards = [
  {
    title: "Nano Bubble + Biology",
    description:
      "Combining oxygen transfer and biological restoration for accelerated ecological recovery.",
    image: HybridNano,
    icon: Waves,
  },

  {
    title: "Floating Ecosystems",
    description:
      "Integrated wetland systems supporting nutrient absorption and long-term sustainability.",
    image: HybridWetland,
    icon: Leaf,
  },

  {
    title: "AI Environmental Intelligence",
    description:
      "Predictive monitoring and real-time ecosystem optimization powered by intelligent analytics.",
    image: HybridMonitoring,
    icon: BrainCircuit,
  },
];

const metrics = [
  {
    value: "Multi-Tech",
    label: "Integrated Systems",
  },

  {
    value: "AI + Biology",
    label: "Hybrid Intelligence",
  },

  {
    value: "24/7",
    label: "Continuous Monitoring",
  },

  {
    value: "Long-Term",
    label: "Ecological Recovery",
  },
];

const HybridSystems = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      id="hybrid"
      className="
        relative
        overflow-hidden
        bg-[#060d14]

        py-20 md:py-28 xl:py-36

        scroll-mt-24 md:scroll-mt-32
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

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* CYAN */}
        <div
          className="
            absolute left-[10%] top-[5%]
            h-[700px] w-[700px]
            rounded-full
            bg-cyan-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />

        {/* EMERALD */}
        <div
          className="
            absolute right-[5%] bottom-[0%]
            h-[650px] w-[650px]
            rounded-full
            bg-emerald-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden

            rounded-[28px]
            md:rounded-[40px]
            xl:rounded-[50px]

            border border-white/10
            bg-white/[0.05]

            backdrop-blur-2xl
          "
        >
          {/* IMAGE */}
          <img
            src={HybridMain}
            alt="Hybrid Systems"
            className="
              absolute inset-0
              h-full w-full
              object-cover
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute inset-0

              bg-gradient-to-t
              from-[#060d14]/95
              via-[#060d14]/75
              to-[#060d14]/20

              xl:bg-gradient-to-r
              xl:from-[#060d14]
              xl:via-[#060d14]/80
              xl:to-[#060d14]/30
            "
          />

          {/* RADIAL */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative z-10

              px-5 py-14
              sm:px-8 sm:py-16
              md:px-12 md:py-20
              xl:px-20 xl:py-28
            "
          >
            <div className="max-w-5xl">
              {/* BADGE */}
              <div
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  border border-cyan-400/20
                  bg-white/[0.05]
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
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[0.25em]
                    text-cyan-200
                  "
                >
                  Hybrid Restoration Ecosystems
                </span>
              </div>

              {/* TITLE */}
              <h2
                className="
                  mt-8 md:mt-10

                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  xl:text-[88px]

                  font-black
                  leading-[0.9]
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
                  Hybrid Restoration
                </span>

                Ecosystems
              </h2>

              {/* DESC */}
              <p
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
                Advanced integrated environmental systems
                combining nano bubble oxygenation, biological
                restoration and intelligent monitoring into a
                unified ecological recovery infrastructure.
              </p>

              {/* METRICS */}
              <div
                className="
                  mt-10 md:mt-14

                  grid gap-4 md:gap-5

                  grid-cols-1
                  sm:grid-cols-2
                  xl:grid-cols-4
                "
              >
                {metrics.map((item, index) => (
                  <div
                    key={index}
                    className="
                      rounded-[24px]
                      md:rounded-[28px]

                      border border-white/10
                      bg-[#081219]/60

                      p-5 sm:p-6

                      backdrop-blur-2xl

                      shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]
                    "
                  >
                    <h3
                      className="
                        text-3xl
                        sm:text-4xl

                        font-black
                        leading-none

                        bg-gradient-to-r
                        from-cyan-300
                        to-emerald-300
                        bg-clip-text
                        text-transparent
                      "
                    >
                      {item.value}
                    </h3>

                    <p
                      className="
                        mt-4

                        text-sm
                        sm:text-base

                        text-slate-400
                      "
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FLOW */}
        <div className="relative mt-20 md:mt-28">
          {/* LINE */}
          <div
            className="
              absolute left-0 right-0 top-1/2
              hidden h-[2px]
              -translate-y-1/2
              bg-gradient-to-r
              from-transparent
              via-cyan-400/20
              to-transparent
              xl:block
            "
          />

          <div
            className="
              relative z-10

              grid gap-5 md:gap-6

              sm:grid-cols-2
              xl:grid-cols-5
            "
          >
            {ecosystemFlow.map((item, index) => {
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
                  className="relative"
                >
                  <div
                    className="
                      group
                      relative
                      overflow-hidden

                      rounded-[28px]
                      md:rounded-[34px]

                      border border-white/10
                      bg-white/[0.06]

                      p-6 md:p-8

                      text-center
                      backdrop-blur-2xl

                      shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]

                      transition-[transform,border-color,box-shadow]
                      duration-500

                      md:hover:-translate-y-2
                      md:hover:border-cyan-400/20
                      md:hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]
                    "
                  >
                    {/* BG */}
                    <div
                      className="
                        absolute inset-0
                        opacity-0
                        transition-opacity duration-500
                        md:group-hover:opacity-100
                        bg-gradient-to-br
                        from-cyan-400/10
                        to-emerald-400/5
                      "
                    />

                    {/* ICON */}
                    <div
                      className="
                        relative z-10
                        mx-auto

                        flex h-16 w-16
                        sm:h-20 sm:w-20

                        items-center justify-center

                        rounded-3xl
                        border border-white/10
                        bg-[#081219]/60
                      "
                    >
                      <Icon
                        size={34}
                        className="text-cyan-300"
                      />
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        relative z-10

                        mt-6 md:mt-7

                        text-lg
                        sm:text-xl

                        font-bold
                        leading-tight
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    {/* STEP */}
                    <div
                      className="
                        relative z-10
                        mt-6

                        inline-flex items-center gap-2

                        rounded-full
                        border border-cyan-400/20
                        bg-cyan-400/10

                        px-4 py-2
                      "
                    >
                      <div className="h-2 w-2 rounded-full bg-cyan-400" />

                      <span
                        className="
                          text-[10px]
                          sm:text-xs
                          uppercase
                          tracking-[0.18em]
                          text-cyan-200
                        "
                      >
                        Integrated Flow
                      </span>
                    </div>
                  </div>

                  {/* CONNECTOR */}
                  {index !== ecosystemFlow.length - 1 && (
                    <div
                      className="
                        absolute right-[-20px] top-1/2
                        hidden -translate-y-1/2
                        xl:block
                      "
                    >
                      <ArrowRight
                        size={26}
                        className="text-cyan-400/40"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-20 md:mt-28

            grid gap-6 md:gap-8

            xl:grid-cols-3
          "
        >
          {ecosystemCards.map((item, index) => {
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
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[28px]
                  md:rounded-[36px]
                  xl:rounded-[40px]

                  border border-white/10
                  bg-white/[0.06]

                  backdrop-blur-2xl

                  shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]

                  transition-[transform,border-color,box-shadow]
                  duration-500

                  md:hover:-translate-y-2
                  md:hover:border-cyan-400/20
                  md:hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-[260px]
                      sm:h-[320px]
                      w-full
                      object-cover
                      transition-transform duration-700
                      md:group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#060d14]/95
                      via-[#060d14]/10
                      to-transparent
                    "
                  />

                  {/* ICON */}
                  <div
                    className="
                      absolute left-5 top-5

                      flex h-14 w-14
                      sm:h-16 sm:w-16

                      items-center justify-center

                      rounded-2xl
                      border border-white/10
                      bg-[#081219]/70

                      backdrop-blur-xl
                    "
                  >
                    <Icon
                      size={28}
                      className="text-cyan-300"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-8">
                  {/* TITLE */}
                  <h3
                    className="
                      text-2xl
                      sm:text-3xl

                      font-black
                      leading-tight
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className="
                      mt-5 md:mt-6

                      text-sm
                      sm:text-base

                      leading-relaxed
                      text-slate-300
                    "
                  >
                    {item.description}
                  </p>

                  {/* FOOTER */}
                  <div
                    className="
                      mt-8 md:mt-10
                      flex items-center justify-between
                    "
                  >
                    <div
                      className="
                        flex items-center gap-2

                        text-[10px]
                        sm:text-xs

                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                      "
                    >
                      <div className="h-2 w-2 rounded-full bg-cyan-400" />

                      Hybrid Infrastructure
                    </div>

                    <ArrowRight
                      size={22}
                      className="
                        text-cyan-300
                        transition-transform duration-300
                        md:group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default HybridSystems;