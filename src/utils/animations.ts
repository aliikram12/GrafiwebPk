import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// ─── Reduced Motion Detection ───
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─── Core Reveal: Fade Up with ScrollTrigger ───
export const fadeUp = (element: Element | string, delay = 0) => {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 });
    return gsap.timeline();
  }
  return gsap.fromTo(
    element,
    { opacity: 0, y: 36 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay,
      ease: 'power3.out'
    }
  );
};

// ─── Stagger Fade Up ───
export const staggerFadeUp = (elements: Element[] | string, staggerTime = 0.12) => {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return gsap.timeline();
  }
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.85,
      stagger: staggerTime,
      ease: 'power3.out'
    }
  );
};

// ─── Image Reveal (Clip Path) ───
export const imageReveal = (container: Element | string) => {
  if (prefersReducedMotion()) {
    gsap.set(container, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 });
    return gsap.timeline();
  }
  return gsap.fromTo(
    container,
    { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.08 },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      scale: 1,
      duration: 1.2,
      ease: 'power3.inOut'
    }
  );
};

// ─── ScrollTrigger Section Reveal ───
// Call this inside a gsap.context() scope for proper cleanup
export const sectionReveal = (
  container: Element,
  children: string | Element[],
  options?: { stagger?: number; start?: string; y?: number }
) => {
  if (prefersReducedMotion()) {
    gsap.set(children, { opacity: 1, y: 0 });
    return;
  }
  const { stagger = 0.1, start = 'top 82%', y = 50 } = options || {};
  gsap.fromTo(
    children,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: 'play none none none'
      }
    }
  );
};

// ─── Heading Text Reveal (Line by Line) ───
export const headingReveal = (
  trigger: Element,
  lines: (Element | null)[],
  options?: { delay?: number; start?: string }
) => {
  const filtered = lines.filter(Boolean) as Element[];
  if (!filtered.length) return;

  if (prefersReducedMotion()) {
    gsap.set(filtered, { opacity: 1, y: 0 });
    return;
  }

  const { delay = 0, start = 'top 85%' } = options || {};
  gsap.fromTo(
    filtered,
    { opacity: 0, y: 45, skewY: 1.5 },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 0.95,
      stagger: 0.12,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none none'
      }
    }
  );
};

// ─── Card Stagger Reveal ───
export const cardStaggerReveal = (
  trigger: Element,
  cards: Element[] | string,
  options?: { stagger?: number; start?: string }
) => {
  if (prefersReducedMotion()) {
    gsap.set(cards, { opacity: 1, y: 0 });
    return;
  }
  const { stagger = 0.1, start = 'top 80%' } = options || {};
  gsap.fromTo(
    cards,
    { opacity: 0, y: 60, scale: 0.97 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.85,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none none'
      }
    }
  );
};

// ─── Scale In Reveal ───
export const scaleReveal = (
  element: Element | string,
  trigger?: Element,
  options?: { start?: string; delay?: number }
) => {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, scale: 1 });
    return;
  }
  const { start = 'top 82%', delay = 0 } = options || {};
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.92 },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || (element as Element),
        start,
        toggleActions: 'play none none none'
      }
    }
  );
};

// ─── Parallax Scroll Effect ───
export const parallaxScroll = (
  element: Element | string,
  yDistance = -60,
  options?: { trigger?: Element; start?: string; end?: string }
) => {
  if (prefersReducedMotion()) return;
  const { trigger, start = 'top bottom', end = 'bottom top' } = options || {};
  gsap.to(element, {
    y: yDistance,
    ease: 'none',
    scrollTrigger: {
      trigger: trigger || (element as Element),
      start,
      end,
      scrub: 0.8
    }
  });
};

// ─── Counter Animation ───
export const animateCounter = (
  element: HTMLElement,
  endValue: number,
  options?: { duration?: number; trigger?: Element }
) => {
  if (prefersReducedMotion()) {
    element.textContent = endValue.toString();
    return;
  }
  const { duration = 2.2, trigger } = options || {};
  const obj = { val: 0 };
  gsap.to(obj, {
    val: endValue,
    duration,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: trigger || element,
      start: 'top 85%',
      once: true
    },
    onUpdate: () => {
      element.textContent = Math.floor(obj.val).toString();
    }
  });
};
