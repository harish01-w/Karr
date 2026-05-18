import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useNavigate, useLocation } from 'react-router-dom'
import logoImg from '../../assets/KARRCHOLAI LOGO.png'

const navLinks = [
  { name: 'Home',      path: '/' },
  { name: 'About',     path: '/about' },
  { name: 'Karr',      path: '/karr' },
  { name: 'Cholai',    path: '/cholai' },
  { name: 'Projects',  path: '/projects' },
  { name: 'Manaiyadi', path: '/manaiyadi' },
  { name: 'Blog',      path: '/blog' },
]

// Pages where navbar is always solid
const SOLID_PAGES = ['/manaiyadi']

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const navigate  = useNavigate()
  const location  = useLocation()

  const isSolid = true // Always solid — no transparent state

  /* ── Sync active link with location ── */
  useEffect(() => {
    const currentPath = location.pathname;
    const hash = location.hash;
    
    // Check if it's a specific route
    const link = navLinks.find(l => l.path === currentPath);
    if (link && !hash) {
      setActiveLink(link.name);
    } else if (currentPath === '/contact') {
      setActiveLink('Contact');
    } else if (currentPath === '/' && !hash) {
      setActiveLink('Home');
    }
  }, [location.pathname, location.hash]);

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  /* ── Close menu on route change ── */
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const handleNavClick = (path, name) => {
    setMobileOpen(false)
    setActiveLink(name)

    // If clicking Home while already on Home, scroll to top
    if (path === '/' && location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (path.startsWith('/#')) {
      const id = path.split('#')[1]
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 350)
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(path)
    }
  }

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 350)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          background: '#FAF9F6',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.08)' : '0 2px 16px rgba(0,0,0,0.04)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          transition: 'box-shadow 0.4s ease',
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? 'var(--nav-height-scrolled, 84px)' : 'var(--nav-height, 100px)',
          transition: 'height 0.4s ease',
        }}>

          {/* ── Logo ── */}
          <button
            onClick={handleLogoClick}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
            aria-label="Go to home"
          >
            <img
              src={logoImg}
              alt="KARRCHOLAI"
              style={{
                height: scrolled ? 'var(--logo-height-scrolled, 64px)' : 'var(--logo-height, 84px)',
                width: 'auto',
                objectFit: 'contain',
                transition: 'height 0.4s ease',
              }}
            />
          </button>

          {/* ── Desktop Nav Links ── */}
          <div className="desktop-nav-links" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}>
            {navLinks.map((link) => {
              const isActive = activeLink === link.name
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path, link.name)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.45rem 0.85rem',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '3px',
                  }}
                  aria-label={link.name}
                >
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isActive ? '#1A1A1A' : 'rgba(26,26,26,0.65)',
                    transition: 'color 0.3s ease',
                    whiteSpace: 'nowrap',
                  }}
                    className="nav-link-text"
                  >
                    {link.name}
                  </span>
                  {/* Active / hover underline */}
                  <motion.span
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '50%',
                      translateX: '-50%',
                      height: '2px',
                      borderRadius: '2px',
                      background: '#B85C38',
                      width: isActive ? '70%' : '0%',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </button>
              )
            })}

            {/* ── CTA Button ── */}
            <button
              onClick={() => handleNavClick('/contact', 'Contact')}
              style={{
                marginLeft: '0.75rem',
                padding: '0.5rem 1.4rem',
                borderRadius: '4px',
                border: '2px solid #B85C38',
                background: '#B85C38',
                color: '#ffffff',
                fontSize: '0.7rem',
                fontWeight: '700',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              className="nav-cta-btn"
              aria-label="Contact us"
            >
              Contact Us
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="mobile-hamburger"
            style={{
              width: '44px',
              height: '44px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              border: '1px solid rgba(0,0,0,0.06)',
              background: 'rgba(0,0,0,0.03)',
              backdropFilter: 'blur(8px)',
              color: '#1A1A1A',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><FiX size={20} /></motion.span>
                : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><FiMenu size={20} /></motion.span>
              }
            </AnimatePresence>
          </button>

        </div>
      </motion.nav>

      {/* ─────────────────────────────────────────── */}
      {/* Mobile Drawer Overlay                      */}
      {/* ─────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 98,
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(8px)',
              }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 99,
                width: '85vw',
                maxWidth: '320px',
                background: 'rgba(18, 18, 18, 0.95)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.4)',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '80px',
              }}
            >
              <nav style={{
                flex: 1,
                padding: '2rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1rem',
              }}>
                {[...navLinks, { name: 'Contact', path: '/contact' }].map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055 + 0.1, duration: 0.4 }}
                    onClick={() => handleNavClick(link.path, link.name)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: '0.85rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      letterSpacing: '0.35em',
                      textTransform: 'uppercase',
                      color: activeLink === link.name ? '#B85C38' : 'rgba(255,255,255,0.7)',
                      transition: 'color 0.3s',
                    }}>
                      <span className="text-[0.65rem] opacity-35 mr-3 font-mono">0{i+1}</span>
                      {link.name}
                    </span>
                    {activeLink === link.name && (
                      <motion.div
                        layoutId="mobileActiveLine"
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: '#B85C38',
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Drawer footer */}
              <div style={{
                padding: '2rem 2.5rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                textAlign: 'left',
              }}>
                <p style={{
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  marginBottom: '6px',
                }}>
                  Karrcholai Construction
                </p>
                <p style={{
                  fontSize: '0.55rem',
                  color: 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.1em',
                }}>
                  Premium Residential Builds
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────── */}
      {/* Responsive styles injected via <style>     */}
      {/* ─────────────────────────────────────────── */}
      <style>{`
        :root {
          --nav-height: 100px;
          --nav-height-scrolled: 84px;
          --logo-height: 84px;
          --logo-height-scrolled: 64px;
        }

        @media (max-width: 899px) {
          :root {
            --nav-height: 76px;
            --nav-height-scrolled: 64px;
            --logo-height: 52px;
            --logo-height-scrolled: 44px;
          }
        }

        /* Desktop: show nav links, hide hamburger */
        @media (min-width: 900px) {
          .desktop-nav-links { display: flex !important; }
          .mobile-hamburger  { display: none !important; }
        }

        /* Mobile / Tablet: hide links, show hamburger */
        @media (max-width: 899px) {
          .desktop-nav-links { display: none !important; }
          .mobile-hamburger  { display: flex !important; }
        }

        /* Hover effect for desktop nav links */
        .nav-link-text:hover {
          opacity: 0.7;
        }

        /* Hover effect for CTA button */
        .nav-cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(45,75,55,0.22);
        }
      `}</style>
    </>
  )
}

export default Navbar
