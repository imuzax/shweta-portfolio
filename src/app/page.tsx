"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, MapPin, Mail, Link as LinkIcon, Diamond, Layout, Palette, Megaphone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#fcf9f8] text-[#1b1c1c] font-sans antialiased selection:bg-[#c9a96e] selection:text-[#543d0c]">
      
      {/* ─── Hero Section ─── */}
      <section className="min-h-[85vh] flex items-center px-6 md:px-16 max-w-[1200px] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1b1c1c] tracking-tight">
              Shweta Jadhav
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif text-[#745a27] font-semibold">
              Graphic Designer & Visual Storyteller
            </h2>
            <p className="text-lg text-[#5f5e59] max-w-xl font-normal leading-relaxed">
              Crafting timeless brand identities, logo design, promotional standees, expo invites, and compelling visual narratives for luxury and commercial brands since 2021.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/work" className="px-8 py-3 rounded-full bg-[#c9a96e] text-[#543d0c] font-semibold text-sm hover:bg-[#745a27] hover:text-white transition-colors">
                View My Work
              </Link>
              <Link href="/about" className="px-8 py-3 rounded-full border border-[#c9a96e] text-[#745a27] font-semibold text-sm hover:bg-[#c9a96e]/10 transition-colors">
                About Me
              </Link>
            </div>
          </div>

          {/* ─── LUXURY 3D GRAPHIC DESIGNER STUDIO WATCH (Live Real-Time Clock & Parallax) ─── */}
          <GraphicDesigner3DWatch />
        </div>
      </section>

      {/* ─── About Snippet ─── */}
      <section className="px-6 md:px-16 max-w-[1200px] mx-auto py-16" id="about">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-[#745a27] uppercase tracking-widest">
            About Me
          </span>
          
          {/* Restore Shweta's Portrait Photo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#c9a96e] p-1 mt-2 mb-2 shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
            <img
              src="/images/home/shweta-about-image.png"
              alt="Shweta Jadhav - Graphic Designer"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <p className="text-lg text-[#5f5e59] leading-relaxed font-light">
            With years of professional design experience navigating art and strategy, I specialize in translating brand essence into visual masterpieces. Based in Pune, India, my design approach blends modern minimalism with refined details, ensuring every project—from logo branding to large-scale expo graphics—performs flawlessly.
          </p>
          <div className="w-full pt-12 border-t border-[#e4e2e1] mt-8 overflow-hidden">
            <p className="text-xs text-[#745a27] mb-6 uppercase tracking-[0.25em] font-semibold">
              FEATURED CLIENT LOGOS & BRAND COLLABORATIONS
            </p>
            {/* Advanced Infinite Marquee Tag for Dummy Brand Logos */}
            <div className="relative overflow-hidden w-full py-4">
              <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
                {[
                  { name: "Aura Luxury", cat: "Logo Design" },
                  { name: "Pari Enterprises", cat: "Expo Invite" },
                  { name: "Skyline Media", cat: "Standee Banner" },
                  { name: "Maison Journal", cat: "Campaign Banner" },
                  { name: "Nexus Events", cat: "News Paper Ad" },
                  { name: "Lumina Studio", cat: "Branding" },
                  { name: "Aura Luxury", cat: "Logo Design" },
                  { name: "Pari Enterprises", cat: "Expo Invite" },
                  { name: "Skyline Media", cat: "Standee Banner" },
                  { name: "Maison Journal", cat: "Campaign Banner" },
                  { name: "Nexus Events", cat: "News Paper Ad" },
                  { name: "Lumina Studio", cat: "Branding" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-[#c9a96e]/30 shadow-sm hover:border-[#745a27] transition-all cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-[#c9a96e] flex items-center justify-center text-[#543d0c] font-serif font-bold text-xs">
                      {item.name[0]}
                    </div>
                    <div className="text-left">
                      <span className="block text-xs font-serif font-bold text-[#1b1c1c]">{item.name}</span>
                      <span className="block text-[10px] text-[#5f5e59]">{item.cat}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="px-6 md:px-16 max-w-[1200px] mx-auto py-16" id="work">
        <div className="mb-12">
          <span className="text-xs font-semibold text-[#745a27] uppercase tracking-widest">
            Selected Portfolio Works
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1b1c1c] mt-2">
            Curated Design Showcase
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <Link href="/work" className="group cursor-pointer bg-white border border-[#F0EDE6] rounded-xl p-3 soft-shadow hover-gold-glow transition-all duration-300">
            <div className="aspect-[4/3] bg-[#e4e2e1] rounded-lg overflow-hidden relative">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="/images/portfolio/2019-01_BrandRefresh_slack-brand-refresh_header-1.png"
                alt="Brand Identity & Refresh"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.95)] via-[rgba(27,28,28,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-colors duration-300" />
            </div>
            <div className="mt-4 px-2">
              <h4 className="text-2xl font-serif font-bold text-[#1b1c1c]">Brand Identity & Refresh</h4>
              <p className="text-sm text-[#5f5e59] mt-1">Branding & Visual System</p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/work" className="group cursor-pointer bg-white border border-[#F0EDE6] rounded-xl p-3 soft-shadow hover-gold-glow transition-all duration-300 lg:translate-y-8">
            <div className="aspect-[4/3] bg-[#e4e2e1] rounded-lg overflow-hidden relative">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="/images/portfolio/Logos/L1.jpg"
                alt="Premium Logo Identity"
              />
            </div>
            <div className="mt-4 px-2">
              <h4 className="text-2xl font-serif font-bold text-[#1b1c1c]">Custom Logo Identity</h4>
              <p className="text-sm text-[#5f5e59] mt-1">Logo Design</p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/work" className="group cursor-pointer bg-white border border-[#F0EDE6] rounded-xl p-3 soft-shadow hover-gold-glow transition-all duration-300">
            <div className="aspect-[4/3] bg-[#e4e2e1] rounded-lg overflow-hidden relative">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="/images/portfolio/expo-invite/expo1.jpg"
                alt="Expo & Event Invitation"
              />
            </div>
            <div className="mt-4 px-2">
              <h4 className="text-2xl font-serif font-bold text-[#1b1c1c]">Expo & Event Invitation</h4>
              <p className="text-sm text-[#5f5e59] mt-1">Expo Invite Design</p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/work" className="group cursor-pointer bg-white border border-[#F0EDE6] rounded-xl p-3 soft-shadow hover-gold-glow transition-all duration-300">
            <div className="aspect-[4/3] bg-[#e4e2e1] rounded-lg overflow-hidden relative">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="/images/portfolio/standee-designs/standee1.jpg"
                alt="Promotional Standee Banner"
              />
            </div>
            <div className="mt-4 px-2">
              <h4 className="text-2xl font-serif font-bold text-[#1b1c1c]">Promotional Rollup Standee</h4>
              <p className="text-sm text-[#5f5e59] mt-1">Standee Design</p>
            </div>
          </Link>

          {/* Card 5 */}
          <Link href="/work" className="group cursor-pointer bg-white border border-[#F0EDE6] rounded-xl p-3 soft-shadow hover-gold-glow transition-all duration-300 lg:translate-y-8">
            <div className="aspect-[4/3] bg-[#e4e2e1] rounded-lg overflow-hidden relative">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="/images/portfolio/banners/B2.jpg"
                alt="Flex & Campaign Banners"
              />
            </div>
            <div className="mt-4 px-2">
              <h4 className="text-2xl font-serif font-bold text-[#1b1c1c]">Campaign Banners & Flex</h4>
              <p className="text-sm text-[#5f5e59] mt-1">Banners Design</p>
            </div>
          </Link>

          {/* Card 6 */}
          <Link href="/work" className="group cursor-pointer bg-white border border-[#F0EDE6] rounded-xl p-3 soft-shadow hover-gold-glow transition-all duration-300">
            <div className="aspect-[4/3] bg-[#e4e2e1] rounded-lg overflow-hidden relative">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="/images/portfolio/news-paper/N1.png"
                alt="News Paper Print Ad"
              />
            </div>
            <div className="mt-4 px-2">
              <h4 className="text-2xl font-serif font-bold text-[#1b1c1c]">News Paper Print Ad</h4>
              <p className="text-sm text-[#5f5e59] mt-1">News Paper Ad Design</p>
            </div>
          </Link>

        </div>

        <div className="text-center mt-16">
          <Link href="/work" className="px-8 py-3 rounded-full border border-[#c9a96e] text-[#745a27] font-semibold text-sm hover:bg-[#c9a96e]/10 transition-colors inline-block">
            View All 47 Projects
          </Link>
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section className="px-6 md:px-16 max-w-[1200px] mx-auto py-16" id="services">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-[#745a27] uppercase tracking-widest">
            Expertise
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white hover:soft-shadow transition-all duration-300 border border-transparent hover:border-[#F0EDE6]">
            <Diamond className="w-10 h-10 text-[#c9a96e] mb-4 stroke-1" />
            <h4 className="text-xl font-serif font-semibold text-[#1b1c1c] mb-2">Brand Identity</h4>
            <p className="text-sm text-[#5f5e59]">Crafting cohesive visual systems that tell your unique story.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white hover:soft-shadow transition-all duration-300 border border-transparent hover:border-[#F0EDE6]">
            <Layout className="w-10 h-10 text-[#c9a96e] mb-4 stroke-1" />
            <h4 className="text-xl font-serif font-semibold text-[#1b1c1c] mb-2">UI/UX Design</h4>
            <p className="text-sm text-[#5f5e59]">Designing intuitive and beautiful digital experiences.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white hover:soft-shadow transition-all duration-300 border border-transparent hover:border-[#F0EDE6]">
            <Palette className="w-10 h-10 text-[#c9a96e] mb-4 stroke-1" />
            <h4 className="text-xl font-serif font-semibold text-[#1b1c1c] mb-2">Illustration</h4>
            <p className="text-sm text-[#5f5e59]">Bespoke artwork to add character and depth to your brand.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white hover:soft-shadow transition-all duration-300 border border-transparent hover:border-[#F0EDE6]">
            <Megaphone className="w-10 h-10 text-[#c9a96e] mb-4 stroke-1" />
            <h4 className="text-xl font-serif font-semibold text-[#1b1c1c] mb-2">Social Media</h4>
            <p className="text-sm text-[#5f5e59]">Curated visual content for a commanding online presence.</p>
          </div>

        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="bg-[#f6f3f2] py-20 px-6 md:px-16 my-16">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center gap-1 mb-6 text-[#c9a96e]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#c9a96e" />
            ))}
          </div>
          <h4 className="text-2xl md:text-3xl font-serif italic text-[#1b1c1c] mb-8 leading-snug">
            "Shweta has an incredible eye for detail. She didn't just design a logo; she captured the very soul of our boutique. The level of elegance and professionalism she brought to the table is unmatched."
          </h4>
          <p className="text-xs font-semibold text-[#745a27] uppercase tracking-wider">
            Elena R., Founder of Aura Skincare
          </p>
        </div>
      </section>

      {/* ─── Contact CTA ─── */}
      <section className="px-6 md:px-16 max-w-[1200px] mx-auto py-16" id="contact">
        <div className="glass-panel rounded-3xl p-8 md:p-16 soft-shadow border border-[#c9a96e]/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1">
              <form className="space-y-6">
                <div>
                  <input
                    className="w-full bg-transparent border-0 border-b border-[#F0EDE6] text-[#1b1c1c] py-3 px-0 focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#5f5e59]/60 text-sm"
                    placeholder="Your Name"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="w-full bg-transparent border-0 border-b border-[#F0EDE6] text-[#1b1c1c] py-3 px-0 focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#5f5e59]/60 text-sm"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <div>
                  <textarea
                    className="w-full bg-transparent border-0 border-b border-[#F0EDE6] text-[#1b1c1c] py-3 px-0 focus:outline-none focus:border-[#c9a96e] transition-colors resize-none placeholder:text-[#5f5e59]/60 text-sm"
                    placeholder="Tell me about your project..."
                    rows={3}
                  />
                </div>
                <button
                  className="w-full md:w-auto px-8 py-3 rounded-full bg-[#1b1c1c] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#745a27] transition-colors"
                  type="button"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-serif font-bold text-[#1b1c1c]">
                Let's create something beautiful together.
              </h3>
              <p className="text-sm text-[#5f5e59]">
                Currently accepting new projects for Q4 2024. Reach out to discuss how we can elevate your brand's visual narrative.
              </p>
              <div className="flex items-start gap-4 pt-4 border-t border-[#e4e2e1]">
                <MapPin className="text-[#c9a96e] mt-1" size={20} />
                <div>
                  <p className="text-xs font-semibold uppercase text-[#1b1c1c]">Studio Location</p>
                  <p className="text-sm text-[#5f5e59]">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

// ─── CASCADING WATERFALL DIGITAL CLOCK HERO (Digits drop in from top, exit out bottom) ───
function GraphicDesigner3DWatch() {
  const [time, setTime] = useState<Date | null>(null);

  // Real-time ticking clock update
  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hoursStr = time
    ? time.toLocaleTimeString("en-US", { hour: "2-digit", hour12: true }).split(":")[0]
    : "12";

  const minutesStr = time
    ? String(time.getMinutes()).padStart(2, "0")
    : "00";

  const secondsStr = time
    ? String(time.getSeconds()).padStart(2, "0")
    : "00";

  const amPmStr = time
    ? time.toLocaleTimeString("en-US", { hour12: true }).slice(-2)
    : "AM";

  const dateStr = time
    ? time.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase()
    : "31 JUL 2026";

  return (
    <div className="relative h-[440px] sm:h-[480px] md:h-[520px] w-full mt-8 lg:mt-0 flex items-center justify-center">
      
      {/* Outer Soft Ambient Gold Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a96e]/20 via-transparent to-[#745a27]/10 rounded-3xl blur-3xl pointer-events-none" />

      {/* Main Glassmorphism Waterfall Clock Card */}
      <div className="glass-panel soft-shadow relative w-full max-w-md p-6 sm:p-8 rounded-3xl border border-[#c9a96e]/30 bg-white/90 backdrop-blur-xl flex flex-col items-center justify-between shadow-2xl space-y-6">
        
        {/* Top Live Studio Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6f3f2] border border-[#e4e2e1]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#745a27] uppercase">
            LIVE STUDIO TIME ENGINE
          </span>
        </div>

        {/* CASCADING WATERFALL DIGITAL CLOCK DISPLAY */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 text-3xl sm:text-4xl md:text-5xl font-mono font-extrabold text-[#1b1c1c] my-2 select-none">
          
          {/* HOURS DIGIT COLUMN (Top -> Bottom Waterfall) */}
          <div className="relative h-14 sm:h-16 w-12 sm:w-16 overflow-hidden bg-[#1b1c1c] text-[#c9a96e] rounded-xl flex items-center justify-center border border-[#c9a96e]/30 shadow-inner">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={hoursStr}
                initial={{ y: -45, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 45, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute"
              >
                {hoursStr}
              </motion.span>
            </AnimatePresence>
          </div>

          <span className="text-[#c9a96e] animate-pulse">:</span>

          {/* MINUTES DIGIT COLUMN (Top -> Bottom Waterfall) */}
          <div className="relative h-14 sm:h-16 w-12 sm:w-16 overflow-hidden bg-[#1b1c1c] text-white rounded-xl flex items-center justify-center border border-white/20 shadow-inner">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={minutesStr}
                initial={{ y: -45, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 45, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute"
              >
                {minutesStr}
              </motion.span>
            </AnimatePresence>
          </div>

          <span className="text-[#c9a96e] animate-pulse">:</span>

          {/* SECONDS DIGIT COLUMN (Top -> Bottom Waterfall) */}
          <div className="relative h-14 sm:h-16 w-12 sm:w-16 overflow-hidden bg-[#1b1c1c] text-amber-300 rounded-xl flex items-center justify-center border border-amber-400/40 shadow-inner">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={secondsStr}
                initial={{ y: -45, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 45, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute"
              >
                {secondsStr}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* AM / PM INDICATOR */}
          <span className="text-xs sm:text-sm font-bold text-[#745a27] bg-[#f6f3f2] px-2 py-1 rounded-md border border-[#e4e2e1] ml-1">
            {amPmStr}
          </span>

        </div>

        {/* BOTTOM SHWETA DESIGN EXPERIENCE PILL */}
        <div className="w-full bg-[#1b1c1c] text-white p-4 rounded-2xl border border-[#c9a96e]/30 shadow-lg text-center space-y-1">
          <span className="text-[9px] font-mono uppercase tracking-widest text-[#c9a96e] block font-bold">
            SHWETA GRAPHIC DESIGN MASTERY
          </span>
          <div className="text-sm sm:text-base font-serif font-extrabold text-white flex items-center justify-center gap-2">
            <span>3 YEARS • 2 MONTHS EXPERIENCE</span>
          </div>
          <span className="text-[9px] font-mono text-white/50 block">
            {dateStr} • PUNE STUDIO
          </span>
        </div>

      </div>

    </div>
  );
}
