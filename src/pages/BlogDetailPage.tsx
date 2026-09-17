import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Twitter, Linkedin } from 'lucide-react';
import { blogData } from '../data/blogData';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogData.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div id="blog-detail-page" className="pt-32 pb-24 bg-[#11151C]">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#AAB4C3] hover:text-[#2F80ED] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Publications</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3.5 py-1 rounded-xl text-xs font-mono uppercase bg-[#171D26] text-[#38BDF8] border border-[rgba(255,255,255,0.06)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.4)] font-bold">
            {post.category}
          </span>
          <div className="flex items-center gap-4 text-xs font-mono text-[#64748B]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#2F80ED]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
              {post.readTime}
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4F7FB] font-display leading-[1.1] mb-8">
          {post.title}
        </h1>

        {/* Author Bar */}
        <div className="flex items-center justify-between py-6 border-y border-[rgba(255,255,255,0.04)]">
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border border-[rgba(255,255,255,0.06)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.4)]"
            />
            <div>
              <p className="text-sm font-bold text-[#F4F7FB]">
                {post.author.name}
              </p>
              <p className="text-xs text-[#AAB4C3] font-mono">
                {post.author.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.4)] flex items-center justify-center text-[#AAB4C3] hover:text-[#2F80ED] transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.4)] flex items-center justify-center text-[#AAB4C3] hover:text-[#2F80ED] transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Featured Banner Image */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] aspect-[16/9] shadow-[-6px_-6px_18px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)] bg-[#171D26]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 space-y-8 text-base sm:text-lg text-[#AAB4C3] font-light leading-relaxed mb-20">
        {post.content.map((paragraph, i) => (
          <p key={i} className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#2F80ED] first-letter:mr-2 first-letter:float-left first-letter:font-display">
            {paragraph}
          </p>
        ))}

        {/* Tags */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.04)] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono uppercase text-[#64748B] mr-2">Tags:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0E1217] border border-[rgba(255,255,255,0.04)] text-[#AAB4C3]">
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 border-t border-[rgba(255,255,255,0.04)]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
              CONTINUE READING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FB] font-display mt-1">
              Related Perspectives
            </h3>
          </div>
          <Link
            to="/blog"
            className="text-xs font-mono uppercase text-[#AAB4C3] hover:text-[#2F80ED] transition-colors flex items-center gap-1"
          >
            <span>All Articles</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {related.map((item) => (
            <Link
              key={item.id}
              to={`/blog/${item.slug}`}
              className="group block p-6 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:border-[#2F80ED]/30 transition-all"
            >
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-[#0E1217]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
              </div>
              <span className="text-xs font-mono text-[#38BDF8] uppercase block mb-1 font-bold">
                {item.category}
              </span>
              <h4 className="text-xl font-bold text-[#F4F7FB] font-display group-hover:text-[#2F80ED] transition-colors">
                {item.title}
              </h4>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
