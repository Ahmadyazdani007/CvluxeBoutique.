import React, { useState, useEffect } from 'react';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Star, 
  Check, 
  ShieldCheck, 
  Truck, 
  Gift, 
  Share2 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const QuickViewModal = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    formatPrice,
    addToast
  } = useCart();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  useEffect(() => {
    if (quickViewProduct) {
      setActiveImageIndex(0);
      setSelectedColor(quickViewProduct.colors?.[0]?.name || 'Signature');
      setQuantity(1);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    addToast('Product link copied to clipboard.', 'info');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity" 
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="min-h-screen px-4 flex items-center justify-center py-10">
        <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-[#F7D2D8] overflow-hidden z-10 animate-fade-in">
          
          {/* Close Button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#261F23] flex items-center justify-center shadow-md backdrop-blur-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Image Gallery Column */}
            <div className="p-6 sm:p-8 bg-[#FAF5F6] flex flex-col justify-between">
              {/* Main Preview Image */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-soft border border-[#F5EFF2] bg-white relative">
                <img
                  src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {quickViewProduct.isNew && (
                    <span className="bg-[#181316] text-[#FBF8EE] text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full">
                      New Arrival
                    </span>
                  )}
                  {quickViewProduct.isBestseller && (
                    <span className="bg-[#FCFAF2] text-[#A5821A] border border-[#D4AF37]/50 text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnails row */}
              {quickViewProduct.images.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
                  {quickViewProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        activeImageIndex === idx 
                          ? 'border-[#D4AF37] shadow-sm' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Product Details Column */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-[0.2em] font-semibold text-[#A44E5E]">
                    {quickViewProduct.category}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <div className="flex text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-[#181316]">{quickViewProduct.rating}</span>
                    <span className="text-[#A6959D]">({quickViewProduct.reviewsCount} reviews)</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#181316] font-medium leading-tight">
                    {quickViewProduct.name}
                  </h3>
                  <p className="text-xs text-[#7B6A72] font-light mt-1">
                    {quickViewProduct.subtitle}
                  </p>
                </div>

                {/* Pricing */}
                <div className="flex items-baseline space-x-3 pt-1">
                  <span className="text-2xl font-semibold text-[#181316]">
                    {formatPrice(quickViewProduct.price)}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm text-[#A6959D] line-through font-light">
                      {formatPrice(quickViewProduct.originalPrice)}
                    </span>
                  )}
                  <span className="text-[10px] text-[#A5821A] bg-[#FCFAF2] px-2 py-0.5 rounded border border-[#D4AF37]/30 font-semibold uppercase tracking-wider">
                    In Stock • Ready to Ship
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5A4C53] font-light leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* Color Variations */}
                {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
                  <div className="pt-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#181316] block mb-2">
                      Selected Shade: <span className="font-normal text-[#A44E5E]">{selectedColor}</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      {quickViewProduct.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c.name)}
                          className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                            selectedColor === c.name
                              ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 ring-offset-2 scale-110'
                              : 'border-white hover:scale-105 shadow-xs'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        >
                          {selectedColor === c.name && (
                            <Check className="w-3.5 h-3.5 text-white drop-shadow-xs" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tabs for materials, dimensions */}
                <div className="pt-3 border-t border-[#F5EFF2]">
                  <div className="flex space-x-4 border-b border-[#F5EFF2] text-xs">
                    <button
                      onClick={() => setActiveTab('details')}
                      className={`pb-2 font-medium tracking-wider uppercase transition-colors ${
                        activeTab === 'details' ? 'border-b-2 border-[#D4AF37] text-[#181316]' : 'text-[#7B6A72]'
                      }`}
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => setActiveTab('shipping')}
                      className={`pb-2 font-medium tracking-wider uppercase transition-colors ${
                        activeTab === 'shipping' ? 'border-b-2 border-[#D4AF37] text-[#181316]' : 'text-[#7B6A72]'
                      }`}
                    >
                      Packaging & Delivery
                    </button>
                  </div>

                  <div className="py-3 text-xs text-[#5A4C53] font-light space-y-2">
                    {activeTab === 'details' ? (
                      <>
                        <p><strong>Materials:</strong> {quickViewProduct.materials}</p>
                        <p><strong>Dimensions:</strong> {quickViewProduct.dimensions}</p>
                      </>
                    ) : (
                      <>
                        <p><strong>Presentation:</strong> Signature blush pink rigid box with ivory tissue and champagne satin ribbon.</p>
                        <p><strong>Delivery:</strong> Express insured dispatch within 24 hours.</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Add To Bag, Quantity, Wishlist */}
              <div className="pt-4 border-t border-[#F5EFF2] space-y-3">
                <div className="flex items-center space-x-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#E9E1E4] rounded-xl overflow-hidden bg-white px-2 py-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 text-[#5A4C53] hover:text-[#181316]"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-semibold text-[#181316]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 text-[#5A4C53] hover:text-[#181316]"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Bag Button */}
                  <button
                    onClick={() => {
                      addToCart(quickViewProduct, selectedColor, quantity);
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 py-3.5 bg-[#181316] hover:bg-[#3D3237] text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-xl shadow-luxe flex items-center justify-center space-x-2 border border-[#D4AF37]/50 transition-all hover:scale-[1.01]"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#DFBA73]" />
                    <span>Add To Bag</span>
                  </button>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(quickViewProduct)}
                    className={`p-3.5 rounded-xl border transition-colors ${
                      inWishlist 
                        ? 'bg-[#EEAFB9] text-white border-[#EEAFB9]' 
                        : 'border-[#E9E1E4] text-[#3D3237] hover:border-[#D4AF37]'
                    }`}
                    title="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
                  </button>

                  {/* Share button */}
                  <button
                    onClick={handleCopyShare}
                    className="p-3.5 rounded-xl border border-[#E9E1E4] text-[#3D3237] hover:border-[#D4AF37] transition-colors"
                    title="Share piece"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
