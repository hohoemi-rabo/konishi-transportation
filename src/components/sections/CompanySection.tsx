"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

interface CompanyInfoItem {
  label: string;
  value: string;
  href?: string;
}

const COMPANY_INFO: CompanyInfoItem[] = [
  { label: "会社名", value: "小西運送株式会社" },
  { label: "代表者", value: "小西 隆士" },
  { label: "所在地", value: "三重県四日市市大井の川町1丁目1594番地5" },
  { label: "電話番号", value: "059-328-5248", href: "tel:0593285248" },
  { label: "車両台数", value: "15台" },
  { label: "対応エリア", value: "三重県全域" },
  { label: "認証", value: "グリーン経営認証取得（2010年〜）" },
];

export default function CompanySection() {
  return (
    <section id="company" className="section-padding bg-gradient-brand-reverse">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.h2 variants={staggerItem} className="section-title">
            会社概要
          </motion.h2>
          <motion.p variants={staggerItem} className="section-subtitle">
            小西運送株式会社の基本情報
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="max-w-2xl mx-auto bg-white rounded-2xl border border-brand-100 overflow-hidden shadow-sm"
          >
            <dl>
              {COMPANY_INFO.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 ${
                    i % 2 === 0 ? "bg-brand-50/50" : "bg-white"
                  } ${i < COMPANY_INFO.length - 1 ? "border-b border-brand-100" : ""}`}
                >
                  <dt className="text-sm font-bold text-brand-800 sm:w-36 shrink-0 mb-1 sm:mb-0">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-foreground/80">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-brand-600 hover:text-brand-700 font-medium transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
