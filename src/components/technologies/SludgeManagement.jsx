import { Link } from "react-router-dom";

import {
  ArrowRight,
  Factory,
  Gauge,
  Layers3,
  Package,
  Recycle,
  Settings2,
  SlidersHorizontal,
  Thermometer,
  Truck,
  Waves,
  Wind,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| EXISTING WASTELY AQUA IMAGES
|--------------------------------------------------------------------------
*/

import sludgeHero from "../../assets/images/sludge-dewatering-transformed.png";
import sludgePlant from "../../assets/images/sludge dewatering.png";
import sludgeDryer from "../../assets/images/sludge-dryer.png";
import sludgeGranules from "../../assets/images/sludge-granules.png";

/*
|--------------------------------------------------------------------------
| IMAGES EXTRACTED FROM SUPPLIED SLUDGE DRYER DOCUMENT
|--------------------------------------------------------------------------
|
| Copy these files into:
|
| src/assets/images/
|
| sludge-dehydrator-reference.jpeg
| rotary-screen-reference.jpeg
| sludge-dryer-reference.jpeg
| pp-mesh-belt-reference.jpeg
| sludge-dryer-worksite-reference.jpeg
|
*/

import sludgeDehydrator from "../../assets/images/sludge-dehydrator-reference.jpeg";
import rotaryScreen from "../../assets/images/rotary-screen-reference.jpeg";
import sludgeDryerReference from "../../assets/images/sludge-dryer-reference.jpeg";
import ppMeshBelt from "../../assets/images/pp-mesh-belt-reference.jpeg";
import sludgeDryerWorksite from "../../assets/images/sludge-dryer-worksite-reference.jpeg";

/*
|--------------------------------------------------------------------------
| TECHNOLOGY HIERARCHY
|--------------------------------------------------------------------------
*/

const sludgeSystems = [
  {
    number: "01",
    title: "Sludge Dewatering",
    description:
      "Mechanical dewatering systems used to reduce water content before downstream sludge drying, handling or disposal.",
    icon: Waves,

    systems: [
      {
        name: "Multi Disc Screw Press",
        description:
          "Mechanical sludge dewatering technology for reducing water content before subsequent handling or treatment.",
        icon: Settings2,
        status: "Dewatering",
      },
    ],
  },

  {
    number: "02",
    title: "Sludge Drying",
    description:
      "Drying systems used when further moisture reduction is required after dewatering.",
    icon: Thermometer,

    systems: [
      {
        name: "Paddle Dryer",
        description:
          "Thermal drying equipment for controlled moisture reduction of suitable sludge streams.",
        icon: Factory,
        status: "Drying",
      },

      {
        name: "Low Temperature Sludge Dryer",
        description:
          "Low-temperature drying approach for controlled moisture extraction and dry-solids handling.",
        icon: Wind,
        status: "Drying",
      },
    ],
  },
];

/*
|--------------------------------------------------------------------------
| LOW TEMPERATURE DRYER CONFIGURATIONS
|--------------------------------------------------------------------------
*/

const dryerConfigurations = [
  {
    number: "01",
    title: "Heat Pump Drying",
    description:
      "A low-temperature drying configuration using hot-air circulation, dehumidification and moisture extraction.",
  },

  {
    number: "02",
    title: "Belt Type",
    description:
      "A low-temperature belt-type drying configuration using a mesh-belt conveying arrangement.",
  },

  {
    number: "03",
    title: "Waste Heat Type",
    description:
      "A drying configuration using available heat sources with heat regeneration and controlled air circulation.",
  },

  {
    number: "04",
    title: "Container Type",
    description:
      "A container-type low-temperature drying configuration for suitable sludge cake applications.",
  },
];

/*
|--------------------------------------------------------------------------
| PROCESS STAGES
|--------------------------------------------------------------------------
*/

const processStages = [
  {
    number: "01",
    title: "Sludge Feed",
    description:
      "Sludge enters the management process according to the upstream treatment and dewatering arrangement.",
    icon: Waves,
  },

  {
    number: "02",
    title: "Dewatering",
    description:
      "Mechanical dewatering reduces water content and prepares the sludge for subsequent handling or drying.",
    icon: Settings2,
  },

  {
    number: "03",
    title: "Drying",
    description:
      "Where required, controlled thermal drying removes additional moisture from the dewatered material.",
    icon: Thermometer,
  },

  {
    number: "04",
    title: "Dry Solids",
    description:
      "The treated material leaves the process as a substantially drier solid for its next handling stage.",
    icon: Package,
  },
];

/*
|--------------------------------------------------------------------------
| ENGINEERING CONSIDERATIONS
|--------------------------------------------------------------------------
*/

const engineeringConsiderations = [
  {
    number: "01",
    title: "Sludge Characteristics",
    description:
      "Feed condition, moisture content, solids characteristics and upstream treatment influence the required process.",
    icon: SlidersHorizontal,
  },

  {
    number: "02",
    title: "Required Dryness",
    description:
      "The target moisture condition should be defined around handling, transportation, storage or downstream use.",
    icon: Gauge,
  },

  {
    number: "03",
    title: "Plant Integration",
    description:
      "The system needs to work with existing sludge handling, feeding, collection and discharge arrangements.",
    icon: Layers3,
  },

  {
    number: "04",
    title: "Material Handling",
    description:
      "Dry solids handling, storage, transport and final destination form part of the overall process design.",
    icon: Truck,
  },
];

/*
|--------------------------------------------------------------------------
| OPERATIONAL OUTCOMES
|--------------------------------------------------------------------------
*/

const operationalOutcomes = [
  {
    number: "01",
    title: "Reduced Sludge Handling",
    description:
      "Lower moisture content can simplify subsequent storage and transportation compared with wetter sludge streams.",
    icon: Truck,
  },

  {
    number: "02",
    title: "Controlled Moisture Reduction",
    description:
      "A defined dewatering and drying process provides controlled conditions for reducing water content.",
    icon: Thermometer,
  },

  {
    number: "03",
    title: "Process Integration",
    description:
      "Dewatering and drying can be considered together with upstream treatment and downstream solids handling.",
    icon: Layers3,
  },

  {
    number: "04",
    title: "Downstream Flexibility",
    description:
      "Drier solids can provide more practical options for storage, transportation and subsequent processing.",
    icon: Recycle,
  },
];

/*
|--------------------------------------------------------------------------
| APPLICATIONS
|--------------------------------------------------------------------------
*/

const applications = [
  {
    title: "Municipal Wastewater",
    description:
      "Sludge management systems for sewage and municipal wastewater treatment facilities.",
    icon: Factory,
  },

  {
    title: "Industrial Wastewater",
    description:
      "Sludge handling and drying applications where moisture reduction is required before further management.",
    icon: Layers3,
  },

  {
    title: "Process Industries",
    description:
      "Applications where process sludge creates significant handling, storage or transportation requirements.",
    icon: Waves,
  },

  {
    title: "Resource Recovery",
    description:
      "Moisture reduction can form part of a wider process before evaluating downstream recovery or utilization routes.",
    icon: Recycle,
  },
];

/*
|--------------------------------------------------------------------------
| DESIGN INPUTS
|--------------------------------------------------------------------------
*/

const designParameters = [
  "Feed sludge condition",
  "Moisture target",
  "Required throughput",
  "Available installation area",
  "Upstream dewatering arrangement",
  "Dry-solids handling",
  "Storage requirements",
  "Final disposal or reuse route",
];

/*
|--------------------------------------------------------------------------
| SUPPORTING EQUIPMENT
|--------------------------------------------------------------------------
*/

const supportingEquipment = [
  {
    number: "01",
    title: "Sludge Dewatering",
    description:
      "Dewatering equipment can prepare sludge for subsequent drying or handling.",
    image: sludgeDehydrator,
  },

  {
    number: "02",
    title: "Rotary Screening",
    description:
      "Screening can form part of upstream treatment where larger particles need to be separated.",
    image: rotaryScreen,
  },

  {
    number: "03",
    title: "Sludge Drying",
    description:
      "Drying equipment provides further moisture reduction where the required solids condition demands it.",
    image: sludgeDryerReference,
  },

  {
    number: "04",
    title: "Installed Drying Systems",
    description:
      "Drying equipment can be integrated with feeding, cooling, control and dry-solids handling systems.",
    image: sludgeDryerWorksite,
  },
];

/*
|--------------------------------------------------------------------------
| SMALL COMPONENTS
|--------------------------------------------------------------------------
*/

const SectionHeading = ({
  eyebrow,
  title,
  description,
  dark = false,
}) => {
  return (
    <div className="max-w-3xl">
      <div
        className={`${
          dark
            ? "text-wastely-cyan"
            : "wastely-section-eyebrow"
        }`}
      >
        {eyebrow}
      </div>

      <h2
        className={`mt-2 text-[1.9rem] font-bold leading-[1.15] tracking-[-0.025em] sm:text-[2.35rem] ${
          dark ? "text-white" : "text-wastely-deep"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
            dark
              ? "text-white/70"
              : "text-wastely-sub"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

const SystemCard = ({ system }) => {
  const Icon = system.icon;

  return (
    <div className="group border-t border-wastely-line p-6 first:border-t-0 sm:p-7">
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
          <Icon
            size={20}
            strokeWidth={1.7}
            className="text-wastely-blue"
          />
        </div>

        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
          {system.status}
        </span>
      </div>

      <h4 className="mt-6 text-base font-bold text-wastely-deep">
        {system.name}
      </h4>

      <p className="mt-2 text-sm leading-6 text-wastely-sub">
        {system.description}
      </p>
    </div>
  );
};

const ProblemCell = ({
  number,
  title,
  description,
}) => {
  return (
    <article className="border-b border-r border-wastely-line bg-white p-7">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
          {number}
        </span>

        <div className="h-px w-10 bg-wastely-line" />
      </div>

      <h3 className="mt-8 text-lg font-bold text-wastely-deep">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-wastely-sub">
        {description}
      </p>
    </article>
  );
};

const DryerConfiguration = ({
  number,
  title,
  description,
}) => {
  return (
    <article className="border-b border-r border-wastely-line p-7 sm:p-8">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
          {number}
        </span>

        <div className="h-px w-8 bg-wastely-line" />
      </div>

      <h3 className="mt-6 text-lg font-bold text-wastely-deep">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-wastely-sub">
        {description}
      </p>
    </article>
  );
};

const EquipmentImageCard = ({
  image,
  number,
  title,
  description,
}) => {
  return (
    <article className="border-b border-r border-wastely-line bg-white">
      <div className="aspect-[16/10] overflow-hidden bg-wastely-bg-soft">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="p-7 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
            {number}
          </span>

          <div className="h-px w-10 bg-wastely-line" />
        </div>

        <h3 className="mt-6 text-xl font-bold text-wastely-deep">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-wastely-sub">
          {description}
        </p>
      </div>
    </article>
  );
};

const EngineeringItem = ({
  number,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <article className="border-b border-wastely-line py-6 last:border-b-0">
      <div className="flex gap-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wastely-line bg-white">
          <Icon
            size={18}
            strokeWidth={1.7}
            className="text-wastely-blue"
          />
        </div>

        <div>
          <div className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
            {number}
          </div>

          <h3 className="mt-1 text-base font-bold text-wastely-deep">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-wastely-sub">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

const OutcomeItem = ({
  number,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <article className="border-t border-white/15 py-7">
      <div className="flex gap-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 bg-white/5">
          <Icon
            size={19}
            strokeWidth={1.6}
            className="text-wastely-cyan"
          />
        </div>

        <div>
          <div className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
            {number}
          </div>

          <h3 className="mt-1 text-base font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/65">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/

const SludgeManagement = () => {
  return (
    <main className="bg-wastely-bg text-wastely-ink">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-wastely-line bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid min-h-[680px] items-stretch lg:grid-cols-[0.88fr_1.12fr]">

            {/* LEFT */}

            <div className="flex flex-col justify-center py-16 lg:py-20 lg:pr-16">

              <div className="wastely-section-eyebrow">
                Treatment Technology / Sludge Management
              </div>

              <h1 className="mt-3 max-w-2xl text-[2.7rem] font-bold leading-[1.06] tracking-[-0.035em] text-wastely-deep sm:text-5xl lg:text-[3.55rem]">
                Manage sludge from dewatering to its final handling stage.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-wastely-sub sm:text-lg">
                Sludge management combines mechanical dewatering and,
                where required, drying systems to reduce moisture and
                prepare sludge for storage, transportation, disposal
                or further processing.
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
                  to="/services/technology-process"
                  className="wastely-btn wastely-btn-secondary"
                >
                  View Process Engineering
                </Link>

              </div>

              {/* PROCESS RAIL */}

              <div className="mt-12 grid max-w-xl grid-cols-2 border-y border-wastely-line sm:grid-cols-4">

                {[
                  ["01", "Dewater"],
                  ["02", "Dry"],
                  ["03", "Handle"],
                  ["04", "Manage"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="border-r border-wastely-line px-4 py-4 last:border-r-0"
                  >
                    <div className="text-[9px] font-bold tracking-[0.14em] text-wastely-cyan">
                      {number}
                    </div>

                    <div className="mt-1 text-xs font-semibold text-wastely-deep">
                      {label}
                    </div>
                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="relative min-h-[540px] overflow-hidden lg:min-h-0">

              <img
                src={sludgeHero}
                alt="Sludge management and dewatering system"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-wastely-bg-soft via-transparent to-transparent lg:from-wastely-bg-soft/80 lg:via-wastely-bg-soft/10" />

              {/* TECHNICAL OVERLAY */}

              <div className="absolute bottom-6 left-5 right-5 bg-wastely-deep/90 sm:left-auto sm:w-[390px]">

                <div className="border-b border-white/15 px-5 py-4">

                  <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                    Sludge management flow
                  </div>

                  <div className="mt-1 text-sm font-semibold text-white">
                    Dewatering → drying → dry-solids handling
                  </div>

                </div>

                <div className="grid grid-cols-4">

                  {[
                    "Wet Feed",
                    "Dewater",
                    "Dry",
                    "Solids",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="border-r border-white/15 px-3 py-4 last:border-r-0"
                    >
                      <div className="text-[8px] font-bold text-wastely-cyan">
                        0{index + 1}
                      </div>

                      <div className="mt-1 text-[10px] font-semibold text-white">
                        {item}
                      </div>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* WAVE */}

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

      {/* =========================================================
          TECHNOLOGY HIERARCHY
      ========================================================= */}

      <section className="wastely-section wastely-section-white">

        <div className="wastely-container">

          <SectionHeading
            eyebrow="Sludge technology hierarchy"
            title="Dewatering first. Drying where further moisture reduction is required."
            description="Sludge management is not a single piece of equipment. The appropriate configuration depends on the condition of the sludge, the required moisture reduction and what happens to the solids afterwards."
          />

          <div className="mt-12 space-y-8">

            {sludgeSystems.map((area) => {
              const AreaIcon = area.icon;

              return (
                <section
                  key={area.number}
                  className="border border-wastely-line bg-white"
                >

                  <div className="grid lg:grid-cols-[0.72fr_1.28fr]">

                    {/* AREA */}

                    <div className="border-b border-wastely-line bg-wastely-bg-soft p-7 sm:p-9 lg:border-b-0 lg:border-r">

                      <div className="flex items-start justify-between">

                        <div className="flex h-12 w-12 items-center justify-center border border-wastely-line bg-white">
                          <AreaIcon
                            size={22}
                            strokeWidth={1.7}
                            className="text-wastely-blue"
                          />
                        </div>

                        <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                          {area.number}
                        </span>

                      </div>

                      <h3 className="mt-8 text-2xl font-bold text-wastely-deep">
                        {area.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-wastely-sub">
                        {area.description}
                      </p>

                    </div>

                    {/* SYSTEMS */}

                    <div className="bg-white">

                      {area.systems.map((system) => (
                        <SystemCard
                          key={system.name}
                          system={system}
                        />
                      ))}

                    </div>

                  </div>

                </section>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          EQUIPMENT IMAGE GRID
      ========================================================= */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <SectionHeading
            eyebrow="Sludge management equipment"
            title="Dewatering, drying and supporting equipment work as one sludge system."
            description="The sludge treatment arrangement can include primary dewatering and drying equipment together with upstream screening and downstream solids handling."
          />

          <div className="mt-12 grid border-l border-t border-wastely-line bg-wastely-line md:grid-cols-2">

            {supportingEquipment.map((item) => (
              <EquipmentImageCard
                key={item.number}
                {...item}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          WHY SLUDGE MANAGEMENT MATTERS
      ========================================================= */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                Why sludge management matters
              </div>

              <h2 className="wastely-section-title">
                Water in sludge becomes a handling problem.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                Sludge can contain significant amounts of water even
                after conventional treatment. That moisture affects the
                amount of material that must be stored, transported and
                ultimately managed.
              </p>

            </div>

            <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2">

              <ProblemCell
                number="01"
                title="Storage"
                description="More water means more material occupying storage capacity."
              />

              <ProblemCell
                number="02"
                title="Transport"
                description="Moist sludge increases the material that has to be moved."
              />

              <ProblemCell
                number="03"
                title="Handling"
                description="Wet material can be more difficult to handle consistently through downstream processes."
              />

              <ProblemCell
                number="04"
                title="Disposal"
                description="Moisture content affects the practical burden of sludge disposal."
              />

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PROCESS SEQUENCE
      ========================================================= */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <SectionHeading
            eyebrow="Process sequence"
            title="A controlled path from wet sludge to managed dry solids."
            description="The exact configuration depends on feed characteristics, required moisture reduction, throughput and downstream solids handling requirements."
          />

          <div className="relative mt-12">

            <div className="absolute left-0 right-0 top-[31px] hidden h-px bg-wastely-line lg:block" />

            <div className="grid gap-0 border-l border-t border-wastely-line lg:grid-cols-4">

              {processStages.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="relative border-b border-r border-wastely-line bg-white p-7 lg:min-h-[290px]"
                  >

                    <div className="relative z-10 flex items-center justify-between">

                      <div className="flex h-14 w-14 items-center justify-center border border-wastely-cyan bg-white">

                        <Icon
                          size={23}
                          strokeWidth={1.6}
                          className="text-wastely-blue"
                        />

                      </div>

                      <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                        {item.number}
                      </span>

                    </div>

                    <h3 className="mt-8 text-lg font-bold text-wastely-deep">
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

      {/* =========================================================
          LOW TEMPERATURE SLUDGE DRYER
      ========================================================= */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

            {/* LEFT */}

            <div>

              <div className="wastely-section-eyebrow">
                Low Temperature Sludge Dryer
              </div>

              <h2 className="wastely-section-title">
                Different drying configurations for different plant conditions.
              </h2>

              <p className="mt-5 text-sm leading-7 text-wastely-sub">
                The supplied dryer documentation describes several
                low-temperature drying configurations. The appropriate
                arrangement depends on sludge condition, available heat
                source, throughput and plant integration requirements.
              </p>

              <div className="mt-8 border border-wastely-line bg-wastely-bg-soft p-3">

                <img
                  src={sludgeDryer}
                  alt="Low temperature sludge drying equipment"
                  className="aspect-[4/3] w-full object-cover"
                />

              </div>

            </div>

            {/* RIGHT */}

            <div className="border border-wastely-line">

              <div className="grid sm:grid-cols-2">

                {dryerConfigurations.map((item) => (
                  <DryerConfiguration
                    key={item.number}
                    {...item}
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          HEAT PUMP DRYING PRINCIPLE
      ========================================================= */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            <div className="border border-wastely-line bg-white p-3">

              <img
                src={sludgeDryerWorksite}
                alt="Industrial sludge drying equipment"
                className="aspect-[4/3] w-full object-cover"
              />

            </div>

            <div>

              <div className="wastely-section-eyebrow">
                Drying mechanism
              </div>

              <h2 className="wastely-section-title">
                Controlled air circulation, dehumidification and drying.
              </h2>

              <p className="mt-5 text-sm leading-7 text-wastely-sub">
                The supplied document describes a heat-pump low-temperature
                drying process in which hot air circulates through the drying
                system, moisture is evaporated from the sludge and the
                moisture is subsequently condensed and removed.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Hot-air circulation",
                  "Moisture evaporation",
                  "Dehumidification",
                  "Condensation",
                  "Dried sludge discharge",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-wastely-line pb-4"
                  >

                    <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
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

      {/* =========================================================
          PP MESH BELT
      ========================================================= */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            <div className="border border-wastely-line bg-white p-3">

              <img
                src={ppMeshBelt}
                alt="PP mesh belt used in sludge drying equipment"
                className="aspect-[4/3] w-full object-cover"
              />

            </div>

            <div>

              <div className="wastely-section-eyebrow">
                Dryer Component
              </div>

              <h2 className="wastely-section-title">
                PP mesh belt for the drying conveyance system.
              </h2>

              <p className="mt-5 text-sm leading-7 text-wastely-sub">
                The supplied dryer documentation identifies a PP mesh
                belt as part of the drying system. The belt forms part
                of the conveying arrangement through the dryer rather
                than being a separate treatment technology.
              </p>

              <div className="mt-7 border-l-2 border-wastely-cyan pl-5">

                <div className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-blue">
                  Maintenance reference
                </div>

                <p className="mt-2 text-sm leading-6 text-wastely-sub">
                  The document specifies periodic inspection of the
                  PP mesh belt for deformation, cracking or damage.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ENGINEERING CONSIDERATIONS
      ========================================================= */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">

            {/* IMAGE */}

            <div className="relative border border-wastely-line bg-white p-3">

              <div className="relative h-full min-h-[480px] overflow-hidden">

                <img
                  src={sludgePlant}
                  alt="Sludge dewatering plant equipment"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wastely-deep/90 to-transparent p-7 pt-20">

                  <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                    Engineering requirement
                  </div>

                  <div className="mt-2 max-w-md text-xl font-bold leading-tight text-white">
                    Define the sludge condition before selecting the drying arrangement.
                  </div>

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <div>

              <SectionHeading
                eyebrow="Engineering considerations"
                title="The equipment follows the sludge requirement."
                description="A practical sludge management system starts with the characteristics of the feed material and the required condition of the final solids."
              />

              <div className="mt-8">

                {engineeringConsiderations.map((item) => (
                  <EngineeringItem
                    key={item.number}
                    {...item}
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          OPERATIONAL OUTCOMES
      ========================================================= */}

      <section className="relative overflow-hidden bg-wastely-deep py-20 sm:py-24">

        {/* ENGINEERING GRID */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* CONTOUR LINES */}

        <svg
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-10"
          viewBox="0 0 600 700"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M100 0C230 90 430 70 580 170"
            stroke="#2FB4CE"
            strokeWidth="1"
          />

          <path
            d="M50 80C220 190 430 130 620 270"
            stroke="#2FB4CE"
            strokeWidth="1"
          />

          <path
            d="M10 190C170 280 410 220 650 390"
            stroke="#2FB4CE"
            strokeWidth="1"
          />

          <path
            d="M0 310C190 370 420 340 680 520"
            stroke="#2FB4CE"
            strokeWidth="1"
          />
        </svg>

        <div className="relative wastely-container">

          <SectionHeading
            eyebrow="Practical outcomes"
            title="The objective is controlled sludge handling."
            description="Dewatering and drying are selected around the required solids condition, plant integration and downstream handling route."
            dark
          />

          <div className="mt-10 grid gap-x-12 lg:grid-cols-2">

            {operationalOutcomes.map((item) => (
              <OutcomeItem
                key={item.number}
                {...item}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          DRY SOLIDS
      ========================================================= */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

            <div>

              <div className="wastely-section-eyebrow">
                Dry solids
              </div>

              <h2 className="wastely-section-title">
                What happens after drying is part of the design.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-wastely-sub">
                Sludge drying should not be considered in isolation.
                Storage, conveying, transportation, disposal or a
                potential downstream utilization route should be
                considered when defining the required solids condition.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Storage",
                  "Conveying",
                  "Transportation",
                  "Disposal",
                  "Further Processing",
                  "Potential Recovery",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-wastely-line bg-wastely-bg-soft px-4 py-4"
                  >

                    <span className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold text-wastely-deep">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            <div className="border border-wastely-line bg-wastely-bg-soft p-3">

              <img
                src={sludgeGranules}
                alt="Dried sludge solids"
                className="aspect-square w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          APPLICATIONS
      ========================================================= */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <SectionHeading
            eyebrow="Applications"
            title="Sludge management across different treatment environments."
            description="The equipment arrangement is defined according to the source of sludge, process conditions and downstream handling requirements."
          />

          <div className="mt-12 grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2 lg:grid-cols-4">

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

                  <h3 className="mt-7 text-base font-bold text-wastely-deep">
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

      {/* =========================================================
          SYSTEM DESIGN INPUTS
      ========================================================= */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                Project definition
              </div>

              <h2 className="wastely-section-title">
                Define the operating requirement before sizing the system.
              </h2>

              <p className="mt-5 text-sm leading-7 text-wastely-sub">
                Sludge management equipment should be considered as part
                of the wider treatment plant rather than as an isolated
                machine.
              </p>

            </div>

            <div className="grid border-l border-t border-wastely-line sm:grid-cols-2">

              {designParameters.map((item, index) => (
                <div
                  key={item}
                  className="border-b border-r border-wastely-line p-6"
                >

                  <div className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="mt-3 text-sm font-semibold text-wastely-deep">
                    {item}
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          TECHNOLOGY → SERVICES HANDOFF
      ========================================================= */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <SectionHeading
            eyebrow="Technology integration"
            title="Sludge technology continues into plant engineering and operation."
            description="The technology selection is only one part of the project. Process definition, plant integration and ongoing operation all influence long-term performance."
          />

          <div className="mt-12 grid border-l border-t border-wastely-line bg-wastely-line md:grid-cols-3">

            <Link
              to="/services/technology-process"
              className="group border-b border-r border-wastely-line bg-white p-7 transition-colors hover:bg-wastely-bg-soft"
            >

              <div className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
                01
              </div>

              <h3 className="mt-5 text-lg font-bold text-wastely-deep">
                Technology Process
              </h3>

              <p className="mt-3 text-sm leading-6 text-wastely-sub">
                Define the treatment process and equipment configuration
                around the project requirement.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-wastely-blue">
                View Service
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>

            </Link>


            <Link
              to="/services/operation-maintenance"
              className="group border-b border-r border-wastely-line bg-white p-7 transition-colors hover:bg-wastely-bg-soft"
            >

              <div className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
                02
              </div>

              <h3 className="mt-5 text-lg font-bold text-wastely-deep">
                Operation & Maintenance
              </h3>

              <p className="mt-3 text-sm leading-6 text-wastely-sub">
                Keep the treatment plant, equipment and operating
                processes supported after installation.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-wastely-blue">
                View Service
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>

            </Link>


            <Link
              to="/services/amc-services"
              className="group border-b border-r border-wastely-line bg-white p-7 transition-colors hover:bg-wastely-bg-soft"
            >

              <div className="text-[10px] font-bold tracking-[0.14em] text-wastely-cyan">
                03
              </div>

              <h3 className="mt-5 text-lg font-bold text-wastely-deep">
                AMC Services
              </h3>

              <p className="mt-3 text-sm leading-6 text-wastely-sub">
                Planned maintenance and technical support for installed
                treatment systems.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-wastely-blue">
                View Service
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL NAVIGATION HANDOFF
          No CTA section here — Footer owns the main CTA.
      ========================================================= */}

      <section className="border-t border-wastely-line bg-white">

        <div className="wastely-container">

          <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <div className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-cyan">
                Sludge Management
              </div>

              <p className="mt-1 text-sm text-wastely-sub">
                Explore the wider Wastely Aqua technology and service framework.
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <Link
                to="/technologies"
                className="wastely-btn wastely-btn-secondary"
              >
                All Technologies
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/services/technology-process"
                className="wastely-btn wastely-btn-primary"
              >
                Technology Process
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default SludgeManagement;