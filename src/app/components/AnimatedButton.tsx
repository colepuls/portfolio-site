"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant: "primary" | "secondary" | "outline";
  className?: string;
  download?: string;
  target?: string;
  rel?: string;
  delay?: number;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant,
  className = "",
  download,
  target,
  rel,
  delay = 0,
}: AnimatedButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-[#3f3f46] hover:bg-[#27272a] text-white font-medium btn-primary";
      case "secondary":
        return "bg-[#3f3f46] hover:bg-[#27272a] text-white font-medium btn-secondary";
      case "outline":
        return "border border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white font-medium btn-outline";
      default:
        return "";
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay,
      }
    },
  };

  const buttonContent = (
    <motion.div
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.98 }}
      className={`
        relative overflow-hidden
        flex items-center justify-center gap-3 px-8 py-4 rounded-lg 
        transition-all duration-300 cursor-pointer hover:scale-105
        ${getVariantClasses()}
        ${className}
        group
        shadow-lg
      `}
    >
      {/* Button content */}
      <div className="flex items-center gap-3">
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className="inline-block"
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {buttonContent}
    </button>
  );
} 