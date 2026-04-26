import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMapPin, FiCalendar, FiMaximize, FiArrowRight, FiCheckCircle, FiClock, FiZap } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import prj1 from '../../assets/pic2.png'
import prj2 from '../../assets/pic3.png'
import prj3 from '../../assets/pic7.png'
import prj4 from '../../assets/pic4.png'
import prj5 from '../../assets/pic5.png'
import prj6 from '../../assets/pic9.jpg'

// ── Data ──────────────────────────────────────────────────────────────────────
const PROJECTS = {
  completed: [
    { id: 1, title: 'Modern Villa', location: 'Chennai, TN', type: 'Residential', image: prj1, year: '2023', size: '4,500 Sq.Ft', desc: 'A sleek contemporary villa blending open-plan living with lush landscaping and smart home systems.' },
    { id: 2, title: 'Heritage Duplex', location: 'Coimbatore, TN', type: 'Construction', image: prj2, year: '2022', size: '3,200 Sq.Ft', desc: 'Timeless duplex design honoring traditional Tamil architecture with modern comforts.' },
    { id: 3, title: 'Luxury Bungalow', location: 'Trichy, TN', type: 'Residential', image: prj4, year: '2023', size: '6,200 Sq.Ft', desc: 'Premium bungalow with infinity pool, home theatre, and full smart home automation.' },
    { id: 4, title: 'Urban Townhouse', location: 'Chennai, TN', type: 'Construction', image: prj6, year: '2022', size: '3,900 Sq.Ft', desc: 'Compact urban townhouse maximizing vertical space with a stunning rooftop terrace.' },
  ],
  ongoing: [
    { id: 5, title: 'Eco-Living Hub', location: 'Madurai, TN', type: 'Sustainable', image: prj3, year: '2024', size: '5,100 Sq.Ft', progress: 68, desc: 'Net-zero energy home with solar integration and rainwater harvesting systems.' },
    { id: 6, title: 'Garden Retreat', location: 'Salem, TN', type: 'Sustainable', image: prj5, year: '2024', size: '2,800 Sq.Ft', progress: 42, desc: 'Biophilic design retreat surrounded by curated gardens and natural stone finishes.' },
  ],
  upcoming: [
    { id: 7, title: 'Hilltop Residence', location: 'Ooty, TN', type: 'Residential', image: prj1, year: '2025', size: '7,000 Sq.Ft', desc: 'A panoramic hilltop home designed to frame breathtaking valley views year-round.' },
    { id: 8, title: 'Riverside Villas', location: 'Thanjavur, TN', type: 'Construction', image: prj2, year: '2025', size: '12,000 Sq.Ft', desc: 'A gated riverside villa community with shared amenities and sustainable infrastructure.' },
  ],
}

const TABS = [
  { key: 'completed', label: 'Completed', icon: FiCheckCircle, color: '#41634A', count: PROJECTS.completed.length },
  { key: 'ongoing',   label: 'Ongoing',   icon: FiClock,       color: '#B85C38', count: PROJECTS.ongoing.length },
  { key: 'upcoming',  label: 'Upcoming',  icon: FiZap,         color: '#2D4B37', count: PROJECTS.upcoming.length },
]

