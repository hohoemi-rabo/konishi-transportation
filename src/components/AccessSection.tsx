"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { useRipple } from "@/hooks/useRipple";

export default function AccessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const address = "〒510-0846 三重県四日市市大井の川町1丁目1594-5";
  const phone = "059-328-5248";
  const hours = "平日9:00～18:00";

  // Google Maps URL（実際の住所でエンコード）
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  // リップルエフェクト
  const { ripples: ripples1, addRipple: addRipple1 } = useRipple();
  const { ripples: ripples2, addRipple: addRipple2 } = useRipple();

  return (
    <section
      id="access"
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
            ACCESS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-3 mb-6 leading-tight shimmer-overlay">
            地域の皆さまと共に。お気軽にお問い合わせください。
          </h2>
        </motion.div>

        {/* コンテンツエリア */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 左側: 連絡先情報 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 animate-glow-pulse shimmer-overlay"
          >
            <h3 className="text-lg font-bold text-white mb-6">本社所在地</h3>

            {/* 住所 */}
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-300 leading-relaxed">{address}</p>
              </div>
            </div>

            {/* 電話 */}
            <div className="flex items-start gap-3 mb-4">
              <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 mb-1">Tel:</p>
                <a
                  href={`tel:${phone.replace(/-/g, "")}`}
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* 受付時間 */}
            <div className="flex items-start gap-3 mb-8">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 mb-1">受付時間:</p>
                <p className="text-sm text-gray-300">{hours}</p>
              </div>
            </div>

            {/* ボタン */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${phone.replace(/-/g, "")}`}
                onClick={addRipple1}
                className="flex-1 relative overflow-hidden bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                電話する
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
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={addRipple2}
                className="flex-1 relative overflow-hidden bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                GOOGLE マップ
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
              </a>
            </div>
          </motion.div>

          {/* 右側: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-dark-bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-2 overflow-hidden animate-glow-pulse shimmer-overlay"
          >
            <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.890123456789!2d136.6234567!3d34.9654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU3JzU1LjYiTiAxMzbCsDM3JzI0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="小西運送会社の地図"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
