"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a1f1f] border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* 左側: ロゴ・会社名 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg font-mono">KT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">小西運送株式会社</span>
                <span className="text-[10px] text-gray-400 uppercase">Konishi Transport Co., Ltd.</span>
              </div>
            </div>
          </div>

          {/* 中央: 会社情報 */}
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <p>〒510-0846 三重県四日市市大井の川町1丁目1594-5</p>
            <p>
              Tel:{" "}
              <a
                href="tel:059-328-5248"
                className="hover:text-primary transition-colors"
              >
                059-328-5248
              </a>
            </p>
            <p className="text-xs text-gray-400">大型トラック保有台数: 15台</p>
          </div>

          {/* 右側: コピーライト・免責 */}
          <div className="flex flex-col gap-2 text-xs text-gray-400 md:text-right">
            <p className="text-sm">© {currentYear} Konishi Transport. All Rights Reserved.</p>
            <p className="text-[10px]">※掲載内容は仮画像です。本公開時に更新されます。</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
