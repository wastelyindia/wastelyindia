
    
  
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

