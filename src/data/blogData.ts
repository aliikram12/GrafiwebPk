import { BlogPost } from '../types';

export const blogData: BlogPost[] = [
  {
    id: 'b1',
    slug: 'the-death-of-sterile-minimalism',
    title: 'The Death of Sterile Minimalism: Why Modern Brands are Embracing Kinetic Emotion',
    excerpt: 'Generic templates and blank white grids have saturated the web. Discover how forward-thinking studios are breathing tactical weight, motion, and organic warmth into digital identity.',
    content: [
      'For the past decade, the tech industry has suffered under a uniform aesthetic: stark white backdrops, interchangeable geometric sans-serifs, and cold, sanitized interfaces designed by committee algorithms. While functional, it stripped modern brands of their distinct human pulse.',
      'Today, we are witnessing a decisive cultural correction. High-performing digital experiences are no longer just utilitarian; they are sensory, narrative-rich environments. The synthesis of tactile haptics, physics-based motion transitions, and thoughtful typography creates emotional resonance that converts fleeting visitors into devoted advocates.',
      'At GrafiwebPk, we view motion not as an afterthought or decoration, but as an essential dimension of storytelling. When an element reacts organically to a user’s cursor velocity or scroll rhythm, it communicates intention, craftsmanship, and institutional permanence.'
    ],
    date: 'Oct 14, 2025',
    readTime: '5 min read',
    category: 'Design Philosophy',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    author: {
      name: 'Kai Robertson',
      role: 'Head of Brand Strategy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    tags: ['Branding', 'Motion', 'Typography', 'Future Trends']
  },
  {
    id: 'b2',
    slug: 'mastering-core-web-vitals-while-pushing-webgl-limits',
    title: 'Zero Latency WebGL: Balancing 60 FPS 3D Visuals with Perfect 100 PageSpeed Scores',
    excerpt: 'How our engineering team delivers cinematic shader reflections and smooth 3D experiences while sustaining sub-second load times and flawless mobile responsiveness.',
    content: [
      'A common misconception among traditional web agencies is that high-end interactive visual design inherently compromises performance and SEO. The prevailing myth suggests that you must choose between a sterile, boring website that scores 100 on Lighthouse, or an immersive 3D spectacle that takes 6 seconds to render.',
      'Our engineering pipeline proves this dichotomy false. By leveraging lazy buffer compilation, offscreen Web Workers for spatial physics calculations, and adaptive level-of-detail (LOD) geometry mesh pipelines, we routinely ship interactive WebGL flagships that load in under 800 milliseconds on mobile 4G connections.',
      'Performance is respect for the visitor’s time. When high-end craft meets obsessive optimization, the resulting digital experience feels like magic.'
    ],
    date: 'Nov 02, 2025',
    readTime: '7 min read',
    category: 'Engineering & WebGL',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    author: {
      name: 'Dr. Alistair Chen',
      role: 'Principal Creative Technologist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    tags: ['WebGL', 'Performance', 'Next.js', 'Core Web Vitals']
  },
  {
    id: 'b3',
    slug: 'design-tokens-as-code',
    title: 'Bridging Figma and Production: How Design Tokens Accelerate Enterprise Shipping Velocity',
    excerpt: 'Explore how unified design token architectures eliminate hand-off friction, synchronize multi-platform components, and keep product velocity relentless.',
    content: [
      'Design systems often stagnate when treated as static documentation rather than executable code. When design decisions made in Figma require manual transcription into CSS variables and React styled components, bugs and misalignments inevitably proliferate.',
      'By establishing automated bidirectional token pipelines—where color curves, typographic scales, elevation values, and spacing metrics sync directly into git pull requests—we enable our clients to iterate with unmatched agility.',
      'The outcome is an unbreakable link between brand intent and customer experience across web, iOS, Android, and internal enterprise tooling.'
    ],
    date: 'Nov 19, 2025',
    readTime: '6 min read',
    category: 'Product Systems',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    author: {
      name: 'Maya Lin',
      role: 'Design Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
    },
    tags: ['Design Systems', 'Figma', 'Engineering', 'Architecture']
  }
];
