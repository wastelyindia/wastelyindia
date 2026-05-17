// import { Link } from "react-router-dom";
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

// import HeroImg from "../../assets/images/technologies-hero.png";

// const floatingTech = [
//   {
//     title: "Nano Bubble",
//     icon: Waves,
//     position:
//       "top-[12%] right-[5%] lg:right-[10%]",
//     color: "text-cyan-300",
//   },

//   {
//     title: "Floating Wetlands",
//     icon: Leaf,
//     position:
//       "top-[35%] right-[2%] lg:right-[6%]",
//     color: "text-emerald-300",
//   },

//   {
//     title: "MPC Smart Buoy",
//     icon: Radar,
//     position:
//       "bottom-[26%] right-[4%] lg:right-[12%]",
//     color: "text-cyan-300",
//   },

//   {
//     title: "Bioremediation",
//     icon: Recycle,
//     position:
//       "bottom-[10%] right-[10%] lg:right-[18%]",
//     color: "text-emerald-300",
//   },
// ];

// const ecosystemTags = [
//   "Biological Systems",
//   "Mechanical Systems",
//   "Smart Monitoring",
//   "Hybrid Restoration",
//   "Nano Bubble Technology",
// ];

// const metrics = [
//   {
//     value: "24/7",
//     label: "Real-Time Monitoring",
//     icon: Radar,
//   },

//   {
//     value: "AI",
//     label: "Predictive Analytics",
//     icon: BrainCircuit,
//   },

//   {
//     value: "Multi-Tech",
//     label: "Integrated Ecosystems",
//     icon: Orbit,
//   },

//   {
//     value: "₹33+ Cr",
//     label: "Restoration Capability",
//     icon: Droplets,
//   },
// ];

// const TechnologiesHero = () => {
//   return (
//     // <section 
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
//       className="relative min-h-screen overflow-hidden bg-[#081219]">
//       {/* BACKGROUND */}
//       <div className="absolute inset-0">
//         {/* IMAGE */}
//         <img
//           src={HeroImg}
//           alt="Environmental Technologies"
//           className="
//             h-full w-full
//             object-cover
//             scale-105
//           "
//         />

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-[#081219]/70" />

//         {/* LEFT GRADIENT */}
//         <div
//           className="
//             absolute inset-0
//             bg-gradient-to-r
//             from-[#081219]
//             via-[#081219]/80
//             to-[#081219]/40
//           "
//         />

//         {/* TOP/BOTTOM OVERLAY */}
//         <div
//           className="
//             absolute inset-0
//             bg-gradient-to-t
//             from-[#081219]
//             via-transparent
//             to-[#081219]/40
//           "
//         />

//         {/* WATER GLOW */}
//         <div
//           className="
//             absolute inset-0
//             opacity-20
//             bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]
//             animate-[pulse_8s_ease-in-out_infinite]
//           "
//         />

//         {/* GRID */}
//         <div
//           className="
//             absolute inset-0
//             opacity-[0.04]
//             bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
//             bg-[size:90px_90px]
//           "
//         />

//         {/* CYAN GLOW */}
//         <div
//           className="
//             absolute left-[-120px] top-[-120px]
//             h-[700px] w-[700px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[180px]
//           "
//         />

//         {/* EMERALD GLOW */}
//         <div
//           className="
//             absolute right-[-120px] bottom-[-120px]
//             h-[650px] w-[650px]
//             rounded-full
//             bg-emerald-500/10
//             blur-[180px]
//           "
//         />
//       </div>

//       {/* FLOATING TECHNOLOGIES */}
//       <div className="hidden xl:block">
//         {floatingTech.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{
//                 opacity: 1,
//                 y: [0, -12, 0],
//               }}
//               transition={{
//                 duration: 5 + index,
//                 repeat: Infinity,
//               }}
//               className={`
//                 absolute z-20
//                 ${item.position}
//               `}
//             >
//               <div
//                 className="
//                   flex items-center gap-4
//                   rounded-[28px]
//                   border border-white/10
//                   bg-white/5
//                   px-6 py-5
//                   backdrop-blur-2xl
//                   shadow-[0_0_60px_-12px_rgba(14,165,233,0.25)]
//                 "
//               >
//                 {/* ICON */}
//                 <div
//                   className="
//                     flex h-14 w-14
//                     items-center justify-center
//                     rounded-2xl
//                     border border-white/10
//                     bg-gradient-to-br
//                     from-cyan-400/10
//                     to-emerald-400/10
//                   "
//                 >
//                   <Icon
//                     size={28}
//                     className={item.color}
//                   />
//                 </div>

//                 {/* TEXT */}
//                 <div>
//                   <p className="font-semibold text-white">
//                     {item.title}
//                   </p>

//                   <p className="text-sm text-slate-400">
//                     Integrated Technology
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* MAIN CONTENT */}
//       <div
//         className="
//           relative z-20
//           flex min-h-screen items-center
//           pt-32 pb-16
//         "
//       >
//         <div className="mx-auto w-full max-w-7xl px-6">
//           <div className="max-w-5xl">
//             <motion.div
//               initial={{ opacity: 0, y: 35 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9 }}
//             >
//               {/* BADGE */}
//               <div
//                 className="
//                   mb-8
//                   inline-flex items-center gap-3
//                   rounded-full
//                   border border-cyan-400/20
//                   bg-white/5
//                   px-5 py-2
//                   backdrop-blur-xl
//                 "
//               >
//                 <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

//                 <span
//                   className="
//                     text-xs
//                     uppercase
//                     tracking-[0.25em]
//                     text-cyan-200
//                   "
//                 >
//                   Integrated Technology Ecosystem
//                 </span>
//               </div>

//               {/* TITLE */}
//               <h1
//                 className="
//                   text-5xl
//                   sm:text-6xl
//                   md:text-7xl
//                   xl:text-[110px]
//                   font-black
//                   leading-[0.9]
//                   tracking-[-0.05em]
//                   text-white
//                 "
//               >
//                 Integrated
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
//                   Environmental
//                 </span>

//                 Technologies
//               </h1>

//               {/* SUBTITLE */}
//               <h2
//                 className="
//                   mt-8
//                   text-2xl
//                   md:text-4xl
//                   font-bold
//                   leading-tight
//                   text-slate-200
//                 "
//               >
//                 For Intelligent Water Infrastructure
//               </h2>

//               {/* DESCRIPTION */}
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
//                 Advanced biological, mechanical and intelligent
//                 monitoring technologies engineered to restore,
//                 optimize and sustain modern aquatic ecosystems
//                 through integrated environmental infrastructure.
//               </p>

//               {/* TAGS */}
//               <div className="mt-10 flex flex-wrap gap-4">
//                 {ecosystemTags.map((item, index) => (
//                   <div
//                     key={index}
//                     className="
//                       rounded-full
//                       border border-white/10
//                       bg-white/5
//                       px-5 py-3
//                       text-sm
//                       text-slate-200
//                       backdrop-blur-xl
//                       transition-all duration-300
//                       hover:border-cyan-400/30
//                     "
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>

//               {/* BUTTONS */}
//               <div className="mt-12 flex flex-col gap-5 sm:flex-row">
//                 {/* PRIMARY */}
//                 <Link
//                   to="/case-studies"
//                   className="
//                     group
//                     inline-flex items-center gap-3
//                     rounded-full
//                     bg-gradient-to-r
//                     from-cyan-500
//                     to-emerald-500
//                     px-8 py-4
//                     font-medium
//                     text-white
//                     transition-all duration-300
//                     hover:scale-105
//                     shadow-[0_0_60px_-12px_rgba(14,165,233,0.45)]
//                   "
//                 >
//                   Explore Technologies

//                   <ArrowRight
//                     size={20}
//                     className="
//                       transition-all
//                       group-hover:translate-x-1
//                     "
//                   />
//                 </Link>

