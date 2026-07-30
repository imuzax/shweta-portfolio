"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
  { id: "banner-[#10]", title: "Event Graphic Banner 10", category: "Banners", image: "/images/portfolio/banners/B10.jpg" },

  // News Paper Ads
  { id: "news-1", title: "Publication News Ad 1", category: "News Paper", image: "/images/portfolio/news-paper/N1.png" },
  { id: "news-2", title: "Press Print Advertisement 2", category: "News Paper", image: "/images/portfolio/news-paper/N2.png" },
  { id: "news-3", title: "Daily News Print Ad 3", category: "News Paper", image: "/images/portfolio/news-paper/N3.png" },
  { id: "news-4", title: "Editorial Press Ad 4", category: "News Paper", image: "/images/portfolio/news-paper/N4.png" },
  { id: "news-5", title: "Brand News Announcement 5", category: "News Paper", image: "/images/portfolio/news-paper/N5.png" },
  { id: "news-6", title: "Promotional Press Ad 6", category: "News Paper", image: "/images/portfolio/news-paper/N6.png" }
];

const categories = ["All Projects", "Logo Design", "Expo Invite", "Standee Design", "Banners", "News Paper"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#fcf9f8] text-[#1b1c1c] font-sans antialiased min-h-screen pt-24 pb-24">
      
      {/* ─── Hero Section ─── */}
      <section className="py-12 px-6 md:px-16 max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#745a27] mb-4">
          My Work
        </h1>
        <p className="text-base md:text-lg text-[#5f5e59] max-w-2xl mx-auto font-light leading-relaxed">
          A curated selection of 47+ design projects showcasing elegance, strategy, and meticulous craftsmanship across print & digital collateral.
        </p>
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
                  ? "bg-[#c9a96e] text-[#543d0c] shadow-md border-transparent"
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
                className="group relative overflow-hidden rounded-xl border border-[#F0EDE6] bg-white aspect-[4/3] cursor-pointer shadow-[0_4px_20px_rgba(43,43,43,0.04)] hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Frosted Glass Overlay */}
                <div className="absolute inset-0 bg-[#c9a96e]/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#543d0c] mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#543d0c]">
                    <span>View Showcase</span>
                    <ExternalLink size={14} />
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

    </div>
  );
}
