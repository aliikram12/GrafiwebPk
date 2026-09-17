import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { blogData } from '../data/blogData';

export default function BlogSection() {
  return (
    <section 
      id="blog-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="// INSIGHTS & METHODOLOGY"
          title="Explore Modern Web, Media & AI Innovations"
          highlightWord="Innovations"
          description="Tactical essays, design breakdowns, and growth frameworks straight from the GrafiwebPk creative engineering team."
          align="split"
          action={
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase font-mono font-bold tracking-wider text-[#2F80ED] hover:text-[#38BDF8] transition-colors"
            >
              <span>View All Publications</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          }
        />

        {/* 3-Column Editorial Cards - Neumorphic Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
          {blogData.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:border-[#2F80ED]/30 overflow-hidden transition-all duration-300"
            >
              <div>
                {/* Blog Image Frame */}
                <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-[#0E1217]">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171D26] via-transparent to-transparent opacity-80" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-lg text-[10px] font-mono uppercase font-bold bg-[#11151C]/90 text-[#38BDF8] border border-[rgba(255,255,255,0.05)] shadow-sm">
                    {post.category}
                  </span>
                </Link>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-4 text-xs font-mono text-[#64748B] mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#2F80ED]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-[#F4F7FB] font-display group-hover:text-[#38BDF8] transition-colors duration-300 leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-xs sm:text-sm text-[#AAB4C3] font-light line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748B]">
                  By {post.author.name}
                </span>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#2F80ED] group-hover:text-[#38BDF8] transition-colors"
                >
                  <span>Read</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