//                 {/* SECONDARY */}
//                 <Link
//                   to="/contact"
//                   className="
//                     inline-flex items-center gap-3
//                     rounded-full
//                     border border-white/10
//                     bg-white/5
//                     px-8 py-4
//                     text-white
//                     backdrop-blur-xl
//                     transition-all duration-300
//                     hover:border-cyan-400/20
//                     hover:bg-white/10
//                   "
//                 >
//                   Engineering Consultation
//                 </Link>
//               </div>
//             </motion.div>

//             {/* METRICS */}
//             <motion.div
//               initial={{ opacity: 0, y: 35 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: 0.3,
//                 duration: 0.8,
//               }}
//               className="
//                 mt-20
//                 grid
//                 grid-cols-2
//                 gap-5
//                 xl:grid-cols-4
//               "
//             >
//               {metrics.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={index}
//                     className="
//                       group
//                       relative
//                       overflow-hidden
//                       rounded-[32px]
//                       border border-white/10
//                       bg-white/5
//                       p-7
//                       backdrop-blur-2xl
//                       transition-all duration-500
//                       hover:border-cyan-400/20
//                     "
//                   >
//                     {/* HOVER */}
//                     <div
//                       className="
//                         absolute inset-0
//                         opacity-0
//                         transition-all duration-500
//                         group-hover:opacity-100
//                         bg-gradient-to-br
//                         from-cyan-500/10
//                         to-emerald-500/5
//                       "
//                     />

//                     {/* ICON */}
//                     <div
//                       className="
//                         relative z-10
//                         mb-6
//                         flex h-14 w-14
//                         items-center justify-center
//                         rounded-2xl
//                         border border-white/10
//                         bg-gradient-to-br
//                         from-cyan-400/10
//                         to-emerald-400/10
//                       "
//                     >
//                       <Icon
//                         size={28}
//                         className="text-cyan-300"
//                       />
//                     </div>

//                     {/* VALUE */}
//                     <h3
//                       className="
//                         relative z-10
//                         text-3xl
//                         md:text-5xl
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

//                     {/* LABEL */}
//                     <p
//                       className="
//                         relative z-10
//                         mt-4
//                         leading-relaxed
//                         text-slate-400
//                       "
//                     >
//                       {item.label}
//                     </p>
//                   </div>
//                 );
//               })}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* FLOATING ORB */}
//       <div
//         className="
//           absolute
//           right-[18%]
//           top-1/2
//           hidden
//           h-40
//           w-40
//           -translate-y-1/2
//           items-center
//           justify-center
//           rounded-full
//           border border-cyan-400/20
//           bg-white/5
//           backdrop-blur-3xl
//           xl:flex
//         "
//       >
//         <div
//           className="
//             absolute inset-0
//             rounded-full
//             bg-gradient-to-br
//             from-cyan-400/20
//             to-emerald-400/10
//             blur-2xl
//           "
//         />

//         <div className="relative z-10 text-center">
//           <Cpu
//             size={38}
//             className="mx-auto text-cyan-300"
//           />

//           <p className="mt-3 text-sm text-slate-300">
//             Smart Systems
//           </p>
//         </div>
//       </div>

//       {/* BOTTOM FADE */}
//       <div
//         className="
//           absolute bottom-0 left-0
//           h-40 w-full
//           bg-gradient-to-t
//           from-[#081219]
//           to-transparent
//         "
//       />
//     </motion.section>
//   );
// };

// export default TechnologiesHero;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  BrainCircuit,
  Cpu,
  Droplets,
  Leaf,
  Orbit,
  Radar,
  Recycle,
  Waves,
} from "lucide-react";

import HeroImg from "../../assets/images/technologies-hero.png";

const floatingTech = [
  {
    title: "Nano Bubble",
    icon: Waves,
    position:
      "top-[12%] right-[5%] lg:right-[10%]",
    color: "text-cyan-300",
  },

  {
    title: "Floating Wetlands",
    icon: Leaf,
    position:
      "top-[35%] right-[2%] lg:right-[6%]",
    color: "text-emerald-300",
  },

  {
    title: "MPC Smart Buoy",
    icon: Radar,
    position:
      "bottom-[26%] right-[4%] lg:right-[12%]",
    color: "text-cyan-300",
  },

  {
    title: "Bioremediation",
    icon: Recycle,
    position:
      "bottom-[10%] right-[10%] lg:right-[18%]",
    color: "text-emerald-300",
  },
];

