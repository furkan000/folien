import SlideShell from '../components/SlideShell.jsx'

const rows = [
  { outcome: 'Karies', evidence: 'strong', dose: 'positiv (linear)', effect: 'RR ↑ konsistent', source: 'WHO 2015 / 2023; Moynihan SR 2022' },
  { outcome: 'Gewichtszunahme (Erwachsene)', evidence: 'mod', dose: 'positiv', effect: 'Δ ~0.8 kg / Reduktion 10 % E', source: 'Te Morenga BMJ 2013; Huang BMJ 2023' },
  { outcome: 'NAFLD / Lebersteatose', evidence: 'mod', dose: 'positiv (Fruktose-spezifisch)', effect: 'Leberfett ↑', source: 'Jensen J Hepatol 2021; EASL 2024' },
  { outcome: 'Gicht / Hyperurikämie', evidence: 'mod', dose: 'positiv (SSB, Fruktose)', effect: 'RR 1.85 (≥2 Portionen/d)', source: 'Choi BMJ 2008; Yokose 2023' },
  { outcome: 'KHK (bei hohem SSB-Konsum)', evidence: 'mod', dose: 'positiv', effect: 'RR 1.16 pro Portion/d', source: 'Yin Adv Nutr 2021; Huang BMJ 2023' },
  { outcome: 'Dyslipidämie (TG, ApoB)', evidence: 'mod', dose: 'positiv (Fruktose)', effect: 'TG ↑, HDL ↓', source: 'Stanhope JCEM 2019; Hieronimus 2020' },
  { outcome: 'T2DM (SSB-vermittelt)', evidence: 'mod', dose: 'positiv, BMI-unabhängig', effect: 'RR 1.18 / Portion/d', source: 'Imamura BMJ 2015; Huang BMJ 2023' },
  { outcome: 'Krebs (allg.)', evidence: 'weak', dose: 'inkonsistent', effect: 'kein robustes Signal', source: 'Debras Lancet Reg Health 2022' }
]

export default function Facts(props) {
  return (
    <SlideShell
      eyebrowNum="09"
      eyebrow="Fakt"
      title="Was Zucker nachweislich tut"
      subtitle="Konsolidierte Evidenz aus aktuellen Umbrella-Reviews"
      {...props}
    >
      <table className="evidence-table">
        <thead>
          <tr>
            <th style={{ width: '28%' }}>Outcome</th>
            <th style={{ width: '12%' }}>Evidenz</th>
            <th style={{ width: '20%' }}>Dosis-Wirkung</th>
            <th style={{ width: '18%' }}>Effekt</th>
            <th>Schlüsselquelle</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>{r.outcome}</td>
              <td>
                <span className={`evidence-pill ${r.evidence === 'strong' ? 'ev-strong' : r.evidence === 'mod' ? 'ev-mod' : 'ev-weak'}`}>
                  {r.evidence === 'strong' ? 'hoch' : r.evidence === 'mod' ? 'moderat' : 'schwach'}
                </span>
              </td>
              <td style={{ color: 'var(--text-muted)' }}>{r.dose}</td>
              <td style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--primary)' }}>{r.effect}</td>
              <td style={{ color: 'var(--text-muted)', fontSize: 13 }}>{r.source}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="callout" style={{ marginTop: 12, fontSize: 15 }}>
        <strong>Karies</strong> ist das einzige Outcome mit höchstem Evidenzgrad. Für die meisten kardiometabolischen Endpunkte ist die Evidenz <em>moderat</em> — robust, aber konsistenter für SSB als für Zucker generell.
      </div>
    </SlideShell>
  )
}
