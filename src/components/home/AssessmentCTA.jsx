import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const AssessmentCTA = () => {
  return (
    <section className="relative overflow-hidden bg-wastely-bg-soft">
      {/* Water-flow motif */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] lg:block">
        <div
          className="
            absolute
            right-[-120px]
            top-1/2
            h-[520px]
            w-[520px]
            -translate-y-1/2
            rounded-full
            border
            border-wastely-cyan/10
          "
        />

        <div
          className="
            absolute
            right-[-20px]
            top-1/2
            h-[340px]
            w-[340px]
            -translate-y-1/2
            rounded-full
            border
            border-wastely-cyan/10
          "
        />

        <svg
          className="absolute bottom-10 right-0 h-32 w-full"
          viewBox="0 0 700 140"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 90 C120 40 210 40 330 80 S520 130 700 55"
            fill="none"
            stroke="#2FB4CE"
            strokeOpacity="0.18"
            strokeWidth="1.5"
          />

          <path
            d="M0 110 C120 60 220 60 340 95 S530 140 700 75"
            fill="none"
            stroke="#0E76A8"
            strokeOpacity="0.10"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="wastely-container relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Main CTA */}
          <div className="max-w-[720px]">
            <div className="wastely-section-eyebrow">
              Start a Conversation
            </div>

            <h2
              className="
                text-[2rem]
                font-bold
                leading-[1.12]
                tracking-[-0.025em]
                text-wastely-deep
                sm:text-[2.5rem]
              "
            >
              Have a water or wastewater treatment requirement?
            </h2>

            <p className="mt-5 max-w-[620px] text-base leading-7 text-wastely-sub">
              Share your project requirements with us. We can discuss the
              application, treatment objectives and next steps for your
              project.
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

          {/* Contact information */}
          <div className="border-l border-wastely-line pl-6 sm:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-wastely-blue">
              Contact
            </p>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+919136069130"
                className="
                  flex
                  items-start
                  gap-4
                  text-sm
                  text-wastely-sub
                  transition-colors
                  duration-200
                  hover:text-wastely-blue
                "
              >
                <Phone
                  size={18}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-wastely-blue"
                />

                <span>+91 91360 69130</span>
              </a>

              <a
                href="mailto:info@wastelyaqua.com"
                className="
                  flex
                  items-start
                  gap-4
                  text-sm
                  text-wastely-sub
                  transition-colors
                  duration-200
                  hover:text-wastely-blue
                "
              >
                <Mail
                  size={18}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-wastely-blue"
                />

                <span>info@wastelyaqua.com</span>
              </a>

              <div className="flex items-start gap-4 text-sm text-wastely-sub">
                <MapPin
                  size={18}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-wastely-blue"
                />

                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="wastely-container">
        <div className="wastely-divider" />
      </div>
    </section>
  );
};

export default AssessmentCTA;