import React from 'react';
import { X, ShieldCheck, FileText, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../data/siteConfig';

export const PolicyModal = () => {
  const { activePolicyModal, setActivePolicyModal } = useCart();

  if (!activePolicyModal || !siteConfig.policies[activePolicyModal]) return null;

  const policy = siteConfig.policies[activePolicyModal];

  const getIcon = () => {
    switch (activePolicyModal) {
      case 'shipping': return Truck;
      case 'returns': return RotateCcw;
      case 'privacy': return ShieldCheck;
      default: return FileText;
    }
  };

  const IconComponent = getIcon();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={() => setActivePolicyModal(null)}
      />

      <div className="min-h-screen px-4 py-12 flex items-center justify-center">
        <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#F7D2D8] p-6 sm:p-10 z-10 animate-fade-in max-h-[85vh] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#F5EFF2]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF0F1] flex items-center justify-center text-[#C5A028] border border-[#EEAFB9]">
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#181316]">
                  {policy.title}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-[#7B6A72]">
                  CvluxeBoutique Official Policy
                </span>
              </div>
            </div>

            <button
              onClick={() => setActivePolicyModal(null)}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="py-6 text-xs sm:text-sm text-[#5A4C53] font-light leading-relaxed whitespace-pre-line space-y-4">
            {policy.content}
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-[#F5EFF2] flex items-center justify-between">
            <span className="text-[11px] text-[#A6959D]">
              Updated for 2026 Collection
            </span>
            <button
              onClick={() => setActivePolicyModal(null)}
              className="px-6 py-2.5 bg-[#181316] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#3D3237] transition-colors"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
