import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const cards = [
  {
    title: 'Coins',
    desc: 'A cada partida que você joga ganha 1 COIN basta mandar o comando “.p” para saber a quantidade de coins que você tem',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8921A" strokeWidth="1.5" strokeLinecap="round" width="48" height="48">
        <circle cx="24" cy="24" r="20" /><path d="M16 24l6 6 10-12" />
      </svg>
    ),
  },
  {
    title: 'Lojinha Pitbull',
    desc: 'Você pode comprar diversos produtos com seus coins, basta escolher o produto que deseja e adquirir',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8921A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
        <path d="M6 6h3l3.5 18h20l3-12H10" />
        <circle cx="17" cy="40" r="2" />
        <circle cx="32" cy="40" r="2" />
      </svg>
    ),
  },
  {
    title: 'Diamantes',
    desc: 'Canal de recargas de diamantes via token, sem risco de reembolso.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8921A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
        <polygon points="24,4 44,18 24,44 4,18" />
        <polyline points="4,18 14,18 24,4 34,18 44,18" />
        <polyline points="14,18 24,44 34,18" />
      </svg>
    ),
  },
  {
    title: 'Invites',
    desc: 'gere seus invites, compartilhe seu link e ganhe recompensas exclusivas.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8921A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
        <rect x="4" y="12" width="40" height="24" rx="2" />
        <path d="M4 20a4 4 0 0 0 0 8" />
        <path d="M44 20a4 4 0 0 1 0 8" />
        <line x1="17" y1="12" x2="17" y2="36" strokeDasharray="2 2" />
        <line x1="24" y1="20" x2="36" y2="20" />
        <line x1="24" y1="24" x2="36" y2="24" />
        <line x1="24" y1="28" x2="36" y2="28" />
      </svg>
    ),
  },
]

function AboutCard({ card, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(232,146,26,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(232,146,26,0.35)' : 'rgba(232,146,26,0.12)'}`,
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s',
        cursor: 'default',
      }}
    >
      {hovered && (
        <>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,transparent,#E8921A,transparent)' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg,transparent,#E8921A,transparent)' }} />
        </>
      )}
      <div style={{ marginBottom: '1.5rem', opacity: 0.9 }}>{card.icon}</div>
      <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.75rem', color: '#F0EDE8' }}>{card.title}</h3>
      <p style={{ fontSize: '0.9rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.7, fontWeight: 300 }}>{card.desc}</p>
    </motion.div>
  )
}

export default function About() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="sobre" style={{ position: 'relative', zIndex: 2, padding: '1rem 2rem' }}>
      <div style={{ position: 'absolute', left: '-5%', top: '30%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(232,146,26,0.07),transparent)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 40, height: 1.5, background: '#E8921A' }} />
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8921A' }}>Pitbull - coins</span>
          </div>
          <h2 style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
            Mega Evento <span style={{ color: '#E8921A' }}>Pitbull</span>
          </h2>
          <div style={{ width: 60, height: 2, background: '#E8921A', margin: '1rem 0' }} />
          <p style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.55)', maxWidth: 500, lineHeight: 1.7, fontWeight: 300 }}>
            Evento de invites da pitbull coins com recompensas por convites, moedas por partidas e loja de itens usando coins.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
          {cards.map((card, i) => <AboutCard key={card.title} card={card} index={i} />)}
        </div>
      </div>
    </section>
  )
}
