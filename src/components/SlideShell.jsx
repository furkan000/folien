export default function SlideShell({ eyebrowNum, eyebrow, title, subtitle, children, pageNum, total, hideHeader = false, hideFooter = false }) {
  return (
    <div className="slide">
      {!hideHeader && (
        <div className="slide-header">
          <div className="slide-eyebrow">
            {eyebrowNum && <span className="num">{eyebrowNum}</span>}
            {eyebrow}
          </div>
          <div className="slide-meta">Zucker · Mythos vs. Fakten · 2026</div>
        </div>
      )}
      {title && <h1 className="slide-title">{title}</h1>}
      {subtitle && <p className="slide-subtitle">{subtitle}</p>}
      <div className="slide-body">{children}</div>
      {!hideFooter && (
        <div className="slide-footer">
          <span className="brand">Zentrum für Ernährungsmedizin & Diabetologie</span>
          <span className="pagenum">{String(pageNum).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        </div>
      )}
    </div>
  )
}
