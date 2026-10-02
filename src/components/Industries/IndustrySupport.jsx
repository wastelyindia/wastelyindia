import {
  ArrowRight,
  Settings2,
  Waves,
  Wrench,
} from "lucide-react";

import { Link } from "react-router-dom";

const support = [
  {
    number: "01",
    title: "Treatment Solutions",
    description:
      "Start with the wastewater or water requirement and establish the treatment approach around the application.",
    icon: Waves,
    path: "/solutions/wastewater-treatment",
    linkText: "View Solutions",
  },

  {
    number: "02",
    title: "Technology Selection",
    description:
      "Screening, flotation, clarification, filtration, membrane and other technologies can be combined according to the process requirement.",
    icon: Wrench,
    path: "/technologies",
    linkText: "View Technologies",
  },

  {
    number: "03",
    title: "Plant Services",
    description:
      "Existing and new treatment systems can be supported through operation, maintenance, AMC and plant improvement services.",
    icon: Settings2,
    path: "/services",
    linkText: "View Services",
  },
];

const IndustrySupport = () => {
  return (
    <section className="wastely-section wastely-section-soft">

      <div className="wastely-container">

        <div className="max-w-[760px]">

          <div className="wastely-section-eyebrow">
            How We Support
          </div>

          <h2 className="wastely-section-title">
            From application requirement to treatment and plant support.
          </h2>

          <p className="wastely-section-description">
            The industry is the starting point. The final project may
            combine a treatment solution, supporting technologies and
            ongoing plant services.
          </p>

        </div>


        <div
          className="
            mt-12
            grid
            border-l
            border-t
            border-wastely-line
            md:grid-cols-3
          "
        >

          {support.map((item) => {

            const Icon = item.icon;

            return (
              <Link
                key={item.number}
                to={item.path}
                className="
                  group
                  border-b
                  border-r
                  border-wastely-line
                  bg-white
                  p-7
                  transition-colors
                  duration-200
                  hover:bg-white
                  sm:p-8
                "
              >

                <div className="flex items-start justify-between">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-wastely-line
                      bg-wastely-bg-soft
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="text-wastely-blue"
                    />
                  </div>

                  <span
                    className="
                      text-xs
                      font-semibold
                      tracking-[0.1em]
                      text-wastely-sub
                    "
                  >
                    {item.number}
                  </span>

                </div>

                <h3 className="mt-10 text-lg font-bold text-wastely-deep">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-wastely-sub">
                  {item.description}
                </p>

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-wastely-blue
                  "
                >
                  {item.linkText}

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </div>

              </Link>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default IndustrySupport;