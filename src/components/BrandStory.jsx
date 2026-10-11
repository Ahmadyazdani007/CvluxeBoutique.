import React from 'react';
import { Sparkles, Feather, ShieldCheck, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const BrandStory = () => {
  const { brandStory } = siteConfig;

  return (
    <section id="boutique-story" className="py-24 bg-[#FFFDFC] border-t border-[#F5E6E8] relative overflow-hidden">
      {/* Subtle Ambient Decorative Circles */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FCE6E9]/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atelier Photography Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85"
                  alt="Jewellery Craftsmanship Atelier"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#F7D2D8] max-w-xs">
                <p className="font-serif italic text-xs sm:text-sm text-[#181316] leading-snug">
                  "True luxury is not about excess. It is about harmony, thoughtful craftsmanship, and how a piece makes you feel."
                </p>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-[#A5821A] font-bold">
                  — Atelier CvluxeBoutique
                </div>
              </div>

              {/* Gold Border Ornament */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/60 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: Brand Story Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 text-[#C5A028] text-xs uppercase tracking-[0.25em] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>

            {/* Title Required: "Your Everyday Touch of Luxury" */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181316] font-normal tracking-tight">
              {brandStory.title}
            </h2>

            <p className="text-base sm:text-lg text-[#A44E5E] font-serif italic">
              {brandStory.subtitle}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#5A4C53] font-light leading-relaxed">
              <p>{brandStory.intro}</p>
              <p>{brandStory.p1}</p>
              <p>{brandStory.p2}</p>
            </div>

            {/* Editable Stats Bar */}
            <div className="pt-6 border-t border-[#F5EFF2] grid grid-cols-2 sm:grid-cols-4 gap-6">
              {brandStory.stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#181316]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#7B6A72] font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
