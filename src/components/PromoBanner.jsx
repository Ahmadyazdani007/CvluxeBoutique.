import React from 'react';
import { Gift, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useCart } from '../context/CartContext';

export const PromoBanner = () => {
  const { scrollToProducts } = useCart();
  const { promoBanner } = siteConfig;

  return (
    <section className="relative overflow-hidden py-14 bg-gradient-to-r from-[#FAF0F1] via-[#FCE6E9] to-[#FAF0F1] border-y border-[#EEAFB9]/60">
      {/* Decorative Shimmer and Gold Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-soft flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Left Content */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-[#FCFAF2] text-[#A5821A] px-3.5 py-1 rounded-full text-[10px] tracking-[0.25em] uppercase font-bold border border-[#D4AF37]/40">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>{promoBanner.badge}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-4xl text-[#181316] font-normal tracking-tight">
              {promoBanner.title}
            </h3>

            <p className="text-sm sm:text-base text-[#5A4C53] font-light leading-relaxed">
              {promoBanner.subtitle}
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-2 pt-1 text-xs text-[#A44E5E] font-medium">
              <Gift className="w-4 h-4 text-[#C5A028]" />
              <span>{promoBanner.highlight}</span>
            </div>
          </div>

          {/* Right Action */}
          <div className="shrink-0">
            <button
              onClick={() => scrollToProducts('all')}
              className="px-8 py-4 bg-[#181316] hover:bg-[#3D3237] text-white text-xs font-semibold uppercase tracking-[0.22em] rounded-full shadow-luxe hover:scale-105 transition-all duration-300 flex items-center space-x-3 border border-[#D4AF37]/60 group"
            >
              <span>{promoBanner.buttonText}</span>
              <ArrowRight className="w-4 h-4 text-[#DFBA73] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
