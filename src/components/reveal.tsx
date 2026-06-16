'use client';

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  once?: boolean;
  hover?: boolean;
  tap?: boolean;
};

const enterVariants: Variants = {
  hidden: (direction: Direction) => {
    const base = { opacity: 0, filter: "blur(6px)" };
    switch (direction) {
      case "left":
        return { ...base, x: -28, y: 0, rotate: -0.6, scale: 0.98 };
      case "right":
        return { ...base, x: 28, y: 0, rotate: 0.6, scale: 0.98 };
      case "down":
        return { ...base, x: 0, y: -26, rotate: 0.3, scale: 0.98 };
      case "up":
        return { ...base, x: 0, y: 26, rotate: -0.3, scale: 0.98 };
      case "none":
      default:
        return { ...base, x: 0, y: 0, rotate: 0, scale: 0.98 };
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
  },
};

const hoverVariants: Variants = {
  hover: {
    y: -6,
    rotate: 0.1,
    scale: 1.01,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
};

const tapVariants: Variants = {
  tap: {
    scale: 0.99,
    transition: { duration: 0.08 },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  hover = false,
  tap = false,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={{
        ...enterVariants,
        ...(hover ? hoverVariants : {}),
        ...(tap ? tapVariants : {}),
      }}
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={hover ? "hover" : undefined}
      whileTap={tap ? "tap" : undefined}
    >
      {children}
    </motion.div>
  );
}