import PricingSection from '../sections/PricingSection';
import FAQSection from '../sections/FAQSection';
import { Shield, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';

export default function PricingPage() {
  const perks = [
    {
      icon: Shield,
      title: 'Full IP & Code Transfer',
      desc: '100% intellectual property rights, repository commits, and design source files transfer to your team upon delivery.'
    },
    {
      icon: Sparkles,
      title: 'No Junior Hand-offs',
      desc: 'Direct execution by senior creative engineers and media strategists led personally by Founder & CEO Bahar Ali.'
    },
    {
      icon: CheckCircle2,
      title: 'Milestone SLA Timelines',
      desc: 'Milestone schedules locked with sprint accountability, weekly video reviews, and guaranteed on-time releases.'
    },
    {
      icon: MessageSquare,
      title: 'Direct WhatsApp & Slack Pod',
      desc: 'Real-time asynchronous communication without ticket queues or slow bureaucratic agency layers.'
    }
  ];

  return (
    <div id="pricing-page" className="pt-32 pb-24 bg-[#11151C]">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-semibold text-[#2F80ED]">
            // INVESTMENT MODELS & TRANSPARENCY
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F4F7FB] leading-[1.05] font-display max-w-5xl mb-6">
          Predictable, Value-Driven Investment Tiers Engineered For Scale.
        </h1>
        <p className="text-lg sm:text-xl text-[#AAB4C3] font-light max-w-3xl leading-relaxed">
          No hidden hourly billings, no surprises. Transparent milestone sprints designed to deliver high-converting websites, viral media, and automated workflows on time and within budget.
        </p>
      </section>

      {/* Embedded Pricing Section */}
      <PricingSection />

      {/* Studio Guarantees */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 my-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
            PARTNERSHIP COMMITMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FB] font-display mt-2">
            Why Category Leaders Rely On GrafiwebPk
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.title} 
                className="p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:border-[#2F80ED]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#2F80ED] mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#F4F7FB] font-display mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#AAB4C3] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Embedded FAQ Section */}
      <FAQSection />
    </div>
  );
}
