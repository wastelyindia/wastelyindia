// import { motion } from "framer-motion";
// import {
//   Activity,
//   BarChart3,
//   Cpu,
//   Globe,
//   Radar,
//   Recycle,
//   Waves,
// } from "lucide-react";

// const metrics = [
//   {
//     icon: Waves,
//     value: "₹33+ Cr",
//     label: "Integrated Restoration Capability",
//     description:
//       "Large-scale ecological restoration and intelligent water infrastructure deployment.",
//     gradient:
//       "from-cyan-400/20 via-cyan-500/5 to-transparent",
//     border: "border-cyan-400/20",
//     text: "text-cyan-300",
//   },

//   {
//     icon: Recycle,
//     value: "₹20+ Cr",
//     label: "Lake Rejuvenation Projects",
//     description:
//       "Advanced lake restoration including nano bubble aeration and floating wetlands.",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//     border: "border-emerald-400/20",
//     text: "text-emerald-300",
//   },

//   {
//     icon: Radar,
//     value: "24/7",
//     label: "Smart Monitoring Systems",
//     description:
//       "AI-driven analytics, MPC buoy systems and real-time ecological intelligence.",
//     gradient:
//       "from-cyan-400/20 via-emerald-500/5 to-transparent",
//     border: "border-cyan-400/20",
//     text: "text-cyan-300",
//   },

//   {
//     icon: Globe,
//     value: "5+",
//     label: "Major Water Bodies Restored",
//     description:
//       "Integrated rejuvenation of lakes, ponds and urban ecological systems.",
//     gradient:
//       "from-emerald-400/20 via-cyan-500/5 to-transparent",
//     border: "border-emerald-400/20",
//     text: "text-emerald-300",
//   },
// ];

// const ImpactMetrics = () => {
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
//               Environmental Impact
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
//             Restoration
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
//               Impact At Scale
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
//             Large-scale environmental engineering systems
//             transforming polluted water bodies through
//             integrated ecological restoration, smart monitoring
//             and sustainable infrastructure technologies.
//           </p>
//         </div>

//         {/* METRICS GRID */}
//         <div
//           className="
//             mt-20
//             grid
//             grid-cols-1
//             md:grid-cols-2
//             xl:grid-cols-12
//             gap-6
//             auto-rows-[280px]
//           "
//         >
//           {metrics.map((item, index) => {
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
//                   rounded-[38px]
//                   border ${item.border}
//                   bg-white/5
//                   backdrop-blur-2xl
//                   p-8 md:p-10
//                   transition-all duration-500
//                   hover:-translate-y-2
//                   hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]

//                   ${
//                     index === 0
//                       ? "xl:col-span-7"
//                       : "xl:col-span-5"
//                   }
//                 `}
//               >
//                 {/* GRADIENT */}
//                 <div
//                   className={`
//                     absolute inset-0
//                     opacity-90
//                     bg-gradient-to-br
//                     ${item.gradient}
//                   `}
//                 />

//                 {/* BIG GLOW */}
//                 <div
//                   className="
//                     absolute right-[-80px] top-[-80px]
//                     h-[220px] w-[220px]
//                     rounded-full
//                     bg-white/5
//                     blur-3xl
//                   "
//                 />

//                 {/* NUMBER WATERMARK */}
//                 <div
//                   className="
//                     absolute right-6 bottom-2
//                     text-[120px]
//                     md:text-[180px]
//                     font-black
//                     leading-none
//                     text-white/[0.03]
//                   "
//                 >
//                   0{index + 1}
//                 </div>

//                 {/* CONTENT */}
//                 <div className="relative z-10 flex h-full flex-col justify-between">
//                   {/* TOP */}
//                   <div>
//                     {/* ICON */}
//                     <div
//                       className="
//                         flex h-20 w-20
//                         items-center justify-center
//                         rounded-3xl
//                         border border-white/10
//                         bg-white/5
//                         backdrop-blur-xl
//                       "
//                     >
//                       <Icon
//                         size={38}
//                         className={item.text}
//                       />
//                     </div>

//                     {/* VALUE */}
//                     <h3
//                       className="
//                         mt-10
//                         text-5xl
//                         md:text-7xl
//                         font-black
//                         leading-none
//                         tracking-[-0.05em]
//                         text-white
//                       "
//                     >
//                       {item.value}
//                     </h3>

//                     {/* LABEL */}
//                     <h4
//                       className="
//                         mt-5
//                         text-2xl
//                         md:text-3xl
//                         font-black
//                         leading-tight
//                         text-white
//                       "
//                     >
//                       {item.label}
//                     </h4>

//                     {/* DESC */}
//                     <p
//                       className="
//                         mt-5
//                         max-w-xl
//                         leading-relaxed
//                         text-slate-300
//                       "
//                     >
//                       {item.description}
//                     </p>
//                   </div>

//                   {/* BOTTOM */}
//                   <div
//                     className="
//                       mt-10
//                       flex items-center gap-3
//                       text-sm
//                       uppercase
//                       tracking-[0.18em]
//                       text-slate-400
//                     "
//                   >
//                     <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                     Intelligent Water Infrastructure
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* BOTTOM STRIP */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
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
//                 Integrated Restoration Ecosystem
//               </h3>

//               <p
//                 className="
//                   mt-5
//                   text-lg
//                   leading-relaxed
//                   text-slate-400
//                 "
//               >
//                 Nano bubble aeration, floating wetlands,
//                 bioremediation, algae control and intelligent
//                 monitoring systems working together as one
//                 unified ecological infrastructure platform.
//               </p>
//             </div>

//             {/* RIGHT */}
//             <div
//               className="
//                 flex flex-wrap
//                 gap-4
//               "
//             >
//               {[
//                 "Nano Bubble",
//                 "Floating Wetlands",
//                 "MPC Buoy",
//                 "Bioremediation",
//                 "Algae Control",
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

// export default ImpactMetrics;



import { motion } from "framer-motion";
import {
  BarChart3,
  Globe,
  Radar,
  Recycle,
  Waves,
} from "lucide-react";

const metrics = [
  {
    icon: Waves,
    value: "₹33+ Cr",
    label: "Integrated Restoration Capability",
    description:
      "Large-scale ecological restoration and intelligent water infrastructure deployment.",
    gradient:
      "from-cyan-400/20 via-cyan-500/5 to-transparent",
    border: "border-cyan-400/20",
    text: "text-cyan-300",
  },

  {
    icon: Recycle,
    value: "₹20+ Cr",
    label: "Lake Rejuvenation Projects",
    description:
      "Advanced lake restoration including nano bubble aeration and floating wetlands.",
    gradient:
      "from-emerald-400/20 via-cyan-500/5 to-transparent",
    border: "border-emerald-400/20",
    text: "text-emerald-300",
  },

  {
    icon: Radar,
    value: "24/7",
    label: "Smart Monitoring Systems",
    description:
      "AI-driven analytics, MPC buoy systems and real-time ecological intelligence.",
    gradient:
      "from-cyan-400/20 via-emerald-500/5 to-transparent",
    border: "border-cyan-400/20",
    text: "text-cyan-300",
  },

  {
    icon: Globe,
    value: "5+",
    label: "Major Water Bodies Restored",
    description:
      "Integrated rejuvenation of lakes, ponds and urban ecological systems.",
    gradient:
      "from-emerald-400/20 via-cyan-500/5 to-transparent",
    border: "border-emerald-400/20",
    text: "text-emerald-300",
  },
];

const ImpactMetrics = () => {
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

      {/* AMBIENT LIGHT */}
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
              Environmental Impact
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
            Restoration

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
              Impact At Scale
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
            Large-scale environmental engineering systems
            transforming polluted water bodies through
            integrated ecological restoration, smart monitoring
            and sustainable infrastructure technologies.
          </p>
        </div>

        {/* METRICS */}
        <div
          className="
            mt-14 sm:mt-16 lg:mt-20
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-12
            gap-4 sm:gap-5 lg:gap-6
            auto-rows-auto xl:auto-rows-[320px]
          "
        >
          {metrics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
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
                  p-5 sm:p-7 lg:p-8
                  transition-all duration-500
                  hover:border-cyan-400/30
                  hover:-translate-y-1

                  ${
                    index === 0
                      ? "xl:col-span-7"
                      : "xl:col-span-5"
                  }
                `}
              >
                {/* CARD GLOW */}
                <div
                  className={`
                    absolute inset-0
                    bg-gradient-to-br
                    opacity-90
                    ${item.gradient}
                  `}
                />

                {/* TOP LIGHT */}
                <div
                  className="
                    absolute
                    right-[-60px]
                    top-[-60px]
                    h-[180px] w-[180px]
                    rounded-full
                    bg-white/[0.04]
                    blur-3xl
                  "
                />

                {/* WATERMARK */}
                <div
                  className="
                    absolute
                    bottom-0 right-4
                    text-[90px]
                    sm:text-[120px]
                    lg:text-[160px]
                    font-black
                    leading-none
                    text-white/[0.03]
                  "
                >
                  0{index + 1}
                </div>

                {/* CONTENT */}
                <div
                  className="
                    relative z-10
                    flex h-full flex-col justify-between
                  "
                >
                  <div>
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
                        className={item.text}
                      />
                    </div>

                    {/* VALUE */}
                    <h3
                      className="
                        mt-6 sm:mt-8 lg:mt-10
                        text-4xl
                        sm:text-5xl
                        lg:text-7xl
                        font-black
                        leading-none
                        tracking-[-0.05em]
                        text-white
                      "
                    >
                      {item.value}
                    </h3>

                    {/* LABEL */}
                    <h4
                      className="
                        mt-4 sm:mt-5
                        text-xl
                        sm:text-2xl
                        lg:text-3xl
                        font-black
                        leading-tight
                        text-white
                      "
                    >
                      {item.label}
                    </h4>

                    {/* DESC */}
                    <p
                      className="
                        mt-4 sm:mt-5
                        max-w-xl
                        text-sm sm:text-base
                        leading-relaxed
                        text-slate-300
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* FOOTER */}
                  <div
                    className="
                      mt-8 sm:mt-10
                      flex items-center gap-3
                      text-[11px] sm:text-sm
                      uppercase
                      tracking-[0.18em]
                      text-slate-400
                    "
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />

                    Intelligent Water Infrastructure
                  </div>
                </div>
              </motion.div>
            );
          })}
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
                Integrated Restoration Ecosystem
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
                Nano bubble aeration, floating wetlands,
                bioremediation, algae control and intelligent
                monitoring systems working together as one
                unified ecological infrastructure platform.
              </p>
            </div>

            {/* RIGHT */}
            <div
              className="
                flex flex-wrap
                gap-3
                lg:max-w-[420px]
                lg:justify-end
              "
            >
              {[
                "Nano Bubble",
                "Floating Wetlands",
                "MPC Buoy",
                "Bioremediation",
                "Algae Control",
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

export default ImpactMetrics;