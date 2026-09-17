import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../utils/animations';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingLine1 = useRef<HTMLSpanElement>(null);
  const headingLine2 = useRef<HTMLSpanElement>(null);
  const headingLine3 = useRef<HTMLSpanElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const trustBarRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Set initial states for cinematic entrance
      gsap.set([badgeRef.current, subtitleRef.current, trustBarRef.current, ctaGroupRef.current], {
        opacity: 0, y: 35
      });
      gsap.set(heroImageRef.current, { opacity: 0, y: 40, scale: 0.98 });

      const lines = [headingLine1.current, headingLine2.current, headingLine3.current].filter(Boolean);
      gsap.set(lines, { opacity: 0, y: 45 });

      // Master timeline — smooth entrance sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.4 });

      // 1. Badge slides in
      if (badgeRef.current) {
        tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6 });
      }

      // 2. Headline lines reveal
      if (lines.length) {
        tl.to(lines, {
          opacity: 1, y: 0,
          duration: 0.8, stagger: 0.12
        }, '-=0.3');
      }

      // 3. Subtitle
      if (subtitleRef.current) {
        tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
      }

      // 4. Trust bar with stagger
      if (trustBarRef.current) {
        tl.to(trustBarRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
      }

      // 5. CTA buttons
      if (ctaGroupRef.current) {
        tl.to(ctaGroupRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2');
      }

      // 6. Hero image container
      if (heroImageRef.current) {
        tl.to(heroImageRef.current, {
          opacity: 1, y: 0, scale: 1,
          duration: 1, ease: 'power3.out'
        }, '-=0.4');
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const trustElements = [
    'Creative Direction',
    'AI-Powered Systems',
    'Modern Web Engineering',
    'Social Expansion',
    'High-CTR Media',
    'Autonomous Workflows'
  ];

  return (
    <section 
      ref={heroRef}
      id="hero-section" 
      className="relative min-h-[92vh] pt-32 lg:pt-40 pb-20 lg:pb-28 flex flex-col justify-center overflow-hidden bg-[#11151C]"
    >
      {/* Background image with controlled dark overlay for maximum contrast */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
          alt="GrafiwebPk Creative Technology & Digital Agency Workspace"
          className="w-full h-full object-cover object-center opacity-20 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#11151C]/90 via-[#11151C]/95 to-[#11151C]" />
      </div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-agency-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        {/* Eyebrow & Status Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div 
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#171D26] border border-[rgba(255,255,255,0.06)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.4)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#AAB4C3]">
              DIGITAL CREATIVE & AI AGENCY
            </span>
          </div>

          <a 
            href="https://wa.me/923271847673"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.4)] text-xs font-mono text-[#AAB4C3] hover:text-emerald-400 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Founder & CEO: Bahar Ali (+92 327 1847673)</span>
          </a>
        </div>

        {/* Main Headline */}
        <div className="mb-8 lg:mb-10 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black uppercase tracking-tight text-[#F4F7FB] leading-[1.02] font-display">
            <span ref={headingLine1} className="block text-[#F4F7FB]">
              We Build Digital Experiences
            </span>
            <span ref={headingLine2} className="block text-[#F4F7FB]/90">
              That Make Brands
            </span>
            <span ref={headingLine3} className="block text-[#2F80ED]">
              Stand Out<span className="text-[#F4F7FB]">.</span>
            </span>
          </h1>
        </div>

        {/* Subtitle & Value Proposition */}
        <p ref={subtitleRef} className="text-base sm:text-xl text-[#AAB4C3] leading-relaxed font-light max-w-3xl mb-8">
          GrafiwebPk is a modern creative + digital + AI-powered agency. We architect high-converting websites, 
          iconic graphic branding, viral social media management, YouTube growth systems, and intelligent business automations.
        </p>

        {/* Trust Indicators Pill List - Neumorphic Compact Pills */}
        <div ref={trustBarRef} className="flex flex-wrap items-center gap-2.5 mb-10">
          {trustElements.map((item) => (
            <div
              key={item}
              className="px-3.5 py-1.5 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] text-[#AAB4C3] flex items-center gap-2 text-xs font-mono font-medium shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.45)] hover:border-[#2F80ED]/30 transition-all duration-300"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div 
          ref={ctaGroupRef}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          {/* Primary CTA with bottom-to-top accent fill */}
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm uppercase tracking-wider font-bold"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Secondary Raised Button */}
          <Link
            to="/services"
            className="btn-secondary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm uppercase tracking-wider font-semibold"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>Explore Services</span>
          </Link>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/923271847673"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#171D26] border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-xs font-mono font-bold uppercase transition-all duration-300 shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_10px_rgba(0,0,0,0.5)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Quick Chat</span>
          </a>
        </div>

        {/* High-Impact Visual Showcase Container - Neumorphic Frame */}
        <div 
          ref={heroImageRef}
          className="relative w-full rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] bg-[#171D26] aspect-[16/9] md:aspect-[21/9] shadow-[-8px_-8px_24px_rgba(255,255,255,0.02),10px_10px_30px_rgba(0,0,0,0.7)] group"
          data-cursor="view"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
            alt="GrafiwebPk Creative Technology & Digital Agency Workspace"
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
          />

          {/* Controlled dark solid gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-[#11151C]/60 to-transparent" />

          {/* Bottom Overlay Neumorphic Info Cards */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#171D26]/95 border border-[rgba(255,255,255,0.06)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_12px_rgba(0,0,0,0.6)] max-w-md">
              <span className="text-[11px] uppercase tracking-widest font-mono text-[#38BDF8] font-bold block mb-1">
                // INTEGRATED DIGITAL AGENCY
              </span>
              <p className="text-sm font-bold text-[#F4F7FB]">
                Web Engineering • Visual Identity • Social Media • YouTube Growth • AI Systems
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#171D26]/95 border border-[rgba(255,255,255,0.06)] text-right shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_12px_rgba(0,0,0,0.6)]">
              <span className="text-2xl font-black text-[#F4F7FB] font-display">100%</span>
              <p className="text-[11px] uppercase font-mono text-[#AAB4C3] mt-0.5">
                Client Commitment SLA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
