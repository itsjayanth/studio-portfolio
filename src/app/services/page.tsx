import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { CtaSection } from "@/components/site/cta-section";
import { RevealGroup } from "@/components/motion/reveal";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | VP Films",
  description:
    "Explore our full range of photography and videography services across Bengaluru — weddings, baby shoots, corporate events, products, and films.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Services for every story"
        description="Whether it's a wedding, a newborn, a product launch, or a brand film — we have a dedicated service crafted for it."
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading title="Browse all services" align="left" className="mx-0 text-left" />
        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </RevealGroup>
      </section>

      <CtaSection />
    </>
  );
}
