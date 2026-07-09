import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { DemoSection } from "@/components/marketing/demo-section";
import { ProductSection } from "@/components/marketing/product-section";
import { MomentsSection } from "@/components/marketing/moments-section";
import { Testimonials } from "@/components/marketing/testimonials";
import { TrustSection } from "@/components/marketing/trust-section";
import { FAQ } from "@/components/marketing/faq";
import { FinalCTA } from "@/components/marketing/final-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <DemoSection />
        <ProductSection />
        <MomentsSection />
        <Testimonials />
        <TrustSection />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
