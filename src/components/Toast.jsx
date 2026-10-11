import React from 'react';
import { ShoppingBag, Heart, CheckCircle2, Info, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ToastContainer = () => {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 space-y-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let borderClass = 'border-[#D4AF37]/50';
        let bgClass = 'bg-[#181316] text-white';

        if (toast.type === 'cart') {
          Icon = ShoppingBag;
          borderClass = 'border-[#D4AF37]';
        } else if (toast.type === 'wishlist') {
          Icon = Heart;
          borderClass = 'border-[#EEAFB9]';
        } else if (toast.type === 'info') {
          Icon = Info;
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto rounded-2xl p-4 shadow-2xl border ${borderClass} ${bgClass} flex items-center justify-between space-x-3 text-xs backdrop-blur-md animate-slide-up`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#FAF0F1]/20 flex items-center justify-center text-[#DFBA73] shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-medium leading-snug">{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
