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

