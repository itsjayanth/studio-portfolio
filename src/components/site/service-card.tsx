import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";
import { categoryImage } from "@/lib/images";
import { RevealItem } from "@/components/motion/reveal";

export function ServiceCard({
  service,
}: {
  service: Pick<Service, "slug" | "title" | "shortDescription" | "icon" | "imageCategory">;
}) {
  const Icon = service.icon;
  return (
    <RevealItem className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-black/10"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={categoryImage(service.imageCategory, 0, { w: 640 })}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
          <div className="absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
            <Icon className="size-5" strokeWidth={1.75} />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-heading text-lg font-semibold">{service.title}</h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.shortDescription}</p>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground">
            Explore
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </RevealItem>
  );
}
