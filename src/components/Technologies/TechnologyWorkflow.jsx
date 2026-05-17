// import { motion } from "framer-motion";

// import {
//   Activity,
//   ArrowDown,
//   BrainCircuit,
//   CheckCircle2,
//   Cpu,
//   Droplets,
//   FileBarChart2,
//   FlaskConical,
//   Radar,
//   Settings2,
//   Waves,
// } from "lucide-react";

// import WorkflowImg from "../../assets/images/workflow-main.png";

// const workflowSteps = [
//   {
//     title: "Water Survey",
//     description:
//       "Comprehensive environmental assessment and ecosystem diagnostics for aquatic restoration planning.",
//     icon: Radar,
//   },

//   {
//     title: "Water Analysis",
//     description:
//       "Detailed BOD, COD, DO, chlorophyll and nutrient profiling for intelligent technology selection.",
//     icon: FlaskConical,
//   },

//   {
//     title: "DPR & Engineering",
//     description:
//       "Environmental engineering design, feasibility analysis and integrated restoration architecture.",
//     icon: FileBarChart2,
//   },

//   {
//     title: "Technology Integration",
//     description:
//       "Selection of biological, mechanical and smart monitoring systems for optimized recovery.",
//     icon: Cpu,
//   },

//   {
//     title: "SITC Deployment",
//     description:
//       "Execution of integrated environmental infrastructure including aeration, wetlands and monitoring.",
//     icon: Settings2,
//   },

//   {
//     title: "Ecological Recovery",
//     description:
//       "Long-term ecosystem stabilization, monitoring and intelligent environmental optimization.",
//     icon: CheckCircle2,
//   },
// ];

// const metrics = [
//   {
//     value: "End-to-End",
//     label: "Integrated Execution",
//   },

//   {
//     value: "Multi-Tech",
//     label: "Hybrid Ecosystems",
//   },

//   {
//     value: "3-Year",
//     label: "DLP Monitoring",
//   },

//   {
//     value: "Smart",
//     label: "Environmental Intelligence",
//   },
// ];

// const TechnologyWorkflow = () => {
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
//     id="workflow" className="relative overflow-hidden bg-[#081219] py-32">
//       {/* GRID */}
//       <div
//         className="
//           absolute inset-0
//           opacity-[0.03]
//           bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
//           bg-[size:120px_120px]
//         "
//       />

//       {/* AMBIENT */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute left-[5%] top-[5%]
//             h-[700px] w-[700px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[180px]
//           "
//         />

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
//             <Activity
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
//               Integrated Restoration Workflow
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
//             Intelligent
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
//               Restoration Workflow
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
//             From ecosystem diagnostics and environmental
//             analysis to deployment, monitoring and long-term
//             ecological recovery — engineered through integrated
//             intelligent restoration systems.
//           </motion.p>
//         </div>

//         {/* MAIN LAYOUT */}
//         <div className="mt-24 grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
//           {/* LEFT VISUAL */}
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
//               src={WorkflowImg}
//               alt="Workflow"
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
//                 flex min-h-[850px]
//                 flex-col justify-between
//                 p-10
//               "
//             >
//               {/* TOP */}
//               <div>
//                 <div
//                   className="
//                     inline-flex items-center gap-3
//                     rounded-full
//                     border border-cyan-400/20
//                     bg-[#081219]/60
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
//                       tracking-[0.22em]
//                       text-cyan-200
//                     "
//                   >
//                     Smart Environmental Engineering
//                   </span>
//                 </div>

//                 <h3
//                   className="
//                     mt-10
//                     text-5xl
//                     font-black
//                     leading-[0.95]
//                     tracking-[-0.04em]
//                     text-white
//                   "
//                 >
//                   Engineering
//                   <span
//                     className="
//                       block
//                       bg-gradient-to-r
//                       from-cyan-300
//                       to-emerald-300
//                       bg-clip-text
//                       text-transparent
//                     "
//                   >
//                     Ecological Recovery
//                   </span>
//                 </h3>

//                 <p
//                   className="
//                     mt-8
//                     max-w-xl
//                     text-lg
//                     leading-relaxed
//                     text-slate-300
//                   "
//                 >
//                   Multi-disciplinary restoration systems
//                   integrating smart monitoring, biological
//                   recovery and environmental infrastructure
//                   into a unified ecological workflow.
//                 </p>
//               </div>

//               {/* METRICS */}
//               <div className="grid gap-5 sm:grid-cols-2">
//                 {metrics.map((item, index) => (
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
//                     <h4
//                       className="
//                         text-3xl
//                         font-black
//                         leading-none
//                         bg-gradient-to-r
//                         from-cyan-300
//                         to-emerald-300
//                         bg-clip-text
//                         text-transparent
//                       "
//                     >
//                       {item.value}
//                     </h4>

