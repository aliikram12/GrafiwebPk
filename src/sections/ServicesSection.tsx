import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Code2, 
  Share2, 
  Cpu, 
  Sparkles, 
  Youtube, 
  TrendingUp, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { servicesData, serviceCategories } from '../data/servicesData';
import { gsap, prefersReducedMotion, cardStaggerReveal } from '../utils/animations';

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredGridRef = useRef<HTMLDivElement>(null);
  const categoryGridRef = useRef<HTMLDivElement>(null);

  // 4 Featured services highlighted
  const featuredSlugs = [
    'web-design-development',
    'social-media-management',
    'ai-content-creation',
    'ai-automation'
  ];
  const featuredServices = servicesData.filter((s) => featuredSlugs.includes(s.slug));

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Featured cards stagger
      if (featuredGridRef.current) {
        const cards = featuredGridRef.current.querySelectorAll('.featured-card');
        cardStaggerReveal(featuredGridRef.current, Array.from(cards), { stagger: 0.1 });
      }

      // Category cards stagger
      if (categoryGridRef.current) {
        const cards = categoryGridRef.current.querySelectorAll('.category-card');
        cardStaggerReveal(categoryGridRef.current, Array.from(cards), { stagger: 0.08, start: 'top 82%' });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-[#2F80ED]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#38BDF8]" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-[#2F80ED]" />;
      case 'Youtube': return <Youtube className="w-5 h-5 text-red-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#38BDF8]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#2F80ED]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      default: return <Code2 className="w-5 h-5 text-[#2F80ED]" />;
    }
  };

  const getServiceCategoryIcon = (name: string) => {
    switch (name) {
      case 'Web & Digital': return <Code2 className="w-5 h-5 text-[#2F80ED]" />;
      case 'Creative & Design': return <Sparkles className="w-5 h-5 text-[#38BDF8]" />;
      case 'Social Media': return <Share2 className="w-5 h-5 text-[#2F80ED]" />;
      case 'YouTube': return <Youtube className="w-5 h-5 text-red-500" />;
      case 'AI Solutions': return <Cpu className="w-5 h-5 text-[#38BDF8]" />;
      case 'Digital Marketing': return <TrendingUp className="w-5 h-5 text-[#2F80ED]" />;
      default: return <Code2 className="w-5 h-5 text-[#2F80ED]" />;
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="services-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="// CORE CAPABILITIES"
          title="Digital Services Engineered For Real Growth"
          highlightWord="Growth"
          description="GrafiwebPk delivers an integrated ecosystem: high-converting web engineering, striking graphic design, active social media and YouTube management, and intelligent AI automation."
          align="split"
          action={
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase font-mono font-bold tracking-wider text-[#2F80ED] hover:text-[#38BDF8] transition-colors"
            >
              <span>Explore All 6 Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        {/* 1. FEATURED SERVICES - Raised Neumorphic Cards */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <h3 className="text-xs uppercase font-mono tracking-widest text-[#38BDF8] font-bold">
              // FEATURED CORE DISCIPLINES
            </h3>
          </div>

          <div ref={featuredGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="featured-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-5px_-5px_14px_rgba(255,255,255,0.025),6px_6px_18px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:shadow-[-7px_-7px_18px_rgba(255,255,255,0.035),8px_8px_24px_rgba(0,0,0,0.7)] active:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.65),inset_-3px_-3px_7px_rgba(255,255,255,0.02)] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2F80ED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    {/* Recessed Icon Surface */}
                    <div className="w-12 h-12 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.7)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#64748B] group-hover:text-[#2F80ED] transition-colors">
                      {service.number} // FEATURED
                    </span>
                  </div>

                  <h4 className="text-2xl font-black text-[#F4F7FB] font-display group-hover:text-[#38BDF8] transition-colors duration-300">
                    {service.title}
                  </h4>

                  <p className="text-sm text-[#AAB4C3] mt-3 leading-relaxed font-light">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mt-6 pt-4 border-t border-[rgba(255,255,255,0.04)]">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#AAB4C3]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F80ED] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-[#0E1217] border border-[rgba(255,255,255,0.04)] text-[#AAB4C3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2F80ED] group-hover:text-[#38BDF8] transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. COMPLETE SERVICE CATEGORIES OVERVIEW GRID */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
              <h3 className="text-xs uppercase font-mono tracking-widest text-[#F4F7FB] font-bold">
                // FULL 6-DISCIPLINE CAPABILITIES MATRIX
              </h3>
            </div>
            <span className="text-xs font-mono text-[#64748B] hidden sm:block">
              Total 18+ Specialized Offerings
            </span>
          </div>

          <div ref={categoryGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="category-card p-6 sm:p-7 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_12px_rgba(0,0,0,0.5)] hover:border-[#2F80ED]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center">
                      {getServiceCategoryIcon(category.name)}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#64748B]">Category</span>
                      <h4 className="text-base font-bold text-[#F4F7FB] font-display">{category.name}</h4>
                    </div>
                  </div>

                  <p className="text-xs text-[#AAB4C3] leading-relaxed mb-4 font-light">
                    {category.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[rgba(255,255,255,0.04)]">
                    {category.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#AAB4C3]">
                        <span className="w-1 h-1 rounded-full bg-[#2F80ED]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.04)]">
                  <Link
                    to="/services"
                    className="text-xs font-mono font-semibold text-[#2F80ED] hover:text-[#38BDF8] flex items-center justify-between group transition-colors"
                  >
                    <span>View Category Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
