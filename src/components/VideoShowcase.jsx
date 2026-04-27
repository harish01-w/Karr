import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import React, { useRef, useEffect } from 'react'
import VID from '../../assets/Karcholai Construction Quality Showcase.mp4'

const VideoShowcase = () => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const isInView = useInView(containerRef, { amount: 0.3 })

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(e => console.log("Autoplay check:", e))
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  
  return (
    <section 
      ref={containerRef}
      className="relative h-[70vh] md:h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
        {/* Background Video */}
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={VID} type="video/mp4" />
          </video>
          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
        </motion.div>

        {/* Minimalist Floating Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-[1px] w-8 bg-secondary" />
                <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">
                  Quality Showcase
                </span>
                <div className="h-[1px] w-8 bg-secondary" />
              </div>
            </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
            <span className="text-white text-[8px] uppercase tracking-[0.4em] rotate-90 mb-6">Explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
    </section>
  )
}

export default VideoShowcase
