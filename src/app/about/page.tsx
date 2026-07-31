import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Sparkles, Target } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaSection } from "@/components/site/cta-section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { siteConfig, stats, team } from "@/lib/data";
import { portraitImage, categoryImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "About | VP Films",
  description:
    "The story, mission and team behind VP Films — Bengaluru's premium photography and videography studio.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={`Behind the lens at ${siteConfig.name}`}
        description="A decade of honest storytelling, one frame at a time."
        imageSrc={categoryImage("wedding", 4, { w: 1920, q: 80 })}
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Our Story</span>
            <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">
              Started with one camera, one city, and a promise
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {siteConfig.name} began in {siteConfig.city} with a simple belief: every celebration
              deserves to be remembered exactly as it felt. What started as a single photographer
              shooting weddings on weekends has grown into a full creative studio — covering
              weddings, brands, and everything in between across Karnataka.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Today, our team of photographers, videographers, editors and drone pilots work
              together on every project, guided by the same instinct we started with: capture the
              real moment, not just the posed one.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={categoryImage("reception", 3, { w: 900 })}
              alt={`${siteConfig.name} team at work`}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <RevealItem className="rounded-3xl border border-border bg-card p-8">
              <Target className="size-7 text-gold" strokeWidth={1.5} />
              <h3 className="mt-4 font-heading text-xl font-semibold">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To document life&rsquo;s most important moments with honesty, craft and care —
                delivering galleries that families and brands treasure for decades.
              </p>
            </RevealItem>
            <RevealItem className="rounded-3xl border border-border bg-card p-8">
              <Compass className="size-7 text-gold" strokeWidth={1.5} />
              <h3 className="mt-4 font-heading text-xl font-semibold">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To be the most trusted photography and videography studio in South India — known
                as much for our reliability as our creativity.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-gold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Meet the Team"
            title="The people behind the lens"
            description="A tight-knit creative team with one shared obsession: getting the shot right."
          />
          <RevealGroup className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {team.map((member) => (
              <RevealItem key={member.name} className="text-center">
                <div className="relative mx-auto size-28 overflow-hidden rounded-full bg-muted sm:size-32">
                  <Image
                    src={portraitImage(member.avatarCategory, member.imageIndex, 256)}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold">{member.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="container-px mx-auto max-w-4xl py-4 pb-20 text-center md:pb-28">
        <Reveal>
          <Sparkles className="mx-auto size-6 text-gold" />
          <p className="mt-4 font-heading text-xl italic text-foreground/90 sm:text-2xl">
            &ldquo;We don&rsquo;t just take pictures — we preserve the feeling of the day.&rdquo;
          </p>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
