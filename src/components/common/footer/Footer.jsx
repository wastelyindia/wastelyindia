import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Logo from "../../../assets/wastely_logo1.png";

/* =========================================================
   WASTELY AQUA — CORPORATE FOOTER
   =========================================================
   Final site hierarchy:

   Solutions
   Services
   Technologies
   Company

   Footer owns the primary site-wide CTA.
   ========================================================= */

const solutionLinks = [
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
    name: "Water Body Restoration",
    path: "/solutions/water-body-restoration",
  },
];

const serviceLinks = [
  {
    name: "Operation & Maintenance",
    path: "/services/operation-maintenance",
  },
  {
    name: "AMC Services",
    path: "/services/amc-services",
  },
  {
    name: "Revamping & Retrofitting",
    path: "/services/revamping-retrofitting",
  },
  {
    name: "Technology Process",
    path: "/services/technology-process",
  },
];

const technologyLinks = [
  {
    name: "Aeration & Oxygenation",
    path: "/technologies/aeration-oxygenation",
  },
  {
    name: "IFAS / Membrane Systems",
    path: "/technologies/ifas-membrane",
  },
  {
    name: "Floating Wetlands",
    path: "/technologies/floating-wetlands",
  },
  {
    name: "Algae Control System",
    path: "/technologies/algae-control",
  },
  {
    name: "Hydro-dis Disinfection",
    path: "/technologies/hydro-dis",
  },
  {
    name: "Sludge Management",
    path: "/technologies/sludge-management",
  },
  {
    name: "Package Treatment Units",
    path: "/technologies/package-treatment-units",
  },
];

const companyLinks = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Industries",
    path: "/industries",
  },
  {
    name: "Case Studies",
    path: "/case-studies",
  },
  {
    name: "Technologies",
    path: "/technologies",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

/* =========================================================
   FOOTER LINK
   ========================================================= */

const FooterLink = ({ name, path }) => (
  <Link
    to={path}
    className="
      group
      inline-flex
      items-center
      gap-1.5
      text-[13px]
      leading-6
      text-white/62
      transition-colors
      duration-150
      hover:text-white
    "
  >
    <span>{name}</span>

    <ArrowUpRight
      size={12}
      strokeWidth={1.8}
      className="
        -translate-x-1
        text-[#2FB4CE]
        opacity-0
        transition-all
        duration-150
        group-hover:translate-x-0
        group-hover:opacity-100
      "
    />
  </Link>
);

/* =========================================================
   FOOTER
   ========================================================= */

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#073B5C] text-white">
      {/* ===================================================
          ENGINEERING / WATER BACKGROUND
          =================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Engineering grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            bg-[size:72px_72px]
          "
        />

        {/* Technical horizontal lines */}
        <div className="absolute left-0 top-[24%] h-px w-[38%] bg-white/[0.06]" />
        <div className="absolute left-0 top-[58%] h-px w-[25%] bg-white/[0.05]" />
        <div className="absolute right-0 top-[76%] h-px w-[32%] bg-white/[0.05]" />

        {/* Water / contour lines */}
        <svg
          className="
            absolute
            right-[-8%]
            top-[6%]
            h-[520px]
            w-[720px]
            opacity-[0.085]
          "
          viewBox="0 0 720 520"
          fill="none"
        >
          <path
            d="M-20 110C120 30 220 70 320 120C420 170 520 175 740 70"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-20 155C120 75 220 115 320 165C420 215 520 220 740 115"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-20 200C120 120 220 160 320 210C420 260 520 265 740 160"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-20 245C120 165 220 205 320 255C420 305 520 310 740 205"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-20 290C120 210 220 250 320 300C420 350 520 355 740 250"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-20 335C120 255 220 295 320 345C420 395 520 400 740 295"
            stroke="#3BB8D9"
            strokeWidth="1"
          />

          <path
            d="M-20 380C120 300 220 340 320 390C420 440 520 445 740 340"
            stroke="#3BB8D9"
            strokeWidth="1"
          />
        </svg>

        {/* Ripple rings */}
        <div className="absolute bottom-[-140px] left-[7%] h-[340px] w-[340px] rounded-full border border-[#2FB4CE]/10" />

        <div className="absolute bottom-[-90px] left-[12%] h-[250px] w-[250px] rounded-full border border-[#2FB4CE]/10" />

        <div className="absolute bottom-[-45px] left-[17%] h-[160px] w-[160px] rounded-full border border-[#2FB4CE]/10" />

        {/* Top water accent */}
        <div
          className="
            absolute
            left-0
            top-0
            h-[2px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#2FB4CE]
            to-transparent
            opacity-80
          "
        />
      </div>

      {/* ===================================================
          MAIN FOOTER
          =================================================== */}
      <div className="relative z-10">
        <div className="wastely-container">
          {/* =================================================
              BRAND + PRIMARY CTA
              ================================================= */}
          <div
            className="
              grid
              gap-10
              border-b
              border-white/10
              py-12
              md:grid-cols-[1.5fr_1fr]
              md:py-14
              lg:grid-cols-[1.7fr_1fr]
              lg:py-16
            "
          >
            {/* Brand */}
            <div>
              <Link
                to="/"
                className="inline-flex items-center"
              >
                <img
                  src={Logo}
                  alt="Wastely Aqua"
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </Link>

              <div className="mt-6 max-w-xl">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#3BB8D9]
                  "
                >
                  Water & Wastewater Treatment
                </p>

                <h2
                  className="
                    mt-2
                    max-w-xl
                    text-[1.55rem]
                    font-bold
                    leading-[1.2]
                    tracking-[-0.02em]
                    text-white
                    sm:text-[1.9rem]
                  "
                >
                  Treatment systems built around the water,
                  the site and the operating requirement.
                </h2>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-[14px]
                    leading-7
                    text-white/62
                  "
                >
                  Wastely Aqua works across water and wastewater
                  treatment, plant services, treatment technologies
                  and waterbody restoration for municipal, industrial
                  and institutional applications.
                </p>
              </div>
            </div>

            {/* Assessment CTA */}
            <div className="flex flex-col justify-end md:items-end">
              <div
                className="
                  w-full
                  max-w-sm
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-6
                  sm:p-7
                "
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#3BB8D9]
                      "
                    >
                      Start a conversation
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      Have a treatment requirement?
                    </h3>
                  </div>

                  <div className="hidden h-9 w-9 items-center justify-center border border-white/10 sm:flex">
                    <ArrowRight
                      size={16}
                      className="text-[#3BB8D9]"
                    />
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Share your water, wastewater or waterbody
                  requirement and the site conditions you are
                  working with.
                </p>

                <Link
                  to="/contact"
                  className="
                    wastely-btn
                    wastely-btn-light
                    mt-6
                    w-full
                    sm:w-auto
                  "
                >
                  Request an Assessment
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
              ================================================= */}
          <div
            className="
              grid
              gap-10
              border-b
              border-white/10
              py-12
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-8
              lg:py-14
            "
          >
            {/* Solutions */}
            <div>
              <h3
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                "
              >
                Solutions
              </h3>

              <div className="mt-5 space-y-1">
                {solutionLinks.map((item) => (
                  <FooterLink
                    key={item.name}
                    {...item}
                  />
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                "
              >
                Services
              </h3>

              <div className="mt-5 space-y-1">
                {serviceLinks.map((item) => (
                  <FooterLink
                    key={item.name}
                    {...item}
                  />
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                "
              >
                Technologies
              </h3>

              <div className="mt-5 space-y-1">
                {technologyLinks.map((item) => (
                  <FooterLink
                    key={item.name}
                    {...item}
                  />
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                "
              >
                Company
              </h3>

              <div className="mt-5 space-y-1">
                {companyLinks.map((item) => (
                  <FooterLink
                    key={item.name}
                    {...item}
                  />
                ))}
              </div>

              <div className="mt-7 h-px w-12 bg-[#2FB4CE]" />

              <p className="mt-4 max-w-[220px] text-xs leading-5 text-white/40">
                Water infrastructure, treatment services
                and technology selected around application
                requirements.
              </p>
            </div>
          </div>

          {/* =================================================
              CONTACT
              ================================================= */}
          <div
            className="
              grid
              gap-8
              border-b
              border-white/10
              py-10
              md:grid-cols-3
              lg:py-12
            "
          >
            {/* Phone */}
            <a
              href="tel:+919136069130"
              className="group flex items-start gap-3"
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-[#3BB8D9]
                  transition-colors
                  group-hover:border-[#2FB4CE]
                  group-hover:bg-white/[0.04]
                "
              >
                <Phone size={16} />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white/40
                  "
                >
                  Phone
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-white/75
                    group-hover:text-white
                  "
                >
                  +91 91360 69130
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@wastelyaqua.com"
              className="group flex items-start gap-3"
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-[#3BB8D9]
                  transition-colors
                  group-hover:border-[#2FB4CE]
                  group-hover:bg-white/[0.04]
                "
              >
                <Mail size={16} />
              </div>

              <div className="min-w-0">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white/40
                  "
                >
                  Email
                </p>

                <p
                  className="
                    mt-1
                    break-all
                    text-sm
                    text-white/75
                    group-hover:text-white
                  "
                >
                  info@wastelyaqua.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-[#3BB8D9]
                "
              >
                <MapPin size={16} />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white/40
                  "
                >
                  Location
                </p>

                <p className="mt-1 text-sm text-white/75">
                  Mumbai, India
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM BAR
              ================================================= */}
          <div
            className="
              flex
              flex-col
              gap-5
              py-6
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* Copyright */}
            <p className="text-xs leading-5 text-white/40">
              © {new Date().getFullYear()} Wastely Aqua.
              All rights reserved.
            </p>

            {/* Legal */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                to="/privacy"
                className="
                  text-xs
                  text-white/40
                  transition-colors
                  hover:text-white
                "
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="
                  text-xs
                  text-white/40
                  transition-colors
                  hover:text-white
                "
              >
                Terms & Conditions
              </Link>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/mohammad-sadique-khan-427696112"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-white/45
                  transition-colors
                  hover:border-[#2FB4CE]
                  hover:text-[#3BB8D9]
                "
              >
                <FaLinkedinIn size={13} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-white/45
                  transition-colors
                  hover:border-[#2FB4CE]
                  hover:text-[#3BB8D9]
                "
              >
                <FaInstagram size={13} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-white/45
                  transition-colors
                  hover:border-[#2FB4CE]
                  hover:text-[#3BB8D9]
                "
              >
                <FaFacebookF size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;