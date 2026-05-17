// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Activity,
//   ArrowUpRight,
//   BrainCircuit,
//   Cpu,
//   Droplets,
//   Factory,
//   Flower2,
//   Leaf,
//   Orbit,
//   Radar,
//   Recycle,
//   Waves,
//   Wind,
// } from "lucide-react";

// const featuredTechnologies = [
//   {
//     title: "Nano Bubble Aeration",
//     description:
//       "High-efficiency oxygen transfer systems engineered for lake rejuvenation, wastewater treatment and ecological oxygenation.",
//     icon: Waves,
//     href: "/products/aeration-oxygenation",
//     size: "large",
//     gradient:
//       "from-cyan-400/20 via-cyan-500/5 to-transparent",
//     border: "border-cyan-400/20",
//     text: "text-cyan-300",
//     stats: [
//       "High DO Efficiency",
//       "Micro/Nano Bubble",
//       "Long Retention",
//     ],
//   },

//   {
//     title: "Floating Wetlands",
//     description:
//       "Nature-based ecological restoration systems with integrated aeration, wetland roots and habitat regeneration.",
//     icon: Flower2,
//     href: "/products/floating-wetlands",
//     size: "medium",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//     border: "border-emerald-400/20",
//     text: "text-emerald-300",
//   },

//   {
//     title: "MPC Smart Buoy",
//     description:
//       "AI-powered water intelligence with predictive analytics, chlorophyll monitoring and real-time IoT sensors.",
//     icon: Radar,
//     href: "/products/algae-control-system",
//     size: "medium",
//     gradient:
//       "from-cyan-400/20 via-emerald-500/5 to-transparent",
//     border: "border-cyan-400/20",
//     text: "text-cyan-300",
//   },

//   {
//     title: "Bioremediation",
//     description:
//       "Advanced microbial restoration technology designed for polluted lakes, reservoirs and urban water bodies.",
//     icon: Recycle,
//     href: "/solutions/lake-pond-rejuvenation",
//     size: "wide",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//     border: "border-emerald-400/20",
//     text: "text-emerald-300",
//   },

//   {
//     title: "LTSD Sludge Dryer",
//     description:
//       "Low temperature sludge drying systems for moisture reduction, waste minimization and sustainable sludge reuse.",
//     icon: Factory,
//     href: "/products/sludge-dewatering-unit",
//     size: "medium",
//     gradient:
//       "from-cyan-400/20 via-emerald-500/5 to-transparent",
//     border: "border-cyan-400/20",
//     text: "text-cyan-300",
//   },

//   {
//     title: "Ultrasonic Algae Control",
//     description:
//       "Non-chemical algae suppression technology integrated with intelligent ecological monitoring systems.",
//     icon: Activity,
//     href: "/products/algae-control-system",
//     size: "medium",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//     border: "border-emerald-400/20",
//     text: "text-emerald-300",
//   },
// ];

// const FeaturedTechnologies = () => {
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
//             h-[500px] w-[500px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[180px]
//           "
//         />

//         <div
//           className="
//             absolute right-[-120px] bottom-[10%]
//             h-[500px] w-[500px]
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
//             <Orbit
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
//               Featured Technologies
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
//             Intelligent Technologies
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
//               Powering Restoration
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
//             Advanced oxygenation, ecological restoration,
//             AI-driven monitoring and environmental engineering
//             systems designed for future-ready water
//             infrastructure.
//           </p>
//         </div>

//         {/* TECHNOLOGY GRID */}
//         <div
//           className="
//             mt-20
//             grid
//             grid-cols-1
//             md:grid-cols-2
//             xl:grid-cols-12
//             gap-6
//             auto-rows-[260px]
//           "
//         >
//           {featuredTechnologies.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 35 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.08,
//                 }}
//                 viewport={{ once: true }}
//                 className={`
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[36px]
//                   border ${item.border}
//                   bg-white/5
//                   backdrop-blur-2xl
//                   transition-all duration-500
//                   hover:-translate-y-2
//                   hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]

//                   ${
//                     item.size === "large"
//                       ? "xl:col-span-7 xl:row-span-2"
//                       : ""
//                   }

//                   ${
//                     item.size === "wide"
//                       ? "xl:col-span-5 xl:row-span-1"
//                       : ""
//                   }

//                   ${
//                     item.size === "medium"
//                       ? "xl:col-span-5 xl:row-span-1"
//                       : ""
//                   }
//                 `}
//               >
//                 {/* GRADIENT */}
//                 <div
//                   className={`
//                     absolute inset-0
//                     opacity-80
//                     bg-gradient-to-br
//                     ${item.gradient}
//                   `}
//                 />

//                 {/* GLOW */}
//                 <div
//                   className="
//                     absolute -right-20 -top-20
//                     h-52 w-52
//                     rounded-full
//                     bg-white/5
//                     blur-3xl
//                   "
//                 />

//                 {/* CONTENT */}
//                 <div
//                   className="
//                     relative z-10
//                     flex h-full flex-col
//                     justify-between
//                     p-8 md:p-10
//                   "
//                 >
//                   {/* TOP */}
//                   <div>
//                     {/* ICON */}
//                     <div
//                       className="
//                         flex h-18 w-18
//                         items-center justify-center
//                         rounded-3xl
//                         border border-white/10
//                         bg-white/5
//                         backdrop-blur-xl
//                       "
//                     >
//                       <Icon
//                         size={34}
//                         className={item.text}
//                       />
//                     </div>

//                     {/* TITLE */}
//                     <h3
//                       className={`
//                         mt-8
//                         ${
//                           item.size === "large"
//                             ? "text-5xl"
//                             : "text-3xl"
//                         }
//                         font-black
//                         leading-tight
//                         text-white
//                       `}
//                     >
//                       {item.title}
//                     </h3>

//                     {/* DESCRIPTION */}
//                     <p
//                       className="
//                         mt-5
//                         max-w-2xl
//                         leading-relaxed
//                         text-slate-300
//                       "
//                     >
//                       {item.description}
//                     </p>

//                     {/* STATS */}
//                     {item.stats && (
//                       <div className="mt-8 flex flex-wrap gap-3">
//                         {item.stats.map((stat, idx) => (
//                           <div
//                             key={idx}
//                             className="
//                               rounded-full
//                               border border-white/10
//                               bg-white/5
//                               px-4 py-2
//                               text-sm
//                               text-slate-200
//                               backdrop-blur-xl
//                             "
//                           >
//                             {stat}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   {/* BOTTOM */}
//                   <div className="mt-10 flex items-center justify-between">
//                     {/* TECH TYPE */}
//                     <div
//                       className="
//                         flex items-center gap-2
//                         text-sm
//                         uppercase
//                         tracking-[0.18em]
//                         text-slate-400
//                       "
//                     >
//                       <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                       Integrated Technology
//                     </div>

//                     {/* LINK */}
//                     <Link
//                       to={item.href}
//                       className="
//                         group/link
//                         flex h-14 w-14
//                         items-center justify-center
//                         rounded-2xl
//                         border border-white/10
//                         bg-white/5
//                         transition-all duration-300
//                         hover:border-cyan-400/30
//                         hover:bg-cyan-400/10
//                       "
//                     >
//                       <ArrowUpRight
//                         size={24}
//                         className="
//                           text-cyan-300
//                           transition-transform duration-300
//                           group-hover/link:translate-x-1
//                           group-hover/link:-translate-y-1
//                         "
//                       />
//                     </Link>
//                   </div>
//                 </div>

//                 {/* LARGE CARD EXTRA VISUAL */}
//                 {item.size === "large" && (
//                   <>
//                     <div
//                       className="
//                         absolute right-[-80px] bottom-[-80px]
//                         h-[280px] w-[280px]
//                         rounded-full
//                         border border-cyan-400/10
//                       "
//                     />

//                     <div
//                       className="
//                         absolute right-10 bottom-10
//                         h-[180px] w-[180px]
//                         rounded-full
//                         border border-white/5
//                       "
//                     />
//                   </>
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedTechnologies;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Factory,
  Flower2,
  Orbit,
  Radar,
  Recycle,
  Waves,
} from "lucide-react";

const featuredTechnologies = [
  {
    title: "Nano Bubble Aeration",
    description:
      "High-efficiency oxygen transfer systems engineered for lake rejuvenation, wastewater treatment and ecological oxygenation.",
    icon: Waves,
    href: "/products/aeration-oxygenation",
    size: "large",
    gradient:
      "from-cyan-400/20 via-cyan-500/5 to-transparent",
    border: "border-cyan-400/20",
    text: "text-cyan-300",
    stats: [
      "High DO Efficiency",
      "Micro/Nano Bubble",
      "Long Retention",
    ],
  },

  {
    title: "Floating Wetlands",
    description:
      "Nature-based ecological restoration systems with integrated aeration, wetland roots and habitat regeneration.",
    icon: Flower2,
    href: "/products/floating-wetlands",
    size: "medium",
    gradient:
      "from-emerald-400/20 via-cyan-500/5 to-transparent",
    border: "border-emerald-400/20",
    text: "text-emerald-300",
  },

  {
    title: "MPC Smart Buoy",
    description:
      "AI-powered water intelligence with predictive analytics, chlorophyll monitoring and real-time IoT sensors.",
    icon: Radar,
    href: "/products/algae-control-system",
    size: "medium",
    gradient:
      "from-cyan-400/20 via-emerald-500/5 to-transparent",
    border: "border-cyan-400/20",
    text: "text-cyan-300",
  },

  {
    title: "Bioremediation",
    description:
      "Advanced microbial restoration technology designed for polluted lakes, reservoirs and urban water bodies.",
    icon: Recycle,
    href: "/solutions/lake-pond-rejuvenation",
    size: "wide",
    gradient:
      "from-emerald-400/20 via-cyan-500/5 to-transparent",
    border: "border-emerald-400/20",
    text: "text-emerald-300",
  },

  {
    title: "LTSD Sludge Dryer",
    description:
      "Low temperature sludge drying systems for moisture reduction, waste minimization and sustainable sludge reuse.",
    icon: Factory,
    href: "/products/sludge-dewatering-unit",
    size: "medium",
    gradient:
      "from-cyan-400/20 via-emerald-500/5 to-transparent",
    border: "border-cyan-400/20",
    text: "text-cyan-300",
  },

  {
    title: "Ultrasonic Algae Control",
    description:
      "Non-chemical algae suppression technology integrated with intelligent ecological monitoring systems.",
    icon: Activity,
    href: "/products/algae-control-system",
    size: "medium",
    gradient:
      "from-emerald-400/20 via-cyan-500/5 to-transparent",
    border: "border-emerald-400/20",
    text: "text-emerald-300",
  },
];

const FeaturedTechnologies = () => {
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
            bottom-[10%]
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
            <Orbit
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
              Featured Technologies
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
            Intelligent Technologies

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
              Powering Restoration
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
            Advanced oxygenation, ecological restoration,
            AI-driven monitoring and environmental engineering
            systems designed for future-ready water
            infrastructure.
          </p>
        </div>

        {/* TECHNOLOGY GRID */}
        <div
          className="
            mt-14 sm:mt-16 lg:mt-20
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-12
            gap-4 sm:gap-5 lg:gap-6
            auto-rows-auto xl:auto-rows-[280px]
          "
        >
          {featuredTechnologies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border ${item.border}
                  bg-white/[0.05]
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-cyan-400/30

                  ${
                    item.size === "large"
                      ? "xl:col-span-7 xl:row-span-2"
                      : ""
                  }

                  ${
                    item.size === "wide"
                      ? "xl:col-span-5"
                      : ""
                  }

                  ${
                    item.size === "medium"
                      ? "xl:col-span-5"
                      : ""
                  }
                `}
              >
                {/* BG GRADIENT */}
                <div
                  className={`
                    absolute inset-0
                    opacity-90
                    bg-gradient-to-br
                    ${item.gradient}
                  `}
                />

                {/* AMBIENT LIGHT */}
                <div
                  className="
                    absolute
                    -right-16 -top-16
                    h-44 w-44
                    rounded-full
                    bg-white/[0.04]
                    blur-3xl
                  "
                />

                {/* CONTENT */}
                <div
                  className="
                    relative z-10
                    flex h-full flex-col justify-between
                    p-5 sm:p-7 lg:p-8
                  "
                >
                  {/* TOP */}
                  <div>
                    {/* ICON */}
                    <div
                      className="
                        flex h-14 w-14
                        sm:h-16 sm:w-16
                        items-center justify-center
                        rounded-2xl sm:rounded-3xl
                        border border-white/10
                        bg-white/[0.05]
                        backdrop-blur-xl
                      "
                    >
                      <Icon
                        size={30}
                        className={item.text}
                      />
                    </div>

                    {/* TITLE */}
                    <h3
                      className={`
                        mt-6 sm:mt-8
                        ${
                          item.size === "large"
                            ? "text-3xl sm:text-4xl lg:text-5xl"
                            : "text-2xl sm:text-3xl"
                        }
                        font-black
                        leading-tight
                        tracking-[-0.04em]
                        text-white
                      `}
                    >
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p
                      className="
                        mt-4 sm:mt-5
                        max-w-2xl
                        text-sm sm:text-base
                        leading-relaxed
                        text-slate-300
                      "
                    >
                      {item.description}
                    </p>

                    {/* STATS */}
                    {item.stats && (
                      <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                        {item.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className="
                              rounded-full
                              border border-white/10
                              bg-white/[0.05]
                              px-4 py-2
                              text-[12px] sm:text-sm
                              text-slate-200
                              backdrop-blur-xl
                            "
                          >
                            {stat}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* FOOTER */}
                  <div
                    className="
                      mt-8 sm:mt-10
                      flex items-center justify-between
                    "
                  >
                    {/* LABEL */}
                    <div
                      className="
                        flex items-center gap-2
                        text-[11px] sm:text-sm
                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                      "
                    >
                      <div className="h-2 w-2 rounded-full bg-cyan-400" />

                      Integrated Technology
                    </div>

                    {/* LINK */}
                    <Link
                      to={item.href}
                      className="
                        group/link
                        flex h-12 w-12 sm:h-14 sm:w-14
                        items-center justify-center
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.05]
                        transition-all duration-300
                        hover:border-cyan-400/30
                        hover:bg-cyan-400/10
                      "
                    >
                      <ArrowUpRight
                        size={22}
                        className="
                          text-cyan-300
                          transition-transform duration-300
                          group-hover/link:translate-x-1
                          group-hover/link:-translate-y-1
                        "
                      />
                    </Link>
                  </div>
                </div>

                {/* LARGE CARD VISUAL */}
                {item.size === "large" && (
                  <>
                    <div
                      className="
                        absolute
                        right-[-60px]
                        bottom-[-60px]
                        h-[220px] w-[220px]
                        rounded-full
                        border border-cyan-400/10
                      "
                    />

                    <div
                      className="
                        absolute
                        right-8 bottom-8
                        h-[140px] w-[140px]
                        rounded-full
                        border border-white/5
                      "
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTechnologies;