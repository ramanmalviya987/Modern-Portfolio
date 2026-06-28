import type { LucideIcon } from 'lucide-react'
import { Boxes, Code2, Rocket, Smartphone } from 'lucide-react'

export type ExperienceEntry = {
  company: string
  role: string
  duration: string
  description: string
  impact: string
  logoLabel: string
  icon: LucideIcon
  achievements: string[]
  technologies: string[]
}

export const experienceEntries: ExperienceEntry[] = [
  {
    company: 'Qwings',
    role: 'Frontend Developer Intern',
    duration: 'May 2022 - Aug 2022',
    description:
      'Started with responsive React.js application work and built the foundations for component-driven frontend development.',
    impact: 'Improved maintainability through React Hooks and component architecture.',
    logoLabel: 'QW',
    icon: Code2,
    achievements: [
      'Built responsive React.js applications',
      'Worked with React Hooks',
      'Learned component architecture',
      'Improved maintainability of the codebase',
    ],
    technologies: ['React.js', 'React Hooks'],
  },
  {
    company: 'Paddleboat',
    role: 'Frontend Developer',
    duration: 'Mar 2023 - Aug 2024',
    description:
      'Converted product designs into production-ready Next.js applications while improving delivery speed through reusable UI patterns.',
    impact: 'Reduced feature development effort by approximately 30%.',
    logoLabel: 'PB',
    icon: Rocket,
    achievements: [
      'Converted Figma designs into production-ready Next.js applications',
      'Built reusable UI component library',
      'Integrated REST APIs',
      'Applied lazy loading, memoization and code splitting',
    ],
    technologies: ['React.js', 'Next.js', 'JavaScript', 'REST APIs'],
  },
  {
    company: 'Pinak Infosec (C9Lab)',
    role: 'Frontend Engineer (React Native)',
    duration: 'Oct 2024 - Sep 2025',
    description:
      'Built C9Pharos from scratch and shipped a production mobile application across Android and iOS.',
    impact: 'Published C9Pharos with 10,000+ downloads.',
    logoLabel: 'C9',
    icon: Smartphone,
    achievements: [
      'Built C9Pharos from scratch',
      'Published on Google Play and App Store',
      'Integrated Razorpay',
      'Added Firebase Push Notifications, Deep Linking and Sentry Crash Monitoring',
    ],
    technologies: ['React Native', 'Firebase', 'Razorpay', 'Sentry'],
  },
  {
    company: 'BPRHub',
    role: 'Frontend Engineer',
    duration: 'Sep 2025 - Apr 2026',
    description:
      'Delivered scalable Next.js product modules and worked across frontend architecture, APIs and database-backed features.',
    impact: 'Delivered 5+ production modules and improved release speed by around 40%.',
    logoLabel: 'BH',
    icon: Boxes,
    achievements: [
      'Built scalable Next.js applications',
      'Created reusable component library',
      'Developed FastAPI REST APIs',
      'Worked with PostgreSQL',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL'],
  },
]
