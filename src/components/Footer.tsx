import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ArrowUp, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Instagram, 
  Facebook,
  MessageCircle
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-[#11151C] border-t border-[rgba(255,255,255,0.04)] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Call to Action Banner - Raised Neumorphic Surface */}
        <div className="pb-12 mb-16 border-b border-[rgba(255,255,255,0.04)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-[#171D26] p-8 sm:p-12 rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-[-6px_-6px_16px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)]">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#2F80ED] font-bold">
              // READY FOR NEXT-LEVEL DIGITAL GROWTH?
            </span>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#F4F7FB] mt-2 font-display">
              Let's Build Something Powerful.
            </h3>
            <p className="text-sm sm:text-base text-[#AAB4C3] mt-2 font-light">
              Turn your brand into an authoritative digital powerhouse through custom websites, high-converting social media, YouTube scaling, and intelligent AI automation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="https://wa.me/923271847673"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#171D26] border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_10px_rgba(0,0,0,0.5)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[rgba(255,255,255,0.04)]">
          {/* Col 1: Brand & Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.06)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),3px_3px_8px_rgba(0,0,0,0.5)]">
                <span className="text-base font-black text-[#2F80ED] font-display">G</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-[#F4F7FB] font-display">
                Grafiweb<span className="text-[#2F80ED]">Pk</span>
              </span>
            </Link>

            <p className="text-sm text-[#AAB4C3] leading-relaxed pr-4 font-light">
              GrafiwebPk is a modern digital creative and AI-powered agency. We empower businesses with modern web engineering, strategic branding, social media expansion, YouTube growth, and intelligent business automations.
            </p>

            {/* Newsletter Inset Input */}
            <div className="pt-2">
              <label htmlFor="newsletter-email" className="block text-xs uppercase tracking-wider font-mono text-[#AAB4C3] mb-2">
                Subscribe to Digital & AI Growth Insights
              </label>
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! You are subscribed to GrafiwebPk insights.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter work email..."
                      required
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7),inset_-1px_-1px_3px_rgba(255,255,255,0.02)] text-xs text-[#F4F7FB] placeholder-[#64748B] focus:outline-none focus:border-[#2F80ED] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.08)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.45)] hover:border-[#2F80ED]/40 text-[#F4F7FB] hover:text-[#2F80ED] text-xs font-bold uppercase transition-all shrink-0 cursor-pointer active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#F4F7FB] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#AAB4C3] font-medium">
              <li>
                <Link to="/" className="hover:text-[#2F80ED] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#2F80ED] transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#2F80ED] transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#2F80ED] transition-colors">Portfolio</Link>
              </li>
              <li>
                <a href="/#process-section" className="hover:text-[#2F80ED] transition-colors">Process</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#2F80ED] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#F4F7FB] font-bold">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#AAB4C3] font-medium">
              <li>
                <Link to="/services/web-design-development" className="hover:text-[#2F80ED] transition-colors">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link to="/services/graphic-design" className="hover:text-[#2F80ED] transition-colors">
                  Graphic Design & Branding
                </Link>
              </li>
              <li>
                <Link to="/services/social-media-management" className="hover:text-[#2F80ED] transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/services/youtube-management" className="hover:text-[#2F80ED] transition-colors">
                  YouTube Management
                </Link>
              </li>
              <li>
                <Link to="/services/ai-content-creation" className="hover:text-[#2F80ED] transition-colors">
                  AI Content Creation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-automation" className="hover:text-[#2F80ED] transition-colors">
                  AI Automation & Workflows
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#F4F7FB] font-bold">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#AAB4C3]">
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/923271847673" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-emerald-400 transition-colors font-mono font-medium"
                >
                  +92 327 1847673
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2F80ED] shrink-0" />
                <a 
                  href="mailto:info.grafiwebpk@gmail.com" 
                  className="hover:text-[#2F80ED] transition-colors font-mono text-xs break-all"
                >
                  info.grafiwebpk@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-[#64748B] font-mono">
                <Phone className="w-3.5 h-3.5 shrink-0 text-[#64748B]" />
                <span>Local: +92 328 6006028 (Optional)</span>
              </li>
            </ul>

            {/* Official Social Links - Neumorphic Pills */}
            <div className="pt-3">
              <span className="block text-xs uppercase tracking-wider font-mono text-[#AAB4C3] mb-2">
                Official Profiles
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/grafi_web_pk/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.4)] text-[#AAB4C3] hover:text-white hover:border-pink-500/40 transition-all text-xs font-semibold active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
                  aria-label="GrafiwebPk Instagram"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61577441664650&sk"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.4)] text-[#AAB4C3] hover:text-white hover:border-[#2F80ED]/40 transition-all text-xs font-semibold active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
                  aria-label="GrafiwebPk Facebook"
                >
                  <Facebook className="w-4 h-4 text-[#2F80ED]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] font-mono">
          <div>
            © 2026 GrafiwebPk. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#AAB4C3] transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-[#AAB4C3] transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.4)] text-[#AAB4C3] hover:text-[#2F80ED] transition-all ml-2 cursor-pointer active:shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]"
              aria-label="Scroll to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
