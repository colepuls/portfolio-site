"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FloatingArrowProps {
  onClick?: () => void;
  className?: string;
}

export default function FloatingArrow({ onClick, className = "" }: FloatingArrowProps) {
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.button
      variants={floatingVariants}
      animate="animate"
      onClick={onClick}
      className={`
        text-gray-400 hover:text-gray-200 transition-colors
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        ${className}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ChevronDown size={32} />
    </motion.button>
  );
} 