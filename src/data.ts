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
  headline: string
  href: string
  hrefLabel: string
  summary: string
  stack: string
}

export const products: Product[] = [
  {
    name: 'StocksTrend',
    headline: 'Market analysis, watchlists and portfolios on a large financial data set',
    href: 'https://stockstrend.com',
    hrefLabel: 'stockstrend.com',
    summary:
      'A fintech platform with daily stock and crypto market analysis, live and custom calculations, and personal watchlists and portfolios. I manage and optimise the large data set behind it.',
    stack: 'Laravel, MySQL, Supervisor, Financial Modeling Prep API, CI/CD',
  },
  {
    name: 'Veara',
    headline: 'Design custom apparel from text and images, then order in bulk',
    href: 'https://veara.ai',
    hrefLabel: 'veara.ai',
    summary:
      'A live design platform where people create apparel and accessories from text, colours, and scraped or uploaded images, then save designs and buy in bulk through the Printify API.',
    stack: 'Laravel, Supabase, Printify API, web scraping, CI/CD',
  },
  {
    name: '1ClickToShop',
    headline: 'Shop Amazon and other stores from regions they do not ship to',
    href: 'https://play.google.com/store/apps/details?id=com.oneclick.shop',
    hrefLabel: 'Google Play',
    summary:
      'A mobile app that pulls products and orders from stores such as Amazon and ships them to regions Amazon does not serve. I added features, rebuilt the UI and backend, and keep it running.',
    stack: 'PHP, MySQL, React Native, WebView scraping',
  },
]

export type ClientProject = { name: string; headline: string; where: string; summary: string }

export const clientWork: ClientProject[] = [
  {
    name: 'Remote Access platform',
    headline: 'Secure remote control of devices',
    where: 'Softvence Agency',
    summary:
      'Remote access to devices with role, permission and security management, built on Docker, Signal, Relay and a web client.',
  },
  {
    name: 'Ad Account Management',
    headline: 'Ad spend tracking for teams',
    where: 'Softvence Agency',
    summary: 'User and role management with spend analysis graphs.',
  },
  {
    name: 'Service Provider platform',
    headline: 'A marketplace for service providers',
    where: 'Softvence Agency',
    summary: 'Wallet, orders, bidding, support and chat in one platform.',
  },
  {
    name: 'WooCommerce and Dokan store',
    headline: 'Multi-vendor e-commerce',
    where: 'Softvence Agency',
    summary: 'An e-commerce application built on the WooCommerce and Dokan APIs.',
  },
  {
    name: 'MyBilling',
    headline: 'ERP for internet service providers',
    where: 'Nextech Limited',
    summary: 'An ERP system for internet service providers.',
  },
  {
    name: 'AITSO software',
    headline: 'Software for the Army IT Support Organization',
    where: 'Nextech Limited',
    summary: 'Developed and upgraded software for the Army IT Support Organization.',
  },
  {
    name: 'MAUCBD CMS',
    headline: 'Content management for an education group',
    where: 'Nextech Limited',
    summary: 'A content management system for a large educational organisation, built on my own.',
  },
  {
    name: 'Recruitment Management System',
    headline: 'Hiring workflows for a pharmaceutical company',
    where: 'Nextech Limited',
    summary: 'Built for Ibn Sina Pharmaceuticals Ltd.',
  },
  {
    name: 'GenWebBuilder',
    headline: 'A generative-AI no-code website builder',
    where: 'Contract',
    summary: 'The React front end for a generative-AI no-code website platform.',
  },
  {
    name: 'Pusti ERP',
    headline: 'Enterprise resource planning for TK Group',
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
  /** Hide the project tags when the bullet points already describe those projects. */
  hideProjectTags?: boolean
}

export const jobs: Job[] = [
  {
    role: 'Backend Developer',
    company: 'Softvence Agency',
    hideProjectTags: true,
    period: 'Dec 2025 to now',
    points: [
      'Work with international clients on global projects, from gathering requirements to managing delivery.',
      'Optimise databases and queries; manage live servers and deployments with CI/CD and FTP.',
      'Built a Remote Access platform for devices with role, permission and security management, using Docker, Signal, Relay and a web client.',
      'Built an Ad Account Management system with user and role management and spend analysis graphs.',
      'Built a Service Provider platform with wallet, orders, bidding, support and chat.',
      'Developed an e-commerce application on the WooCommerce and Dokan APIs.',
      'Integrated global payment gateways: Stripe, Airwallex, Fanbasis and Waafipay.',
      'Debug and resolve issues on live production servers.',
    ],
  },
  {
    role: 'Software Developer (Full Stack)',
    company: 'Nextech Limited',
    hideProjectTags: true,
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
    hideProjectTags: true,
    period: 'Dec 2023 to Jan 2024',
    points: [
      'Built a generative-AI no-code platform in ReactJS.',
      'Handled several modules, API management and integration, plus testing and performance work.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'TechKnowGram Limited',
    hideProjectTags: true,
    period: 'Oct 2023 to Dec 2023',
    points: [
      'Worked on Pusti ERP with Java Spring Boot across monolithic and microservice architectures.',
      'Handled microservice communication, security, APIs, Oracle SQL and server configuration.',
    ],
  },
]

export type StackGroup = { label: string; note: string; items: string[] }

export const stack: StackGroup[] = [
  { label: 'Backend', note: 'Where I spend most of my time', items: ['Laravel', 'PHP', 'Java', 'Spring Boot', 'RESTful APIs', 'Microservices', 'WebSockets', 'OAuth/JWT'] },
  { label: 'Frontend and mobile', note: 'Web and app interfaces', items: ['ReactJS', 'React Native', 'JavaScript'] },
  { label: 'Databases', note: 'Design, tuning and query optimisation', items: ['MySQL', 'PostgreSQL', 'Supabase', 'Oracle DB', 'SQLite'] },
  { label: 'Payments and commerce', note: 'Gateways integrated in production', items: ['Stripe', 'Airwallex', 'Fanbasis', 'Waafipay', 'WooCommerce', 'Dokan'] },
  { label: 'DevOps and tools', note: 'Shipping and running live servers', items: ['Docker', 'CI/CD', 'Nginx', 'Git', 'Postman', 'ApiDog', 'Jira', 'Trello'] },
  { label: 'Data and leadership', note: 'Beyond the code', items: ['SPSS', 'R', 'Server management', 'Team management', 'Project management'] },
]

export type Education = {
  degree: string
  school: string
  period: string
  details?: string[]
}

// Add more entries here; the Education section renders them in order.
export const education: Education[] = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'North South University',
    period: 'Graduated 2022',
  },
]

export const certifications: { name: string; issuer: string }[] = [
  {
    name: 'Data Analytics Hire and Train Program',
    issuer: 'ADN Diginet Limited and University of Dhaka (IIT)',
  },
]

export const publications: { title: string; venue: string; href: string }[] = [
  {
    title: 'Detecting Urbanization Changes in Tangail District Using Machine Learning and Remote Sensing',
    venue: 'Springer',
    href: 'https://link.springer.com/chapter/10.1007/978-981-16-6369-7_21',
  },
]
