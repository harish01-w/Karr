import { motion } from 'framer-motion'
import welcomeImg from '../../assets/pic2.png'

const WelcomeSection = () => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 leading-tight font-serif">
              Welcome to Karrcholai Construction
            </h2>
            
            <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-dark/80 font-semibold tracking-wide border-b border-gray-100 pb-6">
              <span>12+ Years of Experience</span>
              <span className="hidden sm:inline-block text-secondary w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>Customized Homes</span>
              <span className="hidden sm:inline-block text-secondary w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>Sustainable Approach</span>
            </div>
            
            <p className="text-dark/70 mb-10 text-lg leading-relaxed font-light">
              We specialize in creating premium residential spaces that balance architectural strength with environmental harmony. 
              Our commitment to quality ensures that every home we build is a testament to durability and sustainable design.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#b56932" }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white px-10 py-4 rounded text-sm font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-3 shadow-xl shadow-secondary/20"
            >
              About Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5"
          >
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 overflow-hidden shadow-[30px_30px_0px_0px_rgba(242,242,242,1)]"
              >
                <img src={welcomeImg} alt="Welcome to Karrcholai" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* Border decoration */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary z-0"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection
