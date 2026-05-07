import SlideShell from '../components/SlideShell.jsx'
import MythVsFakt from '../components/MythVsFakt.jsx'

export default function Myth3(props) {
  return (
    <SlideShell
      eyebrowNum="06"
      eyebrow="Mythos 3"
      title="„Zucker ist die Hauptursache für Adipositas"
      subtitle="Energiebilanz bleibt zentral — aber SSB tragen überproportional bei"
      {...props}
    >
      <MythVsFakt
        myth="Wer abnehmen will, muss zuallererst Zucker streichen."
        fakt={
          <>
            Adipositas ist multifaktoriell. Zuckergesüßte Getränke
            (SSB) wirken jedoch <strong>überproportional adipogen</strong> —
            wegen geringer Sättigung und hoher Energiedichte in flüssiger Form.
          </>
        }
      />

      <div className="cols-2" style={{ marginTop: 4 }}>
        <div className="card">
          <div className="card-header" style={{ color: 'var(--primary)' }}>
            <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }} />
            UK Soft Drinks Industry Levy (eingeführt 2018)
          </div>
          <BeforeAfter />
          <div className="cite" style={{ marginTop: 10 }}>
            Rogers et al. PLoS Med 2023; Scarborough et al. BMJ 2020.
          </div>
        </div>

        <div className="card">
          <div className="card-header" style={{ color: 'var(--primary)' }}>
            <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }} />
            Sättigung — flüssig vs. fest (250 kcal)
          </div>
          <SatietyCurve />
          <div style={{ display: 'flex', gap: 18, marginTop: 12, fontSize: 12 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 14, height: 3, background: 'var(--mythos)' }} /> SSB (Cola)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 14, height: 3, background: 'var(--fakt)' }} /> Feste Mahlzeit
            </span>
          </div>
          <div className="cite" style={{ marginTop: 10 }}>
            DiMeglio & Mattes Int J Obes 2000; Mourao et al. 2007.
          </div>
        </div>
      </div>
    </SlideShell>
  )
}

function BeforeAfter() {
  return (
    <svg viewBox="0 0 360 170" style={{ width: '100%', height: 170, marginTop: 8 }}>
      <defs>
        <linearGradient id="ba-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A3D5C" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0A3D5C" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* axes */}
      <line x1="40" y1="20" x2="40" y2="140" stroke="#D9D2C5" />
      <line x1="40" y1="140" x2="350" y2="140" stroke="#D9D2C5" />
      {/* tax line */}
      <line x1="180" y1="20" x2="180" y2="140" stroke="#C9A961" strokeDasharray="4 3" />
      <text x="184" y="32" fontSize="10" fill="#8C7339" fontFamily="Inter">Steuer 2018</text>
      {/* sugar consumption curve */}
      <path
        d="M 40 60 L 80 55 L 120 58 L 160 56 L 180 55 L 200 80 L 240 95 L 280 100 L 350 105"
        fill="none" stroke="#0A3D5C" strokeWidth="2.5"
      />
      <path
        d="M 40 60 L 80 55 L 120 58 L 160 56 L 180 55 L 200 80 L 240 95 L 280 100 L 350 105 L 350 140 L 40 140 Z"
        fill="url(#ba-grad)"
      />
      {/* labels */}
      <text x="40" y="160" fontSize="10" fill="#8A8A8A" fontFamily="Inter">2014</text>
      <text x="345" y="160" fontSize="10" fill="#8A8A8A" textAnchor="end" fontFamily="Inter">2022</text>
      <text x="20" y="62" fontSize="10" fill="#8A8A8A" fontFamily="Inter" textAnchor="end">hoch</text>
      <text x="20" y="135" fontSize="10" fill="#8A8A8A" fontFamily="Inter" textAnchor="end">niedrig</text>
      {/* arrow */}
      <text x="280" y="78" fontSize="11" fill="#2D8659" fontFamily="Inter" fontWeight="600">−30 % Zuckergehalt</text>
    </svg>
  )
}

function SatietyCurve() {
  return (
    <svg viewBox="0 0 360 170" style={{ width: '100%', height: 170, marginTop: 8 }}>
      <line x1="40" y1="20" x2="40" y2="140" stroke="#D9D2C5" />
      <line x1="40" y1="140" x2="350" y2="140" stroke="#D9D2C5" />
      {/* Solid food — high satiety drop */}
      <path d="M 40 50 Q 100 130 200 130 T 350 130" fill="none" stroke="#2D8659" strokeWidth="2.5" />
      {/* SSB — weak satiety */}
      <path d="M 40 50 Q 100 80 200 90 T 350 95" fill="none" stroke="#B84A39" strokeWidth="2.5" />
      <text x="40" y="160" fontSize="10" fill="#8A8A8A" fontFamily="Inter">0 min</text>
      <text x="345" y="160" fontSize="10" fill="#8A8A8A" textAnchor="end" fontFamily="Inter">120 min</text>
      <text x="20" y="50" fontSize="10" fill="#8A8A8A" textAnchor="end" fontFamily="Inter">Hunger</text>
      <text x="20" y="135" fontSize="10" fill="#8A8A8A" textAnchor="end" fontFamily="Inter">Satt</text>
    </svg>
  )
}
