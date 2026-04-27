import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiClock, FiTag } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import UnifiedFooter from '../components/UnifiedFooter';

// Using high-quality Unsplash placeholders for blog images
const sustainableArch = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const constructionTips = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const solarIntegration = "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const rainwaterHarvesting = "https://images.unsplash.com/photo-1585255476317-a0666016a640?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const costEstimation = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const sustainableBuilding = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture in Tamil Nadu",
    category: "Sustainable Living",
    date: "April 15, 2024",
    image: sustainableArch,
    excerpt: "Exploring how traditional techniques are meeting modern green building standards to create climate-responsive homes.",
    link: "#"
  },
  {
    id: 2,
    title: "Top 5 Things to Consider Before Starting Your Home Construction",
    category: "Construction Tips",
    date: "April 08, 2024",
    image: constructionTips,
    excerpt: "A comprehensive checklist for homeowners to ensure a smooth transition from blueprint to groundbreaking.",
    link: "#"
  },
  {
    id: 3,
    title: "How Solar Integration is Changing Modern Residential Design",
    category: "Solar Energy",
    date: "March 28, 2024",
    image: solarIntegration,
    excerpt: "Beyond panels: How we integrate renewable energy into the very fabric of architectural aesthetics.",
    link: "#"
  },
  {
    id: 4,
    title: "Efficient Rainwater Harvesting Solutions for Urban Homes",
    category: "Rainwater Harvesting",
    date: "March 15, 2024",
    image: rainwaterHarvesting, 
    excerpt: "Implement smart rainwater harvesting systems to secure your home's water future while supporting local ecology.",
    link: "#"
  },
  {
    id: 5,
    title: "Accurate Construction Planning & Cost Estimation",
    category: "Planning & Cost Estimation",
    date: "March 02, 2024",
    image: costEstimation, 
    excerpt: "Learn the fundamentals of estimating construction costs to keep your dream home project on budget.",
    link: "#"
  },
  {
    id: 6,
    title: "Sustainable Building Practices for 2024",
    category: "Sustainable Living",
    date: "February 20, 2024",
    image: sustainableBuilding, 
    excerpt: "The latest trends and materials making eco-friendly construction more accessible and durable.",
    link: "#"
  }
];

const categories = [
  "Construction Tips",
  "Planning & Cost Estimation",
  "Rainwater Harvesting",
  "Solar Energy",
  "Sustainable Living"
];

