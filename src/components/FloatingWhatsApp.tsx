import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '923271847673';
  const prefilledText = encodeURIComponent('Hi GrafiwebPk team, I would like to discuss a project.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledText}`;

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.06)] text-[#F4F7FB] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_12px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-right-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-medium">Chat with Bahar Ali on WhatsApp</span>
          <button 
            type="button" 
            onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
            className="text-[#AAB4C3] hover:text-white ml-1 text-xs cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Neumorphic Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group w-14 h-14 rounded-2xl bg-[#171D26] border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 flex items-center justify-center shadow-[-4px_-4px_10px_rgba(255,255,255,0.025),5px_5px_14px_rgba(0,0,0,0.6)] hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1 active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7)]"
        aria-label="Chat on WhatsApp with GrafiwebPk"
      >
        <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
      </a>
    </aside>
  );
}
