
// import { motion } from "framer-motion";
// import {
//   Activity,
//   Cpu,
//   Leaf,
//   Orbit,
//   Radar,
//   Recycle,
//   Sparkles,
//   Waves,
// } from "lucide-react";

// const ecosystemNodes = [
//   {
//     title: "Nano Bubble",
//     desc: "High-efficiency oxygen transfer and dissolved oxygen enhancement.",
//     icon: Waves,
//     position:
//       "top-[4%] left-[40%] -translate-x-1/2",
//     glow: "from-cyan-400/20 to-cyan-500/5",
//     border: "border-cyan-400/20",
//     text: "text-cyan-300",
//   },

//   {
//     title: "MPC Smart Buoy",
//     desc: "Real-time water intelligence and predictive analytics.",
//     icon: Radar,
//     position:
//       "top-[24%] right-[4%] 2xl:right-[10%]",
//     glow: "from-emerald-400/20 to-cyan-500/5",
//     border: "border-emerald-400/20",
//     text: "text-emerald-300",
//   },

//   {
//     title: "Floating Wetlands",
//     desc: "Nature-based restoration and ecological filtration systems.",
//     icon: Leaf,
//     position:
//       "bottom-[18%] right-[4%] 2xl:right-[10%]",
//     glow: "from-cyan-400/20 to-emerald-500/5",
//     border: "border-cyan-400/20",
//     text: "text-cyan-300",
//   },

//   {
//     title: "Bioremediation",
//     desc: "Microbial ecosystem restoration for polluted water bodies.",
//     icon: Recycle,
//     position:
//       "bottom-[4%] left-[40%] -translate-x-1/2",
//     glow: "from-emerald-400/20 to-cyan-500/5",
//     border: "border-emerald-400/20",
//     text: "text-emerald-300",
//   },

//   {
//     title: "Algae Control",
//     desc: "Ultrasonic suppression with intelligent ecological monitoring.",
//     icon: Activity,
//     position:
//       "bottom-[18%] left-[4%] 2xl:left-[10%]",
//     glow: "from-cyan-400/20 to-emerald-500/5",
//     border: "border-cyan-400/20",
//     text: "text-cyan-300",
//   },

//   {
//     title: "LTSD Systems",
//     desc: "Low temperature sludge drying and sustainable waste reduction.",
//     icon: Cpu,
//     position:
//       "top-[24%] left-[4%] 2xl:left-[10%]",
//     glow: "from-emerald-400/20 to-cyan-500/5",
//     border: "border-emerald-400/20",
//     text: "text-emerald-300",
//   },
// ];

// const IntegratedEcosystem = () => {
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

//       {/* AMBIENT GLOW */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute
//             left-[-120px]
//             top-[-120px]
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
//             bottom-[-120px]
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
//         <div className="mx-auto max-w-4xl text-center">
//           {/* BADGE */}
//           <div
//             className="
//               mb-7 sm:mb-8
//               inline-flex items-center gap-3
//               rounded-full
//               border border-cyan-400/20
//               bg-white/[0.05]
//               px-4 sm:px-5
//               py-2
//               backdrop-blur-xl
//             "
//           >
//             <Sparkles
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
//               Integrated Restoration Ecosystem
//             </span>
//           </div>

//           {/* TITLE */}
//           <h2
//             className="
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
//             Engineering Connected

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
//               Water Intelligence
//             </span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p
//             className="
//               mx-auto
//               mt-6 sm:mt-8
//               max-w-3xl
//               text-[15px]
//               sm:text-lg
//               lg:text-xl
//               leading-relaxed
//               text-slate-300
//             "
//           >
//             Wastely Aqua integrates ecological restoration,
//             oxygenation, smart monitoring, algae control and
//             sustainable sludge management into one intelligent
//             environmental infrastructure ecosystem.
//           </p>
//         </div>

//         {/* DESKTOP ORBIT */}
//         <div
//           className="
//             relative
//             hidden
//             xl:block
//             h-[880px]
//             2xl:h-[940px]
//             mt-20
//           "
//         >
//           {/* OUTER RINGS */}
//           <div
//             className="
//               absolute
//               left-1/2 top-1/2
//               h-[620px] w-[620px]
//               -translate-x-1/2 -translate-y-1/2
//               rounded-full
//               border border-white/5
//             "
//           />

//           <div
//             className="
//               absolute
//               left-1/2 top-1/2
//               h-[760px] w-[760px]
//               -translate-x-1/2 -translate-y-1/2
//               rounded-full
//               border border-cyan-400/10
//             "
//           />

//           {/* CENTER CORE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8 }}
//             className="
//               absolute
//               left-[35%] top-[35%]
//               z-20
//               -translate-x-1/2 -translate-y-1/2
//             "
//           >
//             <div
//               className="
//                 relative
//                 flex h-[300px] w-[300px]
//                 items-center justify-center
//                 rounded-full
//                 border border-cyan-400/20
//                 bg-white/[0.05]
//                 backdrop-blur-3xl
//                 shadow-[0_0_80px_-12px_rgba(14,165,233,0.2)]
//               "
//             >
//               {/* INNER LIGHT */}
//               <div
//                 className="
//                   absolute inset-0
//                   rounded-full
//                   bg-gradient-to-br
//                   from-cyan-400/15
//                   via-transparent
//                   to-emerald-400/10
//                   blur-3xl
//                 "
//               />

//               {/* INNER RING */}
//               <div
//                 className="
//                   absolute inset-5
//                   rounded-full
//                   border border-white/10
//                 "
//               />

//               {/* CONTENT */}
//               <div className="relative z-10 px-8 text-center">
//                 <div
//                   className="
//                     mx-auto
//                     flex h-20 w-20
//                     items-center justify-center
//                     rounded-3xl
//                     border border-white/10
//                     bg-gradient-to-br
//                     from-cyan-400/10
//                     to-emerald-400/10
//                   "
//                 >
//                   <Orbit
//                     size={40}
//                     className="text-cyan-300"
//                   />
//                 </div>

//                 <h3
//                   className="
//                     mt-6
//                     text-3xl
//                     font-black
//                     leading-tight
//                     tracking-[-0.04em]
//                     text-white
//                   "
//                 >
//                   Smart Water
//                   <span className="block">
//                     Restoration
//                   </span>
//                 </h3>

//                 <p
//                   className="
//                     mt-3
//                     text-sm
//                     leading-relaxed
//                     text-slate-400
//                   "
//                 >
//                   Intelligent integrated environmental
//                   infrastructure ecosystem
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* DESKTOP NODES */}
//           {ecosystemNodes.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.92 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.06,
//                 }}
//                 animate={{
//                   y: [0, -8, 0],
//                 }}
//                 className={`absolute ${item.position}`}
//               >
//                 <div
//                   className={`
//                     relative
//                     w-[240px]
//                     overflow-hidden
//                     rounded-[30px]
//                     border ${item.border}
//                     bg-white/[0.05]
//                     backdrop-blur-2xl
//                     p-6
//                     transition-all duration-500
//                     hover:-translate-y-1
//                     hover:border-cyan-400/30
//                   `}
//                 >
//                   {/* GLOW */}
//                   <div
//                     className={`
//                       absolute inset-0
//                       bg-gradient-to-br
//                       opacity-80
//                       ${item.glow}
//                     `}
//                   />

//                   <div className="relative z-10">
//                     {/* ICON */}
//                     <div
//                       className="
//                         flex h-14 w-14
//                         items-center justify-center
//                         rounded-2xl
//                         border border-white/10
//                         bg-white/[0.05]
//                       "
//                     >
//                       <Icon
//                         size={26}
//                         className={item.text}
//                       />
//                     </div>

//                     {/* TITLE */}
//                     <h3
//                       className="
//                         mt-5
//                         text-xl
//                         font-black
//                         leading-tight
//                         text-white
//                       "
//                     >
//                       {item.title}
//                     </h3>

//                     {/* DESCRIPTION */}
//                     <p
//                       className="
//                         mt-3
//                         text-sm
//                         leading-relaxed
//                         text-slate-400
//                       "
//                     >
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* MOBILE + TABLET */}
//         <div
//           className="
//             mt-14 sm:mt-16 lg:mt-20
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             gap-4 sm:gap-5 lg:gap-6
//             xl:hidden
//           "
//         >
//           {ecosystemNodes.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.15 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.05,
//                 }}
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[28px]
//                   border border-white/10
//                   bg-white/[0.05]
//                   backdrop-blur-2xl
//                   p-5 sm:p-6
//                   transition-all duration-500
//                   hover:border-cyan-400/20
//                 "
//               >
//                 {/* GLOW */}
//                 <div
//                   className={`
//                     absolute inset-0
//                     opacity-80
//                     bg-gradient-to-br
//                     ${item.glow}
//                   `}
//                 />

