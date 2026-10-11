import {
  Waves,
  Droplets,
  Leaf,
  Fish,
  Wind,
  Layers3,
  Flower2,
  Factory,
  Boxes,
  Cpu,
  Settings2,
  ShieldCheck,
  RefreshCw,
  Radar,
  FlaskConical,
} from "lucide-react";

// ======================================================
// WASTELY AQUA — NAVIGATION DATA
// ======================================================
//
// Information architecture:
//
// Solutions    → What water/environmental problem?
// Services     → How Wastely supports the project
// Industries   → Where the solutions are applied
// Technologies → What treatment/process technologies are used
//
// ======================================================

export const navItems = [

  // ======================================================
  // SOLUTIONS
  // ======================================================

  {
    title: "Solutions",
    megaMenu: true,

    sections: [
      {
        heading: "Water Infrastructure",

        links: [
          {
            name: "Wastewater Treatment",
            desc: "Industrial and municipal wastewater treatment systems",
            icon: Waves,
            path: "/solutions/wastewater-treatment",
          },

          {
            name: "Water Treatment",
            desc: "Water purification, filtration and reuse systems",
            icon: Droplets,
            path: "/solutions/water-treatment",
          },

          {
            name: "Integrated Water System",
            desc: "Connected water infrastructure from treatment to reuse",
            icon: Cpu,
            path: "/solutions/integrated-water-system",
          },
          {
            name: "Biological FOG Management",
            desc: "Biological treatment option for suitable grease-trap applications",
            icon: FlaskConical,
            path: "/solutions/biowish-aqua-fog",
          },
        ],
      },

      {
        heading: "Waterbody & Ecological Restoration",

        links: [
          {
            name: "Aquaculture",
            desc: "Water-quality and aquatic ecosystem management",
            icon: Fish,
            path: "/solutions/aquaculture",
          },

          {
            name: "Lake & Pond Rejuvenation",
            desc: "Restoration of polluted and degraded water bodies",
            icon: Leaf,
            path: "/solutions/lake-pond-rejuvenation",
          },

          {
            name: "Water Body Restoration",
            desc: "Restoration of rivers, canals, reservoirs and water bodies",
            icon: Waves,
            path: "/solutions/water-body-restoration",
          },
        ],
      },
    ],
  },

  // ======================================================
  // SERVICES
  // ======================================================

  {
    title: "Services",
    megaMenu: true,

    sections: [
      {
        heading: "Plant Operations & Support",

        links: [
          {
            name: "Operation & Maintenance",
            desc: "End-to-end plant operation and performance support",
            icon: Settings2,
            path: "/services/operation-maintenance",
          },

          {
            name: "AMC Services",
            desc: "Planned maintenance and ongoing technical support",
            icon: ShieldCheck,
            path: "/services/amc-services",
          },

          {
            name: "Revamping & Retrofitting",
            desc: "Upgrade existing plants for improved performance",
            icon: RefreshCw,
            path: "/services/revamping-retrofitting",
          },
        ],
      },

      {
        heading: "Engineering & Process",

        links: [
          {
            name: "Technology Process",
            desc: "Treatment-process assessment and engineering design",
            icon: Cpu,
            path: "/services/technology-process",
          },
        ],
      },
    ],
  },

  // ======================================================
  // INDUSTRIES
  // ======================================================

  {
    title: "Industries",
    path: "/industries",
  },

  // ======================================================
  // TECHNOLOGIES
  // ======================================================
  //
  // Technologies is the public replacement for Products.
  // This is intentionally a MEGA MENU.
  //
  // ======================================================

  {
    title: "Technologies",
    megaMenu: true,

    sections: [

      // --------------------------------------------------
      // TREATMENT TECHNOLOGIES
      // --------------------------------------------------

      {
        heading: "Treatment Technologies",

        links: [
          {
            name: "Aeration & Oxygenation",
            desc: "Systems supporting oxygen transfer and aeration requirements",
            icon: Wind,
            path: "/technologies/aeration-oxygenation",
          },

          {
            name: "IFAS / Membrane Systems",
            desc: "Biological and membrane-based treatment systems",
            icon: Layers3,
            path: "/technologies/ifas-membrane",
          },

          {
            name: "Floating Wetlands",
            desc: "Nature-based treatment and ecological restoration systems",
            icon: Flower2,
            path: "/technologies/floating-wetlands",
          },

          {
            name: "Algae Control System",
            desc: "Technology supporting algae control in suitable waterbody applications",
            icon: Radar,
            path: "/technologies/algae-control",
          },

          {
            name: "Hydro-dis Disinfection",
            desc: "Electrochemical disinfection for water and wastewater applications",
            icon: Droplets,
            path: "/technologies/hydro-dis",
          },
        ],
      },

      // --------------------------------------------------
      // SLUDGE MANAGEMENT
      // --------------------------------------------------

      {
        heading: "Sludge Management",

        links: [
          {
            name: "Sludge Management",
            desc: "Integrated sludge dewatering and drying systems",
            icon: Factory,
            path: "/technologies/sludge-management",
          },
        ],
      },

      // --------------------------------------------------
      // PACKAGED INFRASTRUCTURE
      // --------------------------------------------------

      {
        heading: "Packaged Infrastructure",

        links: [
          {
            name: "Package Treatment Units",
            desc: "Compact and configurable packaged treatment infrastructure",
            icon: Boxes,
            path: "/technologies/package-treatment-units",
          },
        ],
      },
    ],
  },

  // ======================================================
  // CASE STUDIES
  // ======================================================

  {
    title: "Case Studies",
    path: "/case-studies",
  },

  // ======================================================
  // ABOUT
  // ======================================================

  {
    title: "About",
    path: "/about",
  },
];