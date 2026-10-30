import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CounterNumber } from '../components/CounterNumber';
import { ContactCTA } from '../components/ContactCTA';
import { IndustriesWeServe } from '../components/IndustriesWeServe';
import { HomeProductsSection } from '../components/HomeProductsSection';
import { RevealOnScroll } from '../components/RevealOnScroll';
import {
  Clock,
  Briefcase,
  Users,
  Award,
  RotateCcw,
  Layers,
  Compass,
  Cpu,
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="bg-white selection:bg-[#B8A04E]/20 selection:text-slate-900">
      {/* 1. Cinematic Full-Width Hero with Real Video & Headline */}
      <HeroSection />

      {/* 2. Architectural Metric & Credibility Counter Strip (Clean White & Slate Aesthetic) */}
      <section className="relative z-20 bg-slate-50/70 border-b border-slate-200 text-slate-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Subtle light architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Stat 1: Years of Experience */}
            <RevealOnScroll delay={0} direction="up">
              <div className="group relative p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#7D6C32] transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#7D6C32] group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 group-hover:text-[#7D6C32] transition-colors">
                    [01]
                  </span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight flex items-baseline font-mono tabular-nums">
                    <CounterNumber end={15} suffix="+" duration={1800} />
                  </div>
                  <div className="mt-2 text-xs sm:text-base font-bold text-slate-800 group-hover:text-[#7D6C32] transition-colors">
                    Years Machining Experience
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    Precision manufacturing & craftsmanship
                  </div>
                </div>
                {/* Subtle bottom accent line on hover */}
                <div className="w-0 group-hover:w-12 h-[2px] bg-[#7D6C32] mt-4 transition-all duration-300" />
              </div>
            </RevealOnScroll>

            {/* Stat 2: Clients / Batches Completed */}
            <RevealOnScroll delay={100} direction="up">
              <div className="group relative p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#7D6C32] transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#7D6C32] group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 group-hover:text-[#7D6C32] transition-colors">
                    [02]
                  </span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight flex items-baseline font-mono tabular-nums">
                    <CounterNumber end={350} suffix="+" duration={2200} />
                  </div>
                  <div className="mt-2 text-xs sm:text-base font-bold text-slate-800 group-hover:text-[#7D6C32] transition-colors">
                    Batches Delivered
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    Automotive & industrial engineering
                  </div>
                </div>
                <div className="w-0 group-hover:w-12 h-[2px] bg-[#7D6C32] mt-4 transition-all duration-300" />
              </div>
            </RevealOnScroll>

            {/* Stat 3: Skilled Technical Staff */}
            <RevealOnScroll delay={200} direction="up">
              <div className="group relative p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#7D6C32] transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#7D6C32] group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 group-hover:text-[#7D6C32] transition-colors">
                    [03]
                  </span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight flex items-baseline font-mono tabular-nums">
                    <CounterNumber end={20} suffix="+" duration={1900} />
                  </div>
                  <div className="mt-2 text-xs sm:text-base font-bold text-slate-800 group-hover:text-[#7D6C32] transition-colors">
                    Skilled Machinists & Staff
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    CNC & VMC operators & metrologists
                  </div>
                </div>
                <div className="w-0 group-hover:w-12 h-[2px] bg-[#7D6C32] mt-4 transition-all duration-300" />
              </div>
            </RevealOnScroll>

            {/* Stat 4: Blueprint Compliance */}
            <RevealOnScroll delay={300} direction="up">
              <div className="group relative p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#7D6C32] transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#7D6C32] group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 group-hover:text-[#7D6C32] transition-colors">
                    [04]
                  </span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight flex items-baseline font-mono tabular-nums">
                    <CounterNumber end={100} suffix="%" duration={1600} />
                  </div>
                  <div className="mt-2 text-xs sm:text-base font-bold text-slate-800 group-hover:text-[#7D6C32] transition-colors">
                    Blueprint & Tolerance Fidelity
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    First-off & in-process stage inspection
                  </div>
                </div>
                <div className="w-0 group-hover:w-12 h-[2px] bg-[#7D6C32] mt-4 transition-all duration-300" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. Core Machining Capabilities (High-Craft Editorial Precision) */}
      <section id="capabilities-section" className="py-16 sm:py-24 lg:py-32 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Architectural Spacing */}
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mb-14 sm:mb-20">
              <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-[#7D6C32] uppercase mb-4">
                <span className="w-8 h-[2px] bg-[#7D6C32]" />
                <span>Core Machining Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-[-0.02em] leading-[1.12]">
                Built for Precision.
                <span className="block text-slate-500 font-bold mt-1">Ready for Production.</span>
              </h2>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                From CNC turning to multi-axis VMC machining, Apson Engineering undertakes customer-specific precision manufacturing with a focus on dimensional accuracy, consistent execution, and dependable service.
              </p>
            </div>
          </RevealOnScroll>

          {/* 4 Capabilities Grid with Precision Architectural Treatment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {/* Capability 1: CNC Turning */}
            <RevealOnScroll delay={0} direction="up">
              <div className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#7D6C32]/60 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 h-full">
                {/* Top Corner Crosshair Marker */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#7D6C32] group-hover:bg-[#7D6C32] group-hover:text-white transition-all duration-300 shadow-xs">
                    <RotateCcw className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-90" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-[#7D6C32] transition-colors">
                    01
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Cylindrical Machining
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#7D6C32] transition-colors">
                    CNC Turning
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    High-speed OD/ID turning, grooving, single-point threading, and precise boring for shafts, bushes, flanges, and round components.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-medium text-slate-600">ACE SJE 10LM · Jyoti DX 200</span>
                  <span className="font-mono font-bold text-slate-900 bg-slate-100/80 px-2 py-0.5 rounded text-[11px]">
                    Ø up to ~350mm
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Capability 2: VMC Milling */}
            <RevealOnScroll delay={100} direction="up">
              <div className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#7D6C32]/60 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#7D6C32] group-hover:bg-[#7D6C32] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Layers className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-[#7D6C32] transition-colors">
                    02
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Prismatic Machining
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#7D6C32] transition-colors">
                    VMC Milling
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Precision vertical milling, pocketing, deep hole drilling, and rigid tapping for plates, housings, brackets, and structural machine elements.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-medium text-slate-600">ACE 850V · Jyoti VMC</span>
                  <span className="font-mono font-bold text-slate-900 bg-slate-100/80 px-2 py-0.5 rounded text-[11px]">
                    X up to ~1000mm
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Capability 3: 4-Axis Machining */}
            <RevealOnScroll delay={200} direction="up">
              <div className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#7D6C32]/60 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#7D6C32] group-hover:bg-[#7D6C32] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Compass className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-[#7D6C32] transition-colors">
                    03
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Multi-Surface Indexing
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#7D6C32] transition-colors">
                    4-Axis Machining
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Synchronized rotary table operations (200mm & 250mm diameter) enabling multi-sided milling in single fixture setups to maintain critical datum alignment.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-medium text-slate-600">ACE 850V · KTM 10060</span>
                  <span className="font-mono font-bold text-slate-900 bg-slate-100/80 px-2 py-0.5 rounded text-[11px]">
                    200–250mm Rotary
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Capability 4: Drawing & Sample Based Manufacturing */}
            <RevealOnScroll delay={300} direction="up">
              <div className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#7D6C32]/60 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#7D6C32] group-hover:bg-[#7D6C32] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Cpu className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-[#7D6C32] transition-colors">
                    04
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Drawing & Sample Based
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#7D6C32] transition-colors">
                    Drawing & Sample Based Manufacturing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Tailored batch manufacturing strictly according to customer blueprints, CAD files, or physical samples across steels, iron castings, and aluminium alloys.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-medium text-slate-600">Customer Blueprints</span>
                  <span className="font-mono font-bold text-slate-900 bg-slate-100/80 px-2 py-0.5 rounded text-[11px]">
                    Batch & Pilot
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. Our Products Section (Featuring Machined Components) */}
      <HomeProductsSection />

      {/* 5. Industries We Serve (Unique Pinterest-style Editorial Gallery) */}
      <IndustriesWeServe />

      {/* 6. Strong Final Conversion Call-to-Action Banner */}
      <ContactCTA />
    </div>
  );
};
