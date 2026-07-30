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

// ─── PURE LUXURY 3D GRAPHIC DESIGNER STUDIO WATCH (Live Real-Time Clock) ───
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

  // Clock Hand Angle Calculations
  const hours = time ? time.getHours() : 0;
  const minutes = time ? time.getMinutes() : 0;
  const seconds = time ? time.getSeconds() : 0;

  const hourAngle = (hours % 12 + minutes / 60) * 30;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const secondAngle = seconds * 6;

  // Format digital string
  const digitalTimeStr = time
    ? time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : "12:00:00 AM";

  const dateStr = time
    ? time.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase()
    : "31 JUL 2026";

  return (
    <div className="relative h-[440px] sm:h-[480px] md:h-[520px] w-full mt-8 lg:mt-0 flex items-center justify-center">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a96e]/15 via-transparent to-[#745a27]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main 3D Watch Face */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-8 border-[#c9a96e] bg-[#111111] shadow-[0_25px_60px_rgba(201,169,110,0.3)] flex items-center justify-center p-3">
        
        {/* Outer Watch Bezel Angle Graduation Lines */}
        <div className="absolute inset-2 rounded-full border border-white/10 flex items-center justify-center pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full flex justify-center py-1"
              style={{ transform: `rotate(${i * 30}deg)` }}
            >
              <div className="w-1 h-3 bg-white/30 rounded-full" />
            </div>
          ))}
        </div>

        {/* Watch Face Center Dial */}
        <div className="relative w-full h-full rounded-full border border-white/15 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center overflow-hidden">
          
          {/* Vector Compass Radial Circles */}
          <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-dashed border-white/15 animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-white/10" />

          {/* 12 O'CLOCK: SJ LOGO MONOGRAM CREST */}
          <div className="absolute top-6 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full border border-[#c9a96e] bg-[#c9a96e]/10 flex items-center justify-center font-serif font-bold text-xs text-[#c9a96e]">
              SJ
            </div>
            <span className="text-[8px] font-mono tracking-widest text-white/50 uppercase mt-0.5">
              STUDIO 2026
            </span>
          </div>

          {/* 3 O'CLOCK: 300 DPI PRESS MARK */}
          <div className="absolute right-5 flex flex-col items-center">
            <span className="text-[10px] font-mono font-bold text-[#c9a96e] bg-white/10 px-2 py-0.5 rounded border border-white/10">
              300 DPI
            </span>
          </div>

          {/* 6 O'CLOCK: CMYK COLOR PALETTE SWATCHES */}
          <div className="absolute bottom-6 flex flex-col items-center space-y-1">
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" title="Cyan" />
              <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-500" title="Magenta" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" title="Yellow" />
              <div className="w-2.5 h-2.5 rounded-full bg-black border border-white/40" title="Key Black" />
            </div>
            <span className="text-[8px] font-mono tracking-widest text-white/40 uppercase">
              CMYK PRINT
            </span>
          </div>

          {/* 9 O'CLOCK: 10+ YRS EXPERIENCE EMBLEM */}
          <div className="absolute left-5 flex flex-col items-center">
            <span className="text-[10px] font-serif font-bold text-[#c9a96e]">
              10+ YRS
            </span>
            <span className="text-[7px] font-mono text-white/40 uppercase">
              MASTERY
            </span>
          </div>

          {/* DIGITAL SUB-DIAL (CENTER DISPLAY) */}
          <div className="absolute bottom-16 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15 text-center">
            <span className="text-xs font-mono font-bold tracking-wider text-amber-300 block">
              {digitalTimeStr}
            </span>
            <span className="text-[8px] font-mono text-white/60 tracking-widest block">
              {dateStr}
            </span>
          </div>

          {/* LIVE HOUR HAND */}
          <div
            className="absolute w-full h-full flex justify-center items-center pointer-events-none"
            style={{ transform: `rotate(${hourAngle}deg)` }}
          >
            <div className="w-1.5 h-16 sm:h-20 bg-gradient-to-t from-white to-[#c9a96e] rounded-full shadow-lg -translate-y-8 sm:-translate-y-10 border border-black/40" />
          </div>

          {/* LIVE MINUTE HAND */}
          <div
            className="absolute w-full h-full flex justify-center items-center pointer-events-none"
            style={{ transform: `rotate(${minuteAngle}deg)` }}
          >
            <div className="w-1 h-24 sm:h-28 bg-gradient-to-t from-white to-white rounded-full shadow-lg -translate-y-12 sm:-translate-y-14 border border-black/40" />
          </div>

          {/* LIVE SECOND HAND */}
          <div
            className="absolute w-full h-full flex justify-center items-center pointer-events-none"
            style={{ transform: `rotate(${secondAngle}deg)` }}
          >
            <div className="w-0.5 h-28 sm:h-32 bg-[#d4af37] rounded-full shadow-md -translate-y-14 sm:-translate-y-16" />
            <div className="w-2 h-2 rounded-full bg-[#d4af37] absolute -translate-y-14 sm:-translate-y-16" />
          </div>

          {/* CENTER WATCH CROWN PIN */}
          <div className="w-4 h-4 rounded-full bg-[#c9a96e] border-2 border-white shadow-xl z-20" />

        </div>

      </div>

    </div>
  );
}
