
import { Project, Experience, SkillCategory } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Keeyu Australia',
    role: 'Mern Stack Developer',
    duration: 'Dec 2023 - Present',
    location: 'Remote/Australia',
    responsibilities: [
      'Built the Keeyu product from scratch, integrating Shopify APIs and Azure authentication.',
      'Developed a micro-frontend architecture for scalability and optimized DB configurations.',
      'Integrated Firebase notifications and Microsoft Copilot AI for automated workflows.',
      'Led the React team and mentored interns for high-quality delivery.'
    ]
  },
  {
    id: '2',
    company: 'EritheiaLabs Lahore',
    role: 'React & Next JS Developer',
    duration: 'Aug 2021 - Dec 2023',
    location: 'Lahore, Pakistan',
    responsibilities: [
      'Developed and optimized React.js applications with Next.js, Material-UI, and Tailwind CSS.',
      'Integrated third-party APIs and handled performance improvements.',
      'Debugged and resolved critical issues through POCs and R&D.',
      'Improved rendering performance and user engagement metrics.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Keeyu (Shopify Analytics)',
    description: 'A comprehensive analytics dashboard providing real-time insights into customer store orders and performance metrics with seamless Shopify API integration.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda4833effb?auto=format&fit=crop&q=80&w=800',
    techStack: ['Node.js', 'React.js', 'Material-UI', 'NestJS', 'MongoDB', 'Shopify APIs'],
    link: 'https://www.keeyu.com'
  },
  {
    id: 'p2',
    name: 'KrispX (Auto E-commerce)',
    description: 'E-commerce platform for cars featuring delivery scheduling, test drive booking, and real-time trading workflows.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    techStack: ['Next.js', 'PayPal', 'Stripe', 'Google Maps API'],
    link: 'https://www.krispx.com'
  },
  {
    id: 'p3',
    name: 'Foap (Content Platform)',
    description: 'Photography & video-sharing platform optimized for efficient media handling and scalable state management.',
    image: 'https://images.unsplash.com/photo-1493863641943-9b6899d08637?auto=format&fit=crop&q=80&w=800',
    techStack: ['Next.js', 'GraphQL', 'Redux Toolkit'],
    link: 'https://www.foap.com'
  },
  {
    id: 'p4',
    name: 'BossBodies (Fitness App)',
    description: 'High-performance fitness platform with workout tracking, nutrition logging, and server-side rendering for SEO optimization.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    techStack: ['Next.js', 'TypeScript', 'GraphQL', 'Redux Toolkit'],
    link: 'https://bossbodies.co/coaching/'
  },
  {
    id: 'p5',
    name: 'EFXPRO Website',
    description: 'Dynamic corporate website with Stripe integration for pricing plans and highly responsive Material-UI design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    techStack: ['Next.js', 'Stripe API', 'Material UI', 'Sass'],
    link: 'https://efxpro.com'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Material-UI', 'Vue.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Fastify', 'Nest.js']
  },
  {
    category: 'Database & Tools',
    items: ['MongoDB', 'GraphQL', 'REST APIs', 'Azure MSAL', 'Shopify APIs', 'Git', 'Docker']
  },
  {
    category: 'AI Tools',
    items: ['Cursor', 'Windsurf', 'ChatGPT', 'Claude AI']
  }
];
