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

const flowNodes = [
  { x: 48, y: 315, type: "source" },

  { x: 185, y: 150, type: "treatment" },

  { x: 315, y: 225, type: "core" },

  { x: 445, y: 105, type: "reuse" },

  { x: 430, y: 345, type: "restoration" },

];



const HomeHero = () => {

  return (

    <section className="relative min-h-[760px] overflow-hidden bg-wastely-deep">
      {/* =========================================================
          REAL WATER INFRASTRUCTURE BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={HeroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />

        {/* Overall deep-blue treatment */}
        <div className="absolute inset-0 bg-wastely-deep/55" />

        {/* Stronger readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-wastely-deep via-wastely-deep/80 to-wastely-deep/30" />

        {/* Slight bottom depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/70 via-transparent to-wastely-deep/20" />
      </div>



      {/* =========================================================

          ENGINEERING GRID

      \========================================================= */}

      <div

        className="pointer-events-none absolute inset-0 opacity-[0.065]"

        style={{

          backgroundImage:

            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",

          backgroundSize: "72px 72px",

        }}

      />



      {/* Fine secondary grid */}

      <div

        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[48%] opacity-[0.045] lg:block"

        style={{

          backgroundImage:

            "linear-gradient(rgba(59,184,217,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,184,217,.8) 1px, transparent 1px)",

          backgroundSize: "24px 24px",

        }}

      />



      {/* =========================================================

          WATER ATMOSPHERE

      \========================================================= */}

      <div className="pointer-events-none absolute -left-48 -top-48 h-[620px] w-[620px] rounded-full bg-wastely-cyan/5 blur-[150px]" />



      <div className="pointer-events-none absolute -bottom-56 right-[-8%] h-[620px] w-[620px] rounded-full bg-wastely-blue/10 blur-[160px]" />



      {/* Thin atmospheric arc */}

      <div className="pointer-events-none absolute -right-40 top-20 hidden h-[560px] w-[560px] rounded-full border border-wastely-cyan/[0.07] lg:block" />



      <div className="pointer-events-none absolute -right-24 top-36 hidden h-[400px] w-[400px] rounded-full border border-wastely-cyan/[0.06] lg:block" />



      {/* =========================================================

          MAIN CONTENT

      \========================================================= */}

      <div className="wastely-container relative z-10">



        <div className="grid min-h-[760px] items-center gap-16 py-24 lg:grid-cols-[1fr_0.82fr] lg:py-20">



          {/* =====================================================

              LEFT — HERO MESSAGE

          \===================================================== */}

          <div className="relative">



            {/* Eyebrow */}

            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-wastely-cyan-light">

              <span className="h-px w-11 bg-wastely-cyan" />

              Water & Wastewater Treatment

            </div>



            {/* Heading */}

            <h1 className="mt-7 max-w-[700px] text-[2.9rem] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[4.7rem]">



              Water systems



              <span className="block">

                engineered around

              </span>



              <span className="block text-wastely-cyan-light">

                your requirements.

              </span>



            </h1>



            {/* Description */}

            <p className="mt-7 max-w-[590px] text-base leading-8 text-white/65 sm:text-lg">

              Water and wastewater treatment solutions designed around

              site conditions, treatment requirements and long-term

              operation.

            </p>



            {/* Actions */}

            <div className="mt-9 flex flex-wrap gap-3">



              <Link

                to="/contact"

                className="group wastely-btn bg-white text-wastely-deep hover:bg-wastely-bg-soft"

              >

                Request an Assessment



                <ArrowRight

                  size={17}

                  className="transition-transform duration-200 group-hover:translate-x-1"

                />

              </Link>



              <Link

                to="/solutions"

                className="group wastely-btn border-white/25 text-white hover:border-white hover:bg-white hover:text-wastely-deep"

              >

                Explore Solutions



                <ArrowRight

                  size={16}

                  className="transition-transform duration-200 group-hover:translate-x-1"

                />

              </Link>



            </div>



            {/* =================================================

                SERVICE LINE

            \================================================= */}

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6">



              <div className="flex items-center gap-2 text-xs font-medium text-white/55">

                <Droplets

                  size={15}

                  className="text-wastely-cyan"

                  strokeWidth={1.6}

                />

                Treatment

              </div>



              <div className="flex items-center gap-2 text-xs font-medium text-white/55">

                <Recycle

                  size={15}

                  className="text-wastely-cyan"

                  strokeWidth={1.6}

                />

                Reuse

              </div>



              <div className="flex items-center gap-2 text-xs font-medium text-white/55">

                <Waves

                  size={15}

                  className="text-wastely-cyan"

                  strokeWidth={1.6}

                />

                Restoration

              </div>



              <div className="flex items-center gap-2 text-xs font-medium text-white/55">

                <Activity

                  size={15}

                  className="text-wastely-cyan"

                  strokeWidth={1.6}

                />

                Monitoring

              </div>



            </div>



          </div>





          {/* =====================================================

              RIGHT — ENGINEERED WATER SYSTEM

          \===================================================== */}

          <div className="relative hidden lg:block">



            {/* Corner registration marks */}

            <div className="absolute -right-8 -top-8 h-28 w-28 border-r border-t border-wastely-cyan/50" />



            <div className="absolute -bottom-8 -left-8 h-28 w-28 border-b border-l border-wastely-cyan/30" />



            {/* Main engineering frame */}

            <div className="relative border border-white/15 bg-white/[0.035] p-4">



              {/* =================================================

                  FRAME HEADER

              \================================================= */}

              <div className="flex items-center justify-between border border-white/10 border-b-0 px-5 py-4">



                <div>

                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-wastely-cyan-light">

                    Water Infrastructure

                  </div>



                  <div className="mt-1 text-[11px] text-white/35">

                    Integrated system framework

                  </div>

                </div>



                <div className="flex items-center gap-2">



                  <span className="h-2 w-2 rounded-full bg-wastely-cyan shadow-[0_0_12px_rgba(59,184,217,.7)]" />



                  <span className="text-[9px] uppercase tracking-[0.18em] text-white/30">

                    System View

                  </span>



                </div>



              </div>





              {/* =================================================

                  DIAGRAM

              \================================================= */}

              <div className="relative h-[460px] overflow-hidden border border-white/10">



                {/* Bottom water field */}

                <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-wastely-blue/20 via-wastely-blue/[0.05] to-transparent" />



                {/* Horizontal technical guide lines */}

                <div className="absolute left-0 right-0 top-[25%] border-t border-white/[0.05]" />



                <div className="absolute left-0 right-0 top-[50%] border-t border-white/[0.05]" />



                <div className="absolute left-0 right-0 top-[75%] border-t border-white/[0.05]" />





                {/* =================================================

                    WATER RIPPLE SYSTEM

                \================================================= */}

                <div className="absolute bottom-[14%] left-[63%] h-32 w-32 -translate-x-1/2 rounded-full border border-wastely-cyan/20" />



                <div className="absolute bottom-[14%] left-[63%] h-52 w-52 -translate-x-1/2 rounded-full border border-wastely-cyan/10" />



                <div className="absolute bottom-[14%] left-[63%] h-80 w-80 -translate-x-1/2 rounded-full border border-wastely-cyan/[0.06]" />





                {/* =================================================

                    SVG SYSTEM MAP

                \================================================= */}

                <svg

                  viewBox="0 0 500 460"

                  className="absolute inset-0 h-full w-full"

                  preserveAspectRatio="none"

                >



                  {/* Main water route */}

                  <path

                    d="

                      M45 315

                      C105 290 115 170 185 150

                      C245 133 260 200 315 225

                      C365 248 390 115 445 105

                    "

                    fill="none"

                    stroke="#3BB8D9"

                    strokeWidth="1.6"

                    strokeDasharray="4 7"

                    className="animate-[dashFlow_7s_linear_infinite]"

                  />



                  {/* Secondary route */}

                  <path

                    d="

                      M55 95

                      C125 115 145 220 220 245

                      C295 270 350 350 430 345

                    "

                    fill="none"

                    stroke="#ffffff"

                    strokeOpacity=".25"

                    strokeWidth="1"

                  />



                  {/* Vertical datum */}

                  <path

                    d="M315 35 L315 425"

                    fill="none"

                    stroke="#3BB8D9"

                    strokeOpacity=".12"

                    strokeWidth="1"

                    strokeDasharray="2 8"

                  />



                  {/* Horizontal datum */}

                  <path

                    d="M25 225 L475 225"

                    fill="none"

                    stroke="#ffffff"

                    strokeOpacity=".06"

                    strokeWidth="1"

                  />





                  {/* Main nodes */}

                  {flowNodes.map((node, index) => (

                    <g key={index}>



                      <circle

                        cx={node.x}

                        cy={node.y}

                        r={node.type === "core" ? 9 : 7}

                        fill="#073B5C"

                        stroke="#3BB8D9"

                        strokeWidth="1.7"

                      />



                      <circle

                        cx={node.x}

                        cy={node.y}

                        r={node.type === "core" ? 3 : 2}

                        fill="#3BB8D9"

                      />



                    </g>

                  ))}





                  {/* Treatment core */}

                  <circle

                    cx="315"

                    cy="225"

                    r="48"

                    fill="none"

                    stroke="#3BB8D9"

                    strokeOpacity=".13"

                  />



                  <circle

                    cx="315"

                    cy="225"

                    r="31"

                    fill="none"

                    stroke="#3BB8D9"

                    strokeOpacity=".22"

                  />



                  <circle

                    cx="315"

                    cy="225"

                    r="16"

                    fill="#073B5C"

                    stroke="#3BB8D9"

                    strokeWidth="1"

                    strokeOpacity=".65"

                  />





                  {/* Small measurement ticks */}

                  <g

                    stroke="#3BB8D9"

                    strokeOpacity=".35"

                    strokeWidth=".8"

                  >

                    <path d="M315 166 L315 174" />

                    <path d="M315 276 L315 284" />

                    <path d="M256 225 L264 225" />

                    <path d="M366 225 L374 225" />

                  </g>



                </svg>





                {/* =================================================

                    SOURCE LABEL

                \================================================= */}

                <div className="absolute left-5 top-6">



                  <div className="flex items-start gap-3">



                    <span className="mt-1 h-8 w-px bg-wastely-cyan" />



                    <div>



                      <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">

                        01

                      </div>



                      <div className="mt-1 text-xs font-semibold text-white/80">

                        Source

                      </div>



                      <div className="mt-1 text-[9px] text-white/30">

                        Water input

                      </div>



                    </div>



                  </div>



                </div>





                {/* =================================================

                    TREATMENT LABEL

                \================================================= */}

                <div className="absolute left-[63%] top-[46%] -translate-x-1/2 -translate-y-1/2 text-center">



                  <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-wastely-cyan-light">

                    Treatment

                  </div>



                  <div className="mt-1 text-[9px] text-white/30">

                    Process control

                  </div>



                </div>





                {/* =================================================

                    REUSE LABEL

                \================================================= */}

                <div className="absolute right-5 top-[25%]">



                  <div className="flex items-start gap-3 text-right">



                    <div>



                      <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">

                        03

                      </div>



                      <div className="mt-1 text-xs font-semibold text-white/80">

                        Reuse

                      </div>



                      <div className="mt-1 text-[9px] text-white/30">

                        Recovery

                      </div>



                    </div>



                    <span className="mt-1 h-8 w-px bg-wastely-cyan" />



                  </div>



                </div>





                {/* =================================================

                    RESTORATION LABEL

                \================================================= */}

                <div className="absolute bottom-[22%] left-5">



                  <div className="flex items-start gap-3">



                    <span className="mt-1 h-8 w-px bg-wastely-cyan" />



                    <div>



                      <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">

                        04

                      </div>



                      <div className="mt-1 text-xs font-semibold text-white/80">

                        Restoration

                      </div>



                    </div>



                  </div>



                </div>





                {/* =================================================

                    MONITORING LABEL

                \================================================= */}

                <div className="absolute bottom-5 right-5">



                  <div className="flex items-start gap-3 text-right">



                    <div>



                      <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">

                        05

                      </div>



                      <div className="mt-1 text-xs font-semibold text-white/80">

                        Monitoring

                      </div>



                    </div>



                    <span className="mt-1 h-8 w-px bg-wastely-cyan" />



                  </div>



                </div>





                {/* =================================================

                    CENTRAL CONTROL MARKER

                \================================================= */}

                <div className="absolute left-[63%] top-[49%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center">



                  <div className="absolute inset-0 animate-pulse rounded-full border border-wastely-cyan/20" />



                  <div className="absolute inset-2 rounded-full border border-wastely-cyan/[0.08]" />



                  <Gauge

                    size={22}

                    strokeWidth={1.2}

                    className="relative text-wastely-cyan-light"

                  />



                </div>





                {/* =================================================

                    BOTTOM TECHNICAL READOUT

                \================================================= */}

                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-wastely-deep/80 px-5 py-4 backdrop-blur-md">



                  <div className="grid grid-cols-3 gap-4">



                    <div>



                      <div className="text-[8px] uppercase tracking-[0.18em] text-white/25">

                        Approach

                      </div>



                      <div className="mt-1 text-[11px] font-medium text-white/65">

                        Application-first

                      </div>



                    </div>



                    <div>



                      <div className="text-[8px] uppercase tracking-[0.18em] text-white/25">

                        Focus

                      </div>



                      <div className="mt-1 text-[11px] font-medium text-white/65">

                        Performance

                      </div>



                    </div>



                    <div>



                      <div className="text-[8px] uppercase tracking-[0.18em] text-white/25">

                        Delivery

                      </div>



                      <div className="mt-1 text-[11px] font-medium text-white/65">

                        Site-specific

                      </div>



                    </div>



                  </div>



                </div>



              </div>



            </div>





            {/* =================================================

                FLOATING ENGINEERING LABEL

            \================================================= */}

            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 bg-wastely-cyan px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-wastely-deep">



              <span className="h-1.5 w-1.5 rounded-full bg-wastely-deep" />



              Engineered Water Systems



            </div>



          </div>



        </div>



      </div>





      {/* =========================================================

          TECHNICAL WATER DIVIDER

      \========================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 w-full">



        <svg

          viewBox="0 0 1440 55"

          preserveAspectRatio="none"

          className="h-12 w-full"

        >



          <path

            d="

              M0 28

              C160 8 300 8 470 27

              S780 48 960 27

              S1260 8 1440 25

            "

            fill="none"

            stroke="#3BB8D9"

            strokeOpacity=".28"

            strokeWidth="1"

          />



          <path

            d="

              M0 40

              C180 20 320 20 500 38

              S790 56 970 38

              S1260 20 1440 36

            "

            fill="none"

            stroke="#ffffff"

            strokeOpacity=".08"

            strokeWidth="1"

          />



          <path

            d="M0 47 H1440 V55 H0 Z"

            fill="#ffffff"

          />



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
//           ENGINEERING GRID
//       ========================================================= */}
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
//       ========================================================= */}
//       <div className="pointer-events-none absolute -left-48 -top-48 h-[620px] w-[620px] rounded-full bg-wastely-cyan/10 blur-[150px]" />

//       <div className="pointer-events-none absolute -bottom-56 right-[-8%] h-[620px] w-[620px] rounded-full bg-wastely-blue/20 blur-[160px]" />

//       {/* Thin atmospheric arc */}
//       <div className="pointer-events-none absolute -right-40 top-20 hidden h-[560px] w-[560px] rounded-full border border-wastely-cyan/[0.07] lg:block" />

//       <div className="pointer-events-none absolute -right-24 top-36 hidden h-[400px] w-[400px] rounded-full border border-wastely-cyan/[0.06] lg:block" />

//       {/* =========================================================
//           MAIN CONTENT
//       ========================================================= */}
//       <div className="wastely-container relative z-10">

//         <div className="grid min-h-[760px] items-center gap-16 py-24 lg:grid-cols-[1fr_0.82fr] lg:py-20">

//           {/* =====================================================
//               LEFT — HERO MESSAGE
//           ===================================================== */}
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
//             ================================================= */}
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
//           ===================================================== */}
//           <div className="relative hidden lg:block">

//             {/* Corner registration marks */}
//             <div className="absolute -right-8 -top-8 h-28 w-28 border-r border-t border-wastely-cyan/50" />

//             <div className="absolute -bottom-8 -left-8 h-28 w-28 border-b border-l border-wastely-cyan/30" />

//             {/* Main engineering frame */}
//             <div className="relative border border-white/15 bg-white/[0.035] p-4">

//               {/* =================================================
//                   FRAME HEADER
//               ================================================= */}
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
//               ================================================= */}
//               <div className="relative h-[460px] overflow-hidden border border-white/10">

//                 {/* Bottom water field */}
//                 <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-wastely-blue/20 via-wastely-blue/[0.05] to-transparent" />

//                 {/* Horizontal technical guide lines */}
//                 <div className="absolute left-0 right-0 top-[25%] border-t border-white/[0.05]" />

//                 <div className="absolute left-0 right-0 top-[50%] border-t border-white/[0.05]" />

//                 <div className="absolute left-0 right-0 top-[75%] border-t border-white/[0.05]" />


//                 {/* =================================================
//                     WATER RIPPLE SYSTEM
//                 ================================================= */}
//                 <div className="absolute bottom-[14%] left-[63%] h-32 w-32 -translate-x-1/2 rounded-full border border-wastely-cyan/20" />

//                 <div className="absolute bottom-[14%] left-[63%] h-52 w-52 -translate-x-1/2 rounded-full border border-wastely-cyan/10" />

//                 <div className="absolute bottom-[14%] left-[63%] h-80 w-80 -translate-x-1/2 rounded-full border border-wastely-cyan/[0.06]" />


//                 {/* =================================================
//                     SVG SYSTEM MAP
//                 ================================================= */}
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
//                 ================================================= */}
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
//                 ================================================= */}
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
//                 ================================================= */}
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
//                 ================================================= */}
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
//                 ================================================= */}
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
//                 ================================================= */}
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
//                 ================================================= */}
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
//             ================================================= */}
//             <div className="absolute -bottom-5 -left-5 flex items-center gap-3 bg-wastely-cyan px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-wastely-deep">

//               <span className="h-1.5 w-1.5 rounded-full bg-wastely-deep" />

//               Engineered Water Systems

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* =========================================================
//           TECHNICAL WATER DIVIDER
//       ========================================================= */}
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






// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// import video from "../../assets/video/wastely_water.mp4";

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       {/* =========================================================
//           SUBTLE WATER / ENGINEERING BACKGROUND
//          ========================================================= */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Soft blue water gradient */}
//         <div
//           className="
//             absolute
//             right-[-12%]
//             top-[-18%]
//             h-[520px]
//             w-[520px]
//             rounded-full
//             bg-[radial-gradient(circle,rgba(47,180,206,0.10),transparent_68%)]
//           "
//         />

//         {/* Thin ripple rings */}
//         <div
//           className="
//             absolute
//             right-[5%]
//             top-[18%]
//             hidden
//             h-[360px]
//             w-[360px]
//             rounded-full
//             border
//             border-[#2FB4CE]/10
//             lg:block
//           "
//         />

//         <div
//           className="
//             absolute
//             right-[10%]
//             top-[25%]
//             hidden
//             h-[250px]
//             w-[250px]
//             rounded-full
//             border
//             border-[#2FB4CE]/10
//             lg:block
//           "
//         />

//         {/* Small engineering grid */}
//         <div
//           className="
//             absolute
//             right-0
//             top-0
//             hidden
//             h-full
//             w-[42%]
//             opacity-[0.22]
//             lg:block
//             [background-image:linear-gradient(#E3EDF1_1px,transparent_1px),linear-gradient(90deg,#E3EDF1_1px,transparent_1px)]
//             [background-size:48px_48px]
//           "
//         />
//       </div>

//       {/* =========================================================
//           CONTENT
//          ========================================================= */}

//       <div className="wastely-container relative z-10">
//         <div
//           className="
//             grid
//             min-h-[calc(100svh-72px)]
//             items-center
//             gap-12
//             py-16
//             md:py-20
//             lg:grid-cols-[0.95fr_1.05fr]
//             lg:gap-16
//             lg:py-24
//           "
//         >
//           {/* =====================================================
//               LEFT — MESSAGE
//              ===================================================== */}

//           <div className="max-w-[620px]">
//             {/* Eyebrow */}
//             <div className="wastely-section-eyebrow">
//               Water & Wastewater Treatment
//             </div>

//             {/* Main heading */}
//             <h1
//               className="
//                 max-w-[620px]
//                 text-[2.5rem]
//                 font-bold
//                 leading-[1.1]
//                 tracking-[-0.03em]
//                 text-wastely-deep
//                 sm:text-[3rem]
//                 lg:text-[3.4rem]
//               "
//             >
//               Water treatment solutions built around your requirements.
//             </h1>

//             {/* Description */}
//             <p
//               className="
//                 mt-6
//                 max-w-[570px]
//                 text-base
//                 leading-7
//                 text-wastely-sub
//                 sm:text-lg
//               "
//             >
//               Wastely Aqua provides water and wastewater treatment solutions
//               for industrial, municipal and environmental applications —
//               from treatment and restoration to ongoing plant support.
//             </p>

//             {/* Actions */}
//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 to="/contact"
//                 className="wastely-btn wastely-btn-primary"
//               >
//                 Request an Assessment
//                 <ArrowRight size={17} />
//               </Link>

//               <Link
//                 to="/solutions"
//                 className="wastely-btn wastely-btn-secondary"
//               >
//                 Explore Solutions
//               </Link>
//             </div>

//             {/* Small supporting line */}
//             <div className="mt-8 flex items-center gap-3">
//               <span className="h-px w-10 bg-wastely-cyan" />

//               <span
//                 className="
//                   text-xs
//                   font-medium
//                   uppercase
//                   tracking-[0.12em]
//                   text-wastely-sub
//                 "
//               >
//                 Treatment · Reuse · Restoration
//               </span>
//             </div>
//           </div>

//           {/* =====================================================
//               RIGHT — WATER VISUAL
//              ===================================================== */}

//           <div className="relative">
//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 border
//                 border-wastely-line
//                 bg-wastely-bg-soft
//               "
//             >
//               {/* Video */}
//               <div className="aspect-[4/3] overflow-hidden">
//                 <video
//                   className="
//                     h-full
//                     w-full
//                     object-cover
//                   "
//                   src={video}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   preload="metadata"
//                 />
//               </div>

//               {/* Bottom information strip */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   gap-4
//                   border-t
//                   border-wastely-line
//                   bg-white
//                   px-5
//                   py-4
//                   sm:px-6
//                 "
//               >
//                 <div>
//                   <p
//                     className="
//                       text-xs
//                       font-semibold
//                       uppercase
//                       tracking-[0.1em]
//                       text-wastely-blue
//                     "
//                   >
//                     Water Infrastructure
//                   </p>

//                   <p className="mt-1 text-sm text-wastely-sub">
//                     Engineered treatment and environmental solutions
//                   </p>
//                 </div>

//                 <div
//                   className="
//                     hidden
//                     h-9
//                     w-9
//                     shrink-0
//                     items-center
//                     justify-center
//                     border
//                     border-wastely-line
//                     text-wastely-blue
//                     sm:flex
//                   "
//                 >
//                   <ArrowRight size={16} />
//                 </div>
//               </div>
//             </div>

//             {/* Cyan engineering accent */}
//             <div
//               className="
//                 absolute
//                 -bottom-2
//                 left-6
//                 h-[2px]
//                 w-24
//                 bg-wastely-cyan
//               "
//             />
//           </div>
//         </div>
//       </div>

//       {/* =========================================================
//           FLOW-LINE DIVIDER
//          ========================================================= */}

//       <div className="relative h-8 overflow-hidden">
//         <svg
//           className="absolute bottom-0 left-0 h-8 w-full"
//           viewBox="0 0 1440 40"
//           preserveAspectRatio="none"
//           aria-hidden="true"
//         >
//           <path
//             d="M0 20 C180 4 300 4 480 20 S780 36 960 20 S1260 4 1440 20"
//             fill="none"
//             stroke="#2FB4CE"
//             strokeOpacity="0.18"
//             strokeWidth="1"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Hero;







// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import {
// //   ArrowRight,
// //   Waves,
// //   Cpu,
// //   Orbit,
// //   Leaf,
// //   Globe,
// //   Radar,
// //   Recycle,
// //   Gauge,
// // } from "lucide-react";

// // import video from "../../assets/video/wastely_water.mp4";

// // const floatingTech = [
// //   {
// //     title: "Nano Bubble",
// //     icon: Waves,
// //     position: "top-[10%] right-[6%]",
// //     color: "text-cyan-300",
// //   },

// //   {
// //     title: "MPC Smart Buoy",
// //     icon: Radar,
// //     position: "bottom-[18%] right-[10%]",
// //     color: "text-emerald-300",
// //   },
// // ];

// // const metrics = [
// //   {
// //     value: "₹33+ Cr",
// //     label: "Restoration Capability",
// //     icon: Gauge,
// //   },

// //   {
// //     value: "₹20+ Cr",
// //     label: "Lake Rejuvenation Projects",
// //     icon: Waves,
// //   },

// //   {
// //     value: "24/7",
// //     label: "Smart Monitoring",
// //     icon: Cpu,
// //   },

// //   {
// //     value: "5+",
// //     label: "Major Water Bodies Restored",
// //     icon: Globe,
// //   },
// // ];

// // export default function Hero() {
// //   return (
// //     <section
// //       className="
// //         relative
// //         isolate
// //         min-h-[100svh]
// //         overflow-clip
// //         bg-[#081219]
// //       "
// //     >
// //       {/* VIDEO */}
// //       <div className="absolute inset-0">
// //         <video
// //           className="
// //             absolute inset-0
// //             h-full w-full
// //             object-cover
// //             scale-[1.03]
// //             will-change-transform
// //           "
// //           src={video}
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //           preload="auto"
// //         />

// //         {/* DARK OVERLAY */}
// //         <div className="absolute inset-0 bg-[#081219]/72" />

// //         {/* LEFT DEPTH */}
// //         <div
// //           className="
// //             absolute inset-0
// //             bg-gradient-to-r
// //             from-[#081219]
// //             via-[#081219]/75
// //             to-transparent
// //           "
// //         />

// //         {/* TOP/BOTTOM DEPTH */}
// //         <div
// //           className="
// //             absolute inset-0
// //             bg-gradient-to-t
// //             from-[#081219]
// //             via-transparent
// //             to-[#081219]/40
// //           "
// //         />

// //         {/* CYAN AMBIENT */}
// //         <div
// //           className="
// //             absolute
// //             left-[-10%]
// //             top-[5%]
// //             h-[420px]
// //             w-[420px]
// //             rounded-full
// //             bg-cyan-500/10
// //             blur-[120px]
// //           "
// //         />

// //         {/* EMERALD AMBIENT */}
// //         <div
// //           className="
// //             absolute
// //             bottom-[-10%]
// //             right-[-5%]
// //             h-[420px]
// //             w-[420px]
// //             rounded-full
// //             bg-emerald-500/10
// //             blur-[120px]
// //           "
// //         />

// //         {/* GRID */}
// //         <div
// //           className="
// //             absolute inset-0
// //             opacity-[0.04]
// //             bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
// //             bg-[size:72px_72px]
// //           "
// //         />
// //       </div>

// //       {/* FLOATING TECH */}
// //       <div className="hidden xl:block">
// //         {floatingTech.map((item, index) => {
// //           const Icon = item.icon;

// //           return (
// //             <motion.div
// //               key={index}
// //               animate={{
// //                 y: [0, -8, 0],
// //               }}
// //               transition={{
// //                 duration: 6 + index,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               }}
// //               className={`absolute z-20 ${item.position}`}
// //             >
// //               <div
// //                 className="
// //                   flex items-center gap-4
// //                   rounded-[28px]
// //                   border border-white/10
// //                   bg-white/[0.05]
// //                   backdrop-blur-2xl
// //                   px-5 py-4
// //                   shadow-[0_0_60px_-12px_rgba(14,165,233,0.22)]
// //                 "
// //               >
// //                 <div
// //                   className="
// //                     flex h-14 w-14 items-center justify-center
// //                     rounded-2xl
// //                     border border-white/10
// //                     bg-gradient-to-br
// //                     from-cyan-400/10
// //                     to-emerald-400/10
// //                   "
// //                 >
// //                   <Icon
// //                     size={26}
// //                     className={item.color}
// //                   />
// //                 </div>

// //                 <div>
// //                   <p className="text-sm font-semibold text-white">
// //                     {item.title}
// //                   </p>

// //                   <p className="text-xs text-slate-400">
// //                     Integrated Ecosystem
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           );
// //         })}
// //       </div>

// //       {/* MAIN CONTENT */}
// //       <div
// //         className="
// //           relative z-20
// //           mx-auto
// //           flex min-h-[100svh]
// //           max-w-7xl
// //           items-center
// //           px-4 sm:px-6 lg:px-8
// //           pt-28 sm:pt-32
// //           pb-14 sm:pb-20 lg:pb-24
// //         "
// //       >
// //         <div className="w-full">
// //           {/* HERO CONTENT */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 35 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.9 }}
// //             className="max-w-5xl"
// //           >
// //             {/* BADGE */}
// //             <div
// //               className="
// //                 mb-7 sm:mb-8
// //                 inline-flex items-center gap-3
// //                 rounded-full
// //                 border border-cyan-400/20
// //                 bg-white/[0.05]
// //                 px-4 sm:px-5
// //                 py-2
// //                 backdrop-blur-xl
// //               "
// //             >
// //               <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

// //               <span
// //                 className="
// //                   text-[10px] sm:text-xs
// //                   uppercase
// //                   tracking-[0.25em]
// //                   text-cyan-200
// //                 "
// //               >
// //                 Integrated Restoration Ecosystem
// //               </span>
// //             </div>

// //             {/* TITLE */}
// //             <h1
// //               className="
// //                 text-[42px]
// //                 sm:text-6xl
// //                 md:text-7xl
// //                 xl:text-[108px]
// //                 font-black
// //                 leading-[0.92]
// //                 tracking-[-0.05em]
// //                 text-white
// //               "
// //             >
// //               Engineering

// //               <span
// //                 className="
// //                   block
// //                   bg-gradient-to-r
// //                   from-cyan-300
// //                   via-cyan-400
// //                   to-emerald-400
// //                   bg-clip-text
// //                   text-transparent
// //                 "
// //               >
// //                 Intelligent Water
// //               </span>

// //               Infrastructure
// //             </h1>

// //             {/* DESCRIPTION */}
// //             <p
// //               className="
// //                 mt-8 sm:mt-10
// //                 max-w-2xl lg:max-w-3xl
// //                 text-[15px]
// //                 sm:text-lg
// //                 lg:text-xl
// //                 leading-relaxed
// //                 text-slate-300
// //               "
// //             >
// //               Advanced lake restoration, wastewater treatment,
// //               nano bubble aeration, floating wetlands,
// //               bioremediation and AI-powered monitoring systems
// //               engineered for sustainable environmental
// //               infrastructure.
// //             </p>

// //             {/* TAGS */}
// //             <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
// //               {[
// //                 "Nano Bubble Aeration",
// //                 "Floating Wetlands",
// //                 "MPC Smart Buoy",
// //                 "Bioremediation",
// //                 "Ultrasonic Algae Control",
// //               ].map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="
// //                     rounded-full
// //                     border border-white/10
// //                     bg-white/[0.05]
// //                     backdrop-blur-xl
// //                     px-4 py-2.5
// //                     text-[12px] sm:text-sm
// //                     text-slate-200
// //                     transition-all duration-300
// //                     hover:border-cyan-400/30
// //                     hover:bg-white/[0.08]
// //                   "
// //                 >
// //                   {item}
// //                 </div>
// //               ))}
// //             </div>

// //             {/* BUTTONS */}
// //             <div
// //               className="
// //                 mt-10 sm:mt-12
// //                 flex flex-col sm:flex-row
// //                 items-stretch sm:items-center
// //                 gap-4 sm:gap-5
// //               "
// //             >
// //               <Link
// //                 to="/case-studies"
// //                 className="
// //                   group
// //                   inline-flex items-center justify-center gap-3
// //                   rounded-full
// //                   bg-gradient-to-r
// //                   from-cyan-500
// //                   to-emerald-500
// //                   px-6 sm:px-8
// //                   py-3.5 sm:py-4
// //                   text-sm sm:text-base
// //                   font-medium
// //                   text-white
// //                   shadow-[0_0_60px_-12px_rgba(14,165,233,0.45)]
// //                   transition-all duration-300
// //                   hover:scale-[1.02]
// //                   will-change-transform
// //                 "
// //               >
// //                 Explore Restoration Projects

// //                 <ArrowRight
// //                   size={18}
// //                   className="
// //                     transition-transform duration-300
// //                     group-hover:translate-x-1
// //                   "
// //                 />
// //               </Link>

// //               <Link
// //                 to="/technologies"
// //                 className="
// //                   inline-flex items-center justify-center gap-3
// //                   rounded-full
// //                   border border-white/10
// //                   bg-white/[0.05]
// //                   backdrop-blur-xl
// //                   px-6 sm:px-8
// //                   py-3.5 sm:py-4
// //                   text-sm sm:text-base
// //                   text-white
// //                   transition-all duration-300
// //                   hover:border-cyan-400/20
// //                   hover:bg-white/[0.08]
// //                 "
// //               >
// //                 View Technologies
// //               </Link>
// //             </div>
// //           </motion.div>

// //           {/* METRICS */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 35 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.25, duration: 0.8 }}
// //             className="
// //               mt-14 sm:mt-20
// //               grid
// //               grid-cols-1
// //               sm:grid-cols-2
// //               xl:grid-cols-4
// //               gap-4 sm:gap-5
// //               max-w-7xl
// //             "
// //           >
// //             {metrics.map((item, index) => {
// //               const Icon = item.icon;

// //               return (
// //                 <div
// //                   key={index}
// //                   className="
// //                     group
// //                     relative
// //                     overflow-hidden
// //                     rounded-[30px]
// //                     border border-white/10
// //                     bg-white/[0.05]
// //                     backdrop-blur-2xl
// //                     p-5 sm:p-6 lg:p-7
// //                     transition-all duration-500
// //                     hover:border-cyan-400/20
// //                   "
// //                 >
// //                   {/* HOVER LIGHT */}
// //                   <div
// //                     className="
// //                       absolute inset-0
// //                       opacity-0
// //                       transition-all duration-500
// //                       group-hover:opacity-100
// //                       bg-gradient-to-br
// //                       from-cyan-500/10
// //                       to-emerald-500/5
// //                     "
// //                   />

// //                   {/* ICON */}
// //                   <div
// //                     className="
// //                       relative z-10
// //                       mb-5 sm:mb-6
// //                       flex h-12 w-12 sm:h-14 sm:w-14
// //                       items-center justify-center
// //                       rounded-2xl
// //                       border border-white/10
// //                       bg-gradient-to-br
// //                       from-cyan-400/10
// //                       to-emerald-400/10
// //                     "
// //                   >
// //                     <Icon
// //                       size={24}
// //                       className="text-cyan-300"
// //                     />
// //                   </div>

// //                   {/* VALUE */}
// //                   <h3
// //                     className="
// //                       relative z-10
// //                       text-3xl
// //                       sm:text-4xl
// //                       lg:text-5xl
// //                       font-black
// //                       leading-none
// //                       tracking-[-0.04em]
// //                       bg-gradient-to-r
// //                       from-cyan-300
// //                       to-emerald-300
// //                       bg-clip-text
// //                       text-transparent
// //                     "
// //                   >
// //                     {item.value}
// //                   </h3>

// //                   {/* LABEL */}
// //                   <p
// //                     className="
// //                       relative z-10
// //                       mt-3 sm:mt-4
// //                       text-sm sm:text-base
// //                       leading-relaxed
// //                       text-slate-400
// //                     "
// //                   >
// //                     {item.label}
// //                   </p>
// //                 </div>
// //               );
// //             })}
// //           </motion.div>
// //         </div>
// //       </div>

// //       {/* FLOATING ORB */}
// //       <div
// //         className="
// //           absolute
// //           right-[12%]
// //           top-1/2
// //           hidden xl:flex
// //           h-32 w-32
// //           -translate-y-1/2
// //           items-center justify-center
// //           rounded-full
// //           border border-cyan-400/20
// //           bg-white/[0.05]
// //           backdrop-blur-3xl
// //           z-10
// //         "
// //       >
// //         <div
// //           className="
// //             absolute inset-0
// //             rounded-full
// //             bg-gradient-to-br
// //             from-cyan-400/20
// //             to-emerald-400/10
// //             blur-2xl
// //           "
// //         />

// //         <div className="relative z-10 text-center">
// //           <Orbit
// //             size={34}
// //             className="mx-auto text-cyan-300"
// //           />

// //           <p className="mt-2 text-xs text-slate-300">
// //             Smart Restoration
// //           </p>
// //         </div>
// //       </div>

// //       {/* BOTTOM FADE */}
// //       <div
// //         className="
// //           absolute bottom-0 left-0
// //           h-40 w-full
// //           bg-gradient-to-t
// //           from-[#081219]
// //           to-transparent
// //         "
// //       />
// //     </section>
// //   );
// // }