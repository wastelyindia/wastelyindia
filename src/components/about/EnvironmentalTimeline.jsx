// import { motion } from "framer-motion";

// import timelineImg1 from "../../assets/images/Wastely_hero_2.jpeg";
// import timelineImg2 from "../../assets/images/Wastely_hero_3.jpeg";
// import timelineImg3 from "../../assets/images/Wastely_hero_4.jpeg";
// import timelineImg4 from "../../assets/images/Wastely_hero_5.jpeg";
// import timelineImg5 from "../../assets/images/Wastely_hero_7.jpeg";

// const timelineData = [
//   {
//     number: "01",
//     title: "Research & Analysis",
//     label: "Water Intelligence",
//     description:
//       "Every restoration system begins with ecosystem diagnostics, environmental mapping and intelligent water analysis designed to identify sustainable infrastructure opportunities.",
//     image: timelineImg1,
//     stats: [
//       "AI Diagnostics",
//       "Environmental Mapping",
//       "Data Optimization",
//     ],
//   },

//   {
//     number: "02",
//     title: "Infrastructure Engineering",
//     label: "Advanced Systems",
//     description:
//       "We design future-ready treatment infrastructure with circular recovery systems, smart automation and intelligent engineering built for environmental resilience.",
//     image: timelineImg2,
//     stats: [
//       "Smart Automation",
//       "Circular Systems",
//       "98% Recovery",
//     ],
//   },

//   {
//     number: "03",
//     title: "Water Recovery",
//     label: "Circular Recovery",
//     description:
//       "Our recovery systems transform wastewater into reusable environmental resources through advanced recycling technologies and sustainable reuse infrastructure.",
//     image: timelineImg3,
//     stats: [
//       "120M+ Recycled",
//       "Industrial Reuse",
//       "Water Circularity",
//     ],
//   },

//   {
//     number: "04",
//     title: "Ecological Restoration",
//     label: "Environmental Balance",
//     description:
//       "Every engineered system is designed to restore ecosystem balance, reduce environmental impact and strengthen regenerative sustainability outcomes.",
//     image: timelineImg4,
//     stats: [
//       "Ecosystem Recovery",
//       "Environmental Balance",
//       "Regenerative Impact",
//     ],
//   },

//   {
//     number: "05",
//     title: "Future Sustainability",
//     label: "Long-Term Resilience",
//     description:
//       "We create resilient environmental infrastructure designed to support future communities, sustainable industries and intelligent ecological transformation.",
//     image: timelineImg5,
//     stats: [
//       "Future Infrastructure",
//       "Community Resilience",
//       "Sustainable Futures",
//     ],
//   },
// ];

// const particles = Array.from({ length: 20 });

// const EnvironmentalTimeline = () => {
//   return (
//     <section className="relative py-40 overflow-hidden bg-[#081219]">

//       {/* ====================================================== */}
//       {/* ATMOSPHERIC BACKGROUND */}
//       {/* ====================================================== */}

//       {/* TOP GLOW */}

//       <div
//         className="
//           absolute
//           top-[-300px]
//           left-[-200px]
//           w-[1000px]
//           h-[1000px]
//           bg-cyan-500/10
//           blur-[180px]
//           rounded-full
//         "
//       />

//       {/* BOTTOM GLOW */}

//       <div
//         className="
//           absolute
//           bottom-[-350px]
//           right-[-250px]
//           w-[1200px]
//           h-[1200px]
//           bg-emerald-500/10
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
//           bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_70%)]
//         "
//       />

//       {/* ====================================================== */}
//       {/* GRID OVERLAY */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute inset-0
//           opacity-[0.03]
//         "
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//           `,
//           backgroundSize: "90px 90px",
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
//           via-cyan-400/10
//           to-transparent
//         "
//       />

//       <div
//         className="
//           absolute
//           top-0
//           right-[18%]
//           w-px
//           h-full
//           bg-gradient-to-b
//           from-transparent
//           via-emerald-400/10
//           to-transparent
//         "
//       />

//       {/* ====================================================== */}
//       {/* GRAIN TEXTURE */}
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
//               opacity: [0.12, 0.45, 0.12],
//             }}
//             transition={{
//               duration: 10 + i,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               rounded-full
//               bg-cyan-200/20
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
//           top-[4%]
//           -translate-x-1/2
//           text-[140px]
//           md:text-[240px]
//           xl:text-[380px]
//           font-black
//           tracking-[-0.08em]
//           leading-none
//           text-white/[0.02]
//           pointer-events-none
//           select-none
//           whitespace-nowrap
//         "
//       >
//         TRANSFORM
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

//         <div className="text-center max-w-5xl mx-auto">

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
//               bg-cyan-500/10
//               border border-cyan-400/20
//               backdrop-blur-2xl
//               rounded-full
//               px-6
//               py-3
//               mb-10
//             "
//           >

//             <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

//             <span
//               className="
//                 text-cyan-200
//                 uppercase
//                 tracking-[0.28em]
//                 text-[11px]
//                 font-medium
//               "
//             >
//               Environmental Transformation
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
//               xl:text-[7rem]
//               font-semibold
//               leading-[0.9]
//               tracking-[-0.06em]
//               text-white
//             "
//           >
//             The Journey Of

//             <span
//               className="
//                 block
//                 mt-3
//                 bg-gradient-to-r
//                 from-cyan-300
//                 via-cyan-200
//                 to-emerald-400
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Ecological
//             </span>

//             <span className="block mt-3">
//               Restoration
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
//             Wastely Aqua transforms environmental
//             infrastructure into intelligent regenerative
//             systems through advanced engineering, circular
//             recovery and ecosystem restoration strategies.
//           </motion.p>

//         </div>

//         {/* ================================================== */}
//         {/* TIMELINE */}
//         {/* ================================================== */}

//         <div className="relative mt-32">

//           {/* CENTER LINE */}

//           <div
//             className="
//               absolute
//               left-1/2
//               top-0
//               bottom-0
//               -translate-x-1/2
//               hidden lg:block
//             "
//           >

//             {/* GLOW */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 w-[4px]
//                 bg-cyan-400/20
//                 blur-[12px]
//                 rounded-full
//               "
//             />

//             {/* LINE */}

//             <div
//               className="
//                 relative
//                 w-px
//                 h-full
//                 bg-gradient-to-b
//                 from-cyan-400/40
//                 via-emerald-400/20
//                 to-transparent
//               "
//             />

//           </div>

//           {/* TIMELINE ITEMS */}

//           <div className="space-y-32">

//             {timelineData.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 80,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 1,
//                 }}
//                 viewport={{ once: true }}
//                 className="
//                   relative
//                   grid
//                   lg:grid-cols-2
//                   gap-20
//                   items-center
//                 "
//               >

//                 {/* ================================================= */}
//                 {/* CENTER NODE */}
//                 {/* ================================================= */}

//                 <div
//                   className="
//                     hidden lg:flex
//                     absolute
//                     left-1/2
//                     top-1/2
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     w-16
//                     h-16
//                     rounded-full
//                     border border-white/10
//                     bg-white/[0.06]
//                     backdrop-blur-2xl
//                     items-center
//                     justify-center
//                     z-20
//                     shadow-[0_0_40px_rgba(34,211,238,0.15)]
//                   "
//                 >

//                   <div
//                     className="
//                       absolute
//                       inset-0
//                       rounded-full
//                       bg-gradient-to-br
//                       from-cyan-500/20
//                       to-emerald-500/10
//                     "
//                   />

//                   <div
//                     className="
//                       relative z-10
//                       w-3
//                       h-3
//                       rounded-full
//                       bg-cyan-300
//                       shadow-[0_0_20px_rgba(34,211,238,0.9)]
//                     "
//                   />

//                 </div>

//                 {/* ================================================= */}
//                 {/* CONTENT SIDE */}
//                 {/* ================================================= */}

//                 <div
//                   className={`
//                     ${
//                       index % 2 === 0
//                         ? "lg:pr-24"
//                         : "lg:order-2 lg:pl-24"
//                     }
//                   `}
//                 >

//                   <motion.div
//                     whileHover={{
//                       y: -10,
//                     }}
//                     className="
//                       relative
//                       overflow-hidden
//                       rounded-[40px]
//                       border border-white/10
//                       bg-white/[0.04]
//                       backdrop-blur-2xl
//                       p-10 md:p-14
//                       shadow-[0_0_70px_rgba(15,23,42,0.45)]
//                     "
//                   >

//                     {/* GLOW */}

//                     <div
//                       className="
//                         absolute inset-0
//                         bg-gradient-to-br
//                         from-cyan-500/10
//                         to-emerald-500/5
//                       "
//                     />

//                     {/* GLASS REFLECTION */}

//                     <div
//                       className="
//                         absolute inset-0
//                         bg-gradient-to-br
//                         from-white/10
//                         via-transparent
//                         to-transparent
//                         opacity-40
//                       "
//                     />

//                     {/* HUGE NUMBER */}

//                     <div
//                       className="
//                         absolute
//                         right-6
//                         top-2
//                         text-[100px]
//                         md:text-[140px]
//                         font-black
//                         tracking-[-0.08em]
//                         leading-none
//                         text-white/[0.04]
//                         pointer-events-none
//                         select-none
//                       "
//                     >
//                       {item.number}
//                     </div>

//                     <div className="relative z-10">

//                       {/* LABEL */}

//                       <div
//                         className="
//                           inline-flex
//                           items-center
//                           gap-3
//                           px-5
//                           py-3
//                           rounded-full
//                           bg-white/[0.05]
//                           border border-white/10
//                           backdrop-blur-xl
//                         "
//                       >

//                         <div className="w-2 h-2 rounded-full bg-cyan-300" />

//                         <span
//                           className="
//                             text-[10px]
//                             uppercase
//                             tracking-[0.26em]
//                             text-slate-300
//                           "
//                         >
//                           {item.label}
//                         </span>

//                       </div>

//                       {/* TITLE */}

//                       <h3
//                         className="
//                           mt-10
//                           text-4xl
//                           md:text-5xl
//                           font-semibold
//                           leading-[0.95]
//                           tracking-[-0.05em]
//                           text-white
//                         "
//                       >
//                         {item.title}
//                       </h3>

//                       {/* DESCRIPTION */}

//                       <p
//                         className="
//                           mt-8
//                           text-lg
//                           leading-relaxed
//                           text-slate-300
//                         "
//                       >
//                         {item.description}
//                       </p>

//                       {/* STATS */}

//                       <div
//                         className="
//                           flex
//                           flex-wrap
//                           gap-4
//                           mt-10
//                         "
//                       >

//                         {item.stats.map((stat, idx) => (
//                           <div
//                             key={idx}
//                             className="
//                               px-5
//                               py-3
//                               rounded-full
//                               bg-white/[0.05]
//                               border border-white/10
//                               backdrop-blur-xl
//                             "
//                           >

//                             <span
//                               className="
//                                 text-[11px]
//                                 uppercase
//                                 tracking-[0.2em]
//                                 text-slate-300
//                               "
//                             >
//                               {stat}
//                             </span>

//                           </div>
//                         ))}

//                       </div>

//                     </div>

//                   </motion.div>

//                 </div>

//                 {/* ================================================= */}
//                 {/* IMAGE SIDE */}
//                 {/* ================================================= */}

//                 <div
//                   className={`
//                     relative
//                     ${
//                       index % 2 === 0
//                         ? "lg:pl-24"
//                         : "lg:order-1 lg:pr-24"
//                     }
//                   `}
//                 >

//                   {/* OUTER GLOW */}

//                   <div
//                     className="
//                       absolute
//                       -inset-10
//                       bg-gradient-to-r
//                       from-cyan-500/20
//                       to-emerald-500/10
//                       blur-[90px]
//                       rounded-[60px]
//                     "
//                   />

//                   {/* IMAGE CONTAINER */}

//                   <motion.div
//                     whileHover={{
//                       y: -10,
//                     }}
//                     className="
//                       relative
//                       overflow-hidden
//                       rounded-[40px]
//                       border border-white/10
//                       shadow-[0_0_70px_rgba(34,211,238,0.12)]
//                     "
//                   >

//                     {/* IMAGE */}

//                     <motion.img
//                       whileHover={{
//                         scale: 1.04,
//                       }}
//                       transition={{
//                         duration: 1,
//                       }}
//                       src={item.image}
//                       alt={item.title}
//                       className="
//                         w-full
//                         h-[520px]
//                         object-cover
//                       "
//                     />

//                     {/* OVERLAY */}

//                     <div
//                       className="
//                         absolute inset-0
//                         bg-gradient-to-t
//                         from-[#081219]
//                         via-[#081219]/10
//                         to-transparent
//                       "
//                     />

//                     {/* GLASS REFLECTION */}

//                     <div
//                       className="
//                         absolute inset-0
//                         bg-gradient-to-br
//                         from-white/10
//                         via-transparent
//                         to-transparent
//                         opacity-50
//                       "
//                     />

//                   </motion.div>

//                 </div>

//               </motion.div>
//             ))}

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

//       {/* FOG SEPARATOR */}

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

// export default EnvironmentalTimeline;



import { motion } from "framer-motion";

import timelineImg1 from "../../assets/images/Wastely_hero_2.jpeg";
import timelineImg2 from "../../assets/images/Wastely_hero_3.jpeg";
import timelineImg3 from "../../assets/images/Wastely_hero_4.jpeg";
import timelineImg4 from "../../assets/images/Wastely_hero_5.jpeg";
import timelineImg5 from "../../assets/images/Wastely_hero_7.jpeg";

const timelineData = [
  {
    number: "01",
    title: "Research & Analysis",
    label: "Water Intelligence",
    description:
      "Every restoration system begins with ecosystem diagnostics, environmental mapping and intelligent water analysis designed to identify sustainable infrastructure opportunities.",
    image: timelineImg1,
    stats: [
      "AI Diagnostics",
      "Environmental Mapping",
      "Data Optimization",
    ],
  },

  {
    number: "02",
    title: "Infrastructure Engineering",
    label: "Advanced Systems",
    description:
      "We design future-ready treatment infrastructure with circular recovery systems, smart automation and intelligent engineering built for environmental resilience.",
    image: timelineImg2,
    stats: [
      "Smart Automation",
      "Circular Systems",
      "98% Recovery",
    ],
  },

  {
    number: "03",
    title: "Water Recovery",
    label: "Circular Recovery",
    description:
      "Our recovery systems transform wastewater into reusable environmental resources through advanced recycling technologies and sustainable reuse infrastructure.",
    image: timelineImg3,
    stats: [
      "120M+ Recycled",
      "Industrial Reuse",
      "Water Circularity",
    ],
  },

  {
    number: "04",
    title: "Ecological Restoration",
    label: "Environmental Balance",
    description:
      "Every engineered system is designed to restore ecosystem balance, reduce environmental impact and strengthen regenerative sustainability outcomes.",
    image: timelineImg4,
    stats: [
      "Ecosystem Recovery",
      "Environmental Balance",
      "Regenerative Impact",
    ],
  },

  {
    number: "05",
    title: "Future Sustainability",
    label: "Long-Term Resilience",
    description:
      "We create resilient environmental infrastructure designed to support future communities, sustainable industries and intelligent ecological transformation.",
    image: timelineImg5,
    stats: [
      "Future Infrastructure",
      "Community Resilience",
      "Sustainable Futures",
    ],
  },
];

const particles = Array.from({ length: 16 });

const EnvironmentalTimeline = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#081219] py-24 sm:py-28 lg:py-40">

      {/* ====================================================== */}
      {/* ATMOSPHERIC BACKGROUND */}
      {/* ====================================================== */}

      {/* TOP GLOW */}

      <div
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
          lg:top-[-300px]
          lg:left-[-200px]
          lg:h-[1000px]
          lg:w-[1000px]
          lg:blur-[180px]
        "
      />

      {/* BOTTOM GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          right-[-120px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-emerald-500/8
          blur-[90px]
          lg:bottom-[-350px]
          lg:right-[-250px]
          lg:h-[1200px]
          lg:w-[1200px]
          lg:blur-[180px]
        "
      />

      {/* ====================================================== */}
      {/* RADIAL ATMOSPHERE */}
      {/* ====================================================== */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]
        "
      />

      {/* ====================================================== */}
      {/* GRID OVERLAY */}
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
          backgroundSize: "90px 90px",
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
          via-cyan-400/10
          to-transparent
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
          w-px
          bg-gradient-to-b
          from-transparent
          via-emerald-400/10
          to-transparent
        "
      />

      {/* ====================================================== */}
      {/* GRAIN TEXTURE */}
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
              bg-cyan-200/20
              blur-md
            "
            style={{
              width: `${4 + (i % 6)}px`,
              height: `${4 + (i % 6)}px`,
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
          top-[4%]
          -translate-x-1/2
          whitespace-nowrap
          select-none
          text-[70px]
          sm:text-[110px]
          md:text-[200px]
          xl:text-[380px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.015]
        "
      >
        TRANSFORM
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
              border border-cyan-400/20
              bg-cyan-500/10
              px-5
              py-2.5
              backdrop-blur-2xl
              sm:mb-10
              sm:px-6
              sm:py-3
            "
          >

            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-cyan-200
                sm:text-[11px]
              "
            >
              Environmental Transformation
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
              xl:text-[7rem]
            "
          >
            The Journey Of

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-cyan-300
                via-cyan-200
                to-emerald-400
                bg-clip-text
                text-transparent
                sm:mt-3
              "
            >
              Ecological
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
            "
          >
            Wastely Aqua transforms environmental
            infrastructure into intelligent regenerative
            systems through advanced engineering, circular
            recovery and ecosystem restoration strategies.
          </motion.p>

        </div>

        {/* ================================================== */}
        {/* TIMELINE */}
        {/* ================================================== */}

        <div className="relative mt-20 sm:mt-24 lg:mt-32">

          {/* CENTER LINE */}

          <div
            className="
              absolute
              left-1/2
              top-0
              bottom-0
              hidden lg:block
              -translate-x-1/2
            "
          >

            {/* GLOW */}

            <div
              className="
                absolute
                inset-0
                w-[4px]
                rounded-full
                bg-cyan-400/20
                blur-[12px]
              "
            />

            {/* LINE */}

            <div
              className="
                relative
                h-full
                w-px
                bg-gradient-to-b
                from-cyan-400/40
                via-emerald-400/20
                to-transparent
              "
            />

          </div>

          {/* TIMELINE ITEMS */}

          <div className="space-y-16 sm:space-y-20 lg:space-y-32">

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
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
                  relative
                  grid
                  items-center
                  gap-10
                  lg:grid-cols-2
                  lg:gap-20
                "
              >

                {/* ================================================= */}
                {/* CENTER NODE */}
                {/* ================================================= */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-20
                    hidden
                    h-16
                    w-16
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.06]
                    backdrop-blur-2xl
                    shadow-[0_0_40px_rgba(34,211,238,0.15)]
                    lg:flex
                  "
                >

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-gradient-to-br
                      from-cyan-500/20
                      to-emerald-500/10
                    "
                  />

                  <div
                    className="
                      relative z-10
                      h-3
                      w-3
                      rounded-full
                      bg-cyan-300
                      shadow-[0_0_20px_rgba(34,211,238,0.9)]
                    "
                  />

                </div>

                {/* ================================================= */}
                {/* CONTENT SIDE */}
                {/* ================================================= */}

                <div
                  className={`
                    ${
                      index % 2 === 0
                        ? "lg:pr-24"
                        : "lg:order-2 lg:pl-24"
                    }
                  `}
                >

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    className="
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border border-white/10
                      bg-white/[0.04]
                      p-6
                      backdrop-blur-2xl
                      shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                      sm:p-8
                      lg:rounded-[40px]
                      lg:p-14
                    "
                  >

                    {/* GLOW */}

                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-br
                        from-cyan-500/10
                        to-emerald-500/5
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
                        right-4
                        top-2
                        select-none
                        text-[70px]
                        sm:text-[100px]
                        md:text-[140px]
                        font-black
                        leading-none
                        tracking-[-0.08em]
                        text-white/[0.04]
                      "
                    >
                      {item.number}
                    </div>

                    <div className="relative z-10">

                      {/* LABEL */}

                      <div
                        className="
                          inline-flex
                          items-center
                          gap-3
                          rounded-full
                          border border-white/10
                          bg-white/[0.05]
                          px-4
                          py-2.5
                          backdrop-blur-xl
                          sm:px-5
                          sm:py-3
                        "
                      >

                        <div className="h-2 w-2 rounded-full bg-cyan-300" />

                        <span
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.26em]
                            text-slate-300
                          "
                        >
                          {item.label}
                        </span>

                      </div>

                      {/* TITLE */}

                      <h3
                        className="
                          mt-8
                          text-[2.3rem]
                          font-semibold
                          leading-[0.95]
                          tracking-[-0.05em]
                          text-white
                          sm:text-4xl
                          lg:text-5xl
                        "
                      >
                        {item.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-6
                          text-[15px]
                          leading-relaxed
                          text-slate-300
                          sm:mt-8
                          sm:text-lg
                        "
                      >
                        {item.description}
                      </p>

                      {/* STATS */}

                      <div
                        className="
                          mt-8
                          flex
                          flex-wrap
                          gap-3
                          sm:mt-10
                          sm:gap-4
                        "
                      >

                        {item.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className="
                              rounded-full
                              border border-white/10
                              bg-white/[0.05]
                              px-4
                              py-2.5
                              backdrop-blur-xl
                              sm:px-5
                              sm:py-3
                            "
                          >

                            <span
                              className="
                                text-[10px]
                                uppercase
                                tracking-[0.2em]
                                text-slate-300
                                sm:text-[11px]
                              "
                            >
                              {stat}
                            </span>

                          </div>
                        ))}

                      </div>

                    </div>

                  </motion.div>

                </div>

                {/* ================================================= */}
                {/* IMAGE SIDE */}
                {/* ================================================= */}

                <div
                  className={`
                    relative
                    ${
                      index % 2 === 0
                        ? "lg:pl-24"
                        : "lg:order-1 lg:pr-24"
                    }
                  `}
                >

                  {/* OUTER GLOW */}

                  <div
                    className="
                      absolute
                      -inset-6
                      rounded-[40px]
                      bg-gradient-to-r
                      from-cyan-500/15
                      to-emerald-500/10
                      blur-[60px]
                      lg:-inset-10
                      lg:rounded-[60px]
                      lg:blur-[90px]
                    "
                  />

                  {/* IMAGE CONTAINER */}

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    className="
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border border-white/10
                      shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                      lg:rounded-[40px]
                    "
                  >

                    {/* IMAGE */}

                    <motion.img
                      whileHover={{
                        scale: 1.04,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      src={item.image}
                      alt={item.title}
                      className="
                        h-[320px]
                        w-full
                        object-cover
                        sm:h-[420px]
                        lg:h-[520px]
                      "
                    />

                    {/* OVERLAY */}

                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-[#081219]
                        via-[#081219]/10
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
                        opacity-50
                      "
                    />

                  </motion.div>

                </div>

              </motion.div>
            ))}

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

      {/* FOG SEPARATOR */}

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

export default EnvironmentalTimeline;