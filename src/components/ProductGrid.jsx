import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ArrowUpDown, Sparkles, X, Check } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { useCart } from '../context/CartContext';

export const ProductGrid = () => {
  const { filterCategory, setFilterCategory } = useCart();
  const [sortBy, setSortBy] = useState('featured');
  const [priceMax, setPriceMax] = useState(500);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const tabs = [
    { id: 'all', label: 'All Collections' },
    { id: 'handbags', label: 'Handbags' },
    { id: 'wallets', label: 'Wallets' },
    { id: 'jewellery', label: 'Jewellery' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'bestsellers', label: 'Bestsellers' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category filter
      if (filterCategory === 'all') {
        // keep all
      } else if (filterCategory === 'new-arrivals') {
        if (!item.isNew) return false;
      } else if (filterCategory === 'bestsellers') {
        if (!item.isBestseller) return false;
      } else {
        if (item.category !== filterCategory) return false;
      }

      // Price filter
      if (item.price > priceMax) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [filterCategory, priceMax, sortBy]);

  return (
    <section id="boutique-catalogue" className="py-20 bg-[#FCF9F9] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-[#C5A028] text-xs uppercase tracking-[0.25em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Masterpiece Gallery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181316] font-normal tracking-tight">
            Curated For Modern Elegance
          </h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-4"></div>
          <p className="text-sm sm:text-base text-[#5A4C53] font-light">
            Every creation is designed in our atelier with meticulous balance, soft blush tones, and glowing 18k champagne gold accents.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar mb-8">
          {tabs.map((tab) => {
            const isActive = filterCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all shrink-0 border ${
                  isActive
                    ? 'bg-[#181316] text-[#FBF8EE] border-[#181316] shadow-md scale-105'
                    : 'bg-white text-[#5A4C53] border-[#F5EFF2] hover:border-[#D4AF37] hover:text-[#181316]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Toolbar: Counter & Sorting */}
        <div className="bg-white rounded-2xl p-4 sm:px-6 mb-8 border border-[#F5EFF2] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#7B6A72] font-medium">
            Displaying <span className="text-[#181316] font-bold">{filteredProducts.length}</span> pieces
            {filterCategory !== 'all' && (
              <button
                onClick={() => setFilterCategory('all')}
                className="ml-3 text-[11px] text-[#A44E5E] underline hover:text-[#181316]"
              >
                Reset Category
              </button>
            )}
          </div>

          <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
            {/* Price Max slider indicator */}
            <div className="hidden md:flex items-center space-x-3 text-xs text-[#5A4C53]">
              <span>Max Price:</span>
              <input
                type="range"
                min="90"
                max="500"
                step="25"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-24 accent-[#C5A028] cursor-pointer"
              />
              <span className="font-semibold text-[#181316]">${priceMax}</span>
            </div>

            {/* Sorting Select */}
            <div className="flex items-center space-x-2 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#C5A028]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FAF5F6] text-[#261F23] border border-[#E9E1E4] rounded-lg px-3 py-1.5 text-xs font-medium focus:outline-hidden focus:border-[#D4AF37] cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Client Rating</option>
                <option value="newest">New Arrivals First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#F5EFF2] p-8 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-[#FAF0F1] rounded-full flex items-center justify-center mx-auto mb-4 text-[#A44E5E]">
              <SlidersHorizontal className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#181316] mb-2">No items match your filters</h3>
            <p className="text-xs text-[#7B6A72] mb-6">
              Try adjusting your price ceiling or selecting another category to discover our collection.
            </p>
            <button
              onClick={() => {
                setFilterCategory('all');
                setPriceMax(500);
              }}
              className="px-6 py-2.5 bg-[#181316] text-white text-xs uppercase tracking-widest rounded-full font-medium"
            >
              Show All Pieces
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
