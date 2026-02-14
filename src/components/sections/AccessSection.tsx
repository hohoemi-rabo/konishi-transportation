"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

const ADDRESS = "三重県四日市市大井の川町1丁目1594番地5";
const PHONE_NUMBER = "059-328-5248";
const PHONE_TEL = `tel:${PHONE_NUMBER.replace(/-/g, "")}`;
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.5!2d136.62!3d34.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5LiJ6YeN55yM5Zub5pel5biC5biC5aSn5LqV44Gu5bed55S677yR5LiB55uu77yR77yV77yZ77yU55Wq5Zyw77yV!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp";

export default function AccessSection() {
  return (
    <section id="access" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.h2 variants={staggerItem} className="section-title">
            アクセス
          </motion.h2>
          <motion.p variants={staggerItem} className="section-subtitle">
            お気軽にお問い合わせください
          </motion.p>

          {/* Google Maps */}
          <motion.div
            variants={staggerItem}
            className="max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl border border-brand-100 shadow-sm"
          >
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="小西運送株式会社の所在地"
              className="w-full aspect-video"
            />
          </motion.div>

          {/* 住所・電話番号 */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2 text-foreground/70">
              <MapPin className="w-4 h-4 text-brand-500 shrink-0" aria-hidden="true" />
              <span>{ADDRESS}</span>
            </div>
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors duration-200"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{PHONE_NUMBER}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
