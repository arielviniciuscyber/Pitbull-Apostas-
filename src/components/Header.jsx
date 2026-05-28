import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#comunidade', label: 'Comunidade' },
  { href: '#estatisticas', label: 'Resultados' },
  { href: '#contato', label: 'Contato' },
]

function LogoIcon() {
  return (
    <svg viewBox="0 0 42 42" width="40" height="40" fill="none">
      
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,7,5,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(232,146,26,0.15)' : '1px solid transparent',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', padding: '1.2rem 2rem' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginLeft: '-1rem' }}>
          <LogoIcon />
          <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#F0EDE8' }}>
            Pitbull <span style={{ color: '#E8921A' }}>Apostas</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#F5C842'}
              onMouseLeave={e => e.target.style.color = 'rgba(240,237,232,0.6)'}
            >{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#comunidade"
          className="clip-skew hidden-mobile"
          style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '0.85rem', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.65rem 1.5rem',
            background: 'transparent', border: '1.5px solid #E8921A', color: '#E8921A',
            textDecoration: 'none', transition: 'all 0.25s', display: 'inline-block',
            opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? 'auto' : 'none',
          }}
          onMouseEnter={e => { e.target.style.background = '#E8921A'; e.target.style.color = '#0A0705' }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#E8921A' }}
        >
          Entrar na Comunidade
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: '0.5rem' }}
          className="show-mobile"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: 'block', width: 24, height: 1.5, background: '#F0EDE8', transition: 'all 0.3s' }} />
          ))}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(10,7,5,0.97)', borderTop: '1px solid rgba(232,146,26,0.1)', overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 2rem', gap: 0 }}>
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  style={{ padding: '0.75rem 0', fontFamily: 'Barlow, sans-serif', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.6)', borderBottom: '1px solid rgba(255,255,255,0.04)', textDecoration: 'none' }}
                >{l.label}</a>
              ))}
              <a href="#comunidade" onClick={() => setMenuOpen(false)} className="clip-skew"
                style={{ marginTop: '1rem', textAlign: 'center', fontFamily: 'Oswald, sans-serif', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.75rem 1.5rem', background: '#E8921A', color: '#0A0705', textDecoration: 'none', display: 'block' }}
              >Entrar na Comunidade</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(min-width:901px){ .show-mobile{display:none!important} }
        @media(max-width:900px){ .hidden-mobile{display:none!important} .show-mobile{display:flex!important} }
      `}</style>
    </header>
  )
}
