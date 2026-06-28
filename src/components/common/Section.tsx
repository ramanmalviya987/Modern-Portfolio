import type { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type SectionProps = HTMLAttributes<HTMLElement>

export function Section({ className, ...props }: SectionProps) {
  return <section className={cn('py-section', className)} {...props} />
}
