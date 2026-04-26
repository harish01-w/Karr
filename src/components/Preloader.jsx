import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import logoImg from '../../assets/KARRCHOLAI LOGO.png'

const Preloader = ({ onComplete }) => {
  const [isLanded, setIsLanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLanded(true)
    }, 2800)
    
    const endTimer = setTimeout(() => {
      onComplete()
    }, 5500)

    return () => {
      clearTimeout(timer)
      clearTimeout(endTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
    >
      {/* ── Cinematic Sun & Lens Flare ── */}
      <motion.div
        initial={{ x: '-80%', y: '40%', opacity: 0 }}
        animate={{ x: '80%', y: '-40%', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4.5, ease: "linear" }}
        className="absolute w-full h-full z-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-secondary/10 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[200vh] bg-white/5 rotate-45 blur-sm" />
      </motion.div>

      {/* ── Atmospheric Mist/Dust ── */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <motion.div 
          animate={{ x: [-100, 100], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"
        />
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        {/* ── Evolving Building Shadow ── */}
        {!isLanded && (
          <motion.div
            initial={{ scaleY: 0, skewX: -60, opacity: 0 }}
            animate={{ 
              scaleY: [0, 1.4, 1], 
              skewX: [-60, 0],
              opacity: [0, 0.5, 0.3]
            }}
            transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-10 w-[200px] md:w-[350px] h-[500px] bg-black/90 blur-3xl flex flex-col justify-end p-12"
          >
            {/* Morphing Structural Silhouette */}
            <div className="w-full h-full bg-black/80 rounded-t-sm" />
            <div className="w-1/2 h-2/3 bg-black self-center mt-[-20%]" />
            <div className="w-1/4 h-1/2 bg-black self-start mt-[-10%]" />
          </motion.div>
        )}

        {/* ── Cinematic Logo Reveal ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, filter: 'brightness(0) blur(10px)' }}
          animate={{ 
            opacity: isLanded ? 1 : 0, 
            scale: isLanded ? 1 : 0.7,
            filter: isLanded ? 'brightness(1) blur(0px)' : 'brightness(0) blur(10px)'
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center"
        >
          <div className="relative p-16">
            {/* Radiant Brand Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: isLanded ? [0.2, 0.4, 0.2] : 0
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-secondary/30 rounded-full blur-[150px]"
            />
            
            <img 
              src={logoImg} 
              alt="KARRCHOLAI" 
              className="h-32 md:h-48 w-auto object-contain relative z-10 drop-shadow-[0_0_80px_rgba(219,127,80,0.2)]"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLanded ? 1 : 0, y: isLanded ? 0 : 30 }}
            transition={{ delay: 1.2 }}
            className="mt-4 flex flex-col items-center"
          >
            <p className="text-white/30 text-[10px] tracking-[1.2em] uppercase font-black">Vision to Reality</p>
            <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Ground Texture (Concrete/Slate) ── */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />
    </motion.div>
  )
}

export default Preloader
