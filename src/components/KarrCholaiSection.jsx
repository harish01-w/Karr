import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import karrImg from '../../assets/pic4.png'
import cholaiImg from '../../assets/pic5.png'

const karrFeatures = [
  'Turnkey House Construction',
  'Structural Construction Work',
  'Renovation & House Extensions',
  'Site Execution & Supervision',
  'Quality Control & Inspection',
]

const cholaiFeatures = [
  'Garden Planning & Development',
  'Landscape Design',
  'Rainwater Harvesting Systems',
  'Solar Panel Installation',
  'Waste Management Solutions',
]

const KarrCholaiSection = () => {
  const [hovered, setHovered] = useState(null) // 'karr', 'cholai', or null

  return (
    <section className="relative h-[75vh] min-h-[550px] w-full bg-[#050505] overflow-hidden flex flex-col lg:flex-row font-sans">
      
      {/* ── CENTRAL DIVIDER / BADGE ── */}
      <AnimatePresence>
        {!hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden lg:flex flex-col items-center gap-3"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
            <div className="w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white text-[9px] tracking-[0.2em] uppercase font-medium shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Explore
            </div>
            <div className="w-[1px] h-16 bg-gradient-to-t from-transparent via-white/40 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── KARR PANEL ── */}
      <motion.div
        onMouseEnter={() => setHovered('karr')}
        onMouseLeave={() => setHovered(null)}
        animate={{ 
          width: hovered === 'karr' ? '70%' : hovered === 'cholai' ? '30%' : '50%',
          height: '100%'
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden cursor-pointer group border-b lg:border-b-0 lg:border-r border-white/10"
      >
        <motion.div 
          animate={{ scale: hovered === 'karr' ? 1.05 : 1.15 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={karrImg} className="w-full h-full object-cover transition-all duration-700" alt="Karr" />
          {/* Overlay that darkens slightly, but gets richer on hover */}
          <div className={`absolute inset-0 transition-all duration-700 ${hovered === 'karr' ? 'bg-gradient-to-t from-[#111111]/95 via-[#111111]/50 to-transparent' : 'bg-black/70 group-hover:bg-black/50'}`} />
        </motion.div>

        {/* Content Container */}
        <div className="absolute inset-0 p-8 lg:p-12 xl:p-16 flex flex-col justify-center z-10">
          
          <motion.div
            animate={{ 
              opacity: (hovered === 'cholai' && window.innerWidth >= 1024) ? 0 : 1
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 lg:gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-8 lg:w-12 bg-[#DB7F50] block" />
              <p className="text-[#DB7F50] text-xs lg:text-sm uppercase tracking-[0.3em] font-medium">Division 01</p>
            </div>
            
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Karr <br/><span className="font-bold">Construction</span>
            </h2>

            <AnimatePresence>
              {hovered === 'karr' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="mt-4 lg:mt-6 overflow-hidden"
                >
                  <p className="text-white/80 max-w-lg text-sm lg:text-base leading-relaxed mb-4 lg:mb-6 font-light">
                    Forging structural integrity and architectural brilliance. We deliver turnkey construction solutions built to stand the test of time.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6 lg:mb-8 max-w-2xl">
                    {karrFeatures.map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        key={idx} 
                        className="flex items-center gap-3 text-white/90"
                      >
                        <FiCheckCircle className="text-[#DB7F50] shrink-0" />
                        <span className="text-xs lg:text-sm font-light">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button className="group flex items-center gap-3 bg-white text-black px-5 py-2.5 lg:px-7 lg:py-3 rounded-full text-sm font-medium hover:bg-[#DB7F50] hover:text-white transition-all duration-300">
                    Explore Karr
                    <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* ── CHOLAI PANEL ── */}
      <motion.div
        onMouseEnter={() => setHovered('cholai')}
        onMouseLeave={() => setHovered(null)}
        animate={{ 
          width: hovered === 'cholai' ? '70%' : hovered === 'karr' ? '30%' : '50%',
          height: '100%'
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden cursor-pointer group"
      >
        <motion.div 
          animate={{ scale: hovered === 'cholai' ? 1.05 : 1.15 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={cholaiImg} className="w-full h-full object-cover transition-all duration-700" alt="Cholai" />
          <div className={`absolute inset-0 transition-all duration-700 ${hovered === 'cholai' ? 'bg-gradient-to-t from-[#0a110d]/95 via-[#0a110d]/50 to-transparent' : 'bg-black/70 group-hover:bg-black/50'}`} />
        </motion.div>

        {/* Content Container */}
        <div className="absolute inset-0 p-8 lg:p-12 xl:p-16 flex flex-col justify-center z-10">
          
          <motion.div
            animate={{ 
              opacity: (hovered === 'karr' && window.innerWidth >= 1024) ? 0 : 1
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 lg:gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-8 lg:w-12 bg-[#41634A] block" />
              <p className="text-[#41634A] text-xs lg:text-sm uppercase tracking-[0.3em] font-medium">Division 02</p>
            </div>
            
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Cholai <br/><span className="font-bold">Environment</span>
            </h2>

            <AnimatePresence>
              {hovered === 'cholai' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="mt-4 lg:mt-6 overflow-hidden"
                >
                  <p className="text-white/80 max-w-lg text-sm lg:text-base leading-relaxed mb-4 lg:mb-6 font-light">
                    Cultivating sustainable living spaces. From landscape design to renewable energy systems, we harmonize nature with modern living.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6 lg:mb-8 max-w-2xl">
                    {cholaiFeatures.map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        key={idx} 
                        className="flex items-center gap-3 text-white/90"
                      >
                        <FiCheckCircle className="text-[#41634A] shrink-0" />
                        <span className="text-xs lg:text-sm font-light">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button className="group flex items-center gap-3 bg-white text-black px-5 py-2.5 lg:px-7 lg:py-3 rounded-full text-sm font-medium hover:bg-[#41634A] hover:text-white transition-all duration-300">
                    Explore Cholai
                    <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}

export default KarrCholaiSection
