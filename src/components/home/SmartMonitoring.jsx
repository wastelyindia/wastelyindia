// import { motion } from "framer-motion";
// import {
//   Activity,
//   BrainCircuit,
//   Cpu,
//   Droplets,
//   Gauge,
//   Globe,
//   Orbit,
//   Radar,
//   Sparkles,
//   Waves,
// } from "lucide-react";

// import DashboardImg from "../../assets/images/algae-dashboard.png";
// import BuoyImg from "../../assets/images/algae-buoy.png";

// const monitoringFeatures = [
//   {
//     title: "Chlorophyll Monitoring",
//     description:
//       "Real-time chlorophyll analytics for algae bloom detection and ecological intelligence.",
//     icon: Activity,
//   },

//   {
//     title: "pH / DO Sensors",
//     description:
//       "Continuous dissolved oxygen and pH tracking for healthy aquatic ecosystem management.",
//     icon: Gauge,
//   },

//   {
//     title: "Predictive Analytics",
//     description:
//       "AI-assisted bloom prediction using historical and real-time environmental data.",
//     icon: BrainCircuit,
//   },

//   {
//     title: "Real-Time IoT Monitoring",
//     description:
//       "Cloud-connected environmental monitoring with live dashboards and remote diagnostics.",
//     icon: Radar,
//   },
// ];

// const liveMetrics = [
//   {
//     label: "Dissolved Oxygen",
//     value: "8.6 mg/L",
//     status: "Optimal",
//   },

//   {
//     label: "pH Stability",
//     value: "7.2",
//     status: "Balanced",
//   },

//   {
//     label: "Chlorophyll α",
//     value: "Low",
//     status: "Controlled",
//   },

//   {
//     label: "Water Clarity",
//     value: "92%",
//     status: "Improved",
//   },
// ];

// const SmartMonitoring = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#081219] py-32">
//       {/* WATER AMBIENT GLOW */}
//       <div
//   className="
//     absolute inset-0
//     opacity-20
//     bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]
//     animate-pulse
//     animate-[pulse_8s_ease-in-out_infinite]
//   "
// />
//       {/* GRID */}
//       <div
//         className="
//           absolute inset-0
//           opacity-[0.04]
//           bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
//           bg-[size:90px_90px]
//         "
//       />

//       {/* AMBIENT */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute left-[-120px] top-[10%]
//             h-[520px] w-[520px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[180px]
//           "
//         />

//         <div
//           className="
//             absolute right-[-120px] bottom-[5%]
//             h-[520px] w-[520px]
//             rounded-full
//             bg-emerald-500/10
//             blur-[180px]
//           "
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* HEADER */}
//         <div className="max-w-4xl">
//           {/* BADGE */}
//           <div
//             className="
//               inline-flex items-center gap-3
//               rounded-full
//               border border-cyan-400/20
//               bg-cyan-400/10
//               backdrop-blur-xl
//               px-5 py-2
//             "
//           >
//             <Cpu
//               size={14}
//               className="text-cyan-300"
//             />

//             <span
//               className="
//                 text-xs
//                 uppercase
//                 tracking-[0.25em]
//                 text-cyan-200
//               "
//             >
//               Smart Water Intelligence
//             </span>
//           </div>

//           {/* TITLE */}
//           <h2
//             className="
//               mt-8
//               text-4xl
//               md:text-6xl
//               xl:text-7xl
//               font-black
//               leading-[0.95]
//               tracking-[-0.04em]
//               text-white
//             "
//           >
//             Real-Time Monitoring
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
//               & Predictive Analytics
//             </span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p
//             className="
//               mt-8
//               max-w-3xl
//               text-lg
//               md:text-xl
//               leading-relaxed
//               text-slate-400
//             "
//           >
//             Intelligent MPC buoy systems integrating
//             chlorophyll monitoring, dissolved oxygen sensors,
//             predictive analytics and AI-assisted ecological
//             restoration intelligence.
//           </p>
//         </div>

//         {/* MAIN GRID */}
//         <div
//           className="
//             mt-20
//             grid
//             xl:grid-cols-[0.55fr_0.45fr]
//             gap-8
//             items-start
//           "
//         >
//           {/* LEFT DASHBOARD */}
//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
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
//               src={DashboardImg}
//               alt="Monitoring Dashboard"
//               className="
//                 h-[760px]
//                 w-full
//                 object-cover
//               "
//             />

