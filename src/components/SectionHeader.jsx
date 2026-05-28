import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, sub, center = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: '4rem', ...(center ? { textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' } : {}) }}
    >
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        {center && <div style={{ width: 40, height: 1.5, background: 'var(--gold)' }} />}
        {!center && <div style={{ width: 40, height: 1.5, background: 'var(--gold)' }} />}
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
          {eyebrow}
        </span>
        {center && <div style={{ width: 40, height: 1.5, background: 'var(--gold)' }} />}
      </div>
      <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
        {title}
      </h2>
      <div style={{ width: 60, height: 2, background: 'var(--gold)', margin: center ? '1rem auto' : '1rem 0' }} />
      {sub && (
        <p style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.55)', maxWidth: 500, marginTop: '0.75rem', lineHeight: 1.7, fontWeight: 300, ...(center ? { textAlign: 'center' } : {}) }}>
          {sub}
        </p>
      )}
    </motion.div>
  )
}
