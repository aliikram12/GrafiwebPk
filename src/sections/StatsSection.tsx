import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion, animateCounter, cardStaggerReveal } from '../utils/animations';

interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      id: 'stat-1',
      value: 50,
      suffix: '+',
      label: 'Projects Delivered',
      sublabel: 'Websites, Brands & Media'
    },
    {
      id: 'stat-2',
      value: 10,
      suffix: '+',
      label: 'Digital Disciplines',
      sublabel: 'Full Agency Capabilities'
    },
    {
      id: 'stat-3',
      value: 100,
      suffix: '%',
      label: 'Client Commitment',
      sublabel: 'Milestone SLA Guaranteed'
    },
    {
      id: 'stat-4',
      value: 24,
      suffix: '/7',
      label: 'Direct Availability',
      sublabel: 'Dedicated WhatsApp Support'
    }
  ];

  useEffect(() => {
    if (prefersReducedMotion()) {
      stats.forEach((stat, index) => {
        const el = countersRef.current[index];
        if (el) el.textContent = stat.value.toString();
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Stagger reveal stat cards
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.stat-card');
        cardStaggerReveal(gridRef.current, Array.from(cards), { stagger: 0.1 });
      }

      // Animate counters
      stats.forEach((stat, index) => {
        const el = countersRef.current[index];
        if (!el) return;
        animateCounter(el, stat.value, { duration: 2 });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="stats-section" 
      className="py-16 lg:py-20 border-y border-[rgba(255,255,255,0.04)] bg-[#11151C] relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="stat-card p-6 sm:p-7 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),3px_3px_10px_rgba(0,0,0,0.5)] hover:border-[#2F80ED]/30 transition-all duration-300 flex flex-col items-start"
            >
              <div className="flex items-baseline text-3xl sm:text-4xl lg:text-5xl font-black text-[#F4F7FB] font-display tracking-tight">
                <span 
                  ref={(el) => { countersRef.current[index] = el; }}
                >
                  0
                </span>
                <span className="text-[#2F80ED] ml-0.5">{stat.suffix}</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#F4F7FB] mt-2">
                {stat.label}
              </h4>
              <p className="text-xs text-[#AAB4C3] mt-0.5 font-mono">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
