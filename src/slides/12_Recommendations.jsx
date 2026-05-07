import SlideShell from '../components/SlideShell.jsx'

const recs = [
  {
    icon: 'cup',
    title: 'SSB zuerst',
    body: 'Größter Hebel in Beratung & Public Health. Soft Drinks, Eistee, Säfte, Energy Drinks reduzieren — vor allen anderen Detailfragen.'
  },
  {
    icon: 'leaf',
    title: 'Ganzkost vor Einzelnährstoff',
    body: 'Lebensmittel-Matrix entscheidet. Obst, Vollkorn, Gemüse — keine Verteufelung intrinsischer Zucker.'
  },
  {
    icon: 'eye',
    title: 'Hidden Sugars erkennen',
    body: 'Etikettenkunde: > 60 Bezeichnungen für freie Zucker. Frühstücksflocken, Joghurts, Saucen, „Light"-Produkte gezielt prüfen.'
  },
  {
    icon: 'goal',
    title: 'Realistische Ziele statt Verbote',
    body: '„Weniger" statt „nie". Stufenweise Reduktion der Süß-Präferenz; Verbote fördern Cravings und Compliance-Verlust.'
  },
  {
    icon: 'sweetener',
    title: 'Süßstoffe situativ',
    body: 'Als Übergangshilfe ja — als Dauerlösung zurückhaltend. Bei Schwangerschaft und Kindern besonders konservativ.'
  },
  {
    icon: 'tooth',
    title: 'Karies-Prävention nicht vergessen',
    body: 'Höchste Evidenz für Zucker-Outcome. Häufigkeit > Menge — Snack-Frequenz aktiv ansprechen.'
  }
]

export default function Recommendations(props) {
  return (
    <SlideShell
      eyebrowNum="12"
      eyebrow="Praxis"
      title="Sechs Empfehlungen für die Beratung"
      subtitle="Konkret, umsetzbar, evidenzbasiert"
      {...props}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: '1fr',
        gap: 18,
        flex: 1
      }}>
        {recs.map((r, i) => (
          <div key={r.title} style={{
            background: 'var(--surface)',
            border: '1px solid var(--border-soft)',
            borderTop: '3px solid var(--accent-gold)',
            borderRadius: 6,
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <RecIcon name={r.icon} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent-gold)', letterSpacing: '0.1em' }}>
                0{i + 1}
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--primary-dark)' }}>
              {r.title}
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.45 }}>
              {r.body}
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  )
}

function RecIcon({ name }) {
  const props = { width: 28, height: 28, fill: 'none', stroke: 'var(--primary)', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const map = {
    cup: <svg viewBox="0 0 24 24" {...props}><path d="M5 8h14l-1.5 11a2 2 0 01-2 1.7h-7a2 2 0 01-2-1.7L5 8z" /><path d="M9 4c0 1.5 1 1.5 1 3M13 4c0 1.5 1 1.5 1 3" /></svg>,
    leaf: <svg viewBox="0 0 24 24" {...props}><path d="M5 19c0-9 7-14 14-14 0 9-5 14-14 14z" /><path d="M5 19c4-4 8-7 13-12" /></svg>,
    eye: <svg viewBox="0 0 24 24" {...props}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>,
    goal: <svg viewBox="0 0 24 24" {...props}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="var(--primary)" /></svg>,
    sweetener: <svg viewBox="0 0 24 24" {...props}><path d="M6 6h12v3l-2 11H8L6 9z" /><path d="M9 12h6" /></svg>,
    tooth: <svg viewBox="0 0 24 24" {...props}><path d="M7 4c-2 0-3 2-3 4 0 4 1 5 2 9 0 2 2 3 3 1 1-3 1-4 3-4s2 1 3 4c1 2 3 1 3-1 1-4 2-5 2-9 0-2-1-4-3-4-3 0-3 2-5 2s-2-2-5-2z" /></svg>
  }
  return map[name] || null
}
