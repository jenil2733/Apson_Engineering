import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sliders, ArrowLeft } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4 py-24">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
          <img
            src={siteConfig.logoUrl}
            alt="Apson Engineering"
            className="w-10 h-10 object-contain"
          />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#7D6C32] block mb-2">
            404 · Page Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Component / Route Not Found
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            The page you requested could not be located. Explore our equipment specifications or return to the homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#7D6C32] hover:bg-[#685926] rounded-md transition-all shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
          >
            <Sliders className="w-3.5 h-3.5 text-[#7D6C32]" />
            <span>View Machines & Specs</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
