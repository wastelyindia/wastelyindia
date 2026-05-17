// import React from "react";
// import {
//   Droplets,
//   Waves,
//   Network,
//   Fish,
//   Leaf,
//   Wind,
//   Layers3,
//   Flower2,
//   Factory,
//   Boxes,
//   Cpu,
//   Settings2,
//   ShieldCheck,
//   RefreshCw,
//   ArrowUpRight,
// } from "lucide-react";

import Technology from "../components/Technologies/Technology";

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const technologiesData = {
//   solutions: [
//     {
//       title: "Wastewater Treatment",
//       slug: "wastewater-treatment",
//       description:
//         "Advanced wastewater treatment systems engineered for industrial and municipal applications.",
//       icon: Droplets,
//     },

//     {
//       title: "Water Treatment",
//       slug: "water-treatment",
//       description:
//         "Smart purification and filtration technologies delivering sustainable water treatment.",
//       icon: Waves,
//     },

//     {
//       title: "Integrated Water System",
//       slug: "integrated-water-system",
//       description:
//         "Integrated environmental engineering systems combining treatment and reuse.",
//       icon: Network,
//     },

//     {
//       title: "AquaCulture",
//       slug: "aquaculture",
//       description:
//         "Sustainable aquaculture ecosystem solutions focused on water quality.",
//       icon: Fish,
//     },

//     {
//       title: "Rejuvenation of Water Bodies",
//       slug: "lake-pond-rejuvenation",
//       description:
//         "Restoration of lakes, ponds, rivers, and polluted water bodies.",
//       icon: Leaf,
//     },
//   ],

//   products: [
//     {
//       title: "Aeration / Oxygenation",
//       slug: "aeration-oxygenation",
//       description:
//         "High-efficiency oxygen transfer systems for wastewater treatment.",
//       icon: Wind,
//     },

//     {
//       title: "IFAS / Membrane",
//       slug: "ifas-membrane",
//       description:
//         "Modern membrane-based biological treatment technologies.",
//       icon: Layers3,
//     },

//     {
//       title: "Floating Wetlands",
//       slug: "floating-wetlands",
//       description:
//         "Eco-based floating wetland systems for ecological restoration.",
//       icon: Flower2,
//     },

//     {
//       title: "Sludge Dewatering Unit",
//       slug: "sludge-dewatering-unit",
//       description:
//         "Efficient sludge reduction and dewatering systems.",
//       icon: Factory,
//     },

//     {
//       title: "Package Treatment Units",
//       slug: "package-treatment-units",
//       description:
//         "Compact modular wastewater treatment units.",
//       icon: Boxes,
//     },
//   ],

//   services: [
//     {
//       title: "Technology Process",
//       slug: "technology-process",
//       description:
//         "Advanced process engineering and optimization solutions.",
//       icon: Cpu,
//     },

//     {
//       title: "Operation & Maintenance",
//       slug: "operation-maintenance",
//       description:
//         "Complete plant operation and maintenance services.",
//       icon: Settings2,
//     },

//     {
//       title: "AMC Contract",
//       slug: "amc-services",
//       description:
//         "Preventive maintenance and annual service contracts.",
//       icon: ShieldCheck,
//     },

//     {
//       title: "Revamping & Retrofitting",
//       slug: "revamping-retrofitting",
//       description:
//         "Plant modernization and system retrofitting solutions.",
//       icon: RefreshCw,
//     },
//   ],
// };

// const TechnologyCard = ({ item, path }) => {
//   const Icon = item.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//     >
//       <Link
//         to={`${path}/${item.slug}`}
//         className="group relative block overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_60px_-12px_rgba(14,165,233,0.25)]"
//       >
//         {/* Glow */}
//         <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-transparent to-emerald-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-cyan-400/5 group-hover:to-emerald-400/5" />

//         {/* Icon */}
//         <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
//           <Icon size={30} strokeWidth={1.8} />
//         </div>

//         {/* Content */}
//         <div className="relative">
//           <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
//             {item.title}
//           </h3>

//           <p className="leading-7 text-slate-400">
//             {item.description}
//           </p>

//           <div className="mt-8 flex items-center gap-2 text-sm font-medium text-cyan-300">
//             Explore Technology

//             <ArrowUpRight
//               size={16}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </div>
//         </div>

//         {/* Bottom Gradient Border */}
//         <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500 group-hover:w-full" />
//       </Link>
//     </motion.div>
//   );
// };

// const TechnologiesSection = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#081219] py-28">
//       {/* Ambient Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />

//         <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />

//         <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-24 text-center">
//           <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
//             <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
//               Technologies & Solutions
//             </span>
//           </div>

//           <h2 className="mx-auto max-w-5xl text-5xl font-black leading-tight text-white md:text-6xl">
//             Intelligent Water Engineering
//             <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//               Powered By Innovation
//             </span>
//           </h2>

//           <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
//             Sustainable wastewater technologies, advanced treatment
//             systems, and environmental engineering services designed for
//             future-ready infrastructure.
//           </p>
//         </div>

//         {/* Solutions */}
//         <div className="mb-28">
//           <div className="mb-10 flex items-center gap-4">
//             <div className="h-px w-14 bg-gradient-to-r from-cyan-400 to-emerald-400" />

//             <h3 className="text-3xl font-bold text-white">
//               Solutions
//             </h3>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//             {technologiesData.solutions.map((item) => (
//               <TechnologyCard
//                 key={item.slug}
//                 item={item}
//                 path="/solutions"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Products */}
//         <div className="mb-28">
//           <div className="mb-10 flex items-center gap-4">
//             <div className="h-px w-14 bg-gradient-to-r from-cyan-400 to-emerald-400" />

//             <h3 className="text-3xl font-bold text-white">
//               Products
//             </h3>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//             {technologiesData.products.map((item) => (
//               <TechnologyCard
//                 key={item.slug}
//                 item={item}
//                 path="/products"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Services */}
//         <div>
//           <div className="mb-10 flex items-center gap-4">
//             <div className="h-px w-14 bg-gradient-to-r from-cyan-400 to-emerald-400" />

//             <h3 className="text-3xl font-bold text-white">
//               Services
//             </h3>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//             {technologiesData.services.map((item) => (
//               <TechnologyCard
//                 key={item.slug}
//                 item={item}
//                 path="/services"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const TechnologiesSection = () => {
  return (
    <Technology />
  )
}





export default TechnologiesSection;