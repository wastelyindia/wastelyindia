
// import React from "react";
// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const industriesData = [
//   {
//     id: 1,
//     title: "Textile & Dyeing",
//     slug: "textile-dyeing",
//     description:
//       "High-TDS effluent treatment, dye removal, COD reduction, and ZLD-integrated wastewater systems for textile and dyeing industries.",
//     tags: ["ZLD", "Color Removal", "RO", "ETP"],
//     metric: "95% Dye Removal",
//     image:
//       "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     id: 2,
//     title: "Food & Beverage",
//     slug: "food-beverage",
//     description:
//       "Anaerobic digestion, organic load reduction, nutrient management, and intelligent water reuse systems for food processing facilities.",
//     tags: ["Anaerobic", "Biogas", "Reuse", "STP"],
//     metric: "40% Water Recovery",
//     image:
//       "https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     id: 3,
//     title: "Pharmaceutical",
//     slug: "pharmaceutical",
//     description:
//       "Advanced membrane technologies and ultrapure water systems for API wastewater treatment and complex chemical effluent management.",
//     tags: ["UF", "RO", "MBR", "AOP"],
//     metric: "99.8% Purity",
//     image:
//       "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     id: 4,
//     title: "Commercial & Residential",
//     slug: "commercial-residential",
//     description:
//       "Compact STP infrastructure and smart wastewater recycling systems for sustainable urban developments and residential communities.",
//     tags: ["STP", "Reuse", "Compact", "Smart"],
//     metric: "24/7 Monitoring",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     id: 5,
//     title: "Manufacturing",
//     slug: "manufacturing",
//     description:
//       "Industrial wastewater recycling, sludge minimization, and process water recovery systems engineered for manufacturing facilities.",
//     tags: ["ETP", "SCADA", "Recycle", "MBBR"],
//     metric: "60% Recovery",
//     image:
//       "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     id: 6,
//     title: "Hospitals & Healthcare",
//     slug: "healthcare",
//     description:
//       "Safe and compliant wastewater treatment systems for hospitals, laboratories, and healthcare infrastructure with pathogen control.",
//     tags: ["Disinfection", "MBR", "UV", "Compliance"],
//     metric: "95% Pathogen Removal",
//     image:
//       "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
//   },
// ];

// const IndustriesSection = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#081219] py-20 md:py-28">

//       {/* Ambient Background */}
//       <div className="absolute inset-0 overflow-hidden">

//         <div className="absolute -left-32 top-0 h-[250px] w-[250px] md:h-[420px] md:w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />

//         <div className="absolute right-0 top-40 h-[220px] w-[220px] md:h-[400px] md:w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />

//         <div className="absolute bottom-0 left-1/3 h-[180px] w-[180px] md:h-[350px] md:w-[350px] rounded-full bg-cyan-400/5 blur-3xl" />

//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="mb-16 md:mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

//           <div className="max-w-4xl">

//             <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">

//               <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
//                 Industries We Serve
//               </span>

//             </div>

//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">

//               Engineering Sustainable

//               <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//                 Water Ecosystems
//               </span>

//             </h2>

//           </div>

//           <p className="max-w-xl text-base leading-8 text-slate-400 md:text-lg">
//             Wastely Aqua develops advanced environmental engineering systems
//             tailored for high-load industrial wastewater, decentralized
//             infrastructure, and intelligent water recovery applications.
//           </p>

//         </div>

//         {/* Cards */}
//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

//           {industriesData.map((industry, index) => (
//             <motion.div
//               key={industry.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.08,
//               }}
//               viewport={{ once: true }}
//             >

//               {/* <Link */}
//                 {/* to={`/industries/${industry.slug}`} */}
//               <div
//                 className="group relative block h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_60px_-12px_rgba(14,165,233,0.25)]"
//               >

//                 {/* Image */}
//                 <div className="relative h-[260px] md:h-80 overflow-hidden">

//                   <img
//                     src={industry.image}
//                     alt={industry.title}
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-[#081219]/20 to-transparent" />

//                   {/* Metric */}
//                   <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#081219]/70 px-4 py-2 text-xs font-medium tracking-[0.15em] text-cyan-300 backdrop-blur-xl">
//                     {industry.metric}
//                   </div>

//                   {/* Arrow */}
//                   <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-500 group-hover:rotate-45 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">

//                     <ArrowUpRight size={20} />

//                   </div>

//                 </div>

//                 {/* Content */}
//                 <div className="relative flex h-[340px] flex-col p-8">

//                   {/* Small Line */}
//                   <div className="mb-5 h-px w-14 bg-gradient-to-r from-cyan-400 to-emerald-400" />

//                   <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
//                     {industry.title}
//                   </h3>

//                   <p className="leading-7 text-slate-400">
//                     {industry.description}
//                   </p>

//                   {/* Tags */}
//                   <div className="mt-6 flex flex-wrap gap-3">

//                     {industry.tags.map((tag, idx) => (
//                       <span
//                         key={idx}
//                         className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300 backdrop-blur-xl"
//                       >
//                         {tag}
//                       </span>
//                     ))}

//                   </div>

//                   {/* Spacer */}
//                   <div className="flex-1" />

//                   {/* CTA */}
//                   {/* <div className="mt-8 flex items-center gap-2 text-sm font-medium text-cyan-300">

//                     Explore Industry

//                     <ArrowUpRight
//                       size={16}
//                       className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                     />

//                   </div> */}

//                 </div>

//                 {/* Bottom Border Glow */}
//                 <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500 group-hover:w-full" />
//               </div>
//               {/* </Link> */}

//             </motion.div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default IndustriesSection;


import React from "react";
import { motion } from "framer-motion";

import {
  Activity,
  ArrowUpRight,
  Building2,
  Factory,
  FlaskConical,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Waves,
} from "lucide-react";

import IndustrialImg from "../assets/images/industry-industrial.png";
import MunicipalImg from "../assets/images/industry-municipal.png";
import HospitalityImg from "../assets/images/industry-hospitality.png";
import SmartImg from "../assets/images/industry-smart.png";
import HealthcareImg from "../assets/images/industry-healthcare.png";
import AquaImg from "../assets/images/industry-aquaculture.png";

const industries = [
  {
    title: "Industrial Infrastructure",
    description:
      "Advanced wastewater recovery, sludge minimization and intelligent process-water systems engineered for large-scale industrial facilities.",
    image: IndustrialImg,
    icon: Factory,
    metric: "120+ Projects",
    tags: ["ETP", "ZLD", "RO", "SCADA"],
    size: "large",
  },

  {
    title: "Municipal Water Systems",
    description:
      "Urban water restoration, decentralized STP infrastructure and smart environmental systems for municipalities.",
    image: MunicipalImg,
    icon: Building2,
    metric: "24/7 Monitoring",
    tags: ["STP", "IoT", "Reuse"],
    size: "medium",
  },

  {
    title: "Smart Cities",
    description:
      "Integrated environmental intelligence and smart water infrastructure for modern sustainable cities.",
    image: SmartImg,
    icon: Activity,
    metric: "AI Controlled",
    tags: ["AI", "Analytics", "Monitoring"],
    size: "medium",
  },

  {
    title: "Healthcare & Pharma",
    description:
      "High-purity treatment systems and pathogen-safe wastewater infrastructure for healthcare ecosystems.",
    image: HealthcareImg,
    icon: HeartPulse,
    metric: "99.8% Purity",
    tags: ["MBR", "UV", "UF"],
    size: "small",
  },

  {
    title: "Hospitality & Commercial",
    description:
      "Compact intelligent recycling systems designed for hotels, campuses and urban infrastructure.",
    image: HospitalityImg,
    icon: ShieldCheck,
    metric: "40% Recovery",
    tags: ["Compact", "Reuse", "STP"],
    size: "small",
  },

  {
    title: "Aquaculture & Reservoirs",
    description:
      "Nano bubble oxygenation and ecological recovery systems for aquaculture and large water bodies.",
    image: AquaImg,
    icon: Waves,
    metric: "High DO Efficiency",
    tags: ["Nano Bubble", "DO", "Ecology"],
    size: "wide",
  },
];

const bottomStats = [
  {
    value: "120+",
    label: "Industrial Projects",
  },

  {
    value: "500M+",
    label: "Liters Treated",
  },

  {
    value: "24/7",
    label: "Smart Monitoring",
  },

  {
    value: "₹33+ Cr",
    label: "Restoration Capability",
  },
];




// ADD THIS ABOVE:
// const IndustriesSection = () => {
const WaterCanvas = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let t = 0;
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      // SMOOTH WATER FLOW LAYERS
      const layers = [
  {
    amp: 90,
    freq: 0.0015,
    speed: 0.0012,
    y: H * 0.25,
    alpha: 0.16,
  },

  {
    amp: 120,
    freq: 0.0012,
    speed: 0.001,
    y: H * 0.48,
    alpha: 0.14,
  },

  {
    amp: 100,
    freq: 0.0018,
    speed: 0.0015,
    y: H * 0.72,
    alpha: 0.12,
  },
];

      layers.forEach(
        ({
          amp,
          freq,
          speed,
          y,
          alpha,
        }) => {
          ctx.beginPath();

          ctx.moveTo(0, y);

          for (let x = 0; x <= W; x += 3) {
            const dy =
              Math.sin(
                x * freq + t * speed
              ) *
                amp +

              Math.sin(
                x * freq * 0.5 +
                  t * speed * 0.7
              ) *
                (amp * 0.35);

            ctx.lineTo(
              x,
              y + dy
            );
          }

          ctx.lineTo(W, H + 200);
          ctx.lineTo(0, H + 200);

          ctx.closePath();

          const hex = Math.round(alpha * 255)
            .toString(16)
            .padStart(2, "0");

          const grad =
  ctx.createLinearGradient(
    0,
    y - amp,
    0,
    H
  );

grad.addColorStop(
  0,
  `rgba(34,211,238,${alpha})`
);

grad.addColorStop(
  0.4,
  `rgba(8,145,178,${
    alpha * 0.8
  })`
);

grad.addColorStop(
  1,
  `rgba(3,18,28,0)`
);

ctx.fillStyle = grad;

ctx.fill();
        }
      );

      // RIPPLE RINGS
      const ripples = [
        {
          cx: W * 0.15,
          cy: H * 0.3,
          period: 140,
          offset: 0,
        },

        {
          cx: W * 0.5,
          cy: H * 0.55,
          period: 180,
          offset: 40,
        },

        {
          cx: W * 0.82,
          cy: H * 0.25,
          period: 160,
          offset: 20,
        },
      ];

      ripples.forEach(
        ({
          cx,
          cy,
          period,
          offset,
        }) => {
          for (
            let ring = 0;
            ring < 2;
            ring++
          ) {
            const r =
              ((t * 0.15 +
                offset +
                ring *
                  (period / 2)) %
                period);

            const progress = r / period;

            const radius =
              progress * 240;

            const alpha =
              (1 - progress) * 0.08;

            ctx.beginPath();

            ctx.ellipse(
              cx,
              cy,
              radius,
              radius * 0.32,
              0,
              0,
              Math.PI * 2
            );

            ctx.strokeStyle = `rgba(34,211,238,${alpha})`;

            ctx.lineWidth = 1.2;

            ctx.stroke();
          }
        }
      );

      // FLOATING PARTICLES
      for (let i = 0; i < 8; i++) {
        const px =
          ((W * (i / 8) +
            t *
              (0.08 +
                (i % 3) * 0.03)) %
            W +
            W) %
          W;

        const py =
          H * 0.25 +
          Math.sin(
            px * 0.002 +
              t * 0.001 +
              i
          ) *
            H *
            0.12 +
          (i / 8) * H * 0.4;

        const pr =
          1 +
          Math.sin(
            t * 0.01 + i
          ) *
            0.4;

        const alpha =
          0.08 +
          Math.sin(
            t * 0.01 + i
          ) *
            0.04;

        ctx.beginPath();

        ctx.arc(
          px,
          py,
          pr,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(34,211,238,${alpha})`;

        ctx.fill();
      }

      // VERY SLOW TIME
      t += 0.4;

      animId =
        requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        absolute inset-0
        h-full w-full
        pointer-events-none
      "
      style={{
        zIndex: 1,
        opacity: 0.9,
      }}
    />
  );
};

const IndustriesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#081219] py-32">
      {/* GRID */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:120px_120px]
        "
      />

      {/* WATER FLOW */}
{/* <WaterCanvas /> */}

      {/* AMBIENT */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">        

        <div
          className="
            absolute left-[5%] top-[5%]
            h-[700px] w-[700px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute right-[0%] bottom-[0%]
            h-[650px] w-[650px]
            rounded-full
            bg-emerald-500/10
            blur-[180px]
          "
        />

        {/* WATER FLOW */}
        <motion.div
          animate={{
            x: [-200, 200],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="
            absolute top-1/2
            h-[2px] w-[1200px]
            bg-gradient-to-r
            from-transparent
            via-cyan-400/20
            to-transparent
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="max-w-5xl">
          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
            <FlaskConical
              size={14}
              className="text-cyan-300"
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.24em]
                text-cyan-200
              "
            >
              Environmental Infrastructure Sectors
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
              text-5xl
              md:text-7xl
              font-black
              leading-[0.92]
              tracking-[-0.05em]
              text-white
            "
          >
            Intelligent Water Systems
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
              Across Critical Industries
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
              mt-10
              max-w-3xl
              text-lg
              md:text-xl
              leading-relaxed
              text-slate-300
            "
          >
            Wastely Aqua engineers integrated environmental
            technologies for industrial wastewater recovery,
            ecological restoration and smart infrastructure
            ecosystems across high-impact sectors.
          </motion.p>

          {/* FILTERS */}
          <div className="mt-12 flex flex-wrap gap-4">
            {[
              "Industrial",
              "Municipal",
              "Healthcare",
              "Smart Cities",
              "Commercial",
              "Aquaculture",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-full
                  border border-white/10
                  bg-white/5
                  px-5 py-3
                  backdrop-blur-xl
                "
              >
                <span className="text-sm text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="mt-24 grid auto-rows-[260px] gap-8 lg:grid-cols-6">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[42px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400/20
                  hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]

                  ${
                    item.size === "large"
                      ? "lg:col-span-3 lg:row-span-2"
                      : ""
                  }

                  ${
                    item.size === "medium"
                      ? "lg:col-span-3 lg:row-span-1"
                      : ""
                  }

                  ${
                    item.size === "small"
                      ? "lg:col-span-2 lg:row-span-1"
                      : ""
                  }

                  ${
                    item.size === "wide"
                      ? "lg:col-span-4 lg:row-span-1"
                      : ""
                  }
                `}
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#081219]
                    via-[#081219]/40
                    to-[#081219]/10
                  "
                />

                {/* CYAN GLOW */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-cyan-400/10
                    via-transparent
                    to-emerald-400/10
                  "
                />

                {/* FLOATING PARTICLES */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      h-1.5 w-1.5
                      rounded-full
                      bg-cyan-400/50
                    "
                    style={{
                      top: `${20 + i * 10}%`,
                      left: `${15 + i * 8}%`,
                    }}
                  />
                ))}

                {/* CONTENT */}
                <div
                  className="
                    relative z-10
                    flex h-full flex-col justify-between
                    p-8
                  "
                >
                  {/* TOP */}
                  <div className="flex items-start justify-between">
                    {/* ICON */}
                    <div
                      className="
                        flex h-18 w-18
                        items-center justify-center
                        rounded-3xl
                        border border-white/10
                        bg-[#081219]/50
                        backdrop-blur-xl
                      "
                    >
                      <Icon
                        size={34}
                        className="text-cyan-300"
                      />
                    </div>

                    {/* ARROW */}
                    <div
                      className="
                        flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        transition-transform duration-300
                        group-hover:rotate-45
                      "
                    >
                      <ArrowUpRight
                        size={22}
                        className="text-cyan-300"
                      />
                    </div>
                  </div>

                  {/* BOTTOM */}
                  <div>
                    {/* METRIC */}
                    <div
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-cyan-400/20
                        bg-cyan-400/10
                        px-4 py-2
                        backdrop-blur-xl
                      "
                    >
                      <div className="h-2 w-2 rounded-full bg-cyan-400" />

                      <span
                        className="
                          text-xs
                          uppercase
                          tracking-[0.18em]
                          text-cyan-200
                        "
                      >
                        {item.metric}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className={`
                        mt-6
                        font-black
                        leading-[0.95]
                        tracking-[-0.04em]
                        text-white

                        ${
                          item.size === "large"
                            ? "text-5xl"
                            : "text-3xl"
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p
                      className="
                        mt-5
                        max-w-xl
                        leading-relaxed
                        text-slate-300
                      "
                    >
                      {item.description}
                    </p>

                    {/* TAGS */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="
                            rounded-full
                            border border-white/10
                            bg-[#081219]/50
                            px-3 py-1
                            text-[11px]
                            uppercase
                            tracking-[0.18em]
                            text-slate-300
                            backdrop-blur-xl
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTTOM GLOW */}
                <div
                  className="
                    absolute bottom-0 left-0
                    h-[2px] w-0
                    bg-gradient-to-r
                    from-cyan-400
                    to-emerald-400
                    transition-all duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STATS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[42px]
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-10 md:p-14
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
              grid gap-8
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {bottomStats.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-[30px]
                  border border-white/10
                  bg-[#081219]/50
                  p-7
                  backdrop-blur-2xl
                "
              >
                <h3
                  className="
                    text-5xl
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
                </h3>

                <p
                  className="
                    mt-4
                    text-slate-400
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;