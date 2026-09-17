import { useState, useEffect, useRef, useCallback } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { faqData } from '../data/faqData';
import { gsap, prefersReducedMotion, cardStaggerReveal } from '../utils/animations';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (accordionRef.current) {
        const items = accordionRef.current.querySelectorAll('.faq-item');
        cardStaggerReveal(accordionRef.current, Array.from(items), { stagger: 0.07, start: 'top 82%' });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = useCallback((index: number) => {
    // Close previous
    if (openIndex !== null && openIndex !== index) {
      const prevRef = answerRefs.current[openIndex];
      if (prevRef && !prefersReducedMotion()) {
        gsap.to(prevRef, { height: 0, opacity: 0, duration: 0.35, ease: 'power3.inOut' });
      }
    }

    if (openIndex === index) {
      // Close current
      const ref = answerRefs.current[index];
      if (ref && !prefersReducedMotion()) {
        gsap.to(ref, { height: 0, opacity: 0, duration: 0.35, ease: 'power3.inOut' });
      }
      setOpenIndex(null);
    } else {
      // Open new
      setOpenIndex(index);
      const ref = answerRefs.current[index];
      if (ref && !prefersReducedMotion()) {
        gsap.set(ref, { height: 'auto', opacity: 1 });
        gsap.from(ref, { height: 0, opacity: 0, duration: 0.4, ease: 'power3.out' });
      }
    }
  }, [openIndex]);

  return (
    <section 
      ref={sectionRef}
      id="faq-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="// FREQUENTLY ASKED"
          title="Clarifying Questions & Project Protocols"
          highlightWord="Questions"
          description="Everything you need to know about our collaboration structure, intellectual property, timelines, and technical standards."
          align="center"
        />

        {/* Accordion Rows - Neumorphic States */}
        <div ref={accordionRef} className="space-y-4 mt-12">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`faq-item rounded-2xl transition-all duration-350 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E1217] border border-[#2F80ED]/40 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.7),inset_-1px_-1px_3px_rgba(255,255,255,0.02)]'
                    : 'bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),3px_3px_10px_rgba(0,0,0,0.5)] hover:border-[rgba(255,255,255,0.08)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className={`font-mono text-xs sm:text-sm font-bold transition-colors duration-300 ${
                      isOpen ? 'text-[#2F80ED]' : 'text-[#64748B]'
                    }`}>
                      {item.number}
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold font-display transition-colors duration-300 ${
                      isOpen ? 'text-[#F4F7FB]' : 'text-[#AAB4C3]'
                    }`}>
                      {item.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'bg-[#2F80ED] text-white shadow-md rotate-180' 
                      : 'bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)] text-[#AAB4C3]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer with GSAP-controlled height */}
                <div
                  ref={(el) => { answerRefs.current[index] = el; }}
                  style={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, overflow: 'hidden' }}
                >
                  <p className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 sm:ml-12 text-sm sm:text-base text-[#AAB4C3] font-light leading-relaxed border-t border-[rgba(255,255,255,0.04)] mt-1">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt - Neumorphic Surface */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#2F80ED]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#F4F7FB]">Have a specific question not covered here?</p>
              <p className="text-xs text-[#AAB4C3] font-mono">Speak directly with Founder & CEO Bahar Ali on WhatsApp.</p>
            </div>
          </div>
          <a
            href="https://wa.me/923271847673?text=Hi%20Bahar,%20I%20have%20a%20question%20about%20GrafiwebPk%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap"
          >
            Ask On WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
