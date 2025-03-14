import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className = "" }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-slate-900",
        scrolled ? "bg-opacity-95 shadow-lg" : "bg-opacity-70",
        className,
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-white">
            <span className="text-green-400">SalesOps</span> Surge
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-slate-300 hover:text-green-400 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-slate-300 hover:text-green-400 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("proof")}
            className="text-slate-300 hover:text-green-400 transition-colors"
          >
            Results
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-slate-300 hover:text-green-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-slate-300 hover:text-green-400 transition-colors py-2 text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-300 hover:text-green-400 transition-colors py-2 text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("proof")}
              className="text-slate-300 hover:text-green-400 transition-colors py-2 text-left"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-green-400 transition-colors py-2 text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors w-full text-center"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
