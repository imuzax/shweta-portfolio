"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomMouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Smooth Lagging Gold Ring Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#c9a96e]/60 pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "#c9a96e" : "rgba(201, 169, 110, 0.6)",
          backgroundColor: isHovered ? "rgba(201, 169, 110, 0.1)" : "transparent"
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5
        }}
      />

      {/* Inner Pinpoint Gold Dot Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#c9a96e] pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50
        }}
      />
    </>
  );
}
