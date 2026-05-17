
// import { motion } from "framer-motion";
// import {
//   Activity,
//   BarChart3,
//   ClipboardList,
//   Cpu,
//   FileSearch,
//   Gauge,
//   Map,
//   Orbit,
//   Radar,
//   Settings2,
//   Waves,
// } from "lucide-react";

// const workflowSteps = [
//   {
//     title: "Site Survey",
//     description:
//       "Comprehensive field inspections, bathymetric surveys and ecological assessments for accurate restoration planning.",
//     icon: Map,
//     color: "text-cyan-300",
//     border: "border-cyan-400/20",
//     gradient:
//       "from-cyan-400/20 via-cyan-500/5 to-transparent",
//   },

//   {
//     title: "Water Analysis",
//     description:
//       "Detailed laboratory testing including BOD, COD, DO, pH, chlorophyll and nutrient profiling.",
//     icon: Activity,
//     color: "text-emerald-300",
//     border: "border-emerald-400/20",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//   },

//   {
//     title: "DPR & Engineering",
//     description:
//       "Preparation of integrated detailed project reports, restoration strategy and execution planning.",
//     icon: ClipboardList,
//     color: "text-cyan-300",
//     border: "border-cyan-400/20",
//     gradient:
//       "from-cyan-400/20 via-emerald-500/5 to-transparent",
//   },

//   {
//     title: "Technology Selection",
//     description:
//       "Deployment planning for nano bubble systems, wetlands, algae control and smart monitoring.",
//     icon: Orbit,
//     color: "text-emerald-300",
//     border: "border-emerald-400/20",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//   },

//   {
//     title: "SITC Execution",
//     description:
//       "Supply, installation, testing and commissioning of integrated environmental infrastructure systems.",
//     icon: Settings2,
//     color: "text-cyan-300",
//     border: "border-cyan-400/20",
//     gradient:
//       "from-cyan-400/20 via-cyan-500/5 to-transparent",
//   },

//   {
//     title: "Smart Monitoring",
//     description:
//       "AI-powered MPC buoy systems with real-time analytics, IoT dashboards and predictive intelligence.",
//     icon: Radar,
//     color: "text-emerald-300",
//     border: "border-emerald-400/20",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//   },

//   {
//     title: "Performance Optimization",
//     description:
//       "Continuous operational tuning, oxygenation optimization and ecological balancing for maximum impact.",
//     icon: Gauge,
//     color: "text-cyan-300",
//     border: "border-cyan-400/20",
//     gradient:
//       "from-cyan-400/20 via-emerald-500/5 to-transparent",
//   },

//   {
//     title: "3-Year DLP Support",
//     description:
//       "Long-term defect liability period support with maintenance, analytics and restoration performance assurance.",
//     icon: Cpu,
//     color: "text-emerald-300",
//     border: "border-emerald-400/20",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//   },
// ];

// const ProcessSection = () => {
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

//       {/* GLOW */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute left-[-120px] top-[5%]
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
//         <div className="max-w-4xl mx-auto text-center">
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
//             <BarChart3
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
//               Integrated Restoration Workflow
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
//             From Survey To
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
//               Ecological Recovery
//             </span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p
//             className="
//               mt-8
//               max-w-3xl
//               mx-auto
//               text-lg
//               md:text-xl
//               leading-relaxed
//               text-slate-400
//             "
//           >
//             A complete environmental engineering workflow
//             integrating water analysis, smart monitoring,
//             oxygenation systems, ecological restoration and
//             long-term performance management.
//           </p>
//         </div>

//         {/* PROCESS FLOW */}
//         <div className="relative mt-24">
//           {/* CENTER TIMELINE */}
//           <div
//             className="
//               hidden xl:block
//               absolute left-1/2 top-0 bottom-0
//               w-[2px]
//               -translate-x-1/2
//               bg-gradient-to-b
//               from-cyan-400/0
//               via-cyan-400/30
//               to-cyan-400/0
//             "
//           />

//           {/* STEPS */}
//           <div className="space-y-10">
//             {workflowSteps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{
//                     opacity: 0,
//                     y: 40,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 0.6,
//                     delay: index * 0.05,
//                   }}
//                   viewport={{ once: true }}
//                   className={`
//                     relative
//                     flex
//                     flex-col
//                     xl:flex-row
//                     gap-8
//                     items-center

//                     ${
//                       index % 2 === 0
//                         ? "xl:flex-row"
//                         : "xl:flex-row-reverse"
//                     }
//                   `}
//                 >
//                   {/* SIDE */}
//                   <div className="flex-1">
//                     <div
//                       className={`
//                         group
//                         relative
//                         overflow-hidden
//                         rounded-[38px]
//                         border ${step.border}
//                         bg-white/5
//                         backdrop-blur-2xl
//                         p-8 md:p-10
//                         transition-all duration-500
//                         hover:-translate-y-2
//                         hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]
//                       `}
//                     >
//                       {/* BG */}
//                       <div
//                         className={`
//                           absolute inset-0
//                           bg-gradient-to-br
//                           ${step.gradient}
//                         `}
//                       />

//                       {/* WATERMARK */}
//                       <div
//                         className="
//                           absolute right-5 bottom-0
//                           text-[120px]
//                           font-black
//                           leading-none
//                           text-white/[0.03]
//                         "
//                       >
//                         0{index + 1}
//                       </div>

//                       <div className="relative z-10">
//                         {/* ICON */}
//                         <div
//                           className="
//                             flex h-20 w-20
//                             items-center justify-center
//                             rounded-3xl
//                             border border-white/10
//                             bg-white/5
//                             backdrop-blur-xl
//                           "
//                         >
//                           <Icon
//                             size={38}
//                             className={step.color}
//                           />
//                         </div>

//                         {/* TITLE */}
//                         <h3
//                           className="
//                             mt-8
//                             text-3xl
//                             md:text-4xl
//                             font-black
//                             leading-tight
//                             text-white
//                           "
//                         >
//                           {step.title}
//                         </h3>

//                         {/* DESC */}
//                         <p
//                           className="
//                             mt-5
//                             max-w-xl
//                             text-lg
//                             leading-relaxed
//                             text-slate-300
//                           "
//                         >
//                           {step.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* CENTER NODE */}
//                   <div
//                     className="
//                       relative z-20
//                       hidden xl:flex
//                       h-24 w-24
//                       items-center justify-center
//                       rounded-full
//                       border border-cyan-400/20
//                       bg-[#081219]
//                       backdrop-blur-2xl
//                       shadow-[0_0_60px_-12px_rgba(14,165,233,0.25)]
//                     "
//                   >
//                     {/* GLOW */}
//                     <div
//                       className="
//                         absolute inset-0
//                         rounded-full
//                         bg-cyan-400/10
//                         blur-2xl
//                       "
//                     />

//                     <span
//                       className="
//                         relative z-10
//                         text-2xl
//                         font-black
//                         text-cyan-300
//                       "
//                     >
//                       0{index + 1}
//                     </span>
//                   </div>

//                   {/* EMPTY SIDE */}
//                   <div className="hidden xl:block flex-1" />
//                 </motion.div>
//               );
//             })}
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
//                 End-To-End Restoration Delivery
//               </h3>

//               <p
//                 className="
//                   mt-5
//                   text-lg
//                   leading-relaxed
//                   text-slate-400
//                 "
//               >
//                 From initial environmental assessment to
//                 long-term ecological monitoring and 3-year DLP
//                 support, Wastely Aqua delivers fully integrated
//                 intelligent water restoration infrastructure.
//               </p>
//             </div>

//             {/* TAGS */}
//             <div className="flex flex-wrap gap-4">
//               {[
//                 "Survey",
//                 "DPR",
//                 "SITC",
//                 "Monitoring",
//                 "3-Year DLP",
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

// export default ProcessSection;


