"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 bg-[var(--ivory-deep)]">
      <div className="container mx-auto px-8 max-w-6xl">
        
        {/* ─── Header ─── */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="gold-line mx-auto mb-6" />
          <p className="section-label mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl text-[var(--charcoal)] mb-6">
            Let’s create something beautiful together.
          </h1>
          <p className="text-lg text-[var(--charcoal-soft)]">
            Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* ─── Contact Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 md:p-12 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[rgba(201,169,110,0.15)]"
          >
            <h3 className="text-2xl mb-8 font-serif">Send me a message</h3>
            
            {status === "success" ? (
              <div className="bg-[var(--ivory)] p-8 rounded-lg text-center border border-[var(--gold-light)]">
                <div className="w-16 h-16 bg-[var(--gold)] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} />
                </div>
                <h4 className="text-xl mb-2">Message Sent!</h4>
                <p className="text-[var(--text-muted)] text-sm">Thank you for reaching out. I'll get back to you within 24-48 hours.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-[var(--gold-dark)] text-sm uppercase tracking-wider font-semibold hover:text-[var(--gold)]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 bg-[var(--ivory)] border border-transparent focus:border-[var(--gold)] rounded-md outline-none transition-colors text-sm"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Mail Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 bg-[var(--ivory)] border border-transparent focus:border-[var(--gold)] rounded-md outline-none transition-colors text-sm"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--ivory)] border border-transparent focus:border-[var(--gold)] rounded-md outline-none transition-colors text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "sending"}
                  className="btn-primary w-full justify-center mt-2 disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* ─── Contact Info ─── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-serif mb-6">Contact Information</h3>
              <p className="text-[var(--charcoal-soft)] mb-8 leading-relaxed">
                I am currently open for full-time roles and freelance projects. Feel free to contact me via email or phone.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-[var(--gold)]" />, title: "Email", info: "Shwetanjadhav2018@gmail.com", href: "mailto:Shwetanjadhav2018@gmail.com" },
                { icon: <Phone className="text-[var(--gold)]" />, title: "Phone", info: "+91 93070 81860", href: "tel:+919307081860" },
                { icon: <MapPin className="text-[var(--gold)]" />, title: "Location", info: "Pune, Maharashtra, India", href: null }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 p-5 bg-white rounded-lg border border-[rgba(201,169,110,0.1)]">
                  <div className="p-3 bg-[var(--ivory-deep)] rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-bold text-[var(--charcoal)] mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-[var(--text-muted)] hover:text-[var(--gold-dark)] transition-colors">
                        {item.info}
                      </a>
                    ) : (
                      <span className="text-[var(--text-muted)]">{item.info}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-48 bg-[var(--ivory)] rounded-xl border border-[rgba(201,169,110,0.2)] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
               <div className="absolute inset-0 flex items-center justify-center text-[var(--text-muted)] text-sm uppercase tracking-widest font-semibold">
                 Pune Map View
               </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
}