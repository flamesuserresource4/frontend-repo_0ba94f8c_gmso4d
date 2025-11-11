import { motion } from 'framer-motion'

export default function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="mb-8">
      <motion.span
        className="text-xs uppercase tracking-widest text-gray-500"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {kicker}
      </motion.span>
      <motion.h2
        className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-3 text-gray-600 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
