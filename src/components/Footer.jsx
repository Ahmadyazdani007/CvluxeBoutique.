import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Heart,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useCart } from '../context/CartContext';


export const Footer = () => {
  const { scrollToProducts, setActivePolicyModal, addToast } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      addToast('Please enter a valid email address.', 'info');
      return;
    }
    setNewsletterSubscribed(true);
    addToast('Welcome to the CvluxeBoutique Circle! Enjoy early access.', 'success');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#181316] text-[#FAF8F3] pt-20 pb-12 border-t-2 border-[#D4AF37]/40 relative overflow-hidden">
      {/* Decorative Shimmer Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Wordmark Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3D3237] items-center">
          
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center space-x-2 text-[#DFBA73] text-xs uppercase tracking-[0.3em] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join The Atelier Circle</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Receive Private Previews & Invitations
            </h3>
            <p className="text-xs sm:text-sm text-[#A6959D] font-light max-w-md">
              Subscribe for confidential previews of seasonal handbag capsules, fine jewellery drops, and styling editor notes.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 bg-[#261F23] border border-[#5A4C53] focus:border-[#D4AF37] px-5 py-3.5 rounded-full text-xs text-white placeholder-[#7B6A72] outline-hidden"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] hover:from-[#DFBA73] hover:to-[#D4AF37] text-[#181316] text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-gold transition-all duration-300 flex items-center justify-center space-x-2 shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5 text-[#181316]" />
              </button>
            </form>
            {newsletterSubscribed && (
              <p className="text-xs text-[#DFBA73] mt-2">
                ✓ Thank you. You are now subscribed to our private mailing register.
              </p>
            )}
          </div>

        </div>

        {/* Middle Columns Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-[#3D3237]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-center space-x-1.5">
                <span className="text-[#C5A028] text-xs">✧</span>
                <span className="font-serif text-2xl tracking-[0.16em] uppercase font-semibold text-white">
                  Cvluxe<span className="italic font-normal text-[#DFBA73]">Boutique</span>
                </span>
                <span className="text-[#C5A028] text-xs">✧</span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#DFBA73] font-light mt-0.5">
                New York • Paris
              </span>
            </div>

            <p className="text-xs text-[#A6959D] font-light leading-relaxed max-w-sm">
              Dedicated to timeless silhouettes, 18k gold vermeil jewelry, and Italian grain leather goods for the modern woman who embraces everyday luxury.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#261F23] border border-[#5A4C53] flex items-center justify-center text-[#DFBA73] hover:text-white hover:border-[#D4AF37] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#261F23] border border-[#5A4C53] flex items-center justify-center text-[#DFBA73] hover:text-white hover:border-[#D4AF37] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#261F23] border border-[#5A4C53] flex items-center justify-center text-[#DFBA73] hover:text-white hover:border-[#D4AF37] transition-all"
                aria-label="WhatsApp Concierge"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Collections */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFBA73]">
              Boutique Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A6959D]">
              <li>
                <button onClick={() => scrollToProducts('handbags')} className="hover:text-white transition-colors">
                  Handcrafted Handbags
                </button>
              </li>
              <li>
                <button onClick={() => scrollToProducts('wallets')} className="hover:text-white transition-colors">
                  Designer Leather Wallets
                </button>
              </li>
              <li>
                <button onClick={() => scrollToProducts('jewellery')} className="hover:text-white transition-colors">
                  18K Gold Vermeil Jewellery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToProducts('accessories')} className="hover:text-white transition-colors">
                  Pure Silk Scarves & Accessories
                </button>
              </li>
              <li>
                <button onClick={() => scrollToProducts('new-arrivals')} className="hover:text-white transition-colors">
                  Spring / Summer 2026 Drop
                </button>
              </li>
              <li>
                <button onClick={() => scrollToProducts('bestsellers')} className="hover:text-white transition-colors">
                  Bestseller Icons
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care & Policies */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFBA73]">
              Client Care
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A6959D]">
              <li>
                <button onClick={() => setActivePolicyModal('shipping')} className="hover:text-white transition-colors">
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('returns')} className="hover:text-white transition-colors">
                  14-Day Returns & Exchanges
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('privacy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('terms')} className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFBA73]">
              Boutique Contact
            </h4>
            <div className="space-y-3 text-xs text-[#A6959D] font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C5A028] shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#C5A028] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="pt-1 text-[11px] text-[#DFBA73]">
                {siteConfig.contact.hours}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Security */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7B6A72]">
          <div>
            © {new Date().getFullYear()} CvluxeBoutique. All rights reserved. Handcrafted luxury for the modern woman.
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-[#DFBA73]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PCI-DSS Certified Security</span>
            </span>
            <span>•</span>
            <span>100% Authentic Guaranteed</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
