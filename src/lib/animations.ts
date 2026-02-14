import type { Variants, Transition } from "framer-motion";

// --- 共通トランジション ---
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

// --- フェードインバリアント ---
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: defaultTransition },
};

// --- スタガー（子要素の順次アニメーション）---
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

// --- Viewport設定（共通）---
export const defaultViewport = {
  once: true,
  amount: 0.2 as const,
  margin: "-50px" as const,
};

// --- カウントアップ用（車両台数等）---
export const countUpTransition: Transition = {
  duration: 2,
  ease: "easeOut",
};
