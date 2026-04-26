import { motion } from 'framer-motion'
import { FiHome, FiCheckCircle, FiShield, FiZap, FiLayers, FiActivity } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import UnifiedFooter from '../components/UnifiedFooter'
import servicesBg from '../../assets/pic5.png'

const Services = () => {
  const mainServices = [
    {
      icon: <FiHome />,
      title: 'Residential Construction',
      tagline: 'End-to-end building solutions',
      desc: 'We specialize in high-end residential projects, delivering homes that combine structural integrity with aesthetic brilliance. From foundation to finishing, we ensure every brick is laid with discipline.',
      features: ['Luxury Villas', 'Modern Apartments', 'Heritage Restoration', 'Structural Strengthening']
    },
    {
      icon: <FiActivity />,
      title: 'PMC & Supervision',
      tagline: 'Precision project management',
      desc: 'Our Project Management Consultancy ensures your construction stays on track, on budget, and above standard. We act as your eyes on-site, ensuring absolute compliance with design and safety.',
      features: ['Timeline Management', 'Budget Oversight', 'Vendor Coordination', 'Quality Supervision']
    },
    {
      icon: <FiZap />,
      title: 'Sustainable Systems',
      tagline: 'Eco-friendly innovations',
      desc: 'Designing for the future. We integrate smart rainwater harvesting, solar energy solutions, and advanced waste management systems into every project we undertake.',
      features: ['Rainwater Harvesting', 'Solar Energy Integration', 'Greywater Recycling', 'Eco-friendly Materials']
    }
  ]

  const secondaryServices = [
    { icon: <FiCheckCircle />, title: 'Quality Control', desc: 'Rigorous multi-point quality checks at every construction milestone.' },
    { icon: <FiShield />, title: 'Safety Compliance', desc: 'Strict adherence to international safety standards for on-site crew and structures.' },
    { icon: <FiLayers />, title: 'Material Sourcing', desc: 'Sourcing only premium-grade, tested materials for lasting strength.' },
  ]

  return (
    <div className="bg-white min-h-screen text-dark selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="pt-24">
        
        {/* 1. Hero Section */}
        <section className="relative h-[45vh] sm:h-[60vh] flex items-center justify-center bg-black overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${servicesBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-6 md:px-8 text-center md:text-left">
            <div className="max-w-3xl">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] md:text-sm mb-4"
              >
                Our Expertise
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-2xl sm:text-3xl md:text-6xl font-black font-serif text-white mb-4 leading-[1.1] tracking-tight"
              >
                Comprehensive <br /> <span className="text-secondary">Building</span> Solutions
              </motion.h1>

            </div>
          </div>
        </section>

        {/* 2. Detailed Services Grid */}
        <section className="py-12 md:py-24 px-4 sm:px-6 md:px-8 bg-light/30">
          <div className="container mx-auto">
            <div className="space-y-24 md:space-y-32">
              {mainServices.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-16 items-center`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="text-5xl md:text-7xl text-primary/10 mb-[-30px] md:mb-[-40px] font-black italic select-none">0{idx + 1}</div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl md:text-4xl text-secondary bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl">{service.icon}</div>
                      <div>
                        <h3 className="text-2xl md:text-4xl font-bold font-serif">{service.title}</h3>
                        <p className="text-secondary font-bold text-[10px] md:text-xs uppercase tracking-widest">{service.tagline}</p>
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-dark/70 mb-8 md:mb-10 leading-relaxed max-w-xl">
                      {service.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-primary group">
                          <FiCheckCircle className="text-secondary shrink-0 transition-transform group-hover:scale-125" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl md:rounded-3xl rotate-3 z-0"></div>
                    <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl relative z-10 overflow-hidden group">
                      <img 
                        src={servicesBg} 
                        alt={service.title} 
                        className="rounded-xl md:rounded-2xl w-full h-[300px] md:h-[400px] object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Support Services (Cards) */}
        <section className="py-20 md:py-24 px-6 md:px-8 bg-primary text-white relative">
          <div className="absolute inset-0 stone-texture opacity-10"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Ancillary Services</h2>
              <div className="h-1.5 w-20 md:w-24 bg-secondary mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
              {secondaryServices.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 text-center"
                >
                  <div className="text-3xl md:text-4xl text-secondary mb-6 flex justify-center">{s.icon}</div>
                  <h4 className="text-xl md:text-2xl font-bold mb-4">{s.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Ready to Start CTA */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto space-y-6 md:space-y-8"
            >
              <h3 className="text-3xl md:text-6xl font-black font-serif text-primary leading-tight">
                Have a project? <br /> Let's discuss the possibilities.
              </h3>
              <p className="text-lg md:text-xl text-dark/50 font-light italic">
                Our team is ready to provide you with a consultation and a detailed project roadmap.
              </p>
              <div className="pt-6 md:pt-8">
                <button className="bg-secondary text-white w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg font-bold uppercase tracking-widest shadow-2xl hover:bg-primary transition-all duration-300">
                  Request a Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>


      </main>

      <UnifiedFooter />
    </div>
  )
}

export default Services
