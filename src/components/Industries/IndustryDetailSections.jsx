import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const IndustryDetailSections = ({ industry }) => {
  return (
    <>
      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">Project Focus</div>
              <h2 className="wastely-section-title">
                Start with the requirement, then define the treatment approach.
              </h2>
            </div>

            <div className="grid gap-px border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2">
              {industry.focus.map((item) => (
                <div key={item} className="border-b border-r border-wastely-line bg-white p-6">
                  <Check size={18} className="text-wastely-blue" />
                  <p className="mt-5 text-sm font-semibold leading-6 text-wastely-deep">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">Common Challenges</div>
            <h2 className="wastely-section-title">
              Conditions that can shape the project.
            </h2>
            <p className="wastely-section-description">
              The actual requirement depends on the site, water characteristics,
              intended use and operating conditions.
            </p>
          </div>

          <div className="border-t border-wastely-line">
            {industry.challenges.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-4 border-b border-wastely-line py-7 sm:grid-cols-[70px_220px_1fr] sm:items-start"
              >
                <span className="text-xs font-semibold tracking-[0.12em] text-wastely-sub">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-base font-bold text-wastely-deep">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-wastely-sub">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">Relevant Solutions</div>
              <h2 className="wastely-section-title">
                Solutions and services can be combined around the application.
              </h2>
            </div>

            <div className="border-t border-wastely-line">
              {industry.solutions.map((solution) => (
                <Link
                  key={solution}
                  to="/solutions"
                  className="group flex items-center justify-between gap-6 border-b border-wastely-line py-5"
                >
                  <span className="text-base font-semibold text-wastely-deep">
                    {solution}
                  </span>

                  <ArrowRight
                    size={17}
                    className="text-wastely-sub transition-transform duration-200 group-hover:translate-x-1 group-hover:text-wastely-blue"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid gap-8 border border-wastely-line bg-white p-7 sm:p-9 lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
            <div>
              <div className="wastely-section-eyebrow">Typical Applications</div>
              <h2 className="text-2xl font-bold leading-tight text-wastely-deep">
                Where this work can apply
              </h2>
            </div>

            <p className="text-base leading-7 text-wastely-sub">
              {industry.applications}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryDetailSections;
