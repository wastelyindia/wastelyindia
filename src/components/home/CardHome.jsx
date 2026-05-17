
import {
  Waves,
  Recycle,
  Droplets,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import cardImg from "../../assets/images/Wastely_hero_6.jpeg";

const CardHome = () => {
  return (
    <section className="relative py-32 bg-[#081219] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute top-0 right-0
          w-[500px] h-[500px]
          bg-cyan-500/10
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          relative
          z-10
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* IMAGE */}
          <div className="relative">

            <div
              className="
                absolute -inset-4
                bg-gradient-to-r
                from-cyan-500/20
                to-emerald-500/20
                blur-3xl
                rounded-[40px]
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/10
                shadow-2xl
              "
            >
              <img
                src={cardImg}
                alt="Wastewater Treatment"
                className="
                  w-full
                  h-[650px]
                  object-cover
                  hover:scale-105
                  transition-all duration-700
                "
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>

            {/* LABEL */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-white/5
                border border-cyan-400/20
                backdrop-blur-xl
                rounded-full
                px-5 py-2
                mb-8
              "
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />

              <span
                className="
                  text-cyan-200
                  uppercase
                  tracking-[3px]
                  text-sm
                "
              >
                Sustainable Water Systems
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                text-4xl
                md:text-6xl
                font-semibold
                leading-[1.05]
                text-white
              "
            >
              Building Smarter
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  to-emerald-400
                  bg-clip-text
                  text-transparent
                "
              >
                Water Infrastructure
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-lg
                text-slate-300
                leading-relaxed
              "
            >
              We engineer advanced wastewater treatment,
              recycling and oxygenation systems that
              transform contaminated water into sustainable
              environmental resources for industries,
              municipalities and future-ready ecosystems.
            </p>

            {/* FEATURE LIST */}
            <div className="mt-12 space-y-6">

              {/* ITEM */}
              <div
                className="
                  flex items-start gap-5
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-6
                "
              >
                <div
                  className="
                    p-4
                    rounded-2xl
                    bg-cyan-500/10
                    border border-cyan-400/20
                  "
                >
                  <Droplets
                    size={28}
                    className="text-cyan-300"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Advanced Wastewater Treatment
                  </h3>

                  <p className="text-slate-400 mt-2 leading-relaxed">
                    High-efficiency treatment systems designed
                    for industrial and municipal applications.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div
                className="
                  flex items-start gap-5
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-6
                "
              >
                <div
                  className="
                    p-4
                    rounded-2xl
                    bg-emerald-500/10
                    border border-emerald-400/20
                  "
                >
                  <Recycle
                    size={28}
                    className="text-emerald-300"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Sustainable Water Recovery
                  </h3>

                  <p className="text-slate-400 mt-2 leading-relaxed">
                    Enabling water reuse and environmental
                    sustainability through smart infrastructure.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div
                className="
                  flex items-start gap-5
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-6
                "
              >
                <div
                  className="
                    p-4
                    rounded-2xl
                    bg-cyan-500/10
                    border border-cyan-400/20
                  "
                >
                  <Waves
                    size={28}
                    className="text-cyan-300"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Ecosystem Restoration
                  </h3>

                  <p className="text-slate-400 mt-2 leading-relaxed">
                    Revitalizing lakes, ponds and waterways
                    with modern environmental technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-10">

              <Link
                to="/technologies"
                className="
                  group
                  inline-flex items-center gap-3
                  px-8 py-4
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-emerald-500
                  text-white
                  font-medium
                  hover:scale-105
                  transition-all duration-300
                  shadow-2xl shadow-cyan-500/20
                "
              >
                Explore Technologies

                <ArrowRight
                  size={20}
                  className="
                    group-hover:translate-x-1
                    transition-all
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHome;