import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const FacilityMap: React.FC = () => {
  // Google Map embed pinned directly at Apson Engineering, Shapar, Rajkot
  const mapEmbedUrl = `https://maps.google.com/maps?q=Apson+Engineering,+Shapar,+Rajkot,+Gujarat&t=m&z=15&output=embed`;

  return (
    <div className="w-full bg-white rounded-lg border border-slate-200 shadow-2xs overflow-hidden">
      {/* Header: Pure, uncluttered identity & address */}
      <div className="p-5 sm:p-6 bg-slate-50/90 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7D6C32]">
            <span className="w-5 h-[2px] bg-[#7D6C32]" />
            <span>Workshop Location</span>
          </div>
          <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
            Apson Engineering Facility
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Plot No. 3, R.S. No. 348/2, Opp. Kishan Farm, Shapar, Rajkot – 360026
          </p>
        </div>
      </div>

      {/* Map Viewport with Location Identifier */}
      <div className="relative w-full h-[360px] bg-slate-100">
        {/* Prominent Location Identifier Badge */}
        <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-lg border border-slate-200/90 shadow-md flex items-center gap-2.5 z-10 pointer-events-none">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
          </span>
          <div className="flex flex-col text-left">
            <span className="font-bold text-slate-900 text-xs tracking-tight leading-tight">
              Apson Engineering
            </span>
            <span className="text-[10.5px] text-slate-600 font-medium">
              Plot No. 3, Shapar, Rajkot
            </span>
          </div>
        </div>

        <iframe
          title="Apson Engineering Location Map"
          src={mapEmbedUrl}
          className="w-full h-full border-0"
          loading="eager"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Footer: Operational Hours & Directions Link */}
      <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <Clock className="w-3.5 h-3.5 text-[#7D6C32] shrink-0" />
          <span>
            <strong className="font-semibold text-slate-800">Hours:</strong> Thu–Tue 8:30 AM – 7:30 PM{' '}
            <span className="text-rose-600 font-semibold">(Wed Off)</span>
          </span>
        </div>

        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#7D6C32] hover:text-[#5a4e21] inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <span>Open in Google Maps for Directions</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
