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
    id: 'p0',
    name: 'Livecue',
    description: 'An innovative live video production platform designed for creators and brands to automate content distribution and manage professional-grade live streams with advanced real-time overlays.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
    techStack: ['React.js', 'Material-UI', 'GraphQL', 'Tailwind CSS', 'Ruby on Rails'],
    link: 'https://www.livecue.io/'
  },
  {
    id: 'p6',
    name: 'CanIBuild',
    description: 'An industry-leading construction technology application that simplifies site feasibility and planning. It allows users to instantly determine what can be built on a parcel of land using complex spatial logic.',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800',
    techStack: ['React.js', 'Google Maps API', 'Material UI', 'Node.js'],
    link: 'https://canibuild.com/en-us/'
  },
  {
    id: 'p7',
    name: 'DPixelPro',
    description: 'A high-end creative agency portfolio showcasing professional design and development services. Built with a focus on immersive UI, sleek animations, and premium branding.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    link: 'https://dpixelpro.com/'
  },
  {
    id: 'p8',
    name: 'Criclay',
    description: 'A comprehensive digital hub for cricket enthusiasts featuring real-time match data, social networking, and detailed statistical analysis for the global cricket community.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
    techStack: ['React.js', 'Socket.io', 'Node.js', 'MongoDB'],
    link: 'https://www.criclay.com/'
  },
  {
    id: 'p9',
    name: 'The Hundred Balls',
    description: 'An engaging sports platform dedicated to "The Hundred" cricket format, providing fans with unique insights, player stats, and interactive media content.',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    techStack: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
    link: 'https://www.thehundredballs.com/'
  },
  {
    id: 'p10',
    name: 'Catered Club',
    description: 'A premium meal-kit and catering subscription platform that optimizes dietary management and meal planning through a sophisticated user dashboard and checkout system.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800',
    techStack: ['React.js', 'Redux', 'Stripe API', 'Express.js'],
    link: 'https://www.cateredclub.com/'
  },
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
    items: ['Node.js', 'Express', 'Fastify', 'Nest.js', 'Ruby on Rails']
  },
  {
    category: 'Database & Tools',
    items: ['MongoDB', 'GraphQL', 'REST APIs', 'Azure MSAL', 'Shopify APIs', 'Git', 'Docker', 'Playwright']
  },
  {
    category: 'AI Tools',
    items: ['Copilot', 'Custom Copilot Agent Workflows', 'Cursor', 'Windsurf', 'ChatGPT', 'Claude AI']
  }
];