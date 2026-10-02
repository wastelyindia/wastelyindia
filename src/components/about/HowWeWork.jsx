const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review the application, site conditions, water characteristics and treatment objectives.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Evaluate the technical requirements and identify an appropriate treatment approach.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Translate the selected approach into a practical project, system or plant requirement.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Provide ongoing technical, operational or maintenance support where required.",
  },
];

const HowWeWork = () => {
  return (
    <section className="wastely-section wastely-section-soft">
      <div className="wastely-container">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="wastely-section-eyebrow">
              How We Work
            </div>

            <h2 className="wastely-section-title">
              A practical approach from requirement to operation.
            </h2>

            <p className="mt-5 max-w-[480px] text-sm leading-6 text-wastely-sub">
              Every project starts with understanding the actual requirement,
              rather than beginning with a predefined technology.
            </p>
          </div>

          <div className="border-t border-wastely-line">
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  grid
                  gap-5
                  border-b
                  border-wastely-line
                  py-6
                  sm:grid-cols-[70px_160px_1fr]
                  sm:items-start
                "
              >
                <span className="text-xs font-semibold tracking-[0.12em] text-wastely-sub">
                  {step.number}
                </span>

                <h3 className="text-lg font-bold text-wastely-deep">
                  {step.title}
                </h3>

                <p className="text-sm leading-6 text-wastely-sub">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flow line */}
      <div className="relative mt-12 h-8 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 h-8 w-full"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 25 C180 10 300 10 480 25 S780 40 960 25 S1260 10 1440 25"
            fill="none"
            stroke="#2FB4CE"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  );
};

export default HowWeWork;