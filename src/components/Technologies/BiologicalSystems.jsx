// import { motion } from "framer-motion";

// import {
//   ArrowRight,
//   Droplets,
//   Fish,
//   Leaf,
//   Orbit,
//   Recycle,
//   Trees,
//   Waves,
// } from "lucide-react";

// import BioMainImg from "../../assets/images/bio-main.png";
// import WetlandImg from "../../assets/images/bio-wetland.png";
// import MicrobialImg from "../../assets/images/bio-microbial.png";
// import EcoRecoveryImg from "../../assets/images/bio-ecosystem.png";

// const technologies = [
//   {
//     title: "Bioremediation",
//     description:
//       "Advanced microbial ecosystems engineered to naturally degrade pollutants, improve dissolved oxygen and restore ecological balance.",
//     icon: Recycle,
//   },

//   {
//     title: "Floating Wetlands",
//     description:
//       "Nature-based floating ecological systems designed for nutrient absorption, algae suppression and habitat restoration.",
//     icon: Leaf,
//   },

//   {
//     title: "Ecological Recovery",
//     description:
//       "Long-term ecosystem stabilization using biological restoration and integrated environmental engineering.",
//     icon: Trees,
//   },
// ];

// const benefits = [
//   "Natural nutrient absorption",
//   "BOD & COD reduction",
//   "Fish habitat restoration",
//   "Algae suppression",
//   "Water clarity improvement",
//   "Long-term sustainability",
// ];

// const BiologicalSystems = () => {
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
//      id="biological" className="relative overflow-hidden bg-[#060d14] py-32">
//       {/* NOISE GRID */}
//       <div
//         className="
//           absolute inset-0
//           opacity-[0.03]
//           bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
//           bg-[size:120px_120px]
//         "
//       />

//       {/* LARGE ORGANIC GLOW */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute left-[-200px] top-[5%]
//             h-[700px] w-[700px]
//             rounded-full
//             bg-emerald-500/10
//             blur-[180px]
//           "
//         />

//         <div
//           className="
//             absolute right-[-180px] bottom-[-100px]
//             h-[600px] w-[600px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[180px]
//           "
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         {/* HEADER */}
//         <div className="grid gap-16 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
//           {/* LEFT CONTENT */}
//           <div>
//             {/* BADGE */}
//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="
//                 inline-flex items-center gap-3
//                 rounded-full
//                 border border-emerald-400/20
//                 bg-emerald-400/10
//                 px-5 py-2
//                 backdrop-blur-xl
//               "
//             >
//               <Leaf
//                 size={14}
//                 className="text-emerald-300"
//               />

//               <span
//                 className="
//                   text-xs
//                   uppercase
//                   tracking-[0.25em]
//                   text-emerald-200
//                 "
//               >
//                 Biological Restoration Systems
//               </span>
//             </motion.div>

//             {/* TITLE */}
//             <motion.h2
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.1,
//               }}
//               viewport={{ once: true }}
//               className="
//                 mt-8
//                 text-5xl
//                 md:text-7xl
//                 font-black
//                 leading-[0.95]
//                 tracking-[-0.05em]
//                 text-white
//               "
//             >
//               Nature-Based
//               <span
//                 className="
//                   block
//                   bg-gradient-to-r
//                   from-emerald-300
//                   via-cyan-300
//                   to-cyan-400
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Ecological Recovery
//               </span>
//             </motion.h2>

//             {/* DESC */}
//             <motion.p
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.2,
//               }}
//               viewport={{ once: true }}
//               className="
//                 mt-10
//                 max-w-2xl
//                 text-lg
//                 md:text-xl
//                 leading-relaxed
//                 text-slate-300
//               "
//             >
//               Intelligent biological restoration systems
//               engineered to rebuild aquatic ecosystems through
//               microbial activity, floating wetlands, nutrient
//               absorption and long-term environmental recovery.
//             </motion.p>

//             {/* BENEFITS */}
//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.3,
//               }}
//               viewport={{ once: true }}
//               className="
//                 mt-12
//                 grid
//                 gap-4
//                 sm:grid-cols-2
//               "
//             >
//               {benefits.map((item, index) => (
//                 <div
//                   key={index}
//                   className="
//                     flex items-center gap-3
//                     rounded-2xl
//                     border border-white/10
//                     bg-white/5
//                     px-5 py-4
//                     backdrop-blur-xl
//                   "
//                 >
//                   <div className="h-2 w-2 rounded-full bg-emerald-400" />

//                   <span className="text-slate-200">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* RIGHT VISUAL */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             {/* MAIN IMAGE */}
//             <div
//               className="
//                 relative overflow-hidden
//                 rounded-[42px]
//                 border border-white/10
//                 bg-white/5
//                 backdrop-blur-2xl
//               "
//             >
//               <img
//                 src={BioMainImg}
//                 alt="Biological Restoration"
//                 className="
//                   h-[620px] w-full
//                   object-cover
//                 "
//               />

//               {/* OVERLAY */}
//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-t
//                   from-[#060d14]
//                   via-[#060d14]/20
//                   to-transparent
//                 "
//               />

//               {/* FLOATING CARD */}
//               <div
//                 className="
//                   absolute left-6 top-6
//                   rounded-[28px]
//                   border border-white/10
//                   bg-[#081219]/60
//                   px-6 py-5
//                   backdrop-blur-2xl
//                 "
//               >
//                 <div className="flex items-center gap-4">
//                   <div
//                     className="
//                       flex h-14 w-14
//                       items-center justify-center
//                       rounded-2xl
//                       border border-emerald-400/20
//                       bg-emerald-400/10
//                     "
//                   >
//                     <Orbit
//                       size={28}
//                       className="text-emerald-300"
//                     />
//                   </div>

//                   <div>
//                     <p className="text-sm text-slate-400">
//                       Ecological Intelligence
//                     </p>

//                     <h4 className="mt-1 text-lg font-semibold text-white">
//                       Integrated Biological Systems
//                     </h4>
//                   </div>
//                 </div>
//               </div>

//               {/* BOTTOM PANEL */}
//               <div
//                 className="
//                   absolute bottom-0 left-0 right-0
//                   border-t border-white/10
//                   bg-[#081219]/70
//                   p-6
//                   backdrop-blur-2xl
//                 "
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p
//                       className="
//                         text-xs
//                         uppercase
//                         tracking-[0.2em]
//                         text-emerald-200
//                       "
//                     >
//                       Environmental Ecosystem
//                     </p>

//                     <h4
//                       className="
//                         mt-3
//                         text-2xl
//                         font-bold
//                         text-white
//                       "
//                     >
//                       Long-Term Water Recovery
//                     </h4>
//                   </div>

//                   <div
//                     className="
//                       flex h-16 w-16
//                       items-center justify-center
//                       rounded-2xl
//                       border border-white/10
//                       bg-white/5
//                     "
//                   >
//                     <ArrowRight
//                       size={28}
//                       className="text-cyan-300"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* FLOATING IMAGE */}
//             <motion.div
//               animate={{
//                 y: [0, -12, 0],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//               }}
//               className="
//                 absolute
//                 -bottom-10
//                 -left-10
//                 hidden
//                 w-[260px]
//                 overflow-hidden
//                 rounded-[32px]
//                 border border-white/10
//                 bg-white/5
//                 backdrop-blur-2xl
//                 xl:block
//               "
//             >
//               <img
//                 src={MicrobialImg}
//                 alt="Microbial"
//                 className="
//                   h-[180px] w-full
//                   object-cover
//                 "
//               />

//               <div className="p-5">
//                 <div className="flex items-center gap-3">
//                   <Recycle
//                     size={20}
//                     className="text-emerald-300"
//                   />

//                   <p className="font-medium text-white">
//                     Microbial Recovery
//                   </p>
//                 </div>

