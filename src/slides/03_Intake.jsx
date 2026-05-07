import SlideShell from '../components/SlideShell.jsx'

export default function Intake(props) {
  return (
    <SlideShell
      eyebrowNum="03"
      eyebrow="Einstieg"
      title="Wie viel Zucker konsumieren wir?"
      subtitle="Realität in Deutschland vs. WHO-Empfehlung"
      {...props}
    >
      <div className="cols-2-narrow-wide" style={{ alignItems: 'stretch' }}>
        {/* Left: KPI */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="kpi" style={{ color: 'var(--mythos)' }}>~95<span style={{ fontSize: 36, color: 'var(--text-muted)', marginLeft: 8 }}>g/Tag</span></div>
          <div className="kpi-label">Durchschnittlicher Konsum freier Zucker (DE, Erwachsene)</div>

          <div style={{ display: 'flex', gap: 32, marginTop: 36 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, color: 'var(--accent-gold)' }}>~50 g</div>
              <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>WHO &lt;10 % E</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, color: 'var(--fakt)' }}>~25 g</div>
              <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>WHO conditional &lt;5 % E</div>
            </div>
          </div>

          <p className="cite" style={{ marginTop: 24 }}>
            Quellen: MRI / NVS II Update; DEGS; WHO Sugar Guideline 2015 / 2023.
          </p>
        </div>

        {/* Right: Bar comparison + definition */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <BarChart />
          <div style={{
            background: 'var(--bg-alt)',
            borderLeft: '3px solid var(--primary)',
            padding: '16px 20px',
            borderRadius: 4
          }}>
            <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600, marginBottom: 8 }}>
              Begriffsklärung
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, fontSize: 14, lineHeight: 1.5 }}>
              <div>
                <strong>Freier Zucker</strong><br />
                <span style={{ color: 'var(--text-muted)' }}>
                  Zugesetzt + Honig, Sirup, Fruchtsaft. <em>Reduktionsziel.</em>
                </span>
              </div>
              <div>
                <strong>Intrinsischer Zucker</strong><br />
                <span style={{ color: 'var(--text-muted)' }}>
                  Zellgebunden in Obst, Gemüse, Milch. <em>Kein Reduktionsziel.</em>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}

function BarChart() {
  const data = [
    { label: 'Tatsächlicher Konsum DE', value: 95, color: 'var(--mythos)' },
    { label: 'WHO &lt; 10 % Energie', value: 50, color: 'var(--accent-gold)' },
    { label: 'WHO &lt; 5 % (conditional)', value: 25, color: 'var(--fakt)' }
  ]
  const max = 100
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border-soft)', borderRadius: 8, padding: '20px 24px' }}>
      <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 16 }}>
        Freier Zucker — Aufnahme vs. Empfehlung (g / Tag)
      </div>
      {data.map(d => (
        <div key={d.label} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
            <span dangerouslySetInnerHTML={{ __html: d.label }} />
            <span style={{ fontFamily: 'var(--font-mono)', color: d.color, fontWeight: 600 }}>{d.value} g</span>
          </div>
          <div style={{ height: 14, background: 'var(--bg-alt)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              width: `${(d.value / max) * 100}%`,
              height: '100%',
              background: d.color,
              transition: 'width 0.6s ease'
            }} />
          </div>
        </div>
      ))}
    </div>
  )
}
