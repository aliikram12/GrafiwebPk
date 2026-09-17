import { useState, useEffect, useRef } from 'react';
import { Compass, Lightbulb, Palette, Code2, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { gsap, prefersReducedMotion, cardStaggerReveal } from '../utils/animations';

interface Step {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: typeof Compass;
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand the business, audience and goals.',
      description: 'We perform deep-dive discovery into your industry, target customers, commercial objectives, and competitor landscape to identify high-leverage digital opportunities.',
      deliverables: ['Stakeholder Goal Mapping', 'Audience Pain Point Analysis', 'Competitor Differentiation Map', 'Project Scope & Roadmap'],
      icon: Compass
    },
    {
      number: '02',
      title: 'Strategize',
      tagline: 'Create the right digital and creative strategy.',
      description: 'We construct a customized strategy tailored for your brand: information architecture, messaging hooks, funnel conversion paths, and technology stack selection.',
      deliverables: ['Information Architecture', 'Editorial Content Pillars', 'Conversion Funnel Blueprint', 'Technical Specification'],
      icon: Lightbulb
    },
    {
      number: '03',
      title: 'Design',
      tagline: 'Build the visual direction and user experience.',
      description: 'Our design squad creates high-contrast, modern UI/UX layouts, striking brand marks, high-CTR YouTube thumbnails, and social creatives that demand immediate attention.',
      deliverables: ['Figma High-Fidelity UI Layouts', 'Brand Identity Guidelines', 'Responsive Mobile Prototypes', 'Visual Asset Libraries'],
      icon: Palette
    },
    {
      number: '04',
      title: 'Develop',
      tagline: 'Turn the concept into a functional digital solution.',
      description: 'We write clean, modular, and fast code using React, TypeScript, and modern frameworks while integrating automated WhatsApp and CRM pipelines.',
      deliverables: ['Responsive Frontend Engineering', 'API & WhatsApp Bot Integration', 'Core Web Vitals Speed Tuning', 'Automated Lead Routing'],
      icon: Code2
    },
    {
      number: '05',
      title: 'Launch',
      tagline: 'Test, optimize and launch.',
      description: 'Exhaustive cross-device quality assurance, SEO benchmarking, and smooth deployment to production hosting with zero downtime.',
      deliverables: ['Cross-Device QA & Mobile Testing', 'Technical SEO & Metadata Check', 'Production Server Deployment', 'Client Handoff & Walkthrough'],
      icon: Rocket
    },
    {
      number: '06',
      title: 'Grow',
      tagline: 'Improve, manage and scale the digital presence.',
      description: 'Continuous growth partnership: active social media management, regular YouTube uploads, A/B testing, and operational AI automations that scale your business.',
      deliverables: ['Ongoing Social Media Publishing', 'YouTube Channel Management', 'Conversion Rate Optimization', 'Performance Analytics Reports'],
      icon: TrendingUp
    }
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (pillsRef.current) {
        const pills = pillsRef.current.querySelectorAll('.process-pill');
        cardStaggerReveal(pillsRef.current, Array.from(pills), { stagger: 0.08, start: 'top 82%' });
      }

      if (detailRef.current) {
        gsap.fromTo(
          detailRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1, y: 0,
            duration: 0.9, ease: 'power3.out',
            scrollTrigger: {
              trigger: detailRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion() || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
    );
  }, [activeStep]);

  return (
    <section 
      ref={sectionRef}
      id="process-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="// HOW WE WORK"
          title="A Structured 6-Phase Process Built For Predictable Results"
          highlightWord="Process"
          description="From initial discovery to continuous digital scaling, every milestone is executed with precision, transparency, and high velocity."
          align="split"
        />

        {/* 6-Step Navigation Pills - Neumorphic States */}
        <div ref={pillsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`process-pill p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer relative overflow-hidden focus:outline-none ${
                  isActive
                    ? 'bg-[#0E1217] border border-[#2F80ED]/50 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.7),inset_-2px_-2px_6px_rgba(255,255,255,0.02)]'
                    : 'bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),3px_3px_8px_rgba(0,0,0,0.45)] hover:border-[rgba(255,255,255,0.08)] text-[#AAB4C3]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold transition-colors ${isActive ? 'text-[#2F80ED]' : 'text-[#64748B]'}`}>
                    {step.number}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]" />}
                </div>
                <p className={`text-xs font-bold transition-colors ${isActive ? 'text-[#F4F7FB]' : 'text-[#AAB4C3]'}`}>
                  {step.title}
                </p>
                {/* Active indicator bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#2F80ED] transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Detailed Display Box for Active Step - Raised Neumorphic Surface */}
        <div ref={detailRef} className="p-8 sm:p-12 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-6px_-6px_16px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_4px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#2F80ED]">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
                    PHASE {current.number} // {current.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-[#F4F7FB] font-display mt-0.5">
                    {current.number} — {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#AAB4C3] leading-relaxed font-light">
                {current.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs uppercase font-mono tracking-wider text-[#F4F7FB] mb-3 font-semibold">
                  Core Phase Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#AAB4C3]">
                      <CheckCircle2 className="w-4 h-4 text-[#2F80ED] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary Block (5 cols) - Inset Neumorphic Surface */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.7),inset_-1px_-1px_3px_rgba(255,255,255,0.02)] space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#64748B] block">
                PHASE PROTOCOL GUARANTEE
              </span>
              <h4 className="text-base font-bold text-[#F4F7FB] font-display">
                Weekly Milestone Verification
              </h4>
              <p className="text-xs text-[#AAB4C3] leading-relaxed font-light">
                You never wait until the end of a project to see what we’ve built. Every Friday, Bahar Ali and the team provide staging links and asset walkthroughs for review.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/923271847673"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary inline-flex items-center justify-center w-full py-3 rounded-xl text-xs uppercase tracking-wider font-bold"
                >
                  Start Phase 01 Discover →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
