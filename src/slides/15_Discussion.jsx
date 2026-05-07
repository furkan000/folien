export default function Discussion({ pageNum, total }) {
  return (
    <div className="slide" style={{ padding: 0, position: 'relative' }}>
      <svg width="1600" height="900" viewBox="0 0 1600 900" style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="end-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBFAF7" />
            <stop offset="100%" stopColor="#F1EDE5" />
          </linearGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#end-grad)" />
        <g opacity="0.06">
          <path d="M200 180 L320 300 L200 420 L80 300 Z" fill="#0A3D5C" />
          <path d="M1380 540 L1480 640 L1380 740 L1280 640 Z" fill="#C9A961" />
          <path d="M1300 220 L1370 290 L1300 360 L1230 290 Z" fill="#0A3D5C" />
        </g>
      </svg>

      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 120px',
        textAlign: 'center'
      }}>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'var(--accent-gold)',
          marginBottom: 32
        }}>
          Diskussion · Fragen
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 120,
          fontWeight: 600,
          color: 'var(--primary-dark)',
          letterSpacing: '-0.03em',
          lineHeight: 1
        }}>
          Vielen Dank<span style={{ color: 'var(--accent-gold)' }}>.</span>
        </h1>

        <div style={{ width: 80, height: 1, background: 'var(--primary)', margin: '40px 0' }} />

        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 28,
          color: 'var(--primary)',
          fontWeight: 400,
          maxWidth: 800,
          lineHeight: 1.4
        }}>
          „Die Differenzierung ist die wichtigste Botschaft —<br />
          nicht jeder Zucker, nicht jeder Kontext."
        </p>

        <div style={{ marginTop: 80, fontSize: 14, color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--primary-dark)' }}>Prof. Dr. med. Diana Rubin</strong><br />
          Zentrum für Ernährungsmedizin und Diabetologie<br />
          <span style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em' }}>
            ernaehrungsmedizin@klinik.de · 07. Mai 2026
          </span>
        </div>
      </div>

      <div className="slide-footer">
        <span className="brand">Zentrum für Ernährungsmedizin & Diabetologie</span>
        <span className="pagenum">{String(pageNum).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      </div>
    </div>
  )
}
