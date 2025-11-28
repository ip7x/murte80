import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import CategorySection from "@/components/CategorySection";
import HowItWorks from "@/components/HowItWorks";
import FeaturedServices from "@/components/FeaturedServices";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustIndicators />
        <CategorySection />
        <HowItWorks />
        <FeaturedServices />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
