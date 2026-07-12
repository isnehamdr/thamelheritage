import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

/**
 * Fonts used (add once, e.g. in index.html <head> or your root layout):
 * <link rel="preconnect" href="https://fonts.googleapis.com" />
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
 *
 * And in tailwind.config.js:
 * theme: { extend: { fontFamily: {
 *   display: ["'Cormorant Garamond'", "serif"],
 *   sans: ["Poppins", "sans-serif"],
 * } } }
 */

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const leftLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Events", href: "#" },
  ];

  const pageLinks = [
    { name: "Gallery", href: "#" },
    { name: "Rooms", href: "#" },
    { name: "Restaurant", href: "#" },
    { name: "Spa", href: "#" },
    { name: "Blog", href: "#" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 50);

      if (currentScroll < 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(currentScroll < lastScrollY);
      }
      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const navLink =
    "uppercase text-[13px] xl:text-xl tracking-[2px] font-medium transition-colors duration-300";
  
  const navLinkColor = isScrolled 
    ? "text-black hover:text-[#c9a24a]" 
    : "text-[#f3e6bd] hover:text-[#c9a24a]";

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 
        transition-all duration-500 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${
          isScrolled
            ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.1)]"
            : "bg-transparent"
        }
      `}
    >
      {/* thin gold hairline, only visible once scrolled — a quiet luxury cue */}
      <div
        className={`h-[1px] w-full bg-gradient-to-r from-transparent via-[#b98b3e]/60 to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* ================= DESKTOP ================= */}
      <nav className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center max-w-7xl mx-auto h-20 px-8">
        {/* Left */}
        <div className="flex items-center gap-8 xl:gap-10">
          {leftLinks.map((item) => (
            <a key={item.name} href={item.href} className={`${navLink} ${navLinkColor}`}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="flex justify-center px-8">
          <a href="#" className="flex flex-col items-center leading-none">
            <img
              src={isScrolled ? "/images/logo.png" : "/images/logo.png"}
              alt="Thamel Heritage"
              className="h-20 w-auto object-contain"
            />
          </a>
        </div>

        {/* Right */}
        <div className="flex justify-end items-center gap-8 xl:gap-10">
          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button className={`${navLink} ${navLinkColor} flex items-center text-lg gap-1.5 bg-transparent`}>
              Explore
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  pagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute right-0 mt-5 w-56 rounded-lg ${
                isScrolled ? "bg-white" : "bg-[#151215]"
              } border border-[#b98b3e]/20 shadow-2xl transition-all duration-300 ${
                pagesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
              }`}
            >
              {pageLinks.map((page) => (
                <a
                  key={page.name}
                  href={page.href}
                  className={`block px-6 py-3 uppercase text-xs tracking-wider transition-colors ${
                    isScrolled 
                      ? "text-black hover:bg-[#b98b3e]/10 hover:text-[#c9a24a]" 
                      : "text-[#e8dcb8] hover:bg-[#b98b3e]/10 hover:text-[#c9a24a]"
                  }`}
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#"
            className={`px-6 py-2.5 uppercase tracking-[2px] text-lg xl:text-xl font-medium transition-all duration-300 ${
              isScrolled
                ? "text-black hover:bg-[#b98b3e] hover:text-white"
                : "text-[#e8dcb8] hover:bg-[#b98b3e] hover:text-[#0b0b0d]"
            }`}
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* ================= MOBILE ================= */}
      <nav className="lg:hidden flex items-center justify-between h-20 px-5">
        <a href="#">
          <img 
            src={isScrolled ? "/images/logo.png" : "/images/logo.png"} 
            alt="Thamel Heritage" 
            className="h-12 w-auto object-contain" 
          />
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`relative z-[60] transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-[#f3e6bd]"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* ================= MOBILE MENU (Slides from right) ================= */}
      <div
        className={`
          lg:hidden fixed top-0 right-0 h-full w-full bg-black
          transform transition-transform duration-500 ease-in-out z-40
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col space-y-6">
            {leftLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="uppercase text-xl tracking-[2px] font-medium text-[#f3e6bd] hover:text-[#c9a24a] transition-colors duration-300 block"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div>
              <button
                onClick={() => setPagesOpen(!pagesOpen)}
                className="uppercase text-xl tracking-[2px] font-medium text-[#f3e6bd] hover:text-[#c9a24a] transition-colors duration-300 flex justify-between items-center w-full"
              >
                Explore
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    pagesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  pagesOpen ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                <div className="ml-4 border-l border-[#b98b3e]/30 pl-4 space-y-4">
                  {pageLinks.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="block uppercase text-sm tracking-wider text-[#cfc3a0] hover:text-[#c9a24a] transition-colors"
                      onClick={() => {
                        setMobileOpen(false);
                        setPagesOpen(false);
                      }}
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#"
              className="block rounded-full bg-[#b98b3e] py-3.5 text-center uppercase tracking-[2px] text-base font-medium text-[#0b0b0d] hover:bg-[#c9a24a] transition-colors mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </a>
          </div>

          {/* Optional: Add bottom spacing or extra content */}
          <div className="mt-auto pt-8 border-t border-[#b98b3e]/10">
            <p className="text-xs text-[#f3e6bd]/40 text-center tracking-wider">
              Thamel Heritage
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;