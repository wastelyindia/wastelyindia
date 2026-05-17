// import { motion } from "framer-motion";

// import {
//   Activity,
//   ArrowRight,
//   Droplets,
//   Fan,
//   Gauge,
//   Layers3,
//   Settings2,
//   Waves,
// } from "lucide-react";

// import MechanicalHero from "../../assets/images/mechanical-main.png";
// import NanoImg from "../../assets/images/mechanical-nano.png";
// import DryerImg from "../../assets/images/mechanical-dryer.png";
// import OxygenImg from "../../assets/images/mechanical-oxygen.png";

// const systems = [
//   {
//     title: "Nano Bubble Aeration",
//     description:
//       "Ultra-fine oxygen transfer systems engineered for high dissolved oxygen efficiency, algae reduction and ecological recovery.",
//     icon: Waves,
//   },

//   {
//     title: "LTSD Sludge Dryer",
//     description:
//       "Low-temperature sludge drying infrastructure reducing moisture, volume and disposal costs for industrial wastewater systems.",
//     icon: Layers3,
//   },

//   {
//     title: "Oxygenation Systems",
//     description:
//       "Advanced environmental oxygenation infrastructure designed for reservoirs, lakes and wastewater treatment facilities.",
//     icon: Droplets,
//   },
// ];

// const metrics = [
//   {
//     value: "80%",
//     label: "Moisture Reduction",
//   },

//   {
//     value: "24/7",
//     label: "Continuous Operation",
//   },

//   {
//     value: "High DO",
//     label: "Oxygen Efficiency",
//   },

//   {
//     value: "50%",
//     label: "Energy Savings",
//   },
// ];

// const MechanicalSystems = () => {
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
//      id="mechanical" className="relative overflow-hidden bg-[#081219] py-32">
//       {/* BACKGROUND GRID */}
//       <div
//         className="
//           absolute inset-0
//           opacity-[0.03]
//           bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
//           bg-[size:110px_110px]
//         "
//       />

//       {/* INDUSTRIAL GLOW */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute left-[-200px] top-[0%]
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
//             bg-blue-500/10
//             blur-[180px]
//           "
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         {/* TOP SPLIT */}
//         <div className="grid gap-10 xl:grid-cols-[0.85fr_1.15fr]">
//           {/* LEFT PANEL */}
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
//               src={MechanicalHero}
//               alt="Mechanical Systems"
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
//                 from-[#081219]
//                 via-[#081219]/60
//                 to-[#081219]/20
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
//               <div>
//                 {/* BADGE */}
//                 <div
//                   className="
//                     inline-flex items-center gap-3
//                     rounded-full
//                     border border-cyan-400/20
//                     bg-cyan-400/10
//                     px-5 py-2
//                     backdrop-blur-xl
//                   "
//                 >
//                   <Settings2
//                     size={14}
//                     className="text-cyan-300"
//                   />

//                   <span
//                     className="
//                       text-xs
//                       uppercase
//                       tracking-[0.24em]
//                       text-cyan-200
//                     "
//                   >
//                     Mechanical Infrastructure
//                   </span>
//                 </div>

//                 {/* TITLE */}
//                 <h2
//                   className="
//                     mt-10
//                     text-5xl
//                     md:text-7xl
//                     font-black
//                     leading-[0.92]
//                     tracking-[-0.05em]
//                     text-white
//                   "
//                 >
//                   Engineered
//                   <span
//                     className="
//                       block
//                       bg-gradient-to-r
//                       from-cyan-300
//                       via-cyan-400
//                       to-blue-400
//                       bg-clip-text
//                       text-transparent
//                     "
//                   >
//                     Environmental
//                   </span>

//                   Systems
//                 </h2>

//                 {/* DESC */}
//                 <p
//                   className="
//                     mt-10
//                     max-w-xl
//                     text-lg
//                     leading-relaxed
//                     text-slate-300
//                   "
//                 >
//                   Industrial-scale aeration, oxygenation and
//                   sludge processing technologies designed for
//                   intelligent water infrastructure and
//                   high-efficiency environmental restoration.
//                 </p>
//               </div>

//               {/* BOTTOM INFO */}
//               <div
//                 className="
//                   rounded-[32px]
//                   border border-white/10
//                   bg-[#081219]/60
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
//                     <Gauge
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
//                       High Efficiency Engineering
//                     </p>

//                     <h4
//                       className="
//                         mt-3
//                         text-2xl
//                         font-bold
//                         text-white
//                       "
//                     >
//                       Industrial Water Optimization
//                     </h4>

//                     <p
//                       className="
//                         mt-4
//                         leading-relaxed
//                         text-slate-400
//                       "
//                     >
//                       Advanced mechanical systems engineered
//                       for long-term performance and integrated
//                       environmental sustainability.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-6">
//             {/* TOP INFO STRIP */}
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
//                 relative
//                 overflow-hidden
//                 rounded-[38px]
//                 border border-white/10
//                 bg-white/5
//                 backdrop-blur-2xl
//                 p-8
//               "
//             >
//               {/* BG */}
//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-r
//                   from-cyan-400/10
//                   via-transparent
//                   to-blue-400/10
//                 "
//               />

//               <div
//                 className="
//                   relative z-10
//                   flex flex-col gap-8
//                   lg:flex-row lg:items-center lg:justify-between
//                 "
//               >
//                 {/* LEFT */}
//                 <div className="max-w-2xl">
//                   <p
//                     className="
//                       text-xs
//                       uppercase
//                       tracking-[0.2em]
//                       text-cyan-200
//                     "
//                   >
//                     Integrated Mechanical Technologies
//                   </p>

//                   <h3
//                     className="
//                       mt-4
//                       text-4xl
//                       font-black
//                       leading-tight
//                       text-white
//                     "
//                   >
//                     Oxygenation, Aeration &
//                     Sludge Infrastructure
//                   </h3>
//                 </div>

//                 {/* RIGHT */}
//                 <div className="flex flex-wrap gap-3">
//                   {[
//                     "Nano Bubble",
//                     "LTSD Dryer",
//                     "Aeration",
//                     "Oxygenation",
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className="
//                         rounded-full
//                         border border-white/10
//                         bg-white/5
//                         px-4 py-2
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
//             </motion.div>

//             {/* SYSTEM CARDS */}
//             <div className="grid gap-6 md:grid-cols-3">
//               {systems.map((item, index) => {
//                 const Icon = item.icon;

//                 const images = [
//                   NanoImg,
//                   DryerImg,
//                   OxygenImg,
//                 ];

//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{
//                       opacity: 0,
//                       y: 30,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     transition={{
//                       duration: 0.7,
//                       delay: index * 0.08,
//                     }}
//                     viewport={{ once: true }}
//                     className="
//                       group
//                       relative
//                       overflow-hidden
//                       rounded-[36px]
//                       border border-white/10
//                       bg-white/5
//                       backdrop-blur-2xl
//                     "
//                   >
//                     {/* IMAGE */}
//                     <div className="relative h-[260px] overflow-hidden">
//                       <img
//                         src={images[index]}
//                         alt={item.title}
//                         className="
//                           h-full w-full
//                           object-cover
//                           transition-transform duration-700
//                           group-hover:scale-105
//                         "
//                       />

//                       <div
//                         className="
//                           absolute inset-0
//                           bg-gradient-to-t
//                           from-[#081219]
//                           via-[#081219]/20
//                           to-transparent
//                         "
//                       />

//                       {/* ICON */}
//                       <div
//                         className="
//                           absolute left-5 top-5
//                           flex h-16 w-16
//                           items-center justify-center
//                           rounded-2xl
//                           border border-white/10
//                           bg-[#081219]/60
//                           backdrop-blur-xl
//                         "
//                       >
//                         <Icon
//                           size={30}
//                           className="text-cyan-300"
//                         />
//                       </div>
//                     </div>

//                     {/* CONTENT */}
//                     <div className="p-7">
//                       <h3
//                         className="
//                           text-2xl
//                           font-black
//                           leading-tight
//                           text-white
//                         "
//                       >
//                         {item.title}
//                       </h3>

//                       <p
//                         className="
//                           mt-5
//                           leading-relaxed
//                           text-slate-300
//                         "
//                       >
//                         {item.description}
//                       </p>

//                       {/* FOOTER */}
//                       <div
//                         className="
//                           mt-8
//                           flex items-center justify-between
//                         "
//                       >
//                         <div
//                           className="
//                             flex items-center gap-2
//                             text-xs
//                             uppercase
//                             tracking-[0.18em]
//                             text-slate-400
//                           "
//                         >
//                           <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                           Industrial Systems
//                         </div>

//                         <ArrowRight
//                           size={20}
//                           className="
//                             text-cyan-300
//                             transition-transform duration-300
//                             group-hover:translate-x-1
//                           "
//                         />
//                       </div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* METRICS PANEL */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[40px]
//                 border border-white/10
//                 bg-white/5
//                 backdrop-blur-2xl
//                 p-10
//               "
//             >
//               {/* BACKGROUND */}
//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-br
//                   from-cyan-400/10
//                   via-transparent
//                   to-blue-400/10
//                 "
//               />

//               <div
//                 className="
//                   relative z-10
//                   grid
//                   gap-8
//                   md:grid-cols-2
//                   xl:grid-cols-4
//                 "
//               >
//                 {metrics.map((item, index) => (
//                   <div key={index}>
//                     <h3
//                       className="
//                         text-5xl
//                         font-black
//                         leading-none
//                         bg-gradient-to-r
//                         from-cyan-300
//                         to-blue-300
//                         bg-clip-text
//                         text-transparent
//                       "
//                     >
//                       {item.value}
//                     </h3>

//                     <p
//                       className="
//                         mt-4
//                         text-slate-300
//                       "
//                     >
//                       {item.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default MechanicalSystems;


import { motion } from "framer-motion";

import {
  ArrowRight,
  Droplets,
  Gauge,
  Layers3,
  Settings2,
  Waves,
} from "lucide-react";

import MechanicalHero from "../../assets/images/mechanical-main.png";
import NanoImg from "../../assets/images/mechanical-nano.png";
import DryerImg from "../../assets/images/mechanical-dryer.png";
import OxygenImg from "../../assets/images/mechanical-oxygen.png";

const systems = [
  {
    title: "Nano Bubble Aeration",
    description:
      "Ultra-fine oxygen transfer systems engineered for high dissolved oxygen efficiency, algae reduction and ecological recovery.",
    icon: Waves,
  },

  {
    title: "LTSD Sludge Dryer",
    description:
      "Low-temperature sludge drying infrastructure reducing moisture, volume and disposal costs for industrial wastewater systems.",
    icon: Layers3,
  },

  {
    title: "Oxygenation Systems",
    description:
      "Advanced environmental oxygenation infrastructure designed for reservoirs, lakes and wastewater treatment facilities.",
    icon: Droplets,
  },
];

const metrics = [
  {
    value: "80%",
    label: "Moisture Reduction",
  },

  {
    value: "24/7",
    label: "Continuous Operation",
  },

  {
    value: "High DO",
    label: "Oxygen Efficiency",
  },

  {
    value: "50%",
    label: "Energy Savings",
  },
];

const MechanicalSystems = () => {
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
      id="mechanical"
      className="
        relative
        overflow-hidden
        bg-[#081219]
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
          bg-[size:110px_110px]
        "
      />

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* CYAN */}
        <div
          className="
            absolute left-[-200px] top-[0%]
            h-[700px] w-[700px]
            rounded-full
            bg-cyan-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />

        {/* BLUE */}
        <div
          className="
            absolute right-[-150px] bottom-[-100px]
            h-[650px] w-[650px]
            rounded-full
            bg-blue-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* MAIN GRID */}
        <div
          className="
            grid gap-6 md:gap-8 xl:gap-10
            xl:grid-cols-[0.85fr_1.15fr]
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
              src={MechanicalHero}
              alt="Mechanical Systems"
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
                from-[#081219]/95
                via-[#081219]/65
                to-[#081219]/25
              "
            />

            {/* CONTENT */}
            <div
              className="
                relative z-10
                flex h-full flex-col justify-between

                min-h-[620px]
                sm:min-h-[720px]

                p-6 sm:p-8 md:p-10
              "
            >
              {/* TOP */}
              <div>
                {/* BADGE */}
                <div
                  className="
                    inline-flex items-center gap-3
                    rounded-full
                    border border-cyan-400/20
                    bg-cyan-400/10
                    px-5 py-2
                    backdrop-blur-xl
                  "
                >
                  <Settings2
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
                    Mechanical Infrastructure
                  </span>
                </div>

                {/* TITLE */}
                <h2
                  className="
                    mt-8 md:mt-10

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
                  Engineered

                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-cyan-300
                      via-cyan-400
                      to-blue-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Environmental
                  </span>

                  Systems
                </h2>

                {/* DESC */}
                <p
                  className="
                    mt-8 md:mt-10
                    max-w-xl

                    text-base
                    sm:text-lg

                    leading-relaxed
                    text-slate-300
                  "
                >
                  Industrial-scale aeration, oxygenation and
                  sludge processing technologies designed for
                  intelligent water infrastructure and
                  high-efficiency environmental restoration.
                </p>
              </div>

              {/* BOTTOM INFO */}
              <div
                className="
                  mt-10

                  rounded-[24px]
                  md:rounded-[32px]

                  border border-white/10
                  bg-[#081219]/70

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
                    <Gauge
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
                      High Efficiency Engineering
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
                      Industrial Water Optimization
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
                      Advanced mechanical systems engineered
                      for long-term performance and integrated
                      environmental sustainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-5 md:space-y-6">
            {/* TOP STRIP */}
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
                relative overflow-hidden

                rounded-[28px]
                md:rounded-[34px]
                xl:rounded-[38px]

                border border-white/10
                bg-white/[0.05]

                p-6 md:p-8

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
                  to-blue-400/10
                "
              />

              <div
                className="
                  relative z-10
                  flex flex-col gap-6 md:gap-8
                  lg:flex-row lg:items-center lg:justify-between
                "
              >
                {/* LEFT */}
                <div className="max-w-2xl">
                  <p
                    className="
                      text-[10px]
                      sm:text-xs
                      uppercase
                      tracking-[0.2em]
                      text-cyan-200
                    "
                  >
                    Integrated Mechanical Technologies
                  </p>

                  <h3
                    className="
                      mt-4

                      text-3xl
                      sm:text-4xl

                      font-black
                      leading-tight
                      text-white
                    "
                  >
                    Oxygenation, Aeration &
                    Sludge Infrastructure
                  </h3>
                </div>

                {/* RIGHT */}
                <div className="flex flex-wrap gap-3">
                  {[
                    "Nano Bubble",
                    "LTSD Dryer",
                    "Aeration",
                    "Oxygenation",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/[0.05]

                        px-4 py-2.5

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
            </motion.div>

            {/* SYSTEM CARDS */}
            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              {systems.map((item, index) => {
                const Icon = item.icon;

                const images = [
                  NanoImg,
                  DryerImg,
                  OxygenImg,
                ];

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
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="
                      group
                      relative
                      overflow-hidden

                      rounded-[28px]
                      md:rounded-[32px]
                      xl:rounded-[36px]

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
                        src={images[index]}
                        alt={item.title}
                        className="
                          h-[240px]
                          sm:h-[260px]
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
                          from-[#081219]/95
                          via-[#081219]/30
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
                    <div className="p-6 md:p-7">
                      {/* TITLE */}
                      <h3
                        className="
                          text-2xl
                          sm:text-[28px]
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

                      {/* FOOTER */}
                      <div
                        className="
                          mt-8
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

                          Industrial Systems
                        </div>

                        <ArrowRight
                          size={20}
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

            {/* METRICS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="
                relative overflow-hidden

                rounded-[28px]
                md:rounded-[36px]
                xl:rounded-[40px]

                border border-white/10
                bg-white/[0.05]

                p-6 sm:p-8 md:p-10

                backdrop-blur-2xl
              "
            >
              {/* BG */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-cyan-400/10
                  via-transparent
                  to-blue-400/10
                "
              />

              <div
                className="
                  relative z-10
                  grid gap-8

                  grid-cols-2
                  xl:grid-cols-4
                "
              >
                {metrics.map((item, index) => (
                  <div key={index}>
                    <h3
                      className="
                        text-3xl
                        sm:text-4xl
                        md:text-5xl

                        font-black
                        leading-none

                        bg-gradient-to-r
                        from-cyan-300
                        to-blue-300
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
                        text-slate-300
                      "
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MechanicalSystems;