//                 <div className="relative z-10">
//                   {/* ICON */}
//                   <div
//                     className="
//                       flex h-14 w-14
//                       items-center justify-center
//                       rounded-2xl
//                       border border-white/10
//                       bg-white/[0.05]
//                     "
//                   >
//                     <Icon
//                       size={26}
//                       className={item.text}
//                     />
//                   </div>

//                   {/* TITLE */}
//                   <h3
//                     className="
//                       mt-5
//                       text-xl sm:text-2xl
//                       font-black
//                       leading-tight
//                       text-white
//                     "
//                   >
//                     {item.title}
//                   </h3>

//                   {/* DESCRIPTION */}
//                   <p
//                     className="
//                       mt-3
//                       text-sm sm:text-base
//                       leading-relaxed
//                       text-slate-400
//                     "
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntegratedEcosystem;



import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  Leaf,
  Orbit,
  Radar,
  Recycle,
  Sparkles,
  Waves,
} from "lucide-react";

const ecosystemNodes = [
  {
    title: "Nano Bubble",
    desc: "High-efficiency oxygen transfer and dissolved oxygen enhancement.",
    icon: Waves,
    glow: "from-cyan-400/20 to-cyan-500/5",
    border: "border-cyan-400/20",
    text: "text-cyan-300",
  },

  {
    title: "MPC Smart Buoy",
    desc: "Real-time water intelligence and predictive analytics.",
    icon: Radar,
    glow: "from-emerald-400/20 to-cyan-500/5",
    border: "border-emerald-400/20",
    text: "text-emerald-300",
  },

  {
    title: "Floating Wetlands",
    desc: "Nature-based restoration and ecological filtration systems.",
    icon: Leaf,
    glow: "from-cyan-400/20 to-emerald-500/5",
    border: "border-cyan-400/20",
    text: "text-cyan-300",
  },

  {
    title: "Bioremediation",
    desc: "Microbial ecosystem restoration for polluted water bodies.",
    icon: Recycle,
    glow: "from-emerald-400/20 to-cyan-500/5",
    border: "border-emerald-400/20",
    text: "text-emerald-300",
  },

  {
    title: "Algae Control",
    desc: "Ultrasonic suppression with intelligent ecological monitoring.",
    icon: Activity,
    glow: "from-cyan-400/20 to-emerald-500/5",
    border: "border-cyan-400/20",
    text: "text-cyan-300",
  },

  {
    title: "LTSD Systems",
    desc: "Low temperature sludge drying and sustainable waste reduction.",
    icon: Cpu,
    glow: "from-emerald-400/20 to-cyan-500/5",
    border: "border-emerald-400/20",
    text: "text-emerald-300",
  },
];

const IntegratedEcosystem = () => {
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

      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]
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
            bottom-[-120px]
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
              mb-7 sm:mb-8
              inline-flex items-center gap-3
              rounded-full
              border border-cyan-400/20
              bg-white/[0.05]
              px-4 sm:px-5
              py-2
              backdrop-blur-xl
            "
          >
            <Sparkles
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
              Integrated Restoration Ecosystem
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
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
            Engineering Connected

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
              Water Intelligence
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
              text-slate-300
            "
          >
            Wastely Aqua integrates ecological restoration,
            oxygenation, smart monitoring, algae control and
            sustainable sludge management into one intelligent
            environmental infrastructure ecosystem.
          </p>
        </div>

        {/* DESKTOP ORBIT */}
        <div
          className="
            relative
            hidden xl:flex
            items-center justify-center
            h-[900px]
            2xl:h-[980px]
            mt-20
          "
        >
          {/* OUTER RINGS */}
          <div
            className="
              absolute
              h-[620px] w-[620px]
              rounded-full
              border border-white/5
            "
          />

          <div
            className="
              absolute
              h-[760px] w-[760px]
              rounded-full
              border border-cyan-400/10
            "
          />

          {/* GLOW RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[760px]
              w-[760px]
              rounded-full
              border border-transparent
            "
          >
            <div
              className="
                absolute
                top-0 left-1/2
                h-28 w-28
                -translate-x-1/2
                rounded-full
                bg-cyan-400/20
                blur-3xl
              "
            />
          </motion.div>

          {/* CENTER CORE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-30"
          >
            <div
              className="
                relative
                flex h-[280px] w-[280px]
                2xl:h-[320px] 2xl:w-[320px]
                items-center justify-center
                rounded-full
                border border-cyan-400/20
                bg-white/[0.05]
                backdrop-blur-3xl
                shadow-[0_0_80px_-12px_rgba(14,165,233,0.25)]
              "
            >
              {/* INNER LIGHT */}
              <div
                className="
                  absolute inset-0
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-400/15
                  via-transparent
                  to-emerald-400/10
                  blur-3xl
                "
              />

              {/* INNER RING */}
              <div
                className="
                  absolute inset-5
                  rounded-full
                  border border-white/10
                "
              />

              {/* PULSE */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute inset-0
                  rounded-full
                  bg-cyan-400/10
                  blur-2xl
                "
              />

              {/* CONTENT */}
              <div className="relative z-10 px-8 text-center">
                <div
                  className="
                    mx-auto
                    flex h-20 w-20
                    items-center justify-center
                    rounded-3xl
                    border border-white/10
                    bg-gradient-to-br
                    from-cyan-400/10
                    to-emerald-400/10
                  "
                >
                  <Orbit
                    size={40}
                    className="text-cyan-300"
                  />
                </div>

                <h3
                  className="
                    mt-6
                    text-3xl
                    font-black
                    leading-tight
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  Smart Water
                  <span className="block">
                    Restoration
                  </span>
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-slate-400
                  "
                >
                  Intelligent integrated environmental
                  infrastructure ecosystem
                </p>
              </div>
            </div>
          </motion.div>

          {/* ORBIT SYSTEM */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[760px]
              w-[760px]
              flex
              items-center
              justify-center
            "
          >
            {ecosystemNodes.map((item, index) => {
              const Icon = item.icon;

              const angle =
                (360 / ecosystemNodes.length) * index;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    transform: `
                      rotate(${angle}deg)
                      translateY(-380px)
                    `,
                  }}
                >
                  {/* COUNTER ROTATE */}
                  <motion.div
                    // animate={{ rotate: -360 }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      transform: `rotate(-${angle}deg)`,
                    }}
                    className="
                      w-[220px]
                      2xl:w-[240px]
                    "
                  >
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.03,
                      }}
                      className={`
                        relative
                        overflow-hidden
                        rounded-[30px]
                        border ${item.border}
                        bg-white/[0.05]
                        backdrop-blur-2xl
                        p-6
                      `}
                    >
                      {/* GLOW */}
                      <div
                        className={`
                          absolute inset-0
                          bg-gradient-to-br
                          opacity-80
                          ${item.glow}
                        `}
                      />

                      {/* SHINE */}
                      <div
                        className="
                          absolute inset-0
                          bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]
                          translate-x-[-120%]
                          hover:translate-x-[120%]
                          transition-transform
                          duration-1000
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
                            className={item.text}
                          />
                        </div>

                        {/* TITLE */}
                        <h3
                          className="
                            mt-5
                            text-xl
                            font-black
                            leading-tight
                            text-white
                          "
                        >
                          {item.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p
                          className="
                            mt-3
                            text-sm
                            leading-relaxed
                            text-slate-400
                          "
                        >
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
          
        </div>

        {/* MOBILE + TABLET */}
        <div
          className="
            mt-14 sm:mt-16 lg:mt-20
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4 sm:gap-5 lg:gap-6
            xl:hidden
          "
        >
          {/* CENTER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              sm:col-span-2
              relative
              overflow-hidden
              rounded-[32px]
              border border-cyan-400/20
              bg-white/[0.05]
              backdrop-blur-2xl
              p-8
            "
          >
            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-cyan-400/10
                via-transparent
                to-emerald-400/10
              "
            />

            <div className="relative z-10 text-center">
              <div
                className="
                  mx-auto
                  flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.05]
                "
              >
                <Orbit
                  size={32}
                  className="text-cyan-300"
                />
              </div>

              <h3
                className="
                  mt-5
                  text-2xl sm:text-3xl
                  font-black
                  text-white
                "
              >
                Smart Water Restoration
              </h3>

              <p
                className="
                  mt-3
                  text-sm sm:text-base
                  leading-relaxed
                  text-slate-400
                "
              >
                Intelligent integrated environmental
                infrastructure ecosystem
              </p>
            </div>
          </motion.div>

          {/* MOBILE CARDS */}
          {ecosystemNodes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -5 }}
                className={`
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border ${item.border}
                  bg-white/[0.05]
                  backdrop-blur-2xl
                  p-5 sm:p-6
                `}
              >
                {/* GLOW */}
                <div
                  className={`
                    absolute inset-0
                    opacity-80
                    bg-gradient-to-br
                    ${item.glow}
                  `}
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
                      className={item.text}
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-5
                      text-xl sm:text-2xl
                      font-black
                      leading-tight
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3
                      text-sm sm:text-base
                      leading-relaxed
                      text-slate-400
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntegratedEcosystem;