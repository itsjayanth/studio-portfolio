import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection({
  title = "Ready to capture your story?",
  description = "Tell us about your event and we'll help you find the perfect package.",
  primaryLabel = "Book a Shoot",
  primaryHref = "/contact",
  secondaryLabel = "View Packages",
  secondaryHref = "/packages",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 text-center sm:px-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0%, transparent 40%)",
          }}
        />
        <h2 className="relative font-heading text-3xl font-semibold text-balance text-background sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base text-background/70">
          {description}
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            render={<Link href={primaryHref} />}
            size="lg"
            className="h-12 bg-gold px-8 text-base text-black hover:bg-gold/90"
          >
            {primaryLabel}
          </Button>
          <Button
            render={<Link href={secondaryHref} />}
            size="lg"
            variant="outline"
            className="h-12 border-background/20 bg-transparent px-8 text-base text-background hover:bg-background/10 hover:text-background"
          >
            {secondaryLabel}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
