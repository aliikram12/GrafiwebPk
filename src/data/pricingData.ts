import { PricingPlan } from '../types';

export const pricingData: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Launch & Brand Pack',
    badge: 'Essential Growth',
    description: 'Perfect for startups, new businesses, and creators needing a high-impact web launch and complete brand identity.',
    monthlyPrice: 500,
    yearlyPrice: 400, // 20% discount
    popular: false,
    ctaText: 'Get Started With Launch',
    features: [
      { text: 'Custom 5-Page High-Conversion Website', included: true },
      { text: 'Complete Brand Identity & Vector Logo Suite', included: true },
      { text: 'Mobile-First Responsive UI/UX Architecture', included: true },
      { text: 'On-Page SEO & Fast Core Web Vitals Optimization', included: true },
      { text: 'Contact & WhatsApp Direct Integration', included: true },
      { text: 'Social Media Management & Content Engine', included: false },
      { text: 'YouTube Thumbnail & Growth Suite', included: false },
      { text: 'Custom AI Automation & Workflow Pipelines', included: false }
    ]
  },
  {
    id: 'growth',
    name: 'Growth & Omnichannel',
    badge: 'Most Popular',
    description: 'Our flagship full-stack growth tier combining custom web design, daily social media execution, and YouTube scaling.',
    monthlyPrice: 1000,
    yearlyPrice: 800,
    popular: true,
    ctaText: 'Scale With Growth',
    features: [
      { text: 'Bespoke Modern Web Application / Corporate Site', included: true },
      { text: 'Full Social Media Management (16 Posts + Stories / Mo)', included: true },
      { text: 'High-CTR YouTube Thumbnails & Metadata Optimization', included: true },
      { text: 'AI Content Generation & Custom Prompt Systems', included: true },
      { text: 'Lead Generation Funnel & Conversion Tracking', included: true },
      { text: 'Weekly Performance Analytics & Direct WhatsApp Pod', included: true },
      { text: 'Bi-Weekly Strategy Sessions with Bahar Ali', included: true },
      { text: 'Enterprise Bespoke AI Autonomous Agents', included: false }
    ]
  },
  {
    id: 'enterprise',
    name: 'Agency Powerhouse',
    badge: 'Full Suite & AI',
    description: 'Autonomous creative and technology engine for high-volume creators, multi-brand companies, and enterprise ventures.',
    monthlyPrice: 2500,
    yearlyPrice: 2000,
    popular: false,
    ctaText: 'Consult With Bahar Ali',
    features: [
      { text: 'Unlimited Creative Deliverables & Graphic Design', included: true },
      { text: 'End-to-End YouTube Production, Scripts & Thumbnails', included: true },
      { text: 'Omnichannel Social Media (Instagram, Facebook, LinkedIn)', included: true },
      { text: 'Custom AI Workflows & Multi-Step CRM Automations', included: true },
      { text: 'Dedicated Lead Designer & Senior Web Engineer', included: true },
      { text: 'Guaranteed 2-Hour Response Time SLA', included: true },
      { text: 'Ad Creative Strategy & High-ROI Campaigns', included: true },
      { text: 'Direct Executive Line with CEO Bahar Ali', included: true }
    ]
  }
];

