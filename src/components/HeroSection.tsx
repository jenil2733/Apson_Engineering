import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Compass } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure audio is muted so mobile browsers allow instant autoplay
    video.muted = true;
    video.defaultMuted = true;

    const attemptPlay = () => {
      video
        .play()
        .then(() => setVideoLoaded(true))
        .catch(() => {
          // If mobile browser blocks initial autoplay, start on first user interaction
          const onFirstInteraction = () => {
            video
              .play()
              .then(() => setVideoLoaded(true))
              .catch(() => {});
            window.removeEventListener('touchstart', onFirstInteraction);
            window.removeEventListener('click', onFirstInteraction);
            window.removeEventListener('scroll', onFirstInteraction);
          };
          window.addEventListener('touchstart', onFirstInteraction, { once: true, passive: true });
          window.addEventListener('click', onFirstInteraction, { once: true, passive: true });
          window.addEventListener('scroll', onFirstInteraction, { once: true, passive: true });
        });
    };

    attemptPlay();
  }, []);

  // Subtle interactive parallax coordinates for desktop (respects prefers-reduced-motion)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (window.innerWidth < 1024) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToCapabilities = () => {
    const target = document.getElementById('capabilities-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none"
    >
      {/* Background Media Container (Scaled perfectly for mobile screen and desktop) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* HD Background Video with subtle parallax drift on desktop */}
        {!videoError && (
          <video
            ref={videoRef}
            src={siteConfig.heroVideoUrl}
            poster={siteConfig.heroPosterUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            onPlaying={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            style={{
              transform: `scale(1.06) translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease',
            }}
            className={`absolute inset-0 w-full h-full object-cover object-center ${
              videoLoaded ? 'opacity-95' : 'opacity-0'
            }`}
          />
        )}

        {/* Fallback Static HD Poster */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            videoLoaded && !videoError ? 'opacity-0 pointer-events-none' : 'opacity-90'
          }`}
          style={{ backgroundImage: `url(${siteConfig.heroPosterUrl})` }}
        />

        {/* Cinematic Multi-layered Contrast Scrims - Adjusted for increased video visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-transparent" />

        {/* Precision CAD / CNC Architectural Coordinate Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow Label with Clean Line Reveal */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5 text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-[#D4B85E] uppercase animate-fade-in-up delay-75">
            <span className="w-8 sm:w-12 h-[2px] bg-[#B8A04E] shrink-0" />
            <span className="truncate">APSON ENGINEERING · CNC & VMC MACHINING</span>
          </div>

          {/* Masked Line-Reveal Headline (Zajno Inspired) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.08] mb-5 sm:mb-7">
            <span className="block overflow-visible pb-1">
              <span className="inline-block animate-text-mask-1 drop-shadow-md">
                PRECISION IN EVERY CUT
                <span className="relative inline-block text-[#D4B85E]">
                  .
                  {/* CNC Machine VMC Spindle Doodle Notching Directly on the Dot (Desktop only) */}
                  <span
                    className="hidden md:block absolute bottom-[-0.05em] left-1/2 -translate-x-[42%] w-32 md:w-40 lg:w-48 h-auto pointer-events-none select-none z-20"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 100 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full animate-cnc-cutter drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
                    >
                      <defs>
                        {/* Chrome / Stainless Spindle Body Gradient */}
                        <linearGradient id="spindleBodyGrad" x1="22" y1="0" x2="62" y2="0" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#334155" />
                          <stop offset="25%" stopColor="#94A3B8" />
                          <stop offset="48%" stopColor="#FFFFFF" />
                          <stop offset="75%" stopColor="#64748B" />
                          <stop offset="100%" stopColor="#1E293B" />
                        </linearGradient>

                        {/* Slender Tapered Toolholder Neck Gradient */}
                        <linearGradient id="taperNeckGrad" x1="33" y1="0" x2="51" y2="0" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="22%" stopColor="#64748B" />
                          <stop offset="48%" stopColor="#FFFFFF" />
                          <stop offset="78%" stopColor="#94A3B8" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>

                        {/* Carbide Fluted Endmill Gradient */}
                        <linearGradient id="endmillGrad" x1="38" y1="0" x2="46" y2="0" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#334155" />
                          <stop offset="40%" stopColor="#F8FAFC" />
                          <stop offset="70%" stopColor="#CBD5E1" />
                          <stop offset="100%" stopColor="#1E293B" />
                        </linearGradient>

                        {/* Brass Coolant Manifold Valve Gradient */}
                        <linearGradient id="brassManifoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F5E4B2" />
                          <stop offset="45%" stopColor="#D4B85E" />
                          <stop offset="100%" stopColor="#7D6C32" />
                        </linearGradient>

                        {/* Iconic Loc-Line Royal Blue Segments Gradient */}
                        <linearGradient id="locLineBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38BDF8" />
                          <stop offset="45%" stopColor="#0284C7" />
                          <stop offset="100%" stopColor="#075985" />
                        </linearGradient>

                        {/* Orange / Red Nozzle Tip Gradient */}
                        <linearGradient id="nozzleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FB923C" />
                          <stop offset="100%" stopColor="#EA580C" />
                        </linearGradient>
                      </defs>

                      {/* --- 1. Brass Coolant Manifold & Valves (Right Side of Spindle) --- */}
                      <rect x="58" y="16" width="18" height="6" rx="1.5" fill="url(#brassManifoldGrad)" stroke="#7D6C32" strokeWidth="0.6" />
                      <rect x="67" y="12" width="5" height="15" rx="1" fill="url(#brassManifoldGrad)" stroke="#7D6C32" strokeWidth="0.6" />
                      {/* Red Lever Handle on Brass Valve */}
                      <rect x="64" y="10" width="11" height="3" rx="1" fill="#EF4444" stroke="#991B1B" strokeWidth="0.4" />
                      <circle cx="69.5" cy="11.5" r="1.2" fill="#FEE2E2" />

                      {/* --- 2. Main Vertical Spindle Housing (Top) --- */}
                      <rect x="24" y="6" width="36" height="26" rx="1.5" fill="url(#spindleBodyGrad)" stroke="#64748B" strokeWidth="0.8" />
                      {/* Spindle Specular Highlight Streak */}
                      <line x1="41" y1="7" x2="41" y2="31" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.9" />
                      {/* Lower Spindle Flange Collar */}
                      <path d="M 22 32 L 62 32 L 60 37 L 24 37 Z" fill="url(#spindleBodyGrad)" stroke="#94A3B8" strokeWidth="0.6" />

                      {/* --- 3. Toolholder Flange with V-groove (BT40/HSK) --- */}
                      <rect x="27" y="37.5" width="30" height="5.5" rx="1" fill="url(#taperNeckGrad)" stroke="#64748B" strokeWidth="0.6" />
                      <line x1="27" y1="40" x2="57" y2="40" stroke="#0F172A" strokeWidth="0.9" />
                      <line x1="27" y1="41" x2="57" y2="41" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.8" />
                      {/* Flange Drive Notch Ring */}
                      <rect x="31" y="43" width="22" height="4" fill="url(#taperNeckGrad)" stroke="#475569" strokeWidth="0.5" />

                      {/* --- 4. Slender Tapered Extension Toolholder Neck (Directly from Photo) --- */}
                      <polygon points="33,47 51,47 46.5,91 37.5,91" fill="url(#taperNeckGrad)" stroke="#64748B" strokeWidth="0.7" />
                      {/* Polished Mirror Highlight on Taper */}
                      <line x1="41.5" y1="48" x2="41.8" y2="90" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />
                      {/* Slim Extension Nose Collar */}
                      <rect x="37.5" y="91" width="9" height="5" rx="0.5" fill="url(#taperNeckGrad)" stroke="#475569" strokeWidth="0.6" />

                      {/* --- 5. Solid Carbide Fluted Endmill (Spinning Vertically) --- */}
                      <rect x="38" y="96" width="8" height="30" fill="url(#endmillGrad)" stroke="#64748B" strokeWidth="0.6" />
                      {/* Helical Spiral Cutting Flutes */}
                      <path d="M 38 100 Q 42 102 46 104" stroke="#0F172A" strokeWidth="1.2" fill="none" />
                      <path d="M 38 106 Q 42 108 46 110" stroke="#0F172A" strokeWidth="1.2" fill="none" />
                      <path d="M 38 112 Q 42 114 46 116" stroke="#0F172A" strokeWidth="1.2" fill="none" />
                      <path d="M 38 118 Q 42 120 46 122" stroke="#0F172A" strokeWidth="1.2" fill="none" />
                      <path d="M 38 123 Q 42 124.5 46 126" stroke="#0F172A" strokeWidth="1.2" fill="none" />
                      {/* Carbide Specular Reflection Streak */}
                      <line x1="41.5" y1="96" x2="41.5" y2="125" stroke="#FFFFFF" strokeWidth="1" opacity="0.95" />

                      {/* Endmill Precision Corner Tip Landing Directly on the Dot (x=42, y=126) */}
                      <polygon points="38,126 46,126 45,123 39,123" fill="#F8FAFC" stroke="#FFFFFF" strokeWidth="0.6" />

                      {/* --- 6. Iconic Articulated Blue Coolant Hose (Loc-Line) --- */}
                      {/* Segment 1 */}
                      <circle cx="73" cy="28" r="4.2" fill="url(#locLineBlueGrad)" stroke="#0369A1" strokeWidth="0.5" />
                      <circle cx="71.5" cy="27" r="1.3" fill="#BAE6FD" opacity="0.8" />
                      {/* Segment 2 */}
                      <circle cx="77" cy="37" r="4.2" fill="url(#locLineBlueGrad)" stroke="#0369A1" strokeWidth="0.5" />
                      <circle cx="75.5" cy="35.5" r="1.3" fill="#BAE6FD" opacity="0.8" />
                      {/* Segment 3 */}
                      <circle cx="79" cy="47" r="4.2" fill="url(#locLineBlueGrad)" stroke="#0369A1" strokeWidth="0.5" />
                      <circle cx="77.5" cy="45.5" r="1.3" fill="#BAE6FD" opacity="0.8" />
                      {/* Segment 4 */}
                      <circle cx="77" cy="58" r="4.2" fill="url(#locLineBlueGrad)" stroke="#0369A1" strokeWidth="0.5" />
                      <circle cx="75.5" cy="56.5" r="1.3" fill="#BAE6FD" opacity="0.8" />
                      {/* Segment 5 */}
                      <circle cx="72" cy="69" r="4.2" fill="url(#locLineBlueGrad)" stroke="#0369A1" strokeWidth="0.5" />
                      <circle cx="70.5" cy="67.5" r="1.3" fill="#BAE6FD" opacity="0.8" />
                      {/* Segment 6 */}
                      <circle cx="65" cy="80" r="4.2" fill="url(#locLineBlueGrad)" stroke="#0369A1" strokeWidth="0.5" />
                      <circle cx="63.5" cy="78.5" r="1.3" fill="#BAE6FD" opacity="0.8" />
                      {/* Segment 7 */}
                      <circle cx="58" cy="91" r="4.2" fill="url(#locLineBlueGrad)" stroke="#0369A1" strokeWidth="0.5" />
                      <circle cx="56.5" cy="89.5" r="1.3" fill="#BAE6FD" opacity="0.8" />
                      {/* Segment 8 */}
                      <circle cx="53" cy="101" r="4.2" fill="url(#locLineBlueGrad)" stroke="#0369A1" strokeWidth="0.5" />
                      <circle cx="51.5" cy="99.5" r="1.3" fill="#BAE6FD" opacity="0.8" />
                      {/* Orange Nozzle Tip */}
                      <polygon points="50,105 55,102 47,112 43,110" fill="url(#nozzleGrad)" stroke="#C2410C" strokeWidth="0.6" />
                      <ellipse cx="45" cy="111" rx="2" ry="1.2" fill="#7C2D12" />

                      {/* --- 7. Coolant Mist Spray Directed at Cutter Tip --- */}
                      <path d="M 45 111 Q 43 118 42 125" stroke="#38BDF8" strokeWidth="1.6" strokeDasharray="2 1.5" strokeLinecap="round" opacity="0.9" />
                      <path d="M 46 112 Q 44 119 43 125" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="1.5 1" strokeLinecap="round" opacity="0.8" />

                      {/* --- 8. Coolant Mist Droplets & Flying Swarf Chips (From Cut Contact) --- */}
                      <circle cx="49" cy="122" r="1" fill="#E0F2FE" opacity="0.9" className="animate-chip-pulse" />
                      <circle cx="56" cy="119" r="0.9" fill="#BAE6FD" opacity="0.85" className="animate-chip-pulse" />
                      <circle cx="64" cy="116" r="0.8" fill="#E0F2FE" opacity="0.8" className="animate-chip-pulse" />
                      <circle cx="72" cy="113" r="0.7" fill="#BAE6FD" opacity="0.7" className="animate-chip-pulse" />
                      <circle cx="60" cy="125" r="0.9" fill="#FFFFFF" opacity="0.85" className="animate-chip-pulse" />

                      {/* Swarf Flying Particles */}
                      <path d="M 46 125 Q 56 122 68 116" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" strokeDasharray="2 2" opacity="0.9" />
                      <path d="M 44 126 Q 54 127 66 123" stroke="#D4B85E" strokeWidth="0.9" strokeLinecap="round" strokeDasharray="2 2" opacity="0.9" />

                      {/* --- 9. Precision Machined Notch Exactly on the Dot --- */}
                      {/* Notch Datum Step / Shoulder Cut at (42, 126) */}
                      <path d="M 33 126 L 42 126 L 42 120" stroke="#F5E4B2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      {/* Crosshair Datum Marker */}
                      <circle cx="42" cy="126" r="2.8" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="1 1" opacity="0.9" />
                      <line x1="42" y1="120" x2="42" y2="132" stroke="#D4B85E" strokeWidth="0.7" opacity="0.8" />
                      <line x1="36" y1="126" x2="48" y2="126" stroke="#D4B85E" strokeWidth="0.7" opacity="0.8" />

                      {/* Micro Blueprint Technical Notch Annotation */}
                      <text x="3" y="132" fontSize="6.5" fontFamily="monospace" fontWeight="bold" fill="#F5E4B2" opacity="0.95">
                        NOTCH
                      </text>
                      <path d="M 23 130 L 33 126" stroke="#F5E4B2" strokeWidth="0.7" strokeDasharray="1 1" opacity="0.8" />
                    </svg>
                  </span>
                </span>
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="inline-block animate-text-mask-2 text-slate-200 font-bold drop-shadow-md">
                ENGINEERING WITHOUT LIMITS.
              </span>
            </span>
          </h1>

          {/* Supporting Copy with Balanced Wrap and Subtle Delayed Entrance */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8 sm:mb-10 animate-fade-in-up delay-300 text-pretty">
            Advanced CNC and VMC machining solutions for precision components, complex geometries,
            and customer-specific manufacturing requirements in Shapar, Rajkot.
          </p>

          {/* Coordinated Action Buttons with Kinetic Hover Transitions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 animate-fade-in-up delay-400">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold text-white bg-[#7D6C32] hover:bg-[#685926] active:bg-[#54481d] rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#7D6C32]/20 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-white text-center"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/machines"
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/20 hover:border-white/35 rounded-lg transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 text-center"
            >
              <Compass className="w-4 h-4 text-[#B8A04E] transition-transform duration-500 group-hover:rotate-45" />
              <span>Explore Our Machines</span>
            </Link>
          </div>

          {/* Facility Specification Ticker Strip (Editorial Architecture) */}
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-7 border-t border-white/15 flex flex-wrap items-center gap-y-2.5 gap-x-6 sm:gap-x-8 text-[11px] sm:text-xs text-slate-300 animate-fade-in-up delay-500">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8A04E] shrink-0" />
              <span>4-Axis VMC & CNC Turning Centers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8A04E] shrink-0" />
              <span>Drawing & Sample Based Manufacturing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8A04E] shrink-0" />
              <span>Shapar, Rajkot, Gujarat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Precision Scroll Down Indicator */}
      <button
        type="button"
        onClick={scrollToCapabilities}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-white rounded-md p-1.5 group cursor-pointer"
        aria-label="Scroll to capabilities"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400 group-hover:text-[#B8A04E] transition-colors">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-white transition-colors" />
      </button>
    </section>
  );
};
