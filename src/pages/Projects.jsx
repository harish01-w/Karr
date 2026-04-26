import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMapPin, FiArrowRight, FiArrowUpRight, FiCheckCircle, FiClock, FiZap } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import img1  from '../../assets/img1.jpg'
import img2  from '../../assets/img2.jpg'
import img3  from '../../assets/img3.jpg'
import img4  from '../../assets/img4.jpg'
import img5  from '../../assets/img5.jpg'
import img6  from '../../assets/img6.jpg'
import img7  from '../../assets/img7.jpg'
import img8  from '../../assets/img8.jpg'
import img9  from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import img11 from '../../assets/img11.jpg'
import img12 from '../../assets/img12.jpg'
import img13 from '../../assets/img13.jpg'
import img14 from '../../assets/img14.jpg'
import img15 from '../../assets/img15.jpg'
import img16 from '../../assets/img16.jpg'
import img17 from '../../assets/img17.jpg'
import img18 from '../../assets/img18.jpg'
import img19 from '../../assets/img19.jpg'
import img20 from '../../assets/img20.jpg'
import img21 from '../../assets/img21.jpg'
import heroImg from '../../assets/Exterior of modern luxury house with garden and beautiful sky.jpg'

// ─── Brand palette from theme image ───────────────────────────────────────────
const FOREST  = '#3F5F4A'
const TERRA   = '#C9754A'
const STONE   = '#E8E5DF'
const CREAM   = '#F5F2EC'
const DARK    = '#1C1C1A'

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS = {
  completed: [
    { id:1,  title:'Modern Villa',        sub:'Stone Grove Residence',   location:'Chennai, TN',     type:'Residential',  image:img1,  year:'2023', size:'4,500 Sq.Ft', desc:'A sleek contemporary villa blending open-plan living with lush landscaping and smart home systems.' },
    { id:2,  title:'Heritage Duplex',     sub:'Timeless Twin Home',      location:'Coimbatore, TN',  type:'Construction', image:img3,  year:'2022', size:'3,200 Sq.Ft', desc:'Timeless duplex design honoring traditional Tamil architecture with modern comforts.' },
    { id:3,  title:'Luxury Bungalow',     sub:'Signature Estate',        location:'Trichy, TN',      type:'Residential',  image:img5,  year:'2023', size:'6,200 Sq.Ft', desc:'Premium bungalow with infinity pool, home theatre, and full smart home automation.' },
    { id:4,  title:'Urban Townhouse',     sub:'Vertical Living',         location:'Chennai, TN',     type:'Construction', image:img7,  year:'2022', size:'3,900 Sq.Ft', desc:'Compact urban townhouse maximizing vertical space with a stunning rooftop terrace.' },
    { id:5,  title:'Stone Arch Villa',    sub:'Classic Courtyard Home',  location:'Madurai, TN',     type:'Residential',  image:img9,  year:'2021', size:'5,000 Sq.Ft', desc:'Courtyard-style villa with stone arch entrances and traditional Chettinad-inspired interiors.' },
    { id:6,  title:'Palm Grove House',    sub:'Tropical Modern',         location:'Coimbatore, TN',  type:'Residential',  image:img11, year:'2021', size:'3,600 Sq.Ft', desc:'Tropical modern home surrounded by palm groves with open verandas and natural ventilation.' },
    { id:7,  title:'Skyline Apartment',   sub:'Premium Urban Living',    location:'Chennai, TN',     type:'Construction', image:img13, year:'2020', size:'2,400 Sq.Ft', desc:'High-rise apartment unit with panoramic city views and premium finishes throughout.' },
    { id:8,  title:'Forest Edge Home',    sub:'Nature-Integrated Design',location:'Ooty, TN',        type:'Residential',  image:img15, year:'2020', size:'4,100 Sq.Ft', desc:'A hillside home seamlessly integrated into the forest landscape with floor-to-ceiling glass.' },
  ],
  ongoing: [
    { id:9,  title:'Eco-Living Hub',      sub:'Net-Zero Home',           location:'Madurai, TN',     type:'Sustainable',  image:img2,  year:'2024', size:'5,100 Sq.Ft', progress:68, desc:'Net-zero energy home with solar integration and rainwater harvesting systems.' },
    { id:10, title:'Garden Retreat',      sub:'Biophilic Sanctuary',     location:'Salem, TN',       type:'Sustainable',  image:img4,  year:'2024', size:'2,800 Sq.Ft', progress:42, desc:'Biophilic design retreat surrounded by curated gardens and natural stone finishes.' },
    { id:11, title:'Terrace Villa',       sub:'Stepped Landscape Home',  location:'Trichy, TN',      type:'Residential',  image:img6,  year:'2024', size:'4,800 Sq.Ft', progress:55, desc:'Multi-level terrace villa with cascading gardens and infinity-edge pool on each floor.' },
    { id:12, title:'Solar Farmhouse',     sub:'Off-Grid Living',         location:'Erode, TN',       type:'Sustainable',  image:img8,  year:'2024', size:'3,500 Sq.Ft', progress:30, desc:'Fully off-grid farmhouse powered by solar panels with organic farming integration.' },
    { id:13, title:'Twin Courtyard',      sub:'Dual-Family Residence',   location:'Coimbatore, TN',  type:'Construction', image:img10, year:'2024', size:'6,000 Sq.Ft', progress:78, desc:'Dual-family residence sharing a central courtyard garden with independent living wings.' },
    { id:14, title:'Riverside Cottage',   sub:'Waterfront Living',       location:'Thanjavur, TN',   type:'Residential',  image:img12, year:'2024', size:'2,200 Sq.Ft', progress:20, desc:'Intimate riverside cottage with wraparound deck and natural timber construction.' },
    { id:15, title:'Green Roof Bungalow', sub:'Sustainable Luxury',      location:'Chennai, TN',     type:'Sustainable',  image:img14, year:'2024', size:'4,300 Sq.Ft', progress:60, desc:'Luxury bungalow with a full green roof system, passive cooling, and rainwater recycling.' },
  ],
  upcoming: [
    { id:16, title:'Hilltop Residence',   sub:'Valley View Estate',      location:'Ooty, TN',        type:'Residential',  image:img16, year:'2025', size:'7,000 Sq.Ft', desc:'A panoramic hilltop home designed to frame breathtaking valley views year-round.' },
    { id:17, title:'Riverside Villas',    sub:'Gated Community',         location:'Thanjavur, TN',   type:'Construction', image:img17, year:'2025', size:'12,000 Sq.Ft',desc:'A gated riverside villa community with shared amenities and sustainable infrastructure.' },
    { id:18, title:'Zen Garden Home',     sub:'Minimalist Retreat',      location:'Kodaikanal, TN',  type:'Residential',  image:img18, year:'2025', size:'3,800 Sq.Ft', desc:'A minimalist retreat inspired by Japanese Zen principles with curated stone gardens.' },
    { id:19, title:'Heritage Mansion',    sub:'Colonial Revival',        location:'Madurai, TN',     type:'Construction', image:img19, year:'2025', size:'9,500 Sq.Ft', desc:'Grand colonial revival mansion with heritage-style columns, arches, and period detailing.' },
    { id:20, title:'Cliff Edge Villa',    sub:'Dramatic Landscape Home', location:'Yercaud, TN',     type:'Residential',  image:img20, year:'2026', size:'5,600 Sq.Ft', desc:'Dramatic cliff-edge villa cantilevered over the hillside with 270° panoramic views.' },
    { id:21, title:'Bamboo Grove House',  sub:'Eco Architecture',        location:'Coimbatore, TN',  type:'Sustainable',  image:img21, year:'2026', size:'2,900 Sq.Ft', desc:'Eco-architecture home built with bamboo structural elements and natural earth plasters.' },
    { id:22, title:'Smart City Flat',     sub:'Tech-Integrated Living',  location:'Chennai, TN',     type:'Construction', image:img9,  year:'2026', size:'1,800 Sq.Ft', desc:'Fully automated smart apartment with AI-driven climate, security, and energy management.' },
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
      variants={{
        hidden: { opacity: 0, y: 60, clipPath: 'inset(100% 0% 0% 0%)' },
        visible: { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
      }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
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
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center gap-2">
          {/* Type badge — solid dark pill, always readable */}
          <span className="text-[10px] font-black tracking-[0.25em] uppercase px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(10,10,10,0.75)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: '#FFFFFF',
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
            }}>
            {project.type}
          </span>

          {/* Status badge */}
          {category === 'ongoing' && (
            <span className="flex items-center gap-1.5 text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
              style={{
                background: TERRA,
                color: '#fff',
                boxShadow: `0 0 12px ${TERRA}99, 0 2px 8px rgba(0,0,0,0.5)`
              }}>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live
            </span>
          )}
          {category === 'upcoming' && (
            <span className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(139,115,85,0.85)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
              }}>
              2025
            </span>
          )}
          {category === 'completed' && (
            <span className="flex items-center gap-1.5 text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
              style={{
                background: FOREST,
                color: '#fff',
                boxShadow: `0 0 12px ${FOREST}88, 0 2px 8px rgba(0,0,0,0.5)`
              }}>
              <FiCheckCircle size={10} /> Done
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
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-40px' })
  const cat = CATEGORIES.find(c => c.key === category)
  const projects = PROJECTS[category]

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">

      {/* Floating ambient orb */}
      <motion.div
        className="absolute pointer-events-none rounded-full blur-[120px] opacity-[0.07]"
        style={{ background: cat.accent, width: 500, height: 500, top: '10%', right: category === 'ongoing' ? 'auto' : '-10%', left: category === 'ongoing' ? '-10%' : 'auto' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Section heading */}
      <div ref={headRef} className="max-w-7xl mx-auto px-6 md:px-16 mb-16">

        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={headInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="h-[2px] w-10 origin-left rounded-full"
            style={{ background: cat.accent }}
          />
          <div className="w-7 h-7 rounded-sm flex items-center justify-center"
            style={{ background: `${cat.accent}18`, border: `1px solid ${cat.accent}40` }}>
            <cat.icon size={13} style={{ color: cat.accent }} />
          </div>
          <span className="text-[11px] font-black tracking-[0.45em] uppercase" style={{ color: cat.accent }}>
            {cat.label} Projects
          </span>
        </motion.div>

        {/* Big heading — word by word */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={headInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black font-serif leading-tight"
            style={{ color: DARK }}
          >
            {cat.tagline}
          </motion.h2>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm font-light max-w-md"
            style={{ color: `${DARK}60` }}
          >
            {category === 'completed' && 'Every completed project reflects our dedication to durability, craftsmanship, and client satisfaction.'}
            {category === 'ongoing'   && 'These projects are actively under construction — built with precision and monitored daily.'}
            {category === 'upcoming'  && 'Exciting new projects in the pipeline, designed and ready to break ground soon.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="text-sm font-bold tabular-nums" style={{ color: cat.accent }}>
              {String(projects.length).padStart(2, '0')}
            </span>
            <span className="text-xs font-light" style={{ color: `${DARK}40` }}>Projects</span>
          </motion.div>
        </div>

        {/* Animated rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 h-px origin-left"
          style={{ background: `linear-gradient(90deg, ${cat.accent}80, transparent)` }}
        />
      </div>

      {/* Cards — staggered entrance */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div
          className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} category={category} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Projects() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const scaleX   = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const heroY    = useTransform(heroScroll, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])
  const springY  = useSpring(heroY, { stiffness: 80, damping: 20 })

  const totalProjects = Object.values(PROJECTS).flat().length

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: CREAM, color: DARK }}>

      {/* Scroll progress bar — like Karr page */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[200] origin-left"
        style={{ scaleX, background: `linear-gradient(90deg, ${FOREST}, ${TERRA})` }}
      />

      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: '72vh', minHeight: '500px' }}
      >
        {/* Parallax BG — full bleed from top including behind navbar */}
        <motion.div className="absolute inset-0" style={{ y: springY, scale: 1.08 }}>
          <img
            src={heroImg}
            alt="Karrcholai Projects"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(20,18,14,0.60) 0%, rgba(20,18,14,0.65) 50%, rgba(20,18,14,0.85) 100%)'
          }} />
        </motion.div>

        {/* Centered content — pushed down by navbar height */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center px-6 w-full"
          style={{ opacity: heroOpacity, paddingTop: '80px' }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px" style={{ background: TERRA }} />
            <span className="text-[11px] font-black tracking-[0.5em] uppercase"
              style={{ color: TERRA, textShadow: `0 0 16px ${TERRA}99` }}>
              Karrcholai · Stone Grove
            </span>
            <span className="w-8 h-px" style={{ background: TERRA }} />
          </motion.div>

          {/* Heading */}
          <div style={{ paddingBottom: '0.2em' }}>
            <h1 className="font-black font-serif leading-none" style={{ fontSize: 'clamp(3.2rem,10vw,8rem)' }}>
              <ParallaxWord delay={0.1}>
                <span style={{ color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.85)' }}>
                  OUR&nbsp;
                </span>
              </ParallaxWord>
              <ParallaxWord delay={0.2}>
                <span style={{
                  color: TERRA,
                  fontStyle: 'italic',
                  textShadow: `0 0 30px ${TERRA}CC, 0 0 70px ${TERRA}55, 0 2px 14px rgba(0,0,0,0.95)`
                }}>
                  PROJECTS
                </span>
              </ParallaxWord>
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[11px] font-bold tracking-[0.35em] uppercase mt-6"
            style={{ color: 'rgba(232,229,223,0.7)', textShadow: '0 1px 10px rgba(0,0,0,0.9)' }}
          >
            Quality Construction &nbsp;·&nbsp; Professional Management &nbsp;·&nbsp; Responsible Development
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center gap-10 mt-10"
          >
            {[
              { n: '120+', l: 'Projects' },
              { n: '12+',  l: 'Years' },
              { n: '98%',  l: 'Satisfaction' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black" style={{
                  color: TERRA,
                  textShadow: `0 0 18px ${TERRA}BB, 0 2px 8px rgba(0,0,0,0.9)`
                }}>{s.n}</div>
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase mt-1"
                  style={{ color: 'rgba(255,255,255,0.65)', textShadow: '0 1px 6px rgba(0,0,0,1)' }}>
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Smooth bottom fade into cream */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${CREAM})` }}
        />
      </section>

      {/* ── INTRO BAND ──────────────────────────────────────────────────── */}
      <div style={{ background: DARK }} className="py-12 relative overflow-hidden">
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 4 + (i % 3) * 3,
              height: 4 + (i % 3) * 3,
              background: i % 2 === 0 ? TERRA : FOREST,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              opacity: 0.25
            }}
            animate={{ y: [-8, 8, -8], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          />
        ))}
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-px">
          {[
            { icon: FiCheckCircle, color: FOREST, t: 'Engineering Excellence',  d: 'Built to the highest structural and material standards.' },
            { icon: FiClock,       color: TERRA,  t: 'On-Time Delivery',        d: 'Disciplined project management from blueprint to possession.' },
            { icon: FiZap,        color: '#8B7355',t:'Client Satisfaction',     d: 'Transparent communication and quality that speaks for itself.' },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="flex items-start gap-4 px-8 py-8 cursor-default"
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
        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-6">
          <div className="h-px" style={{ background: `${DARK}10` }} />
        </div>

        <CategorySection category="completed" />

        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-px origin-left"
            style={{ background: `linear-gradient(90deg, ${FOREST}40, ${TERRA}40, transparent)` }}
          />
        </div>

        <CategorySection category="ongoing" />

        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-px origin-left"
            style={{ background: `linear-gradient(90deg, ${TERRA}40, transparent)` }}
          />
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
