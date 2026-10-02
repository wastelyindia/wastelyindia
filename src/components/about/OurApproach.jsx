const principles = [
  {
    number: "01",
    title: "Application first",
    description:
      "The treatment approach starts with the water, wastewater or environmental requirement being addressed.",
  },
  {
    number: "02",
    title: "Fit for the site",
    description:
      "Solutions need to work within the site's physical, operational and project constraints.",
  },
  {
    number: "03",
    title: "Built for operation",
    description:
      "Treatment systems must remain practical to operate, maintain and support over time.",
  },
];

const OurApproach = () => {
  return (
    <section className="wastely-section wastely-section-white">
      <div className="wastely-container">
        <div className="max-w-[700px]">
          <div className="wastely-section-eyebrow">
            Our Approach
          </div>

          <h2 className="wastely-section-title">
            The right treatment approach depends on the requirement.
          </h2>

          <p className="wastely-section-description">
            We focus on matching the treatment approach to the application,
            site and operating requirements rather than presenting one
            solution for every situation.
          </p>
        </div>

        <div className="mt-12 grid border-l border-t border-wastely-line md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.number}
              className="min-h-[220px] border-b border-r border-wastely-line p-6 sm:p-7"
            >
              <span className="text-xs font-semibold tracking-[0.12em] text-wastely-sub">
                {item.number}
              </span>

              <h3 className="mt-12 text-lg font-bold text-wastely-deep">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-wastely-sub">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;