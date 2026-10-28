import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

interface Industry {
  id: string;
  number: string;
  name: string;
  image: string;
}

const industries: Industry[] = [
  {
    id: 'automotive',
    number: '01',
    name: 'Automotive & Powertrain',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hydraulics',
    number: '02',
    name: 'Hydraulic & Fluid Power',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'agriculture',
    number: '03',
    name: 'Heavy Agriculture & Tractors',
    image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pumps-valves',
    number: '04',
    name: 'Industrial Pumps & Valves',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'robotics',
    number: '05',
    name: 'Robotics & Automation',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'heavy-engineering',
    number: '06',
    name: 'Heavy Engineering',
    image: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=800&q=80',
  },
];

export const IndustriesWeServe: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 relative overflow-hidden border-t border-b border-slate-100">
      {/* Background Architectural Subtle Light Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#000000 1px, transparent 1px), linear-gradient(to right, #000000 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      
      {/* Ambient Soft Warm Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#B8A04E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Minimal, Clean & Distinctive */}
        <RevealOnScroll direction="up">
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold tracking-widest text-[#7D6C32] uppercase mb-1.5">
              <span className="w-5 h-[2px] bg-[#7D6C32]" />
              <span>Sectors & Applications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              Industries We Serve
            </h2>
          </div>
        </RevealOnScroll>

        {/* Small, Compact Pinterest-Style Image Boxes Grid: Just Name & Image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {industries.map((item, idx) => (
            <RevealOnScroll key={item.id} delay={idx * 60} direction="up">
              <div
                className="group relative cursor-default overflow-hidden rounded-xl bg-slate-100 border border-slate-200/90 hover:border-[#7D6C32] transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-end h-44 sm:h-52 select-none"
              >
                {/* Authentic Real Image with Subtle Smooth Zoom */}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Rich Vignette Gradient Scrim for crisp typography readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

                {/* Minimal Top-Left Numeric Index */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-white/95 backdrop-blur-md border border-slate-200/80 text-[10px] font-mono font-bold text-slate-800 shadow-2xs">
                  {item.number}
                </div>

                {/* Bottom Label: Just Name in an Elegant, Unique Way */}
                <div className="relative z-10 p-3 text-left">
                  <span className="block text-xs sm:text-sm font-bold text-white leading-tight group-hover:text-[#F3E7BE] transition-colors drop-shadow-sm">
                    {item.name}
                  </span>
                  {/* Subtle active underline indicator */}
                  <div className="w-0 group-hover:w-8 h-[2px] bg-[#B8A04E] mt-1.5 transition-all duration-300" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
