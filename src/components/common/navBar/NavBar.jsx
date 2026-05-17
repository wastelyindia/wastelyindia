// // Navbar.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   Waves,
//   Factory,
//   Cpu,
//   Settings2,
//   Leaf,
//   FlaskConical,
// } from "lucide-react";
// import {navItems} from "./navData"

// import Logo from "../../../assets/wastely_logo.png";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-50
//         transition-all duration-500
//         ${
//           scrolled
//             ? "bg-[#081219]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
//             : "bg-transparent"
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="h-24 flex items-center justify-between">

//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={Logo}
//               alt="Wastely Aqua"
//               className="h-14 object-contain"
//             />

//             <div className="hidden xl:block">
//               <h1 className="text-white font-semibold tracking-wide text-lg">
//                 WASTELY AQUA
//               </h1>

//               <p className="text-xs text-cyan-200/70 tracking-widest uppercase">
//                 Environmental Engineering
//               </p>
//             </div>
//           </Link>

//           {/* DESKTOP MENU */}
//           <nav className="hidden lg:flex items-center gap-6 xl:gap-10">

//             {navItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative"
//                 onMouseEnter={() => setActiveMenu(index)}
//                 onMouseLeave={() => setActiveMenu(null)}
//               >

//                 {item.megaMenu ? (
//                   <>
//                     <button
//                       className="
//                         flex items-center gap-1
//                         text-white/90
//                         hover:text-cyan-300
//                         font-medium
//                         tracking-wide
//                         transition-all duration-300
//                       "
//                     >
//                       {item.title}
//                       <ChevronDown size={18} />
//                     </button>

//                     {/* MEGA MENU */}
//                     <div
//                         // absolute top-14 left-1/2 -translate-x-1/2
//                       className={`
//                         absolute top-full pt-6 left-1/2 -translate-x-1/2
//                         w-[90vw] max-w-[850px]
//                         transition-all duration-300
//                         ${
//                           activeMenu === index
//                             ? "opacity-100 visible translate-y-0"
//                             : "opacity-0 invisible translate-y-5"
//                         }
//                       `}
//                     >
//                       <div
//                         className="
//                           bg-[#0B1220]/95
//                           backdrop-blur-2xl
//                           border border-white/10
//                           rounded-3xl
//                           shadow-[0_20px_80px_rgba(0,0,0,0.45)]
//                           p-8
//                         "
//                       >
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//                           {item.sections.map((section, idx) => (
//                             <div key={idx}>
//                               <h3
//                                 className="
//                                   text-cyan-300
//                                   text-sm
//                                   uppercase
//                                   tracking-[3px]
//                                   mb-5
//                                 "
//                               >
//                                 {section.heading}
//                               </h3>

//                               <div className="space-y-3">

//                                 {section.links.map((link, i) => {
//                                   const Icon = link.icon;

//                                   return (
//                                     <Link
//                                       key={i}
//                                       to={link.path}
//                                       className="
//                                         group
//                                         flex items-start gap-4
//                                         p-4
//                                         rounded-2xl
//                                         hover:bg-white/5
//                                         transition-all duration-300
//                                       "
//                                     >
//                                       <div
//                                         className="
//                                           bg-cyan-500/10
//                                           border border-cyan-400/20
//                                           p-3
//                                           rounded-xl
//                                           group-hover:scale-110
//                                           transition-all duration-300
//                                         "
//                                       >
//                                         <Icon
//                                           size={20}
//                                           className="text-cyan-300"
//                                         />
//                                       </div>

//                                       <div>
//                                         <h4
//                                           className="
//                                             text-white
//                                             font-medium
//                                             group-hover:text-cyan-300
//                                             transition-all
//                                           "
//                                         >
//                                           {link.name}
//                                         </h4>

//                                         <p
//                                           className="
//                                             text-sm
//                                             text-slate-400
//                                             mt-1
//                                             leading-relaxed
//                                           "
//                                         >
//                                           {link.desc}
//                                         </p>
//                                       </div>
//                                     </Link>
//                                   );
//                                 })}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <Link
//                     to={item.path}
//                     className="
//                       text-white/90
//                       hover:text-cyan-300
//                       font-medium
//                       tracking-wide
//                       transition-all duration-300
//                     "
//                   >
//                     {item.title}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* RIGHT SIDE */}
//           <div className="hidden lg:flex items-center gap-4">

