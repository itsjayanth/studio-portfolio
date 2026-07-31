"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Self-contained scroll reveal built on a plain IntersectionObserver rather
 * than framer-motion's whileInView: with staggered/delayed children, that API
 * only ever animated the first element in on this stack (Next 16 + React
 * 19.2 + framer-motion 12) — every later sibling stayed frozen mid-transition.
 */
function useRevealed<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const { ref, revealed } = useRevealed<HTMLDivElement & HTMLLIElement>();
  const revealClassName = cn(
    "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
    revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
    className,
  );
  const style = { transitionDelay: revealed ? `${delay}s` : "0s" };

  if (as === "li") {
    return (
      <li ref={ref} className={revealClassName} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref} className={revealClassName} style={style}>
      {children}
    </div>
  );
}

export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function RevealItem({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={className}>
      {children}
    </Reveal>
  );
}
