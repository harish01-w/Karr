import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiClock, FiTag, FiSearch } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import UnifiedFooter from '../components/UnifiedFooter';

import heroBg from '../assets/blog/gen/blog_hero_img_1777305893930.png';

// Original images for Featured Stories
import sustainableArch from '../assets/blog/sustainable_arch.png';
import constructionTips from '../assets/blog/construction_tips.png';
import solarIntegration from '../assets/blog/solar_integration.png';

// Generated images for All Articles
import genArch from '../assets/blog/gen/blog_architecture_1777306041771.png';
import genConst from '../assets/blog/gen/blog_construction_1777306059248.png';
import genSolar from '../assets/blog/gen/blog_solar_1777306099624.png';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture in Tamil Nadu",
    category: "Sustainable Living",
    date: "April 15, 2024",
    image: sustainableArch,
    author: "Karrcholai Team",
    excerpt: "Exploring how traditional techniques are meeting modern green building standards to create climate-responsive homes. We dive deep into the architectural renaissance sweeping across South India.",
    link: "#"
  },
  {
    id: 2,
    title: "Top 5 Things to Consider Before Starting Your Home Construction",
    category: "Construction Tips",
    date: "April 08, 2024",
    image: constructionTips,
    author: "Structural Dept.",
    excerpt: "A comprehensive checklist for homeowners to ensure a smooth transition from blueprint to groundbreaking.",
    link: "#"
  },
  {
    id: 3,
    title: "How Solar Integration is Changing Modern Residential Design",
    category: "Solar Energy",
    date: "March 28, 2024",
    image: solarIntegration,
    author: "Energy Systems",
    excerpt: "Beyond panels: How we integrate renewable energy into the very fabric of architectural aesthetics without compromising on design.",
    link: "#"
  },
  {
    id: 4,
    title: "Efficient Rainwater Harvesting Solutions for Urban Homes",
    category: "Rainwater Harvesting",
    date: "March 15, 2024",
    image: genArch, 
    author: "Eco Engineering",
    excerpt: "Implement smart rainwater harvesting systems to secure your home's water future while supporting local ecology.",
    link: "#"
  },
  {
    id: 5,
    title: "Accurate Construction Planning & Cost Estimation",
    category: "Planning & Cost Estimation",
    date: "March 02, 2024",
    image: genConst, 
    author: "Financial Advisory",
    excerpt: "Learn the fundamentals of estimating construction costs to keep your dream home project on budget.",
    link: "#"
  },
  {
    id: 6,
    title: "Sustainable Building Practices for 2024",
    category: "Sustainable Living",
    date: "February 20, 2024",
    image: genSolar, 
    author: "Karrcholai Team",
    excerpt: "The latest trends and materials making eco-friendly construction more accessible and durable.",
    link: "#"
  }
];

