import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Engineering grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          hidden
          w-[42%]
          opacity-40
          lg:block
          [background-image:linear-gradient(#E3EDF1_1px,transparent_1px),linear-gradient(90deg,#E3EDF1_1px,transparent_1px)]
          [background-size:52px_52px]
        "
      />

      {/* Ripple */}
      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[15%]
          hidden
          h-[420px]
          w-[420px]
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
          right-[14%]
          top-[25%]
          hidden
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-wastely-cyan/10
          lg:block
        "
      />

      <div className="wastely-container relative z-10">
        <div
          className="
            grid
            min-h-[560px]
            items-center
            gap-12
            py-20
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
            lg:py-24
          "
        >
          <div className="max-w-[700px]">
            <div className="wastely-section-eyebrow">
              About Wastely Aqua
            </div>

            <h1
              className="
                mt-2
                text-[2.5rem]
                font-bold
                leading-[1.1]
                tracking-[-0.03em]
                text-wastely-deep
                sm:text-[3rem]
                lg:text-[3.4rem]
              "
            >
              Water and wastewater treatment focused on practical project
              requirements.
            </h1>

            <p
              className="
                mt-6
                max-w-[620px]
                text-base
                leading-7
                text-wastely-sub
                sm:text-lg
              "
            >
              Wastely Aqua works across water treatment, wastewater treatment,
              environmental restoration and related plant services.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/solutions"
                className="wastely-btn wastely-btn-primary"
              >
                Explore Solutions
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="wastely-btn wastely-btn-secondary"
              >
                Request an Assessment
              </Link>
            </div>
          </div>

          {/* Right-side information block */}
          <div className="relative">
            <div className="border border-wastely-line bg-wastely-bg-soft p-6 sm:p-8">
              <div className="border-l-2 border-wastely-cyan pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-wastely-blue">
                  Water Infrastructure
                </p>

                <p className="mt-3 text-lg font-semibold leading-7 text-wastely-deep">
                  Solutions, services and technologies for water and
                  wastewater requirements.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 border-t border-wastely-line pt-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.08em] text-wastely-sub">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold text-wastely-deep">
                    Water & Wastewater
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.08em] text-wastely-sub">
                    Base
                  </p>
                  <p className="mt-2 text-sm font-semibold text-wastely-deep">
                    Mumbai, India
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 left-6 h-[2px] w-20 bg-wastely-cyan" />
          </div>
        </div>
      </div>

      {/* Water-flow divider */}
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

export default AboutHero;