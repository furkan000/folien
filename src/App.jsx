import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { slides } from './slides'

export default function App() {
  const [index, setIndex] = useState(0)
  const total = slides.length

  const goNext = () => setIndex(i => Math.min(i + 1, total - 1))
  const goPrev = () => setIndex(i => Math.max(i - 1, 0))

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault(); goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault(); goPrev()
      } else if (e.key === 'Home') {
        setIndex(0)
      } else if (e.key === 'End') {
        setIndex(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [total])

  const Current = slides[index].component
  const progress = ((index + 1) / total) * 100

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <div className="stage">
        <SlideFrame>
          <Current pageNum={index + 1} total={total} />
        </SlideFrame>
      </div>

      <div className="nav" role="navigation" aria-label="Foliennavigation">
        <button onClick={goPrev} disabled={index === 0} aria-label="Vorherige Folie">‹</button>
        <span className="indicator">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <button onClick={goNext} disabled={index === total - 1} aria-label="Nächste Folie">›</button>
      </div>
    </>
  )
}

function SlideFrame({ children }) {
  const frameRef = useRef(null)
  const canvasRef = useRef(null)

  useLayoutEffect(() => {
    const fit = () => {
      const frame = frameRef.current
      const canvas = canvasRef.current
      if (!frame || !canvas) return
      const w = frame.clientWidth
      const h = frame.clientHeight
      const scale = Math.min(w / 1600, h / 900)
      canvas.style.transform = `scale(${scale})`
    }
    fit()
    const ro = new ResizeObserver(fit)
    if (frameRef.current) ro.observe(frameRef.current)
    window.addEventListener('resize', fit)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', fit)
    }
  }, [])

  return (
    <div className="slide-frame" ref={frameRef}>
      <div className="slide-canvas" ref={canvasRef}>
        {children}
      </div>
    </div>
  )
}
