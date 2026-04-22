import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiHome, FiBriefcase, FiEdit3, FiDroplet, FiSun, FiShield, FiArrowRight } from 'react-icons/fi'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'

const services = [
  {
    id: 1,
    icon: FiHome,
    title: 'Residential Construction',
    desc: 'Turnkey house construction, structural work, and finishing — built to last a lifetime.',
    image: img1,
    size: 'col-span-1 md:col-span-2 row-span-2',
    accent: 'bg-primary/20'
  },
  {
    id: 2,
    icon: FiBriefcase,
    title: 'Project Management',
    desc: 'Professional oversight from planning to handover — on time, on budget.',
    image: img2,
    size: 'col-span-1 md:col-span-1 row-span-1',
    accent: 'bg-secondary/20'
  },
  {
    id: 3,
    icon: FiDroplet,
    title: 'Landscape Design',
    desc: 'Green space planning and garden development.',
    image: img3,
    size: 'col-span-1 md:col-span-1 row-span-2',
    accent: 'bg-green-500/10'
  },
  {
    id: 4,
    icon: FiEdit3,
    title: 'Planning & Estimation',
    desc: 'Transparent planning with detailed cost estimates.',
    image: img4,
    size: 'col-span-1 md:col-span-1 row-span-1',
    accent: 'bg-blue-500/10'
  },
  {
    id: 5,
    icon: FiShield,
    title: 'Quality Control',
    desc: 'Rigorous quality control at every stage.',
    size: 'col-span-1 md:col-span-1 row-span-1',
    accent: 'bg-orange-500/10'
  },
  {
    id: 6,
    icon: FiSun,
    title: 'Solar Solutions',
    desc: 'Sustainable energy for modern homes.',
    size: 'col-span-1 md:col-span-1 row-span-1',
    accent: 'bg-yellow-500/10'
  }
]

const ServicesSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Expertise & Craftsmanship
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none mb-6">
              Our <span className="text-white/40">Services</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl font-light"
          >
            We blend traditional architectural values with modern technology to deliver 
            unparalleled construction solutions.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer ${service.size} bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-500`}
              >
                {/* Background Image if available */}
                {service.image && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                )}

                {/* Content Overlay */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${service.accent} text-white group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-[280px] group-hover:text-white/80 transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/40 uppercase group-hover:text-secondary transition-colors duration-300">
                    Explore Details <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Spotlight Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-secondary hover:text-white transition-all duration-300">
            View All Specialized Services
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection

