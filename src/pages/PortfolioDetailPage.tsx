import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Quote, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PortfolioDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const currentIndex = portfolioData.findIndex((p) => p.slug === slug || p.id === slug);

  if (currentIndex === -1) {
    return <Navigate to="/portfolio" replace />;
  }

  const project = portfolioData[currentIndex];
  const nextProject = portfolioData[(currentIndex + 1) % portfolioData.length];

  return (
    <div id="portfolio-detail-page" className="pt-32 pb-24 bg-[#11151C]">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#AAB4C3] hover:text-[#2F80ED] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </Link>
      </div>

      {/* Case Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3.5 py-1 rounded-xl text-xs font-mono uppercase bg-[#171D26] text-[#38BDF8] border border-[rgba(255,255,255,0.06)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.4)] font-bold">
            {project.category}
          </span>
          <span className="text-xs font-mono text-[#64748B]">
            Delivered in {project.year}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4F7FB] font-display leading-[1.05] max-w-5xl mb-8">
          {project.title}
        </h1>

        {/* Project Meta Bar - Inset Neumorphic Surface */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_4px_rgba(0,0,0,0.7)] text-xs sm:text-sm font-mono">
          <div>
            <span className="text-[#64748B] uppercase block mb-1">Client</span>
            <span className="text-[#F4F7FB] font-semibold">{project.client}</span>
          </div>
          <div>
            <span className="text-[#64748B] uppercase block mb-1">Category</span>
            <span className="text-[#38BDF8] font-semibold">{project.category}</span>
          </div>
          <div>
            <span className="text-[#64748B] uppercase block mb-1">Year</span>
            <span className="text-[#F4F7FB] font-semibold">{project.year}</span>
          </div>
          <div>
            <span className="text-[#64748B] uppercase block mb-1">Core Stack</span>
            <span className="text-[#F4F7FB] font-semibold">{project.technologies.slice(0, 2).join(', ')}</span>
          </div>
        </div>
      </section>

      {/* Hero Visual Display - Neumorphic Frame */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] aspect-[16/9] lg:aspect-[21/9] shadow-[-6px_-6px_18px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)] relative bg-[#171D26]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Overview, Challenge, and Solution */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2F80ED] font-bold block mb-2">
                PROJECT CONTEXT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FB] font-display mb-4">
                Executive Overview
              </h2>
              <p className="text-base sm:text-lg text-[#AAB4C3] font-light leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold block">
                THE CHALLENGE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F4F7FB] font-display">
                Strategic Bottleneck
              </h3>
              <p className="text-sm sm:text-base text-[#AAB4C3] font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                THE EXECUTION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F4F7FB] font-display">
                Engineered Solution & Outcomes
              </h3>
              <p className="text-sm sm:text-base text-[#AAB4C3] font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Side Results & Stack (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] space-y-6">
              <h3 className="text-lg font-bold text-[#F4F7FB] font-display">
                Quantified Growth Metrics
              </h3>
              <div className="space-y-4">
                {project.results.map((res) => (
                  <div key={res.label} className="p-4 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]">
                    <span className="text-3xl font-black text-[#2F80ED] font-display block">
                      {res.metric}
                    </span>
                    <span className="text-xs text-[#AAB4C3] font-mono mt-1 block">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] space-y-4">
              <h4 className="text-xs uppercase font-mono text-[#F4F7FB] font-bold">
                Technologies & Deliverables
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0E1217] border border-[rgba(255,255,255,0.04)] text-[#AAB4C3]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_12px_rgba(0,0,0,0.5)] space-y-3">
              <p className="text-xs font-bold text-[#F4F7FB] font-display">Want similar results for your business?</p>
              <p className="text-xs text-[#AAB4C3]">Discuss this exact blueprint directly with Bahar Ali.</p>
              <a
                href={`https://wa.me/923271847673?text=Hi%20Bahar,%20I%20reviewed%20the%20${encodeURIComponent(project.title)}%20case%20study%20and%20want%20to%20achieve%20similar%20results.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2F80ED] font-bold block mb-4">
            VISUAL IMMERSION & ARTIFACTS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.slice(1).map((imgUrl, i) => (
              <div key={i} className="rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] aspect-[16/10] bg-[#171D26] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)]">
                <img
                  src={imgUrl}
                  alt={`${project.title} detail view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Client Testimonial if exists */}
      {project.testimonial && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-5px_-5px_14px_rgba(255,255,255,0.02),6px_6px_18px_rgba(0,0,0,0.6)] relative">
            <Quote className="w-12 h-12 text-[#2F80ED]/30 mb-4" />
            <blockquote className="text-xl sm:text-2xl font-medium text-[#F4F7FB] font-display mb-6">
              "{project.testimonial.quote}"
            </blockquote>
            <div>
              <p className="text-base font-bold text-[#F4F7FB]">
                {project.testimonial.author}
              </p>
              <p className="text-xs text-[#38BDF8] font-mono">
                {project.testimonial.role}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Next Project Teaser */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 border-t border-[rgba(255,255,255,0.04)]">
        <Link
          to={`/portfolio/${nextProject.slug}`}
          className="group block p-8 sm:p-12 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:border-[#2F80ED]/40 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
                NEXT CASE STUDY →
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FB] font-display mt-2 group-hover:text-[#2F80ED] transition-colors">
                {nextProject.title}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.06)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.5)] text-[#2F80ED] flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
