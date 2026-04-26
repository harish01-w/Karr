import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMapPin, FiArrowRight, FiArrowUpRight, FiCheckCircle, FiClock, FiZap } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import prj1 from '../../assets/pic2.png'
import prj2 from '../../assets/pic3.png'
import prj3 from '../../assets/pic7.png'
import prj4 from '../../assets/pic4.png'
import prj5 from '../../assets/pic5.png'
import prj6 from '../../assets/pic9.jpg'

// ─── Brand palette from theme image ───────────────────────────────────────────
const FOREST  = '#3F5F4A'
const TERRA   = '#C9754A'
const STONE   = '#E8E5DF'
const CREAM   = '#F5F2EC'
const DARK    = '#1C1C1A'

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS = {
  completed: [
    { id:1, title:'Modern Villa',     sub:'Stone Grove Residence',  location:'Chennai, TN',    type:'Residential',  image:prj1, year:'2023', size:'4,500 Sq.Ft', beds:4, desc:'A sleek contemporary villa blending open-plan living with lush landscaping and smart home systems.' },
    { id:2, title:'Heritage Duplex',  sub:'Timeless Twin Home',     location:'Coimbatore, TN', type:'Construction', image:prj2, year:'2022', size:'3,200 Sq.Ft', beds:3, desc:'Timeless duplex design honoring traditional Tamil architecture with modern comforts.' },
    { id:3, title:'Luxury Bungalow',  sub:'Signature Estate',       location:'Trichy, TN',     type:'Residential',  image:prj4, year:'2023', size:'6,200 Sq.Ft', beds:5, desc:'Premium bungalow with infinity pool, home theatre, and full smart home automation.' },
    { id:4, title:'Urban Townhouse',  sub:'Vertical Living',        location:'Chennai, TN',    type:'Construction', image:prj6, year:'2022', size:'3,900 Sq.Ft', beds:3, desc:'Compact urban townhouse maximizing vertical space with a stunning rooftop terrace.' },
  ],
  ongoing: [
    { id:5, title:'Eco-Living Hub',   sub:'Net-Zero Home',          location:'Madurai, TN',    type:'Sustainable',  image:prj3, year:'2024', size:'5,100 Sq.Ft', beds:4, progress:68, desc:'Net-zero energy home with solar integration and rainwater harvesting systems.' },
    { id:6, title:'Garden Retreat',   sub:'Biophilic Sanctuary',    location:'Salem, TN',      type:'Sustainable',  image:prj5, year:'2024', size:'2,800 Sq.Ft', beds:3, progress:42, desc:'Biophilic design retreat surrounded by curated gardens and natural stone finishes.' },
  ],
  upcoming: [
    { id:7, title:'Hilltop Residence',sub:'Valley View Estate',     location:'Ooty, TN',       type:'Residential',  image:prj1, year:'2025', size:'7,000 Sq.Ft', beds:5, desc:'A panoramic hilltop home designed to frame breathtaking valley views year-round.' },
    { id:8, title:'Riverside Villas', sub:'Gated Community',        location:'Thanjavur, TN',  type:'Construction', image:prj2, year:'2025', size:'12,000 Sq.Ft',beds:6, desc:'A gated riverside villa community with shared amenities and sustainable infrastructure.' },
  ],
}

const CATEGORIES = [
  { key:'completed', label:'Completed', icon:FiCheckCircle, accent:FOREST,  tagline:'Delivered with Excellence' },
  { key:'ongoing',   label:'Ongoing',   icon:FiClock,       accent:TERRA,   tagline:'Currently Under Construction' },
  { key:'upcoming',  label:'Upcoming',  icon:FiZap,         accent:'#8B7355',tagline:'On the Horizon' },
]

// ─── Cursor follower ──────────────────────────────────────────────────────────
function CursorDot() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const move = e => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true) }
    const leave = () => setVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseleave', leave) }
  }, [])
  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[999] mix-blend-multiply"
      style={{ background: TERRA, x: pos.x - 16, y: pos.y - 16 }}
      animate={{ scale: visible ? 1 : 0, opacity: visible ? 0.6 : 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  )
}

// ─── Hero parallax word ───────────────────────────────────────────────────────
function ParallaxWord({ children, delay = 0 }) {
  return (
    <motion.span
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block"
      style={{ paddingBottom: '0.15em', marginBottom: '-0.15em' }}
    >
      {children}
    </motion.span>
  )
}

// ─── Cinematic project card ───────────────────────────────────────────────────
function ProjectCard({ project, category, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)
  const cat = CATEGORIES.find(c => c.key === category)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 70, clipPath: 'inset(100% 0% 0% 0%)' }}
      animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-none" style={{ aspectRatio: '3/4' }}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Warm cream vignette */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to top, ${DARK}EE 0%, ${DARK}55 45%, transparent 75%)`
        }} />

        {/* Hover tint */}
        <motion.div className="absolute inset-0"
          style={{ background: `${cat.accent}33` }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Top row */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1.5 rounded-sm"
            style={{ background: `${STONE}22`, backdropFilter: 'blur(8px)', border: `1px solid ${STONE}33`, color: STONE }}>
            {project.type}
          </span>
          {category === 'ongoing' && (
            <span className="flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-sm"
              style={{ background: `${TERRA}25`, border: `1px solid ${TERRA}50`, color: TERRA }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: TERRA }} />
              Live
            </span>
          )}
          {category === 'upcoming' && (
            <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-sm"
              style={{ background: 'rgba(232,229,223,0.08)', border: '1px solid rgba(232,229,223,0.15)', color: `${STONE}88` }}>
              2025
            </span>
          )}
          {category === 'completed' && (
            <span className="flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-sm"
              style={{ background: `${FOREST}30`, border: `1px solid ${FOREST}60`, color: '#7EC8A0' }}>
              <FiCheckCircle size={9} /> Done
            </span>
          )}
        </div>

        {/* Progress bar */}
        {category === 'ongoing' && (
          <div className="absolute left-5 right-5" style={{ top: '52px' }}>
            <div className="h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <motion.div className="h-full rounded-full" style={{ background: TERRA }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${project.progress}%` } : {}}
                transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
              />
            </div>
            <div className="flex justify-end mt-1">
              <span className="text-[9px] font-black tracking-widest" style={{ color: TERRA }}>{project.progress}%</span>
            </div>
          </div>
        )}

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div animate={{ y: hovered ? 0 : 8 }} transition={{ duration: 0.45 }}>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: `${STONE}60` }}>
              {project.sub}
            </p>
            <h3 className="text-2xl font-black font-serif leading-tight mb-2 transition-colors duration-300"
              style={{ color: hovered ? TERRA : STONE }}>
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <FiMapPin size={10} style={{ color: `${STONE}50` }} />
              <span className="text-[11px] font-bold" style={{ color: `${STONE}50` }}>{project.location}</span>
              <span style={{ color: `${STONE}25` }}>·</span>
              <span className="text-[11px] font-bold" style={{ color: `${STONE}50` }}>{project.size}</span>
            </div>

            {/* Desc reveal */}
            <motion.p
              animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-light leading-relaxed overflow-hidden mb-4"
              style={{ color: `${STONE}70` }}
            >
              {project.desc}
            </motion.p>

            {/* View arrow */}
            <motion.div className="flex items-center gap-2"
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
              transition={{ duration: 0.35 }}>
              <span className="text-[11px] font-black tracking-[0.25em] uppercase" style={{ color: TERRA }}>View Project</span>
              <FiArrowUpRight size={13} style={{ color: TERRA }} />
            </motion.div>

            {/* Accent line */}
            <motion.div className="mt-4 h-[1px] origin-left"
              style={{ background: `linear-gradient(90deg, ${cat.accent}, transparent)` }}
              animate={{ scaleX: hovered ? 1 : 0.12 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Category Section ─────────────────────────────────────────────────────────
function CategorySection({ category }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const cat = CATEGORIES.find(c => c.key === category)
  const projects = PROJECTS[category]

  return (
    <section ref={ref} className="py-24 relative">
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between gap-6 flex-wrap"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-sm flex items-center justify-center"
                style={{ background: `${cat.accent}20`, border: `1px solid ${cat.accent}40` }}>
                <cat.icon size={12} style={{ color: cat.accent }} />
              </div>
              <span className="text-[11px] font-black tracking-[0.4em] uppercase" style={{ color: cat.accent }}>
                {cat.label} Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-serif leading-tight" style={{ color: DARK }}>
              {cat.tagline}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-light" style={{ color: `${DARK}60` }}>
              {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
            </span>
            <div className="w-px h-4" style={{ background: `${DARK}20` }} />
            <div className="w-8 h-[1px]" style={{ background: cat.accent }} />
          </div>
        </motion.div>

        {/* Thin rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 h-px origin-left"
          style={{ background: `linear-gradient(90deg, ${cat.accent}60, transparent)` }}
        />
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className={`grid gap-6 ${
          projects.length === 2
            ? 'grid-cols-1 md:grid-cols-2 max-w-3xl'
            : projects.length === 3
            ? 'grid-cols-1 md:grid-cols-3'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        }`}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Projects() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY    = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const springY  = useSpring(heroY, { stiffness: 80, damping: 20 })

  const totalProjects = Object.values(PROJECTS).flat().length

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: CREAM, color: DARK }}>
      <CursorDot />
      <Navbar />

      {/* ── CINEMATIC HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Parallax background image */}
        <motion.div className="absolute inset-0 scale-110" style={{ y: springY }}>
          <img src={prj4} alt="" className="w-full h-full object-cover" />
          {/* Light left-side scrim — keeps image visible on right, text readable on left */}
          <div className="absolute inset-0" style={{
            background: `linear-gradient(105deg, ${DARK}D0 0%, ${DARK}90 35%, ${DARK}55 60%, ${DARK}22 100%)`
          }} />
          {/* Subtle bottom fade */}
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to top, ${DARK}88 0%, transparent 40%)`
          }} />
        </motion.div>

        {/* Floating accent shapes */}
        <motion.div className="absolute right-16 top-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: TERRA }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div className="absolute left-1/3 bottom-1/4 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: FOREST }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Hero text */}
        <motion.div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full" style={{ opacity: heroOpacity }}>
          <div className="overflow-hidden mb-4">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="w-10 h-[1px]" style={{ background: TERRA }} />
              <span className="text-[11px] font-black tracking-[0.5em] uppercase"
                style={{ color: TERRA, textShadow: `0 0 20px ${TERRA}AA, 0 1px 6px rgba(0,0,0,0.9)` }}>
                Karrcholai · Stone Grove
              </span>
            </motion.div>
          </div>

          {/* pb so descenders (j, g, p) never clip */}
          <div style={{ paddingBottom: '0.25em' }}>
            <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-black font-serif leading-[0.95]">
              <ParallaxWord delay={0.1}>
                <span style={{
                  color: '#FFFFFF',
                  textShadow: '0 0 40px rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.9)'
                }}>Our</span>
              </ParallaxWord>{' '}
              <ParallaxWord delay={0.22}>
                <span style={{
                  color: TERRA,
                  fontStyle: 'italic',
                  textShadow: `0 0 25px ${TERRA}DD, 0 0 55px ${TERRA}88, 0 0 90px ${TERRA}44, 0 2px 8px rgba(0,0,0,0.95)`
                }}>Projects</span>
              </ParallaxWord>
            </h1>
          </div>

          <div className="mt-8 max-w-xl">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-lg font-light leading-relaxed"
              style={{
                color: '#F0EDE8',
                textShadow: '0 1px 16px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.8)'
              }}
            >
              Every structure tells a story of discipline, craftsmanship, and nature in harmony.
              From stone foundations to grove-inspired living.
            </motion.p>
          </div>

          {/* Stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-10 mt-14"
          >
            {[
              { n: `${totalProjects}+`, l: 'Projects' },
              { n: '12+', l: 'Years' },
              { n: '98%', l: 'Satisfaction' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-black" style={{
                  color: TERRA,
                  textShadow: `0 0 20px ${TERRA}BB, 0 0 40px ${TERRA}55, 0 2px 6px rgba(0,0,0,0.9)`
                }}>{s.n}</div>
                <div className="text-[11px] font-bold tracking-[0.3em] uppercase mt-1" style={{
                  color: '#FFFFFF',
                  textShadow: '0 1px 8px rgba(0,0,0,1)'
                }}>{s.l}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-6 md:left-16 flex items-center gap-3"
          >
            <motion.div
              className="w-[1px] h-12"
              style={{ background: `linear-gradient(to bottom, transparent, ${TERRA})` }}
              animate={{ scaleY: [0, 1, 0], originY: 0 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: `${STONE}40` }}>Scroll</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── INTRO BAND ──────────────────────────────────────────────────── */}
      <div style={{ background: DARK }} className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-px">
          {[
            { icon: FiCheckCircle, color: FOREST, t: 'Engineering Excellence',  d: 'Built to the highest structural and material standards.' },
            { icon: FiClock,       color: TERRA,  t: 'On-Time Delivery',        d: 'Disciplined project management from blueprint to possession.' },
            { icon: FiZap,        color: '#8B7355',t:'Client Satisfaction',     d: 'Transparent communication and quality that speaks for itself.' },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex items-start gap-4 px-8 py-8"
              style={{ borderLeft: i > 0 ? `1px solid rgba(255,255,255,0.06)` : 'none' }}
            >
              <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                <item.icon size={14} style={{ color: item.color }} />
              </div>
              <div>
                <div className="font-bold text-sm mb-1" style={{ color: STONE }}>{item.t}</div>
                <div className="text-sm font-light leading-relaxed" style={{ color: `${STONE}45` }}>{item.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── THREE CATEGORY SECTIONS ─────────────────────────────────────── */}
      <div style={{ background: CREAM }}>
        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-6">
          <div className="h-px" style={{ background: `${DARK}10` }} />
        </div>

        <CategorySection category="completed" />

        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="h-px" style={{ background: `${DARK}10` }} />
        </div>

        <CategorySection category="ongoing" />

        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="h-px" style={{ background: `${DARK}10` }} />
        </div>

        <CategorySection category="upcoming" />
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden" style={{ background: FOREST }}>
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}
        />
        <div className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at 65% 50%, ${TERRA}25 0%, transparent 65%)` }}
        />
        {/* Big ghost text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[20vw] font-black font-serif opacity-[0.04] select-none whitespace-nowrap" style={{ color: STONE }}>
            BUILD
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10" style={{ background: TERRA }} />
            <span className="text-[11px] font-black tracking-[0.4em] uppercase" style={{ color: TERRA }}>
              Let's Build Together
            </span>
            <div className="h-px w-10" style={{ background: TERRA }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black font-serif leading-tight mb-6"
            style={{ color: STONE }}
          >
            Have a Project<br />
            <span style={{ color: TERRA, fontStyle: 'italic' }}>in Mind?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base font-light leading-relaxed mb-12"
            style={{ color: `${STONE}65` }}
          >
            Let's turn your vision into a landmark. Get a free consultation and walk through every step of your construction journey — from planning to possession.
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
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-sm tracking-[0.15em] uppercase flex items-center gap-2"
              >
                Start Your Project <FiArrowRight />
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
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
