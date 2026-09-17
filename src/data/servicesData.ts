import { ServiceItem } from '../types';

export interface ServiceCategoryGroup {
  id: string;
  name: 'Web & Digital' | 'Creative & Design' | 'Social Media' | 'YouTube' | 'AI Solutions' | 'Digital Marketing';
  description: string;
  iconName: string;
  items: string[];
}

export const serviceCategories: ServiceCategoryGroup[] = [
  {
    id: 'cat-web',
    name: 'Web & Digital',
    description: 'Bespoke, high-performance web experiences designed to engage visitors and drive conversions.',
    iconName: 'Code2',
    items: [
      'Web Design',
      'Web Development',
      'Responsive Websites',
      'Landing Pages',
      'UI/UX Design',
      'Website Optimization'
    ]
  },
  {
    id: 'cat-creative',
    name: 'Creative & Design',
    description: 'Iconic visual identities, branding systems, and marketing materials that command attention.',
    iconName: 'Sparkles',
    items: [
      'Graphic Design',
      'Brand Identity',
      'Social Media Designs',
      'Marketing Creatives',
      'Visual Content'
    ]
  },
  {
    id: 'cat-social',
    name: 'Social Media',
    description: 'End-to-end social media growth, viral content systems, and active audience management.',
    iconName: 'Share2',
    items: [
      'Social Media Management',
      'Content Planning',
      'Social Media Strategy',
      'Post Design',
      'Audience Growth',
      'Engagement Management'
    ]
  },
  {
    id: 'cat-youtube',
    name: 'YouTube',
    description: 'Strategic channel management, high-CTR thumbnails, and optimized publishing workflows.',
    iconName: 'Youtube',
    items: [
      'YouTube Channel Management',
      'Video Content Strategy',
      'Thumbnail Design',
      'Content Planning',
      'Channel Optimization',
      'YouTube Branding'
    ]
  },
  {
    id: 'cat-ai',
    name: 'AI Solutions',
    description: 'Intelligent automation, customized prompt engineering, and AI-accelerated creative pipelines.',
    iconName: 'Cpu',
    items: [
      'AI Content Creation',
      'AI Prompt Writing',
      'AI Workflows',
      'AI Automation',
      'AI-Assisted Content',
      'Business Automation',
      'AI Productivity Systems'
    ]
  },
  {
    id: 'cat-marketing',
    name: 'Digital Marketing',
    description: 'Scalable multi-channel acquisition funnels, campaign creative, and conversion optimization.',
    iconName: 'TrendingUp',
    items: [
      'Digital Marketing Strategy',
      'Content Marketing',
      'Social Media Marketing',
      'Campaign Creative',
      'Brand Promotion'
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    slug: 'web-design-development',
    number: '01',
    category: 'Web & Digital',
    title: 'Web Design & Development',
    heroHeadline: 'Websites Designed to Make Your Brand Stand Out.',
    heroSubtitle: 'Build modern, responsive and conversion-focused digital experiences engineered for maximum speed and impact.',
    ctaText: 'Build My Website',
    shortDesc: 'Build modern, responsive websites that represent your brand professionally and turn visitors into clients.',
    fullDesc: 'GrafiwebPk architects and develops custom, responsive, high-converting websites. From single-page landing pages to enterprise web applications, we combine clean modern code, fast load times, and fluid UX to establish an authoritative digital home for your brand.',
    iconName: 'Code2',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'SEO'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Custom Responsive Web Design',
      'Clean Modular Frontend Development',
      'Speed & Core Web Vitals Optimization',
      'Interactive Micro-Animations & State Handling',
      'Conversion Rate Optimization (CRO) Layouts',
      'Search Engine Optimization (SEO) Architecture'
    ],
    features: [
      'Lightning-fast load times under 1 second',
      'Flawlessly tested across mobile, tablet, and 4K displays',
      'Solid dark/light mode architectures',
      'Lead-capture funnels and WhatsApp integration'
    ],
    processSteps: [
      { title: 'Discovery & Requirements', desc: 'Understanding your business model, audience, and key conversion goals.' },
      { title: 'Wireframing & UI Design', desc: 'Crafting high-contrast, modern UI layouts with intuitive user journeys.' },
      { title: 'Frontend Engineering', desc: 'Writing clean, accessible TypeScript code with zero unnecessary bloat.' },
      { title: 'QA & Deployment', desc: 'Rigorous cross-browser testing, SEO audit, and production deployment.' }
    ]
  },
  {
    id: 's2',
    slug: 'graphic-design',
    number: '02',
    category: 'Creative & Design',
    title: 'Graphic Design',
    heroHeadline: 'Visuals That Give Your Brand a Strong Identity.',
    heroSubtitle: 'Creative designs built to communicate your brand clearly and leave an unforgettable visual impression.',
    ctaText: 'Create My Brand',
    shortDesc: 'Create striking visual brand identities, marketing collateral, and creative assets that demand respect.',
    fullDesc: 'We craft comprehensive visual identity systems that separate your brand from competitors. From memorable logos and brand guidelines to high-converting social media creatives and marketing kits, our designs build instant trust and credibility.',
    iconName: 'Sparkles',
    tags: ['Brand Identity', 'Logo Suite', 'Marketing Collateral', 'Social Assets', 'Figma'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Iconic Brand Logo & Responsive Marks',
      'Comprehensive Brand Guidelines & Typography',
      'Social Media Post & Banner Templates',
      'Marketing Collateral, Pitch Decks & Brochures',
      'High-Resolution Vector Production Assets'
    ],
    features: [
      'Cohesive visual language across all platforms',
      'Ready-to-use print and digital vector formats',
      'Modern typography pairings and color schemes',
      'Fast turnaround with structured iteration rounds'
    ],
    processSteps: [
      { title: 'Brand Audit & Moodboarding', desc: 'Exploring aesthetic directions aligned with your target audience.' },
      { title: 'Concept Creation', desc: 'Generating distinct design directions and logo iterations.' },
      { title: 'Refinement & Systematization', desc: 'Finalizing typography scales, color palettes, and component rules.' },
      { title: 'Asset Handoff', desc: 'Delivering organized asset packages ready for web, social, and print.' }
    ]
  },
  {
    id: 's3',
    slug: 'social-media-management',
    number: '03',
    category: 'Social Media',
    title: 'Social Media Management',
    heroHeadline: 'Turn Your Social Presence Into a Strong Brand.',
    heroSubtitle: 'Strategy, content and management designed for consistent digital growth and high audience engagement.',
    ctaText: 'Grow My Socials',
    shortDesc: 'Build consistent social presence through strategy, high-quality creative content, and daily management.',
    fullDesc: 'GrafiwebPk handles your complete social media operations. We plan editorial calendars, design thumb-stopping graphics, write persuasive copy, schedule posts at peak hours, and engage with your community to turn followers into paying customers.',
    iconName: 'Share2',
    tags: ['Instagram', 'Facebook', 'Content Strategy', 'Carousels', 'Audience Growth'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Monthly Content Calendar & Strategic Roadmap',
      'Custom Designed Static & Carousel Posts',
      'Short-Form Video / Reels Direction',
      'Engaging Copywriting & Hashtag Optimization',
      'Active Community Management & Direct Messaging Support',
      'Monthly Performance Analytics & Growth Reports'
    ],
    features: [
      'Consistent posting schedule with zero lapses',
      'Brand-aligned aesthetics tailored for Instagram and Facebook',
      'Active engagement strategies to expand organic reach',
      'Data-backed iterations based on follower behavior'
    ],
    processSteps: [
      { title: 'Channel Audit', desc: 'Analyzing current profile performance, competitor angles, and audience gaps.' },
      { title: 'Content Calendar Creation', desc: 'Planning monthly content pillars, themes, and publication schedules.' },
      { title: 'Design & Copy Production', desc: 'Crafting high-converting graphics and persuasive captions.' },
      { title: 'Publishing & Optimization', desc: 'Publishing during peak engagement windows and analyzing metrics.' }
    ]
  },
  {
    id: 's4',
    slug: 'youtube-management',
    number: '04',
    category: 'YouTube',
    title: 'YouTube Management',
    heroHeadline: 'Build a YouTube Presence People Remember.',
    heroSubtitle: 'Professional channel strategy, creative content, high-CTR thumbnail design, and channel management.',
    ctaText: 'Grow My Channel',
    shortDesc: 'Professional channel strategy, high-CTR thumbnails, SEO optimization, and channel management.',
    fullDesc: 'Transform your YouTube channel into a premier authority and revenue driver. We handle every step after you record: strategic title generation, high-CTR thumbnail design, video SEO, chapter markers, description funnels, and ongoing community retention.',
    iconName: 'Youtube',
    tags: ['YouTube SEO', 'High-CTR Thumbnails', 'Channel Branding', 'Video Strategy'],
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Complete Channel Branding & Banner Packaging',
      'Click-Optimized Custom Thumbnail Creation',
      'Comprehensive Video Title & Description SEO',
      'Video Uploading, Tags, Cards & Endscreens',
      'Audience Retention Strategy & Content Planning',
      'Monthly YouTube Studio Metrics Breakdown'
    ],
    features: [
      'Proven increase in Click-Through Rates (CTR)',
      'Search-optimized titles and keyword tags',
      'Seamless upload and scheduling workflow',
      'Long-term subscriber acquisition strategies'
    ],
    processSteps: [
      { title: 'Channel Diagnostics', desc: 'Evaluating historical retention curves, CTRs, and packaging quality.' },
      { title: 'Thumbnail & Title A/B Plan', desc: 'Engineering psychological visual hooks and high-curiosity titles.' },
      { title: 'Post-Production Packaging', desc: 'Crafting descriptions, timestamps, end cards, and SEO metadata.' },
      { title: 'Publishing & Analytics', desc: 'Tracking 48-hour velocity and adjusting packaging for algorithmic pickup.' }
    ]
  },
  {
    id: 's5',
    slug: 'ai-content-creation',
    number: '05',
    category: 'AI Solutions',
    title: 'AI Content Creation',
    heroHeadline: 'Create Smarter Content With AI.',
    heroSubtitle: 'Modern AI-powered content systems for faster, more prolific, and higher quality creative production.',
    ctaText: 'Explore AI Content',
    shortDesc: 'Create smarter content using modern AI workflows, high-precision prompting, and creative systems.',
    fullDesc: 'Leverage state-of-the-art generative AI technologies to multiply your creative output without sacrificing authenticity. We construct custom AI content engines that generate blog articles, marketing copy, social scripts, and visual concepts at 10x the speed.',
    iconName: 'Cpu',
    tags: ['Generative AI', 'Prompt Systems', 'AI Copywriting', 'Content Workflows'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Custom Brand Voice AI Models & Knowledge Bases',
      'High-Volume Long-Form & Short-Form Content Engines',
      'AI-Assisted Visual Concept & Image Generation',
      'Automated Multi-Format Repurposing Workflows',
      'Editorial Review & Quality Assurance Safeguards'
    ],
    features: [
      '10x faster turnaround on content creation',
      'Guaranteed human polish and zero generic AI clichés',
      'Bespoke prompt architectures tailored to your industry',
      'Scalable output for social, web, and newsletter channels'
    ],
    processSteps: [
      { title: 'Tone & Knowledge Ingestion', desc: 'Codifying your brand guidelines, terminology, and tone of voice.' },
      { title: 'Prompt Pipeline Engineering', desc: 'Building multi-step reasoning prompts and quality guardrails.' },
      { title: 'Content Generation & Human Polish', desc: 'Producing high-impact assets with senior editorial review.' },
      { title: 'Channel Distribution', desc: 'Deploying finalized creative assets across your digital footprint.' }
    ]
  },
  {
    id: 's6',
    slug: 'ai-prompt-writing',
    number: '06',
    category: 'AI Solutions',
    title: 'AI Prompt Writing',
    heroHeadline: 'Master the Language of Next-Gen AI Models.',
    heroSubtitle: 'Precision prompt architecture engineered for exceptional outputs, deterministic results, and brand consistency.',
    ctaText: 'Craft My AI Prompts',
    shortDesc: 'Custom prompt engineering frameworks designed to extract maximum fidelity and consistency from LLMs.',
    fullDesc: 'Vague prompts produce generic, useless results. GrafiwebPk designs sophisticated system prompts, few-shot templates, and chaining architectures that force modern AI models (Claude, GPT, Gemini, Midjourney) to execute complex business tasks with pinpoint accuracy.',
    iconName: 'Zap',
    tags: ['Prompt Engineering', 'System Prompts', 'LLM Chains', 'Quality Guardrails'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Custom Corporate System Prompt Libraries',
      'Few-Shot Prompt Templates for Marketing & Sales',
      'Role-Specific Persona Ingestion Prompts',
      'Negative Prompting & Hallucination Mitigation Rules',
      'Comprehensive Prompt Engineering Playbook'
    ],
    features: [
      'Consistent, repeatable outputs across team members',
      'Elimination of robotic, repetitive phrasing',
      'Tailored for leading models (Gemini, Claude, GPT-4)',
      'Immediate lift in operational team productivity'
    ],
    processSteps: [
      { title: 'Task Decomposition', desc: 'Breaking complex workflows into discrete algorithmic prompts.' },
      { title: 'Context & Constraint Modeling', desc: 'Defining output schemas, stylistic guidelines, and edge cases.' },
      { title: 'Stress-Testing & Benchmarking', desc: 'Iterating prompts across hundreds of realistic scenarios.' },
      { title: 'Deployment & Training', desc: 'Providing plug-and-play prompt templates and staff enablement.' }
    ]
  },
  {
    id: 's7',
    slug: 'ai-automation',
    number: '07',
    category: 'AI Solutions',
    title: 'AI Automation',
    heroHeadline: 'Automate the Work. Focus on Growth.',
    heroSubtitle: 'Build intelligent workflows that eliminate repetitive manual tasks and accelerate business productivity.',
    ctaText: 'Automate My Workflow',
    shortDesc: 'Automate repetitive business processes and build intelligent workflows to scale operations effortlessly.',
    fullDesc: 'Stop wasting valuable hours on manual copy-pasting, data formatting, and repetitive client communications. We build autonomous AI-powered integrations connecting your email, CRM, WhatsApp, social channels, and internal tools into a self-operating business engine.',
    iconName: 'Cpu',
    tags: ['Business Automation', 'Zapier / Make', 'WhatsApp Bots', 'CRM Integrations', 'Workflows'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Autonomous Lead Qualification & Auto-Routing',
      'Automated WhatsApp & Email Follow-Up Systems',
      'AI Data Extraction & CRM Syncing',
      'Social Media Auto-Publishing & Repurposing Pipelines',
      'Executive Dashboards & Real-Time Alert Systems'
    ],
    features: [
      'Up to 70% reduction in manual administrative hours',
      'Instant 24/7 response time to new customer inquiries',
      'Zero human data-entry errors',
      'Scales effortlessly without hiring additional staff'
    ],
    processSteps: [
      { title: 'Workflow Audit', desc: 'Mapping operational bottlenecks and repetitive employee tasks.' },
      { title: 'Architecture & Tool Selection', desc: 'Designing seamless connections between your software stack.' },
      { title: 'Build & Integration', desc: 'Constructing robust automation pipelines with fallback logic.' },
      { title: 'Live Testing & Monitoring', desc: 'Stress-testing edge cases and monitoring automated execution.' }
    ]
  },
  {
    id: 's8',
    slug: 'digital-marketing',
    number: '08',
    category: 'Digital Marketing',
    title: 'Digital Marketing',
    heroHeadline: 'High-Impact Acquisition & Growth Campaigns.',
    heroSubtitle: 'Data-driven marketing campaigns that scale your audience, generate qualified leads, and multiply ROI.',
    ctaText: 'Accelerate My Growth',
    shortDesc: 'Comprehensive digital marketing strategies combining targeted campaigns, content marketing, and brand promotion.',
    fullDesc: 'Growth requires more than random ads. GrafiwebPk designs full-funnel digital marketing campaigns that capture qualified interest, nurture prospects with authoritative content, and convert them into long-term clients with measurable return on ad spend.',
    iconName: 'TrendingUp',
    tags: ['Paid Media', 'Conversion Funnels', 'Content Marketing', 'ROI Optimization'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Full-Funnel Digital Growth Strategy',
      'High-Converting Ad Creatives & Copywriting',
      'Search Engine Optimization (SEO) Roadmap',
      'Landing Page Conversion Rate Optimization (CRO)',
      'Targeted Lead Generation & Funnel Architecture'
    ],
    features: [
      'Laser-focused audience targeting and retargeting',
      'Transparent attribution and weekly ROI reporting',
      'Continuous creative testing to reduce acquisition costs',
      'Seamless alignment with sales and WhatsApp closings'
    ],
    processSteps: [
      { title: 'Market & Competitor Analysis', desc: 'Uncovering high-leverage buyer personas and keyword opportunities.' },
      { title: 'Funnel & Creative Architecture', desc: 'Developing compelling hooks, ad visual assets, and landing pages.' },
      { title: 'Campaign Launch & Tracking', desc: 'Deploying campaigns across high-intent digital channels.' },
      { title: 'Optimization & Scaling', desc: 'Scaling top-performing creatives and pruning underperforming channels.' }
    ]
  }
];

