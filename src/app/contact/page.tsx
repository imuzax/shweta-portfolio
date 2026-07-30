"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronDown } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Brand identity projects typically take 2-4 weeks, while UI/UX and comprehensive print collateral packages take 3-6 weeks depending on scope."
    },
    {
      q: "Do you offer custom package deals?",
      a: "Yes! I create tailored packages combining logo design, standee artwork, expo invitations, and brand guidelines to fit your budget."
    },
    {
      q: "How do we get started?",
      a: "Simply fill out the form here or send me an email at Shwetanjadhav2018@gmail.com. I will respond within 24 hours to schedule a discovery call."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--ivory)] pt-24 pb-24 text-[var(--charcoal)]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium mb-3">
            <Link href="/" className="hover:text-[var(--gold-dark)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--gold-dark)]">Contact</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--gold-dark)]">Get in Touch</h1>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl border border-[rgba(201,169,110,0.3)] shadow-xl">
            <h2 className="text-2xl font-serif font-bold text-[var(--charcoal)] mb-6">Send an Inquiry</h2>

            {status === "success" ? (
              <div className="bg-[var(--ivory-deep)] p-8 rounded-xl border border-[var(--gold)] text-center space-y-4">
                <CheckCircle size={48} className="text-[var(--gold)] mx-auto" />
                <h3 className="text-xl font-bold text-[var(--charcoal)]">Message Received!</h3>
                <p className="text-sm text-[var(--charcoal-soft)] leading-relaxed">
                  Thank you for reaching out, Shweta will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline text-xs uppercase tracking-wider py-2 px-6"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
