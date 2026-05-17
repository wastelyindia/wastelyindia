// import { motion } from "framer-motion";

// import {
//   Activity,
//   BrainCircuit,
//   ChartNoAxesCombined,
//   Cpu,
//   Gauge,
//   Orbit,
//   Radar,
//   ScanSearch,
//   Waves,
// } from "lucide-react";

// import MonitoringHero from "../../assets/images/monitoring-main.png";
// import BuoyImg from "../../assets/images/monitoring-buoy.png";
// import DashboardImg from "../../assets/images/monitoring-dashboard.png";
// import AnalyticsImg from "../../assets/images/monitoring-analytics.png";

// const systems = [
//   {
//     title: "MPC Smart Buoy",
//     description:
//       "Autonomous floating monitoring systems engineered for real-time aquatic intelligence and ecological diagnostics.",
//     icon: Radar,
//     stat: "24/7 Monitoring",
//   },

//   {
//     title: "IoT Water Analytics",
//     description:
//       "Cloud-connected environmental monitoring infrastructure delivering continuous performance visibility.",
//     icon: Cpu,
//     stat: "Live Data Systems",
//   },

//   {
//     title: "Predictive Intelligence",
//     description:
//       "AI-assisted environmental forecasting for algae prediction, oxygen instability and restoration optimization.",
//     icon: BrainCircuit,
//     stat: "AI Prediction",
//   },
// ];

// const monitoringData = [
//   {
//     title: "DO Monitoring",
//     value: "Real-Time",
//   },

//   {
//     title: "pH Analytics",
//     value: "Continuous",
//   },

//   {
//     title: "Chlorophyll",
//     value: "AI Tracked",
//   },

//   {
//     title: "Water Quality",
//     value: "Live Insights",
//   },
// ];

// const SmartMonitoringSystems = () => {
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
//     id="smart" className="relative overflow-hidden bg-[#050b11] py-32">
//       {/* BACKGROUND GRID */}
//       <div
//         className="
//           absolute inset-0
//           opacity-[0.03]
//           bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
//           bg-[size:100px_100px]
//         "
//       />

//       {/* CYBER GLOW */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute left-[-120px] top-[5%]
//             h-[700px] w-[700px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[180px]
//           "
//         />

//         <div
//           className="
//             absolute right-[-150px] bottom-[-100px]
//             h-[650px] w-[650px]
//             rounded-full
//             bg-sky-500/10
//             blur-[180px]
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
//               y: 25,
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
//             <Orbit
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
//               Intelligent Monitoring Systems
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
//             AI-Powered
//             <span
//               className="
//                 block
//                 bg-gradient-to-r
//                 from-cyan-300
//                 via-sky-300
//                 to-blue-400
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Water Intelligence
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
//             Advanced environmental monitoring infrastructure
//             combining MPC smart buoys, predictive analytics,
//             IoT systems and real-time ecological intelligence
//             for intelligent water ecosystem management.
//           </motion.p>
//         </div>

//         {/* MAIN VISUAL SYSTEM */}
//         <div className="mt-24 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
//           {/* LEFT */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -40,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
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
//               src={MonitoringHero}
//               alt="Smart Monitoring"
//               className="
//                 absolute inset-0
//                 h-full w-full
//                 object-cover
//               "
//             />

//             {/* OVERLAY */}
//             <div
//               className="
//                 absolute inset-0
//                 bg-gradient-to-t
//                 from-[#050b11]
//                 via-[#050b11]/50
//                 to-[#050b11]/10
//               "
//             />

//             {/* SCAN LINES */}
//             <div
//               className="
//                 absolute inset-0
//                 bg-[linear-gradient(to_bottom,transparent_0%,rgba(34,211,238,0.04)_50%,transparent_100%)]
//                 bg-[length:100%_6px]
//               "
//             />

