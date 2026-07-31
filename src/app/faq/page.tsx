import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { CtaSection } from "@/components/site/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ | VP Films",
  description: "Answers to common questions about booking, pricing, delivery, and travel.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know before booking your shoot."
      />

      <section className="container-px mx-auto max-w-3xl py-20 md:py-28">
        <Reveal>
          <FaqAccordion items={faqs} />
        </Reveal>
      </section>

      <CtaSection
        title="Still have questions?"
        description="Reach out and we'll get back to you within a day."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
