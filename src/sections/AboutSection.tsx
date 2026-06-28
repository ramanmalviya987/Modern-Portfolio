import { motion, useReducedMotion } from 'framer-motion'
import { aboutCards, type AboutCard } from '../constants/about'
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

function AboutInfoCard({ card, className }: { card: AboutCard; className?: string }) {
  const Icon = card.icon
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className={cn(
        'rounded-xl border border-border bg-surface/55 p-5 shadow-soft backdrop-blur-xl transition-colors duration-[var(--ds-duration-base)] hover:border-foreground/20 hover:bg-surface/75 sm:p-6',
        className,
      )}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      variants={itemVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-muted text-foreground">
          <Icon aria-hidden="true" size={18} strokeWidth={2} />
        </span>
        <div>
          <h3 className="text-sm font-medium text-muted">{card.title}</h3>
          <p className="mt-2 text-lg font-semibold leading-snug text-foreground">
            {card.value}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export function AboutSection() {
  return (
    <Section
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-t border-border/70 bg-background"
      id="about"
    >
      <Container>
        <motion.div
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
          initial="hidden"
          transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView="visible"
          variants={sectionVariants}
        >
          <div>
            <motion.p
              className="text-sm font-medium uppercase tracking-[0.18em] text-muted"
              variants={itemVariants}
            >
              About
            </motion.p>
            <motion.h2
              className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
              id="about-heading"
              variants={itemVariants}
            >
              Building Experiences That Feel Fast, Thoughtful & Reliable.
            </motion.h2>
            <motion.div
              className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-muted sm:text-lg"
              variants={itemVariants}
            >
              <p>
                I am Raman Malviya, a Frontend Engineer based in Bangalore with
                3+ years of experience building production-ready web and mobile
                applications. My work is centered around React.js, Next.js,
                TypeScript, and React Native.
              </p>
              <p>
                I enjoy solving UI and UX problems where polish, performance,
                and maintainability all matter. I have worked on applications
                launched to 10,000+ downloads, built reusable component systems,
                and delivered frontend features that can scale across products.
              </p>
              <p>
                I am comfortable integrating REST APIs, collaborating with
                backend teams, and turning product requirements into clean,
                reliable interfaces. I keep learning modern frontend practices
                because the best user experiences usually come from thoughtful
                engineering details.
              </p>
            </motion.div>
          </div>

          <motion.div
            aria-label="About Raman Malviya highlights"
            className="grid gap-4 sm:grid-cols-2"
            variants={sectionVariants}
          >
            {aboutCards.map((card) => (
              <AboutInfoCard card={card} key={card.title} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
