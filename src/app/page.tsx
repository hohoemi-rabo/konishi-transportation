import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* 以下、各セクションのプレースホルダー */}
      <section id="services" className="section-padding bg-white">
        <div className="section-container">
          <h2 className="section-title">サービス紹介</h2>
          <p className="section-subtitle">事業内容・物流サービスの紹介</p>
        </div>
      </section>

      <section id="environment" className="section-padding bg-gradient-brand">
        <div className="section-container">
          <h2 className="section-title">環境への取り組み</h2>
          <p className="section-subtitle">グリーン経営認証取得企業</p>
        </div>
      </section>

      <section id="vehicles" className="section-padding bg-white">
        <div className="section-container">
          <h2 className="section-title">車両・設備紹介</h2>
          <p className="section-subtitle">保有車両15台</p>
        </div>
      </section>

      <section id="company" className="section-padding bg-gradient-brand-reverse">
        <div className="section-container">
          <h2 className="section-title">会社概要</h2>
          <p className="section-subtitle">小西運送株式会社</p>
        </div>
      </section>

      <section id="access" className="section-padding bg-white">
        <div className="section-container">
          <h2 className="section-title">アクセス</h2>
          <p className="section-subtitle">三重県四日市市大井の川町1丁目1594番地5</p>
        </div>
      </section>
    </>
  );
}
