import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Leaf,
  ShieldCheck,
  Utensils,
  Waves,
  Workflow,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "FOG accumulation management",
    description:
      "Biological treatment may help reduce the accumulation of fats, oils and grease within suitable grease-trap applications.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Drainage and blockage support",
    description:
      "The product guide identifies reduced pipework blockages as a potential benefit of appropriate Aqua FOG treatment.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Odour management",
    description:
      "Biological treatment may support odour reduction. Actual results depend on site conditions and the causes of the odour.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Downstream treatment support",
    description:
      "Managing grease-trap loading may help improve discharge-water quality and support downstream wastewater treatment.",
    icon: Waves,
  },
];

const applications = [
  {
    title: "Commercial kitchens",
    description:
      "Grease traps serving restaurants, hotels, cafeterias and institutional kitchens.",
    icon: Utensils,
  },
  {
    title: "Food-service facilities",
    description:
      "Food preparation and service operations where fats, oils, grease and food solids enter wastewater.",
    icon: Factory,
  },
  {
    title: "Other grease-trap applications",
    description:
      "Suitable facilities identified through an assessment of wastewater characteristics and operating conditions.",
    icon: Droplets,
  },
];

const assessmentFactors = [
  "Daily wastewater flow through the grease trap",
  "Grease-trap volume and hydraulic retention time",
  "FOG loading and the characteristics of incoming wastewater",
  "Use of disinfectants, bleaches or other antimicrobial chemicals",
  "Existing dosing arrangements and treatment objectives",
];

const operatingConsiderations = [
  {
    title: "Retention time",
    description:
      "The supplied guide describes different dosing approaches for systems with less than 24 hours of retention time and systems with 24 hours or more.",
  },
  {
    title: "Dosing arrangement",
    description:
      "Depending on the application, dosing may involve continuous drip feeding or a daily dose. The appropriate arrangement requires site-specific review.",
  },
  {
    title: "Chemical compatibility",
    description:
      "Some disinfectants and antimicrobial products may affect biological performance. Existing chemical use should be reviewed before treatment begins.",
  },
  {
    title: "Monitoring and adjustment",
    description:
      "Dosing should be reviewed against operating conditions, grease-trap performance and the treatment objectives rather than assumed to be identical at every site.",
  },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-wastely-blue">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-wastely-deep sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-wastely-sub sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function AssessmentLink({ children = "Request an Assessment" }) {
  return (
    <Link
      to="/contact"
      className="wastely-btn wastely-btn-primary inline-flex items-center justify-center gap-2"
    >
      {children}
      <ArrowRight size={16} strokeWidth={1.8} />
    </Link>
  );
}

export default function BiowishAquaFOG() {
  return (
    <main className="bg-white text-wastely-deep">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-wastely-line bg-wastely-bg-soft">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,118,168,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(14,118,168,0.045) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="wastely-container relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 border border-wastely-line bg-white px-3 py-2 text-xs font-semibold text-wastely-blue">
                <Droplets size={15} />
                WASTEWATER TREATMENT
              </div>

              <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-wastely-deep sm:text-5xl lg:text-[3.7rem]">
                Biological FOG management for grease-trap applications.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-wastely-sub sm:text-lg">
                BiOWiSH™ Aqua FOG is described in its product guide as a
                biological treatment intended to accelerate the removal of
                fats, oils, grease and sediment food solids in grease traps.
                Its suitability depends on wastewater characteristics,
                operating conditions and treatment objectives.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AssessmentLink />

                <a
                  href="#how-it-works"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-wastely-line bg-white px-5 py-3 text-sm font-semibold text-wastely-deep transition-colors hover:border-wastely-cyan hover:text-wastely-blue"
                >
                  Explore the treatment approach
                  <ArrowRight size={15} />
                </a>
              </div>

              <p className="mt-5 max-w-xl text-xs leading-6 text-wastely-sub">
                Treatment suitability and dosing requirements should be
                assessed for the specific site. This page does not imply an
                authorised distribution or supply relationship.
              </p>
            </div>

            {/* Technical summary panel */}

            <div className="relative">
              <div className="border border-wastely-line bg-white">
                <div className="border-b border-wastely-line px-6 py-5 sm:px-7">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-wastely-blue">
                    Treatment overview
                  </p>

                  <h2 className="mt-2 text-xl font-bold tracking-tight text-wastely-deep">
                    Grease-trap biological treatment
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-wastely-sub">
                    An application-specific approach to managing organic
                    material in grease-trap wastewater.
                  </p>
                </div>

                <div className="divide-y divide-wastely-line">
                  <div className="flex gap-4 px-6 py-5 sm:px-7">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-line bg-wastely-bg-soft text-wastely-blue">
                      <FlaskConical size={19} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-wastely-deep">
                        Biological action
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-wastely-sub">
                        Intended to accelerate biological breakdown of FOG
                        and food solids.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 px-6 py-5 sm:px-7">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-line bg-wastely-bg-soft text-wastely-blue">
                      <Gauge size={19} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-wastely-deep">
                        Flow-based dosing
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-wastely-sub">
                        Dosing requirements depend on flow, grease loading,
                        retention time and other site conditions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 px-6 py-5 sm:px-7">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-line bg-wastely-bg-soft text-wastely-blue">
                      <ClipboardCheck size={19} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-wastely-deep">
                        Site-specific assessment
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-wastely-sub">
                        Review existing treatment, chemical use and
                        discharge requirements before selecting an approach.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-wastely-line bg-wastely-bg-soft px-6 py-4 sm:px-7">
                  <p className="text-xs leading-5 text-wastely-sub">
                    Product information is based on the supplied BiOWiSH™
                    Aqua FOG user guide. Confirm current manufacturer
                    documentation before operational use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="wastely-container">
          <SectionHeading
            eyebrow="The wastewater challenge"
            title="FOG accumulation can create problems beyond the grease trap."
            description="Fats, oils, grease and food solids entering commercial wastewater systems can contribute to accumulation, drainage issues, odour and additional loading on downstream treatment. The appropriate response depends on the source and severity of the problem."
          />

          <div className="mt-10 grid gap-px border border-wastely-line bg-wastely-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Grease accumulation",
                text: "FOG and food solids collect within grease-trap systems.",
              },
              {
                number: "02",
                title: "Drainage issues",
                text: "Accumulated material can contribute to pipework blockages.",
              },
              {
                number: "03",
                title: "Odour concerns",
                text: "Grease-trap conditions may contribute to unpleasant odours.",
              },
              {
                number: "04",
                title: "Treatment loading",
                text: "Discharge quality can affect downstream wastewater processes.",
              },
            ].map((item) => (
              <article key={item.number} className="bg-white p-6 sm:p-7">
                <p className="text-xs font-bold tracking-[0.14em] text-wastely-blue">
                  {item.number}
                </p>

                <h3 className="mt-5 text-lg font-bold text-wastely-deep">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-wastely-sub">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section
        id="how-it-works"
        className="scroll-mt-24 border-y border-wastely-line bg-wastely-bg-soft py-16 sm:py-20 lg:py-24"
      >
        <div className="wastely-container">
          <SectionHeading
            eyebrow="Treatment approach"
            title="Biological treatment designed around the grease-trap process."
            description="The supplied user guide describes Aqua FOG as a composite biocatalyst containing microorganisms, enzymes and metabolic cofactors. It states that the product supports biochemical reactions associated with the biological removal of fats, oils, grease and sediment food solids."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Assess the wastewater",
                description:
                  "Understand the grease-trap arrangement, incoming flow, FOG loading, retention time and existing chemical treatments.",
              },
              {
                number: "02",
                title: "Determine the application",
                description:
                  "Evaluate whether biological FOG treatment is appropriate and establish a dosing approach using current product guidance.",
              },
              {
                number: "03",
                title: "Review the outcome",
                description:
                  "Assess grease-trap performance, operational issues and relevant discharge-quality objectives under actual site conditions.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="border border-wastely-line bg-white p-6 sm:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-wastely-line bg-wastely-bg-soft text-sm font-bold text-wastely-blue">
                  {step.number}
                </div>

                <h3 className="mt-6 text-lg font-bold text-wastely-deep">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-wastely-sub">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-7 border-l-2 border-wastely-cyan bg-white px-5 py-4 sm:px-6">
            <p className="text-sm leading-7 text-wastely-sub">
              <strong className="font-semibold text-wastely-deep">
                Important:
              </strong>{" "}
              Biological treatment should not automatically be treated as a
              replacement for grease-trap infrastructure, physical
              separation, cleaning or other required wastewater-treatment
              processes. The appropriate system must be determined for each
              application.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          POTENTIAL BENEFITS
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="wastely-container">
          <SectionHeading
            eyebrow="Potential benefits"
            title="Focus on operational outcomes—not blanket promises."
            description="The manufacturer’s guide identifies several potential benefits. Their actual extent depends on site conditions, dosing, compatibility and operating practices."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.number}
                  className="flex gap-5 border border-wastely-line p-6 sm:p-7"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-wastely-line bg-wastely-bg-soft text-wastely-blue">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-wastely-blue">
                      {benefit.number}
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-wastely-deep">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-wastely-sub">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATIONS
      ====================================================== */}

      <section className="border-y border-wastely-line bg-wastely-bg-soft py-16 sm:py-20 lg:py-24">
        <div className="wastely-container">
          <SectionHeading
            eyebrow="Applications"
            title="Evaluate the treatment against the wastewater source."
            description="Grease-trap biological treatment may be relevant to facilities that generate FOG-bearing wastewater. Application suitability should be assessed rather than assumed from the facility type alone."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {applications.map((application) => {
              const Icon = application.icon;

              return (
                <article
                  key={application.title}
                  className="border border-wastely-line bg-white p-6 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft text-wastely-blue">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-wastely-deep">
                    {application.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-wastely-sub">
                    {application.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          DOSING AND OPERATION
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Dosing & operation"
                title="Dosing must follow the actual site conditions."
                description="The supplied user guide provides a reference dosing rate and mixing instructions, but explicitly states that the optimal rate depends on several operating variables."
              />

              <div className="mt-8 border border-wastely-line bg-wastely-bg-soft p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-wastely-blue">
                  Reference in supplied guide
                </p>

                <p className="mt-3 text-3xl font-bold tracking-tight text-wastely-deep sm:text-4xl">
                  10 mg/L
                </p>

                <p className="mt-3 text-sm leading-7 text-wastely-sub">
                  The guide states 10 mg/L of Aqua FOG powder per litre of
                  grease-trap flow as a reference dosage rate. It also states
                  that dosage can be varied to meet site objectives.
                </p>

                <div className="mt-5 border-t border-wastely-line pt-5">
                  <p className="text-sm leading-7 text-wastely-sub">
                    <strong className="font-semibold text-wastely-deep">
                      Not a universal dosing instruction.
                    </strong>{" "}
                    Confirm the current product documentation, flow basis,
                    dosing equipment and application requirements before
                    using this figure operationally.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold tracking-tight text-wastely-deep">
                What needs to be assessed?
              </h3>

              <p className="mt-3 text-sm leading-7 text-wastely-sub">
                These factors are identified in the supplied guide or are
                necessary to establish a suitable site-specific operating
                approach.
              </p>

              <div className="mt-6 divide-y divide-wastely-line border-y border-wastely-line">
                {assessmentFactors.map((factor, index) => (
                  <div key={factor} className="flex gap-4 py-4">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-wastely-blue"
                      strokeWidth={1.7}
                    />

                    <p className="text-sm leading-7 text-wastely-sub">
                      {factor}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex gap-3 border border-wastely-line p-5">
                <ShieldCheck
                  size={21}
                  className="mt-0.5 shrink-0 text-wastely-blue"
                  strokeWidth={1.7}
                />

                <p className="text-sm leading-7 text-wastely-sub">
                  The guide specifies a chlorine level at or below 3 ppm and
                  a pH range of 4.5–9.0. These are manufacturer-document
                  references, not a substitute for confirming current
                  instructions and actual site compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OPERATING CONSIDERATIONS
      ====================================================== */}

      <section className="border-y border-wastely-line bg-wastely-bg-soft py-16 sm:py-20 lg:py-24">
        <div className="wastely-container">
          <SectionHeading
            eyebrow="System compatibility"
            title="Review the existing process before introducing biological treatment."
            description="The dosing method and expected outcome depend on the existing grease trap, wastewater characteristics and the other chemicals used at the site."
          />

          <div className="mt-10 grid gap-px border border-wastely-line bg-wastely-line md:grid-cols-2">
            {operatingConsiderations.map((item, index) => (
              <article key={item.title} className="bg-white p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-wastely-blue">
                  Consideration {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-lg font-bold text-wastely-deep">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-wastely-sub">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ASSESSMENT
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="wastely-container">
          <div className="grid gap-8 border border-wastely-line p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-wastely-blue">
                Discuss your wastewater conditions
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-wastely-deep sm:text-4xl">
                Start with the grease trap, the wastewater and the treatment objective.
              </h2>

              <p className="mt-5 text-base leading-8 text-wastely-sub">
                Share your site type, approximate wastewater flow, grease-trap
                arrangement, current operating challenges and any known
                wastewater-quality information. These details help establish
                whether a biological FOG-management approach warrants
                further evaluation.
              </p>
            </div>

            <div className="lg:pl-6">
              <AssessmentLink />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}