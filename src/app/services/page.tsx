"use client";

import { motion } from "framer-motion";
import { PenTool, Image as ImageIcon, LayoutTemplate, Camera, Palette, MessageCircleQuestion } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Logo Design",
      desc: "Packages and page editors now use default model text. Crafting memorable marks that define your brand.",
      icon: <PenTool size={32} className="text-[var(--gold)]" />
    },
    {
      title: "Flat Design",
      desc: "Packages and page editors now use default model text. Clean and modern illustrations.",
      icon: <LayoutTemplate size={32} className="text-[var(--gold)]" />
    },
    {
      title: "Graphic Design",
      desc: "Packages and page editors now use default model text. Print materials and marketing assets.",
      icon: <ImageIcon size={32} className="text-[var(--gold)]" />
    },
    {
      title: "Photography",
      desc: "Packages and page editors now use default model text. Professional brand photography.",
      icon: <Camera size={32} className="text-[var(--gold)]" />
    },
    {
      title: "Branding Design",
      desc: "Packages and page editors now use default model text. Complete visual identity systems.",
      icon: <Palette size={32} className="text-[var(--gold)]" />
    },
    {
      title: "Online Support",
      desc: "Packages and page editors now use default model text. Ongoing design support for your business.",
      icon: <MessageCircleQuestion size={32} className="text-[var(--gold)]" />
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 bg-[var(--ivory)]">
      <div className="container mx-auto px-8 max-w-6xl">
        
        {/* ─── Header ─── */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="gold-line mx-auto mb-6" />
          <p className="section-label mb-4">My Expertise</p>
          <h1 className="text-4xl md:text-5xl text-[var(--charcoal)] mb-6">
            What I Offer You
          </h1>
          <p className="text-lg text-[var(--charcoal-soft)] leading-relaxed">
            Many clients are searching for a hard worker for their personal or business projects. I assure you that I am well-versed in these platforms and disciplines.
          </p>
        </div>

        {/* ─── Grid ─── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[rgba(201,169,110,0.1)] hover:border-[var(--gold)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-[var(--ivory-deep)] inline-block rounded-full group-hover:bg-[var(--gold)] transition-colors duration-300">
                {/* Icon wrapper to change color on hover */}
                <div className="group-hover:text-white [&>svg]:transition-colors [&>svg]:duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl mb-4 text-[var(--charcoal)]">{service.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
