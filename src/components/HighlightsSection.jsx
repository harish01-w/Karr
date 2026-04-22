import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { FiPlayCircle, FiPauseCircle, FiArrowRight } from 'react-icons/fi'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'
import pic4 from '../../assets/pic4.png'
import pic5 from '../../assets/pic5.png'

const highlights = [
  {
    id: 1,
    title: 'Engineered for Permanence.',
    subtitle: 'Structural Integrity',
    image: pic4,
    description: 'We use premium grade materials and advanced structural engineering to ensure your home stands strong for generations.',
    color: 'text-white'
  },
  {
    id: 2,
    title: 'Lush. Sustainable. Alive.',
    subtitle: 'Cholai Landscapes',
    image: pic5,
    description: 'Integrating nature into your daily life with sustainable landscaping and green energy solutions.',
    color: 'text-white'
  },
  {
    id: 3,
    title: 'The Art of Management.',
    subtitle: 'Professional PMC',
    image: pic3,
    description: 'Every brick, every minute, and every rupee is managed with absolute precision and transparency.',
    color: 'text-white'
  },
  {
    id: 4,
    title: 'Designed for the Future.',
    subtitle: 'Modern Aesthetics',
    image: pic2,
    description: 'Merging traditional architectural values with modern, clean-line designs that inspire.',
    color: 'text-white'
  }
]

const HighlightsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const scrollRef = useRef(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })

  // Handle scroll to update active dot
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft
      const itemWidth = scrollRef.current.offsetWidth * 0.8 // Approximate width of a card
      const newIndex = Math.round(scrollPosition / itemWidth)
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < highlights.length) {
        setActiveIndex(newIndex)
      }
    }
  }, [activeIndex])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  // Auto-play logic
  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % highlights.length
        scrollToIndex(nextIndex)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, activeIndex])

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.highlight-card')?.offsetWidth || 500
      const gap = 24 // gap-6 is 24px
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      })
      setActiveIndex(index)
    }
  }

  return (
    <section className="bg-black py-24 md:py-32 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Apple-style Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
              Get the highlights.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-8"
          >
            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group text-lg">
              Watch the film <FiPlayCircle className="text-2xl group-hover:scale-110 transition-transform" />
            </button>
            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group text-lg">
              View the archive <FiArrowRight className="text-2xl group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroller Container */}
      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-6 md:px-[calc((100vw-1280px)/2+48px)] scrollbar-hide snap-x snap-mandatory no-scrollbar pb-12"
          style={{ 
            scrollPaddingLeft: 'max(24px, (100vw - 1280px) / 2 + 48px)',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="highlight-card flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[800px] aspect-[16/10] md:aspect-[16/9] relative rounded-[28px] overflow-hidden snap-center group/card cursor-pointer"
              onClick={() => scrollToIndex(index)}
            >
              {/* Background Image/Video Placeholder */}
              <div className="absolute inset-0 bg-[#161617]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                />
              </div>
              
              {/* Text Content Overlay */}
              <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-white/60 font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
                    {item.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] max-w-[80%] md:max-w-[60%]">
                    {item.title}
                  </h3>
                </motion.div>
              </div>

              {/* Hover Description (Subtle) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                 <p className="text-white/90 text-sm md:text-lg font-medium max-w-2xl">
                    {item.description}
                  </p>
              </div>
            </motion.div>
          ))}
          
          {/* Spacer for end of scroll to allow last item to center */}
          <div className="flex-shrink-0 w-[10vw] md:w-[20vw]" />
        </div>

        {/* Navigation Controls */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 flex items-center justify-between">
          <div className="flex items-center gap-6 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className="relative group"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
                    activeIndex === index ? 'w-10 bg-white' : 'w-1.5 bg-white/20 group-hover:bg-white/40'
                  }`} />
                </button>
              ))}
            </div>

            <div className="w-px h-4 bg-white/10 mx-2" />

            {/* Play/Pause */}
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white/60 hover:text-white transition-colors flex items-center justify-center"
            >
              {isPlaying ? <FiPauseCircle size={22} /> : <FiPlayCircle size={22} />}
            </button>
          </div>

          <button className="hidden md:flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium">
            Scroll to explore <FiArrowRight className="animate-pulse" />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .highlight-card {
          scroll-snap-align: center;
        }
      `}} />
    </section>
  )
}

export default HighlightsSection


