import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  src={siteConfig.logoUrl}
                  alt="Apson Engineering Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  APSON <span className="text-[#B8A04E]">ENGINEERING</span>
                </span>
                <span className="text-xs text-slate-400 block font-medium">
                  Precision CNC Turning & VMC Machining
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md pt-1">
              Apson Engineering is a precision machining job-work facility in Shapar, Rajkot, Gujarat.
              Specializing in customer-specific CNC turning, 4-axis VMC milling, and precision component
              manufacturing strictly to customer blueprints and CAD models.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="text-slate-400">Business Structure:</span>{' '}
              <span className="text-slate-300 font-medium">Proprietorship</span>
              <span className="mx-2 text-slate-600">·</span>
              <span className="text-slate-400">Hub:</span>{' '}
              <span className="text-slate-300 font-medium">Shapar Industrial Cluster, Rajkot</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Machine Equipment & Specs</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">About Our Facility</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Contact & RFQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Registered Facility */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Facility & Contacts
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#B8A04E] shrink-0 mt-1" />
                <div className="leading-snug text-xs sm:text-sm text-slate-400">
                  <p className="text-slate-200 font-medium">Principal Place of Business:</p>
                  <p>{siteConfig.address.fullFormatted}</p>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#B8A04E] hover:text-[#d3bc67] mt-1.5 transition-colors font-medium"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#B8A04E] shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-xs sm:text-sm text-slate-300 hover:text-white font-mono transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B8A04E] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs sm:text-sm text-slate-300 hover:text-white font-mono break-all transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7D6C32] hover:bg-[#917d3b] rounded-md transition-all shadow-xs"
              >
                <span>Submit Job Work RFQ</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {siteConfig.legalTradeName}. All rights reserved.</p>
          <p className="text-slate-400 text-center sm:text-right">
            Precision CNC Turning & VMC Machining Job Work · Shapar, Rajkot, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
};
