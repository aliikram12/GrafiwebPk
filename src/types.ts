export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  category: 'Web & Digital' | 'Creative & Design' | 'Social Media' | 'YouTube' | 'AI Solutions' | 'Digital Marketing';
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tags: string[];
  image: string;
  heroHeadline?: string;
  heroSubtitle?: string;
  ctaText?: string;
  deliverables: string[];
  features: string[];
  processSteps: { title: string; desc: string }[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: 'Websites' | 'Branding' | 'Social Media' | 'YouTube' | 'AI' | 'Creative';
  client: string;
  year: string;
  tags: string[];
  image: string;
  gallery: string[];
  overview: string;
  challenge: string;
  solution: string;
  servicesProvided: string[];
  results: { metric: string; label: string }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatar: string;
  rating: number;
  projectCategory: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular: boolean;
  features: { text: string; included: boolean }[];
  ctaText: string;
}

export interface FAQItemData {
  id: string;
  number: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  isFounder?: boolean;
  socials: { twitter?: string; linkedin?: string; github?: string; whatsapp?: string };
}

