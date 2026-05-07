import SlideShell from '../components/SlideShell.jsx'
import MythVsFakt from '../components/MythVsFakt.jsx'

export default function Myth2(props) {
  return (
    <SlideShell
      eyebrowNum="05"
      eyebrow="Mythos 2"
      title="„Fruchtzucker ist gesünder als Haushaltszucker"
      subtitle="Die Matrix entscheidet — nicht das Molekül"
      {...props}
    >
      <MythVsFakt
        myth="Fruktose ist natürlich, also harmlos."
        fakt={
          <>
            Fruktose <strong>in ganzer Frucht</strong> ≠ <strong>isolierte Fruktose</strong> (HFCS, Saft).
            Hepatische Verstoffwechselung, De-novo-Lipogenese, Hyperurikämie und NAFLD
            sind dosis- und matrixabhängig. Obst in üblichen Mengen ist <em>nicht</em> das Problem.
          </>
        }
      />

      <div className="card" style={{ marginTop: 4 }}>
        <div className="card-header" style={{ color: 'var(--primary)' }}>
          <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }} />
          Gleicher Zucker — drei Welten
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 16 }}>
          <ProductCard
            color="var(--fakt)"
            iconType="apple"
            name="1 Apfel (~150 g)"
            sugar="~ 15 g"
            attrs={[
              ['Faseranteil', '2.4 g'],
              ['Resorption', 'langsam'],
              ['Sättigung', 'hoch'],
              ['DNL-Potenzial', 'gering']
            ]}
          />
          <ProductCard
            color="var(--accent-gold)"
            iconType="juice"
            name="200 ml Apfelsaft"
            sugar="~ 22 g"
            attrs={[
              ['Faseranteil', '< 0.3 g'],
              ['Resorption', 'rasch'],
              ['Sättigung', 'gering'],
              ['DNL-Potenzial', 'mittel']
            ]}
          />
          <ProductCard
            color="var(--mythos)"
            iconType="soda"
            name="330 ml Cola"
            sugar="~ 35 g"
            attrs={[
              ['Faseranteil', '0 g'],
              ['Resorption', 'sehr rasch'],
              ['Sättigung', 'sehr gering'],
              ['DNL-Potenzial', 'hoch']
            ]}
          />
        </div>
        <div className="cite" style={{ marginTop: 16, textAlign: 'center' }}>
          DNL = De-novo-Lipogenese · Hannou et al. JCI 2018; EFSA Scientific Opinion on Sugars 2022; DGE 2024.
        </div>
      </div>
    </SlideShell>
  )
}

function ProductCard({ color, iconType, name, sugar, attrs }) {
  return (
    <div style={{
      border: `1px solid ${color}40`,
      borderTop: `3px solid ${color}`,
      borderRadius: 6,
      padding: '18px 20px',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ProductIcon type={iconType} color={color} />
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 600, color }}>
          {sugar}
        </div>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500, color: 'var(--primary-dark)' }}>
        {name}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'var(--text-muted)' }}>
        {attrs.map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted var(--border-soft)', padding: '3px 0' }}>
            <span>{k}</span>
            <span style={{ color: 'var(--text)', fontWeight: 500 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProductIcon({ type, color }) {
  const props = { width: 36, height: 36, fill: 'none', stroke: color, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (type === 'apple') return <svg viewBox="0 0 24 24" {...props}><path d="M12 7c0-2 2-3 4-2-1 2-2 3-4 2z" fill={color} fillOpacity="0.15" /><path d="M12 7c-3-1-7 1-7 6 0 4 3 8 7 8s7-4 7-8c0-5-4-7-7-6z" /></svg>
  if (type === 'juice') return <svg viewBox="0 0 24 24" {...props}><path d="M7 8h10l-1 12H8z" fill={color} fillOpacity="0.15" /><path d="M7 8h10l-1 12H8zM9 5h6v3H9z" /></svg>
  if (type === 'soda') return <svg viewBox="0 0 24 24" {...props}><path d="M7 6h10l-1 14H8z" fill={color} fillOpacity="0.15" /><path d="M7 6h10l-1 14H8zM9 4h6M8 11h8" /></svg>
  return null
}
