"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Sparkles } from "lucide-react";

interface CategoryOption {
  value: string;
  label: string;
}

const CATEGORY_OPTIONS: CategoryOption[] = [
  { value: "Logo Design", label: "Brand Identity & Logo Design" },
  { value: "Brochure Design", label: "Brochure & Print Layout" },
  { value: "Standee Design", label: "Standee & Expo Banner" },
  { value: "Banners", label: "Social Media & Campaign Banner" },
  { value: "News Paper", label: "News Paper & Magazine Ad" },
  { value: "Other", label: "Other Custom Inquiry" }
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
        className="w-full bg-[#fcfaf7] hover:bg-white border border-[rgba(201,169,110,0.4)] hover:border-[#c9a96e] rounded-lg px-4 py-3 flex items-center justify-between text-left transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/20"
      >
        <span className={`text-sm ${selectedOption ? "font-medium text-[#1b1c1c]" : "text-[#5f5e59]"}`}>
          {selectedOption ? selectedOption.label : "Select a Category"}
        </span>

        <ChevronDown
          size={16}
          className={`text-[#745a27] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#c9a96e]" : ""
          }`}
        />
      </button>

      {/* Animated Light Luxury Dropdown Menu List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.99 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.99 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 z-50 bg-white border border-[#c9a96e]/40 rounded-xl shadow-xl p-1.5 max-h-64 overflow-y-auto space-y-0.5"
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
                  className={`w-full px-3.5 py-2.5 rounded-lg flex items-center justify-between text-sm transition-colors text-left ${
                    isSelected
                      ? "bg-[#f6f3f2] font-semibold text-[#745a27]"
                      : "hover:bg-[#f6f3f2] text-[#1b1c1c] hover:text-[#745a27]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isSelected && <Sparkles size={14} className="text-[#c9a96e]" />}
                    {opt.label}
                  </span>

                  {isSelected && (
                    <Check size={16} className="text-[#c9a96e] shrink-0" />
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
