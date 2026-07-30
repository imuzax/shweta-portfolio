"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, MapPin, Award, Heart, CheckCircle } from "lucide-react";

export default function About() {
  return (
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
