import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  transparentOnTop?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ transparentOnTop = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const shouldBeTransparent = transparentOnTop && isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBeTransparent
          ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md py-3 shadow-xs border-b border-slate-200/80 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-8">
          {/* Zone 1: Brand Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 group focus-visible:outline-2 focus-visible:outline-[#7D6C32] rounded-md"
            aria-label="Apson Engineering Home"
          >
            <div className="flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src={siteConfig.logoUrl}
                alt="Apson Engineering Logo"
                className="object-contain"
                style={{ width: '50.9957px', height: '50.9957px' }}
              />
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Clean text, no pill enclosures, single line) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            {siteConfig.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#7D6C32] rounded-xs ${
                    isActive
                      ? shouldBeTransparent
                        ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7D6C32]'
                        : 'text-[#7D6C32] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7D6C32]'
                      : shouldBeTransparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Quick Phone (Desktop) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className={`flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-md transition-colors ${
                shouldBeTransparent
                  ? 'text-white/90 hover:text-white hover:bg-white/10'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title="Call Apson Engineering"
            >
              <Phone className="w-3.5 h-3.5 text-[#7D6C32]" />
              <span className="whitespace-nowrap font-mono">{siteConfig.phone}</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#7D6C32] hover:bg-[#685926] active:bg-[#574a1e] rounded-md transition-all shadow-xs hover:shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#7D6C32]"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#7D6C32] rounded-md sm:hidden whitespace-nowrap shrink-0"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus-visible:outline-2 focus-visible:outline-[#7D6C32] transition-colors ${
                shouldBeTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-slate-900 border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-200 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {siteConfig.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-[#7D6C32] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200"
              >
                <Phone className="w-4 h-4 text-[#7D6C32]" />
                <span>Call {siteConfig.phone}</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-semibold text-white bg-[#7D6C32] hover:bg-[#685926]"
              >
                <span>Request a Quote / Send Drawing</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
