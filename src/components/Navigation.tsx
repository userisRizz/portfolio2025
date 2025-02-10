import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#hero";
    } else {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors"
        >
          RIZ
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={scrollToHero}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            ABOUT
          </button>
          <Link to="/resume" className="hover:text-primary transition-colors">
            RESUME
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            CONTACT
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`md:hidden fixed top-[${
          isScrolled ? "64px" : "80px"
        }] left-0 right-0 bg-background/80 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button
            onClick={scrollToHero}
            className="hover:text-primary transition-colors text-left"
          >
            ABOUT
          </button>
          <Link
            to="/resume"
            className="hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            RESUME
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
