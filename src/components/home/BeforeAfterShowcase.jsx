// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Activity,
//   ArrowRight,
//   Droplets,
//   Fish,
//   Sparkles,
//   Waves,
// } from "lucide-react";

// import ArunImg from "../../assets/images/arun-sagar.jpg";
// import KanglaImg from "../../assets/images/kangla-moats.jpg";
// import NingthemImg from "../../assets/images/ningthem-pukhri.jpg";
// import YaiskulImg from "../../assets/images/yaiskul-lake.jpg";

// const showcaseProjects = [
//   {
//     title: "Arun Sagar Restoration",
//     location: "Integrated Lake Rejuvenation",
//     image: ArunImg,
//     metrics: [
//       "DO Improvement",
//       "Algae Reduction",
//       "Water Clarity",
//     ],
//   },

//   {
//     title: "Kangla Moats",
//     location: "Historic Water Restoration",
//     image: KanglaImg,
//     metrics: [
//       "Ecological Recovery",
//       "Odor Reduction",
//       "Smart Monitoring",
//     ],
//   },

//   {
//     title: "Ningthem Pukhri",
//     location: "Urban Pond Rejuvenation",
//     image: NingthemImg,
//     metrics: [
//       "Fish Habitat",
//       "DO Stabilization",
//       "Sludge Reduction",
//     ],
//   },

//   {
//     title: "Yaiskul Restoration",
//     location: "Ecological Water Restoration",
//     image: YaiskulImg,
//     metrics: [
//       "Algae Control",
//       "Water Circulation",
//       "Clarity Recovery",
//     ],
//   },
// ];

// const comparisonStats = [
//   {
//     icon: Droplets,
//     value: "DO Improved",
//   },

//   {
//     icon: Activity,
//     value: "Algae Reduced",
//   },

//   {
//     icon: Sparkles,
//     value: "Water Clarity Restored",
//   },

//   {
//     icon: Fish,
//     value: "Habitat Recovery",
//   },
// ];

// const BeforeAfterShowcase = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeProject = showcaseProjects[activeIndex];

//   return (
//     <section className="relative overflow-hidden bg-[#081219] py-32">
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
//             <Waves
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
//               Before / After Transformation
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
//             Real Water Bodies.
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
//               Measurable Restoration.
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
//             Integrated rejuvenation systems transforming
//             polluted lakes and urban water bodies through
//             oxygenation, ecological restoration, algae control
//             and intelligent monitoring.
//           </p>
//         </div>

//         {/* TOP STATS */}
//         <div
//           className="
//             mt-16
//             grid
//             grid-cols-2
//             xl:grid-cols-4
//             gap-5
//           "
//         >
//           {comparisonStats.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.08,
//                 }}
//                 viewport={{ once: true }}
//                 className="
//                   rounded-[28px]
//                   border border-white/10
//                   bg-white/5
//                   backdrop-blur-2xl
//                   p-6
//                 "
//               >
//                 <div
//                   className="
//                     flex h-16 w-16
//                     items-center justify-center
//                     rounded-2xl
//                     border border-cyan-400/20
//                     bg-cyan-400/10
//                   "
//                 >
//                   <Icon
//                     size={30}
//                     className="text-cyan-300"
//                   />
//                 </div>

//                 <h3
//                   className="
//                     mt-6
//                     text-xl
//                     md:text-2xl
//                     font-black
//                     leading-tight
//                     text-white
//                   "
//                 >
//                   {item.value}
//                 </h3>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* MAIN SHOWCASE */}
//         <div
//           className="
//             mt-20
//             grid
//             xl:grid-cols-[0.45fr_0.55fr]
//             gap-8
//           "
//         >
//           {/* PROJECT LIST */}
//           <div className="space-y-5">
//             {showcaseProjects.map((project, index) => (
//               <motion.button
//                 key={index}
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.08,
//                 }}
//                 viewport={{ once: true }}
//                 onClick={() => setActiveIndex(index)}
//                 className={`
//                   group
//                   relative
//                   w-full
//                   overflow-hidden
//                   rounded-[32px]
//                   border
//                   backdrop-blur-2xl
//                   p-7
//                   text-left
//                   transition-all duration-500

//                   ${
//                     activeIndex === index
//                       ? "border-cyan-400/30 bg-cyan-400/10"
//                       : "border-white/10 bg-white/5 hover:border-cyan-400/20"
//                   }
//                 `}
//               >
//                 {/* GLOW */}
//                 <div
//                   className="
//                     absolute inset-0
//                     opacity-0
//                     group-hover:opacity-100
//                     transition-all duration-500
//                     bg-gradient-to-br
//                     from-cyan-400/10
//                     to-emerald-400/5
//                   "
//                 />

//                 <div className="relative z-10">
//                   {/* TOP */}
//                   <div className="flex items-start justify-between gap-5">
//                     <div>
//                       <p
//                         className="
//                           text-sm
//                           uppercase
//                           tracking-[0.18em]
//                           text-cyan-200
//                         "
//                       >
//                         {project.location}
//                       </p>

//                       <h3
//                         className="
//                           mt-4
//                           text-2xl
//                           md:text-3xl
//                           font-black
//                           leading-tight
//                           text-white
//                         "
//                       >
//                         {project.title}
//                       </h3>
//                     </div>

//                     <div
//                       className={`
//                         flex h-14 w-14
//                         items-center justify-center
//                         rounded-2xl
//                         border

//                         ${
//                           activeIndex === index
//                             ? "border-cyan-400/30 bg-cyan-400/10"
//                             : "border-white/10 bg-white/5"
//                         }
//                       `}
//                     >
//                       <ArrowRight
//                         size={24}
//                         className="text-cyan-300"
//                       />
//                     </div>
//                   </div>

//                   {/* METRICS */}
//                   <div className="mt-7 flex flex-wrap gap-3">
//                     {project.metrics.map((metric, idx) => (
//                       <div
//                         key={idx}
//                         className="
//                           rounded-full
//                           border border-white/10
//                           bg-white/5
//                           px-4 py-2
//                           text-sm
//                           text-slate-200
//                           backdrop-blur-xl
//                         "
//                       >
//                         {metric}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.button>
//             ))}
//           </div>

//           {/* VISUAL */}
//           <motion.div
//             key={activeProject.title}
//             initial={{ opacity: 0, scale: 0.96 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="
//               relative
//               overflow-hidden
//               rounded-[40px]
//               border border-white/10
//               bg-white/5
//               backdrop-blur-2xl
//               min-h-[700px]
//             "
//           >
//             {/* IMAGE */}
//             <img
//               src={activeProject.image}
//               alt={activeProject.title}
//               className="
//                 absolute inset-0
//                 h-full w-full
//                 object-cover
//               "
//             />

//             {/* OVERLAYS */}
//             <div
//               className="
//                 absolute inset-0
//                 bg-gradient-to-t
//                 from-[#081219]
//                 via-[#081219]/40
//                 to-[#081219]/10
//               "
//             />

//             <div
//               className="
//                 absolute inset-0
//                 bg-gradient-to-r
//                 from-[#081219]/60
//                 to-transparent
//               "
//             />

//             {/* BEFORE / AFTER LABELS */}
//             <div
//               className="
//                 absolute left-6 right-6 top-6
//                 grid grid-cols-2
//                 gap-4
//               "
//             >
//               {/* BEFORE */}
//               <div
//                 className="
//                   rounded-2xl
//                   border border-red-400/20
//                   bg-[#081219]/70
//                   backdrop-blur-xl
//                   p-5
//                 "
//               >
//                 <p
//                   className="
//                     text-xs
//                     uppercase
//                     tracking-[0.22em]
//                     text-red-300
//                   "
//                 >
//                   Before Restoration
//                 </p>

//                 <h4
//                   className="
//                     mt-3
//                     text-xl
//                     font-bold
//                     text-white
//                   "
//                 >
//                   Polluted Water Body
//                 </h4>

//                 <p
//                   className="
//                     mt-3
//                     text-sm
//                     leading-relaxed
//                     text-slate-300
//                   "
//                 >
//                   Algae bloom, sludge accumulation, low DO
//                   and ecological degradation.
//                 </p>
//               </div>

//               {/* AFTER */}
//               <div
//                 className="
//                   rounded-2xl
//                   border border-emerald-400/20
//                   bg-[#081219]/70
//                   backdrop-blur-xl
//                   p-5
//                 "
//               >
//                 <p
//                   className="
//                     text-xs
//                     uppercase
//                     tracking-[0.22em]
//                     text-emerald-300
//                   "
//                 >
//                   After Restoration
//                 </p>

//                 <h4
//                   className="
//                     mt-3
//                     text-xl
//                     font-bold
//                     text-white
//                   "
//                 >
//                   Ecological Recovery
//                 </h4>

//                 <p
//                   className="
//                     mt-3
//                     text-sm
//                     leading-relaxed
//                     text-slate-300
//                   "
//                 >
//                   Improved oxygenation, restored clarity and
//                   sustainable ecological balance.
//                 </p>
//               </div>
//             </div>

//             {/* BOTTOM INFO */}
//             <div
//               className="
//                 absolute bottom-0 left-0 right-0
//                 p-8 md:p-10
//               "
//             >
//               <div
//                 className="
//                   inline-flex items-center gap-3
//                   rounded-full
//                   border border-cyan-400/20
//                   bg-cyan-400/10
//                   backdrop-blur-xl
//                   px-5 py-2
//                 "
//               >
//                 <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                 <span
//                   className="
//                     text-xs
//                     uppercase
//                     tracking-[0.22em]
//                     text-cyan-200
//                   "
//                 >
//                   Integrated Restoration Project
//                 </span>
//               </div>

//               <h3
//                 className="
//                   mt-6
//                   text-4xl
//                   md:text-5xl
//                   font-black
//                   leading-tight
//                   text-white
//                 "
//               >
//                 {activeProject.title}
//               </h3>

//               <p
//                 className="
//                   mt-4
//                   text-lg
//                   leading-relaxed
//                   text-slate-300
//                 "
//               >
//                 Advanced restoration ecosystem integrating
//                 nano bubble aeration, floating wetlands,
//                 bioremediation and smart monitoring systems.
//               </p>
//             </div>

//             {/* AMBIENT ORB */}
//             <div
//               className="
//                 absolute right-[-80px] bottom-[-80px]
//                 h-[260px] w-[260px]
//                 rounded-full
//                 bg-cyan-500/10
//                 blur-[120px]
//               "
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BeforeAfterShowcase;


import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Droplets,
  Fish,
  Sparkles,
  Waves,
} from "lucide-react";

import ArunImg from "../../assets/images/arun-sagar.jpg";
import KanglaImg from "../../assets/images/kangla-moats.jpg";
import NingthemImg from "../../assets/images/ningthem-pukhri.jpg";
import YaiskulImg from "../../assets/images/yaiskul-lake.jpg";

const showcaseProjects = [
  {
    title: "Arun Sagar Restoration",
    location: "Integrated Lake Rejuvenation",
    image: ArunImg,
    metrics: [
      "DO Improvement",
      "Algae Reduction",
      "Water Clarity",
    ],
  },

  {
    title: "Kangla Moats",
    location: "Historic Water Restoration",
    image: KanglaImg,
    metrics: [
      "Ecological Recovery",
      "Odor Reduction",
      "Smart Monitoring",
    ],
  },

  {
    title: "Ningthem Pukhri",
    location: "Urban Pond Rejuvenation",
    image: NingthemImg,
    metrics: [
      "Fish Habitat",
      "DO Stabilization",
      "Sludge Reduction",
    ],
  },

  {
    title: "Yaiskul Restoration",
    location: "Ecological Water Restoration",
    image: YaiskulImg,
    metrics: [
      "Algae Control",
      "Water Circulation",
      "Clarity Recovery",
    ],
  },
];

const comparisonStats = [
  {
    icon: Droplets,
    value: "DO Improved",
  },

  {
    icon: Activity,
    value: "Algae Reduced",
  },

  {
    icon: Sparkles,
    value: "Water Clarity Restored",
  },

  {
    icon: Fish,
    value: "Habitat Recovery",
  },
];

const BeforeAfterShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = showcaseProjects[activeIndex];

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
            <Waves
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
              Before / After Transformation
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
            Real Water Bodies.

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
              Measurable Restoration.
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
            Integrated rejuvenation systems transforming
            polluted lakes and urban water bodies through
            oxygenation, ecological restoration, algae control
            and intelligent monitoring.
          </p>
        </div>

        {/* STATS */}
        <div
          className="
            mt-12 sm:mt-16
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-4 sm:gap-5
          "
        >
          {comparisonStats.map((item, index) => {
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
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.05]
                  backdrop-blur-2xl
                  p-5 sm:p-6
                "
              >
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

                <h3
                  className="
                    mt-5
                    text-lg sm:text-xl lg:text-2xl
                    font-black
                    leading-tight
                    text-white
                  "
                >
                  {item.value}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* MAIN */}
        <div
          className="
            mt-14 sm:mt-16 lg:mt-20
            grid
            xl:grid-cols-[0.42fr_0.58fr]
            gap-6 lg:gap-8
          "
        >
          {/* LEFT */}
          <div className="space-y-4 sm:space-y-5">
            {showcaseProjects.map((project, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                onClick={() => setActiveIndex(index)}
                className={`
                  group
                  relative
                  w-full
                  overflow-hidden
                  rounded-[28px]
                  border
                  p-5 sm:p-6 lg:p-7
                  text-left
                  backdrop-blur-2xl
                  transition-all duration-500

                  ${
                    activeIndex === index
                      ? "border-cyan-400/30 bg-cyan-400/10"
                      : "border-white/10 bg-white/[0.05] hover:border-cyan-400/20"
                  }
                `}
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
                  {/* TOP */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className="
                          text-[11px] sm:text-xs
                          uppercase
                          tracking-[0.18em]
                          text-cyan-200
                        "
                      >
                        {project.location}
                      </p>

                      <h3
                        className="
                          mt-3 sm:mt-4
                          text-xl sm:text-2xl lg:text-3xl
                          font-black
                          leading-tight
                          tracking-[-0.04em]
                          text-white
                        "
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div
                      className={`
                        flex h-12 w-12 sm:h-14 sm:w-14
                        items-center justify-center
                        rounded-2xl
                        border
                        transition-all duration-300

                        ${
                          activeIndex === index
                            ? "border-cyan-400/30 bg-cyan-400/10"
                            : "border-white/10 bg-white/[0.05]"
                        }
                      `}
                    >
                      <ArrowRight
                        size={22}
                        className="text-cyan-300"
                      />
                    </div>
                  </div>

                  {/* TAGS */}
                  <div className="mt-5 sm:mt-6 flex flex-wrap gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/[0.05]
                          px-3 sm:px-4
                          py-2
                          text-[12px] sm:text-sm
                          text-slate-200
                          backdrop-blur-xl
                        "
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* RIGHT */}
          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="
              relative
              overflow-hidden
              rounded-[32px] sm:rounded-[40px]
              border border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              min-h-[520px]
              sm:min-h-[620px]
              xl:min-h-[720px]
            "
          >
            {/* IMAGE */}
            <img
              src={activeProject.image}
              alt={activeProject.title}
              loading="lazy"
              decoding="async"
              className="
                absolute inset-0
                h-full w-full
                object-cover
              "
            />

            {/* OVERLAYS */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-[#081219]
                via-[#081219]/35
                to-[#081219]/10
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-[#081219]/55
                to-transparent
              "
            />

            {/* LABELS */}
            <div
              className="
                absolute
                left-4 right-4 top-4
                sm:left-6 sm:right-6 sm:top-6
                grid
                grid-cols-1 sm:grid-cols-2
                gap-4
              "
            >
              {/* BEFORE */}
              <div
                className="
                  rounded-2xl
                  border border-red-400/20
                  bg-[#081219]/70
                  p-4 sm:p-5
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[10px] sm:text-xs
                    uppercase
                    tracking-[0.22em]
                    text-red-300
                  "
                >
                  Before Restoration
                </p>

                <h4
                  className="
                    mt-2 sm:mt-3
                    text-lg sm:text-xl
                    font-bold
                    text-white
                  "
                >
                  Polluted Water Body
                </h4>

                <p
                  className="
                    mt-2 sm:mt-3
                    text-sm
                    leading-relaxed
                    text-slate-300
                  "
                >
                  Algae bloom, sludge accumulation and
                  ecological degradation.
                </p>
              </div>

              {/* AFTER */}
              <div
                className="
                  rounded-2xl
                  border border-emerald-400/20
                  bg-[#081219]/70
                  p-4 sm:p-5
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[10px] sm:text-xs
                    uppercase
                    tracking-[0.22em]
                    text-emerald-300
                  "
                >
                  After Restoration
                </p>

                <h4
                  className="
                    mt-2 sm:mt-3
                    text-lg sm:text-xl
                    font-bold
                    text-white
                  "
                >
                  Ecological Recovery
                </h4>

                <p
                  className="
                    mt-2 sm:mt-3
                    text-sm
                    leading-relaxed
                    text-slate-300
                  "
                >
                  Improved oxygenation and restored ecological
                  balance.
                </p>
              </div>
            </div>

            {/* BOTTOM */}
            <div
              className="
                absolute
                bottom-0 left-0 right-0
                p-5 sm:p-8 lg:p-10
              "
            >
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
                <div className="h-2 w-2 rounded-full bg-cyan-400" />

                <span
                  className="
                    text-[10px] sm:text-xs
                    uppercase
                    tracking-[0.22em]
                    text-cyan-200
                  "
                >
                  Integrated Restoration Project
                </span>
              </div>

              <h3
                className="
                  mt-5 sm:mt-6
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-black
                  leading-tight
                  tracking-[-0.05em]
                  text-white
                "
              >
                {activeProject.title}
              </h3>

              <p
                className="
                  mt-3 sm:mt-4
                  max-w-2xl
                  text-[15px]
                  sm:text-lg
                  leading-relaxed
                  text-slate-300
                "
              >
                Advanced restoration ecosystem integrating
                nano bubble aeration, floating wetlands,
                bioremediation and smart monitoring systems.
              </p>
            </div>

            {/* ORB */}
            <div
              className="
                absolute
                right-[-80px]
                bottom-[-80px]
                h-[220px] w-[220px]
                rounded-full
                bg-cyan-500/10
                blur-[120px]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;