import { Link } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  Droplets,
  Fish,
  Flower2,
  FlaskConical,
  Leaf,
  Radar,
  Waves,
  Wind,
} from "lucide-react";

import Pollution from "../../assets/images/Rejuvenation_Pollution.png";
import Habitat from "../../assets/images/Rejuvenation_Habitat.png";
import Invasive from "../../assets/images/Rejuvenation_Invasive.jpg";
import Sedimentation from "../../assets/images/Rejuvenation_Sedimentation.jpg";

import KanglaBefore from "../../assets/images/kangla-before.png";
import KanglaAfter from "../../assets/images/kangla-after.png";

import NingthemBefore from "../../assets/images/ningthem-before.png";
import NingthemAfter from "../../assets/images/ningthem-after.png";

import ArunBefore from "../../assets/images/arun-before.png";
import ArunAfter from "../../assets/images/arun-after.png";

const challenges = [
  {
    title: "Pollution",
    description:
      "Sewage inflow, runoff and nutrient loading can progressively degrade water quality and aquatic conditions.",
    image: Pollution,
    icon: Droplets,
  },
  {
    title: "Sedimentation",
    description:
      "Accumulated organic matter and sediment can reduce water depth and affect the condition of the water body.",
    image: Sedimentation,
    icon: Waves,
  },
  {
    title: "Invasive Growth",
    description:
      "Excess algae and unwanted vegetation can interfere with ecological balance and water quality.",
    image: Invasive,
    icon: Leaf,
  },
  {
    title: "Habitat Stress",
    description:
      "Low dissolved oxygen and degraded water conditions can place additional stress on aquatic life.",
    image: Habitat,
    icon: Fish,
  },
];

const restorationMethods = [
  {
    number: "01",
    title: "Bioremediation",
    description:
      "Biological treatment approaches can help address organic loading, nutrient accumulation and degraded water conditions.",
    icon: FlaskConical,
  },
  {
    number: "02",
    title: "Aeration & Oxygenation",
    description:
      "Aeration systems support oxygen transfer and help improve dissolved oxygen conditions within the water body.",
    icon: Wind,
  },
  {
    number: "03",
    title: "Floating Wetlands",
    description:
      "Engineered floating vegetation systems can support nutrient uptake while adding ecological structure to the water body.",
    icon: Flower2,
  },
  {
    number: "04",
    title: "Algae Management",
    description:
      "Algae-control approaches can be incorporated where excessive growth is contributing to poor water quality.",
    icon: Radar,
  },
];

const restorationStages = [
  {
    number: "01",
    title: "Assess",
    text: "Understand the water body, inflows, pollution sources and existing ecological conditions.",
  },
  {
    number: "02",
    title: "Characterize",
    text: "Identify the key water-quality and physical challenges affecting the lake or pond.",
  },
  {
    number: "03",
    title: "Restore",
    text: "Combine suitable treatment, oxygenation and ecological interventions for the site.",
  },
  {
    number: "04",
    title: "Stabilize",
    text: "Support long-term water-quality improvement and healthier aquatic conditions.",
  },
];

const beforeAfter = [
  {
    title: "Kangla Outer Moat",
    before: KanglaBefore,
    after: KanglaAfter,
  },
  {
    title: "Ningthem Pukhri",
    before: NingthemBefore,
    after: NingthemAfter,
  },
  {
    title: "Arun Sagar Lake",
    before: ArunBefore,
    after: ArunAfter,
  },
];

const Rejuvenation = () => {
  return (
    <main className="overflow-hidden bg-white text-wastely-ink">

      {/* =========================================================
          HERO — EDITORIAL / FIELD RESTORATION STYLE
      ========================================================= */}
      <section className="relative bg-wastely-bg-soft pt-20 lg:pt-24">
        <div className="wastely-container">

          <div className="grid min-h-[720px] items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">

            {/* LEFT */}
            <div className="relative z-10">

              <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-wastely-blue">
                <span className="h-px w-8 bg-wastely-cyan" />
                Lake & Pond Rejuvenation
              </div>

              <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-[-0.035em] text-wastely-deep sm:text-6xl lg:text-[4.5rem]">
                Restore the water body.
                <span className="mt-2 block text-wastely-blue">
                  Rebuild its balance.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-wastely-sub sm:text-lg">
                Lake and pond rejuvenation requires more than improving
                water appearance. We assess the conditions affecting the
                water body and develop practical interventions for water
                quality, oxygen balance and ecological recovery.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="wastely-btn wastely-btn-primary"
                >
                  Request an Assessment
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/products/floating-wetlands"
                  className="wastely-btn wastely-btn-secondary"
                >
                  View Restoration Technologies
                </Link>
              </div>

              {/* Small field indicators */}
              <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-wastely-line">
                <div className="border-r border-wastely-line py-5 pr-4">
                  <div className="text-sm font-bold text-wastely-deep">
                    Water
                  </div>
                  <div className="mt-1 text-xs text-wastely-sub">
                    Quality
                  </div>
                </div>

                <div className="border-r border-wastely-line px-4 py-5">
                  <div className="text-sm font-bold text-wastely-deep">
                    Oxygen
                  </div>
                  <div className="mt-1 text-xs text-wastely-sub">
                    Balance
                  </div>
                </div>

                <div className="py-5 pl-4">
                  <div className="text-sm font-bold text-wastely-deep">
                    Ecology
                  </div>
                  <div className="mt-1 text-xs text-wastely-sub">
                    Recovery
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — LARGE IMAGE */}
            <div className="relative">

              {/* engineering frame */}
              <div className="absolute -right-8 -top-8 hidden h-40 w-40 border-r border-t border-wastely-cyan/40 lg:block" />

              <div className="relative overflow-hidden border border-wastely-line bg-white p-2">
                <img
                  src={Habitat}
                  alt="Water body restoration"
                  className="h-[500px] w-full object-cover sm:h-[600px]"
                />

                <div className="absolute bottom-7 left-7 border border-white/60 bg-white/90 px-5 py-4 backdrop-blur-sm">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-wastely-blue">
                    Restoration Focus
                  </div>

                  <div className="mt-2 text-sm font-semibold text-wastely-deep">
                    Water quality + ecological balance
                  </div>
                </div>
              </div>

              {/* vertical technical marker */}
              <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 lg:block">
                <div className="flex flex-col items-center gap-3">
                  <span className="h-16 w-px bg-wastely-cyan" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-wastely-sub [writing-mode:vertical-rl]">
                    Water Body Restoration
                  </span>
                  <span className="h-16 w-px bg-wastely-cyan" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* wave divider */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="h-16 w-full"
          >
            <path
              d="M0 45C180 15 320 15 510 42C700 69 835 68 1020 39C1190 12 1310 14 1440 38V80H0Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* =========================================================
          DIAGNOSIS
      ========================================================= */}
      <section className="wastely-section-white">
        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <div className="wastely-section-eyebrow">
                The water body
              </div>

              <h2 className="wastely-section-title max-w-md">
                Restoration starts with understanding what is changing.
              </h2>

              <p className="wastely-section-description">
                Lakes and ponds can deteriorate through multiple interacting
                factors. The restoration approach therefore begins with the
                physical, chemical and ecological conditions of the site.
              </p>
            </div>

            <div className="grid border-l border-t border-wastely-line sm:grid-cols-2">

              {[
                {
                  icon: Droplets,
                  title: "Water quality",
                  text: "Pollution and nutrient loading can alter the condition of the water.",
                },
                {
                  icon: Activity,
                  title: "Oxygen balance",
                  text: "Low dissolved oxygen can affect aquatic life and biological processes.",
                },
                {
                  icon: Waves,
                  title: "Sediment load",
                  text: "Accumulated material can reduce effective depth and degrade conditions.",
                },
                {
                  icon: Fish,
                  title: "Ecological health",
                  text: "Water quality and habitat conditions influence aquatic biodiversity.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border-b border-r border-wastely-line p-7 sm:p-8"
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.6}
                      className="text-wastely-blue"
                    />

                    <h3 className="mt-6 text-lg font-bold text-wastely-deep">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-wastely-sub">
                      {item.text}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESTORATION JOURNEY — DISTINCTIVE HORIZONTAL DESIGN
      ========================================================= */}
      <section className="relative overflow-hidden bg-wastely-deep py-20 text-white lg:py-24">

        {/* contour lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 330C180 180 330 440 620 280C900 125 1110 390 1540 160"
            fill="none"
            stroke="#2FB4CE"
            strokeWidth="1"
          />
          <path
            d="M-100 370C190 220 350 470 650 320C930 170 1150 420 1540 205"
            fill="none"
            stroke="#2FB4CE"
            strokeWidth="1"
          />
          <path
            d="M-100 410C210 260 360 500 690 355C980 215 1190 450 1540 250"
            fill="none"
            stroke="#2FB4CE"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative">

          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-wastely-cyan-light">
              <span className="h-px w-8 bg-wastely-cyan" />
              Restoration Journey
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              A water body is restored in stages.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
              The intervention depends on what the site assessment reveals.
              Our approach connects diagnosis, treatment and ecological
              recovery rather than treating each symptom in isolation.
            </p>
          </div>

          <div className="relative mt-16">

            {/* connecting line */}
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-white/20 lg:block" />

            <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
              {restorationStages.map((stage) => (
                <div key={stage.number} className="relative">

                  <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-wastely-cyan bg-wastely-deep text-xs font-bold text-wastely-cyan-light">
                    {stage.number}
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-white">
                    {stage.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-7 text-white/60">
                    {stage.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          BEFORE / AFTER — MAIN VISUAL FEATURE
      ========================================================= */}
      <section className="wastely-section-soft">
        <div className="wastely-container">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div className="wastely-section-eyebrow">
                Restoration Projects
              </div>

              <h2 className="wastely-section-title">
                From degraded water bodies to restored environments.
              </h2>

              <p className="wastely-section-description">
                Existing project imagery can communicate the physical change
                more clearly than a list of claims.
              </p>
            </div>

            <div className="hidden h-16 w-16 border-b border-r border-wastely-cyan md:block" />
          </div>

          <div className="mt-14 space-y-10">
            {beforeAfter.map((item, index) => (
              <article
                key={item.title}
                className="border border-wastely-line bg-white"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-wastely-line px-5 py-5 sm:px-7">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wastely-blue">
                      Restoration Project {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-wastely-deep sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-semibold text-wastely-sub">
                    <span>Before</span>
                    <span className="h-px w-8 bg-wastely-cyan" />
                    <span>After</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2">

                  <div className="relative border-b border-wastely-line md:border-b-0 md:border-r">
                    <img
                      src={item.before}
                      alt={`${item.title} before restoration`}
                      className="h-[300px] w-full object-cover sm:h-[380px]"
                    />

                    <div className="absolute left-5 top-5 bg-wastely-deep px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                      Before
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src={item.after}
                      alt={`${item.title} after restoration`}
                      className="h-[300px] w-full object-cover sm:h-[380px]"
                    />

                    <div className="absolute left-5 top-5 bg-wastely-blue px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                      After
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESTORATION METHODS — EDITORIAL LIST
      ========================================================= */}
      <section className="wastely-section-white">
        <div className="wastely-container">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <div className="wastely-section-eyebrow">
                Restoration Methods
              </div>

              <h2 className="wastely-section-title">
                Interventions selected around the site.
              </h2>

              <p className="wastely-section-description">
                Restoration is not a single technology. Different water
                bodies require different combinations of biological,
                mechanical and ecological interventions.
              </p>

              <Link
                to="/technologies"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue hover:text-wastely-deep"
              >
                Explore treatment technologies
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="border-t border-wastely-line">
              {restorationMethods.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="group grid gap-5 border-b border-wastely-line py-7 md:grid-cols-[70px_50px_1fr] md:items-start"
                  >
                    <div className="text-xs font-bold tracking-[0.15em] text-wastely-cyan">
                      {item.number}
                    </div>

                    <Icon
                      size={24}
                      strokeWidth={1.6}
                      className="text-wastely-blue transition-transform duration-200 group-hover:translate-x-1"
                    />

                    <div>
                      <h3 className="text-xl font-bold text-wastely-deep">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-7 text-wastely-sub">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FIELD CONDITIONS — IMAGE MOSAIC
      ========================================================= */}
      <section className="bg-wastely-bg-soft py-20 lg:py-24">
        <div className="wastely-container">

          <div className="grid gap-6 lg:grid-cols-12">

            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[460px] overflow-hidden border border-wastely-line bg-white">
                <img
                  src={Pollution}
                  alt="Water pollution challenge"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wastely-deep/90 to-transparent p-7 pt-24">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wastely-cyan-light">
                    Field Condition
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Pollution loading
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">

              {challenges.slice(1).map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative min-h-[220px] overflow-hidden border border-wastely-line bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-white/75 transition-colors group-hover:bg-white/65" />

                    <div className="relative z-10 flex h-full flex-col justify-end p-6">
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                        className="text-wastely-blue"
                      />

                      <h3 className="mt-4 text-lg font-bold text-wastely-deep">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-wastely-sub">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NAVIGATION HANDOFF — NO CTA
      ========================================================= */}
      <section className="border-t border-wastely-line bg-white py-10">
        <div className="wastely-container">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-wastely-blue">
                Next
              </div>

              <div className="mt-2 text-lg font-bold text-wastely-deep">
                Explore the technologies used across water restoration.
              </div>
            </div>

            <Link
              to="/technologies"
              className="wastely-btn wastely-btn-secondary shrink-0"
            >
              View Technologies
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Rejuvenation;