import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock, Search } from 'lucide-react';
import { blogData } from '../data/blogData';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');

  const allTags = ['ALL', 'Branding', 'WebGL', 'Design Systems', 'Motion', 'Architecture'];

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'ALL' || post.tags.includes(selectedTag) || post.category.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div id="blog-page" className="pt-32 pb-24 bg-[#11151C]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-semibold text-[#2F80ED]">
            // THOUGHT LEADERSHIP & INSIGHTS
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F4F7FB] leading-[1.05] font-display max-w-5xl mb-6">
          The GrafiwebPk Journal: Perspectives on design, engineering, and digital growth.
        </h1>
        <p className="text-lg sm:text-xl text-[#AAB4C3] font-light max-w-3xl leading-relaxed">
          Deep dives into modern frontend architecture, high-CTR thumbnail strategy, design tokenization, and AI automation.
        </p>

        {/* Search & Tag Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center mt-12 pt-8 border-t border-[rgba(255,255,255,0.04)]">
          {/* Tags - Neumorphic Pills */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer focus:outline-none ${
                  selectedTag === tag
                    ? 'bg-[#0E1217] text-[#2F80ED] border border-[#2F80ED]/40 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.7)]'
                    : 'bg-[#171D26] text-[#AAB4C3] hover:text-[#F4F7FB] border border-[rgba(255,255,255,0.04)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.4)]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Inset Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays..."
              className="neu-input w-full pl-10 pr-4 py-2 rounded-xl text-xs"
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 text-[#64748B] font-mono text-sm">
            No publications found matching your search term.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:border-[#2F80ED]/30 overflow-hidden transition-all duration-300"
              >
                <div>
                  <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-[#0E1217]">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-104"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171D26] via-transparent to-transparent opacity-80" />

                    <span className="absolute top-4 left-4 px-3 py-1 rounded-lg text-[10px] font-mono uppercase bg-[#11151C]/90 text-[#38BDF8] border border-[rgba(255,255,255,0.05)] font-bold">
                      {post.category}
                    </span>
                  </Link>

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

                    <h3 className="text-lg sm:text-xl font-bold text-[#F4F7FB] font-display leading-snug group-hover:text-[#38BDF8] transition-colors mb-3">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-[#AAB4C3] font-light leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-[rgba(255,255,255,0.06)]"
                    />
                    <div>
                      <p className="text-xs font-semibold text-[#F4F7FB]">
                        {post.author.name}
                      </p>
                      <p className="text-[10px] font-mono text-[#64748B]">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="w-9 h-9 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.06)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.5)] text-[#2F80ED] flex items-center justify-center transition-colors group-hover:text-[#38BDF8]"
                    aria-label={`Read article: ${post.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
