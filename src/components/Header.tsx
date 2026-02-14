"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "サービス", href: "#services" },
  { label: "環境への取り組み", href: "#environment" },
  { label: "車両・設備", href: "#vehicles" },
  { label: "会社概要", href: "#company" },
  { label: "アクセス", href: "#access" },
] as const;

const PHONE_NUMBER = "059-328-5248";
const PHONE_TEL = `tel:${PHONE_NUMBER.replace(/-/g, "")}`;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // モバイルメニュー開閉時のスクロール制御
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      closeMobileMenu();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const top =
          target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [closeMobileMenu]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* 会社名 */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`font-bold text-lg lg:text-xl tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-brand-900" : "text-white"
            }`}
          >
            小西運送
          </a>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="メインナビゲーション">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isScrolled
                    ? "text-foreground/70 hover:text-brand-600 hover:bg-brand-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* 電話番号CTA — ヘッダーの主役 */}
            <a
              href={PHONE_TEL}
              className="ml-4 inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{PHONE_NUMBER}</span>
            </a>
          </nav>

          {/* モバイル: CTA + ハンバーガー */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-1.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold px-3.5 py-2 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="電話をかける"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{PHONE_NUMBER}</span>
              <span className="sm:hidden">電話</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 cursor-pointer ${
                isScrolled
                  ? "text-foreground hover:bg-brand-50"
                  : "text-white hover:bg-white/10"
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-brand-100 overflow-hidden"
          >
            <nav className="section-container py-4" aria-label="モバイルナビゲーション">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-brand-600 hover:bg-brand-50 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
