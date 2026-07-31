import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/data";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact | VP Films",
  description: "Get in touch to book your shoot — phone, WhatsApp, email, or our enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's plan your shoot"
        description="Tell us a little about your event and we'll get back to you within 24 hours."
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-semibold">Contact Details</h2>
            <div className="mt-6 space-y-5">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 group">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold-muted text-gold">
                  <Phone className="size-4" />
                </span>
                <span>
                  <span className="block text-sm font-medium">Phone</span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground">
                    {siteConfig.phone}
                  </span>
                </span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                className="flex items-start gap-3 group"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold-muted text-gold">
                  <Phone className="size-4" />
                </span>
                <span>
                  <span className="block text-sm font-medium">WhatsApp</span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground">
                    {siteConfig.whatsapp}
                  </span>
                </span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 group">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold-muted text-gold">
                  <Mail className="size-4" />
                </span>
                <span>
                  <span className="block text-sm font-medium">Email</span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground">
                    {siteConfig.email}
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold-muted text-gold">
                  <MapPin className="size-4" />
                </span>
                <span>
                  <span className="block text-sm font-medium">Studio</span>
                  <span className="text-sm text-muted-foreground">{siteConfig.address}</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border bg-secondary/50">
              <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
                <MapPin className="size-8 text-gold" />
                <span className="text-sm">Map preview</span>
                <span className="max-w-[220px] text-xs">{siteConfig.address}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold">Send an Enquiry</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                This form is for demonstration only and does not submit anywhere.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
