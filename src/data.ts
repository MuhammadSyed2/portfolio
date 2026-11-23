export type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json }

export const person = {
  name: 'Muhammad Syed',
  role: 'Full stack developer',
  location: 'Dhaka, Bangladesh',
  email: 'muhammad.syed.bd@gmail.com',
  github: 'https://github.com/MuhammadSyed2',
  linkedin: 'https://www.linkedin.com/in/muhammad-syed-706911214',
}

export type Endpoint = { path: string; body: Json }

export const endpoints: Endpoint[] = [
  {
    path: '/profile',
    body: {
      name: 'Muhammad Syed',
      role: 'Full stack developer',
      location: 'Dhaka, Bangladesh',
      years_of_experience: 3,
      industries: ['fintech', 'e-commerce', 'enterprise'],
      currently: 'Backend Developer at Softvence Agency',
      clients: 'international',
    },
  },
  {
    path: '/experience',
    body: [
      {
        role: 'Backend Developer',
        company: 'Softvence Agency',
        period: 'Dec 2025 - present',
      },
      {
        role: 'Software Developer (Full Stack)',
        company: 'Nextech Limited',
        period: 'Jan 2024 - Nov 2025',
      },
      {
        role: 'Front-end Developer (Contract)',
        company: 'GenWebBuilder',
        period: 'Dec 2023 - Jan 2024',
      },
      {
        role: 'Software Developer Intern',
        company: 'TechKnowGram Limited',
        period: 'Oct 2023 - Dec 2023',
      },
    ],
  },
  {
    path: '/stack',
    body: {
      backend: ['Laravel', 'PHP', 'Java', 'Spring Boot'],
      frontend: ['ReactJS', 'React Native', 'JavaScript'],
      databases: ['MySQL', 'PostgreSQL', 'Supabase', 'Oracle DB', 'SQLite'],
      infrastructure: ['Docker', 'CI/CD', 'Nginx', 'Git'],
      payments: ['Stripe', 'Airwallex', 'Fanbasis', 'Waafipay'],
    },
  },
  {
    path: '/projects',
    body: [
      { name: 'StocksTrend', url: 'stockstrend.com', type: 'fintech' },
      { name: 'Veara', url: 'veara.ai', type: 'design platform' },
      { name: '1ClickToShop', platform: 'Google Play', type: 'e-commerce' },
      // { name: 'Remote Access platform', type: 'devices' },
    ],
  },
  {
    path: '/contact',
    body: {
      email: person.email,
      github: 'github.com/MuhammadSyed2',
      linkedin: 'linkedin.com/in/muhammad-syed-706911214',
    },
  },
]

export type Product = {
  name: string
  href: string
  hrefLabel: string
  summary: string
  stack: string
}

export const products: Product[] = [
  {
    name: 'StocksTrend',
    href: 'https://stockstrend.com',
    hrefLabel: 'stockstrend.com',
    summary:
      'A fintech platform with daily stock and crypto market analysis, live and custom calculations, and personal watchlists and portfolios. I manage and optimise the large data set behind it.',
    stack: 'Laravel, MySQL, Supervisor, Financial Modeling Prep API, CI/CD',
  },
  {
    name: 'Veara',
    href: 'https://veara.ai',
    hrefLabel: 'veara.ai',
    summary:
      'A live design platform where people create apparel and accessories from text, colours, and scraped or uploaded images, then save designs and buy in bulk through the Printify API.',
    stack: 'Laravel, Supabase, Printify API, web scraping, CI/CD',
  },
  {
    name: '1ClickToShop',
    href: 'https://play.google.com/store/apps/details?id=com.oneclick.shop',
    hrefLabel: 'Google Play',
    summary:
      'A mobile app that pulls products and orders from stores such as Amazon and ships them to regions Amazon does not serve. I added features, rebuilt the UI and backend, and keep it running.',
    stack: 'PHP, MySQL, React Native, WebView scraping',
  },
]

export const clientWork: { name: string; where: string; summary: string }[] = [
  {
    name: 'Remote Access platform',
    where: 'Softvence Agency',
    summary:
      'Remote access to devices with role, permission and security management, built on Docker, Signal, Relay and a web client.',
  },
  {
    name: 'Ad Account Management',
    where: 'Softvence Agency',
    summary: 'User and role management with spend analysis graphs.',
  },
  {
    name: 'Service Provider platform',
    where: 'Softvence Agency',
    summary: 'Wallet, orders, bidding, support and chat in one platform.',
  },
  {
    name: 'WooCommerce and Dokan store',
    where: 'Softvence Agency',
    summary: 'An e-commerce application built on the WooCommerce and Dokan APIs.',
  },
  {
    name: 'MyBilling',
    where: 'Nextech Limited',
    summary: 'An ERP system for internet service providers.',
  },
  {
    name: 'AITSO software',
    where: 'Nextech Limited',
    summary: 'Developed and upgraded software for the Army IT Support Organization.',
  },
  {
    name: 'MAUCBD CMS',
    where: 'Nextech Limited',
    summary: 'A content management system for a large educational organisation, built on my own.',
  },
  {
    name: 'Recruitment Management System',
    where: 'Nextech Limited',
    summary: 'Built for Ibn Sina Pharmaceuticals Ltd.',
  },
  {
    name: 'GenWebBuilder',
    where: 'Contract',
    summary: 'The React front end for a generative-AI no-code website platform.',
  },
  {
    name: 'Pusti ERP',
    where: 'TechKnowGram Limited',
    summary:
      'Spring Boot services for TK Group across monolith and microservice setups, with Oracle SQL and server configuration.',
  },
]

export type Job = {
  role: string
  company: string
  period: string
  points: string[]
}

export const jobs: Job[] = [
  {
    role: 'Backend Developer',
    company: 'Softvence Agency',
    period: 'Dec 2025 to now',
    points: [
      'Work with international clients: gather requirements and manage delivery.',
      'Optimise databases and queries; run live servers and deployments with CI/CD and FTP.',
      'Integrated Stripe, Airwallex, Fanbasis and Waafipay payment gateways.',
      'Debug and resolve issues on live production servers.',
    ],
  },
  {
    role: 'Software Developer (Full Stack)',
    company: 'Nextech Limited',
    period: 'Jan 2024 to Nov 2025',
    points: [
      'Led multiple projects at the same time as lead developer.',
      'Delivered software for the Army IT Support Organization, an ISP ERP, a CMS and a recruitment system.',
      'Managed database configuration and live deployments.',
    ],
  },
  {
    role: 'Front-end Developer (Contract)',
    company: 'GenWebBuilder',
    period: 'Dec 2023 to Jan 2024',
    points: [
      'Built a generative-AI no-code platform in ReactJS.',
      'Handled several modules, API management and integration, plus testing and performance work.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'TechKnowGram Limited',
    period: 'Oct 2023 to Dec 2023',
    points: [
      'Worked on Pusti ERP with Java Spring Boot across monolithic and microservice architectures.',
      'Handled microservice communication, security, APIs, Oracle SQL and server configuration.',
    ],
  },
]

export const stack: { label: string; items: string[] }[] = [
  { label: 'Languages and frameworks', items: ['Java', 'Spring Boot', 'Laravel', 'PHP', 'JavaScript', 'ReactJS', 'React Native', 'SPSS', 'R'] },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL', 'Supabase', 'Oracle DB', 'SQLite'] },
  { label: 'APIs and architecture', items: ['RESTful APIs', 'Microservices', 'OAuth/JWT', 'WebSockets', 'WooCommerce', 'Dokan'] },
  { label: 'Payments', items: ['Stripe', 'Airwallex', 'Fanbasis', 'Waafipay'] },
  { label: 'Tools and platforms', items: ['Docker', 'CI/CD', 'Git', 'Nginx', 'Jira', 'Trello', 'Postman', 'ApiDog'] },
  { label: 'Management', items: ['Server management', 'Team management', 'Project management'] },
]
