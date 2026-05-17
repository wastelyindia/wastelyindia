
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";

import { motion } from "framer-motion";

import {
  Droplets,
  Factory,
  ShieldCheck,
  Waves,
  ArrowRight,
  Globe,
} from "lucide-react";

// Images
import waterTreat1 from "../../assets/images/Wastely_Water_Treatment1.png";
import waterTreat2 from "../../assets/images/Wastely_Water_Treatment2.png";
import waterTreat3 from "../../assets/images/Wastely_Water_Treatment3.png";
import waterTreat8 from "../../assets/images/Wastely_Water_Treatment4.png";
import waterTreat4 from "../../assets/images/Wastely_Water_Treatment5.png";
import waterTreat5 from "../../assets/images/Wastely_Water_Treatment6.png";
import waterTreat6 from "../../assets/images/Wastely_Water_Treatment7.png";
import waterTreat7 from "../../assets/images/Wastely_Water_Treatment8.png";

import wetlandFiltration from "../../assets/images/wetland-filtration.png";
import waterDropBg from "../../assets/images/waterdropbg.png";

const sliderImages = [
  waterTreat1,
  waterTreat2,
  waterTreat3,
  waterTreat4,
  waterTreat5,
  waterTreat6,
  waterTreat7,
  waterTreat8,
];

const techCards = [
  {
    icon: <Droplets size={32} />,
    title: "BIODEN® Technology",
    desc: "Advanced selective nitrate removal solutions engineered for high-efficiency treatment systems.",
  },
  {
    icon: <Factory size={32} />,
    title: "Lamella Clarifier",
    desc: "Industrial-scale clarification systems optimized for modern wastewater infrastructure.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Membrane Filtration",
    desc: "High-performance filtration and adsorption technologies delivering ultra-clean potable water.",
  },
];

const stats = [
  {
    number: "9M+",
    label: "m³ Pure Water Daily",
  },
  {
    number: "36M+",
    label: "People Benefited",
  },
  {
    number: "155 MLD",
    label: "India Project",
  },
  {
    number: "Global",
    label: "Worldwide Projects",
  },
];

const Water_Treatment = () => {
  return (
    <div className="relative overflow-hidden bg-[#081219] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />

      {/* HERO SECTION */}
      <section className="relative min-h-[100svh]">
        <Swiper
          effect={"fade"}
          speed={1400}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className="h-[100svh]"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[100svh]">
                {/* Image */}
                <div className="mx-auto h-full w-full lg:w-[72%]">
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#081219]/10 via-[#081219]/70 to-[#081219]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Content */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center pt-28 pb-14 md:pt-32">
          <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-5xl"
            >
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
                Sustainable Water Engineering
              </div>

              {/* Heading */}
              <h1 className="text-[3rem] sm:text-6xl md:text-7xl xl:text-[6rem] font-black leading-[0.9] tracking-[-0.04em]">
                Futuristic
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Water Treatment
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-3xl text-[15px] sm:text-lg md:text-xl leading-relaxed text-slate-300">
                WASTELY AQUA delivers advanced wastewater treatment,
                sustainable purification systems, and intelligent
                environmental engineering technologies for a cleaner future.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/technologies"
                  className="
                    group
                    inline-flex items-center gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-emerald-400
                    px-8 md:px-9
                    py-4
                    text-sm md:text-base
                    font-semibold
                    text-black
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:scale-[1.03]
                    shadow-[0_10px_40px_-12px_rgba(34,211,238,0.45)]
                    hover:shadow-[0_20px_70px_-18px_rgba(34,211,238,0.55)]
                  "
                >
                  Explore Solutions
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/5
                    px-8
                    py-4
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-cyan-400/40
                    hover:bg-white/[0.08]
                  "
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="
                  group
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.04]
                  p-5 sm:p-6 md:p-8
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:border-cyan-400/20
                  hover:bg-white/[0.06]
                  shadow-[0_0_60px_-12px_rgba(14,165,233,0.15)]
                "
              >
                <h3 className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-black text-transparent">
                  {stat.number}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20 max-w-4xl"
          >
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
              Proprietary Technologies
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Smart
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}
                Environmental Infrastructure
              </span>
            </h2>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-slate-400">
              WASTELY AQUA integrates advanced chemical,
              biological, and physical treatment systems
              to produce sustainable, scalable water solutions.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {techCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-white/10
                  bg-white/[0.04]
                  p-7 md:p-8
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:border-cyan-400/20
                  hover:bg-white/[0.06]

                  before:absolute
                  before:inset-0
                  before:bg-gradient-to-br
                  before:from-cyan-400/[0.03]
                  before:to-emerald-400/[0.02]
                  before:opacity-0
                  before:transition-all
                  before:duration-700
                  hover:before:opacity-100
                "
              >
                <div className="relative z-10">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 text-cyan-300">
                    {card.icon}
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    {card.title}
                  </h3>

                  <p className="leading-relaxed text-slate-400">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WATER TRANSITION SECTION */}
<section className="relative py-10 md:py-16 overflow-hidden">
  {/* Ambient Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={waterDropBg}
          alt=""
          loading="lazy"
          className="
            h-[240px]
            sm:h-[320px]
            md:h-[420px]
            w-full
            object-cover
            opacity-80
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#081219]/20 via-transparent to-[#081219]/70" />

        {/* Cinematic Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/10 bg-black/20 px-5 py-2 backdrop-blur-xl text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              Sustainable Water Future
            </div>

            <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-[-0.04em]">
              Engineering
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}Cleaner Ecosystems
              </span>
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* PROCESS SECTION */}
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 blur-3xl" />

              <img
                src={wetlandFiltration}
                alt=""
                loading="lazy"
                className="
                  relative
                  h-[420px]
                  sm:h-[520px]
                  md:h-[640px]
                  w-full
                  rounded-[36px]
                  border border-white/10
                  object-cover
                  shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]
                "
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
                Wastewater Treatment
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Intelligent
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Water Recovery
                </span>
              </h2>

              <p className="mt-8 text-base md:text-lg leading-relaxed text-slate-400">
                Wastewater treatment removes contaminants and pollutants
                before water is safely returned to the environment,
                protecting ecosystems and public health.
              </p>

              <div className="mt-10 space-y-5">
                <div
                  className="
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.04]
                    p-6
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-cyan-400/20
                    hover:bg-white/[0.06]
                  "
                >
                  <h3 className="mb-3 text-xl font-bold">
                    Environmental Protection
                  </h3>

                  <p className="text-slate-400">
                    Prevents contamination of drinking water sources
                    and preserves natural aquatic ecosystems.
                  </p>
                </div>

                <div
                  className="
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.04]
                    p-6
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-cyan-400/20
                    hover:bg-white/[0.06]
                  "
                >
                  <h3 className="mb-3 text-xl font-bold">
                    Public Health Safety
                  </h3>

                  <p className="text-slate-400">
                    Eliminates harmful pollutants and reduces
                    disease transmission through clean treatment systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GLOBAL PROJECTS */}
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border border-white/10
              bg-white/[0.04]
              p-6 sm:p-8 md:p-12 xl:p-16
              backdrop-blur-2xl
            "
          >
            <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[120px]" />

            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
                  Worldwide Projects
                </div>

                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  Global
                  <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    {" "}
                    Infrastructure Impact
                  </span>
                </h2>

                <p className="mt-8 text-base md:text-lg leading-relaxed text-slate-400">
                  WASTELY AQUA has successfully delivered
                  large-scale treatment systems across India,
                  Turkey, Tanzania, and the Philippines.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div
                  className="
                    rounded-[28px]
                    border border-white/10
                    bg-[#060d14]
                    p-7
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-cyan-400/20
                  "
                >
                  <Globe className="mb-6 text-cyan-400" size={34} />

                  <h3 className="mb-2 text-3xl font-black">
                    Mumbai
                  </h3>

                  <p className="text-slate-400">
                    155 MLD — India
                  </p>
                </div>

                <div
                  className="
                    rounded-[28px]
                    border border-white/10
                    bg-[#060d14]
                    p-7
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-emerald-400/20
                  "
                >
                  <Waves className="mb-6 text-emerald-400" size={34} />

                  <h3 className="mb-2 text-3xl font-black">
                    Izmir
                  </h3>

                  <p className="text-slate-400">
                    36 MLD
                  </p>
                </div>

                <div
                  className="
                    rounded-[28px]
                    border border-white/10
                    bg-[#060d14]
                    p-7
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-cyan-400/20
                  "
                >
                  <Droplets className="mb-6 text-cyan-400" size={34} />

                  <h3 className="mb-2 text-3xl font-black">
                    Navi Mumbai
                  </h3>

                  <p className="text-slate-400">
                    20 MLD
                  </p>
                </div>

                <div
                  className="
                    rounded-[28px]
                    border border-white/10
                    bg-[#060d14]
                    p-7
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-emerald-400/20
                  "
                >
                  <Factory className="mb-6 text-emerald-400" size={34} />

                  <h3 className="mb-2 text-3xl font-black">
                    Putatan
                  </h3>

                  <p className="text-slate-400">
                    15 MLD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Water_Treatment;