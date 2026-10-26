import React from 'react';
import { X, CheckCircle2, AlertCircle, ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { Machine } from '../data/machines';
import { getWhatsAppQuoteUrl, siteConfig } from '../data/siteConfig';

interface MachineModalProps {
  machine: Machine | null;
  onClose: () => void;
  onSelectForQuote: (machine: Machine) => void;
}

export const MachineModal: React.FC<MachineModalProps> = ({
  machine,
  onClose,
  onSelectForQuote,
}) => {
  if (!machine) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="machine-modal-title"
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-lg shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-4 sm:p-6 border-b border-slate-100 bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#7D6C32] uppercase tracking-wider mb-1">
              <span>{machine.category}</span>
              <span aria-hidden="true">·</span>
              <span>{machine.manufacturer}</span>
            </div>
            <h2 id="machine-modal-title" className="text-lg sm:text-2xl font-bold text-slate-900">
              {machine.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Machine Photo */}
          <div className="relative rounded-md overflow-hidden bg-slate-900 aspect-16/9 border border-slate-200">
            <img
              src={machine.image}
              alt={machine.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5 sm:p-3 text-[11px] sm:text-xs text-white/90">
              <span>{machine.imageCaption}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
              Machine Overview & Configuration
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {machine.fullDescription}
            </p>
          </div>

          {/* Specifications Table */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                Technical Specifications
              </h3>
              <span className="text-[10px] sm:text-[11px] text-slate-500">
                * Parameters marked TBC subject to final workshop confirmation
              </span>
            </div>

            <div className="border border-slate-200 rounded-md overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm min-w-[380px]">
                <thead className="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3 sm:px-4 font-semibold">Parameter</th>
                    <th className="py-2.5 px-3 sm:px-4 font-semibold">Specification</th>
                    <th className="py-2.5 px-3 sm:px-4 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {machine.specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}
                    >
                      <td className="py-2.5 px-3 sm:px-4 font-medium text-slate-800">
                        {spec.label}
                      </td>
                      <td className="py-2.5 px-3 sm:px-4 font-mono text-slate-700">
                        <span>{spec.value}</span>
                        {spec.note && (
                          <span className="block text-[10px] sm:text-[11px] font-sans text-slate-500 mt-0.5">
                            {spec.note}
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 sm:px-4 text-right">
                        {spec.status === 'confirmed' ? (
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-emerald-700">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Confirmed</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-amber-700">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>TBC</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Supported Operations & Ideal Workpieces */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 sm:p-4 bg-slate-50 rounded-md border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Primary Operations
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {machine.supportedOperations.map((op, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7D6C32] shrink-0" />
                    <span>{op}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 sm:p-4 bg-slate-50 rounded-md border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Typical Workpieces & Sub-Assemblies
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {machine.idealWorkpieces.map((wp, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>{wp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Direct Inquiry: </span>
            <a href={`tel:${siteConfig.phoneRaw}`} className="font-semibold text-slate-800 hover:underline">
              {siteConfig.phone}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <a
              href={getWhatsAppQuoteUrl(machine.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors text-center"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectForQuote(machine);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#7D6C32] hover:bg-[#685926] rounded-md transition-all shadow-xs text-center"
            >
              <span>Submit RFQ for this Machine</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
