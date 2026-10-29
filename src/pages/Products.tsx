import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, ShieldCheck, Cpu, Phone } from 'lucide-react';
import { productsData } from '../data/products';
import { siteConfig } from '../data/siteConfig';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { ContactCTA } from '../components/ContactCTA';

export const Products: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={siteConfig.heroPosterUrl}
            alt="Apson Engineering Precision Products"
            className="w-full h-full object-cover opacity-25 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#B8A04E] uppercase mb-3 animate-fade-in-down">
              <span className="w-6 h-[2px] bg-[#7D6C32]" />
              <span>Job Work & Component Catalog</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight animate-fade-in-up delay-150">
              Our Machined Products
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl animate-fade-in-up delay-300">
              Explore customer-specific precision components manufactured at Apson Engineering.
              From cast iron pump housings to high-tolerance turned elements, each component is produced strictly to client blueprints and dimensional requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Info & Facility Strip */}
      <section className="bg-slate-50 border-b border-slate-200 py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7D6C32]" />
            <span>
              <strong>Sample Showcase: </strong> Displaying production-grade components machined at our Shapar facility.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/machines"
              className="text-[#7D6C32] hover:text-[#5d5024] font-semibold transition-colors inline-flex items-center gap-1"
            >
              <span>View Machining Centers & Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Showcase Grid */}
      <section aria-label="Products Catalog" className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                All Products ({productsData.length})
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Click any product to inspect detailed photo angles, material specifications, and machining operations.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Product Cards Grid (Currently showing Pump Part – Suction with the first photo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, idx) => {
            const firstPhoto = product.images[0];

            const rawMachining = product.specifications.find(s => 
              s.label.toLowerCase().includes('machining') || s.label.toLowerCase().includes('operation')
            )?.value || product.specifications[1]?.value || 'CNC & 4-Axis VMC';

            const machiningVal = rawMachining
              .replace(/CNC Turning & 4-Axis VMC Milling/i, 'CNC Turning & 4-Axis VMC')
              .replace(/4-Axis VMC 3D Milling & Precision CNC Turning/i, '4-Axis VMC & CNC Turning')
              .replace(/4-Axis VMC Milling, CNC Turning & Single-Point Threading/i, '4-Axis VMC & CNC Turning')
              .replace(/CNC Lathe Face Turning & 4-Axis VMC Milling/i, 'CNC Turning & 4-Axis VMC')
              .replace(/CNC Lathe Face & OD Turning, Keyway Broaching/i, 'CNC Turning & Broaching');

            const rawMaterial = product.specifications.find(s => 
              s.label.toLowerCase().includes('material')
            )?.value || 'Forged / Cast Steel';

            const materialVal = rawMaterial
              .replace(/High-Grade Cast Iron \/ Ductile Iron Casting/i, 'Cast Iron / Ductile Iron')
              .replace(/Forged Steel \/ Carbon Steel \/ Ductile Iron/i, 'Forged / Carbon Steel')
              .replace(/Alloy Steel \/ Stainless Steel \/ EN8D Bar Stock/i, 'Alloy / Stainless Steel')
              .replace(/Aerospace Aluminum \/ High-Grade Stainless Steel/i, 'Aerospace Aluminum / SS')
              .replace(/High-Grade Ductile Iron \/ Cast Steel Casting/i, 'Ductile Iron / Cast Steel')
              .replace(/High-Tensile Cast Iron \/ Bronze \/ SS Casting/i, 'Cast Iron / Bronze / SS');

            const rawTolerance = product.specifications.find(s => 
              s.label.toLowerCase().includes('tolerance')
            )?.value || '±0.015 mm';

            const toleranceMatch = rawTolerance.match(/±[\d.]+\s*(?:mm|µm)?/i);
            const toleranceVal = toleranceMatch ? toleranceMatch[0] : rawTolerance.split(/[/on]/)[0].trim();

            return (
              <RevealOnScroll key={product.id} delay={idx * 100} direction="up">
                <div className="group rounded-2xl bg-white border border-slate-200 hover:border-[#7D6C32]/70 shadow-xs hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col overflow-hidden h-full hover:-translate-y-1">
                  {/* Product Image Frame: First Photo Only (Click redirects to product details page) */}
                  <Link
                    to={`/products/${product.slug}`}
                    className="block relative aspect-4/3 overflow-hidden bg-slate-50 flex items-center justify-center p-4 sm:p-6 border-b border-slate-100 cursor-pointer"
                  >
                    <img
                      src={firstPhoto.url}
                      alt={firstPhoto.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-slate-200/90 text-[11px] font-semibold text-slate-700 shadow-2xs pointer-events-none tracking-wide">
                      {product.category}
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <Link to={`/products/${product.slug}`} className="block">
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#7D6C32] transition-colors mb-2">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-5">
                        {product.shortDescription}
                      </p>

                      {/* Technical Specs Summary */}
                      <div className="pt-4 border-t border-slate-100 space-y-2 mb-6 text-xs text-slate-600">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-medium text-slate-500 shrink-0">Machining:</span>
                          <span className="font-semibold text-slate-800 text-right truncate" title={machiningVal}>
                            {machiningVal}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-medium text-slate-500 shrink-0">Material:</span>
                          <span className="font-semibold text-slate-800 text-right truncate" title={materialVal}>
                            {materialVal}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-medium text-slate-500 shrink-0">Tolerance:</span>
                          <span className="font-mono font-semibold text-slate-900 text-right shrink-0 tabular-nums" title={toleranceVal}>
                            {toleranceVal}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* View Details Action Button */}
                    <Link
                      to={`/products/${product.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7D6C32] hover:bg-[#685926] active:bg-[#54481d] transition-all shadow-xs hover:shadow-md group/btn"
                    >
                      <span>View Product Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Drawing & Sample-Based Job Work Notice Card */}
        <RevealOnScroll direction="up" delay={200}>
          <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7D6C32]">
                <Cpu className="w-4 h-4" />
                <span>Custom Component Manufacturing</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                Have a different pump component, shaft, or housing to machine?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We manufacture customer-specific components across raw castings, forgings, and solid bar stock. Send us your CAD 2D/3D model or physical sample for tooling assessment and quotation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs text-center"
              >
                <span>Submit Component RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-2xs text-center"
              >
                <Phone className="w-4 h-4 text-[#7D6C32]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Global Contact CTA Section */}
      <ContactCTA />
    </div>
  );
};
