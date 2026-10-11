import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    formatPrice, 
    setQuickViewProduct 
  } = useCart();

  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0].name : null
  );
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const inWishlist = isInWishlist(product.id);

  // Switch image on hover if secondary image exists
  const currentImage = (isHovered && product.images.length > 1) 
    ? product.images[1] 
    : product.images[0];

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden border border-[#F5EFF2] hover:border-[#D4AF37]/50 shadow-soft hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container */}
      <div className="relative aspect-[3/4] bg-[#FAF5F6] overflow-hidden">
        
        {/* Main Product Image with Smooth Transition */}
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85";
          }}
        />

        {/* Floating Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="bg-[#181316] text-[#FBF8EE] text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full shadow-xs">
              New Arrival
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-[#FCFAF2] text-[#A5821A] border border-[#D4AF37]/50 text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full shadow-xs">
              Bestseller
            </span>
          )}
        </div>

        {/* Action Buttons (Wishlist & Quick View) */}
        <div className="absolute top-3.5 right-3.5 flex flex-col space-y-2 z-10">
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md backdrop-blur-md ${
              inWishlist
                ? 'bg-[#EEAFB9] text-white border border-[#DE8A99]'
                : 'bg-white/90 text-[#3D3237] hover:text-[#A44E5E] hover:bg-white border border-gray-100'
            }`}
            title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            aria-label="Wishlist"
          >
            <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
          </button>

          {/* Quick View Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#3D3237] hover:text-[#C5A028] shadow-md backdrop-blur-md border border-gray-100 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 duration-300"
            title="Quick view product details"
            aria-label="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Add To Cart Overlay Bar (Slides up on desktop hover) */}
        <div className="absolute bottom-3 left-3 right-3 z-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 hidden sm:block">
          <button
            onClick={() => addToCart(product, selectedColor, 1)}
            className="w-full py-3 bg-[#181316]/95 hover:bg-[#181316] text-[#FBF8EE] text-xs font-semibold uppercase tracking-[0.2em] rounded-xl shadow-luxe flex items-center justify-center space-x-2 border border-[#D4AF37]/50 backdrop-blur-md transition-all hover:scale-[1.02]"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#DFBA73]" />
            <span>Add To Bag</span>
          </button>
        </div>
      </div>

      {/* Product Information Section */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
        
        <div className="space-y-1.5">
          {/* Rating & Category */}
          <div className="flex items-center justify-between text-xs text-[#7B6A72]">
            <span className="uppercase tracking-[0.15em] text-[10px] font-medium text-[#A44E5E]">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-[#D4AF37] fill-current" />
              <span className="text-[11px] font-semibold text-[#181316]">{product.rating}</span>
              <span className="text-[10px] text-[#A6959D]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h4 
            onClick={() => setQuickViewProduct(product)}
            className="font-serif text-lg text-[#181316] font-medium tracking-tight hover:text-[#C5A028] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h4>

          {/* Subtitle */}
          <p className="text-xs text-[#7B6A72] font-light line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="pt-1 flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-wider text-[#A6959D] font-medium">Color:</span>
            <div className="flex items-center space-x-1.5">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    selectedColor === color.name
                      ? 'ring-2 ring-[#D4AF37] ring-offset-1 scale-110 border-white'
                      : 'border-black/20 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select color ${color.name}`}
                />
              ))}
            </div>
            <span className="text-[10px] text-[#5A4C53] font-medium truncate ml-1">
              {selectedColor}
            </span>
          </div>
        )}

        {/* Price & Mobile Add Button */}
        <div className="pt-2 border-t border-[#F5EFF2] flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-base font-semibold text-[#181316]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#A6959D] line-through font-light">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Mobile Direct Add To Cart Button */}
          <button
            onClick={() => addToCart(product, selectedColor, 1)}
            className="sm:hidden p-2 rounded-full bg-[#FAF0F1] text-[#181316] hover:bg-[#FCE6E9] border border-[#EEAFB9]"
            title="Add to bag"
            aria-label="Add to bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
