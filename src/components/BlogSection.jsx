import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import blog images
import sustainableArch from '../assets/blog/sustainable_arch.png';
import constructionTips from '../assets/blog/construction_tips.png';
import solarIntegration from '../assets/blog/solar_integration.png';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture in Tamil Nadu",
    category: "Sustainability",
    date: "April 15, 2024",
    image: sustainableArch,
    excerpt: "Exploring how traditional techniques are meeting modern green building standards to create climate-responsive homes.",
    link: "/blog/sustainable-architecture"
  },
  {
    id: 2,
    title: "Top 5 Things to Consider Before Starting Your Home Construction",
    category: "Guides",
    date: "April 08, 2024",
    image: constructionTips,
    excerpt: "A comprehensive checklist for homeowners to ensure a smooth transition from blueprint to groundbreaking.",
    link: "/blog/construction-tips"
  },
  {
    id: 3,
    title: "How Solar Integration is Changing Modern Residential Design",
    category: "Innovation",
    date: "March 28, 2024",
    image: solarIntegration,
    excerpt: "Beyond panels: How we integrate renewable energy into the very fabric of architectural aesthetics.",
    link: "/blog/solar-integration"
  }
];

const BlogSection = () => {
  return (
    <section id="insights" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-[1px] bg-secondary" />
              <span className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase">Industry Insights</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-dark font-serif leading-tight"
            >
              Recent <span className="italic text-primary">Perspectives</span> & Expertise
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/blog" className="group flex items-center gap-4 text-dark hover:text-secondary transition-colors py-2">
              <span className="text-[11px] font-black tracking-[0.2em] uppercase">View All Insights</span>
              <div className="w-10 h-10 rounded-full border border-dark/10 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/5 transition-all">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1M13 1H1M13 1V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden mb-8 bg-dark/5">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-dark text-[9px] font-black tracking-[0.2em] uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-dark/30 text-[10px] font-bold tracking-widest uppercase">{post.date}</span>
                  <span className="w-4 h-[1px] bg-dark/10" />
                  <span className="text-dark/30 text-[10px] font-bold tracking-widest uppercase">Admin</span>
                </div>

                <h3 className="text-xl font-bold text-dark group-hover:text-secondary transition-colors duration-300 leading-tight mb-4 font-serif">
                  {post.title}
                </h3>

                <p className="text-dark/50 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <Link 
                    to={post.link}
                    className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-dark/40 group-hover:text-secondary transition-colors"
                  >
                    Read Insight
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transform transition-transform group-hover:translate-x-1">
                      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
