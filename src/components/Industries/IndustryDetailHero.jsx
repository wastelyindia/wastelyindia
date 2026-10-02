import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IndustryDetailHero = ({ industry }) => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="
          pointer-events-none absolute right-0 top-0 hidden h-full w-[40%]
          opacity-40 lg:block
          [background-image:linear-gradient(#E3EDF1_1px,transparent_1px),linear-gradient(90deg,#E3EDF1_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="wastely-container relative z-10">
        <div className="grid min-h-[560px] items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
          <div className="max-w-[620px]">
            <div className="wastely-section-eyebrow">{industry.eyebrow}</div>

            <div className="mt-2 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-wastely-sub">
              <span>{industry.number}</span>
              <span className="h-px w-8 bg-wastely-cyan" />
              <span>Industries</span>
            </div>

            <h1 className="mt-5 text-[2.5rem] font-bold leading-[1.1] tracking-[-0.03em] text-wastely-deep sm:text-[3rem] lg:text-[3.4rem]">
              {industry.headline}
            </h1>

            <p className="mt-6 max-w-[590px] text-base leading-7 text-wastely-sub sm:text-lg">
              {industry.description}
            </p>

            <div className="mt-8">
              <Link to="/contact" className="wastely-btn wastely-btn-primary">
                Request an Assessment
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden border border-wastely-line bg-wastely-bg-soft">
              <img
                src={industry.image}
                alt={industry.imageAlt}
                className="aspect-[16/10] h-full w-full object-cover"
              />

              <div className="border-t border-wastely-line bg-white px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-wastely-blue">
                  {industry.title}
                </p>
                <p className="mt-1 text-sm text-wastely-sub">
                  Water, wastewater and environmental requirements
                </p>
              </div>
            </div>

            <div className="absolute -bottom-2 left-6 h-[2px] w-24 bg-wastely-cyan" />
          </div>
        </div>
      </div>

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

export default IndustryDetailHero;
