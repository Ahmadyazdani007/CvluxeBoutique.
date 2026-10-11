import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  if (!siteConfig.contact.whatsapp) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-[#D4AF37]/40 text-xs text-[#181316] animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-medium">Need styling advice? Chat on WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-700 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20CvluxeBoutique,%20I%20would%20like%20assistance%20with%20your%20luxury%20collection.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-white group relative"
        aria-label="Contact CvluxeBoutique Concierge on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] rounded-full border border-white"></span>
      </a>
    </div>
  );
};
