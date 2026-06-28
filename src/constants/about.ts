import type { LucideIcon } from 'lucide-react'
import { Blocks, Rocket, Smartphone, Zap } from 'lucide-react'

export type AboutCard = {
  title: string
  value: string
  icon: LucideIcon
}

export const aboutCards: AboutCard[] = [
  {
    title: 'Experience',
    value: '3+ Years',
    icon: Blocks,
  },
  {
    title: 'Projects Delivered',
    value: '5+ Production Modules',
    icon: Rocket,
  },
  {
    title: 'Apps Published',
    value: 'Android & iOS',
    icon: Smartphone,
  },
  {
    title: 'Focus',
    value: 'Scalable Frontend Architecture',
    icon: Zap,
  },
]
