import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, Phone } from 'lucide-react';
import { MachineCard } from '../components/MachineCard';
import { MachineModal } from '../components/MachineModal';
import { ContactCTA } from '../components/ContactCTA';
import { machinesData, Machine } from '../data/machines';
import { siteConfig } from '../data/siteConfig';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const Products: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  const handleSelectForQuote = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={siteConfig.heroPosterUrl}
            alt="Apson Engineering Shop Floor"
            className="w-full h-full object-cover opacity-25 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#B8A04E] uppercase mb-3 animate-fade-in-down">
              <span className="w-6 h-[2px] bg-[#7D6C32]" />
              <span>Plant Equipment & Specifications</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight animate-fade-in-up delay-150">
              Machining Equipment & Capabilities
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl animate-fade-in-up delay-300">
              A comprehensive overview of our CNC Turning Centers and Vertical Machining Centers (VMC)
              in Shapar, Rajkot. Configured for high-accuracy cylindrical turning and 4-axis multi-sided milling.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Policy Disclaimer Strip */}
      <section className="bg-slate-50 border-b border-slate-200 py-3.5 px-4 animate-fade-in-up delay-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-start sm:items-center gap-2">
            <Info className="w-4 h-4 text-[#7D6C32] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>Specification Policy: </strong>
              Parameters labeled <span className="font-semibold text-amber-800">(TBC)</span> reflect preliminary working details awaiting final machine plate audit. We guarantee dimensions strictly per agreed customer blueprints.
            </span>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-slate-900 hover:text-[#7D6C32] font-semibold shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#7D6C32]" />
            <span>Speak with Machining Lead: {siteConfig.phone}</span>
          </a>
        </div>
      </section>

      {/* Machines Grid Container */}
      <main className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up delay-500">

        {/* Machine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machinesData.map((machine, idx) => (
            <RevealOnScroll key={machine.id} delay={idx * 80} direction="up">
              <MachineCard
                machine={machine}
                onViewSpecs={(m) => setSelectedMachine(m)}
                onRequestQuote={handleSelectForQuote}
              />
            </RevealOnScroll>
          ))}
        </div>

        {/* Technical Capacity Summary Card */}
        <RevealOnScroll direction="up" delay={200}>
          <div className="mt-12 sm:mt-16 p-5 sm:p-8 rounded-lg bg-slate-50 border border-slate-200/90">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7D6C32]">
                VMC Machining Envelope
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Prismatic Parts up to 1000 mm
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accommodating plates, housings, manifolds, and structural brackets with 4th-axis rotary indexers (200mm & 250mm).
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7D6C32]">
                CNC Turning Capacity
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Turned Shafts & Flanges
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Turning length up to ~643 mm and chuck capacities up to 200 mm with Fanuc and Siemens controller interfaces.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7D6C32]">
                Quality & Metrology
              </div>
              <h3 className="text-base font-bold text-slate-900">
                100% Drawing Compliance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equipped with surface plate, digital height gauges, micrometers, and bore gauges for first-piece and in-process validation.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </main>

      {/* Global Contact CTA Section */}
      <ContactCTA />

      {/* Detail Modal */}
      <MachineModal
        machine={selectedMachine}
        onClose={() => setSelectedMachine(null)}
        onSelectForQuote={handleSelectForQuote}
      />
    </div>
  );
};
