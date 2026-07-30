"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, MapPin, Award, Heart, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--ivory)] pt-24 pb-24 text-[var(--charcoal)]">
      
      {/* ─── Hero Mini Section ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-5xl text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-label mb-3 text-[var(--gold-dark)] tracking-[0.25em] text-xs font-semibold uppercase"
        >
          Visual Storyteller & Brand Designer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif font-bold text-[var(--gold-dark)] tracking-tight mb-6"
        >
          About Shweta
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--charcoal-soft)] max-w-2xl mx-auto font-light leading-relaxed"
        >
          Crafting visual narratives where deep-rooted Indian aesthetics meet refined modern minimalism.
        </motion.p>
      </section>

      {/* ─── Profile Section ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-[var(--gold)] opacity-15 rounded-2xl -translate-x-4 translate-y-4" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-[rgba(201,169,110,0.3)] bg-white">
              <img
                src="/images/home/shweta-working-about.png"
                alt="Shweta Jadhav - Graphic Designer at Work"
                className="w-full h-[540px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="gold-line mb-2" />
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--gold-dark)]">The Philosophy</h2>
            <div className="space-y-4 text-[var(--charcoal-soft)] text-base leading-relaxed font-light">
              <p>
                My approach to design is inherently dualistic. I draw profound inspiration from the rich, tactile, and complex heritage of Indian art—the deliberate geometry of mandalas, the earthy tones of traditional textiles, and the emotional resonance of regional craftsmanship.
              </p>
              <p>
                However, I believe that for these historical echoes to speak to a contemporary audience, they must be distilled. By applying the principles of modern minimalism—generous negative space, precise typography, and a restrained color palette—I create designs that feel simultaneously timeless and forward-looking.
              </p>
              <p>
                It is not about erasing cultural identity, but elevating it through a lens of curated luxury and thoughtful restraint.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── Timeline & Skills Section ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Timeline */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[var(--gold-dark)] mb-8">Journey</h2>
            <div className="relative border-l-2 border-[rgba(201,169,110,0.3)] ml-3 space-y-10 py-2">
              
              <div className="relative pl-8 group">
                <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--gold)] bg-white group-hover:bg-[var(--gold)] transition-colors duration-300" />
                <span className="text-xs font-semibold text-[var(--gold-dark)] tracking-widest uppercase">2023 - Present</span>
                <h3 className="text-xl font-bold text-[var(--charcoal)] mt-1">Independent Art Director</h3>
                <p className="text-sm text-[var(--charcoal-soft)] mt-2 leading-relaxed">
                  Consulting for premium lifestyle and wellness brands, focusing on comprehensive visual identity systems, logos, standees, and packaging design.
                </p>
              </div>

              <div className="relative pl-8 group">
                <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--gold)] bg-white group-hover:bg-[var(--gold)] transition-colors duration-300" />
                <span className="text-xs font-semibold text-[var(--gold-dark)] tracking-widest uppercase">2021 - 2023</span>
                <h3 className="text-xl font-bold text-[var(--charcoal)] mt-1">Senior Graphic Designer</h3>
                <p className="text-sm text-[var(--charcoal-soft)] mt-2 leading-relaxed">
                  Crafting award-winning editorial layouts, expo invites, standee graphics, and luxury print brand campaigns.
                </p>
              </div>

              <div className="relative pl-8 group">
                <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--gold)] bg-white group-hover:bg-[var(--gold)] transition-colors duration-300" />
                <span className="text-xs font-semibold text-[var(--gold-dark)] tracking-widest uppercase">2020 - 2021</span>
                <h3 className="text-xl font-bold text-[var(--charcoal)] mt-1">Design Fellow</h3>
                <p className="text-sm text-[var(--charcoal-soft)] mt-2 leading-relaxed">
                  Immersive study in typography and print production, refining skills in tactile design execution.
                </p>
              </div>

            </div>
          </div>

          {/* Tools & Skills */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[var(--gold-dark)] mb-8">Craft & Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Adobe Illustrator", level: 5 },
                { name: "Adobe Photoshop", level: 5 },
                { name: "Figma & UI Design", level: 4 },
                { name: "CorelDRAW / Vectors", level: 5 },
                { name: "Typography & Print", level: 5 },
                { name: "Branding Systems", level: 5 },
              ].map((tool, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl border border-[rgba(201,169,110,0.2)] shadow-sm flex items-center justify-between hover:border-[var(--gold)] transition-colors"
                >
                  <span className="text-sm font-semibold text-[var(--charcoal)]">{tool.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx < tool.level ? "bg-[var(--gold)]" : "bg-[var(--ivory-deep)]"}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── Fun Facts Section ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl mb-24">
        <h2 className="text-2xl md:text-4xl font-serif text-center text-[var(--gold-dark)] mb-12">Beyond the Canvas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-xl overflow-hidden border border-[rgba(201,169,110,0.2)] shadow-sm group">
            <div className="h-48 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZZtqKwhvPiF1def8Z7Zejm0beyfoWO9R2PNeNsQNqhzUk_qTShG2l3LlNDmYtr0kugAuemeiOVLo1f54kqQ9zEPXoZeLuluyzude9Ls6EzH4nPHOIqEdTjDDcfQ9Lnnyp_YOgbVyohrgmTOEciVGBIWvBxJsQkQrmkfoARh60qThPzbj8fWGb2hTZQ6bVzwP7vLOIiX4psJMYWZ3R4PjNiURSp8ZJp3CiUqbLBupXSV-Pv1K5toj6"
                alt="Chai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif font-bold text-[var(--charcoal)] mb-2">Chai Connoisseur</h3>
              <p className="text-xs text-[var(--charcoal-soft)] leading-relaxed">
                Finding rhythm and pause in the daily ritual of brewing the perfect cup. It fuels the late-night sketching sessions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-[rgba(201,169,110,0.2)] shadow-sm group">
            <div className="h-48 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgf-TKmjapnnSFElinuYHWlGm4kQeJEZz6Cmi-f9_0MBMBOEMUAPXCYIaoYeEIWy9nSvQeokwftnZtQobFMBOwpdTzuq45Wmg6167iXvQuWaQui-TquI4_QLC4WQSKQc89OTyix7qmuYUs-iIrOhBNgNcGH79VSizseza5Kk_72s9CV-FYZUsYNPtrnqp0UWZUkWEyNUut0BRPOFi8thmdqhnM_-iNBANIS8MM8ycoKmRgOMOGwcK4"
                alt="Mandala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif font-bold text-[var(--charcoal)] mb-2">Mandala Artist</h3>
              <p className="text-xs text-[var(--charcoal-soft)] leading-relaxed">
                A meditative practice that refines focus and patience. The intricate geometry continually influences my structural layouts.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-[rgba(201,169,110,0.2)] shadow-sm group">
            <div className="h-48 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_tQBzjmn6XlMg_1JKpy0greLILmXWcsfeJZtkN7AHtbqdip0DfRjR7E4lji_iHAHmtm80MlFartgGYRREznHZO1XkywgN0hTGXrSpUwVIm45PPAcsTvKXY4KoHmNTSVgzm5Mtf0SaYhL71pHgsQJaD5PwYRuE3tmy3pOu-5F3ejsEWS0bc_-yIiiywnRZxhnB-uw6J6s1NveGzj2qa03gGjhovEsslkwaLZfo01xaENsrwOz75fk4"
                alt="Pune Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif font-bold text-[var(--charcoal)] mb-2">Pune Heritage Lover</h3>
              <p className="text-xs text-[var(--charcoal-soft)] leading-relaxed">
                Constantly exploring the historical wadas and architecture of my city, drawing inspiration from centuries-old craftsmanship.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="container mx-auto px-6 text-center max-w-3xl">
        <div className="gold-line mx-auto mb-6" />
        <h2 className="text-3xl font-serif text-[var(--charcoal)] mb-4">Ready to Collaborate?</h2>
        <p className="text-sm text-[var(--charcoal-soft)] mb-8">
          Whether you're looking to build a new brand identity or refine an existing one, let's create something beautiful together.
        </p>
        <Link href="/contact" className="btn-primary shadow-md">
          Let's Work Together
        </Link>
      </section>

    </div>
  );
}
