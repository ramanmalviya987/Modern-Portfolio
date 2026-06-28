import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { navItems, type NavItem } from '../../constants/navigation'
import { cn } from '../../utils/cn'
import { Container } from './Container'

const SCROLLED_OFFSET = 12

function getSectionId(href: NavItem['href']) {
  return href.replace('#', '')
}

function isHTMLElement(element: HTMLElement | null): element is HTMLElement {
  return element !== null
}

function ResumeButton({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      aria-label="Download Raman Malviya resume"
      className={cn(
        'inline-flex h-10 items-center justify-center gap-2 rounded-md border border-transparent bg-brand px-5 text-sm font-medium text-brand-foreground outline-none transition-colors duration-[var(--ds-duration-base)] ease-standard hover:bg-brand-hover focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
      download
      href="/resume.pdf"
      whileHover={shouldReduceMotion ? undefined : { y: -1 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
    >
      <Download aria-hidden="true" size={16} strokeWidth={2} />
      <span>Download Resume</span>
    </motion.a>
  )
}

function BrandMark() {
  return (
    <a
      aria-label="Raman Malviya, Frontend Engineer"
      className="group flex items-center gap-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href="#home"
    >
      <span className="grid size-10 place-items-center rounded-md border border-border bg-surface text-sm font-semibold tracking-[0.08em] text-foreground shadow-soft transition-colors duration-[var(--ds-duration-base)] group-hover:border-foreground/30">
        RM
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="text-sm font-medium text-foreground">
          Raman Malviya
        </span>
        <span className="mt-1 text-xs text-muted">Frontend Engineer</span>
      </span>
    </a>
  )
}

function NavLink({
  item,
  isActive,
  onNavigate,
}: {
  item: NavItem
  isActive: boolean
  onNavigate: (item: NavItem) => void
}) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      className="group relative rounded-sm px-1 py-2 text-sm font-medium text-muted outline-none transition-colors duration-[var(--ds-duration-base)] ease-standard hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href={item.href}
      onClick={(event) => {
        event.preventDefault()
        onNavigate(item)
      }}
    >
      {item.label}
      <span className="absolute inset-x-1 -bottom-0.5 h-px origin-left scale-x-0 bg-foreground transition-transform duration-[var(--ds-duration-base)] ease-standard group-hover:scale-x-100 group-focus-visible:scale-x-100" />
      {isActive ? (
        <motion.span
          className="absolute inset-x-1 -bottom-0.5 h-px bg-foreground"
          layoutId="active-nav-indicator"
          transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
        />
      ) : null}
    </a>
  )
}

function DesktopNavigation({
  activeSection,
  onNavigate,
}: {
  activeSection: string
  onNavigate: (item: NavItem) => void
}) {
  return (
    <div className="hidden items-center justify-center rounded-full border border-border/70 bg-surface/40 px-4 backdrop-blur-xl lg:flex">
      <div aria-label="Primary navigation" className="flex items-center gap-5">
        {navItems.map((item) => (
          <NavLink
            isActive={activeSection === getSectionId(item.href)}
            item={item}
            key={item.href}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  )
}

function MobileMenu({
  activeSection,
  onClose,
  onNavigate,
  open,
}: {
  activeSection: string
  onClose: () => void
  onNavigate: (item: NavItem) => void
  open: boolean
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          animate={{ opacity: 1 }}
          aria-modal="true"
          className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
        >
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-container mt-20 overflow-hidden rounded-lg border border-border bg-surface/95 p-3 shadow-elevated"
            exit={{ opacity: 0, y: -16 }}
            initial={{ opacity: 0, y: -16 }}
            onClick={(event) => event.stopPropagation()}
            transition={{ duration: 0.28, ease: [0.2, 0, 0, 1] }}
          >
            <div className="flex flex-col">
              {navItems.map((item) => {
                const isActive = activeSection === getSectionId(item.href)

                return (
                  <a
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'flex items-center justify-between rounded-md px-4 py-4 text-base font-medium outline-none transition-colors duration-[var(--ds-duration-base)] focus-visible:ring-2 focus-visible:ring-focus',
                      isActive
                        ? 'bg-surface-muted text-foreground'
                        : 'text-muted hover:bg-surface-muted hover:text-foreground',
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={(event) => {
                      event.preventDefault()
                      onNavigate(item)
                      onClose()
                    }}
                  >
                    {item.label}
                    {isActive ? (
                      <motion.span
                        className="size-1.5 rounded-full bg-foreground"
                        layoutId="mobile-active-nav-indicator"
                      />
                    ) : null}
                  </a>
                )
              })}
            </div>
            <div className="mt-3 border-t border-border pt-3">
              <ResumeButton className="w-full" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const sectionIds = useMemo(
    () => navItems.map((item) => getSectionId(item.href)),
    [],
  )

  const navigateTo = useCallback((item: NavItem) => {
    const id = getSectionId(item.href)
    const section = document.getElementById(id)

    setActiveSection(id)
    window.history.replaceState(null, '', item.href)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > SCROLLED_OFFSET)
    }

    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    const updateActiveSection = () => {
      const visibleSection = sectionIds
        .map((id) => document.getElementById(id))
        .filter(isHTMLElement)
        .find((section) => {
          const rect = section.getBoundingClientRect()

          return rect.top <= 120 && rect.bottom >= 120
        })

      if (visibleSection) {
        setActiveSection(visibleSection.id)
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })

    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [sectionIds])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMenuOpen])

  return (
    <motion.header
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-[var(--ds-duration-base)] ease-standard',
        isScrolled
          ? 'border-border bg-background/72 shadow-soft backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
      initial={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
    >
      <nav aria-label="Main navigation">
        <Container className="flex h-20 items-center justify-between">
          <BrandMark />

          <DesktopNavigation
            activeSection={activeSection}
            onNavigate={navigateTo}
          />

          <div className="flex items-center gap-3">
            <ResumeButton className="hidden lg:inline-flex" />
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
              className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface/70 text-foreground outline-none transition-colors duration-[var(--ds-duration-base)] hover:bg-surface-muted focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              ref={menuButtonRef}
              type="button"
            >
              {isMenuOpen ? (
                <X aria-hidden="true" size={18} strokeWidth={2} />
              ) : (
                <Menu aria-hidden="true" size={18} strokeWidth={2} />
              )}
            </button>
          </div>
        </Container>
      </nav>

      <div id="mobile-navigation">
        <MobileMenu
          activeSection={activeSection}
          onClose={() => setIsMenuOpen(false)}
          onNavigate={navigateTo}
          open={isMenuOpen}
        />
      </div>
    </motion.header>
  )
}
