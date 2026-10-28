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
  // When at top of page on home, the navbar sits in the dark/blue hero state
  const isDarkNavbar = shouldBeTransparent;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkNavbar
          ? mobileMenuOpen
            ? 'bg-slate-950/98 backdrop-blur-xl py-3 border-b border-slate-800 text-white shadow-xl'
            : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-3.5 sm:py-4 border-b border-white/10 text-white'
          : 'bg-white/95 backdrop-blur-md py-3 shadow-xs border-b border-slate-200/80 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-8">
          {/* Zone 1: Brand Logo & Editorial Typography */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 group focus-visible:outline-2 focus-visible:outline-[#7D6C32] rounded-md"
            aria-label="Apson Engineering Home"
          >
            <div className="flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <img
                src={siteConfig.logoUrl}
                alt="Apson Engineering Logo"
                className="object-contain"
                style={{ width: '44px', height: '44px' }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1 leading-tight">
                <span
                  className={`text-sm xs:text-base sm:text-lg font-extrabold tracking-tight transition-colors ${
                    isDarkNavbar ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  APSON
                </span>
                <span className="text-sm xs:text-base sm:text-lg font-extrabold tracking-tight text-[#B8A04E]">
                  ENGINEERING
                </span>
              </div>
              <span
                className={`text-[9px] xs:text-[9.5px] font-mono tracking-wider uppercase leading-none transition-colors truncate max-w-[140px] xs:max-w-none ${
                  isDarkNavbar ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                CNC & VMC Job Work
              </span>
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus-visible:outline-2 focus-visible:outline-[#7D6C32] transition-colors border ${
                isDarkNavbar
                  ? mobileMenuOpen
                    ? 'text-white bg-white/15 border-white/25'
                    : 'text-white hover:bg-white/10 border-white/10'
                  : mobileMenuOpen
                  ? 'text-slate-900 bg-slate-100 border-slate-300'
                  : 'text-slate-700 hover:bg-slate-100 border-slate-200'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Dynamically matched to Dark/Blue or White navbar theme) */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4.5rem)] overflow-y-auto ${
            isDarkNavbar
              ? 'bg-slate-950/98 backdrop-blur-2xl text-white border-b border-slate-800/90 shadow-black/80'
              : 'bg-white/98 backdrop-blur-2xl text-slate-900 border-b border-slate-200 shadow-slate-900/10'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {siteConfig.navLinks.map((link, idx) => {
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
                  <span
                    className={`font-mono text-xs ${
                      isDarkNavbar
                        ? 'text-slate-400 group-hover:text-slate-200'
                        : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    [0{idx + 1}]
                  </span>
                </Link>
              );
            })}

            {/* Quick Actions in Mobile Drawer */}
            <div
              className={`pt-4 mt-2 border-t flex flex-col gap-2.5 ${
                isDarkNavbar ? 'border-slate-800/80' : 'border-slate-100'
              }`}
            >
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-colors border ${
                  isDarkNavbar
                    ? 'text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border-slate-800 active:bg-slate-800'
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

