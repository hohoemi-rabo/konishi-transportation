"use client";

import { motion } from "framer-motion";
import { Truck, Package, Boxes } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: 1,
    icon: Truck,
    title: "一般貨物輸送",
    description:
      "食品・日用品・工業製品まで幅広い貨物を、安全とスピードを両立させ、確実にお客様のもとへお届けします。",
    features: [
      "迅速・確実な輸配送対応",
      "リアルタイムAI配送管理体制",
      "24時間365日体制管理",
    ],
  },
  {
    id: 2,
    icon: Boxes,
    title: "重量物輸送",
    description:
      "大型設備やプラント部材など、専門的な知識と高い技術力を要する重量物の輸送に対応。専門スタッフによる綿密な計画の元実施します。",
    features: [
      "専門スタッフによる安全計画",
      "最新設備による安全輸送",
      "国道走行許可サポート",
    ],
  },
  {
    id: 3,
    icon: Package,
    title: "特殊輸送",
    description:
      "医薬品・精密機器など温度管理が必要な貨物や、特殊な配送形態が求められる輸送に対応。高精度の配送プレードの提供に努めます。",
    features: [
      "高精度温度管理対応ドライバー",
      "クリーンルームから配送",
      "IoT温度モニタリング",
    ],
  },
];

export default function ServiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="service"
      ref={ref}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0a1f1f] via-[#0d2626] to-[#0f2d2d] overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
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
            SERVICE
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-3 mb-6">
            幅広いニーズに応える物流サービス
          </h2>
          <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 max-w-3xl">
            一般貨物から特殊輸送まで、安全とスピードを両立させ、地域と社会の未来を支える幅広い輸送サービスを提供しています。
          </p>
        </motion.div>

        {/* サービスカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-dark-bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-dark-bg-card/80 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              {/* アイコン */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-9 h-9 text-primary" />
              </div>

              {/* タイトル */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* 説明 */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* 特徴リスト */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-gray-400"
                  >
                    <span className="text-primary mt-1">●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
