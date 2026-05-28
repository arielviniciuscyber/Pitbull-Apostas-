import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  {
    id: 'discord',
    name: 'Discord',
    desc: 'Servidor principal da comunidade. Canais organizados por categoria, eventos pix 24hr por dia com 10% de taxa do ADM',
    href: 'https://discord.com/invite/58mcCZ5YBf',
    cta: 'Entrar no Servidor',
    color: '#5865F2',
    glow: 'rgba(88,101,242,0.08)',
    icon: <svg viewBox="0 0 24 24" fill="#5865F2" width="32" height="32"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    desc: 'Acesse nossa página principal do WhatsApp e fique conectado com todas as novidades, avisos e interações da comunidade!',
    href: 'https://chat.whatsapp.com/JDlE2mxBflK6g5ugYVsvg7',
    cta: 'Acessar Canal',
    color: '#25D366',
    glow: 'rgba(37,211,102,0.08)',
    icon: <svg viewBox="0 0 24 24" fill="#25D366" width="32" height="32"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    desc: 'Siga, Comente e Compartilhe nosso Instagram e acompanhe novidades, conteúdos exclusivos e momentos incríveis da comunidade!',
    href: 'https://www.instagram.com/org.pitbull?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    cta: 'Seguir no Instagram',
    color: '#E8921A',
    glow: 'rgba(232,146,26,0.08)',
    icon: <svg viewBox="0 0 24 24" fill="#E8921A" width="32" height="32"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    desc: 'Toda Semana video novo, sobre eventos pix, e dicas para ganhar e farmar seus Aps',
    href: 'https://www.tiktok.com/@pitbull_apostas26k?is_from_webapp=1&sender_device=pc',
    cta: 'Siga-nos no TikTok',
    color: '#CC2200',
    glow: 'rgba(204,34,0,0.08)',
    icon: <svg viewBox="0 0 24 24" fill="#CC2200" width="32" height="32"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
  },
]

function SocialCard({ s, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
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
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(232,146,26,0.4)' : 'rgba(74,74,90,0.5)'}`,
        padding: '2.5rem 2rem',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.25rem',
        position: 'relative', overflow: 'hidden',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.3s',
      }}
    >
      {hovered && (
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at bottom left, ${s.glow}, transparent 70%)`, pointerEvents: 'none' }} />
      )}
      <div>{s.icon}</div>
      <div style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.name}</div>
      <p style={{ fontSize: '0.875rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.6, fontWeight: 300, flex: 1 }}>{s.desc}</p>
      <a href={s.href} target="_blank" rel="noopener" className="clip-skew-sm"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Oswald, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.6rem 1.25rem', background: 'transparent', color: '#E8921A', border: '1px solid rgba(232,146,26,0.4)', textDecoration: 'none', transition: 'all 0.25s' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#E8921A'; e.currentTarget.style.color = '#0A0705' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#E8921A' }}
      >{s.cta}</a>
    </motion.div>
  )
}

export default function Social() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="comunidade" style={{ position: 'relative', zIndex: 2, padding: '7rem 2rem', background: 'rgba(255,255,255,0.015)' }}>
      <div style={{ position: 'absolute', right: 0, top: '20%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(204,34,0,0.06),transparent)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div ref={headerRef} initial={{ opacity: 0, y: 30 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 40, height: 1.5, background: '#E8921A' }} />
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8921A' }}>Acesso direto</span>
          </div>
          <h2 style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
            Nossas <span style={{ color: '#E8921A' }}>Redes</span>
          </h2>
          <div style={{ width: 60, height: 2, background: '#E8921A', margin: '1rem 0' }} />
          <p style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.55)', maxWidth: 500, lineHeight: 1.7, fontWeight: 300 }}>
            Siga nossas redes sociais e fique por dentro de todas as novidades do nosso servidor !!!
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
          {socials.map((s, i) => <SocialCard key={s.id} s={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
