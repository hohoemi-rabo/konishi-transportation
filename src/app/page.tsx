import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EnvironmentSection from "@/components/sections/EnvironmentSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* 以下、各セクションのプレースホルダー */}
      <ServicesSection />

      <EnvironmentSection />

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
