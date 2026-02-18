import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FeatureCards } from '@/components/sections/FeatureCards';
import { IntegratePartners } from '@/components/sections/IntegratePartners';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { Ecosystem } from '@/components/sections/Ecosystem';
import { NewsSection } from '@/components/sections/NewsSection';
import { FooterCTA } from '@/components/sections/FooterCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-black">
      <Navigation />
      <Hero />
      <HowItWorks />
      <FeatureCards />
      <IntegratePartners />
      <TestimonialsSection />
      <Ecosystem />
      <NewsSection />
      <FooterCTA />
    </div>
  );
}
