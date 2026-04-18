import { motion } from 'framer-motion'
import { FiHome, FiBriefcase, FiEdit, FiWind, FiSun } from 'react-icons/fi'

const ServicesSection = () => {
  const services = [
    { title: 'Construction', icon: <FiHome />, color: 'bg-[#c9783b]' },
    { title: 'Project Management', icon: <FiBriefcase />, color: 'bg-[#2b2b2b]' },
    { title: 'Planning & Estimation', icon: <FiEdit />, color: 'bg-[#2f4f3e]' },
    { title: 'Landscape Design', icon: <FiWind />, color: 'bg-[#2f4f3e]' },
    { title: 'Solar Solutions', icon: <FiSun />, color: 'bg-[#c9783b]' },
  ]

  return (
    <div className="py-24 bg-[#f9f9f9] relative overflow-hidden">
      <div className="absolute inset-0 paper-texture opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold font-serif text-dark mb-16"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-2 shadow-xl rounded-sm"
            >
              <div className={`${service.color} h-40 flex flex-col items-center justify-center p-6 text-white relative overflow-hidden group`}>
                <div className="absolute inset-0 stone-texture opacity-20 mix-blend-overlay"></div>
                
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: idx * 0.5 }}
                  className="text-5xl mb-4 relative z-10 opacity-90 group-hover:scale-110 transition-transform duration-500"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] relative z-10 leading-tight">
                  {service.title}
                </h3>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
