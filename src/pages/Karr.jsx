import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValue, animate } from 'framer-motion'
import { 
  FiHome, FiCheckCircle, FiShield, FiActivity,
  FiBarChart2, FiLayers, FiTool, FiBriefcase, FiDollarSign,
  FiHardDrive, FiTarget, FiZap, FiBox, FiArrowRight, FiUser
} from 'react-icons/fi'
import Navbar from '../components/Navbar'
import UnifiedFooter from '../components/UnifiedFooter'

// Assets
import heroBg from '../../assets/pic5.png'
import pmcBg from '../../assets/pic3.png'
import renovationBg from '../../assets/img6.jpg'
import materialImg from '../../assets/img1.jpg'

const Karr = () => {
  const [sqft, setSqft] = useState(2500)
  const [quality, setQuality] = useState(1.2) // 1: Standard, 1.2: Premium, 1.5: Luxury
  
  const basePricePerSqft = 2200
  const currentPricePerSqft = basePricePerSqft * quality
  const estimate = sqft * currentPricePerSqft

  // Animated Number for Estimate
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(count, estimate / 100000, { duration: 1 })
    return controls.stop
  }, [estimate])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest))
    return () => unsubscribe()
  }, [rounded])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const stats = [
    { label: "Homes Constructed", value: "50+", icon: <FiHome /> },
    { label: "Active Projects", value: "14", icon: <FiActivity /> },
    { label: "Years Experience", value: "12+", icon: <FiCheckCircle /> },
    { label: "Client Satisfaction", value: "98%", icon: <FiShield /> }
  ]

  const services = [
    {
      title: "Residential Construction",
      icon: <FiHome />,
      description: "Complete residential construction including independent homes, villas, and custom-built houses. The company manages construction from foundation to finishing."
    },
    {
      title: "Project Management Consultancy (PMC)",
      icon: <FiBriefcase />,
      description: "Professional management of construction projects including planning, scheduling, cost control, contractor coordination, and site supervision."
    },
    {
      title: "Renovation & Remodeling",
      icon: <FiTool />,
      description: "Upgrade and improve existing homes with renovation, structural repairs, modern interior upgrades, and home extensions."
    },
    {
      title: "Construction Cost Estimation",
      icon: <FiBarChart2 />,
      description: "Accurate cost estimation, budget planning, material planning, and construction timeline preparation to avoid delays."
    }
  ]

  const projects = [
    { name: "The Zenith Villa", location: "Coimbatore", type: "Luxury Villa", area: "4500 Sq.ft", img: pmcBg },
    { name: "Heritage Duplex", location: "Chennai", type: "Modern Duplex", area: "3200 Sq.ft", img: renovationBg },
    { name: "Urban Retreat", location: "Madurai", type: "Independent Home", area: "2800 Sq.ft", img: materialImg }
  ]

  const materials = [
    { title: "High Grade Steel", desc: "TMT bars for earthquake resistance.", icon: <FiHardDrive /> },
    { title: "Premium Cement", desc: "Grade 53 cement for maximum strength.", icon: <FiLayers /> },
    { title: "Quality Brick Work", desc: "Precision-fired wire-cut bricks.", icon: <FiBox /> },
    { title: "Advanced Waterproofing", desc: "Multi-layer nano-coat protection.", icon: <FiZap /> }
  ]

  const testimonials = [
    { name: "Anand Krishnan", type: "Villa Owner", review: "Karrcholai transformed our vision into reality. Their transparency in project management is unmatched in the industry." },
    { name: "Deepika Raj", type: "Duplex Home", review: "The quality of construction and attention to detail during the finishing phase was truly impressive. Highly recommended!" }
  ]

  const processSteps = [
    { step: "01", title: "Planning", icon: <FiTarget /> },
    { step: "02", title: "Design", icon: <FiLayers /> },
    { step: "03", title: "Estimation", icon: <FiDollarSign /> },
    { step: "04", title: "Construction", icon: <FiHardDrive /> },
    { step: "05", title: "Quality", icon: <FiCheckCircle /> },
    { step: "06", title: "Handover", icon: <FiZap /> }
  ]

  const whyChoosePoints = [
    { title: "Experienced Professionals", icon: <FiCheckCircle /> },
    { title: "Transparent Management", icon: <FiShield /> },
    { title: "High-Quality Materials", icon: <FiBox /> },
    { title: "Regular Monitoring", icon: <FiActivity /> },
    { title: "Safe Practices", icon: <FiHardDrive /> }
  ]

  return (
    <div className="bg-[#fdfbf7] min-h-screen text-dark selection:bg-secondary selection:text-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-secondary z-[110] origin-left" style={{ scaleX }} />
      
      <Navbar />

      <main className="pt-0">
        
        {/* ── 1. HERO SECTION ── */}
        <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden pt-32 pb-20">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-20 max-w-4xl"
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-secondary"></span>
                <span className="text-secondary font-bold tracking-[0.6em] text-[10px] md:text-xs uppercase">Construction Division: KARR</span>
                <span className="w-12 h-[1px] bg-secondary"></span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold font-serif text-white leading-[1.1] tracking-tight mb-8 uppercase">
                Strong Foundations <br /> <span className="text-secondary italic">For Your Dream Home.</span>
              </h1>
              <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
                Professional construction and project management services for modern residential projects. We build structures that last for generations.
              </p>
              <div className="flex flex-wrap gap-8 items-center justify-center">
                <button className="bg-secondary text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-xl">Get Consultation</button>
                <div className="flex items-center gap-4 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                  <FiTarget className="text-secondary animate-ping" /> 14 Active Projects
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. STATISTICS SECTION ── */}
        <section className="py-20 bg-[#fdfbf7] border-y border-dark/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-secondary text-3xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-dark/40 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. CONSTRUCTION SERVICES SECTION ── */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl text-center md:text-left">
                <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Our Expertise</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">Construction <span className="text-secondary italic">Excellence.</span></h2>
              </div>
              <p className="text-dark/40 text-sm font-light max-w-xs text-center md:text-right">From foundation to finishing, we provide comprehensive solutions tailored to your vision.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div 
                   key={index}
                   whileHover={{ y: -10 }}
                   className="bg-[#fdfbf7] p-8 rounded-[2rem] border border-dark/5 hover:shadow-2xl hover:border-secondary/20 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 bg-[#2D4B37] text-white flex items-center justify-center rounded-2xl mb-8 group-hover:bg-secondary group-hover:rotate-12 transition-all duration-500">{service.icon}</div>
                  <h4 className="text-lg font-bold font-serif mb-4 leading-tight group-hover:text-secondary transition-colors">{service.title}</h4>
                  <p className="text-dark/40 text-xs leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. FEATURED PROJECTS SHOWCASE ── */}
        <section className="py-32 px-6 md:px-12 bg-dark text-white">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Featured <span className="text-secondary italic">Residential Projects.</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {projects.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                  <img src={project.img} alt={project.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-10 left-10 right-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4">{project.location}</div>
                    <h4 className="text-2xl font-serif font-bold mb-4">{project.name}</h4>
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/50 border-t border-white/10 pt-4">
                      <span>{project.type}</span>
                      <span>{project.area}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CONSTRUCTION PROCESS SECTION ── */}
        <section className="py-32 px-6 md:px-12 bg-[#fdfbf7] overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Workflow</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark">The Roadmap to <span className="text-secondary italic">Your Home.</span></h2>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-dark/5 hidden lg:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center text-center relative z-10"
                  >
                    <div className="w-14 h-14 bg-white border border-dark/5 shadow-xl rounded-full flex items-center justify-center mb-6 hover:border-secondary transition-all group cursor-default">
                      <div className="text-lg text-dark group-hover:text-secondary transition-colors">{step.icon}</div>
                      <span className="absolute -top-2 -right-2 text-[8px] font-black text-white bg-secondary w-7 h-7 rounded-full flex items-center justify-center shadow-lg">{step.step}</span>
                    </div>
                    <h5 className="text-sm font-bold uppercase tracking-widest text-dark">{step.title}</h5>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. MATERIALS & QUALITY SECTION ── */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Uncompromising Quality</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 leading-tight">Materials That <br /> <span className="text-secondary italic">Define Longevity.</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {materials.map((item, i) => (
                    <motion.div key={i} className="flex gap-6 items-start">
                      <div className="text-secondary text-2xl mt-1">{item.icon}</div>
                      <div>
                        <h5 className="text-base font-bold mb-2">{item.title}</h5>
                        <p className="text-dark/40 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
                <img src={materialImg} alt="Quality Materials" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. COST CALCULATOR ── */}
        <section className="py-32 px-6 md:px-12 bg-dark text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Transparency Portal</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Plan Your Investment.</h2>
            </div>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[3rem] p-8 lg:p-20 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Build Area (Sq.Ft)</label>
                    <span className="text-secondary font-bold text-lg">{sqft} <span className="text-[10px] text-white/30 ml-2">SF</span></span>
                  </div>
                  <input 
                    type="range" min="1000" max="15000" step="100" 
                    value={sqft} onChange={(e) => setSqft(parseInt(e.target.value))}
                    className="w-full accent-secondary h-1.5 bg-white/10 appearance-none cursor-pointer rounded-full"
                  />
                  <div className="flex justify-between mt-4 text-[8px] uppercase tracking-widest text-white/20">
                    <span>1k SF</span>
                    <span>15k SF</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 block text-center">Construction Specification</label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { l: 'Standard', v: 1, d: 'Functional' },
                      { l: 'Premium', v: 1.2, d: 'Designer' },
                      { l: 'Elite', v: 1.5, d: 'Luxury' }
                    ].map((btn) => (
                      <button 
                        key={btn.l}
                        onClick={() => setQuality(btn.v)}
                        className={`flex flex-col items-center py-5 rounded-2xl transition-all border ${quality === btn.v ? 'bg-secondary border-secondary text-white shadow-lg' : 'bg-transparent border-white/10 hover:border-secondary/30'}`}
                      >
                        <span className="text-[9px] font-bold uppercase tracking-widest mb-1">{btn.l}</span>
                        <span className={`text-[8px] uppercase tracking-tighter ${quality === btn.v ? 'text-white/60' : 'text-white/30'}`}>{btn.d}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-12 lg:p-16 rounded-[2.5rem] text-dark relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-dark/30 mb-8 flex justify-between">
                  <span>Structural Value</span>
                  <span>₹{currentPricePerSqft}/SF</span>
                </h4>
                <div className="text-4xl md:text-7xl font-bold font-serif mb-4 tabular-nums text-dark">
                  ₹{displayValue}<span className="text-secondary text-2xl ml-2">L</span>
                </div>
                <p className="text-[9px] text-dark/30 uppercase tracking-[0.2em] mb-10 leading-relaxed">*Estimated based on current market rates. Final BOQ after site visit.</p>
                <button className="w-full bg-dark text-white py-5 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-secondary transition-all shadow-xl">REQUEST DETAILED QUOTE</button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. CLIENT TESTIMONIALS ── */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Client Experiences</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark italic leading-tight">"Reliability Built <br /> in Every Brick."</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <motion.div key={i} className="bg-[#fdfbf7] p-10 rounded-[2.5rem] border border-dark/5 relative">
                  <div className="absolute top-10 right-10 text-secondary opacity-20 text-6xl font-serif">"</div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center text-xl"><FiUser /></div>
                    <div>
                      <div className="text-sm font-bold">{t.name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-dark/40">{t.type}</div>
                    </div>
                  </div>
                  <p className="text-dark/60 text-sm leading-relaxed italic">{t.review}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CALL TO ACTION SECTION ── */}
        <section className="relative py-32 px-6 bg-[#2D4B37] text-white overflow-hidden flex items-center justify-center text-center">
           <div className="absolute inset-0 stone-texture opacity-20"></div>
           <div className="relative z-10 max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Ready to Break Ground?</span>
                <h2 className="text-4xl md:text-6xl font-bold font-serif leading-[1.1] tracking-tight mb-12 uppercase">Start Building Your <br /> <span className="text-secondary italic">Dream Home Today.</span></h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <button className="bg-secondary text-white px-14 py-6 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition-all shadow-xl">Get Construction Consultation</button>
                  <button className="border border-white/20 text-white px-14 py-6 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition-all">View Our Projects</button>
                </div>
              </motion.div>
           </div>
        </section>

      </main>
      <UnifiedFooter />

      <style dangerouslySetInnerHTML={{ __html: `
        .stone-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3C/svg%3");
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: #B85C38;
          cursor: pointer;
          border-radius: 50%;
          border: 4px solid #fff;
          box-shadow: 0 5px 15px rgba(184, 92, 56, 0.3);
        }
        input[type='range']::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
        }
      `}} />
    </div>
  )
}

export default Karr
