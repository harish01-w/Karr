import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import homeHeroImage from '../../assets/homeheroimage.jpeg'


const HeroSection = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })


  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-dark"
      style={{
        height: 'calc(100vh - 100px)',
        marginTop: '100px',
      }}
    >

      {/* ── Background Image ── */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${homeHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* ── SEO H1 ── */}
      <h1 className="sr-only">
        Building Homes That Tell Your Story | Premium Residential Construction in Tamil Nadu
      </h1>
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
