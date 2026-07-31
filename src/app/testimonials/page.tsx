import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { CtaSection } from "@/components/site/cta-section";
import { RevealGroup } from "@/components/motion/reveal";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials | VP Films",
  description: "Real stories from the couples, families and brands VP Films has worked with.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kind Words"
        title="Loved by our clients"
        description="Nothing means more to us than the trust our clients place in our team."
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </RevealGroup>
      </section>

      <CtaSection />
    </>
  );
}
