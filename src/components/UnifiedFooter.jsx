import { motion } from 'framer-motion'
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi'
import bgPic from '../../assets/pic.png'

const UnifiedFooter = () => {
  const contacts = [
    { icon: <FiPhoneCall />, text: 'Call Us', subtext: '+91 98765 43210' },
    { icon: <FiMail />, text: 'Email Us', subtext: 'info@karrcholai.com' },
    { icon: <FiMapPin />, text: 'Our Location', subtext: 'Chennai, Tamil Nadu' },
  ]

  const links = ['Home', 'About', 'Karr', 'Cholai', 'Projects', 'Careers', 'Contact']

  return (
    <footer 
      className="w-full relative flex flex-col font-sans overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgPic})` }}
    >
      {/* 1. Stone Strong Section (Top Gray Band) */}
      <section className="relative min-h-[300px] md:h-[320px] flex flex-col items-center justify-center text-center px-6 py-16 md:py-0">
        <div className="relative z-10 w-full max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-6xl font-bold font-serif text-white mb-6 drop-shadow-lg leading-tight"
          >
            Stone Strong. Oasis Living.
          </motion.h2>
          
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <div className="hidden sm:block h-[1px] w-12 md:w-24 bg-secondary" />
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-3xl text-white font-medium italic font-serif"
            >
              Built with Discipline.
            </motion.p>
            <div className="hidden sm:block h-[1px] w-12 md:w-24 bg-secondary" />
          </div>
        </div>
      </section>

      {/* 2. Contact Strip Section (Middle Green Band) */}
      <section className="relative min-h-[250px] md:h-[280px] flex items-center justify-center py-12 md:py-0">
        <div className="container mx-auto px-4 md:px-8 relative z-10 md:translate-y-[-10px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {contacts.map((contact, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col items-center justify-center pt-8 md:pt-0 pb-4 md:pb-0 px-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-secondary text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-500">
                  {contact.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-white mb-2 drop-shadow-sm">{contact.text}</h3>
                <p className="text-white/70 font-bold tracking-[0.2em] text-[10px] md:text-[11px] uppercase text-center max-w-[200px]">
                  {contact.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Navigation Links Section (Narrow Dark Band) */}
      <section className="relative min-h-[100px] flex items-center justify-center bg-black/10 backdrop-blur-[1px] py-8 md:py-0">
        <div className="container mx-auto px-4 relative z-10">
          <ul className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-4 text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-[0.2em] md:tracking-[0.3em]">
            {links.map((link, idx) => (
              <li key={idx} className="flex items-center">
                <span className="cursor-pointer hover:text-secondary transition-colors underline-offset-4 hover:underline">
                  {link}
                </span>
                {idx < links.length - 1 && (
                  <span className="ml-6 md:ml-8 text-white/20 text-xl font-light hidden sm:inline">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Copyright Section (Bottom Tan Band) */}
      <section className="relative min-h-[80px] md:h-[100px] flex items-center justify-center py-8 md:py-0">
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-[10px] md:text-sm font-bold text-dark/80 tracking-[0.15em] md:tracking-[0.2em] uppercase leading-relaxed">
            © 2024 Karrcholai Construction; <br className="md:hidden" /> All Rights Reserved.
          </p>
        </div>
      </section>


    </footer>
  )
}

export default UnifiedFooter
