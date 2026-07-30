"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Brand Co. / Client"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[var(--ivory)] border border-[rgba(201,169,110,0.3)] rounded-lg px-4 py-3 text-sm focus:border-[var(--gold)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[var(--ivory)] border border-[rgba(201,169,110,0.3)] rounded-lg px-4 py-3 text-sm focus:border-[var(--gold)] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">Project Category</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#fcfaf7] border border-[#c9a96e]/40 rounded-xl px-4 py-3.5 text-sm font-medium text-[#1b1c1c] focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20 focus:outline-none transition-all shadow-sm cursor-pointer"
                  >
                    <option value="">✦ Select Design Category ✦</option>
                    <option value="Logo Design">Brand Identity & Logo Design</option>
                    <option value="Brochure Design">Brochure & Print Layout</option>
                    <option value="Standee Design">Standee & Expo Banner</option>
                    <option value="Banners">Social Media & Campaign Banner</option>
                    <option value="News Paper">News Paper & Magazine Ad</option>
                    <option value="Other">Other Custom Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project or design requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[var(--ivory)] border border-[rgba(201,169,110,0.3)] rounded-lg px-4 py-3 text-sm focus:border-[var(--gold)] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full py-3.5 text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  {status === "loading" ? "Sending..." : <>Send Message <Send size={16} /></>}
                </button>
              </form>
            )}
          </div>

          {/* Info Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-[rgba(201,169,110,0.3)] shadow-xl">
              <h3 className="text-xl font-serif font-bold text-[var(--gold-dark)] mb-6">Contact Information</h3>
              <div className="space-y-6">
                
                <a href="mailto:Shwetanjadhav2018@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[var(--ivory-deep)] flex items-center justify-center text-[var(--gold-dark)] group-hover:bg-[var(--gold)] group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">Email</p>
                    <p className="text-sm font-medium text-[var(--charcoal)]">Shwetanjadhav2018@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919307081860" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[var(--ivory-deep)] flex items-center justify-center text-[var(--gold-dark)] group-hover:bg-[var(--gold)] group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">Phone</p>
                    <p className="text-sm font-medium text-[var(--charcoal)]">+91 93070 81860</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--ivory-deep)] flex items-center justify-center text-[var(--gold-dark)]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">Location</p>
                    <p className="text-sm font-medium text-[var(--charcoal)]">Bhekrai Nagar, Hadapsar, Pune, India</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Real Interactive Google Maps Embed centered on Hadapsar / Bhekrai Nagar */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[rgba(201,169,110,0.4)] h-56 relative">
              <iframe
                title="Bhekrai Nagar Hadapsar Pune Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15135.25301826048!2d73.9312154!3d18.4913214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9ffdd4c79db%3A0x6b77943d04f141bf!2sBhekrai%20Nagar%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-[rgba(201,169,110,0.3)] shadow-xl">
          <h2 className="text-2xl font-serif font-bold text-[var(--gold-dark)] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[rgba(201,169,110,0.2)] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm text-[var(--charcoal)] flex justify-between items-center bg-[var(--ivory)] hover:bg-[var(--ivory-deep)] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`transform transition-transform ${openFaq === idx ? "rotate-180 text-[var(--gold)]" : "text-[var(--text-muted)]"}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 text-xs text-[var(--charcoal-soft)] leading-relaxed border-t border-[rgba(201,169,110,0.15)] bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
