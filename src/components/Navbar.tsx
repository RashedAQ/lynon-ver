
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 md:py-5 transition-all duration-500",
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-3 group"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Lynon Solution"
        >
          <div className="relative">
            <img 
              src="/LogoLyono.png" 
              alt="Lynon Solution Logo" 
              className="h-8 sm:h-10 transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a 
            href="#" 
            className="relative px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 rounded-lg hover:bg-orange-50 group"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#features" 
            className="relative px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 rounded-lg hover:bg-orange-50 group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#testimonials" 
            className="relative px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 rounded-lg hover:bg-orange-50 group"
          >
            Our Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#footer" 
            className="relative px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 rounded-lg hover:bg-orange-50 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none rounded-lg hover:bg-orange-50 transition-colors duration-300" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-gradient-to-br from-white via-orange-50/30 to-white flex flex-col pt-20 px-6 md:hidden transition-all duration-500 ease-in-out backdrop-blur-sm",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-4 items-center mt-8">
          <a 
            href="#" 
            className="group relative w-full max-w-sm text-xl font-medium py-4 px-8 text-center rounded-2xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#features" 
            className="group relative w-full max-w-sm text-xl font-medium py-4 px-8 text-center rounded-2xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span className="relative z-10">Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#testimonials" 
            className="group relative w-full max-w-sm text-xl font-medium py-4 px-8 text-center rounded-2xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span className="relative z-10">Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#footer" 
            className="group relative w-full max-w-sm text-xl font-medium py-4 px-8 text-center rounded-2xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
