import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  MapPin,
  ArrowRight,
  Sliders,
  Shield,
  FileCheck,
  Compass,
  Phone,
  Mail,
  Eye,
  Target,
  Award,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ContactCTA } from '../components/ContactCTA';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={siteConfig.heroPosterUrl}
            alt="Apson Engineering Facility"
            className="w-full h-full object-cover opacity-25 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#B8A04E] uppercase mb-3">
              <span className="w-6 h-[2px] bg-[#7D6C32]" />
              <span>About Apson Engineering</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Engineering Precision.
              <span className="block text-slate-400 font-bold mt-1">
                Delivering Possibilities.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Apson Engineering is a dedicated CNC and VMC precision machining job-work enterprise
              located in the industrial manufacturing hub of Shapar, Rajkot, Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: Vision & Mission */}
      <section className="py-12 sm:py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7D6C32] uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#7D6C32]" />
              <span>Our Guiding Purpose</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Vision, Mission & Guiding Values
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Precision machining is driven by technical discipline, drawing fidelity, and long-term
              industrial partnerships. These principles shape every component that leaves our facility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {/* Vision Card */}
            <RevealOnScroll delay={0} direction="up">
              <div className="bg-white rounded-xl border border-slate-200/90 p-5 sm:p-8 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#7D6C32]/10 border border-[#7D6C32]/25 flex items-center justify-center text-[#7D6C32]">
                      <Eye className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#7D6C32]">Future Orientation</span>
                      <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                    </div>
                  </div>

                  <p className="text-base text-slate-700 leading-relaxed font-medium mb-6">
                    To be the benchmark precision job-work partner for automotive, engineering, and heavy equipment
                    manufacturers across India—recognized for micron-level tolerance fidelity, zero-defect fixturing,
                    and dependable delivery commitments.
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7D6C32]" />
                      <span>Continuous expansion of 4-axis VMC rotary capabilities</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7D6C32]" />
                      <span>Preferred vendor status with leading Tier-1 and Tier-2 manufacturers</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7D6C32]" />
                      <span>Setting regional standards for metrology and workpiece cleanliness</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Mission Card */}
            <RevealOnScroll delay={120} direction="up">
              <div className="bg-white rounded-xl border border-slate-200/90 p-5 sm:p-8 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#7D6C32]/10 border border-[#7D6C32]/25 flex items-center justify-center text-[#7D6C32]">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#7D6C32]">Daily Commitment</span>
                      <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                    </div>
                  </div>

                  <p className="text-base text-slate-700 leading-relaxed font-medium mb-6">
                    To manufacture customer drawing-based precision components that flawlessly integrate into demanding assemblies,
                    combining modern CNC turning and VMC machining infrastructure, rigorous in-process metrology, skilled operator
                    craftsmanship, and transparent owner-level technical communication.
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7D6C32]" />
                      <span>100% adherence to customer geometric callouts and dimensional specs</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7D6C32]" />
                      <span>Rapid quote turnaround and predictable batch manufacturing lead times</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7D6C32]" />
                      <span>Fostering technical skill development for our machining workforce</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Core Values 3-col Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-white border border-slate-200">
              <div className="text-xs font-bold text-[#7D6C32] uppercase tracking-wider mb-1">Principle 01</div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">Drawing Integrity</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We treat customer blueprints and CAD data as exact promises. Every bore, thread, chamfer, and face is inspected to blueprint tolerances.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white border border-slate-200">
              <div className="text-xs font-bold text-[#7D6C32] uppercase tracking-wider mb-1">Principle 02</div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">Reliable Turnaround</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Industrial clients rely on predictable supply chains. We schedule machine cycles rigorously to meet agreed dispatch milestones.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white border border-slate-200">
              <div className="text-xs font-bold text-[#7D6C32] uppercase tracking-wider mb-1">Principle 03</div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">Craftsmanship & Staff Pride</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Machining quality is powered by the expertise of our operators and engineers who master tool offsets, fixturing rigidity, and surface finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Core Principles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#7D6C32]">
                Our Manufacturing Focus
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Customer Drawing-Based Manufacturing Built on Exacting Standards
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At Apson Engineering, our core focus is precision job work manufactured strictly to
                customer drawings, 3D CAD models, or physical samples. Whether you supply forgings,
                castings, or raw bar stock, our facility is equipped to machine components to your
                specified tolerances and surface requirements.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our plant brings together both CNC horizontal turning centers and multi-axis Vertical
                Machining Centers (VMC) with 4th-axis rotary tables. This combination enables us to
                handle both cylindrical round parts (shafts, flanges, bushes) and prismatic components
                (housings, manifolds, brackets) under one roof.
              </p>

              {/* Verified Pillars */}
              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7D6C32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Drawing-To-Part Execution
                    </strong>
                    <span className="text-xs text-slate-600">
                      Components machined rigorously to customer dimensional callouts, geometric tolerances, and surface finish notes.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7D6C32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      4-Axis Rotary Machining Capability
                    </strong>
                    <span className="text-xs text-slate-600">
                      Integrated 200 mm and 250 mm rotary tables enable multi-face indexing and angular operations without relocating reference datums.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7D6C32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Direct Engineering Communication
                    </strong>
                    <span className="text-xs text-slate-600">
                      Direct dialogue with machining decision-makers for feasibility reviews, tooling advice, and prompt quotations.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#7D6C32] hover:bg-[#685926] rounded-md transition-all shadow-xs"
                >
                  <span>Explore Machine Specifications</span>
                  <Sliders className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                >
                  <span>Contact Our Workshop</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual Column: Workshop Photo */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-25_at_11.16.38__1__04dd2739.jpeg"
                  alt="Apson Engineering Shop Floor Operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-xs text-white">
                  Active production bay with CNC turning and VMC equipment
                </div>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Official Facility Registration
                </h4>
                <div className="text-xs text-slate-600 space-y-1.5">
                  <p>
                    <span className="font-semibold text-slate-800">Trade Name:</span> Apson Engineering
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Constitution:</span> Proprietorship
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Registered Hub:</span> Plot No. 3, R.S. No. 348/2, Shapar, Rajkot, Gujarat – 360026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Inspection Standards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#7D6C32] uppercase mb-2">
              <span>Metrology & Accuracy</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Attention to Dimensions & Workmanship
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Precision machining requires rigorous in-process verification. We inspect critical
              dimensions at key manufacturing stages to ensure components meet your blueprint callouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealOnScroll delay={0} direction="up">
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 text-center h-full">
                <div className="w-10 h-10 mx-auto rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#7D6C32] mb-3 shadow-2xs">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  First-Off & In-Process Inspection
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Initial piece validation before commencing batch runs, followed by scheduled dimensional checks during turning and milling.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100} direction="up">
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 text-center h-full">
                <div className="w-10 h-10 mx-auto rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#7D6C32] mb-3 shadow-2xs">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  Precision Measurement Equipment
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Utilizing digital height gauges on granite surface plate, precision micrometers, bore gauges, and vernier callipers.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200} direction="up">
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 text-center h-full">
                <div className="w-10 h-10 mx-auto rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#7D6C32] mb-3 shadow-2xs">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  Clean Fixturing & Datum Control
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rigid workholding fixtures, clean clamping surfaces, and synchronized 4th-axis rotary positioning prevent tolerance stack-up.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <ContactCTA />
    </div>
  );
};
