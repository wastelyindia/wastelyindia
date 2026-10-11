import { Link } from "react-router-dom";

import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Droplets,
  Factory,
  FlaskConical,
  Layers3,
  Recycle,
  ShieldCheck,
  Waves,
} from "lucide-react";

import ifasHero from "../../assets/images/IFAS.jpg";
import membranePlant from "../../assets/images/membrane-plant.png";
import membraneSystem from "../../assets/images/membrane-system.png";
import membraneVideo from "../../assets/video/membrane.mp4";

/* =========================================================
   DATA
========================================================= */

const treatmentFunctions = [
  {
    number: "01",
    title: "IFAS",
    subtitle: "Biological Treatment",
    description:
      "Integrated Fixed-Film Activated Sludge combines suspended biological growth with attached biofilm media within the treatment process.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Membrane",
    subtitle: "Physical Separation",
    description:
      "Membrane processes provide controlled physical separation according to membrane type, feed quality and required treated-water characteristics.",
    icon: Database,
  },
];

const membraneTechnologies = [
  {
    number: "01",
    title: "Microfiltration",
    short: "MF",
    description:
      "Low-pressure membrane separation for suspended solids and particulate removal.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Ultrafiltration",
    short: "UF",
    description:
      "Membrane filtration for fine particulate and microbiological separation.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Nanofiltration",
    short: "NF",
    description:
      "Selective membrane separation for dissolved components and suitable water-quality applications.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Reverse Osmosis",
    short: "RO",
    description:
      "High-pressure membrane treatment for advanced purification and water-reuse applications.",
    icon: Cpu,
  },
];

const tertiaryStages = [
  {
    number: "01",
    title: "Fine Filtration",
    description:
      "Additional removal of fine suspended or particulate matter after the main biological treatment stages.",
  },
  {
    number: "02",
    title: "Membrane Filtration",
    description:
      "MF or UF can be considered where a controlled physical separation stage is required.",
  },
  {
    number: "03",
    title: "Advanced Separation",
    description:
      "NF or RO can be considered for applications requiring higher levels of dissolved-component separation.",
  },
  {
    number: "04",
    title: "Disinfection",
    description:
      "A suitable disinfection stage can be incorporated according to the final water-quality objective.",
  },
];

const treatmentArchitecture = [
  {
    number: "01",
    title: "Characterize the Water",
    description:
      "Understand the source, flow, contaminants and required treated-water quality.",
  },
  {
    number: "02",
    title: "Define Biological Requirements",
    description:
      "Determine whether additional biological capacity or attached-growth treatment is required.",
  },
  {
    number: "03",
    title: "Define Separation Requirements",
    description:
      "Determine whether membrane separation is required and identify the appropriate membrane stage.",
  },
  {
    number: "04",
    title: "Configure the Treatment Train",
    description:
      "Integrate biological treatment, membrane separation and supporting process stages.",
  },
  {
    number: "05",
    title: "Define Tertiary Treatment",
    description:
      "Determine whether additional filtration, advanced separation or disinfection is required before final discharge or reuse.",
  },
  {
    number: "06",
    title: "Match the Final Application",
    description:
      "Configure downstream treatment according to discharge, reuse or process-water requirements.",
  },
];

const systemCharacteristics = [
  {
    number: "01",
    title: "Treatment Capacity",
    description:
      "IFAS can increase biological treatment capacity within an existing process configuration.",
  },
  {
    number: "02",
    title: "Physical Separation",
    description:
      "Membrane systems can provide a controlled separation stage where the treatment objective requires it.",
  },
  {
    number: "03",
    title: "Footprint",
    description:
      "Membrane-based configurations can be considered where available treatment footprint is an important constraint.",
  },
  {
    number: "04",
    title: "Reuse Potential",
    description:
      "Advanced membrane stages can be incorporated when treated water is intended for suitable reuse applications.",
  },
];

const applications = [
  {
    title: "Industrial Reuse",
    description:
      "Advanced treatment configurations for industrial processes where treated-water reuse is required.",
    icon: Factory,
  },
  {
    title: "Municipal Treatment",
    description:
      "Biological and membrane treatment configurations for sewage and municipal wastewater applications.",
    icon: Waves,
  },
  {
    title: "Process Water",
    description:
      "Membrane stages can be incorporated where specific water-quality requirements drive treatment selection.",
    icon: Droplets,
  },
  {
    title: "Compact Treatment",
    description:
      "Treatment configurations where process capacity and available footprint must be considered together.",
    icon: Layers3,
  },
];

const engineeringInputs = [
  "Wastewater characteristics and variability",
  "Required biological treatment performance",
  "Required separation quality",
  "Available plant footprint",
  "Hydraulic and process conditions",
  "Required tertiary treatment level",
  "Downstream discharge or reuse requirements",
];

const comparisonTable = [
  {
    feature: "Primary principle",
    ifas: "Activated sludge + attached biofilm",
    mbr: "Biological treatment + membrane separation",
  },
  {
    feature: "Biological treatment",
    ifas: "Yes",
    mbr: "Yes",
  },
  {
    feature: "Membrane separation",
    ifas: "Not inherent",
    mbr: "Core process component",
  },
  {
    feature: "Footprint",
    ifas: "Moderate",
    mbr: "Compact configuration possible",
  },
  {
    feature: "Effluent quality",
    ifas: "Process dependent",
    mbr: "Process dependent",
  },
  {
    feature: "Maintenance",
    ifas: "Biological + mechanical",
    mbr: "Biological + membrane operation",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const IFASMembrane = () => {
  return (
    <main className="bg-wastely-bg text-wastely-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-wastely-line bg-white">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-[44%] opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,59,92,0.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,59,92,0.055) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="wastely-container relative py-16 sm:py-20 lg:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">

            {/* LEFT */}

            <div className="relative z-10">

              <div className="wastely-section-eyebrow">
                Treatment Technology
              </div>

              <h1 className="mt-3 max-w-2xl text-[2.7rem] font-bold leading-[1.08] tracking-[-0.035em] text-wastely-deep sm:text-5xl lg:text-[3.55rem]">
                Build biological capacity. Control the separation.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-wastely-sub sm:text-lg">
                IFAS and membrane systems address different parts of wastewater
                treatment. They can be selected independently or integrated when
                the treatment requirement calls for both biological capacity and
                controlled physical separation.
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
                  See Technology Process
                </Link>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-2 border-l border-t border-wastely-line sm:grid-cols-4">
                <HeroCell number="01" label="Biology" value="IFAS" />
                <HeroCell number="02" label="Separation" value="Membrane" />
                <HeroCell number="03" label="Tertiary" value="Advanced" />
                <HeroCell number="04" label="Design" value="Site Specific" />
              </div>

            </div>

            {/* RIGHT */}

            <div className="relative z-10">

              <div className="relative border border-wastely-line bg-wastely-bg-soft">

                <div className="relative h-[430px] overflow-hidden sm:h-[520px]">

                  <img
                    src={ifasHero}
                    alt="IFAS and membrane treatment system"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-wastely-deep/80 via-wastely-deep/10 to-transparent" />

                  <div className="absolute left-5 top-5 border border-white/25 bg-wastely-deep/85 p-4">
                    <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-wastely-cyan">
                      Treatment Architecture
                    </div>

                    <div className="mt-2 text-sm font-semibold text-white">
                      Biological + Separation
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">

                    <div className="grid grid-cols-2 border border-white/20 bg-wastely-deep/75 sm:grid-cols-4">

                      <OverlaySpec number="01" label="Biological" />
                      <OverlaySpec number="02" label="Filtration" />
                      <OverlaySpec number="03" label="Tertiary" />
                      <OverlaySpec number="04" label="Reuse" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TWO FUNCTIONS
      ===================================================== */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                Two Treatment Functions
              </div>

              <h2 className="wastely-section-title">
                Biology handles the load. Membranes handle separation.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-wastely-sub">
                IFAS and membrane treatment should not be treated as the same
                technology. Each addresses a different treatment requirement
                and can be selected independently or combined.
              </p>

            </div>

            <div className="grid border-l border-t border-wastely-line bg-wastely-line md:grid-cols-2">

              {treatmentFunctions.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="border-b border-r border-wastely-line bg-white p-7 sm:p-9"
                  >

                    <div className="flex items-start justify-between">

                      <div className="flex h-12 w-12 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
                        <Icon
                          size={22}
                          strokeWidth={1.7}
                          className="text-wastely-blue"
                        />
                      </div>

                      <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                        {item.number}
                      </span>

                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-wastely-deep">
                      {item.title}
                    </h3>

                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-wastely-blue">
                      {item.subtitle}
                    </div>

                    <p className="mt-5 text-sm leading-6 text-wastely-sub">
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
          TREATMENT ARCHITECTURE
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="max-w-3xl">

            <div className="wastely-section-eyebrow">
              Treatment Architecture
            </div>

            <h2 className="wastely-section-title">
              Build the treatment train around the water.
            </h2>

            <p className="wastely-section-description">
              The treatment configuration starts with the source and required
              output, then determines where biological treatment, membrane
              separation and tertiary treatment stages belong.
            </p>

          </div>

          <div className="relative mt-14 ml-2 border-l border-wastely-line md:ml-8">

            {treatmentArchitecture.map((step) => (

              <div
                key={step.number}
                className="relative grid gap-5 pb-12 pl-8 last:pb-0 md:grid-cols-[100px_0.7fr_1fr] md:gap-10 md:pl-10"
              >

                <div className="absolute -left-[7px] top-0 h-[13px] w-[13px] border-2 border-wastely-cyan bg-white" />

                <div className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-wastely-deep">
                    {step.title}
                  </h3>
                </div>

                <p className="max-w-xl text-sm leading-6 text-wastely-sub">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TERTIARY TREATMENT
      ===================================================== */}

      <section className="relative overflow-hidden bg-wastely-deep py-20 text-white sm:py-24">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        <div className="wastely-container relative">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

            <div>

              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                <span className="h-px w-8 bg-wastely-cyan" />
                Tertiary Treatment
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Add the polishing stage when the final water objective requires it.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
                Tertiary treatment follows the primary and secondary stages when
                additional filtration, advanced separation or disinfection is
                required for the intended discharge or reuse application.
              </p>

              <div className="mt-8 border-l border-wastely-cyan/40 pl-5">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-wastely-cyan">
                  Treatment Sequence
                </div>

                <div className="mt-3 text-sm font-semibold leading-7 text-white">
                  Primary → Secondary → Tertiary → Final Water
                </div>
              </div>

            </div>


            <div className="grid border-l border-t border-white/10 bg-white/5 sm:grid-cols-2">

              {tertiaryStages.map((item) => (

                <article
                  key={item.number}
                  className="border-b border-r border-white/10 p-7 sm:p-8"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                      {item.number}
                    </span>

                    <ArrowRight
                      size={17}
                      className="text-wastely-cyan"
                    />

                  </div>

                  <h3 className="mt-7 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {item.description}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CERAMIC FLAT-SHEET MEMBRANE
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                Ceramic Membrane
              </div>

              <h2 className="wastely-section-title">
                Ceramic flat-sheet membranes for demanding filtration applications.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-wastely-sub">
                Ceramic membrane systems can be considered where the treatment
                requirement calls for a robust membrane separation stage. The
                flat-sheet configuration can be arranged into individual modules,
                racks or larger membrane assemblies.
              </p>

              <div className="mt-8 border-t border-wastely-line">

                <InfoRow
                  label="Membrane form"
                  value="Flat-sheet"
                />

                <InfoRow
                  label="Material"
                  value="Ceramic"
                />

                <InfoRow
                  label="Application"
                  value="Membrane filtration"
                />

                <InfoRow
                  label="Configuration"
                  value="Module / rack / tower"
                />

              </div>

            </div>


            <div className="relative border border-wastely-line bg-wastely-bg-soft p-5 sm:p-8">

              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-wastely-blue">
                Membrane Construction
              </div>

              <div className="mt-8 grid items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">

                <div className="border border-wastely-line bg-white p-5 text-center">

                  <div className="mx-auto h-20 w-24 border border-wastely-blue bg-gradient-to-r from-wastely-bg-soft via-white to-wastely-bg-soft" />

                  <div className="mt-4 text-xs font-bold text-wastely-deep">
                    Ceramic Substrate
                  </div>

                  <p className="mt-2 text-[11px] leading-5 text-wastely-sub">
                    Structural support for the membrane layer.
                  </p>

                </div>

                <ArrowRight
                  size={24}
                  className="mx-auto rotate-0 text-wastely-cyan"
                />

                <div className="border border-wastely-line bg-white p-5 text-center">

                  <div className="mx-auto h-20 w-24 border border-wastely-cyan bg-wastely-cyan/10">
                    <div className="flex h-full flex-col justify-center gap-1 px-2">
                      <span className="h-px bg-wastely-cyan" />
                      <span className="h-px bg-wastely-cyan" />
                      <span className="h-px bg-wastely-cyan" />
                      <span className="h-px bg-wastely-cyan" />
                      <span className="h-px bg-wastely-cyan" />
                    </div>
                  </div>

                  <div className="mt-4 text-xs font-bold text-wastely-deep">
                    Membrane Layer
                  </div>

                  <p className="mt-2 text-[11px] leading-5 text-wastely-sub">
                    Separation surface for the selected filtration process.
                  </p>

                </div>

              </div>


              <div className="mt-8 border-t border-wastely-line pt-6">

                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                  System Configuration
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">

                  <ConfigurationBox
                    number="01"
                    title="Single Module"
                  />

                  <ConfigurationBox
                    number="02"
                    title="Rack / Tower"
                  />

                  <ConfigurationBox
                    number="03"
                    title="Module Stack"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CERAMIC MEMBRANE FILTRATION / BACKWASH
      ===================================================== */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="max-w-3xl">

            <div className="wastely-section-eyebrow">
              Filtration Operation
            </div>

            <h2 className="wastely-section-title">
              Filtration and backwash are part of the membrane operating cycle.
            </h2>

            <p className="wastely-section-description">
              The membrane stage is designed as an operating system rather than
              an isolated component. Feed flow, separation and cleaning cycles
              must be considered together.
            </p>

          </div>


          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            <OperationDiagram
              number="01"
              title="Filtration Mode"
              description="Feed water passes through the membrane separation surface while the treated stream is collected as the permeate."
              direction="forward"
            />

            <OperationDiagram
              number="02"
              title="Backwash Mode"
              description="A reverse cleaning flow can be used as part of the membrane operating cycle to remove accumulated material from the filtration surface."
              direction="reverse"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          SYSTEM CHARACTERISTICS
      ===================================================== */}

      <section className="wastely-section wastely-section-soft">

        <div className="wastely-container">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">

            <div className="order-2 lg:order-1">

              <div className="border border-wastely-line bg-white p-3">

                <img
                  src={membranePlant}
                  alt="Membrane treatment plant"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />

                <div className="grid grid-cols-3 border-x border-b border-wastely-line">

                  <PlantLabel
                    label="Process"
                    value="Biological"
                  />

                  <PlantLabel
                    label="Separation"
                    value="Membrane"
                  />

                  <PlantLabel
                    label="Application"
                    value="Reuse"
                  />

                </div>

              </div>

            </div>


            <div className="order-1 lg:order-2">

              <div className="wastely-section-eyebrow">
                System Characteristics
              </div>

              <h2 className="wastely-section-title">
                Why these technologies may be considered together.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                IFAS and membrane systems can address different requirements
                within a treatment train, including biological capacity,
                physical separation, footprint and treated-water reuse.
              </p>

              <div className="mt-8 border-t border-wastely-line">

                {systemCharacteristics.map((item) => (

                  <div
                    key={item.number}
                    className="grid grid-cols-[38px_1fr] gap-4 border-b border-wastely-line py-5"
                  >

                    <div className="text-xs font-bold tracking-[0.12em] text-wastely-cyan">
                      {item.number}
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

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MEMBRANE TECHNOLOGIES
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="flex flex-col justify-between gap-6 border-b border-wastely-line pb-8 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <div className="wastely-section-eyebrow">
                Membrane Technologies
              </div>

              <h2 className="wastely-section-title">
                Select the membrane process according to the separation task.
              </h2>

            </div>

            <div className="text-xs font-medium uppercase tracking-[0.12em] text-wastely-sub">
              MF / UF / NF / RO
            </div>

          </div>


          <div className="mt-8">

            {membraneTechnologies.map((item) => {

              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="grid gap-5 border-b border-wastely-line py-7 md:grid-cols-[70px_80px_0.65fr_1fr] md:items-center"
                >

                  <div className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                    {item.number}
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      className="text-wastely-blue"
                    />
                  </div>

                  <div>

                    <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-wastely-cyan">
                      {item.short}
                    </div>

                    <h3 className="mt-1 text-lg font-bold text-wastely-deep">
                      {item.title}
                    </h3>

                  </div>

                  <p className="text-sm leading-6 text-wastely-sub">
                    {item.description}
                  </p>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          VIDEO / PROCESS OBSERVATION
      ===================================================== */}

      <section className="bg-wastely-bg-soft py-10 sm:py-14">

        <div className="wastely-container">

          <div className="grid overflow-hidden border border-wastely-line bg-white lg:grid-cols-[1.25fr_0.75fr]">

            <div className="relative min-h-[300px] bg-black lg:min-h-[520px]">

              <video
                controls
                className="h-full min-h-[300px] w-full object-cover lg:min-h-[520px]"
              >
                <source
                  src={membraneVideo}
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>

            </div>


            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">

              <div className="wastely-section-eyebrow">
                Process Observation
              </div>

              <h2 className="text-2xl font-bold leading-tight text-wastely-deep sm:text-3xl">
                See the membrane process as part of the treatment system.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                Membrane treatment is one stage within a wider process
                architecture. Pretreatment, biological treatment, membrane
                operation and downstream use all influence the final system
                configuration.
              </p>

              <div className="mt-8 border-t border-wastely-line pt-6">

                <ProcessPoint>
                  Process integration matters
                </ProcessPoint>

                <ProcessPoint>
                  Water quality defines the treatment train
                </ProcessPoint>

                <ProcessPoint>
                  Site conditions influence configuration
                </ProcessPoint>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTEGRATED MEMBRANE SYSTEM
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                Integrated Membrane System
              </div>

              <h2 className="wastely-section-title">
                Treatment does not stop at the membrane.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                A membrane installation must work with the upstream treatment
                process and the intended downstream use of the treated water.
              </p>

              <div className="mt-8 space-y-4">

                <SystemPoint
                  number="01"
                  title="Pretreatment"
                  description="Prepare the feed stream for the selected membrane process."
                />

                <SystemPoint
                  number="02"
                  title="Membrane Stage"
                  description="Perform the required physical separation."
                />

                <SystemPoint
                  number="03"
                  title="Post-treatment"
                  description="Condition the treated stream according to its final application."
                />

              </div>

            </div>


            <div className="relative border border-wastely-line bg-wastely-bg-soft p-3">

              <img
                src={membraneSystem}
                alt="Integrated membrane treatment system"
                className="h-[360px] w-full object-cover sm:h-[460px]"
              />

              <div className="absolute bottom-7 left-7 border border-white/20 bg-wastely-deep/85 px-5 py-4">

                <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                  System Integration
                </div>

                <div className="mt-1 text-sm font-semibold text-white">
                  Treatment → Separation → Reuse
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CERAMIC MODULE CONFIGURATION
      ===================================================== */}

      <section className="wastely-section bg-wastely-bg-soft">

        <div className="wastely-container">

          <div className="max-w-3xl">

            <div className="wastely-section-eyebrow">
              Ceramic Membrane Configuration
            </div>

            <h2 className="wastely-section-title">
              From a membrane sheet to a treatment installation.
            </h2>

            <p className="wastely-section-description">
              Ceramic flat-sheet membranes can be arranged into modules and
              larger assemblies according to the required treatment capacity
              and plant configuration.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <ModuleCard
              number="01"
              title="Flat-Sheet"
              subtitle="Membrane element"
              type="sheet"
            />

            <ModuleCard
              number="02"
              title="Single Module"
              subtitle="Membrane assembly"
              type="module"
            />

            <ModuleCard
              number="03"
              title="Rack / Tower"
              subtitle="Multiple modules"
              type="tower"
            />

          </div>


          <div className="mt-6 border border-wastely-line bg-white p-6 sm:p-8">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                  Engineering Configuration
                </div>

                <h3 className="mt-2 text-xl font-bold text-wastely-deep">
                  Configuration depends on treatment duty and site conditions.
                </h3>

              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-wastely-blue">

                <span>Membrane</span>
                <ArrowRight size={16} />
                <span>Module</span>
                <ArrowRight size={16} />
                <span>Rack</span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IFAS VS MBR
      ===================================================== */}

      <section className="wastely-section wastely-section-soft">

        <div className="wastely-container">

          <div className="max-w-3xl">

            <div className="wastely-section-eyebrow">
              Treatment Analysis
            </div>

            <h2 className="wastely-section-title">
              IFAS and MBR solve related but different process problems.
            </h2>

            <p className="wastely-section-description">
              This is a process-level distinction. Final selection depends on
              wastewater characteristics, treatment objectives, footprint,
              operation and downstream requirements.
            </p>

          </div>


          <div className="mt-12 overflow-x-auto border border-wastely-line bg-white">

            <table className="w-full min-w-[760px] border-collapse">

              <thead>

                <tr className="bg-wastely-deep text-white">

                  <th className="p-5 text-left text-xs font-semibold uppercase tracking-[0.1em]">
                    Feature
                  </th>

                  <th className="border-l border-white/15 p-5 text-left text-xs font-semibold uppercase tracking-[0.1em] text-wastely-cyan">
                    IFAS
                  </th>

                  <th className="border-l border-white/15 p-5 text-left text-xs font-semibold uppercase tracking-[0.1em]">
                    MBR
                  </th>

                </tr>

              </thead>

              <tbody>

                {comparisonTable.map((row) => (

                  <tr
                    key={row.feature}
                    className="border-t border-wastely-line"
                  >

                    <td className="p-5 text-sm font-semibold text-wastely-deep">
                      {row.feature}
                    </td>

                    <td className="border-l border-wastely-line p-5 text-sm leading-6 text-wastely-sub">
                      {row.ifas}
                    </td>

                    <td className="border-l border-wastely-line bg-wastely-bg-soft p-5 text-sm leading-6 text-wastely-sub">
                      {row.mbr}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="wastely-section bg-white">

        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            <div>

              <div className="wastely-section-eyebrow">
                Applications
              </div>

              <h2 className="wastely-section-title">
                Where IFAS and membrane systems can be considered.
              </h2>

              <p className="mt-5 text-sm leading-6 text-wastely-sub">
                Application determines the required treatment performance,
                process configuration and level of separation.
              </p>

            </div>


            <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2">

              {applications.map((application) => {

                const Icon = application.icon;

                return (
                  <article
                    key={application.title}
                    className="border-b border-r border-wastely-line bg-white p-7"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft">

                        <Icon
                          size={20}
                          strokeWidth={1.7}
                          className="text-wastely-blue"
                        />

                      </div>

                      <ArrowRight
                        size={17}
                        className="text-wastely-cyan"
                      />

                    </div>

                    <h3 className="mt-7 text-lg font-bold text-wastely-deep">
                      {application.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-wastely-sub">
                      {application.description}
                    </p>

                  </article>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGINEERING INPUTS
      ===================================================== */}

      <section className="wastely-section wastely-section-soft">

        <div className="wastely-container">

          <div className="wastely-section-header">

            <div className="wastely-section-eyebrow">
              Engineering Inputs
            </div>

            <h2 className="wastely-section-title">
              The technology follows the treatment requirement.
            </h2>

            <p className="wastely-section-description">
              IFAS, membrane and tertiary treatment systems should be evaluated
              as part of the complete treatment configuration.
            </p>

          </div>


          <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2 lg:grid-cols-3">

            {engineeringInputs.map((item, index) => (

              <div
                key={item}
                className="border-b border-r border-wastely-line bg-white p-7"
              >

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={18}
                    strokeWidth={1.7}
                    className="text-wastely-cyan"
                  />

                  <span className="text-xs font-bold tracking-[0.12em] text-wastely-blue">
                    0{index + 1}
                  </span>

                </div>

                <p className="mt-5 text-sm font-medium leading-6 text-wastely-deep">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY → SERVICES
      ===================================================== */}

      <section className="wastely-section-sm bg-white">

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
              eyebrow="Service"
              title="Technology Process"
              description="Process engineering determines how biological treatment, membrane separation and tertiary stages work together."
              to="/services/technology-process"
              linkText="View Technology Process"
            />

            <HandoffCard
              eyebrow="Plant Support"
              title="Operation & Maintenance"
              description="Operational and maintenance support for treatment infrastructure after implementation."
              to="/services/operation-maintenance"
              linkText="View O&M Services"
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

const HeroCell = ({ number, label, value }) => {
  return (
    <div className="border-b border-r border-wastely-line bg-white p-4">

      <div className="text-[9px] font-bold tracking-[0.14em] text-wastely-cyan">
        {number}
      </div>

      <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-wastely-sub">
        {label}
      </div>

      <div className="mt-1 text-sm font-bold text-wastely-deep">
        {value}
      </div>

    </div>
  );
};


const OverlaySpec = ({ number, label }) => {
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


const PlantLabel = ({ label, value }) => {
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


const ProcessPoint = ({ children }) => {
  return (
    <div className="flex items-center gap-3 text-sm font-semibold text-wastely-blue">

      <CheckCircle2 size={18} />

      {children}

    </div>
  );
};


const SystemPoint = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="grid grid-cols-[38px_1fr] gap-4 border-t border-wastely-line py-5">

      <div className="text-xs font-bold tracking-[0.12em] text-wastely-cyan">
        {number}
      </div>

      <div>

        <h3 className="text-sm font-bold text-wastely-deep">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-wastely-sub">
          {description}
        </p>

      </div>

    </div>
  );
};


const InfoRow = ({ label, value }) => {
  return (
    <div className="grid grid-cols-[0.8fr_1.2fr] gap-4 border-b border-wastely-line py-4">

      <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-wastely-sub">
        {label}
      </div>

      <div className="text-sm font-semibold text-wastely-deep">
        {value}
      </div>

    </div>
  );
};


const ConfigurationBox = ({
  number,
  title,
}) => {
  return (
    <div className="border border-wastely-line bg-white p-5">

      <div className="text-[9px] font-bold tracking-[0.12em] text-wastely-cyan">
        {number}
      </div>

      <div className="mt-3 text-sm font-bold text-wastely-deep">
        {title}
      </div>

    </div>
  );
};


const OperationDiagram = ({
  number,
  title,
  description,
  direction,
}) => {
  const reverse = direction === "reverse";

  return (
    <article className="border border-wastely-line bg-white p-7 sm:p-9">

      <div className="flex items-center justify-between">

        <div className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
          {number}
        </div>

        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-wastely-blue">
          {reverse ? "Backwash" : "Filtration"}
        </div>

      </div>

      <h3 className="mt-7 text-xl font-bold text-wastely-deep">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-wastely-sub">
        {description}
      </p>


      <div className="mt-8 border border-wastely-line bg-wastely-bg-soft p-5">

        <div className="flex items-center gap-3">

          <div className="min-w-0 flex-1">

            <div className="border border-wastely-line bg-white p-4">

              <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-wastely-sub">
                {reverse ? "Backwash Flow" : "Feed Flow"}
              </div>

              <div className="mt-2 h-2 bg-wastely-blue/15">

                <div
                  className={`h-full w-2/3 bg-wastely-blue ${
                    reverse ? "ml-auto" : ""
                  }`}
                />

              </div>

            </div>

          </div>

          <ArrowRight
            size={22}
            className={`shrink-0 text-wastely-cyan ${
              reverse ? "rotate-180" : ""
            }`}
          />

          <div className="w-28 border border-wastely-cyan bg-white p-4 text-center">

            <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-wastely-cyan">
              Membrane
            </div>

            <div className="mt-3 flex justify-center gap-1">

              {[1, 2, 3, 4, 5].map((line) => (
                <span
                  key={line}
                  className="h-10 w-px bg-wastely-blue"
                />
              ))}

            </div>

          </div>

        </div>


        <div className="mt-4 text-center">

          <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-wastely-sub">
            {reverse
              ? "Solids and accumulated material removed"
              : "Treated stream / permeate"}
          </div>

        </div>

      </div>

    </article>
  );
};


const ModuleCard = ({
  number,
  title,
  subtitle,
  type,
}) => {
  return (
    <article className="border border-wastely-line bg-white p-6 sm:p-7">

      <div className="flex items-center justify-between">

        <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
          {number}
        </span>

        <Layers3
          size={18}
          className="text-wastely-blue"
        />

      </div>

      <div className="mt-8 flex h-48 items-center justify-center border border-wastely-line bg-wastely-bg-soft">

        {type === "sheet" && (
          <div className="h-32 w-10 border border-wastely-deep bg-white">
            <div className="flex h-full flex-col justify-center gap-1 px-1.5">
              {[1, 2, 3, 4, 5, 6, 7].map((line) => (
                <span
                  key={line}
                  className="h-px bg-wastely-blue"
                />
              ))}
            </div>
          </div>
        )}

        {type === "module" && (
          <div className="relative h-28 w-36 border-4 border-wastely-blue bg-wastely-bg-soft">

            <div className="absolute inset-3 border border-wastely-cyan bg-white">

              <div className="grid h-full grid-cols-5 gap-1 p-2">
                {[1, 2, 3, 4, 5].map((line) => (
                  <span
                    key={line}
                    className="border-l border-wastely-blue"
                  />
                ))}
              </div>

            </div>

          </div>
        )}

        {type === "tower" && (
          <div className="flex items-end gap-2">

            {[1, 2, 3].map((tower) => (
              <div
                key={tower}
                className="flex h-28 w-14 flex-col justify-between border-4 border-wastely-blue bg-wastely-bg-soft p-2"
              >
                {[1, 2, 3, 4].map((line) => (
                  <span
                    key={line}
                    className="h-px bg-wastely-cyan"
                  />
                ))}
              </div>
            ))}

          </div>
        )}

      </div>

      <h3 className="mt-6 text-lg font-bold text-wastely-deep">
        {title}
      </h3>

      <p className="mt-2 text-sm text-wastely-sub">
        {subtitle}
      </p>

    </article>
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


export default IFASMembrane;
