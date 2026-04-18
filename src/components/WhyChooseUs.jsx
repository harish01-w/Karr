import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const WhyChooseUs = () => {
  const points = [
    '12+ Years Experience',
    'Customized Homes',
    'Strong Documentation',
    'Sustainable Solutions'
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full lg:w-1/3 flex flex-col justify-start"
    >
      <h2 className="text-4xl font-bold font-serif text-dark mb-10 relative">
        Why Choose Us
        <span className="block w-16 h-1 bg-secondary mt-3"></span>
      </h2>
      
      <ul className="space-y-6">
        {points.map((point, idx) => (
          <motion.li 
            key={idx} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4 text-dark/80 group"
          >
            <div className="text-secondary text-2xl group-hover:scale-110 transition-transform">
              <FiCheckCircle />
            </div>
            <span className="text-xl font-semibold tracking-wide">{point}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default WhyChooseUs
