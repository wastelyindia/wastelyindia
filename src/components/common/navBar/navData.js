
// // src/constants/navData.js

// import {
//   Waves,
//   Droplets,
//   Leaf,
//   Fish,
//   Wind,
//   Layers3,
//   Flower2,
//   Factory,
//   Boxes,
//   Cpu,
//   Settings2,
//   ShieldCheck,
//   RefreshCw,
// } from "lucide-react";

// export const navItems = [
//   // =====================================================
//   // SOLUTIONS
//   // =====================================================
//   {
//     title: "Solutions",
//     megaMenu: true,

//     sections: [
//       {
//         heading: "Water Treatment",

//         links: [
//           {
//             name: "Wastewater Treatment",
//             desc: "Industrial & municipal wastewater systems",
//             icon: Waves,
//             path: "/solutions/wastewater-treatment",
//           },

//           {
//             name: "Water Treatment",
//             desc: "Advanced purification & filtration solutions",
//             icon: Droplets,
//             path: "/solutions/water-treatment",
//           },

//           {
//             name: "Integrated Water System",
//             desc: "Smart integrated water management systems",
//             icon: Cpu,
//             path: "/solutions/integrated-water-system",
//           },
//         ],
//       },

//       {
//         heading: "Environmental Restoration",

//         links: [
//           {
//             name: "Aquaculture",
//             desc: "Sustainable aquatic ecosystem technologies",
//             icon: Fish,
//             path: "/solutions/aquaculture",
//           },

//           {
//             name: "Lake & Pond Rejuvenation",
//             desc: "Restoration of polluted lakes & ponds",
//             icon: Leaf,
//             path: "/solutions/lake-pond-rejuvenation",
//           },

//           {
//             name: "River & Water Body Restoration",
//             desc: "Environmental rehabilitation solutions",
//             icon: Waves,
//             path: "/solutions/water-body-restoration",
//           },
//         ],
//       },
//     ],
//   },

//   // =====================================================
//   // PRODUCTS
//   // =====================================================
//   {
//     title: "Products",
//     megaMenu: true,

//     sections: [
//       {
//         heading: "Core Technologies",

//         links: [
//           {
//             name: "Aeration / Oxygenation Technology",
//             desc: "High-efficiency oxygen transfer systems",
//             icon: Wind,
//             path: "/products/aeration-oxygenation",
//           },

//           {
//             name: "IFAS / Membrane",
//             desc: "Advanced biological treatment technology",
//             icon: Layers3,
//             path: "/products/ifas-membrane",
//           },

//           {
//             name: "Floating Wetlands",
//             desc: "Eco-based floating treatment ecosystems",
//             icon: Flower2,
//             path: "/products/floating-wetlands",
//           },
//         ],
//       },

//       {
//         heading: "Treatment Systems",

//         links: [
//           {
//             name: "Sludge Dewatering Unit",
//             desc: "Efficient sludge reduction & management",
//             icon: Factory,
//             path: "/products/sludge-dewatering-unit",
//           },

//           {
//             name: "Package Treatment Units",
//             desc: "Compact modular wastewater systems",
//             icon: Boxes,
//             path: "/products/package-treatment-units",
//           },
//           {
//             name: "Algae Control System",
//             desc: "Alge",
//             icon: Flower2,
//             path: "/products/alge-control-system",
//           },
//         ],
//       },
//     ],
//   },

//   // =====================================================
//   // SERVICES
//   // =====================================================
//   {
//     title: "Services",
//     megaMenu: true,

//     sections: [
//       {
//         heading: "Plant Services",

//         links: [
//           {
//             name: "Operation & Maintenance",
//             desc: "Complete plant operation & monitoring",
//             icon: Settings2,
//             path: "/services/operation-maintenance",
//           },

//           {
//             name: "AMC Services",
//             desc: "Annual maintenance & support contracts",
//             icon: ShieldCheck,
//             path: "/services/amc-services",
//           },

//           {
//             name: "Revamping & Retrofitting",
//             desc: "Plant modernization & performance upgrades",
//             icon: RefreshCw,
//             path: "/services/revamping-retrofitting",
//           },
//         ],
//       },

//       {
//         heading: "Engineering",

//         links: [
//           {
//             name: "Technology Process",
//             desc: "Advanced process engineering solutions",
//             icon: Cpu,
//             path: "/services/technology-process",
//           },
//         ],
//       },
//     ],
//   },

//   // =====================================================
//   // MAIN NAVIGATION
//   // =====================================================
//   {
//     title: "Industries",
//     path: "/industries",
//   },

//   {
//     title: "Technologies",
//     path: "/technologies",
//   },

//   {
//     title: "About",
//     path: "/about",
//   },

//   {
//     title: "Case -study",
//     path: "/case-studies",
//   },
// ];



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
} from "lucide-react";

// ======================================================
// NAVIGATION DATA
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
            desc: "Advanced purification, filtration and reuse systems",
            icon: Droplets,
            path: "/solutions/water-treatment",
          },

          {
            name: "Integrated Water System",
            desc: "Smart integrated environmental water infrastructure",
            icon: Cpu,
            path: "/solutions/integrated-water-system",
          },
        ],
      },

      {
        heading: "Ecological Restoration",

        links: [
          {
            name: "Aquaculture",
            desc: "Advanced aquatic ecosystem restoration technologies",
            icon: Fish,
            path: "/solutions/aquaculture",
          },

          {
            name: "Lake & Pond Rejuvenation",
            desc: "Integrated polluted lake and pond restoration systems",
            icon: Leaf,
            path: "/solutions/lake-pond-rejuvenation",
          },

          {
            name: "Water Body Restoration",
            desc: "Large-scale river, canal and reservoir restoration",
            icon: Waves,
            path: "/solutions/water-body-restoration",
          },
        ],
      },
    ],
  },

  // ======================================================
  // PRODUCTS
  // ======================================================

  {
    title: "Products",
    megaMenu: true,

    sections: [
      {
        heading: "Environmental Technologies",

        links: [
          {
            name: "Aeration & Oxygenation",
            desc: "High-efficiency nano bubble and oxygen transfer systems",
            icon: Wind,
            path: "/products/aeration-oxygenation",
          },

          {
            name: "IFAS / Membrane Systems",
            desc: "Advanced biological treatment and membrane technologies",
            icon: Layers3,
            path: "/products/ifas-membrane",
          },

          {
            name: "Floating Wetlands",
            desc: "Nature-based ecological floating treatment systems",
            icon: Flower2,
            path: "/products/floating-wetlands",
          },
        ],
      },

      {
        heading: "Treatment & Monitoring",

        links: [
          {
            name: "Sludge Dewatering & Drying",
            desc: "LTSD sludge reduction and drying systems",
            icon: Factory,
            path: "/products/sludge-dewatering-unit",
          },

          {
            name: "Package Treatment Units",
            desc: "Compact modular wastewater treatment infrastructure",
            icon: Boxes,
            path: "/products/package-treatment-units",
          },

          {
            name: "Algae Control System",
            desc: "Ultrasonic algae monitoring and smart buoy systems",
            icon: Radar,
            path: "/products/algae-control-system",
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
        heading: "Operations & Support",

        links: [
          {
            name: "Operation & Maintenance",
            desc: "End-to-end plant operations and performance monitoring",
            icon: Settings2,
            path: "/services/operation-maintenance",
          },

          {
            name: "AMC Services",
            desc: "Annual maintenance and environmental support services",
            icon: ShieldCheck,
            path: "/services/amc-services",
          },

          {
            name: "Revamping & Retrofitting",
            desc: "Plant modernization and process optimization systems",
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
            desc: "Advanced environmental engineering and process design",
            icon: Cpu,
            path: "/services/technology-process",
          },
        ],
      },
    ],
  },

  // ======================================================
  // MAIN NAVIGATION
  // ======================================================

  {
    title: "Industries",
    path: "/industries",
  },

  {
    title: "Technologies",
    path: "/technologies",
  },

  {
    title: "Case Studies",
    path: "/case-studies",
  },

  {
    title: "About",
    path: "/about",
  },
];