import { Phone } from "lucide-react";

const PHONE_NUMBER = "059-328-5248";
const PHONE_TEL = `tel:${PHONE_NUMBER.replace(/-/g, "")}`;

const NAV_ITEMS = [
  { label: "サービス", href: "#services" },
  { label: "環境への取り組み", href: "#environment" },
  { label: "車両・設備", href: "#vehicles" },
  { label: "会社概要", href: "#company" },
  { label: "アクセス", href: "#access" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="section-container py-12 lg:py-16">
        {/* 上部: 3カラム */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
          {/* 会社情報 */}
          <div>
            <p className="text-lg font-bold mb-2">小西運送株式会社</p>
            <p className="text-sm text-brand-300 leading-relaxed">
              三重県四日市市大井の川町
              <br />
              1丁目1594番地5
            </p>
          </div>

          {/* ナビリンク */}
          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-brand-200 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 電話CTA */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-xs text-brand-400">お気軽にお電話ください</p>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 text-xl font-bold text-white hover:text-brand-200 transition-colors duration-200"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>
        </div>

        {/* 下部: コピーライト */}
        <div className="mt-10 pt-6 border-t border-brand-800">
          <p className="text-center text-xs text-brand-400">
            &copy; 2026 小西運送株式会社
          </p>
        </div>
      </div>
    </footer>
  );
}
