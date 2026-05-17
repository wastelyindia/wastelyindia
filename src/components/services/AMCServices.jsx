
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  LineChart,
  Cog,
  Phone,
  Lock,
  FlaskConical,
  CalendarDays,
  HardHat,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import heroImage from "../../assets/images/Wastely_hero_4.jpeg";

const benefits = [
  {
    icon: Wrench,
    title: "Reduced Downtime",
    description:
      "Predictive maintenance and rapid response systems minimize operational interruptions.",
  },
  {
    icon: LineChart,
    title: "Performance Optimization",
    description:
      "Maintain maximum treatment efficiency with intelligent monitoring and analytics.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "Stay aligned with environmental standards and operational safety protocols.",
  },
  {
    icon: Cog,
    title: "Extended Equipment Life",
    description:
      "Preventive servicing increases plant reliability and equipment lifespan.",
  },
];

const amcIncludes = [
  {
    icon: CalendarDays,
    title: "Preventive Maintenance",
  },
  {
    icon: FlaskConical,
    title: "Chemical Dosing & Monitoring",
  },
  {
    icon: Wrench,
    title: "Repair & Technical Support",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Safety Audits",
  },
  {
    icon: LineChart,
    title: "Performance Reporting",
  },
  {
    icon: Lock,
    title: "Equipment Security",
  },
  {
    icon: HardHat,
    title: "Workplace Safety Monitoring",
  },
  {
    icon: Phone,
    title: "24/7 Emergency Support",
  },
];

const AMCServices = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-150px] left-[-100px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute top-[40%] left-[50%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center py-28 md:py-32">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl px-5 py-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-cyan-300">
                <Sparkles size={14} />
                AMC Solutions
              </div>

              <h1 className="mt-8 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[88px] font-black leading-[0.92] tracking-[-0.04em]">
                Annual Maintenance
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Contracts
                </span>{" "}
                for Sustainable Plant Operations
              </h1>

              <p className="mt-8 max-w-3xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-400">
                Wastely Aqua delivers intelligent AMC services for STP, ETP,
                and WTP systems with preventive maintenance, monitoring,
                compliance management, and 24/7 operational support.
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <Link to="/contact">
                  <button
                    className="
                      w-full sm:w-auto
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-emerald-400
                      px-7
                      py-4
                      font-semibold
                      text-black
                      transition-all duration-300
                      hover:scale-[1.02]
                      hover:shadow-[0_0_50px_-20px_rgba(14,165,233,0.18)]
                    "
                  >
                    Get Free Consultation
                  </button>
                </Link>

                <Link to="/industries">
                  <button
                    className="
                      w-full sm:w-auto
                      rounded-full
                      border border-white/10
                      bg-white/[0.05]
                      backdrop-blur-xl
                      px-7
                      py-4
                      font-medium
                      text-white
                      transition-all duration-300
                      hover:border-cyan-400/30
                      hover:bg-white/[0.08]
                    "
                  >
                    Explore Services
                  </button>
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { value: "24/7", label: "Technical Support" },
                  { value: "99%", label: "Plant Uptime" },
                  { value: "AMC", label: "Compliance Driven" },
                  { value: "STP", label: "ETP • WTP" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
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

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_50px_-20px_rgba(14,165,233,0.18)]">
                <img
                  src={heroImage}
                  alt="AMC Services"
                  loading="lazy"
                  decoding="async"
                  className="h-[420px] sm:h-[520px] md:h-[650px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081219] via-[#081219]/20 to-transparent" />
              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-4
                  left-4
                  sm:bottom-8
                  sm:-left-6
                  rounded-[28px]
                  border border-white/10
                  bg-[#0b1620]/80
                  backdrop-blur-xl
                  p-5 sm:p-6
                  shadow-[0_0_50px_-20px_rgba(16,185,129,0.25)]
                "
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-300">
                  AMC Monitoring
                </p>

                <h4 className="mt-2 text-2xl sm:text-3xl font-black">
                  365 Days
                </h4>

                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-slate-400">
                  Continuous maintenance and monitoring for critical treatment
                  infrastructure.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IS AMC */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 backdrop-blur-xl text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-cyan-300">
                About AMC
              </div>

              <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
                Intelligent Maintenance for
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Critical Water Infrastructure
                </span>
              </h2>

              <p className="mt-8 text-base md:text-lg leading-relaxed text-slate-400">
                Annual Maintenance Contracts ensure smooth, reliable, and
                efficient operation of wastewater treatment systems through
                preventive maintenance, process optimization, and expert
                technical support.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Fixed maintenance cost planning",
                  "Reduced equipment failure risks",
                  "Improved operational efficiency",
                  "Long-term sustainability assurance",
                ].map((item, index) => (
                  <div
                    key={index}
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

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-[120px]" />

              <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                <img
                  src={heroImage}
                  alt="Water treatment plant"
                  loading="lazy"
                  decoding="async"
                  className="h-[420px] sm:h-[520px] md:h-[600px] w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 backdrop-blur-xl text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-emerald-300">
              Benefits
            </div>

            <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
              Why Industries Choose
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}
                Wastely AMC Services
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border border-white/10
                    bg-white/[0.04]
                    p-7 md:p-8
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-cyan-400/20
                    hover:bg-white/[0.06]
                  "
                >
                  <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INCLUDED SERVICES */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 bg-white/[0.04] p-5 sm:p-8 md:p-14 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="relative z-10">
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 backdrop-blur-xl text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-cyan-300">
                Included Services
              </div>

              <h2 className="mt-8 max-w-4xl text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
                Complete AMC Coverage for
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Treatment Plants
                </span>
              </h2>

              <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {amcIncludes.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="
                        rounded-[28px]
                        border border-white/10
                        bg-[#0b1620]/70
                        p-6
                        backdrop-blur-xl
                        transition-all duration-300
                        hover:border-cyan-400/20
                        hover:bg-white/[0.06]
                      "
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                        <Icon size={26} />
                      </div>

                      <h3 className="mt-6 text-lg font-semibold leading-snug">
                        {item.title}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl px-5 sm:px-8 py-16 md:px-20 md:py-24 text-center shadow-[0_0_50px_-20px_rgba(14,165,233,0.18)]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 backdrop-blur-xl text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-cyan-300">
                Wastely Aqua
              </div>

              <h2 className="mt-8 text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-tight">
                Reliable AMC Services for
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Sustainable Operations
                </span>
              </h2>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-400">
                Secure long-term plant reliability, environmental compliance,
                and optimized wastewater treatment performance with Wastely
                Aqua AMC solutions.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button
                    className="
                      w-full sm:w-auto
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-emerald-400
                      px-8
                      py-4
                      font-semibold
                      text-black
                      transition-all duration-300
                      hover:scale-[1.02]
                      hover:shadow-[0_0_50px_-20px_rgba(14,165,233,0.18)]
                    "
                  >
                    Schedule Consultation
                  </button>
                </Link>

                <Link to="/technologies">
                  <button
                    className="
                      inline-flex
                      w-full sm:w-auto
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border border-white/10
                      bg-white/[0.05]
                      px-8
                      py-4
                      font-medium
                      text-white
                      backdrop-blur-xl
                      transition-all duration-300
                      hover:border-cyan-400/30
                      hover:bg-white/[0.08]
                    "
                  >
                    Explore Solutions
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AMCServices;