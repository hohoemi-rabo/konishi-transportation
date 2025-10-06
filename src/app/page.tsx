import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Service Section */}
        <section id="service" className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">事業内容</h2>
            <p className="text-lg">チケット06で実装予定</p>
          </div>
        </section>

        {/* Sustainability Section */}
        <section id="sustainability" className="min-h-screen flex items-center justify-center bg-gradient-section">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">環境への取り組み</h2>
            <p className="text-lg">チケット07で実装予定</p>
          </div>
        </section>

        {/* Company Section */}
        <section id="company" className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">会社概要</h2>
            <p className="text-lg">チケット08で実装予定</p>
          </div>
        </section>

        {/* Access Section */}
        <section id="access" className="min-h-screen flex items-center justify-center bg-gradient-section">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">アクセス</h2>
            <p className="text-lg">チケット09で実装予定</p>
          </div>
        </section>
      </main>
    </>
  );
}
