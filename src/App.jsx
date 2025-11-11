import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Navbar from './Navbar'
import SectionHeader from './components/SectionHeader'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'

const projects = [
  {
    title: 'Fintech Dashboard',
    subtitle: 'Data-dense interface for portfolio tracking with delightful microinteractions.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop',
    tags: ['Product Design', 'Design System', 'Prototyping']
  },
  {
    title: 'Wellness Mobile App',
    subtitle: 'Habit loops, mindful rituals, and a soft visual language across iOS & Android.',
    image: 'https://images.unsplash.com/photo-1663661746125-9189b2f8ed81?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWxsbmVzcyUyME1vYmlsZSUyMEFwcHxlbnwwfDB8fHwxNzYyODkyNjA2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['Mobile', 'Motion', 'UX Research']
  },
  {
    title: 'SaaS Marketing Site',
    subtitle: 'Conversion-first storytelling with subtle motion and crisp typography.',
    image: 'https://images.unsplash.com/photo-1712331669095-c845e0b4cacf?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI4OTI2MDd8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['Web', 'Animation', 'A/B Testing']
  }
]

export default function App(){
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div id="top" className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[84vh] sm:h-[88vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/90 pointer-events-none" />

        <div className="relative z-10 h-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <motion.h1
              className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Designing clear, elegant interfaces
              <br className="hidden sm:block" />
              that feel effortless.
            </motion.h1>
            <motion.p
              className="mt-4 max-w-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05 }}
            >
              I’m a UI/UX designer focused on crisp typography, helpful motion, and systems that scale. Available for select collaborations.
            </motion.p>
            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <a href="#work" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">View work</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-200 px-5 py-3 text-sm font-medium hover:bg-gray-50 transition-colors">Get in touch</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Selected Work"
            title="A few projects I loved crafting"
            subtitle="From early exploration to polished systems, here are snapshots across product, web, and motion."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Expertise"
            title="What I bring to teams"
            subtitle="Bridging user needs and business goals with principled design and pragmatic execution."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Product & UX', points: ['User journeys', 'Information architecture', 'Usability testing'] },
              { title: 'UI & Systems', points: ['Design systems', 'Accessibility', 'Component libraries'] },
              { title: 'Motion & Prototyping', points: ['Framer/Motion', 'Protopie', 'Microinteractions'] },
              { title: 'Collaboration', points: ['Workshops', 'Spec writing', 'Dev handoff'] },
              { title: 'Tooling', points: ['Figma', 'Framer', 'Notion/Linear'] },
              { title: 'Web', points: ['Responsive design', 'Perf-minded', 'SEO basics'] },
            ].map((s) => (
              <motion.div
                key={s.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Contact"
            title="Let’s create something great"
            subtitle="Tell me about your product, timeline, and what success looks like. I’ll reach out within 24 hours."
          />

          <motion.form
            className="grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Name" required />
            <input className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Email" type="email" required />
            <input className="sm:col-span-2 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Company / Project" />
            <textarea rows="5" className="sm:col-span-2 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Tell me a bit about the challenge" />
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-sm text-gray-500">Prefer email? hello@example.com</p>
              <button className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">Send message</button>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
