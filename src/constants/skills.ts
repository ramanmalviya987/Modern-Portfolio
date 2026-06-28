import type { LucideIcon } from 'lucide-react'
import {
  Braces,
  Code2,
  Database,
  Layers3,
  Server,
  Smartphone,
  Wrench,
} from 'lucide-react'

export type SkillCategory = {
  title: string
  description: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    description:
      'Interfaces built with typed React patterns, reusable UI systems, and polished interaction details.',
    icon: Code2,
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Mobile',
    description:
      'Cross-platform app experiences shaped for production releases and native platform expectations.',
    icon: Smartphone,
    skills: [
      'React Native',
      'Deep Linking',
      'Push Notifications',
      'App Store Deployment',
      'Play Store Deployment',
    ],
  },
  {
    title: 'Backend',
    description:
      'API-aware frontend delivery with practical backend collaboration and service integration.',
    icon: Server,
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    description:
      'Working knowledge of product data layers used across modern web and mobile applications.',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Firebase Firestore'],
  },
  {
    title: 'Tools',
    description:
      'Daily development, debugging, monitoring, payments, and mobile release tooling.',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Firebase',
      'Razorpay',
      'Sentry',
      'Android Studio',
      'Xcode',
    ],
  },
  {
    title: 'Engineering Practices',
    description:
      'Maintainable product engineering habits for scalable, reliable frontend delivery.',
    icon: Layers3,
    skills: [
      'Reusable Component Architecture',
      'Performance Optimisation',
      'Cross Platform Development',
      'CI/CD',
      'Agile Development',
    ],
  },
]

export const skillsSectionIcon = Braces
