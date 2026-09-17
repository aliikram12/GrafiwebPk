import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Check, 
  Code2, 
  TrendingUp, 
  Sparkles, 
  LayoutGrid, 
  Smartphone,
  Palette,
  Share2,
  Video,
  Bot,
  Cpu,
  MessageCircle
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-[#2F80ED]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#38BDF8]" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-[#2F80ED]" />;
      case 'Video': return <Video className="w-5 h-5 text-red-500" />;
      case 'Bot': return <Bot className="w-5 h-5 text-[#38BDF8]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#2F80ED]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#38BDF8]" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5 text-[#2F80ED]" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#2F80ED]" />;
      default: return <Code2 className="w-5 h-5 text-[#2F80ED]" />;
    }
  };

  return (
    <div id="services-page" className="pt-32 pb-24 bg-[#11151C]">
      {/* Services Hero Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-semibold text-[#2F80ED]">
            // OUR SERVICE CAPABILITIES
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F4F7FB] leading-[1.05] font-display max-w-5xl mb-6">
          Architecting High-Converting Websites, Creative Media & AI Systems.
        </h1>
        <p className="text-lg sm:text-xl text-[#AAB4C3] font-light max-w-3xl leading-relaxed">
          From custom high-performance web development and bold brand identity to high-CTR YouTube growth and automated AI pipelines, discover our full suite of digital agency services.
        </p>
      </section>

      {/* Services Detailed List - Neumorphic Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        {servicesData.map((service) => (
          <div
            key={service.id}
            id={service.slug}
            className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-6px_-6px_18px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)] hover:border-[#2F80ED]/30 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Number, Title, Overview, Tags (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-sm text-[#2F80ED] font-bold">
                    CAPABILITY {service.number}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F7FB] font-display">
                  {service.title}
                </h2>

                <p className="text-base text-[#AAB4C3] font-light leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0E1217] border border-[rgba(255,255,255,0.04)] text-[#AAB4C3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3.5">
                  <Link
                    to={`/services/${service.slug}`}
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider"
                  >
                    <span>Inspect Breakdown</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/923271847673?text=Hi%20Bahar,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-emerald-400 text-xs font-mono uppercase font-bold"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Deliverables & Image (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                {/* Visual Image */}
                <div className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.05)] aspect-[16/9] bg-[#0E1217]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Deliverables Checklist - Inset Surface */}
                <div className="p-6 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_4px_rgba(0,0,0,0.7)] space-y-3">
                  <h4 className="text-xs uppercase font-mono text-[#F4F7FB] font-bold tracking-wider mb-2">
                    Key Deliverables & Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.deliverables.map((del) => (
                      <div key={del} className="flex items-start gap-2 text-xs text-[#AAB4C3]">
                        <Check className="w-3.5 h-3.5 text-[#2F80ED] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 text-center">
        <div className="p-12 sm:p-16 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-6px_-6px_18px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FB] font-display mb-4">
            Need a tailored multi-disciplinary engagement?
          </h2>
          <p className="text-base text-[#AAB4C3] max-w-xl mx-auto mb-8 font-light">
            We assemble custom service packages combining web development, branding, social media, and AI workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923271847673?text=Hi%20Bahar,%20I%20would%20like%20to%20discuss%20a%20custom%20service%20bundle."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp with Bahar Ali</span>
            </a>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <span>Submit Project Request</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
