import type { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type ContainerProps = HTMLAttributes<HTMLDivElement>

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[var(--ds-container-width)] px-container',
        className,
      )}
      {...props}
    />
  )
}
