import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, UserCheck } from 'lucide-react';
import { gsap, prefersReducedMotion, cardStaggerReveal } from '../utils/animations';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLUListElement>(null);
  const sideCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Pillars stagger
      if (pillarsRef.current) {
        const items = pillarsRef.current.querySelectorAll('li');
        gsap.fromTo(
          items,
          { opacity: 0, x: -16 },
          {
            opacity: 1, x: 0,
            duration: 0.6, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Side cards stagger
      if (sideCardsRef.current) {
        const cards = sideCardsRef.current.querySelectorAll('.about-card');
        cardStaggerReveal(sideCardsRef.current, Array.from(cards), { stagger: 0.12 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const corePillars = [
    {
      title: 'Founder-Led Strategy',
      desc: 'Direct strategic collaboration with Bahar Ali — zero account manager telephone games.'
    },
    {
      title: 'Conversion-Engineered Design',
      desc: 'Every layout, typography pairing, and motion curve is built to drive client revenue.'
    },
    {
      title: 'AI Speed & Human Polish',
      desc: 'We use cutting-edge AI pipelines to reduce timelines while human designers ensure bespoke quality.'
    },
    {
      title: 'Multi-Channel Domination',
      desc: 'Unifying your website, branding, social media, and YouTube channel under one coherent voice.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
                <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#2F80ED]">
                  // WHO WE ARE
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4F7FB] font-display tracking-tight leading-[1.05]">
                A Modern Creative & <span className="text-[#2F80ED]">AI Agency</span> Built For Growth.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#AAB4C3] font-light leading-relaxed">
              GrafiwebPk is an agile creative and technology agency founded by 
              <span className="text-[#F4F7FB] font-semibold"> Bahar Ali</span>. We believe great brands aren’t built on templates or generic social posts. They require intentional creative direction, modern web engineering, active audience management, and intelligent automation.
            </p>

            {/* Core Pillars List */}
            <div className="pt-2">
              <h3 className="text-xs uppercase font-mono tracking-widest text-[#F4F7FB] font-bold mb-5">
                Our Non-Negotiable Tenets:
              </h3>
              <ul ref={pillarsRef} className="space-y-4">
                {corePillars.map((pillar) => (
                  <li 
                    key={pillar.title}
                    className="p-4 sm:p-5 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),3px_3px_8px_rgba(0,0,0,0.4)] flex items-start gap-4"
                  >
                    <div className="w-7 h-7 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2F80ED]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#F4F7FB]">{pillar.title}</h4>
                      <p className="text-xs text-[#AAB4C3] mt-1 leading-relaxed font-light">{pillar.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold"
              >
                <span>Read Agency Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold"
              >
                <span>Consult With Bahar Ali</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Frame & Founder Card (5 cols) */}
          <div ref={sideCardsRef} className="lg:col-span-5 space-y-6">
            
            {/* Leadership Profile Card - Neumorphic Surface */}
            <div className="about-card p-6 sm:p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-5px_-5px_14px_rgba(255,255,255,0.025),6px_6px_18px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[rgba(255,255,255,0.04)]">
                <div className="w-14 h-14 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.06)] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7)] text-[#2F80ED] flex items-center justify-center font-bold text-xl font-display">
                  BA
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#F4F7FB] font-display">Bahar Ali</h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#2F80ED]/15 text-[#38BDF8] border border-[#2F80ED]/30">
                      LEADERSHIP
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#AAB4C3]">Founder & Chief Executive Officer</p>
                </div>
              </div>

              <p className="text-xs text-[#AAB4C3] leading-relaxed font-light mb-6">
                "GrafiwebPk was created to bring serious engineering standards and modern aesthetics to ambitious businesses. We operate with radical transparency, fast turnarounds, and measurable commercial results."
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]">
                  <span className="text-[10px] font-mono uppercase text-[#64748B] block">Direct WhatsApp</span>
                  <span className="text-xs font-mono font-bold text-[#F4F7FB]">+92 327 1847673</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]">
                  <span className="text-[10px] font-mono uppercase text-[#64748B] block">Headquarters</span>
                  <span className="text-xs font-mono font-bold text-[#F4F7FB]">Pakistan / Global</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#AAB4C3] flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-[#2F80ED]" />
                  Direct Project Oversight
                </span>
                <a
                  href="https://wa.me/923271847673"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-bold text-[#2F80ED] hover:text-[#38BDF8] transition-colors"
                >
                  WhatsApp Bahar →
                </a>
              </div>
            </div>

            {/* Studio Workspace Image Frame - Neumorphic Container */}
            <div 
              ref={imageRef}
              className="about-card rounded-3xl overflow-hidden bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-5px_-5px_14px_rgba(255,255,255,0.025),6px_6px_18px_rgba(0,0,0,0.6)] aspect-[16/10] relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="GrafiwebPk Creative Engineering Pod"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-[#11151C]/40 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-[#F4F7FB]">
                <span className="text-[10px] font-mono uppercase text-[#38BDF8] tracking-widest font-bold block mb-1">
                  // PURPOSE-DRIVEN ARCHITECTURE
                </span>
                <p className="text-xs font-medium text-[#F4F7FB]">
                  Where creative design, modern web engineering, and AI automation converge.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
