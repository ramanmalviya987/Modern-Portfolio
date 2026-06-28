import type { LucideIcon } from 'lucide-react'
import { Code2, Mail, Network } from 'lucide-react'

export const heroTechnologies = [
  'React.js',
  'Next.js',
  'TypeScript',
  'React Native',
] as const

export const heroStats = [
  'Frontend Engineer',
  '3+ Years Experience',
  'Production Applications',
] as const

export const profileSkills = [
  'React.js',
  'Next.js',
  'TypeScript',
  'React Native',
  'Tailwind CSS',
] as const

export type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/ramanmalviya',
    icon: Code2,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ramanmalviya',
    icon: Network,
  },
  {
    label: 'Email',
    href: 'mailto:ramanmalviya@example.com',
    icon: Mail,
  },
]
