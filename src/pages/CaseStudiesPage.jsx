import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Droplets,
  Factory,
  Leaf,
  MapPin,
  Waves,
} from "lucide-react";

import BhimaImg from "../assets/images/case-studies/case-bhima-ssk.jpg";
import SummerPalaceHero from "../assets/images/case-studies/case-summer-palace-hero.jpg";
import SummerBefore from "../assets/images/case-studies/case-summer-palace-before.jpg";
import SummerDay2 from "../assets/images/case-studies/case-summer-palace-day2.jpg";
import SummerWeek1 from "../assets/images/case-studies/case-summer-palace-week1.jpg";
import SummerDay10 from "../assets/images/case-studies/case-summer-palace-day10.jpg";
import SummerWeek2 from "../assets/images/case-studies/case-summer-palace-week2.jpg";


/* =========================================================
   SMALL COMPONENTS
========================================================= */

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="wastely-section-header">
      <div className="wastely-section-eyebrow">
        {eyebrow}
      </div>

      <h2 className="wastely-section-title">
        {title}
      </h2>

      {description && (
        <p className="wastely-section-description">
          {description}
        </p>
      )}
    </div>
  );
};


const DataCell = ({ number, label, value }) => {
  return (
    <div className="border-b border-r border-wastely-line bg-white p-5">
      <div className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
        {number}
      </div>

      <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-wastely-sub">
        {label}
      </div>

      <div className="mt-1 text-sm font-bold text-wastely-deep">
        {value}
      </div>
    </div>
  );
};


const HandoffCard = ({
  eyebrow,
  title,
  description,
  to,
  linkText,
}) => {
  return (
    <Link
      to={to}
      className="group border-b border-r border-wastely-line bg-white p-7 transition-colors hover:border-wastely-cyan sm:p-8"
    >
      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
        {eyebrow}
      </div>

      <h3 className="mt-3 text-lg font-bold text-wastely-deep">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-wastely-sub">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-wastely-blue">
        {linkText}

        <ArrowRight
          size={15}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
};


/* =========================================================
   CASE STUDIES
========================================================= */

const CaseStudies = () => {
  return (
    <main className="bg-white text-wastely-ink">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-wastely-bg-soft">

        <div className="absolute inset-0 pointer-events-none">

          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(#E3EDF1 1px, transparent 1px), linear-gradient(90deg, #E3EDF1 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full border border-wastely-cyan/20" />

          <div className="absolute right-[-70px] top-[-70px] h-[320px] w-[320px] rounded-full border border-wastely-cyan/15" />

        </div>


        <div className="relative wastely-container py-20 sm:py-24 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">

            {/* LEFT */}

            <div>

              <div className="wastely-section-eyebrow">
                Case Studies
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-wastely-deep sm:text-5xl lg:text-[3.7rem]">
                Documented treatment applications and reference cases.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-wastely-sub sm:text-lg">
                Review treatment challenges, process approaches and documented
                outcomes from supplied project case material across industrial
                wastewater and waterbody restoration applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  to="/solutions/wastewater-treatment"
                  className="wastely-btn wastely-btn-primary"
                >
                  Wastewater Solutions
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/solutions/water-body-restoration"
                  className="wastely-btn wastely-btn-secondary"
                >
                  Waterbody Restoration
                </Link>

              </div>

            </div>


            {/* RIGHT — CASE INDEX */}

            <div className="border border-wastely-line bg-white">

              <div className="border-b border-wastely-line bg-wastely-deep p-6">

                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-wastely-cyan">
                  Reference Index
                </div>

                <div className="mt-2 text-xl font-bold text-white">
                  Two documented applications
                </div>

              </div>


              <div className="grid sm:grid-cols-2 lg:grid-cols-1">

                <div className="border-b border-wastely-line p-6">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
                      <Factory
                        size={20}
                        className="text-wastely-blue"
                      />
                    </div>

                    <div>
                      <div className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
                        01
                      </div>

                      <h3 className="mt-1 font-bold text-wastely-deep">
                        Bhima SSK
                      </h3>

                      <p className="mt-1 text-sm text-wastely-sub">
                        Industrial wastewater / ETP
                      </p>
                    </div>

                  </div>

                </div>


                <div className="p-6">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
                      <Waves
                        size={20}
                        className="text-wastely-blue"
                      />
                    </div>

                    <div>
                      <div className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
                        02
                      </div>

                      <h3 className="mt-1 font-bold text-wastely-deep">
                        Summer Palace
                      </h3>

                      <p className="mt-1 text-sm text-wastely-sub">
                        Waterbody restoration
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          REFERENCE NOTE
      ====================================================== */}

      <section className="border-b border-wastely-line bg-white">

        <div className="wastely-container py-6">

          <div className="flex flex-col gap-3 border-l-2 border-wastely-cyan pl-5 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-wastely-blue">
                Reference case material
              </div>

              <p className="mt-1 text-sm leading-6 text-wastely-sub">
                The cases below are presented from the supplied source
                documentation. Project ownership and delivery attribution have
                not been changed or inferred.
              </p>

            </div>

            <div className="shrink-0 text-xs font-semibold uppercase tracking-[0.1em] text-wastely-sub">
              Documented applications
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CASE 01 — BHIMA
      ====================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-start">

            {/* IMAGE */}

            <div className="relative">

              <div className="border border-wastely-line bg-wastely-bg-soft">

                <img
                  src={BhimaImg}
                  alt="Industrial sugar mill infrastructure at Bhima SSK"
                  className="h-[360px] w-full object-cover sm:h-[440px]"
                />

              </div>


              <div className="mt-3 flex items-center justify-between border-b border-wastely-line pb-3">

                <div className="flex items-center gap-2 text-xs font-semibold text-wastely-sub">
                  <MapPin size={14} className="text-wastely-cyan" />
                  Solapur, India
                </div>

                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-wastely-blue">
                  Industrial wastewater
                </div>

              </div>

            </div>


            {/* CONTENT */}

            <div>

              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-wastely-cyan">
                Reference Case 01
              </div>

              <h2 className="mt-3 text-3xl font-bold text-wastely-deep sm:text-4xl">
                Stabilizing an effluent treatment program at Bhima SSK.
              </h2>

              <p className="mt-5 text-base leading-7 text-wastely-sub">
                The supplied case study concerns Bhima SSK Ltd, a sugar mill
                in Solapur district. Its ETP receives wastewater with high COD
                and BOD concentrations, with reported flow of up to 0.3 ML/day
                into the aeration tank.
              </p>


              {/* DATA */}

              <div className="mt-8 grid grid-cols-2 border-l border-t border-wastely-line sm:grid-cols-4">

                <DataCell
                  number="01"
                  label="Application"
                  value="Sugar mill ETP"
                />

                <DataCell
                  number="02"
                  label="Reported flow"
                  value="0.3 ML/day"
                />

                <DataCell
                  number="03"
                  label="Validation"
                  value="12 days"
                />

                <DataCell
                  number="04"
                  label="Focus"
                  value="COD / BOD"
                />

              </div>


              {/* PROBLEM */}

              <div className="mt-10 border-t border-wastely-line pt-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
                    <Building2
                      size={19}
                      className="text-wastely-blue"
                    />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-wastely-deep">
                      Treatment challenge
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-wastely-sub">
                      High wastewater volume together with elevated COD and
                      BOD created operating challenges for the ETP. The
                      documented validation focused on reducing the organic
                      load and improving ETP stability.
                    </p>

                  </div>

                </div>

              </div>


              {/* APPROACH */}

              <div className="mt-7 border-t border-wastely-line pt-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
                    <Droplets
                      size={19}
                      className="text-wastely-blue"
                    />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-wastely-deep">
                      Treatment approach
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-wastely-sub">
                      The source case selected BiOWiSH® Aqua FOG because of
                      the wastewater's high oil content. The documented
                      program evaluated its effect on BOD, COD and overall
                      ETP stability.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* RESULTS */}

          <div className="mt-16 border-t border-wastely-line pt-10">

            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

              <div>

                <div className="wastely-section-eyebrow">
                  Documented results
                </div>

                <h3 className="text-2xl font-bold text-wastely-deep sm:text-3xl">
                  Measured changes after the validation period.
                </h3>

              </div>


              <div className="grid border-l border-t border-wastely-line sm:grid-cols-2">

                <div className="border-b border-r border-wastely-line bg-wastely-bg-soft p-7">

                  <div className="text-3xl font-bold text-wastely-blue">
                    44%
                  </div>

                  <div className="mt-2 text-sm font-semibold text-wastely-deep">
                    COD reduction
                  </div>

                  <p className="mt-2 text-xs leading-5 text-wastely-sub">
                    Reported reduction in effluent COD after 12 days.
                  </p>

                </div>


                <div className="border-b border-r border-wastely-line bg-wastely-bg-soft p-7">

                  <div className="text-3xl font-bold text-wastely-blue">
                    48%
                  </div>

                  <div className="mt-2 text-sm font-semibold text-wastely-deep">
                    BOD reduction
                  </div>

                  <p className="mt-2 text-xs leading-5 text-wastely-sub">
                    Reported reduction in effluent BOD after 12 days.
                  </p>

                </div>


                <div className="border-b border-r border-wastely-line bg-white p-7">

                  <div className="text-3xl font-bold text-wastely-blue">
                    6–8
                  </div>

                  <div className="mt-2 text-sm font-semibold text-wastely-deep">
                    Reported pH range
                  </div>

                  <p className="mt-2 text-xs leading-5 text-wastely-sub">
                    Effluent pH was reported as maintained between 6 and 8.
                  </p>

                </div>


                <div className="border-b border-r border-wastely-line bg-white p-7">

                  <div className="flex items-center gap-2 text-wastely-blue">
                    <CheckCircle2 size={20} />

                    <span className="text-lg font-bold">
                      Improved
                    </span>
                  </div>

                  <div className="mt-2 text-sm font-semibold text-wastely-deep">
                    ETP stability
                  </div>

                  <p className="mt-2 text-xs leading-5 text-wastely-sub">
                    The source document reports better stability after the
                    validation.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CASE 02 — SUMMER PALACE
      ====================================================== */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-start">

            {/* CONTENT */}

            <div className="lg:order-1">

              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-wastely-cyan">
                Reference Case 02
              </div>

              <h2 className="mt-3 text-3xl font-bold text-wastely-deep sm:text-4xl">
                Restoring water quality at the Summer Palace, Beijing.
              </h2>

              <p className="mt-5 text-base leading-7 text-wastely-sub">
                The supplied case study documents a biological restoration
                program at a test pond in the Summer Palace. The pond had poor
                water exchange, elevated nutrient levels and recurring surface
                plant and algae growth.
              </p>


              <div className="mt-8 grid grid-cols-2 border-l border-t border-wastely-line sm:grid-cols-4">

                <DataCell
                  number="01"
                  label="Application"
                  value="Waterbody"
                />

                <DataCell
                  number="02"
                  label="Test pond"
                  value="100 m²"
                />

                <DataCell
                  number="03"
                  label="Water system"
                  value="2.9 km² site"
                />

                <DataCell
                  number="04"
                  label="Focus"
                  value="TN / TP / NH₃"
                />

              </div>


              {/* CHALLENGE */}

              <div className="mt-10 border-t border-wastely-line pt-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-line bg-white">
                    <Waves
                      size={19}
                      className="text-wastely-blue"
                    />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-wastely-deep">
                      Waterbody challenge
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-wastely-sub">
                      The selected pond had poor exchange with surrounding
                      water. The source document reports elevated total
                      nitrogen and total phosphorus together with recurring
                      floating plants and algae growth.
                    </p>

                  </div>

                </div>

              </div>


              {/* APPROACH */}

              <div className="mt-7 border-t border-wastely-line pt-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-line bg-white">
                    <Leaf
                      size={19}
                      className="text-wastely-blue"
                    />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-wastely-deep">
                      Treatment approach
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-wastely-sub">
                      A three-phase BiOWiSH® Aqua dosing program was
                      implemented, with the documented objective of improving
                      water quality while reducing maintenance requirements.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* IMAGE */}

            <div className="lg:order-2">

              <div className="border border-wastely-line bg-white">

                <img
                  src={SummerPalaceHero}
                  alt="Summer Palace, Beijing"
                  className="h-[330px] w-full object-cover sm:h-[430px]"
                />

              </div>

              <div className="mt-3 flex items-center justify-between border-b border-wastely-line pb-3">

                <div className="flex items-center gap-2 text-xs font-semibold text-wastely-sub">
                  <MapPin size={14} className="text-wastely-cyan" />
                  Beijing, China
                </div>

                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-wastely-blue">
                  Waterbody restoration
                </div>

              </div>

            </div>

          </div>


          {/* RESULTS */}

          <div className="mt-16 border-t border-wastely-line pt-10">

            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

              <div>

                <div className="wastely-section-eyebrow">
                  Documented results
                </div>

                <h3 className="text-2xl font-bold text-wastely-deep sm:text-3xl">
                  Water-quality changes recorded during the program.
                </h3>

              </div>


              <div className="grid border-l border-t border-wastely-line sm:grid-cols-3">

                <div className="border-b border-r border-wastely-line bg-white p-7">

                  <div className="text-3xl font-bold text-wastely-blue">
                    ≤ 2 weeks
                  </div>

                  <div className="mt-2 text-sm font-semibold text-wastely-deep">
                    TN reached stated Standard IV level
                  </div>

                  <p className="mt-2 text-xs leading-5 text-wastely-sub">
                    As reported in the supplied case documentation.
                  </p>

                </div>


                <div className="border-b border-r border-wastely-line bg-white p-7">

                  <div className="text-3xl font-bold text-wastely-blue">
                    ≤ 10 days
                  </div>

                  <div className="mt-2 text-sm font-semibold text-wastely-deep">
                    TP reached stated Standard IV level
                  </div>

                  <p className="mt-2 text-xs leading-5 text-wastely-sub">
                    As reported in the supplied case documentation.
                  </p>

                </div>


                <div className="border-b border-r border-wastely-line bg-white p-7">

                  <div className="text-3xl font-bold text-wastely-blue">
                    &gt;90%
                  </div>

                  <div className="mt-2 text-sm font-semibold text-wastely-deep">
                    Reported ammonia-N reduction
                  </div>

                  <p className="mt-2 text-xs leading-5 text-wastely-sub">
                    The source reports ammonia nitrogen below 0.1 ppm ten
                    days after initial dosing.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* BEFORE / AFTER GALLERY */}

          <div className="mt-16 border-t border-wastely-line pt-10">

            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

              <div className="max-w-2xl">

                <div className="wastely-section-eyebrow">
                  Field record
                </div>

                <h3 className="text-2xl font-bold text-wastely-deep sm:text-3xl">
                  Visual record from the supplied case document.
                </h3>

              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-wastely-sub">
                Before → treatment period
              </div>

            </div>


            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

              <CaseImage
                src={SummerBefore}
                label="Before weekly cleaning"
              />

              <CaseImage
                src={SummerDay2}
                label="Two days after manual cleaning"
              />

              <CaseImage
                src={SummerWeek1}
                label="One week after dosing"
              />

              <CaseImage
                src={SummerDay10}
                label="Ten days after dosing"
              />

              <CaseImage
                src={SummerWeek2}
                label="Two weeks after dosing"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT THESE CASES SHOW
      ====================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <SectionHeading
            eyebrow="Application context"
            title="Different water problems require different treatment approaches."
            description="The supplied cases span two very different treatment environments: an industrial ETP and a managed waterbody. The common thread is that the treatment approach begins with the water condition, operating problem and project objective."
          />


          <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2 lg:grid-cols-4">

            <ApplicationCard
              icon={Factory}
              number="01"
              title="Industrial wastewater"
              text="High organic loading, process wastewater and ETP stability requirements."
            />

            <ApplicationCard
              icon={Waves}
              number="02"
              title="Waterbody restoration"
              text="Nutrient loading, algae growth, water exchange and ecological conditions."
            />

            <ApplicationCard
              icon={Droplets}
              number="03"
              title="Biological treatment"
              text="Biological processes can be considered where water quality and treatment objectives support them."
            />

            <ApplicationCard
              icon={BarChart3}
              number="04"
              title="Measured performance"
              text="Treatment decisions should be reviewed against defined water-quality parameters and project objectives."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY HANDOFF
      ====================================================== */}

      <section className="wastely-section-sm bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="border-y border-wastely-line">

            <div className="grid md:grid-cols-3">

              <HandoffCard
                eyebrow="Solution"
                title="Wastewater Treatment"
                description="Explore treatment approaches for industrial and municipal wastewater requirements."
                to="/solutions/wastewater-treatment"
                linkText="View solution"
              />

              <HandoffCard
                eyebrow="Solution"
                title="Water Body Restoration"
                description="Explore restoration planning for lakes, ponds, reservoirs and other water systems."
                to="/solutions/water-body-restoration"
                linkText="View solution"
              />

              <HandoffCard
                eyebrow="Technology"
                title="Treatment Technologies"
                description="Review the treatment technologies available across the Wastely Aqua system."
                to="/technologies"
                linkText="Explore technologies"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   CASE IMAGE
========================================================= */

const CaseImage = ({ src, label }) => {
  return (
    <figure className="border border-wastely-line bg-white">

      <div className="aspect-[4/3] overflow-hidden bg-wastely-bg-soft">

        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover"
        />

      </div>

      <figcaption className="border-t border-wastely-line px-4 py-3 text-xs font-medium leading-5 text-wastely-sub">
        {label}
      </figcaption>

    </figure>
  );
};


/* =========================================================
   APPLICATION CARD
========================================================= */

const ApplicationCard = ({
  icon: Icon,
  number,
  title,
  text,
}) => {
  return (
    <article className="border-b border-r border-wastely-line bg-white p-7 sm:p-8">

      <div className="flex items-center justify-between">

        <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft">

          <Icon
            size={20}
            strokeWidth={1.7}
            className="text-wastely-blue"
          />

        </div>

        <span className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
          {number}
        </span>

      </div>

      <h3 className="mt-7 text-lg font-bold text-wastely-deep">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-wastely-sub">
        {text}
      </p>

    </article>
  );
};


export default CaseStudies;











// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Activity,
//   ArrowRight,
//   CheckCircle2,
//   Droplets,
//   Gauge,
//   Leaf,
//   MapPinned,
//   ShieldCheck,
//   Sparkles,
//   Waves,
//   Wind,
//   Building2,
//   BarChart3,
//   Cpu,
// } from "lucide-react";

// import ArunImg from "../assets/images/arun-sagar.jpg";
// import KanglaImg from "../assets/images/kangla-moats.jpg";
// import NingthemImg from "../assets/images/ningthem-pukhri.jpg";
// import YaiskulImg from "../assets/images/yaiskul-lake.jpg";
// import BijoyImg from "../assets/images/bijoy-govinda.jpg";
// import case_study_hero from "../assets/images/case_study_hero.png";

// const projects = [
//   {
//     title: "Arun Sagar Restoration",
//     location: "Urban Lake Restoration",
//     image: ArunImg,
//     problem:
//       "Severe eutrophication, foul odor, algae bloom, sludge accumulation and low dissolved oxygen levels affecting ecological balance.",
//     technology: [
//       "Nano Bubble Aeration",
//       "Bioremediation",
//       "Floating Wetlands",
//       "Real-Time Monitoring",
//     ],
//     results: [
//       "Improved dissolved oxygen levels",
//       "Reduced algae bloom intensity",
//       "Improved water clarity",
//       "Restored ecological activity",
//     ],
//     metrics: [
//       "DO Improvement",
//       "BOD Reduction",
//       "Algae Suppression",
//       "Water Clarity Increase",
//     ],
//   },

//   {
//     title: "Kangla Moats",
//     location: "Historic Water Body Restoration",
//     image: KanglaImg,
//     problem:
//       "Black water conditions, nutrient loading, excessive algae formation and declining water quality in historic moat systems.",
//     technology: [
//       "Ultrasonic Algae Control",
//       "Floating Wetlands",
//       "Decorative Oxygenation",
//       "MPC Monitoring Buoys",
//     ],
//     results: [
//       "Reduced algae bloom",
//       "Enhanced visual aesthetics",
//       "Continuous ecological monitoring",
//       "Improved oxygenation",
//     ],
//     metrics: [
//       "Real-Time Monitoring",
//       "Reduced Odor",
//       "Improved Ecology",
//       "Enhanced Aesthetics",
//     ],
//   },

//   {
//     title: "Ningthem Pukhri",
//     location: "Urban Pond Rejuvenation",
//     image: NingthemImg,
//     problem:
//       "Low DO, sludge deposition, stagnant water conditions and fish mortality due to poor water quality.",
//     technology: [
//       "Nano Bubble Oxygenation",
//       "Bioremediation",
//       "Floating Ecological Islands",
//       "Integrated Fountain Systems",
//     ],
//     results: [
//       "Enhanced oxygen transfer",
//       "Reduced sludge accumulation",
//       "Improved aquatic habitat",
//       "Increased biodiversity",
//     ],
//     metrics: [
//       "Fish Habitat Recovery",
//       "DO Stabilization",
//       "Reduced Sludge",
//       "Cleaner Water",
//     ],
//   },

//   {
//     title: "Yaiskul Restoration",
//     location: "Ecological Water Restoration",
//     image: YaiskulImg,
//     problem:
//       "Polluted stagnant water body with algae infestation, poor circulation and deteriorating ecosystem conditions.",
//     technology: [
//       "Ultrasonic Algae Systems",
//       "Smart Water Monitoring",
//       "Floating Wetlands",
//       "Oxygenation Systems",
//     ],
//     results: [
//       "Improved circulation",
//       "Controlled algae growth",
//       "Enhanced ecological stability",
//       "Improved visual landscape",
//     ],
//     metrics: [
//       "Algae Reduction",
//       "Water Quality Improvement",
//       "Monitoring Automation",
//       "Ecological Recovery",
//     ],
//   },

//   {
//     title: "Bijoy Govinda Water Body",
//     location: "Integrated Rejuvenation Project",
//     image: BijoyImg,
//     problem:
//       "Organic pollution, foul odor, nutrient loading and long-term ecological degradation in urban water systems.",
//     technology: [
//       "Bioremediation",
//       "Nano Bubble Systems",
//       "Decorative Floating Wetlands",
//       "Predictive Analytics Monitoring",
//     ],
//     results: [
//       "Reduced organic loading",
//       "Improved ecosystem health",
//       "Enhanced oxygen levels",
//       "Long-term monitoring integration",
//     ],
//     metrics: [
//       "COD Reduction",
//       "Improved Clarity",
//       "Reduced Odor",
//       "Smart Monitoring",
//     ],
//   },
// ];

// const stats = [
//   ["₹33 Cr+", "Integrated Restoration Capability"],
//   ["5+", "Major Water Restoration Projects"],
//   ["24/7", "Smart Monitoring Infrastructure"],
//   ["Multi-Tech", "Integrated Restoration Approach"],
// ];

// const CaseStudies = () => {
//   return (
//     <div className="relative overflow-hidden bg-[#071018] text-white">
//       {/* GRID */}
//       <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:90px_90px]" />

//       {/* GLOW */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute left-[-150px] top-[-100px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[180px]" />

//         <div className="absolute right-[-140px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-[180px]" />
//       </div>

//       {/* HERO */}
//       <section className="relative min-h-screen overflow-hidden">
//         <div className="absolute inset-0">
//             {/* HERO IMAGE */}
//             <img
//                 src={case_study_hero}
//                 alt="Water Restoration Projects"
//                 className="h-full w-full object-cover"
//             />

//             {/* OVERLAY */}
//             <div className="absolute inset-0 bg-[#071018]/55" />

//             {/* GRADIENT */}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#071018]/20 via-[#071018]/55 to-[#071018]" />

//             {/* OPTIONAL PREMIUM GLOW */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_45%)]" />
//         </div>

//         <div className="relative z-10 container mx-auto px-4 md:px-6 min-h-screen flex items-center py-28">
//           <div className="max-w-6xl">
//             <motion.div
//               initial={{ opacity: 0, y: 35 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-cyan-300">
//                 <BarChart3 size={14} />
//                 Real Projects • Smart Restoration • Proven Results
//               </div>

//               <h1 className="mt-10 text-5xl md:text-7xl xl:text-[92px] font-black leading-[0.9]">
//                 Water Restoration
//                 <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
//                   Case Studies
//                 </span>
//               </h1>

//               <p className="mt-10 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-300">
//                 Integrated lake rejuvenation, smart monitoring, oxygenation,
//                 bioremediation and algae control projects transforming polluted
//                 water bodies into sustainable ecological environments.
//               </p>

//               <div className="mt-12 flex flex-wrap gap-5">
//                 <Link to="/contact">
//                   <button className="group rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-12px_rgba(34,211,238,0.45)]">
//                     <span className="flex items-center gap-2">
//                       Discuss Restoration Project
//                       <ArrowRight
//                         size={18}
//                         className="transition-transform group-hover:translate-x-1"
//                       />
//                     </span>
//                   </button>
//                 </Link>

//                 <Link to="/contact">
//                   <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
//                     Request Technical Proposal
//                   </button>
//                 </Link>
//               </div>

//               {/* STATS */}
//               <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
//                 {stats.map((item, index) => (
//                   <div
//                     key={index}
//                     className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-emerald-400/5" />

//                     <div className="relative z-10">
//                       <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
//                         {item[0]}
//                       </h3>

//                       <p className="mt-2 text-sm text-slate-400">
//                         {item[1]}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CASE STUDIES */}
//       <section className="relative py-32">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="space-y-28">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7 }}
//                 className={`grid gap-14 items-center lg:grid-cols-[0.95fr_1.05fr] ${
//                   index % 2 !== 0
//                     ? "lg:grid-cols-[1.05fr_0.95fr]"
//                     : ""
//                 }`}
//               >
//                 {/* IMAGE */}
//                 <div
//                   className={`relative ${
//                     index % 2 !== 0 ? "lg:order-2" : ""
//                   }`}
//                 >
//                   <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-cyan-400/20 to-emerald-400/10 blur-3xl" />

//                   <div className="relative overflow-hidden rounded-[42px] border border-white/10">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="h-[720px] w-full object-cover"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-transparent" />

//                     {/* BEFORE / AFTER */}
//                     <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
//                       <div className="rounded-2xl border border-red-400/20 bg-[#0c151d]/80 p-5 backdrop-blur-xl">
//                         <h4 className="text-sm uppercase tracking-[0.2em] text-red-300">
//                           Before
//                         </h4>

//                         <p className="mt-2 text-sm text-slate-300">
//                           Polluted water body with algae bloom and poor
//                           ecological conditions.
//                         </p>
//                       </div>

//                       <div className="rounded-2xl border border-emerald-400/20 bg-[#0c151d]/80 p-5 backdrop-blur-xl">
//                         <h4 className="text-sm uppercase tracking-[0.2em] text-emerald-300">
//                           After
//                         </h4>

//                         <p className="mt-2 text-sm text-slate-300">
//                           Improved oxygenation, restored clarity and ecological
//                           rejuvenation.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div
//                   className={`${
//                     index % 2 !== 0 ? "lg:order-1" : ""
//                   }`}
//                 >
//                   <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-cyan-300">
//                     <MapPinned size={14} />
//                     {project.location}
//                   </div>

//                   <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
//                     {project.title}
//                   </h2>

//                   {/* PROBLEM */}
//                   <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-400/10 text-red-300">
//                         <ShieldCheck size={26} />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-black">
//                           Problem
//                         </h3>

//                         <p className="mt-3 leading-relaxed text-slate-400">
//                           {project.problem}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* TECHNOLOGY */}
//                   <div className="mt-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
//                         <Cpu size={26} />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-black">
//                           Technologies Used
//                         </h3>
//                       </div>
//                     </div>

//                     <div className="mt-8 flex flex-wrap gap-4">
//                       {project.technology.map((tech, techIndex) => (
//                         <div
//                           key={techIndex}
//                           className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-200 backdrop-blur-xl"
//                         >
//                           {tech}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* RESULTS */}
//                   <div className="mt-6 grid gap-6 md:grid-cols-2">
//                     <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
//                           <Sparkles size={26} />
//                         </div>

//                         <h3 className="text-2xl font-black">
//                           Results
//                         </h3>
//                       </div>

//                       <div className="mt-8 space-y-4">
//                         {project.results.map((result, resultIndex) => (
//                           <div
//                             key={resultIndex}
//                             className="flex items-start gap-3"
//                           >
//                             <CheckCircle2
//                               size={18}
//                               className="mt-1 text-emerald-300"
//                             />

//                             <p className="text-slate-300">
//                               {result}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* METRICS */}
//                     <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
//                           <BarChart3 size={26} />
//                         </div>

//                         <h3 className="text-2xl font-black">
//                           Key Metrics
//                         </h3>
//                       </div>

//                       <div className="mt-8 space-y-4">
//                         {project.metrics.map((metric, metricIndex) => (
//                           <div
//                             key={metricIndex}
//                             className="rounded-2xl border border-white/10 bg-[#0d1820]/80 px-5 py-4"
//                           >
//                             <p className="text-slate-300">
//                               {metric}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative pb-32">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-white/5">
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-emerald-400/10" />

//             <div className="relative z-10 px-8 py-20 md:px-20 md:py-24 text-center">
//               <div className="mx-auto max-w-5xl">
//                 <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
//                   Engineering Proven At Scale
//                 </div>

//                 <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
//                   Build Your Next
//                   <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
//                     Water Restoration Project
//                   </span>
//                 </h2>

//                 <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-400">
//                   Integrated ecological engineering, oxygenation,
//                   bioremediation, algae control and smart monitoring systems for
//                   sustainable water body restoration.
//                 </p>

//                 <div className="mt-12 flex flex-wrap justify-center gap-5">
//                   <Link to="/contact">
//                     <button className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-12px_rgba(34,211,238,0.45)]">
//                       Start Restoration Discussion
//                     </button>
//                   </Link>

//                   <Link to="/technologies">
//                     <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
//                       Explore Technologies
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CaseStudies;