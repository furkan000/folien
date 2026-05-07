export default function TitleSlide() {
  return (
    <div className="slide" style={{ padding: 0, position: 'relative' }}>
      {/* Background pattern — abstract sugar crystal motif */}
      <svg
        width="1600"
        height="900"
        viewBox="0 0 1600 900"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBFAF7" />
            <stop offset="100%" stopColor="#EFE9DC" />
          </linearGradient>
          <pattern id="crystal" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60 20 L100 60 L60 100 L20 60 Z" fill="none" stroke="#0A3D5C" strokeWidth="0.5" opacity="0.06" />
          </pattern>
        </defs>
        <rect width="1600" height="900" fill="url(#bg-grad)" />
        <rect width="1600" height="900" fill="url(#crystal)" />

        {/* Decorative large crystals */}
        <g opacity="0.08">
          <path d="M1300 150 L1450 300 L1300 450 L1150 300 Z" fill="#0A3D5C" />
          <path d="M1100 600 L1180 680 L1100 760 L1020 680 Z" fill="#0A3D5C" />
          <path d="M1380 720 L1430 770 L1380 820 L1330 770 Z" fill="#C9A961" />
        </g>
      </svg>

      {/* Vertical accent stripe */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 8,
        background: 'linear-gradient(180deg, #C9A961 0%, #0A3D5C 100%)',
        zIndex: 1
      }} />

      <div style={{ position: 'relative', zIndex: 2, padding: '120px 120px 80px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 56 }}>
            <Logo />
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--primary)' }}>
                Zentrum für Ernährungsmedizin & Diabetologie
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                Klinische Fortbildung · Interdisziplinär
              </div>
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: 24 }}>
            Klinische Fortbildung
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 96,
            fontWeight: 600,
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: 'var(--primary-dark)',
            maxWidth: '1100px',
            marginBottom: 32
          }}>
            Auswirkungen von Zucker<br />
            auf die Gesundheit
            <span style={{ color: 'var(--accent-gold)' }}>.</span>
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <div style={{ width: 60, height: 1, background: 'var(--primary)' }} />
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 32, color: 'var(--primary)', fontWeight: 400 }}>
              Mythos vs. Fakten
            </div>
          </div>

          <p style={{ fontSize: 22, color: 'var(--text-muted)', maxWidth: 800, lineHeight: 1.4, marginTop: 24 }}>
            Evidenzbasierte Einordnung für die klinische Praxis
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid var(--border)', paddingTop: 28 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--text)' }}>
              Prof. Dr. med. Diana Rubin
            </div>
            <div style={{ fontSize: 15, color: 'var(--text-muted)', marginTop: 4, lineHeight: 1.5 }}>
              Chefärztin · Leiterin des Zentrums für Ernährungsmedizin und Diabetologie
            </div>
          </div>
          <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
            <div>07. Mai 2026</div>
            <div style={{ marginTop: 4, color: 'var(--text-subtle)' }}>22 min · 15 Folien</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Logo() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="27" stroke="#0A3D5C" strokeWidth="1.5" fill="#FBFAF7" />
      <path d="M28 12 L40 28 L28 44 L16 28 Z" stroke="#0A3D5C" strokeWidth="1.5" fill="none" />
      <circle cx="28" cy="28" r="4" fill="#C9A961" />
    </svg>
  )
}
