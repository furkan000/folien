export default function MythVsFakt({ myth, fakt }) {
  return (
    <div className="cols-2">
      <div className="card-mythos">
        <div className="card-header">
          <DotIcon color="var(--mythos)" />
          Mythos
        </div>
        <div className="card-body" style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, lineHeight: 1.35, fontStyle: 'italic', color: 'var(--mythos)' }}>
          „{myth}"
        </div>
      </div>
      <div className="card-fakt">
        <div className="card-header">
          <CheckIcon color="var(--fakt)" />
          Fakt
        </div>
        <div className="card-body" style={{ fontSize: 17, lineHeight: 1.5 }}>
          {fakt}
        </div>
      </div>
    </div>
  )
}

function DotIcon({ color }) {
  return <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="none" stroke={color} strokeWidth="1.5" /><line x1="4" y1="4" x2="10" y2="10" stroke={color} strokeWidth="1.5" /></svg>
}
function CheckIcon({ color }) {
  return <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 7l3 3 5-6" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
