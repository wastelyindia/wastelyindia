import { ArrowUpRight, Layers3, Settings2, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    title: "Solutions",
    description:
      "Water and wastewater treatment solutions for different applications and project requirements.",
    icon: Waves,
    path: "/solutions",
  },
  {
    title: "Services",
    description:
      "Operation, maintenance, upgrades and technical support for treatment systems.",
    icon: Settings2,
    path: "/services",
  },
  {
    title: "Technologies",
    description:
      "Treatment technologies selected according to process requirements and operating conditions.",
    icon: Layers3,
    path: "/technologies",
  },
];

const AboutCapabilities = () => {
  return (
    <section className="wastely-section wastely-section-white">
      <div className="wastely-container">
        <div className="wastely-section-header">
          <div className="wastely-section-eyebrow">
            What We Do
          </div>

          <h2 className="wastely-section-title">
            From treatment requirements to long-term support.
          </h2>

          <p className="wastely-section-description">
            Explore the three areas through which Wastely Aqua delivers its
            water and wastewater work.
          </p>
        </div>

        <div className="grid border-l border-t border-wastely-line lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.path}
                className="
                  group
                  relative
                  min-h-[260px]
                  border-b
                  border-r
                  border-wastely-line
                  p-6
                  sm:p-7
                  transition-colors
                  duration-200
                  hover:bg-wastely-bg-soft
                "
              >
                <div className="flex items-start justify-between">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                    className="text-wastely-blue"
                  />

                  <ArrowUpRight
                    size={18}
                    className="
                      text-wastely-sub
                      transition-all
                      duration-200
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-wastely-blue
                    "
                  />
                </div>

                <div className="mt-16">
                  <h3 className="text-xl font-bold text-wastely-deep">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[380px] text-sm leading-6 text-wastely-sub">
                    {item.description}
                  </p>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-wastely-blue">
                    Explore
                  </p>
                </div>

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-wastely-cyan
                    transition-all
                    duration-300
                    group-hover:w-20
                  "
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutCapabilities;