import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { testimonialsData } from '../data/testimonialsData';
import { gsap, prefersReducedMotion } from '../utils/animations';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonialsData.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const animateSlide = useCallback((direction: 'left' | 'right') => {
    if (prefersReducedMotion() || !quoteRef.current) return;
    const xFrom = direction === 'right' ? 30 : -30;
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, x: xFrom },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
    );
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
    animateSlide('right');
  }, [total, animateSlide]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    animateSlide('left');
  }, [total, animateSlide]);

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 6500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPaused, nextSlide]);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1, y: 0,
            duration: 0.9, ease: 'power3.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <section 
      ref={sectionRef}
      id="testimonial-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="// CLIENT TESTIMONIALS"
          title="Verified Outcomes From Ambitious Partners"
          highlightWord="Outcomes"
          description="Read genuine feedback from founders, creators, and corporate operators who partnered with GrafiwebPk."
          align="split"
        />

        {/* Testimonial Showcase Card - Neumorphic Surface */}
        <div 
          ref={cardRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="p-8 sm:p-14 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-6px_-6px_18px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          {/* Subtle Quote Symbol */}
          <div className="absolute top-8 right-8 text-[rgba(255,255,255,0.03)] pointer-events-none">
            <Quote className="w-24 h-24 stroke-none fill-current" />
          </div>

          <div ref={quoteRef} className="relative z-10 max-w-4xl space-y-6">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#F4F7FB] leading-relaxed font-display">
              "{current.quote}"
            </blockquote>

            {/* Client Info & Metric */}
            <div className="pt-6 border-t border-[rgba(255,255,255,0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] text-[#2F80ED] flex items-center justify-center font-bold text-base font-display">
                  {current.clientName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#F4F7FB] font-display">{current.clientName}</h4>
                  <p className="text-xs text-[#AAB4C3] font-mono">{current.clientRole} • {current.company}</p>
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)] flex items-center gap-2 text-xs font-mono">
                <span className="text-[#64748B]">Impact:</span>
                <span className="text-[#38BDF8] font-bold">{current.projectCategory}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls - Compact Raised Buttons */}
          <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    animateSlide(idx > currentIndex ? 'right' : 'left');
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-8 bg-[#2F80ED]' 
                      : 'w-2 bg-[#0E1217] hover:bg-[#64748B]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.45)] hover:border-[#2F80ED]/30 text-[#AAB4C3] hover:text-[#F4F7FB] flex items-center justify-center transition-all cursor-pointer active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.45)] hover:border-[#2F80ED]/30 text-[#AAB4C3] hover:text-[#F4F7FB] flex items-center justify-center transition-all cursor-pointer active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
