import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import bgTexture from '../../assets/pic6.png'

const KarrCholaiSection = () => {
  const karrFeatures = [
    'Residential Construction',
    'PMC & Supervision',
    'Quality Control'
  ]

  const cholaiFeatures = [
    'Landscape & Rainwater',
    'Solar & Waste Management'
  ]

  return (
    <div 
      className="w-full flex flex-col md:flex-row min-h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      
      {/* Karr Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex flex-col items-center justify-center p-12 lg:p-20 text-white"
      >
        <div className="max-w-md w-full">
          <div className="flex items-center gap-5 mb-8">
            <div className="flex-shrink-0">
               <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15L20 45H45V85H55V45H80L50 15Z" fill="#f0e6d2" />
                  <rect x="25" y="50" width="15" height="30" fill="#f0e6d2" opacity="0.6" />
                  <rect x="60" y="50" width="15" height="30" fill="#f0e6d2" opacity="0.6" />
               </svg>
            </div>
            <div>
              <h3 className="text-5xl font-bold font-serif mb-1 uppercase tracking-tight">Karr</h3>
              <p className="text-white/90 font-medium text-lg tracking-wide">Strength in Construction</p>
            </div>
          </div>

          <div className="h-[1px] bg-white/30 w-full mb-8"></div>

          <ul className="space-y-4 mb-10">
            {karrFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-4 text-xl font-light">
                <FiCheck className="text-white text-2xl" />
                {feature}
              </li>
            ))}
          </ul>

          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/40 px-10 py-3 rounded text-base font-semibold transition-all flex items-center justify-center gap-3 bg-black/10"
          >
            View Karr <span className="text-xl font-light opacity-80">&gt;</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Cholai Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col items-center justify-center p-12 lg:p-20 text-white"
      >
        <div className="max-w-md w-full">
          <div className="flex items-center gap-5 mb-8">
            <div className="flex-shrink-0">
               <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15L20 45H45V85H55V45H80L50 15Z" fill="white" />
                  <rect x="25" y="50" width="15" height="30" fill="white" opacity="0.7" />
                  <rect x="60" y="50" width="15" height="30" fill="white" opacity="0.7" />
               </svg>
            </div>
            <div>
              <h3 className="text-5xl font-bold font-serif mb-1 uppercase tracking-tight">Cholai</h3>
              <p className="text-white/90 font-medium text-lg tracking-wide">Sustainable Systems</p>
            </div>
          </div>

          <div className="h-[1px] bg-white/30 w-full mb-8"></div>

          <ul className="space-y-4 mb-10">
            {cholaiFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-4 text-xl font-light">
                <FiCheck className="text-white text-2xl" />
                {feature}
              </li>
            ))}
          </ul>

          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/40 px-10 py-3 rounded text-base font-semibold transition-all flex items-center justify-center gap-3 bg-black/10"
          >
            View Cholai <span className="text-xl font-light opacity-80">&gt;</span>
          </motion.button>
        </div>
      </motion.div>

    </div>
  )
}

export default KarrCholaiSection
