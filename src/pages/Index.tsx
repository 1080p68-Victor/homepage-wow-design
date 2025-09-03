import SideNavigation from "@/components/SideNavigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CollectionShowcase from "@/components/CollectionShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SideNavigation />
      <HeroSection />
      <FeaturedProducts />
      <CollectionShowcase />
      <Footer />
    </div>
  );
};

export default Index;
