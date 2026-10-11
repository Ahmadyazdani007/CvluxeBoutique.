import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { categories } from '../data/products';
import { useCart } from '../context/CartContext';

export const CategoryShowcase = () => {
  const { scrollToProducts } = useCart();

  return (
    <section className="py-20 bg-[#FCF9F9] border-t border-[#F5E6E8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[#C5A028] text-xs uppercase tracking-[0.25em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Collections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181316] font-normal tracking-tight">
            Shop By Category
          </h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-4"></div>
          <p className="text-sm sm:text-base text-[#5A4C53] font-light">
            Explore timeless designs sculpted for enduring grace, from hand-stitched leather goods to luminous fine jewellery.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => scrollToProducts(cat.id)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-xl transition-all duration-500 border border-[#F5EFF2] hover:border-[#D4AF37]/50 flex flex-col"
            >
              {/* Card Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#FAF0F1]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors duration-300"></div>

                {/* Badge (Top-Left) */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[#181316] text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full border border-[#D4AF37]/40 shadow-xs">
                    {cat.badge}
                  </span>
                </div>

                {/* Floating Arrow Icon (Top-Right) */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#181316] group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#F3E5AB] font-medium block mb-1">
                    {cat.itemCount}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-white group-hover:text-[#FBF5B7] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#FAF8F3]/90 font-light mt-1 line-clamp-1">
                    {cat.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="py-3 px-5 bg-white flex items-center justify-between text-xs border-t border-[#F5EFF2]">
                <span className="text-xs text-[#7B6A72] font-medium tracking-wider uppercase">
                  Discover Collection
                </span>
                <span className="text-xs text-[#C5A028] font-semibold group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
