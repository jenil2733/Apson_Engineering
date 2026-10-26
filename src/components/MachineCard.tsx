import React from 'react';
import { ArrowUpRight, Sliders, ChevronRight } from 'lucide-react';
import { Machine } from '../data/machines';

interface MachineCardProps {
  machine: Machine;
  onViewSpecs: (machine: Machine) => void;
  onRequestQuote: (machine: Machine) => void;
}

export const MachineCard: React.FC<MachineCardProps> = ({
  machine,
  onViewSpecs,
  onRequestQuote,
}) => {
  // Grab top 3 key specifications for preview
  const previewSpecs = machine.specifications.slice(0, 3);

  return (
    <article className="group bg-white rounded-lg border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden">
      {/* Visual Header */}
      <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
        <img
          src={machine.image}
          alt={`${machine.name} at Apson Engineering`}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Minimal gradient scrim for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Unboxed category badge / label (top-left) */}
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-sm border border-white/10">
          {machine.badge}
        </div>

        {/* Image Caption at bottom */}
        <div className="absolute bottom-2.5 left-3 right-3 text-[11px] text-white/80 truncate">
          {machine.imageCaption}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata row (Clean unboxed text with dot separator) */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
            <span className="font-medium text-[#7D6C32]">{machine.category}</span>
            <span aria-hidden="true">·</span>
            <span>{machine.manufacturer}</span>
          </div>

          {/* Machine Name */}
          <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#7D6C32] transition-colors">
            {machine.name}
          </h3>

          {/* Short Tagline */}
          <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
            {machine.tagline}
          </p>

          {/* Key Preliminary Specs List */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-2">
              Key Parameters
            </div>
            <dl className="space-y-1.5 text-xs">
              {previewSpecs.map((spec, i) => (
                <div key={i} className="flex items-center justify-between gap-2">
                  <dt className="text-slate-500">{spec.label}</dt>
                  <dd className="font-mono text-slate-800 text-right truncate font-medium">
                    {spec.value}
                    {spec.status === 'tbc' && (
                      <span className="text-[10px] text-amber-700 ml-1 font-sans">
                        (TBC)
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onViewSpecs(machine)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-[#7D6C32] rounded-xs"
          >
            <Sliders className="w-3.5 h-3.5 text-[#7D6C32]" />
            <span>View Specifications</span>
          </button>

          <button
            type="button"
            onClick={() => onRequestQuote(machine)}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-[#7D6C32] hover:bg-[#685926] active:bg-[#574a1e] rounded-md transition-all shadow-xs"
          >
            <span>Request Quote</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
