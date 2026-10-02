const WhoWeAre = () => {
  return (
    <section className="wastely-section wastely-section-soft">
      <div className="wastely-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="wastely-section-eyebrow">
              Who We Are
            </div>

            <h2 className="wastely-section-title">
              A water treatment company focused on real operating needs.
            </h2>
          </div>

          <div className="max-w-[700px]">
            <p className="text-base leading-7 text-wastely-sub">
              Wastely Aqua provides water and wastewater treatment solutions
              for projects where treatment performance, practical execution
              and long-term operation matter.
            </p>

            <p className="mt-5 text-base leading-7 text-wastely-sub">
              Our work spans treatment systems, waterbody restoration and
              plant support. We approach each requirement according to its
              application, site conditions, treatment objectives and operating
              requirements.
            </p>

            <p className="mt-5 text-base leading-7 text-wastely-sub">
              From assessing a requirement to supporting an operating system,
              the objective is straightforward: develop an appropriate
              solution and help the customer move it from requirement to
              implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;