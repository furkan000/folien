import SlideShell from '../components/SlideShell.jsx'
import MythVsFakt from '../components/MythVsFakt.jsx'

export default function Myth5(props) {
  return (
    <SlideShell
      eyebrowNum="08"
      eyebrow="Mythos 5"
      title="„Zucker macht Kinder hyperaktiv"
      subtitle="Klassisch widerlegt — und doch in der Beratungsrealität präsent"
      {...props}
    >
      <MythVsFakt
        myth="Süßigkeiten lassen Kinder buchstäblich an die Decke gehen."
        fakt={
          <>
            Doppelblinde RCTs &amp; Meta-Analysen zeigen <strong>keinen Effekt</strong> auf
            Verhalten oder Aufmerksamkeit. Was bleibt: der <strong>Erwartungseffekt der Eltern</strong> —
            sie schätzen ihr Kind als hyperaktiv ein, wenn sie glauben, es habe Zucker bekommen.
          </>
        }
      />

      <div className="cols-2" style={{ marginTop: 4 }}>
        <div className="card">
          <div className="card-header" style={{ color: 'var(--primary)' }}>
            <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }} />
            Klassisches Studiendesign — verblindet
          </div>
          <StudyDesign />
          <div className="cite" style={{ marginTop: 12 }}>
            Hoover &amp; Milich 1994 (Journal Abnormal Child Psych); Wolraich Meta-Analyse JAMA 1995; bestätigt durch aktuelle Reviews 2020+.
          </div>
        </div>

        <div className="card-fakt">
          <div className="card-header"><CheckIcon /> Take-Home für die Beratung</div>
          <ul className="bullet-list" style={{ marginTop: 4 }}>
            <li>Eltern aktiv aufklären — der Mythos ist zählebig</li>
            <li>Hyperaktivität nicht durch Zucker erklären — andere Ursachen prüfen (Schlaf, Bewegung, ADHS)</li>
            <li>Aber: SSB-Reduktion bleibt aus <em>anderen</em> Gründen sinnvoll (Karies, Energiebilanz)</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  )
}

function StudyDesign() {
  return (
    <svg viewBox="0 0 380 240" style={{ width: '100%', height: 240, marginTop: 12 }}>
      {/* Group A */}
      <g transform="translate(20, 20)">
        <rect width="160" height="80" rx="6" fill="#F4EDD9" stroke="#C9A961" strokeWidth="1" />
        <text x="80" y="22" fontSize="11" fontFamily="Inter" fontWeight="600" textAnchor="middle" fill="#8C7339">GRUPPE A</text>
        <text x="80" y="42" fontSize="13" fontFamily="Inter" textAnchor="middle" fill="#1A1A1A">Eltern glauben:</text>
        <text x="80" y="60" fontSize="14" fontFamily="Fraunces" fontStyle="italic" textAnchor="middle" fill="#0A3D5C" fontWeight="600">„Kind hatte Zucker"</text>
        <text x="80" y="74" fontSize="11" fontFamily="Inter" textAnchor="middle" fill="#5C5C5C">tatsächlich: Placebo</text>
      </g>

      {/* Group B */}
      <g transform="translate(200, 20)">
        <rect width="160" height="80" rx="6" fill="#E5EDF2" stroke="#0A3D5C" strokeWidth="1" />
        <text x="80" y="22" fontSize="11" fontFamily="Inter" fontWeight="600" textAnchor="middle" fill="#0A3D5C">GRUPPE B</text>
        <text x="80" y="42" fontSize="13" fontFamily="Inter" textAnchor="middle" fill="#1A1A1A">Eltern glauben:</text>
        <text x="80" y="60" fontSize="14" fontFamily="Fraunces" fontStyle="italic" textAnchor="middle" fill="#0A3D5C" fontWeight="600">„Kind hatte Placebo"</text>
        <text x="80" y="74" fontSize="11" fontFamily="Inter" textAnchor="middle" fill="#5C5C5C">tatsächlich: Zucker</text>
      </g>

      {/* Arrows */}
      <path d="M 100 100 L 100 130" stroke="#0A3D5C" strokeWidth="1.5" markerEnd="url(#arrowD)" fill="none" />
      <path d="M 280 100 L 280 130" stroke="#0A3D5C" strokeWidth="1.5" markerEnd="url(#arrowD)" fill="none" />

      <defs>
        <marker id="arrowD" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="#0A3D5C" />
        </marker>
      </defs>

      {/* Result A */}
      <g transform="translate(20, 140)">
        <rect width="160" height="60" rx="6" fill="#F5E3DF" />
        <text x="80" y="22" fontSize="11" fontFamily="Inter" fontWeight="600" textAnchor="middle" fill="#B84A39">EINSCHÄTZUNG</text>
        <text x="80" y="44" fontSize="22" fontFamily="Fraunces" fontWeight="700" textAnchor="middle" fill="#B84A39">„hyperaktiv"</text>
      </g>

      {/* Result B */}
      <g transform="translate(200, 140)">
        <rect width="160" height="60" rx="6" fill="#E1F0E8" />
        <text x="80" y="22" fontSize="11" fontFamily="Inter" fontWeight="600" textAnchor="middle" fill="#2D8659">EINSCHÄTZUNG</text>
        <text x="80" y="44" fontSize="22" fontFamily="Fraunces" fontWeight="700" textAnchor="middle" fill="#2D8659">„unauffällig"</text>
      </g>

      <text x="190" y="225" fontSize="11" fontFamily="Inter" textAnchor="middle" fill="#5C5C5C" fontStyle="italic">→ Effekt = elterliche Erwartung, nicht Zucker</text>
    </svg>
  )
}

function CheckIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 7l3 3 5-6" fill="none" stroke="var(--fakt)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
