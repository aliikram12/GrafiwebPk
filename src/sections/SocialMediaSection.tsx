import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Palette, TrendingUp, Users, ShieldCheck, BarChart3, MessageCircle } from 'lucide-react';
import { gsap, prefersReducedMotion, cardStaggerReveal } from '../utils/animations';

export default function SocialMediaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      title: 'Content Planning',
      desc: '30-day structured editorial calendars designed around high-engagement themes, industry trends, and business offers.',
      icon: Calendar
    },
    {
      title: 'Creative Design',
      desc: 'Custom-crafted carousels, striking visual hooks, and thumb-stopping feed designs aligned with your brand identity.',
      icon: Palette
    },
    {
      title: 'Posting Strategy',
      desc: 'Publishing during verified peak engagement hours to maximize initial algorithmic momentum and organic reach.',
      icon: TrendingUp
    },
    {
      title: 'Audience Engagement',
      desc: 'Active monitoring of story polls, comments, and direct message inquiries to convert followers into qualified leads.',
      icon: Users
    },
    {
      title: 'Brand Consistency',
      desc: 'Uncompromising adherence to typography, tone of voice, color hierarchy, and professional standards across platforms.',
      icon: ShieldCheck
    },
    {
      title: 'Growth Strategy & Analytics',
      desc: 'Bi-weekly performance reviews tracking impressions, saves, shares, and profile visits to continually refine content.',
      icon: BarChart3
    }
  ];

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
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

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.social-card');
        cardStaggerReveal(gridRef.current, Array.from(cards), { stagger: 0.08 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="social-media-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#2F80ED]">
                // SOCIAL GROWTH ENGINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4F7FB] font-display tracking-tight leading-[1.05]">
              Turn Your Social Presence Into a <span className="text-[#2F80ED]">Strong Brand</span>.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#AAB4C3] font-light max-w-2xl leading-relaxed">
              We eliminate the stress of inconsistent posting. Our complete social media management 
              combines deliberate strategy, custom graphics, and daily engagement to build authentic audience loyalty.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end gap-3">
            <Link
              to="/services/social-media-management"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold"
            >
              <span>Social Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6-Card Pillar Grid with Neumorphic Surfaces */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="social-card p-7 sm:p-8 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_12px_rgba(0,0,0,0.5)] hover:border-[#2F80ED]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#2F80ED] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#64748B]">
                      PILLAR 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F4F7FB] font-display mb-3 group-hover:text-[#38BDF8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#AAB4C3] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#64748B]">Execution Frequency</span>
                  <span className="text-[#F4F7FB] font-bold">Daily / Weekly</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt - Neumorphic Surface */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#2F80ED]">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#F4F7FB]">Need an audit of your current Instagram or Facebook profiles?</p>
              <p className="text-xs text-[#AAB4C3] font-mono">Send your profile link directly to Founder & CEO Bahar Ali on WhatsApp.</p>
            </div>
          </div>
          <a
            href="https://wa.me/923271847673?text=Hi%20Bahar,%20can%20you%20review%20my%20social%20media%20profile?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap"
          >
            Free Social Audit →
          </a>
        </div>
      </div>
    </section>
  );
}
