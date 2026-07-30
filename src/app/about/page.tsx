"use client";

import { motion } from "framer-motion";
import { User, MapPin, Mail, Calendar, GraduationCap, Phone } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-8 max-w-5xl">
        
        <div className="text-center mb-16">
           <div className="gold-line mx-auto mb-6" />
           <p className="section-label mb-4">About Me</p>
           <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] mb-6">
             I’m Shweta Jadhav
           </h1>
           <p className="text-xl text-[var(--gold-dark)] italic font-serif">
             Graphic designer for more than 3 years
           </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* ─── Profile Image ─── */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass p-3 rounded-xl relative z-10">
              <div 
                className="w-full aspect-[4/5] rounded-lg overflow-hidden bg-[var(--ivory-deep)]"
                style={{ backgroundImage: "url('/images/shweta-about.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute top-8 -left-8 w-full h-full bg-[var(--charcoal)] rounded-xl opacity-5 -z-0" />
          </motion.div>

          {/* ─── Bio & Details ─── */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 pt-4"
          >
             <p className="text-lg leading-relaxed text-[var(--charcoal-soft)] mb-8">
               I'm a graphic designer who specializes in progressive brand development that helps companies and entrepreneurs achieve their business goals. I've been professionally designing logos, print materials, packaging, and branding projects.
             </p>

             {/* Info Grid */}
             <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4 mb-10">
               {[
                 { icon: <User size={18} />, label: "Name", value: "Shweta Jadhav" },
                 { icon: <MapPin size={18} />, label: "Location", value: "Pune, Maharashtra" },
                 { icon: <Mail size={18} />, label: "Email", value: "Shwetanjadhav2018@gmail.com" },
                 { icon: <Calendar size={18} />, label: "Experience", value: "3+ Years" },
                 { icon: <GraduationCap size={18} />, label: "Degree", value: "BA" },
                 { icon: <Phone size={18} />, label: "Phone", value: "+91 93070 81860" }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-start gap-3">
                   <div className="mt-1 text-[var(--gold)]">
                     {item.icon}
                   </div>
                   <div>
                     <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                     <p className="text-[var(--charcoal-mid)] font-medium text-sm">{item.value}</p>
                   </div>
                 </div>
               ))}
             </div>

             {/* Download CV CTA (Optional placeholder) */}
             <button className="btn-outline">
               Download Resume
             </button>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
