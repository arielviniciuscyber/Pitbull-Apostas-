import { useEffect, useRef } from 'react'

export default function ParticlesCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, animId
    const particles = []

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.r = Math.random() * 2 + 0.5
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = -(Math.random() * 0.4 + 0.1)
        this.life = Math.random()
        this.maxLife = Math.random() * 0.5 + 0.5
        this.gold = Math.random() > 0.3
      }
      draw() {
        const a = Math.sin((this.life / this.maxLife) * Math.PI) * 0.7
        ctx.globalAlpha = a
        ctx.fillStyle = this.gold ? '#F5C842' : '#E8921A'
        ctx.shadowBlur = this.gold ? 6 : 0
        ctx.shadowColor = '#F5C842'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        this.life += 0.005
        if (this.life > this.maxLife) this.reset()
      }
    }

    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 120; i++) {
      const p = new Particle()
      p.life = Math.random() * p.maxLife
      particles.push(p)
    }

    function animate() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.5,
      }}
    />
  )
}
