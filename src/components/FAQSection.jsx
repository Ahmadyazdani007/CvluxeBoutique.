import React, { useState } from 'react';
import { ChevronDown, Sparkles, MessageCircleQuestion, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-[#FAF5F6] border-t border-[#F5E6E8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[#C5A028] text-xs uppercase tracking-[0.25em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Concierge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181316] font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-4"></div>
          <p className="text-sm sm:text-base text-[#5A4C53] font-light">
            Everything you need to know regarding our certified materials, signature packaging, insured global shipping, and returns.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#F5EFF2] transition-all duration-300 overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:px-8 flex items-center justify-between gap-4 transition-colors hover:bg-[#FAF0F1]/30"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#181316] font-medium">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF0F1] flex items-center justify-center shrink-0 text-[#C5A028] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FCFAF2]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-xs sm:text-sm text-[#5A4C53] font-light leading-relaxed border-t border-[#F5EFF2]/60 animate-fade-in">
                    <p className="mt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl font-medium text-[#181316]">
              Require personal styling or bespoke gifting advice?
            </h4>
            <p className="text-xs text-[#7B6A72]">
              Our boutique stylists respond promptly to assist your selections.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] text-white rounded-full text-xs font-semibold tracking-wider uppercase flex items-center space-x-2 hover:opacity-95 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Concierge</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="px-5 py-2.5 bg-[#181316] text-white rounded-full text-xs font-semibold tracking-wider uppercase flex items-center space-x-2 hover:bg-[#3D3237] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#DFBA73]" />
              <span>Email Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
