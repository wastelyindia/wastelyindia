// import { motion } from "framer-motion";
// import {
//   Activity,
//   ArrowUpRight,
//   Droplets,
//   MapPinned,
//   Sparkles,
//   Waves,
// } from "lucide-react";

// import ArunImg from "../../assets/images/arun-sagar.jpg";
// import KanglaImg from "../../assets/images/kangla-moats.jpg";
// import NingthemImg from "../../assets/images/ningthem-pukhri.jpg";
// import YaiskulImg from "../../assets/images/yaiskul-lake.jpg";
// import BijoyImg from "../../assets/images/bijoy-govinda.jpg";

// const caseStudies = [
//   {
//     title: "Arun Sagar",
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

//   {
//     title: "Bijoy Govinda",
//     location: "Integrated Restoration Project",
//     image: BijoyImg,
//     metrics: [
//       "COD Reduction",
//       "Smart Monitoring",
//       "Oxygenation",
//     ],
//   },
// ];

// const marqueeItems = [...caseStudies, ...caseStudies];

// const CaseStudyMarquee = () => {
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

//       <div className="relative z-10">
//         {/* HEADER */}
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="max-w-4xl">
//             {/* BADGE */}
//             <div
//               className="
//                 inline-flex items-center gap-3
//                 rounded-full
//                 border border-cyan-400/20
//                 bg-cyan-400/10
//                 backdrop-blur-xl
//                 px-5 py-2
//               "
//             >
//               <Sparkles
//                 size={14}
//                 className="text-cyan-300"
//               />

//               <span
//                 className="
//                   text-xs
//                   uppercase
//                   tracking-[0.25em]
//                   text-cyan-200
//                 "
//               >
//                 Restoration Case Studies
//               </span>
//             </div>

//             {/* TITLE */}
//             <h2
//               className="
//                 mt-8
//                 text-4xl
//                 md:text-6xl
//                 xl:text-7xl
//                 font-black
//                 leading-[0.95]
//                 tracking-[-0.04em]
//                 text-white
//               "
//             >
//               Engineering Trust Through
//               <span
//                 className="
//                   block
//                   bg-gradient-to-r
//                   from-cyan-300
//                   via-cyan-400
//                   to-emerald-400
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Real Restoration Projects
//               </span>
//             </h2>

//             {/* DESCRIPTION */}
//             <p
//               className="
//                 mt-8
//                 max-w-3xl
//                 text-lg
//                 md:text-xl
//                 leading-relaxed
//                 text-slate-400
//               "
//             >
//               Integrated ecological restoration projects
//               transforming polluted lakes, ponds and urban
//               water bodies using intelligent environmental
//               engineering systems.
//             </p>
//           </div>
//         </div>

//         {/* MARQUEE */}
//         <div className="relative mt-20 overflow-hidden">
//           {/* LEFT FADE */}
//           <div
//             className="
//               absolute left-0 top-0 z-20
//               h-full w-32
//               bg-gradient-to-r
//               from-[#081219]
//               to-transparent
//             "
//           />

//           {/* RIGHT FADE */}
//           <div
//             className="
//               absolute right-0 top-0 z-20
//               h-full w-32
//               bg-gradient-to-l
//               from-[#081219]
//               to-transparent
//             "
//           />

//           {/* TRACK */}
//           <motion.div
//             animate={{
//               x: ["0%", "-50%"],
//             }}
//             transition={{
//               duration: 40,
//               ease: "linear",
//               repeat: Infinity,
//             }}
//             className="
//               flex
//               gap-6
//               w-max
//               px-6
//             "
//           >
//             {marqueeItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{
//                   y: -8,
//                 }}
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[36px]
//                   border border-white/10
//                   bg-white/5
//                   backdrop-blur-2xl
//                   min-w-[420px]
//                   max-w-[420px]
//                   transition-all duration-500
//                   hover:border-cyan-400/20
//                   hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]
//                 "
//               >
//                 {/* IMAGE */}
//                 <div className="relative h-[320px] overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="
//                       h-full w-full
//                       object-cover
//                       transition-transform duration-700
//                       group-hover:scale-105
//                     "
//                   />

