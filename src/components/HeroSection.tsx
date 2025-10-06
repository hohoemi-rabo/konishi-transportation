"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // パララックス効果
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        {/* 仮背景（ユーザーが後で画像を追加） */}
        <div className="absolute inset-0 bg-[#0a1f1f] bg-[linear-gradient(rgba(10,31,31,0.8),rgba(13,38,38,0.9)),url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920')] bg-cover bg-center" />
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
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-200 mb-6 leading-relaxed">
              小西運送会社は、環境に配慮したクリーンな企業イメージと、最先端のテクノロジーを駆使した物流サービスで、
              地域の皆さまと共に持続可能な未来を創造します。
            </p>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-2 mb-8">
              <button
                onClick={() => scrollToSection("service")}
                className="group bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full font-medium text-xs transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-1.5 justify-center"
              >
                今すぐ詳しく
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("sustainability")}
                className="group border-2 border-white hover:bg-white hover:text-dark-bg text-white px-4 py-2 rounded-full font-medium text-xs transition-all duration-300 hover:scale-105 flex items-center gap-1.5 justify-center"
              >
                環境への取り組み
              </button>
            </div>
          </motion.div>
        </div>

        {/* KPI表示エリア */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-lg"
        >
          {/* CO2削減率 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-[9px] text-gray-300 mb-0.5 uppercase tracking-wider">
              CO2削減率
            </div>
            <div className="text-xl font-bold text-white font-mono mb-0.5">
              24<span className="text-sm">%</span>
            </div>
            <div className="text-[8px] text-gray-400 leading-tight">
              2019年比で29.6%削減（想定値）
            </div>
          </div>

          {/* エコドライブ実施率 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-[9px] text-gray-300 mb-0.5 uppercase tracking-wider">
              エコドライブ実施率
            </div>
            <div className="text-xl font-bold text-white font-mono mb-0.5">
              72<span className="text-sm">%</span>
            </div>
            <div className="text-[8px] text-gray-400 leading-tight">
              全ドライバーがエコドライブを実践
            </div>
          </div>

          {/* 事故率 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-[9px] text-gray-300 mb-0.5 uppercase tracking-wider">
              事故率
            </div>
            <div className="text-xl font-bold text-white font-mono mb-0.5">
              0.3<span className="text-sm">%</span>
            </div>
            <div className="text-[8px] text-gray-400 leading-tight">
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