//                 <p className="mt-3 text-sm leading-relaxed text-slate-400">
//                   Biological pollutant degradation through
//                   engineered microbial ecosystems.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* TECHNOLOGY STRIP */}
//         <div className="mt-32 grid gap-6 lg:grid-cols-3">
//           {technologies.map((item, index) => {
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
//                   delay: index * 0.1,
//                 }}
//                 viewport={{ once: true }}
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[38px]
//                   border border-white/10
//                   bg-white/5
//                   p-8
//                   backdrop-blur-2xl
//                   transition-all duration-500
//                   hover:-translate-y-2
//                   hover:border-emerald-400/20
//                   hover:shadow-[0_0_80px_-20px_rgba(16,185,129,0.25)]
//                 "
//               >
//                 {/* HOVER BG */}
//                 <div
//                   className="
//                     absolute inset-0
//                     opacity-0
//                     transition-all duration-500
//                     group-hover:opacity-100
//                     bg-gradient-to-br
//                     from-emerald-400/10
//                     via-transparent
//                     to-cyan-400/5
//                   "
//                 />

//                 {/* ICON */}
//                 <div
//                   className="
//                     relative z-10
//                     flex h-18 w-18
//                     items-center justify-center
//                     rounded-3xl
//                     border border-white/10
//                     bg-emerald-400/10
//                   "
//                 >
//                   <Icon
//                     size={34}
//                     className="text-emerald-300"
//                   />
//                 </div>

//                 {/* TITLE */}
//                 <h3
//                   className="
//                     relative z-10
//                     mt-8
//                     text-3xl
//                     font-black
//                     leading-tight
//                     text-white
//                   "
//                 >
//                   {item.title}
//                 </h3>

//                 {/* DESC */}
//                 <p
//                   className="
//                     relative z-10
//                     mt-5
//                     leading-relaxed
//                     text-slate-300
//                   "
//                 >
//                   {item.description}
//                 </p>

//                 {/* FOOTER */}
//                 <div
//                   className="
//                     relative z-10
//                     mt-10
//                     flex items-center justify-between
//                   "
//                 >
//                   <div
//                     className="
//                       flex items-center gap-2
//                       text-sm
//                       uppercase
//                       tracking-[0.18em]
//                       text-slate-400
//                     "
//                   >
//                     <div className="h-2 w-2 rounded-full bg-emerald-400" />

//                     Natural Restoration
//                   </div>

//                   <ArrowRight
//                     size={22}
//                     className="
//                       text-cyan-300
//                       transition-transform duration-300
//                       group-hover:translate-x-1
//                     "
//                   />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* FULL WIDTH VISUAL STRIP */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 35,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="
//             relative
//             mt-32
//             overflow-hidden
//             rounded-[42px]
//             border border-white/10
//             bg-white/5
//             backdrop-blur-2xl
//           "
//         >
//           <div className="grid xl:grid-cols-2">
//             {/* IMAGE */}
//             <div className="relative">
//               <img
//                 src={EcoRecoveryImg}
//                 alt="Ecological Recovery"
//                 className="
//                   h-full w-full
//                   object-cover
//                   min-h-[420px]
//                 "
//               />

//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-r
//                   from-transparent
//                   to-[#060d14]
//                 "
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="relative flex items-center p-10 md:p-16">
//               <div>
//                 {/* LABEL */}
//                 <div
//                   className="
//                     inline-flex items-center gap-3
//                     rounded-full
//                     border border-emerald-400/20
//                     bg-emerald-400/10
//                     px-5 py-2
//                     backdrop-blur-xl
//                   "
//                 >
//                   <Fish
//                     size={14}
//                     className="text-emerald-300"
//                   />

//                   <span
//                     className="
//                       text-xs
//                       uppercase
//                       tracking-[0.22em]
//                       text-emerald-200
//                     "
//                   >
//                     Ecosystem Recovery
//                   </span>
//                 </div>

//                 {/* TITLE */}
//                 <h3
//                   className="
//                     mt-8
//                     text-4xl
//                     md:text-6xl
//                     font-black
//                     leading-[0.95]
//                     tracking-[-0.04em]
//                     text-white
//                   "
//                 >
//                   Biological Systems
//                   <span
//                     className="
//                       block
//                       bg-gradient-to-r
//                       from-emerald-300
//                       to-cyan-300
//                       bg-clip-text
//                       text-transparent
//                     "
//                   >
//                     Built For Sustainability
//                   </span>
//                 </h3>

//                 {/* DESC */}
//                 <p
//                   className="
//                     mt-8
//                     max-w-2xl
//                     text-lg
//                     leading-relaxed
//                     text-slate-300
//                   "
//                 >
//                   Our biological restoration systems are
//                   engineered for long-term ecological balance,
//                   enabling natural regeneration of polluted
//                   water ecosystems through integrated nature-
//                   based environmental infrastructure.
//                 </p>

//                 {/* METRICS */}
//                 <div className="mt-10 flex flex-wrap gap-4">
//                   {[
//                     "BOD Reduction",
//                     "DO Recovery",
//                     "Habitat Restoration",
//                     "Algae Control",
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className="
//                         rounded-full
//                         border border-white/10
//                         bg-white/5
//                         px-5 py-3
//                         text-sm
//                         text-slate-200
//                         backdrop-blur-xl
//                       "
//                     >
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default BiologicalSystems;


import { motion } from "framer-motion";

import {
  ArrowRight,
  Fish,
  Leaf,
  Orbit,
  Recycle,
  Trees,
} from "lucide-react";

import BioMainImg from "../../assets/images/bio-main.png";
import MicrobialImg from "../../assets/images/bio-microbial.png";
import EcoRecoveryImg from "../../assets/images/bio-ecosystem.png";

const technologies = [
  {
    title: "Bioremediation",
    description:
      "Advanced microbial ecosystems engineered to naturally degrade pollutants, improve dissolved oxygen and restore ecological balance.",
    icon: Recycle,
  },

  {
    title: "Floating Wetlands",
    description:
      "Nature-based floating ecological systems designed for nutrient absorption, algae suppression and habitat restoration.",
    icon: Leaf,
  },

  {
    title: "Ecological Recovery",
    description:
      "Long-term ecosystem stabilization using biological restoration and integrated environmental engineering.",
    icon: Trees,
  },
];

const benefits = [
  "Natural nutrient absorption",
  "BOD & COD reduction",
  "Fish habitat restoration",
  "Algae suppression",
  "Water clarity improvement",
  "Long-term sustainability",
];

const BiologicalSystems = () => {
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
      id="biological"
      className="
        relative
        overflow-hidden
        bg-[#060d14]
        py-20 md:py-28 xl:py-36
        scroll-mt-24 md:scroll-mt-32
      "
    >
      {/* NOISE GRID */}
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
        {/* EMERALD */}
        <div
          className="
            absolute left-[-200px] top-[5%]
            h-[700px] w-[700px]
            rounded-full
            bg-emerald-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />

        {/* CYAN */}
        <div
          className="
            absolute right-[-180px] bottom-[-100px]
            h-[600px] w-[600px]
            rounded-full
            bg-cyan-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          className="
            grid gap-14 lg:gap-20
            xl:grid-cols-[1.1fr_0.9fr]
            xl:items-center
          "
        >
          {/* LEFT */}
          <div>
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-emerald-400/20
                bg-emerald-400/10
                px-5 py-2
                backdrop-blur-xl
              "
            >
              <Leaf
                size={14}
                className="text-emerald-300"
              />

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.25em]
                  text-emerald-200
                "
              >
                Biological Restoration Systems
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                leading-[0.95]
                tracking-[-0.05em]
                text-white
              "
            >
              Nature-Based

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-emerald-300
                  via-cyan-300
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                Ecological Recovery
              </span>
            </motion.h2>

            {/* DESC */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="
                mt-8 md:mt-10
                max-w-2xl
                text-base
                sm:text-lg
                md:text-xl
                leading-relaxed
                text-slate-300
              "
            >
              Intelligent biological restoration systems
              engineered to rebuild aquatic ecosystems through
              microbial activity, floating wetlands, nutrient
              absorption and long-term environmental recovery.
            </motion.p>

            {/* BENEFITS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              viewport={{ once: true }}
              className="
                mt-10 md:mt-12
                grid gap-4
                sm:grid-cols-2
              "
            >
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-center gap-3
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.05]
                    px-5 py-4
                    backdrop-blur-xl
                  "
                >
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span
                    className="
                      text-sm
                      sm:text-base
                      text-slate-200
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* MAIN IMAGE */}
            <div
              className="
                relative overflow-hidden
                rounded-[28px]
                md:rounded-[36px]
                xl:rounded-[42px]
                border border-white/10
                bg-white/[0.05]
                backdrop-blur-2xl
              "
            >
              <img
                src={BioMainImg}
                alt="Biological Restoration"
                className="
                  h-[520px]
                  sm:h-[620px]
                  w-full
                  object-cover
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#060d14]/95
                  via-[#060d14]/35
                  to-transparent
                "
              />

              {/* FLOATING CARD */}
              <div
                className="
                  absolute left-4 top-4
                  right-4 sm:right-auto
                  rounded-[24px]
                  border border-white/10
                  bg-[#081219]/70
                  px-5 py-4
                  backdrop-blur-2xl
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex h-12 w-12
                      sm:h-14 sm:w-14
                      shrink-0
                      items-center justify-center
                      rounded-2xl
                      border border-emerald-400/20
                      bg-emerald-400/10
                    "
                  >
                    <Orbit
                      size={24}
                      className="text-emerald-300"
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        text-slate-400
                      "
                    >
                      Ecological Intelligence
                    </p>

                    <h4
                      className="
                        mt-1
                        text-sm
                        sm:text-lg
                        font-semibold
                        leading-snug
                        text-white
                      "
                    >
                      Integrated Biological Systems
                    </h4>
                  </div>
                </div>
              </div>

              {/* BOTTOM PANEL */}
              <div
                className="
                  absolute bottom-0 left-0 right-0
                  border-t border-white/10
                  bg-[#081219]/80
                  p-5 sm:p-6
                  backdrop-blur-2xl
                "
              >
                <div
                  className="
                    flex flex-col gap-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-[10px]
                        sm:text-xs
                        uppercase
                        tracking-[0.2em]
                        text-emerald-200
                      "
                    >
                      Environmental Ecosystem
                    </p>

                    <h4
                      className="
                        mt-3
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-white
                      "
                    >
                      Long-Term Water Recovery
                    </h4>
                  </div>

                  <div
                    className="
                      flex h-14 w-14
                      shrink-0
                      items-center justify-center
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.05]
                    "
                  >
                    <ArrowRight
                      size={24}
                      className="text-cyan-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING IMAGE */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                -bottom-8
                -left-8
                hidden
                w-[240px]
                overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-white/[0.05]
                backdrop-blur-2xl
                xl:block
                opacity-80
              "
            >
              <img
                src={MicrobialImg}
                alt="Microbial"
                className="
                  h-[180px] w-full
                  object-cover
                "
              />

              <div className="p-5">
                <div className="flex items-center gap-3">
                  <Recycle
                    size={20}
                    className="text-emerald-300"
                  />

                  <p className="font-medium text-white">
                    Microbial Recovery
                  </p>
                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-slate-400
                  "
                >
                  Biological pollutant degradation through
                  engineered microbial ecosystems.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* TECHNOLOGY STRIP */}
        <div
          className="
            mt-20 md:mt-28 xl:mt-32
            grid gap-5 md:gap-6
            lg:grid-cols-3
          "
        >
          {technologies.map((item, index) => {
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
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[28px]
                  md:rounded-[34px]
                  xl:rounded-[38px]

                  border border-white/10
                  bg-white/[0.06]

                  p-6 md:p-8

                  backdrop-blur-2xl

                  shadow-[0_0_40px_-25px_rgba(16,185,129,0.16)]

                  transition-[transform,border-color,box-shadow]
                  duration-500

                  md:hover:-translate-y-2
                  md:hover:border-emerald-400/20
                  md:hover:shadow-[0_0_80px_-20px_rgba(16,185,129,0.25)]
                "
              >
                {/* HOVER BG */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    transition-opacity duration-500
                    md:group-hover:opacity-100
                    bg-gradient-to-br
                    from-emerald-400/10
                    via-transparent
                    to-cyan-400/5
                  "
                />

                {/* ICON */}
                <div
                  className="
                    relative z-10
                    flex h-[60px] w-[60px]
                    sm:h-[72px] sm:w-[72px]
                    items-center justify-center
                    rounded-3xl
                    border border-white/10
                    bg-emerald-400/10
                  "
                >
                  <Icon
                    size={32}
                    className="text-emerald-300"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    relative z-10
                    mt-6 md:mt-8
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
                    relative z-10
                    mt-5
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
                    relative z-10
                    mt-8 md:mt-10
                    flex items-center justify-between
                  "
                >
                  <div
                    className="
                      flex items-center gap-2
                      text-[11px]
                      sm:text-sm
                      uppercase
                      tracking-[0.18em]
                      text-slate-400
                    "
                  >
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />

                    Natural Restoration
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
              </motion.div>
            );
          })}
        </div>

        {/* FULL WIDTH VISUAL STRIP */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            mt-20 md:mt-28 xl:mt-32
            overflow-hidden

            rounded-[28px]
            md:rounded-[36px]
            xl:rounded-[42px]

            border border-white/10
            bg-white/[0.05]
            backdrop-blur-2xl
          "
        >
          <div className="grid xl:grid-cols-2">
            {/* IMAGE */}
            <div className="relative">
              <img
                src={EcoRecoveryImg}
                alt="Ecological Recovery"
                className="
                  min-h-[320px]
                  sm:min-h-[420px]
                  h-full w-full
                  object-cover
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#060d14]/90
                  via-transparent
                  to-transparent

                  xl:bg-gradient-to-r
                  xl:from-transparent
                  xl:to-[#060d14]
                "
              />
            </div>

            {/* CONTENT */}
            <div
              className="
                relative flex items-center
                p-6 sm:p-10 md:p-16
              "
            >
              <div>
                {/* LABEL */}
                <div
                  className="
                    inline-flex items-center gap-3
                    rounded-full
                    border border-emerald-400/20
                    bg-emerald-400/10
                    px-5 py-2
                    backdrop-blur-xl
                  "
                >
                  <Fish
                    size={14}
                    className="text-emerald-300"
                  />

                  <span
                    className="
                      text-[10px]
                      sm:text-xs
                      uppercase
                      tracking-[0.22em]
                      text-emerald-200
                    "
                  >
                    Ecosystem Recovery
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-6 md:mt-8
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    xl:text-6xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  Biological Systems

                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-emerald-300
                      to-cyan-300
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Built For Sustainability
                  </span>
                </h3>

                {/* DESC */}
                <p
                  className="
                    mt-6 md:mt-8
                    max-w-2xl
                    text-base
                    sm:text-lg
                    leading-relaxed
                    text-slate-300
                  "
                >
                  Our biological restoration systems are
                  engineered for long-term ecological balance,
                  enabling natural regeneration of polluted
                  water ecosystems through integrated nature-
                  based environmental infrastructure.
                </p>

                {/* METRICS */}
                <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
                  {[
                    "BOD Reduction",
                    "DO Recovery",
                    "Habitat Restoration",
                    "Algae Control",
                  ].map((item, index) => (
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
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BiologicalSystems;