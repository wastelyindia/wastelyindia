

// // Footer.jsx

// import { Link } from "react-router-dom";

// import {
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
// } from "lucide-react";
// // Linkedin,
// // Instagram,
// // Facebook,

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";


// import Logo from "../../../assets/wastely_logo1.png";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#050B12] overflow-hidden">

//       {/* BACKGROUND GLOW */}
//       <div
//         className="
//           absolute top-0 left-1/2
//           -translate-x-1/2
//           w-[700px] h-[700px]
//           bg-cyan-500/10
//           blur-[140px]
//           rounded-full
//           pointer-events-none
//         "
//       />

//       {/* TOP BORDER */}
//       <div
//         className="
//           h-[1px]
//           w-full
//           bg-gradient-to-r
//           from-transparent
//           via-cyan-400/20
//           to-transparent
//         "
//       />

//       <div
//         className="
//           relative z-10
//           max-w-7xl
//           mx-auto
//           px-4 sm:px-6 lg:px-8
//           pt-16 sm:pt-20 lg:pt-24
//           pb-8
//         "
//       >

//         {/* MAIN GRID */}
//         <div
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             lg:grid-cols-[1.4fr_1fr_1fr_1fr]
//             gap-12 lg:gap-16
//           "
//         >

//           {/* BRAND */}
//           <div>

//             <img
//               src={Logo}
//               alt="Wastely Aqua"
//               className="h-16 sm:h-20 object-contain"
//             />

//             <p
//               className="
//                 mt-6 sm:mt-8
//                 text-slate-400
//                 leading-relaxed
//                 text-sm sm:text-base
//                 max-w-md
//               "
//             >
//               Delivering advanced wastewater treatment,
//               recycling, and environmental infrastructure
//               systems for sustainable industrial and
//               municipal ecosystems.
//             </p>

//             {/* SOCIAL */}
//             <div className="flex items-center gap-4 mt-8">

//               <a
//                 href="#"
//                 className="
//                   w-11 h-11
//                   rounded-2xl
//                   bg-white/5
//                   border border-white/10
//                   flex items-center justify-center
//                   text-slate-400
//                   hover:text-cyan-300
//                   hover:border-cyan-400/30
//                   transition-all duration-300
//                 "
//               >
//                 {/* <Linkedin size={18} /> */}
//                 <FaLinkedinIn size={16} />
//               </a>

//               <a
//                 href="#"
//                 className="
//                   w-11 h-11
//                   rounded-2xl
//                   bg-white/5
//                   border border-white/10
//                   flex items-center justify-center
//                   text-slate-400
//                   hover:text-cyan-300
//                   hover:border-cyan-400/30
//                   transition-all duration-300
//                 "
//               >
//                 {/* <Instagram size={18} /> */}
//                 <FaInstagram size={16} />
//               </a>

//               <a
//                 href="#"
//                 className="
//                   w-11 h-11
//                   rounded-2xl
//                   bg-white/5
//                   border border-white/10
//                   flex items-center justify-center
//                   text-slate-400
//                   hover:text-cyan-300
//                   hover:border-cyan-400/30
//                   transition-all duration-300
//                 "
//               >
//                 {/* <Facebook size={18} /> */}
//                 <FaFacebookF size={16} />
//               </a>
//             </div>

//             {/* CONTACT */}
//             <div className="mt-10 space-y-5">

//               {/* PHONE */}
//               <div className="flex items-start gap-4">

//                 <div
//                   className="
//                     w-11 h-11 sm:w-12 sm:h-12
//                     shrink-0
//                     flex items-center justify-center
//                     rounded-2xl
//                     bg-white/5
//                     border border-white/10
//                   "
//                 >
//                   <Phone
//                     size={18}
//                     className="text-cyan-300"
//                   />
//                 </div>

//                 <div>
//                   <p className="text-slate-500 text-sm">
//                     Phone
//                   </p>

//                   <a
//                     href="tel:+918853043647"
//                     className="
//                       text-white
//                       hover:text-cyan-300
//                       transition-all
//                     "
//                   >
//                     +91 88530 43647
//                   </a>
//                 </div>
//               </div>

//               {/* EMAIL */}
//               <div className="flex items-start gap-4">

//                 <div
//                   className="
//                     w-11 h-11 sm:w-12 sm:h-12
//                     shrink-0
//                     flex items-center justify-center
//                     rounded-2xl
//                     bg-white/5
//                     border border-white/10
//                   "
//                 >
//                   <Mail
//                     size={18}
//                     className="text-emerald-300"
//                   />
//                 </div>

//                 <div>
//                   <p className="text-slate-500 text-sm">
//                     Email
//                   </p>

//                   <a
//                     href="mailto:info@wastelyaqua.com"
//                     className="
//                       text-white
//                       break-all
//                       hover:text-cyan-300
//                       transition-all
//                     "
//                   >
//                     info@wastelyaqua.com
//                   </a>
//                 </div>
//               </div>

//               {/* LOCATION */}
//               <div className="flex items-start gap-4">

//                 <div
//                   className="
//                     w-11 h-11 sm:w-12 sm:h-12
//                     shrink-0
//                     flex items-center justify-center
//                     rounded-2xl
//                     bg-white/5
//                     border border-white/10
//                   "
//                 >
//                   <MapPin
//                     size={18}
//                     className="text-cyan-300"
//                   />
//                 </div>

//                 <div>
//                   <p className="text-slate-500 text-sm">
//                     Location
//                   </p>

//                   <h4 className="text-white">
//                     Mumbai, India
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* SOLUTIONS */}
//           <div>

//             <h3
//               className="
//                 text-white
//                 text-lg
//                 font-semibold
//                 mb-6 sm:mb-8
//               "
//             >
//               Solutions
//             </h3>

//             <div className="space-y-4">

//               <Link
//                 to="/solutions/wastewater-treatment"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Wastewater Treatment
//               </Link>

//               <Link
//                 to="/solutions/water-treatment"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Water Treatment
//               </Link>

//               <Link
//                 to="/solutions/integrated-water-system"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Integrated Water System
//               </Link>

//               <Link
//                 to="/solutions/aquaculture"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Aquaculture
//               </Link>

//               <Link
//                 to="/solutions/lake-pond-rejuvenation"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Lake & Pond Rejuvenation
//               </Link>

//               <Link
//                 to="/solutions/water-body-restoration"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 River Restoration
//               </Link>
//             </div>
//           </div>

//           {/* PRODUCTS & SERVICES */}
//           <div>

//             <h3
//               className="
//                 text-white
//                 text-lg
//                 font-semibold
//                 mb-6 sm:mb-8
//               "
//             >
//               Products
//             </h3>

//             <div className="space-y-4">

//               <Link
//                 to="/products/aeration-oxygenation"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Aeration Technology
//               </Link>

//               <Link
//                 to="/products/ifas-membrane"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 IFAS / Membrane
//               </Link>

//               <Link
//                 to="/products/floating-wetlands"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Floating Wetlands
//               </Link>

//               <Link
//                 to="/products/sludge-dewatering-unit"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Sludge Dewatering
//               </Link>

//               <Link
//                 to="/services/operation-maintenance"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Operation & Maintenance
//               </Link>

//               <Link
//                 to="/services/revamping-retrofitting"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Revamping & Retrofitting
//               </Link>
//             </div>
//           </div>

//           {/* COMPANY */}
//           <div>

//             <h3
//               className="
//                 text-white
//                 text-lg
//                 font-semibold
//                 mb-6 sm:mb-8
//               "
//             >
//               Company
//             </h3>

//             <div className="space-y-4">

//               <Link
//                 to="/"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Home
//               </Link>

//               <Link
//                 to="/about"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 About Us
//               </Link>

//               <Link
//                 to="/industries"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Industries
//               </Link>

//               <Link
//                 to="/technologies"
//                 className="
//                   block
//                   text-slate-400
//                   hover:text-cyan-300
//                   transition-all duration-300
//                 "
//               >
//                 Technologies
//               </Link>

//               <Link
//                 to="/contact"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   text-cyan-300
//                   font-medium
//                   group
//                   pt-2
//                 "
//               >
//                 Contact Us

//                 <ArrowRight
//                   size={18}
//                   className="
//                     group-hover:translate-x-1
//                     transition-all duration-300
//                   "
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div
//           className="
//             mt-16 sm:mt-20
//             pt-6 sm:pt-8
//             border-t border-white/10
//             flex flex-col md:flex-row
//             items-center
//             justify-between
//             gap-5
//           "
//         >

//           <p
//             className="
//               text-slate-500
//               text-sm
//               text-center md:text-left
//             "
//           >
//             © {new Date().getFullYear()} Wastely Aqua.
//             All rights reserved.
//           </p>

//           <div
//             className="
//               flex flex-wrap
//               items-center
//               justify-center
//               gap-6
//             "
//           >

//             <Link
//               to="/privacy"
//               className="
//                 text-slate-500
//                 hover:text-cyan-300
//                 text-sm
//                 transition-all duration-300
//               "
//             >
//               Privacy Policy
//             </Link>

//             <Link
//               to="/terms"
//               className="
//                 text-slate-500
//                 hover:text-cyan-300
//                 text-sm
//                 transition-all duration-300
//               "
//             >
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// Footer.jsx

import { Link } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Logo from "../../../assets/wastely_logo1.png";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden

        bg-[#061018]

        border-t border-white/10
        backdrop-blur-2xl
      "
    >
      {/* ====================================================== */}
      {/* BACKGROUND SYSTEM */}
      {/* ====================================================== */}

      {/* GRID OVERLAY */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]

          bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]

          bg-[size:120px_120px]
        "
      />

      {/* TOP GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[900px]
          h-[900px]

          bg-cyan-500/10

          blur-[180px]

          rounded-full

          pointer-events-none
        "
      />

      {/* RADIAL ATMOSPHERE */}
      <div
        className="
          absolute inset-0

          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_65%)]

          opacity-30
        "
      />

      {/* DIAGONAL LIGHT */}
      <div
        className="
          absolute
          top-0
          left-[-20%]

          h-full
          w-[60%]

          rotate-12

          bg-cyan-400/5

          blur-[120px]
        "
      />

      {/* TOP BORDER */}
      <div
        className="
          h-[1px]
          w-full

          bg-gradient-to-r
          from-transparent
          via-cyan-300/40
          to-transparent
        "
      />

      {/* ====================================================== */}
      {/* MAIN CONTAINER */}
      {/* ====================================================== */}

      <div
        className="
          relative z-10

          max-w-7xl
          mx-auto

          px-4 sm:px-6 lg:px-8

          pt-16 sm:pt-20 lg:pt-24
          pb-8
        "
      >
        {/* ====================================================== */}
        {/* MAIN GRID */}
        {/* ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_1fr_1fr_1fr]

            gap-12 lg:gap-16
          "
        >
          {/* ====================================================== */}
          {/* BRAND */}
          {/* ====================================================== */}

          <div>
            <img
              src={Logo}
              alt="Wastely Aqua"
              className="h-16 sm:h-20 object-contain"
            />

            {/* TAGLINE */}
            <h3
              className="
                mt-8

                text-2xl
                font-bold
                leading-tight

                text-white
              "
            >
              Integrated Environmental Engineering
            </h3>

            <p
              className="
                mt-3

                text-xs
                uppercase

                tracking-[0.22em]

                text-cyan-200/70
              "
            >
              Intelligent Water Infrastructure
            </p>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6 sm:mt-8

                text-slate-300
                text-[15px]

                leading-relaxed

                max-w-md
              "
            >
              Delivering advanced wastewater treatment,
              recycling, ecological restoration and
              intelligent environmental infrastructure
              systems for sustainable industrial and
              municipal ecosystems.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-8">
              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/mohammad-sadique-khan-427696112"
                className="
                  w-12 h-12

                  rounded-2xl

                  bg-white/[0.06]

                  border border-white/10

                  backdrop-blur-xl

                  shadow-[0_0_30px_-12px_rgba(34,211,238,0.12)]

                  flex items-center justify-center

                  text-slate-400

                  transition-all duration-300

                  hover:bg-cyan-400/10
                  hover:border-cyan-400/30

                  hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.25)]

                  hover:-translate-y-1
                  hover:text-cyan-300
                "
              >
                <FaLinkedinIn size={16} />
              </a>

              {/* INSTAGRAM */}
              <a
                href="#"
                className="
                  w-12 h-12

                  rounded-2xl

                  bg-white/[0.06]

                  border border-white/10

                  backdrop-blur-xl

                  shadow-[0_0_30px_-12px_rgba(34,211,238,0.12)]

                  flex items-center justify-center

                  text-slate-400

                  transition-all duration-300

                  hover:bg-cyan-400/10
                  hover:border-cyan-400/30

                  hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.25)]

                  hover:-translate-y-1
                  hover:text-cyan-300
                "
              >
                <FaInstagram size={16} />
              </a>

              {/* FACEBOOK */}
              <a
                href="#"
                className="
                  w-12 h-12

                  rounded-2xl

                  bg-white/[0.06]

                  border border-white/10

                  backdrop-blur-xl

                  shadow-[0_0_30px_-12px_rgba(34,211,238,0.12)]

                  flex items-center justify-center

                  text-slate-400

                  transition-all duration-300

                  hover:bg-cyan-400/10
                  hover:border-cyan-400/30

                  hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.25)]

                  hover:-translate-y-1
                  hover:text-cyan-300
                "
              >
                <FaFacebookF size={16} />
              </a>
            </div>

            {/* CONTACT */}
            <div className="mt-10 space-y-5">
              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11 h-11 sm:w-12 sm:h-12

                    shrink-0

                    flex items-center justify-center

                    rounded-2xl

                    bg-white/[0.06]

                    border border-white/10

                    backdrop-blur-xl
                  "
                >
                  <Phone
                    size={18}
                    className="text-cyan-300"
                  />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Phone
                  </p>

                  <a
                    href="tel:+918853043647"
                    className="
                      text-white

                      hover:text-cyan-300

                      transition-all duration-300
                    "
                  >
                    +91 88530 43647
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11 h-11 sm:w-12 sm:h-12

                    shrink-0

                    flex items-center justify-center

                    rounded-2xl

                    bg-white/[0.06]

                    border border-white/10

                    backdrop-blur-xl
                  "
                >
                  <Mail
                    size={18}
                    className="text-emerald-300"
                  />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Email
                  </p>

                  <a
                    href="mailto:info@wastelyaqua.com"
                    className="
                      text-white

                      break-all

                      hover:text-cyan-300

                      transition-all duration-300
                    "
                  >
                    info@wastelyaqua.com
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11 h-11 sm:w-12 sm:h-12

                    shrink-0

                    flex items-center justify-center

                    rounded-2xl

                    bg-white/[0.06]

                    border border-white/10

                    backdrop-blur-xl
                  "
                >
                  <MapPin
                    size={18}
                    className="text-cyan-300"
                  />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Location
                  </p>

                  <h4 className="text-white">
                    Mumbai, India
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* SOLUTIONS */}
          {/* ====================================================== */}

          <div>
            <h3
              className="
                text-white
                text-xl
                font-semibold
                tracking-wide
                mb-6 sm:mb-8
              "
            >
              Solutions
            </h3>

            <div className="space-y-4 pt-1">
              {[
                {
                  name: "Wastewater Treatment",
                  path: "/solutions/wastewater-treatment",
                },

                {
                  name: "Water Treatment",
                  path: "/solutions/water-treatment",
                },

                {
                  name: "Integrated Water System",
                  path: "/solutions/integrated-water-system",
                },

                {
                  name: "Aquaculture",
                  path: "/solutions/aquaculture",
                },

                {
                  name: "Lake & Pond Rejuvenation",
                  path: "/solutions/lake-pond-rejuvenation",
                },

                {
                  name: "River Restoration",
                  path: "/solutions/water-body-restoration",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="
                    block

                    text-slate-400

                    transition-all duration-300

                    hover:text-cyan-300
                    hover:translate-x-1
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ====================================================== */}
          {/* PRODUCTS */}
          {/* ====================================================== */}

          <div>
            <h3
              className="
                text-white
                text-xl
                font-semibold
                tracking-wide
                mb-6 sm:mb-8
              "
            >
              Products
            </h3>

            <div className="space-y-4 pt-1">
              {[
                {
                  name: "Aeration Technology",
                  path: "/products/aeration-oxygenation",
                },

                {
                  name: "IFAS / Membrane",
                  path: "/products/ifas-membrane",
                },

                {
                  name: "Floating Wetlands",
                  path: "/products/floating-wetlands",
                },

                {
                  name: "Sludge Dewatering",
                  path: "/products/sludge-dewatering-unit",
                },

                {
                  name: "Operation & Maintenance",
                  path: "/services/operation-maintenance",
                },

                {
                  name: "Revamping & Retrofitting",
                  path: "/services/revamping-retrofitting",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="
                    block

                    text-slate-400

                    transition-all duration-300

                    hover:text-cyan-300
                    hover:translate-x-1
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ====================================================== */}
          {/* COMPANY */}
          {/* ====================================================== */}

          <div>
            <h3
              className="
                text-white
                text-xl
                font-semibold
                tracking-wide
                mb-6 sm:mb-8
              "
            >
              Company
            </h3>

            <div className="space-y-4 pt-1">
              {[
                {
                  name: "Home",
                  path: "/",
                },

                {
                  name: "About Us",
                  path: "/about",
                },

                {
                  name: "Industries",
                  path: "/industries",
                },

                {
                  name: "Technologies",
                  path: "/technologies",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="
                    block

                    text-slate-400

                    transition-all duration-300

                    hover:text-cyan-300
                    hover:translate-x-1
                  "
                >
                  {item.name}
                </Link>
              ))}

              {/* CTA */}
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2

                  text-cyan-300
                  font-medium

                  group

                  pt-3
                "
              >
                Contact Us

                <ArrowRight
                  size={18}
                  className="
                    transition-all duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* METRICS */}
        {/* ====================================================== */}

        <div
          className="
            mt-16

            grid
            grid-cols-2
            xl:grid-cols-4

            gap-5
          "
        >
          {[
            {
              value: "120+",
              label: "Projects",
            },

            {
              value: "₹33+ Cr",
              label: "Capability",
            },

            {
              value: "500M+",
              label: "Liters Treated",
            },

            {
              value: "24/7",
              label: "Monitoring",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                rounded-[28px]

                border border-white/10

                bg-white/[0.05]

                backdrop-blur-xl

                p-6
              "
            >
              <h3
                className="
                  text-3xl
                  font-black

                  bg-gradient-to-r
                  from-cyan-300
                  to-emerald-300

                  bg-clip-text
                  text-transparent
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  text-slate-400
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ====================================================== */}
        {/* BOTTOM */}
        {/* ====================================================== */}

        <div
          className="
            mt-16 sm:mt-20

            pt-6 sm:pt-8

            border-t border-white/10

            backdrop-blur-xl

            flex flex-col md:flex-row
            items-center
            justify-between

            gap-5
          "
        >
          <p
            className="
              text-slate-500
              text-sm

              text-center md:text-left
            "
          >
            © {new Date().getFullYear()} Wastely Aqua.
            All rights reserved.
          </p>

          <div
            className="
              flex flex-wrap
              items-center
              justify-center
              gap-6
            "
          >
            <Link
              to="/privacy"
              className="
                text-slate-500
                text-sm

                transition-all duration-300

                hover:text-cyan-300
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="
                text-slate-500
                text-sm

                transition-all duration-300

                hover:text-cyan-300
              "
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;