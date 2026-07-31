import Link from "next/link";
import { Check, Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PackageTier } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { RevealItem } from "@/components/motion/reveal";

export function PackageCard({ pkg }: { pkg: PackageTier }) {
  return (
    <RevealItem className="h-full">
      <div
        className={cn(
          "relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300",
          pkg.highlighted
            ? "border-gold bg-foreground text-background shadow-xl shadow-black/10 hover:-translate-y-1"
            : "border-border bg-card shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5",
        )}
      >
        {pkg.highlighted && (
          <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-black">
            <Sparkle className="size-3" /> Recommended
          </span>
        )}
        <h3 className="font-heading text-xl font-semibold">{pkg.name}</h3>
        <p className={cn("mt-1 text-sm", pkg.highlighted ? "text-background/70" : "text-muted-foreground")}>
          {pkg.description}
        </p>
        <p className="mt-6 font-heading text-3xl font-semibold">{pkg.price}</p>

        <ul className="mt-6 flex-1 space-y-3">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <Check className={cn("mt-0.5 size-4 shrink-0", pkg.highlighted ? "text-gold" : "text-gold")} />
              <span className={pkg.highlighted ? "text-background/90" : "text-foreground/85"}>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          className={cn(
            "mt-8 h-11",
            pkg.highlighted
              ? "bg-gold text-black hover:bg-gold/90"
              : "bg-foreground text-background hover:bg-foreground/85",
          )}
        >
          Book Now
        </Button>
      </div>
    </RevealItem>
  );
}
