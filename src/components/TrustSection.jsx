import React from 'react';
import { ShieldCheck, Gift, Truck, MessageCircleHeart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const TrustSection = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Artisanal Craftsmanship",
      description: "Handcrafted from certified Italian calfskin leathers and hypoallergenic 18K gold vermeil."
    },
    {
      icon: Gift,
      title: "Signature Keepsake Box",
      description: "Arrives in our bespoke blush pink rigid box, tied with champagne satin ribbon and velvet dust bag."
    },
    {
      icon: Truck,
      title: "Insured Global Shipping",
      description: "Complimentary worldwide tracking and white-glove insured delivery on all orders over $150."
    },
    {
      icon: MessageCircleHeart,
      title: "Boutique Concierge",
      description: "Dedicated stylists available via live WhatsApp to assist with pairings, sizing, and bespoke gifting."
    }
  ];

  return (
    <section className="py-16 bg-[#FAF0F1]/60 border-y border-[#F5E6E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx} 
                className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#F5EFF2] shadow-xs text-center space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF0F1] flex items-center justify-center mx-auto text-[#C5A028] border border-[#EEAFB9]/60">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#181316]">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#5A4C53] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
