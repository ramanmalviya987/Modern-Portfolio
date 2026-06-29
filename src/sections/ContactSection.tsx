// import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
// import { ArrowUpRight, Check, Download, Mail } from 'lucide-react'
// import { useEffect, useState } from 'react'
// import {
//   contactEmail,
//   contactMethods,
//   type ContactMethod,
// } from '../constants/contact'
// import { Container, Section } from '../components/common'
// import { cn } from '../utils/cn'

// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 18 },
//   visible: { opacity: 1, y: 0 },
// }

// function ContactAction({
//   children,
//   href,
//   icon: Icon,
//   primary = false,
// }: {
//   children: string
//   href: string
//   icon: typeof Mail
//   primary?: boolean
// }) {
//   const shouldReduceMotion = useReducedMotion()

//   return (
//     <motion.a
//       className={cn(
//         'inline-flex h-12 items-center justify-center gap-2 rounded-md border px-5 text-sm font-medium outline-none transition-colors duration-[var(--ds-duration-base)] focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6',
//         primary
//           ? 'border-transparent bg-brand text-brand-foreground hover:bg-brand-hover'
//           : 'border-border bg-surface/70 text-foreground hover:bg-surface-muted',
//       )}
//       download={primary ? undefined : true}
//       href={href}
//       whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
//       whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
//     >
//       <Icon aria-hidden="true" size={17} strokeWidth={2} />
//       {children}
//     </motion.a>
//   )
// }

// function ContactCard({
//   method,
//   onCopyEmail,
// }: {
//   method: ContactMethod
//   onCopyEmail: () => void
// }) {
//   const Icon = method.icon
//   const shouldReduceMotion = useReducedMotion()

//   return (
//     <motion.article
//       className="group rounded-xl border border-border bg-surface/55 p-5 shadow-soft backdrop-blur-xl transition-colors duration-[var(--ds-duration-base)] hover:border-foreground/20 hover:bg-surface/75 sm:p-6"
//       transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
//       variants={itemVariants}
//       whileHover={shouldReduceMotion ? undefined : { y: -4 }}
//     >
//       <div className="flex items-start gap-4">
//         <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-muted text-foreground transition-colors duration-[var(--ds-duration-base)] group-hover:border-foreground/20">
//           <Icon aria-hidden="true" size={18} strokeWidth={2} />
//         </span>
//         <div className="min-w-0 flex-1">
//           <h3 className="text-base font-semibold text-foreground">
//             {method.title}
//           </h3>
//           <p className="mt-1 break-words text-sm leading-6 text-muted">
//             {method.description}
//           </p>
//         </div>
//       </div>

//       <div className="mt-5">
//         {method.type === 'copy' ? (
//           <motion.button
//             aria-label={`Copy ${method.description}`}
//             className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background/70 px-4 text-sm font-medium text-foreground outline-none transition-colors duration-[var(--ds-duration-base)] hover:bg-surface-muted focus-visible:ring-2 focus-visible:ring-focus"
//             onClick={onCopyEmail}
//             type="button"
//             whileHover={shouldReduceMotion ? undefined : { y: -1 }}
//             whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
//           >
//             <Check aria-hidden="true" size={15} strokeWidth={2} />
//             {method.actionLabel}
//           </motion.button>
//         ) : null}

//         {method.type === 'link' && method.href ? (
//           <motion.a
//             className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background/70 px-4 text-sm font-medium text-foreground outline-none transition-colors duration-[var(--ds-duration-base)] hover:bg-surface-muted focus-visible:ring-2 focus-visible:ring-focus"
//             href={method.href}
//             rel="noreferrer"
//             target="_blank"
//             whileHover={shouldReduceMotion ? undefined : { y: -1 }}
//             whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
//           >
//             {method.actionLabel}
//             <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2} />
//           </motion.a>
//         ) : null}

//         {method.type === 'static' ? (
//           <span className="inline-flex h-10 items-center rounded-md border border-border bg-background/70 px-4 text-sm font-medium text-muted">
//             Available remotely
//           </span>
//         ) : null}
//       </div>
//     </motion.article>
//   )
// }

// export function ContactSection() {
//   const [showToast, setShowToast] = useState(false)

//   useEffect(() => {
//     if (!showToast) {
//       return
//     }

//     const timeoutId = window.setTimeout(() => setShowToast(false), 2200)

