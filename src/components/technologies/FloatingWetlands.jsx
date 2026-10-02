import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Fish,
  Flower2,
  Leaf,
  Orbit,
  Trees,
  Waves,
} from "lucide-react";

import floating from "../../assets/images/Floating-Wetlands.png";
import floating1 from "../../assets/images/Floating-wetland.jpg";
import floating2 from "../../assets/images/Floating-wetland.jpeg";
import floating3 from "../../assets/images/floating-custom.png";

/* =========================================================
   DATA
========================================================= */

const ecologicalFunctions = [
  {
    number: "01",
    title: "Root-Zone Filtration",
    description:
      "Plant root systems create active treatment zones within the water body and provide surfaces for biological activity.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Microbial Attachment",
    description:
      "Root and media surfaces support microbial communities involved in the biological treatment process.",
    icon: Orbit,
  },
  {
    number: "03",
    title: "Nutrient Uptake",
    description:
      "Wetland vegetation can take up nutrients such as nitrogen and phosphorus as part of the ecological treatment system.",
    icon: Droplets,
  },
  {
    number: "04",
    title: "Habitat Creation",
    description:
      "Floating vegetation can introduce habitat and ecological structure into suitable aquatic environments.",
    icon: Fish,
  },
];

const systemElements = [
  {
    number: "01",
    title: "Floating Platform",
    description:
      "The engineered floating structure supports vegetation and keeps the treatment zone positioned at the water surface.",
    icon: Waves,
  },
  {
    number: "02",
    title: "Plant Root Zone",
    description:
      "Roots extend into the water and form an active interface for nutrient uptake and biological activity.",
    icon: Leaf,
  },
  {
    number: "03",
    title: "Microbial Zone",
    description:
      "Biological communities develop around roots and supporting media and contribute to pollutant transformation.",
    icon: Orbit,
  },
  {
    number: "04",
    title: "Waterbody Integration",
    description:
      "The floating system is positioned according to waterbody conditions, treatment objectives and site requirements.",
    icon: Trees,
  },
];

const treatmentPathway = [
  {
    number: "01",
    title: "Float",
    description:
      "Engineered platform remains positioned at the water surface.",
  },
  {
    number: "02",
    title: "Grow",
    description:
      "Vegetation establishes a root zone extending into the water.",
  },
  {
    number: "03",
    title: "Treat",
    description:
      "Roots and microbial communities contribute to biological treatment.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "The wetland becomes part of the wider waterbody restoration strategy.",
  },
];

const applications = [
  {
    title: "Urban Lakes",
    description:
      "Floating wetland systems can be integrated into urban water bodies where ecological treatment and landscape value are both important.",
    icon: Droplets,
  },
  {
    title: "Ponds & Reservoirs",
    description:
      "Suitable configurations can be considered for nutrient management and ecological improvement in larger open-water areas.",
    icon: Waves,
  },
  {
    title: "Ecological Parks",
    description:
      "Floating systems can form part of waterbody restoration projects where treatment infrastructure must also fit the surrounding landscape.",
    icon: Trees,
  },
  {
    title: "Aquatic Ecosystems",
    description:
      "Wetland vegetation can introduce additional ecological structure while contributing to water-quality management.",
    icon: Fish,
  },
];

const treatmentOutcomes = [
  "Organic pollutant treatment support",
  "Nutrient management",
  "Biological treatment surface",
  "Waterbody ecological improvement",
  "Habitat and biodiversity support",
  "Landscape integration",
];

const designOptions = [
  "Modular floating islands",
  "Custom floating configurations",
  "Landscape-integrated wetlands",
  "Floating ecological gardens",
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const FloatingWetlands = () => {
  return (
    <main className="bg-wastely-bg text-wastely-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-wastely-line bg-white">

        <div className="wastely-container">

          <div className="grid min-h-[720px] items-stretch lg:grid-cols-[0.92fr_1.08fr]">

            {/* LEFT CONTENT */}

            <div className="flex flex-col justify-center py-16 pr-0 lg:pr-16">

              <div className="wastely-section-eyebrow">
                Treatment Technology
              </div>

              <h1 className="mt-3 max-w-2xl text-[2.8rem] font-bold leading-[1.06] tracking-[-0.035em] text-wastely-deep sm:text-5xl lg:text-[3.7rem]">
                Turn part of the water surface into a treatment zone.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-wastely-sub sm:text-lg">
                Floating wetland systems combine engineered floating
                structures, vegetation and biological activity to support
                water-quality improvement and ecological restoration.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  to="/contact"
                  className="wastely-btn wastely-btn-primary"
                >
                  Request an Assessment
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/solutions/water-body-restoration"
                  className="wastely-btn wastely-btn-secondary"
                >
                  View Waterbody Restoration
                </Link>

              </div>

              <div className="mt-12 border-l-2 border-wastely-cyan pl-5">

                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-wastely-blue">
                  System Principle
                </div>

                <p className="mt-2 max-w-md text-sm leading-6 text-wastely-sub">
                  Floating structure + plant roots + microbial activity +
                  waterbody integration.
                </p>

              </div>

            </div>

            {/* RIGHT VISUAL */}

            <div className="relative min-h-[560px] overflow-hidden lg:min-h-0">

              <img
                src={floating2}
                alt="Floating wetland system on a water body"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent lg:from-white/35 lg:via-transparent lg:to-transparent" />

              <div className="absolute bottom-6 left-5 right-5 border border-white/30 bg-wastely-deep/85 p-5 sm:left-auto sm:w-[390px]">

                <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-wastely-cyan">
                  Ecological Treatment Interface
                </div>

                <div className="mt-4 grid grid-cols-4">

                  <FlowNode
                    number="01"
                    label="Platform"
                  />

                  <FlowNode
                    number="02"
                    label="Roots"
                  />

                  <FlowNode
                    number="03"
                    label="Microbes"
                  />

                  <FlowNode
                    number="04"
                    label="Water"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ECOLOGICAL TREATMENT
      ===================================================== */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                Ecological Treatment
              </div>

              <h2 className="wastely-section-title">
                A living treatment interface on the water surface.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                Floating wetlands use the interaction between plants, roots,
                microorganisms and the surrounding water to create additional
                biological treatment zones.
              </p>

            </div>

            <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2">

              {ecologicalFunctions.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="border-b border-r border-wastely-line bg-white p-7"
                  >

                    <div className="flex items-start justify-between">

                      <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft">

                        <Icon
                          size={20}
                          strokeWidth={1.7}
                          className="text-wastely-blue"
                        />

                      </div>

                      <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                        {item.number}
                      </span>

                    </div>

                    <h3 className="mt-7 text-lg font-bold text-wastely-deep">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-wastely-sub">
                      {item.description}
                    </p>

                  </article>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SYSTEM ANATOMY
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

            {/* IMAGE */}

            <div className="relative">

              <div className="border border-wastely-line bg-wastely-bg-soft p-3">

                <div className="relative overflow-hidden">

                  <img
                    src={floating}
                    alt="Floating wetland installation"
                    className="h-[430px] w-full object-cover sm:h-[570px]"
                  />

                  <div className="absolute left-5 top-5 border border-white/30 bg-wastely-deep/85 px-4 py-3">

                    <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                      System Anatomy
                    </div>

                    <div className="mt-1 text-xs font-semibold text-white">
                      Engineered ecological infrastructure
                    </div>

                  </div>

                </div>

                <div className="grid grid-cols-3 border-x border-b border-wastely-line">

                  <PlantSpec
                    label="Structure"
                    value="Floating"
                  />

                  <PlantSpec
                    label="Treatment"
                    value="Biological"
                  />

                  <PlantSpec
                    label="Integration"
                    value="Waterbody"
                  />

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="flex flex-col justify-center">

              <div className="wastely-section-eyebrow">
                System Components
              </div>

              <h2 className="wastely-section-title">
                Four parts work together.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                The floating platform is only the starting point. Treatment
                performance depends on how the structure, vegetation,
                biological activity and surrounding waterbody interact.
              </p>

              <div className="mt-9 border-t border-wastely-line">

                {systemElements.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="grid grid-cols-[45px_42px_1fr] gap-3 border-b border-wastely-line py-5"
                    >

                      <div className="text-xs font-bold tracking-[0.12em] text-wastely-cyan">
                        {item.number}
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center border border-wastely-line bg-wastely-bg-soft">

                        <Icon
                          size={17}
                          className="text-wastely-blue"
                          strokeWidth={1.7}
                        />

                      </div>

                      <div>

                        <h3 className="text-sm font-bold text-wastely-deep">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-wastely-sub">
                          {item.description}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ECOLOGICAL PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden bg-wastely-deep py-20 sm:py-24">

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
        >

          <path
            d="M-50 390 C180 250 290 480 520 320 S860 180 1250 280"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-50 430 C180 290 310 520 550 350 S900 220 1250 330"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-50 470 C190 330 320 560 580 380 S930 260 1250 370"
            fill="none"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

        </svg>

        <div className="wastely-container relative">

          <div className="max-w-3xl">

            <div className="wastely-section-eyebrow !text-wastely-cyan">
              Treatment Pathway
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              From floating structure to biological water treatment.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70">
              The floating wetland creates a sequence of physical support,
              root development, microbial activity and nutrient interaction.
            </p>

          </div>

          <div className="mt-14 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">

            {treatmentPathway.map((item) => (
              <DarkProcess
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="flex flex-col justify-between gap-6 border-b border-wastely-line pb-8 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <div className="wastely-section-eyebrow">
                Applications
              </div>

              <h2 className="wastely-section-title">
                Designed for open-water environments.
              </h2>

            </div>

            <Link
              to="/solutions/water-body-restoration"
              className="inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue"
            >
              Water Body Restoration
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="mt-8 grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2 lg:grid-cols-4">

            {applications.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border-b border-r border-wastely-line bg-white p-7"
                >

                  <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft">

                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="text-wastely-blue"
                    />

                  </div>

                  <h3 className="mt-7 text-lg font-bold text-wastely-deep">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-wastely-sub">
                    {item.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          TREATMENT OUTCOMES
      ===================================================== */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                Treatment Outcomes
              </div>

              <h2 className="wastely-section-title">
                More than a floating planter.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                Floating wetlands are best considered as one component of a
                wider ecological water-treatment strategy. The actual outcome
                depends on water quality, loading, plant selection, system
                configuration and site conditions.
              </p>

              <div className="mt-8 grid sm:grid-cols-2">

                {treatmentOutcomes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-t border-wastely-line py-4 pr-5"
                  >

                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-wastely-cyan"
                    />

                    <span className="text-sm font-medium text-wastely-deep">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            <div className="relative border border-wastely-line bg-white p-3">

              <img
                src={floating1}
                alt="Floating wetland ecological restoration"
                className="h-[380px] w-full object-cover sm:h-[500px]"
              />

              <div className="absolute bottom-7 left-7 right-7 border border-white/20 bg-wastely-deep/85 p-5">

                <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                  Ecological Infrastructure
                </div>

                <div className="mt-2 text-sm font-semibold text-white">
                  Water treatment + habitat + landscape integration
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SITE-SPECIFIC CONFIGURATION
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid overflow-hidden border border-wastely-line lg:grid-cols-[1.15fr_0.85fr]">

            <div className="relative min-h-[440px]">

              <img
                src={floating3}
                alt="Custom floating wetland landscape"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/75 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 max-w-md">

                <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                  Site-Specific Design
                </div>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Ecological infrastructure can be designed around the site.
                </h3>

              </div>

            </div>

            <div className="flex flex-col justify-center bg-wastely-bg-soft p-8 sm:p-10 lg:p-12">

              <div className="wastely-section-eyebrow">
                Configuration
              </div>

              <h2 className="text-2xl font-bold leading-tight text-wastely-deep sm:text-3xl">
                Modular systems for different waterbody conditions.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                Floating wetland configurations can be adapted to the
                characteristics of the waterbody, treatment requirement and
                surrounding landscape.
              </p>

              <div className="mt-7 border-t border-wastely-line">

                {designOptions.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-wastely-line py-4"
                  >

                    <span className="text-xs font-bold text-wastely-cyan">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold text-wastely-deep">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TECHNOLOGY → SOLUTION → SERVICE
      ===================================================== */}

      <section className="wastely-section-sm bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid border-y border-wastely-line md:grid-cols-3">

            <HandoffCard
              eyebrow="Technology"
              title="Treatment Technologies"
              description="Explore the wider treatment technologies available across the Wastely Aqua system."
              to="/technologies"
              linkText="Explore Technologies"
            />

            <HandoffCard
              eyebrow="Solution"
              title="Water Body Restoration"
              description="Site-level restoration combining assessment, intervention and long-term waterbody management."
              to="/solutions/water-body-restoration"
              linkText="View Solution"
            />

            <HandoffCard
              eyebrow="Service"
              title="Technology Process"
              description="Process engineering that determines how ecological treatment technologies fit the overall project."
              to="/services/technology-process"
              linkText="View Technology Process"
            />

          </div>

        </div>

      </section>

    </main>
  );
};

/* =========================================================
   SMALL COMPONENTS
========================================================= */

const FlowNode = ({ number, label }) => {
  return (
    <div className="border-r border-white/15 p-3 last:border-r-0">

      <div className="text-[8px] font-bold tracking-[0.12em] text-wastely-cyan">
        {number}
      </div>

      <div className="mt-1 text-[10px] font-semibold text-white">
        {label}
      </div>

    </div>
  );
};

const PlantSpec = ({ label, value }) => {
  return (
    <div className="border-r border-wastely-line p-4 last:border-r-0">

      <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-wastely-cyan">
        {label}
      </div>

      <div className="mt-1 text-xs font-semibold text-wastely-deep">
        {value}
      </div>

    </div>
  );
};

const DarkProcess = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="border-b border-r border-white/15 p-7">

      <div className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
        {number}
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/65">
        {description}
      </p>

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
    <div className="border-b border-wastely-line p-7 last:border-b-0 md:border-b-0 md:border-r md:p-9 md:last:border-r-0">

      <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
        {eyebrow}
      </div>

      <h3 className="mt-3 text-lg font-bold text-wastely-deep">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-wastely-sub">
        {description}
      </p>

      <Link
        to={to}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-wastely-blue"
      >
        {linkText}
        <ArrowRight size={15} />
      </Link>

    </div>
  );
};

export default FloatingWetlands;