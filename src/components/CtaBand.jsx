import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CtaBand() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contato" style={{ padding: '5rem 2rem', background: 'rgba(232,146,26,0.04)', borderTop: '1px solid rgba(232,146,26,0.1)', borderBottom: '1px solid rgba(232,146,26,0.1)', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
        <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: 40, height: 1.5, background: '#E8921A' }} />
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8921A' }}>Pronto para começar</span>
          </div>
          <h2 style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.05 }}>
            Junte-se a <span style={{ color: '#E8921A' }}>25 Mil</span> membros<br />
            
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://discord.com/invite/58mcCZ5YBf" target="_blank" rel="noopener" className="clip-skew"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'Oswald, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.9rem 2rem', background: '#E8921A', color: '#0A0705', textDecoration: 'none', transition: 'all 0.25s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#F5C842'}
            onMouseLeave={e => e.currentTarget.style.background = '#E8921A'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
            Entrar no Discord
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener" className="clip-skew"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'Oswald, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.9rem 2rem', background: 'transparent', color: '#F0EDE8', border: '1.5px solid rgba(240,237,232,0.3)', textDecoration: 'none', transition: 'all 0.25s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(240,237,232,0.7)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(240,237,232,0.3)'}
          >WhatsApp</a>
        </motion.div>
      </div>
    </section>
  )
}
