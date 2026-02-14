"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Wrench,
  MapPinned,
  TreePine,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  fadeInLeft,
  fadeInRight,
  defaultViewport,
} from "@/lib/animations";

interface Initiative {
  icon: LucideIcon;
  title: string;
  description: string;
}

const INITIATIVES: Initiative[] = [
  {
    icon: Leaf,
    title: "エコドライブの推進",
    description: "燃費向上と排出抑制を両立する運転技術の徹底",
  },
  {
    icon: Wrench,
    title: "車両の定期メンテナンス",
    description: "計画的な整備による車両コンディションの最適化",
  },
  {
    icon: MapPinned,
    title: "効率的な配車計画",
    description: "最適ルート設計による無駄のない物流オペレーション",
  },
  {
    icon: TreePine,
    title: "地域環境との共生",
    description: "地域に根ざした環境保全活動への継続的な取り組み",
  },
];

export default function EnvironmentSection() {
  return (
    <section id="environment" className="section-padding bg-gradient-brand relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.h2 variants={staggerItem} className="section-title">
            環境への取り組み
          </motion.h2>
          <motion.p variants={staggerItem} className="section-subtitle">
            クリーンな物流で、持続可能な社会の実現を目指します
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-4">
          {/* 左: グリーン経営認証バッジ — このセクションの主役 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-brand-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-brand-500 rounded-xl shrink-0">
                <ShieldCheck className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-600 tracking-wide">
                  認証取得企業
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  グリーン経営認証
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-foreground/70">
              <p>
                交通エコロジー・モビリティ財団（エコモ財団）が認定する環境保全の取り組みに関する認証制度です。
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-brand-50 rounded-xl p-4">
                  <p className="text-xs text-brand-600 font-medium mb-1">初回認証</p>
                  <p className="text-2xl font-bold text-brand-900">2010<span className="text-base font-medium">年</span></p>
                </div>
                <div className="bg-brand-50 rounded-xl p-4">
                  <p className="text-xs text-brand-600 font-medium mb-1">継続年数</p>
                  <p className="text-2xl font-bold text-brand-900">15<span className="text-base font-medium">年以上</span></p>
                </div>
              </div>
              <p className="text-xs text-foreground/50 pt-1">
                登録番号: T240098 ／ 認証機関: 公益財団法人 交通エコロジー・モビリティ財団
              </p>
            </div>
          </motion.div>

          {/* 右: テーマ項目 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
            className="space-y-5"
          >
            {INITIATIVES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-white border border-brand-200 rounded-lg shrink-0 transition-colors duration-200 group-hover:bg-brand-50">
                    <Icon className="w-5 h-5 text-brand-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
