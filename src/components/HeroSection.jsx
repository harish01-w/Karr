import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'
import pic4 from '../../assets/pic4.png'
import pic5 from '../../assets/pic5.png'
import pic7 from '../../assets/pic7.png'

const slides = [
  { image: pic2, tag: 'Residential Construction' },
  { image: pic3, tag: 'Project Management' },
  { image: pic4, tag: 'Quality Workmanship' },
  { image: pic5, tag: 'Sustainable Living' },
  { image: pic7, tag: 'Dream Homes' },
]

const HeroSection = () => {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [dir, setDir] = useState(1) // 1=forward, -1=backward
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY  = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity   = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setDir(1)
      setPrev(current)
      setCurrent(c => (c + 1) % slides.length)
    }, 6000)
    return () => clearInterval(t)
  }, [current])

  const go = (idx) => {
    setDir(idx > current ? 1 : -1)
    setPrev(current)
    setCurrent(idx)
  }

  const variants = {
    enter:  (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <div ref={ref} className="relative w-full h-[92vh] flex items-center justify-center overflow-hidden bg-dark">

      {/* ── Slides ── */}
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={current}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </AnimatePresence>

      {/* ── Layered overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark/45 z-10" />
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(135deg, rgba(65,99,74,0.08) 0%, transparent 60%, rgba(219,127,80,0.06) 100%)'
      }} />

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center pt-16"
      >
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-5xl mb-4"
        >
          From <span className="shimmer-text">Stone</span> to Oasis —<br />
          <span className="text-white">We Build Better Living</span>
        </motion.h1>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 md:gap-12"
        >
          {[
            { value: '12+', label: 'Years Experience' },
            { value: '150+', label: 'Projects Delivered' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-secondary">{s.value}</p>
              <p className="text-white/60 text-[10px] md:text-[12px] tracking-[0.2em] uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Slide indicators ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-6 h-1.5 bg-secondary'
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 right-8 z-20 hidden md:flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase rotate-90 origin-center mb-3">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-4 h-7 border border-white/20 rounded-full flex justify-center pt-1"
        >
          <div className="w-0.5 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection
