import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { studioImage } from "@/lib/images";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-black">
      <Image
        src={studioImage(0, { w: 1920, q: 80 })}
        alt="Cinematic wedding photography by Lumière Studio"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

      <div className="container-px relative mx-auto flex w-full max-w-7xl flex-col items-start py-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            Photography &amp; Films · {siteConfig.city}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl md:text-7xl">
            {siteConfig.tagline}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            Professional photography and videography services across Bengaluru for weddings,
            celebrations, brands, and businesses.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/packages" />}
              size="lg"
              className="h-12 bg-gold px-8 text-base text-black hover:bg-gold/90"
            >
              View Packages
            </Button>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              variant="outline"
              className="h-12 border-white/30 bg-white/5 px-8 text-base text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
            >
              Book Now
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <ChevronDown className="size-6 animate-bounce text-white/60" />
      </div>
    </section>
  );
}