//     return () => window.clearTimeout(timeoutId)
//   }, [showToast])

//   const copyEmail = async () => {
//     await navigator.clipboard.writeText(contactEmail)
//     setShowToast(true)
//   }

//   return (
//     <Section
//       aria-labelledby="contact-heading"
//       className="relative overflow-hidden border-t border-border/70 bg-background"
//       id="contact"
//     >
//       <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgb(96_165_250/0.1),transparent_44%)]" />
//       <Container>
//         <motion.div
//           className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
//           initial="hidden"
//           viewport={{ once: true, amount: 0.25 }}
//           whileInView="visible"
//           variants={sectionVariants}
//         >
//           <div>
//             <motion.div
//               className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/55 px-3 py-1.5 text-sm text-muted backdrop-blur-xl"
//               variants={itemVariants}
//             >
//               <span aria-hidden="true">🟢</span>
//               <span>Available for Opportunities</span>
//             </motion.div>

//             <motion.p
//               className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-muted"
//               variants={itemVariants}
//             >
//               Contact
//             </motion.p>

//             <motion.h2
//               className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
//               id="contact-heading"
//               variants={itemVariants}
//             >
//               Let's Build Something Great Together
//             </motion.h2>

//             <motion.p
//               className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
//               variants={itemVariants}
//             >
//               I'm currently open to Frontend Engineer opportunities, freelance
//               projects and exciting collaborations. If you have an opportunity
//               or simply want to connect, I'd love to hear from you.
//             </motion.p>

//             <motion.p
//               className="mt-5 max-w-2xl text-sm leading-7 text-muted"
//               variants={itemVariants}
//             >
//               I bring 3+ years of experience across React.js, Next.js,
//               TypeScript and React Native, with a focus on production-ready
//               interfaces, component architecture and reliable user experiences.
//             </motion.p>

//             <motion.div
//               className="mt-9 flex flex-col gap-3 sm:flex-row"
//               variants={itemVariants}
//             >
//               <ContactAction href={`mailto:${contactEmail}`} icon={Mail} primary>
//                 Email Me
//               </ContactAction>
//               <ContactAction href="/resume.pdf" icon={Download}>
//                 Download Resume
//               </ContactAction>
//             </motion.div>
//           </div>

//           <motion.div
//             aria-label="Contact methods"
//             className="grid gap-4 sm:grid-cols-2"
//             variants={sectionVariants}
//           >
//             {contactMethods.map((method) => (
//               <ContactCard
//                 key={method.title}
//                 method={method}
//                 onCopyEmail={copyEmail}
//               />
//             ))}
//           </motion.div>
//         </motion.div>
//       </Container>

//       <AnimatePresence>
//         {showToast ? (
//           <motion.div
//             aria-live="polite"
//             className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground shadow-elevated backdrop-blur-xl"
//             exit={{ opacity: 0, y: 12 }}
//             initial={{ opacity: 0, y: 12 }}
//             role="status"
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
//           >
//             Email copied successfully.
//           </motion.div>
//         ) : null}
//       </AnimatePresence>
//     </Section>
//   )

// }

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Download, Mail, type LucideIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  contactEmail,
  contactMethods,
  type ContactMethod,
} from '../constants/contact'
import { resumeFileName, resumePath } from '../constants/resume'
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

function ContactAction({
  children,
  href,
  icon: Icon,
  primary = false,
}: {
  children: string
  href: string
  icon: LucideIcon
  primary?: boolean
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      className={cn(
        'inline-flex h-12 items-center justify-center gap-2 rounded-md border px-5 text-sm font-medium outline-none transition-colors duration-[var(--ds-duration-base)] focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6',
        primary
          ? 'border-transparent bg-brand text-brand-foreground hover:bg-brand-hover'
          : 'border-border bg-surface/70 text-foreground hover:bg-surface-muted',
      )}
      download={primary ? undefined : resumeFileName}
      href={href}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
    >
      <Icon aria-hidden="true" size={17} strokeWidth={2} />
      {children}
    </motion.a>
  )
}

