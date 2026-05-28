import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { num: '25', suffix: 'K+', label: 'Membros na Comunidade' },
  { num: '1 ', suffix: 'Coin', label: 'a cada partida ganha' },
  { num: '2 ', suffix: 'Reais', label: 'A Cada pessoa que você convidar' },
  { num: 'FILAS ', suffix: '', label: 'Mob - Emu - Mista - Tática' },
  { num: '30$+ ', suffix: 'eventos', label: 'Venha jogar agora!' },
]

const tickerItems = [
  { home: '1 win', away: '2 no pix', odd: '13hr' },
  { home: '2 win', away: '4 no pix', odd: '15hr' },
  { home: '3 win', away: '6 no pix', odd: '17hr' },
  { home: '4 win', away: '10 no pix', odd: '19hr' },
  { home: '3 win', away: '8 no pix', odd: '21hr' },
  { home: '1 win', away: '3 no pix', odd: '23hr' },
]

export default function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  const doubled = [...tickerItems, ...tickerItems]

  return (
    <section id="estatisticas" style={{ position: 'relative', zIndex: 2, padding: '7rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div ref={headerRef} initial={{ opacity: 0, y: 30 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 40, height: 1.5, background: '#E8921A' }} />
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8921A' }}>Nossos Números</span>
            <div style={{ width: 40, height: 1.5, background: '#E8921A' }} />
          </div>
          <h2 style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
            Resultados <span style={{ color: '#E8921A' }}>Reais</span>
          </h2>
          <div style={{ width: 60, height: 2, background: '#E8921A', margin: '1rem auto' }} />
          <p style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.55)', maxWidth: 500, lineHeight: 1.7, fontWeight: 300 }}>
           Mais do que números, somos uma força imparável, uma comunidade que cresce e se fortalece a cada dia. Aqui, cada jogador importa, cada conquista é compartilhada e cada vitória é celebrada.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(232,146,26,0.1)',
            padding: '4rem 3rem',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,#E8921A,transparent)' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '2rem' }}>
            {metrics.map((m, i) => (
              <div key={m.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '2.8rem', fontWeight: 800, color: '#E8921A', letterSpacing: '-0.03em', lineHeight: 1 }}>{m.num}</span>
                  <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#F5C842' }}>{m.suffix}</span>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.45)' }}>{m.label}</span>
              </div>
            ))}
          </div>

          {/* Ticker */}
          <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(232,146,26,0.1)', paddingTop: '2rem', overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '3rem', animation: 'ticker 25s linear infinite', whiteSpace: 'nowrap' }}>
              {doubled.map((t, i) => (
                <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(240,237,232,0.7)' }}>{t.home}</span>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(240,237,232,0.3)', letterSpacing: '0.1em' }}>-</span>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(240,237,232,0.7)' }}>{t.away}</span>
                  <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.9rem', fontWeight: 700, color: '#F5C842' }}>{t.odd}</span>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(232,146,26,0.4)', display: 'inline-block' }} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
