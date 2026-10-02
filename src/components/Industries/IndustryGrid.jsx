import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import IndustrialImg from "../../assets/images/industries/industry-industrial.jpg";
import FoodImg from "../../assets/images/industries/industry-food.jpg";
import TextileImg from "../../assets/images/industries/industry-textile.jpg";
import SlaughterhouseImg from "../../assets/images/industries/industry-slaughterhouse.jpg";
import WaterworksImg from "../../assets/images/industries/industry-waterworks.png";
import ReuseImg from "../../assets/images/industries/industry-reuse.jpg";

const industries = [
  {
    number: "01",
    title: "Industrial & Process Manufacturing",
    shortTitle: "Industrial",
    description:
      "Treatment requirements for manufacturing and process facilities where solids, oil, chemicals, variable loads and production conditions influence wastewater quality.",
    applications:
      "Metalworking · Chemical blending · Paint shops · Process wastewater",
    image: IndustrialImg,
    path: "/industries/industrial",
  },

  {
    number: "02",
    title: "Food, Beverage & Dairy",
    shortTitle: "Food & Beverage",
    description:
      "Wastewater treatment for facilities where organic loading, suspended solids, fats, oils and grease can influence downstream treatment.",
    applications:
      "Food processing · Beverage · Dairy · Food waste",
    image: FoodImg,
    path: "/industries/food-beverage",
  },

  {
    number: "03",
    title: "Textile & Dyeing",
    shortTitle: "Textile",
    description:
      "Treatment approaches for wastewater associated with textile processing, dyeing and related production activities.",
    applications:
      "Textile wastewater · Dyeing · Color-bearing wastewater",
    image: TextileImg,
    path: "/industries/textile-dyeing",
  },

  {
    number: "04",
    title: "Slaughterhouse & High-Load Wastewater",
    shortTitle: "Slaughterhouse",
    description:
      "Treatment systems for wastewater with significant organic loading, suspended solids and oil and grease requirements.",
    applications:
      "Slaughterhouse · High COD · TSS · Oil & grease",
    image: SlaughterhouseImg,
    path: "/industries/slaughterhouse",
  },

  {
    number: "05",
    title: "Municipal & Waterworks",
    shortTitle: "Municipal",
    description:
      "Water and wastewater infrastructure for municipal upgrading, waterworks pretreatment and public treatment applications.",
    applications:
      "Municipal upgrading · Waterworks · Pretreatment",
    image: WaterworksImg,
    path: "/industries/municipal",
  },

  {
    number: "06",
    title: "Water Reuse & Advanced Treatment",
    shortTitle: "Water Reuse",
    description:
      "Treatment and separation systems where the objective extends beyond discharge toward treated-water recovery and reuse.",
    applications:
      "Reuse water · Filtration · UF · RO · MBR",
    image: ReuseImg,
    path: "/industries/water-reuse",
  },
];

const IndustryGrid = () => {
  return (
    <section className="wastely-section wastely-section-soft">

      <div className="wastely-container">

        <div className="wastely-section-header">

          <div className="wastely-section-eyebrow">
            Applications
          </div>

          <h2 className="wastely-section-title">
            Different industries. Different wastewater profiles.
          </h2>

          <p className="wastely-section-description">
            Treatment starts with the application. The wastewater profile,
            process conditions, site limitations and final water objective
            determine what the system needs to do.
          </p>

        </div>


        <div
          className="
            grid
            border-l
            border-t
            border-wastely-line
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {industries.map((industry) => (

            <Link
              key={industry.number}
              to={industry.path}
              className="
                group
                border-b
                border-r
                border-wastely-line
                bg-white
                transition-colors
                duration-200
                hover:bg-wastely-bg-soft
              "
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden border-b border-wastely-line">

                <img
                  src={industry.image}
                  alt={industry.title}
                  className="
                    aspect-[16/10]
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.035]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-wastely-deep/45
                    via-transparent
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    border
                    border-white/70
                    bg-white/90
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    tracking-[0.12em]
                    text-wastely-deep
                  "
                >
                  {industry.number}
                </div>

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-white
                  "
                >
                  {industry.shortTitle}
                </div>

              </div>


              {/* CONTENT */}

              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <h3
                    className="
                      max-w-[290px]
                      text-lg
                      font-bold
                      leading-6
                      text-wastely-deep
                    "
                  >
                    {industry.title}
                  </h3>

                  <ArrowUpRight
                    size={18}
                    className="
                      shrink-0
                      text-wastely-sub
                      transition-all
                      duration-200
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-wastely-blue
                    "
                  />

                </div>

                <p className="mt-4 text-sm leading-6 text-wastely-sub">
                  {industry.description}
                </p>

                <div className="mt-6 border-t border-wastely-line pt-4">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-wastely-blue
                    "
                  >
                    Application examples
                  </p>

                  <p className="mt-2 text-sm leading-5 text-wastely-deep">
                    {industry.applications}
                  </p>

                </div>

                <div
                  className="
                    mt-6
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-wastely-blue
                  "
                >
                  Explore application
                </div>

              </div>

              <div
                className="
                  h-[2px]
                  w-0
                  bg-wastely-cyan
                  transition-all
                  duration-300
                  group-hover:w-16
                "
              />

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
};

export default IndustryGrid;