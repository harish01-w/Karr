import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import logoImg from '../../assets/KARRCHOLAI LOGO.png'

const Preloader = ({ onComplete }) => {
  const [isLanded, setIsLanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLanded(true)
    }, 2500)
    
    const endTimer = setTimeout(() => {
      onComplete()
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(endTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
    >
      {/* ── Moving Light Source (The Sun) ── */}
      <motion.div
        initial={{ x: '-100%', y: '20%', opacity: 0 }}
        animate={{ x: '100%', y: '-20%', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, ease: "linear" }}
        className="absolute w-[150vw] h-[150vw] bg-gradient-to-r from-secondary/20 via-white/5 to-transparent blur-[150px] z-0"
      />

      {/* ── Shifting Building Shadow ── */}
      <div className="relative w-full h-full flex items-center justify-center">
        {!isLanded && (
          <motion.div
            initial={{ scaleY: 0, skewX: -45, opacity: 0 }}
            animate={{ 
              scaleY: [0, 1.2, 1], 
              skewX: [-45, 0],
              opacity: [0, 0.4, 0.2]
            }}
            transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-10 w-[300px] h-[400px] bg-black/80 blur-2xl flex flex-col gap-4 p-8"
          >
            {/* Minimalist Shadow Pillars */}
            <div className="w-1/2 h-full bg-black" />
            <div className="w-2/3 h-2/3 bg-black self-end" />
            <div className="w-full h-1/2 bg-black" />
          </motion.div>
        )}

        {/* ── Logo Reveal ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'brightness(0)' }}
          animate={{ 
            opacity: isLanded ? 1 : 0, 
            scale: isLanded ? 1 : 0.8,
            filter: isLanded ? 'brightness(1)' : 'brightness(0)'
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center"
        >
          <div className="relative p-12">
            {/* Cinematic Lens Flare */}
            <motion.div 
              animate={{ 
                x: [-100, 100],
                opacity: isLanded ? [0, 0.5, 0] : 0
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-white blur-md"
            />
            
            <img 
              src={logoImg} 
              alt="KARRCHOLAI" 
              className="h-32 md:h-48 w-auto object-contain drop-shadow-[0_0_60px_rgba(219,127,80,0.15)]"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLanded ? 1 : 0, y: isLanded ? 0 : 20 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-col items-center"
          >
            <p className="text-white/20 text-[10px] tracking-[1em] uppercase font-bold">Constructing Legacy</p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Ambient Ground Texture ── */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }} 
      />
    </motion.div>
  )
}

export default Preloader
