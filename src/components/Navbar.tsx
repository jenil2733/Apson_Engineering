import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  transparentOnTop?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ transparentOnTop = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
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

  // Close mobile menu on click outside header safely (no overlay required)
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      // If the clicked node is no longer connected to the DOM (e.g. unmounted icon), ignore it
      if (!target.isConnected) return;
      if (headerRef.current && !headerRef.current.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    // Defer listener attachment so the opening tap/click does not immediately trigger it
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
    }, 0);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isHome = location.pathname === '/';
  const shouldBeTransparent = transparentOnTop && isHome && !isScrolled;
  // When at top of page on home, the navbar sits in the dark/blue hero state
  const isDarkNavbar = shouldBeTransparent;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkNavbar
          ? mobileMenuOpen
            ? 'bg-slate-950 py-3 sm:py-4 border-b border-white/10 text-white'
            : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-3.5 sm:py-4 border-b border-white/10 text-white'
          : mobileMenuOpen
          ? 'bg-white py-3 shadow-xs border-b border-slate-200 text-slate-900'
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
            <div className="flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <img
                src={siteConfig.logoUrl}
                alt="Apson Engineering Logo"
                className="object-contain"
                style={{ width: '46px', height: '46px' }}
              />
            </div>
          </Link>

          {/* Zone 2: Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium"
          >
            {siteConfig.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#7D6C32] rounded-xs ${
                    isActive
                      ? isDarkNavbar
                        ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D4B85E]'
                        : 'text-[#7D6C32] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7D6C32]'
                      : isDarkNavbar
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
              className={`flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg transition-colors border ${
                isDarkNavbar
                  ? 'text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border-white/10'
                  : 'text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border-slate-200'
              }`}
              title="Call Apson Engineering"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8A04E]" />
              <span className="whitespace-nowrap font-mono">{siteConfig.phone}</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#7D6C32] hover:bg-[#685926] active:bg-[#574a1e] rounded-lg transition-all shadow-xs hover:shadow-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#7D6C32]"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls: Quote Button & Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all ${
                isDarkNavbar
                  ? 'bg-[#7D6C32] hover:bg-[#6b5c28] text-white shadow-xs border border-[#9D8842]/30'
                  : 'bg-[#7D6C32] hover:bg-[#685926] text-white shadow-xs'
              }`}
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen((prev) => !prev);
              }}
              className={`w-10 h-10 sm:w-11 sm:h-11 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg touch-manipulation cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-[#7D6C32] transition-all border active:scale-95 ${
                isDarkNavbar
                  ? mobileMenuOpen
                    ? 'text-white bg-white/15 border-white/25 active:bg-white/20'
                    : 'text-white hover:bg-white/10 active:bg-white/15 border-white/10'
                  : mobileMenuOpen
                  ? 'text-slate-900 bg-slate-100 border-slate-300 active:bg-slate-200'
                  : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200 border-slate-200'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 pointer-events-none transition-transform duration-200" />
              ) : (
                <Menu className="w-5 h-5 pointer-events-none transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Opens directly below the header bar without any overlay on the navbar) */}
      {mobileMenuOpen && (
        <div
          className={`absolute top-full left-0 right-0 w-full md:hidden px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4.5rem)] overflow-y-auto ${
            isDarkNavbar
              ? 'bg-slate-950 text-white border-b border-white/10 shadow-2xl shadow-black/80'
              : 'bg-white text-slate-900 border-b border-slate-200 shadow-xl shadow-slate-900/10'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between group ${
                    isDarkNavbar
                      ? isActive
                        ? 'bg-white/10 text-[#F5E4B2] border-l-4 border-[#D4B85E] shadow-xs'
                        : 'text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10'
                      : isActive
                      ? 'bg-amber-50/90 text-[#7D6C32] border-l-4 border-[#7D6C32] shadow-2xs'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isDarkNavbar
                          ? isActive
                            ? 'bg-[#D4B85E] scale-125'
                            : 'bg-slate-600 group-hover:bg-[#D4B85E]'
                          : isActive
                          ? 'bg-[#7D6C32] scale-125'
                          : 'bg-slate-300 group-hover:bg-[#7D6C32]'
                      }`}
                    />
                    <span>{link.label}</span>
                  </span>
                </Link>
              );
            })}

            {/* Quick Actions in Mobile Drawer */}
            <div
              className={`pt-4 mt-2 border-t flex flex-col gap-2.5 ${
                isDarkNavbar ? 'border-white/10' : 'border-slate-200/60'
              }`}
            >
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-colors border ${
                  isDarkNavbar
                    ? 'text-white/90 bg-white/5 hover:bg-white/10 border-white/10 active:bg-white/10'
                    : 'text-slate-800 bg-slate-50 hover:bg-slate-100 border-slate-200/80 active:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isDarkNavbar
                        ? 'bg-[#7D6C32]/20 border border-[#7D6C32]/40 text-[#D4B85E]'
                        : 'bg-[#7D6C32]/10 border border-[#7D6C32]/20 text-[#7D6C32]'
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span
                      className={`text-[10px] uppercase font-mono tracking-wider ${
                        isDarkNavbar ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Direct Shop Floor
                    </span>
                    <span
                      className={`font-mono text-xs font-bold ${
                        isDarkNavbar ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {siteConfig.phone}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-[11px] font-semibold font-mono ${
                    isDarkNavbar ? 'text-[#D4B85E]' : 'text-[#7D6C32]'
                  }`}
                >
                  Call Now →
                </span>
              </a>

              <Link
                to="/contact"
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white transition-all ${
                  isDarkNavbar
                    ? 'bg-gradient-to-r from-[#8E7B3A] to-[#7D6C32] hover:from-[#9D8842] hover:to-[#6E5E2A] active:scale-[0.99] shadow-lg shadow-[#7D6C32]/25'
                    : 'bg-[#7D6C32] hover:bg-[#685926] active:scale-[0.99] shadow-md shadow-[#7D6C32]/20'
                }`}
              >
                <span>Request Quote / Send Drawing</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* Technical Credential Badge */}
              <div
                className={`pt-2 flex items-center justify-between text-[10.5px] font-mono px-1 ${
                  isDarkNavbar ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isDarkNavbar ? 'bg-[#D4B85E]' : 'bg-[#7D6C32]'
                    }`}
                  />
                  <span>Shapar, Rajkot, Gujarat</span>
                </span>
                <span>ISO Compliant CNC / VMC</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

