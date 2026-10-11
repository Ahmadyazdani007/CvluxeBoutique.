import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const SearchModal = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    formatPrice, 
    setQuickViewProduct 
  } = useCart();
  
  const [query, setQuery] = useState('');

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter((p) => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.materials.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isSearchOpen) return null;

  const quickSuggestions = ["Satchel", "Baroque Pearl", "Silk Scarf", "Continental Wallet", "Gold Hoops"];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity" 
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="min-h-screen px-4 pt-16 pb-20 flex justify-center">
        <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#F7D2D8] p-6 sm:p-8 z-10 self-start animate-fade-in">
          
          {/* Top Bar with Input */}
          <div className="flex items-center space-x-3 pb-6 border-b border-[#F5EFF2]">
            <Search className="w-5 h-5 text-[#C5A028] shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search handcrafted bags, 18k jewellery, wallets..."
              className="w-full text-base sm:text-lg text-[#181316] placeholder-[#A6959D] outline-hidden font-serif"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="text-[#A6959D] hover:text-[#181316] p-1"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestions */}
          {!query && (
            <div className="py-6 space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#7B6A72] font-semibold block">
                Popular Boutique Inquiries
              </span>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="px-3.5 py-1.5 rounded-full text-xs bg-[#FAF0F1] hover:bg-[#FCE6E9] text-[#261F23] border border-[#EEAFB9]/60 transition-colors flex items-center space-x-1.5"
                  >
                    <span>{item}</span>
                    <Sparkles className="w-3 h-3 text-[#C5A028]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results List */}
          {query && (
            <div className="pt-6 space-y-4 max-h-96 overflow-y-auto">
              <div className="text-xs text-[#7B6A72] font-medium">
                Found {searchResults.length} {searchResults.length === 1 ? 'creation' : 'creations'} for "{query}"
              </div>

              {searchResults.length > 0 ? (
                <div className="space-y-3">
                  {searchResults.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setQuickViewProduct(p);
                      }}
                      className="flex items-center space-x-4 p-3 rounded-2xl border border-[#F5EFF2] hover:border-[#D4AF37] hover:bg-[#FAF5F6] transition-all cursor-pointer group"
                    >
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-16 h-16 object-cover rounded-xl bg-white border border-gray-100 shrink-0"
                      />
                      <div className="flex-1">
                        <span className="text-[10px] uppercase tracking-wider text-[#A44E5E] font-medium">
                          {p.category}
                        </span>
                        <h4 className="font-serif text-base font-medium text-[#181316] group-hover:text-[#C5A028] transition-colors">
                          {p.name}
                        </h4>
                        <p className="text-xs text-[#5A4C53] font-light line-clamp-1">
                          {p.subtitle}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-sm font-semibold text-[#181316] block">
                          {formatPrice(p.price)}
                        </span>
                        <span className="text-[11px] text-[#C5A028] font-medium group-hover:translate-x-1 inline-flex items-center">
                          View →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-10 text-center text-xs text-[#7B6A72]">
                  No items matched your search. Try a broader term like "leather", "gold", or "bag".
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
