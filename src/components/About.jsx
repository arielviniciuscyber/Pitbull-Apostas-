import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const cards = [
  {
    title: 'Sinais Diários',
    desc: 'Análises fundamentadas entregues todos os dias, com odds selecionadas e gestão de banca integrada. Sem achismos, apenas método.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8921A" strokeWidth="1.5" strokeLinecap="round" width="48" height="48">
        <circle cx="24" cy="24" r="20" /><path d="M16 24l6 6 10-12" />
      </svg>
    ),
  },
  {
    title: 'Comunidade Ativa',
    desc: 'Milhares de membros engajados, troca de conhecimento constante e suporte especializado disponível para tirar suas dúvidas.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8921A" strokeWidth="1.5" strokeLinecap="round" width="48" height="48">
        <path d="M8 36V20l16-10 16 10v16" /><rect x="18" y="26" width="12" height="10" rx="1" /><path d="M24 26v10" />
      </svg>
    ),
  },
  {
    title: 'Gestão Esportiva',
    desc: 'Ensinamos gestão de banca profissional, controle emocional e estratégias de longo prazo para maximizar seus resultados.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8921A" strokeWidth="1.5" strokeLinecap="round" width="48" height="48">
        <polyline points="6,38 18,24 28,32 42,14" /><polyline points="34,14 42,14 42,22" />
      </svg>
    ),
  },
  {
    title: 'Conteúdo Exclusivo',
    desc: 'Lives, relatórios, vídeos analíticos e materiais educativos disponíveis apenas para membros da comunidade premium.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8921A" strokeWidth="1.5" strokeLinecap="round" width="48" height="48">
        <path d="M24 4l5 10 11 1.6-8 7.8 1.9 11L24 29l-9.9 5.4L16 23.4 8 15.6 19 14z" />
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
    <section id="sobre" style={{ position: 'relative', zIndex: 2, padding: '7rem 2rem' }}>
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
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8921A' }}>Por que escolher</span>
          </div>
          <h2 style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
            O que <span style={{ color: '#E8921A' }}>oferecemos</span>
          </h2>
          <div style={{ width: 60, height: 2, background: '#E8921A', margin: '1rem 0' }} />
          <p style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.55)', maxWidth: 500, lineHeight: 1.7, fontWeight: 300 }}>
            Uma plataforma construída por especialistas, para quem leva apostas esportivas a sério. Método, disciplina e resultados.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
          {cards.map((card, i) => <AboutCard key={card.title} card={card} index={i} />)}
        </div>
      </div>
    </section>
  )
}
