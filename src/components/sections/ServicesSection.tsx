"use client";

import { motion } from "framer-motion";
import { Truck, Building2, Route, Warehouse, type LucideIcon } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/animations";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: Truck,
    title: "一般貨物運送",
    description:
      "三重県全域をカバーする一般貨物の輸送サービス。安全・確実にお届けします。",
  },
  {
    icon: Building2,
    title: "企業間物流（BtoB）",
    description:
      "大手運送会社との連携による幹線・エリア配送。効率的な物流ネットワークを構築。",
  },
  {
    icon: Route,
    title: "専用便・チャーター便",
    description:
      "お客様のニーズに合わせた専用車両での輸送。柔軟なスケジュール対応が可能です。",
  },
  {
    icon: Warehouse,
    title: "倉庫保管・在庫管理",
    description:
      "物流センターでの一時保管・仕分けサービス。在庫管理もお任せください。",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.h2 variants={staggerItem} className="section-title">
            サービス紹介
          </motion.h2>
          <motion.p variants={staggerItem} className="section-subtitle">
            お客様の多様なニーズにお応えする物流サービスを提供しています
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={staggerItem}
      className="group p-6 border border-brand-100 rounded-2xl transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-100/50"
    >
      <div className="w-14 h-14 flex items-center justify-center bg-brand-500 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-105">
        <Icon className="w-7 h-7 text-white" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-foreground/60">
        {service.description}
      </p>
    </motion.div>
  );
}
