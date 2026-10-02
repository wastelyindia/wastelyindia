
import { ArrowUpRight, Factory, Building2, Waves, Fish } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    number: "01",
    title: "Industrial",
    description:
      "Water and wastewater treatment solutions for industrial operations and process requirements.",
    icon: Factory,
  },
  {
    number: "02",
    title: "Municipal",
    description:
      "Treatment solutions supporting municipal wastewater and water infrastructure.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Environmental",
    description:
      "Waterbody treatment and restoration solutions for lakes, ponds and other environments.",
    icon: Waves,
  },
  {
    number: "04",
    title: "Aquaculture",
    description:
      "Water-quality solutions supporting aquatic environments and aquaculture applications.",
    icon: Fish,
  },
];

const Industries = () => {
  return (
    <section className="wastely-section wastely-section-soft">
      <div className="wastely-container">
        {/* Heading */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[680px]">
            <div className="wastely-section-eyebrow">
              Industries
            </div>

            <h2 className="wastely-section-title">
              Water solutions across different operating environments.
            </h2>
          </div>

          <p className="max-w-[480px] text-sm leading-6 text-wastely-sub lg:text-right">
            Our approach starts with the application, water-quality
            requirements and operating conditions of each project.
          </p>
        </div>

        {/* Industry grid */}
        <div className="mt-12 grid border-l border-t border-wastely-line sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.number}
                to="/industries"
                className="
                  group
                  relative
                  min-h-[250px]
                  border-b
                  border-r
                  border-wastely-line
                  bg-white
                  p-6
                  transition-colors
                  duration-200
                  hover:bg-white
                "
              >
                {/* Number + icon */}
                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-xs
                      font-semibold
                      tracking-[0.12em]
                      text-wastely-sub
                    "
                  >
                    {industry.number}
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      border
                      border-wastely-line
                      text-wastely-blue
                      transition-colors
                      duration-200
                      group-hover:border-wastely-cyan
                      group-hover:bg-wastely-bg-soft
                    "
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-12">
                  <h3
                    className="
                      text-lg
                      font-bold
                      leading-tight
                      text-wastely-deep
                    "
                  >
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-wastely-sub">
                    {industry.description}
                  </p>
                </div>

                {/* Explore */}
                <div
                  className="
                    absolute
                    bottom-2
                    left-6
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-wastely-blue
                  "
                >
                  View Industries

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>

                {/* Cyan hover line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-wastely-cyan
                    transition-all
                    duration-300
                    group-hover:w-16
                  "
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;









// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Building2,
//   Cpu,
//   Factory,
//   FlaskConical,
//   Hotel,
//   Orbit,
//   Waves,
// } from "lucide-react";

// import IndustrialImg from "../../assets/images/industry-industrial.png";
// import MunicipalImg from "../../assets/images/industry-municipal.png";
// import HospitalityImg from "../../assets/images/industry-hospitality.png";
// import SmartImg from "../../assets/images/industry-smart.png";
// import HealthcareImg from "../../assets/images/industry-healthcare.png";
// import AquaImg from "../../assets/images/industry-aquaculture.png";

// const industries = [
//   {
//     title: "Industrial Manufacturing",
//     description:
//       "Advanced wastewater treatment, recycling and oxygenation systems for industrial and manufacturing infrastructure.",
//     image: IndustrialImg,
//     icon: Factory,
//     size: "large",
//     gradient:
//       "from-cyan-400/20 via-cyan-500/5 to-transparent",
//     border: "border-cyan-400/20",
//     metrics: [
//       "ETP Systems",
//       "Water Recovery",
//       "Process Optimization",
//     ],
//   },

//   {
//     title: "Municipal Infrastructure",
//     description:
//       "Integrated smart restoration systems for urban lakes, reservoirs and municipal water ecosystems.",
//     image: MunicipalImg,
//     icon: Building2,
//     size: "medium",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//     border: "border-emerald-400/20",
//   },

//   {
//     title: "Hospitality & Commercial",
//     description:
//       "Luxury water recycling and ecological infrastructure systems for hotels and commercial developments.",
//     image: HospitalityImg,
//     icon: Hotel,
//     size: "medium",
//     gradient:
//       "from-cyan-400/20 via-emerald-500/5 to-transparent",
//     border: "border-cyan-400/20",
//   },

//   {
//     title: "Smart Water Intelligence",
//     description:
//       "AI-assisted monitoring, predictive analytics and IoT-powered ecological intelligence platforms.",
//     image: SmartImg,
//     icon: Cpu,
//     size: "wide",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//     border: "border-emerald-400/20",
//     metrics: [
//       "IoT Monitoring",
//       "AI Analytics",
//       "MPC Systems",
//     ],
//   },

//   {
//     title: "Healthcare & Laboratories",
//     description:
//       "Compliant wastewater handling and environmental safety systems for hospitals and laboratory infrastructure.",
//     image: HealthcareImg,
//     icon: FlaskConical,
//     size: "medium",
//     gradient:
//       "from-cyan-400/20 via-cyan-500/5 to-transparent",
//     border: "border-cyan-400/20",
//   },

//   {
//     title: "Aquaculture & Ecosystems",
//     description:
//       "Nano bubble oxygenation and ecological restoration systems for aquaculture and aquatic sustainability.",
//     image: AquaImg,
//     icon: Waves,
//     size: "medium",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//     border: "border-emerald-400/20",
//   },
// ];

// const Industries = () => {
//   return (
//     <section
//       className="
//         relative
//         isolate
//         overflow-hidden
//         bg-[#081219]
//         py-20 sm:py-24 lg:py-32
//       "
//     >
//       {/* GRID */}
//       <div
//         className="
//           absolute inset-0
//           opacity-[0.035]
//           bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
//           bg-[size:72px_72px]
//         "
//       />

//       {/* GLOW */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute
//             left-[-120px]
//             top-[5%]
//             h-[420px] w-[420px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[140px]
//           "
//         />

//         <div
//           className="
//             absolute
//             right-[-120px]
//             bottom-[5%]
//             h-[420px] w-[420px]
//             rounded-full
//             bg-emerald-500/10
//             blur-[140px]
//           "
//         />
//       </div>

//       <div
//         className="
//           relative z-10
//           mx-auto
//           max-w-7xl
//           px-4 sm:px-6 lg:px-8
//         "
//       >
//         {/* HEADER */}
//         <div className="max-w-4xl">
//           {/* BADGE */}
//           <div
//             className="
//               inline-flex items-center gap-3
//               rounded-full
//               border border-cyan-400/20
//               bg-cyan-400/10
//               px-4 sm:px-5
//               py-2
//               backdrop-blur-xl
//             "
//           >
//             <Orbit
//               size={14}
//               className="text-cyan-300"
//             />

//             <span
//               className="
//                 text-[10px] sm:text-xs
//                 uppercase
//                 tracking-[0.25em]
//                 text-cyan-200
//               "
//             >
//               Environmental Sectors
//             </span>
//           </div>

//           {/* TITLE */}
//           <h2
//             className="
//               mt-6 sm:mt-8
//               text-[36px]
//               sm:text-5xl
//               md:text-6xl
//               xl:text-7xl
//               font-black
//               leading-[0.95]
//               tracking-[-0.05em]
//               text-white
//             "
//           >
//             Intelligent Infrastructure

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
//               Across Critical Industries
//             </span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p
//             className="
//               mt-6 sm:mt-8
//               max-w-3xl
//               text-[15px]
//               sm:text-lg
//               lg:text-xl
//               leading-relaxed
//               text-slate-400
//             "
//           >
//             Integrated environmental engineering systems for
//             industrial, municipal, commercial and ecological
//             water infrastructure across high-impact sectors.
//           </p>
//         </div>

//         {/* GRID */}
//         <div
//           className="
//             mt-14 sm:mt-16 lg:mt-20
//             grid
//             grid-cols-1
//             md:grid-cols-2
//             xl:grid-cols-12
//             gap-4 sm:gap-5 lg:gap-6
//             auto-rows-auto xl:auto-rows-[300px]
//           "
//         >
//           {industries.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 28 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.15 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: index * 0.05,
//                 }}
//                 className={`
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[30px] sm:rounded-[40px]
//                   border ${item.border}
//                   bg-white/[0.05]
//                   backdrop-blur-2xl
//                   transition-all duration-500
//                   hover:border-cyan-400/30
//                   hover:-translate-y-1

//                   ${
//                     item.size === "large"
//                       ? "xl:col-span-7 xl:row-span-2"
//                       : ""
//                   }

//                   ${
//                     item.size === "wide"
//                       ? "xl:col-span-5"
//                       : ""
//                   }

//                   ${
//                     item.size === "medium"
//                       ? "xl:col-span-5"
//                       : ""
//                   }
//                 `}
//               >
//                 {/* IMAGE */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   loading="lazy"
//                   decoding="async"
//                   className="
//                     absolute inset-0
//                     h-full w-full
//                     object-cover
//                     transition-transform duration-700
//                     group-hover:scale-[1.03]
//                   "
//                 />

//                 {/* OVERLAYS */}
//                 <div
//                   className="
//                     absolute inset-0
//                     bg-gradient-to-t
//                     from-[#081219]
//                     via-[#081219]/60
//                     to-[#081219]/15
//                   "
//                 />

//                 <div
//                   className={`
//                     absolute inset-0
//                     bg-gradient-to-br
//                     ${item.gradient}
//                   `}
//                 />

//                 {/* LIGHT */}
//                 <div
//                   className="
//                     absolute
//                     -right-16 -top-16
//                     h-44 w-44
//                     rounded-full
//                     bg-white/[0.04]
//                     blur-3xl
//                   "
//                 />

//                 {/* CONTENT */}
//                 <div
//                   className="
//                     relative z-10
//                     flex h-full flex-col justify-between
//                     p-5 sm:p-7 lg:p-8
//                   "
//                 >
//                   {/* TOP */}
//                   <div>
//                     {/* ICON */}
//                     <div
//                       className="
//                         flex h-14 w-14
//                         sm:h-16 sm:w-16
//                         items-center justify-center
//                         rounded-2xl sm:rounded-3xl
//                         border border-white/10
//                         bg-[#081219]/50
//                         backdrop-blur-xl
//                       "
//                     >
//                       <Icon
//                         size={28}
//                         className="text-cyan-300"
//                       />
//                     </div>

//                     {/* TITLE */}
//                     <h3
//                       className={`
//                         mt-6 sm:mt-8
//                         ${
//                           item.size === "large"
//                             ? "text-3xl sm:text-4xl lg:text-5xl"
//                             : "text-2xl sm:text-3xl"
//                         }
//                         font-black
//                         leading-tight
//                         tracking-[-0.04em]
//                         text-white
//                       `}
//                     >
//                       {item.title}
//                     </h3>

//                     {/* DESCRIPTION */}
//                     <p
//                       className="
//                         mt-4 sm:mt-5
//                         max-w-2xl
//                         text-sm sm:text-base
//                         leading-relaxed
//                         text-slate-300
//                       "
//                     >
//                       {item.description}
//                     </p>

//                     {/* METRICS */}
//                     {item.metrics && (
//                       <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
//                         {item.metrics.map((metric, idx) => (
//                           <div
//                             key={idx}
//                             className="
//                               rounded-full
//                               border border-white/10
//                               bg-[#081219]/50
//                               px-4 py-2
//                               text-[12px] sm:text-sm
//                               text-slate-200
//                               backdrop-blur-xl
//                             "
//                           >
//                             {metric}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   {/* FOOTER */}
//                   <div
//                     className="
//                       mt-8 sm:mt-10
//                       flex items-center justify-between
//                     "
//                   >
//                     {/* LEFT */}
//                     <div
//                       className="
//                         flex items-center gap-2
//                         text-[11px] sm:text-sm
//                         uppercase
//                         tracking-[0.18em]
//                         text-slate-400
//                       "
//                     >
//                       <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                       Environmental Infrastructure
//                     </div>

//                     {/* BUTTON */}
//                     <div
//                       className="
//                         flex h-12 w-12 sm:h-14 sm:w-14
//                         items-center justify-center
//                         rounded-2xl
//                         border border-white/10
//                         bg-[#081219]/50
//                         backdrop-blur-xl
//                         transition-all duration-300
//                         group-hover:border-cyan-400/30
//                         group-hover:bg-cyan-400/10
//                       "
//                     >
//                       <ArrowUpRight
//                         size={22}
//                         className="
//                           text-cyan-300
//                           transition-transform duration-300
//                           group-hover:translate-x-1
//                           group-hover:-translate-y-1
//                         "
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* LARGE VISUAL */}
//                 {item.size === "large" && (
//                   <>
//                     <div
//                       className="
//                         absolute
//                         right-8 bottom-8
//                         h-[140px] w-[140px]
//                         rounded-full
//                         border border-cyan-400/10
//                       "
//                     />

//                     <div
//                       className="
//                         absolute
//                         right-[-40px]
//                         bottom-[-40px]
//                         h-[220px] w-[220px]
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

//         {/* BOTTOM STRIP */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.15 }}
//           transition={{ duration: 0.6 }}
//           className="
//             relative
//             mt-14 sm:mt-16 lg:mt-20
//             overflow-hidden
//             rounded-[32px] sm:rounded-[42px]
//             border border-white/10
//             bg-white/[0.05]
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
//               flex flex-col
//               gap-8 sm:gap-10
//               px-5 sm:px-8 lg:px-14
//               py-8 sm:py-10 lg:py-12
//               lg:flex-row
//               lg:items-center
//               lg:justify-between
//             "
//           >
//             {/* LEFT */}
//             <div className="max-w-3xl">
//               <h3
//                 className="
//                   text-2xl
//                   sm:text-3xl
//                   lg:text-5xl
//                   font-black
//                   leading-tight
//                   tracking-[-0.04em]
//                   text-white
//                 "
//               >
//                 Multi-Sector Restoration Ecosystem
//               </h3>

//               <p
//                 className="
//                   mt-4 sm:mt-5
//                   text-[15px]
//                   sm:text-lg
//                   leading-relaxed
//                   text-slate-400
//                 "
//               >
//                 Environmental engineering systems designed
//                 for smart cities, industrial water
//                 infrastructure, ecological restoration and
//                 intelligent sustainability platforms.
//               </p>
//             </div>

//             {/* TAGS */}
//             <div
//               className="
//                 flex flex-wrap
//                 gap-3
//                 lg:max-w-[420px]
//                 lg:justify-end
//               "
//             >
//               {[
//                 "Municipal",
//                 "Industrial",
//                 "Aquaculture",
//                 "Healthcare",
//                 "Smart Cities",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="
//                     rounded-full
//                     border border-white/10
//                     bg-white/[0.05]
//                     px-4 py-2.5
//                     text-[12px] sm:text-sm
//                     text-slate-200
//                     backdrop-blur-xl
//                     transition-all duration-300
//                     hover:border-cyan-400/20
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

// export default Industries;