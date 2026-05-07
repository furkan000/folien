const messages = [
  { n: '01', text: 'Nicht jeder Zucker ist gleich relevant.', sub: 'Zuckergesüßte Getränke sind der größte Hebel — vor allem anderen.' },
  { n: '02', text: 'Karies bleibt der einzige Outcome mit höchster Evidenz.', sub: 'Häufigkeit ist wichtiger als Menge.' },
  { n: '03', text: 'Fruktose ist nicht das Problem — die Matrix ist es.', sub: 'Obst ja, isolierte Fruktose und SSB nein.' },
  { n: '04', text: 'Süßstoffe sind kein Freifahrtschein.', sub: 'WHO 2023: keine Empfehlung zur Gewichtskontrolle.' },
  { n: '05', text: 'Mythen aktiv adressieren — auch in der Beratung.', sub: 'Hyperaktivität, Suchtanalogie, „Fruchtzucker = gesund": entkräften.' }
]

export default function TakeHome({ pageNum, total }) {
  return (
    <div className="slide" style={{ background: 'linear-gradient(135deg, #062A40 0%, #0A3D5C 60%, #1A5577 100%)', color: 'white' }}>
      <div className="slide-header" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
        <div className="slide-eyebrow" style={{ color: 'var(--accent-gold)' }}>
          <span className="num">13</span>
          Take-Home Messages
        </div>
        <div className="slide-meta" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Zucker · Mythos vs. Fakten · 2026
        </div>
      </div>

      <h1 className="slide-title" style={{ color: 'white' }}>Was Sie mitnehmen.</h1>
      <p className="slide-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
        Fünf Sätze für die nächste Sprechstunde
      </p>

      <div className="slide-body" style={{ marginTop: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {messages.map(m => (
            <div key={m.n} style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              gap: 24,
              alignItems: 'baseline',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: 14
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 18,
                color: 'var(--accent-gold)',
                letterSpacing: '0.1em'
              }}>
                {m.n}
              </span>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 28,
                  fontWeight: 500,
                  lineHeight: 1.2,
                  color: 'white',
                  letterSpacing: '-0.01em'
                }}>
                  {m.text}
                </div>
                <div style={{
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 4,
                  lineHeight: 1.4
                }}>
                  {m.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slide-footer" style={{ color: 'rgba(255,255,255,0.4)' }}>
        <span className="brand">Zentrum für Ernährungsmedizin & Diabetologie</span>
        <span className="pagenum">{String(pageNum).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      </div>
    </div>
  )
}
