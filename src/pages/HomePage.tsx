import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import StatsSection from '../sections/StatsSection';
import ServicesSection from '../sections/ServicesSection';
import WhyChooseSection from '../sections/WhyChooseSection';
import AISolutionsSection from '../sections/AISolutionsSection';
import SocialMediaSection from '../sections/SocialMediaSection';
import YouTubeSection from '../sections/YouTubeSection';
import ProcessSection from '../sections/ProcessSection';
import PortfolioSection from '../sections/PortfolioSection';
import PricingSection from '../sections/PricingSection';
import FAQSection from '../sections/FAQSection';
import TestimonialSection from '../sections/TestimonialSection';
import BlogSection from '../sections/BlogSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage() {
  return (
    <div id="home-page" className="w-full">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <AISolutionsSection />
      <SocialMediaSection />
      <YouTubeSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

