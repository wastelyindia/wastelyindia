
    
  
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, ArrowRight, ClipboardList, LineChart, ShieldCheck, Users, Wrench, Gauge, FileCheck2, Settings2 } from "lucide-react";

import operation1 from "../../assets/images/O&M.jpeg";
import operation2 from "../../assets/images/O&M1.jpeg";
import operation3 from "../../assets/images/O&M2.jpeg";

const capabilities = [
  ["01", Activity, "Monitoring & Process Control", "Routine process observation, operating checks and performance monitoring to keep treatment systems aligned with site requirements."],
  ["02", Wrench, "Preventive Maintenance", "Planned inspections, maintenance activities and equipment attention aimed at reducing avoidable downtime."],
  ["03", ShieldCheck, "Safety & Compliance", "Operational procedures, safety practices, records and compliance-focused plant management."],
  ["04", Users, "Skilled Plant Operations", "Operational support for treatment processes, equipment routines, shift activities and technical supervision."],
  ["05", ClipboardList, "Reporting & Documentation", "Operating logs, inspection records, performance documentation and structured reporting for plant stakeholders."],
  ["06", LineChart, "Performance Optimization", "Review of operating conditions and process performance to identify practical opportunities for more stable and efficient operation."],
];

const focus = [
  [Gauge, "Process performance", "Track operating conditions and treatment performance against plant requirements."],
  [Settings2, "Equipment readiness", "Coordinate routine checks and preventive maintenance for critical equipment."],
  [FileCheck2, "Records & compliance", "Maintain the operational information needed for review, reporting and compliance activities."],
];

const OperationMaintenance = () => (
  <main className="bg-white text-wastely-ink">
    <section className="relative overflow-hidden border-b border-wastely-line bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(7,59,92,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(7,59,92,.55) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="absolute -right-48 top-20 h-[520px] w-[520px] rounded-full border border-wastely-cyan/10" />
        <div className="absolute -right-24 top-44 h-[360px] w-[360px] rounded-full border border-wastely-cyan/[0.08]" />
      </div>
      <div className="wastely-container relative z-10">
        <div className="grid min-h-[680px] items-center gap-12 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} viewport={{ once: true }}>
            <div className="wastely-section-eyebrow">Operation & Maintenance</div>
            <h1 className="mt-5 max-w-[720px] text-[2.65rem] font-bold leading-[1.08] tracking-[-0.03em] text-wastely-deep sm:text-5xl lg:text-[4rem]">Keep your treatment plant operating as it should.</h1>
            <p className="mt-6 max-w-[610px] text-base leading-8 text-wastely-sub sm:text-lg">Wastely Aqua supports wastewater treatment plants through day-to-day operations, preventive maintenance, process monitoring, documentation and performance-focused technical support.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="group wastely-btn wastely-btn-primary">Request an Assessment<ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
              <a href="#capabilities" className="wastely-btn wastely-btn-secondary">View O&M Scope</a>
            </div>
            <div className="mt-12 grid max-w-[620px] grid-cols-2 border-t border-wastely-line sm:grid-cols-4">
              {["Operate", "Maintain", "Monitor", "Report"].map((label, i) => <div key={label} className="border-r border-wastely-line py-5 first:pl-0 last:border-r-0 sm:px-5"><div className="text-[10px] font-bold tracking-[.18em] text-wastely-cyan">0{i+1}</div><div className="mt-1 text-sm font-semibold text-wastely-deep">{label}</div></div>)}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-4 bg-wastely-gradient opacity-[.08] blur-3xl" />
            <div className="relative overflow-hidden border border-wastely-line bg-wastely-bg-soft">
              <img src={operation1} alt="Wastewater treatment operation and maintenance" className="h-[430px] w-full object-cover sm:h-[560px]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wastely-deep/90 via-wastely-deep/35 to-transparent p-6 sm:p-8"><div className="text-[10px] font-bold uppercase tracking-[.2em] text-wastely-cyan-light">Plant Operations</div><div className="mt-2 text-xl font-bold text-white">Operational support built around the site.</div></div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden border border-wastely-cyan/30 bg-white px-4 py-3 sm:block"><div className="text-[9px] font-bold uppercase tracking-[.18em] text-wastely-sub">O&M focus</div><div className="mt-1 text-sm font-semibold text-wastely-deep">Stability · Readiness · Records</div></div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="wastely-section wastely-section-soft">
      <div className="wastely-container"><div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start"><div className="wastely-section-header mb-0"><div className="wastely-section-eyebrow">Why Operation & Maintenance</div><h2 className="wastely-section-title">A treatment plant needs more than installed equipment.</h2><p className="wastely-section-description">Consistent treatment performance depends on how the plant is operated, maintained, monitored and documented over time.</p></div><div className="grid border-y border-wastely-line bg-white sm:grid-cols-3">{focus.map(([Icon,title,text])=><div key={title} className="border-b border-wastely-line p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:p-7"><Icon size={22} strokeWidth={1.5} className="text-wastely-blue"/><h3 className="mt-5 text-base font-bold text-wastely-deep">{title}</h3><p className="mt-3 text-sm leading-6 text-wastely-sub">{text}</p></div>)}</div></div></div>
    </section>

    <section id="capabilities" className="wastely-section wastely-section-white"><div className="wastely-container"><div className="wastely-section-header"><div className="wastely-section-eyebrow">O&M Scope</div><h2 className="wastely-section-title">Practical support across the operating cycle.</h2><p className="wastely-section-description">The O&M scope can be structured around the plant's process, equipment, staffing, reporting and operating requirements.</p></div><div className="grid border-l border-t border-wastely-line sm:grid-cols-2 xl:grid-cols-3">{capabilities.map(([number,Icon,title,text])=><motion.article key={number} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{duration:.45}} viewport={{once:true}} className="group min-h-[245px] border-b border-r border-wastely-line p-7 transition-colors hover:bg-wastely-bg-soft"><div className="flex items-start justify-between"><Icon size={23} strokeWidth={1.5} className="text-wastely-blue"/><span className="text-[10px] font-bold tracking-[.18em] text-wastely-cyan">{number}</span></div><h3 className="mt-8 text-[1.05rem] font-bold text-wastely-deep">{title}</h3><p className="mt-3 text-sm leading-6 text-wastely-sub">{text}</p><div className="mt-7 h-px w-8 bg-wastely-cyan transition-all group-hover:w-14" /></motion.article>)}</div></div></section>

    <section className="relative overflow-hidden bg-wastely-deep py-20 sm:py-24"><div className="pointer-events-none absolute inset-0 opacity-[.09]"><svg viewBox="0 0 1440 520" preserveAspectRatio="none" className="h-full w-full"><path d="M-80 380 C220 100 420 110 650 300 S1070 500 1510 150" fill="none" stroke="#3BB8D9" strokeWidth="1"/><path d="M-100 430 C210 150 430 150 670 330 S1090 530 1530 200" fill="none" stroke="#3BB8D9" strokeWidth="1"/><path d="M-120 470 C190 210 450 190 700 360 S1110 560 1550 250" fill="none" stroke="#FFFFFF" strokeOpacity=".35" strokeWidth="1"/></svg></div><div className="wastely-container relative z-10"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div><div className="wastely-section-eyebrow text-wastely-cyan-light">Operating Cycle</div><h2 className="text-[1.9rem] font-bold leading-tight text-white sm:text-3xl">From daily operation to continuous improvement.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">O&M brings process control, maintenance, people and documentation together around the actual operating conditions of the treatment plant.</p></div><div className="grid border-l border-white/15 sm:grid-cols-4">{[["01","Assess","Review operating condition and requirements."],["02","Operate","Run treatment processes and routine activities."],["03","Maintain","Inspect and maintain critical equipment."],["04","Improve","Use records and performance review to refine operation."]].map(([n,t,x])=><div key={n} className="border-b border-r border-t border-white/15 p-5 last:border-b-0 sm:border-b-0"><div className="text-[10px] font-bold tracking-[.18em] text-wastely-cyan-light">{n}</div><h3 className="mt-5 text-sm font-bold text-white">{t}</h3><p className="mt-2 text-xs leading-5 text-white/55">{x}</p></div>)}</div></div></div></section>

    <section className="wastely-section wastely-section-white"><div className="wastely-container"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div className="order-2 lg:order-1"><div className="wastely-section-eyebrow">Plant Support</div><h2 className="wastely-section-title">Operational decisions should stay close to the plant.</h2><p className="wastely-section-description">O&M support connects field observations, equipment condition, treatment performance and operating records so the team can respond to what is happening on site.</p><div className="mt-8 divide-y divide-wastely-line border-y border-wastely-line">{["Routine plant and equipment checks","Process monitoring and operating adjustments","Maintenance planning and follow-up","Operational records and reporting"].map((item,i)=><div key={item} className="flex items-center gap-4 py-4"><span className="text-[10px] font-bold tracking-[.16em] text-wastely-cyan">0{i+1}</span><span className="text-sm font-medium text-wastely-deep">{item}</span></div>)}</div><Link to="/services/amc-services" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue">See AMC Services<ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></Link></div><div className="order-1 grid grid-cols-2 gap-3 lg:order-2"><div className="border border-wastely-line bg-wastely-bg-soft"><img src={operation2} alt="Treatment plant control and operations" className="h-[300px] w-full object-cover sm:h-[390px]"/></div><div className="mt-10 border border-wastely-line bg-wastely-bg-soft"><img src={operation3} alt="Wastewater treatment plant maintenance" className="h-[300px] w-full object-cover sm:h-[390px]"/></div></div></div></div></section>
  </main>
);

export default OperationMaintenance;








// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Activity,
//   ShieldCheck,
//   Wrench,
//   LineChart,
//   ClipboardList,
//   Users,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react";

// import operation1 from "../../assets/images/O&M.jpeg";
// import operation2 from "../../assets/images/O&M1.jpeg";
// import operation3 from "../../assets/images/O&M2.jpeg";

// const services = [
//   {
//     icon: Activity,
//     title: "Monitoring & Process Control",
//     description:
//       "Real-time analytics, automation systems, and intelligent process optimization for stable treatment performance.",
//   },
//   {
//     icon: Wrench,
//     title: "Preventive Maintenance",
//     description:
//       "Scheduled inspections, predictive maintenance, and equipment lifecycle management to reduce downtime.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Safety & Compliance",
//     description:
//       "Strict operational protocols, PPE standards, audits, and environmental compliance management.",
//   },
//   {
//     icon: Users,
//     title: "Skilled Plant Operations",
//     description:
//       "Certified operational teams with advanced wastewater treatment expertise and technical supervision.",
//   },
//   {
//     icon: ClipboardList,
//     title: "Reporting & Documentation",
//     description:
//       "Comprehensive plant records, performance reports, operational logs, and data-driven insights.",
//   },
//   {
//     icon: LineChart,
//     title: "Performance Optimization",
//     description:
//       "Energy-efficient operation strategies, cost reduction, and continuous system improvement.",
//   },
// ];

// const stats = [
//   { value: "24/7", label: "Plant Monitoring" },
//   { value: "99%", label: "Operational Reliability" },
//   { value: "30+", label: "Industrial Projects" },
//   { value: "ISO", label: "Compliance Standards" },
// ];

// const OperationMaintenance = () => {
//   return (
//     <div className="relative overflow-hidden bg-[#081219] text-white">
//       {/* Ambient Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-120px] left-[-120px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
//         <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[140px]" />
//         <div className="absolute top-[40%] left-[50%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />
//       </div>

//       {/* HERO */}
//       <section className="relative overflow-hidden">
//         <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center py-28 md:py-32">
//           <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
//             {/* LEFT */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300">
//                 <Sparkles size={14} />
//                 Wastewater Operations
//               </div>

//               <h1 className="mt-8 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[88px] font-black leading-[0.92] tracking-[-0.04em]">
//                 Intelligent
//                 <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//                   {" "}
//                   Operation & Maintenance
//                 </span>{" "}
//                 for Sustainable Infrastructure
//               </h1>

//               <p className="mt-8 max-w-3xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
//                 Wastely Aqua delivers high-performance operation &
//                 maintenance solutions for wastewater treatment plants with
//                 advanced monitoring, preventive maintenance, process
//                 optimization, and environmental compliance.
//               </p>

//               <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4">
//                 <Link to="/technologies">
//                   <button className="group w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_-12px_rgba(14,165,233,0.45)]">
//                     Explore Solutions
//                   </button>
//                 </Link>

//                 <Link to="/contact">
//                   <button className="w-full sm:w-auto rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-4 font-medium text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
//                     Contact Experts
//                   </button>
//                 </Link>
//               </div>

//               {/* Stats */}
//               <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
//                 {stats.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="
//   rounded-[28px]
//   border border-white/10
//   bg-white/[0.04]
//   p-5 md:p-6
//   backdrop-blur-xl
//   transition-all duration-500
//   hover:border-cyan-400/20
//   hover:bg-white/[0.06]
// "
//                   >
//                     <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//                       {item.value}
//                     </h3>
//                     <p className="mt-2 text-sm text-slate-400">
//                       {item.label}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* RIGHT */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl" />

//               <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_-20px_rgba(14,165,233,0.18)]">
//                 <img
//                   src={operation1}
//                   alt="Operation and maintenance"
//                   loading="lazy"
// decoding="async"
//                   className="h-[420px] sm:h-[520px] md:h-[650px] w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-[#081219]/20 to-transparent" />
//               </div>

//               {/* Floating Card */}
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute bottom-8 -left-6 rounded-[28px] border border-white/10 bg-[#0b1620]/80 backdrop-blur-xl p-6 shadow-[0_0_50px_-12px_rgba(16,185,129,0.35)]"
//               >
//                 <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
//                   Live Monitoring
//                 </p>

//                 <h4 className="mt-2 text-3xl font-black">24/7</h4>

//                 <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-slate-400">
//                   Smart monitoring systems ensuring stable and optimized plant
//                   performance.
//                 </p>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="relative py-24 md:py-32">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="max-w-3xl">
//             <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-cyan-300">
//               Core Capabilities
//             </div>

//             <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
//               Advanced O&M Services for
//               <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//                 {" "}
//                 Modern Treatment Plants
//               </span>
//             </h2>

//             <p className="mt-6 text-lg leading-relaxed text-slate-400">
//               Engineered operational systems designed for reliability,
//               compliance, sustainability, and long-term industrial performance.
//             </p>
//           </div>

//           <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//             {services.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.08 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -6 }}
// className="
//   group
//   will-change-transform
//   relative
//   overflow-hidden
//   rounded-[32px]
//   border border-white/10
//   bg-white/[0.04]
//   p-7 md:p-8
//   backdrop-blur-xl
//   transition-all duration-500
//   hover:-translate-y-1
//   hover:border-cyan-400/20
//   hover:bg-white/[0.06]
// "                >
//                   <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

//                   <div className="relative z-10">
//                     <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
//                       <Icon size={30} />
//                     </div>

//                     <h3 className="mt-8 text-2xl font-bold">
//                       {service.title}
//                     </h3>

//                     <p className="mt-4 leading-relaxed text-slate-400">
//                       {service.description}
//                     </p>

//                     <button className="mt-8 inline-flex items-center gap-2 text-cyan-300 transition-all duration-300 group-hover:gap-3">
//                       Learn More
//                       <ArrowRight size={16} />
//                     </button>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* STORY SECTION */}
//       <section className="relative py-24 md:py-32">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl" />

//               <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl">
//                 <img
//                   src={operation2}
//                   alt="Plant control room"
//                   loading="lazy"
// decoding="async"
//                   className="h-[420px] sm:h-[520px] md:h-[620px] w-full object-cover"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//             >
//               <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-emerald-300">
//                 Sustainable Engineering
//               </div>

//               <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
//                 Reliable Operations.
//                 <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//                   {" "}
//                   Cleaner Future.
//                 </span>
//               </h2>

//               <p className="mt-8 text-lg leading-relaxed text-slate-400">
//                 Our operation & maintenance strategy combines intelligent
//                 monitoring, predictive maintenance, skilled workforce
//                 management, and sustainability-focused engineering to ensure
//                 efficient wastewater treatment performance.
//               </p>

//               <div className="mt-10 space-y-5">
//                 {[
//                   "Smart process optimization systems",
//                   "Reduced operational downtime",
//                   "Energy-efficient plant management",
//                   "Regulatory compliance assurance",
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="
//   flex items-start gap-4
//   rounded-[24px]
//   border border-white/10
//   bg-white/[0.04]
//   p-5
//   backdrop-blur-xl
//   transition-all duration-300
//   hover:border-cyan-400/20
//   hover:bg-white/[0.06]
// "
//                   >
//                     <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />

//                     <p className="text-slate-300">{item}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative py-24 md:py-32">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl px-5 sm:px-8 py-16 md:px-20 text-center shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]">
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

//             <div className="relative z-10 max-w-4xl mx-auto">
//               <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-cyan-300">
//                 Wastely Aqua
//               </div>

//               <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
//                 Build Sustainable
//                 <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//                   {" "}
//                   Wastewater Infrastructure
//                 </span>
//               </h2>

//               <p className="mt-6 text-lg leading-relaxed text-slate-400">
//                 Future-ready wastewater treatment operation & maintenance
//                 solutions engineered for industrial sustainability and
//                 environmental performance.
//               </p>

//               <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4">
//                 <Link to="/contact">
//                   <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_-12px_rgba(14,165,233,0.45)]">
//                     Get Consultation
//                   </button>
//                   </Link>

//                 {/* <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
//                   Explore Projects
//                 </button> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OperationMaintenance;