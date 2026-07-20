export const personalInfo = {
  name: 'Wiston Coronell',
  title: 'Senior Front-End Engineer',
  email: 'coronell@gmail.com',
  phone: '902-809-0967',
  location: 'Bedford, Nova Scotia, Canada',
  linkedin: 'https://linkedin.com/in/coronellw',
  github: 'https://github.com/coronellw',
  summary:
    'Senior Web Developer with 10+ years of experience specializing in the React ecosystem and TypeScript. Highly creative and patient when translating designs into code, combining a strong work ethic with teamwork to collaborate cross-functionally, optimize communication, and maximize user retention.',
  languages: ['English (Fluent)', 'Spanish (Native)', 'French (Intermediate)'],
  education: {
    degree: 'Bachelor of Systems Engineering – Computer Science',
    university: 'Universidad del Norte',
    year: 'Feb 2012',
  },
} as const;

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Front-End',
    icon: 'web',
    skills: [
      'React',
      'React Native',
      'Preact',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Redux',
      'Jotai',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'AngularJS',
      'jQuery',
    ],
  },
  {
    name: 'Back-End & AI',
    icon: 'dns',
    skills: [
      'Node.js',
      'Express',
      'NestJS',
      'Python',
      'Flask',
      'PHP',
      'Java',
      'GraphQL',
      'Ruby on Rails',
      '.NET',
      'LLMs / AI',
      'Django',
    ],
  },
  {
    name: 'Cloud & Architecture',
    icon: 'cloud',
    skills: [
      'AWS',
      'Azure',
      'Docker',
      'Kafka',
      'Redis',
      'REST APIs',
      'ActiveMQ',
      'Apache',
      'CI/CD',
    ],
  },
  {
    name: 'Databases',
    icon: 'storage',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'CouchDB',
      'Oracle',
      'Firebase',
      'SQL Server',
      'NoSQL',
    ],
  },
  {
    name: 'Testing & Tools',
    icon: 'bug_report',
    skills: [
      'Jest',
      'Karma',
      'JUnit',
      'Selenium',
      'Git/GitHub',
      'GitHub Copilot',
      'Figma',
      'Jira',
      'Slack',
      'Webpack',
    ],
  },
  {
    name: 'Soft Skills',
    icon: 'groups',
    skills: [
      'Problem Solving',
      'Teamwork',
      'Motivated',
      'Caring',
      'Creative',
      'Resilient',
      'Detail-Oriented',
      'Work Independently',
      'Quick Learner',
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Senior Web Developer',
    company: 'Liferaft',
    location: 'Halifax, NS, Canada',
    period: 'Jul 2025 – Oct 2025',
    highlights: [
      'Developed and architected modular front-end microservices using React to support dynamic product offerings.',
      'Created highly reusable, high-performance UI components ensuring strict alignment with modern design systems and accessibility guidelines.',
      'Resolved high-priority functional and design-related bugs, collaborating across engineering and product teams to streamline releases.',
      'Performed thorough code review to ensure software quality and adherence to best practices.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'RedSpace',
    location: 'Bedford, NS, Canada',
    period: 'Nov 2021 – Nov 2024',
    highlights: [
      'Designed and developed a complex React application integrating real-time data from multiple external sources, improving system responsiveness and end-user experience.',
      'Built and deployed a cross-platform React Native mobile application from an existing web base, expanding mobile access to over 25,000 active users.',
      'Developed a custom WordPress plugin enabling secure internal interaction with ChatGPT workflows, streamlining productivity for approximately 2,000 team members.',
      'Optimized and refactored Node.js backend REST API integrations, reducing average response latencies and enhancing platform scalability.',
    ],
  },
  {
    role: 'Senior Front-End Developer',
    company: 'Globant',
    location: 'Bogota, Colombia',
    period: 'Nov 2018 – Nov 2021',
    highlights: [
      'Implemented advanced A/B testing frameworks in React to systematically optimize core user journeys, contributing directly to measurable user retention and revenue growth.',
      'Migrated legacy testing infrastructure from Karma to Jest, achieving a 50% reduction in pipeline testing time while expanding test coverage from 82% to 94%.',
      'Partnered closely with UX/UI design teams to rapidly prototype and iterate on interactive components, elevating global usability scores.',
      'Leveraged strong communication skills to support organizational growth through technical interviewing, individual mentoring, and cross-functional onboarding of junior developers.',
    ],
  },
  {
    role: 'Integration Engineer & Developer',
    company: 'Sutherland Global Services',
    location: 'Bogota, Colombia',
    period: 'Mar 2016 – Nov 2018',
    highlights: [
      'Automated business-critical server routines using proprietary .NET and Java tools, accelerating execution velocity across enterprise infrastructure.',
      'Built internal tools with Node.js and React for cluster configuration management, shortening environment setup durations by 80% and delivering notable cost savings.',
      'Configured and fine-tuned distributed infrastructure topologies using ActiveMQ, Java, and Apache to maximize system reliability, uptime, and communication throughput.',
      'Provided technical support for ASA Firewall products, sustaining a 95%+ client satisfaction rate.',
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  icon: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 'pokedex',
    title: 'Pokédex App',
    description:
      'A comprehensive Pokédex application that consumes the PokéAPI to display detailed Pokémon data with search, filtering, and responsive card layouts.',
    longDescription:
      'Built a feature-rich Pokédex that allows users to browse, search, and filter through all Pokémon generations. The app features detailed stat breakdowns, evolution chains, type charts, and a responsive grid layout optimized for both mobile and desktop viewing.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'PokéAPI', 'React Router'],
    liveUrl: 'https://pokedex.example.com',
    repoUrl: 'https://github.com/coronellw/pokedex',
    icon: 'catching_pokemon',
    category: 'Front-End',
  },
  {
    id: 'tmdb',
    title: 'TMDB Movie Explorer',
    description:
      'A movie discovery platform powered by The Movie Database (TMDB) API with advanced search, trending movies, and personalized watchlists.',
    longDescription:
      'Developed a full-featured movie discovery platform leveraging the TMDB API. Features include real-time search with debouncing, movie detail pages with cast and crew info, genre filtering, pagination, and the ability to create and manage personal watchlists using local storage.',
    techStack: ['React', 'TypeScript', 'TMDB API', 'Tailwind CSS', 'React Router', 'Jotai'],
    liveUrl: 'https://tmdb-explorer.example.com',
    repoUrl: 'https://github.com/coronellw/tmdb-explorer',
    icon: 'movie',
    category: 'Front-End',
  },
  {
    id: 'kanban',
    title: 'Kanban Board',
    description:
      'A drag-and-drop Kanban board for project management with task creation, status transitions, and real-time collaboration features.',
    longDescription:
      'Created a full-featured Kanban-style project management tool with drag-and-drop functionality using dnd-kit. Supports multiple boards, task creation with rich descriptions, labels, assignees, due dates, and status transitions. Features local persistence and an intuitive, accessible interface.',
    techStack: ['React', 'TypeScript', 'dnd-kit', 'Tailwind CSS', 'Zustand', 'React Router'],
    liveUrl: 'https://kanban.example.com',
    repoUrl: 'https://github.com/coronellw/kanban-board',
    icon: 'view_kanban',
    category: 'Full Stack',
  },
];

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
}

export const siteConfig: SiteConfig = {
  name: 'Wiston Coronell',
  description:
    'Senior Front-End Engineer | React & TypeScript Specialist | 10+ years of experience building scalable web applications.',
  url: 'https://wistoncoronell.dev',
  ogImage: '/og-image.png',
};