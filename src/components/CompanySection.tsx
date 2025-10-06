"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Shield, Leaf, CheckCircle } from "lucide-react";

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

// 統計データ
const statsData = [
  { id: 1, value: 30, unit: "年", label: "創業の歴史", description: "1995年創業（予定）" },
  { id: 2, value: 15, unit: "台", label: "大型トラック保有", description: "全車GPS搭載想定" },
  { id: 3, value: 96, unit: "%", label: "顧客満足度", description: "年次アンケート（2024年度）" },
  { id: 4, value: 420, unit: "日", label: "無事故継続", description: "最長安全記録" },
];

// 認証データ
const certificationsData = [
  {
    id: 1,
    title: "Gマーク（安全性優良事業所）",
    description: "全国貨物自動車運送適正化事業実施機関による安全性評価認証。",
  },
  {
    id: 2,
    title: "グリーン経営認証",
    description: "環境保全活動に取り組む自動車運送業を認定し環境改善の取り組みをサポート。",
  },
  {
    id: 3,
    title: "ISO14001（環境マネジメント）",
    description: "国際的な環境マネジメントシステムで環境改善を実行。",
  },
  {
    id: 4,
    title: "運輸安全マネジメント",
    description: "国交省ガイドラインに基づく安全管理体制を整備。",
  },
];

// タイムラインデータ
const timelineData = [
  { id: 1, year: "1995", color: "text-accent-turquoise", description: "四日市市に創業、一般貨物輸送を開始" },
  { id: 2, year: "2010", color: "text-accent-cyan", description: "ISO14001を取得、環境マネジメントを強化" },
  { id: 3, year: "2018", color: "text-accent-green", description: "防災備蓄事業へ参入、防災プロジェクトを始動" },
  { id: 4, year: "2024", color: "text-primary", description: "IoT運行管理システムを導入し全車輌さらに進化" },
];

export default function CompanySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="company"
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
            COMPANY
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
            数字とメッセージで知る小西運送会社
          </h2>
          <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 max-w-3xl">
            地域と共に歩む30年。安全と品質・環境性能に、次の30年へ進化を続けます。
          </p>
        </motion.div>

        {/* コンテンツエリア */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* 1. 社長メッセージ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
          >
            {/* 社長写真 */}
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                代表取締役（仮）
              </div>
            </div>

            {/* メッセージ */}
            <p className="text-sm text-gray-300 leading-relaxed">
              「地域と共に歩む30年。安全と品質で信頼に応えます。」
            </p>
          </motion.div>

          {/* 2. 数字で見る小西運送 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-dark-bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
          >
            <h3 className="text-sm font-semibold text-white mb-6">数字で見る小西運送</h3>
            <div className="space-y-6">
              {statsData.map((stat, index) => (
                <StatCard key={stat.id} stat={stat} index={index} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          {/* 3. 取得認証・資格 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-dark-bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
          >
            <h3 className="text-sm font-semibold text-white mb-6">取得認証・資格</h3>
            <div className="space-y-4">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="border-l-2 border-primary pl-3"
                >
                  <h4 className="text-xs font-semibold text-white mb-1">{cert.title}</h4>
                  <p className="text-[10px] text-gray-400 leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 4. ハイライト（タイムライン） */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-dark-bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
          >
            <h3 className="text-sm font-semibold text-white mb-6">ハイライト</h3>
            <div className="space-y-4">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex gap-3"
                >
                  <span className={`text-lg font-bold font-mono ${item.color} min-w-[60px]`}>
                    {item.year}
                  </span>
                  <p className="text-[10px] text-gray-400 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// 統計カードコンポーネント
function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: typeof statsData[0];
  index: number;
  isInView: boolean;
}) {
  const count = useCountUp(stat.value, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
    >
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-3xl font-bold text-primary font-mono">{count}</span>
        <span className="text-lg text-primary font-semibold">{stat.unit}</span>
      </div>
      <h4 className="text-xs font-semibold text-white mb-1">{stat.label}</h4>
      <p className="text-[10px] text-gray-400">{stat.description}</p>
    </motion.div>
  );
}
