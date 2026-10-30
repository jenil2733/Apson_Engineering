import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { InquiryForm } from '../components/InquiryForm';
import { FacilityMap } from '../components/FacilityMap';
import { siteConfig, getWhatsAppQuoteUrl } from '../data/siteConfig';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product') || undefined;
  const machineParam = searchParams.get('machine') || undefined;

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-14 lg:pb-18 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={siteConfig.heroPosterUrl}
            alt="Apson Engineering Contact"
            className="w-full h-full object-cover opacity-20 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#B8A04E] uppercase mb-3">
              <span className="w-6 h-[2px] bg-[#7D6C32]" />
              <span>Direct Manufacturing Contact</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Discuss Your Machining Requirement
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Connect with Apson Engineering for quotes on CNC turning, VMC milling, and precision
              manufacturing. Send your engineering drawings or schedule a visit to our Shapar facility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Interactive RFQ Form */}
      <section aria-label="Contact Information and RFQ Form" className="py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Direct Contacts & Registered Address */}
          <RevealOnScroll delay={0} direction="none" className="lg:col-span-5 space-y-6">
            {/* Quick Actions Card */}
            <div className="p-4 sm:p-6 rounded-lg bg-slate-50 border border-slate-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Direct Contact Channels
              </h2>

              <div className="space-y-4 text-sm">
                {/* Phone Call */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#7D6C32] shrink-0 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Phone / Mobile</span>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="font-bold text-slate-900 hover:text-[#7D6C32] font-mono text-base transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Thu–Tue: 8:30 AM – 7:30 PM IST (Wednesday Off)
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#7D6C32] shrink-0 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Email for Drawings & RFQ</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-bold text-slate-900 hover:text-[#7D6C32] font-mono text-sm break-all transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Send 2D PDF and 3D STEP/IGES models
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-2xs">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Instant WhatsApp Chat</span>
                    <a
                      href={getWhatsAppQuoteUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 text-sm mt-0.5"
                    >
                      <span>Chat on +91 81288 30118</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Principal Place of Business & Free Interactive Google Map */}
            <FacilityMap />

            {/* Industrial Hub Context */}
            <div className="p-5 rounded-lg border border-slate-200/90 bg-white text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-[#7D6C32]" />
                <span>Strategic Manufacturing Hub</span>
              </div>
              <p className="leading-relaxed">
                Located near Rajkot's prominent casting and engineering cluster in Shapar. Easily accessible for casting foundries, forging suppliers, and automotive manufacturers across Saurashtra and Gujarat.
              </p>
            </div>
          </RevealOnScroll>

          {/* Right Column: Inquiry Form Component */}
          <RevealOnScroll delay={150} direction="up" className="lg:col-span-7">
            <InquiryForm initialProduct={productParam} initialMachine={machineParam} />
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};