import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  ClipboardList,
  Cpu,
  Gauge,
  Map,
  Orbit,
  Radar,
  Settings2,
} from "lucide-react";

const workflowSteps = [
  {
    title: "Site Survey",
    description:
      "Comprehensive field inspections, bathymetric surveys and ecological assessments for accurate restoration planning.",
    icon: Map,
    color: "text-cyan-300",
    border: "border-cyan-400/20",
    gradient:
      "from-cyan-400/20 via-cyan-500/5 to-transparent",
  },

  {
    title: "Water Analysis",
    description:
      "Detailed laboratory testing including BOD, COD, DO, pH, chlorophyll and nutrient profiling.",
    icon: Activity,
    color: "text-emerald-300",
    border: "border-emerald-400/20",
    gradient:
      "from-emerald-400/20 via-cyan-500/5 to-transparent",
  },

  {
    title: "DPR & Engineering",
    description:
      "Preparation of integrated detailed project reports, restoration strategy and execution planning.",
    icon: ClipboardList,
    color: "text-cyan-300",
    border: "border-cyan-400/20",
    gradient:
      "from-cyan-400/20 via-emerald-500/5 to-transparent",
  },

  {
    title: "Technology Selection",
    description:
      "Deployment planning for nano bubble systems, wetlands, algae control and smart monitoring.",
    icon: Orbit,
    color: "text-emerald-300",
    border: "border-emerald-400/20",
    gradient:
      "from-emerald-400/20 via-cyan-500/5 to-transparent",
  },

  {
    title: "SITC Execution",
    description:
      "Supply, installation, testing and commissioning of integrated environmental infrastructure systems.",
    icon: Settings2,
    color: "text-cyan-300",
    border: "border-cyan-400/20",
    gradient:
      "from-cyan-400/20 via-cyan-500/5 to-transparent",
  },

  {
    title: "Smart Monitoring",
    description:
      "AI-powered MPC buoy systems with real-time analytics, IoT dashboards and predictive intelligence.",
    icon: Radar,
    color: "text-emerald-300",
    border: "border-emerald-400/20",
    gradient:
      "from-emerald-400/20 via-cyan-500/5 to-transparent",
  },

  {
    title: "Performance Optimization",
    description:
      "Continuous operational tuning, oxygenation optimization and ecological balancing for maximum impact.",
    icon: Gauge,
    color: "text-cyan-300",
    border: "border-cyan-400/20",
    gradient:
      "from-cyan-400/20 via-emerald-500/5 to-transparent",
  },

  {
    title: "3-Year DLP Support",
    description:
      "Long-term defect liability period support with maintenance, analytics and restoration performance assurance.",
    icon: Cpu,
    color: "text-emerald-300",
    border: "border-emerald-400/20",
    gradient:
      "from-emerald-400/20 via-cyan-500/5 to-transparent",
  },
];

const ProcessSection = () => {
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

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-120px]
            top-[5%]
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
        <div className="mx-auto max-w-4xl text-center">
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
            <BarChart3
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
              Integrated Restoration Workflow
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
            From Survey To

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
              Ecological Recovery
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-6 sm:mt-8
              max-w-3xl
              text-[15px]
              sm:text-lg
              lg:text-xl
              leading-relaxed
              text-slate-400
            "
          >
            A complete environmental engineering workflow
            integrating water analysis, smart monitoring,
            oxygenation systems, ecological restoration and
            long-term performance management.
          </p>
        </div>

        {/* PROCESS */}
        <div className="relative mt-14 sm:mt-16 lg:mt-24">
          {/* CENTER LINE */}
          <div
            className="
              hidden xl:block
              absolute
              left-1/2 top-0 bottom-0
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-cyan-400/0
              via-cyan-400/30
              to-cyan-400/0
            "
          />

          {/* MOBILE LINE */}
          <div
            className="
              absolute
              left-7 top-0 bottom-0
              w-px
              bg-gradient-to-b
              from-cyan-400/0
              via-cyan-400/20
              to-cyan-400/0
              xl:hidden
            "
          />

          {/* STEPS */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-10">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.04,
                  }}
                  className={`
                    relative
                    flex
                    flex-col
                    gap-5 sm:gap-6 lg:gap-8
                    xl:items-center

                    ${
                      index % 2 === 0
                        ? "xl:flex-row"
                        : "xl:flex-row-reverse"
                    }
                  `}
                >
                  {/* MOBILE NODE */}
                  <div
                    className="
                      absolute
                      left-[6px]
                      top-7
                      z-20
                      flex
                      h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-cyan-400/20
                      bg-[#081219]
                      shadow-[0_0_30px_-8px_rgba(14,165,233,0.25)]
                      xl:hidden
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-black
                        text-cyan-300
                      "
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* CARD SIDE */}
                  <div className="flex-1 pl-16 xl:pl-0">
                    <div
                      className={`
                        group
                        relative
                        overflow-hidden
                        rounded-[28px] sm:rounded-[38px]
                        border ${step.border}
                        bg-white/[0.05]
                        p-5 sm:p-7 lg:p-8
                        backdrop-blur-2xl
                        transition-all duration-500
                        hover:border-cyan-400/30
                        hover:-translate-y-1
                      `}
                    >
                      {/* BG */}
                      <div
                        className={`
                          absolute inset-0
                          bg-gradient-to-br
                          ${step.gradient}
                        `}
                      />

                      {/* WATERMARK */}
                      <div
                        className="
                          absolute
                          right-3 bottom-0
                          text-[70px]
                          sm:text-[90px]
                          lg:text-[120px]
                          font-black
                          leading-none
                          text-white/[0.03]
                        "
                      >
                        0{index + 1}
                      </div>

                      <div className="relative z-10">
                        {/* ICON */}
                        <div
                          className="
                            flex h-14 w-14
                            sm:h-16 sm:w-16
                            lg:h-20 lg:w-20
                            items-center justify-center
                            rounded-2xl sm:rounded-3xl
                            border border-white/10
                            bg-white/[0.05]
                            backdrop-blur-xl
                          "
                        >
                          <Icon
                            size={30}
                            className={step.color}
                          />
                        </div>

                        {/* TITLE */}
                        <h3
                          className="
                            mt-5 sm:mt-7
                            text-2xl
                            sm:text-3xl
                            lg:text-4xl
                            font-black
                            leading-tight
                            tracking-[-0.04em]
                            text-white
                          "
                        >
                          {step.title}
                        </h3>

                        {/* DESC */}
                        <p
                          className="
                            mt-4 sm:mt-5
                            max-w-xl
                            text-sm sm:text-base lg:text-lg
                            leading-relaxed
                            text-slate-300
                          "
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* DESKTOP NODE */}
                  <div
                    className="
                      relative z-20
                      hidden xl:flex
                      h-20 w-20
                      items-center justify-center
                      rounded-full
                      border border-cyan-400/20
                      bg-[#081219]
                      backdrop-blur-2xl
                      shadow-[0_0_50px_-10px_rgba(14,165,233,0.22)]
                    "
                  >
                    {/* GLOW */}
                    <div
                      className="
                        absolute inset-0
                        rounded-full
                        bg-cyan-400/10
                        blur-2xl
                      "
                    />

                    <span
                      className="
                        relative z-10
                        text-xl
                        font-black
                        text-cyan-300
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* EMPTY */}
                  <div className="hidden xl:block flex-1" />
                </motion.div>
              );
            })}
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
            mt-14 sm:mt-16 lg:mt-24
            overflow-hidden
            rounded-[32px] sm:rounded-[42px]
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
                End-To-End Restoration Delivery
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
                From initial environmental assessment to
                long-term ecological monitoring and 3-year DLP
                support, Wastely Aqua delivers fully integrated
                intelligent water restoration infrastructure.
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
                "Survey",
                "DPR",
                "SITC",
                "Monitoring",
                "3-Year DLP",
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

export default ProcessSection;