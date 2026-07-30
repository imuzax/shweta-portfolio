"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

// Dummy data based on the old portfolio structure (Fallback)
const fallbackProjects = [
  { "id": "logo-1", "title": "Logo Design 1", "category": "Logo Design", "heroImage": "/images/portfolio/Logos/L1.jpg" },
  { "id": "logo-2", "title": "Logo Design 2", "category": "Logo Design", "heroImage": "/images/portfolio/Logos/L2.jpg" },
  { "id": "logo-3", "title": "Logo Design 3", "category": "Logo Design", "heroImage": "/images/portfolio/Logos/L3.jpg" },
  { "id": "logo-4", "title": "Logo Design 4", "category": "Logo Design", "heroImage": "/images/portfolio/Logos/L4.jpg" },
  { "id": "logo-5", "title": "Logo Design 5", "category": "Logo Design", "heroImage": "/images/portfolio/Logos/L5.jpg" },
  { "id": "logo-6", "title": "Logo Design 6", "category": "Logo Design", "heroImage": "/images/portfolio/Logos/L6.jpg" },
  { "id": "expo-1", "title": "Expo Invite 1", "category": "Expo Invite", "heroImage": "/images/portfolio/expo-invite/expo1.jpg" },
  { "id": "expo-2", "title": "Expo Invite 2", "category": "Expo Invite", "heroImage": "/images/portfolio/expo-invite/expo2.jpg" },
  { "id": "expo-3", "title": "Expo Invite 3", "category": "Expo Invite", "heroImage": "/images/portfolio/expo-invite/expo3.jpg" },
  { "id": "expo-4", "title": "Expo Invite 4", "category": "Expo Invite", "heroImage": "/images/portfolio/expo-invite/expo4.jpg" },
  { "id": "expo-5", "title": "Expo Invite 5", "category": "Expo Invite", "heroImage": "/images/portfolio/expo-invite/expo5.jpg" },
  { "id": "expo-6", "title": "Expo Invite 6", "category": "Expo Invite", "heroImage": "/images/portfolio/expo-invite/expo6.jpg" },
  { "id": "standee-1", "title": "Standee Design 1", "category": "Standee Design", "heroImage": "/images/portfolio/standee-designs/standee1.jpg" },
  { "id": "standee-2", "title": "Standee Design 2", "category": "Standee Design", "heroImage": "/images/portfolio/standee-designs/standee2.jpg" },
  { "id": "standee-3", "title": "Standee Design 3", "category": "Standee Design", "heroImage": "/images/portfolio/standee-designs/standee3.jpg" },
  { "id": "standee-4", "title": "Standee Design 4", "category": "Standee Design", "heroImage": "/images/portfolio/standee-designs/standee4.jpg" },
  { "id": "standee-5", "title": "Standee Design 5", "category": "Standee Design", "heroImage": "/images/portfolio/standee-designs/standee5.jpg" },
  { "id": "standee-6", "title": "Standee Design 6", "category": "Standee Design", "heroImage": "/images/portfolio/standee-designs/standee6.jpg" },
  { "id": "standee-7", "title": "Standee Design 7", "category": "Standee Design", "heroImage": "/images/portfolio/standee-designs/standee7.jpg" },
  { "id": "standee-8", "title": "Standee Design 8", "category": "Standee Design", "heroImage": "/images/portfolio/standee-designs/standee8.jpg" },
  { "id": "standee-9", "title": "Standee Design 9", "category": "Standee Design", "heroImage": "/images/portfolio/standee-designs/standee9.jpg" },
  { "id": "banner-1", "title": "Banner 1", "category": "Banners", "heroImage": "/images/portfolio/banners/B2.jpg" },
  { "id": "banner-2", "title": "Banner 2", "category": "Banners", "heroImage": "/images/portfolio/banners/B5.jpg" },
  { "id": "banner-3", "title": "Banner 3", "category": "Banners", "heroImage": "/images/portfolio/banners/B6.jpg" },
  { "id": "banner-4", "title": "Banner 4", "category": "Banners", "heroImage": "/images/portfolio/banners/B7.jpg" },
  { "id": "banner-5", "title": "Banner 5", "category": "Banners", "heroImage": "/images/portfolio/banners/B8.jpg" },
  { "id": "banner-6", "title": "Banner 6", "category": "Banners", "heroImage": "/images/portfolio/banners/B22.jpg" },
  { "id": "banner-7", "title": "Banner 7", "category": "Banners", "heroImage": "/images/portfolio/banners/B9.jpg" },
  { "id": "banner-8", "title": "Banner 8", "category": "Banners", "heroImage": "/images/portfolio/banners/B10.jpg" },
  { "id": "banner-9", "title": "Banner 9", "category": "Banners", "heroImage": "/images/portfolio/banners/B11.jpg" },
  { "id": "banner-10", "title": "Banner 10", "category": "Banners", "heroImage": "/images/portfolio/banners/B12.jpg" },
  { "id": "banner-11", "title": "Banner 11", "category": "Banners", "heroImage": "/images/portfolio/banners/B17.jpg" },
  { "id": "banner-12", "title": "Banner 12", "category": "Banners", "heroImage": "/images/portfolio/banners/B13.jpg" },
  { "id": "banner-13", "title": "Banner 13", "category": "Banners", "heroImage": "/images/portfolio/banners/B14.jpg" },
  { "id": "banner-14", "title": "Banner 14", "category": "Banners", "heroImage": "/images/portfolio/banners/B15.jpg" },
  { "id": "banner-15", "title": "Banner 15", "category": "Banners", "heroImage": "/images/portfolio/banners/B16.jpg" },
  { "id": "banner-16", "title": "Banner 16", "category": "Banners", "heroImage": "/images/portfolio/banners/B18.jpg" },
  { "id": "banner-17", "title": "Banner 17", "category": "Banners", "heroImage": "/images/portfolio/banners/B19.jpg" },
  { "id": "banner-18", "title": "Banner 18", "category": "Banners", "heroImage": "/images/portfolio/banners/B20.jpg" },
  { "id": "banner-19", "title": "Banner 19", "category": "Banners", "heroImage": "/images/portfolio/banners/B21.jpg" },
  { "id": "banner-20", "title": "Banner 20", "category": "Banners", "heroImage": "/images/portfolio/banners/B4.jpg" },
  { "id": "news-1", "title": "News Paper 1", "category": "News Paper", "heroImage": "/images/portfolio/news-paper/N1.png" },
  { "id": "news-2", "title": "News Paper 2", "category": "News Paper", "heroImage": "/images/portfolio/news-paper/N2.png" },
  { "id": "news-3", "title": "News Paper 3", "category": "News Paper", "heroImage": "/images/portfolio/news-paper/N3.png" },
  { "id": "news-4", "title": "News Paper 4", "category": "News Paper", "heroImage": "/images/portfolio/news-paper/N4.png" },
  { "id": "news-5", "title": "News Paper 5", "category": "News Paper", "heroImage": "/images/portfolio/news-paper/N5.png" },
  { "id": "news-6", "title": "News Paper 6", "category": "News Paper", "heroImage": "/images/portfolio/news-paper/N6.png" }
];

const categories = ["All", "Logo Design", "Expo Invite", "Standee Design", "Banners", "News Paper"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState<any[]>(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data && res.data.length > 0) {
          setProjects(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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
