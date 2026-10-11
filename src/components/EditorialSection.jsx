import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const EditorialSection = () => {
  const { scrollToProducts } = useCart();

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF5F6] via-[#FFF9F9] to-[#FCF9F9] border-t border-[#F5E6E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Editorial Feature 1: The New Spring Lookbook */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Gallery Split */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxe border border-[#F5EFF2] group">
                <img
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=85"
                  alt="Editorial Handbag Lookbook"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-[#FAF0F1] p-5 rounded-2xl border border-[#EEAFB9]/60 text-center">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A44E5E] font-semibold block mb-1">
                  Atelier Note
                </span>
                <p className="font-serif italic text-sm text-[#261F23]">
                  "Crafted with double-faced edge paint and solid brass hardware designed to outlast fleeting seasons."
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-8">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxe border border-[#F5EFF2] group">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=85"
                  alt="Fine Jewellery Editorial"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-[#FCFAF2] p-5 rounded-2xl border border-[#D4AF37]/40 text-center">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A5821A] font-semibold block mb-1">
                  Gold Vermeil
                </span>
                <p className="text-xs text-[#5A4C53] font-medium">
                  2.5 Micron Layer of 18k Pure Gold over 925 Sterling Silver
                </p>
              </div>
            </div>

          </div>

          {/* Text Editorial Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[#C5A028] text-xs uppercase tracking-[0.25em] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editorial Spotlight</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181316] font-normal tracking-tight leading-tight">
              The Art of <br />
              <span className="italic text-[#A44E5E]">Effortless Adornment</span>
            </h3>

            <p className="text-sm sm:text-base text-[#5A4C53] font-light leading-relaxed">
              Curated for the woman whose presence speaks with quiet assurance. Our spring collection pairs sculpted, architectural handbag silhouettes with organic baroque pearls and lustrous gold chains.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Handcrafted in limited seasonal batches to prevent overproduction",
                "Custom champagne-gold electroplated clasps with anti-scratch lacquer",
                "Hypoallergenic, nickel-free jewellery suitable for sensitive skin",
                "Complimentary signature blush keepsake box with satin ribbon"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#261F23]">
                  <div className="w-5 h-5 rounded-full bg-[#FAF0F1] flex items-center justify-center shrink-0 mt-0.5 text-[#C5A028]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => scrollToProducts('new-arrivals')}
                className="px-8 py-3.5 bg-[#181316] hover:bg-[#3D3237] text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full shadow-luxe flex items-center space-x-3 transition-all hover:scale-105 border border-[#D4AF37]/50"
              >
                <span>View New Arrivals</span>
                <ArrowRight className="w-4 h-4 text-[#DFBA73]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
