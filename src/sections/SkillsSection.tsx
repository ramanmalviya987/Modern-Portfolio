import { motion, useReducedMotion } from 'framer-motion'
import { skillCategories, skillsSectionIcon, type SkillCategory } from '../constants/skills'
import { Container, Section } from '../components/common'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

function SkillBadge({ skill }: { skill: string }) {
  return (
    <motion.span
      className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted outline-none transition-colors duration-[var(--ds-duration-base)] hover:border-foreground/20 hover:bg-surface-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-focus"
      tabIndex={0}
      whileHover={{ y: -1 }}
    >
      {skill}
    </motion.span>
  )
}

function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = category.icon
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      aria-labelledby={`skill-${category.title.toLowerCase().replaceAll(' ', '-')}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-surface/50 p-6 shadow-soft backdrop-blur-xl transition-colors duration-[var(--ds-duration-base)] hover:border-foreground/20 hover:bg-surface/75"
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      variants={itemVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-muted text-foreground transition-colors duration-[var(--ds-duration-base)] group-hover:border-foreground/20">
          <Icon aria-hidden="true" size={20} strokeWidth={2} />
        </span>
        <div>
          <h3
            className="text-lg font-semibold text-foreground"
            id={`skill-${category.title.toLowerCase().replaceAll(' ', '-')}`}
          >
            {category.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            {category.description}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </motion.article>
  )
}

export function SkillsSection() {
  const SectionIcon = skillsSectionIcon

  return (
    <Section
      aria-labelledby="skills-heading"
      className="relative overflow-hidden border-t border-border/70 bg-background"
      id="skills"
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
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface/55 px-3 py-1.5 text-sm text-muted backdrop-blur-xl">
              <SectionIcon aria-hidden="true" size={15} strokeWidth={2} />
              <span>Skills</span>
            </div>
            <h2
              className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
              id="skills-heading"
            >
              Technologies I Use to Build Production Applications
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              I enjoy building scalable, performant, and maintainable products
              by combining modern frontend tools with practical engineering
              practices.
            </p>
          </motion.div>

          <motion.div
            aria-label="Technical skill categories"
            className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={sectionVariants}
          >
            {skillCategories.map((category) => (
              <SkillCard category={category} key={category.title} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
