"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const eventTypes = [
  "Wedding",
  "Pre Wedding",
  "Engagement",
  "Maternity",
  "Baby Shoot",
  "Birthday Event",
  "Corporate Event",
  "Product Photography",
  "Commercial Video",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-gold/30 bg-gold-muted px-6 py-14 text-center">
        <CheckCircle2 className="size-8 text-gold" />
        <p className="font-heading text-lg font-semibold">Thanks for reaching out!</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          This is a UI-only demo, so nothing was actually sent — but in a live studio site,
          we&rsquo;d reply within 24 hours.
        </p>
        <Button variant="outline" className="mt-2 h-10" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your full name" required />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="event-type">Event Type</Label>
        <Select name="eventType">
          <SelectTrigger id="event-type" className="w-full">
            <SelectValue placeholder="Select an event type" />
          </SelectTrigger>
          <SelectContent>
            {eventTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5 sm:col-span-2">
        <Label htmlFor="date">Preferred Date</Label>
        <Input id="date" name="date" type="date" />
      </div>
      <div className="space-y-1.5 sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us about your event..." rows={5} />
      </div>
      <Button type="submit" size="lg" className="h-12 bg-gold px-8 text-base text-black hover:bg-gold/90 sm:col-span-2">
        Submit
      </Button>
    </form>
  );
}
