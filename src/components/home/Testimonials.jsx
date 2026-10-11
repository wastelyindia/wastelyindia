import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    category: "Textile Water Management",
    quote:
      "Water is a critical resource in the textile industry, and managing it efficiently is both a corporate duty and an operational necessity. Wastely Aqua provided us with the advanced technology and expertise needed to reduce our water footprint while maintaining our high production standards.",
    designation: "General Manager",
    company: "Bombay Dyeing",
  },
  {
    id: 2,
    category: "Environmental Engineering",
    quote:
      "True engineering is about creating harmony between industrial progress and environmental preservation. Our collaboration with Wastely Aqua represents the future of responsible water management.",
    designation: "Senior Environmental Consultant",
    company: "Yash Engineering and Consultant",
  },
  {
    id: 3,
    category: "Urban Water Infrastructure",
    quote:
      "Wastely Aqua represents the future of circular water economies. Their advanced systems provide the perfect synergy of technology and sustainability, enabling Tandon Urban Solutions to deliver impactful infrastructure for evolving cities.",
    designation: "General Manager",
    company: "Tandon Urban Solutions Pvt. Ltd.",
  },
  {
    id: 4,
    category: "Infrastructure Engineering",
    quote:
      "In infrastructure development, precision and reliability are everything. We chose Wastely Aqua because their technical expertise matches our rigorous standards. Their innovative water solutions have been seamless to integrate and highly effective in operation.",
    designation: "Director Technical",
    company: "Eagle Infra India Limited",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];
  const totalTestimonials = testimonials.length;

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? totalTestimonials - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === totalTestimonials - 1 ? 0 : current + 1
    );
  };

  const selectTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle engineering grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.35]
          [background-image:linear-gradient(#E3EDF1_1px,transparent_1px),linear-gradient(90deg,#E3EDF1_1px,transparent_1px)]
          [background-size:64px_64px]
          [mask-image:linear-gradient(to_bottom,black,transparent_85%)]
        "
      />

      {/* Decorative water ripple */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-28
          h-80
          w-80
          rounded-full
          border
          border-wastely-cyan/15
          sm:h-[420px]
          sm:w-[420px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-10
          -top-14
          h-52
          w-52
          rounded-full
          border
          border-wastely-blue/10
          sm:h-[280px]
          sm:w-[280px]
        "
      />

      <div className="wastely-container relative z-10">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="wastely-section-eyebrow">
            Client Perspectives
          </div>

          <h2
            id="testimonials-heading"
            className="wastely-section-title mt-1"
          >
            Trusted partnerships.{" "}
            <span className="text-wastely-blue">
              Meaningful water solutions.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-wastely-sub sm:text-base">
            Perspectives on water management, environmental engineering
            and infrastructure from the organisations we work with.
          </p>
        </div>

        {/* Testimonial panel */}
        <div
          className="
            mt-10
            grid
            border
            border-wastely-line
            bg-white
            lg:mt-14
            lg:grid-cols-[0.34fr_0.66fr]
          "
        >
          {/* Left information panel */}
          <div
            className="
              relative
              flex
              min-h-[220px]
              flex-col
              justify-between
              overflow-hidden
              bg-wastely-bg-soft
              p-6
              sm:p-8
              lg:min-h-[410px]
              lg:p-10
            "
          >
            <div>
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  border
                  border-wastely-line
                  bg-white
                  text-wastely-blue
                "
              >
                <Quote size={23} strokeWidth={1.7} />
              </div>

              <div className="mt-7 text-xs font-bold uppercase tracking-[0.13em] text-wastely-blue">
                {activeTestimonial.category}
              </div>

              <div className="mt-3 h-[2px] w-12 bg-wastely-cyan" />
            </div>

            <div className="mt-8 flex items-end justify-between gap-4 lg:mt-12">
              <div>
                <div className="text-4xl font-bold tracking-[-0.04em] text-wastely-deep sm:text-5xl">
                  {String(activeIndex + 1).padStart(2, "0")}
                  <span className="text-wastely-cyan">
                    {" "}
                    / {String(totalTestimonials).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-wastely-sub">
                  Perspectives on water management
                </p>
              </div>

              <div
                aria-hidden="true"
                className="
                  relative
                  hidden
                  h-20
                  w-20
                  shrink-0
                  items-center
                  justify-center
                  sm:flex
                "
              >
                <div className="absolute inset-0 rounded-full border border-wastely-cyan/30" />
                <div className="absolute inset-3 rounded-full border border-wastely-blue/20" />
                <div className="h-2 w-2 rounded-full bg-wastely-cyan" />
              </div>
            </div>
          </div>

          {/* Right testimonial content */}
          <div className="flex min-w-0 flex-col justify-between p-6 sm:p-9 lg:p-12">
            <div
              key={activeTestimonial.id}
              aria-live="polite"
              aria-atomic="true"
              className="min-w-0"
            >
              <p
                className="
                  text-lg
                  font-medium
                  leading-8
                  tracking-[-0.015em]
                  text-wastely-ink
                  sm:text-xl
                  sm:leading-9
                  lg:text-[1.45rem]
                  lg:leading-[1.8]
                "
              >
                “{activeTestimonial.quote}”
              </p>

              <div className="mt-8 border-t border-wastely-line pt-6 sm:mt-10">
                <div className="text-base font-bold text-wastely-deep sm:text-lg">
                  {activeTestimonial.company}
                </div>

                <div className="mt-1 text-sm leading-6 text-wastely-sub">
                  {activeTestimonial.designation}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-wastely-line pt-6">
              {/* Pagination */}
              <div
                className="flex items-center gap-2"
                aria-label="Choose a testimonial"
              >
                {testimonials.map((testimonial, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={testimonial.id}
                      type="button"
                      onClick={() => selectTestimonial(index)}
                      aria-label={`Show testimonial ${index + 1} of ${totalTestimonials}`}
                      aria-pressed={isActive}
                      className={`
                        h-2
                        transition-all
                        duration-200
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-wastely-cyan
                        ${
                          isActive
                            ? "w-8 bg-wastely-blue"
                            : "w-2 bg-[#C7D7DE] hover:bg-wastely-cyan"
                        }
                      `}
                    />
                  );
                })}
              </div>

              {/* Previous / next */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous testimonial"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-wastely-line
                    bg-white
                    text-wastely-blue
                    transition-colors
                    duration-200
                    hover:border-wastely-blue
                    hover:bg-wastely-bg-soft
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-wastely-cyan
                  "
                >
                  <ChevronLeft size={20} strokeWidth={1.8} />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next testimonial"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-wastely-blue
                    bg-wastely-blue
                    text-white
                    transition-colors
                    duration-200
                    hover:border-wastely-deep
                    hover:bg-wastely-deep
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-wastely-cyan
                  "
                >
                  <ChevronRight size={20} strokeWidth={1.8} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom editorial line */}
        <div className="mt-6 flex flex-col gap-2 border-t border-wastely-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-wastely-sub">
            Collaboration across industrial, environmental and water infrastructure applications.
          </p>

          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-wastely-blue">
            Wastely Aqua
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;