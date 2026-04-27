import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiClock, FiTag, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
  },
  {
    id: 7,
    title: "Essential Foundations: Soil Testing Explained",
    category: "Construction Tips",
    date: "February 12, 2024",
    image: genArch, 
    author: "Structural Dept.",
    excerpt: "Why soil testing is the non-negotiable first step for any secure and lasting residential build.",
    link: "#"
  },
  {
    id: 8,
    title: "Maximizing ROI with Smart Cost Planning",
    category: "Planning & Cost Estimation",
    date: "February 05, 2024",
    image: genConst, 
    author: "Financial Advisory",
    excerpt: "Strategic planning frameworks to maximize the value of your construction budget.",
    link: "#"
  },
  {
    id: 9,
    title: "The Aesthetics of Solar Panel Architecture",
    category: "Solar Energy",
    date: "January 28, 2024",
    image: solarIntegration, 
    author: "Design Team",
    excerpt: "Integrating solar solutions so they enhance rather than detract from your home's visual appeal.",
    link: "#"
  },
  {
    id: 10,
    title: "Rainwater Systems: Maintenance Guide",
    category: "Rainwater Harvesting",
    date: "January 15, 2024",
    image: sustainableArch, 
    author: "Eco Engineering",
    excerpt: "Best practices for maintaining your rainwater harvesting system year-round.",
    link: "#"
  },
  {
    id: 11,
    title: "Choosing the Right Cement for Longevity",
    category: "Construction Tips",
    date: "January 04, 2024",
    image: constructionTips, 
    author: "Materials Team",
    excerpt: "A deep dive into the types of cement and how to select the best grade for your project.",
    link: "#"
  },
  {
    id: 12,
    title: "Eco-Friendly Insulation Materials",
    category: "Sustainable Living",
    date: "December 22, 2023",
    image: genSolar, 
    author: "Green Builders",
    excerpt: "Keep your home cool in summer and warm in winter using sustainable, non-toxic insulation.",
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
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [searchQuery, setSearchQuery] = useState("");
  const categoryScrollRef = useRef(null);

  const scrollCategories = (direction) => {
    if (categoryScrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      categoryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
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

  // Filter posts based on category and search text
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All Insights" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // If viewing default state (no filter/search), slice the first 3 for top feature section
  const displayPosts = (activeCategory === "All Insights" && searchQuery === "") 
    ? filteredPosts.slice(3) 
    : filteredPosts;

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
          </motion.div>

          <div className="relative z-10 w-full px-6 md:px-12 text-center flex flex-col justify-center items-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="w-full max-w-5xl mx-auto"
            >
              <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
                <div className="hidden md:block w-16 lg:w-24 h-[1px] bg-[#B85C38]/50" />
                <span className="text-[#B85C38] font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-[10px] md:text-sm block">
                  Knowledge Center
                </span>
                <div className="hidden md:block w-16 lg:w-24 h-[1px] bg-[#B85C38]/50" />
              </div>

              <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black text-white uppercase tracking-tighter leading-[0.9] md:leading-none mb-8 flex flex-wrap items-center justify-center gap-3 md:gap-6">
                <span>BLOG</span>
                <span className="text-transparent italic font-serif font-light text-6xl md:text-9xl lg:text-[130px] translate-y-[-5px] md:translate-y-[-10px]" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}>
                  &
                </span>
                <span>NEWS.</span>
              </h1>
              
              <p className="text-white/60 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                Expert perspectives on sustainable architecture, engineering precision, and the art of modern home construction.
              </p>
            </motion.div>
          </div>

          {/* Absolute Right-Aligned Vertical Watermark */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 hidden md:flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
            <span className="text-[120px] lg:text-[180px] font-black text-white rotate-90 tracking-widest uppercase whitespace-nowrap">
              INSIGHTS
            </span>
          </div>
        </section>

        {/* ── EDITORIAL CATEGORIES BAR ── */}
        <section className="sticky top-[72px] md:top-[88px] z-40 bg-white/95 backdrop-blur-md border-b border-[#1a1a1a]/5 shadow-sm">
           <div className="max-w-7xl mx-auto px-6 py-4 flex flex-row items-center justify-between gap-4 md:gap-8">
             <div className="flex flex-shrink-0 items-center gap-2 text-[#1a1a1a]/40 text-[9px] md:text-[10px] font-black uppercase tracking-widest whitespace-nowrap bg-gray-100 px-4 py-2 rounded-full w-auto">
               <FiSearch />
               <input 
                 type="text" 
                 placeholder="SEARCH..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="bg-transparent border-none outline-none text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 w-20 md:w-32 focus:w-32 md:focus:w-48 transition-all duration-300 font-black uppercase tracking-widest text-[9px] md:text-[10px]"
               />
             </div>
             
             {/* Single horizontal scrollable row with arrows */}
             <div className="flex items-center gap-1 md:gap-2 w-full overflow-hidden">
               <button 
                 onClick={() => scrollCategories('left')}
                 className="p-1 text-[#1a1a1a]/20 hover:text-[#B85C38] transition-colors"
               >
                 <FiChevronLeft size={16} />
               </button>

               <div 
                 ref={categoryScrollRef}
                 className="flex overflow-x-auto hide-scrollbar flex-nowrap items-center gap-2 md:gap-4 w-full" 
                 style={{ WebkitOverflowScrolling: 'touch' }}
               >
                 {categories.map((category, i) => (
                   <button 
                     key={i} 
                     onClick={() => setActiveCategory(category)}
                     className={`flex-shrink-0 px-5 py-2 rounded-full text-[9px] md:text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${
                       activeCategory === category 
                       ? "bg-[#B85C38] text-white" 
                       : "text-[#1a1a1a]/40 hover:bg-[#2D4B37] hover:text-white"
                     }`}
                   >
                     {category}
                   </button>
                 ))}
               </div>

               <button 
                 onClick={() => scrollCategories('right')}
                 className="p-1 text-[#1a1a1a]/20 hover:text-[#B85C38] transition-colors"
               >
                 <FiChevronRight size={16} />
               </button>
             </div>
           </div>
        </section>

        {/* ── ASYMMETRICAL FEATURED EDITORIAL ── */}
        <section className="py-16 md:py-24 px-6 bg-[#fdfbf7] relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mb-12 md:mb-16 text-center md:text-left">
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
                className="lg:col-span-7 group cursor-pointer relative rounded-[24px] md:rounded-[40px] overflow-hidden bg-white border border-[#1a1a1a]/5 shadow-sm hover:shadow-2xl hover:border-[#2D4B37]/30 transition-all duration-700 flex flex-col min-h-[450px] lg:min-h-[550px] p-6 md:p-12 justify-end"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <motion.img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent opacity-90" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
                  <span className="px-5 py-2.5 bg-[#B85C38] text-white text-[9px] font-black tracking-[0.3em] uppercase rounded-full shadow-lg">
                    {blogPosts[0].category}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 mt-auto">
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                    <span className="text-white/80 text-[9px] md:text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                      <FiClock className="text-[#B85C38]" /> {blogPosts[0].date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
                    <span className="text-white/80 text-[9px] md:text-[10px] font-bold tracking-widest uppercase">
                      By {blogPosts[0].author}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 line-clamp-3">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-white/70 text-sm md:text-base lg:text-lg font-light leading-relaxed mb-8 max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute md:relative bottom-full md:bottom-auto pointer-events-none md:pointer-events-auto line-clamp-3">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="inline-flex items-center gap-3 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-white bg-white/20 backdrop-blur-md px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-[#B85C38] transition-all duration-300">
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
                    className="group cursor-pointer flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 items-center p-4 bg-white rounded-[24px] md:rounded-[40px] border border-[#1a1a1a]/5 hover:bg-[#fdfbf7] hover:border-[#2D4B37]/20 transition-all duration-500 shadow-sm"
                  >
                    <div className="w-full sm:w-2/5 lg:w-full xl:w-2/5 relative aspect-square md:aspect-[4/3] rounded-[16px] md:rounded-[30px] overflow-hidden shadow-sm">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="w-full sm:w-3/5 lg:w-full xl:w-3/5 flex flex-col justify-center px-2 pb-2 sm:px-0 sm:pb-0 sm:pr-4 lg:px-2 lg:pb-2 xl:px-0 xl:pb-0 xl:pr-4">
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
        <section className="py-16 md:py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none paper-texture" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mb-12 md:mb-16 text-center md:text-left">
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
              {displayPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  variants={fadeInUp}
                  className="group flex flex-col p-4 md:p-6 bg-[#fdfbf7] rounded-[24px] md:rounded-[40px] border border-[#1a1a1a]/5 hover:bg-[#2D4B37] transition-all duration-500 shadow-sm hover:shadow-2xl relative"
                >
                  <div className="w-full relative aspect-square rounded-[16px] md:rounded-[30px] overflow-hidden mb-8">
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
            
            <div className="mt-16 text-center">
              <button className="px-12 py-5 bg-[#2D4B37] text-white text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#B85C38] transition-all duration-500 rounded-full shadow-lg hover:shadow-xl">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-16 md:py-24 px-6 bg-[#fdfbf7]">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              {...fadeInUp}
              className="flex flex-col justify-center p-8 md:p-20 bg-[#2D4B37] text-white rounded-[30px] md:rounded-[40px] shadow-2xl relative overflow-hidden"
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