const Blog = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  return (
    <div ref={containerRef} className="bg-[#fdfbf7] min-h-screen text-[#1a1a1a] selection:bg-[#B85C38] selection:text-white overflow-x-hidden font-sans">
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#B85C38] z-[100] origin-left"
        style={{ scaleX }}
      />

      <main>
        {/* ── HERO SECTION ── */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
          <div className="absolute inset-0 z-0 bg-[#1a1a1a]">
             <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/80" />
             <div className="absolute inset-0" style={{
               background: 'linear-gradient(135deg, rgba(45,75,55,0.15) 0%, transparent 60%, rgba(184,92,56,0.1) 100%)'
             }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center mt-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="text-[#B85C38] font-bold tracking-[0.6em] uppercase text-xs md:text-sm mb-6 block">
                Knowledge Center
              </span>
              <h1 className="text-5xl md:text-8xl font-bold text-white leading-none tracking-tighter mb-8">
                Blog / <span className="text-white/30 italic font-serif">News.</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Our blog shares useful information and updates related to construction and sustainable living. These articles help homeowners make informed decisions when planning and building their homes.
              </p>
            </motion.div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-[#B85C38] to-transparent"
            />
          </div>
        </section>

        {/* ── CATEGORIES SECTION ── */}
        <section className="py-12 px-6 bg-white border-b border-[#1a1a1a]/5">
           <div className="max-w-7xl mx-auto text-center">
             <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-6">Explore by Topic</h3>
             <div className="flex flex-wrap justify-center gap-3 md:gap-4">
               {categories.map((category, i) => (
                 <button 
                   key={i} 
                   className="px-5 py-2.5 rounded-full border border-[#1a1a1a]/10 text-xs font-semibold text-[#1a1a1a]/60 hover:text-white hover:bg-[#B85C38] hover:border-[#B85C38] transition-all duration-300"
                 >
                   {category}
                 </button>
               ))}
             </div>
           </div>
        </section>

        {/* ── FEATURED ARTICLES ── */}
        <section className="py-24 md:py-32 px-6 bg-[#fdfbf7]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
              <motion.div {...fadeInUp} className="max-w-xl">
                <span className="text-[#B85C38] font-bold tracking-[0.6em] uppercase text-xs md:text-sm mb-4 block">Featured</span>
                <h2 className="text-4xl md:text-6xl font-bold leading-none tracking-tight">
                  Top <span className="text-[#1a1a1a]/20 italic font-serif">Stories.</span>
                </h2>
              </motion.div>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.slice(0, 3).map((post, i) => (
                <motion.article
                  key={post.id}
                  variants={fadeInUp}
                  className="group flex flex-col bg-white rounded-[32px] border border-[#1a1a1a]/5 overflow-hidden hover:border-[#B85C38]/40 transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]/5">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-[9px] font-black tracking-[0.2em] uppercase rounded-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-4 text-[#2D4B37] group-hover:text-[#B85C38] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#1a1a1a]/50 text-sm font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between border-t border-[#1a1a1a]/10 pt-6">
                       <span className="text-[#1a1a1a]/30 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                         <FiClock className="text-[#B85C38]/50" />
                         {post.date}
                       </span>
                       <a href={post.link} className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-[#1a1a1a]/40 group-hover:text-[#B85C38] transition-all">
                         Read More <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                       </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── BLOG GRID SECTION ── */}
        <section className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none paper-texture" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16">
              <motion.div {...fadeInUp}>
                <span className="text-[#B85C38] font-bold tracking-[0.6em] uppercase text-xs md:text-sm mb-4 block">All Articles</span>
                <h2 className="text-3xl md:text-5xl font-bold leading-none tracking-tight">
                  Latest <span className="text-[#1a1a1a]/20 italic font-serif">Updates.</span>
                </h2>
              </motion.div>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {blogPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  variants={fadeInUp}
                  className="group flex flex-col items-start gap-4 p-6 bg-[#fdfbf7] rounded-[24px] border border-[#1a1a1a]/5 hover:bg-[#1a1a1a] hover:border-[#1a1a1a] transition-all duration-500"
                >
                  <div className="w-full relative aspect-video rounded-[16px] overflow-hidden mb-2">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  </div>
                  <div className="flex items-center gap-2 text-[#B85C38] text-[9px] font-black tracking-widest uppercase">
                    <FiTag />
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2D4B37] group-hover:text-white transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#1a1a1a]/50 group-hover:text-white/60 text-sm font-light leading-relaxed line-clamp-2 transition-colors">
                    {post.excerpt}
                  </p>
                  <a href={post.link} className="mt-4 flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-[#1a1a1a]/30 group-hover:text-white transition-all">
                    Read Article <FiArrowRight className="group-hover:translate-x-1 group-hover:text-[#B85C38] transition-transform" />
                  </a>
                </motion.article>
              ))}
            </motion.div>
            
            <div className="mt-20 text-center">
              <button className="px-10 py-5 bg-[#1a1a1a] text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#B85C38] transition-all duration-500 rounded-sm">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-24 md:py-40 px-6 bg-[#2D4B37] relative overflow-hidden">
          <div className="absolute inset-0 stone-texture opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B85C38]/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div {...fadeInUp}>
              <span className="text-[#B85C38] font-bold tracking-[0.6em] uppercase text-xs md:text-sm mb-6 block">Professional Consultation</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-none tracking-tight mb-8">
                Ready to build <br />
                <span className="text-white/30 italic font-serif">your home?</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                Planning to build your home? Get professional guidance from our construction experts. We are here to answer all your questions.
              </p>
              
              <button className="px-12 py-5 bg-white text-[#1a1a1a] text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#B85C38] hover:text-white transition-all duration-500 rounded-sm shadow-xl">
                Contact Our Experts
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <UnifiedFooter />
    </div>
  );
};

export default Blog;
