import SlideShell from '../components/SlideShell.jsx'
import MythVsFakt from '../components/MythVsFakt.jsx'

export default function Myth1(props) {
  return (
    <SlideShell
      eyebrowNum="04"
      eyebrow="Mythos 1"
      title="„Zucker macht Diabetes"
      subtitle="Differenzierung: Zucker per se vs. zuckergesüßte Getränke (SSB)"
      {...props}
    >
      <MythVsFakt
        myth="Wer viel Zucker isst, bekommt Typ-2-Diabetes."
        fakt={
          <>
            Zucker als Nährstoff verursacht <strong>nicht direkt</strong> T2DM. Aber:
            zuckergesüßte Getränke (SSB) sind <strong>BMI-unabhängig</strong> mit
            einem erhöhten T2DM-Risiko assoziiert.
          </>
        }
      />

      <div className="cols-2" style={{ marginTop: 8 }}>
        <div className="card">
          <div className="card-header" style={{ color: 'var(--primary)' }}>
            <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }} />
            Mechanismen
          </div>
          <ul className="bullet-list" style={{ marginTop: 4 }}>
            <li>Hohe Fruktose-Last → hepatische De-novo-Lipogenese, NAFLD</li>
            <li>Postprandiale Glukose-Spitzen, Insulinresistenz</li>
            <li>Geringe Sättigung von Flüssigkalorien → positive Energiebilanz</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-header" style={{ color: 'var(--primary)' }}>
            <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }} />
            Effektgröße SSB → T2DM
          </div>
          <ForestPlot />
          <div className="cite" style={{ marginTop: 12 }}>
            Imamura et al. BMJ 2015; Huang et al. BMJ 2023 (Umbrella Review).
          </div>
        </div>
      </div>
    </SlideShell>
  )
}

function ForestPlot() {
  const rows = [
    { label: '1 Portion SSB / Tag', rr: 1.18, lo: 1.09, hi: 1.28 },
    { label: '+ Adjustierung BMI', rr: 1.13, lo: 1.06, hi: 1.21 },
    { label: 'Fruchtsaft (100 %)', rr: 1.07, lo: 1.01, hi: 1.14 }
  ]
  const xMin = 0.9, xMax = 1.4
  const scale = (v) => ((v - xMin) / (xMax - xMin)) * 100

  return (
    <div style={{ marginTop: 8 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
            <span>{r.label}</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>
              RR {r.rr.toFixed(2)} <span style={{ color: 'var(--text-subtle)' }}>[{r.lo.toFixed(2)}–{r.hi.toFixed(2)}]</span>
            </span>
          </div>
          <div style={{ position: 'relative', height: 18, background: 'var(--bg-alt)', borderRadius: 2 }}>
            {/* Reference line at RR=1 */}
            <div style={{ position: 'absolute', left: `${scale(1)}%`, top: 0, bottom: 0, width: 1, background: 'var(--text-muted)' }} />
            {/* CI bar */}
            <div style={{
              position: 'absolute',
              left: `${scale(r.lo)}%`,
              width: `${scale(r.hi) - scale(r.lo)}%`,
              top: '50%',
              height: 2,
              background: 'var(--primary)',
              transform: 'translateY(-50%)'
            }} />
            {/* Point estimate */}
            <div style={{
              position: 'absolute',
              left: `${scale(r.rr)}%`,
              top: '50%',
              width: 10, height: 10,
              background: 'var(--accent-gold)',
              borderRadius: 1,
              transform: 'translate(-50%, -50%) rotate(45deg)'
            }} />
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-subtle)', marginTop: 4 }}>
        <span>0.9</span><span>1.0</span><span>1.2</span><span>1.4</span>
      </div>
    </div>
  )
}
