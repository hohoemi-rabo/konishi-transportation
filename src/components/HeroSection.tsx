"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useRipple } from "@/hooks/useRipple";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // パララックス効果
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // リップルエフェクト
  const { ripples: ripples1, addRipple: addRipple1 } = useRipple();
  const { ripples: ripples2, addRipple: addRipple2 } = useRipple();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景画像（パララックス） */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f1f]/95 to-[#0d2626]/90 z-10" />
        {/* 背景画像 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        />
      </motion.div>

      {/* コンテンツ */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* メインコピー */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              クリーンでハイテクな物流で、
              <br />
              <span className="gradient-text">次の社会を支える</span>
            </h1>

            {/* サブコピー */}
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 mb-6 leading-relaxed">
              小西運送株式会社は、環境に配慮したクリーンな企業イメージと、最先端のテクノロジーを駆使した物流サービスで、
              地域の皆さまと共に持続可能な未来を創造します。
            </p>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-2 mb-8">
              <button
                onClick={(e) => {
                  addRipple1(e);
                  scrollToSection("service");
                }}
                className="group relative overflow-hidden bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full font-medium text-xs transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-1.5 justify-center"
              >
                今すぐ詳しく
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                {/* リップルエフェクト */}
                {ripples1.map((ripple) => (
                  <span
                    key={ripple.id}
                    className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: ripple.size,
                      height: ripple.size,
                    }}
                  />
                ))}
              </button>
              <button
                onClick={(e) => {
                  addRipple2(e);
                  scrollToSection("sustainability");
                }}
                className="group relative overflow-hidden border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-white px-4 py-2 rounded-full font-medium text-xs transition-all duration-300 hover:scale-105 flex items-center gap-1.5 justify-center"
              >
                環境への取り組み
                {/* リップルエフェクト */}
                {ripples2.map((ripple) => (
                  <span
                    key={ripple.id}
                    className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: ripple.size,
                      height: ripple.size,
                    }}
                  />
                ))}
              </button>
            </div>
          </motion.div>
        </div>

        {/* KPI表示エリア */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl"
        >
          {/* CO2削減率 */}
          <div className="bg-dark-bg-card/80 backdrop-blur-md rounded-lg p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-glow-pulse">
            <div className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">
              CO2削減率
            </div>
            <div className="text-3xl font-bold text-primary font-mono mb-1">
              24<span className="text-lg">%</span>
            </div>
            <div className="text-[9px] text-gray-400 leading-tight">
              2019年比で29.6%削減（想定値）
            </div>
          </div>

          {/* エコドライブ実施率 */}
          <div className="bg-dark-bg-card/80 backdrop-blur-md rounded-lg p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-glow-pulse">
            <div className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">
              エコドライブ実施率
            </div>
            <div className="text-3xl font-bold text-primary font-mono mb-1">
              72<span className="text-lg">%</span>
            </div>
            <div className="text-[9px] text-gray-400 leading-tight">
              全ドライバーがエコドライブを実践
            </div>
          </div>

          {/* 事故率 */}
          <div className="bg-dark-bg-card/80 backdrop-blur-md rounded-lg p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-glow-pulse">
            <div className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">
              事故率
            </div>
            <div className="text-3xl font-bold text-primary font-mono mb-1">
              0.3<span className="text-lg">%</span>
            </div>
            <div className="text-[9px] text-gray-400 leading-tight">
              業界平均を大きく下回る安全性
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
