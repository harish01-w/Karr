import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import UnifiedFooter from '../components/UnifiedFooter'
import contactBg from '../../assets/pic4.png'

const ContactUs = () => {
  const contactDetails = [
    { icon: <FiPhone />, title: 'Call Us', detail: '+91 98765 43210', sub: 'Mon-Sat: 9AM - 6PM' },
    { icon: <FiMail />, title: 'Email Us', detail: 'info@karrcholai.com', sub: '24/7 Online Support' },
    { icon: <FiMapPin />, title: 'Our Location', detail: 'Chennai, Tamil Nadu', sub: 'Visit our office' }
  ]

  return (
    <div className="bg-white min-h-screen text-dark selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="pt-24">
        
        {/* 1. Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center bg-black overflow-hidden">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${contactBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60"></div>
          
          <div className="relative z-10 text-center text-white px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-8xl font-black font-serif mb-6 uppercase tracking-tight"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-sm md:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/80"
            >
              Let's Build Your Dream Together
            </motion.p>
          </div>
        </section>

        {/* 2. Contact Grid */}
        <section className="py-16 md:py-24 px-6 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 border-l-4 border-secondary pl-6">Contact Information</h2>
                {contactDetails.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 bg-light rounded-xl hover:bg-primary hover:text-white transition-all duration-500 group text-center sm:text-left"
                  >
                    <div className="text-3xl text-secondary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-base md:text-lg font-medium mb-1 break-words">{item.detail}</p>
                      <p className="text-sm opacity-60 font-light">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
                
                <div className="p-8 bg-secondary/10 rounded-xl border border-secondary/20 mt-12">
                  <div className="flex items-center gap-4 mb-4 text-secondary">
                    <FiClock className="text-2xl" />
                    <h4 className="text-lg font-bold uppercase tracking-widest text-dark">Office Hours</h4>
                  </div>
                  <div className="space-y-3 text-dark/70 text-sm font-medium">
                    <p className="flex justify-between gap-4"><span>Monday - Friday:</span> <span className="text-right">9:00 AM - 6:00 PM</span></p>
                    <p className="flex justify-between gap-4"><span>Saturday:</span> <span className="text-right">10:00 AM - 4:00 PM</span></p>
                    <p className="flex justify-between gap-4"><span>Sunday:</span> <span className="text-secondary text-right">Closed</span></p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 bg-white p-6 md:p-16 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-light"
              >
                <h3 className="text-3xl md:text-4xl font-bold font-serif mb-4">Send Us a Message</h3>
                <p className="text-dark/60 mb-10 text-sm md:text-base">Have a question or a project in mind? Reach out to us and we'll get back to you within 24 hours.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-dark/40 ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-light border-transparent focus:border-secondary focus:bg-white transition-all rounded-lg outline-none font-medium text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-dark/40 ml-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-light border-transparent focus:border-secondary focus:bg-white transition-all rounded-lg outline-none font-medium text-sm" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-dark/40 ml-1">Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" className="w-full px-6 py-4 bg-light border-transparent focus:border-secondary focus:bg-white transition-all rounded-lg outline-none font-medium text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-dark/40 ml-1">Subject</label>
                      <select className="w-full px-6 py-4 bg-light border-transparent focus:border-secondary focus:bg-white transition-all rounded-lg outline-none font-medium appearance-none text-sm">
                        <option>General Inquiry</option>
                        <option>Project Management</option>
                        <option>Residential Construction</option>
                        <option>Sustainable Design</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-dark/40 ml-1">Your Message</label>
                    <textarea rows="5" placeholder="Tell us more about your project..." className="w-full px-6 py-4 bg-light border-transparent focus:border-secondary focus:bg-white transition-all rounded-lg outline-none font-medium resize-none text-sm"></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: '#b56932' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 md:py-5 bg-secondary text-white font-bold rounded-lg shadow-xl shadow-secondary/20 flex items-center justify-center gap-3 transition-colors text-base md:text-lg uppercase tracking-widest"
                  >
                    Send Message <FiSend size={18} />
                  </motion.button>
                </form>
              </motion.div>

            </div>
          </div>
        </section>


        {/* 3. Map / Visual Section */}
        <section className="h-[400px] w-full transition-all duration-1000 opacity-80 hover:opacity-100">

           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.3207011961!2d80.12588102213768!3d12.923149830537025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267da565d8a95%3A0x669145657803732!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>

      </main>

      <UnifiedFooter />
    </div>
  )
}

export default ContactUs
