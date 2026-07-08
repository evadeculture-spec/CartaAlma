import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Hero } from "@/components/marketing/hero";
import { ProblemSection } from "@/components/marketing/problem-section";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { DemoSection } from "@/components/marketing/demo-section";
import { UseCases } from "@/components/marketing/use-cases";
import { ProductSection } from "@/components/marketing/product-section";
import { ReminderSection } from "@/components/marketing/reminder-section";
import { EmotionalArchiveSection } from "@/components/marketing/emotional-archive-section";
import { TrustSection } from "@/components/marketing/trust-section";
import { FAQ } from "@/components/marketing/faq";
import { FinalCTA } from "@/components/marketing/final-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <DemoSection />
        <UseCases />
        <ProductSection />
        <ReminderSection />
        <EmotionalArchiveSection />
        <TrustSection />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
