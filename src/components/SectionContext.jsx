import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

const SectionCtx = createContext({
  currentSection: 'hero',
  pointer: { x: 0, y: 0 },
})

export function SectionProvider({ children }) {
  const [currentSection, setCurrentSection] = useState('hero')
  const target = useRef({ x: 0, y: 0 })
  const lerped = useRef({ x: 0, y: 0 })
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX ?? (e.touches?.[0]?.clientX || 0)
      const y = e.clientY ?? (e.touches?.[0]?.clientY || 0)
      target.current = { x, y }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('touchmove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
    }
  }, [])

  useEffect(() => {
    let raf
    const tick = () => {
      // simple lerp for buttery pointer
      const a = 0.12
      lerped.current.x += (target.current.x - lerped.current.x) * a
      lerped.current.y += (target.current.y - lerped.current.y) * a
      setPointer({ x: lerped.current.x, y: lerped.current.y })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const getSectionKey = (el) => el?.getAttribute('data-section') || 'hero'
    const calc = () => {
      const sections = Array.from(document.querySelectorAll('[data-section]'))
      if (!sections.length) return
      const mid = window.innerHeight / 2
      let best = { d: Infinity, key: 'hero' }
      sections.forEach((el) => {
        const r = el.getBoundingClientRect()
        const center = r.top + r.height / 2
        const d = Math.abs(center - mid)
        if (d < best.d) best = { d, key: getSectionKey(el) }
      })
      setCurrentSection(best.key)
    }
    calc()
    const onScroll = () => calc()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    const obs = new MutationObserver(calc)
    obs.observe(document.body, { childList: true, subtree: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      obs.disconnect()
    }
  }, [])

  const value = useMemo(() => ({ currentSection, pointer }), [currentSection, pointer])
  return <SectionCtx.Provider value={value}>{children}</SectionCtx.Provider>
}

export function useSection() {
  return useContext(SectionCtx)
}
