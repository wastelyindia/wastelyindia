// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Activity,
//   ArrowRight,
//   Cpu,
//   Mail,
//   Orbit,
//   PhoneCall,
//   Radar,
//   Recycle,
//   Sparkles,
//   Waves,
// } from "lucide-react";

// import bgImage from "../../assets/images/Wastely_hero_1.jpeg";

// const floatingTech = [
//   {
//     title: "Nano Bubble",
//     icon: Waves,
//     position:
//       "top-[12%] left-[5%]",
//     color: "text-cyan-300",
//   },

//   {
//     title: "MPC Smart Buoy",
//     icon: Radar,
//     position:
//       "top-[20%] right-[6%]",
//     color: "text-emerald-300",
//   },

//   {
//     title: "Floating Wetlands",
//     icon: Orbit,
//     position:
//       "bottom-[18%] left-[8%]",
//     color: "text-cyan-300",
//   },

//   {
//     title: "Bioremediation",
//     icon: Recycle,
//     position:
//       "bottom-[12%] right-[8%]",
//     color: "text-emerald-300",
//   },
// ];

// const miniMetrics = [
//   {
//     value: "24/7",
//     label: "Smart Monitoring",
//   },

//   {
//     value: "AI",
//     label: "Predictive Analytics",
//   },

//   {
//     value: "Multi-Tech",
//     label: "Integrated Ecosystem",
//   },
// ];

// const CTASection = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#081219] py-32">
      
//       {/* WATER AMBIENT GLOW */}
//       <div
//   className="
//     absolute inset-0
//     opacity-20
//     bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]
//     animate-pulse
//     animate-[pulse_8s_ease-in-out_infinite]
//   "
// />
//       {/* GRID */}
//       <div
//         className="
//           absolute inset-0
//           opacity-[0.04]
//           bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
//           bg-[size:90px_90px]
//         "
//       />

//       {/* BACKGROUND */}
//       <div className="absolute inset-0">
//         {/* IMAGE */}
//         <img
//           src={bgImage}
//           alt="Water Restoration"
//           className="
//             h-full w-full
//             object-cover
//             scale-105
//             opacity-25
//           "
//         />

//         {/* OVERLAY */}
//         <div
//           className="
//             absolute inset-0
//             bg-[#081219]/80
//           "
//         />

//         <div
//           className="
//             absolute inset-0
//             bg-gradient-to-b
//             from-[#081219]
//             via-[#081219]/70
//             to-[#081219]
//           "
//         />

//         {/* CYAN GLOW */}
//         <div
//           className="
//             absolute left-[-150px] top-[-150px]
//             h-[650px] w-[650px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[180px]
//           "
//         />

//         {/* EMERALD GLOW */}
//         <div
//           className="
//             absolute right-[-120px] bottom-[-120px]
//             h-[550px] w-[550px]
//             rounded-full
//             bg-emerald-500/10
//             blur-[180px]
//           "
//         />
//       </div>

//       {/* FLOATING TECHNOLOGY PILLS */}
//       <div className="hidden xl:block">
//         {floatingTech.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               animate={{
//                 y: [0, -12, 0],
//               }}
//               transition={{
//                 duration: 5 + index,
//                 repeat: Infinity,
//               }}
//               className={`
//                 absolute z-20
//                 ${item.position}
//               `}
//             >
//               <div
//                 className="
//                   flex items-center gap-4
//                   rounded-[28px]
//                   border border-white/10
//                   bg-white/5
//                   px-6 py-5
//                   backdrop-blur-2xl
//                   shadow-[0_0_60px_-12px_rgba(14,165,233,0.25)]
//                 "
//               >
//                 {/* ICON */}
//                 <div
//                   className="
//                     flex h-14 w-14
//                     items-center justify-center
//                     rounded-2xl
//                     border border-white/10
//                     bg-white/5
//                   "
//                 >
//                   <Icon
//                     size={28}
//                     className={item.color}
//                   />
//                 </div>

//                 {/* TEXT */}
//                 <div>
//                   <p className="font-semibold text-white">
//                     {item.title}
//                   </p>

//                   <p className="text-sm text-slate-400">
//                     Restoration Technology
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="
//             relative
//             overflow-hidden
//             rounded-[48px]
//             border border-white/10
//             bg-white/5
//             backdrop-blur-3xl
//           "
//         >
//           {/* INNER BG */}
//           <div
//             className="
//               absolute inset-0
//               bg-gradient-to-br
//               from-cyan-400/10
//               via-transparent
//               to-emerald-400/10
//             "
//           />

//           {/* WATERMARK */}
//           <div
//             className="
//               absolute right-[-40px] bottom-[-40px]
//               text-[180px]
//               md:text-[260px]
//               font-black
//               leading-none
//               text-white/[0.03]
//             "
//           >
//             WA
//           </div>

//           {/* CONTENT */}
//           <div
//             className="
//               relative z-10
//               px-8 py-16
//               md:px-16 md:py-24
//               xl:px-24
//             "
//           >
//             {/* TOP */}
//             <div className="max-w-5xl">
//               {/* LABEL */}
//               <div
//                 className="
//                   inline-flex items-center gap-3
//                   rounded-full
//                   border border-cyan-400/20
//                   bg-cyan-400/10
//                   px-5 py-2
//                   backdrop-blur-xl
//                 "
//               >
//                 <Sparkles
//                   size={14}
//                   className="text-cyan-300"
//                 />

//                 <span
//                   className="
//                     text-xs
//                     uppercase
//                     tracking-[0.25em]
//                     text-cyan-200
//                   "
//                 >
//                   Intelligent Water Infrastructure
//                 </span>
//               </div>

//               {/* VALUE */}
//               <div
//                 className="
//                   mt-8
//                   inline-flex items-center gap-3
//                   rounded-full
//                   border border-emerald-400/20
//                   bg-emerald-400/10
//                   px-5 py-3
//                   backdrop-blur-xl
//                 "
//               >
//                 <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

//                 <span
//                   className="
//                     text-sm
//                     uppercase
//                     tracking-[0.2em]
//                     text-emerald-200
//                   "
//                 >
//                   ₹33+ Cr Integrated Restoration Capability
//                 </span>
//               </div>

//               {/* HEADING */}
//               <h2
//                 className="
//                   mt-10
//                   text-5xl
//                   md:text-7xl
//                   xl:text-[92px]
//                   font-black
//                   leading-[0.92]
//                   tracking-[-0.05em]
//                   text-white
//                 "
//               >
//                 Build The Future
//                 <span
//                   className="
//                     block
//                     bg-gradient-to-r
//                     from-cyan-300
//                     via-cyan-400
//                     to-emerald-400
//                     bg-clip-text
//                     text-transparent
//                   "
//                 >
//                   Of Water Restoration
//                 </span>
//               </h2>

//               {/* DESCRIPTION */}
//               <p
//                 className="
//                   mt-10
//                   max-w-4xl
//                   text-lg
//                   md:text-xl
//                   leading-relaxed
//                   text-slate-300
//                 "
//               >
//                 Integrated monitoring, nano bubble
//                 oxygenation, ecological restoration,
//                 bioremediation and intelligent environmental
//                 infrastructure systems engineered for
//                 sustainable water ecosystems.
//               </p>
//             </div>

//             {/* MINI METRICS */}
//             <div
//               className="
//                 mt-14
//                 grid
//                 grid-cols-1
//                 md:grid-cols-3
//                 gap-5
//               "
//             >
//               {miniMetrics.map((item, index) => (
//                 <div
//                   key={index}
//                   className="
//                     rounded-[28px]
//                     border border-white/10
//                     bg-white/5
//                     backdrop-blur-2xl
//                     p-6
//                   "
//                 >
//                   <h3
//                     className="
//                       text-3xl
//                       md:text-4xl
//                       font-black
//                       bg-gradient-to-r
//                       from-cyan-300
//                       to-emerald-300
//                       bg-clip-text
//                       text-transparent
//                     "
//                   >
//                     {item.value}
//                   </h3>

//                   <p className="mt-3 text-slate-400">
//                     {item.label}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* TECH TAGS */}
//             <div className="mt-12 flex flex-wrap gap-4">
//               {[
//                 "Nano Bubble Aeration",
//                 "Floating Wetlands",
//                 "MPC Smart Buoy",
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

