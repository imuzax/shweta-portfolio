"use client";

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
              Crafting timeless brand identities and compelling visual narratives for luxury and lifestyle brands. Transforming complex ideas into elegant, engaging designs.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/work" className="px-8 py-3 rounded-full bg-[#c9a96e] text-[#543d0c] font-semibold text-sm hover:bg-[#745a27] hover:text-white transition-colors">
                View My Work
              </Link>
              <Link href="/about" className="px-8 py-3 rounded-full border border-[#c9a96e] text-[#745a27] font-semibold text-sm hover:bg-[#c9a96e]/10 transition-colors">
                Download Resume
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full hidden lg:block">
            <div className="glass-panel soft-shadow absolute inset-0 rounded-2xl flex items-center justify-center overflow-hidden border border-[#c9a96e]/20">
              <div 
                className="w-full h-full bg-cover bg-center opacity-90 mix-blend-multiply"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzZt7nAgSmsTqsFmCAx2vE-8H9pVGNuNHLnwE8Y1hsdGSAgrj0PosIk9OS2B3PERovStp0iyVYOWBmBcY6E13UfRnagK4Dm9hqYt7AvqlUodNuKy8dnBlDPMmfvHC7MO1Rz2ZbAG3NrqQcJir5JPaXDXsTvem_tkXosyYd3sWaftPQVVOhZL6qgK8P8azxLeP9YlIToTiStshkVd7OOkBgHZ-FbuOMIO8P-4RlYtlzpkvHdMkw4Wvh')"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── About Snippet ─── */}
      <section className="px-6 md:px-16 max-w-[1200px] mx-auto py-16" id="about">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-[#745a27] uppercase tracking-widest">
            About Me
          </span>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#c9a96e] p-1 mt-2 mb-2">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0dQO_Kc9oTJ_fHuekamhPPwAYrhfBntZNeUkEt_QXC4xysNRK6K522coopAQ4ZGvP_s6me2I2sO4Ws3mLL2OT6DUNXwmv0gJhYFzufOoIQkEyXzksFYpQ8H45y-9U_kfsEvF6H7q3FSwbxX-Dq7ArMw1v0QfCco7mZGjBWtejrRtBNWokggHnI1pCg5oepHXsZH7QcOy6X5PvvuqeL6i2PTKtG_-JA91kxwZ8h649q7ru9hRJI_cL"
              alt="Shweta Jadhav Portrait"
            />
          </div>
          <p className="text-lg text-[#5f5e59] leading-relaxed font-light">
            With over a decade of experience navigating the intersection of art and strategy, I specialize in translating brand essence into visual masterpieces. Based in the vibrant city of Pune, my approach blends soft minimalism with refined details, ensuring every project not only looks exquisite but performs flawlessly. I believe in the power of negative space, the poetry of typography, and the enduring impact of thoughtful design. My goal is to elevate your brand's narrative through meticulous craftsmanship.
          </p>
          <div className="w-full pt-12 border-t border-[#e4e2e1] mt-8">
            <p className="text-xs text-[#5f5e59] mb-6 uppercase tracking-wider font-medium">
              Trusted by local brands
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-xl font-serif text-[#1b1c1c]">
              <span>Logo 1</span>
              <span>Logo 2</span>
              <span>Logo 3</span>
              <span>Logo 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="px-6 md:px-16 max-w-[1200px] mx-auto py-16" id="work">
        <div className="mb-12">
          <span className="text-xs font-semibold text-[#745a27] uppercase tracking-widest">
            Selected Projects
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1b1c1c] mt-2">
            Curated Masterpieces
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group cursor-pointer bg-white border border-[#F0EDE6] rounded-xl p-3 soft-shadow hover-gold-glow transition-all duration-300">
            <div className="aspect-[4/3] bg-[#e4e2e1] rounded-lg overflow-hidden relative">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmUBHqM8XlLLIi5-RwP_ek7xzZVrpMY6t718afq4WIIvV8e1Oy8Hw6ukBNo5UssDaNKRREguHj4HBKBfgW9o6ys5gLuKOKcTacqTJdxGFX61kgczqgEU3hLwr8uIPxgEUMeXJU1Gi0RAgWM95Y_MNwDjiYdOjJZE_89fQFrtXehNB8_leLzbWzK6ng-VL9g_QFp0dsHNr04OCXRewC0V29TO0Qm8fIJPqc40wepLKxzQuJqOjkKLNK"
                alt="Aura Skincare"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="mt-4 px-2">
              <h4 className="text-2xl font-serif font-bold text-[#1b1c1c]">Aura Skincare</h4>
              <p className="text-sm text-[#5f5e59] mt-1">Brand Identity & Packaging</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer bg-white border border-[#F0EDE6] rounded-xl p-3 soft-shadow hover-gold-glow transition-all duration-300 lg:translate-y-8">
            <div className="aspect-[4/3] bg-[#e4e2e1] rounded-lg overflow-hidden relative">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU8BFZPl2b4woFqkJjWWOAdl_WS8H4IasP-yGo6wvUXs524GVShCGBK-f3iHjjUsm-U8LZRNYmHmKmnI4qqPV03r2Ct4CVKItYrp0KrMzyI6TS_ge9iHedUcYXmTYvcDRjvGliYqkKqyT9DhTnWIRckJhiUwwM8qIJZk4X9Py1KguoGzqsrt9xgp1sNHdHTYdWc7FNtBN0j1oAQTP7M1b7Hba1fDsyZAXz-dBn7KYKgyqqVDel2ADT"
                alt="Maison Journal"
              />
            </div>
            <div className="mt-4 px-2">
              <h4 className="text-2xl font-serif font-bold text-[#1b1c1c]">Maison Journal</h4>
              <p className="text-sm text-[#5f5e59] mt-1">UI/UX Design</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group cursor-pointer bg-white border border-[#F0EDE6] rounded-xl p-3 soft-shadow hover-gold-glow transition-all duration-300">
            <div className="aspect-[4/3] bg-[#e4e2e1] rounded-lg overflow-hidden relative">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn96-RmifngTIUXPf7yZGv2Z_qCL9hcLhZAiA9Rnx6DPsZUeXP5ADM63wY4irv1O4Rx4EyegPL80TOPV8dKH2d0B1tJOHV-YVa8abj363TzZW1DUJ59PRXLnjd2sDsTpYKLEhXfj7ZZEFxro19H4WiZRuKc6O4WhsZ5Uq7ZDjYw7yOcVcJ3O7F1RdezT1z2M-TWq0ITww_CIVu06S4goEd3tQ1EPMgVJhVtxjmNYkYI4TxqJraEgEj"
                alt="Lumina Roasters"
              />
            </div>
            <div className="mt-4 px-2">
              <h4 className="text-2xl font-serif font-bold text-[#1b1c1c]">Lumina Roasters</h4>
              <p className="text-sm text-[#5f5e59] mt-1">Packaging Design</p>
            </div>
          </div>

        </div>

        <div className="text-center mt-16">
          <Link href="/work" className="px-8 py-3 rounded-full border border-[#c9a96e] text-[#745a27] font-semibold text-sm hover:bg-[#c9a96e]/10 transition-colors inline-block">
            Explore All Work
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