function ContactCard({
  method,
  onCopyEmail,
}: {
  method: ContactMethod
  onCopyEmail: () => void
}) {
  const Icon = method.icon
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group rounded-xl border border-border bg-surface/55 p-5 shadow-soft backdrop-blur-xl transition-colors duration-[var(--ds-duration-base)] hover:border-foreground/20 hover:bg-surface/75 sm:p-6"
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      variants={itemVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-muted text-foreground transition-colors duration-[var(--ds-duration-base)] group-hover:border-foreground/20">
          <Icon aria-hidden="true" size={18} strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-foreground">
            {method.title}
          </h3>
          <p className="mt-1 break-words text-sm leading-6 text-muted">
            {method.description}
          </p>
        </div>
      </div>

      <div className="mt-5">
        {method.type === 'copy' ? (
          <motion.button
            aria-label={`Copy ${method.description}`}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background/70 px-4 text-sm font-medium text-foreground outline-none transition-colors duration-[var(--ds-duration-base)] hover:bg-surface-muted focus-visible:ring-2 focus-visible:ring-focus"
            onClick={onCopyEmail}
            type="button"
            whileHover={shouldReduceMotion ? undefined : { y: -1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            <Check aria-hidden="true" size={15} strokeWidth={2} />
            {method.actionLabel}
          </motion.button>
        ) : null}

        {method.type === 'link' && method.href ? (
          <motion.a
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background/70 px-4 text-sm font-medium text-foreground outline-none transition-colors duration-[var(--ds-duration-base)] hover:bg-surface-muted focus-visible:ring-2 focus-visible:ring-focus"
            href={method.href}
            rel="noreferrer"
            target="_blank"
            whileHover={shouldReduceMotion ? undefined : { y: -1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            {method.actionLabel}
            <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2} />
          </motion.a>
        ) : null}

        {method.type === 'static' ? (
          <span className="inline-flex h-10 items-center rounded-md border border-border bg-background/70 px-4 text-sm font-medium text-muted">
            Available remotely
          </span>
        ) : null}
      </div>
    </motion.article>
  )
}

export function ContactSection() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (!showToast) return

    const timeoutId = window.setTimeout(() => setShowToast(false), 2200)
    return () => window.clearTimeout(timeoutId)
  }, [showToast])

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(contactEmail)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = contactEmail
        textarea.setAttribute('readonly', '')
        textarea.style.position = 'absolute'
        textarea.style.left = '-9999px'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setShowToast(true)
    } catch {
      window.location.href = `mailto:${contactEmail}`
    }
  }

  return (
    <Section
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-border/70 bg-background"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgb(96_165_250/0.1),transparent_44%)]" />
      <Container>
        <motion.div
          className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
          initial="hidden"
          viewport={{ once: true, amount: 0.25 }}
          whileInView="visible"
          variants={sectionVariants}
        >
          <div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/55 px-3 py-1.5 text-sm text-muted backdrop-blur-xl"
              variants={itemVariants}
            >
              <span aria-hidden="true">🟢</span>
              <span>Available for Opportunities</span>
            </motion.div>

            <motion.p
              className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-muted"
              variants={itemVariants}
            >
              Contact
            </motion.p>

            <motion.h2
              className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
              id="contact-heading"
              variants={itemVariants}
            >
              Let's Build Something Great Together
            </motion.h2>

            <motion.p
              className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
              variants={itemVariants}
            >
              I'm currently open to Frontend Engineer opportunities, freelance
              projects and exciting collaborations. If you have an opportunity
              or simply want to connect, I'd love to hear from you.
            </motion.p>

            <motion.p
              className="mt-5 max-w-2xl text-sm leading-7 text-muted"
              variants={itemVariants}
            >
              I bring 3+ years of experience across React.js, Next.js,
              TypeScript and React Native, with a focus on production-ready
              interfaces, component architecture and reliable user experiences.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              variants={itemVariants}
            >
              <ContactAction href={`mailto:${contactEmail}`} icon={Mail} primary>
                Email Me
              </ContactAction>
              <ContactAction href={resumePath} icon={Download}>
                Download Resume
              </ContactAction>
            </motion.div>
          </div>

          <motion.div
            aria-label="Contact methods"
            className="grid gap-4 sm:grid-cols-2"
            variants={sectionVariants}
          >
            {contactMethods.map((method) => (
              <ContactCard
                key={method.title}
                method={method}
                onCopyEmail={copyEmail}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>

      <AnimatePresence>
        {showToast ? (
          <motion.div
            aria-live="polite"
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground shadow-elevated backdrop-blur-xl"
            exit={{ opacity: 0, y: 12 }}
            initial={{ opacity: 0, y: 12 }}
            role="status"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
          >
            Email copied successfully.
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  )
}
