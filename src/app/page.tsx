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

          {/* ─── LIVE CHIPS PACKET GRAPHIC DESIGN CREATION STUDIO ─── */}
          <LiveChipsPackagingStudio />
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

// ─── LIVE CHIPS PACKET GRAPHIC DESIGN CREATION STUDIO ───
function LiveChipsPackagingStudio() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Base Pouch, 1: Typography, 2: Color Filters, 3: Badges
  const [flavorMode, setFlavorMode] = useState<"spicy" | "masala" | "sour">("spicy");
  const [isFoilSheen, setIsFoilSheen] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Flavor Color Specs
  const flavors = {
    spicy: {
      name: "Fiery Chilli Flavor",
      bgGradient: "from-[#d32f2f] via-[#b71c1c] to-[#1b1c1c]",
      pouchColor: "#b71c1c",
      accentColor: "#ffeb3b",
      textColor: "#ffffff",
      badgeText: "🔥 EXTRA SPICY"
    },
    masala: {
      name: "Royal Masala Crunch",
      bgGradient: "from-[#e65100] via-[#f57c00] to-[#3e2723]",
      pouchColor: "#f57c00",
      accentColor: "#fff176",
      textColor: "#ffffff",
      badgeText: "🌶️ MASALA MAGIC"
    },
    sour: {
      name: "Sour Cream & Herb",
      bgGradient: "from-[#2e7d32] via-[#388e3c] to-[#1b1c1c]",
      pouchColor: "#388e3c",
      accentColor: "#e8f5e9",
      textColor: "#ffffff",
      badgeText: "🌿 SOUR CREAM & HERB"
    }
  };

  const currentFlavor = flavors[flavorMode];

  // Auto-play creation steps: 0 -> 1 -> 2 -> 3
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const stepTitles = [
    "Step 1: Pouch Die-Cut & Base Foil",
    "Step 2: Adding Typography & Branding",
    "Step 3: Color Mode & Filter Tuning",
    "Step 4: Vector Graphics & Quality Badges"
  ];

  return (
    <div className="relative h-[460px] sm:h-[510px] md:h-[540px] w-full mt-8 lg:mt-0">
      <div className="glass-panel soft-shadow absolute inset-0 rounded-2xl overflow-hidden border border-[#c9a96e]/30 bg-white flex flex-col shadow-2xl">
        
        {/* Header Toolbar */}
        <div className="h-14 bg-[#1b1c1c] text-white px-4 flex items-center justify-between border-b border-[#c9a96e]/30">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c9a96e] animate-ping" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a96e] block">
                LIVE PACKAGING DESIGNER ENGINE
              </span>
              <span className="text-xs font-serif font-bold tracking-wide text-white truncate block">
                {stepTitles[currentStep]}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="text-[10px] font-mono bg-[#c9a96e] text-[#543d0c] font-bold px-3 py-1 rounded-full hover:bg-white transition-colors"
            >
              {isAutoPlay ? "PAUSE WORKFLOW" : "PLAY WORKFLOW"}
            </button>
          </div>
        </div>

        {/* Live Chips Packet Design Canvas Workspace */}
        <div className="flex-1 relative bg-[#121212] overflow-hidden flex items-center justify-center p-4 md:p-6">
          
          {/* Background Vector Grid */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#c9a96e 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px"
            }}
          />

          {/* Center 3D Pouch Packaging Mockup Canvas */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            
            {/* Real-time Chips Pouch Outer Container */}
            <motion.div 
              layout
              className={`relative w-48 sm:w-56 md:w-64 h-[88%] rounded-2xl p-4 shadow-2xl border-2 border-white/20 bg-gradient-to-b ${currentFlavor.bgGradient} flex flex-col justify-between items-center overflow-hidden transition-all duration-700`}
            >
              
              {/* Metallic Foil Sheen Overlay */}
              {isFoilSheen && (
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none animate-pulse" />
              )}

              {/* Die-cut Seal Ridges Top */}
              <div className="w-full h-3 bg-black/30 border-b border-white/20 flex justify-between items-center px-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-full bg-white/20 rounded-xs" />
                ))}
              </div>

              {/* STEP 1+: BRAND LOGO CREST */}
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ opacity: 1, scale: 1 }} className="text-center mt-2 z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto shadow-lg">
                  <span className="font-serif font-bold text-base md:text-lg text-white">SJ</span>
                </div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-white/80 block mt-1">
                  SNACK FOODS
                </span>
              </motion.div>

              {/* STEP 2+: TYPOGRAPHY & BRANDING TEXT */}
              {currentStep >= 1 ? (
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center space-y-1 z-10"
                >
                  <span className="text-2xl md:text-3xl font-serif font-extrabold block text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] tracking-wide">
                    CRUNCHY
                  </span>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest block px-3 py-0.5 rounded-full bg-black/40 text-amber-300 border border-amber-300/30">
                    {currentFlavor.name}
                  </span>
                </motion.div>
              ) : (
                <div className="text-[10px] text-white/40 font-mono italic border border-dashed border-white/30 px-3 py-1 rounded">
                  [Typography Wireframe]
                </div>
              )}

              {/* STEP 3+: COLOR FILTER & METALLIC SHINE HIGHLIGHT */}
              {currentStep >= 2 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full flex items-center justify-center gap-2 z-10"
                >
                  <div className="px-2.5 py-1 rounded-full bg-amber-400 text-black text-[9px] font-extrabold shadow-lg uppercase tracking-wider flex items-center gap-1">
                    <span>100% REAL POTATO</span>
                  </div>
                </motion.div>
              )}

              {/* STEP 4+: QUALITY BADGES & NET WEIGHT */}
              {currentStep >= 3 ? (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full flex justify-between items-center text-[9px] text-white/90 font-mono border-t border-white/20 pt-2 z-10"
                >
                  <span className="bg-black/50 px-2 py-0.5 rounded">{currentFlavor.badgeText}</span>
                  <span className="font-bold">NET WT. 100g</span>
                </motion.div>
              ) : (
                <div className="text-[9px] text-white/40 font-mono">
                  [Die-Cut Seal Active]
                </div>
              )}

              {/* Vector Pen Tool Handle Overlay */}
              <div className="absolute top-1/3 right-2 bg-[#c9a96e] text-[#543d0c] px-2 py-0.5 rounded-full text-[8px] font-bold shadow-lg flex items-center gap-1 animate-bounce">
                <span className="w-1.5 h-1.5 rounded-full bg-[#543d0c]" />
                <span>Vector Anchor ({currentStep + 1}/4)</span>
              </div>

              {/* Die-cut Seal Ridges Bottom */}
              <div className="w-full h-3 bg-black/30 border-t border-white/20 flex justify-between items-center px-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-full bg-white/20 rounded-xs" />
                ))}
              </div>

            </motion.div>

          </div>

        </div>

        {/* Bottom Interactive Controls (Working Buttons!) */}
        <div className="h-14 bg-[#f6f3f2] border-t border-[#e4e2e1] px-3 md:px-4 flex flex-wrap items-center justify-between gap-2">
          
          {/* Step Selector Buttons */}
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3].map((step) => (
              <button
                key={step}
                onClick={() => setCurrentStep(step)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-semibold transition-all ${
                  currentStep === step
                    ? "bg-[#c9a96e] text-[#543d0c] shadow scale-105"
                    : "bg-white text-[#5f5e59] hover:bg-[#c9a96e]/20 border border-[#e4e2e1]"
                }`}
              >
                Step {step + 1}
              </button>
            ))}
          </div>

          {/* Flavor Color Mode Switcher */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-medium text-[#5f5e59] uppercase tracking-wider hidden sm:inline-block">
              Flavor Mode:
            </span>
            <button
              onClick={() => setFlavorMode("spicy")}
              className={`w-5 h-5 rounded-full bg-[#d32f2f] border-2 ${flavorMode === "spicy" ? "border-black scale-110" : "border-transparent"}`}
              title="Fiery Chilli"
            />
            <button
              onClick={() => setFlavorMode("masala")}
              className={`w-5 h-5 rounded-full bg-[#f57c00] border-2 ${flavorMode === "masala" ? "border-black scale-110" : "border-transparent"}`}
              title="Royal Masala"
            />
            <button
              onClick={() => setFlavorMode("sour")}
              className={`w-5 h-5 rounded-full bg-[#388e3c] border-2 ${flavorMode === "sour" ? "border-black scale-110" : "border-transparent"}`}
              title="Sour Cream & Herb"
            />
            <button
              onClick={() => setIsFoilSheen(!isFoilSheen)}
              className={`text-[9px] font-semibold px-2 py-0.5 rounded border transition-colors ${
                isFoilSheen ? "bg-[#c9a96e] text-[#543d0c] border-transparent" : "bg-white text-[#5f5e59]"
              }`}
            >
              Foil Sheen
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
