import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiCheck } from 'react-icons/fi'
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
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const imageY1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const imageY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <section ref={ref} className="relative overflow-hidden">

      {/* ── KARR panel ── */}
      <div className="flex flex-col lg:flex-row">

        {/* Image left */}
        <div className="w-full lg:w-1/2 relative overflow-hidden h-[500px] lg:h-auto min-h-[600px]">
          <motion.div style={{ y: imageY1 }} className="absolute inset-0 w-full h-[120%]">
            <img src={karrImg} className="w-full h-full object-cover" alt="Karr Construction" />
            <div className="absolute inset-0 bg-dark/20" />
          </motion.div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-[12vw] lg:text-[10vw] font-black text-transparent stroke-white/20 select-none tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
              BUILD
            </h2>
          </div>
        </div>

        {/* Content right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="w-full lg:w-1/2 bg-primary flex flex-col justify-center px-12 lg:px-24 py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 stone-texture opacity-5" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-secondary" />
              <span className="text-secondary font-black text-[11px] tracking-[0.4em] uppercase">Strength Division</span>
            </div>

            <h2 className="text-7xl lg:text-9xl font-black text-white font-serif leading-none mb-6">KARR</h2>
            <p className="text-white/60 text-xl font-light italic mb-10 max-w-sm">The foundation of every enduring legacy starts with disciplined engineering.</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
              {karrFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-4 text-white/80 text-sm font-medium">
                  <FiCheck className="mt-1 text-secondary" size={18} />
                  {f}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              className="group flex items-center gap-6 text-white text-xs font-black tracking-widest uppercase border border-white/20 px-8 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-500"
            >
              Explore Engineering
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* ── CHOLAI panel (reversed) ── */}
      <div className="flex flex-col lg:flex-row-reverse">

        {/* Image right */}
        <div className="w-full lg:w-1/2 relative overflow-hidden h-[500px] lg:h-auto min-h-[600px]">
          <motion.div style={{ y: imageY2 }} className="absolute inset-0 w-full h-[120%] top-[-10%]">
            <img src={cholaiImg} className="w-full h-full object-cover" alt="Cholai Sustainable" />
            <div className="absolute inset-0 bg-dark/20" />
          </motion.div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-[12vw] lg:text-[10vw] font-black text-transparent stroke-white/20 select-none tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
              NATURE
            </h2>
          </div>
        </div>

        {/* Content left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="w-full lg:w-1/2 bg-secondary flex flex-col justify-center px-12 lg:px-24 py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 stone-texture opacity-5" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-black text-[11px] tracking-[0.4em] uppercase">Living Division</span>
            </div>

            <h2 className="text-7xl lg:text-9xl font-black text-white font-serif leading-none mb-6">CHOLAI</h2>
            <p className="text-white/70 text-xl font-light italic mb-10 max-w-sm">Designing with the future in mind, where nature and structure coexist.</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
              {cholaiFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-4 text-white/90 text-sm font-medium">
                  <FiCheck className="mt-1 text-primary" size={18} />
                  {f}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              className="group flex items-center gap-6 text-white text-xs font-black tracking-widest uppercase border border-white/20 px-8 py-5 rounded-full hover:bg-white hover:text-secondary transition-all duration-500"
            >
              Explore Sustainability
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KarrCholaiSection
