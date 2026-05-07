import SlideShell from '../components/SlideShell.jsx'
import MythVsFakt from '../components/MythVsFakt.jsx'

export default function Myth4(props) {
  return (
    <SlideShell
      eyebrowNum="07"
      eyebrow="Mythos 4"
      title="„Zucker macht süchtig wie Drogen"
      subtitle="Was Tiermodelle zeigen — und was beim Menschen tatsächlich gilt"
      {...props}
    >
      <MythVsFakt
        myth="Zucker hat dieselbe Suchtwirkung wie Kokain."
        fakt={
          <>
            Suchtmuster im <strong>Tiermodell</strong> ja — aber nur unter Restriktionsbedingungen.
            Beim <strong>Menschen</strong> ist „Sugar Addiction" als isoliertes Konstrukt schwach belegt.
            Eher: <strong>hochverarbeitete Lebensmittel</strong> (Zucker + Fett) zeigen suchtähnliche Muster.
          </>
        }
      />

      <div className="cols-2" style={{ marginTop: 4 }}>
        <div className="card">
          <div className="card-header" style={{ color: 'var(--primary)' }}>
            <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }} />
            Reward-Pathway (vereinfacht)
          </div>
          <BrainDiagram />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card-fakt">
            <div className="card-header">
              <CheckIcon /> Was die Evidenz hergibt
            </div>
            <ul className="bullet-list" style={{ marginTop: 4, fontSize: 15 }}>
              <li>Hochverarbeitete Lebensmittel zeigen suchtähnliche Konsummuster (Yale Food Addiction Scale 2.0)</li>
              <li>Dopaminerge Aktivierung — vergleichbar mit anderen palatablen Reizen</li>
              <li>Cravings reduzierbar durch Schlaf, Stressmanagement, regelmäßige Mahlzeiten</li>
            </ul>
          </div>
          <div className="card-mythos">
            <div className="card-header">
              <CrossIcon /> Was die Evidenz NICHT hergibt
            </div>
            <ul className="bullet-list" style={{ marginTop: 4, fontSize: 15 }}>
              <li>Zucker als isolierter Suchtstoff im Sinne des DSM-5</li>
              <li>Toleranzentwicklung & Entzugssymptomatik beim Menschen</li>
              <li>1:1-Übertragung von Bingewanker-Rattenmodellen</li>
            </ul>
          </div>
          <div className="cite">Fletcher & Kenny Nat Neurosci 2018; Gearhardt &amp; Schulte Annu Rev Nutr 2021; Hebebrand et al. 2014.</div>
        </div>
      </div>
    </SlideShell>
  )
}

function BrainDiagram() {
  return (
    <svg viewBox="0 0 360 250" style={{ width: '100%', height: 250, marginTop: 8 }}>
      {/* Brain outline */}
      <path
        d="M 80 120 C 80 60, 140 40, 200 50 C 260 35, 310 70, 310 130 C 310 180, 260 210, 200 200 C 140 215, 80 180, 80 120 Z"
        fill="#F4EDD9" stroke="#0A3D5C" strokeWidth="1.5"
      />
      <path d="M 200 50 Q 200 130 200 200" fill="none" stroke="#0A3D5C" strokeWidth="0.8" opacity="0.4" />

      {/* VTA */}
      <circle cx="180" cy="155" r="10" fill="#C9A961" />
      <text x="180" y="180" fontSize="11" fontFamily="Inter" textAnchor="middle" fill="#0A3D5C" fontWeight="600">VTA</text>

      {/* NAc */}
      <circle cx="135" cy="115" r="10" fill="#B84A39" />
      <text x="135" y="100" fontSize="11" fontFamily="Inter" textAnchor="middle" fill="#0A3D5C" fontWeight="600">NAc</text>

      {/* PFC */}
      <circle cx="245" cy="90" r="10" fill="#2D8659" />
      <text x="245" y="78" fontSize="11" fontFamily="Inter" textAnchor="middle" fill="#0A3D5C" fontWeight="600">PFC</text>

      {/* Arrows */}
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="#0A3D5C" />
        </marker>
      </defs>
      <path d="M 175 145 Q 150 130 140 122" fill="none" stroke="#0A3D5C" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M 235 95 Q 200 110 145 115" fill="none" stroke="#0A3D5C" strokeWidth="1.5" markerEnd="url(#arrow)" strokeDasharray="3 2" />

      {/* Legend */}
      <g transform="translate(20, 220)">
        <text x="0" y="0" fontSize="10" fill="#5C5C5C" fontFamily="Inter">VTA → NAc: Dopamin-Release (Reward)</text>
        <text x="0" y="14" fontSize="10" fill="#5C5C5C" fontFamily="Inter">PFC → NAc: kognitive Top-down-Kontrolle</text>
      </g>
    </svg>
  )
}

function CheckIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 7l3 3 5-6" fill="none" stroke="var(--fakt)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function CrossIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 3l8 8M11 3l-8 8" stroke="var(--mythos)" strokeWidth="1.8" strokeLinecap="round" /></svg>
}
