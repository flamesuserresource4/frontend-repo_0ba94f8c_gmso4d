import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ title, subtitle, image, tags = [] }) {
  return (
    <motion.a
      href="#"
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
          {tags?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="text-xs rounded-full bg-gray-100 text-gray-700 px-2 py-1">{t}</span>
              ))}
            </div>
          )}
        </div>
        <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </motion.a>
  )
}
