import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const proofPoints = [
  {
    value: "10+",
    label: "Projects",
    detail: "Projects completed or commissioned",
  },
  {
    value: "India & UAE",
    label: "Markets",
    detail: "Project experience across multiple markets",
  },
  {
    value: "5+",
    label: "Years",
    detail: "Experience in water and wastewater",
  },
  {
    value: "Multiple",
    label: "Applications",
    detail: "Industrial, municipal and environmental water applications",
  },
];


const Proof = () => {
  return (
    <section className="relative overflow-hidden bg-wastely-deep py-16 sm:py-20 lg:py-24">
      {/* Subtle engineering grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.07]
          [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)]
          [background-size:56px_56px]
        "
      />

      {/* Subtle ripple */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-wastely-cyan/15
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-wastely-cyan/10
        "
      />

      <div className="wastely-container relative z-10">
        {/* Heading */}
        <div className="max-w-[680px]">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-wastely-cyan">
            <span className="h-px w-7 bg-wastely-cyan" />
            Proof & Performance
          </div>

          <h2 className="mt-4 text-[2rem] font-bold leading-tight tracking-[-0.025em] text-white sm:text-[2.4rem]">
            Built around measurable treatment outcomes.
          </h2>

          <p className="mt-4 max-w-[620px] text-sm leading-7 text-white/70 sm:text-base">
            Project experience, treatment capacity and operating performance
            will be presented here using verified Wastely Aqua data.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-12 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div
              key={item.label}
              className="
                min-h-[190px]
                border-b
                border-r
                border-white/15
                p-6
                sm:p-7
              "
            >
              <div className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                {item.value}
              </div>

              <div className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-wastely-cyan">
                {item.label}
              </div>

              <p className="mt-2 text-sm leading-6 text-white/60">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Case studies link */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            Detailed project information can be added as verified case studies
            become available.
          </p>

          <Link
            to="/case-studies"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-white
              transition-colors
              duration-200
              hover:text-wastely-cyan
            "
          >
            View Case Studies
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Proof;