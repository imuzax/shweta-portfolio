"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

// Dummy data based on the old portfolio structure
const projects = [
  { id: 1, title: "Slack Brand Refresh", category: "Branding", image: "/images/portfolio/slack.jpg" },
  { id: 2, title: "Minimalist UI Kit", category: "UI/UX", image: "/images/portfolio/ui-kit.jpg" },
  { id: 3, title: "Abstract Vectors", category: "Illustration", image: "/images/portfolio/flat1.jpg" },
  { id: 4, title: "Coffee Packaging", category: "Packaging", image: "/images/portfolio/pack1.jpg" },
  { id: 5, title: "Tech Startup Logo", category: "Logo", image: "/images/portfolio/logo1.jpg" },
  { id: 6, title: "Social Media Campaign", category: "Social Media", image: "/images/portfolio/social1.jpg" },
  { id: 7, title: "Fashion Lookbook", category: "Print", image: "/images/portfolio/print1.jpg" },
  { id: 8, title: "Organic Skincare", category: "Branding", image: "/images/portfolio/brand2.jpg" },
];

const categories = ["All", "Branding", "UI/UX", "Illustration", "Logo", "Packaging", "Print", "Social Media"];

export default function Work() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-24 bg-[var(--ivory)]">
      <div className="container mx-auto px-8 max-w-7xl">
        
        {/* ─── Header ─── */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="gold-line mx-auto mb-6" />
          <p className="section-label mb-4">Selected Works</p>
          <h1 className="text-4xl md:text-5xl text-[var(--charcoal)] mb-6">
            Portfolio
          </h1>
          <p className="text-lg text-[var(--charcoal-soft)]">
            A curated selection of my latest design projects across various disciplines.
          </p>
        </div>

        {/* ─── Filter ─── */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? "bg-[var(--gold)] text-white shadow-lg shadow-[rgba(201,169,110,0.3)]" 
                  : "bg-white text-[var(--charcoal-soft)] hover:text-[var(--gold)] border border-[rgba(201,169,110,0.2)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ─── Grid ─── */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                {/* We link to a dynamic route like /work/1 */}
                <Link href={`/work/${project.id}`} className="block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[var(--ivory-deep)] border border-[rgba(201,169,110,0.1)]">
                    {/* Placeholder Background for now */}
                    <div className="absolute inset-0 bg-[var(--charcoal)] opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[rgba(201,169,110,0.85)] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center translate-y-4 group-hover:translate-y-0">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--gold-dark)] shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--charcoal)] group-hover:text-[var(--gold)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm tracking-wide mt-1">
                    {project.category}
                  </p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[var(--text-muted)]">
            No projects found in this category.
          </div>
        )}

      </div>
    </div>
  );
}