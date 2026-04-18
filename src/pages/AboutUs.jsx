import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import UnifiedFooter from '../components/UnifiedFooter'
import aboutImg from '../../assets/pic2.png'
import missionImg from '../../assets/pic3.png'

const AboutUs = () => {
  const values = [
    { title: 'Quality', text: 'We never compromise on the quality of materials and craftsmanship.' },
    { title: 'Discipline', text: 'Built with discipline is not just a tagline, it is our core operational principle.' },
    { title: 'Transparency', text: 'Complete openness in project timelines, costs, and material specifications.' },
    { title: 'Sustainability', text: 'Innovating with rainwater harvesting and waste management systems.' }
  ]

  return (
    <div className="bg-white min-h-screen text-dark selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="pt-24 overflow-hidden">
        
        {/* 1. Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center bg-black">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70"></div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-7xl font-bold font-serif mb-4 uppercase tracking-normal drop-shadow-xl"
            >
              Who We Are
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-xl font-light tracking-[0.1em] mb-8 text-white/80 max-w-2xl mx-auto"
            >
              Building a legacy of strength and sustainability, one brick at a time.
            </motion.p>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-1 bg-secondary mx-auto"
            />
          </div>
        </section>



        {/* 2. Intro Section */}
        <section className="py-24 px-4 md:px-8">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.4em] mb-4">Our Heritage</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-serif mb-8 leading-tight">
                Crafting Legacies Since <span className="text-primary italic">2024</span>
              </h3>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                Karrcholai Construction stands as a beacon of architectural excellence and engineering precision. We don't just build structures; we craft environments where life flourishes. 
              </p>
              <p className="text-lg text-dark/70 italic border-l-4 border-primary pl-6">
                "Our philosophy is simple: Strength in every brick, Sustainability in every design. We are dedicated to redefining oasis living in the heart of Chennai."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 z-0"></div>
              <img 
                src={missionImg} 
                alt="Our Vision" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-lg shadow-xl text-white z-20 hidden md:block">
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-xs uppercase tracking-widest font-bold">Planned Projects</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Our Values - Grid Animation */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 stone-texture opacity-10 mix-blend-overlay"></div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4">Our Core Values</h2>
              <p className="text-white/60 tracking-[0.3em] uppercase text-sm">Discipline in every detail</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm p-10 rounded-xl border border-white/10 hover:border-secondary transition-all"
                >
                  <div className="w-12 h-12 bg-secondary/20 flex items-center justify-center mb-6 rounded-lg text-secondary text-2xl font-bold">
                    0{i+1}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{v.title}</h4>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {v.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <UnifiedFooter />
    </div>
  )
}

export default AboutUs
