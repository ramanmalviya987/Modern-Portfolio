import { motion, useReducedMotion } from 'framer-motion'
import { CalendarDays, CheckCircle2 } from 'lucide-react'
import {
  experienceEntries,
  type ExperienceEntry,
} from '../constants/experience'
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

function TechnologyChip({ technology }: { technology: string }) {
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

function ExperienceCard({
  entry,
  align,
}: {
  entry: ExperienceEntry
  align: 'left' | 'right'
}) {
  const Icon = entry.icon
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      aria-labelledby={`experience-${entry.company
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')}`}
      className={cn(
        'group relative rounded-xl border border-border bg-surface/55 p-6 shadow-soft backdrop-blur-xl transition-colors duration-[var(--ds-duration-base)] hover:border-foreground/20 hover:bg-surface/75 sm:p-7',
        align === 'right' ? 'lg:ml-auto' : 'lg:mr-auto',
      )}
      initial={{
        opacity: 0,
        x: shouldReduceMotion ? 0 : align === 'right' ? 28 : -28,
        y: shouldReduceMotion ? 12 : 0,
      }}
      transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-muted text-sm font-semibold tracking-[0.08em] text-foreground">
            <span className="absolute -right-1 -top-1 inline-flex size-5 items-center justify-center rounded-full border border-border bg-background text-focus">
              <Icon aria-hidden="true" size={11} strokeWidth={2.3} />
            </span>
            {entry.logoLabel}
          </span>
          <div>
            <p className="text-sm font-medium text-muted">{entry.company}</p>
            <h3
              className="mt-1 text-xl font-semibold leading-tight text-foreground"
              id={`experience-${entry.company
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')}`}
            >
              {entry.role}
            </h3>
          </div>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted">
          <CalendarDays aria-hidden="true" size={14} strokeWidth={2} />
          {entry.duration}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-muted">{entry.description}</p>

      <div className="mt-5 rounded-lg border border-border bg-background/60 p-4">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Key Impact
        </p>
        <p className="mt-2 text-sm font-medium leading-6 text-foreground">
          {entry.impact}
        </p>
      </div>

      <ul className="mt-5 space-y-3" aria-label={`${entry.company} highlights`}>
        {entry.achievements.map((achievement) => (
          <li className="flex gap-3 text-sm leading-6 text-muted" key={achievement}>
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-foreground"
              size={16}
              strokeWidth={2}
            />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {entry.technologies.map((technology) => (
          <TechnologyChip key={technology} technology={technology} />
        ))}
      </div>
    </motion.article>
  )
}

export function ExperienceSection() {
  return (
    <Section
      aria-labelledby="experience-heading"
      className="relative overflow-hidden border-t border-border/70 bg-background"
      id="experience"
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
              Experience
            </p>
            <h2
              className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
              id="experience-heading"
            >
              My Journey as a Frontend Engineer
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              A timeline of building products, solving real-world problems, and
              continuously improving as a frontend engineer.
            </p>
          </motion.div>

          <div
            aria-label="Professional experience timeline"
            className="relative mt-14"
          >
            <motion.div
              aria-hidden="true"
              className="absolute bottom-0 left-4 top-0 w-px bg-border lg:left-1/2 lg:-translate-x-1/2"
              initial={{ scaleY: 0 }}
              style={{ originY: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0, 0, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={{ scaleY: 1 }}
            />

            <ol className="space-y-8 lg:space-y-12">
              {experienceEntries.map((entry, index) => {
                const align = index % 2 === 0 ? 'left' : 'right'

                return (
                  <li
                    className="relative grid gap-6 pl-12 lg:grid-cols-[1fr_4rem_1fr] lg:gap-0 lg:pl-0"
                    key={entry.company}
                  >
                    <motion.div
                      aria-hidden="true"
                      className="absolute left-4 top-7 z-10 size-3 -translate-x-1/2 rounded-full bg-foreground shadow-[0_0_24px_rgb(245_245_245/0.45)] lg:left-1/2"
                      initial={{ opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
                      viewport={{ once: true, amount: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                    />

                    <div className={align === 'left' ? 'lg:col-start-1' : 'lg:col-start-3'}>
                      <ExperienceCard align={align} entry={entry} />
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
