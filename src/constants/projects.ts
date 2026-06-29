export type ProjectLink = {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export type Project = {
  name: string
  badge?: string
  type: string
  description: string
  contributions: string[]
  impact: string[]
  technologies: string[]
  links: ProjectLink[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'C9Pharos',
    badge: 'Featured Project',
    type: 'Cross-platform Mobile Application',
    description:
      'A cybersecurity monitoring application that helps users track SSL certificate expiry, monitor dark-web exposure, generate vulnerability reports, and receive real-time security alerts.',
    contributions: [
      'Built the application from scratch',
      'Developed complete React Native frontend',
      'Integrated Firebase Push Notifications',
      'Integrated Razorpay Payment Gateway',
      'Implemented Deep Linking',
      'Added Sentry Crash Monitoring',
      'Published to Google Play Store and Apple App Store',
    ],
    impact: ['10,000+ Downloads'],
    technologies: [
      'React Native',
      'Firebase',
      'Razorpay',
      'Sentry',
      'Deep Linking',
    ],
     links: [
      { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.C9Eye', variant: 'primary' },
      { label: 'IOS', href: 'https://apps.apple.com/in/app/c9pharos/id6740405070', variant: 'secondary' },
    ],
    featured: true,
  },
  {
    name: 'C9Disti',
    type: 'Distributor Management Platform',
    description:
      'Distributor management application enabling lead tracking, customer management, and real-time notifications.',
    contributions: [
      'Built mobile-first distributor workflows',
      'Implemented lead and customer management interfaces',
      'Integrated real-time notification experiences',
    ],
    impact: ['Published on Android & iOS', '100+ Downloads'],
    technologies: ['React Native', 'Firebase'],
    links: [
      { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.C9Disti', variant: 'primary' },
      { label: 'IOS', href: 'https://apps.apple.com/in/app/c9disti/id6738125766', variant: 'secondary' },
    ],
  },
  {
    name: 'ReadReuse',
    type: 'Educational Platform',
    description:
      'Educational application helping students access notes, previous-year question papers and academic resources.',
    contributions: [
      'Built student-facing mobile application screens',
      'Connected academic resource flows with backend services',
      'Delivered app experience for notes and question paper discovery',
    ],
    impact: ['Published on Google Play', '100+ Downloads'],
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    links: [
      { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.readreuse_native_app', variant: 'primary' },
    ],
  },
]
