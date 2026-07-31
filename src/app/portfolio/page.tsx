import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { CtaSection } from "@/components/site/cta-section";

export const metadata: Metadata = {
  title: "Portfolio | VP Films",
  description:
    "Browse our portfolio of weddings, pre-weddings, baby shoots, corporate events, products, and films across Bengaluru.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Featured Portfolio"
        description="A curated look at the moments we've been trusted to capture — filter by category to explore."
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <PortfolioGrid />
      </section>

      <CtaSection />
    </>
  );
}