// ── Card ──────────────────────────────────────────────────────────────────────
function ProjectCard({ project, category, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative cursor-pointer"
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

        {/* Hover color wash */}
        <motion.div
          className="absolute inset-0"
          style={{ background: category === 'completed' ? 'rgba(65,99,74,0.25)' : category === 'ongoing' ? 'rgba(184,92,56,0.25)' : 'rgba(45,75,55,0.25)' }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Top badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span className="text-[10px] font-black tracking-[0.25em] uppercase px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/80">
            {project.type}
          </span>

          {category === 'ongoing' && (
            <span className="flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full bg-[#B85C38]/20 border border-[#B85C38]/40 text-[#B85C38]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B85C38] animate-pulse" />
              Live
            </span>
          )}
          {category === 'upcoming' && (
            <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40">
              Coming Soon
            </span>
          )}
          {category === 'completed' && (
            <span className="flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full bg-[#41634A]/30 border border-[#41634A]/50 text-green-400">
              <FiCheckCircle size={10} />
              Done
            </span>
          )}
        </div>

        {/* Progress bar for ongoing */}
        {category === 'ongoing' && (
          <div className="absolute top-14 left-4 right-4">
            <div className="flex justify-between text-[9px] font-black tracking-widest uppercase text-white/40 mb-1.5">
              <span>Progress</span>
              <span className="text-[#B85C38]">{project.progress}%</span>
            </div>
            <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#B85C38] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        )}

        {/* Bottom content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            animate={{ y: hovered ? 0 : 6 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-black font-serif text-white leading-tight mb-2 group-hover:text-secondary transition-colors duration-300">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-3 mb-3">
              <span className="flex items-center gap-1 text-white/40 text-[11px] font-bold">
                <FiMapPin size={10} /> {project.location}
              </span>
              <span className="flex items-center gap-1 text-white/40 text-[11px] font-bold">
                <FiCalendar size={10} /> {project.year}
              </span>
              <span className="flex items-center gap-1 text-white/40 text-[11px] font-bold">
                <FiMaximize size={10} /> {project.size}
              </span>
            </div>

            {/* Description slides in */}
            <motion.p
              animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0 }}
              transition={{ duration: 0.35 }}
              className="text-white/55 text-sm font-light leading-relaxed overflow-hidden mb-4"
            >
              {project.desc}
            </motion.p>

            {/* Animated underline */}
            <motion.div
              className="h-[2px] rounded-full origin-left"
              style={{ background: category === 'completed' ? '#41634A' : category === 'ongoing' ? '#B85C38' : '#2D4B37' }}
              animate={{ scaleX: hovered ? 1 : 0.15 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Projects() {
  const [activeTab, setActiveTab] = useState('completed')
  const heroRef  = useRef(null)
  const bodyRef  = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const bodyInView = useInView(bodyRef, { once: true, margin: '-60px' })

  const currentTab = TABS.find(t => t.key === activeTab)

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-36 pb-20 overflow-hidden">
        {/* BG layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] to-[#0d0d0d]" />
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '72px 72px' }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #B85C38, transparent)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-10 h-[2px] bg-secondary" />
              <span className="text-secondary font-black text-[11px] tracking-[0.45em] uppercase">Our Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-[90px] font-black font-serif leading-[0.9] mb-8"
            >
              Our <span className="text-primary italic">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/45 text-lg font-light leading-relaxed max-w-2xl"
            >
              Our projects demonstrate our commitment to quality construction, professional project management,
              and responsible development — every structure a testament to engineering excellence.
            </motion.p>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 border border-white/5 rounded-2xl overflow-hidden"
          >
            {[
              { num: '120+', label: 'Projects Delivered' },
              { num: '12+',  label: 'Years of Excellence' },
              { num: '98%',  label: 'Client Satisfaction' },
              { num: '3',    label: 'States Covered' },
            ].map((s, i) => (
              <div key={i} className="bg-white/[0.03] px-8 py-7 text-center hover:bg-white/[0.06] transition-colors duration-300">
                <div className="text-3xl font-black text-secondary mb-1">{s.num}</div>
                <div className="text-white/30 text-[11px] tracking-widest uppercase font-bold">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COMMITMENT STRIP ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="border-y border-white/5 bg-[#111] py-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FiCheckCircle, color: '#41634A', title: 'Engineering Excellence', desc: 'Every project is built to the highest structural and material standards.' },
              { icon: FiClock,       color: '#B85C38', title: 'On-Time Delivery',       desc: 'We respect your timeline — disciplined project management from day one.' },
              { icon: FiZap,        color: '#2D4B37', title: 'Client Satisfaction',    desc: 'Transparent communication and quality that speaks for itself.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}>
                  <item.icon size={16} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                  <div className="text-white/35 text-sm font-light leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── TABS + GRID ──────────────────────────────────────────────────── */}
      <div ref={bodyRef} className="max-w-7xl mx-auto px-6 md:px-12 py-20">

        {/* Tab switcher */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key
            return (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-3 px-7 py-4 rounded-xl font-black text-[11px] tracking-[0.25em] uppercase transition-all duration-400 border overflow-hidden ${
                  isActive ? 'text-white border-transparent' : 'text-white/40 border-white/8 hover:text-white/70 hover:border-white/15'
                }`}
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="tabBg"
                    className="absolute inset-0 -z-10"
                    style={{ background: tab.color }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <tab.icon size={14} />
                {tab.label}
                <span className={`ml-auto text-[10px] px-2 py-0.5 rounded-full font-black ${
                  isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-white/30'
                }`}>
                  {tab.count}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Section heading */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + '-heading'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] rounded-full" style={{ background: currentTab.color }} />
              <span className="text-[11px] font-black tracking-[0.4em] uppercase" style={{ color: currentTab.color }}>
                {activeTab === 'completed' ? 'Portfolio Archive' : activeTab === 'ongoing' ? 'Currently Building' : 'Coming Next'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black font-serif text-white">
              {activeTab === 'completed' && 'Delivered with Excellence'}
              {activeTab === 'ongoing'   && 'Work in Progress'}
              {activeTab === 'upcoming'  && 'On the Horizon'}
            </h2>
            <p className="text-white/35 text-sm mt-2 font-light max-w-xl">
              {activeTab === 'completed' && 'Every completed project reflects our dedication to durability, craftsmanship, and client satisfaction.'}
              {activeTab === 'ongoing'   && 'These projects are actively under construction — built with precision and monitored daily.'}
              {activeTab === 'upcoming'  && 'Exciting new projects in the pipeline, designed and ready to break ground soon.'}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`grid gap-6 ${
              PROJECTS[activeTab].length === 2
                ? 'grid-cols-1 md:grid-cols-2 max-w-3xl'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }`}
          >
            {PROJECTS[activeTab].map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                category={activeTab}
                index={i}
                inView={bodyInView}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden" style={{ background: '#41634A' }}>
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(219,127,80,0.18) 0%, transparent 60%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-secondary" />
            <span className="text-secondary font-black text-[11px] tracking-[0.35em] uppercase">Let's Build Together</span>
            <div className="h-px w-10 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white font-serif leading-tight mb-6"
          >
            Have a Project in Mind?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-base mb-10 font-light leading-relaxed"
          >
            Let's turn your vision into a landmark. Get a free consultation and walk through every step of your construction journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-sm tracking-[0.15em] uppercase flex items-center gap-2"
              >
                Start Your Project <FiArrowRight />
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline text-sm tracking-[0.15em] uppercase"
              >
                View Our Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
