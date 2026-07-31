import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { PackageCard } from "@/components/site/package-card";
import { CtaSection } from "@/components/site/cta-section";
import { RevealGroup, Reveal } from "@/components/motion/reveal";
import { comparisonFeatures, packages } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Packages | VP Films",
  description:
    "Transparent photography and videography packages for every budget — Basic, Premium, and Luxury tiers.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Packages for every celebration"
        description="Simple, transparent tiers. Every package can be customised with add-ons to fit your day exactly."
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </RevealGroup>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading eyebrow="Compare" title="What's included" />
          <Reveal className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-medium text-muted-foreground">Feature</th>
                  {packages.map((pkg) => (
                    <th
                      key={pkg.name}
                      className={cn(
                        "p-4 text-left font-heading text-base font-semibold",
                        pkg.highlighted && "text-gold",
                      )}
                    >
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.label} className={cn(i % 2 === 1 && "bg-secondary/40")}>
                    <td className="p-4 font-medium text-foreground/90">{row.label}</td>
                    {[row.basic, row.premium, row.luxury].map((value, idx) => (
                      <td key={idx} className="p-4 text-muted-foreground">
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check className="size-4 text-gold" />
                          ) : (
                            <Minus className="size-4 text-muted-foreground/40" />
                          )
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
