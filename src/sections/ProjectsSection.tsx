import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Code2, ShieldCheck } from 'lucide-react'
import { projects, type Project, type ProjectLink } from '../constants/projects'
import { Container, Section } from '../components/common'
import { cn } from '../utils/cn'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

function TechnologyBadge({ technology }: { technology: string }) {
  return (
    <motion.span
      className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted outline-none transition-colors duration-[var(--ds-duration-base)] hover:border-foreground/20 hover:bg-surface-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-focus"
      tabIndex={0}
      whileHover={{ y: -1 }}
    >
      {technology}
    </motion.span>
  )
}

function ProjectButton({ link }: { link: ProjectLink }) {
  const Icon = link.label === 'GitHub' ? Code2 : ArrowUpRight

  return (
    <motion.a
      className={cn(
        'inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium outline-none transition-colors duration-[var(--ds-duration-base)] focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        link.variant === 'primary'
          ? 'border-transparent bg-brand text-brand-foreground hover:bg-brand-hover'
          : 'border-border bg-surface/70 text-foreground hover:bg-surface-muted',
      )}
      target='_blank'
      href={link.href}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {link.label}
      <Icon aria-hidden="true" size={16} strokeWidth={2} />
    </motion.a>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <motion.div
      aria-hidden="true"
      className="relative min-h-72 overflow-hidden rounded-xl border border-border bg-background/70 p-5"
      whileHover={{ scale: 1.01 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(96_165_250/0.16),transparent_34%),linear-gradient(rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:auto,36px_36px,36px_36px]" />
      <div className="relative flex h-full min-h-64 flex-col justify-between rounded-lg border border-border bg-surface/70 p-5 shadow-soft backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <span className="inline-flex size-12 items-center justify-center rounded-lg border border-border bg-surface-muted text-foreground">
            <ShieldCheck aria-hidden="true" size={22} strokeWidth={2} />
          </span>
          <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted">
            Mobile Security
          </span>
        </div>
        <div>
          <p className="text-sm text-muted">Product preview</p>
          <p className="mt-2 text-3xl font-semibold text-foreground">
            {project.name}
          </p>
          <div className="mt-5 grid gap-2">
            {['SSL expiry', 'Dark-web exposure', 'Security alerts'].map(
              (item) => (
                <div
                  className="flex items-center justify-between rounded-md border border-border bg-background/55 px-3 py-2 text-sm text-muted"
                  key={item}
                >
                  <span>{item}</span>
                  <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgb(52_211_153/0.65)]" />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectContent({ compact = false, project }: { compact?: boolean; project: Project }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        {project.badge ? (
          <span className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground">
            ⭐ {project.badge}
          </span>
        ) : null}
        <span className="rounded-full border border-border bg-surface-muted px-3 py-1.5 text-xs font-medium text-muted">
          {project.type}
        </span>
      </div>

      <div className="mt-5">
        <h3
          className={cn(
            'font-semibold leading-tight text-foreground',
            compact ? 'text-2xl' : 'text-4xl sm:text-5xl',
          )}
        >
          {project.name}
        </h3>
        <p
          className={cn(
            'mt-4 leading-7 text-muted',
            compact ? 'text-sm' : 'max-w-3xl text-base sm:text-lg',
          )}
        >
          {project.description}
        </p>
      </div>

      <div className="mt-6 grid gap-3">
        {project.contributions.map((contribution) => (
          <div className="flex gap-3 text-sm leading-6 text-muted" key={contribution}>
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-foreground"
              size={16}
              strokeWidth={2}
            />
            <span>{contribution}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.impact.map((impact) => (
          <div
            className="rounded-lg border border-border bg-background/60 px-4 py-3"
            key={impact}
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Impact
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              {impact}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <TechnologyBadge key={technology} technology={technology} />
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        {project.links.map((link) => (
          <ProjectButton key={`${project.name}-${link.label}`} link={link} />
        ))}
      </div>
    </>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      aria-labelledby="featured-project-heading"
      className="overflow-hidden rounded-xl border border-border bg-surface/55 p-5 shadow-elevated backdrop-blur-xl transition-colors duration-[var(--ds-duration-base)] hover:border-foreground/20 hover:bg-surface/70 sm:p-7"
      transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
      variants={itemVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <ProjectVisual project={project} />
        <div>
          <div id="featured-project-heading">
            <ProjectContent project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      aria-labelledby={`project-${project.name.toLowerCase()}`}
      className="flex h-full flex-col rounded-xl border border-border bg-surface/50 p-6 shadow-soft backdrop-blur-xl transition-colors duration-[var(--ds-duration-base)] hover:border-foreground/20 hover:bg-surface/75"
      transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
      variants={itemVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
    >
      <div id={`project-${project.name.toLowerCase()}`}>
        <ProjectContent compact project={project} />
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  const [featuredProject, ...otherProjects] = projects

  return (
    <Section
      aria-labelledby="projects-heading"
      className="relative overflow-hidden border-t border-border/70 bg-background"
      id="projects"
    >
      <Container>
        <motion.div
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          variants={sectionVariants}
        >
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={itemVariants}
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
              Projects
            </p>
            <h2
              className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
              id="projects-heading"
            >
              Products I've Built & Shipped
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              A selection of production applications I've designed, developed
              and delivered across web and mobile platforms.
            </p>
          </motion.div>

          <div className="mt-14 space-y-5">
            {featuredProject ? <FeaturedProject project={featuredProject} /> : null}

            <motion.div
              aria-label="Additional featured projects"
              className="grid gap-5 lg:grid-cols-2"
              variants={sectionVariants}
            >
              {otherProjects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
