import SlideShell from '../components/SlideShell.jsx'

export default function SweetenersCounseling(props) {
  return (
    <SlideShell
      eyebrowNum="11"
      eyebrow="Süßstoffe in der Praxis"
      title="Wann sinnvoll, wann nicht?"
      subtitle="Praktischer Algorithmus für die Diabetes- und Ernährungsberatung"
      {...props}
    >
      <div className="cols-2-narrow-wide">
        <DecisionTree />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card">
            <div className="card-header" style={{ color: 'var(--primary)' }}>
              <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }} />
              Klinische Kontexte
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 14 }}>
              <Context title="Übergang von SSB" tone="fakt" text="Süßstoffe als Brücke akzeptabel — Ziel: Reduktion der Süß-Präferenz." />
              <Context title="Diabetes T2 (Erwachsene)" tone="fakt" text="Kurzfristig hilfreich für glykämische Kontrolle, kein Dauerersatz." />
              <Context title="Schwangerschaft" tone="warn" text="Datenlage limitiert — sparsam, Stevia / Sucralose bevorzugt." />
              <Context title="Kinder" tone="warn" text="WHO 2023 rät ab — Geschmacksprägung berücksichtigen." />
            </div>
          </div>

          <div className="card-fakt">
            <div className="card-header"><DotIcon color="var(--fakt)" /> Mikrobiom — neue Erkenntnisse</div>
            <div style={{ fontSize: 14, lineHeight: 1.5 }}>
              <strong>Suez et al. Cell 2022 (RCT, n=120):</strong> Saccharin und Sucralose verändern das
              intestinale Mikrobiom und beeinflussen die <em>Glukosetoleranz</em> beim Menschen —
              individuell unterschiedlich. <span style={{ color: 'var(--text-muted)' }}>Klinische Konsequenz: noch offen, aber Vorsicht bei Routineempfehlung.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cite" style={{ position: 'absolute', bottom: 60, left: 88, right: 88 }}>
        Suez et al. Cell 2022; WHO Guideline Use of NSS 2023; AWMF Adipositas-Leitlinie 2024 Update.
      </div>
    </SlideShell>
  )
}

function Context({ title, text, tone }) {
  const c = tone === 'warn' ? 'var(--accent-gold)' : 'var(--fakt)'
  return (
    <div style={{ borderLeft: `3px solid ${c}`, paddingLeft: 12 }}>
      <div style={{ fontWeight: 600, color: c, fontSize: 13, marginBottom: 4 }}>{title}</div>
      <div style={{ color: 'var(--text-muted)' }}>{text}</div>
    </div>
  )
}

function DotIcon({ color }) {
  return <svg width="12" height="12"><circle cx="6" cy="6" r="5" fill={color} /></svg>
}

function DecisionTree() {
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border-soft)', borderRadius: 8, padding: '20px 24px', height: '100%' }}>
      <div className="card-header" style={{ color: 'var(--primary)' }}>
        <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }} />
        Entscheidungsbaum
      </div>
      <svg viewBox="0 0 400 420" style={{ width: '100%', height: 380, marginTop: 8 }}>
        {/* Root */}
        <Node x={120} y={20} w={160} h={48} text="Patient konsumiert SSB?" tone="primary" />

        {/* Branch 1: Yes */}
        <Edge from={[200, 68]} to={[100, 110]} label="ja" />
        <Edge from={[200, 68]} to={[300, 110]} label="nein" />

        <Node x={20} y={110} w={160} h={48} text="Ziel: Reduktion" tone="gold" />
        <Edge from={[100, 158]} to={[100, 200]} />
        <Node x={20} y={200} w={160} h={60} text="Süßstoff als Übergang" subtext="zeitlich limitiert" tone="fakt" />
        <Edge from={[100, 260]} to={[100, 300]} />
        <Node x={20} y={300} w={160} h={70} text="Süß-Präferenz reduzieren" subtext="Wasser, ungesüßte Getränke" tone="fakt" />

        {/* Branch 2: No */}
        <Node x={220} y={110} w={160} h={48} text="Spezialfall?" tone="primary" />
        <Edge from={[300, 158]} to={[300, 200]} />
        <Node x={220} y={200} w={160} h={70} text="Schwangerschaft, Kinder, T1DM" subtext="zurückhaltend" tone="warn" />
        <Edge from={[300, 270]} to={[300, 300]} />
        <Node x={220} y={300} w={160} h={70} text="Routinegebrauch nicht empfehlen" subtext="WHO 2023" tone="mythos" />
      </svg>
    </div>
  )
}

function Node({ x, y, w, h, text, subtext, tone }) {
  const palette = {
    primary: { bg: '#E5EDF2', border: '#0A3D5C', text: '#0A3D5C' },
    gold: { bg: '#F4EDD9', border: '#C9A961', text: '#8C7339' },
    fakt: { bg: '#E1F0E8', border: '#2D8659', text: '#2D8659' },
    warn: { bg: '#FBF3E0', border: '#C9A961', text: '#8C7339' },
    mythos: { bg: '#F5E3DF', border: '#B84A39', text: '#B84A39' }
  }[tone]
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill={palette.bg} stroke={palette.border} strokeWidth="1" />
      <text x={x + w / 2} y={y + (subtext ? 24 : h / 2 + 4)} textAnchor="middle" fontSize="13" fontFamily="Inter" fontWeight="600" fill={palette.text}>{text}</text>
      {subtext && <text x={x + w / 2} y={y + 44} textAnchor="middle" fontSize="11" fontFamily="Inter" fill={palette.text} opacity="0.75">{subtext}</text>}
    </g>
  )
}

function Edge({ from, to, label }) {
  const midY = (from[1] + to[1]) / 2
  return (
    <g>
      <path d={`M ${from[0]} ${from[1]} L ${from[0]} ${midY} L ${to[0]} ${midY} L ${to[0]} ${to[1]}`} fill="none" stroke="#0A3D5C" strokeWidth="1" />
      {label && <text x={(from[0] + to[0]) / 2} y={midY - 4} fontSize="10" fill="#5C5C5C" fontFamily="Inter" textAnchor="middle">{label}</text>}
    </g>
  )
}
