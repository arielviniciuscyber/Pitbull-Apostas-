import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const ChainSVG = ({ side }) => (
  <svg
    width="120"
    height="400"
    viewBox="0 0 120 400"
    style={{
      position: "absolute",
      opacity: 0.12,
      zIndex: 2,
      ...(side === "left"
        ? { left: -60, top: "10%", transform: "rotate(-15deg)" }
        : { right: -40, top: "20%", transform: "rotate(20deg)" }),
    }}
  >
    <defs>
      <linearGradient id={`cg${side}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#9A9AAA" />
        <stop offset="50%" stopColor="#D0D0E0" />
        <stop offset="100%" stopColor="#6A6A7A" />
      </linearGradient>
    </defs>
    <g stroke={`url(#cg${side})`} strokeWidth="4" fill="none">
      {[30, 55, 80, 105, 130, 155, 180, 205, 230, 255].map((cy, i) => (
        <ellipse
          key={cy}
          cx="60"
          cy={cy}
          rx="25"
          ry="12"
          transform={`rotate(${i % 2 === 0 ? -15 : 15},60,${cy})`}
        />
      ))}
    </g>
  </svg>
);

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <style>{`
        .hero-layout {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
        }
        .hero-image {
          position: absolute;
          right: 0;
          top: 90px;
          width: 100%;
          max-width: 590px;
          object-fit: contain;
          filter: drop-shadow(0 0 60px rgba(232,146,26,0.35));
          user-select: none;
          pointer-events: none;
        }
        .hero-text {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 600px;
        }
        @media (max-width: 768px) {
          .hero-image {
            position: relative;
            top: 0;
            right: 0;
            max-width: 100%;
            width: 80%;
            margin: 0 auto;
            display: block;
          }
          .hero-layout {
            flex-direction: column;
            align-items: center;
          }
          .hero-text {
            max-width: 100%;
            text-align: left;
          }
        }
      `}</style>

      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg,rgba(10,7,5,0.95) 0%,rgba(10,7,5,0.6) 50%,rgba(10,7,5,0.85) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(to top,#0A0705,transparent)",
          }}
        />
        <ChainSVG side="left" />
        <ChainSVG side="right" />
      </div>

      <div
        style={{
          position: "absolute",
          left: "10%",
          bottom: "10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle,rgba(204,34,0,0.06),transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "6rem 2rem 4rem",
          width: "100%",
        }}
      >
        <div className="hero-layout">

          {/* TEXTO */}
          <div className="hero-text">

            <motion.div
              {...fadeUp(0)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ width: 40, height: 1.5, background: "#E8921A" }} />
              <span
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#E8921A",
                }}
              >
                A Melhor ORG do Brasil
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: "clamp(2.8rem,7vw,5.2rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                lineHeight: 0.95,
                marginBottom: "1.5rem",
              }}
            >
              A Melhor{" "}
              <span
                style={{
                  color: "#E8921A",
                  textShadow: "0 0 40px rgba(232,146,26,0.5)",
                }}
              >
                ORG
              </span>
              <br />
              <span>de Apostados</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              style={{
                fontSize: "1.1rem",
                fontWeight: 300,
                color: "rgba(240,237,232,0.7)",
                maxWidth: 500,
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              Ao atingir 30k iremos fazer um evento pix grande, então já convide
              todos seus amigos para nossa querida organização!
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "3rem",
              }}
            >
              <a
                href="https://discord.com/invite/58mcCZ5YBf"
                target="_blank"
                rel="noopener"
                className="clip-skew"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.9rem 2rem",
                  background: "#E8921A",
                  color: "#0A0705",
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F5C842")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#E8921A")}
              >
                <DiscordIcon /> Entre no Nosso Discord
              </a>
              <a
                href="https://www.instagram.com/org.pitbull?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener"
                className="clip-skew"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.9rem 2rem",
                  background: "transparent",
                  color: "#F0EDE8",
                  border: "1.5px solid rgba(240,237,232,0.3)",
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(240,237,232,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(240,237,232,0.3)")
                }
              >
                <InstagramIcon /> Siga-nos no Instagram
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              style={{
                display: "flex",
                gap: "3rem",
                borderTop: "1px solid rgba(232,146,26,0.2)",
                paddingTop: "2rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { num: "25K+", label: "Membros" },
                { num: "24hr", label: "Suporte" },
                { num: "3WIN", label: "30 no pix" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#F5C842",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(240,237,232,0.5)",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
          {/* fim texto */}

          {/* IMAGEM */}
          <img
            src="/bannerhome.png"
            alt="Pitbull mascote"
            className="hero-image"
          />

        </div>
      </div>
    </section>
  );
}

function DiscordIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}