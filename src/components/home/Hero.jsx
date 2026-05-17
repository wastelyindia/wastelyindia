import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Waves,
  Cpu,
  Orbit,
  Leaf,
  Globe,
  Radar,
  Recycle,
  Gauge,
} from "lucide-react";

import video from "../../assets/video/wastely_water.mp4";

const floatingTech = [
  {
    title: "Nano Bubble",
    icon: Waves,
    position: "top-[10%] right-[6%]",
    color: "text-cyan-300",
  },

  {
    title: "MPC Smart Buoy",
    icon: Radar,
    position: "bottom-[18%] right-[10%]",
    color: "text-emerald-300",
  },
];

const metrics = [
  {
    value: "₹33+ Cr",
    label: "Restoration Capability",
    icon: Gauge,
  },

  {
    value: "₹20+ Cr",
    label: "Lake Rejuvenation Projects",
    icon: Waves,
  },

  {
    value: "24/7",
    label: "Smart Monitoring",
    icon: Cpu,
  },

  {
    value: "5+",
    label: "Major Water Bodies Restored",
    icon: Globe,
  },
];

export default function Hero() {
  return (
    <section
      className="
        relative
        isolate
        min-h-[100svh]
        overflow-clip
        bg-[#081219]
      "
    >
      {/* VIDEO */}
      <div className="absolute inset-0">
        <video
          className="
            absolute inset-0
            h-full w-full
            object-cover
            scale-[1.03]
            will-change-transform
          "
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#081219]/72" />

        {/* LEFT DEPTH */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#081219]
            via-[#081219]/75
            to-transparent
          "
        />

        {/* TOP/BOTTOM DEPTH */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#081219]
            via-transparent
            to-[#081219]/40
          "
        />

        {/* CYAN AMBIENT */}
        <div
          className="
            absolute
            left-[-10%]
            top-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

        {/* EMERALD AMBIENT */}
        <div
          className="
            absolute
            bottom-[-10%]
            right-[-5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-emerald-500/10
            blur-[120px]
          "
        />

        {/* GRID */}
        <div
          className="
            absolute inset-0
            opacity-[0.04]
            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[size:72px_72px]
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
              className={`absolute z-20 ${item.position}`}
            >
              <div
                className="
                  flex items-center gap-4
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.05]
                  backdrop-blur-2xl
                  px-5 py-4
                  shadow-[0_0_60px_-12px_rgba(14,165,233,0.22)]
                "
              >
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
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

                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-400">
                    Integrated Ecosystem
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-20
          mx-auto
          flex min-h-[100svh]
          max-w-7xl
          items-center
          px-4 sm:px-6 lg:px-8
          pt-28 sm:pt-32
          pb-14 sm:pb-20 lg:pb-24
        "
      >
        <div className="w-full">
          {/* HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-5xl"
          >
            {/* BADGE */}
            <div
              className="
                mb-7 sm:mb-8
                inline-flex items-center gap-3
                rounded-full
                border border-cyan-400/20
                bg-white/[0.05]
                px-4 sm:px-5
                py-2
                backdrop-blur-xl
              "
            >
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

              <span
                className="
                  text-[10px] sm:text-xs
                  uppercase
                  tracking-[0.25em]
                  text-cyan-200
                "
              >
                Integrated Restoration Ecosystem
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                text-[42px]
                sm:text-6xl
                md:text-7xl
                xl:text-[108px]
                font-black
                leading-[0.92]
                tracking-[-0.05em]
                text-white
              "
            >
              Engineering

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
                Intelligent Water
              </span>

              Infrastructure
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8 sm:mt-10
                max-w-2xl lg:max-w-3xl
                text-[15px]
                sm:text-lg
                lg:text-xl
                leading-relaxed
                text-slate-300
              "
            >
              Advanced lake restoration, wastewater treatment,
              nano bubble aeration, floating wetlands,
              bioremediation and AI-powered monitoring systems
              engineered for sustainable environmental
              infrastructure.
            </p>

            {/* TAGS */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
              {[
                "Nano Bubble Aeration",
                "Floating Wetlands",
                "MPC Smart Buoy",
                "Bioremediation",
                "Ultrasonic Algae Control",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.05]
                    backdrop-blur-xl
                    px-4 py-2.5
                    text-[12px] sm:text-sm
                    text-slate-200
                    transition-all duration-300
                    hover:border-cyan-400/30
                    hover:bg-white/[0.08]
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div
              className="
                mt-10 sm:mt-12
                flex flex-col sm:flex-row
                items-stretch sm:items-center
                gap-4 sm:gap-5
              "
            >
              <Link
                to="/case-studies"
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
                  font-medium
                  text-white
                  shadow-[0_0_60px_-12px_rgba(14,165,233,0.45)]
                  transition-all duration-300
                  hover:scale-[1.02]
                  will-change-transform
                "
              >
                Explore Restoration Projects

                <ArrowRight
                  size={18}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                to="/technologies"
                className="
                  inline-flex items-center justify-center gap-3
                  rounded-full
                  border border-white/10
                  bg-white/[0.05]
                  backdrop-blur-xl
                  px-6 sm:px-8
                  py-3.5 sm:py-4
                  text-sm sm:text-base
                  text-white
                  transition-all duration-300
                  hover:border-cyan-400/20
                  hover:bg-white/[0.08]
                "
              >
                View Technologies
              </Link>
            </div>
          </motion.div>

          {/* METRICS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="
              mt-14 sm:mt-20
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-4
              gap-4 sm:gap-5
              max-w-7xl
            "
          >
            {metrics.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border border-white/10
                    bg-white/[0.05]
                    backdrop-blur-2xl
                    p-5 sm:p-6 lg:p-7
                    transition-all duration-500
                    hover:border-cyan-400/20
                  "
                >
                  {/* HOVER LIGHT */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      transition-all duration-500
                      group-hover:opacity-100
                      bg-gradient-to-br
                      from-cyan-500/10
                      to-emerald-500/5
                    "
                  />

                  {/* ICON */}
                  <div
                    className="
                      relative z-10
                      mb-5 sm:mb-6
                      flex h-12 w-12 sm:h-14 sm:w-14
                      items-center justify-center
                      rounded-2xl
                      border border-white/10
                      bg-gradient-to-br
                      from-cyan-400/10
                      to-emerald-400/10
                    "
                  >
                    <Icon
                      size={24}
                      className="text-cyan-300"
                    />
                  </div>

                  {/* VALUE */}
                  <h3
                    className="
                      relative z-10
                      text-3xl
                      sm:text-4xl
                      lg:text-5xl
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

                  {/* LABEL */}
                  <p
                    className="
                      relative z-10
                      mt-3 sm:mt-4
                      text-sm sm:text-base
                      leading-relaxed
                      text-slate-400
                    "
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* FLOATING ORB */}
      <div
        className="
          absolute
          right-[12%]
          top-1/2
          hidden xl:flex
          h-32 w-32
          -translate-y-1/2
          items-center justify-center
          rounded-full
          border border-cyan-400/20
          bg-white/[0.05]
          backdrop-blur-3xl
          z-10
        "
      >
        <div
          className="
            absolute inset-0
            rounded-full
            bg-gradient-to-br
            from-cyan-400/20
            to-emerald-400/10
            blur-2xl
          "
        />

        <div className="relative z-10 text-center">
          <Orbit
            size={34}
            className="mx-auto text-cyan-300"
          />

          <p className="mt-2 text-xs text-slate-300">
            Smart Restoration
          </p>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div
        className="
          absolute bottom-0 left-0
          h-40 w-full
          bg-gradient-to-t
          from-[#081219]
          to-transparent
        "
      />
    </section>
  );
}