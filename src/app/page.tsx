import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import CompanySection from "@/components/CompanySection";
import AccessSection from "@/components/AccessSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServiceSection />
        <SustainabilitySection />
        <CompanySection />
        <AccessSection />
      </main>
    </>
  );
}
