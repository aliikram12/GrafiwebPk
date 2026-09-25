import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
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
import { portfolioData } from '../data/portfolioData';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedProjects = portfolioData.slice(0, 2);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-7 h-7 text-[#2F80ED]" />;
      case 'Palette': return <Palette className="w-7 h-7 text-[#38BDF8]" />;
      case 'Share2': return <Share2 className="w-7 h-7 text-[#2F80ED]" />;
      case 'Video': return <Video className="w-7 h-7 text-red-500" />;
      case 'Bot': return <Bot className="w-7 h-7 text-[#38BDF8]" />;
      case 'Cpu': return <Cpu className="w-7 h-7 text-[#2F80ED]" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-7 h-7 text-[#38BDF8]" />;
      case 'LayoutGrid': return <LayoutGrid className="w-7 h-7 text-[#2F80ED]" />;
      case 'Smartphone': return <Smartphone className="w-7 h-7 text-[#2F80ED]" />;
      default: return <Code2 className="w-7 h-7 text-[#2F80ED]" />;
    }
  };

  return (
    <div id="service-detail-page" className="bg-[#11151C]">
      {/* Service Hero Header with Background Image & Dark Overlay */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 overflow-hidden border-b border-[rgba(255,255,255,0.05)] mb-16 lg:mb-24">
        {/* Background Image with Black Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#11151C]/80 via-[#11151C]/90 to-[#11151C]" />
          <div className="absolute inset-0 bg-agency-grid opacity-25" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#AAB4C3] hover:text-[#2F80ED] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Capabilities</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.06)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),3px_3px_8px_rgba(0,0,0,0.5)] flex items-center justify-center">
              {getIcon(service.iconName)}
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#38BDF8] tracking-widest font-bold">
                GRAFIWEBPK // CAPABILITY {service.number}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4F7FB] font-display leading-[1.05]">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-base sm:text-xl text-[#AAB4C3] font-light max-w-4xl leading-relaxed mt-4">
            {service.fullDesc}
          </p>

          {/* Action Pills */}
          <div className="flex flex-wrap items-center gap-3.5 mt-8">
            <a
              href={`https://wa.me/923271847673?text=Hi%20Bahar%20Ali,%20I%20want%20to%20discuss%20${encodeURIComponent(service.title)}%20with%20GrafiwebPk.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consult Bahar Ali on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <span>Request Written Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Hero Image Showcase Frame */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] aspect-[21/9] relative bg-[#171D26] shadow-[-6px_-6px_18px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11151C]/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Deliverables & Features Grid */}
      <section className="py-20 bg-[#11151C] border-y border-[rgba(255,255,255,0.04)] mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Deliverables - Neumorphic Surface */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-5px_-5px_14px_rgba(255,255,255,0.025),6px_6px_18px_rgba(0,0,0,0.6)]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2F80ED] font-bold block mb-2">
                WHAT WE SHIP
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F7FB] font-display mb-6">
                Scope Deliverables
              </h3>
              <ul className="space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#AAB4C3]">
                    <div className="w-5 h-5 rounded-full bg-[#0E1217] text-[#2F80ED] flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.6)]">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance Features - Neumorphic Surface */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-5px_-5px_14px_rgba(255,255,255,0.025),6px_6px_18px_rgba(0,0,0,0.6)]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold block mb-2">
                STANDARD OF EXCELLENCE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F7FB] font-display mb-6">
                Guaranteed Benchmarks
              </h3>
              <ul className="space-y-4">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-[#AAB4C3]">
                    <div className="w-5 h-5 rounded-full bg-[#0E1217] text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.6)]">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Execution */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <span className="text-xs font-mono uppercase tracking-wider text-[#2F80ED] font-bold block mb-2">
          EXECUTION METHODOLOGY
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FB] font-display mb-12">
          How We Execute {service.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step, idx) => (
            <div
              key={step.title}
              className="p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_12px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:border-[#2F80ED]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-black text-[#2F80ED] block mb-4">
                  0{idx + 1}
                </span>
                <h4 className="text-lg font-bold text-[#F4F7FB] font-display mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#AAB4C3] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Works Showcase */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
              PROVEN OUTCOMES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FB] font-display mt-1">
              Related Case Studies
            </h3>
          </div>
          <Link
            to="/portfolio"
            className="text-xs font-mono uppercase text-[#AAB4C3] hover:text-[#2F80ED] transition-colors flex items-center gap-1"
          >
            <span>All Case Studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedProjects.map((p) => (
            <Link
              key={p.id}
              to={`/portfolio/${p.id}`}
              className="group block rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] bg-[#171D26] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:border-[#2F80ED]/30 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-[#0E1217]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171D26] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#38BDF8] uppercase font-bold">
                      {p.category}
                    </span>
                    <h4 className="text-xl font-bold text-[#F4F7FB] font-display">
                      {p.title}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#11151C]/80 border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-[#F4F7FB] group-hover:text-[#2F80ED] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Inquiry Box */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="p-12 sm:p-16 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-6px_-6px_18px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FB] font-display mb-4">
            Engage GrafiwebPk for {service.title}
          </h2>
          <p className="text-base text-[#AAB4C3] max-w-xl mx-auto mb-8 font-light">
            Founder Bahar Ali and our specialized engineers are ready to build your tailored roadmap and deliver measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/923271847673?text=Hi%20Bahar%20Ali,%20I%20am%20ready%20to%20start%20${encodeURIComponent(service.title)}%20with%20GrafiwebPk.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Consultation</span>
            </a>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <span>Submit Formal Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
