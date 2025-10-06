import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import CompanySection from "@/components/CompanySection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServiceSection />
        <SustainabilitySection />
        <CompanySection />

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
