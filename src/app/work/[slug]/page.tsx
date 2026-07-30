"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useParams } from "next/navigation";

// Dummy data for a single project case study
const projectData = {
  title: "Slack Brand Refresh",
  category: "Branding",
  client: "Slack Technologies",
  role: "Lead Brand Designer",
  duration: "4 Months",
  overview: "A comprehensive brand refresh aiming to modernize Slack's visual identity while preserving its core playful essence.",
  challenge: "The challenge was to consolidate a fragmented visual system into a unified, cohesive language that works across all global touchpoints.",
  solution: "We developed a refined color palette, introduced a bespoke geometric illustration style, and established clear typographic hierarchy.",
  heroImage: "/images/portfolio/slack.jpg",
  gallery: [
    "/images/portfolio/slack-1.jpg",
    "/images/portfolio/slack-2.jpg",
    "/images/portfolio/slack-3.jpg",
  ]
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug; // In a real app, fetch data based on slug

  return (
    <div className="min-h-screen bg-[var(--ivory)] pt-24 pb-24">
      
      {/* ─── Back Button ─── */}
      <div className="container mx-auto px-8 max-w-5xl mb-12">
        <Link 
          href="/work"
          className="inline-flex items-center gap-2 text-[var(--charcoal-soft)] hover:text-[var(--gold)] font-medium text-sm transition-colors"
        >
          <ArrowLeft size={16} /> Back to Work
        </Link>
      </div>

      {/* ─── Hero Section ─── */}
      <div className="container mx-auto px-8 max-w-5xl mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="section-label mb-3">{projectData.category}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] mb-8">
            {projectData.title}
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full aspect-[16/9] md:aspect-[21/9] bg-[var(--ivory-deep)] rounded-2xl overflow-hidden mb-16 border border-[rgba(201,169,110,0.1)] relative"
        >
           {/* Placeholder for hero image */}
           <div className="absolute inset-0 flex items-center justify-center text-[var(--text-muted)] text-sm uppercase tracking-widest font-semibold">
              Hero Image: {projectData.title}
           </div>
        </motion.div>

        {/* ─── Project Metadata ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[rgba(201,169,110,0.2)] mb-20">
           <div>
             <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Client</p>
             <p className="text-[var(--charcoal)] font-medium">{projectData.client}</p>
           </div>
           <div>
             <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Role</p>
             <p className="text-[var(--charcoal)] font-medium">{projectData.role}</p>
           </div>
           <div>
             <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Category</p>
             <p className="text-[var(--charcoal)] font-medium">{projectData.category}</p>
           </div>
           <div>
             <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Duration</p>
             <p className="text-[var(--charcoal)] font-medium">{projectData.duration}</p>
           </div>
        </div>

        {/* ─── Case Study Content ─── */}
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-8 space-y-12">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[var(--charcoal)]">Overview</h2>
              <p className="text-lg leading-relaxed text-[var(--charcoal-soft)]">{projectData.overview}</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[var(--charcoal)]">The Challenge</h2>
              <p className="text-lg leading-relaxed text-[var(--charcoal-soft)]">{projectData.challenge}</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[var(--charcoal)]">The Solution</h2>
              <p className="text-lg leading-relaxed text-[var(--charcoal-soft)]">{projectData.solution}</p>
            </div>
          </div>
          <div className="md:col-span-4">
             <div className="bg-white p-8 rounded-xl border border-[rgba(201,169,110,0.15)] sticky top-32">
               <h3 className="font-serif text-xl mb-4">View Live Project</h3>
               <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
                 See the final outcome of this design process in the real world.
               </p>
               <a href="#" className="btn-outline w-full justify-center">
                 Visit Site <ExternalLink size={16} />
               </a>
             </div>
          </div>
        </div>

        {/* ─── Gallery ─── */}
        <div className="mt-24 space-y-8">
          <h2 className="text-3xl font-serif mb-8 text-[var(--charcoal)] text-center">Process & Final Deliverables</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="aspect-[4/3] bg-[var(--ivory-deep)] rounded-xl border border-[rgba(201,169,110,0.1)] flex items-center justify-center text-[var(--text-muted)] text-sm">Gallery Image 1</div>
            <div className="aspect-[4/3] bg-[var(--ivory-deep)] rounded-xl border border-[rgba(201,169,110,0.1)] flex items-center justify-center text-[var(--text-muted)] text-sm">Gallery Image 2</div>
            <div className="sm:col-span-2 aspect-[21/9] bg-[var(--ivory-deep)] rounded-xl border border-[rgba(201,169,110,0.1)] flex items-center justify-center text-[var(--text-muted)] text-sm">Large Gallery Image</div>
          </div>
        </div>

      </div>
    </div>
  );
}