"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useDarkModeStore } from "@/store/useDarkModeStore";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const { isDark, toggle, initialize } = useDarkModeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initialize();
  }, [initialize]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors"
        aria-label="ダークモード切り替え"
        disabled
      >
        <span className="sr-only">ダークモード切り替え</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-dark-bg-lighter transition-colors duration-300 flex items-center"
      aria-label={isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
    >
      <motion.div
        className="absolute w-6 h-6 bg-white dark:bg-primary rounded-full shadow-md flex items-center justify-center"
        initial={false}
        animate={{
          x: isDark ? 28 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-white" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
      <span className="sr-only">
        {isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
      </span>
    </button>
  );
}
