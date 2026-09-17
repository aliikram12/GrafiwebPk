import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Youtube, Image as ImageIcon, Search, Sliders, Eye, MousePointerClick } from 'lucide-react';
import { gsap, prefersReducedMotion, cardStaggerReveal } from '../utils/animations';

export default function YouTubeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: 'Channel Management',
      desc: 'Complete oversight of your YouTube channel operations: uploads, playlist curation, comment moderation, and community tab engagement.',
      icon: Youtube
    },
    {
      title: 'Content Planning',
      desc: 'Identifying high-demand, low-competition video topics using search volume telemetry and competitor retention curve benchmarking.',
      icon: Search
    },
    {
      title: 'High-CTR Thumbnail Design',
      desc: 'Psychologically engineered visual packaging designed to command attention on the YouTube home feed and achieve double-digit click rates.',
      icon: ImageIcon
    },
    {
      title: 'Channel Branding',
      desc: 'Custom high-resolution channel banners, avatar icons, watermark marks, and lower-third graphic overlays that signal top-tier production.',
      icon: Sliders
    },
    {
      title: 'Video SEO Optimization',
      desc: 'Keyword-optimized titles, comprehensive multi-paragraph descriptions, strategic chapter timestamps, and structured tags.',
      icon: MousePointerClick
    },
    {
      title: 'Audience Strategy & Publishing',
      desc: 'Targeted publishing windows and audience retention funnels designed to guide casual viewers into loyal channel subscribers.',
      icon: Eye
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
        const cards = gridRef.current.querySelectorAll('.youtube-card');
        cardStaggerReveal(gridRef.current, Array.from(cards), { stagger: 0.08 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="youtube-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-red-500">
                // YOUTUBE CHANNEL ACCELERATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4F7FB] font-display tracking-tight leading-[1.05]">
              Build a YouTube Presence <span className="text-red-500">People Remember</span>.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#AAB4C3] font-light max-w-2xl leading-relaxed">
              Video is the highest-leverage medium in modern digital business. GrafiwebPk manages 
              everything beyond recording: high-CTR thumbnails, video SEO, and channel scaling strategies.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/services/youtube-management"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold"
            >
              <span>Explore YouTube Suite</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 YouTube Capabilities Grid - Neumorphic Surfaces */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="youtube-card p-7 sm:p-8 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_12px_rgba(0,0,0,0.5)] hover:border-red-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#64748B]">
                      YT PROTOCOL 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F4F7FB] font-display mb-3 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#AAB4C3] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#64748B]">Impact Metric</span>
                  <span className="text-red-400 font-bold">HIGH CTR FOCUS</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
