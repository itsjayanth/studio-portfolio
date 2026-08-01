import { RevealGroup, RevealItem } from "@/components/motion/reveal";

/** Horizontal row of short, muted-autoplay vertical clips styled like Instagram Reels previews. */
export function ReelsGallery({ sources }: { sources: string[] }) {
  return (
    <RevealGroup className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
      {sources.map((src, i) => (
        <RevealItem
          key={src}
          delay={i * 0.05}
          className="relative aspect-[9/16] w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl bg-muted sm:w-[260px]"
        >
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
            Reel &middot; 0:05
          </span>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
