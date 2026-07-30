"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ZoomIn, Sparkles, Award } from "lucide-react";

// Real Portfolio Data with actual paths to images copied from Shweta's original portfolio
const allProjects = [
  // Logo Design
  { id: "logo-1", title: "Logo Design Concept 1", category: "Logo Design", image: "/images/portfolio/Logos/L1.jpg" },
  { id: "logo-2", title: "Logo Design Concept 2", category: "Logo Design", image: "/images/portfolio/Logos/L2.jpg" },
  { id: "logo-3", title: "Logo Design Concept 3", category: "Logo Design", image: "/images/portfolio/Logos/L3.jpg" },
  { id: "logo-4", title: "Logo Design Concept 4", category: "Logo Design", image: "/images/portfolio/Logos/L4.jpg" },
  { id: "logo-5", title: "Logo Design Concept 5", category: "Logo Design", image: "/images/portfolio/Logos/L5.jpg" },
  { id: "logo-6", title: "Logo Design Concept 6", category: "Logo Design", image: "/images/portfolio/Logos/L6.jpg" },
  { id: "logo-7", title: "Logo Design Concept 7", category: "Logo Design", image: "/images/portfolio/Logos/L7.jpg" },
  { id: "logo-8", title: "Logo Design Concept 8", category: "Logo Design", image: "/images/portfolio/Logos/L8.jpg" },

  // Expo Invites
  { id: "expo-1", title: "Grand Expo Invitation 1", category: "Expo Invite", image: "/images/portfolio/expo-invite/expo1.jpg" },
  { id: "expo-2", title: "Summit & Event Invite 2", category: "Expo Invite", image: "/images/portfolio/expo-invite/expo2.jpg" },
  { id: "expo-3", title: "Luxury Event Invite 3", category: "Expo Invite", image: "/images/portfolio/expo-invite/expo3.jpg" },
  { id: "expo-4", title: "Business Expo Card 4", category: "Expo Invite", image: "/images/portfolio/expo-invite/expo4.jpg" },
  { id: "expo-5", title: "Exhibition Invitation 5", category: "Expo Invite", image: "/images/portfolio/expo-invite/expo5.jpg" },
  { id: "expo-6", title: "Corporate Event Invite 6", category: "Expo Invite", image: "/images/portfolio/expo-invite/expo6.jpg" },

  // Standee Designs
  { id: "standee-1", title: "Rollup Banner Standee 1", category: "Standee Design", image: "/images/portfolio/standee-designs/standee1.jpg" },
  { id: "standee-2", title: "Exhibition Standee 2", category: "Standee Design", image: "/images/portfolio/standee-designs/standee2.jpg" },
  { id: "standee-3", title: "Promotional Display 3", category: "Standee Design", image: "/images/portfolio/standee-designs/standee3.jpg" },
  { id: "standee-4", title: "Brand Launch Standee 4", category: "Standee Design", image: "/images/portfolio/standee-designs/standee4.jpg" },
  { id: "standee-5", title: "Corporate Standee 5", category: "Standee Design", image: "/images/portfolio/standee-designs/standee5.jpg" },
  { id: "standee-6", title: "Product Promo Standee 6", category: "Standee Design", image: "/images/portfolio/standee-designs/standee6.jpg" },
  { id: "standee-7", title: "Venue Event Standee 7", category: "Standee Design", image: "/images/portfolio/standee-designs/standee7.jpg" },
  { id: "standee-8", title: "Summit Standee 8", category: "Standee Design", image: "/images/portfolio/standee-designs/standee8.jpg" },

  // Banners & Flex
  { id: "banner-1", title: "Promotional Banner 1", category: "Banners", image: "/images/portfolio/banners/B1.jpg" },
  { id: "banner-2", title: "Campaign Flex Banner 2", category: "Banners", image: "/images/portfolio/banners/B2.jpg" },
  { id: "banner-3", title: "Outdoor Billboard Banner 3", category: "Banners", image: "/images/portfolio/banners/B5.jpg" },
  { id: "banner-4", title: "Event Flex Banner 4", category: "Banners", image: "/images/portfolio/banners/B6.jpg" },
  { id: "banner-5", title: "Digital Ad Banner 5", category: "Banners", image: "/images/portfolio/banners/B7.jpg" },
  { id: "banner-6", title: "Product Campaign Banner 6", category: "Banners", image: "/images/portfolio/banners/B8.jpg" },
  { id: "banner-7", title: "Commercial Flex 7", category: "Banners", image: "/images/portfolio/banners/B9.jpg" },
  { id: "banner-10", title: "Event Graphic Banner 10", category: "Banners", image: "/images/portfolio/banners/B10.jpg" },

  // News Paper Ads
  { id: "news-1", title: "Publication News Ad 1", category: "News Paper", image: "/images/portfolio/news-paper/N1.png" },
  { id: "news-2", title: "Press Print Advertisement 2", category: "News Paper", image: "/images/portfolio/news-paper/N2.png" },
  { id: "news-3", title: "Daily News Print Ad 3", category: "News Paper", image: "/images/portfolio/news-paper/N3.png" },
  { id: "news-4", title: "Editorial Press Ad 4", category: "News Paper", image: "/images/portfolio/news-paper/N4.png" },
  { id: "news-5", title: "Brand News Announcement 5", category: "News Paper", image: "/images/portfolio/news-paper/N5.png" },
  { id: "news-6", title: "Promotional Press Ad 6", category: "News Paper", image: "/images/portfolio/news-paper/N6.png" }
];

const categories = ["All Projects", "Logo Design", "Expo Invite", "Standee Design", "Banners", "News Paper"];

// Dummy brand logos for the advanced infinite marquee
const marqueeLogos = [
  { name: "Aura Luxury", subtitle: "Brand Identity" },
  { name: "Pari Enterprises", subtitle: "Logo & Expo" },
  { name: "Skyline Media", subtitle: "Outdoor Flex" },
  { name: "Maison Journal", subtitle: "Editorial" },
  { name: "Nexus Events", subtitle: "Standee Design" },
  { name: "Lumina Studio", subtitle: "Packaging" },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const filteredProjects = activeCategory === "All Projects"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#fcf9f8] text-[#1b1c1c] font-sans antialiased min-h-screen pt-24 pb-24">
      
      {/* ─── Hero Section ─── */}
      <section className="py-12 px-6 md:px-16 max-w-[1200px] mx-auto text-center">
        <span className="text-xs font-semibold text-[#745a27] uppercase tracking-[0.25em] mb-2 block">
          Creative Portfolio Showcase
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#745a27] mb-4">
          Selected Works
        </h1>
        <p className="text-base md:text-lg text-[#5f5e59] max-w-2xl mx-auto font-light leading-relaxed">
          A curated selection of 47+ design projects. Click on any card to view the high-resolution artwork in full-screen.
        </p>
      </section>

      {/* ─── Advanced Infinite Marquee Tag for Brand Logos ─── */}
      <section className="mb-16 py-6 bg-white border-y border-[#c9a96e]/20 overflow-hidden shadow-inner">
        <div className="text-center mb-3">
          <span className="text-[10px] font-bold text-[#745a27] uppercase tracking-[0.3em]">
            TRUSTED BRAND COLLABORATIONS & LOGOS
          </span>
        </div>
        <div className="relative overflow-hidden w-full">
          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#f6f3f2] border border-[#c9a96e]/20 text-[#1b1c1c] shadow-sm hover:border-[#c9a96e] transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#c9a96e] flex items-center justify-center text-[#543d0c] font-serif font-bold text-sm">
                  {logo.name[0]}
                </div>
                <div>
                  <p className="text-xs font-serif font-bold text-[#1b1c1c]">{logo.name}</p>
                  <p className="text-[10px] text-[#5f5e59]">{logo.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Filter Bar ─── */}
      <section className="mb-16 px-6 md:px-16 max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#c9a96e] text-[#543d0c] shadow-md border-transparent scale-105"
                  : "bg-white text-[#5f5e59] border border-[#e4e2e1] hover:border-[#c9a96e] hover:text-[#745a27]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Portfolio Grid ─── */}
      <section className="px-6 md:px-16 max-w-[1200px] mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-xl border border-[#F0EDE6] bg-white aspect-[4/3] cursor-pointer soft-shadow hover-gold-glow transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Professional Sleek Dark Luxury Gradient Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.95)] via-[rgba(27,28,28,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#e4c285] mb-1 flex items-center gap-1">
                    <Sparkles size={12} /> {project.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#e4c285] bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/10">
                    <ZoomIn size={14} />
                    <span>Click for Full View</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[#5f5e59]">
            No projects found in this category.
          </div>
        )}
      </section>

      {/* ─── FULL IMAGE LIGHTBOX MODAL POPUP ─── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#1b1c1c] text-white rounded-2xl overflow-hidden border border-[#c9a96e]/30 shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#252525]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c9a96e]">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-0.5">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c9a96e] hover:text-[#543d0c] flex items-center justify-center transition-colors text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="p-4 overflow-auto flex items-center justify-center bg-black/50 min-h-[50vh]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg border border-white/10"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#252525] border-t border-white/10 flex items-center justify-between text-xs text-[#5f5e59]">
                <span className="text-white/60">Shweta Jadhav Portfolio Artifact</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 rounded-full bg-[#c9a96e] text-[#543d0c] font-bold hover:bg-white transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