const categories = [
  "All Insights",
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

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const parallaxImg = useTransform(scrollYProgress, [0, 1], [0, 200]);

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
      transition: { staggerChildren: 0.2 }
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
        {/* ── CINEMATIC HERO SECTION ── */}
        <section className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            {/* Massive Parallax Image */}
            <motion.div 
              style={{ y: parallaxImg }}
              className="absolute inset-0 h-[120%]"
            >
              <img src={heroBg} alt="Architecture" className="w-full h-full object-cover opacity-50" />
            </motion.div>
            
            {/* Sophisticated multi-layered overlay matching Karr.jsx */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/80" />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, rgba(45,75,55,0.15) 0%, transparent 60%, rgba(184,92,56,0.1) 100%)'
            }} />
          </motion.div>

          {/* Huge Faded Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-full overflow-hidden flex justify-center">
             <motion.span 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 0.15, scale: 1 }}
               transition={{ duration: 2, ease: "easeOut" }}
               className="text-[20vw] font-black text-white whitespace-nowrap leading-none select-none tracking-tighter"
             >
               INSIGHTS
             </motion.span>
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
                Blog <span className="text-white italic font-serif">&</span> <br />
                <span className="text-white italic font-serif">News.</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Expert perspectives on sustainable architecture, engineering precision, and the art of modern home construction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── EDITORIAL CATEGORIES BAR ── */}
        <section className="sticky top-[72px] md:top-[88px] z-40 bg-white/80 backdrop-blur-md border-b border-[#1a1a1a]/5">
           <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
             <div className="hidden md:flex items-center gap-2 text-[#1a1a1a]/40 text-xs font-bold uppercase tracking-widest">
               <FiSearch /> Filter
             </div>
             
             {/* Hide scrollbar but allow horizontal scroll */}
             <div className="flex overflow-x-auto hide-scrollbar gap-2 md:gap-4 md:justify-center w-full md:w-auto pb-2 md:pb-0">
               {categories.map((category, i) => (
                 <button 
                   key={i} 
                   className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 ${
                     i === 0 
                     ? "bg-[#B85C38] text-white" 
                     : "text-[#1a1a1a]/50 hover:bg-[#2D4B37] hover:text-white"
                   }`}
                 >
                   {category}
                 </button>
               ))}
             </div>
           </div>
        </section>

        {/* ── ASYMMETRICAL FEATURED EDITORIAL ── */}
        <section className="py-24 md:py-40 px-6 bg-[#fdfbf7] relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
              <motion.div {...fadeInUp} className="max-w-xl">
                <span className="text-[#B85C38] font-bold tracking-[0.6em] uppercase text-xs md:text-sm mb-4 block">Top Picks</span>
                <h2 className="text-4xl md:text-6xl font-bold leading-none tracking-tight text-[#1a1a1a]">
                  Featured <br />
                  <span className="text-[#1a1a1a]/20 italic font-serif">Stories.</span>
                </h2>
              </motion.div>
              <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-[#1a1a1a]/5 to-transparent ml-8 mb-4" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Massive Main Feature (Takes up 7 cols) */}
              <motion.article 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="lg:col-span-7 group cursor-pointer relative rounded-[40px] overflow-hidden bg-white border border-[#1a1a1a]/5 shadow-sm hover:shadow-2xl hover:border-[#2D4B37]/30 transition-all duration-700 flex flex-col h-full"
              >
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <motion.img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/20 to-transparent opacity-80" />
                  
                  <div className="absolute top-8 left-8">
                    <span className="px-5 py-2.5 bg-[#B85C38] text-white text-[9px] font-black tracking-[0.3em] uppercase rounded-full shadow-lg">
                      {blogPosts[0].category}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                      <FiClock className="text-[#B85C38]" /> {blogPosts[0].date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase">
                      By {blogPosts[0].author}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute md:relative bottom-full md:bottom-auto pointer-events-none md:pointer-events-auto">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="inline-flex items-center gap-3 text-xs font-black tracking-[0.2em] uppercase text-white bg-white/20 backdrop-blur-md px-8 py-4 rounded-full hover:bg-[#B85C38] transition-all duration-300">
                    Read Story <FiArrowRight />
                  </div>
                </div>
              </motion.article>

              {/* Stacked Side Features (Takes up 5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-12">
                {blogPosts.slice(1, 3).map((post, i) => (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    transition={{ delay: i * 0.2 }}
                    className="group cursor-pointer flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 items-center p-4 bg-white rounded-[40px] border border-[#1a1a1a]/5 hover:bg-[#fdfbf7] hover:border-[#2D4B37]/20 transition-all duration-500 shadow-sm"
                  >
                    <div className="w-full sm:w-2/5 lg:w-full xl:w-2/5 relative aspect-square md:aspect-[4/3] rounded-[30px] overflow-hidden shadow-sm">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="w-full sm:w-3/5 lg:w-full xl:w-3/5 flex flex-col justify-center pr-4">
                      <span className="text-[#B85C38] text-[9px] font-black tracking-[0.2em] uppercase mb-3 block">
                        {post.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#2D4B37] leading-snug mb-3 group-hover:text-[#B85C38] transition-colors line-clamp-3">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-[#1a1a1a]/40 text-[10px] font-bold tracking-widest uppercase">
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── MASONRY GRID ALL ARTICLES ── */}
        <section className="py-24 md:py-40 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none paper-texture" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
              <motion.div {...fadeInUp} className="max-w-xl">
                <span className="text-[#B85C38] font-bold tracking-[0.6em] uppercase text-xs md:text-sm mb-4 block">Knowledge Base</span>
                <h2 className="text-4xl md:text-6xl font-bold leading-none tracking-tight">
                  All <br />
                  <span className="text-[#1a1a1a]/20 italic font-serif">Articles.</span>
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
              {blogPosts.slice(3).map((post, i) => (
                <motion.article
                  key={post.id}
                  variants={fadeInUp}
                  className="group flex flex-col p-6 bg-[#fdfbf7] rounded-[40px] border border-[#1a1a1a]/5 hover:bg-[#2D4B37] transition-all duration-500 shadow-sm hover:shadow-2xl relative"
                >
                  <div className="w-full relative aspect-square rounded-[30px] overflow-hidden mb-8">
                    <motion.img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-white px-4 py-2 rounded-full text-[#2D4B37] text-[9px] font-black tracking-[0.2em] uppercase shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col px-2 flex-grow">
                    <div className="flex items-center gap-4 mb-4 text-[#1a1a1a]/50 group-hover:text-white/60 text-[10px] font-bold tracking-widest uppercase transition-colors">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-[#B85C38]" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D4B37] group-hover:text-white transition-colors leading-snug mb-4">
                      {post.title}
                    </h3>
                    <p className="text-[#1a1a1a]/60 group-hover:text-white/80 text-sm font-light leading-relaxed line-clamp-3 transition-colors mb-8 flex-grow">
                      {post.excerpt}
                    </p>
                    <a href={post.link} className="mt-auto flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#B85C38] group-hover:text-white transition-all">
                      Read Article <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
            
            <div className="mt-24 text-center">
              <button className="px-12 py-5 bg-[#2D4B37] text-white text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#B85C38] transition-all duration-500 rounded-full shadow-lg hover:shadow-xl">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-24 md:py-40 px-6 bg-[#fdfbf7]">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              {...fadeInUp}
              className="flex flex-col justify-center p-12 md:p-20 bg-[#2D4B37] text-white rounded-[40px] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 stone-texture opacity-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B85C38]/20 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[#B85C38] font-bold tracking-[0.6em] uppercase text-xs md:text-sm mb-6 block">Professional Consultation</span>
                <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">
                  Ready to build <br /> your vision?
                </h3>
                <p className="text-white/60 text-lg font-light mb-12 max-w-2xl mx-auto">
                  Connect with our construction specialists for a comprehensive site visit and initial estimation. We are here to answer all your questions.
                </p>
                <div className="flex justify-center">
                  <button className="px-12 py-5 bg-white text-[#1a1a1a] text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#B85C38] hover:text-white transition-all duration-500 rounded-full shadow-xl w-full md:w-auto">
                    Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <UnifiedFooter />
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Blog;
