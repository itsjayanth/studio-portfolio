"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { categoryImage } from "@/lib/images";
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/lib/data";

const aspectClass: Record<PortfolioItem["aspect"], string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

function Tile({ item, priority }: { item: PortfolioItem; priority?: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-muted",
        aspectClass[item.aspect],
      )}
    >
      <Image
        src={categoryImage(item.imageCategory, item.imageIndex, { w: 800 })}
        alt={item.title}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-xs font-medium uppercase tracking-wider text-gold">
          {item.category}
        </span>
        <span className="mt-1 font-heading text-base font-medium text-white">{item.title}</span>
      </div>
    </motion.div>
  );
}

export function PortfolioGrid({
  limit,
  showFilters = true,
}: {
  limit?: number;
  showFilters?: boolean;
}) {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const items = useMemo(() => {
    const filtered =
      active === "All" ? portfolioItems : portfolioItems.filter((i) => i.category === active);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [active, limit]);

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                active === category
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence>
          {items.map((item, i) => (
            <Tile key={item.id} item={item} priority={i < 3} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