//                   {/* OVERLAY */}
//                   <div
//                     className="
//                       absolute inset-0
//                       bg-gradient-to-t
//                       from-[#081219]
//                       via-[#081219]/20
//                       to-transparent
//                     "
//                   />

//                   {/* LOCATION */}
//                   <div
//                     className="
//                       absolute left-5 top-5
//                       inline-flex items-center gap-2
//                       rounded-full
//                       border border-white/10
//                       bg-[#081219]/60
//                       backdrop-blur-xl
//                       px-4 py-2
//                     "
//                   >
//                     <MapPinned
//                       size={14}
//                       className="text-cyan-300"
//                     />

//                     <span
//                       className="
//                         text-xs
//                         uppercase
//                         tracking-[0.18em]
//                         text-cyan-200
//                       "
//                     >
//                       {item.location}
//                     </span>
//                   </div>

//                   {/* VIEW */}
//                   <div
//                     className="
//                       absolute right-5 top-5
//                       flex h-14 w-14
//                       items-center justify-center
//                       rounded-2xl
//                       border border-white/10
//                       bg-[#081219]/60
//                       backdrop-blur-xl
//                     "
//                   >
//                     <ArrowUpRight
//                       size={22}
//                       className="
//                         text-cyan-300
//                         transition-transform duration-300
//                         group-hover:translate-x-1
//                         group-hover:-translate-y-1
//                       "
//                     />
//                   </div>

//                   {/* BEFORE/AFTER STRIP */}
//                   <div
//                     className="
//                       absolute bottom-5 left-5 right-5
//                       grid grid-cols-2
//                       gap-3
//                     "
//                   >
//                     {/* BEFORE */}
//                     <div
//                       className="
//                         rounded-2xl
//                         border border-red-400/20
//                         bg-[#081219]/70
//                         backdrop-blur-xl
//                         px-4 py-3
//                       "
//                     >
//                       <p
//                         className="
//                           text-[10px]
//                           uppercase
//                           tracking-[0.18em]
//                           text-red-300
//                         "
//                       >
//                         Before
//                       </p>

//                       <p
//                         className="
//                           mt-2
//                           text-sm
//                           text-white
//                         "
//                       >
//                         Polluted Water
//                       </p>
//                     </div>

//                     {/* AFTER */}
//                     <div
//                       className="
//                         rounded-2xl
//                         border border-emerald-400/20
//                         bg-[#081219]/70
//                         backdrop-blur-xl
//                         px-4 py-3
//                       "
//                     >
//                       <p
//                         className="
//                           text-[10px]
//                           uppercase
//                           tracking-[0.18em]
//                           text-emerald-300
//                         "
//                       >
//                         After
//                       </p>

//                       <p
//                         className="
//                           mt-2
//                           text-sm
//                           text-white
//                         "
//                       >
//                         Ecological Recovery
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="relative p-7">
//                   {/* GLOW */}
//                   <div
//                     className="
//                       absolute inset-0
//                       opacity-0
//                       group-hover:opacity-100
//                       transition-all duration-500
//                       bg-gradient-to-br
//                       from-cyan-400/10
//                       to-emerald-400/5
//                     "
//                   />

//                   <div className="relative z-10">
//                     {/* TITLE */}
//                     <h3
//                       className="
//                         text-3xl
//                         font-black
//                         leading-tight
//                         text-white
//                       "
//                     >
//                       {item.title}
//                     </h3>

//                     {/* METRICS */}
//                     <div className="mt-7 flex flex-wrap gap-3">
//                       {item.metrics.map((metric, idx) => (
//                         <div
//                           key={idx}
//                           className="
//                             rounded-full
//                             border border-white/10
//                             bg-white/5
//                             px-4 py-2
//                             text-sm
//                             text-slate-200
//                             backdrop-blur-xl
//                           "
//                         >
//                           {metric}
//                         </div>
//                       ))}
//                     </div>

//                     {/* FOOTER */}
//                     <div
//                       className="
//                         mt-8
//                         flex items-center justify-between
//                       "
//                     >
//                       <div
//                         className="
//                           flex items-center gap-2
//                           text-sm
//                           uppercase
//                           tracking-[0.18em]
//                           text-slate-400
//                         "
//                       >
//                         <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                         Integrated Restoration
//                       </div>

//                       <div
//                         className="
//                           flex items-center gap-2
//                           rounded-full
//                           border border-cyan-400/20
//                           bg-cyan-400/10
//                           px-4 py-2
//                         "
//                       >
//                         <Droplets
//                           size={14}
//                           className="text-cyan-300"
//                         />

//                         <span
//                           className="
//                             text-xs
//                             uppercase
//                             tracking-[0.16em]
//                             text-cyan-200
//                           "
//                         >
//                           Smart Water
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudyMarquee;


import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Droplets,
  MapPinned,
  Sparkles,
} from "lucide-react";

import ArunImg from "../../assets/images/arun-sagar.jpg";
import KanglaImg from "../../assets/images/kangla-moats.jpg";
import NingthemImg from "../../assets/images/ningthem-pukhri.jpg";
import YaiskulImg from "../../assets/images/yaiskul-lake.jpg";
import BijoyImg from "../../assets/images/bijoy-govinda.jpg";

const caseStudies = [
  {
    title: "Arun Sagar",
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

  {
    title: "Bijoy Govinda",
    location: "Integrated Restoration Project",
    image: BijoyImg,
    metrics: [
      "COD Reduction",
      "Smart Monitoring",
      "Oxygenation",
    ],
  },
];

const marqueeItems = [...caseStudies, ...caseStudies];

const CaseStudyMarquee = () => {
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

      <div className="relative z-10">
        {/* HEADER */}
        <div
          className="
            mx-auto
            max-w-7xl
            px-4 sm:px-6 lg:px-8
          "
        >
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
                Restoration Case Studies
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
              Engineering Trust Through

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
                Real Restoration Projects
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
              Integrated ecological restoration projects
              transforming polluted lakes, ponds and urban
              water bodies using intelligent environmental
              engineering systems.
            </p>
          </div>
        </div>

        {/* MOBILE/TABLET GRID */}
        <div
          className="
            mt-14 sm:mt-16
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4 sm:gap-5
            px-4 sm:px-6
            lg:hidden
          "
        >
          {caseStudies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-white/[0.05]
                backdrop-blur-2xl
                transition-all duration-500
                hover:border-cyan-400/20
              "
            >
              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="
                    h-full w-full
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-[1.03]
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#081219]
                    via-[#081219]/30
                    to-transparent
                  "
                />

                {/* LOCATION */}
                <div
                  className="
                    absolute
                    left-4 top-4
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/10
                    bg-[#081219]/65
                    px-3 py-2
                    backdrop-blur-xl
                  "
                >
                  <MapPinned
                    size={13}
                    className="text-cyan-300"
                  />

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.16em]
                      text-cyan-200
                    "
                  >
                    {item.location}
                  </span>
                </div>

                {/* ICON */}
                <div
                  className="
                    absolute
                    right-4 top-4
                    flex h-11 w-11
                    items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-[#081219]/65
                    backdrop-blur-xl
                  "
                >
                  <ArrowUpRight
                    size={18}
                    className="
                      text-cyan-300
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-5 sm:p-6">
                {/* GLOW */}
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
                  {/* TITLE */}
                  <h3
                    className="
                      text-2xl sm:text-3xl
                      font-black
                      leading-tight
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  {/* METRICS */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/[0.05]
                          px-3 py-2
                          text-[12px] sm:text-sm
                          text-slate-200
                          backdrop-blur-xl
                        "
                      >
                        {metric}
                      </div>
                    ))}
                  </div>

                  {/* FOOTER */}
                  <div
                    className="
                      mt-6
                      flex items-center justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex items-center gap-2
                        text-[11px]
                        uppercase
                        tracking-[0.16em]
                        text-slate-400
                      "
                    >
                      <div className="h-2 w-2 rounded-full bg-cyan-400" />

                      Restoration
                    </div>

                    <div
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-cyan-400/20
                        bg-cyan-400/10
                        px-3 py-2
                      "
                    >
                      <Droplets
                        size={13}
                        className="text-cyan-300"
                      />

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.16em]
                          text-cyan-200
                        "
                      >
                        Smart Water
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP MARQUEE */}
        <div
          className="
            relative
            mt-20
            hidden
            overflow-hidden
            lg:block
          "
        >
          {/* LEFT FADE */}
          <div
            className="
              absolute
              left-0 top-0 z-20
              h-full w-32
              bg-gradient-to-r
              from-[#081219]
              to-transparent
            "
          />

          {/* RIGHT FADE */}
          <div
            className="
              absolute
              right-0 top-0 z-20
              h-full w-32
              bg-gradient-to-l
              from-[#081219]
              to-transparent
            "
          />

          {/* TRACK */}
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 38,
              ease: "linear",
              repeat: Infinity,
            }}
            className="
              flex
              w-max
              gap-6
              px-6
            "
          >
            {marqueeItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border border-white/10
                  bg-white/[0.05]
                  backdrop-blur-2xl
                  min-w-[380px]
                  max-w-[380px]
                  transition-all duration-500
                  hover:border-cyan-400/20
                "
              >
                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-full w-full
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#081219]
                      via-[#081219]/25
                      to-transparent
                    "
                  />

                  {/* LOCATION */}
                  <div
                    className="
                      absolute
                      left-5 top-5
                      inline-flex items-center gap-2
                      rounded-full
                      border border-white/10
                      bg-[#081219]/65
                      px-4 py-2
                      backdrop-blur-xl
                    "
                  >
                    <MapPinned
                      size={13}
                      className="text-cyan-300"
                    />

                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.18em]
                        text-cyan-200
                      "
                    >
                      {item.location}
                    </span>
                  </div>

                  {/* ICON */}
                  <div
                    className="
                      absolute
                      right-5 top-5
                      flex h-12 w-12
                      items-center justify-center
                      rounded-2xl
                      border border-white/10
                      bg-[#081219]/65
                      backdrop-blur-xl
                    "
                  >
                    <ArrowUpRight
                      size={20}
                      className="
                        text-cyan-300
                        transition-transform duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative p-6">
                  {/* HOVER GLOW */}
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
                    {/* TITLE */}
                    <h3
                      className="
                        text-3xl
                        font-black
                        leading-tight
                        tracking-[-0.04em]
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    {/* TAGS */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="
                            rounded-full
                            border border-white/10
                            bg-white/[0.05]
                            px-4 py-2
                            text-sm
                            text-slate-200
                            backdrop-blur-xl
                          "
                        >
                          {metric}
                        </div>
                      ))}
                    </div>

                    {/* FOOTER */}
                    <div
                      className="
                        mt-7
                        flex items-center justify-between
                      "
                    >
                      <div
                        className="
                          flex items-center gap-2
                          text-[11px]
                          uppercase
                          tracking-[0.18em]
                          text-slate-400
                        "
                      >
                        <div className="h-2 w-2 rounded-full bg-cyan-400" />

                        Integrated Restoration
                      </div>

                      <div
                        className="
                          inline-flex items-center gap-2
                          rounded-full
                          border border-cyan-400/20
                          bg-cyan-400/10
                          px-4 py-2
                        "
                      >
                        <Droplets
                          size={13}
                          className="text-cyan-300"
                        />

                        <span
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.16em]
                            text-cyan-200
                          "
                        >
                          Smart Water
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMarquee;