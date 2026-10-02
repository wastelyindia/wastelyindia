import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IndustryDetailCTA = ({ industry }) => {
  return (
    <section className="relative overflow-hidden bg-wastely-deep">
      <div className="pointer-events-none absolute right-[-80px] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-wastely-cyan/15" />
      <div className="pointer-events-none absolute right-[30px] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full border border-wastely-cyan/15" />

      <div className="wastely-container relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-wastely-cyan">
            <span className="h-px w-7 bg-wastely-cyan" />
            Start With Your Requirement
          </div>

          <h2 className="mt-4 text-[2rem] font-bold leading-tight tracking-[-0.025em] text-white sm:text-[2.5rem]">
            Have a water or wastewater requirement for your sector?
          </h2>

          <p className="mt-5 max-w-[620px] text-base leading-7 text-white/70">
            Share your application, site requirements or treatment challenge
            with us.
          </p>

          <div className="mt-8">
            <Link to="/contact" className="wastely-btn wastely-btn-light">
              Request an Assessment
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryDetailCTA;
