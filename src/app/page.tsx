"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ─── */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{
          background: "url('/images/hero-bg.jpg') center/cover no-repeat", // We will add a placeholder later
          backgroundColor: "var(--ivory)",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(252,250,247,0.7)] backdrop-blur-sm" />
        
        <div className="container mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="gold-line mb-6" />
            <p className="section-label mb-4 tracking-[0.3em]">
              Welcome to My Portfolio
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-[var(--charcoal)]">
              I'm Shweta Jadhav. <br />
              <span className="text-[var(--gold)]">Visual Storyteller.</span>
            </h1>
            <p className="text-lg text-[var(--charcoal-soft)] mb-10 max-w-lg leading-relaxed">
              I'm a professional Graphic Designer since 2021. I specialize in progressive brand development that helps companies achieve their goals.
            </p>
            <div className="flex gap-4">
              <Link href="/work" className="btn-primary">
                View My Work
              </Link>
              <Link href="/about" className="btn-outline">
                About Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            {/* Glass Box around the image */}
            <div className="glass p-4 rounded-xl relative z-10 w-[80%] ml-auto">
              {/* Note: In production we'll replace this with the actual image path or Next/Image */}
              <div 
                className="w-full aspect-[4/5] rounded-lg overflow-hidden bg-[var(--ivory-deep)] border border-[var(--gold-light)]"
                style={{ backgroundImage: "url('/images/shweta-about.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>
            
            {/* Decorative background element */}
            <div className="absolute top-10 right-10 w-full h-full bg-[var(--gold-light)] rounded-xl opacity-20 -z-0" />
          </motion.div>
        </div>
      </section>

      {/* ─── Services Snippet ─── */}
      <section className="py-24 bg-[var(--charcoal)] text-[var(--ivory)]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3 text-[var(--gold)]">Expertise</p>
            <h2 className="text-4xl">What I Offer You</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Logo Design", desc: "Crafting memorable marks that define your brand." },
              { title: "Branding Design", desc: "Complete visual identities and design systems." },
              { title: "Graphic Design", desc: "Print materials, packaging, and marketing assets." },
              { title: "Flat Design", desc: "Modern, minimalist illustrations and vectors." },
              { title: "UI/UX Design", desc: "Intuitive and beautiful digital experiences." },
              { title: "Photography", desc: "Capturing authentic moments and brand imagery." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-dark p-8 rounded-lg hover:border-[var(--gold)] transition-colors duration-300"
              >
                <h3 className="text-xl mb-3 text-[var(--gold-light)]">{service.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link href="/services" className="inline-flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold-light)] uppercase tracking-wider text-sm font-semibold">
                Explore All Services <ArrowRight size={16} />
             </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-24 bg-[var(--ivory-deep)]">
        <div className="container mx-auto px-8 text-center max-w-3xl">
          <div className="gold-line mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl mb-6">Ready to start a project?</h2>
          <p className="text-lg text-[var(--charcoal-soft)] mb-10">
            Let's create something beautiful together. I'm currently available for freelance projects and full-time roles.
          </p>
          <Link href="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
