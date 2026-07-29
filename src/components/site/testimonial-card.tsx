import Image from "next/image";
import type { Testimonial } from "@/lib/data";
import { portraitImage } from "@/lib/images";
import { StarRating } from "@/components/site/star-rating";
import { RevealItem } from "@/components/motion/reveal";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <RevealItem className="h-full">
      <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
        <StarRating rating={testimonial.rating} />
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
          &ldquo;{testimonial.review}&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <div className="relative size-11 overflow-hidden rounded-full bg-muted">
            <Image
              src={portraitImage(testimonial.imageIndex)}
              alt={testimonial.name}
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.event}</p>
          </div>
        </figcaption>
      </figure>
    </RevealItem>
  );
}
