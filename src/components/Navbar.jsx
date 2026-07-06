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

  const navLink =
    "uppercase text-[13px] xl:text-xl tracking-[2px] font-medium text-[#f3e6bd] hover:text-[#c9a24a] transition-colors duration-300";

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 font-sans
        transition-all duration-500 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${
          isScrolled
            ? "bg-[#0b0b0d]/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
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
            <a key={item.name} href={item.href} className={navLink}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="flex justify-center px-8">
          <a href="#" className="flex flex-col items-center leading-none">
            <img
              src="/images/logo.png"
              alt="Thamel Heritage"
              className="h-28 w-auto object-cover"
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
            <button className={`${navLink} flex items-center gap-1.5 bg-transparent`}>
              Explore
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  pagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute right-0 mt-5 w-56 rounded-lg bg-[#151215] border border-[#b98b3e]/20 shadow-2xl transition-all duration-300 ${
                pagesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
              }`}
            >
              {pageLinks.map((page) => (
                <a
                  key={page.name}
                  href={page.href}
                  className="block px-6 py-3 uppercase text-xs tracking-wider text-[#e8dcb8] hover:bg-[#b98b3e]/10 hover:text-[#c9a24a] transition-colors"
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#"
            className=" px-6 py-2.5 uppercase tracking-[2px] text-lg font-medium text-[#e8dcb8] hover:bg-[#b98b3e] hover:text-[#0b0b0d] hover:border-[#b98b3e] transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* ================= MOBILE ================= */}
      <nav className="lg:hidden flex items-center justify-between h-20 px-5">
        <a href="#">
          <img src="/images/logo2.png" alt="Thamel Heritage" className="h-12 object-contain" />
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[#f3e6bd]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#0b0b0d]/98 backdrop-blur-lg px-6 py-6 space-y-5 border-t border-[#b98b3e]/15">
          {leftLinks.map((item) => (
            <a key={item.name} href={item.href} className={`${navLink} block`}>
              {item.name}
            </a>
          ))}

          <div>
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className={`${navLink} flex justify-between items-center w-full`}
            >
              Explore
              <ChevronDown
                size={16}
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
                    className="block uppercase text-xs tracking-wider text-[#cfc3a0] hover:text-[#c9a24a]"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#"
            className="block rounded-full bg-[#b98b3e] py-3 text-center uppercase tracking-[2px] text-md text-[#0b0b0d] hover:bg-[#c9a24a] transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;