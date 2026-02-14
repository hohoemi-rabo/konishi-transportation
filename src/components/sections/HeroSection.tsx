"use client";

import { motion } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { staggerContainer, staggerItem } from "@/lib/animations";

const ParticleNetwork = dynamic(() => import("@/components/ui/ParticleNetwork"), {
  ssr: false,
});

const PHONE_NUMBER = "059-328-5248";
const PHONE_TEL = `tel:${PHONE_NUMBER.replace(/-/g, "")}`;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* 背景: グラデーション + 将来の写真差し替え対応 */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />

      {/* パーティクルアニメーション（背景装飾） */}
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>

      {/* オーバーレイ（テキスト可読性確保） */}
      <div className="absolute inset-0 bg-brand-950/30" />

      {/* コンテンツ */}
      <motion.div
        className="relative z-10 section-container text-center pt-20 pb-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={staggerItem}
          className="inline-block text-brand-300 text-sm md:text-base font-medium tracking-widest uppercase mb-6 border border-brand-400/30 rounded-full px-4 py-1.5"
        >
          三重県四日市市の運送会社
        </motion.p>

        <motion.h1
          variants={staggerItem}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          クリーンでハイテクな物流で、
          <br />
          <span className="text-brand-300">次の社会を支える</span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          小西運送株式会社は、環境に配慮したクリーンな企業イメージと、
          最先端のテクノロジーを駆使した物流サービスで、
          地域の皆さまと共に持続可能な未来を創造します。
        </motion.p>

        <motion.div variants={staggerItem}>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-3 bg-brand-500 hover:bg-brand-400 text-white text-lg font-bold px-8 py-4 rounded-full transition-colors duration-200 cursor-pointer shadow-lg shadow-brand-500/30"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </motion.div>
      </motion.div>

      {/* スクロール誘導 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a
          href="#services"
          className="text-white/40 hover:text-white/70 transition-colors duration-200"
          aria-label="次のセクションへスクロール"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
}
