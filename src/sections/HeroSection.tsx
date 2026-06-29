import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  MapPin,
  Sparkles,
} from 'lucide-react'
import {
  heroStats,
  heroTechnologies,
  profileSkills,
  socialLinks,
  type SocialLink,
} from '../constants/hero'
import { resumeFileName, resumePath } from '../constants/resume'
import { Container, Section } from '../components/common'
import { cn } from '../utils/cn'

const entrance = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

function HeroAction({
  children,
  href,
  icon: Icon,
  primary = false,
}: {
  children: string
  href: string
  icon: typeof Download
  primary?: boolean
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      className={cn(
        'inline-flex h-12 items-center justify-center gap-2 rounded-md border px-5 text-sm font-medium outline-none transition-colors duration-[var(--ds-duration-base)] ease-standard focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6',
        primary
          ? 'border-transparent bg-brand text-brand-foreground hover:bg-brand-hover'
          : 'border-border bg-surface/70 text-foreground hover:bg-surface-muted',
      )}
      download={primary ? resumeFileName : undefined}
      href={href}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
    >
      <Icon aria-hidden="true" size={17} strokeWidth={2} />
      {children}
    </motion.a>
  )
}

function SocialIconLink({ link }: { link: SocialLink }) {
  const Icon = link.icon

  return (
    <a
      aria-label={link.label}
      className="group relative inline-flex size-11 items-center justify-center rounded-md border border-border bg-surface/60 text-muted outline-none transition duration-[var(--ds-duration-base)] ease-standard hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-surface-muted hover:text-foreground hover:shadow-soft focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href={link.href}
      rel="noreferrer"
      target={link.href.startsWith('http') ? '_blank' : undefined}
    >
      <Icon aria-hidden="true" size={18} strokeWidth={2} />
      <span className="pointer-events-none absolute -top-10 rounded-sm border border-border bg-surface px-2.5 py-1 text-xs text-foreground opacity-0 shadow-soft transition duration-[var(--ds-duration-base)] group-hover:-translate-y-1 group-hover:opacity-100 group-focus-visible:-translate-y-1 group-focus-visible:opacity-100">
        {link.label}
      </span>
    </a>
  )
}

function TechnologyRotator() {
  return (
    <span className="relative inline-grid h-[1.25em] min-w-36 overflow-hidden align-bottom text-foreground sm:min-w-44">
      {heroTechnologies.map((technology, index) => (
        <span
          aria-hidden={index === 0 ? undefined : true}
          className="hero-tech-word absolute inset-0"
          key={technology}
          style={{ animationDelay: `${index * 2.2}s` }}
        >
          {technology}
        </span>
      ))}
    </span>
  )
}

function DeveloperCard() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.aside
      animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
      aria-label="Frontend engineer profile summary"
      className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-surface/55 p-px shadow-elevated backdrop-blur-2xl"
      transition={
        shouldReduceMotion
          ? undefined
          : { duration: 6, ease: 'easeInOut', repeat: Infinity }
      }
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-focus/20 opacity-70" />
      <div className="relative rounded-[calc(var(--ds-radius-xl)-1px)] bg-background/82 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted">Profile</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Frontend Engineer
            </h2>
          </div>
          <span className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-surface text-foreground">
            <Sparkles aria-hidden="true" size={18} strokeWidth={2} />
          </span>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {heroStats.map((stat) => (
            <div
              className="rounded-lg border border-border bg-surface/55 p-4"
              key={stat}
            >
              <p className="text-sm font-medium text-foreground">{stat}</p>
            </div>
          ))}
          <div className="rounded-lg border border-border bg-surface/55 p-4">
            <p className="flex items-center gap-2 text-sm font-medium text-foreground">
              <MapPin aria-hidden="true" size={15} strokeWidth={2} />
              Bangalore, India
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-muted">Core stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {profileSkills.map((skill) => (
              <span
                className="rounded-full border border-border bg-surface-muted px-3 py-1.5 text-xs font-medium text-foreground"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 rounded-lg border border-border bg-surface/70 p-4">
          <p className="flex items-center gap-2 text-sm font-medium text-foreground">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgb(52_211_153/0.75)]" />
            Currently Building Beautiful User Experiences
          </p>
        </div>
      </div>
    </motion.aside>
  )
}

export function HeroSection() {
  return (
    <Section
      className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden pb-20 pt-16 sm:pt-20 lg:pb-24"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgb(96_165_250/0.12),transparent_32%),radial-gradient(circle_at_82%_28%,rgb(244_244_245/0.08),transparent_28%),linear-gradient(rgb(255_255_255/0.025)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.025)_1px,transparent_1px)] bg-[size:auto,auto,48px_48px,48px_48px]" />
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-focus/10 blur-3xl" />

      <Container>
        <motion.div
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
          initial="hidden"
          transition={{ staggerChildren: 0.09 }}
          viewport={{ once: true, amount: 0.4 }}
          whileInView="visible"
        >
          <div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/55 px-3 py-1.5 text-sm text-muted backdrop-blur-xl"
              transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
              variants={entrance}
            >
              <span aria-hidden="true">🟢</span>
              <span>Available for Opportunities</span>
            </motion.div>

            <motion.p
              className="mt-8 text-base text-muted sm:text-lg"
              transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
              variants={entrance}
            >
              <span aria-hidden="true">👋</span> Hi, I'm
            </motion.p>

            <motion.h1
              className="mt-3 max-w-4xl text-5xl font-semibold leading-[0.96] text-foreground sm:text-6xl lg:text-7xl"
              transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              variants={entrance}
            >
              Raman Malviya
            </motion.h1>

            <motion.div
              className="mt-5 text-2xl font-medium text-muted sm:text-3xl"
              transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
              variants={entrance}
            >
              Frontend Engineer focused on <TechnologyRotator />
            </motion.div>

            <motion.p
              className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
              transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
              variants={entrance}
            >
              Frontend Engineer with 3 years of experience designing and
              shipping scalable web and mobile applications using React.js,
              Next.js, TypeScript, and React Native. I build production-ready
              interfaces with reusable component architecture, performance
              optimisation, and polished user experience.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
              variants={entrance}
            >
              <HeroAction href={resumePath} icon={Download} primary>
                Download Resume
              </HeroAction>
              <HeroAction href="#projects" icon={ArrowRight}>
                View Projects
              </HeroAction>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-3"
              transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
              variants={entrance}
            >
              {socialLinks.map((link) => (
                <SocialIconLink key={link.label} link={link} />
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
            variants={entrance}
          >
            <div className="pointer-events-none absolute inset-8 -z-10 rounded-xl bg-focus/10 blur-3xl" />
            <DeveloperCard />
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted">
              <BriefcaseBusiness aria-hidden="true" size={16} strokeWidth={2} />
              <span>Open to Frontend Engineer opportunities</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
