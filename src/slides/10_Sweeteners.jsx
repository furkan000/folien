import SlideShell from '../components/SlideShell.jsx'

const sweeteners = [
  { name: 'Aspartam', e: 'E 951', adi: '40 mg/kg', status: 'IARC 2B (möglicherweise kanzerogen)', statusColor: 'var(--accent-gold)', practice: 'ADI nur bei extrem hohem Konsum erreicht — praktische Relevanz gering' },
  { name: 'Sucralose', e: 'E 955', adi: '15 mg/kg', status: 'WHO: nicht für Gewichtskontrolle', statusColor: 'var(--accent-gold)', practice: 'Hitzelabilität bei Erhitzen — Nebenprodukte unklar' },
  { name: 'Acesulfam-K', e: 'E 950', adi: '9 mg/kg', status: 'EFSA: sicher (ADI)', statusColor: 'var(--fakt)', practice: 'Häufig kombiniert mit Aspartam' },
  { name: 'Steviolglykoside', e: 'E 960', adi: '4 mg/kg', status: 'EFSA: sicher (ADI)', statusColor: 'var(--fakt)', practice: 'Pflanzlich, hitzestabil — gut für Beratung' },
  { name: 'Erythrit', e: 'E 968', adi: 'kein ADI', status: 'kardiovaskuläre Signale 2023+', statusColor: 'var(--mythos)', practice: 'Witkowski Nat Med 2023: assoziiert mit Thrombose-Risiko — Kontext beachten' },
  { name: 'Xylit', e: 'E 967', adi: 'kein ADI', status: 'EFSA: sicher', statusColor: 'var(--fakt)', practice: 'Laxierender Effekt; toxisch für Hunde' }
]

export default function Sweeteners(props) {
  return (
    <SlideShell
      eyebrowNum="10"
      eyebrow="Süßstoffe"
      title="Sicher oder nicht?"
      subtitle="WHO-Leitlinie 2023, IARC-Bewertung Aspartam, neue Signale für Erythrit"
      {...props}
    >
      <div className="cols-2-narrow-wide" style={{ alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="callout">
            <strong>WHO 2023:</strong> Non-Sugar Sweeteners (NSS) <em>nicht empfohlen</em> zur Gewichtskontrolle.
            Mögliche Langzeitrisiken (T2DM, KHK) bei chronischem Konsum.
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border-soft)', borderRadius: 6, padding: '16px 20px' }}>
            <div className="card-header" style={{ color: 'var(--primary)' }}>
              <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }} />
              Klinische Faustregel
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--text)' }}>
              „Nicht akut gefährlich" <span style={{ color: 'var(--text-muted)' }}>≠</span>
              <strong style={{ color: 'var(--primary)' }}> empfehlenswert</strong> für die
              Allgemeinbevölkerung als Routinekonsum.
            </div>
          </div>
          <div className="cite">
            WHO Use of NSS 2023; EFSA Re-evaluation Aspartam 2024; IARC Monographs Vol. 134 (2023).
          </div>
        </div>

        <table className="evidence-table">
          <thead>
            <tr>
              <th>Süßstoff</th>
              <th>ADI</th>
              <th>Aktueller Status</th>
              <th>Praxis</th>
            </tr>
          </thead>
          <tbody>
            {sweeteners.map(s => (
              <tr key={s.name}>
                <td>
                  <div style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>{s.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-subtle)' }}>{s.e}</div>
                </td>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{s.adi}</td>
                <td>
                  <span style={{
                    display: 'inline-block',
                    padding: '2px 8px',
                    borderRadius: 3,
                    fontSize: 11,
                    fontWeight: 500,
                    background: `${s.statusColor}20`,
                    color: s.statusColor,
                    border: `1px solid ${s.statusColor}40`
                  }}>
                    {s.status}
                  </span>
                </td>
                <td style={{ fontSize: 12, lineHeight: 1.4, color: 'var(--text-muted)' }}>{s.practice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideShell>
  )
}
