import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowUpRight, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { pricingData } from '../data/pricingData';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section 
      id="pricing-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="// TRANSPARENT INVESTMENT"
          title="Predictable Pricing. Exponential Growth."
          highlightWord="Exponential"
          description="Transparent, value-driven investment tiers structured for ambitious founders, creators, and scaling businesses."
          align="center"
        />

        {/* Monthly / Yearly Billing Toggle - Neumorphic Inset Track */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!isYearly ? 'text-[#F4F7FB]' : 'text-[#AAB4C3]'}`}>
            Monthly Retainer
          </span>

          <button
            type="button"
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-8 rounded-full bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7),inset_-1px_-1px_3px_rgba(255,255,255,0.02)] p-1 cursor-pointer transition-colors focus:outline-none"
            aria-label="Toggle billing frequency"
          >
            <div
              className={`w-6 h-6 rounded-full bg-[#2F80ED] transition-transform duration-300 shadow-md ${
                isYearly ? 'translate-x-6 bg-[#38BDF8]' : 'translate-x-0'
              }`}
            />
          </button>

          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${isYearly ? 'text-[#F4F7FB]' : 'text-[#AAB4C3]'}`}>
              Annual Retainer
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#2F80ED]/15 text-[#38BDF8] border border-[#2F80ED]/30">
              SAVE 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid - Neumorphic Surfaces */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-[#171D26] border border-[#2F80ED]/50 shadow-[-6px_-6px_18px_rgba(255,255,255,0.03),8px_8px_24px_rgba(0,0,0,0.7)] lg:-translate-y-2'
                    : 'bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2F80ED] text-white text-[10px] font-mono uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>MOST POPULAR CHOICE</span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-widest font-mono text-[#2F80ED] font-bold">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-black text-[#F4F7FB] font-display mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#AAB4C3] mt-2 leading-relaxed font-light">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="p-4 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_4px_rgba(0,0,0,0.7)] mb-8 flex items-baseline">
                    <span className="text-3xl sm:text-4xl font-black text-[#F4F7FB] font-display">
                      ${price}
                    </span>
                    <span className="text-xs font-mono text-[#AAB4C3] ml-2">
                      / {isYearly ? 'month (annual billing)' : 'month'}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pb-8">
                    <span className="text-[11px] font-mono uppercase text-[#64748B] block font-semibold mb-3">
                      Package Inclusions:
                    </span>
                    {plan.features.map((feature) => (
                      <div 
                        key={feature.text} 
                        className={`flex items-start gap-2.5 text-xs ${
                          feature.included ? 'text-[#AAB4C3]' : 'text-[#64748B] opacity-60'
                        }`}
                      >
                        <div className="w-4 h-4 rounded bg-[#0E1217] flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.6)]">
                          {feature.included ? (
                            <Check className="w-3 h-3 text-[#2F80ED]" />
                          ) : (
                            <X className="w-3 h-3 text-[#64748B]" />
                          )}
                        </div>
                        <span className={feature.included ? '' : 'line-through'}>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    to="/contact"
                    className={`w-full py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <p className="text-[11px] text-center text-[#64748B] mt-3 font-mono">
                    Direct oversight by Bahar Ali
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
