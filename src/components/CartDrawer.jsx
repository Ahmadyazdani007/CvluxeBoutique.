import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Gift, 
  Sparkles, 
  Check, 
  Truck
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    updateQuantity, 
    removeFromCart, 
    cartSubtotal, 
    freeShippingThreshold,
    hasFreeShipping,
    freeShippingRemaining,
    formatPrice,
    setIsCheckoutOpen,
    scrollToProducts,
    addToast
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [giftWrap, setGiftWrap] = useState(true);

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoCode.trim()) return;
    if (promoCode.trim().toUpperCase() === 'CVLUXE' || promoCode.trim().toUpperCase() === 'LUXURY') {
      setPromoApplied(true);
      addToast('Boutique packaging upgrade confirmed with code!', 'success');
    } else {
      addToast('This promotion code is not active. Try "CVLUXE".', 'info');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#F5EFF2]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#F5EFF2] flex items-center justify-between bg-[#FAF5F6]/70">
            <div className="flex items-center space-x-2.5">
              <ShoppingBag className="w-5 h-5 text-[#C5A028]" />
              <h3 className="font-serif text-xl font-medium text-[#181316]">
                Your Shopping Bag
              </h3>
              <span className="text-xs bg-[#FAF0F1] text-[#A44E5E] font-semibold px-2 py-0.5 rounded-full border border-[#EEAFB9]/60">
                {cart.reduce((sum, i) => sum + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#7B6A72] hover:text-[#181316] rounded-full hover:bg-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3.5 bg-[#FAF0F1] border-b border-[#EEAFB9]/40 text-xs">
            <div className="flex items-center justify-between font-medium text-[#261F23] mb-1.5">
              <span className="flex items-center space-x-1.5">
                <Truck className="w-3.5 h-3.5 text-[#C5A028]" />
                <span>
                  {hasFreeShipping 
                    ? "Complimentary Worldwide Shipping Unlocked!" 
                    : `Add ${formatPrice(freeShippingRemaining)} for complimentary shipping`}
                </span>
              </span>
              <span className="text-[11px] font-bold text-[#A44E5E]">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#EEAFB9] via-[#D4AF37] to-[#C5A028] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF0F1] flex items-center justify-center mx-auto text-[#A44E5E]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-medium text-[#181316]">
                  Your bag is currently empty
                </h4>
                <p className="text-xs text-[#7B6A72] max-w-xs mx-auto">
                  Discover our handcrafted leather goods, pearls, and signature accessories.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    scrollToProducts('all');
                  }}
                  className="px-6 py-3 bg-[#181316] text-[#FBF8EE] text-xs font-semibold uppercase tracking-[0.2em] rounded-full shadow-luxe hover:bg-[#3D3237] transition-all"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.cartItemId} 
                  className="flex space-x-4 pb-6 border-b border-[#F5EFF2] last:border-b-0"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded-xl border border-[#F5EFF2] bg-[#FAF5F6] shrink-0"
                  />
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-base font-medium text-[#181316] leading-tight line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-[#A6959D] hover:text-[#A44E5E] p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-xs text-[#7B6A72] mt-0.5 flex items-center space-x-2">
                        <span>Color: <strong className="text-[#181316]">{item.color}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#E9E1E4] rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1 px-2 text-[#5A4C53] hover:bg-[#FAF0F1] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-[#181316] min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1 px-2 text-[#5A4C53] hover:bg-[#FAF0F1] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-semibold text-[#181316]">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#F5EFF2] bg-[#FFFDFC] space-y-4">
              
              {/* Complimentary Gift Box Toggle */}
              <div className="flex items-center justify-between p-3 bg-[#FAF0F1] rounded-xl border border-[#EEAFB9]/60 text-xs">
                <div className="flex items-center space-x-2">
                  <Gift className="w-4 h-4 text-[#C5A028]" />
                  <span className="text-[#261F23] font-medium">Signature Blush Keepsake Box</span>
                </div>
                <span className="text-[10px] text-[#A44E5E] font-bold uppercase tracking-wider">
                  Complimentary
                </span>
              </div>

              {/* Totals Breakdown */}
              <div className="space-y-1.5 text-xs text-[#5A4C53] pt-1">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="text-[#181316] font-semibold">{formatPrice(cartSubtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insured Shipping</span>
                  <span className="text-[#181316] font-semibold">
                    {hasFreeShipping ? "FREE" : formatPrice(9.5)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-semibold text-[#181316] pt-2 border-t border-[#F5EFF2]">
                  <span>Total Amount</span>
                  <span>{formatPrice(hasFreeShipping ? cartSubtotal : cartSubtotal + 9.5)}</span>
                </div>
              </div>

              {/* Checkout Action */}
              <div className="pt-2">
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full py-4 bg-[#181316] hover:bg-[#3D3237] text-white text-xs font-semibold uppercase tracking-[0.22em] rounded-full shadow-luxe transition-all duration-300 flex items-center justify-center space-x-2 border border-[#D4AF37]/50"
                >
                  <span>Proceed To Checkout</span>
                  <ArrowRight className="w-4 h-4 text-[#DFBA73]" />
                </button>
              </div>

              <div className="text-center text-[10px] text-[#A6959D] uppercase tracking-widest">
                256-Bit SSL Encrypted Boutique Checkout
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
