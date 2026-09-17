import React, { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../utils/animations';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlightWord?: string;
  description?: string;
  align?: 'left' | 'center' | 'split';
  action?: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlightWord,
  description,
  align = 'left',
  action,
  className = ''
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = [eyebrowRef.current, titleRef.current, descRef.current].filter(Boolean);
      
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-[#2F80ED] inline-block">{highlightWord}</span>
        {parts.slice(1).join(highlightWord)}
      </>
    );
  };

  if (align === 'split') {
    return (
      <div ref={containerRef} className={`mb-12 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end ${className}`}>
        <div className="lg:col-span-7">
          <div ref={eyebrowRef} className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#2F80ED]">
              {eyebrow}
            </span>
          </div>
          <h2 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F4F7FB] leading-[1.1] font-display">
            {renderTitle()}
          </h2>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end">
          {description && (
            <p ref={descRef} className="text-base sm:text-lg text-[#AAB4C3] font-normal leading-relaxed">
              {description}
            </p>
          )}
          {action && <div className="mt-4">{action}</div>}
        </div>
      </div>
    );
  }

  if (align === 'center') {
    return (
      <div ref={containerRef} className={`mb-12 lg:mb-20 text-center max-w-3xl mx-auto ${className}`}>
        <div ref={eyebrowRef} className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.4)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#2F80ED]">
            {eyebrow}
          </span>
        </div>
        <h2 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F4F7FB] leading-[1.15] font-display">
          {renderTitle()}
        </h2>
        {description && (
          <p ref={descRef} className="mt-4 text-base sm:text-lg text-[#AAB4C3] font-normal leading-relaxed">
            {description}
          </p>
        )}
        {action && <div className="mt-6 flex justify-center">{action}</div>}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`mb-12 lg:mb-16 max-w-3xl ${className}`}>
      <div ref={eyebrowRef} className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
        <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#2F80ED]">
          {eyebrow}
        </span>
      </div>
      <h2 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F4F7FB] leading-[1.1] font-display">
        {renderTitle()}
      </h2>
      {description && (
        <p ref={descRef} className="mt-4 text-base sm:text-lg text-[#AAB4C3] font-normal leading-relaxed">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
