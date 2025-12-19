import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const target = event.target;
      if (
        isMobileMenuOpen &&
        !target.closest("nav") &&
        !target.closest(".mobile-menu-overlay")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Navbar */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[80%] max-w-7xl z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border border-purple-500/40 shadow-2xl shadow-purple-500/25 glow-effect"
            : "bg-black/50 backdrop-blur-sm border border-white/10"
        } rounded-full px-8 py-3`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="transition-all duration-200 hover:scale-105"
          >
            <img src="/logobgg.png" alt="Logo" className="h-10 w-auto" />
          </a>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="relative overflow-hidden px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium group text-white/80 hover:text-white"
            >
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Home
                </span>
                <span className="absolute top-full left-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Home
                </span>
              </div>
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="relative overflow-hidden px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium group text-white/80 hover:text-white"
            >
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  About
                </span>
                <span className="absolute top-full left-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  About
                </span>
              </div>
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="relative overflow-hidden px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium group text-white/80 hover:text-white"
            >
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Projects
                </span>
                <span className="absolute top-full left-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Projects
                </span>
              </div>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="relative overflow-hidden px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium group text-white/80 hover:text-white"
            >
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Contact
                </span>
                <span className="absolute top-full left-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Contact
                </span>
              </div>
            </a>
          </div>

          {/* Right Side - CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-purple-900 text-white px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 group"
            >
              <div className="relative overflow-hidden z-10">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Download CV
                </span>
                <span className="absolute top-full left-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Download CV
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-800 to-purple-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white/80 hover:text-white transition-all duration-300 p-2 relative z-50"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "rotate-45 top-3" : "top-1"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out top-3 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        <style jsx>{`
          .glow-effect {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.3),
              0 0 40px rgba(168, 85, 247, 0.2), 0 0 80px rgba(168, 85, 247, 0.1);
          }
        `}</style>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay fixed inset-0 z-40 md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 ease-out ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        ></div>

        {/* Mobile Menu Content */}
        <div
          className={`absolute top-24 left-1/2 transform -translate-x-1/2 w-[80%] max-w-md bg-black/90 backdrop-blur-md border border-purple-500/40 rounded-3xl shadow-2xl shadow-purple-500/25 transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-8 opacity-0 scale-95"
          }`}
        >
          <div className="p-6 space-y-4">
            {/* Mobile Navigation Links */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="block px-6 py-4 rounded-2xl transition-all duration-300 text-lg font-medium hover:bg-purple-600/20 border border-transparent hover:border-purple-500/30 text-white/80 hover:text-white"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="block px-6 py-4 rounded-2xl transition-all duration-300 text-lg font-medium hover:bg-purple-600/20 border border-transparent hover:border-purple-500/30 text-white/80 hover:text-white"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="block px-6 py-4 rounded-2xl transition-all duration-300 text-lg font-medium hover:bg-purple-600/20 border border-transparent hover:border-purple-500/30 text-white/80 hover:text-white"
            >
              Projects
            </a>
            /* Mobile CTA Button */
            <div className="pt-4 border-t border-purple-500/20">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-4 rounded-2xl transition-all duration-300 text-lg font-medium shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 text-center hover:from-purple-500 hover:to-purple-700"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
