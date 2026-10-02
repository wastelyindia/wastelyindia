import {
  ArrowRight,
  Droplets,
  Fish,
  Leaf,
  Network,
  Waves,
  RotateCcw,
} from "lucide-react";

import { Link } from "react-router-dom";

const solutions = [
  {
    number: "01",
    title: "Wastewater Treatment",
    description:
      "Treatment systems for sewage and industrial wastewater, designed around the required discharge or reuse objective.",
    icon: Droplets,
    path: "/solutions/wastewater-treatment",
    tag: "Treat",
  },
  {
    number: "02",
    title: "Water Treatment",
    description:
      "Water treatment solutions for raw, process and utility water where consistent water quality is required.",
    icon: Waves,
    path: "/solutions/water-treatment",
    tag: "Purify",
  },
  {
    number: "03",
    title: "Integrated Water System",
    description:
      "Connected treatment and reuse systems that address water supply, wastewater and recovery as one requirement.",
    icon: Network,
    path: "/solutions/integrated-water-system",
    tag: "Integrate",
  },
  {
    number: "04",
    title: "Aquaculture",
    description:
      "Water-quality management solutions for aquaculture environments where oxygen, circulation and water conditions matter.",
    icon: Fish,
    path: "/solutions/aquaculture",
    tag: "Manage",
  },
  {
    number: "05",
    title: "Water Body Restoration",
    description:
      "Treatment and ecological interventions for degraded lakes, ponds, canals and other water bodies.",
    icon: Leaf,
    path: "/solutions/water-body-restoration",
    tag: "Restore",
  },
  {
    number: "06",
    title: "Lake & Pond Rejuvenation",
    description:
      "Site-focused approaches for improving water quality and restoring the function of polluted or degraded lakes and ponds.",
    icon: RotateCcw,
    path: "/solutions/lake-pond-rejuvenation",
    tag: "Rejuvenate",
  },
];

const applicationAreas = [
  "Industrial facilities",
  "Municipal infrastructure",
  "Healthcare & institutions",
  "Hospitality & commercial",
  "Aquaculture",
  "Lakes & water bodies",
];

const Solutions = () => {
  return (
    <main className="bg-white text-wastely-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-wastely-line bg-white">

        {/* Engineering grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            hidden
            w-[48%]
            opacity-60
            lg:block
            [background-image:linear-gradient(#E3EDF1_1px,transparent_1px),linear-gradient(90deg,#E3EDF1_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* Water ripple */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            top-20
            h-[440px]
            w-[440px]
            rounded-full
            border
            border-wastely-cyan/15
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-4
            top-36
            h-[290px]
            w-[290px]
            rounded-full
            border
            border-wastely-cyan/15
          "
        />

        <div className="wastely-container relative z-10">

          <div
            className="
              grid
              min-h-[560px]
              items-center
              gap-14
              py-20
              lg:grid-cols-[1fr_0.75fr]
              lg:py-24
            "
          >

            {/* LEFT */}

            <div className="max-w-[720px]">

              <div className="wastely-section-eyebrow">
                Water & Wastewater Solutions
              </div>

              <h1
                className="
                  mt-2
                  max-w-[720px]
                  text-[2.6rem]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.035em]
                  text-wastely-deep
                  sm:text-[3.2rem]
                  lg:text-[3.7rem]
                "
              >
                Water solutions built around the application.
              </h1>

              <p
                className="
                  mt-7
                  max-w-[650px]
                  text-base
                  leading-7
                  text-wastely-sub
                  sm:text-lg
                "
              >
                From wastewater treatment and water purification to
                waterbody restoration and reuse, Wastely Aqua develops
                solutions around the site's requirements, water quality,
                operating conditions and intended outcome.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                <a
                  href="#solutions"
                  className="wastely-btn wastely-btn-primary"
                >
                  Explore Solutions
                  <ArrowRight size={17} />
                </a>

                <Link
                  to="/contact"
                  className="wastely-btn wastely-btn-secondary"
                >
                  Request an Assessment
                </Link>

              </div>

              <div className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-wastely-sub">
                <span className="h-px w-10 bg-wastely-cyan" />
                Treatment
                <span className="text-wastely-line">·</span>
                Reuse
                <span className="text-wastely-line">·</span>
                Restoration
              </div>

            </div>

            {/* RIGHT — WATER SYSTEM DIAGRAM */}

            <div className="relative hidden min-h-[390px] lg:block">

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[320px]
                  w-[320px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-wastely-cyan/20
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[210px]
                  w-[210px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-wastely-blue/20
                "
              />

              {/* Central water node */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-28
                  w-28
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  border
                  border-wastely-cyan
                  bg-white
                "
              >
                <div className="text-center">
                  <Droplets
                    size={27}
                    className="mx-auto text-wastely-blue"
                  />

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-wastely-deep">
                    Water
                  </p>
                </div>
              </div>

              {/* Nodes */}

              <SolutionNode
                className="left-0 top-10"
                label="Treat"
              />

              <SolutionNode
                className="right-0 top-10"
                label="Purify"
              />

              <SolutionNode
                className="left-0 bottom-10"
                label="Reuse"
              />

              <SolutionNode
                className="right-0 bottom-10"
                label="Restore"
              />

              {/* Flow lines */}

              <div className="absolute left-[24%] top-[27%] h-px w-[24%] rotate-[25deg] bg-wastely-cyan/40" />
              <div className="absolute right-[24%] top-[27%] h-px w-[24%] -rotate-[25deg] bg-wastely-cyan/40" />
              <div className="absolute bottom-[27%] left-[24%] h-px w-[24%] -rotate-[25deg] bg-wastely-cyan/40" />
              <div className="absolute bottom-[27%] right-[24%] h-px w-[24%] rotate-[25deg] bg-wastely-cyan/40" />

            </div>

          </div>
        </div>

        {/* Wave divider */}

        <div className="relative h-8">
          <svg
            className="absolute bottom-0 left-0 h-8 w-full"
            viewBox="0 0 1440 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 20 C180 4 300 4 480 20 S780 36 960 20 S1260 4 1440 20"
              fill="none"
              stroke="#2FB4CE"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
          </svg>
        </div>

      </section>


      {/* =====================================================
          SOLUTION GRID
      ===================================================== */}

      <section
        id="solutions"
        className="wastely-section wastely-section-soft"
      >
        <div className="wastely-container">

          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Our Solutions
            </div>

            <h2 className="wastely-section-title">
              Start with the water challenge.
            </h2>

            <p className="wastely-section-description">
              Each application has different water characteristics,
              operating conditions and performance requirements. Choose
              the area closest to your project.
            </p>
          </div>


          <div className="grid border-l border-t border-wastely-line sm:grid-cols-2 lg:grid-cols-3">

            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Link
                  key={solution.title}
                  to={solution.path}
                  className="
                    group
                    relative
                    border-b
                    border-r
                    border-wastely-line
                    bg-white
                    p-7
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-wastely-cyan
                  "
                >

                  <div className="flex items-start justify-between">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        border
                        border-wastely-line
                        bg-wastely-bg-soft
                        transition-colors
                        duration-200
                        group-hover:border-wastely-cyan
                      "
                    >
                      <Icon
                        size={20}
                        className="text-wastely-blue"
                      />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.1em] text-wastely-sub">
                      {solution.number}
                    </span>

                  </div>


                  <div className="mt-12">

                    <div className="mb-3 inline-flex border border-wastely-line px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-wastely-blue">
                      {solution.tag}
                    </div>

                    <h3 className="text-xl font-bold text-wastely-deep">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-wastely-sub">
                      {solution.description}
                    </p>

                  </div>


                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-wastely-blue
                    "
                  >
                    Explore solution

                    <ArrowRight
                      size={16}
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    />
                  </div>

                </Link>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          WATER JOURNEY
      ===================================================== */}

      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <div className="wastely-section-eyebrow">
                Project Approach
              </div>

              <h2 className="wastely-section-title">
                From water challenge to operating solution.
              </h2>

              <p className="mt-5 max-w-[470px] text-sm leading-6 text-wastely-sub">
                The solution depends on the application. We begin with
                the requirement, establish the treatment objective and
                then determine the appropriate process approach.
              </p>

            </div>


            <div className="relative">

              {/* horizontal water flow */}

              <div className="absolute left-0 right-0 top-8 hidden h-px bg-wastely-line md:block" />

              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">

                <JourneyStep
                  number="01"
                  title="Understand"
                  text="Application, source and operating requirement."
                />

                <JourneyStep
                  number="02"
                  title="Assess"
                  text="Water quality, capacity and site constraints."
                />

                <JourneyStep
                  number="03"
                  title="Design"
                  text="Treatment approach matched to the requirement."
                />

                <JourneyStep
                  number="04"
                  title="Outcome"
                  text="Treatment, reuse or restoration objective."
                />

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">

          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Applications
            </div>

            <h2 className="wastely-section-title">
              Solutions across different operating environments.
            </h2>

            <p className="wastely-section-description">
              Treatment requirements change with the source, process,
              scale and intended use of the treated water.
            </p>
          </div>


          <div className="grid border-l border-t border-wastely-line sm:grid-cols-2 lg:grid-cols-3">

            {applicationAreas.map((area, index) => (
              <div
                key={area}
                className="
                  border-b
                  border-r
                  border-wastely-line
                  bg-white
                  p-6
                "
              >
                <span className="text-xs font-semibold tracking-[0.1em] text-wastely-sub">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-base font-bold text-wastely-deep">
                  {area}
                </h3>

                <div className="mt-5 h-[2px] w-8 bg-wastely-cyan" />
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES HANDOFF
          ===================================================== */}

        <section className="wastely-section-sm bg-white">
          <div className="wastely-container">
            <div className="flex flex-col gap-6 border-y border-wastely-line py-7 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                  Next layer
                </div>

                <h2 className="mt-2 text-xl font-bold text-wastely-deep">
                  Need support beyond the treatment solution?
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-wastely-sub">
                  Our services cover treatment-process engineering, plant operation,
                  maintenance and upgrades for existing water and wastewater
                  infrastructure.
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-wastely-blue hover:text-wastely-deep"
                >
                Explore Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        
      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-wastely-deep">

        <div
          className="
            pointer-events-none
            absolute
            right-[-100px]
            top-[-100px]
            h-[320px]
            w-[320px]
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-40px]
            top-[-40px]
            h-[200px]
            w-[200px]
            rounded-full
            border
            border-wastely-cyan/20
          "
        />

        <div className="wastely-container relative z-10 py-16 sm:py-20">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-[700px]">

              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-wastely-cyan">
                <span className="h-px w-8 bg-wastely-cyan" />
                Start with the requirement
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Have a water or wastewater treatment requirement?
              </h2>

              <p className="mt-4 max-w-[620px] text-sm leading-6 text-white/70">
                Share the application, site context and treatment
                objective. We can start from there.
              </p>

            </div>

            <Link
              to="/contact"
              className="wastely-btn wastely-btn-light shrink-0"
            >
              Request an Assessment
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   HERO NODE
   ========================================================= */

const SolutionNode = ({ className, label }) => {
  return (
    <div
      className={`
        absolute
        ${className}
        flex
        items-center
        gap-2
        border
        border-wastely-line
        bg-white
        px-3
        py-2
      `}
    >
      <span className="h-2 w-2 rounded-full bg-wastely-cyan" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-wastely-deep">
        {label}
      </span>
    </div>
  );
};


/* =========================================================
   JOURNEY STEP
   ========================================================= */

const JourneyStep = ({ number, title, text }) => {
  return (
    <div className="relative">

      <div
        className="
          relative
          z-10
          flex
          h-16
          w-16
          items-center
          justify-center
          border
          border-wastely-cyan
          bg-white
        "
      >
        <span className="text-xs font-bold tracking-[0.08em] text-wastely-blue">
          {number}
        </span>
      </div>

      <h3 className="mt-5 text-base font-bold text-wastely-deep">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-wastely-sub">
        {text}
      </p>

    </div>
  );
};

export default Solutions;