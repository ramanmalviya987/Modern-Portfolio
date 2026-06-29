import type { LucideIcon } from 'lucide-react'
import { Code2,  Mail, MapPin } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import type { IconType } from 'react-icons'


export const contactEmail = 'raman.s.malviya@gmail.com'

export type ContactMethod = {
  title: string
  description: string
  href?: string
  actionLabel?: string
  type: 'copy' | 'link' | 'static'
  icon: LucideIcon | IconType
}

export const contactMethods: ContactMethod[] = [
  {
    title: 'Email',
    description: contactEmail,
    actionLabel: 'Copy Email',
    type: 'copy',
    icon: Mail,
  },
  {
    title: 'LinkedIn',
    description: 'Professional Profile',
    href: 'https://www.linkedin.com/in/raman-malviya-75b579211/',
    actionLabel: 'Open Profile',
    type: 'link',
    icon: FaLinkedin
  },
  {
    title: 'GitHub',
    description: 'Projects & Code',
    href: 'https://github.com/ramanmalviya987',
    actionLabel: 'Open GitHub',
    type: 'link',
    icon: Code2,
  },
  {
    title: 'Location',
    description: 'Bangalore, India',
    type: 'static',
    icon: MapPin,
  },
]