//             <Link
//               to="/contact"
//               className="
//                 relative overflow-hidden
//                 px-6 py-3
//                 rounded-full
//                 bg-gradient-to-r
//                 from-cyan-500
//                 to-emerald-500
//                 text-white
//                 font-medium
//                 shadow-lg shadow-cyan-500/20
//                 hover:scale-105
//                 transition-all duration-300
//               "
//             >
//               Request Consultation
//             </Link>
//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             className="lg:hidden text-white"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={32} /> : <Menu size={32} />}
//           </button>
//         </div>
//       </div>






//       {/* MOBILE MENU */}
//       <div
//         className={`
//           lg:hidden
//           fixed top-0 right-0
//           h-screen w-[90%] sm:w-[80%] max-w-[420px]
//           overflow-y-auto
//           bg-[#081219]/95
//           backdrop-blur-2xl
//           border-l border-white/10
//           transition-all duration-500
//           ${
//             mobileOpen
//               ? "translate-x-0"
//               : "translate-x-full"
//           }
//         `}
//       >
//         <div className="p-8 pt-28">

//           <div className="space-y-8">

//             {navItems.map((item, index) => (
//               <div key={index}>

//                 <h2
//                   className="
//                     text-white
//                     text-lg
//                     font-medium
//                     mb-4
//                   "
//                 >
//                   {item.title}
//                 </h2>

//                 {item.sections && (
//                   <div className="space-y-5 pl-2">

//                     {item.sections.map((section, idx) => (
//                       <div key={idx}>

//                         <h3
//                           className="
//                             text-cyan-300
//                             uppercase
//                             text-xs
//                             tracking-[2px]
//                             mb-3
//                           "
//                         >
//                           {section.heading}
//                         </h3>

//                         <div className="space-y-3">

//                           {section.links.map((link, i) => (
//                             <Link
//                               key={i}
//                               to={link.path}
//                               className="
//                                 block
//                                 text-slate-300
//                                 hover:text-cyan-300
//                                 transition-all duration-300
//                               "
//                             >
//                               {link.name}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}

//             <Link
//               to="/contact"
//               className="
//                 inline-block
//                 mt-6
//                 px-6 py-3
//                 rounded-full
//                 bg-gradient-to-r
//                 from-cyan-500
//                 to-emerald-500
//                 text-white
//                 font-medium
//               "
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




// // Navbar.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Menu,
//   X,
//   ChevronDown,
// } from "lucide-react";

// import { navItems } from "./navData";
// import Logo from "../../../assets/wastely_logo.png";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [mobileOpen]);

//   return (
//     <>
//       <header
//         className={`
//           fixed top-0 left-0 w-full z-50
//           transition-all duration-500
//           ${
//             scrolled
//               ? "bg-[#081219]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
//               : "bg-transparent"
//           }
//         `}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="h-20 lg:h-24 flex items-center justify-between">

//             {/* LOGO */}
//             <Link
//               to="/"
//               className="flex items-center gap-3 shrink-0"
//             >
//               <img
//                 src={Logo}
//                 alt="Wastely Aqua"
//                 className="h-12 lg:h-14 object-contain"
//               />

//               <div className="hidden xl:block">
//                 <h1 className="text-white font-semibold tracking-wide text-lg">
//                   WASTELY AQUA
//                 </h1>

//                 <p className="text-xs text-cyan-200/70 tracking-widest uppercase">
//                   Environmental Engineering
//                 </p>
//               </div>
//             </Link>

//             {/* DESKTOP MENU */}
//             <nav className="hidden lg:flex items-center gap-6 xl:gap-10">

//               {navItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="relative"
//                   onMouseEnter={() => setActiveMenu(index)}
//                   onMouseLeave={() => setActiveMenu(null)}
//                 >

//                   {item.megaMenu ? (
//                     <>
//                       <button
//                         className="
//                           flex items-center gap-1
//                           text-white/90
//                           hover:text-cyan-300
//                           font-medium
//                           tracking-wide
//                           transition-all duration-300
//                         "
//                       >
//                         {item.title}
//                         <ChevronDown size={18} />
//                       </button>

//                       {/* MEGA MENU */}
//                       <div
//                         className={`
//                           absolute top-full pt-6 left-1/2 -translate-x-1/2
//                           w-[92vw] max-w-[900px]
//                           transition-all duration-300
//                           ${
//                             activeMenu === index
//                               ? "opacity-100 visible translate-y-0"
//                               : "opacity-0 invisible translate-y-5"
//                           }
//                         `}
//                       >
//                         <div
//                           className="
//                             bg-[#0B1220]/95
//                             backdrop-blur-2xl
//                             border border-white/10
//                             rounded-3xl
//                             shadow-[0_20px_80px_rgba(0,0,0,0.45)]
//                             p-6 lg:p-8
//                           "
//                         >
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//                             {item.sections.map((section, idx) => (
//                               <div key={idx}>
//                                 <h3
//                                   className="
//                                     text-cyan-300
//                                     text-sm
//                                     uppercase
//                                     tracking-[3px]
//                                     mb-5
//                                   "
//                                 >
//                                   {section.heading}
//                                 </h3>

//                                 <div className="space-y-3">

//                                   {section.links.map((link, i) => {
//                                     const Icon = link.icon;

//                                     return (
//                                       <Link
//                                         key={i}
//                                         to={link.path}
//                                         className="
//                                           group
//                                           flex items-start gap-4
//                                           p-4
//                                           rounded-2xl
//                                           hover:bg-white/5
//                                           transition-all duration-300
//                                         "
//                                       >
//                                         <div
//                                           className="
//                                             bg-cyan-500/10
//                                             border border-cyan-400/20
//                                             p-3
//                                             rounded-xl
//                                             shrink-0
//                                             group-hover:scale-110
//                                             transition-all duration-300
//                                           "
//                                         >
//                                           <Icon
//                                             size={20}
//                                             className="text-cyan-300"
//                                           />
//                                         </div>

//                                         <div>
//                                           <h4
//                                             className="
//                                               text-white
//                                               font-medium
//                                               group-hover:text-cyan-300
//                                               transition-all
//                                             "
//                                           >
//                                             {link.name}
//                                           </h4>

//                                           <p
//                                             className="
//                                               text-sm
//                                               text-slate-400
//                                               mt-1
//                                               leading-relaxed
//                                             "
//                                           >
//                                             {link.desc}
//                                           </p>
//                                         </div>
//                                       </Link>
//                                     );
//                                   })}
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <Link
//                       to={item.path}
//                       className="
//                         text-white/90
//                         hover:text-cyan-300
//                         font-medium
//                         tracking-wide
//                         transition-all duration-300
//                       "
//                     >
//                       {item.title}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* RIGHT SIDE */}
//             <div className="hidden lg:flex items-center gap-4">

//               <Link
//                 to="/contact"
//                 className="
//                   relative overflow-hidden
//                   px-5 xl:px-6
//                   py-3
//                   rounded-full
//                   bg-gradient-to-r
//                   from-cyan-500
//                   to-emerald-500
//                   text-white
//                   text-sm xl:text-base
//                   font-medium
//                   shadow-lg shadow-cyan-500/20
//                   hover:scale-105
//                   transition-all duration-300
//                 "
//               >
//                 Request Consultation
//               </Link>
//             </div>

//             {/* MOBILE BUTTON */}
//             <button
//               aria-label="Toggle Menu"
//               className="lg:hidden text-white z-[60]"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={32} /> : <Menu size={32} />}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* OVERLAY */}
//       <div
//         className={`
//           fixed inset-0 z-40 lg:hidden
//           bg-black/60 backdrop-blur-sm
//           transition-all duration-500
//           ${
//             mobileOpen
//               ? "opacity-100 visible"
//               : "opacity-0 invisible"
//           }
//         `}
//         onClick={() => setMobileOpen(false)}
//       />

//       {/* MOBILE MENU */}
//       <div
//         className={`
//           lg:hidden
//           fixed top-0 right-0 z-50
//           h-screen
//           w-[90%] sm:w-[80%]
//           max-w-[420px]
//           overflow-y-auto
//           bg-[#081219]/95
//           backdrop-blur-2xl
//           border-l border-white/10
//           transition-all duration-500
//           ${
//             mobileOpen
//               ? "translate-x-0"
//               : "translate-x-full"
//           }
//         `}
//       >
//         <div className="p-6 sm:p-8 pt-24">

//           <div className="space-y-8">

//             {navItems.map((item, index) => (
//               <div key={index}>

//                 {/* SIMPLE NAV ITEMS */}
//                 {!item.sections ? (
//                   <Link
//                     to={item.path}
//                     onClick={() => setMobileOpen(false)}
//                     className="
//                       block
//                       text-white
//                       text-lg
//                       font-medium
//                       hover:text-cyan-300
//                       transition-all duration-300
//                     "
//                   >
//                     {item.title}
//                   </Link>
//                 ) : (
//                   <>
//                     {/* MEGA MENU TITLE */}
//                     <h2
//                       className="
//                         text-white
//                         text-lg
//                         font-medium
//                         mb-4
//                       "
//                     >
//                       {item.title}
//                     </h2>

//                     {/* SECTIONS */}
//                     <div className="space-y-5 pl-2">

//                       {item.sections.map((section, idx) => (
//                         <div key={idx}>

//                           <h3
//                             className="
//                               text-cyan-300
//                               uppercase
//                               text-xs
//                               tracking-[2px]
//                               mb-3
//                             "
//                           >
//                             {section.heading}
//                           </h3>

//                           <div className="space-y-3">

//                             {section.links.map((link, i) => (
//                               <Link
//                                 key={i}
//                                 to={link.path}
//                                 onClick={() => setMobileOpen(false)}
//                                 className="
//                                   block
//                                   text-slate-300
//                                   hover:text-cyan-300
//                                   transition-all duration-300
//                                 "
//                               >
//                                 {link.name}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}

//             {/* MOBILE CTA */}
//             <Link
//               to="/contact"
//               onClick={() => setMobileOpen(false)}
//               className="
//                 inline-flex
//                 items-center
//                 justify-center
//                 w-full
//                 mt-6
//                 px-6 py-3
//                 rounded-full
//                 bg-gradient-to-r
//                 from-cyan-500
//                 to-emerald-500
//                 text-white
//                 font-medium
//                 shadow-lg shadow-cyan-500/20
//               "
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



// Navbar.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import { navItems } from "./navData";
import Logo from "../../../assets/wastely_logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // ======================================================
  // SCROLL EFFECT
  // ======================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // ======================================================
  // BODY SCROLL LOCK
  // ======================================================

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ====================================================== */}
      {/* HEADER */}
      {/* ====================================================== */}

      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500

          ${
            scrolled
              ? `
                bg-[#081219]/80
                backdrop-blur-2xl
                border-b border-white/10
                shadow-[0_10px_50px_rgba(0,0,0,0.35)]
              `
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-4 md:px-6 xl:px-8
          "
        >
          <div
            className="
              h-20 xl:h-24
              flex items-center justify-between
              gap-6
            "
          >
            {/* ====================================================== */}
            {/* LOGO */}
            {/* ====================================================== */}

            <Link
              to="/"
              className="
                flex items-center
                gap-3
                shrink-0
                min-w-fit
              "
            >
              <img
                src={Logo}
                alt="Wastely Aqua"
                className="
                  h-12 xl:h-14
                  object-contain
                "
              />

              {/* LARGE SCREEN BRAND TEXT */}
              <div className="hidden 2xl:block">
                <h1
                  className="
                    text-white
                    font-semibold
                    tracking-wide
                    text-lg
                    whitespace-nowrap
                  "
                >
                  WASTELY AQUA
                </h1>

                <p
                  className="
                    text-xs
                    text-cyan-200/70
                    tracking-[0.22em]
                    uppercase
                    mt-1
                  "
                >
                  Environmental Engineering
                </p>
              </div>
            </Link>

            {/* ====================================================== */}
            {/* DESKTOP NAVIGATION */}
            {/* ====================================================== */}

            <nav
              className="
                hidden xl:flex
                items-center
                justify-center
                gap-5
                2xl:gap-8
                flex-1
              "
            >
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() =>
                    setActiveMenu(index)
                  }
                  onMouseLeave={() =>
                    setActiveMenu(null)
                  }
                >
                  {/* ====================================================== */}
                  {/* MEGA MENU */}
                  {/* ====================================================== */}

                  {item.megaMenu ? (
                    <>
                      <button
                        className="
                          flex items-center gap-1
                          text-[15px]
                          font-medium
                          tracking-wide
                          whitespace-nowrap
                          text-white/90
                          hover:text-cyan-300
                          transition-all duration-300
                        "
                      >
                        {item.title}

                        <ChevronDown
                          size={17}
                        />
                      </button>

                      {/* DROPDOWN */}
                      <div
                        className={`
                          absolute
                          left-1/2 top-full
                          pt-6
                          -translate-x-1/2
                          w-[92vw]
                          max-w-[980px]

                          transition-all duration-300

                          ${
                            activeMenu === index
                              ? `
                                opacity-100
                                visible
                                translate-y-0
                              `
                              : `
                                opacity-0
                                invisible
                                translate-y-5
                              `
                          }
                        `}
                      >
                        <div
                          className="
                            rounded-[32px]
                            border border-white/10
                            bg-[#0B1220]/95
                            backdrop-blur-2xl
                            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                            p-7 xl:p-8
                          "
                        >
                          <div
                            className="
                              grid
                              grid-cols-1 md:grid-cols-2
                              gap-8
                            "
                          >
                            {item.sections.map(
                              (
                                section,
                                idx
                              ) => (
                                <div key={idx}>
                                  <h3
                                    className="
                                      mb-5
                                      text-xs
                                      uppercase
                                      tracking-[0.24em]
                                      text-cyan-300
                                    "
                                  >
                                    {
                                      section.heading
                                    }
                                  </h3>

                                  <div className="space-y-3">
                                    {section.links.map(
                                      (
                                        link,
                                        i
                                      ) => {
                                        const Icon =
                                          link.icon;

                                        return (
                                          <Link
                                            key={
                                              i
                                            }
                                            to={
                                              link.path
                                            }
                                            className="
                                              group
                                              flex items-start gap-4
                                              rounded-2xl
                                              p-4
                                              transition-all duration-300
                                              hover:bg-white/5
                                            "
                                          >
                                            {/* ICON */}
                                            <div
                                              className="
                                                shrink-0
                                                rounded-2xl
                                                border border-cyan-400/20
                                                bg-cyan-500/10
                                                p-3
                                                transition-all duration-300
                                                group-hover:scale-110
                                              "
                                            >
                                              <Icon
                                                size={
                                                  20
                                                }
                                                className="text-cyan-300"
                                              />
                                            </div>

                                            {/* TEXT */}
                                            <div>
                                              <h4
                                                className="
                                                  text-white
                                                  font-medium
                                                  transition-all
                                                  group-hover:text-cyan-300
                                                "
                                              >
                                                {
                                                  link.name
                                                }
                                              </h4>

                                              <p
                                                className="
                                                  mt-1
                                                  text-sm
                                                  leading-relaxed
                                                  text-slate-400
                                                "
                                              >
                                                {
                                                  link.desc
                                                }
                                              </p>
                                            </div>
                                          </Link>
                                        );
                                      }
                                    )}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    // ======================================================
                    // NORMAL LINK
                    // ======================================================

                    <Link
                      to={item.path}
                      className="
                        text-[15px]
                        font-medium
                        tracking-wide
                        whitespace-nowrap
                        text-white/90
                        hover:text-cyan-300
                        transition-all duration-300
                      "
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* ====================================================== */}
            {/* RIGHT CTA */}
            {/* ====================================================== */}

            <div
              className="
                hidden xl:flex
                items-center
                shrink-0
              "
            >
              <Link
                to="/contact"
                className="
                  relative overflow-hidden
                  rounded-full

                  bg-gradient-to-r
                  from-cyan-500
                  to-emerald-500

                  px-5 2xl:px-6
                  py-2.5

                  text-sm 2xl:text-base
                  font-medium
                  text-white

                  shadow-lg shadow-cyan-500/20

                  transition-all duration-300
                  hover:scale-105
                "
              >
                Request Consultation
              </Link>
            </div>

            {/* ====================================================== */}
            {/* MOBILE MENU BUTTON */}
            {/* ====================================================== */}

            <button
              aria-label="Toggle Menu"
              className="
                xl:hidden
                text-white
                z-[60]
              "
              onClick={() =>
                setMobileOpen(
                  !mobileOpen
                )
              }
            >
              {mobileOpen ? (
                <X size={32} />
              ) : (
                <Menu size={32} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ====================================================== */}
      {/* MOBILE OVERLAY */}
      {/* ====================================================== */}

      <div
        className={`
          fixed inset-0 z-40
          xl:hidden

          bg-black/60
          backdrop-blur-sm

          transition-all duration-500

          ${
            mobileOpen
              ? `
                opacity-100
                visible
              `
              : `
                opacity-0
                invisible
              `
          }
        `}
        onClick={() =>
          setMobileOpen(false)
        }
      />

      {/* ====================================================== */}
      {/* MOBILE MENU */}
      {/* ====================================================== */}

      <div
        className={`
          fixed top-0 right-0 z-50
          xl:hidden

          h-screen
          w-[90%] sm:w-[80%]
          max-w-[420px]

          overflow-y-auto

          border-l border-white/10

          bg-[#081219]/95
          backdrop-blur-2xl

          transition-all duration-500

          ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div
          className="
            p-6 sm:p-8
            pt-24
          "
        >
          <div className="space-y-8">
            {navItems.map(
              (item, index) => (
                <div key={index}>
                  {/* SIMPLE LINKS */}
                  {!item.sections ? (
                    <Link
                      to={item.path}
                      onClick={() =>
                        setMobileOpen(
                          false
                        )
                      }
                      className="
                        block
                        text-lg
                        font-medium
                        text-white
                        transition-all duration-300
                        hover:text-cyan-300
                      "
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      {/* TITLE */}
                      <h2
                        className="
                          mb-4
                          text-lg
                          font-medium
                          text-white
                        "
                      >
                        {item.title}
                      </h2>

                      {/* SECTIONS */}
                      <div
                        className="
                          pl-2
                          space-y-5
                        "
                      >
                        {item.sections.map(
                          (
                            section,
                            idx
                          ) => (
                            <div
                              key={idx}
                            >
                              <h3
                                className="
                                  mb-3
                                  text-xs
                                  uppercase
                                  tracking-[0.18em]
                                  text-cyan-300
                                "
                              >
                                {
                                  section.heading
                                }
                              </h3>

                              <div className="space-y-3">
                                {section.links.map(
                                  (
                                    link,
                                    i
                                  ) => (
                                    <Link
                                      key={
                                        i
                                      }
                                      to={
                                        link.path
                                      }
                                      onClick={() =>
                                        setMobileOpen(
                                          false
                                        )
                                      }
                                      className="
                                        block
                                        text-slate-300
                                        transition-all duration-300
                                        hover:text-cyan-300
                                      "
                                    >
                                      {
                                        link.name
                                      }
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </>
                  )}
                </div>
              )
            )}

            {/* MOBILE CTA */}
            <Link
              to="/contact"
              onClick={() =>
                setMobileOpen(false)
              }
              className="
                mt-6
                inline-flex
                w-full
                items-center justify-center

                rounded-full

                bg-gradient-to-r
                from-cyan-500
                to-emerald-500

                px-6 py-3

                font-medium
                text-white

                shadow-lg shadow-cyan-500/20
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;