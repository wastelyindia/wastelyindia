// import { motion } from "framer-motion";

// import {
//   BrainCircuit,
//   Cpu,
//   Orbit,
//   Radar,
//   Waves,
// } from "lucide-react";

// const items = [
//   {
//     title: "Biological",
//     id: "biological",
//     icon: Orbit,
//   },

//   {
//     title: "Mechanical",
//     id: "mechanical",
//     icon: Waves,
//   },

//   {
//     title: "Smart",
//     id: "smart",
//     icon: Radar,
//   },

//   {
//     title: "Hybrid",
//     id: "hybrid",
//     icon: Cpu,
//   },

//   {
//     title: "Workflow",
//     id: "workflow",
//     icon: BrainCircuit,
//   },
// ];

// const TechnologiesSideNav = () => {
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);

//     if (el) {
//       el.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <div
//       className="
//         fixed
//         right-6
//         top-1/2
//         z-[80]
//         hidden
//         -translate-y-1/2
//         xl:flex
//         flex-col gap-4
//       "
//     >
//       {items.map((item, index) => {
//         const Icon = item.icon;

//         return (
//           <motion.button
//             key={index}
//             whileHover={{
//               scale: 1.05,
//             }}
//             whileTap={{
//               scale: 0.98,
//             }}
//             onClick={() => scrollToSection(item.id)}
//             className="
//               group
//               relative
//               overflow-hidden
//               flex items-center gap-4
//               rounded-2xl
//               border border-white/10
//               bg-[#081219]/70
//               px-5 py-4
//               backdrop-blur-2xl
//               transition-all duration-300
//               hover:border-cyan-400/20
//               hover:bg-cyan-400/10
//               hover:shadow-[0_0_40px_-12px_rgba(14,165,233,0.35)]
//             "
//           >
//             {/* BG GLOW */}
//             <div
//               className="
//                 absolute inset-0
//                 opacity-0
//                 transition-opacity duration-300
//                 group-hover:opacity-100
//                 bg-gradient-to-r
//                 from-cyan-400/10
//                 to-transparent
//               "
//             />

//             {/* ICON */}
//             <div
//               className="
//                 relative z-10
//                 flex h-11 w-11
//                 items-center justify-center
//                 rounded-xl
//                 border border-cyan-400/20
//                 bg-cyan-400/10
//               "
//             >
//               <Icon
//                 size={18}
//                 className="text-cyan-300"
//               />
//             </div>

//             {/* TEXT */}
//             <span
//               className="
//                 relative z-10
//                 text-sm
//                 font-medium
//                 text-slate-300
//                 transition-colors duration-300
//                 group-hover:text-white
//               "
//             >
//               {item.title}
//             </span>

//             {/* ACTIVE DOT */}
//             <div
//               className="
//                 relative z-10
//                 ml-auto
//                 h-2 w-2
//                 rounded-full
//                 bg-cyan-400/60
//                 opacity-0
//                 transition-opacity duration-300
//                 group-hover:opacity-100
//               "
//             />
//           </motion.button>
//         );
//       })}
//     </div>
//   );
// };

// export default TechnologiesSideNav;



import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  BrainCircuit,
  Cpu,
  Orbit,
  Radar,
  Waves,
} from "lucide-react";

const items = [
  {
    title: "Biological",
    id: "biological",
    icon: Orbit,
  },

  {
    title: "Mechanical",
    id: "mechanical",
    icon: Waves,
  },

  {
    title: "Smart",
    id: "smart",
    icon: Radar,
  },

  {
    title: "Hybrid",
    id: "hybrid",
    icon: Cpu,
  },

  {
    title: "Workflow",
    id: "workflow",
    icon: BrainCircuit,
  },
];

const TechnologiesSideNav = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      const offset = 120;

      const top =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* DESKTOP / TABLET */}
      <div
        className="
          fixed
          right-3
          top-1/2
          z-[80]
          hidden
          -translate-y-1/2
          md:flex
          flex-col gap-3
        "
      >
        {items.map((item, index) => {
          const Icon = item.icon;

          const active = activeSection === item.id;

          return (
            <motion.button
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.title}
              className={`
                group
                relative
                overflow-hidden
                flex items-center
                gap-3
                rounded-2xl
                border
                backdrop-blur-2xl
                transition-all duration-300

                px-3 xl:px-5
                py-3

                ${
                  active
                    ? `
                      border-cyan-400/30
                      bg-cyan-400/10
                      shadow-[0_0_45px_-12px_rgba(34,211,238,0.35)]
                    `
                    : `
                      border-white/10
                      bg-[#081219]/70
                      hover:border-cyan-400/20
                      hover:bg-cyan-400/10
                    `
                }
              `}
            >
              {/* GLOW */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                  bg-gradient-to-r
                  from-cyan-400/10
                  to-transparent
                "
              />

              {/* ICON */}
              <div
                className={`
                  relative z-10
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  border
                  transition-all duration-300

                  ${
                    active
                      ? `
                        border-cyan-400/30
                        bg-cyan-400/15
                      `
                      : `
                        border-cyan-400/15
                        bg-cyan-400/10
                      `
                  }
                `}
              >
                <Icon
                  size={17}
                  className="
                    text-cyan-300
                  "
                />
              </div>

              {/* LABEL */}
              <span
                className={`
                  relative z-10
                  hidden xl:block
                  text-sm font-medium
                  transition-colors duration-300

                  ${
                    active
                      ? "text-white"
                      : "text-slate-300 group-hover:text-white"
                  }
                `}
              >
                {item.title}
              </span>

              {/* ACTIVE DOT */}
              <div
                className={`
                  relative z-10
                  h-2 w-2
                  rounded-full
                  transition-all duration-300

                  ${
                    active
                      ? `
                        bg-cyan-300
                        opacity-100
                        shadow-[0_0_12px_rgba(34,211,238,0.9)]
                      `
                      : `
                        bg-cyan-400/50
                        opacity-0
                        group-hover:opacity-100
                      `
                  }
                `}
              />
            </motion.button>
          );
        })}
      </div>

      {/* MOBILE FLOATING NAV */}
      <div
        className="
          fixed
          bottom-4
          left-1/2
          z-[90]
          flex
          -translate-x-1/2
          items-center gap-2
          rounded-full
          border border-white/10
          bg-[#081219]/80
          px-3 py-2
          backdrop-blur-2xl
          md:hidden
        "
      >
        {items.map((item, index) => {
          const Icon = item.icon;

          const active = activeSection === item.id;

          return (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.title}
              className={`
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border
                transition-all duration-300

                ${
                  active
                    ? `
                      border-cyan-400/30
                      bg-cyan-400/15
                    `
                    : `
                      border-white/10
                      bg-white/[0.03]
                    `
                }
              `}
            >
              <Icon
                size={18}
                className={`
                  transition-colors duration-300

                  ${
                    active
                      ? "text-cyan-300"
                      : "text-slate-400"
                  }
                `}
              />
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TechnologiesSideNav;