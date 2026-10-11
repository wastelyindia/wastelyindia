import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Droplets,
  Gauge,
  Recycle,
  Waves,
} from "lucide-react";

import HeroBg from "../../assets/images/home-hero-water-treatment.png";

const MAIN_PATH =
  "M40 300 C95 280 110 150 170 140 C225 131 235 205 290 215 C345 225 370 110 420 100";
const BRANCH_PATH = "M290 215 C330 250 360 320 410 320";

const nodes = [
  { x: 40, y: 300, n: "01", label: "Source", lx: 24, ly: 336, anchor: "start" },
  { x: 170, y: 140, n: "02", label: "Treatment", lx: 170, ly: 108, anchor: "middle" },
  { x: 290, y: 215, n: "", label: "", lx: 0, ly: 0, anchor: "middle", core: true },
  { x: 420, y: 100, n: "03", label: "Reuse", lx: 476, ly: 70, anchor: "end" },
  { x: 410, y: 320, n: "04", label: "Restoration", lx: 476, ly: 358, anchor: "end" },
]

const capabilities = [
  { icon: Droplets, title: "Treatment", text: "Process design built around your water quality." },
  { icon: Recycle, title: "Reuse", text: "Recover water and cut freshwater demand." },
  { icon: Waves, title: "Restoration", text: "Bring natural water bodies back to health." },
  { icon: Activity, title: "Monitoring", text: "Track performance across long-term operation." },
];

const HomeHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-wastely-deep">
      <style>{`
        @keyframes dashFlow { to { stroke-dashoffset: -88; } }
        @keyframes heroFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes heroRise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        .hero-dash { animation: dashFlow 5s linear infinite; }
        .hero-float { animation: heroFloat 6s ease-in-out infinite; }
        .hero-rise { opacity: 0; animation: heroRise .8s cubic-bezier(.2,.7,.2,1) forwards; }
        @media (prefers-reduced-motion: reduce) {
          .hero-dash, .hero-float, .hero-rise { animation: none; opacity: 1; }
        }
      `}</style>

      {/* ---------- Background ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={HeroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[65%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-wastely-deep/60" />
        {/* Readability: top-to-bottom on mobile, left-to-right on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-wastely-deep via-wastely-deep/85 to-wastely-deep/50 lg:bg-gradient-to-r lg:from-wastely-deep lg:via-wastely-deep/80 lg:to-wastely-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/80 via-transparent to-transparent" />

        {/* Soft glows */}
        <div className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-wastely-cyan/10 blur-[140px]" />
        <div className="absolute -bottom-48 right-[-10%] h-[520px] w-[520px] rounded-full bg-wastely-blue/20 blur-[150px]" />

        {/* Subtle grid, faded at the edges */}
        <div
          className="absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* ---------- Content ---------- */}
      <div className="wastely-container relative z-10">
        <div className="grid items-center gap-12 pb-28 pt-28 sm:pt-32 lg:min-h-[780px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24 lg:pt-28">
          {/* LEFT */}
          <div>
            <div
              className="hero-rise inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-wastely-cyan-light backdrop-blur-md"
              style={{ animationDelay: "0ms" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wastely-cyan opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-wastely-cyan" />
              </span>
              Water &amp; Wastewater Treatment
            </div>

            <h1
              className="hero-rise mt-6 max-w-[720px] text-[2.5rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl xl:text-[4.5rem]"
              style={{ animationDelay: "100ms" }}
            >
              Water systems
              <span className="block">engineered around</span>
              <span className="block bg-gradient-to-r from-wastely-cyan-light via-wastely-cyan to-white bg-clip-text text-transparent">
                your requirements.
              </span>
            </h1>

            <p
              className="hero-rise mt-6 max-w-[560px] text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8"
              style={{ animationDelay: "200ms" }}
            >
              Water and wastewater treatment solutions designed around site
              conditions, treatment requirements and long-term operation.
            </p>

            <div
              className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "300ms" }}
            >
              <Link
                to="/contact"
                className="group wastely-btn w-full justify-center bg-white text-wastely-deep shadow-[0_10px_40px_-10px_rgba(59,184,217,.6)] hover:bg-wastely-bg-soft sm:w-auto"
              >
                Request an Assessment
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/solutions"
                className="group wastely-btn w-full justify-center border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-wastely-deep sm:w-auto"
              >
                Explore Solutions
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Capability cards */}
            <div
              className="hero-rise mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
              style={{ animationDelay: "400ms" }}
            >
              {capabilities.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-wastely-cyan/40 hover:bg-white/[0.09]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-wastely-cyan/15 text-wastely-cyan-light transition group-hover:bg-wastely-cyan group-hover:text-wastely-deep">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <div className="mt-3 text-sm font-semibold text-white">{title}</div>
                  <p className="mt-1 hidden text-xs leading-5 text-white/50 sm:block">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — system diagram (visible on all screens, scales to width) */}
          <div
            className="hero-rise relative mx-auto w-full max-w-[560px] lg:max-w-none"
            style={{ animationDelay: "250ms" }}
          >
            <div className="absolute -inset-4 rounded-[28px] bg-wastely-cyan/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] shadow-2xl shadow-black/40 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-wastely-cyan-light">
                    Water Infrastructure
                  </div>
                  <div className="mt-1 text-[11px] text-white/45">
                    Integrated system framework
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-wastely-cyan shadow-[0_0_10px_rgba(59,184,217,.9)]" />
                  <span className="text-[9px] uppercase tracking-[0.18em] text-white/50">
                    Live View
                  </span>
                </div>
              </div>

              {/* Diagram */}
              <div className="relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-wastely-blue/25 to-transparent" />

                <svg
                  viewBox="0 0 500 400"
                  className="relative block h-auto w-full"
                  role="img"
                  aria-label="Water flows from source through treatment to reuse and restoration, with monitoring throughout"
                >
                  <defs>
                    <linearGradient id="flowGrad" x1="0" x2="1">
                      <stop offset="0" stopColor="#3BB8D9" stopOpacity=".4" />
                      <stop offset="1" stopColor="#7FDDF2" />
                    </linearGradient>
                    <radialGradient id="coreGlow">
                      <stop offset="0" stopColor="#3BB8D9" stopOpacity=".45" />
                      <stop offset="1" stopColor="#3BB8D9" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Guides */}
                  <g stroke="#fff" strokeOpacity=".06">
                    <path d="M0 100 H500" />
                    <path d="M0 200 H500" />
                    <path d="M0 300 H500" />
                  </g>

                  {/* Core glow & rings */}
                  <circle cx="290" cy="215" r="80" fill="url(#coreGlow)" />
                  <circle cx="290" cy="215" r="48" fill="none" stroke="#3BB8D9" strokeOpacity=".18" />
                  <circle cx="290" cy="215" r="30" fill="none" stroke="#3BB8D9" strokeOpacity=".3" />

                  {/* Branch + main flow */}
                  <path d={BRANCH_PATH} fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="1.2" strokeDasharray="3 6" />
                  <path d={MAIN_PATH} fill="none" stroke="url(#flowGrad)" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="6 8" className="hero-dash" />

                  {/* Travelling droplets */}
                  <circle r="4" fill="#7FDDF2">
                    <animateMotion dur="7s" repeatCount="indefinite" path={MAIN_PATH} />
                  </circle>
                  <circle r="3" fill="#fff" opacity=".8">
                    <animateMotion dur="7s" begin="3.5s" repeatCount="indefinite" path={MAIN_PATH} />
                  </circle>
                  <circle r="3" fill="#7FDDF2" opacity=".9">
                    <animateMotion dur="4s" repeatCount="indefinite" path={BRANCH_PATH} />
                  </circle>

                  {/* Nodes + labels */}
                  {nodes.map((node, i) => (
                    <g key={i}>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={"core" in node ? 11 : 8}
                        fill="#073B5C"
                        stroke="#3BB8D9"
                        strokeWidth="2"
                      />
                      <circle cx={node.x} cy={node.y} r={"core" in node ? 4 : 2.5} fill="#7FDDF2" />
                      {node.label && (
                        <text x={node.lx} y={node.ly} textAnchor={node.anchor} className="select-none">
                          <tspan x={node.lx} fill="#fff" fillOpacity=".4" fontSize="10" fontWeight="700" letterSpacing="2">
                            {node.n}
                          </tspan>
                          <tspan x={node.lx} dy="15" fill="#fff" fillOpacity=".9" fontSize="13" fontWeight="600">
                            {node.label}
                          </tspan>
                        </text>
                      )}
                    </g>
                  ))}

                  {/* Core label */}
                  <text x="290" y="268" textAnchor="middle" fill="#7FDDF2" fontSize="10" fontWeight="700" letterSpacing="2.5">
                    PROCESS CONTROL
                  </text>

                  {/* Monitoring sparkline */}
                  <g>
                    <text x="24" y="36" fill="#fff" fillOpacity=".4" fontSize="10" fontWeight="700" letterSpacing="2">
                      05
                    </text>
                    <text x="24" y="52" fill="#fff" fillOpacity=".9" fontSize="13" fontWeight="600">
                      Monitoring
                    </text>
                    <path
                      d="M24 74 L50 74 L62 62 L76 84 L90 68 L104 74 L132 74"
                      fill="none"
                      stroke="#3BB8D9"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>

                {/* Central gauge badge */}
                <div className="hero-float pointer-events-none absolute left-[58%] top-[43%] hidden -translate-x-1/2 -translate-y-1/2 sm:block">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-wastely-cyan/40 bg-wastely-deep/80 text-wastely-cyan-light backdrop-blur">
                    <Gauge size={20} strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Readout */}
              <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-wastely-deep/60">
                {[
                  ["Approach", "Application-first"],
                  ["Focus", "Performance"],
                  ["Delivery", "Site-specific"],
                ].map(([k, v]) => (
                  <div key={k} className="px-3 py-3.5 sm:px-5">
                    <div className="text-[8px] uppercase tracking-[0.18em] text-white/35 sm:text-[9px]">{k}</div>
                    <div className="mt-1 text-[11px] font-medium text-white/80 sm:text-xs">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating tag */}
            <div className="absolute -bottom-4 left-4 flex items-center gap-2.5 rounded-full bg-wastely-cyan px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-wastely-deep shadow-lg shadow-wastely-cyan/30 sm:-left-4">
              <span className="h-1.5 w-1.5 rounded-full bg-wastely-deep" />
              Engineered Water Systems
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Wave divider ---------- */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 55" preserveAspectRatio="none" className="block h-10 w-full sm:h-12">
          <path
            d="M0 28 C160 8 300 8 470 27 S780 48 960 27 S1260 8 1440 25"
            fill="none"
            stroke="#3BB8D9"
            strokeOpacity=".35"
          />
          <path
            d="M0 40 C180 20 320 20 500 38 S790 56 970 38 S1260 20 1440 36"
            fill="none"
            stroke="#fff"
            strokeOpacity=".1"
          />
          <path d="M0 47 H1440 V55 H0 Z" fill="#fff" />
        </svg>
      </div>
    </section>
  );
};

export default HomeHero;













// import { Link } from "react-router-dom";

// import {
//   Activity,
//   ArrowRight,
//   Droplets,
//   Gauge,
//   Recycle,
//   Waves,
// } from "lucide-react";

// import HeroBg from "../../assets/images/home-hero-water-treatment.png";

// const flowNodes = [
//   { x: 48, y: 315, type: "source" },

//   { x: 185, y: 150, type: "treatment" },

//   { x: 315, y: 225, type: "core" },

//   { x: 445, y: 105, type: "reuse" },

//   { x: 430, y: 345, type: "restoration" },

// ];



// const HomeHero = () => {

//   return (

//     <section className="relative min-h-[760px] overflow-hidden bg-wastely-deep">
//       {/* =========================================================
//           REAL WATER INFRASTRUCTURE BACKGROUND
//       ========================================================= */}
//       <div className="pointer-events-none absolute inset-0">
//         <img
//           src={HeroBg}
//           alt=""
//           aria-hidden="true"
//           className="h-full w-full object-cover"
//         />

//         {/* Overall deep-blue treatment */}
//         <div className="absolute inset-0 bg-wastely-deep/55" />

//         {/* Stronger readability on the left */}
//         <div className="absolute inset-0 bg-gradient-to-r from-wastely-deep via-wastely-deep/80 to-wastely-deep/30" />

//         {/* Slight bottom depth */}
//         <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/70 via-transparent to-wastely-deep/20" />
//       </div>



//       {/* =========================================================

//           ENGINEERING GRID

//       \========================================================= */}

//       <div

//         className="pointer-events-none absolute inset-0 opacity-[0.065]"

//         style={{

//           backgroundImage:

//             "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",

//           backgroundSize: "72px 72px",

//         }}

//       />



//       {/* Fine secondary grid */}

//       <div

//         className="pointer-events-none absolute right-0 top-0 hidden h-full w-[48%] opacity-[0.045] lg:block"

//         style={{

//           backgroundImage:

//             "linear-gradient(rgba(59,184,217,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,184,217,.8) 1px, transparent 1px)",

//           backgroundSize: "24px 24px",

//         }}

//       />



//       {/* =========================================================

//           WATER ATMOSPHERE

//       \========================================================= */}

//       <div className="pointer-events-none absolute -left-48 -top-48 h-[620px] w-[620px] rounded-full bg-wastely-cyan/5 blur-[150px]" />



//       <div className="pointer-events-none absolute -bottom-56 right-[-8%] h-[620px] w-[620px] rounded-full bg-wastely-blue/10 blur-[160px]" />



//       {/* Thin atmospheric arc */}

//       <div className="pointer-events-none absolute -right-40 top-20 hidden h-[560px] w-[560px] rounded-full border border-wastely-cyan/[0.07] lg:block" />



//       <div className="pointer-events-none absolute -right-24 top-36 hidden h-[400px] w-[400px] rounded-full border border-wastely-cyan/[0.06] lg:block" />



//       {/* =========================================================

//           MAIN CONTENT

//       \========================================================= */}

//       <div className="wastely-container relative z-10">



//         <div className="grid min-h-[760px] items-center gap-16 py-24 lg:grid-cols-[1fr_0.82fr] lg:py-20">



//           {/* =====================================================

//               LEFT — HERO MESSAGE

//           \===================================================== */}

//           <div className="relative">



//             {/* Eyebrow */}

//             <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-wastely-cyan-light">

//               <span className="h-px w-11 bg-wastely-cyan" />

//               Water & Wastewater Treatment

//             </div>



//             {/* Heading */}

//             <h1 className="mt-7 max-w-[700px] text-[2.9rem] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[4.7rem]">



//               Water systems



//               <span className="block">

//                 engineered around

//               </span>



//               <span className="block text-wastely-cyan-light">

//                 your requirements.

//               </span>



//             </h1>



//             {/* Description */}

//             <p className="mt-7 max-w-[590px] text-base leading-8 text-white/65 sm:text-lg">

//               Water and wastewater treatment solutions designed around

//               site conditions, treatment requirements and long-term

//               operation.

//             </p>



//             {/* Actions */}

//             <div className="mt-9 flex flex-wrap gap-3">



//               <Link

//                 to="/contact"

//                 className="group wastely-btn bg-white text-wastely-deep hover:bg-wastely-bg-soft"

//               >

//                 Request an Assessment



//                 <ArrowRight

//                   size={17}

//                   className="transition-transform duration-200 group-hover:translate-x-1"

//                 />

//               </Link>



//               <Link

//                 to="/solutions"

//                 className="group wastely-btn border-white/25 text-white hover:border-white hover:bg-white hover:text-wastely-deep"

//               >

//                 Explore Solutions



//                 <ArrowRight

//                   size={16}

//                   className="transition-transform duration-200 group-hover:translate-x-1"

//                 />

//               </Link>



//             </div>



//             {/* =================================================

//                 SERVICE LINE

//             \================================================= */}

//             <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6">



//               <div className="flex items-center gap-2 text-xs font-medium text-white/55">

//                 <Droplets

//                   size={15}

//                   className="text-wastely-cyan"

//                   strokeWidth={1.6}

//                 />

//                 Treatment

//               </div>



//               <div className="flex items-center gap-2 text-xs font-medium text-white/55">

//                 <Recycle

//                   size={15}

//                   className="text-wastely-cyan"

//                   strokeWidth={1.6}

//                 />

//                 Reuse

//               </div>



//               <div className="flex items-center gap-2 text-xs font-medium text-white/55">

//                 <Waves

//                   size={15}

//                   className="text-wastely-cyan"

//                   strokeWidth={1.6}

//                 />

//                 Restoration

//               </div>



//               <div className="flex items-center gap-2 text-xs font-medium text-white/55">

//                 <Activity

//                   size={15}

//                   className="text-wastely-cyan"

//                   strokeWidth={1.6}

//                 />

//                 Monitoring

//               </div>



//             </div>



//           </div>





//           {/* =====================================================

//               RIGHT — ENGINEERED WATER SYSTEM

//           \===================================================== */}

//           <div className="relative hidden lg:block">



//             {/* Corner registration marks */}

//             <div className="absolute -right-8 -top-8 h-28 w-28 border-r border-t border-wastely-cyan/50" />



//             <div className="absolute -bottom-8 -left-8 h-28 w-28 border-b border-l border-wastely-cyan/30" />



//             {/* Main engineering frame */}

//             <div className="relative border border-white/15 bg-white/[0.035] p-4">



//               {/* =================================================

//                   FRAME HEADER

//               \================================================= */}

//               <div className="flex items-center justify-between border border-white/10 border-b-0 px-5 py-4">



//                 <div>

//                   <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-wastely-cyan-light">

//                     Water Infrastructure

//                   </div>



//                   <div className="mt-1 text-[11px] text-white/35">

//                     Integrated system framework

//                   </div>

//                 </div>



//                 <div className="flex items-center gap-2">



//                   <span className="h-2 w-2 rounded-full bg-wastely-cyan shadow-[0_0_12px_rgba(59,184,217,.7)]" />



//                   <span className="text-[9px] uppercase tracking-[0.18em] text-white/30">

//                     System View

//                   </span>



//                 </div>



//               </div>





//               {/* =================================================

//                   DIAGRAM

//               \================================================= */}

//               <div className="relative h-[460px] overflow-hidden border border-white/10">



//                 {/* Bottom water field */}

//                 <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-wastely-blue/20 via-wastely-blue/[0.05] to-transparent" />



//                 {/* Horizontal technical guide lines */}

//                 <div className="absolute left-0 right-0 top-[25%] border-t border-white/[0.05]" />



//                 <div className="absolute left-0 right-0 top-[50%] border-t border-white/[0.05]" />



//                 <div className="absolute left-0 right-0 top-[75%] border-t border-white/[0.05]" />





//                 {/* =================================================

//                     WATER RIPPLE SYSTEM

//                 \================================================= */}

//                 <div className="absolute bottom-[14%] left-[63%] h-32 w-32 -translate-x-1/2 rounded-full border border-wastely-cyan/20" />



//                 <div className="absolute bottom-[14%] left-[63%] h-52 w-52 -translate-x-1/2 rounded-full border border-wastely-cyan/10" />



//                 <div className="absolute bottom-[14%] left-[63%] h-80 w-80 -translate-x-1/2 rounded-full border border-wastely-cyan/[0.06]" />





//                 {/* =================================================

//                     SVG SYSTEM MAP

//                 \================================================= */}

//                 <svg

//                   viewBox="0 0 500 460"

//                   className="absolute inset-0 h-full w-full"

//                   preserveAspectRatio="none"

//                 >



//                   {/* Main water route */}

//                   <path

//                     d="

//                       M45 315

//                       C105 290 115 170 185 150

//                       C245 133 260 200 315 225

//                       C365 248 390 115 445 105

//                     "

//                     fill="none"

//                     stroke="#3BB8D9"

//                     strokeWidth="1.6"

//                     strokeDasharray="4 7"

//                     className="animate-[dashFlow_7s_linear_infinite]"

//                   />



//                   {/* Secondary route */}

//                   <path

//                     d="

//                       M55 95

//                       C125 115 145 220 220 245

//                       C295 270 350 350 430 345

//                     "

//                     fill="none"

//                     stroke="#ffffff"

//                     strokeOpacity=".25"

//                     strokeWidth="1"

//                   />



//                   {/* Vertical datum */}

//                   <path

//                     d="M315 35 L315 425"

//                     fill="none"

//                     stroke="#3BB8D9"

//                     strokeOpacity=".12"

//                     strokeWidth="1"

//                     strokeDasharray="2 8"

//                   />



//                   {/* Horizontal datum */}

//                   <path

//                     d="M25 225 L475 225"

//                     fill="none"

//                     stroke="#ffffff"

//                     strokeOpacity=".06"

//                     strokeWidth="1"

//                   />





//                   {/* Main nodes */}

//                   {flowNodes.map((node, index) => (

//                     <g key={index}>



//                       <circle

//                         cx={node.x}

//                         cy={node.y}

//                         r={node.type === "core" ? 9 : 7}

//                         fill="#073B5C"

//                         stroke="#3BB8D9"

//                         strokeWidth="1.7"

//                       />



//                       <circle

//                         cx={node.x}

//                         cy={node.y}

//                         r={node.type === "core" ? 3 : 2}

//                         fill="#3BB8D9"

//                       />



//                     </g>

//                   ))}





//                   {/* Treatment core */}

//                   <circle

//                     cx="315"

//                     cy="225"

//                     r="48"

//                     fill="none"

//                     stroke="#3BB8D9"

//                     strokeOpacity=".13"

//                   />



//                   <circle

//                     cx="315"

//                     cy="225"

//                     r="31"

//                     fill="none"

//                     stroke="#3BB8D9"

//                     strokeOpacity=".22"

//                   />



//                   <circle

//                     cx="315"

//                     cy="225"

//                     r="16"

//                     fill="#073B5C"

//                     stroke="#3BB8D9"

//                     strokeWidth="1"

//                     strokeOpacity=".65"

//                   />





//                   {/* Small measurement ticks */}

//                   <g

//                     stroke="#3BB8D9"

//                     strokeOpacity=".35"

//                     strokeWidth=".8"

//                   >

//                     <path d="M315 166 L315 174" />

//                     <path d="M315 276 L315 284" />

//                     <path d="M256 225 L264 225" />

//                     <path d="M366 225 L374 225" />

//                   </g>



//                 </svg>





//                 {/* =================================================

//                     SOURCE LABEL

//                 \================================================= */}

//                 <div className="absolute left-5 top-6">



//                   <div className="flex items-start gap-3">



//                     <span className="mt-1 h-8 w-px bg-wastely-cyan" />



//                     <div>



//                       <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">

//                         01

//                       </div>



//                       <div className="mt-1 text-xs font-semibold text-white/80">

//                         Source

//                       </div>



//                       <div className="mt-1 text-[9px] text-white/30">

//                         Water input

//                       </div>



//                     </div>



//                   </div>



//                 </div>





//                 {/* =================================================

//                     TREATMENT LABEL

//                 \================================================= */}

//                 <div className="absolute left-[63%] top-[46%] -translate-x-1/2 -translate-y-1/2 text-center">



//                   <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-wastely-cyan-light">

//                     Treatment

//                   </div>



//                   <div className="mt-1 text-[9px] text-white/30">

//                     Process control

//                   </div>



//                 </div>





//                 {/* =================================================

//                     REUSE LABEL

//                 \================================================= */}

//                 <div className="absolute right-5 top-[25%]">



//                   <div className="flex items-start gap-3 text-right">



//                     <div>



//                       <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">

//                         03

//                       </div>



//                       <div className="mt-1 text-xs font-semibold text-white/80">

//                         Reuse

//                       </div>



//                       <div className="mt-1 text-[9px] text-white/30">

//                         Recovery

//                       </div>



//                     </div>



//                     <span className="mt-1 h-8 w-px bg-wastely-cyan" />



//                   </div>



//                 </div>





//                 {/* =================================================

//                     RESTORATION LABEL

//                 \================================================= */}

//                 <div className="absolute bottom-[22%] left-5">



//                   <div className="flex items-start gap-3">



//                     <span className="mt-1 h-8 w-px bg-wastely-cyan" />



//                     <div>



//                       <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">

//                         04

//                       </div>



//                       <div className="mt-1 text-xs font-semibold text-white/80">

//                         Restoration

//                       </div>



//                     </div>



//                   </div>



//                 </div>





//                 {/* =================================================

//                     MONITORING LABEL

//                 \================================================= */}

//                 <div className="absolute bottom-5 right-5">



//                   <div className="flex items-start gap-3 text-right">



//                     <div>



//                       <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">

//                         05

//                       </div>



//                       <div className="mt-1 text-xs font-semibold text-white/80">

//                         Monitoring

//                       </div>



//                     </div>



//                     <span className="mt-1 h-8 w-px bg-wastely-cyan" />



//                   </div>



//                 </div>





//                 {/* =================================================

//                     CENTRAL CONTROL MARKER

//                 \================================================= */}

//                 <div className="absolute left-[63%] top-[49%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center">



//                   <div className="absolute inset-0 animate-pulse rounded-full border border-wastely-cyan/20" />



//                   <div className="absolute inset-2 rounded-full border border-wastely-cyan/[0.08]" />



//                   <Gauge

//                     size={22}

//                     strokeWidth={1.2}

//                     className="relative text-wastely-cyan-light"

//                   />



//                 </div>





//                 {/* =================================================

//                     BOTTOM TECHNICAL READOUT

//                 \================================================= */}

//                 <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-wastely-deep/80 px-5 py-4 backdrop-blur-md">



//                   <div className="grid grid-cols-3 gap-4">



//                     <div>



//                       <div className="text-[8px] uppercase tracking-[0.18em] text-white/25">

//                         Approach

//                       </div>



//                       <div className="mt-1 text-[11px] font-medium text-white/65">

//                         Application-first

//                       </div>



//                     </div>



//                     <div>



//                       <div className="text-[8px] uppercase tracking-[0.18em] text-white/25">

//                         Focus

//                       </div>



//                       <div className="mt-1 text-[11px] font-medium text-white/65">

//                         Performance

//                       </div>



//                     </div>



//                     <div>



//                       <div className="text-[8px] uppercase tracking-[0.18em] text-white/25">

//                         Delivery

//                       </div>



//                       <div className="mt-1 text-[11px] font-medium text-white/65">

//                         Site-specific

//                       </div>



//                     </div>



//                   </div>



//                 </div>



//               </div>



//             </div>





//             {/* =================================================

//                 FLOATING ENGINEERING LABEL

//             \================================================= */}

//             <div className="absolute -bottom-5 -left-5 flex items-center gap-3 bg-wastely-cyan px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-wastely-deep">



//               <span className="h-1.5 w-1.5 rounded-full bg-wastely-deep" />



//               Engineered Water Systems



//             </div>



//           </div>



//         </div>



//       </div>





//       {/* =========================================================

//           TECHNICAL WATER DIVIDER

//       \========================================================= */}

//       <div className="pointer-events-none absolute bottom-0 left-0 w-full">



//         <svg

//           viewBox="0 0 1440 55"

//           preserveAspectRatio="none"

//           className="h-12 w-full"

//         >



//           <path

//             d="

//               M0 28

//               C160 8 300 8 470 27

//               S780 48 960 27

//               S1260 8 1440 25

//             "

//             fill="none"

//             stroke="#3BB8D9"

//             strokeOpacity=".28"

//             strokeWidth="1"

//           />



//           <path

//             d="

//               M0 40

//               C180 20 320 20 500 38

//               S790 56 970 38

//               S1260 20 1440 36

//             "

//             fill="none"

//             stroke="#ffffff"

//             strokeOpacity=".08"

//             strokeWidth="1"

//           />



//           <path

//             d="M0 47 H1440 V55 H0 Z"

//             fill="#ffffff"

//           />



//         </svg>



//       </div>



//     </section>

//   );

// };



// export default HomeHero;

