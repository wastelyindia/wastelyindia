import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Boxes,
  Factory,
  Flower2,
  Layers3,
  Recycle,
  Wind,
} from "lucide-react";

const products = [
  {
    number: "01",
    category: "Aeration & Oxygen Transfer",
    title: "Aeration & Oxygenation",
    description:
      "Systems for oxygen transfer and aeration requirements within wastewater treatment and suitable waterbody applications.",
    icon: Wind,
    path: "/products/aeration-oxygenation",
    technology: "Mechanical / Physical",
  },
  {
    number: "02",
    category: "Biological Treatment",
    title: "IFAS / Membrane Systems",
    description:
      "Biological and membrane-based treatment systems for applications requiring controlled treatment performance and process integration.",
    icon: Layers3,
    path: "/products/ifas-membrane",
    technology: "Biological Treatment",
  },
  {
    number: "03",
    category: "Nature-Based Systems",
    title: "Floating Wetlands",
    description:
      "Floating nature-based systems for suitable lakes, ponds and other waterbody treatment and ecological applications.",
    icon: Flower2,
    path: "/products/floating-wetlands",
    technology: "Nature-Based Treatment",
  },
  {
    number: "04",
    category: "Sludge Management",
    title: "Sludge Dewatering & Drying",
    description:
      "Systems for reducing water content in sludge and supporting practical sludge handling within treatment facilities.",
    icon: Recycle,
    path: "/products/sludge-dewatering-unit",
    technology: "Mechanical / Physical",
  },
  {
    number: "05",
    category: "Modular Treatment",
    title: "Package Treatment Units",
    description:
      "Compact and modular treatment systems for applications where packaged plant infrastructure is appropriate.",
    icon: Boxes,
    path: "/products/package-treatment-units",
    technology: "Integrated Treatment",
  },
  {
    number: "06",
    category: "Waterbody Management",
    title: "Algae Control System",
    description:
      "Systems supporting algae monitoring and management in appropriate lake, pond and waterbody applications.",
    icon: Activity,
    path: "/products/algae-control-system",
    technology: "Monitoring / Control",
  },
];

const productRoles = [
  {
    number: "01",
    title: "Treatment",
    text: "Systems that directly contribute to water or wastewater treatment processes.",
  },
  {
    number: "02",
    title: "Process Support",
    text: "Equipment and systems that support the operation of a larger treatment configuration.",
  },
  {
    number: "03",
    title: "Waterbody Management",
    text: "Systems intended for suitable ecological and water-quality applications.",
  },
];

const selectionFactors = [
  "Application and intended outcome",
  "Water or wastewater characteristics",
  "Required treatment performance",
  "Existing plant infrastructure",
  "Available space and site conditions",
  "Operation and maintenance requirements",
];

const Products = () => {
  return (
    <main className="bg-wastely-bg text-wastely-ink">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-wastely-line bg-wastely-bg-soft">
        {/* Engineering grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] opacity-60 lg:block"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,59,92,0.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,59,92,0.055) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Technical flow lines */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-[58%] opacity-30"
          viewBox="0 0 800 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 110 C150 10 250 230 390 125 C530 20 650 135 800 65"
            stroke="#2FB4CE"
            strokeWidth="1"
          />
          <path
            d="M0 220 C145 105 255 345 415 215 C550 105 660 235 800 150"
            stroke="#0E76A8"
            strokeWidth="1"
          />
          <path
            d="M0 350 C160 220 275 455 430 335 C570 225 680 350 800 255"
            stroke="#2FB4CE"
            strokeWidth="1"
          />
          <path
            d="M0 480 C155 355 285 575 455 460 C585 355 690 465 800 375"
            stroke="#0E76A8"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
            {/* LEFT */}
            <div className="max-w-3xl">
              <div className="wastely-section-eyebrow">
                Treatment Systems
              </div>

              <h1 className="mt-2 max-w-3xl text-[2.6rem] font-bold leading-[1.08] tracking-[-0.035em] text-wastely-deep sm:text-[3.2rem] lg:text-[3.7rem]">
                Treatment systems selected for the application.
              </h1>

              <p className="mt-7 max-w-[650px] text-base leading-7 text-wastely-sub sm:text-lg">
                Wastely Aqua's product portfolio supports water treatment,
                wastewater treatment and suitable waterbody applications.
                Individual systems can form part of a larger engineered
                treatment configuration.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="wastely-btn wastely-btn-primary"
                >
                  Explore Products
                  <ArrowRight size={17} />
                </a>

                <Link
                  to="/technologies"
                  className="wastely-btn wastely-btn-secondary"
                >
                  View Technologies
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-wastely-sub">
                <span className="h-px w-10 bg-wastely-cyan" />
                Treatment Systems
                <span className="text-wastely-line">·</span>
                Process Support
                <span className="text-wastely-line">·</span>
                Waterbody Systems
              </div>
            </div>

            {/* RIGHT — PRODUCT SYSTEM MAP */}
            <div className="relative hidden min-h-[400px] lg:block">
              <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-wastely-cyan/20" />

              <div className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-wastely-blue/20" />

              {/* Center */}
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-wastely-cyan bg-white">
                <div className="text-center">
                  <Factory
                    size={28}
                    strokeWidth={1.6}
                    className="mx-auto text-wastely-blue"
                  />

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-wastely-deep">
                    Systems
                  </p>
                </div>
              </div>

              <ProductNode
                className="left-0 top-5"
                number="01"
                title="Aeration"
                icon={Wind}
              />

              <ProductNode
                className="right-0 top-5"
                number="02"
                title="Biological"
                icon={Layers3}
              />

              <ProductNode
                className="left-0 bottom-5"
                number="03"
                title="Nature-Based"
                icon={Flower2}
              />

              <ProductNode
                className="right-0 bottom-5"
                number="04"
                title="Sludge / Control"
                icon={Activity}
              />

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
          INTRO
      ====================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="wastely-section-eyebrow">
                Product portfolio
              </div>

              <h2 className="wastely-section-title">
                Specific systems for specific treatment roles.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-base leading-7 text-wastely-sub sm:text-lg">
                A product should not be considered independently from the
                treatment process. The appropriate system depends on the
                application, water characteristics, required outcome and
                conditions at the site.
              </p>

              <p className="mt-5 text-base leading-7 text-wastely-sub">
                The products below represent specific systems that can be
                considered within a broader engineered solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}
      <section
        id="products"
        className="wastely-section wastely-section-soft"
      >
        <div className="wastely-container">
          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Products
            </div>

            <h2 className="wastely-section-title">
              Explore the treatment systems.
            </h2>

            <p className="wastely-section-description">
              Browse the individual systems and understand the role each can
              play within a water, wastewater or waterbody application.
            </p>
          </div>

          <div className="grid border-l border-t border-wastely-line bg-wastely-line sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <Link
                  key={product.number}
                  to={product.path}
                  className="group border-b border-r border-wastely-line bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-wastely-cyan sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-wastely-line bg-wastely-bg-soft transition-colors group-hover:border-wastely-cyan">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-wastely-blue"
                      />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.12em] text-wastely-cyan">
                      {product.number}
                    </span>
                  </div>

                  <div className="mt-8">
                    <div className="mb-3 inline-flex border border-wastely-line px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-wastely-blue">
                      {product.category}
                    </div>

                    <h3 className="text-xl font-bold text-wastely-deep">
                      {product.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-wastely-sub">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-wastely-line pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-wastely-sub">
                      Technology
                    </span>

                    <span className="text-[10px] text-wastely-line">/</span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-wastely-blue">
                      {product.technology}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-wastely-blue">
                    View Product
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT ROLE
      ====================================================== */}
      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="wastely-section-eyebrow">
                Where products fit
              </div>

              <h2 className="wastely-section-title">
                A product is one part of the treatment system.
              </h2>

              <p className="mt-5 max-w-[470px] text-sm leading-6 text-wastely-sub">
                Product selection becomes meaningful when the system role,
                treatment objective and site conditions are understood.
              </p>
            </div>

            <div className="grid border-l border-t border-wastely-line bg-wastely-line md:grid-cols-3">
              {productRoles.map((role) => (
                <article
                  key={role.number}
                  className="border-b border-r border-wastely-line bg-white p-7"
                >
                  <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                    {role.number}
                  </span>

                  <h3 className="mt-7 text-lg font-bold text-wastely-deep">
                    {role.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-wastely-sub">
                    {role.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-wastely-deep py-20 sm:py-24 lg:py-28">
        {/* Engineering contours */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1440 650"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-80 150 C180 0 320 280 580 135 C830 0 1040 190 1520 55"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-100 250 C160 90 330 370 600 220 C870 75 1070 290 1530 135"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-100 365 C170 200 330 500 620 325 C900 175 1110 410 1530 245"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-100 490 C180 330 360 620 650 445 C930 285 1140 530 1530 360"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
        </svg>

        <div className="wastely-container relative">
          <div className="max-w-3xl">
            <div className="wastely-section-eyebrow !text-wastely-cyan">
              Product selection
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              The right system depends on the application.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              Product selection should follow the treatment requirement,
              rather than the other way around.
            </p>
          </div>

          <div className="mt-14 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {selectionFactors.map((factor, index) => (
              <div
                key={factor}
                className="border-b border-r border-white/15 p-6 lg:p-7"
              >
                <span className="text-xs font-bold tracking-[0.14em] text-wastely-cyan">
                  0{index + 1}
                </span>

                <p className="mt-6 text-sm font-medium leading-6 text-white/80">
                  {factor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY HANDOFF
      ====================================================== */}
      <section className="wastely-section-sm bg-wastely-bg-soft">
        <div className="wastely-container">
          <div className="flex flex-col gap-6 border-y border-wastely-line py-7 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                Product → Technology
              </div>

              <h2 className="mt-2 text-xl font-bold text-wastely-deep">
                Understand the treatment technology behind the system.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-wastely-sub">
                Technologies explain the treatment approach. Products provide
                the specific systems that can form part of that approach.
              </p>
            </div>

            <Link
              to="/technologies"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-wastely-blue hover:text-wastely-deep"
            >
              Explore Technologies
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES HANDOFF
      ====================================================== */}
      <section className="wastely-section-sm bg-white">
        <div className="wastely-container">
          <div className="flex flex-col gap-6 border-y border-wastely-line py-7 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-wastely-cyan">
                Project support
              </div>

              <h2 className="mt-2 text-xl font-bold text-wastely-deep">
                Need the product integrated into a larger project?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-wastely-sub">
                Our services cover treatment-process engineering, plant
                operation, maintenance and modernization.
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
    </main>
  );
};

/* =========================================================
   HERO PRODUCT NODE
========================================================= */

const ProductNode = ({
  className,
  number,
  title,
  icon: Icon,
}) => {
  return (
    <div
      className={`absolute ${className} flex min-w-[150px] items-center gap-3 border border-wastely-line bg-white px-4 py-3`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-wastely-line bg-wastely-bg-soft">
        <Icon
          size={17}
          strokeWidth={1.7}
          className="text-wastely-blue"
        />
      </div>

      <div>
        <div className="text-[9px] font-bold tracking-[0.12em] text-wastely-cyan">
          {number}
        </div>

        <div className="mt-0.5 text-xs font-bold uppercase tracking-[0.06em] text-wastely-deep">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Products;