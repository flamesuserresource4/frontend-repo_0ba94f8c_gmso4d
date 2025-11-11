import { AnimatePresence, motion } from 'framer-motion'

export default function PageTransition({ routeKey = 'home', children }) {
  const variants = {
    initial: { clipPath: 'circle(0% at 50% 50%)', opacity: 0.6 },
    enter: { clipPath: 'circle(140% at 50% 50%)', opacity: 1 },
    exit: { clipPath: 'circle(0% at 50% 50%)', opacity: 0.6 },
  }
  const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={transition}
        className="relative"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
