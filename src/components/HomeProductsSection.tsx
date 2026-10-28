import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { productsData } from '../data/products';
import { RevealOnScroll } from './RevealOnScroll';

export const HomeProductsSection: React.FC = () => {
  // Duplicate products for a seamless, continuous infinite loop moving right-to-left
  const loopedProducts = [...productsData, ...productsData];

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle CAD background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-widest text-[#7D6C32] uppercase mb-3">
                <span className="w-6 h-[2px] bg-[#7D6C32]" />
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#7D6C32]" />
                  Machined Components Showcase
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-[-0.02em] leading-tight">
                Our Precision Products
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Explore sample industrial components machined at Apson Engineering. Glide through our precision-manufactured parts, engineered strictly according to customer blueprints and micro-tolerances.
              </p>
            </div>

            {/* View All Link */}
            <div className="self-start md:self-end">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#7D6C32] hover:text-[#5e5124] transition-colors group"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Extraordinary Right-to-Left Infinite Slider in One Row */}
      <div className="relative w-full overflow-hidden group/track">
        {/* Left Vignette Edge Gradient */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-40 z-20 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent" />

        {/* Right Vignette Edge Gradient */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-40 z-20 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent" />

        {/* Scrollable Container with Continuous Right-to-Left Glide */}
        <div
          className="overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing pt-5 pb-8 sm:pt-7 sm:pb-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="animate-product-slider flex items-stretch gap-6 sm:gap-8 px-4 sm:px-8 py-2">
            {loopedProducts.map((product, loopIdx) => {
              const firstPhoto = product.images[0];

              return (
                <div
                  key={`${product.id}-${loopIdx}`}
                  className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 flex flex-col"
                >
                  <Link
                    to={`/products/${product.slug}`}
                    className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-[#7D6C32] shadow-xs hover:shadow-2xl hover:shadow-[#7D6C32]/15 transition-all duration-500 flex flex-col overflow-hidden h-full hover:-translate-y-2 block cursor-pointer hover:z-30"
                  >
                    {/* Product Image Stage */}
                    <div className="relative aspect-4/3 overflow-hidden bg-white flex items-center justify-center p-6">
                      <img
                        src={firstPhoto.url}
                        alt={firstPhoto.alt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-108 mix-blend-multiply"
                        style={{
                          mixBlendMode: 'multiply',
                          filter: 'contrast(1.08) brightness(1.04)',
                        }}
                      />
                    </div>

                    {/* Product Name Header */}
                    <div className="p-5 sm:p-6 bg-white flex items-center justify-center text-center flex-1">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#7D6C32] transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
