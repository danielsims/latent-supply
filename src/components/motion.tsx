"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface AnimateProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Animates on mount — use for hero and above-the-fold elements.
 * Default: slide up + fade + subtle blur.
 * "fade": opacity only (good for nav content).
 * "line": scaleX draw from left (good for dividers).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "default",
}: AnimateProps & { variant?: "default" | "fade" | "line" }) {
  const variants = {
    default: {
      initial: { opacity: 0, y: 28, filter: "blur(4px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      duration: 1,
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      duration: 0.6,
    },
    line: {
      initial: { scaleX: 0, opacity: 0 },
      animate: { scaleX: 1, opacity: 1 },
      duration: 0.8,
    },
  };

  const v = variants[variant];

  return (
    <motion.div
      initial={v.initial}
      animate={v.animate}
      transition={{ duration: v.duration, ease, delay }}
      className={className}
      style={variant === "line" ? { transformOrigin: "left" } : undefined}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animates when scrolled into view — use for all below-fold content.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
}: AnimateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
