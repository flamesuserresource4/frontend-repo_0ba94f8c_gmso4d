import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const Item = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-8"
    >
      {children}
    </a>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-block h-3 w-3 rounded-sm bg-gray-900" />
          <span>Designer Portfolio</span>
        </a>
        <div className="hidden md:flex items-center">
          <Item href="#work">Work</Item>
          <Item href="#skills">Skills</Item>
          <Item href="#contact">Contact</Item>
          <a href="#contact" className="ml-2 inline-flex items-center gap-1 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col">
            <Item href="#work">Work</Item>
            <Item href="#skills">Skills</Item>
            <Item href="#contact">Contact</Item>
          </div>
        </div>
      )}
    </header>
  )
}
