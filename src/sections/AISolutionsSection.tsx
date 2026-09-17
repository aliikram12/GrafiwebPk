import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, Zap, Bot, Layers, Terminal, Sparkles } from 'lucide-react';
import { gsap, prefersReducedMotion, cardStaggerReveal } from '../utils/animations';

export default function AISolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  const aiCapabilities = [
    { title: 'Content Creation Engines', desc: 'High-volume blog articles, social copy, video scripts, and marketing narratives tailored to your exact brand voice.', icon: Sparkles },
    { title: 'Prompt Architecture Systems', desc: 'Custom-engineered system prompts, reasoning templates, and guardrails to extract deterministic outputs from LLMs.', icon: Terminal },
    { title: 'Autonomous Business Workflows', desc: 'Seamless connections between your email, CRM, WhatsApp, and database to eliminate manual human data handling.', icon: Bot },
    { title: 'Productivity Optimization', desc: 'Reducing repetitive operational tasks by up to 70%, freeing your leadership to focus purely on strategic scaling.', icon: Zap },
    { title: 'Digital Operations Sync', desc: 'Real-time automated lead qualification, smart routing, and instant WhatsApp customer follow-up systems.', icon: Layers },
    { title: 'Creative Production Pipelines', desc: 'Multi-format repurposing engines transforming long-form content into carousels, summaries, and newsletters in minutes.', icon: Cpu }
  ];

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      if (headerRef.current) {
        const elements = headerRef.current.querySelectorAll('.ai-header-item');
        gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Cards stagger
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.ai-card');
        cardStaggerReveal(gridRef.current, Array.from(cards), { stagger: 0.08 });
      }

      // Banner
      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
              trigger: bannerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="ai-solutions-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="ai-header-item flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#38BDF8]">
                // AUTOMATION & INTELLIGENCE
              </span>
            </div>
            <h2 className="ai-header-item text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4F7FB] font-display tracking-tight leading-[1.05]">
              Build Smarter, Faster & Leaner With <span className="text-[#38BDF8]">AI Systems</span>.
            </h2>
            <p className="ai-header-item mt-4 text-base sm:text-lg text-[#AAB4C3] font-light max-w-2xl leading-relaxed">
              We integrate custom AI-assisted workflows into your daily business operations. From high-output content systems to automated lead qualification bots, we help you scale output with zero team bloat.
            </p>
          </div>

          <div className="ai-header-item lg:col-span-4 flex lg:justify-end">
            <Link
              to="/services/ai-automation"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold"
            >
              <span>Explore AI Capabilities</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 AI Capabilities Grid - Neumorphic Surfaces */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="ai-card p-7 sm:p-8 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_12px_rgba(0,0,0,0.5)] hover:border-[#38BDF8]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#38BDF8] group-hover:scale-105 transition-transform duration-300 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-[#F4F7FB] font-display mb-3 group-hover:text-[#38BDF8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#AAB4C3] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#64748B]">Operational Layer</span>
                  <span className="text-[#38BDF8] font-bold">READY TO DEPLOY</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom AI Strategy Banner - Neumorphic Card */}
        <div 
          ref={bannerRef}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-6px_-6px_16px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#38BDF8]">
              // BESPOKE AI CONSULTATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#F4F7FB] font-display">
              Ready to automate 10+ manual hours of routine business work every week?
            </h3>
            <p className="text-xs sm:text-sm text-[#AAB4C3] font-light">
              Speak directly with our technical lead to map out which repetitive steps in your sales or content pipeline can be automated immediately.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="https://wa.me/923271847673?text=Hi%20Bahar,%20I%20want%20to%20discuss%20AI%20automation%20for%20my%20business"
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold"
            >
              Discuss AI On WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