//             {/* OVERLAYS */}
//             <div
//               className="
//                 absolute inset-0
//                 bg-gradient-to-t
//                 from-[#081219]
//                 via-[#081219]/30
//                 to-[#081219]/10
//               "
//             />

//             <div
//               className="
//                 absolute inset-0
//                 bg-gradient-to-r
//                 from-[#081219]/40
//                 to-transparent
//               "
//             />

//             {/* FLOATING LIVE PANEL */}
//             <div
//               className="
//                 absolute left-6 right-6 top-6
//                 rounded-[30px]
//                 border border-white/10
//                 bg-[#081219]/60
//                 backdrop-blur-2xl
//                 p-6
//               "
//             >
//               <div className="flex items-center justify-between">
//                 {/* LEFT */}
//                 <div>
//                   <p
//                     className="
//                       text-xs
//                       uppercase
//                       tracking-[0.22em]
//                       text-cyan-200
//                     "
//                   >
//                     Live Water Intelligence
//                   </p>

//                   <h3
//                     className="
//                       mt-3
//                       text-2xl
//                       font-black
//                       text-white
//                     "
//                   >
//                     MPC Smart Monitoring
//                   </h3>
//                 </div>

//                 {/* STATUS */}
//                 <div
//                   className="
//                     flex items-center gap-3
//                     rounded-full
//                     border border-emerald-400/20
//                     bg-emerald-400/10
//                     px-4 py-2
//                   "
//                 >
//                   <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

//                   <span className="text-sm text-emerald-300">
//                     Live
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* BOTTOM METRICS */}
//             <div
//               className="
//                 absolute bottom-6 left-6 right-6
//                 grid grid-cols-2
//                 gap-4
//               "
//             >
//               {liveMetrics.map((item, index) => (
//                 <div
//                   key={index}
//                   className="
//                     rounded-[24px]
//                     border border-white/10
//                     bg-[#081219]/65
//                     backdrop-blur-2xl
//                     p-5
//                   "
//                 >
//                   <p
//                     className="
//                       text-xs
//                       uppercase
//                       tracking-[0.18em]
//                       text-slate-400
//                     "
//                   >
//                     {item.label}
//                   </p>

//                   <h4
//                     className="
//                       mt-3
//                       text-2xl
//                       md:text-3xl
//                       font-black
//                       text-white
//                     "
//                   >
//                     {item.value}
//                   </h4>

//                   <div
//                     className="
//                       mt-4
//                       inline-flex items-center gap-2
//                       rounded-full
//                       border border-cyan-400/20
//                       bg-cyan-400/10
//                       px-3 py-1
//                     "
//                   >
//                     <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                     <span className="text-xs text-cyan-200">
//                       {item.status}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-6">
//             {/* TOP BUOY CARD */}
//             <motion.div
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[38px]
//                 border border-cyan-400/20
//                 bg-white/5
//                 backdrop-blur-2xl
//                 p-8
//               "
//             >
//               {/* BG */}
//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-br
//                   from-cyan-400/10
//                   to-emerald-400/5
//                 "
//               />

//               <div className="relative z-10">
//                 {/* IMAGE */}
//                 <div
//                   className="
//                     overflow-hidden
//                     rounded-[28px]
//                     border border-white/10
//                   "
//                 >
//                   <img
//                     src={BuoyImg}
//                     alt="MPC Buoy"
//                     className="
//                       h-[260px]
//                       w-full
//                       object-cover
//                     "
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="mt-8">
//                   <div
//                     className="
//                       flex h-18 w-18
//                       items-center justify-center
//                       rounded-3xl
//                       border border-white/10
//                       bg-white/5
//                     "
//                   >
//                     <Orbit
//                       size={34}
//                       className="text-cyan-300"
//                     />
//                   </div>

//                   <h3
//                     className="
//                       mt-8
//                       text-3xl
//                       md:text-4xl
//                       font-black
//                       leading-tight
//                       text-white
//                     "
//                   >
//                     MPC Smart Buoy
//                   </h3>

//                   <p
//                     className="
//                       mt-5
//                       leading-relaxed
//                       text-slate-300
//                     "
//                   >
//                     Solar-powered intelligent floating systems
//                     with real-time environmental analytics and
//                     AI-based ecological prediction.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* FEATURES */}
//             <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
//               {monitoringFeatures.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 35 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 0.6,
//                       delay: index * 0.08,
//                     }}
//                     viewport={{ once: true }}
//                     className="
//                       group
//                       relative
//                       overflow-hidden
//                       rounded-[32px]
//                       border border-white/10
//                       bg-white/5
//                       backdrop-blur-2xl
//                       p-7
//                       transition-all duration-500
//                       hover:-translate-y-2
//                       hover:border-cyan-400/20
//                     "
//                   >
//                     {/* HOVER */}
//                     <div
//                       className="
//                         absolute inset-0
//                         opacity-0
//                         group-hover:opacity-100
//                         transition-all duration-500
//                         bg-gradient-to-br
//                         from-cyan-400/10
//                         to-emerald-400/5
//                       "
//                     />

//                     <div className="relative z-10">
//                       {/* ICON */}
//                       <div
//                         className="
//                           flex h-16 w-16
//                           items-center justify-center
//                           rounded-2xl
//                           border border-white/10
//                           bg-white/5
//                         "
//                       >
//                         <Icon
//                           size={30}
//                           className="text-cyan-300"
//                         />
//                       </div>

//                       {/* TITLE */}
//                       <h3
//                         className="
//                           mt-7
//                           text-2xl
//                           font-black
//                           leading-tight
//                           text-white
//                         "
//                       >
//                         {item.title}
//                       </h3>

//                       {/* DESC */}
//                       <p
//                         className="
//                           mt-4
//                           leading-relaxed
//                           text-slate-400
//                         "
//                       >
//                         {item.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM STRIP */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="
//             relative
//             mt-20
//             overflow-hidden
//             rounded-[40px]
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
//               to-emerald-400/10
//             "
//           />

//           <div
//             className="
//               relative z-10
//               flex flex-col gap-10
//               px-8 py-10
//               md:flex-row
//               md:items-center
//               md:justify-between
//               md:px-14
//             "
//           >
//             {/* LEFT */}
//             <div className="max-w-3xl">
//               <h3
//                 className="
//                   text-3xl
//                   md:text-5xl
//                   font-black
//                   leading-tight
//                   text-white
//                 "
//               >
//                 Intelligent Water Intelligence
//               </h3>

//               <p
//                 className="
//                   mt-5
//                   text-lg
//                   leading-relaxed
//                   text-slate-400
//                 "
//               >
//                 AI-assisted ecological monitoring integrating
//                 chlorophyll sensors, pH analytics, dissolved
//                 oxygen monitoring and predictive environmental
//                 intelligence.
//               </p>
//             </div>

//             {/* TAGS */}
//             <div className="flex flex-wrap gap-4">
//               {[
//                 "Chlorophyll α",
//                 "DO Monitoring",
//                 "IoT Sensors",
//                 "AI Analytics",
//                 "MPC View",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="
//                     rounded-full
//                     border border-white/10
//                     bg-white/5
//                     px-5 py-3
//                     text-sm
//                     text-slate-200
//                     backdrop-blur-xl
//                   "
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SmartMonitoring;


import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Cpu,
  Gauge,
  Orbit,
  Radar,
  Waves,
} from "lucide-react";

import DashboardImg from "../../assets/images/algae-dashboard.png";
import BuoyImg from "../../assets/images/algae-buoy.png";

const monitoringFeatures = [
  {
    title: "Chlorophyll Monitoring",
    description:
      "Real-time chlorophyll analytics for algae bloom detection and ecological intelligence.",
    icon: Activity,
  },

  {
    title: "pH / DO Sensors",
    description:
      "Continuous dissolved oxygen and pH tracking for healthy aquatic ecosystem management.",
    icon: Gauge,
  },

  {
    title: "Predictive Analytics",
    description:
      "AI-assisted bloom prediction using historical and real-time environmental data.",
    icon: BrainCircuit,
  },

  {
    title: "Real-Time IoT Monitoring",
    description:
      "Cloud-connected environmental monitoring with live dashboards and remote diagnostics.",
    icon: Radar,
  },
];

const liveMetrics = [
  {
    label: "Dissolved Oxygen",
    value: "8.6 mg/L",
    status: "Optimal",
  },

  {
    label: "pH Stability",
    value: "7.2",
    status: "Balanced",
  },

  {
    label: "Chlorophyll α",
    value: "Low",
    status: "Controlled",
  },

  {
    label: "Water Clarity",
    value: "92%",
    status: "Improved",
  },
];

const SmartMonitoring = () => {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#081219]
        py-20 sm:py-24 lg:py-32
      "
    >
      {/* GRID */}
      <div
        className="
          absolute inset-0
          opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:72px_72px]
        "
      />

      {/* AMBIENT */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-120px]
            top-[10%]
            h-[420px] w-[420px]
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-120px]
            bottom-[5%]
            h-[420px] w-[420px]
            rounded-full
            bg-emerald-500/10
            blur-[140px]
          "
        />
      </div>

      <div
        className="
          relative z-10
          mx-auto
          max-w-7xl
          px-4 sm:px-6 lg:px-8
        "
      >
        {/* HEADER */}
        <div className="max-w-4xl">
          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-3
              rounded-full
              border border-cyan-400/20
              bg-cyan-400/10
              px-4 sm:px-5
              py-2
              backdrop-blur-xl
            "
          >
            <Cpu
              size={14}
              className="text-cyan-300"
            />

            <span
              className="
                text-[10px] sm:text-xs
                uppercase
                tracking-[0.25em]
                text-cyan-200
              "
            >
              Smart Water Intelligence
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-6 sm:mt-8
              text-[36px]
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
            "
          >
            Real-Time Monitoring

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
              & Predictive Analytics
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6 sm:mt-8
              max-w-3xl
              text-[15px]
              sm:text-lg
              lg:text-xl
              leading-relaxed
              text-slate-400
            "
          >
            Intelligent MPC buoy systems integrating
            chlorophyll monitoring, dissolved oxygen sensors,
            predictive analytics and AI-assisted ecological
            restoration intelligence.
          </p>
        </div>

        {/* MAIN GRID */}
        <div
          className="
            mt-14 sm:mt-16 lg:mt-20
            grid
            xl:grid-cols-[0.56fr_0.44fr]
            gap-6 lg:gap-8
            items-start
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="
              relative
              overflow-hidden
              rounded-[32px] sm:rounded-[42px]
              border border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
            "
          >
            {/* IMAGE */}
            <img
              src={DashboardImg}
              alt="Monitoring Dashboard"
              loading="lazy"
              decoding="async"
              className="
                h-[520px]
                sm:h-[620px]
                xl:h-[760px]
                w-full
                object-cover
              "
            />

            {/* OVERLAYS */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-[#081219]
                via-[#081219]/30
                to-[#081219]/10
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-[#081219]/45
                to-transparent
              "
            />

            {/* TOP PANEL */}
            <div
              className="
                absolute
                left-4 right-4 top-4
                sm:left-6 sm:right-6 sm:top-6
                rounded-[24px] sm:rounded-[30px]
                border border-white/10
                bg-[#081219]/60
                p-4 sm:p-6
                backdrop-blur-2xl
              "
            >
              <div
                className="
                  flex flex-col gap-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                {/* LEFT */}
                <div>
                  <p
                    className="
                      text-[10px] sm:text-xs
                      uppercase
                      tracking-[0.22em]
                      text-cyan-200
                    "
                  >
                    Live Water Intelligence
                  </p>

                  <h3
                    className="
                      mt-2 sm:mt-3
                      text-xl sm:text-2xl
                      font-black
                      text-white
                    "
                  >
                    MPC Smart Monitoring
                  </h3>
                </div>

                {/* STATUS */}
                <div
                  className="
                    inline-flex items-center gap-3
                    rounded-full
                    border border-emerald-400/20
                    bg-emerald-400/10
                    px-4 py-2
                  "
                >
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                  <span className="text-sm text-emerald-300">
                    Live
                  </span>
                </div>
              </div>
            </div>

            {/* BOTTOM METRICS */}
            <div
              className="
                absolute
                bottom-4 left-4 right-4
                sm:bottom-6 sm:left-6 sm:right-6
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3 sm:gap-4
              "
            >
              {liveMetrics.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-[22px]
                    border border-white/10
                    bg-[#081219]/65
                    p-4 sm:p-5
                    backdrop-blur-2xl
                  "
                >
                  <p
                    className="
                      text-[10px] sm:text-xs
                      uppercase
                      tracking-[0.18em]
                      text-slate-400
                    "
                  >
                    {item.label}
                  </p>

                  <h4
                    className="
                      mt-2 sm:mt-3
                      text-2xl sm:text-3xl
                      font-black
                      text-white
                    "
                  >
                    {item.value}
                  </h4>

                  <div
                    className="
                      mt-3 sm:mt-4
                      inline-flex items-center gap-2
                      rounded-full
                      border border-cyan-400/20
                      bg-cyan-400/10
                      px-3 py-1
                    "
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />

                    <span className="text-xs text-cyan-200">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-5 sm:space-y-6">
            {/* BUOY */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="
                relative
                overflow-hidden
                rounded-[30px] sm:rounded-[38px]
                border border-cyan-400/20
                bg-white/[0.05]
                p-5 sm:p-7 lg:p-8
                backdrop-blur-2xl
              "
            >
              {/* BG */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-cyan-400/10
                  to-emerald-400/5
                "
              />

              <div className="relative z-10">
                {/* IMAGE */}
                <div
                  className="
                    overflow-hidden
                    rounded-[24px]
                    border border-white/10
                  "
                >
                  <img
                    src={BuoyImg}
                    alt="MPC Buoy"
                    loading="lazy"
                    decoding="async"
                    className="
                      h-[220px]
                      sm:h-[260px]
                      w-full
                      object-cover
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="mt-6 sm:mt-8">
                  <div
                    className="
                      flex h-14 w-14
                      sm:h-16 sm:w-16
                      items-center justify-center
                      rounded-2xl sm:rounded-3xl
                      border border-white/10
                      bg-white/[0.05]
                    "
                  >
                    <Orbit
                      size={30}
                      className="text-cyan-300"
                    />
                  </div>

                  <h3
                    className="
                      mt-6 sm:mt-8
                      text-2xl sm:text-3xl lg:text-4xl
                      font-black
                      leading-tight
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    MPC Smart Buoy
                  </h3>

                  <p
                    className="
                      mt-4 sm:mt-5
                      text-sm sm:text-base
                      leading-relaxed
                      text-slate-300
                    "
                  >
                    Solar-powered intelligent floating systems
                    with real-time environmental analytics and
                    AI-based ecological prediction.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FEATURES */}
            <div
              className="
                grid
                gap-4 sm:gap-5 lg:gap-6
                md:grid-cols-2
                xl:grid-cols-1
              "
            >
              {monitoringFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[28px] sm:rounded-[32px]
                      border border-white/10
                      bg-white/[0.05]
                      p-5 sm:p-7
                      backdrop-blur-2xl
                      transition-all duration-500
                      hover:border-cyan-400/20
                      hover:-translate-y-1
                    "
                  >
                    {/* HOVER */}
                    <div
                      className="
                        absolute inset-0
                        opacity-0
                        transition-all duration-500
                        group-hover:opacity-100
                        bg-gradient-to-br
                        from-cyan-400/10
                        to-emerald-400/5
                      "
                    />

                    <div className="relative z-10">
                      {/* ICON */}
                      <div
                        className="
                          flex h-14 w-14
                          items-center justify-center
                          rounded-2xl
                          border border-white/10
                          bg-white/[0.05]
                        "
                      >
                        <Icon
                          size={26}
                          className="text-cyan-300"
                        />
                      </div>

                      {/* TITLE */}
                      <h3
                        className="
                          mt-5 sm:mt-6
                          text-xl sm:text-2xl
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
                          mt-3 sm:mt-4
                          text-sm sm:text-base
                          leading-relaxed
                          text-slate-400
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            mt-14 sm:mt-16 lg:mt-20
            overflow-hidden
            rounded-[32px] sm:rounded-[40px]
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
              to-emerald-400/10
            "
          />

          <div
            className="
              relative z-10
              flex flex-col
              gap-8 sm:gap-10
              px-5 sm:px-8 lg:px-14
              py-8 sm:py-10 lg:py-12
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* LEFT */}
            <div className="max-w-3xl">
              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-5xl
                  font-black
                  leading-tight
                  tracking-[-0.04em]
                  text-white
                "
              >
                Intelligent Water Intelligence
              </h3>

              <p
                className="
                  mt-4 sm:mt-5
                  text-[15px]
                  sm:text-lg
                  leading-relaxed
                  text-slate-400
                "
              >
                AI-assisted ecological monitoring integrating
                chlorophyll sensors, pH analytics, dissolved
                oxygen monitoring and predictive environmental
                intelligence.
              </p>
            </div>

            {/* TAGS */}
            <div
              className="
                flex flex-wrap
                gap-3
                lg:max-w-[420px]
                lg:justify-end
              "
            >
              {[
                "Chlorophyll α",
                "DO Monitoring",
                "IoT Sensors",
                "AI Analytics",
                "MPC View",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.05]
                    px-4 py-2.5
                    text-[12px] sm:text-sm
                    text-slate-200
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-cyan-400/20
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartMonitoring;