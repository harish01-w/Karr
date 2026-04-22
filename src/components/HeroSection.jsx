import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'
import pic4 from '../../assets/pic4.png'
import pic5 from '../../assets/pic5.png'
import pic7 from '../../assets/pic7.png'

const images = [pic2, pic3, pic4, pic5, pic7]

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="relative min-h-[70vh] lg:min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black pt-20 pb-16">
      {/* Background Image Slideshow */}
      <AnimatePresence initial={false}>
        <motion.div 
          key={currentImageIndex}
          initial={{ x: '100%', opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          className="absolute inset-0 w-full h-full bg-cover bg-[center_top] bg-no-repeat z-0"
        />
      </AnimatePresence>
      
      {/* Dark Overlay - keep outside AnimatePresence so it doesn't crossfade */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content - More compact layout */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full container mx-auto px-4 md:px-8 text-center flex flex-col items-center pt-8"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl font-serif max-w-4xl tracking-tight"
        >
          Built on Strength. Designed for Life.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base md:text-xl text-white/95 mb-6 max-w-2xl font-light tracking-wide drop-shadow-lg"
        >
          Residential Construction & Project Management Consultancy
        </motion.p>

        {/* Tagline Bar - More compact */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-black/50 backdrop-blur-sm py-3 w-full max-w-3xl mb-10 flex justify-center items-center shadow-xl border-y border-white/10"
        >
          <div className="text-white text-lg md:text-2xl font-medium flex items-center justify-center gap-5 px-4">
            <span className="font-semibold tracking-wide">Karr – Strength</span>
            <span className="h-6 w-[1px] bg-white/30"></span>
            <span className="font-semibold tracking-wide">Cholai – Sustainability</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <Link to="/services">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#b56932" }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white px-8 py-3 rounded-md text-base font-bold tracking-wider transition-all shadow-lg"
            >
              Our Services
            </motion.button>
          </Link>

          
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#253f32" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-md text-base font-bold tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Contact Us <span className="text-lg font-light opacity-80">&gt;</span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection

