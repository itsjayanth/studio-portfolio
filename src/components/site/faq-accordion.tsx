"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion({
  items,
  className,
}: {
  items: { question: string; answer: string }[];
  className?: string;
}) {
  return (
    <Accordion className={className}>
      {items.map((item, i) => (
        <AccordionItem key={item.question} value={String(i)} className="border-border">
          <AccordionTrigger className="py-4 text-base font-medium">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-muted-foreground">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
