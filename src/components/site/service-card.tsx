import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";
import { RevealItem } from "@/components/motion/reveal";

export function ServiceCard({ service }: { service: Pick<Service, "slug" | "title" | "shortDescription" | "icon"> }) {
  const Icon = service.icon;
  return (
    <RevealItem>
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-black/5"
      >
        <div className="flex size-12 items-center justify-center rounded-xl bg-gold-muted text-gold">
          <Icon className="size-5" strokeWidth={1.75} />
        </div>
        <h3 className="mt-5 font-heading text-lg font-semibold">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.shortDescription}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground">
          Learn More
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </RevealItem>
  );
}
