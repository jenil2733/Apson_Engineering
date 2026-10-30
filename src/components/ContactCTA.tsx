import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { siteConfig, getWhatsAppQuoteUrl } from '../data/siteConfig';
import { RevealOnScroll } from './RevealOnScroll';

export const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 bg-slate-50 border-t border-slate-200 text-slate-900 overflow-hidden">
      {/* Background with real workshop component image backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.heroPosterUrl}
          alt="Precision Machining at Apson Engineering"
          className="w-full h-full object-cover opacity-[0.05] filter grayscale"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/90 to-slate-100/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll direction="up" className="max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 mb-3 text-[11px] sm:text-xs font-bold tracking-widest text-[#7D6C32] uppercase">
            <span>Drawing & Sample Based Manufacturing</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-3 sm:mb-4 leading-tight">
            HAVE A COMPONENT TO MACHINE?
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Share your drawing, sample, or machining requirement with our team.
            We provide fast turnaround on feasibility review, tooling assessment, and competitive quotations.
          </p>

          {/* Direct Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            {/* Call */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              <Phone className="w-4 h-4 text-[#D4B85E]" />
              <span>Call Apson Engineering</span>
            </a>

            {/* Email */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#7D6C32] hover:bg-[#685926] active:bg-[#54481d] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              <Mail className="w-4 h-4" />
              <span>Send Drawing / RFQ</span>
            </Link>

            {/* WhatsApp */}
            <a
              href={getWhatsAppQuoteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Verified Facility Detail */}
          <div className="mt-8 text-xs text-slate-500">
            <span>Workshop Location: Plot No. 3, R.S. No. 348/2, Shapar, Rajkot, Gujarat – 360026</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
