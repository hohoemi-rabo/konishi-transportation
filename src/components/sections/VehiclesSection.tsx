"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Container,
  Satellite,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import {
  staggerContainer,
  staggerItem,
  fadeInLeft,
  fadeInRight,
  defaultViewport,
} from "@/lib/animations";

interface VehicleType {
  icon: LucideIcon;
  name: string;
  description: string;
}

interface Equipment {
  icon: LucideIcon;
  name: string;
  description: string;
}

const VEHICLE_TYPES: VehicleType[] = [
  {
    icon: Truck,
    name: "中型トラック",
    description: "日野レンジャー系 — 市街地から幹線まで対応する主力車両",
  },
  {
    icon: Container,
    name: "大型トラクターヘッド",
    description: "UDクオン系 — 長距離・大量輸送を担う大型車両",
  },
];

const EQUIPMENT: Equipment[] = [
  {
    icon: Satellite,
    name: "GPS車両管理システム",
    description: "全車両の位置をリアルタイムで把握し、最適な配車を実現",
  },
  {
    icon: Gauge,
    name: "デジタルタコグラフ",
    description: "運行データを記録・分析し、安全運転とエコドライブを推進",
  },
];

export default function VehiclesSection() {
  return (
    <section id="vehicles" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.h2 variants={staggerItem} className="section-title">
            車両・設備紹介
          </motion.h2>
          <motion.p variants={staggerItem} className="section-subtitle">
            安全・確実な輸送を支える車両と最新設備
          </motion.p>
        </motion.div>

        {/* カウントアップ — このセクションの主役 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerItem}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-brand-600 tracking-wide mb-2">
            保有車両台数
          </p>
          <div className="flex items-baseline justify-center gap-1">
            <CountUp
              target={15}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-brand-900"
            />
            <span className="text-2xl md:text-3xl font-bold text-brand-900">台</span>
          </div>
          <p className="text-sm text-foreground/50 mt-2">
            全車ホワイトボディで統一されたクリーンな車両群
          </p>
        </motion.div>

        {/* 2カラム: 車両タイプ / ハイテク設備 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* 左: 車両タイプ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-500 rounded-full" />
              車両ラインナップ
            </h3>
            <div className="space-y-4">
              {VEHICLE_TYPES.map((vehicle) => {
                const Icon = vehicle.icon;
                return (
                  <div
                    key={vehicle.name}
                    className="flex items-start gap-4 p-4 border border-brand-100 rounded-xl"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-brand-50 rounded-lg shrink-0">
                      <Icon className="w-5 h-5 text-brand-500" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground mb-1">
                        {vehicle.name}
                      </h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {vehicle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* 右: ハイテク設備 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-500 rounded-full" />
              搭載設備
            </h3>
            <div className="space-y-4">
              {EQUIPMENT.map((equip) => {
                const Icon = equip.icon;
                return (
                  <div
                    key={equip.name}
                    className="flex items-start gap-4 p-4 border border-brand-100 rounded-xl"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-brand-50 rounded-lg shrink-0">
                      <Icon className="w-5 h-5 text-brand-500" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground mb-1">
                        {equip.name}
                      </h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {equip.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
