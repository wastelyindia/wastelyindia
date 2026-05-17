// // import { motion } from "framer-motion";

// // import {
// //   Activity,
// //   BrainCircuit,
// //   Check,
// //   Droplets,
// //   Leaf,
// //   Orbit,
// //   Radar,
// //   Recycle,
// //   Waves,
// // } from "lucide-react";

// // import HybridMain from "../../assets/images/hybrid-main.png";

// // const comparisonData = [
// //   {
// //     technology: "Nano Bubble",
// //     function: "DO Enhancement",
// //     application: "Lakes, Reservoirs, STP",
// //     efficiency: "High Oxygen Transfer",
// //     category: "Mechanical",
// //     icon: Waves,
// //   },

// //   {
// //     technology: "Floating Wetlands",
// //     function: "Nutrient Removal",
// //     application: "Urban Lakes, Ponds",
// //     efficiency: "Natural Ecological Recovery",
// //     category: "Biological",
// //     icon: Leaf,
// //   },

// //   {
// //     technology: "Bioremediation",
// //     function: "Pollutant Degradation",
// //     application: "Eutrophic Water Bodies",
// //     efficiency: "Microbial Recovery",
// //     category: "Biological",
// //     icon: Recycle,
// //   },

// //   {
// //     technology: "MPC Smart Buoy",
// //     function: "Real-Time Monitoring",
// //     application: "Large Water Bodies",
// //     efficiency: "24/7 Analytics",
// //     category: "Smart Monitoring",
// //     icon: Radar,
// //   },

// //   {
// //     technology: "LTSD Dryer",
// //     function: "Sludge Reduction",
// //     application: "Industrial WWTP",
// //     efficiency: "Energy Efficient Drying",
// //     category: "Mechanical",
// //     icon: Activity,
// //   },

// //   {
// //     technology: "Hybrid Ecosystems",
// //     function: "Integrated Restoration",
// //     application: "Large Scale Recovery",
// //     efficiency: "Multi-Tech Optimization",
// //     category: "Integrated Systems",
// //     icon: Orbit,
// //   },
// // ];

// // const categories = [
// //   {
// //     title: "Biological",
// //     color:
// //       "from-emerald-400/20 to-emerald-500/5",
// //   },

// //   {
// //     title: "Mechanical",
// //     color:
// //       "from-cyan-400/20 to-blue-500/5",
// //   },

// //   {
// //     title: "Smart Monitoring",
// //     color:
// //       "from-sky-400/20 to-cyan-500/5",
// //   },

// //   {
// //     title: "Integrated Systems",
// //     color:
// //       "from-cyan-400/20 to-emerald-400/10",
// //   },
// // ];

// // const TechnologyComparison = () => {
// //   return (
// //     <section className="relative overflow-hidden bg-[#050b11] py-32">
// //       {/* GRID */}
// //       <div
// //         className="
// //           absolute inset-0
// //           opacity-[0.03]
// //           bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
// //           bg-[size:120px_120px]
// //         "
// //       />

// //       {/* GLOW */}
// //       <div className="pointer-events-none absolute inset-0 overflow-hidden">
// //         <div
// //           className="
// //             absolute left-[5%] top-[0%]
// //             h-[700px] w-[700px]
// //             rounded-full
// //             bg-cyan-500/10
// //             blur-[180px]
// //           "
// //         />

// //         <div
// //           className="
// //             absolute right-[0%] bottom-[0%]
// //             h-[650px] w-[650px]
// //             rounded-full
// //             bg-emerald-500/10
// //             blur-[180px]
// //           "
// //         />
// //       </div>

// //       <div className="relative z-10 mx-auto max-w-7xl px-6">
// //         {/* HEADER */}
// //         <div className="grid gap-16 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
// //           {/* LEFT */}
// //           <div>
// //             {/* BADGE */}
// //             <motion.div
// //               initial={{
// //                 opacity: 0,
// //                 y: 25,
// //               }}
// //               whileInView={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               transition={{ duration: 0.6 }}
// //               viewport={{ once: true }}
// //               className="
// //                 inline-flex items-center gap-3
// //                 rounded-full
// //                 border border-cyan-400/20
// //                 bg-cyan-400/10
// //                 px-5 py-2
// //                 backdrop-blur-xl
// //               "
// //             >
// //               <BrainCircuit
// //                 size={14}
// //                 className="text-cyan-300"
// //               />

// //               <span
// //                 className="
// //                   text-xs
// //                   uppercase
// //                   tracking-[0.24em]
// //                   text-cyan-200
// //                 "
// //               >
// //                 Technology Classification Matrix
// //               </span>
// //             </motion.div>

// //             {/* TITLE */}
// //             <motion.h2
// //               initial={{
// //                 opacity: 0,
// //                 y: 25,
// //               }}
// //               whileInView={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               transition={{
// //                 duration: 0.7,
// //                 delay: 0.1,
// //               }}
// //               viewport={{ once: true }}
// //               className="
// //                 mt-8
// //                 text-5xl
// //                 md:text-7xl
// //                 font-black
// //                 leading-[0.92]
// //                 tracking-[-0.05em]
// //                 text-white
// //               "
// //             >
// //               Integrated
// //               <span
// //                 className="
// //                   block
// //                   bg-gradient-to-r
// //                   from-cyan-300
// //                   via-cyan-400
// //                   to-emerald-400
// //                   bg-clip-text
// //                   text-transparent
// //                 "
// //               >
// //                 Technology Comparison
// //               </span>
// //             </motion.h2>

// //             {/* DESC */}
// //             <motion.p
// //               initial={{
// //                 opacity: 0,
// //                 y: 25,
// //               }}
// //               whileInView={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               transition={{
// //                 duration: 0.7,
// //                 delay: 0.2,
// //               }}
// //               viewport={{ once: true }}
// //               className="
// //                 mt-10
// //                 max-w-2xl
// //                 text-lg
// //                 md:text-xl
// //                 leading-relaxed
// //                 text-slate-300
// //               "
// //             >
// //               Intelligent classification of biological,
// //               mechanical and smart environmental technologies
// //               engineered for integrated ecological restoration
// //               and infrastructure optimization.
// //             </motion.p>

// //             {/* CATEGORY TAGS */}
// //             <div className="mt-12 flex flex-wrap gap-4">
// //               {categories.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className={`
// //                     rounded-full
// //                     border border-white/10
// //                     bg-gradient-to-r
// //                     ${item.color}
// //                     px-5 py-3
// //                     backdrop-blur-xl
// //                   `}
// //                 >
// //                   <span className="text-sm text-white">
// //                     {item.title}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* RIGHT VISUAL */}
// //           <motion.div
// //             initial={{
// //               opacity: 0,
// //               scale: 0.95,
// //             }}
// //             whileInView={{
// //               opacity: 1,
// //               scale: 1,
// //             }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="
// //               relative
// //               overflow-hidden
// //               rounded-[42px]
// //               border border-white/10
// //               bg-white/5
// //               backdrop-blur-2xl
// //             "
// //           >
// //             {/* IMAGE */}
// //             <img
// //               src={HybridMain}
// //               alt="Integrated Systems"
// //               className="
// //                 h-[620px] w-full
// //                 object-cover
// //               "
// //             />

// //             {/* OVERLAY */}
// //             <div
// //               className="
// //                 absolute inset-0
// //                 bg-gradient-to-t
// //                 from-[#050b11]
// //                 via-[#050b11]/20
// //                 to-transparent
// //               "
// //             />

// //             {/* FLOATING INFO */}
// //             <div
// //               className="
// //                 absolute left-6 top-6
// //                 rounded-[28px]
// //                 border border-white/10
// //                 bg-[#081219]/60
// //                 px-6 py-5
// //                 backdrop-blur-2xl
// //               "
// //             >
// //               <div className="flex items-center gap-4">
// //                 <div
// //                   className="
// //                     flex h-14 w-14
// //                     items-center justify-center
// //                     rounded-2xl
// //                     border border-cyan-400/20
// //                     bg-cyan-400/10
// //                   "
// //                 >
// //                   <Orbit
// //                     size={28}
// //                     className="text-cyan-300"
// //                   />
// //                 </div>

// //                 <div>
// //                   <p className="text-sm text-slate-400">
// //                     Integrated Ecosystems
// //                   </p>

// //                   <h4
// //                     className="
// //                       mt-1
// //                       text-lg
// //                       font-semibold
// //                       text-white
// //                     "
// //                   >
// //                     Multi-Technology Recovery
// //                   </h4>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* BOTTOM PANEL */}
// //             <div
// //               className="
// //                 absolute bottom-0 left-0 right-0
// //                 border-t border-white/10
// //                 bg-[#081219]/70
// //                 p-6
// //                 backdrop-blur-2xl
// //               "
// //             >
// //               <div className="grid gap-4 md:grid-cols-3">
// //                 {[
// //                   "Biological",
// //                   "Mechanical",
// //                   "Smart Monitoring",
// //                 ].map((item, index) => (
// //                   <div
// //                     key={index}
// //                     className="
// //                       rounded-2xl
// //                       border border-white/10
// //                       bg-white/5
// //                       px-5 py-4
// //                       text-center
// //                     "
// //                   >
// //                     <p
// //                       className="
// //                         text-xs
// //                         uppercase
// //                         tracking-[0.18em]
// //                         text-cyan-200
// //                       "
// //                     >
// //                       {item}
// //                     </p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>

// //         {/* COMPARISON MATRIX */}
// //         {/* <div className="mt-28"> */}
// //         <div className="relative overflow-hidden">

// //           {/* EDGE FADE */}
// //           <div
// //             className="
// //               pointer-events-none
// //               absolute left-0 top-0 z-20
// //               h-full w-24
// //               bg-gradient-to-r
// //               from-[#050b11]
// //               to-transparent
// //             "
// //           />
// //           <div
// //             className="
// //               pointer-events-none
// //               absolute right-0 top-0 z-20
// //               h-full w-24
// //               bg-gradient-to-l
// //               from-[#050b11]
// //               to-transparent
// //             "
// //           />
// //           <motion.div
// //             animate={{
// //               x: ["0%", "-50%"],
// //             }}
// //             transition={{
// //               duration: 30,
// //               repeat: Infinity,
// //               ease: "linear",
// //             }}
// //             className="
// //               flex gap-6
// //               w-max
// //               pb-4
// //             "
// //           >
// //             {[...comparisonData, ...comparisonData].map((item, index) => {
// //               const Icon = item.icon;

