import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", isRoute: false },
  { label: "About", href: "/about", isRoute: true },
  { label: "Services", href: "#services", isRoute: false },
  { label: "Approach", href: "#approach", isRoute: false },
  { label: "Portfolio", href: "#portfolio", isRoute: false },
  { label: "Testimonials", href: "#testimonials", isRoute: false },
  { label: "Contact", href: "#contact", isRoute: false },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);

    if (isRoute) {
      navigate(href);
      return;
    }

    // If we're not on home page and clicking a section link, go home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            className="flex items-center gap-2 text-xl lg:text-2xl font-heading font-bold"
            onClick={() => handleNavClick("#home", false)}
          >
            {/* <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm lg:text-base">
                AI
              </span>
            </div> */}
            <span className="gradient-text">AVIN lab</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href, link.isRoute)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="hero"
              size="default"
              onClick={() => handleNavClick("#contact", false)}
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[400px] pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href, link.isRoute)}
                className="px-4 py-3 text-left text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="hero"
              size="lg"
              className="mt-4"
              onClick={() => handleNavClick("#contact", false)}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
