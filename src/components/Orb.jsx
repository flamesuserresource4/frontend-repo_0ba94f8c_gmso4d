import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { useSection } from './SectionContext'

export default function Orb() {
  const { currentSection, pointer } = useSection()

  const mx = useMotionValue(pointer.x)
  const my = useMotionValue(pointer.y)

  useEffect(() => {
    mx.set(pointer.x)
    my.set(pointer.y)
  }, [pointer.x, pointer.y, mx, my])

  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 })

  const x = useTransform(sx, (v) => v - 40)
  const y = useTransform(sy, (v) => v - 40)

  const color = {
    hero: 'from-[#111827] to-[#1f2937]',
    work: 'from-[#0ea5e9] to-[#22d3ee]',
    skills: 'from-[#22c55e] to-[#84cc16]',
    contact: 'from-[#a855f7] to-[#f472b6]',
  }[currentSection] || 'from-gray-800 to-gray-600'

  const blur = {
    hero: 'blur-[32px] opacity-[0.25]',
    work: 'blur-[26px] opacity-[0.22]',
    skills: 'blur-[24px] opacity-[0.2]',
    contact: 'blur-[30px] opacity-[0.24]',
  }[currentSection] || 'blur-[28px] opacity-[0.22]'

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      <motion.div
        aria-hidden
        className={`absolute h-20 w-20 rounded-full bg-gradient-to-br ${color} ${blur}`}
        style={{ x, y }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      />
      {/* trailing aura */}
      <motion.div
        aria-hidden
        className={`absolute h-40 w-40 rounded-full bg-gradient-to-br ${color} opacity-[0.08]`}
        style={{ x: useTransform(x, (v)=>v-20), y: useTransform(y, (v)=>v-20) }}
      />
    </div>
  )
}
