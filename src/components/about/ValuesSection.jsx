const values = [
  {
    letter: "W",
    title: "Worthiness",
    description:
      "Every drop of water we manage contributes toward a cleaner, healthier and more sustainable future.",
  },

  {
    letter: "A",
    title: "Assurance",
    description:
      "Delivering reliable wastewater treatment and environmental infrastructure systems with operational confidence.",
  },

  {
    letter: "S",
    title: "Sustainability",
    description:
      "Engineering environmentally responsible solutions focused on long-term ecological balance and water recovery.",
  },

  {
    letter: "T",
    title: "Tactfulness",
    description:
      "Combining innovation, environmental awareness and strategic engineering to solve complex water challenges.",
  },

  {
    letter: "E",
    title: "Excellence",
    description:
      "Maintaining the highest standards in environmental engineering, treatment efficiency and project execution.",
  },

  {
    letter: "L",
    title: "Leadership",
    description:
      "Driving innovation and sustainable transformation within wastewater and environmental infrastructure industries.",
  },

  {
    letter: "Y",
    title: "Yielding Innovation",
    description:
      "Continuously developing future-ready technologies that maximize environmental and operational impact.",
  },
];

const ValuesSection = () => {
  return (
    <section className="relative py-32 bg-[#081219] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute bottom-0 left-0
          w-[600px] h-[600px]
          bg-emerald-500/10
          blur-[140px]
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

        {/* HEADER */}
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
              Core Values
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
            Principles That Drive
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
              Sustainable Innovation
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
            Our values define the foundation of Wastely Aqua,
            shaping every environmental solution, engineering
            decision and sustainability initiative we deliver.
          </p>
        </div>

        {/* VALUES GRID */}
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-20
          "
        >
          {values.map((value, index) => (
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

              {/* HOVER GLOW */}
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

              {/* LETTER */}
              <div
                className="
                  relative z-10
                  w-20 h-20
                  flex items-center justify-center
                  rounded-3xl
                  bg-gradient-to-br
                  from-cyan-500/20
                  to-emerald-500/10
                  border border-cyan-400/20
                  text-4xl
                  font-semibold
                  text-cyan-300
                  mb-8
                "
              >
                {value.letter}
              </div>

              {/* TITLE */}
              <h3
                className="
                  relative z-10
                  text-2xl
                  font-semibold
                  text-white
                "
              >
                {value.title}
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
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;