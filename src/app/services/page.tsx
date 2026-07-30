"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Sparkles, Monitor, Paintbrush, Share2, Layers } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-[var(--ivory)] pt-24 pb-24 text-[var(--charcoal)]">
      
      {/* 1. Hero Mini */}
      <section className="container mx-auto px-6 md:px-12 max-w-4xl text-center mb-20">
        <div className="mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium">
          <Link href="/" className="hover:text-[var(--gold-dark)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--gold-dark)]">Services</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--gold-dark)] mb-4">Services</h1>
        <p className="text-lg md:text-xl text-[var(--charcoal-soft)] max-w-2xl mx-auto font-light leading-relaxed">
          Crafting bespoke visual experiences that elevate your brand.
        </p>
      </section>

      {/* 2. Service List */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl space-y-24 mb-24">
        
        {/* Service 1: Brand Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 h-[380px] rounded-2xl overflow-hidden shadow-lg border border-[rgba(201,169,110,0.3)] bg-white">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt3vU4NOhy4ZTFvk_RwdIMGCVilLX5PJPEP-O7H8EpU08-WGP8IbATQ8hBtvjBobrOA-YQ12bdSGPjGiNV08nNHMmqm2WvrFgsPfhasdywXGaY2kVMkN43_pPNliuBRc08rG_HQcyjcS5ukQdxMJK6k_DqRzzeVJ0HpmdIQUld6W9EsDB6KfW-_H0_vht1s_EfmY7vEj8FDa3Mo0an8TpFy6agjOuy8PVFk7te-ZFNdRv1u7mMFve5"
              alt="Brand Identity"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--ivory-deep)] flex items-center justify-center text-[var(--gold-dark)]">
                <Sparkles size={20} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-[var(--gold-dark)]">Brand Identity</h2>
            </div>
            <p className="text-base text-[var(--charcoal-soft)] leading-relaxed font-light">
              Strategy-led visual systems including logos, color palettes, typography, and full visual identity guidelines.
            </p>
            <ul className="space-y-3 pt-2">
              {["Brand Strategy", "Visual Identity & Logos", "Brand Guidelines"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-[var(--charcoal)]">
                  <span className="w-5 h-5 rounded-full bg-[var(--gold-light)] flex items-center justify-center text-[var(--gold-dark)] text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service 2: UI/UX & Digital Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--ivory-deep)] flex items-center justify-center text-[var(--gold-dark)]">
                <Monitor size={20} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-[var(--gold-dark)]">UI/UX Design</h2>
            </div>
            <p className="text-base text-[var(--charcoal-soft)] leading-relaxed font-light">
              Intuitive digital experiences focused on user needs, modern aesthetics, and business goals.
            </p>
            <ul className="space-y-3 pt-2">
              {["Web Design & Portfolios", "Mobile Apps", "User Research & Prototypes"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-[var(--charcoal)]">
                  <span className="w-5 h-5 rounded-full bg-[var(--gold-light)] flex items-center justify-center text-[var(--gold-dark)] text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-2 lg:order-2 h-[380px] rounded-2xl overflow-hidden shadow-lg border border-[rgba(201,169,110,0.3)] bg-white">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV3VfoVpSViaHwPCb79nXgWtCysJi9cSzr36N9s5jsBFd8STUb_3LcPPxf2mDMDh6CzGxGDEnMKCYAKkhh4n1EpPRcH_qnyvfVeXmiEEntNVBnUGjHNyVm-NGx8BPBzin8tV1ahh9ruorqERozk5TOj-gKp3z0fD0PwpWZonRSOqpBbgkodUjbt657MG4RI78Dice1yPFk1bSijhFySpujIYN2KKg66TJfwY4ogTGW58dJ39zQds5i"
              alt="UI/UX Design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Service 3: Print Collateral (Expo, Standee, Banners) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 h-[380px] rounded-2xl overflow-hidden shadow-lg border border-[rgba(201,169,110,0.3)] bg-white">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr99GCKCt-PlPKJHIO21G2g9swsezfLqc6YP75CanPrB2uMkd60tqciUBvqWcN5xU8KVWEBcfVxiWId_tJH9WPR3dy1nySh8aEeyr93qft5Nn2DIKG9ENcjkx9xABP5btOh6_pY18hh0ISWsRHr80j7CJvSiTH9dQ8K1SHx07rkv1cB89JjYEtE6Jylo6BVgNmAJ2h_p3nkxMKF9u8NsN1xo5M8seKfYjQJSEciwQ33vpqKdbk8Ksf"
              alt="Print Collateral"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--ivory-deep)] flex items-center justify-center text-[var(--gold-dark)]">
                <Paintbrush size={20} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-[var(--gold-dark)]">Print & Promotional Media</h2>
            </div>
            <p className="text-base text-[var(--charcoal-soft)] leading-relaxed font-light">
              High-impact physical collateral designed to make a statement at expos, physical venues, and news publications.
            </p>
            <ul className="space-y-3 pt-2">
              {["Expo Invites & Banners", "Promotional Standees", "News Paper Advertisements"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-[var(--charcoal)]">
                  <span className="w-5 h-5 rounded-full bg-[var(--gold-light)] flex items-center justify-center text-[var(--gold-dark)] text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      {/* 3. Process Section */}
      <section className="py-20 bg-[var(--ivory-deep)] border-y border-[rgba(201,169,110,0.2)]">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="text-3xl font-serif font-bold text-center text-[var(--gold-dark)] mb-16">How I Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery", desc: "Understanding your vision, business goals, and audience." },
              { num: "02", title: "Strategy", desc: "Defining the roadmap, moodboards, and visual direction." },
              { num: "03", title: "Creation", desc: "Crafting meticulous design deliverables with luxury detail." },
              { num: "04", title: "Delivery", desc: "Providing print-ready and digital assets ready for launch." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[rgba(201,169,110,0.2)] shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--ivory-deep)] border border-[var(--gold)] flex items-center justify-center mx-auto mb-4 text-[var(--gold-dark)] font-serif font-bold text-xl">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-[var(--charcoal)] mb-2 uppercase tracking-wider">{step.title}</h3>
                <p className="text-xs text-[var(--charcoal-soft)] leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center max-w-3xl pt-20">
        <div className="gold-line mx-auto mb-6" />
        <h2 className="text-3xl font-serif text-[var(--charcoal)] mb-4">Need Custom Design Work?</h2>
        <p className="text-sm text-[var(--charcoal-soft)] mb-8">
          Let me help you craft memorable visual assets tailored to your business goals.
        </p>
        <Link href="/contact" className="btn-primary shadow-md">
          Start a Project
        </Link>
      </section>

    </div>
  );
}