//             {/* BUTTONS */}
//             <div
//               className="
//                 mt-14
//                 flex flex-col
//                 sm:flex-row
//                 gap-5
//               "
//             >
//               {/* PRIMARY */}
//               <Link
//                 to="/contact"
//                 className="
//                   group
//                   inline-flex items-center justify-center gap-3
//                   rounded-full
//                   bg-gradient-to-r
//                   from-cyan-500
//                   to-emerald-500
//                   px-10 py-5
//                   text-lg
//                   font-semibold
//                   text-white
//                   transition-all duration-300
//                   hover:scale-105
//                   shadow-[0_0_80px_-12px_rgba(14,165,233,0.45)]
//                 "
//               >
//                 Start Restoration Project

//                 <ArrowRight
//                   size={22}
//                   className="
//                     transition-transform duration-300
//                     group-hover:translate-x-1
//                   "
//                 />
//               </Link>

//               {/* SECONDARY */}
//               <Link
//                 to="/case-studies"
//                 className="
//                   inline-flex items-center justify-center gap-3
//                   rounded-full
//                   border border-white/10
//                   bg-white/5
//                   backdrop-blur-xl
//                   px-10 py-5
//                   text-lg
//                   text-white
//                   transition-all duration-300
//                   hover:border-cyan-400/20
//                   hover:bg-white/10
//                 "
//               >
//                 Explore Case Studies
//               </Link>
//             </div>

//             {/* CONTACT INFO */}
//             <div
//               className="
//                 mt-20
//                 grid
//                 md:grid-cols-2
//                 gap-6
//               "
//             >
//               {/* PHONE */}
//               <div
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[32px]
//                   border border-white/10
//                   bg-white/5
//                   backdrop-blur-2xl
//                   p-7
//                   transition-all duration-500
//                   hover:border-cyan-400/20
//                 "
//               >
//                 {/* HOVER */}
//                 <div
//                   className="
//                     absolute inset-0
//                     opacity-0
//                     group-hover:opacity-100
//                     transition-all duration-500
//                     bg-gradient-to-br
//                     from-cyan-400/10
//                     to-transparent
//                   "
//                 />

//                 <div className="relative z-10 flex items-center gap-5">
//                   <div
//                     className="
//                       flex h-16 w-16
//                       items-center justify-center
//                       rounded-2xl
//                       border border-cyan-400/20
//                       bg-cyan-400/10
//                     "
//                   >
//                     <PhoneCall
//                       size={28}
//                       className="text-cyan-300"
//                     />
//                   </div>

//                   <div>
//                     <p
//                       className="
//                         text-sm
//                         uppercase
//                         tracking-[0.18em]
//                         text-slate-400
//                       "
//                     >
//                       Call Us
//                     </p>

//                     <h4
//                       className="
//                         mt-2
//                         text-2xl
//                         font-bold
//                         text-white
//                       "
//                     >
//                       +91 88530 43647
//                     </h4>
//                   </div>
//                 </div>
//               </div>

//               {/* EMAIL */}
//               <div
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[32px]
//                   border border-white/10
//                   bg-white/5
//                   backdrop-blur-2xl
//                   p-7
//                   transition-all duration-500
//                   hover:border-emerald-400/20
//                 "
//               >
//                 {/* HOVER */}
//                 <div
//                   className="
//                     absolute inset-0
//                     opacity-0
//                     group-hover:opacity-100
//                     transition-all duration-500
//                     bg-gradient-to-br
//                     from-emerald-400/10
//                     to-transparent
//                   "
//                 />

//                 <div className="relative z-10 flex items-center gap-5">
//                   <div
//                     className="
//                       flex h-16 w-16
//                       items-center justify-center
//                       rounded-2xl
//                       border border-emerald-400/20
//                       bg-emerald-400/10
//                     "
//                   >
//                     <Mail
//                       size={28}
//                       className="text-emerald-300"
//                     />
//                   </div>

//                   <div>
//                     <p
//                       className="
//                         text-sm
//                         uppercase
//                         tracking-[0.18em]
//                         text-slate-400
//                       "
//                     >
//                       Email Us
//                     </p>

//                     <h4
//                       className="
//                         mt-2
//                         text-2xl
//                         font-bold
//                         text-white
//                       "
//                     >
//                       info@wastelyaqua.com
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM LIGHT */}
//           <div
//             className="
//               absolute bottom-0 left-0
//               h-[2px] w-full
//               bg-gradient-to-r
//               from-transparent
//               via-cyan-400/40
//               to-transparent
//             "
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Orbit,
  PhoneCall,
  Radar,
  Recycle,
  Sparkles,
  Waves,
} from "lucide-react";

import bgImage from "../../assets/images/Wastely_hero_1.jpeg";

const floatingTech = [
  {
    title: "Nano Bubble",
    icon: Waves,
    position:
      "top-[14%] left-[5%]",
    color: "text-cyan-300",
  },

  {
    title: "MPC Smart Buoy",
    icon: Radar,
    position:
      "top-[18%] right-[6%]",
    color: "text-emerald-300",
  },

  {
    title: "Floating Wetlands",
    icon: Orbit,
    position:
      "bottom-[16%] left-[8%]",
    color: "text-cyan-300",
  },

  {
    title: "Bioremediation",
    icon: Recycle,
    position:
      "bottom-[12%] right-[8%]",
    color: "text-emerald-300",
  },
];

const miniMetrics = [
  {
    value: "24/7",
    label: "Smart Monitoring",
  },

  {
    value: "AI",
    label: "Predictive Analytics",
  },

  {
    value: "Multi-Tech",
    label: "Integrated Ecosystem",
  },
];

const CTASection = () => {
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

      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Water Restoration"
          loading="lazy"
          decoding="async"
          className="
            h-full w-full
            object-cover
            opacity-20
            scale-[1.03]
          "
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-[#081219]/82" />

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#081219]
            via-[#081219]/70
            to-[#081219]
          "
        />

        {/* CYAN GLOW */}
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

        {/* EMERALD GLOW */}
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

      {/* FLOATING TECH */}
      <div className="hidden xl:block">
        {floatingTech.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`
                absolute z-20
                ${item.position}
              `}
            >
              <div
                className="
                  flex items-center gap-4
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.05]
                  px-5 py-4
                  backdrop-blur-2xl
                  shadow-[0_0_60px_-12px_rgba(14,165,233,0.2)]
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-gradient-to-br
                    from-cyan-400/10
                    to-emerald-400/10
                  "
                >
                  <Icon
                    size={26}
                    className={item.color}
                  />
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-400">
                    Smart Restoration
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MAIN */}
      <div
        className="
          relative z-10
          mx-auto
          max-w-7xl
          px-4 sm:px-6 lg:px-8
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[32px] sm:rounded-[42px]
            border border-white/10
            bg-white/[0.05]
            backdrop-blur-3xl
          "
        >
          {/* INNER BG */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-cyan-400/10
              via-transparent
              to-emerald-400/10
            "
          />

          {/* WATERMARK */}
          <div
            className="
              absolute
              right-[-20px]
              bottom-[-20px]
              text-[120px]
              sm:text-[180px]
              lg:text-[260px]
              font-black
              leading-none
              text-white/[0.03]
            "
          >
            WA
          </div>

          {/* CONTENT */}
          <div
            className="
              relative z-10
              px-5 sm:px-8 lg:px-14 xl:px-20
              py-10 sm:py-14 lg:py-20
            "
          >
            {/* TOP */}
            <div className="max-w-5xl">
              {/* LABEL */}
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
                  Intelligent Water Infrastructure
                </span>
              </div>

              {/* VALUE */}
              <div
                className="
                  mt-6 sm:mt-8
                  inline-flex items-center gap-3
                  rounded-full
                  border border-emerald-400/20
                  bg-emerald-400/10
                  px-4 sm:px-5
                  py-2.5 sm:py-3
                  backdrop-blur-xl
                "
              >
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                <span
                  className="
                    text-[11px] sm:text-sm
                    uppercase
                    tracking-[0.18em]
                    text-emerald-200
                  "
                >
                  ₹33+ Cr Restoration Capability
                </span>
              </div>

              {/* TITLE */}
              <h2
                className="
                  mt-8 sm:mt-10
                  text-[40px]
                  sm:text-6xl
                  md:text-7xl
                  xl:text-[92px]
                  font-black
                  leading-[0.92]
                  tracking-[-0.05em]
                  text-white
                "
              >
                Build The Future

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
                  Of Water Restoration
                </span>
              </h2>

              {/* DESC */}
              <p
                className="
                  mt-6 sm:mt-8
                  max-w-4xl
                  text-[15px]
                  sm:text-lg
                  lg:text-xl
                  leading-relaxed
                  text-slate-300
                "
              >
                Integrated monitoring, nano bubble
                oxygenation, ecological restoration,
                bioremediation and intelligent environmental
                infrastructure systems engineered for
                sustainable water ecosystems.
              </p>
            </div>

            {/* METRICS */}
            <div
              className="
                mt-10 sm:mt-14
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-4 sm:gap-5
              "
            >
              {miniMetrics.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-[26px] sm:rounded-[30px]
                    border border-white/10
                    bg-white/[0.05]
                    p-5 sm:p-6
                    backdrop-blur-2xl
                  "
                >
                  <h3
                    className="
                      text-3xl
                      sm:text-4xl
                      font-black
                      leading-none
                      tracking-[-0.04em]
                      bg-gradient-to-r
                      from-cyan-300
                      to-emerald-300
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm sm:text-base
                      text-slate-400
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* TAGS */}
            <div
              className="
                mt-10 sm:mt-12
                flex flex-wrap
                gap-3
              "
            >
              {[
                "Nano Bubble Aeration",
                "Floating Wetlands",
                "MPC Smart Buoy",
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
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div
              className="
                mt-10 sm:mt-14
                flex flex-col
                sm:flex-row
                gap-4 sm:gap-5
              "
            >
              {/* PRIMARY */}
              <Link
                to="/contact"
                className="
                  group
                  inline-flex items-center justify-center gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-emerald-500
                  px-6 sm:px-8
                  py-3.5 sm:py-4
                  text-sm sm:text-base
                  font-semibold
                  text-white
                  transition-all duration-300
                  hover:scale-[1.02]
                  shadow-[0_0_60px_-12px_rgba(14,165,233,0.35)]
                "
              >
                Start Restoration Project

                <ArrowRight
                  size={18}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* SECONDARY */}
              <Link
                to="/case-studies"
                className="
                  inline-flex items-center justify-center gap-3
                  rounded-full
                  border border-white/10
                  bg-white/[0.05]
                  px-6 sm:px-8
                  py-3.5 sm:py-4
                  text-sm sm:text-base
                  text-white
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-cyan-400/20
                  hover:bg-white/[0.08]
                "
              >
                Explore Case Studies
              </Link>
            </div>

            {/* CONTACT */}
            <div
              className="
                mt-14 sm:mt-16 lg:mt-20
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-4 sm:gap-5 lg:gap-6
              "
            >
              {/* PHONE */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px] sm:rounded-[32px]
                  border border-white/10
                  bg-white/[0.05]
                  p-5 sm:p-7
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:border-cyan-400/20
                "
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
                    to-transparent
                  "
                />

                <div
                  className="
                    relative z-10
                    flex items-center gap-4 sm:gap-5
                  "
                >
                  <div
                    className="
                      flex h-14 w-14
                      sm:h-16 sm:w-16
                      items-center justify-center
                      rounded-2xl
                      border border-cyan-400/20
                      bg-cyan-400/10
                    "
                  >
                    <PhoneCall
                      size={26}
                      className="text-cyan-300"
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[11px] sm:text-sm
                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                      "
                    >
                      Call Us
                    </p>

                    <h4
                      className="
                        mt-2
                        text-lg sm:text-2xl
                        font-bold
                        text-white
                      "
                    >
                      +91 91360 69130
                    </h4>
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px] sm:rounded-[32px]
                  border border-white/10
                  bg-white/[0.05]
                  p-5 sm:p-7
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:border-emerald-400/20
                "
              >
                {/* HOVER */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    transition-all duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-emerald-400/10
                    to-transparent
                  "
                />

                <div
                  className="
                    relative z-10
                    flex items-center gap-4 sm:gap-5
                  "
                >
                  <div
                    className="
                      flex h-14 w-14
                      sm:h-16 sm:w-16
                      items-center justify-center
                      rounded-2xl
                      border border-emerald-400/20
                      bg-emerald-400/10
                    "
                  >
                    <Mail
                      size={26}
                      className="text-emerald-300"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[11px] sm:text-sm
                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                      "
                    >
                      Email Us
                    </p>

                    <h4
                      className="
                        mt-2
                        break-all
                        text-base sm:text-2xl
                        font-bold
                        text-white
                      "
                    >
                      info@wastelyaqua.com
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM LIGHT */}
          <div
            className="
              absolute bottom-0 left-0
              h-px w-full
              bg-gradient-to-r
              from-transparent
              via-cyan-400/40
              to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
