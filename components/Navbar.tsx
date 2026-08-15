"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-[9000]">
        <div className="mx-auto w-full max-w-[1500px] px-5 pt-4 sm:px-8 lg:px-12">
          <nav
            className="
              relative flex h-[68px] items-center justify-between
              rounded-2xl border border-white/[0.09]
              bg-[#050606]/75 px-5
              backdrop-blur-xl
              shadow-[0_8px_40px_rgba(0,0,0,0.28)]
              sm:px-7
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <a
              href="#home"
              onClick={closeMenu}
              className="group flex items-center"
            >
              <div className="flex items-center">
                <span
                  className="
                    text-[25px] font-semibold tracking-[0.24em]
                    text-white transition-all duration-300
                    group-hover:text-[#c6ff00]
                  "
                >
                  XORA
                </span>

                {/* Small green indicator */}
                <span
                  className="
                    ml-2 h-1.5 w-1.5 rounded-full
                    bg-[#c6ff00]
                    shadow-[0_0_10px_#c6ff00]
                    transition-all duration-300
                    group-hover:scale-125
                  "
                />
              </div>
            </a>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    relative rounded-lg px-4 py-2.5
                    text-[13px] font-medium
                    text-white/55
                    transition-all duration-300
                    hover:bg-white/[0.035]
                    hover:text-white
                  "
                >
                  {item.label}

                  {/* Hover line */}
                  <span
                    className="
                      absolute bottom-1.5 left-1/2
                      h-px w-0 -translate-x-1/2
                      bg-[#c6ff00]
                      shadow-[0_0_8px_#c6ff00]
                      transition-all duration-300
                      group-hover:w-5
                    "
                  />
                </a>
              ))}
            </div>

            {/* =================================================
                DESKTOP CTA
            ================================================= */}

            <a
              href="#contact"
              className="
                group hidden items-center gap-2.5
                rounded-xl bg-[#c6ff00]
                px-5 py-3
                text-[13px] font-semibold text-black
                shadow-[0_0_25px_rgba(198,255,0,0.12)]
                transition-all duration-300
                hover:bg-[#d2ff35]
                hover:shadow-[0_0_35px_rgba(198,255,0,0.25)]
                lg:inline-flex
              "
            >
              Let's Talk

              <ArrowUpRight
                size={16}
                strokeWidth={2.4}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl border border-white/10
                bg-white/[0.03]
                text-white
                transition-all duration-300
                hover:border-[#c6ff00]/40
                hover:text-[#c6ff00]
                lg:hidden
              "
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          <div
            className={`
              overflow-hidden transition-all duration-300 ease-out lg:hidden
              ${
                mobileOpen
                  ? "mt-2 max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div
              className="
                rounded-2xl border border-white/[0.09]
                bg-[#050606]/95 p-3
                backdrop-blur-xl
                shadow-[0_15px_50px_rgba(0,0,0,0.4)]
              "
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    flex items-center justify-between
                    rounded-xl px-4 py-3.5
                    text-sm font-medium text-white/60
                    transition-all duration-300
                    hover:bg-white/[0.04]
                    hover:text-[#c6ff00]
                  "
                >
                  {item.label}

                  <ArrowUpRight
                    size={15}
                    className="opacity-40"
                  />
                </a>
              ))}

              {/* Mobile CTA */}

              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  mt-2 flex h-[50px]
                  items-center justify-center gap-2
                  rounded-xl bg-[#c6ff00]
                  text-sm font-semibold text-black
                  transition-all duration-300
                  hover:bg-[#d2ff35]
                "
              >
                Let's Talk

                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}