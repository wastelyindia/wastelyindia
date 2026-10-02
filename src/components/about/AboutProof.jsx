const facts = [
  {
    value: "Mumbai",
    label: "Base",
    detail: "India",
  },
  {
    value: "India & UAE",
    label: "Markets",
    detail: "Current project presence",
  },
  {
    value: "10+",
    label: "Projects",
    detail: "Verified project count",
  },
];

const AboutProof = () => {
  return (
    <section className="relative overflow-hidden bg-wastely-deep py-16 sm:py-20">
      {/* Contour lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-100 350 C180 180 360 180 620 320 S1050 500 1540 180"
          fill="none"
          stroke="#2FB4CE"
          strokeWidth="1"
        />

        <path
          d="M-100 400 C180 230 390 230 650 350 S1080 540 1540 230"
          fill="none"
          stroke="#2FB4CE"
          strokeWidth="1"
        />

        <path
          d="M-100 450 C200 290 420 290 680 390 S1100 570 1540 280"
          fill="none"
          stroke="#2FB4CE"
          strokeWidth="1"
        />
      </svg>

      <div className="wastely-container relative z-10">
        <div className="max-w-[680px]">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-wastely-cyan">
            <span className="h-px w-7 bg-wastely-cyan" />
            Company Facts
          </div>

          <h2 className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.4rem]">
            A growing water and wastewater treatment business.
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Verified company information can be expanded here as Wastely
            Aqua's project record and business history are documented.
          </p>
        </div>

        <div className="mt-10 grid border-l border-t border-white/15 md:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-r border-white/15 p-6 sm:p-7"
            >
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {fact.value}
              </div>

              <div className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-wastely-cyan">
                {fact.label}
              </div>

              <p className="mt-2 text-sm text-white/60">
                {fact.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProof;