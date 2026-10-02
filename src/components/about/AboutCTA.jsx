import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden bg-wastely-bg-soft">
      <div className="pointer-events-none absolute right-[-100px] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-wastely-cyan/10" />

      <div className="pointer-events-none absolute right-[20px] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full border border-wastely-cyan/10" />

      <div className="wastely-container relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[760px]">
          <div className="wastely-section-eyebrow">
            Start a Conversation
          </div>

          <h2 className="text-[2rem] font-bold leading-tight tracking-[-0.025em] text-wastely-deep sm:text-[2.5rem]">
            Have a water or wastewater treatment requirement?
          </h2>

          <p className="mt-5 max-w-[620px] text-base leading-7 text-wastely-sub">
            Tell us about your application, site or treatment requirement and
            start a discussion with Wastely Aqua.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="wastely-btn wastely-btn-primary"
            >
              Request an Assessment
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;