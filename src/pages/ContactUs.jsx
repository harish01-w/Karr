import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiArrowRight, FiNavigation, FiChevronDown, FiInstagram, FiFacebook } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import UnifiedFooter from '../components/UnifiedFooter'
import heroBg    from '../../assets/Exterior of modern luxury house with garden and beautiful sky.jpg'
import heroVid   from '../../assets/VID.mp4'
import img1      from '../../assets/img1.jpg'
import img5      from '../../assets/img5.jpg'
import img9      from '../../assets/img9.jpg'
import img3      from '../../assets/img3.jpg'
import modernHouse from '../../assets/MORDEN HOUSE.jpg'

const FOREST = '#3F5F4A'
const TERRA  = '#C9754A'
const CREAM  = '#F5F2EC'
const DARK   = '#1C1C1A'
const WA     = '919876543210'

const inp = `w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-300 border-2 border-transparent bg-[#F5F2EC] focus:bg-white focus:border-[#C9754A]`

// ── Parallax word (same as Projects) ─────────────────────────────────────────
function PWord({ children, delay = 0 }) {
  return (
    <motion.span initial={{ y: 110, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block" style={{ paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
      {children}
    </motion.span>
  )
}

// ── Animated form field ───────────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col gap-1.5">
      <label className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: `${DARK}55` }}>{label}</label>
      {children}
    </motion.div>
  )
}

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const faqs = [
  { q: 'How long does a typical residential project take?', a: 'Most residential projects take 8–18 months depending on size and complexity. We provide a detailed timeline during the initial consultation.' },
  { q: 'Do you offer free consultations?', a: "Yes — our first consultation is completely free. We'll walk you through the entire process, cost estimates, and design possibilities." },
  { q: 'What areas do you serve?', a: 'We primarily serve Chennai, Coimbatore, Madurai, Trichy, and surrounding areas across Tamil Nadu.' },
  { q: 'Can I track my project progress?', a: 'Absolutely. We provide weekly progress reports, site photos, and a dedicated project manager as your single point of contact.' },
  { q: 'Do you handle permits and approvals?', a: 'Yes, we manage all government approvals, CMDA/DTCP permits, and legal documentation on your behalf.' },
]

