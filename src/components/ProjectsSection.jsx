import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import prj1 from '../../assets/pic2.png'
import prj2 from '../../assets/pic3.png'
import prj3 from '../../assets/pic7.png'

const projects = [
  { 
    title: 'Modern Villa', 
    location: 'Chennai, TN',
    tag: 'Residential', 
    image: prj1, 
    year: '2023',
    size: '4,500 Sq.Ft'
  },
  { 
    title: 'Heritage Duplex', 
    location: 'Coimbatore, TN',
    tag: 'Construction', 
    image: prj2, 
    year: '2022',
    size: '3,200 Sq.Ft'
  },
  { 
    title: 'Eco-Living Hub', 
    location: 'Madurai, TN',
    tag: 'Sustainable', 
    image: prj3, 
    year: '2024',
    size: '5,100 Sq.Ft'
  },
]

const ProjectsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 bg-[#111111] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[2px] bg-secondary" />
              <span className="text-secondary font-black text-[11px] tracking-[0.4em] uppercase">Portfolio Excellence</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white font-serif leading-none"
            >
              Featured <br/>
              <span className="text-primary italic">Architectures.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-end gap-6"
          >
            <p className="text-white/40 text-lg font-light text-right max-w-xs italic">
              "Every structure tells a story of discipline and craftsmanship."
            </p>
            <button className="group relative overflow-hidden bg-white text-dark px-10 py-5 rounded-full font-black text-[11px] tracking-widest uppercase transition-all duration-500 hover:text-white">
              <span className="relative z-10">View Full Archive</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>

        {/* Cinematic Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative aspect-[4/6] overflow-hidden rounded-3xl">
                {/* Parallax Image Effect */}
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-secondary font-black text-[10px] tracking-[0.3em] uppercase bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                        {p.tag}
                      </span>
                      <span className="text-white/40 text-[10px] font-black tracking-widest uppercase">
                        {p.year}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-black text-white font-serif mb-2 group-hover:text-secondary transition-colors duration-300 leading-none">
                      {p.title}
                    </h3>
                    
                    <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-6">
                      {p.location} • {p.size}
                    </p>

                    <div className="w-12 h-[2px] bg-white group-hover:w-full transition-all duration-700 origin-left" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection
