import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { gsap, prefersReducedMotion, cardStaggerReveal } from '../utils/animations';

const categories = ['ALL', 'Websites', 'Branding', 'Social Media', 'YouTube', 'AI', 'Creative'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'ALL'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.portfolio-card');
        cardStaggerReveal(gridRef.current, Array.from(cards), { stagger: 0.08 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Re-animate cards when category changes
  useEffect(() => {
    if (prefersReducedMotion() || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.portfolio-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 25, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out' }
    );
  }, [activeCategory]);

  return (
    <section 
      ref={sectionRef}
      id="portfolio-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="// SELECTED WORK"
          title="Recent Client Projects & Case Studies"
          highlightWord="Projects"
          description="Explore how GrafiwebPk crafts high-converting websites, visual brand identities, viral social media engines, and intelligent automations."
          align="split"
        />

        {/* Filter Categories - Neumorphic Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-[#0E1217] text-[#2F80ED] border border-[#2F80ED]/40 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7),inset_-1px_-1px_3px_rgba(255,255,255,0.02)]'
                    : 'bg-[#171D26] text-[#AAB4C3] hover:text-[#F4F7FB] border border-[rgba(255,255,255,0.04)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.45)] hover:border-[rgba(255,255,255,0.08)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid - Neumorphic Containers */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="portfolio-card rounded-3xl overflow-hidden flex flex-col justify-between group bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:shadow-[-6px_-6px_16px_rgba(255,255,255,0.03),7px_7px_20px_rgba(0,0,0,0.65)] transition-all duration-300"
              data-cursor="view"
            >
              <div>
                {/* Clipped Project Image Container */}
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-[#0E1217]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171D26] via-transparent to-transparent opacity-90" />

                  {/* Category Badge & Year */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg text-[10px] font-mono uppercase font-bold bg-[#11151C]/90 text-[#38BDF8] border border-[rgba(255,255,255,0.05)] shadow-sm">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono text-[#AAB4C3] bg-[#11151C]/90 border border-[rgba(255,255,255,0.05)] shadow-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-7">
                  <span className="text-xs uppercase font-mono tracking-wider text-[#2F80ED] font-bold block mb-1">
                    Client // {project.client}
                  </span>
                  <h3 className="text-xl font-bold text-[#F4F7FB] font-display group-hover:text-[#38BDF8] transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#AAB4C3] font-light line-clamp-2 leading-relaxed mb-5">
                    {project.overview}
                  </p>

                  {/* Services Provided Tags */}
                  <div className="pt-4 border-t border-[rgba(255,255,255,0.04)]">
                    <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-2 font-semibold">
                      Services Provided:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.servicesProvided.map((service) => (
                        <span
                          key={service}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-[#0E1217] border border-[rgba(255,255,255,0.04)] text-[#AAB4C3]"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action Bar */}
              <div className="px-6 sm:px-7 pb-6 pt-2">
                <Link
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#2F80ED] group-hover:text-[#38BDF8] transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
