"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Sparkles, Layers, Image, Layout, Newspaper, HelpCircle } from "lucide-react";

interface CategoryOption {
  value: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}

const CATEGORY_OPTIONS: CategoryOption[] = [
  {
    value: "Logo Design",
    label: "Brand Identity & Logo Design",
    desc: "Bespoke logos, brand guidelines & visual identity",
    icon: <Sparkles size={16} className="text-[#c9a96e]" />
  },
  {
    value: "Brochure Design",
    label: "Brochure & Print Layout",
    desc: "Luxury bi-fold/tri-fold brochures & booklets",
    icon: <Layout size={16} className="text-[#c9a96e]" />
  },
  {
    value: "Standee Design",
    label: "Standee & Expo Banner",
    desc: "Roll-up standees & exhibition display graphics",
    icon: <Layers size={16} className="text-[#c9a96e]" />
  },
  {
    value: "Banners",
    label: "Social Media & Campaign Banner",
    desc: "Digital banners, flex prints & marketing ads",
    icon: <Image size={16} className="text-[#c9a96e]" />
  },
  {
    value: "News Paper",
    label: "News Paper & Magazine Ad",
    desc: "High-resolution print ads & editorial designs",
    icon: <Newspaper size={16} className="text-[#c9a96e]" />
  },
  {
    value: "Other",
    label: "Other Custom Inquiry",
    desc: "Tailored creative design consultation",
    icon: <HelpCircle size={16} className="text-[#c9a96e]" />
  }
];

interface CustomCategorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CustomCategorySelect({ value, onChange }: CustomCategorySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = CATEGORY_OPTIONS.find((opt) => opt.value === value);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#fcfaf7] hover:bg-white border border-[#c9a96e]/40 hover:border-[#c9a96e] rounded-xl px-4 py-3.5 flex items-center justify-between text-left transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/30"
      >
        <div className="flex items-center gap-3 overflow-hidden">
          {selectedOption ? (
            <>
              <div className="w-8 h-8 rounded-lg bg-[#1b1c1c] flex items-center justify-center shrink-0">
                {selectedOption.icon}
              </div>
              <div>
                <span className="text-sm font-semibold text-[#1b1c1c] block leading-tight">
                  {selectedOption.label}
                </span>
                <span className="text-[10px] text-[#5f5e59] block">
                  {selectedOption.desc}
                </span>
              </div>
            </>
          ) : (
            <span className="text-sm font-medium text-[#5f5e59] flex items-center gap-2">
              <Sparkles size={16} className="text-[#c9a96e]" />
              ✦ Select Design Category ✦
            </span>
          )}
        </div>

        <ChevronDown
          size={18}
          className={`text-[#745a27] transition-transform duration-300 shrink-0 ml-2 ${
            isOpen ? "rotate-180 text-[#c9a96e]" : ""
          }`}
        />
      </button>

      {/* Animated Dropdown Menu List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 z-50 bg-[#1b1c1c] border border-[#c9a96e]/40 rounded-2xl shadow-2xl p-2 max-h-80 overflow-y-auto space-y-1 backdrop-blur-xl"
          >
            {CATEGORY_OPTIONS.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full p-3 rounded-xl flex items-center justify-between transition-all duration-150 text-left group ${
                    isSelected
                      ? "bg-[#c9a96e]/20 border border-[#c9a96e]/50 text-white"
                      : "hover:bg-white/10 text-white/80 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#c9a96e] text-[#1b1c1c]"
                          : "bg-white/10 text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-[#1b1c1c]"
                      }`}
                    >
                      {opt.icon}
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold block">
                        {opt.label}
                      </span>
                      <span className="text-[10px] text-white/50 block">
                        {opt.desc}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check size={16} className="text-[#c9a96e] shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
