import { Suspense, useState, useEffect } from "react";
import HeroFuturistic from "@/components/ui/hero-futuristic";
import { HeroDesignAli } from "@/components/ui/hero-designali-hero";
import { Features } from "@/components/ui/features-5";
import FeatureModern from "@/components/ui/feature-modern";
import { CanvasSection } from "@/components/ui/canvas-section";
import { Features8 } from "@/components/ui/features-8";
import ImageShowcaseSection from "@/components/ui/image-showcase-section";
import ZoomableShowcaseSection from "@/components/ui/zoomable-showcase-section";
import { OpenPositions } from "@/components/ui/open-positions";
import { Footer } from "@/components/ui/footer";
import { HomeStats } from "@/components/ui/home-stats";
import { HomeTestimonials } from "@/components/ui/home-testimonials";
import { HomeFAQ } from "@/components/ui/home-faq";
import { HomeTrustSignals } from "@/components/ui/home-trust-signals";

const Index = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Suspense fallback={
        <div className="w-full h-screen flex items-center justify-center text-white bg-black">
          <div>Loading...</div>
        </div>
      }>
        <HeroFuturistic />
      </Suspense>
      <HeroDesignAli />
      <div id="industries"><Features /></div>
      <HomeStats />
      <div id="services"><FeatureModern /></div>
      <div id="about"><CanvasSection /></div>
      <Features8 />
      <HomeTestimonials />
      <HomeTrustSignals />
      <ImageShowcaseSection />
      <ZoomableShowcaseSection />
      <HomeFAQ />
      <OpenPositions />
      <Footer />
    </div>
  );
};

export default Index;
