"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const co2Data = [
  { year: "2019", value: 100, label: "2019年比でCO2排出量 29.6% 削減（想定値）" },
  { year: "2021", value: 85 },
  { year: "2023", value: 76 },
];

const progressData = [
  {
    id: 1,
    title: "エコドライブ実施率",
    percentage: 98,
    description: "省エネトレーナによる全国規模でドライバーへエコドライブ実践。燃費12%向上を支援。",
    color: "from-accent-turquoise to-accent-cyan",
  },
  {
    id: 2,
    title: "低公害車比率",
    percentage: 72,
    description: "電動・ハイブリッド車両の導入を推進し、2026年までに 80% を目標に取り組む中。",
    color: "from-accent-cyan to-primary",
  },
  {
    id: 3,
    title: "CO2削減率",
    percentage: 24,
    description: "2019年比で 29.6 削減、太陽光発電設置やアイドリングストップの徹底で温暖化できる役割。",
    color: "from-accent-green to-red-500",
  },
];

// カウントアップフック
function useCountUp(end: number, duration: number = 2000, isInView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return count;
}

export default function SustainabilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="sustainability"
      ref={ref}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0f2d2d] via-[#0d2626] to-[#0a1f1f] overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクション見出し */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-xs sm:text-sm uppercase tracking-wider font-semibold">
            SUSTAINABILITY
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
            環境と共生する、持続可能な物流への挑戦
          </h2>
          <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 max-w-3xl">
            エコドライブ推進や低公害車導入など、具体的なアクションでカーボンニュートラル社会に貢献します。
          </p>
        </motion.div>

        {/* コンテンツエリア */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 左側: CO2排出量推移グラフ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-[420px]"
          >
            <h3 className="text-sm text-gray-400 mb-12 uppercase tracking-wider">
              CO2排出量推移
            </h3>

            {/* グラフ */}
            <div className="relative h-48 mb-3 flex items-end justify-around gap-3 px-1 mt-10">
              {co2Data.map((data, index) => {
                const height = (data.value / 100) * 100;
                return (
                  <div key={data.year} className="flex flex-col items-center gap-3 flex-1 max-w-[160px]">
                    <div className="w-full h-48 flex items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${height}%` } : { height: 0 }}
                        transition={{ duration: 1, delay: 0.4 + index * 0.2, ease: "easeOut" }}
                        className="w-full bg-gradient-to-t from-accent-turquoise to-accent-cyan rounded-t-xl min-h-[40px]"
                      />
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{data.year}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              {co2Data[0].label}
            </p>
          </motion.div>

          {/* 右側: プログレスバー */}
          <div className="space-y-6">
            {progressData.map((item, index) => (
              <ProgressBar
                key={item.id}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}

            {/* 追加情報 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-4 space-y-2"
            >
              <p className="text-xs text-gray-400">
                ● エコドライブ認定ドライバー: 100% 達成
              </p>
              <p className="text-xs text-gray-400">
                ● 電動フォークリフト導入率: 80%
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// プログレスバーコンポーネント
function ProgressBar({
  item,
  index,
  isInView,
}: {
  item: (typeof progressData)[0];
  index: number;
  isInView: boolean;
}) {
  const count = useCountUp(item.percentage, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
      className="bg-dark-bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
    >
      {/* タイトルとパーセンテージ */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">{item.title}</h3>
        <span className="text-2xl font-bold font-mono text-primary">
          {count}%
        </span>
      </div>

      {/* プログレスバー */}
      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${item.percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: 0.6 + index * 0.15, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
        />
      </div>

      {/* 説明 */}
      <p className="text-[10px] text-gray-400 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}
