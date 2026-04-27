import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import logoImg from '../../assets/KARRCHOLAI LOGO.png'

const Preloader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0) // 0=bar, 1=logo, 2=done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800)   // bar fills → show logo
    const t2 = setTimeout(() => setPhase(2), 2000)  // logo shown → exit
    const t3 = setTimeout(() => onComplete(), 2600)  // fade out done
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[1000] bg-[#0d0d0b] flex flex-col items-center justify-center"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(201,117,74,0.08) 0%, transparent 65%)' }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.85, y: phase >= 1 ? 0 : 10 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center mb-10"
      >
        <img 
          src={logoImg} 
          alt="KARRCHOLAI" 
          className="h-32 md:h-48 w-auto object-contain drop-shadow-2xl" 
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 1 ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-[10px] tracking-[0.5em] uppercase font-black"
          style={{ color: 'rgba(201,117,74,0.85)' }}
        >
          Stone · Grove · Living
        </motion.p>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #3F5F4A, #C9754A)' }}
          initial={{ width: '0%' }}
          animate={{ width: phase >= 2 ? '100%' : phase >= 1 ? '70%' : '30%' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 0.3 : 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-[11px] tracking-[0.4em] uppercase text-white/30"
      >
        Loading
      </motion.p>
    </motion.div>
  )
}

export default Preloader
