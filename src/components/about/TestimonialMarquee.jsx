
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     quote:
//       "Wastely Aqua transformed our wastewater management infrastructure with highly efficient and sustainable recovery systems.",
//     name: "Raj Patel",
//     role: "Civil Engineer",
//     tag: "Water Infrastructure",
//     featured: false,
//   },

//   {
//     quote:
//       "Their environmental engineering systems dramatically improved our operational sustainability and long-term efficiency.",
//     name: "Sarah Mitchell",
//     role: "Operations Manager",
//     tag: "Circular Recovery",
//     featured: true,
//   },

//   {
//     quote:
//       "The automation, reliability and regenerative infrastructure strategy exceeded our expectations across every phase.",
//     name: "Dr. Benjamin Foster",
//     role: "Water Treatment Chemist",
//     tag: "Environmental Intelligence",
//     featured: false,
//   },

//   {
//     quote:
//       "The integration process was seamless and the ecosystem restoration outcomes have been remarkable.",
//     name: "Michael Chen",
//     role: "Infrastructure Consultant",
//     tag: "Industrial Sustainability",
//     featured: false,
//   },

//   {
//     quote:
//       "Wastely Aqua delivered one of the most advanced sustainable treatment systems we’ve implemented.",
//     name: "Ananya Verma",
//     role: "Environmental Systems Engineer",
//     tag: "Regenerative Systems",
//     featured: false,
//   },
// ];

// const row1 = [...testimonials, ...testimonials];
// const row2 = [...testimonials.reverse(), ...testimonials.reverse()];

// const particles = Array.from({ length: 18 });

// const TestimonialMarquee = () => {
//   return (
//     <section className="relative py-44 overflow-hidden bg-[#081219]">

//       {/* ====================================================== */}
//       {/* ATMOSPHERIC BACKGROUND */}
//       {/* ====================================================== */}

//       {/* LEFT WHITE GLOW */}

//       <motion.div
//         animate={{
//           x: [0, 40, 0],
//           y: [0, -30, 0],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           top-[-280px]
//           left-[-200px]
//           w-[1100px]
//           h-[1100px]
//           bg-white/[0.05]
//           blur-[180px]
//           rounded-full
//         "
//       />

//       {/* RIGHT CYAN GLOW */}

//       <motion.div
//         animate={{
//           x: [0, -30, 0],
//           y: [0, 30, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           bottom-[-320px]
//           right-[-220px]
//           w-[1200px]
//           h-[1200px]
//           bg-cyan-500/10
//           blur-[180px]
//           rounded-full
//         "
//       />

//       {/* ====================================================== */}
//       {/* RADIAL LIGHT */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute inset-0
//           bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]
//         "
//       />

//       {/* ====================================================== */}
//       {/* GRID TEXTURE */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute inset-0
//           opacity-[0.025]
//         "
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//           `,
//           backgroundSize: "100px 100px",
//         }}
//       />

//       {/* ====================================================== */}
//       {/* NOISE TEXTURE */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute inset-0
//           opacity-[0.05]
//           mix-blend-overlay
//           pointer-events-none
//         "
//         style={{
//           backgroundImage:
//             "url('https://www.transparenttextures.com/patterns/noise.png')",
//         }}
//       />

//       {/* ====================================================== */}
//       {/* FLOATING PARTICLES */}
//       {/* ====================================================== */}

//       <div className="absolute inset-0 overflow-hidden">

//         {particles.map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -70, 0],
//               x: [0, 30, 0],
//               opacity: [0.08, 0.35, 0.08],
//             }}
//             transition={{
//               duration: 10 + i,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               rounded-full
//               bg-white/20
//               blur-md
//             "
//             style={{
//               width: `${6 + (i % 8)}px`,
//               height: `${6 + (i % 8)}px`,
//               left: `${(i * 7) % 100}%`,
//               top: `${(i * 6) % 100}%`,
//             }}
//           />
//         ))}

//       </div>

//       {/* ====================================================== */}
//       {/* HUGE TYPOGRAPHY */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute
//           left-1/2
//           top-[6%]
//           -translate-x-1/2
//           text-[140px]
//           md:text-[260px]
//           xl:text-[420px]
//           font-black
//           tracking-[-0.08em]
//           leading-none
//           text-white/[0.02]
//           pointer-events-none
//           select-none
//           whitespace-nowrap
//         "
//       >
//         VOICES
//       </div>

//       {/* ====================================================== */}
//       {/* HEADER */}
//       {/* ====================================================== */}

//       <div
//         className="
//           relative z-10
//           max-w-5xl
//           mx-auto
//           px-6
//           text-center
//         "
//       >

//         {/* LABEL */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.8,
//           }}
//           viewport={{ once: true }}
//           className="
//             inline-flex
//             items-center
//             gap-3
//             bg-white/[0.05]
//             border border-white/10
//             backdrop-blur-2xl
//             rounded-full
//             px-6
//             py-3
//             mb-10
//           "
//         >

//           <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

//           <span
//             className="
//               text-white
//               uppercase
//               tracking-[0.28em]
//               text-[11px]
//               font-medium
//             "
//           >
//             Environmental Voices
//           </span>

//         </motion.div>

//         {/* TITLE */}

//         <motion.h2
//           initial={{
//             opacity: 0,
//             y: 50,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           viewport={{ once: true }}
//           className="
//             text-5xl
//             md:text-7xl
//             xl:text-[7rem]
//             font-semibold
//             leading-[0.9]
//             tracking-[-0.06em]
//             text-white
//           "
//         >
//           Trusted Across

//           <span
//             className="
//               block
//               mt-3
//               bg-gradient-to-r
//               from-white
//               via-cyan-200
//               to-cyan-400
//               bg-clip-text
//               text-transparent
//             "
//           >
//             Environmental
//           </span>

//           <span className="block mt-3">
//             Infrastructure
//           </span>

//         </motion.h2>

//         {/* DESCRIPTION */}

//         <motion.p
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//             delay: 0.2,
//           }}
//           viewport={{ once: true }}
//           className="
//             mt-10
//             max-w-3xl
//             mx-auto
//             text-lg
//             leading-relaxed
//             text-slate-400
//           "
//         >
//           Engineers, sustainability specialists and
//           infrastructure leaders trust Wastely Aqua to
//           create intelligent environmental systems focused
//           on restoration, recovery and long-term resilience.
//         </motion.p>

//       </div>

//       {/* ====================================================== */}
//       {/* FIRST MARQUEE */}
//       {/* ====================================================== */}

//       <div className="relative mt-28">

//         {/* LEFT FADE */}

//         <div
//           className="
//             absolute left-0 top-0
//             w-40 h-full
//             bg-gradient-to-r
//             from-[#081219]
//             to-transparent
//             z-20
//           "
//         />

//         {/* RIGHT FADE */}

//         <div
//           className="
//             absolute right-0 top-0
//             w-40 h-full
//             bg-gradient-to-l
//             from-[#081219]
//             to-transparent
//             z-20
//           "
//         />

//         <motion.div
//           className="
//             flex
//             gap-8
//             w-max
//           "
//           animate={{
//             x: ["0%", "-50%"],
//           }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: 45,
//           }}
//         >

//           {row1.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{
//                 y: -10,
//               }}
//               className={`
//                 relative
//                 overflow-hidden
//                 rounded-[36px]
//                 border border-white/10
//                 bg-white/[0.04]
//                 backdrop-blur-2xl
//                 p-8
//                 shadow-[0_0_70px_rgba(15,23,42,0.45)]
//                 ${
//                   item.featured
//                     ? "w-[460px] min-h-[320px]"
//                     : "w-[360px] min-h-[260px]"
//                 }
//                 ${
//                   index % 2 === 0
//                     ? "translate-y-6"
//                     : "-translate-y-4"
//                 }
//               `}
//             >

//               {/* INNER GLOW */}

//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-br
//                   from-white/[0.06]
//                   via-cyan-500/[0.03]
//                   to-transparent
//                 "
//               />

//               {/* GLASS REFLECTION */}

//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-br
//                   from-white/10
//                   via-transparent
//                   to-transparent
//                   opacity-40
//                 "
//               />

//               {/* HUGE QUOTE */}

//               <div
//                 className="
//                   absolute
//                   top-0
//                   left-6
//                   text-[120px]
//                   leading-none
//                   text-white/[0.04]
//                   font-serif
//                 "
//               >
//                 "
//               </div>

//               <div className="relative z-10">

//                 {/* TAG */}

//                 <div
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     px-4
//                     py-2
//                     rounded-full
//                     bg-white/[0.05]
//                     border border-white/10
//                   "
//                 >

//                   <div className="w-2 h-2 rounded-full bg-cyan-300" />

//                   <span
//                     className="
//                       text-[9px]
//                       uppercase
//                       tracking-[0.22em]
//                       text-slate-300
//                     "
//                   >
//                     {item.tag}
//                   </span>

//                 </div>

//                 {/* QUOTE */}

//                 <p
//                   className={`
//                     mt-8
//                     leading-relaxed
//                     text-slate-300
//                     ${
//                       item.featured
//                         ? "text-2xl"
//                         : "text-lg"
//                     }
//                   `}
//                 >
//                   {item.quote}
//                 </p>

//                 {/* PERSON */}

//                 <div
//                   className="
//                     mt-10
//                     pt-6
//                     border-t border-white/10
//                   "
//                 >

//                   <h4
//                     className="
//                       text-white
//                       font-semibold
//                       text-lg
//                     "
//                   >
//                     {item.name}
//                   </h4>

//                   <p
//                     className="
//                       mt-2
//                       text-slate-500
//                     "
//                   >
//                     {item.role}
//                   </p>

//                 </div>

//               </div>

//             </motion.div>
//           ))}

//         </motion.div>

//       </div>

//       {/* ====================================================== */}
//       {/* SECOND MARQUEE */}
//       {/* ====================================================== */}

//       <div className="relative mt-14">

//         {/* LEFT FADE */}

//         <div
//           className="
//             absolute left-0 top-0
//             w-40 h-full
//             bg-gradient-to-r
//             from-[#081219]
//             to-transparent
//             z-20
//           "
//         />

//         {/* RIGHT FADE */}

//         <div
//           className="
//             absolute right-0 top-0
//             w-40 h-full
//             bg-gradient-to-l
//             from-[#081219]
//             to-transparent
//             z-20
//           "
//         />

//         <motion.div
//           className="
//             flex
//             gap-8
//             w-max
//           "
//           animate={{
//             x: ["-50%", "0%"],
//           }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: 55,
//           }}
//         >

//           {row2.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{
//                 y: -10,
//               }}
//               className={`
//                 relative
//                 overflow-hidden
//                 rounded-[36px]
//                 border border-white/10
//                 bg-white/[0.03]
//                 backdrop-blur-2xl
//                 p-7
//                 shadow-[0_0_60px_rgba(15,23,42,0.45)]
//                 w-[300px]
//                 min-h-[220px]
//                 ${
//                   index % 2 === 0
//                     ? "-translate-y-4"
//                     : "translate-y-6"
//                 }
//               `}
//             >

//               {/* INNER GLOW */}

//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-br
//                   from-white/[0.05]
//                   via-cyan-500/[0.02]
//                   to-transparent
//                 "
//               />

//               {/* GLASS REFLECTION */}

//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-br
//                   from-white/10
//                   via-transparent
//                   to-transparent
//                   opacity-40
//                 "
//               />

//               <div className="relative z-10">

//                 {/* TAG */}

//                 <div
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     px-4
//                     py-2
//                     rounded-full
//                     bg-white/[0.05]
//                     border border-white/10
//                   "
//                 >

//                   <div className="w-2 h-2 rounded-full bg-cyan-300" />

//                   <span
//                     className="
//                       text-[9px]
//                       uppercase
//                       tracking-[0.22em]
//                       text-slate-300
//                     "
//                   >
//                     {item.tag}
//                   </span>

//                 </div>

//                 {/* QUOTE */}

//                 <p
//                   className="
//                     mt-6
//                     text-base
//                     leading-relaxed
//                     text-slate-300
//                   "
//                 >
//                   {item.quote}
//                 </p>

//                 {/* PERSON */}

//                 <div
//                   className="
//                     mt-8
//                     pt-5
//                     border-t border-white/10
//                   "
//                 >

//                   <h4
//                     className="
//                       text-white
//                       font-semibold
//                     "
//                   >
//                     {item.name}
//                   </h4>

//                   <p
//                     className="
//                       mt-1
//                       text-sm
//                       text-slate-500
//                     "
//                   >
//                     {item.role}
//                   </p>

//                 </div>

//               </div>

//             </motion.div>
//           ))}

//         </motion.div>

//       </div>

//       {/* ====================================================== */}
//       {/* BOTTOM LUMINOUS FOG */}
//       {/* ====================================================== */}

//       <div
//         className="
//           absolute
//           bottom-[-180px]
//           left-1/2
//           -translate-x-1/2
//           w-[1400px]
//           h-[340px]
//           bg-white/[0.06]
//           blur-[180px]
//           rounded-full
//         "
//       />

//     </section>
//   );
// };

// export default TestimonialMarquee;



import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Wastely Aqua transformed our wastewater management infrastructure with highly efficient and sustainable recovery systems.",
    name: "Raj Patel",
    role: "Civil Engineer",
    tag: "Water Infrastructure",
    featured: false,
  },

  {
    quote:
      "Their environmental engineering systems dramatically improved our operational sustainability and long-term efficiency.",
    name: "Sarah Mitchell",
    role: "Operations Manager",
    tag: "Circular Recovery",
    featured: true,
  },

  {
    quote:
      "The automation, reliability and regenerative infrastructure strategy exceeded our expectations across every phase.",
    name: "Dr. Benjamin Foster",
    role: "Water Treatment Chemist",
    tag: "Environmental Intelligence",
    featured: false,
  },

  {
    quote:
      "The integration process was seamless and the ecosystem restoration outcomes have been remarkable.",
    name: "Michael Chen",
    role: "Infrastructure Consultant",
    tag: "Industrial Sustainability",
    featured: false,
  },

  {
    quote:
      "Wastely Aqua delivered one of the most advanced sustainable treatment systems we’ve implemented.",
    name: "Ananya Verma",
    role: "Environmental Systems Engineer",
    tag: "Regenerative Systems",
    featured: false,
  },
];

const row1 = [...testimonials, ...testimonials];
const row2 = [...testimonials].reverse().concat([...testimonials].reverse());

const particles = Array.from({ length: 18 });

const TestimonialMarquee = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#081219] py-24 sm:py-28 lg:py-40">

      {/* ====================================================== */}
      {/* ATMOSPHERIC BACKGROUND */}
      {/* ====================================================== */}

      {/* LEFT WHITE GLOW */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          top-[-180px]
          left-[-120px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-white/[0.04]
          blur-[90px]
          lg:top-[-280px]
          lg:left-[-200px]
          lg:h-[1100px]
          lg:w-[1100px]
          lg:blur-[180px]
        "
      />

      {/* RIGHT CYAN GLOW */}

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          right-[-140px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-500/10
          blur-[90px]
          lg:bottom-[-320px]
          lg:right-[-220px]
          lg:h-[1200px]
          lg:w-[1200px]
          lg:blur-[180px]
        "
      />

      {/* ====================================================== */}
      {/* RADIAL LIGHT */}
      {/* ====================================================== */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]
        "
      />

      {/* ====================================================== */}
      {/* GRID TEXTURE */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.015]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* ====================================================== */}
      {/* NOISE TEXTURE */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.03]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

      {/* ====================================================== */}
      {/* FLOATING PARTICLES */}
      {/* ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {particles.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -70, 0],
              x: [0, 30, 0],
              opacity: [0.08, 0.35, 0.08],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              rounded-full
              bg-white/20
              blur-md
            "
            style={{
              width: `${6 + (i % 8)}px`,
              height: `${6 + (i % 8)}px`,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 6) % 100}%`,
            }}
          />
        ))}

      </div>

      {/* ====================================================== */}
      {/* HUGE TYPOGRAPHY */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[4%]
          -translate-x-1/2
          whitespace-nowrap
          select-none
          text-[80px]
          sm:text-[130px]
          md:text-[240px]
          xl:text-[420px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.015]
        "
      >
        VOICES
      </div>

      {/* ====================================================== */}
      {/* HEADER */}
      {/* ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto
          max-w-5xl
          px-5
          text-center
          sm:px-6
          lg:px-8
        "
      >

        {/* LABEL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
            mb-8
            inline-flex
            items-center
            gap-3
            rounded-full
            border border-white/10
            bg-white/[0.05]
            px-5
            py-2.5
            backdrop-blur-2xl
            sm:mb-10
            sm:px-6
            sm:py-3
          "
        >

          <div className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />

          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-white
              sm:text-[11px]
            "
          >
            Environmental Voices
          </span>

        </motion.div>

        {/* TITLE */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="
            text-[2.8rem]
            font-semibold
            leading-[0.9]
            tracking-[-0.06em]
            text-white
            sm:text-5xl
            lg:text-7xl
            xl:text-[7rem]
          "
        >
          Trusted Across

          <span
            className="
              mt-2
              block
              bg-gradient-to-r
              from-white
              via-cyan-200
              to-cyan-400
              bg-clip-text
              text-transparent
              sm:mt-3
            "
          >
            Environmental
          </span>

          <span className="mt-2 block sm:mt-3">
            Infrastructure
          </span>

        </motion.h2>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-[15px]
            leading-relaxed
            text-slate-400
            sm:mt-10
            sm:text-lg
          "
        >
          Engineers, sustainability specialists and
          infrastructure leaders trust Wastely Aqua to
          create intelligent environmental systems focused
          on restoration, recovery and long-term resilience.
        </motion.p>

      </div>

      {/* ====================================================== */}
      {/* FIRST MARQUEE */}
      {/* ====================================================== */}

      <div className="relative mt-20 overflow-hidden sm:mt-24 lg:mt-28">

        {/* LEFT FADE */}

        <div
          className="
            absolute left-0 top-0
            z-20
            h-full
            w-12
            bg-gradient-to-r
            from-[#081219]
            to-transparent
            sm:w-20
            lg:w-40
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            absolute right-0 top-0
            z-20
            h-full
            w-12
            bg-gradient-to-l
            from-[#081219]
            to-transparent
            sm:w-20
            lg:w-40
          "
        />

        <motion.div
          className="
            flex
            w-max
            gap-5
            lg:gap-8
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 45,
          }}
        >

          {row1.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className={`
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-white/[0.04]
                p-5
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(15,23,42,0.45)]
                sm:rounded-[32px]
                sm:p-7
                lg:rounded-[36px]
                lg:p-8
                ${
                  item.featured
                    ? "w-[340px] sm:w-[420px] lg:w-[460px]"
                    : "w-[280px] sm:w-[340px] lg:w-[360px]"
                }
                ${
                  item.featured
                    ? "min-h-[280px] sm:min-h-[320px]"
                    : "min-h-[240px] sm:min-h-[260px]"
                }
                ${
                  index % 2 === 0
                    ? "translate-y-4 lg:translate-y-6"
                    : "-translate-y-2 lg:-translate-y-4"
                }
              `}
            >

              {/* INNER GLOW */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-white/[0.06]
                  via-cyan-500/[0.03]
                  to-transparent
                "
              />

              {/* GLASS REFLECTION */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-white/10
                  via-transparent
                  to-transparent
                  opacity-40
                "
              />

              {/* HUGE QUOTE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-0
                  text-[90px]
                  font-serif
                  leading-none
                  text-white/[0.04]
                  sm:left-6
                  sm:text-[120px]
                "
              >
                "
              </div>

              <div className="relative z-10">

                {/* TAG */}

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border border-white/10
                    bg-white/[0.05]
                    px-4
                    py-2
                  "
                >

                  <div className="h-2 w-2 rounded-full bg-cyan-300" />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      text-slate-300
                    "
                  >
                    {item.tag}
                  </span>

                </div>

                {/* QUOTE */}

                <p
                  className={`
                    mt-6
                    leading-relaxed
                    text-slate-300
                    sm:mt-8
                    ${
                      item.featured
                        ? "text-xl sm:text-2xl"
                        : "text-base sm:text-lg"
                    }
                  `}
                >
                  {item.quote}
                </p>

                {/* PERSON */}

                <div
                  className="
                    mt-8
                    border-t border-white/10
                    pt-5
                    sm:mt-10
                    sm:pt-6
                  "
                >

                  <h4
                    className="
                      text-base
                      font-semibold
                      text-white
                      sm:text-lg
                    "
                  >
                    {item.name}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-slate-500
                    "
                  >
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

      {/* ====================================================== */}
      {/* SECOND MARQUEE */}
      {/* ====================================================== */}

      <div className="relative mt-10 overflow-hidden sm:mt-14">

        {/* LEFT FADE */}

        <div
          className="
            absolute left-0 top-0
            z-20
            h-full
            w-12
            bg-gradient-to-r
            from-[#081219]
            to-transparent
            sm:w-20
            lg:w-40
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            absolute right-0 top-0
            z-20
            h-full
            w-12
            bg-gradient-to-l
            from-[#081219]
            to-transparent
            sm:w-20
            lg:w-40
          "
        />

        <motion.div
          className="
            flex
            w-max
            gap-5
            lg:gap-8
          "
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 55,
          }}
        >

          {row2.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className={`
                relative
                min-h-[220px]
                w-[260px]
                overflow-hidden
                rounded-[26px]
                border border-white/10
                bg-white/[0.03]
                p-5
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(15,23,42,0.45)]
                sm:min-h-[240px]
                sm:w-[300px]
                sm:rounded-[32px]
                sm:p-7
                ${
                  index % 2 === 0
                    ? "-translate-y-2 lg:-translate-y-4"
                    : "translate-y-4 lg:translate-y-6"
                }
              `}
            >

              {/* INNER GLOW */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-white/[0.05]
                  via-cyan-500/[0.02]
                  to-transparent
                "
              />

              {/* GLASS REFLECTION */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-white/10
                  via-transparent
                  to-transparent
                  opacity-40
                "
              />

              <div className="relative z-10">

                {/* TAG */}

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border border-white/10
                    bg-white/[0.05]
                    px-4
                    py-2
                  "
                >

                  <div className="h-2 w-2 rounded-full bg-cyan-300" />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      text-slate-300
                    "
                  >
                    {item.tag}
                  </span>

                </div>

                {/* QUOTE */}

                <p
                  className="
                    mt-5
                    text-[15px]
                    leading-relaxed
                    text-slate-300
                    sm:mt-6
                    sm:text-base
                  "
                >
                  {item.quote}
                </p>

                {/* PERSON */}

                <div
                  className="
                    mt-7
                    border-t border-white/10
                    pt-5
                    sm:mt-8
                  "
                >

                  <h4
                    className="
                      font-semibold
                      text-white
                    "
                  >
                    {item.name}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-500
                    "
                  >
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

      {/* ====================================================== */}
      {/* BOTTOM LUMINOUS FOG */}
      {/* ====================================================== */}

      {/* <div
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          left-1/2
          h-[80px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.05]
          blur-[90px]
          lg:bottom-[-100px]
          lg:h-[140px]
          lg:w-[1400px]
          lg:blur-[180px]
        "
      /> */}

    </section>
  );
};

export default TestimonialMarquee;