import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplets,
  Factory,
  Waves,
} from "lucide-react";

import HeroImg from "../../assets/images/Wastely_hero_1.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-wastely-deep lg:min-h-screen">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <div className="absolute inset-0">
        <img
          src={HeroImg}
          alt="Water and wastewater treatment infrastructure"
          className="h-full w-full object-cover scale-105"
        />

        {/* Dark engineering overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#073B5C]/95 via-[#073B5C]/82 to-[#073B5C]/45" />

        {/* Lower fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#073B5C] to-transparent" />
      </div>

      {/* =====================================================
          ENGINEERING GRID
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] opacity-20 lg:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* =====================================================
          WATER FLOW LINES
      ====================================================== */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-[58%] opacity-25"
        viewBox="0 0 800 700"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 130 C150 20 250 250 400 135 C540 25 650 145 800 70"
          stroke="#3BB8D9"
          strokeWidth="1"
        />

        <path
          d="M0 245 C150 120 250 365 420 235 C560 125 665 260 800 175"
          stroke="#3BB8D9"
          strokeWidth="1"
        />

        <path
          d="M0 380 C155 250 280 500 440 365 C570 255 680 390 800 285"
          stroke="#2FB4CE"
          strokeWidth="1"
        />

        <path
          d="M0 520 C160 390 290 630 460 500 C600 390 700 500 800 420"
          stroke="#2FB4CE"
          strokeWidth="1"
        />
      </svg>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 flex min-h-[720px] items-center lg:min-h-screen">
        <div className="wastely-container">
          <div className="max-w-3xl py-24 lg:py-28">
            {/* Eyebrow */}
            <div className="wastely-section-eyebrow !text-wastely-cyan">
              Water & Wastewater Engineering
            </div>

            {/* Heading */}
            <h1 className="mt-3 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.7rem]">
              Water systems engineered around your requirements.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Wastely Aqua works across water treatment, wastewater treatment,
              waterbody restoration and supporting infrastructure, with
              solutions shaped around the application, site conditions and
              intended outcome.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/solutions"
                className="wastely-btn bg-white text-wastely-deep hover:bg-wastely-bg-soft"
              >
                Explore Solutions
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/services"
                className="wastely-btn border border-white/30 bg-white/5 text-white hover:border-white hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>

            {/* =================================================
                APPLICATION STRIP
            ================================================== */}
            <div className="mt-14 grid max-w-2xl border-l border-t border-white/15 sm:grid-cols-3">
              <div className="border-b border-r border-white/15 bg-black/10 p-5">
                <Droplets
                  size={22}
                  strokeWidth={1.7}
                  className="text-wastely-cyan"
                />

                <div className="mt-4 text-sm font-semibold text-white">
                  Water Treatment
                </div>

                <p className="mt-1 text-xs leading-5 text-white/55">
                  Water quality and treatment requirements
                </p>
              </div>

              <div className="border-b border-r border-white/15 bg-black/10 p-5">
                <Factory
                  size={22}
                  strokeWidth={1.7}
                  className="text-wastely-cyan"
                />

                <div className="mt-4 text-sm font-semibold text-white">
                  Wastewater
                </div>

                <p className="mt-1 text-xs leading-5 text-white/55">
                  Industrial and municipal treatment needs
                </p>
              </div>

              <div className="border-b border-r border-white/15 bg-black/10 p-5">
                <Waves
                  size={22}
                  strokeWidth={1.7}
                  className="text-wastely-cyan"
                />

                <div className="mt-4 text-sm font-semibold text-white">
                  Water Restoration
                </div>

                <p className="mt-1 text-xs leading-5 text-white/55">
                  Lakes, ponds and other waterbody applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom technical line */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="wastely-container">
          <div className="flex items-center gap-4 border-t border-white/15 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
            <span className="h-px w-8 bg-wastely-cyan" />
            Treatment
            <span>·</span>
            Reuse
            <span>·</span>
            Restoration
            <span>·</span>
            Plant Support
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;