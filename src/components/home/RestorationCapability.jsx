import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Flower2,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

// Replace this import only if your preferred restoration image
// is stored at a different path.
import RestorationImage from "../../assets/images/industries/industry-waterworks.png";

const capabilities = [
  {
    number: "01",
    title: "BiOWiSH Aqua Bioremediation",
    description:
      "Biological treatment supporting the breakdown of suitable contaminants in waterbody restoration applications.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Floating Wetlands",
    description:
      "Plant-root and microbial treatment zones for suitable lakes, ponds and other waterbody environments.",
    icon: Flower2,
  },
  {
    number: "03",
    title: "Fountain & Aeration Systems",
    description:
      "Aeration and water circulation approaches selected according to site conditions and water-quality objectives.",
    icon: Waves,
  },
];

const RestorationCapability = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Subtle engineering grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-30
          [background-image:linear-gradient(#E3EDF1_1px,transparent_1px),linear-gradient(90deg,#E3EDF1_1px,transparent_1px)]
          [background-size:64px_64px]
          [mask-image:linear-gradient(to_bottom,black,transparent_80%)]
        "
      />

      <div className="wastely-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image and verification label */}
          <div className="relative">
            <div className="relative min-h-[320px] overflow-hidden border border-wastely-line bg-wastely-bg-soft sm:min-h-[420px] lg:min-h-[510px]">
              <img
                src={RestorationImage}
                alt="Water treatment and restoration infrastructure"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/90 via-wastely-deep/15 to-transparent" />

              {/* Image caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-wastely-cyan">
                  <span className="h-2 w-2 bg-wastely-cyan" />
                  Waterbody Restoration
                </div>

                <p className="mt-3 max-w-md text-xl font-bold leading-snug text-white sm:text-2xl">
                  Biological treatment, ecological systems and aeration.
                </p>
              </div>
            </div>

            {/* Engineering accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 border-b-2 border-r-2 border-wastely-cyan/60 sm:-bottom-4 sm:-right-4 sm:h-32 sm:w-32"
            />
          </div>

          {/* Content */}
          <div className="min-w-0">
            <div className="wastely-section-eyebrow">
              IIT Delhi–Vetted Technology
            </div>

            <h2 className="wastely-section-title mt-2">
              Restoring water bodies through advanced biological treatment.
            </h2>

            <p className="mt-5 text-sm leading-7 text-wastely-sub sm:text-base">
              Wastely Aqua combines BiOWiSH Aqua bioremediation, floating
              wetlands and fountain aeration to support waterbody restoration.
              These approaches are selected around the waterbody&apos;s
              condition, site requirements and restoration objectives.
            </p>

            {/* Verification statement */}
            <div className="mt-6 flex items-start gap-3 border-l-2 border-wastely-cyan bg-wastely-bg-soft p-4">
            <CheckCircle2
                size={19}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-wastely-blue"
                aria-hidden="true"
            />

            <div>
                <p className="text-sm leading-6 text-wastely-ink">
                <span className="font-semibold text-wastely-deep">
                    IIT Delhi–vetted technology.
                </span>{" "}
                Waterbody restoration through BiOWiSH Aqua bioremediation,
                floating wetlands and fountain aeration.
                </p>

                {/* <a
                href="/documents/iit-delhi-vetting-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    mt-3
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-wastely-blue
                    underline
                    decoration-wastely-cyan
                    underline-offset-4
                    transition-colors
                    hover:text-wastely-deep
                "
                >
                View IIT Delhi Certificate
                <ArrowRight size={15} />
                </a> */}
            </div>
            </div>

            {/* Capabilities */}
            <div className="mt-7 border-t border-wastely-line">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.number}
                    className="grid grid-cols-[38px_40px_1fr] gap-3 border-b border-wastely-line py-5 sm:grid-cols-[44px_44px_1fr] sm:gap-4"
                  >
                    <span className="pt-1 text-xs font-semibold tracking-[0.1em] text-wastely-sub">
                      {capability.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center border border-wastely-line text-wastely-blue">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold leading-snug text-wastely-deep">
                        {capability.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-wastely-sub">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Link to existing solution */}
            <div className="mt-7">
              <Link
                to="/solutions/water-body-restoration"
                className="
                  wastely-btn
                  wastely-btn-primary
                  group
                  w-full
                  sm:w-auto
                "
              >
                Explore Water Body Restoration
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestorationCapability;