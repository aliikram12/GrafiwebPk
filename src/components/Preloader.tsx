import { useEffect, useState, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../utils/animations';

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation with GSAP
    if (!prefersReducedMotion() && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
      );
    }

    // Quick smooth progress counter up to 100% in ~500ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 20) + 16;
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 180);

      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
      }, 550);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress, onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      id="preloader-overlay"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#11151C] transition-all duration-450 ease-out ${
        isFinished ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Neumorphic Centered Card Surface */}
      <div 
        ref={cardRef}
        className="flex flex-col items-center max-w-sm w-full mx-6 p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-8px_-8px_24px_rgba(255,255,255,0.025),10px_10px_30px_rgba(0,0,0,0.7)]"
      >
        <div className="preloader-logo flex flex-col items-center text-center mb-6">
          <img
            src="/logo.jpg"
            alt="GrafiwebPk"
            className="h-14 w-auto max-w-[220px] rounded-xl object-contain"
          />
          <div className="mt-3">
            <h2 className="text-2xl font-black tracking-tight text-[#F4F7FB] font-display">
              Grafiweb<span className="text-[#2F80ED]">Pk</span>
            </h2>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#AAB4C3] font-mono mt-1">
              Digital Creative & AI Agency
            </p>
          </div>
        </div>

        {/* Minimal Neumorphic Inset Progress Bar */}
        <div className="w-full h-2 rounded-full bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.8),inset_-1px_-1px_3px_rgba(255,255,255,0.02)] overflow-hidden p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#2F80ED] to-[#38BDF8] transition-all duration-120 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Label */}
        <div className="mt-3 flex justify-between w-full text-[11px] font-mono text-[#64748B]">
          <span>INITIALIZING</span>
          <span className="text-[#F4F7FB] font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