//                     <p
//                       className="
//                         mt-4
//                         text-slate-400
//                       "
//                     >
//                       {item.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT WORKFLOW */}
//           <div className="relative">
//             {/* CENTER LINE */}
//             <div
//               className="
//                 absolute left-[34px] top-0
//                 hidden h-full w-[2px]
//                 bg-gradient-to-b
//                 from-cyan-400/20
//                 via-cyan-400/10
//                 to-transparent
//                 md:block
//               "
//             />

//             <div className="space-y-8">
//               {workflowSteps.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{
//                       opacity: 0,
//                       x: 40,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       x: 0,
//                     }}
//                     transition={{
//                       duration: 0.7,
//                       delay: index * 0.08,
//                     }}
//                     viewport={{ once: true }}
//                     className="
//                       group
//                       relative
//                       flex gap-6
//                     "
//                   >
//                     {/* ICON */}
//                     <div
//                       className="
//                         relative z-10
//                         flex h-[70px] w-[70px]
//                         shrink-0
//                         items-center justify-center
//                         rounded-3xl
//                         border border-cyan-400/20
//                         bg-[#081219]
//                         shadow-[0_0_60px_-12px_rgba(14,165,233,0.25)]
//                       "
//                     >
//                       <Icon
//                         size={30}
//                         className="text-cyan-300"
//                       />
//                     </div>

//                     {/* CARD */}
//                     <div
//                       className="
//                         relative
//                         overflow-hidden
//                         rounded-[34px]
//                         border border-white/10
//                         bg-white/5
//                         p-8
//                         backdrop-blur-2xl
//                         transition-all duration-500
//                         group-hover:border-cyan-400/20
//                         group-hover:-translate-y-1
//                       "
//                     >
//                       {/* BG */}
//                       <div
//                         className="
//                           absolute inset-0
//                           opacity-0
//                           transition-all duration-500
//                           group-hover:opacity-100
//                           bg-gradient-to-br
//                           from-cyan-400/10
//                           via-transparent
//                           to-emerald-400/5
//                         "
//                       />

//                       {/* STEP */}
//                       <div
//                         className="
//                           relative z-10
//                           inline-flex items-center gap-2
//                           rounded-full
//                           border border-cyan-400/20
//                           bg-cyan-400/10
//                           px-4 py-2
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
//                           Step {index + 1}
//                         </span>
//                       </div>

//                       {/* TITLE */}
//                       <h3
//                         className="
//                           relative z-10
//                           mt-6
//                           text-3xl
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
//                           relative z-10
//                           mt-5
//                           leading-relaxed
//                           text-slate-300
//                         "
//                       >
//                         {item.description}
//                       </p>
//                     </div>

//                     {/* CONNECTOR */}
//                     {index !== workflowSteps.length - 1 && (
//                       <div
//                         className="
//                           absolute left-[22px]
//                           top-[78px]
//                           hidden
//                           md:block
//                         "
//                       >
//                         <ArrowDown
//                           size={24}
//                           className="text-cyan-400/40"
//                         />
//                       </div>
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default TechnologyWorkflow;


import { motion } from "framer-motion";

import {
  Activity,
  ArrowDown,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  FileBarChart2,
  FlaskConical,
  Radar,
  Settings2,
} from "lucide-react";

import WorkflowImg from "../../assets/images/workflow-main.png";

const workflowSteps = [
  {
    title: "Water Survey",
    description:
      "Comprehensive environmental assessment and ecosystem diagnostics for aquatic restoration planning.",
    icon: Radar,
  },

  {
    title: "Water Analysis",
    description:
      "Detailed BOD, COD, DO, chlorophyll and nutrient profiling for intelligent technology selection.",
    icon: FlaskConical,
  },

  {
    title: "DPR & Engineering",
    description:
      "Environmental engineering design, feasibility analysis and integrated restoration architecture.",
    icon: FileBarChart2,
  },

  {
    title: "Technology Integration",
    description:
      "Selection of biological, mechanical and smart monitoring systems for optimized recovery.",
    icon: Cpu,
  },

  {
    title: "SITC Deployment",
    description:
      "Execution of integrated environmental infrastructure including aeration, wetlands and monitoring.",
    icon: Settings2,
  },

  {
    title: "Ecological Recovery",
    description:
      "Long-term ecosystem stabilization, monitoring and intelligent environmental optimization.",
    icon: CheckCircle2,
  },
];

const metrics = [
  {
    value: "End-to-End",
    label: "Integrated Execution",
  },

  {
    value: "Multi-Tech",
    label: "Hybrid Ecosystems",
  },

  {
    value: "3-Year",
    label: "DLP Monitoring",
  },

  {
    value: "Smart",
    label: "Environmental Intelligence",
  },
];

const TechnologyWorkflow = () => {
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
      id="workflow"
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
          bg-[size:120px_120px]
        "
      />

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* CYAN */}
        <div
          className="
            absolute left-[5%] top-[5%]
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
            <Activity
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
              Integrated Restoration Workflow
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
            Intelligent

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
              Restoration Workflow
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
            From ecosystem diagnostics and environmental
            analysis to deployment, monitoring and long-term
            ecological recovery — engineered through integrated
            intelligent restoration systems.
          </motion.p>
        </div>

        {/* MAIN */}
        <div
          className="
            mt-16 md:mt-24

            grid gap-8 md:gap-10

            xl:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* LEFT */}
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
              src={WorkflowImg}
              alt="Workflow"
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
                via-[#081219]/70
                to-[#081219]/20

                xl:bg-gradient-to-t
                xl:from-[#081219]
                xl:via-[#081219]/60
                xl:to-[#081219]/20
              "
            />

            {/* CONTENT */}
            <div
              className="
                relative z-10
                flex flex-col justify-between

                min-h-[620px]
                sm:min-h-[760px]
                xl:min-h-[850px]

                p-5 sm:p-8 md:p-10
              "
            >
              {/* TOP */}
              <div>
                <div
                  className="
                    inline-flex items-center gap-3
                    rounded-full
                    border border-cyan-400/20
                    bg-[#081219]/70
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
                      tracking-[0.22em]
                      text-cyan-200
                    "
                  >
                    Smart Environmental Engineering
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-8 md:mt-10

                    text-4xl
                    sm:text-5xl
                    xl:text-6xl

                    font-black
                    leading-[0.95]
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  Engineering

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
                    Ecological Recovery
                  </span>
                </h3>

                {/* DESC */}
                <p
                  className="
                    mt-6 md:mt-8
                    max-w-xl

                    text-base
                    sm:text-lg

                    leading-relaxed
                    text-slate-300
                  "
                >
                  Multi-disciplinary restoration systems
                  integrating smart monitoring, biological
                  recovery and environmental infrastructure
                  into a unified ecological workflow.
                </p>
              </div>

              {/* METRICS */}
              <div
                className="
                  mt-10

                  grid gap-4 md:gap-5

                  grid-cols-1
                  sm:grid-cols-2
                "
              >
                {metrics.map((item, index) => (
                  <div
                    key={index}
                    className="
                      rounded-[24px]
                      md:rounded-[28px]

                      border border-white/10
                      bg-[#081219]/70

                      p-5 sm:p-6

                      backdrop-blur-2xl

                      shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]
                    "
                  >
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
                        sm:text-base

                        text-slate-400
                      "
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="relative">
            {/* DESKTOP LINE */}
            <div
              className="
                absolute left-[34px] top-0
                hidden h-full w-[2px]

                bg-gradient-to-b
                from-cyan-400/20
                via-cyan-400/10
                to-transparent

                md:block
              "
            />

            <div className="space-y-5 md:space-y-8">
              {workflowSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="
                      group
                      relative
                      flex items-start gap-4 md:gap-6
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        relative z-10

                        flex h-[58px] w-[58px]
                        sm:h-[70px] sm:w-[70px]

                        shrink-0
                        items-center justify-center

                        rounded-2xl
                        sm:rounded-3xl

                        border border-cyan-400/20
                        bg-[#081219]

                        shadow-[0_0_40px_-12px_rgba(14,165,233,0.25)]
                      "
                    >
                      <Icon
                        size={26}
                        className="text-cyan-300"
                      />
                    </div>

                    {/* CARD */}
                    <div
                      className="
                        relative
                        overflow-hidden

                        rounded-[24px]
                        md:rounded-[34px]

                        border border-white/10
                        bg-white/[0.06]

                        p-5 sm:p-7 md:p-8

                        backdrop-blur-2xl

                        shadow-[0_0_40px_-25px_rgba(34,211,238,0.16)]

                        transition-[transform,border-color,box-shadow]
                        duration-500

                        md:group-hover:border-cyan-400/20
                        md:group-hover:-translate-y-1
                        md:group-hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]
                      "
                    >
                      {/* BG */}
                      <div
                        className="
                          absolute inset-0
                          opacity-0
                          transition-opacity duration-500
                          md:group-hover:opacity-100

                          bg-gradient-to-br
                          from-cyan-400/10
                          via-transparent
                          to-emerald-400/5
                        "
                      />

                      {/* STEP */}
                      <div
                        className="
                          relative z-10

                          inline-flex items-center gap-2

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
                          Step {index + 1}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3
                        className="
                          relative z-10

                          mt-5 md:mt-6

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

                          mt-4 md:mt-5

                          text-sm
                          sm:text-base

                          leading-relaxed
                          text-slate-300
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* CONNECTOR */}
                    {index !== workflowSteps.length - 1 && (
                      <div
                        className="
                          absolute left-[17px]
                          top-[66px]

                          md:left-[22px]
                          md:top-[78px]
                        "
                      >
                        <ArrowDown
                          size={20}
                          className="text-cyan-400/40"
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechnologyWorkflow;