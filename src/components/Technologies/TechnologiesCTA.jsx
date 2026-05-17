// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// import {
//   ArrowRight,
//   BrainCircuit,
//   Building2,
//   Cpu,
//   Droplets,
//   Leaf,
//   Radar,
//   Waves,
// } from "lucide-react";

// import CTAImg from "../../assets/images/technologies-cta.png";

// const technologies = [
//   {
//     title: "Nano Bubble",
//     icon: Waves,
//   },

//   {
//     title: "Bioremediation",
//     icon: Leaf,
//   },

//   {
//     title: "Smart Monitoring",
//     icon: Radar,
//   },

//   {
//     title: "Hybrid Ecosystems",
//     icon: Cpu,
//   },
// ];

// const stats = [
//   {
//     value: "₹33+ Cr",
//     label: "Restoration Capability",
//   },

//   {
//     value: "Multi-Tech",
//     label: "Integrated Systems",
//   },

//   {
//     value: "24/7",
//     label: "Smart Monitoring",
//   },
// ];

// const TechnologiesCTA = () => {
//   return (
//     <motion.section
//   initial={{
//     opacity: 0,
//     y: 60,
//   }}
//   whileInView={{
//     opacity: 1,
//     y: 0,
//   }}
//   transition={{
//     duration: 0.8,
//   }}
//   viewport={{
//     once: true,
//     amount: 0.2,
//   }} 
//     className="relative overflow-hidden bg-[#081219] py-32">
//       {/* AMBIENT */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* CYAN */}
//         <div
//           className="
//             absolute left-[10%] top-[10%]
//             h-[700px] w-[700px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[180px]
//           "
//         />

//         {/* EMERALD */}
//         <div
//           className="
//             absolute right-[5%] bottom-[0%]
//             h-[650px] w-[650px]
//             rounded-full
//             bg-emerald-500/10
//             blur-[180px]
//           "
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="
//             relative
//             overflow-hidden
//             rounded-[50px]
//             border border-white/10
//             bg-white/5
//             backdrop-blur-2xl
//           "
//         >
//           {/* IMAGE */}
//           <img
//             src={CTAImg}
//             alt="Environmental Technologies"
//             className="
//               absolute inset-0
//               h-full w-full
//               object-cover
//             "
//           />

//           {/* OVERLAY */}
//           <div
//             className="
//               absolute inset-0
//               bg-gradient-to-r
//               from-[#081219]
//               via-[#081219]/85
//               to-[#081219]/60
//             "
//           />

//           {/* RADIAL */}
//           <div
//             className="
//               absolute inset-0
//               bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]
//             "
//           />

//           {/* GRID */}
//           <div
//             className="
//               absolute inset-0
//               opacity-[0.03]
//               bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
//               bg-[size:100px_100px]
//             "
//           />

//           {/* CONTENT */}
//           <div
//             className="
//               relative z-10
//               px-8 py-20
//               md:px-14
//               xl:px-20
//               xl:py-24
//             "
//           >
//             <div className="grid gap-16 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
//               {/* LEFT */}
//               <div>
//                 {/* BADGE */}
//                 <div
//                   className="
//                     inline-flex items-center gap-3
//                     rounded-full
//                     border border-cyan-400/20
//                     bg-white/5
//                     px-5 py-2
//                     backdrop-blur-xl
//                   "
//                 >
//                   <BrainCircuit
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
//                     Integrated Environmental Technologies
//                   </span>
//                 </div>

//                 {/* TITLE */}
//                 <h2
//                   className="
//                     mt-10
//                     text-5xl
//                     md:text-7xl
//                     xl:text-[86px]
//                     font-black
//                     leading-[0.9]
//                     tracking-[-0.05em]
//                     text-white
//                   "
//                 >
//                   Let’s Build
//                   <span
//                     className="
//                       block
//                       bg-gradient-to-r
//                       from-cyan-300
//                       via-cyan-400
//                       to-emerald-400
//                       bg-clip-text
//                       text-transparent
//                     "
//                   >
//                     Intelligent
//                   </span>

//                   Water Infrastructure
//                 </h2>

//                 {/* DESC */}
//                 <p
//                   className="
//                     mt-10
//                     max-w-3xl
//                     text-lg
//                     md:text-xl
//                     leading-relaxed
//                     text-slate-300
//                   "
//                 >
//                   Partner with Wastely Aqua to deploy advanced
//                   environmental technologies engineered for
//                   ecological recovery, intelligent monitoring
//                   and sustainable water infrastructure.
//                 </p>

//                 {/* TECHNOLOGIES */}
//                 <div className="mt-12 flex flex-wrap gap-4">
//                   {technologies.map((item, index) => {
//                     const Icon = item.icon;

//                     return (
//                       <div
//                         key={index}
//                         className="
//                           flex items-center gap-3
//                           rounded-full
//                           border border-white/10
//                           bg-[#081219]/50
//                           px-5 py-3
//                           backdrop-blur-xl
//                         "
//                       >
//                         <Icon
//                           size={18}
//                           className="text-cyan-300"
//                         />

//                         <span className="text-slate-200">
//                           {item.title}
//                         </span>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="mt-14 flex flex-col gap-5 sm:flex-row">
//                   {/* PRIMARY */}
//                   <Link
//                     to="/contact"
//                     className="
//                       group
//                       inline-flex items-center justify-center gap-3
//                       rounded-full
//                       bg-gradient-to-r
//                       from-cyan-500
//                       to-emerald-500
//                       px-8 py-4
//                       font-medium
//                       text-white
//                       transition-all duration-300
//                       hover:scale-105
//                       shadow-[0_0_60px_-12px_rgba(14,165,233,0.45)]
//                     "
//                   >
//                     Start Your Restoration Project

//                     <ArrowRight
//                       size={20}
//                       className="
//                         transition-transform duration-300
//                         group-hover:translate-x-1
//                       "
//                     />
//                   </Link>

//                   {/* SECONDARY */}
//                   <Link
//                     to="/case-studies"
//                     className="
//                       inline-flex items-center justify-center gap-3
//                       rounded-full
//                       border border-white/10
//                       bg-white/5
//                       px-8 py-4
//                       text-white
//                       backdrop-blur-xl
//                       transition-all duration-300
//                       hover:border-cyan-400/20
//                       hover:bg-white/10
//                     "
//                   >
//                     View Case Studies
//                   </Link>
//                 </div>
//               </div>

//               {/* RIGHT */}
//               <div className="relative">
//                 {/* MAIN PANEL */}
//                 <div
//                   className="
//                     relative
//                     overflow-hidden
//                     rounded-[42px]
//                     border border-white/10
//                     bg-[#081219]/60
//                     p-8
//                     backdrop-blur-2xl
//                   "
//                 >
//                   {/* BG */}
//                   <div
//                     className="
//                       absolute inset-0
//                       bg-gradient-to-br
//                       from-cyan-400/10
//                       via-transparent
//                       to-emerald-400/5
//                     "
//                   />

//                   {/* TOP */}
//                   <div className="relative z-10">
//                     <div className="flex items-center gap-4">
//                       <div
//                         className="
//                           flex h-18 w-18
//                           items-center justify-center
//                           rounded-3xl
//                           border border-cyan-400/20
//                           bg-cyan-400/10
//                         "
//                       >
//                         <Building2
//                           size={34}
//                           className="text-cyan-300"
//                         />
//                       </div>

//                       <div>
//                         <p className="text-sm text-slate-400">
//                           Ecological Infrastructure
//                         </p>

//                         <h3
//                           className="
//                             mt-1
//                             text-3xl
//                             font-black
//                             text-white
//                           "
//                         >
//                           End-to-End Restoration
//                         </h3>
//                       </div>
//                     </div>

