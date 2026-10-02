const challenges = [
  {
    number: "01",
    title: "High solids",
    text:
      "TSS, fibres, sand, paint slag and suspended particles can increase the load on downstream treatment.",
  },
  {
    number: "02",
    title: "Oil & grease",
    text:
      "Free oil, emulsified oil, scum and grease can require dedicated separation before downstream treatment.",
  },
  {
    number: "03",
    title: "Variable loading",
    text:
      "Variable pH, COD peaks, production changes and batch discharge can make wastewater conditions difficult to keep stable.",
  },
  {
    number: "04",
    title: "Limited footprint",
    text:
      "Existing facilities may have restricted space, access and infrastructure, making compact or retrofit-friendly systems important.",
  },
];

const IndustryChallenges = () => {
  return (
    <section className="relative overflow-hidden bg-wastely-deep">

      {/* Engineering lines */}

      <div className="pointer-events-none absolute inset-0 opacity-30">

        <svg
          className="h-full w-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >

          <path
            d="M-100 390 C180 160 360 470 650 280 S1120 80 1540 230"
            fill="none"
            stroke="#2FB4CE"
            strokeWidth="1"
          />

          <path
            d="M-100 430 C180 200 360 510 650 320 S1120 120 1540 270"
            fill="none"
            stroke="#2FB4CE"
            strokeOpacity="0.6"
            strokeWidth="1"
          />

          <path
            d="M-100 470 C180 240 360 550 650 360 S1120 160 1540 310"
            fill="none"
            stroke="#2FB4CE"
            strokeOpacity="0.35"
            strokeWidth="1"
          />

        </svg>

      </div>


      <div className="wastely-container relative z-10 py-20 sm:py-24">

        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-20
          "
        >

          {/* LEFT */}

          <div>

            <div
              className="
                flex
                items-center
                gap-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-wastely-cyan
              "
            >
              <span className="h-px w-8 bg-wastely-cyan" />

              Water & Wastewater Challenges
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              The industry determines the wastewater problem.
            </h2>

            <p className="mt-5 max-w-[500px] text-sm leading-7 text-white/70">
              Wastewater conditions can change with the process, production
              cycle, raw materials and site. Treatment therefore starts
              with understanding what enters the system.
            </p>

          </div>


          {/* RIGHT */}

          <div className="border-t border-white/15">

            {challenges.map((item) => (

              <div
                key={item.number}
                className="
                  grid
                  gap-4
                  border-b
                  border-white/15
                  py-6
                  sm:grid-cols-[55px_180px_1fr]
                  sm:items-start
                "
              >

                <span
                  className="
                    text-xs
                    font-semibold
                    tracking-[0.12em]
                    text-wastely-cyan
                  "
                >
                  {item.number}
                </span>

                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-white/65">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default IndustryChallenges;