//             {/* CONTENT */}
//             <div
//               className="
//                 relative z-10
//                 flex h-full flex-col justify-between
//                 p-10
//                 min-h-[760px]
//               "
//             >
//               {/* TOP */}
//               <div className="flex items-start justify-between gap-6">
//                 {/* INFO */}
//                 <div
//                   className="
//                     rounded-[28px]
//                     border border-white/10
//                     bg-[#081219]/60
//                     px-6 py-5
//                     backdrop-blur-2xl
//                   "
//                 >
//                   <div className="flex items-center gap-4">
//                     <div
//                       className="
//                         flex h-14 w-14
//                         items-center justify-center
//                         rounded-2xl
//                         border border-cyan-400/20
//                         bg-cyan-400/10
//                       "
//                     >
//                       <Radar
//                         size={28}
//                         className="text-cyan-300"
//                       />
//                     </div>

//                     <div>
//                       <p className="text-sm text-slate-400">
//                         MPC Monitoring
//                       </p>

//                       <h4
//                         className="
//                           mt-1
//                           text-lg
//                           font-semibold
//                           text-white
//                         "
//                       >
//                         Smart Buoy Analytics
//                       </h4>
//                     </div>
//                   </div>
//                 </div>

//                 {/* LIVE */}
//                 <div
//                   className="
//                     flex items-center gap-3
//                     rounded-full
//                     border border-emerald-400/20
//                     bg-emerald-400/10
//                     px-5 py-3
//                     backdrop-blur-xl
//                   "
//                 >
//                   <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

//                   <span
//                     className="
//                       text-xs
//                       uppercase
//                       tracking-[0.18em]
//                       text-emerald-200
//                     "
//                   >
//                     Live Monitoring
//                   </span>
//                 </div>
//               </div>

//               {/* CENTER DASH */}
//               <div
//                 className="
//                   mx-auto
//                   grid
//                   w-full max-w-[520px]
//                   grid-cols-2
//                   gap-4
//                 "
//               >
//                 {monitoringData.map((item, index) => (
//                   <div
//                     key={index}
//                     className="
//                       rounded-[28px]
//                       border border-white/10
//                       bg-[#081219]/60
//                       p-6
//                       backdrop-blur-2xl
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
//                       {item.title}
//                     </p>

//                     <h4
//                       className="
//                         mt-4
//                         text-2xl
//                         font-black
//                         text-white
//                       "
//                     >
//                       {item.value}
//                     </h4>
//                   </div>
//                 ))}
//               </div>

//               {/* BOTTOM */}
//               <div
//                 className="
//                   rounded-[32px]
//                   border border-white/10
//                   bg-[#081219]/70
//                   p-7
//                   backdrop-blur-2xl
//                 "
//               >
//                 <div className="flex items-start gap-5">
//                   <div
//                     className="
//                       flex h-16 w-16
//                       items-center justify-center
//                       rounded-2xl
//                       border border-cyan-400/20
//                       bg-cyan-400/10
//                     "
//                   >
//                     <ChartNoAxesCombined
//                       size={30}
//                       className="text-cyan-300"
//                     />
//                   </div>

//                   <div>
//                     <p
//                       className="
//                         text-xs
//                         uppercase
//                         tracking-[0.2em]
//                         text-cyan-200
//                       "
//                     >
//                       Predictive Environmental Intelligence
//                     </p>

//                     <h4
//                       className="
//                         mt-3
//                         text-2xl
//                         font-bold
//                         text-white
//                       "
//                     >
//                       Smart Ecosystem Analytics
//                     </h4>

//                     <p
//                       className="
//                         mt-4
//                         leading-relaxed
//                         text-slate-400
//                       "
//                     >
//                       AI-assisted ecological forecasting,
//                       algae prediction and intelligent water
//                       quality optimization systems.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT */}
//           <div className="space-y-6">
//             {/* BUOY CARD */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-[38px]
//                 border border-white/10
//                 bg-white/5
//                 backdrop-blur-2xl
//               "
//             >
//               {/* IMAGE */}
//               <div className="relative h-[320px] overflow-hidden">
//                 <img
//                   src={BuoyImg}
//                   alt="Smart Buoy"
//                   className="
//                     h-full w-full
//                     object-cover
//                     transition-transform duration-700
//                     group-hover:scale-105
//                   "
//                 />

//                 {/* OVERLAY */}
//                 <div
//                   className="
//                     absolute inset-0
//                     bg-gradient-to-t
//                     from-[#050b11]
//                     via-[#050b11]/20
//                     to-transparent
//                   "
//                 />

//                 {/* SCANNER */}
//                 <motion.div
//                   animate={{
//                     y: [-100, 320],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="
//                     absolute left-0 right-0
//                     h-24
//                     bg-gradient-to-b
//                     from-transparent
//                     via-cyan-400/10
//                     to-transparent
//                     blur-xl
//                   "
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-8">
//                 <div className="flex items-center gap-4">
//                   <div
//                     className="
//                       flex h-16 w-16
//                       items-center justify-center
//                       rounded-2xl
//                       border border-cyan-400/20
//                       bg-cyan-400/10
//                     "
//                   >
//                     <Radar
//                       size={30}
//                       className="text-cyan-300"
//                     />
//                   </div>

//                   <div>
//                     <p className="text-sm text-slate-400">
//                       Floating Monitoring
//                     </p>

//                     <h3
//                       className="
//                         mt-1
//                         text-3xl
//                         font-black
//                         text-white
//                       "
//                     >
//                       MPC Smart Buoy
//                     </h3>
//                   </div>
//                 </div>

//                 <p
//                   className="
//                     mt-6
//                     leading-relaxed
//                     text-slate-300
//                   "
//                 >
//                   Autonomous environmental monitoring
//                   platforms delivering continuous water
//                   quality intelligence and ecological system
//                   analytics.
//                 </p>
//               </div>
//             </motion.div>

//             {/* SYSTEM CARDS */}
//             <div className="grid gap-6 md:grid-cols-2">
//               {/* DASHBOARD */}
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.1,
//                 }}
//                 viewport={{ once: true }}
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-[36px]
//                   border border-white/10
//                   bg-white/5
//                   backdrop-blur-2xl
//                 "
//               >
//                 <img
//                   src={DashboardImg}
//                   alt="Dashboard"
//                   className="
//                     h-[260px] w-full
//                     object-cover
//                   "
//                 />

//                 <div className="p-7">
//                   <div
//                     className="
//                       flex h-14 w-14
//                       items-center justify-center
//                       rounded-2xl
//                       border border-cyan-400/20
//                       bg-cyan-400/10
//                     "
//                   >
//                     <Cpu
//                       size={26}
//                       className="text-cyan-300"
//                     />
//                   </div>

//                   <h3
//                     className="
//                       mt-6
//                       text-2xl
//                       font-black
//                       text-white
//                     "
//                   >
//                     IoT Dashboards
//                   </h3>

//                   <p
//                     className="
//                       mt-4
//                       leading-relaxed
//                       text-slate-400
//                     "
//                   >
//                     Real-time environmental analytics and
//                     intelligent ecosystem monitoring systems.
//                   </p>
//                 </div>
//               </motion.div>

//               {/* ANALYTICS */}
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.15,
//                 }}
//                 viewport={{ once: true }}
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-[36px]
//                   border border-white/10
//                   bg-white/5
//                   backdrop-blur-2xl
//                 "
//               >
//                 <img
//                   src={AnalyticsImg}
//                   alt="Analytics"
//                   className="
//                     h-[260px] w-full
//                     object-cover
//                   "
//                 />

//                 <div className="p-7">
//                   <div
//                     className="
//                       flex h-14 w-14
//                       items-center justify-center
//                       rounded-2xl
//                       border border-cyan-400/20
//                       bg-cyan-400/10
//                     "
//                   >
//                     <BrainCircuit
//                       size={26}
//                       className="text-cyan-300"
//                     />
//                   </div>

//                   <h3
//                     className="
//                       mt-6
//                       text-2xl
//                       font-black
//                       text-white
//                     "
//                   >
//                     AI Predictions
//                   </h3>

//                   <p
//                     className="
//                       mt-4
//                       leading-relaxed
//                       text-slate-400
//                     "
//                   >
//                     Predictive environmental intelligence for
//                     algae growth and oxygen fluctuation.
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM STRIP */}
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
//           "
//         >
//           {/* BG */}
//           <div
//             className="
//               absolute inset-0
//               bg-gradient-to-r
//               from-cyan-400/10
//               via-transparent
//               to-sky-400/10
//             "
//           />

//           <div
//             className="
//               relative z-10
//               grid gap-8
//               px-10 py-12
//               md:grid-cols-3
//             "
//           >
//             {systems.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div key={index}>
//                   <div
//                     className="
//                       flex h-16 w-16
//                       items-center justify-center
//                       rounded-2xl
//                       border border-white/10
//                       bg-white/5
//                     "
//                   >
//                     <Icon
//                       size={30}
//                       className="text-cyan-300"
//                     />
//                   </div>

//                   <h3
//                     className="
//                       mt-7
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
//                       mt-5
//                       leading-relaxed
//                       text-slate-300
//                     "
//                   >
//                     {item.description}
//                   </p>

//                   <div
//                     className="
//                       mt-8
//                       inline-flex items-center gap-3
//                       rounded-full
//                       border border-cyan-400/20
//                       bg-cyan-400/10
//                       px-4 py-2
//                     "
//                   >
//                     <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                     <span
//                       className="
//                         text-xs
//                         uppercase
//                         tracking-[0.18em]
//                         text-cyan-200
//                       "
//                     >
//                       {item.stat}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default SmartMonitoringSystems;


import { motion } from "framer-motion";

import {
  BrainCircuit,
  ChartNoAxesCombined,
  Cpu,
  Orbit,
  Radar,
} from "lucide-react";

import MonitoringHero from "../../assets/images/monitoring-main.png";
import BuoyImg from "../../assets/images/monitoring-buoy.png";
import DashboardImg from "../../assets/images/monitoring-dashboard.png";
import AnalyticsImg from "../../assets/images/monitoring-analytics.png";

const systems = [
  {
    title: "MPC Smart Buoy",
    description:
      "Autonomous floating monitoring systems engineered for real-time aquatic intelligence and ecological diagnostics.",
    icon: Radar,
    stat: "24/7 Monitoring",
  },

  {
    title: "IoT Water Analytics",
    description:
      "Cloud-connected environmental monitoring infrastructure delivering continuous performance visibility.",
    icon: Cpu,
    stat: "Live Data Systems",
  },

  {
    title: "Predictive Intelligence",
    description:
      "AI-assisted environmental forecasting for algae prediction, oxygen instability and restoration optimization.",
    icon: BrainCircuit,
    stat: "AI Prediction",
  },
];

const monitoringData = [
  {
    title: "DO Monitoring",
    value: "Real-Time",
  },

  {
    title: "pH Analytics",
    value: "Continuous",
  },

  {
    title: "Chlorophyll",
    value: "AI Tracked",
  },

  {
    title: "Water Quality",
    value: "Live Insights",
  },
];

const SmartMonitoringSystems = () => {
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
      id="smart"
      className="
        relative
        overflow-hidden
        bg-[#050b11]

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
          bg-[size:100px_100px]
        "
      />

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* CYAN */}
        <div
          className="
            absolute left-[-120px] top-[5%]
            h-[700px] w-[700px]
            rounded-full
            bg-cyan-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />

        {/* SKY */}
        <div
          className="
            absolute right-[-150px] bottom-[-100px]
            h-[650px] w-[650px]
            rounded-full
            bg-sky-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
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
            <Orbit
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
              Intelligent Monitoring Systems
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
            AI-Powered

            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-300
                via-sky-300
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Water Intelligence
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
            Advanced environmental monitoring infrastructure
            combining MPC smart buoys, predictive analytics,
            IoT systems and real-time ecological intelligence
            for intelligent water ecosystem management.
          </motion.p>
        </div>

        {/* MAIN SYSTEM */}
        <div
          className="
            mt-16 md:mt-24

            grid gap-6 md:gap-8
            xl:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* LEFT PANEL */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
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
              src={MonitoringHero}
              alt="Smart Monitoring"
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
                from-[#050b11]/95
                via-[#050b11]/60
                to-[#050b11]/15
              "
            />

            {/* SCAN */}
            <div
              className="
                absolute inset-0
                bg-[linear-gradient(to_bottom,transparent_0%,rgba(34,211,238,0.04)_50%,transparent_100%)]
                bg-[length:100%_6px]
              "
            />

            {/* CONTENT */}
            <div
              className="
                relative z-10
                flex h-full flex-col justify-between

                min-h-[620px]
                sm:min-h-[720px]

                p-5 sm:p-8 md:p-10
              "
            >
              {/* TOP */}
              <div
                className="
                  flex flex-col gap-5
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >
                {/* INFO */}
                <div
                  className="
                    rounded-[24px]
                    border border-white/10
                    bg-[#081219]/70

                    px-5 py-4

                    backdrop-blur-2xl
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex h-12 w-12
                        sm:h-14 sm:w-14
                        items-center justify-center
                        rounded-2xl
                        border border-cyan-400/20
                        bg-cyan-400/10
                      "
                    >
                      <Radar
                        size={24}
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
                        MPC Monitoring
                      </p>

                      <h4
                        className="
                          mt-1
                          text-sm
                          sm:text-lg
                          font-semibold
                          text-white
                        "
                      >
                        Smart Buoy Analytics
                      </h4>
                    </div>
                  </div>
                </div>

                {/* LIVE */}
                <div
                  className="
                    inline-flex items-center gap-3
                    self-start
                    rounded-full
                    border border-emerald-400/20
                    bg-emerald-400/10
                    px-5 py-3
                    backdrop-blur-xl
                  "
                >
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                  <span
                    className="
                      text-[10px]
                      sm:text-xs
                      uppercase
                      tracking-[0.18em]
                      text-emerald-200
                    "
                  >
                    Live Monitoring
                  </span>
                </div>
              </div>

              {/* CENTER DASH */}
              <div
                className="
                  mx-auto
                  grid w-full
                  max-w-[520px]

                  grid-cols-1
                  gap-4

                  sm:grid-cols-2
                "
              >
                {monitoringData.map((item, index) => (
                  <div
                    key={index}
                    className="
                      rounded-[24px]
                      md:rounded-[28px]

                      border border-white/10
                      bg-[#081219]/70

                      p-5 sm:p-6

                      backdrop-blur-2xl
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
                      {item.title}
                    </p>

                    <h4
                      className="
                        mt-4

                        text-xl
                        sm:text-2xl

                        font-black
                        text-white
                      "
                    >
                      {item.value}
                    </h4>
                  </div>
                ))}
              </div>

              {/* BOTTOM */}
              <div
                className="
                  rounded-[24px]
                  md:rounded-[32px]

                  border border-white/10
                  bg-[#081219]/75

                  p-5 sm:p-7

                  backdrop-blur-2xl
                "
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* ICON */}
                  <div
                    className="
                      flex h-14 w-14
                      sm:h-16 sm:w-16
                      shrink-0
                      items-center justify-center
                      rounded-2xl
                      border border-cyan-400/20
                      bg-cyan-400/10
                    "
                  >
                    <ChartNoAxesCombined
                      size={28}
                      className="text-cyan-300"
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p
                      className="
                        text-[10px]
                        sm:text-xs
                        uppercase
                        tracking-[0.2em]
                        text-cyan-200
                      "
                    >
                      Predictive Environmental Intelligence
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
                      Smart Ecosystem Analytics
                    </h4>

                    <p
                      className="
                        mt-4

                        text-sm
                        sm:text-base

                        leading-relaxed
                        text-slate-400
                      "
                    >
                      AI-assisted ecological forecasting,
                      algae prediction and intelligent water
                      quality optimization systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-5 md:space-y-6">
            {/* BUOY CARD */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.7 }}
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

                backdrop-blur-2xl

                shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]

                transition-[transform,border-color,box-shadow]
                duration-500

                md:hover:border-cyan-400/20
                md:hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={BuoyImg}
                  alt="Smart Buoy"
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
                    from-[#050b11]/95
                    via-[#050b11]/20
                    to-transparent
                  "
                />

                {/* SCANNER */}
                <motion.div
                  animate={{
                    y: [-100, 320],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute left-0 right-0
                    h-24
                    bg-gradient-to-b
                    from-transparent
                    via-cyan-400/10
                    to-transparent
                    blur-xl
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4">
                  {/* ICON */}
                  <div
                    className="
                      flex h-14 w-14
                      sm:h-16 sm:w-16
                      items-center justify-center
                      rounded-2xl
                      border border-cyan-400/20
                      bg-cyan-400/10
                    "
                  >
                    <Radar
                      size={28}
                      className="text-cyan-300"
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p
                      className="
                        text-xs
                        sm:text-sm
                        text-slate-400
                      "
                    >
                      Floating Monitoring
                    </p>

                    <h3
                      className="
                        mt-1

                        text-2xl
                        sm:text-3xl

                        font-black
                        text-white
                      "
                    >
                      MPC Smart Buoy
                    </h3>
                  </div>
                </div>

                <p
                  className="
                    mt-6

                    text-sm
                    sm:text-base

                    leading-relaxed
                    text-slate-300
                  "
                >
                  Autonomous environmental monitoring
                  platforms delivering continuous water
                  quality intelligence and ecological system
                  analytics.
                </p>
              </div>
            </motion.div>

            {/* LOWER CARDS */}
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {/* DASHBOARD */}
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
                  duration: 0.7,
                  delay: 0.1,
                }}
                viewport={{ once: true }}
                className="
                  relative
                  overflow-hidden

                  rounded-[28px]
                  md:rounded-[32px]
                  xl:rounded-[36px]

                  border border-white/10
                  bg-white/[0.06]

                  backdrop-blur-2xl

                  shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]
                "
              >
                {/* IMAGE */}
                <img
                  src={DashboardImg}
                  alt="Dashboard"
                  className="
                    h-[220px]
                    sm:h-[260px]
                    w-full
                    object-cover
                  "
                />

                {/* CONTENT */}
                <div className="p-6 md:p-7">
                  {/* ICON */}
                  <div
                    className="
                      flex h-12 w-12
                      sm:h-14 sm:w-14
                      items-center justify-center
                      rounded-2xl
                      border border-cyan-400/20
                      bg-cyan-400/10
                    "
                  >
                    <Cpu
                      size={24}
                      className="text-cyan-300"
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-6

                      text-2xl
                      font-black
                      text-white
                    "
                  >
                    IoT Dashboards
                  </h3>

                  {/* DESC */}
                  <p
                    className="
                      mt-4

                      text-sm
                      sm:text-base

                      leading-relaxed
                      text-slate-400
                    "
                  >
                    Real-time environmental analytics and
                    intelligent ecosystem monitoring systems.
                  </p>
                </div>
              </motion.div>

              {/* ANALYTICS */}
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
                  duration: 0.7,
                  delay: 0.15,
                }}
                viewport={{ once: true }}
                className="
                  relative
                  overflow-hidden

                  rounded-[28px]
                  md:rounded-[32px]
                  xl:rounded-[36px]

                  border border-white/10
                  bg-white/[0.06]

                  backdrop-blur-2xl

                  shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]
                "
              >
                {/* IMAGE */}
                <img
                  src={AnalyticsImg}
                  alt="Analytics"
                  className="
                    h-[220px]
                    sm:h-[260px]
                    w-full
                    object-cover
                  "
                />

                {/* CONTENT */}
                <div className="p-6 md:p-7">
                  {/* ICON */}
                  <div
                    className="
                      flex h-12 w-12
                      sm:h-14 sm:w-14
                      items-center justify-center
                      rounded-2xl
                      border border-cyan-400/20
                      bg-cyan-400/10
                    "
                  >
                    <BrainCircuit
                      size={24}
                      className="text-cyan-300"
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-6

                      text-2xl
                      font-black
                      text-white
                    "
                  >
                    AI Predictions
                  </h3>

                  {/* DESC */}
                  <p
                    className="
                      mt-4

                      text-sm
                      sm:text-base

                      leading-relaxed
                      text-slate-400
                    "
                  >
                    Predictive environmental intelligence for
                    algae growth and oxygen fluctuation.
                  </p>
                </div>
              </motion.div>
            </div>
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
              to-sky-400/10
            "
          />

          <div
            className="
              relative z-10

              grid gap-8

              px-6 py-8
              sm:px-8 sm:py-10
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {systems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index}>
                  {/* ICON */}
                  <div
                    className="
                      flex h-14 w-14
                      sm:h-16 sm:w-16
                      items-center justify-center
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.05]
                    "
                  >
                    <Icon
                      size={28}
                      className="text-cyan-300"
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-6 md:mt-7

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
                      mt-5

                      text-sm
                      sm:text-base

                      leading-relaxed
                      text-slate-300
                    "
                  >
                    {item.description}
                  </p>

                  {/* STAT */}
                  <div
                    className="
                      mt-8
                      inline-flex items-center gap-3
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
                      {item.stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SmartMonitoringSystems;