//                     {/* METRICS */}
//                     <div className="mt-10 grid gap-5 sm:grid-cols-3">
//                       {stats.map((item, index) => (
//                         <div
//                           key={index}
//                           className="
//                             rounded-[28px]
//                             border border-white/10
//                             bg-white/5
//                             p-6
//                             backdrop-blur-xl
//                           "
//                         >
//                           <h4
//                             className="
//                               text-3xl
//                               font-black
//                               leading-none
//                               bg-gradient-to-r
//                               from-cyan-300
//                               to-emerald-300
//                               bg-clip-text
//                               text-transparent
//                             "
//                           >
//                             {item.value}
//                           </h4>

//                           <p
//                             className="
//                               mt-4
//                               text-sm
//                               text-slate-400
//                             "
//                           >
//                             {item.label}
//                           </p>
//                         </div>
//                       ))}
//                     </div>

//                     {/* INFO STRIP */}
//                     <div
//                       className="
//                         mt-10
//                         rounded-[32px]
//                         border border-white/10
//                         bg-white/5
//                         p-7
//                         backdrop-blur-xl
//                       "
//                     >
//                       <div className="flex items-start gap-5">
//                         <div
//                           className="
//                             flex h-16 w-16
//                             items-center justify-center
//                             rounded-2xl
//                             border border-cyan-400/20
//                             bg-cyan-400/10
//                           "
//                         >
//                           <Droplets
//                             size={30}
//                             className="text-cyan-300"
//                           />
//                         </div>

//                         <div>
//                           <p
//                             className="
//                               text-xs
//                               uppercase
//                               tracking-[0.2em]
//                               text-cyan-200
//                             "
//                           >
//                             Integrated Ecosystem Engineering
//                           </p>

//                           <h4
//                             className="
//                               mt-3
//                               text-2xl
//                               font-bold
//                               text-white
//                             "
//                           >
//                             Multi-Technology Water Recovery
//                           </h4>

//                           <p
//                             className="
//                               mt-4
//                               leading-relaxed
//                               text-slate-400
//                             "
//                           >
//                             Biological restoration,
//                             oxygenation and intelligent
//                             monitoring engineered into a
//                             unified environmental recovery
//                             platform.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* FLOATING CARD */}
//                 <motion.div
//                   animate={{
//                     y: [0, -12, 0],
//                   }}
//                   transition={{
//                     duration: 6,
//                     repeat: Infinity,
//                   }}
//                   className="
//                     absolute
//                     -bottom-10
//                     -left-10
//                     hidden
//                     rounded-[32px]
//                     border border-white/10
//                     bg-[#081219]/70
//                     p-6
//                     backdrop-blur-2xl
//                     xl:block
//                   "
//                 >
//                   <div className="flex items-center gap-4">
//                     <div
//                       className="
//                         flex h-14 w-14
//                         items-center justify-center
//                         rounded-2xl
//                         border border-emerald-400/20
//                         bg-emerald-400/10
//                       "
//                     >
//                       <Leaf
//                         size={26}
//                         className="text-emerald-300"
//                       />
//                     </div>

//                     <div>
//                       <p className="text-sm text-slate-400">
//                         Ecological Recovery
//                       </p>

//                       <h4
//                         className="
//                           mt-1
//                           text-lg
//                           font-semibold
//                           text-white
//                         "
//                       >
//                         Sustainable Restoration
//                       </h4>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default TechnologiesCTA;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Cpu,
  Droplets,
  Leaf,
  Radar,
  Waves,
} from "lucide-react";

import CTAImg from "../../assets/images/technologies-cta.png";

const technologies = [
  {
    title: "Nano Bubble",
    icon: Waves,
  },

  {
    title: "Bioremediation",
    icon: Leaf,
  },

  {
    title: "Smart Monitoring",
    icon: Radar,
  },

  {
    title: "Hybrid Ecosystems",
    icon: Cpu,
  },
];

const stats = [
  {
    value: "₹33+ Cr",
    label: "Restoration Capability",
  },

  {
    value: "Multi-Tech",
    label: "Integrated Systems",
  },

  {
    value: "24/7",
    label: "Smart Monitoring",
  },
];

const TechnologiesCTA = () => {
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
        bg-[#081219]

        py-20 md:py-28 xl:py-36
      "
    >
      {/* AMBIENT */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* CYAN */}
        <div
          className="
            absolute left-[10%] top-[10%]
            h-[700px] w-[700px]
            rounded-full
            bg-cyan-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />

        {/* EMERALD */}
        <div
          className="
            absolute right-[5%] bottom-[0%]
            h-[650px] w-[650px]
            rounded-full
            bg-emerald-500/10
            blur-[100px] md:blur-[140px] xl:blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden

            rounded-[28px]
            md:rounded-[40px]
            xl:rounded-[50px]

            border border-white/10
            bg-white/[0.05]

            backdrop-blur-2xl
          "
        >
          {/* IMAGE */}
          <img
            src={CTAImg}
            alt="Environmental Technologies"
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
              via-[#081219]/88
              to-[#081219]/55

              xl:bg-gradient-to-r
              xl:from-[#081219]
              xl:via-[#081219]/88
              xl:to-[#081219]/55
            "
          />

          {/* RADIAL */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]
            "
          />

          {/* GRID */}
          <div
            className="
              absolute inset-0
              opacity-[0.03]
              bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
              bg-[size:100px_100px]
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative z-10

              px-5 py-14
              sm:px-8 sm:py-16
              md:px-12 md:py-20
              xl:px-20 xl:py-24
            "
          >
            <div
              className="
                grid gap-10 md:gap-14 xl:gap-16
                xl:grid-cols-[1.05fr_0.95fr]
                xl:items-center
              "
            >
              {/* LEFT */}
              <div>
                {/* BADGE */}
                <div
                  className="
                    inline-flex items-center gap-3
                    rounded-full
                    border border-cyan-400/20
                    bg-white/[0.05]
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
                    Integrated Environmental Technologies
                  </span>
                </div>

                {/* TITLE */}
                <h2
                  className="
                    mt-8 md:mt-10

                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    xl:text-[86px]

                    font-black
                    leading-[0.9]
                    tracking-[-0.05em]
                    text-white
                  "
                >
                  Let’s Build

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
                    Intelligent
                  </span>

                  Water Infrastructure
                </h2>

                {/* DESC */}
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
                  Partner with Wastely Aqua to deploy advanced
                  environmental technologies engineered for
                  ecological recovery, intelligent monitoring
                  and sustainable water infrastructure.
                </p>

                {/* TECHNOLOGIES */}
                <div
                  className="
                    mt-10 md:mt-12
                    flex flex-wrap gap-3 md:gap-4
                  "
                >
                  {technologies.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="
                          flex items-center gap-3

                          rounded-full
                          border border-white/10
                          bg-[#081219]/60

                          px-4 py-2.5
                          sm:px-5 sm:py-3

                          backdrop-blur-xl
                        "
                      >
                        <Icon
                          size={16}
                          className="text-cyan-300"
                        />

                        <span
                          className="
                            text-sm
                            sm:text-base
                            text-slate-200
                          "
                        >
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* BUTTONS */}
                <div
                  className="
                    mt-12 md:mt-14

                    flex flex-col gap-4
                    sm:flex-row
                  "
                >
                  {/* PRIMARY */}
                  <Link
                    to="/contact"
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
                    Start Your Restoration Project

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
                    to="/case-studies"
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
                    View Case Studies
                  </Link>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative">
                {/* MAIN PANEL */}
                <div
                  className="
                    relative
                    overflow-hidden

                    rounded-[28px]
                    md:rounded-[36px]
                    xl:rounded-[42px]

                    border border-white/10
                    bg-[#081219]/60

                    p-5 sm:p-7 md:p-8

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
                      to-emerald-400/5
                    "
                  />

                  <div className="relative z-10">
                    {/* TOP CARD */}
                    <div
                      className="
                        rounded-[24px]
                        md:rounded-[30px]

                        border border-white/10
                        bg-white/[0.05]

                        p-5 sm:p-6

                        backdrop-blur-xl
                      "
                    >
                      <div className="flex items-start gap-4 sm:gap-5">
                        {/* ICON */}
                        <div
                          className="
                            flex h-14 w-14
                            sm:h-[72px] sm:w-[72px]

                            shrink-0
                            items-center justify-center

                            rounded-2xl
                            sm:rounded-3xl

                            border border-cyan-400/20
                            bg-cyan-400/10
                          "
                        >
                          <Building2
                            size={32}
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
                            Ecological Infrastructure
                          </p>

                          <h3
                            className="
                              mt-2

                              text-2xl
                              sm:text-3xl

                              font-black
                              leading-tight
                              text-white
                            "
                          >
                            End-to-End Restoration
                          </h3>

                          <p
                            className="
                              mt-4

                              text-sm
                              sm:text-base

                              leading-relaxed
                              text-slate-400
                            "
                          >
                            Integrated environmental
                            engineering for intelligent
                            ecosystem recovery.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* METRICS */}
                    <div
                      className="
                        mt-5 md:mt-6

                        grid gap-4
                        sm:grid-cols-3
                      "
                    >
                      {stats.map((item, index) => (
                        <div
                          key={index}
                          className="
                            relative
                            overflow-hidden

                            rounded-[24px]
                            md:rounded-[28px]

                            border border-white/10
                            bg-white/[0.05]

                            p-5 sm:p-6

                            backdrop-blur-xl
                          "
                        >
                          {/* BG */}
                          <div
                            className="
                              absolute inset-0
                              bg-gradient-to-br
                              from-cyan-400/5
                              to-emerald-400/5
                            "
                          />

                          <div className="relative z-10">
                            <h4
                              className="
                                text-2xl
                                sm:text-3xl

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
                            </h4>

                            <p
                              className="
                                mt-4

                                text-sm
                                leading-relaxed
                                text-slate-400
                              "
                            >
                              {item.label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* INFO STRIP */}
                    <div
                      className="
                        mt-5 md:mt-6

                        rounded-[24px]
                        md:rounded-[32px]

                        border border-white/10
                        bg-white/[0.05]

                        p-5 sm:p-7

                        backdrop-blur-xl
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
                          <Droplets
                            size={28}
                            className="text-cyan-300"
                          />
                        </div>

                        {/* CONTENT */}
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
                            Integrated Ecosystem Engineering
                          </p>

                          <h4
                            className="
                              mt-3

                              text-xl
                              sm:text-2xl

                              font-bold
                              leading-tight
                              text-white
                            "
                          >
                            Multi-Technology Water Recovery
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
                            Biological restoration,
                            oxygenation and intelligent
                            monitoring engineered into a
                            unified environmental recovery
                            platform.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FLOATING CARD */}
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
                    xl:block
                  "
                >
                  <div
                    className="
                      rounded-[28px]

                      border border-white/10
                      bg-[#081219]/80

                      p-5

                      backdrop-blur-2xl

                      shadow-[0_0_60px_-18px_rgba(16,185,129,0.25)]
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          flex h-14 w-14
                          items-center justify-center

                          rounded-2xl
                          border border-emerald-400/20
                          bg-emerald-400/10
                        "
                      >
                        <Leaf
                          size={26}
                          className="text-emerald-300"
                        />
                      </div>

                      <div>
                        <p className="text-sm text-slate-400">
                          Ecological Recovery
                        </p>

                        <h4
                          className="
                            mt-1
                            text-lg
                            font-semibold
                            text-white
                          "
                        >
                          Sustainable Restoration
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechnologiesCTA;