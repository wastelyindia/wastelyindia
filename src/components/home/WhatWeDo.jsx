import {
  ArrowUpRight,
  Layers3,
  Settings2,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    number: "01",
    title: "Solutions",
    description:
      "Water and wastewater treatment solutions developed around different applications and project requirements.",
    icon: Waves,
    path: "/solutions",
  },
  {
    number: "02",
    title: "Services",
    description:
      "Project, plant operation, maintenance and technical support throughout the treatment system lifecycle.",
    icon: Settings2,
    path: "/services",
  },
  {
    number: "03",
    title: "Technologies",
    description:
      "Treatment technologies and systems selected to suit the application, process requirements and operating conditions.",
    icon: Layers3,
    path: "/technologies",
  },
];

const WhatWeDo = () => {
  return (
    <section className="wastely-section wastely-section-soft">
      <div className="wastely-container">
        {/* Section heading */}
        <div className="max-w-[720px]">
          <div className="wastely-section-eyebrow">
            What We Do
          </div>

          <h2 className="wastely-section-title">
            Water treatment solutions, services and technologies.
          </h2>

          <p className="wastely-section-description">
            Explore how Wastely Aqua approaches water and wastewater
            requirements — from the solution itself to the services and
            technologies that support it.
          </p>
        </div>

        {/* Overview links */}
        <div className="mt-12 grid border-l border-t border-wastely-line lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.number}
                to={item.path}
                className="
                  group
                  relative
                  flex
                  min-h-[270px]
                  flex-col
                  border-b
                  border-r
                  border-wastely-line
                  bg-white
                  p-6
                  transition-colors
                  duration-200
                  hover:bg-[#FBFDFE]
                  sm:p-7
                "
              >
                {/* Number + icon */}
                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-xs
                      font-semibold
                      tracking-[0.12em]
                      text-wastely-sub
                    "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-wastely-line
                      text-wastely-blue
                      transition-all
                      duration-200
                      group-hover:border-wastely-cyan
                      group-hover:bg-wastely-bg-soft
                    "
                  >
                    <Icon size={19} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto pt-16">
                  <h3
                    className="
                      text-xl
                      font-bold
                      leading-tight
                      text-wastely-deep
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[380px] text-sm leading-6 text-wastely-sub">
                    {item.description}
                  </p>
                </div>

                {/* Explore link */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-wastely-blue
                  "
                >
                  Explore
                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>

                {/* Bottom engineering accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-wastely-cyan
                    transition-all
                    duration-300
                    group-hover:w-20
                  "
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;






// import {
//   ArrowUpRight,
//   Droplets,
//   Factory,
//   Leaf,
//   Settings2,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const capabilities = [
//   {
//     number: "01",
//     title: "Wastewater Treatment",
//     description:
//       "Treatment solutions for industrial and municipal wastewater, designed around discharge, reuse and operating requirements.",
//     icon: Factory,
//     path: "/solutions/wastewater-treatment",
//   },
//   {
//     number: "02",
//     title: "Water Treatment",
//     description:
//       "Water treatment and purification solutions for reliable water quality across different applications.",
//     icon: Droplets,
//     path: "/solutions/water-treatment",
//   },
//   {
//     number: "03",
//     title: "Waterbody Restoration",
//     description:
//       "Solutions for improving the condition of lakes, ponds and other degraded water bodies.",
//     icon: Leaf,
//     path: "/solutions/water-body-restoration",
//   },
//   {
//     number: "04",
//     title: "Plant Services",
//     description:
//       "Operation, maintenance, upgrading and technical support for existing and new treatment systems.",
//     icon: Settings2,
//     path: "/services/operation-maintenance",
//   },
// ];

// const WhatWeDo = () => {
//   return (
//     <section className="wastely-section wastely-section-soft">
//       <div className="wastely-container">
//         {/* =====================================================
//             SECTION HEADER
//            ===================================================== */}

//         <div className="wastely-section-header">
//           <div className="wastely-section-eyebrow">
//             What We Do
//           </div>

//           <h2 className="wastely-section-title">
//             Water solutions from treatment to long-term operation.
//           </h2>

//           <p className="wastely-section-description">
//             We work across water and wastewater treatment, environmental
//             restoration and plant services to address practical water
//             management requirements.
//           </p>
//         </div>

//         {/* =====================================================
//             CAPABILITY GRID
//            ===================================================== */}

//         <div className="grid border-l border-t border-wastely-line sm:grid-cols-2">
//           {capabilities.map((item) => {
//             const Icon = item.icon;

//             return (
//               <Link
//                 key={item.number}
//                 to={item.path}
//                 className="
//                   group
//                   relative
//                   min-h-[260px]
//                   border-b
//                   border-r
//                   border-wastely-line
//                   bg-white
//                   p-6
//                   transition-colors
//                   duration-200
//                   hover:bg-white
//                 "
//               >
//                 {/* Top row */}
//                 <div className="flex items-start justify-between">
//                   <span
//                     className="
//                       text-xs
//                       font-semibold
//                       tracking-[0.12em]
//                       text-wastely-sub
//                     "
//                   >
//                     {item.number}
//                   </span>

//                   <div
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       border
//                       border-wastely-line
//                       text-wastely-blue
//                       transition-colors
//                       duration-200
//                       group-hover:border-wastely-cyan
//                       group-hover:bg-wastely-bg-soft
//                     "
//                   >
//                     <Icon size={18} strokeWidth={1.8} />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="mt-12 max-w-[430px]">
//                   <h3
//                     className="
//                       text-xl
//                       font-bold
//                       leading-tight
//                       text-wastely-deep
//                     "
//                   >
//                     {item.title}
//                   </h3>

//                   <p className="mt-4 text-sm leading-6 text-wastely-sub">
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Link indicator */}
//                 <div
//                   className="
//                     absolute
//                     bottom-6
//                     right-6
//                     flex
//                     items-center
//                     gap-2
//                     text-xs
//                     font-semibold
//                     uppercase
//                     tracking-[0.08em]
//                     text-wastely-blue
//                     opacity-0
//                     transition-all
//                     duration-200
//                     group-hover:translate-x-0
//                     group-hover:opacity-100
//                   "
//                 >
//                   Explore
//                   <ArrowUpRight size={15} />
//                 </div>

//                 {/* Engineering accent */}
//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     h-[2px]
//                     w-0
//                     bg-wastely-cyan
//                     transition-all
//                     duration-300
//                     group-hover:w-16
//                   "
//                 />
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeDo;