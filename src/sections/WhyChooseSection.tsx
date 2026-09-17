import { useEffect, useRef } from 'react';
import { 
  Lightbulb, 
  Cpu, 
  Bot, 
  Target, 
  Smartphone, 
  MessageSquare, 
  ShieldCheck, 
  TrendingUp
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { gsap, prefersReducedMotion, cardStaggerReveal } from '../utils/animations';

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const reasons = [
    { title: 'Creative Thinking', desc: 'We craft bespoke, memorable visual designs that make your brand look like a tier-one market leader.', icon: Lightbulb },
    { title: 'Modern Technology', desc: 'Engineered using modern tech stacks (React, TypeScript, Next.js) ensuring sub-second speeds and flawless security.', icon: Cpu },
    { title: 'AI-Powered Solutions', desc: 'We build autonomous business workflows and prompt systems that save dozens of manual administrative hours weekly.', icon: Bot },
    { title: 'Business-Focused Strategy', desc: 'Every layout, caption, and automation is engineered with one core objective: maximizing client conversions and ROI.', icon: Target },
    { title: 'Responsive Design', desc: 'Tested exhaustively across smartphones, tablets, laptops, and ultra-wide displays with zero layout compromises.', icon: Smartphone },
    { title: 'Consistent Communication', desc: 'Direct access to leadership via WhatsApp and email with rapid response times and transparent updates.', icon: MessageSquare },
    { title: 'Professional Execution', desc: 'Disciplined project roadmaps, on-time milestone deliveries, and clean production code handoffs.', icon: ShieldCheck },
    { title: 'Long-Term Digital Growth', desc: 'We do not just build and vanish. We partner with you to continuously scale your reach, audience, and revenue.', icon: TrendingUp }
  ];

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.reason-card');
        cardStaggerReveal(gridRef.current, Array.from(cards), { stagger: 0.08 });
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
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
      id="why-choose-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="// WHY GRAFIWEBPK"
          title="The Agency Advantage Built For Digital Dominance"
          highlightWord="Advantage"
          description="We combine technical precision, iconic design aesthetics, and commercial strategy to build digital assets that outperform your competition."
          align="split"
        />

        {/* 8-Card Grid with Neumorphic Surfaces */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reason-card p-6 sm:p-7 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_12px_rgba(0,0,0,0.5)] hover:border-[#2F80ED]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#2F80ED] group-hover:text-[#38BDF8] group-hover:scale-105 transition-all duration-300 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-[#F4F7FB] font-display mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#AAB4C3] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[rgba(255,255,255,0.04)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]" />
                  <span className="text-[10px] uppercase font-mono text-[#64748B]">
                    Standard Protocol
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout - Neumorphic Surface */}
        <div 
          ref={statsRef}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-6px_-6px_16px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2F80ED] font-bold">
              // NO MIDDLEMEN. NO WASTED TIME.
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-[#F4F7FB] font-display mt-1">
              Direct Founder & CEO Collaboration on Every Major Project.
            </h4>
            <p className="text-xs sm:text-sm text-[#AAB4C3] mt-2 font-light">
              Bahar Ali personally leads strategy and review cycles to guarantee our work strictly matches your commercial vision.
            </p>
          </div>

          <a
            href="https://wa.me/923271847673"
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold whitespace-nowrap"
          >
            Direct WhatsApp Discussion →
          </a>
        </div>
      </div>
    </section>
  );
}
