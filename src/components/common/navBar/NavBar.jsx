
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import { navItems } from "./navData";
import Logo from "../../../assets/wastely_logo.png";

// ======================================================
// WASTELY AQUA — NAVBAR
// ======================================================
// Design direction:
// - White / light navigation
// - Deep blue typography
// - Blue / cyan accents
// - Thin borders
// - Minimal radius
// - No glassmorphism
// - No neon gradients
// - Buyer-oriented CTA
// ======================================================

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // ======================================================
  // SCROLL STATE
  // ======================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ======================================================
  // CLOSE MENUS ON ROUTE CHANGE
  // ======================================================

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  // ======================================================
  // BODY SCROLL LOCK — MOBILE
  // ======================================================

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ======================================================
  // HELPERS
  // ======================================================

  const isActivePath = (path) => {
    if (!path) return false;

    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === path ||
      location.pathname.startsWith(`${path}/`);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <>
      {/* ==================================================
          HEADER
      ================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          border-b
          transition-all
          duration-200
          ${
            scrolled
              ? "border-wastely-line bg-white shadow-[0_1px_8px_rgba(7,59,92,0.06)]"
              : "border-transparent bg-white"
          }
        `}
      >
        <div className="wastely-container">
          <div className="flex h-[72px] items-center justify-between gap-6 lg:h-[78px]">
            {/* ==================================================
                LOGO
            ================================================== */}

            <Link
              to="/"
              onClick={closeMobile}
              className="
                flex
                shrink-0
                items-center
                focus-visible:outline-none
              "
              aria-label="Wastely Aqua home"
            >
              <img
                src={Logo}
                alt="Wastely Aqua"
                className="
                  h-10
                  w-auto
                  object-contain
                  sm:h-11
                  lg:h-12
                "
              />
            </Link>

            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav
              className="
                hidden
                flex-1
                items-center
                justify-center
                gap-5
                lg:flex
                xl:gap-7
              "
              aria-label="Main navigation"
            >
              {navItems.map((item, index) => {
                const hasMegaMenu = Boolean(item.megaMenu);
                const active =
                  item.path && isActivePath(item.path);

                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => {
                      if (hasMegaMenu) {
                        setActiveMenu(index);
                      }
                    }}
                    onMouseLeave={() => {
                      if (hasMegaMenu) {
                        setActiveMenu(null);
                      }
                    }}
                  >
                    {/* ==================================================
                        MEGA MENU TRIGGER
                    ================================================== */}

                    {hasMegaMenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveMenu(
                              activeMenu === index ? null : index
                            )
                          }
                          className={`
                            group
                            inline-flex
                            items-center
                            gap-1
                            whitespace-nowrap
                            border-b
                            border-transparent
                            py-3
                            text-[14px]
                            font-semibold
                            tracking-[-0.01em]
                            transition-colors
                            duration-150
                            focus-visible:outline-none
                            ${
                              activeMenu === index
                                ? "text-wastely-blue"
                                : "text-wastely-deep hover:text-wastely-blue"
                            }
                          `}
                          aria-expanded={activeMenu === index}
                        >
                          {item.title}

                          <ChevronDown
                            size={15}
                            strokeWidth={2}
                            className={`
                              transition-transform
                              duration-150
                              ${
                                activeMenu === index
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
                          />
                        </button>

                        {/* ==================================================
                            DESKTOP MEGA MENU
                        ================================================== */}

                        <div
                          className={`
                            absolute
                            left-1/2
                            top-full
                            w-[min(920px,calc(100vw-32px))]
                            -translate-x-1/2
                            pt-3
                            transition-all
                            duration-150
                            ${
                              activeMenu === index
                                ? "visible translate-y-0 opacity-100"
                                : "invisible translate-y-1 opacity-0"
                            }
                          `}
                        >
                          <div
                            className="
                              overflow-hidden
                              rounded-wastely
                              border
                              border-wastely-line
                              bg-white
                              shadow-[0_12px_35px_rgba(7,59,92,0.10)]
                            "
                          >
                            {/* Top accent line */}

                            <div className="h-[2px] w-full bg-wastely-cyan" />

                            <div className="grid grid-cols-2 gap-0">
                              {item.sections?.map(
                                (section, sectionIndex) => (
                                  <div
                                    key={section.heading}
                                    className={`
                                      p-6
                                      xl:p-7
                                      ${
                                        sectionIndex > 0
                                          ? "border-l border-wastely-line"
                                          : ""
                                      }
                                    `}
                                  >
                                    {/* Section heading */}

                                    <div className="mb-4">
                                      <p
                                        className="
                                          text-[11px]
                                          font-bold
                                          uppercase
                                          tracking-[0.14em]
                                          text-wastely-blue
                                        "
                                      >
                                        {section.heading}
                                      </p>

                                      <div className="mt-2 h-[2px] w-8 bg-wastely-cyan" />
                                    </div>

                                    {/* Section links */}

                                    <div className="space-y-1">
                                      {section.links?.map((link) => {
                                        const Icon = link.icon;

                                        return (
                                          <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={() =>
                                              setActiveMenu(null)
                                            }
                                            className="
                                              group
                                              flex
                                              items-start
                                              gap-3
                                              border-b
                                              border-transparent
                                              px-2
                                              py-3
                                              transition-colors
                                              duration-150
                                              hover:border-wastely-line
                                              hover:bg-wastely-bg-soft
                                            "
                                          >
                                            {/* Icon */}

                                            <div
                                              className="
                                                mt-0.5
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-wastely
                                                border
                                                border-wastely-line
                                                bg-wastely-bg-soft
                                                text-wastely-blue
                                                transition-colors
                                                duration-150
                                                group-hover:border-wastely-cyan
                                                group-hover:bg-white
                                              "
                                            >
                                              {Icon && (
                                                <Icon
                                                  size={17}
                                                  strokeWidth={1.8}
                                                />
                                              )}
                                            </div>

                                            {/* Text */}

                                            <div className="min-w-0">
                                              <div
                                                className="
                                                  flex
                                                  items-center
                                                  gap-1.5
                                                  text-[14px]
                                                  font-semibold
                                                  leading-5
                                                  text-wastely-deep
                                                  transition-colors
                                                  group-hover:text-wastely-blue
                                                "
                                              >
                                                {link.name}

                                                <ArrowUpRight
                                                  size={12}
                                                  className="
                                                    opacity-0
                                                    transition-opacity
                                                    group-hover:opacity-100
                                                  "
                                                />
                                              </div>

                                              {link.desc && (
                                                <p
                                                  className="
                                                    mt-0.5
                                                    text-[12px]
                                                    leading-5
                                                    text-wastely-sub
                                                  "
                                                >
                                                  {link.desc}
                                                </p>
                                              )}
                                            </div>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      /* ==================================================
                         NORMAL LINK
                      ================================================== */

                      <Link
                        to={item.path}
                        className={`
                          inline-flex
                          items-center
                          whitespace-nowrap
                          border-b
                          py-3
                          text-[14px]
                          font-semibold
                          tracking-[-0.01em]
                          transition-colors
                          duration-150
                          focus-visible:outline-none
                          ${
                            active
                              ? "border-wastely-cyan text-wastely-blue"
                              : "border-transparent text-wastely-deep hover:text-wastely-blue"
                          }
                        `}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ==================================================
                DESKTOP CTA
            ================================================== */}

            <div className="hidden shrink-0 lg:block">
              <Link
                to="/contact"
                className="
                  wastely-btn
                  wastely-btn-primary
                  min-h-[42px]
                  px-4
                  text-[13px]
                  xl:px-5
                  xl:text-[14px]
                "
              >
                Request an Assessment
              </Link>
            </div>

            {/* ==================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              aria-label={
                mobileOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-wastely
                border
                border-wastely-line
                bg-white
                text-wastely-deep
                transition-colors
                hover:border-wastely-cyan
                hover:text-wastely-blue
                focus-visible:outline-none
                lg:hidden
              "
            >
              {mobileOpen ? (
                <X size={21} strokeWidth={2} />
              ) : (
                <Menu size={21} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ==================================================
          MOBILE OVERLAY
      ================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-40
          bg-wastely-deep/20
          transition-opacity
          duration-200
          lg:hidden
          ${
            mobileOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ==================================================
          MOBILE NAVIGATION
      ================================================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-50
          h-screen
          w-[88%]
          max-w-[420px]
          overflow-y-auto
          border-l
          border-wastely-line
          bg-white
          shadow-[-10px_0_35px_rgba(7,59,92,0.10)]
          transition-transform
          duration-200
          lg:hidden
          ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
        aria-label="Mobile navigation"
      >
        {/* Mobile header */}

        <div
          className="
            flex
            h-[72px]
            items-center
            justify-between
            border-b
            border-wastely-line
            px-5
          "
        >
          <Link
            to="/"
            onClick={closeMobile}
            aria-label="Wastely Aqua home"
          >
            <img
              src={Logo}
              alt="Wastely Aqua"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            aria-label="Close navigation"
            onClick={closeMobile}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-wastely
              border
              border-wastely-line
              text-wastely-deep
              hover:border-wastely-cyan
              hover:text-wastely-blue
            "
          >
            <X size={19} />
          </button>
        </div>

        {/* Mobile content */}

        <div className="px-5 py-6">
          <nav aria-label="Mobile main navigation">
            <div className="divide-y divide-wastely-line">
              {navItems.map((item, index) => {
                const hasMegaMenu = Boolean(item.megaMenu);
                const expanded = activeMenu === index;

                return (
                  <div key={item.title}>
                    {hasMegaMenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveMenu(
                              expanded ? null : index
                            )
                          }
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            py-4
                            text-left
                            text-[15px]
                            font-semibold
                            text-wastely-deep
                            transition-colors
                            hover:text-wastely-blue
                          "
                          aria-expanded={expanded}
                        >
                          <span>{item.title}</span>

                          <ChevronDown
                            size={17}
                            className={`
                              text-wastely-sub
                              transition-transform
                              duration-150
                              ${
                                expanded
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
                          />
                        </button>

                        {/* Expanded mobile section */}

                        <div
                          className={`
                            overflow-hidden
                            transition-all
                            duration-200
                            ${
                              expanded
                                ? "max-h-[1200px] pb-4 opacity-100"
                                : "max-h-0 opacity-0"
                            }
                          `}
                        >
                          <div className="border-l-2 border-wastely-cyan pl-4">
                            {item.sections?.map((section) => (
                              <div
                                key={section.heading}
                                className="mb-5 last:mb-0"
                              >
                                <p
                                  className="
                                    mb-2
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.14em]
                                    text-wastely-blue
                                  "
                                >
                                  {section.heading}
                                </p>

                                <div className="space-y-1">
                                  {section.links?.map((link) => (
                                    <Link
                                      key={link.name}
                                      to={link.path}
                                      onClick={closeMobile}
                                      className="
                                        block
                                        py-2
                                        text-[14px]
                                        font-medium
                                        text-wastely-sub
                                        transition-colors
                                        hover:text-wastely-blue
                                      "
                                    >
                                      {link.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={closeMobile}
                        className={`
                          block
                          py-4
                          text-[15px]
                          font-semibold
                          transition-colors
                          ${
                            isActivePath(item.path)
                              ? "text-wastely-blue"
                              : "text-wastely-deep hover:text-wastely-blue"
                          }
                        `}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* ==================================================
              MOBILE CTA
          ================================================== */}

          <div className="mt-7 border-t border-wastely-line pt-6">
            <Link
              to="/contact"
              onClick={closeMobile}
              className="
                wastely-btn
                wastely-btn-primary
                w-full
                text-sm
              "
            >
              Request an Assessment
            </Link>
          </div>

          {/* Supporting line */}

          <p
            className="
              mt-4
              text-center
              text-xs
              leading-5
              text-wastely-sub
            "
          >
            Water & wastewater treatment solutions
          </p>
        </div>
      </aside>

      {/* ==================================================
          NAVBAR SPACING
          Prevents page content from sitting underneath
          the fixed header.
      ================================================== */}

      <div className="h-[72px] lg:h-[78px]" />
    </>
  );
};

export default Navbar;