// //               return (
// //                 <motion.div
// //                   key={index}
// //                   initial={{
// //                     opacity: 0,
// //                     y: 30,
// //                   }}
// //                   whileInView={{
// //                     opacity: 1,
// //                     y: 0,
// //                   }}
// //                   transition={{
// //                     duration: 0.7,
// //                     delay: index * 0.06,
// //                   }}
// //                   viewport={{ once: true }}
// //                   className="
// //                     group
// //                     relative
// //                     overflow-hidden
// //                     rounded-[36px]
// //                     border border-white/10
// //                     bg-white/5
// //                     backdrop-blur-2xl
// //                     transition-all duration-500
// //                     hover:border-cyan-400/20
// //                     hover:-translate-y-1
// //                     snap-center
// // min-w-[420px]
// // max-w-full
// //                   "
// //                 >
// //                   {/* BG */}
// //                   <div
// //                     className="
// //                       absolute inset-0
// //                       opacity-0
// //                       transition-all duration-500
// //                       group-hover:opacity-100
// //                       bg-gradient-to-r
// //                       from-cyan-400/10
// //                       via-transparent
// //                       to-emerald-400/5
// //                     "
// //                   />

// //                   <div
// //                     className="
// //                       relative z-10
// //                       grid gap-8
// //                       px-8 py-8
// //                       xl:grid-cols-[1.2fr_1fr_1fr_1fr_0.7fr]
// //                       xl:items-center
// //                     "
// //                   >
// //                     {/* TECH */}
// //                     <div className="flex items-center gap-5">
// //                       <div
// //                         className="
// //                           flex h-18 w-18
// //                           items-center justify-center
// //                           rounded-3xl
// //                           border border-white/10
// //                           bg-[#081219]/50
// //                         "
// //                       >
// //                         <Icon
// //                           size={34}
// //                           className="text-cyan-300"
// //                         />
// //                       </div>

// //                       <div>
// //                         <p
// //                           className="
// //                             text-xs
// //                             uppercase
// //                             tracking-[0.18em]
// //                             text-cyan-200
// //                           "
// //                         >
// //                           Technology
// //                         </p>

// //                         <h3
// //                           className="
// //                             mt-3
// //                             text-2xl
// //                             font-black
// //                             text-white
// //                           "
// //                         >
// //                           {item.technology}
// //                         </h3>
// //                       </div>
// //                     </div>

// //                     {/* FUNCTION */}
// //                     <div>
// //                       <p
// //                         className="
// //                           text-xs
// //                           uppercase
// //                           tracking-[0.18em]
// //                           text-slate-500
// //                         "
// //                       >
// //                         Primary Function
// //                       </p>

// //                       <h4
// //                         className="
// //                           mt-3
// //                           text-lg
// //                           font-semibold
// //                           text-white
// //                         "
// //                       >
// //                         {item.function}
// //                       </h4>
// //                     </div>

// //                     {/* APPLICATION */}
// //                     <div>
// //                       <p
// //                         className="
// //                           text-xs
// //                           uppercase
// //                           tracking-[0.18em]
// //                           text-slate-500
// //                         "
// //                       >
// //                         Applications
// //                       </p>

// //                       <h4
// //                         className="
// //                           mt-3
// //                           text-lg
// //                           font-semibold
// //                           text-white
// //                         "
// //                       >
// //                         {item.application}
// //                       </h4>
// //                     </div>

// //                     {/* EFFICIENCY */}
// //                     <div>
// //                       <p
// //                         className="
// //                           text-xs
// //                           uppercase
// //                           tracking-[0.18em]
// //                           text-slate-500
// //                         "
// //                       >
// //                         Optimization
// //                       </p>

// //                       <div className="mt-3 flex items-center gap-3">
// //                         <Check
// //                           size={18}
// //                           className="text-emerald-300"
// //                         />

// //                         <span className="text-white">
// //                           {item.efficiency}
// //                         </span>
// //                       </div>
// //                     </div>

// //                     {/* CATEGORY */}
// //                     <div>
// //                       <div
// //                         className="
// //                           inline-flex items-center gap-3
// //                           rounded-full
// //                           border border-cyan-400/20
// //                           bg-cyan-400/10
// //                           px-5 py-3
// //                         "
// //                       >
// //                         <div className="h-2 w-2 rounded-full bg-cyan-400" />

// //                         <span
// //                           className="
// //                             text-xs
// //                             uppercase
// //                             tracking-[0.18em]
// //                             text-cyan-200
// //                           "
// //                         >
// //                           {item.category}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               );
// //             })}
// //           </motion.div>
// //         </div>

// //         {/* BOTTOM INFO STRIP */}
// //         <motion.div
// //           initial={{
// //             opacity: 0,
// //             y: 35,
// //           }}
// //           whileInView={{
// //             opacity: 1,
// //             y: 0,
// //           }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //           className="
// //             relative
// //             mt-24
// //             overflow-hidden
// //             rounded-[42px]
// //             border border-white/10
// //             bg-white/5
// //             backdrop-blur-2xl
// //             p-10 md:p-14
// //           "
// //         >
// //           {/* BG */}
// //           <div
// //             className="
// //               absolute inset-0
// //               bg-gradient-to-r
// //               from-cyan-400/10
// //               via-transparent
// //               to-emerald-400/10
// //             "
// //           />

// //           <div
// //             className="
// //               relative z-10
// //               grid gap-10
// //               xl:grid-cols-[1.1fr_0.9fr]
// //               xl:items-center
// //             "
// //           >
// //             {/* LEFT */}
// //             <div>
// //               <h3
// //                 className="
// //                   text-4xl
// //                   md:text-6xl
// //                   font-black
// //                   leading-[0.95]
// //                   tracking-[-0.04em]
// //                   text-white
// //                 "
// //               >
// //                 Not Individual
// //                 <span
// //                   className="
// //                     block
// //                     bg-gradient-to-r
// //                     from-cyan-300
// //                     to-emerald-300
// //                     bg-clip-text
// //                     text-transparent
// //                   "
// //                 >
// //                   Technologies
// //                 </span>
// //               </h3>

// //               <p
// //                 className="
// //                   mt-8
// //                   max-w-2xl
// //                   text-lg
// //                   leading-relaxed
// //                   text-slate-300
// //                 "
// //               >
// //                 We engineer integrated environmental ecosystems
// //                 combining biological recovery, oxygenation,
// //                 monitoring and intelligent infrastructure into
// //                 unified restoration systems.
// //               </p>
// //             </div>

// //             {/* RIGHT */}
// //             <div className="grid gap-5 sm:grid-cols-2">
// //               {[
// //                 "Integrated Ecosystems",
// //                 "AI Environmental Intelligence",
// //                 "Hybrid Recovery Systems",
// //                 "Long-Term Sustainability",
// //               ].map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="
// //                     rounded-[28px]
// //                     border border-white/10
// //                     bg-[#081219]/50
// //                     px-6 py-5
// //                     backdrop-blur-2xl
// //                   "
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <Droplets
// //                       size={18}
// //                       className="text-cyan-300"
// //                     />

// //                     <p className="text-white">
// //                       {item}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TechnologyComparison;








// import { motion } from "framer-motion";

// import {
//   Activity,
//   BrainCircuit,
//   Check,
//   Droplets,
//   Leaf,
//   Orbit,
//   Radar,
//   Recycle,
//   Waves,
// } from "lucide-react";

// import HybridMain from "../../assets/images/hybrid-main.png";

// const comparisonData = [
//   {
//     technology: "Nano Bubble",
//     function: "DO Enhancement",
//     application: "Lakes, Reservoirs, STP",
//     efficiency: "High Oxygen Transfer",
//     category: "Mechanical",
//     icon: Waves,
//   },

//   {
//     technology: "Floating Wetlands",
//     function: "Nutrient Removal",
//     application: "Urban Lakes, Ponds",
//     efficiency: "Natural Ecological Recovery",
//     category: "Biological",
//     icon: Leaf,
//   },

//   {
//     technology: "Bioremediation",
//     function: "Pollutant Degradation",
//     application: "Eutrophic Water Bodies",
//     efficiency: "Microbial Recovery",
//     category: "Biological",
//     icon: Recycle,
//   },

//   {
//     technology: "MPC Smart Buoy",
//     function: "Real-Time Monitoring",
//     application: "Large Water Bodies",
//     efficiency: "24/7 Analytics",
//     category: "Smart Monitoring",
//     icon: Radar,
//   },

//   {
//     technology: "LTSD Dryer",
//     function: "Sludge Reduction",
//     application: "Industrial WWTP",
//     efficiency: "Energy Efficient Drying",
//     category: "Mechanical",
//     icon: Activity,
//   },

//   {
//     technology: "Hybrid Ecosystems",
//     function: "Integrated Restoration",
//     application: "Large Scale Recovery",
//     efficiency: "Multi-Tech Optimization",
//     category: "Integrated Systems",
//     icon: Orbit,
//   },
// ];

// const categories = [
//   {
//     title: "Biological",
//     color:
//       "from-emerald-400/20 to-emerald-500/5",
//   },

//   {
//     title: "Mechanical",
//     color:
//       "from-cyan-400/20 to-blue-500/5",
//   },

//   {
//     title: "Smart Monitoring",
//     color:
//       "from-sky-400/20 to-cyan-500/5",
//   },

//   {
//     title: "Integrated Systems",
//     color:
//       "from-cyan-400/20 to-emerald-400/10",
//   },
// ];

// const TechnologyComparison = () => {
//   return (
//     <motion.section
//     initial={{
//       opacity: 0,
//       y: 60,
//     }}
//     whileInView={{
//       opacity: 1,
//       y: 0,
//     }}
//     transition={{
//       duration: 0.8,
//     }}
//     viewport={{
//       once: true,
//       amount: 0.2,
//     }} 
//     className="relative overflow-hidden bg-[#050b11] py-32">
//       {/* GRID */}
//       <div
//         className="
//           absolute inset-0
//           opacity-[0.03]
//           bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
//           bg-[size:120px_120px]
//         "
//       />

//       {/* GLOW */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute left-[5%] top-[0%]
//             h-[700px] w-[700px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[180px]
//           "
//         />

//         <div
//           className="
//             absolute right-[0%] bottom-[0%]
//             h-[650px] w-[650px]
//             rounded-full
//             bg-emerald-500/10
//             blur-[180px]
//           "
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         {/* HEADER */}
//         <div className="grid gap-16 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
//           {/* LEFT */}
//           <div>
//             {/* BADGE */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="
//                 inline-flex items-center gap-3
//                 rounded-full
//                 border border-cyan-400/20
//                 bg-cyan-400/10
//                 px-5 py-2
//                 backdrop-blur-xl
//               "
//             >
//               <BrainCircuit
//                 size={14}
//                 className="text-cyan-300"
//               />

//               <span
//                 className="
//                   text-xs
//                   uppercase
//                   tracking-[0.24em]
//                   text-cyan-200
//                 "
//               >
//                 Technology Classification Matrix
//               </span>
//             </motion.div>

//             {/* TITLE */}
//             <motion.h2
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
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
//                 leading-[0.92]
//                 tracking-[-0.05em]
//                 text-white
//               "
//             >
//               Integrated
//               <span
//                 className="
//                   block
//                   bg-gradient-to-r
//                   from-cyan-300
//                   via-cyan-400
//                   to-emerald-400
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Technology Comparison
//               </span>
//             </motion.h2>

//             {/* DESC */}
//             <motion.p
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
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
//               Intelligent classification of biological,
//               mechanical and smart environmental technologies
//               engineered for integrated ecological restoration
//               and infrastructure optimization.
//             </motion.p>

//             {/* CATEGORY TAGS */}
//             <div className="mt-12 flex flex-wrap gap-4">
//               {categories.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`
//                     rounded-full
//                     border border-white/10
//                     bg-gradient-to-r
//                     ${item.color}
//                     px-5 py-3
//                     backdrop-blur-xl
//                   `}
//                 >
//                   <span className="text-sm text-white">
//                     {item.title}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT VISUAL */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.95,
//             }}
//             whileInView={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="
//               relative
//               overflow-hidden
//               rounded-[42px]
//               border border-white/10
//               bg-white/5
//               backdrop-blur-2xl
//             "
//           >
//             {/* IMAGE */}
//             <img
//               src={HybridMain}
//               alt="Integrated Systems"
//               className="
//                 h-[620px] w-full
//                 object-cover
//               "
//             />

//             {/* OVERLAY */}
//             <div
//               className="
//                 absolute inset-0
//                 bg-gradient-to-t
//                 from-[#050b11]
//                 via-[#050b11]/20
//                 to-transparent
//               "
//             />

//             {/* FLOATING INFO */}
//             <div
//               className="
//                 absolute left-6 top-6
//                 rounded-[28px]
//                 border border-white/10
//                 bg-[#081219]/60
//                 px-6 py-5
//                 backdrop-blur-2xl
//               "
//             >
//               <div className="flex items-center gap-4">
//                 <div
//                   className="
//                     flex h-14 w-14
//                     items-center justify-center
//                     rounded-2xl
//                     border border-cyan-400/20
//                     bg-cyan-400/10
//                   "
//                 >
//                   <Orbit
//                     size={28}
//                     className="text-cyan-300"
//                   />
//                 </div>

//                 <div>
//                   <p className="text-sm text-slate-400">
//                     Integrated Ecosystems
//                   </p>

//                   <h4
//                     className="
//                       mt-1
//                       text-lg
//                       font-semibold
//                       text-white
//                     "
//                   >
//                     Multi-Technology Recovery
//                   </h4>
//                 </div>
//               </div>
//             </div>

//             {/* BOTTOM PANEL */}
//             <div
//               className="
//                 absolute bottom-0 left-0 right-0
//                 border-t border-white/10
//                 bg-[#081219]/70
//                 p-6
//                 backdrop-blur-2xl
//               "
//             >
//               <div className="grid gap-4 md:grid-cols-3">
//                 {[
//                   "Biological",
//                   "Mechanical",
//                   "Smart Monitoring",
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="
//                       rounded-2xl
//                       border border-white/10
//                       bg-white/5
//                       px-5 py-4
//                       text-center
//                     "
//                   >
//                     <p
//                       className="
//                         text-xs
//                         uppercase
//                         tracking-[0.18em]
//                         text-cyan-200
//                       "
//                     >
//                       {item}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* COMPARISON MATRIX */}
//         <div className="mt-28">
//           <div 
//           className="space-y-6"
//           // className="
//           //     flex gap-6
//           //     overflow-x-auto
//           //     snap-x snap-mandatory
//           //     pb-4
//           //     scrollbar-hide
//           //   "
//           >
//             {comparisonData.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{
//                     opacity: 0,
//                     y: 30,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 0.7,
//                     delay: index * 0.06,
//                   }}
//                   viewport={{ once: true }}
//                   className="
//                     group
//                     relative
//                     overflow-hidden
//                     rounded-[36px]
//                     border border-white/10
//                     bg-white/5
//                     backdrop-blur-2xl
//                     transition-all duration-500
//                     hover:border-cyan-400/20
//                     hover:-translate-y-1
//                   "
//                 >
//                   {/* BG */}
//                   <div
//                     className="
//                       absolute inset-0
//                       opacity-0
//                       transition-all duration-500
//                       group-hover:opacity-100
//                       bg-gradient-to-r
//                       from-cyan-400/10
//                       via-transparent
//                       to-emerald-400/5
//                     "
//                   />

//                   <div
//                     className="
//                       relative z-10
//                       grid gap-8
//                       px-8 py-8
//                       xl:grid-cols-[1.2fr_1fr_1fr_1fr_0.7fr]
//                       xl:items-center
//                     "
//                   >
//                     {/* TECH */}
//                     <div className="flex items-center gap-5">
//                       <div
//                         className="
//                           flex h-18 w-18
//                           items-center justify-center
//                           rounded-3xl
//                           border border-white/10
//                           bg-[#081219]/50
//                         "
//                       >
//                         <Icon
//                           size={34}
//                           className="text-cyan-300"
//                         />
//                       </div>

//                       <div>
//                         <p
//                           className="
//                             text-xs
//                             uppercase
//                             tracking-[0.18em]
//                             text-cyan-200
//                           "
//                         >
//                           Technology
//                         </p>

//                         <h3
//                           className="
//                             mt-3
//                             text-2xl
//                             font-black
//                             text-white
//                           "
//                         >
//                           {item.technology}
//                         </h3>
//                       </div>
//                     </div>

//                     {/* FUNCTION */}
//                     <div>
//                       <p
//                         className="
//                           text-xs
//                           uppercase
//                           tracking-[0.18em]
//                           text-slate-500
//                         "
//                       >
//                         Primary Function
//                       </p>

//                       <h4
//                         className="
//                           mt-3
//                           text-lg
//                           font-semibold
//                           text-white
//                         "
//                       >
//                         {item.function}
//                       </h4>
//                     </div>

//                     {/* APPLICATION */}
//                     <div>
//                       <p
//                         className="
//                           text-xs
//                           uppercase
//                           tracking-[0.18em]
//                           text-slate-500
//                         "
//                       >
//                         Applications
//                       </p>

//                       <h4
//                         className="
//                           mt-3
//                           text-lg
//                           font-semibold
//                           text-white
//                         "
//                       >
//                         {item.application}
//                       </h4>
//                     </div>

//                     {/* EFFICIENCY */}
//                     <div>
//                       <p
//                         className="
//                           text-xs
//                           uppercase
//                           tracking-[0.18em]
//                           text-slate-500
//                         "
//                       >
//                         Optimization
//                       </p>

//                       <div className="mt-3 flex items-center gap-3">
//                         <Check
//                           size={18}
//                           className="text-emerald-300"
//                         />

//                         <span className="text-white">
//                           {item.efficiency}
//                         </span>
//                       </div>
//                     </div>

//                     {/* CATEGORY */}
//                     <div>
//                       <div
//                         className="
//                           inline-flex items-center gap-3
//                           rounded-full
//                           border border-cyan-400/20
//                           bg-cyan-400/10
//                           px-5 py-3
//                         "
//                       >
//                         <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                         <span
//                           className="
//                             text-xs
//                             uppercase
//                             tracking-[0.18em]
//                             text-cyan-200
//                           "
//                         >
//                           {item.category}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* BOTTOM INFO STRIP */}
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
//             mt-24
//             overflow-hidden
//             rounded-[42px]
//             border border-white/10
//             bg-white/5
//             backdrop-blur-2xl
//             p-10 md:p-14
//           "
//         >
//           {/* BG */}
//           <div
//             className="
//               absolute inset-0
//               bg-gradient-to-r
//               from-cyan-400/10
//               via-transparent
//               to-emerald-400/10
//             "
//           />

//           <div
//             className="
//               relative z-10
//               grid gap-10
//               xl:grid-cols-[1.1fr_0.9fr]
//               xl:items-center
//             "
//           >
//             {/* LEFT */}
//             <div>
//               <h3
//                 className="
//                   text-4xl
//                   md:text-6xl
//                   font-black
//                   leading-[0.95]
//                   tracking-[-0.04em]
//                   text-white
//                 "
//               >
//                 Not Individual
//                 <span
//                   className="
//                     block
//                     bg-gradient-to-r
//                     from-cyan-300
//                     to-emerald-300
//                     bg-clip-text
//                     text-transparent
//                   "
//                 >
//                   Technologies
//                 </span>
//               </h3>

//               <p
//                 className="
//                   mt-8
//                   max-w-2xl
//                   text-lg
//                   leading-relaxed
//                   text-slate-300
//                 "
//               >
//                 We engineer integrated environmental ecosystems
//                 combining biological recovery, oxygenation,
//                 monitoring and intelligent infrastructure into
//                 unified restoration systems.
//               </p>
//             </div>

//             {/* RIGHT */}
//             <div className="grid gap-5 sm:grid-cols-2">
//               {[
//                 "Integrated Ecosystems",
//                 "AI Environmental Intelligence",
//                 "Hybrid Recovery Systems",
//                 "Long-Term Sustainability",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="
//                     rounded-[28px]
//                     border border-white/10
//                     bg-[#081219]/50
//                     px-6 py-5
//                     backdrop-blur-2xl
//                   "
//                 >
//                   <div className="flex items-center gap-3">
//                     <Droplets
//                       size={18}
//                       className="text-cyan-300"
//                     />

//                     <p className="text-white">
//                       {item}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default TechnologyComparison;



import { motion } from "framer-motion";

import {
  Activity,
  BrainCircuit,
  Check,
  Droplets,
  Leaf,
  Orbit,
  Radar,
  Recycle,
  Waves,
} from "lucide-react";

import HybridMain from "../../assets/images/hybrid-main.png";

const comparisonData = [
  {
    technology: "Nano Bubble",
    function: "DO Enhancement",
    application: "Lakes, Reservoirs, STP",
    efficiency: "High Oxygen Transfer",
    category: "Mechanical",
    icon: Waves,
  },

  {
    technology: "Floating Wetlands",
    function: "Nutrient Removal",
    application: "Urban Lakes, Ponds",
    efficiency: "Natural Ecological Recovery",
    category: "Biological",
    icon: Leaf,
  },

  {
    technology: "Bioremediation",
    function: "Pollutant Degradation",
    application: "Eutrophic Water Bodies",
    efficiency: "Microbial Recovery",
    category: "Biological",
    icon: Recycle,
  },

  {
    technology: "MPC Smart Buoy",
    function: "Real-Time Monitoring",
    application: "Large Water Bodies",
    efficiency: "24/7 Analytics",
    category: "Smart Monitoring",
    icon: Radar,
  },

  {
    technology: "LTSD Dryer",
    function: "Sludge Reduction",
    application: "Industrial WWTP",
    efficiency: "Energy Efficient Drying",
    category: "Mechanical",
    icon: Activity,
  },

  {
    technology: "Hybrid Ecosystems",
    function: "Integrated Restoration",
    application: "Large Scale Recovery",
    efficiency: "Multi-Tech Optimization",
    category: "Integrated Systems",
    icon: Orbit,
  },
];

const categories = [
  {
    title: "Biological",
    color:
      "from-emerald-400/20 to-emerald-500/5",
  },

  {
    title: "Mechanical",
    color:
      "from-cyan-400/20 to-blue-500/5",
  },

  {
    title: "Smart Monitoring",
    color:
      "from-sky-400/20 to-cyan-500/5",
  },

  {
    title: "Integrated Systems",
    color:
      "from-cyan-400/20 to-emerald-400/10",
  },
];

const TechnologyComparison = () => {
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

      {/* GLOW */}
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
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          className="
            grid gap-12 md:gap-16
            xl:grid-cols-[0.9fr_1.1fr]
            xl:items-center
          "
        >
          {/* LEFT */}
          <div>
            {/* BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
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
              <BrainCircuit
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
                Technology Classification Matrix
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
                Technology Comparison
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
                max-w-2xl

                text-base
                sm:text-lg
                md:text-xl

                leading-relaxed
                text-slate-300
              "
            >
              Intelligent classification of biological,
              mechanical and smart environmental technologies
              engineered for integrated ecological restoration
              and infrastructure optimization.
            </motion.p>

            {/* TAGS */}
            <div
              className="
                mt-10 md:mt-12
                flex flex-wrap gap-3 md:gap-4
              "
            >
              {categories.map((item, index) => (
                <div
                  key={index}
                  className={`
                    rounded-full
                    border border-white/10
                    bg-gradient-to-r
                    ${item.color}

                    px-4 py-2.5
                    sm:px-5 sm:py-3

                    backdrop-blur-xl
                  `}
                >
                  <span
                    className="
                      text-xs
                      sm:text-sm
                      text-white
                    "
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden

              rounded-[28px]
              md:rounded-[36px]
              xl:rounded-[42px]

              border border-white/10
              bg-white/[0.05]

              backdrop-blur-2xl
            "
          >
            {/* IMAGE */}
            <img
              src={HybridMain}
              alt="Integrated Systems"
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
                from-[#050b11]/95
                via-[#050b11]/40
                to-transparent
              "
            />

            {/* FLOATING INFO */}
            <div
              className="
                absolute left-4 top-4
                right-4 sm:right-auto

                rounded-[24px]
                md:rounded-[28px]

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
                    border border-cyan-400/20
                    bg-cyan-400/10
                  "
                >
                  <Orbit
                    size={26}
                    className="text-cyan-300"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      sm:text-sm
                      text-slate-400
                    "
                  >
                    Integrated Ecosystems
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
                    Multi-Technology Recovery
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
                  grid gap-3
                  sm:grid-cols-3
                "
              >
                {[
                  "Biological",
                  "Mechanical",
                  "Smart Monitoring",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.05]

                      px-4 py-3

                      text-center
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        sm:text-xs

                        uppercase
                        tracking-[0.18em]
                        text-cyan-200
                      "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* MOBILE/TABLET CARDS */}
        <div
          className="
            mt-16 md:mt-24

            grid gap-5 md:gap-6

            xl:hidden
          "
        >
          {comparisonData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="
                  relative
                  overflow-hidden

                  rounded-[28px]
                  md:rounded-[34px]

                  border border-white/10
                  bg-white/[0.06]

                  p-5 sm:p-7

                  backdrop-blur-2xl

                  shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]
                "
              >
                {/* BG */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-cyan-400/5
                    via-transparent
                    to-emerald-400/5
                  "
                />

                <div className="relative z-10">
                  {/* TOP */}
                  <div className="flex items-start gap-4">
                    {/* ICON */}
                    <div
                      className="
                        flex h-14 w-14
                        shrink-0
                        items-center justify-center

                        rounded-2xl
                        border border-white/10
                        bg-[#081219]/60
                      "
                    >
                      <Icon
                        size={28}
                        className="text-cyan-300"
                      />
                    </div>

                    {/* INFO */}
                    <div>
                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-cyan-200
                        "
                      >
                        Technology
                      </p>

                      <h3
                        className="
                          mt-2

                          text-2xl
                          font-black
                          leading-tight
                          text-white
                        "
                      >
                        {item.technology}
                      </h3>
                    </div>
                  </div>

                  {/* DATA */}
                  <div
                    className="
                      mt-8
                      grid gap-5
                    "
                  >
                    {/* FUNCTION */}
                    <div>
                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        Primary Function
                      </p>

                      <h4
                        className="
                          mt-2
                          text-lg
                          font-semibold
                          text-white
                        "
                      >
                        {item.function}
                      </h4>
                    </div>

                    {/* APPLICATION */}
                    <div>
                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        Applications
                      </p>

                      <h4
                        className="
                          mt-2
                          text-lg
                          font-semibold
                          text-white
                        "
                      >
                        {item.application}
                      </h4>
                    </div>

                    {/* EFFICIENCY */}
                    <div>
                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        Optimization
                      </p>

                      <div className="mt-3 flex items-center gap-3">
                        <Check
                          size={18}
                          className="text-emerald-300"
                        />

                        <span
                          className="
                            text-sm
                            sm:text-base
                            text-white
                          "
                        >
                          {item.efficiency}
                        </span>
                      </div>
                    </div>

                    {/* CATEGORY */}
                    <div>
                      <div
                        className="
                          inline-flex items-center gap-3

                          rounded-full
                          border border-cyan-400/20
                          bg-cyan-400/10

                          px-4 py-2.5
                        "
                      >
                        <div className="h-2 w-2 rounded-full bg-cyan-400" />

                        <span
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-cyan-200
                          "
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DESKTOP MATRIX */}
        <div className="mt-28 hidden xl:block">
          <div className="space-y-6">
            {comparisonData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-[36px]

                    border border-white/10
                    bg-white/[0.05]

                    backdrop-blur-2xl

                    shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]

                    transition-[transform,border-color,box-shadow]
                    duration-500

                    hover:border-cyan-400/20
                    hover:-translate-y-1
                    hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]
                  "
                >
                  {/* BG */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100

                      bg-gradient-to-r
                      from-cyan-400/10
                      via-transparent
                      to-emerald-400/5
                    "
                  />

                  <div
                    className="
                      relative z-10

                      grid gap-8

                      px-8 py-8

                      xl:grid-cols-[1.2fr_1fr_1fr_1fr_0.7fr]
                      xl:items-center
                    "
                  >
                    {/* TECH */}
                    <div className="flex items-center gap-5">
                      <div
                        className="
                          flex h-[72px] w-[72px]
                          items-center justify-center

                          rounded-3xl
                          border border-white/10
                          bg-[#081219]/50
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
                          Technology
                        </p>

                        <h3
                          className="
                            mt-3
                            text-2xl
                            font-black
                            text-white
                          "
                        >
                          {item.technology}
                        </h3>
                      </div>
                    </div>

                    {/* FUNCTION */}
                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        Primary Function
                      </p>

                      <h4
                        className="
                          mt-3
                          text-lg
                          font-semibold
                          text-white
                        "
                      >
                        {item.function}
                      </h4>
                    </div>

                    {/* APPLICATION */}
                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        Applications
                      </p>

                      <h4
                        className="
                          mt-3
                          text-lg
                          font-semibold
                          text-white
                        "
                      >
                        {item.application}
                      </h4>
                    </div>

                    {/* EFFICIENCY */}
                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        Optimization
                      </p>

                      <div className="mt-3 flex items-center gap-3">
                        <Check
                          size={18}
                          className="text-emerald-300"
                        />

                        <span className="text-white">
                          {item.efficiency}
                        </span>
                      </div>
                    </div>

                    {/* CATEGORY */}
                    <div>
                      <div
                        className="
                          inline-flex items-center gap-3

                          rounded-full
                          border border-cyan-400/20
                          bg-cyan-400/10

                          px-5 py-3
                        "
                      >
                        <div className="h-2 w-2 rounded-full bg-cyan-400" />

                        <span
                          className="
                            text-xs
                            uppercase
                            tracking-[0.18em]
                            text-cyan-200
                          "
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STRIP */}
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
            mt-20 md:mt-24
            overflow-hidden

            rounded-[28px]
            md:rounded-[36px]
            xl:rounded-[42px]

            border border-white/10
            bg-white/[0.05]

            p-6 sm:p-10 md:p-14

            backdrop-blur-2xl
          "
        >
          {/* BG */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-cyan-400/10
              via-transparent
              to-emerald-400/10
            "
          />

          <div
            className="
              relative z-10

              grid gap-10

              xl:grid-cols-[1.1fr_0.9fr]
              xl:items-center
            "
          >
            {/* LEFT */}
            <div>
              <h3
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl

                  font-black
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-white
                "
              >
                Not Individual

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
                  Technologies
                </span>
              </h3>

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
                We engineer integrated environmental ecosystems
                combining biological recovery, oxygenation,
                monitoring and intelligent infrastructure into
                unified restoration systems.
              </p>
            </div>

            {/* RIGHT */}
            <div
              className="
                grid gap-4 md:gap-5
                sm:grid-cols-2
              "
            >
              {[
                "Integrated Ecosystems",
                "AI Environmental Intelligence",
                "Hybrid Recovery Systems",
                "Long-Term Sustainability",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-[24px]
                    md:rounded-[28px]

                    border border-white/10
                    bg-[#081219]/50

                    px-5 py-4
                    sm:px-6 sm:py-5

                    backdrop-blur-2xl
                  "
                >
                  <div className="flex items-center gap-3">
                    <Droplets
                      size={18}
                      className="text-cyan-300"
                    />

                    <p
                      className="
                        text-sm
                        sm:text-base
                        text-white
                      "
                    >
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechnologyComparison;