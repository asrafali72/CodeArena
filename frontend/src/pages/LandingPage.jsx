import HeroSection from "../components/landing/HeroSection";
import PlatformSection from "../components/landing/PlatformSection";
import BattleSection from "../components/landing/BattleSection";
import AISection from "../components/landing/AISection";
import AnalyticsSection from "../components/landing/AnalyticsSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import Footer from "../components/landing/Footer";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <HeroSection />
      <PlatformSection />
      <BattleSection />
      <AISection />
      <AnalyticsSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
};

export default LandingPage;