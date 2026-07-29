import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { CtaSection } from "@/components/site/cta-section";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { services, stats, testimonials, whyChooseUs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-border bg-secondary/30 py-10">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-gold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built around your story"
          description="From intimate portraits to full-scale productions, every service is tailored to how you want to be remembered."
        />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </RevealGroup>
        <Reveal className="mt-12 flex justify-center">
          <Button render={<Link href="/services" />} variant="outline" size="lg" className="h-11 px-6">
            View All Services <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Lumière"
            title="Why Choose Us"
            description="A decade of experience, a full creative team, and a promise: your gallery, delivered beautifully and on time."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title} className="text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold-muted text-gold">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading
          eyebrow="Featured Work"
          title="From Our Portfolio"
          description="A glimpse into the weddings, brands, and stories we've had the honour of shooting."
        />
        <div className="mt-14">
          <PortfolioGrid limit={9} showFilters={false} />
        </div>
        <Reveal className="mt-4 flex justify-center">
          <Button render={<Link href="/portfolio" />} variant="outline" size="lg" className="h-11 px-6">
            View Full Portfolio <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Kind Words"
            title="Loved by our clients"
            description="Real stories from the couples, families and brands we've worked with."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
