import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

import IndustryHeroImg from "../../assets/images/industries/industry-hero.jpg";

const IndustriesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Engineering grid */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          hidden
          h-full
          w-[48%]
          opacity-50
          lg:block
          [background-image:linear-gradient(#E3EDF1_1px,transparent_1px),linear-gradient(90deg,#E3EDF1_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Technical ring */}
      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-[14%]
          hidden
          h-[430px]
          w-[430px]
          rounded-full
          border
          border-wastely-cyan/10
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[13%]
          top-[22%]
          hidden
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-wastely-blue/10
          lg:block
        "
      />

      <div className="wastely-container relative z-10">

        <div
          className="
            grid
            min-h-[620px]
            items-center
            gap-12
            py-16
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-16
            lg:py-20
          "
        >

          {/* LEFT */}

          <div className="max-w-[640px]">

            <div className="wastely-section-eyebrow">
              Industries
            </div>

            <h1
              className="
                mt-3
                text-[2.6rem]
                font-bold
                leading-[1.08]
                tracking-[-0.035em]
                text-wastely-deep
                sm:text-[3.2rem]
                lg:text-[3.7rem]
              "
            >
              Treatment requirements change with the industry.
            </h1>

            <p
              className="
                mt-7
                max-w-[590px]
                text-base
                leading-7
                text-wastely-sub
                sm:text-lg
              "
            >
              Food, manufacturing, chemical, textile, municipal and reuse
              applications can produce very different water and wastewater
              conditions. Our approach starts with understanding the
              application before defining the treatment system.
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
                to="/solutions/wastewater-treatment"
                className="wastely-btn wastely-btn-secondary"
              >
                View Wastewater Solution
              </Link>

            </div>

            {/* Application line */}

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3">

              {[
                "Industrial",
                "Food & Beverage",
                "Textile",
                "Municipal",
                "Water Reuse",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-wastely-sub
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      border
                      border-wastely-line
                    "
                  >
                    <Check
                      size={11}
                      className="text-wastely-cyan"
                    />
                  </span>

                  {item}
                </div>
              ))}

            </div>

          </div>


          {/* RIGHT */}

          <div className="relative">

            <div
              className="
                overflow-hidden
                border
                border-wastely-line
                bg-wastely-bg-soft
              "
            >

              <img
                src={IndustryHeroImg}
                alt="Industrial wastewater treatment infrastructure"
                className="
                  aspect-[4/3]
                  h-full
                  w-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-32
                  bg-gradient-to-t
                  from-wastely-deep/75
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  flex
                  items-end
                  justify-between
                  gap-5
                "
              >

                <div>

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-wastely-cyan
                    "
                  >
                    Industrial Applications
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Treatment · Separation · Reuse
                  </p>

                </div>

                <div
                  className="
                    hidden
                    border
                    border-white/30
                    bg-white/10
                    px-3
                    py-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    text-white
                    sm:block
                  "
                >
                  Application-led
                </div>

              </div>

            </div>

            <div className="absolute -bottom-2 left-7 h-[2px] w-24 bg-wastely-cyan" />

          </div>

        </div>

      </div>


      {/* Wave divider */}

      <div className="relative h-8 overflow-hidden">

        <svg
          className="absolute bottom-0 left-0 h-8 w-full"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 20 C180 4 300 4 480 20 S780 36 960 20 S1260 4 1440 20"
            fill="none"
            stroke="#2FB4CE"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
        </svg>

      </div>

    </section>
  );
};

export default IndustriesHero;