function FAQ({ q, a, i }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: i * 0.08 }}
      className="border-b last:border-0 cursor-pointer" style={{ borderColor: `${DARK}10` }}
      onClick={() => setOpen(v => !v)}>
      <div className="flex items-center justify-between py-5 gap-4">
        <span className="text-sm font-bold" style={{ color: DARK }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <FiChevronDown size={16} style={{ color: TERRA }} />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}
            className="overflow-hidden text-sm font-light leading-relaxed pb-5" style={{ color: `${DARK}65` }}>
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── FAQ Dark variant ─────────────────────────────────────────────────────────
function FAQDark({ q, a, i, inView }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
      className="border-b cursor-pointer group"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      onClick={() => setOpen(v => !v)}
    >
      <div className="flex items-center gap-4 py-5">
        {/* Number */}
        <span className="text-[11px] font-black tabular-nums flex-shrink-0 w-6"
          style={{ color: open ? TERRA : 'rgba(255,255,255,0.2)' }}>
          {String(i + 1).padStart(2, '0')}
        </span>
        <span className="flex-1 text-sm font-bold transition-colors duration-300"
          style={{ color: open ? '#fff' : 'rgba(232,229,223,0.7)' }}>{q}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{ background: open ? TERRA : 'rgba(255,255,255,0.06)', border: `1px solid ${open ? TERRA : 'rgba(255,255,255,0.1)'}` }}>
          <span className="text-white text-sm font-black leading-none">+</span>
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}
            className="overflow-hidden pl-10 pb-5">
            <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(232,229,223,0.55)' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ContactUs() {
  const [sent, setSent] = useState(false)
  const heroRef  = useRef(null)
  const introRef = useRef(null)
  const formRef  = useRef(null)
  const howRef   = useRef(null)
  const mapRef   = useRef(null)
  const faqRef   = useRef(null)

  const introInView = useInView(introRef, { once: true, amount: 0.15 })
  const formInView  = useInView(formRef,  { once: true, amount: 0.1 })
  const howInView   = useInView(howRef,   { once: true, amount: 0.1 })
  const mapInView   = useInView(mapRef,   { once: true, amount: 0.2 })
  const faqInView   = useInView(faqRef,   { once: true, amount: 0.1 })

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '28%'])

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000) }

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: CREAM, color: DARK }}>

      {/* ── Scroll progress bar ── */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] z-[200] origin-left"
        style={{ scaleX, background: `linear-gradient(90deg, ${FOREST}, ${TERRA})` }} />

      {/* ── Floating WhatsApp ── */}
      <motion.a href={`https://wa.me/${WA}?text=Hi%20Karrcholai%2C%20I%27m%20interested%20in%20your%20construction%20services.`}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[150] flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl"
        style={{ background: '#25D366', boxShadow: '0 8px 32px rgba(37,211,102,0.45)' }}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span className="text-white text-xs font-black tracking-wide hidden sm:block">WhatsApp Us</span>
        <motion.div className="absolute inset-0 rounded-full" style={{ border: '2px solid #25D366' }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }} transition={{ duration: 2, repeat: Infinity }} />
      </motion.a>

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 'clamp(420px, 65vw, 600px)' }}>

        {/* Background — video with slow Ken Burns zoom + parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <motion.video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1.08, opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <source src={heroVid} type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </motion.div>
        {/* Ambient orbs */}
        <motion.div className="absolute w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: TERRA, right: '5%', top: '10%', opacity: 0.07 }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: FOREST, left: '3%', bottom: '15%', opacity: 0.07 }}
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 9, repeat: Infinity, delay: 2 }} />

        <div className="relative z-10 text-center px-4 sm:px-6" style={{ paddingTop: '90px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Label */}
            <p className="font-black tracking-[0.4em] uppercase text-xs sm:text-sm mb-6"
              style={{ color: TERRA }}>
              Karrcholai · Stone Grove
            </p>

            {/* Heading — Cholai style */}
            <div style={{ paddingBottom: '0.2em' }}>
              <h1 className="font-black text-white uppercase tracking-tighter leading-[0.95] mb-8"
                style={{ fontSize: 'clamp(2.8rem, 12vw, 8rem)' }}>
                <PWord delay={0.1}>CONTACT&nbsp;</PWord>
                <PWord delay={0.22}>
                  <span className="italic font-serif" style={{
                    color: 'transparent',
                    WebkitTextStroke: `2px ${TERRA}`,
                    textShadow: `0 0 40px ${TERRA}66`
                  }}>US</span>
                </PWord>
              </h1>
            </div>

            {/* Subtitle — Cholai style with lines */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12" style={{ background: `${TERRA}60` }} />
              <p className="text-white/70 text-xs sm:text-sm font-light tracking-[0.2em] uppercase max-w-lg">
                From Stone to Oasis — We Build Better Living
              </p>
              <div className="h-px w-12" style={{ background: `${TERRA}60` }} />
            </div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-8 sm:gap-14 mt-6">
              {[{ n: '120+', l: 'Projects' }, { n: '12+', l: 'Years' }, { n: '98%', l: 'Satisfaction' }].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black" style={{ color: TERRA }}>{s.n}</div>
                  <div className="text-[9px] font-bold tracking-[0.25em] uppercase mt-0.5 text-white/50">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator — Cholai style */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-white/30 text-[9px] uppercase tracking-[0.4em] font-bold">Scroll</span>
          <div className="w-px h-12" style={{ background: `linear-gradient(to bottom, ${TERRA}, transparent)` }} />
        </motion.div>
      </section>

      {/* ── INTRO: content + image collage ───────────────────────────────── */}
      <section ref={introRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div initial={{ opacity: 0, x: -24 }} animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }} className="flex items-center gap-3 mb-6">
              <motion.span className="h-[2px] rounded-full" style={{ background: TERRA }}
                initial={{ width: 0 }} animate={introInView ? { width: 40 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }} />
              <span className="text-[11px] font-black tracking-[0.4em] uppercase" style={{ color: TERRA }}>Get In Touch</span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h2 initial={{ y: 60, opacity: 0 }} animate={introInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight" style={{ color: DARK }}>
                If you are planning to<br />
                <span style={{ color: TERRA, fontStyle: 'italic' }}>build a house</span> or require<br />
                professional support
              </motion.h2>
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base font-light leading-relaxed mb-10" style={{ color: `${DARK}70` }}>
              Karrcholai Construction is ready to assist you. From the first brick to the final finish,
              we bring discipline, transparency, and craftsmanship to every project.
            </motion.p>

            {/* Contact rows */}
            <div className="space-y-4">
              {[
                { Icon: FiPhone,  label: 'Phone',    value: '+91 98765 43210',     href: 'tel:+919876543210',                              color: TERRA },
                { Icon: FiMail,   label: 'Email',    value: 'info@karrcholai.com', href: 'mailto:info@karrcholai.com',                     color: FOREST },
                { Icon: FiMapPin, label: 'Location', value: 'Tamil Nadu, India',   href: 'https://maps.google.com/?q=Tamil+Nadu,India',    color: '#8B7355' },
              ].map((item, i) => (
                <motion.a key={i} href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }} animate={introInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.6 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}35` }}>
                    <item.Icon size={17} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.25em] uppercase" style={{ color: `${DARK}45` }}>{item.label}</p>
                    <p className="text-sm font-bold group-hover:underline" style={{ color: DARK }}>{item.value}</p>
                  </div>
                  <FiArrowRight size={13} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: item.color }} />
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a href={`https://wa.me/${WA}?text=Hi%20Karrcholai%2C%20I%27m%20interested%20in%20your%20services.`}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }} animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-2xl cursor-pointer"
              style={{ background: '#25D366', boxShadow: '0 8px 28px rgba(37,211,102,0.35)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span className="text-white font-black text-sm tracking-[0.15em] uppercase">Chat on WhatsApp</span>
            </motion.a>
          </div>

          {/* Image collage */}
          <div className="relative h-[380px] sm:h-[480px]">
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={introInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <img src={img1} alt="Karrcholai" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${FOREST}22, transparent)` }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30, y: -20 }} animate={introInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-4 -right-4 sm:-right-8 w-36 sm:w-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img src={img5} alt="" className="w-full h-28 sm:h-36 object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30, y: 20 }} animate={introInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="absolute -bottom-4 -left-4 sm:-left-8 w-40 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img src={img9} alt="" className="w-full h-24 sm:h-32 object-cover" />
              <div className="p-3" style={{ background: DARK }}>
                <p className="text-[9px] font-black tracking-widest uppercase" style={{ color: TERRA }}>Tamil Nadu</p>
                <p className="text-xs font-bold text-white">Premium Construction</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={introInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
              className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center shadow-xl"
              style={{ background: `linear-gradient(135deg, ${TERRA}, ${FOREST})` }}>
              <span className="text-lg sm:text-2xl font-black text-white leading-none">12</span>
              <span className="text-[8px] font-black text-white/70 tracking-wider uppercase">Yrs</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW TO CONTACT US ────────────────────────────────────────────── */}
      <section ref={howRef} className="py-16 md:py-20" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <motion.span className="h-px" style={{ background: TERRA }}
                initial={{ width: 0 }} animate={howInView ? { width: 32 } : { width: 0 }}
                transition={{ duration: 0.8 }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: TERRA }}>Simple Process</span>
              <motion.span className="h-px" style={{ background: TERRA }}
                initial={{ width: 0 }} animate={howInView ? { width: 32 } : { width: 0 }}
                transition={{ duration: 0.8 }} />
            </div>
            <motion.h2 initial={{ y: 30, opacity: 0 }} animate={howInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl font-black font-serif text-white">How to Reach Us</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step:'01', title:'Call or WhatsApp', desc:"Call us directly or send a WhatsApp message. We respond within minutes during office hours.", Icon:FiPhone, color:TERRA, image:img3, action:{ label:'Call Now', href:'tel:+919876543210' } },
              { step:'02', title:'Send a Message',   desc:"Fill out our contact form with your project details. We'll review and get back within 24 hours.", Icon:FiMail, color:FOREST, image:img5, action:{ label:'Email Us', href:'mailto:info@karrcholai.com' } },
              { step:'03', title:'Visit Our Office', desc:"Meet our team in person at our Tamil Nadu office. We'd love to discuss your vision face to face.", Icon:FiMapPin, color:'#8B7355', image:img9, action:{ label:'Get Directions', href:'https://maps.google.com/?q=Chennai,Tamil+Nadu' } },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 50, clipPath: 'inset(100% 0% 0% 0%)' }}
                animate={howInView ? { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                transition={{ delay: i * 0.15, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="rounded-3xl overflow-hidden group cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="relative h-44 overflow-hidden">
                  <motion.img src={item.image} alt={item.title} className="w-full h-full object-cover"
                    whileHover={{ scale: 1.07 }} transition={{ duration: 0.7 }} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${DARK}EE 0%, ${DARK}44 60%, transparent 100%)` }} />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${item.color}CC`, backdropFilter: 'blur(8px)' }}>
                    <span className="text-xs font-black text-white">{item.step}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}>
                    <item.Icon size={15} className="text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-black text-white mb-2">{item.title}</h3>
                  <p className="text-xs font-light leading-relaxed mb-4" style={{ color: 'rgba(232,229,223,0.5)' }}>{item.desc}</p>
                  <motion.a href={item.action.href}
                    target={item.action.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    whileHover={{ x: 4 }} transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase cursor-pointer"
                    style={{ color: item.color }}>
                    {item.action.label} <FiArrowRight size={11} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ───────────────────────────────────────────────── */}
      <section ref={formRef} className="py-16 md:py-20" style={{ background: DARK }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px" style={{ background: TERRA }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: TERRA }}>Start a Conversation</span>
              <span className="w-8 h-px" style={{ background: TERRA }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-white">Send Us a Message</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 rounded-3xl p-6 sm:p-10" style={{ background: CREAM }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name"><input type="text" placeholder="Your name" className={inp} required /></Field>
                  <Field label="Email Address"><input type="email" placeholder="you@email.com" className={inp} required /></Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Phone Number"><input type="tel" placeholder="+91 98765 43210" className={inp} /></Field>
                  <Field label="Service Needed">
                    <select className={inp} style={{ appearance: 'none' }}>
                      <option>General Inquiry</option>
                      <option>Residential Construction</option>
                      <option>Project Management</option>
                      <option>Sustainable Design</option>
                      <option>Renovation</option>
                    </select>
                  </Field>
                </div>
                <Field label="Budget Range">
                  <select className={inp} style={{ appearance: 'none' }}>
                    <option>Under ₹30 Lakhs</option>
                    <option>₹30 – ₹60 Lakhs</option>
                    <option>₹60 Lakhs – ₹1 Crore</option>
                    <option>Above ₹1 Crore</option>
                  </select>
                </Field>
                <Field label="Your Message">
                  <textarea rows={4} placeholder="Tell us about your project, location, and timeline..." className={inp + ' resize-none'} required />
                </Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <motion.button type="submit" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-xl font-black text-sm tracking-[0.2em] uppercase text-white flex items-center justify-center gap-2"
                    style={{ background: sent ? FOREST : `linear-gradient(135deg, ${TERRA}, ${FOREST})`, boxShadow: `0 8px 24px ${TERRA}40` }}>
                    {sent ? <><span>Sent!</span><motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>✓</motion.span></> : <><FiSend size={14} />Send Message</>}
                  </motion.button>
                  <motion.a href={`https://wa.me/${WA}?text=Hi%20Karrcholai%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
                    target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-xl font-black text-sm tracking-[0.2em] uppercase text-white flex items-center justify-center gap-2 cursor-pointer"
                    style={{ background: '#25D366', boxShadow: '0 8px 24px rgba(37,211,102,0.35)' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </motion.a>
                </div>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-2 flex flex-col gap-5">
              <div className="rounded-3xl overflow-hidden h-44 flex-shrink-0">
                <img src={modernHouse} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl p-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <FiClock size={15} style={{ color: TERRA }} />
                  <h3 className="font-black text-sm tracking-[0.25em] uppercase text-white">Office Hours</h3>
                </div>
                {[
                  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM', open: true },
                  { day: 'Saturday',        time: '10:00 AM – 4:00 PM', open: true },
                  { day: 'Sunday',          time: 'Closed', open: false },
                ].map((row, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={formInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex justify-between items-center py-2.5 border-b last:border-0" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>{row.day}</span>
                    <span className="text-xs font-bold" style={{ color: row.open ? TERRA : 'rgba(255,255,255,0.2)' }}>{row.time}</span>
                  </motion.div>
                ))}
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>Currently Open</span>
                </div>
              </div>
              <div className="rounded-3xl p-5 flex items-center gap-4"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-xs font-black tracking-widest uppercase text-white/40 flex-1">Follow Us</p>
                {[
                  { Icon: FiInstagram, color: '#E1306C', href: 'https://instagram.com' },
                  { Icon: FiFacebook,  color: '#1877F2', href: 'https://facebook.com' },
                ].map((s, i) => (
                  <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${s.color}20`, border: `1px solid ${s.color}40` }}>
                    <s.Icon size={16} style={{ color: s.color }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ — premium dark accordion ─────────────────────────────── */}
      <section ref={faqRef} className="py-20 md:py-28 relative overflow-hidden" style={{ background: DARK }}>
        {/* Ambient glow */}
        <motion.div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: TERRA, opacity: 0.06 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: FOREST, opacity: 0.06 }}
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity, delay: 3 }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={faqInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-4">
                <motion.div className="h-[2px] rounded-full" style={{ background: TERRA }}
                  initial={{ width: 0 }} animate={faqInView ? { width: 32 } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }} />
                <span className="text-[10px] font-black tracking-[0.45em] uppercase" style={{ color: TERRA }}>Common Questions</span>
              </motion.div>
              <h2 className="text-3xl sm:text-5xl font-black font-serif text-white leading-tight">
                Got Questions?<br />
                <span style={{ color: TERRA, fontStyle: 'italic' }}>We've Got Answers.</span>
              </h2>
            </div>
            <motion.p initial={{ opacity: 0 }} animate={faqInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }} className="text-sm font-light max-w-xs md:text-right"
              style={{ color: 'rgba(232,229,223,0.4)' }}>
              Everything you need to know before starting your dream project.
            </motion.p>
          </motion.div>

          {/* Animated rule */}
          <motion.div className="h-px mb-0 origin-left" style={{ background: `linear-gradient(90deg, ${TERRA}60, transparent)` }}
            initial={{ scaleX: 0 }} animate={faqInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.3 }} />

          {/* FAQ items — numbered, dark style */}
          <div>
            {faqs.map((f, i) => (
              <FAQDark key={i} q={f.q} a={f.a} i={i} inView={faqInView} />
            ))}
          </div>

          {/* CTA below FAQ */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-bold text-white mb-1">Still have questions?</p>
              <p className="text-xs font-light" style={{ color: 'rgba(232,229,223,0.45)' }}>Our team is ready to help you plan your project.</p>
            </div>
            <motion.a href={`https://wa.me/${WA}?text=Hi%20Karrcholai%2C%20I%20have%20a%20question.`}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-xs tracking-[0.2em] uppercase text-white cursor-pointer flex-shrink-0"
              style={{ background: '#25D366', boxShadow: '0 6px 20px rgba(37,211,102,0.35)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Ask on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── MAP — full-width with overlay card ───────────────────────────── */}
      <section ref={mapRef} className="relative overflow-hidden" style={{ height: 'clamp(420px, 55vw, 560px)' }}>
        {/* Map wipe reveal */}
        <motion.div className="absolute inset-0 z-10 pointer-events-none" style={{ background: CREAM }}
          initial={{ scaleX: 1, originX: 0 }} animate={mapInView ? { scaleX: 0 } : { scaleX: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }} />

        {/* Map iframe */}
        <motion.div className="absolute inset-0"
          initial={{ scale: 1.06 }} animate={mapInView ? { scale: 1 } : { scale: 1.06 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.3207011961!2d80.12588102213768!3d12.923149830537025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267da565d8a95%3A0x669145657803732!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0, filter: 'saturate(0.9) contrast(1.05)' }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </motion.div>

        {/* Centered overlay card */}
        <div className="absolute inset-0 z-20 flex items-center justify-start px-6 sm:px-12 pointer-events-none">
          <motion.div initial={{ opacity: 0, x: -50, y: 20 }} animate={mapInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto w-72 sm:w-80 rounded-3xl flex flex-col gap-4 p-6 sm:p-8"
            style={{ background: 'rgba(22,20,16,0.90)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>

            {/* Live badge */}
            <div className="flex items-center gap-2">
              <motion.div className="w-2 h-2 rounded-full bg-green-400"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
              <span className="text-[9px] font-black tracking-[0.35em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>We're Open Now</span>
            </div>

            {/* Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black font-serif text-white leading-tight">
                Find <span style={{ color: TERRA, fontStyle: 'italic' }}>Us</span>
              </h3>
              <p className="text-xs font-light mt-1" style={{ color: 'rgba(232,229,223,0.4)' }}>Tamil Nadu, India</p>
            </div>

            {/* Divider */}
            <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />

            {/* Info rows */}
            <div className="flex flex-col gap-3">
              {[
                { Icon: FiMapPin, v: 'Chennai · Coimbatore · Madurai', c: TERRA },
                { Icon: FiPhone,  v: '+91 98765 43210',                 c: FOREST },
                { Icon: FiClock,  v: 'Mon–Sat · 9:00 AM – 6:00 PM',    c: '#8B7355' },
              ].map((row, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={mapInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.1 }} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${row.c}20`, border: `1px solid ${row.c}35` }}>
                    <row.Icon size={11} style={{ color: row.c }} />
                  </div>
                  <span className="text-xs font-medium" style={{ color: 'rgba(232,229,223,0.6)' }}>{row.v}</span>
                </motion.div>
              ))}
            </div>

            {/* Directions button */}
            <motion.a href="https://maps.google.com/?q=Chennai,Tamil+Nadu" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
              className="relative flex items-center justify-center gap-2 py-3.5 rounded-2xl cursor-pointer overflow-hidden mt-1"
              style={{ background: `linear-gradient(135deg, ${TERRA}, ${FOREST})`, boxShadow: `0 8px 24px ${TERRA}40` }}>
              {/* Shimmer */}
              <motion.div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)', width: '50%' }}
                animate={{ x: ['-100%', '300%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }} />
              <FiNavigation size={13} className="text-white" />
              <span className="text-xs font-black tracking-[0.2em] uppercase text-white">Get Directions</span>
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <FiArrowRight size={12} className="text-white/70" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>

        {/* Top-right badge */}
        <motion.div initial={{ opacity: 0, y: -12 }} animate={mapInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="absolute top-5 right-5 z-20 px-4 py-2 rounded-full"
          style={{ background: 'rgba(22,20,16,0.82)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span className="text-[9px] font-black tracking-[0.35em] uppercase text-white/50">Tamil Nadu · India</span>
        </motion.div>
      </section>

      <UnifiedFooter />
    </div>
  )
}
