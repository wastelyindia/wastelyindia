import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ShieldCheck,
  Wrench,
  LineChart,
  ClipboardList,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import operation1 from "../../assets/images/O&M.jpeg";
import operation2 from "../../assets/images/O&M1.jpeg";
import operation3 from "../../assets/images/O&M2.jpeg";

const services = [
  {
    icon: Activity,
    title: "Monitoring & Process Control",
    description:
      "Real-time analytics, automation systems, and intelligent process optimization for stable treatment performance.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Scheduled inspections, predictive maintenance, and equipment lifecycle management to reduce downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description:
      "Strict operational protocols, PPE standards, audits, and environmental compliance management.",
  },
  {
    icon: Users,
    title: "Skilled Plant Operations",
    description:
      "Certified operational teams with advanced wastewater treatment expertise and technical supervision.",
  },
  {
    icon: ClipboardList,
    title: "Reporting & Documentation",
    description:
      "Comprehensive plant records, performance reports, operational logs, and data-driven insights.",
  },
  {
    icon: LineChart,
    title: "Performance Optimization",
    description:
      "Energy-efficient operation strategies, cost reduction, and continuous system improvement.",
  },
];

const stats = [
  { value: "24/7", label: "Plant Monitoring" },
  { value: "99%", label: "Operational Reliability" },
  { value: "30+", label: "Industrial Projects" },
  { value: "ISO", label: "Compliance Standards" },
];

const OperationMaintenance = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute top-[40%] left-[50%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center py-28 md:py-32">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300">
                <Sparkles size={14} />
                Wastewater Operations
              </div>

              <h1 className="mt-8 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[88px] font-black leading-[0.92] tracking-[-0.04em]">
                Intelligent
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Operation & Maintenance
                </span>{" "}
                for Sustainable Infrastructure
              </h1>

              <p className="mt-8 max-w-3xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
                Wastely Aqua delivers high-performance operation &
                maintenance solutions for wastewater treatment plants with
                advanced monitoring, preventive maintenance, process
                optimization, and environmental compliance.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <Link to="/technologies">
                  <button className="group w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_-12px_rgba(14,165,233,0.45)]">
                    Explore Solutions
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="w-full sm:w-auto rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-4 font-medium text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                    Contact Experts
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="
  rounded-[28px]
  border border-white/10
  bg-white/[0.04]
  p-5 md:p-6
  backdrop-blur-xl
  transition-all duration-500
  hover:border-cyan-400/20
  hover:bg-white/[0.06]
"
                  >
                    <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                      {item.value}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_-20px_rgba(14,165,233,0.18)]">
                <img
                  src={operation1}
                  alt="Operation and maintenance"
                  loading="lazy"
decoding="async"
                  className="h-[420px] sm:h-[520px] md:h-[650px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-[#081219]/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 -left-6 rounded-[28px] border border-white/10 bg-[#0b1620]/80 backdrop-blur-xl p-6 shadow-[0_0_50px_-12px_rgba(16,185,129,0.35)]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Live Monitoring
                </p>

                <h4 className="mt-2 text-3xl font-black">24/7</h4>

                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-slate-400">
                  Smart monitoring systems ensuring stable and optimized plant
                  performance.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-cyan-300">
              Core Capabilities
            </div>

            <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
              Advanced O&M Services for
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}
                Modern Treatment Plants
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Engineered operational systems designed for reliability,
              compliance, sustainability, and long-term industrial performance.
            </p>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
className="
  group
  will-change-transform
  relative
  overflow-hidden
  rounded-[32px]
  border border-white/10
  bg-white/[0.04]
  p-7 md:p-8
  backdrop-blur-xl
  transition-all duration-500
  hover:-translate-y-1
  hover:border-cyan-400/20
  hover:bg-white/[0.06]
"                >
                  <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                  <div className="relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-slate-400">
                      {service.description}
                    </p>

                    <button className="mt-8 inline-flex items-center gap-2 text-cyan-300 transition-all duration-300 group-hover:gap-3">
                      Learn More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src={operation2}
                  alt="Plant control room"
                  loading="lazy"
decoding="async"
                  className="h-[420px] sm:h-[520px] md:h-[620px] w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-emerald-300">
                Sustainable Engineering
              </div>

              <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
                Reliable Operations.
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Cleaner Future.
                </span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-400">
                Our operation & maintenance strategy combines intelligent
                monitoring, predictive maintenance, skilled workforce
                management, and sustainability-focused engineering to ensure
                efficient wastewater treatment performance.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Smart process optimization systems",
                  "Reduced operational downtime",
                  "Energy-efficient plant management",
                  "Regulatory compliance assurance",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
  flex items-start gap-4
  rounded-[24px]
  border border-white/10
  bg-white/[0.04]
  p-5
  backdrop-blur-xl
  transition-all duration-300
  hover:border-cyan-400/20
  hover:bg-white/[0.06]
"
                  >
                    <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />

                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl px-5 sm:px-8 py-16 md:px-20 text-center shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-cyan-300">
                Wastely Aqua
              </div>

              <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
                Build Sustainable
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Wastewater Infrastructure
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                Future-ready wastewater treatment operation & maintenance
                solutions engineered for industrial sustainability and
                environmental performance.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_-12px_rgba(14,165,233,0.45)]">
                    Get Consultation
                  </button>
                  </Link>

                {/* <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                  Explore Projects
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OperationMaintenance;