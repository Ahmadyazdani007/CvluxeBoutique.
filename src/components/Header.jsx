import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  Phone, 
  ChevronDown,
  Globe
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../data/siteConfig';

export const Header = () => {
  const { 
    cartItemCount, 
    cartSubtotal,
    wishlist, 
    setIsCartOpen, 
    setIsSearchOpen,
    currency,
    setCurrency,
    formatPrice,
    scrollToProducts,
    setFilterCategory
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "All Collections", category: "all" },
    { name: "Handbags", category: "handbags" },
    { name: "Wallets", category: "wallets" },
    { name: "Jewellery", category: "jewellery" },
    { name: "Accessories", category: "accessories" },
    { name: "New Arrivals", category: "new-arrivals" },
  ];

  const handleNavClick = (category) => {
    scrollToProducts(category);
    setMobileMenuOpen(false);
  };

  const handleStoryClick = () => {
    const el = document.getElementById('boutique-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-gradient-to-r from-[#2B2024] via-[#3A2C31] to-[#2B2024] text-[#FBF8EE] text-xs py-2 px-4 sm:px-8 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center space-x-2 text-[#DFBA73]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-widest uppercase font-medium text-[11px]">Boutique Experience</span>
          </div>

          <div className="mx-auto sm:mx-0 text-center flex items-center justify-center space-x-2">
            <span className="text-[#F6EFD4] font-light">
              Complimentary signature blush gift box on all orders & worldwide insured shipping
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-5 text-[11px]">
            {/* Currency Selector */}
            <div className="relative">
              <button 
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center space-x-1.5 text-[#EFE2B3] hover:text-white transition-colors py-1"
                aria-label="Select Currency"
              >
                <Globe className="w-3 h-3 text-[#D4AF37]" />
                <span className="font-semibold">{currency}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-24 bg-[#261F23] border border-[#D4AF37]/40 shadow-xl rounded py-1 z-50">
                  {['USD', 'EUR', 'GBP'].map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                        currency === c ? 'text-[#DFBA73] font-bold bg-[#3A2C31]' : 'text-[#FAF8F3] hover:bg-[#33272C]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Concierge Link */}
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-[#DFBA73] hover:text-[#F3E5AB] transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Concierge Stylist</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-[#F7D2D8]/60 py-3' 
          : 'bg-[#FAF5F6] border-b border-[#F5E6E8] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#261F23] hover:text-[#C5A028] transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#261F23] hover:text-[#C5A028] transition-colors"
                aria-label="Search boutique"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Left Nav Links */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.slice(0, 4).map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.category)}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-[#4A3E42] hover:text-[#C5A028] transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#EEAFB9] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Brand Logo Wordmark */}
            <div className="flex flex-col items-center cursor-pointer select-none text-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-center space-x-1.5">
                <span className="text-[#C5A028] text-xs">✧</span>
                <span className="font-serif text-2xl sm:text-3xl lg:text-3xl tracking-[0.16em] uppercase font-semibold text-[#181316]">
                  Cvluxe<span className="font-normal italic text-[#C5A028]">Boutique</span>
                </span>
                <span className="text-[#C5A028] text-xs">✧</span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#A6959D] font-light mt-0.5">
                Haute Maroquinerie & Joaillerie
              </span>
            </div>

            {/* Desktop Right Nav Links & Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <button
                onClick={() => handleNavClick('accessories')}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#4A3E42] hover:text-[#C5A028] transition-colors relative py-1 group"
              >
                Accessories
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button
                onClick={handleStoryClick}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#4A3E42] hover:text-[#C5A028] transition-colors relative py-1 group"
              >
                Our Story
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <div className="h-4 w-[1px] bg-[#E9E1E4]"></div>

              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#3D3237] hover:text-[#C5A028] transition-colors"
                title="Search collection"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Wishlist Trigger */}
              <button
                onClick={() => scrollToProducts()}
                className="p-2 text-[#3D3237] hover:text-[#C5A028] transition-colors relative"
                title="Wishlist"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#EEAFB9] text-[#181316] font-semibold text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-white shadow-xs">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center space-x-2.5 bg-[#FAF0F1] hover:bg-[#FCE6E9] border border-[#EEAFB9]/60 px-3.5 py-2 rounded-full transition-all group"
                aria-label="Open Shopping Bag"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-[#261F23] group-hover:text-[#A44E5E] transition-colors" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                      {cartItemCount}
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold tracking-wider text-[#261F23]">
                  {formatPrice(cartSubtotal)}
                </span>
              </button>
            </div>

            {/* Mobile Right Actions */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#261F23]"
                aria-label="Open Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute 0 top-0.5 right-0.5 bg-[#D4AF37] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F5EFF2]">
                <div className="text-left">
                  <div className="font-serif text-xl tracking-wider uppercase font-semibold text-[#181316]">
                    Cvluxe<span className="italic text-[#C5A028]">Boutique</span>
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-[#A6959D]">Luxury Accessories</div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#5A4C53] hover:text-[#181316]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="mt-6 space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.category)}
                    className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium tracking-wide text-[#3D3237] hover:bg-[#FDF2F4] hover:text-[#A44E5E] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#D4AF37]">→</span>
                  </button>
                ))}

                <button
                  onClick={handleStoryClick}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium tracking-wide text-[#3D3237] hover:bg-[#FDF2F4] hover:text-[#A44E5E] transition-colors"
                >
                  Our Brand Story
                </button>
              </div>

              {/* Currency Selector Mobile */}
              <div className="mt-8 pt-6 border-t border-[#F5EFF2]">
                <label className="text-xs uppercase tracking-widest text-[#7B6A72] block mb-2 font-medium">
                  Currency Display
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['USD', 'EUR', 'GBP'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`py-2 text-xs font-semibold rounded border transition-colors ${
                        currency === c 
                          ? 'border-[#D4AF37] bg-[#FCFAF2] text-[#A5821A]' 
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom concierge contact */}
            <div className="pt-6 border-t border-[#F5EFF2]">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-[#25D366] text-white py-3 rounded-lg text-xs font-semibold tracking-wider uppercase hover:opacity-95 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Boutique Stylist</span>
              </a>
              <p className="text-center text-[10px] text-[#A6959D] mt-3">
                {siteConfig.contact.hours}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
