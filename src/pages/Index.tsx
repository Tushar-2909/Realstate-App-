import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import NotAverageSection from "@/components/landing/NotAverageSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import AboutSection from "@/components/landing/AboutSection";
import ProjectsSection from "@/components/landing/ProjectsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NotAverageSection />
      <WhyChooseUs />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
