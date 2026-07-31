import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  imageSrc?: string;
  compact?: boolean;
}) {
  if (imageSrc) {
    return (
      <section
        className={cn(
          "relative -mt-16 flex items-end overflow-hidden bg-black md:-mt-20",
          compact ? "min-h-[50vh]" : "min-h-[60vh]",
        )}
      >
        <Image src={imageSrc} alt="" fill priority sizes="100vw" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="container-px relative mx-auto w-full max-w-7xl pb-16 pt-32 md:pt-40">
          <Reveal>
            {eyebrow && (
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{eyebrow}</span>
            )}
            <h1 className="mt-3 max-w-2xl font-heading text-4xl font-semibold text-balance text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {description && <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">{description}</p>}
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border bg-secondary/30 py-16 md:py-20">
      <div className="container-px mx-auto max-w-7xl text-center">
        <Reveal>
          {eyebrow && (
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{eyebrow}</span>
          )}
          <h1 className="mx-auto mt-3 max-w-2xl font-heading text-4xl font-semibold text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
