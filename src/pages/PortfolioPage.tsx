import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categories = ['ALL', 'WEBSITES', 'BRANDING', 'SOCIAL MEDIA', 'YOUTUBE', 'AI', 'CREATIVE'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filtered = activeCategory === 'ALL'
    ? portfolioData
    : portfolioData.filter((item) => item.category.toUpperCase() === activeCategory);

  return (
    <div id="portfolio-page" className="pt-32 pb-24 bg-[#11151C]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-semibold text-[#2F80ED]">
            // PORTFOLIO ARCHIVE & PROVEN WORK
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F4F7FB] leading-[1.05] font-display max-w-5xl mb-6">
          Selected Case Studies, High-Growth Media & AI Systems.
        </h1>
        <p className="text-lg sm:text-xl text-[#AAB4C3] font-light max-w-3xl leading-relaxed">
          Explore how GrafiwebPk engineers high-converting web experiences, viral media assets, and intelligent automation for ambitious creators and founders.
        </p>

        {/* Filter Pills - Neumorphic States */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold tracking-wider transition-all duration-300 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-[#0E1217] text-[#2F80ED] border border-[#2F80ED]/40 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7),inset_-1px_-1px_3px_rgba(255,255,255,0.02)]'
                    : 'bg-[#171D26] text-[#AAB4C3] hover:text-[#F4F7FB] border border-[rgba(255,255,255,0.04)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.45)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid Showcase - Neumorphic Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filtered.map((project) => (
            <div key={project.id} className="group">
              <Link
                to={`/portfolio/${project.id}`}
                data-cursor="view"
                className="block rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] bg-[#171D26] shadow-[-5px_-5px_14px_rgba(255,255,255,0.02),6px_6px_18px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:border-[#2F80ED]/30 transition-all duration-400"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-[#0E1217]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-[#11151C]/40 to-transparent opacity-85" />

                  <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
                    <span className="px-3 py-1 rounded-lg text-[11px] font-mono uppercase bg-[#171D26]/90 text-[#38BDF8] border border-[rgba(255,255,255,0.05)] font-bold">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-[#AAB4C3] bg-[#171D26]/90 border border-[rgba(255,255,255,0.05)]">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#2F80ED] block mb-1 font-bold">
                        {project.client}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F4F7FB] font-display">
                        {project.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.06)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.5)] flex items-center justify-center text-[#2F80ED] group-hover:text-[#38BDF8] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-[rgba(255,255,255,0.04)] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-[#0E1217] border border-[rgba(255,255,255,0.04)] text-[#AAB4C3]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-[#2F80ED] font-mono uppercase font-bold flex items-center gap-1 group-hover:text-[#38BDF8]">
                    View Case Study →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
