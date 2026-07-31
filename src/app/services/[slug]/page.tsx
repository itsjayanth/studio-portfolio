import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Users } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { PackageCard } from "@/components/site/package-card";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { CtaSection } from "@/components/site/cta-section";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";
import { services, packages } from "@/lib/data";
import { categoryImage } from "@/lib/images";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | VP Films`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.shortDescription}
        imageSrc={categoryImage(service.imageCategory, 0, { w: 1920, q: 80 })}
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="flex size-12 items-center justify-center rounded-xl bg-gold-muted text-gold">
              <Icon className="size-5" strokeWidth={1.75} />
            </div>
            <h2 className="mt-5 font-heading text-2xl font-semibold sm:text-3xl">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.overview}</p>

            <h3 className="mt-10 font-heading text-lg font-semibold">What&rsquo;s Included</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-border bg-secondary/30 p-6 h-fit">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <Users className="size-4" /> Ideal For
            </div>
            <ul className="mt-4 space-y-2.5">
              {service.idealFor.map((item) => (
                <li key={item} className="text-sm text-foreground/85">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="Sample Gallery" title={`${service.title} in frame`} />
          <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <RevealItem key={i} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={categoryImage(service.imageCategory, i + 1, { w: 700 })}
                  alt={`${service.title} sample ${i + 1}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading eyebrow="Pricing" title="Package Options" description="Every package can be tailored to fit this service." />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </RevealGroup>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Common questions" />
          <div className="mt-10">
            <FaqAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title={`Ready to book ${service.title}?`}
        description="Let's talk about your date, your vision, and the perfect package for you."
        primaryLabel="Book This Service"
      />
    </>
  );
}
