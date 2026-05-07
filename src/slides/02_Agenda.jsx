import SlideShell from '../components/SlideShell.jsx'

const items = [
  { n: '01', label: 'Verzehr & Empfehlungen', sub: 'Wie viel Zucker konsumieren wir wirklich?', icon: 'cup' },
  { n: '02', label: 'Mythos: Zucker = Diabetes', sub: 'SSB, Leberverfettung, Glukose-Spitzen', icon: 'pancreas' },
  { n: '03', label: 'Mythos: Fruktose ist gesünder', sub: 'Frucht-Matrix vs. isolierte Fruktose', icon: 'apple' },
  { n: '04', label: 'Mythos: Zucker = Adipositas', sub: 'Energiebilanz, SSB-Steuern, Sättigung', icon: 'scale' },
  { n: '05', label: 'Mythos: Zucker = Sucht', sub: 'Tiermodell vs. Humanevidenz', icon: 'brain' },
  { n: '06', label: 'Mythos: Hyperaktivität', sub: 'Erwartungseffekt der Eltern', icon: 'child' },
  { n: '07', label: 'Süßstoffe', sub: 'WHO 2023, IARC, Mikrobiom, Praxis', icon: 'sweetener' },
  { n: '08', label: 'Take-Home & Quellen', sub: 'Praktische Botschaften für die Beratung', icon: 'check' }
]

export default function Agenda(props) {
  return (
    <SlideShell
      eyebrowNum="02"
      eyebrow="Agenda"
      title="Was wir heute klären"
      subtitle="Fünf Mythen, ein Süßstoff-Block, klare Take-Home-Messages"
      {...props}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 18,
        marginTop: 8
      }}>
        {items.map(item => (
          <div key={item.n} style={{
            background: 'var(--surface)',
            border: '1px solid var(--border-soft)',
            borderRadius: 8,
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            position: 'relative',
            minHeight: 160
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon name={item.icon} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--accent-gold)',
                letterSpacing: '0.1em',
                fontWeight: 600
              }}>
                {item.n}
              </span>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 600,
                color: 'var(--primary-dark)',
                lineHeight: 1.2,
                marginBottom: 6
              }}>
                {item.label}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.4 }}>
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  )
}

function Icon({ name }) {
  const common = { width: 28, height: 28, fill: 'none', stroke: 'var(--primary)', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'cup':
      return <svg viewBox="0 0 24 24" {...common}><path d="M5 8h14l-1.5 11a2 2 0 01-2 1.7h-7a2 2 0 01-2-1.7L5 8z" /><path d="M9 4c0 1.5 1 1.5 1 3M13 4c0 1.5 1 1.5 1 3" /></svg>
    case 'pancreas':
      return <svg viewBox="0 0 24 24" {...common}><path d="M3 14c2-3 6-3 9-1s7 1 9-1" /><circle cx="7" cy="13" r="1" fill="var(--primary)" /><circle cx="13" cy="13" r="1" fill="var(--primary)" /></svg>
    case 'apple':
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 7c0-2 2-3 4-2-1 2-2 3-4 2z" /><path d="M12 7c-3-1-7 1-7 6 0 4 3 8 7 8s7-4 7-8c0-5-4-7-7-6z" /></svg>
    case 'scale':
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 3v18M3 21h18" /><path d="M5 15l3-8 3 8M13 15l3-8 3 8" /></svg>
    case 'brain':
      return <svg viewBox="0 0 24 24" {...common}><path d="M9 5a3 3 0 00-3 3v1a2 2 0 00-2 2v2a2 2 0 002 2v1a3 3 0 003 3M15 5a3 3 0 013 3v1a2 2 0 012 2v2a2 2 0 01-2 2v1a3 3 0 01-3 3M12 5v14" /></svg>
    case 'child':
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="6" r="2.5" /><path d="M12 9v6M9 12h6M9 21l3-6 3 6" /></svg>
    case 'sweetener':
      return <svg viewBox="0 0 24 24" {...common}><path d="M6 6h12v3l-2 11H8L6 9z" /><path d="M9 12h6M10 16h4" /></svg>
    case 'check':
      return <svg viewBox="0 0 24 24" {...common}><path d="M5 12l5 5 9-11" /></svg>
    default: return null
  }
}
