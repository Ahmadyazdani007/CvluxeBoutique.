import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Gift, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../data/siteConfig';

export const Hero = () => {
  const { scrollToProducts } = useCart();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDF2F4] via-[#FAF0F1] to-[#FAF5F6] pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative Subtle Gold & Blush Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5E8C7]/30 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#EEAFB9]/25 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Headline & Calls to Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Elegant Sub-label Pill */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A028]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#5A4C53]">
                Spring / Summer 2026 Haute Drop
              </span>
            </div>

            {/* Main Required Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] text-[#181316] font-normal leading-[1.12] tracking-tight">
              Elevate Your Style. <br />
              <span className="italic font-light text-[#A44E5E] relative inline-block">
                Embrace Your Luxury.
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#EEAFB9] to-transparent opacity-70"></span>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#5A4C53] font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {siteConfig.heroSubheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToProducts('all')}
                className="w-full sm:w-auto px-8 py-4 bg-[#181316] hover:bg-[#3D3237] text-white font-medium text-xs uppercase tracking-[0.22em] rounded-full shadow-luxe transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-3 group border border-[#D4AF37]/50"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4 text-[#DFBA73] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToProducts('new-arrivals')}
                className="w-full sm:w-auto px-8 py-4 bg-white/90 hover:bg-white text-[#261F23] font-medium text-xs uppercase tracking-[0.22em] rounded-full shadow-soft hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-[#E9E1E4] hover:border-[#D4AF37] flex items-center justify-center space-x-2"
              >
                <span>Explore New Arrivals</span>
                <span className="text-[#C5A028] text-xs">✦</span>
              </button>
            </div>

            {/* Boutique Value Badges */}
            <div className="pt-8 border-t border-[#F5EFF2] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-1 sm:space-y-0 sm:space-x-2.5">
                <Award className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#181316]">Italian Leather</div>
                  <div className="text-[11px] text-[#7B6A72]">Artisanal tannery</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-1 sm:space-y-0 sm:space-x-2.5">
                <Sparkles className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#181316]">18K Gold Vermeil</div>
                  <div className="text-[11px] text-[#7B6A72]">Tarnish resistant</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-1 sm:space-y-0 sm:space-x-2.5">
                <Gift className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#181316]">Keepsake Box</div>
                  <div className="text-[11px] text-[#7B6A72]">Signature packaging</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Curated Fashion Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Luxury Hero Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85"
                    alt="CvluxeBoutique Luxury Leather Handbag and Accessories"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Subtle Image Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#F3E5AB] font-semibold">
                      Featured Piece
                    </span>
                    <h3 className="font-serif text-lg font-normal text-white">The Aurelia Satchel</h3>
                  </div>
                  <button 
                    onClick={() => scrollToProducts('handbags')}
                    className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/30 transition-colors"
                  >
                    View Bag
                  </button>
                </div>
              </div>

              {/* Floating Accent Card 1: Jewellery Spotlight */}
              <div className="absolute -top-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#F7D2D8] flex items-center space-x-3.5 max-w-[210px] animate-fade-in hidden sm:flex">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=150&q=80"
                  alt="Fine Jewellery Detail"
                  className="w-12 h-12 rounded-xl object-cover border border-[#D4AF37]/30"
                />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A44E5E] font-semibold">Fine Joaillerie</div>
                  <div className="text-xs font-serif font-bold text-[#181316]">Freshwater Pearl</div>
                  <div className="text-[10px] text-[#7B6A72]">18K Gold Plated</div>
                </div>
              </div>

              {/* Floating Accent Card 2: Signature Packaging */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#F7D2D8] flex items-center space-x-3 max-w-[220px] hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-[#FAF0F1] flex items-center justify-center text-[#C5A028] border border-[#EEAFB9]">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#181316]">Signature Blush Box</div>
                  <div className="text-[10px] text-[#7B6A72]">Champagne Satin Ribbon</div>
                </div>
              </div>

              {/* Decorative Frame Line */}
              <div className="absolute -inset-3 border border-[#D4AF37]/30 rounded-[32px] -z-0 pointer-events-none hidden sm:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
