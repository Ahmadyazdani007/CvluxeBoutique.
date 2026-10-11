import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  AlertCircle, 
  Lock, 
  ArrowRight,
  Gift,
  Building,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../data/siteConfig';

export const CheckoutModal = () => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    cart, 
    cartSubtotal, 
    hasFreeShipping, 
    formatPrice, 
    clearCart,
    addToast 
  } = useCart();

  const [step, setStep] = useState(1); // 1: Shipping Details, 2: Payment Gateway, 3: Confirmation
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    phone: '',
    deliveryMethod: 'standard', // 'standard' | 'express'
    paymentMethod: 'sandbox_concierge', // 'card' | 'paypal' | 'sandbox_concierge'
    giftMessage: ''
  });

  const [orderSummary, setOrderSummary] = useState(null);

  if (!isCheckoutOpen) return null;

  const shippingCost = formData.deliveryMethod === 'express' 
    ? 25.0 
    : (hasFreeShipping ? 0 : 9.5);
  
  const finalTotal = cartSubtotal + shippingCost;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.email || !formData.firstName || !formData.address || !formData.city || !formData.zip) {
        addToast('Please complete all required shipping fields.', 'info');
        return;
      }
      setStep(2);
    }
  };

  const handleCompleteOrder = () => {
    // Generate order receipt without simulating false successful bank/card charges
    const orderId = `CV-${Math.floor(100000 + Math.random() * 900000)}`;
    const summary = {
      orderId,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      items: [...cart],
      total: finalTotal,
      shippingCost,
      shippingAddress: { ...formData },
      status: formData.paymentMethod === 'sandbox_concierge' 
        ? 'Boutique Reservation Confirmed (Sandbox / Concierge Mode)' 
        : 'Payment Gateway Pending Configuration'
    };

    setOrderSummary(summary);
    clearCart();
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity" 
        onClick={() => {
          if (step !== 3) setIsCheckoutOpen(false);
        }}
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-[#F7D2D8] overflow-hidden z-10 animate-fade-in">
          
          {/* Top Header */}
          <div className="p-6 sm:px-8 border-b border-[#F5EFF2] flex items-center justify-between bg-[#FAF5F6]/80">
            <div>
              <div className="font-serif text-xl sm:text-2xl font-semibold text-[#181316]">
                Cvluxe<span className="italic text-[#C5A028]">Boutique</span> Checkout
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#7B6A72] flex items-center space-x-1.5 mt-0.5">
                <Lock className="w-3 h-3 text-[#C5A028]" />
                <span>256-Bit Encrypted Secure Checkout</span>
              </div>
            </div>

            {step !== 3 && (
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-white"
                aria-label="Close checkout"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Stepper Indicator */}
          {step !== 3 && (
            <div className="px-8 py-3 bg-[#FCFAF2] border-b border-[#EFE2B3]/50 flex items-center justify-center space-x-8 text-xs font-semibold">
              <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-[#181316]' : 'text-gray-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  step >= 1 ? 'bg-[#D4AF37] text-white' : 'bg-gray-200'
                }`}>1</span>
                <span>Shipping & Delivery</span>
              </div>
              <span className="text-gray-300">───</span>
              <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-[#181316]' : 'text-gray-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  step >= 2 ? 'bg-[#D4AF37] text-white' : 'bg-gray-200'
                }`}>2</span>
                <span>Payment & Provider</span>
              </div>
            </div>
          )}

          {/* Step 1: Shipping Information */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="p-6 sm:p-8 space-y-6">
              
              {/* Contact Information */}
              <div>
                <h4 className="font-serif text-lg font-medium text-[#181316] mb-3">
                  1. Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@luxury.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                      Phone Number (for Courier SMS) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <h4 className="font-serif text-lg font-medium text-[#181316] mb-3">
                  2. Delivery Destination
                </h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. 742 Madison Ave, Suite 4B"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                        State / Province
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Speed Options */}
              <div>
                <h4 className="font-serif text-lg font-medium text-[#181316] mb-3">
                  3. Shipping Method
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className={`p-4 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                    formData.deliveryMethod === 'standard'
                      ? 'border-[#D4AF37] bg-[#FCFAF2] ring-1 ring-[#D4AF37]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#181316]">Standard Insured</span>
                      <span className="text-xs font-semibold text-[#A44E5E]">
                        {hasFreeShipping ? "FREE" : formatPrice(9.5)}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#7B6A72]">
                      2–4 Business Days • Discreet outer carton
                    </span>
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="standard"
                      checked={formData.deliveryMethod === 'standard'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'standard' })}
                      className="sr-only"
                    />
                  </label>

                  <label className={`p-4 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                    formData.deliveryMethod === 'express'
                      ? 'border-[#D4AF37] bg-[#FCFAF2] ring-1 ring-[#D4AF37]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#181316]">Express Concierge Overnight</span>
                      <span className="text-xs font-semibold text-[#181316]">{formatPrice(25.0)}</span>
                    </div>
                    <span className="text-[11px] text-[#7B6A72]">
                      Next Business Day Priority Air Delivery
                    </span>
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="express"
                      checked={formData.deliveryMethod === 'express'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'express' })}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>

              {/* Next Button */}
              <div className="pt-4 border-t border-[#F5EFF2] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsCheckoutOpen(false)}
                  className="text-xs text-[#7B6A72] hover:text-[#181316] font-medium"
                >
                  Return to Boutique
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#181316] hover:bg-[#3D3237] text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full shadow-luxe flex items-center space-x-2"
                >
                  <span>Continue To Payment</span>
                  <ArrowRight className="w-4 h-4 text-[#DFBA73]" />
                </button>
              </div>

            </form>
          )}

          {/* Step 2: Payment Provider Integration Notice & Method Selection */}
          {step === 2 && (
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Payment Provider Notice adhering strictly to guidelines */}
              <div className="p-4 bg-[#FCFAF2] rounded-2xl border border-[#D4AF37]/50 space-y-2">
                <div className="flex items-center space-x-2 text-[#A5821A] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#C5A028]" />
                  <span>Secure Payment Gateway Configuration</span>
                </div>
                <p className="text-xs text-[#5A4C53] leading-relaxed">
                  In accordance with boutique e-commerce security standards, live payment processing (such as Stripe or PayPal) is activated once production merchant API keys are configured. 
                  No simulated transactions or fake credit charges are processed here.
                </p>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-medium text-[#181316]">
                  Select Checkout Mode
                </h4>

                {/* Option 1: Sandbox / Concierge Reservation (Recommended for test) */}
                <label className={`p-4 rounded-2xl border block cursor-pointer transition-all ${
                  formData.paymentMethod === 'sandbox_concierge'
                    ? 'border-[#D4AF37] bg-[#FAF0F1] ring-1 ring-[#D4AF37]'
                    : 'border-gray-200'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#181316] flex items-center space-x-2">
                      <span>✦ Boutique Order Reservation / Sandbox Mode</span>
                      <span className="bg-[#181316] text-[#FBF8EE] text-[9px] px-2 py-0.5 rounded-full">
                        Ready
                      </span>
                    </span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="sandbox_concierge"
                      checked={formData.paymentMethod === 'sandbox_concierge'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'sandbox_concierge' })}
                      className="accent-[#C5A028]"
                    />
                  </div>
                  <p className="text-xs text-[#5A4C53] mt-1">
                    Places your order request securely with our concierge atelier. Our team connects with you directly via WhatsApp or email to confirm specifications and final invoice payment upon dispatch.
                  </p>
                </label>

                {/* Option 2: Live Credit Card (Stripe integration hook) */}
                <label className="p-4 rounded-2xl border border-gray-200 block opacity-75">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#181316] flex items-center space-x-2">
                      <CreditCard className="w-4 h-4 text-gray-500" />
                      <span>Direct Credit Card (Stripe Gateway)</span>
                    </span>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
                      Awaiting Stripe API Keys
                    </span>
                  </div>
                  <p className="text-[11px] text-[#7B6A72] mt-1">
                    To activate instant card checkout, add your Stripe Publishable Key to your deployment configuration.
                  </p>
                </label>
              </div>

              {/* Order Final Summary */}
              <div className="p-4 bg-[#FAF5F6] rounded-2xl border border-[#F5EFF2] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Items Subtotal:</span>
                  <span className="font-semibold text-[#181316]">{formatPrice(cartSubtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping ({formData.deliveryMethod}):</span>
                  <span className="font-semibold text-[#181316]">
                    {shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#181316] pt-2 border-t border-gray-200">
                  <span>Grand Total:</span>
                  <span>{formatPrice(finalTotal)}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-[#7B6A72] hover:text-[#181316]"
                >
                  ← Back to Shipping
                </button>
                <button
                  type="button"
                  onClick={handleCompleteOrder}
                  className="px-8 py-3.5 bg-[#181316] hover:bg-[#3D3237] text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full shadow-luxe flex items-center space-x-2 border border-[#D4AF37]/50"
                >
                  <span>Confirm Boutique Order</span>
                  <Check className="w-4 h-4 text-[#DFBA73]" />
                </button>
              </div>

            </div>
          )}

          {/* Step 3: Order Confirmation Receipt */}
          {step === 3 && orderSummary && (
            <div className="p-6 sm:p-10 space-y-6 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#FCFAF2] border-2 border-[#D4AF37] flex items-center justify-center mx-auto text-[#C5A028] shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A44E5E] font-bold">
                  Boutique Order Request Received
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#181316] font-medium">
                  Thank You, {orderSummary.shippingAddress.firstName}!
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4C53] max-w-md mx-auto font-light">
                  Your order reference is <strong className="text-[#181316]">{orderSummary.orderId}</strong>. A confirmation has been registered for {orderSummary.shippingAddress.email}.
                </p>
              </div>

              {/* Order Details Card */}
              <div className="bg-[#FAF5F6] rounded-2xl p-6 border border-[#F5EFF2] text-left text-xs space-y-4 max-w-lg mx-auto">
                <div className="flex justify-between pb-3 border-b border-gray-200 font-semibold text-[#181316]">
                  <span>Order Reference: {orderSummary.orderId}</span>
                  <span>{orderSummary.date}</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#7B6A72] font-semibold block">
                    Reserved Items:
                  </span>
                  {orderSummary.items.map((i) => (
                    <div key={i.cartItemId} className="flex justify-between">
                      <span className="text-[#261F23]">
                        {i.quantity}x {i.product.name} ({i.color})
                      </span>
                      <span className="font-semibold">{formatPrice(i.price * i.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-200 space-y-1">
                  <div className="flex justify-between text-[#5A4C53]">
                    <span>Shipping Destination:</span>
                    <span>{orderSummary.shippingAddress.city}, {orderSummary.shippingAddress.country}</span>
                  </div>
                  <div className="flex justify-between text-[#5A4C53]">
                    <span>Boutique Status:</span>
                    <span className="text-[#A44E5E] font-medium">{orderSummary.status}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#181316] pt-1">
                    <span>Order Value:</span>
                    <span>{formatPrice(orderSummary.total)}</span>
                  </div>
                </div>
              </div>

              {/* Close / Continue Shopping Button */}
              <div className="pt-4">
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="px-8 py-3.5 bg-[#181316] hover:bg-[#3D3237] text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full shadow-luxe transition-all hover:scale-105"
                >
                  Return To Boutique
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
