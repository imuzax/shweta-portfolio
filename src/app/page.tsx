"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Award, Briefcase, Clock } from "lucide-react";

export default function Home() {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
      const dateStr = now.toLocaleDateString('en-US', options);
      const timeStr = now.toLocaleTimeString('en-US');
      setDateTime(`${dateStr} • ${timeStr}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--ivory)] overflow-hidden">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[92vh] flex items-center pt-16 pb-12">
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Live Date Time Widget */}
            {dateTime && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ivory-deep)] border border-[rgba(201,169,110,0.3)] mb-6 text-xs font-semibold text-[var(--gold-dark)] tracking-wider uppercase shadow-sm"
              >
                <Clock size={14} className="text-[var(--gold)] animate-pulse" />
                <span>{dateTime}</span>
              </motion.div>
            )}

            <div className="gold-line mb-6" />

            <p className="section-label mb-3 text-xs md:text-sm tracking-[0.25em] text-[var(--gold)] font-medium uppercase">
              Welcome to My Official Portfolio
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] mb-6 text-[var(--charcoal)]">
              Shweta Jadhav <br />
              <span className="italic font-normal text-[var(--gold)]">Graphic Designer</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-serif text-[var(--charcoal-mid)] mb-6 font-medium leading-snug max-w-xl">
              "Design makes anything when you call myself"
            </h2>

            <p className="text-base md:text-lg text-[var(--charcoal-soft)] mb-10 max-w-xl leading-relaxed font-light">
              Professional <strong className="font-semibold text-[var(--charcoal)]">Graphic Designer since 2021</strong>. 
              Specializing in progressive brand identities, logo design, standee graphics, banners, and comprehensive visual storytelling for ambitious brands.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/work" className="btn-primary shadow-lg shadow-[rgba(201,169,110,0.2)]">
                Explore Portfolio
              </Link>
              <Link href="/about" className="btn-outline">
                About Me
              </Link>
            </div>

            {/* Stats badges */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[rgba(201,169,110,0.2)] w-full max-w-lg">
              <div>
                <p className="text-2xl md:text-3xl font-serif font-bold text-[var(--gold-dark)]">47+</p>
                <p className="text-xs text-[var(--text-muted)] tracking-wider uppercase mt-1">Design Projects</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-serif font-bold text-[var(--gold-dark)]">2021</p>
                <p className="text-xs text-[var(--text-muted)] tracking-wider uppercase mt-1">Designing Since</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-serif font-bold text-[var(--gold-dark)]">100%</p>
                <p className="text-xs text-[var(--text-muted)] tracking-wider uppercase mt-1">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="absolute -inset-4 rounded-2xl border-2 border-[var(--gold)] opacity-30 transform translate-x-3 translate-y-3 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[rgba(201,169,110,0.3)] group">
                <img
                  src="/images/home/shweta-about-image.png"
                  alt="Shweta Jadhav - Graphic Designer"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[rgba(255,255,255,0.92)] backdrop-blur-md p-4 rounded-xl border border-[rgba(201,169,110,0.3)] shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold-light)] flex items-center justify-center text-[var(--gold-dark)]">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--charcoal)] uppercase tracking-wider">Visual Artist</p>
                    <p className="text-xs text-[var(--text-muted)]">Based in Pune, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── Featured Services Snippet ─── */}
      <section className="py-24 bg-[var(--charcoal)] text-[var(--ivory)] relative">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="section-label mb-3 text-[var(--gold)] uppercase tracking-[0.2em] text-xs font-semibold">Specializations</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--ivory)] mb-4">What I Craft For Brands</h2>
            <p className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed">
              Transforming creative ideas into high-impact graphic design collateral that elevates businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Logo Design", desc: "Creating unique, memorable brand marks tailored to your brand identity." },
              { title: "Expo Invites", desc: "Elegant & creative invitation graphics for expos, summits, and grand events." },
              { title: "Standee Design", desc: "High-visibility promotional standees designed to capture attention in physical spaces." },
              { title: "Banners & Flex", desc: "Impactful outdoor and indoor advertising banners for promotional campaigns." },
              { title: "News Paper Ads", desc: "Print-ready, precision-aligned newspaper advertisement graphics." },
              { title: "Branding & Flat Design", desc: "Modern flat vector art and complete visual guidelines." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(201,169,110,0.15)] p-8 rounded-xl hover:border-[var(--gold)] hover:bg-[rgba(201,169,110,0.05)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[rgba(201,169,110,0.1)] flex items-center justify-center text-[var(--gold)] mb-6 group-hover:bg-[var(--gold)] group-hover:text-[var(--charcoal)] transition-colors duration-300">
                  <Briefcase size={22} />
                </div>
                <h3 className="text-xl font-serif mb-3 text-[var(--gold-light)]">{service.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/work" className="inline-flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold-light)] uppercase tracking-wider text-xs font-semibold border-b border-[var(--gold)] pb-1 transition-all">
              View All 47 Projects <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-24 bg-[var(--ivory-deep)] relative">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--charcoal)] mb-6">Let's Create Something Extraordinary</h2>
          <p className="text-base md:text-lg text-[var(--charcoal-soft)] mb-10 leading-relaxed font-light">
            Have a project in mind or looking for a professional graphic designer? I am available for freelance design contracts and full-time collaborations.
          </p>
          <Link href="/contact" className="btn-primary shadow-xl shadow-[rgba(201,169,110,0.25)]">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
