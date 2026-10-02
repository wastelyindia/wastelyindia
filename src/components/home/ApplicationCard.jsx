
import {
  Waves,
  Settings2,
  Recycle,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const capabilities = [
  {
    title: "Advanced Treatment Systems",
    description:
      "High-efficiency wastewater and water treatment technologies engineered for industrial and municipal infrastructure.",
    icon: Waves,
    number: "01",
  },

  {
    title: "Environmental Engineering",
    description:
      "Integrated process engineering, automation and smart monitoring systems for sustainable operations.",
    icon: Settings2,
    number: "02",
  },

  {
    title: "Water Recovery & Reuse",
    description:
      "Sustainable recycling and ecosystem restoration solutions designed for future-ready environmental systems.",
    icon: Recycle,
    number: "03",
  },
];

const ApplicationCard = () => {
  return (
    <section className="relative py-32 bg-[#081219] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute left-0 top-0
          w-[500px] h-[500px]
          bg-cyan-500/10
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          relative z-10
          max-w-7xl
          mx-auto
          px-6
        "
      >

        {/* TOP CONTENT */}
        <div className="max-w-3xl">

          {/* LABEL */}
          <div
            className="
              inline-flex items-center gap-2
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
              Core Capabilities
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
            Integrated
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
              Environmental Solutions
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              text-lg
              text-slate-300
              leading-relaxed
              max-w-2xl
            "
          >
            Delivering sustainable water infrastructure,
            wastewater treatment and environmental
            engineering systems through advanced technology,
            smart automation and ecosystem-focused design.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-20
          "
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  rounded-[32px]
                  p-8
                  hover:border-cyan-400/20
                  transition-all duration-500
                  hover:-translate-y-2
                "
              >

                {/* CARD GLOW */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all duration-500
                    bg-gradient-to-br
                    from-cyan-500/10
                    to-emerald-500/5
                  "
                />

                {/* NUMBER */}
                <div
                  className="
                    absolute top-6 right-6
                    text-6xl
                    font-semibold
                    text-white/5
                  "
                >
                  {item.number}
                </div>

                {/* ICON */}
                <div
                  className="
                    relative z-10
                    w-16 h-16
                    flex items-center justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    border border-cyan-400/20
                    mb-8
                  "
                >
                  <Icon
                    size={32}
                    className="text-cyan-300"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    relative z-10
                    text-2xl
                    font-semibold
                    text-white
                    leading-snug
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    relative z-10
                    mt-5
                    text-slate-400
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>

                {/* LINK */}
                <Link
                  to="/technologies"
                  className="
                    relative z-10
                    inline-flex items-center gap-2
                    mt-8
                    text-cyan-300
                    font-medium
                    group/link
                  "
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="
                      group-hover/link:translate-x-1
                      transition-all
                    "
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationCard;