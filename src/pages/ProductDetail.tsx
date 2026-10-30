import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ShieldCheck,
  Compass,
  FileText,
} from 'lucide-react';
import { getProductBySlug, productsData } from '../data/products';
import { siteConfig } from '../data/siteConfig';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { ContactCTA } from '../components/ContactCTA';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  // Find product by slug or default to first product ('pump-part-suction')
  const product = (slug && getProductBySlug(slug)) || productsData[0];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h1>
        <p className="text-slate-600 mb-6">The requested product could not be located in our catalog.</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7D6C32] text-white rounded-lg font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </Link>
      </div>
    );
  }

  const currentImage = product.images[activeImageIndex] || product.images[0];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Apson Engineering,\n\nI am interested in getting a manufacturing quote for "${product.name}".\n\nProduct: ${product.name}\nCategory: ${product.category}\n\nPlease let me know where to share our engineering drawing and batch quantity for quotation.`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=918128830118&text=${whatsappMessage}`;

  return (
    <div className="bg-white min-h-screen pt-24 sm:pt-28 lg:pt-32">
      {/* Breadcrumb Navigation & Back Link */}
      <div className="bg-slate-50/80 border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-[#7D6C32] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#7D6C32] transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{product.name}</span>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-600 hover:text-[#7D6C32] font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Interactive 3-Photo Gallery (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Primary Active Image Display */}
              <div className="relative aspect-4/3 rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden shadow-xs flex items-center justify-center p-4 sm:p-6 group">
                <img
                  src={currentImage.url}
                  alt={currentImage.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-center transition-all duration-300"
                />

                {/* Photo Counter */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono font-medium">
                  {activeImageIndex + 1} / {product.images.length}
                </div>

                {/* Previous & Next Navigation Buttons */}
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer focus:opacity-100"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer focus:opacity-100"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Click to Zoom Fullscreen Affordance */}
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-4 right-4 p-2 rounded-lg bg-white/90 hover:bg-white border border-slate-200 text-slate-700 hover:text-[#7D6C32] shadow-sm flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer focus:opacity-100"
                  aria-label="View Fullscreen"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span className="hidden sm:inline">Enlarge</span>
                </button>
              </div>

              {/* Clickable Thumbnails Row */}
              <div
                className={`grid gap-3 sm:gap-4 ${
                  product.images.length === 4
                    ? 'grid-cols-4'
                    : product.images.length === 2
                    ? 'grid-cols-2 max-w-md'
                    : 'grid-cols-3'
                }`}
              >
                {product.images.map((img, idx) => {
                  const isActive = idx === activeImageIndex;
                  return (
                    <button
                      key={img.url}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-4/3 rounded-xl overflow-hidden bg-slate-50 border p-2 transition-all cursor-pointer flex items-center justify-center ${
                        isActive
                          ? 'border-[#7D6C32] ring-2 ring-[#7D6C32]/40 shadow-sm scale-[1.02]'
                          : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`Switch to photo ${idx + 1}: ${img.caption}`}
                    >
                      <img
                        src={img.url}
                        alt={img.alt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain object-center"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Quality & Blueprint Assurance Strip */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-xs text-slate-600">
                <ShieldCheck className="w-5 h-5 text-[#7D6C32] shrink-0" />
                <span>
                  <strong>Manufactured to Blueprints:</strong> This part is machined across multiple setups on ACE Micromatic VMC and CNC Turning centers to achieve exact concentricity and sealing tolerance.
                </span>
              </div>
            </div>

            {/* Right Column: Product Information & Inquiries (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7D6C32] uppercase mb-2">
                  <span className="w-5 h-[2px] bg-[#7D6C32]" />
                  <span>{product.category}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Call-to-Action Enquiry Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#7D6C32]" />
                  <span>Need This Component Machined?</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We undertake Drawing & sample based Manufacturing for {product.name} and related precision industrial components. Share your drawing, batch quantity, and tolerance requirements for a prompt quotation.
                </p>

                <div className="pt-1">
                  {/* WhatsApp Only Enquiry Option with Pre-written Message */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center group cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Fast RFQ Turnaround</span>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="font-medium text-slate-800 hover:text-[#7D6C32] inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#7D6C32]" />
                    <span>{siteConfig.phone}</span>
                  </a>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#7D6C32]" />
                  <span>Machining Specifications</span>
                </h3>

                <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="grid grid-cols-5 p-3 hover:bg-slate-50 transition-colors">
                      <span className="col-span-2 font-medium text-slate-500">{spec.label}</span>
                      <span className="col-span-3 font-semibold text-slate-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Key Component Highlights
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {product.keyFeatures.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7D6C32] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Machining Process Section */}
          <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-200">
            <RevealOnScroll direction="up">
              <div className="max-w-3xl mb-10">
                <div className="text-xs font-bold tracking-widest text-[#7D6C32] uppercase mb-2">
                  Technical Engineering Overview
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Detailed Component Information
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {product.machiningHighlights.map((hl) => (
                  <div
                    key={hl.title}
                    className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2 hover:border-[#7D6C32]/60 transition-colors"
                  >
                    <h3 className="text-sm font-bold text-slate-900">{hl.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{hl.description}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Global Contact CTA Banner */}
      <ContactCTA />

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs text-[#B8A04E] font-mono block">
                  Photo {activeImageIndex + 1} of {product.images.length}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">{currentImage.caption}</h4>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-4/3 max-h-[70vh] flex items-center justify-center my-4 bg-slate-950 rounded-xl overflow-hidden p-2">
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Thumbnails */}
            <div className="flex items-center justify-center gap-3 pt-2">
              {product.images.map((img, idx) => (
                <button
                  key={img.url}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-12 rounded-lg overflow-hidden border p-1 transition-all ${
                    idx === activeImageIndex
                      ? 'border-[#B8A04E] ring-2 ring-[#B8A04E]/50 scale-105'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.alt} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
