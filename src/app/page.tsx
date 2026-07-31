import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { PackageCard } from "@/components/site/package-card";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { faqs, packages, services, siteConfig, stats, testimonials, whyChooseUs } from "@/lib/data";

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
          <Button render={<Link href="/services" />}
            nativeButton={false} variant="outline" size="lg" className="h-11 px-6">
            View All Services <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why VP Films"
            title="Why Choose VP Films"
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
          <Button render={<Link href="/portfolio" />}
            nativeButton={false} variant="outline" size="lg" className="h-11 px-6">
            View Full Portfolio <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading
          eyebrow="Pricing"
          title="Package Preview"
          description="Simple, transparent tiers. Every package can be tailored to fit your celebration exactly."
        />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </RevealGroup>
        <Reveal className="mt-4 flex justify-center">
          <Button render={<Link href="/packages" />} nativeButton={false} variant="outline" size="lg" className="h-11 px-6">
            View All Packages <ArrowRight className="size-4" />
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

      <section className="container-px mx-auto max-w-4xl py-20 md:py-28">
        <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
        <Reveal className="mt-12">
          <FaqAccordion items={faqs.slice(0, 5)} />
        </Reveal>
        <Reveal className="mt-8 flex justify-center">
          <Button render={<Link href="/faq" />} nativeButton={false} variant="outline" size="lg" className="h-11 px-6">
            View All FAQs <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 text-center sm:px-12 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0%, transparent 40%)",
              }}
            />
            <span className="relative text-xs font-medium uppercase tracking-[0.2em] text-gold">Get In Touch</span>
            <h2 className="relative mt-3 font-heading text-3xl font-semibold text-balance text-background sm:text-4xl md:text-5xl">
              Let&rsquo;s create something beautiful
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-background/70">
              Tell us about your event and we&rsquo;ll help you find the perfect package.
            </p>
            <div className="relative mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex flex-col items-center gap-2 rounded-2xl border border-background/15 bg-background/5 px-4 py-5 text-background transition-colors hover:bg-background/10">
                <Phone className="size-5 text-gold" />
                <span className="text-sm">{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex flex-col items-center gap-2 rounded-2xl border border-background/15 bg-background/5 px-4 py-5 text-background transition-colors hover:bg-background/10">
                <Mail className="size-5 text-gold" />
                <span className="text-sm">{siteConfig.email}</span>
              </a>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-background/15 bg-background/5 px-4 py-5 text-background">
                <MapPin className="size-5 text-gold" />
                <span className="text-sm">{siteConfig.city}, Karnataka</span>
              </div>
            </div>
            <div className="relative mt-8">
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                size="lg"
                className="h-12 bg-gold px-8 text-base text-black hover:bg-gold/90"
              >
                Book Now
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