const ecosystemTags = [
  "Biological Systems",
  "Mechanical Systems",
  "Smart Monitoring",
  "Hybrid Restoration",
  "Nano Bubble Technology",
];

const metrics = [
  {
    value: "24/7",
    label: "Real-Time Monitoring",
    icon: Radar,
  },

  {
    value: "AI",
    label: "Predictive Analytics",
    icon: BrainCircuit,
  },

  {
    value: "Multi-Tech",
    label: "Integrated Ecosystems",
    icon: Orbit,
  },

  {
    value: "₹33+ Cr",
    label: "Restoration Capability",
    icon: Droplets,
  },
];

const TechnologiesHero = () => {
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
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#081219]
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* IMAGE */}
        <img
          src={HeroImg}
          alt="Environmental Technologies"
          className="
            h-full w-full
            object-cover
            scale-110 md:scale-105
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#081219]/80 md:bg-[#081219]/70" />

        {/* LEFT GRADIENT */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#081219]
            via-[#081219]/85
            to-[#081219]/50
          "
        />

        {/* TOP/BOTTOM OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#081219]
            via-transparent
            to-[#081219]/50
          "
        />

        {/* WATER GLOW */}
        <div
          className="
            absolute inset-0
            opacity-20
            bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]
            animate-[pulse_8s_ease-in-out_infinite]
          "
        />

        {/* GRID */}
        <div
          className="
            absolute inset-0
            opacity-[0.04]
            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[size:90px_90px]
          "
        />

        {/* CYAN GLOW */}
        <div
          className="
            absolute left-[-120px] top-[-120px]
            h-[700px] w-[700px]
            rounded-full
            bg-cyan-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />

        {/* EMERALD GLOW */}
        <div
          className="
            absolute right-[-120px] bottom-[-120px]
            h-[650px] w-[650px]
            rounded-full
            bg-emerald-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />
      </div>

      {/* FLOATING TECHNOLOGIES */}
      <div className="pointer-events-none hidden xl:block">
        {floatingTech.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
              }}
              className={`
                absolute z-20
                ${item.position}
              `}
            >
              <div
                className="
                  flex items-center gap-4
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.06]
                  px-6 py-5
                  backdrop-blur-2xl
                  shadow-[0_0_60px_-12px_rgba(14,165,233,0.25)]
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-gradient-to-br
                    from-cyan-400/10
                    to-emerald-400/10
                  "
                >
                  <Icon
                    size={28}
                    className={item.color}
                  />
                </div>

                {/* TEXT */}
                <div>
                  <p className="font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="text-sm text-slate-400">
                    Integrated Technology
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-20
          flex min-h-[100svh] items-center
          pt-28 pb-14
          md:pt-32 md:pb-16
        "
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              {/* BADGE */}
              <div
                className="
                  mb-8
                  inline-flex items-center gap-3
                  rounded-full
                  border border-cyan-400/20
                  bg-white/[0.05]
                  px-5 py-2
                  backdrop-blur-xl
                "
              >
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[0.25em]
                    text-cyan-200
                  "
                >
                  Integrated Technology Ecosystem
                </span>
              </div>

              {/* TITLE */}
              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  xl:text-[110px]
                  font-black
                  leading-[0.9]
                  tracking-[-0.05em]
                  text-white
                "
              >
                Integrated

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
                  Environmental
                </span>

                Technologies
              </h1>

              {/* SUBTITLE */}
              <h2
                className="
                  mt-6 md:mt-8
                  text-xl
                  sm:text-2xl
                  md:text-4xl
                  font-bold
                  leading-tight
                  text-slate-200
                "
              >
                For Intelligent Water Infrastructure
              </h2>

              {/* DESCRIPTION */}
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
                Advanced biological, mechanical and intelligent
                monitoring technologies engineered to restore,
                optimize and sustain modern aquatic ecosystems
                through integrated environmental infrastructure.
              </p>

              {/* TAGS */}
              <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
                {ecosystemTags.map((item, index) => (
                  <div
                    key={index}
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/[0.05]
                      px-4 py-2.5
                      sm:px-5 sm:py-3
                      text-xs sm:text-sm
                      text-slate-200
                      backdrop-blur-xl
                      transition-[border-color,background-color]
                      duration-300
                      md:hover:border-cyan-400/30
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-10 md:mt-12 flex flex-col gap-4 sm:flex-row">
                {/* PRIMARY */}
                <Link
                  to="/case-studies"
                  className="
                    group
                    flex w-full sm:w-auto
                    items-center justify-center gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-emerald-500
                    px-8 py-4
                    font-medium
                    text-white
                    shadow-[0_0_60px_-12px_rgba(14,165,233,0.45)]
                    transition-transform duration-300
                    md:hover:scale-105
                  "
                >
                  Explore Case studies

                  <ArrowRight
                    size={20}
                    className="
                      transition-transform duration-300
                      md:group-hover:translate-x-1
                    "
                  />
                </Link>

                {/* SECONDARY */}
                <Link
                  to="/contact"
                  className="
                    flex w-full sm:w-auto
                    items-center justify-center gap-3
                    rounded-full
                    border border-white/10
                    bg-white/[0.05]
                    px-8 py-4
                    text-white
                    backdrop-blur-xl
                    transition-[border-color,background-color]
                    duration-300
                    md:hover:border-cyan-400/20
                    md:hover:bg-white/10
                  "
                >
                  Engineering Consultation
                </Link>
              </div>
            </motion.div>

            {/* METRICS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="
                mt-16 md:mt-20
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                xl:grid-cols-4
              "
            >
              {metrics.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[24px]
                      md:rounded-[32px]
                      border border-white/10
                      bg-white/[0.06]
                      p-5 sm:p-7
                      backdrop-blur-2xl

                      shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]

                      transition-[border-color,transform,box-shadow]
                      duration-500

                      md:hover:border-cyan-400/20
                    "
                  >
                    {/* HOVER */}
                    <div
                      className="
                        absolute inset-0
                        opacity-0
                        transition-opacity duration-500
                        md:group-hover:opacity-100
                        bg-gradient-to-br
                        from-cyan-500/10
                        to-emerald-500/5
                      "
                    />

                    {/* ICON */}
                    <div
                      className="
                        relative z-10
                        mb-5
                        flex h-12 w-12
                        sm:h-14 sm:w-14
                        items-center justify-center
                        rounded-2xl
                        border border-white/10
                        bg-gradient-to-br
                        from-cyan-400/10
                        to-emerald-400/10
                      "
                    >
                      <Icon
                        size={24}
                        className="text-cyan-300"
                      />
                    </div>

                    {/* VALUE */}
                    <h3
                      className="
                        relative z-10
                        text-2xl
                        sm:text-3xl
                        md:text-5xl
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

                    {/* LABEL */}
                    <p
                      className="
                        relative z-10
                        mt-4
                        text-sm
                        sm:text-base
                        leading-relaxed
                        text-slate-400
                      "
                    >
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* FLOATING ORB */}
      <div
        className="
          absolute
          right-[18%]
          top-1/2
          hidden
          h-40
          w-40
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border border-cyan-400/20
          bg-white/[0.05]
          backdrop-blur-3xl
          xl:flex
        "
      >
        <div
          className="
            absolute inset-0
            rounded-full
            bg-gradient-to-br
            from-cyan-400/20
            to-emerald-400/10
            blur-2xl
          "
        />

        <div className="relative z-10 text-center">
          <Cpu
            size={38}
            className="mx-auto text-cyan-300"
          />

          <p className="mt-3 text-sm text-slate-300">
            Smart Systems
          </p>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div
        className="
          absolute bottom-0 left-0
          h-40 w-full
          bg-gradient-to-t
          from-[#081219]
          to-transparent
        "
      />
    </motion.section>
  );
};

export default TechnologiesHero;