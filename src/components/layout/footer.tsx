import Link from "next/link";
import { Aperture } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons/social";
import { navLinks, services, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight">
              <Aperture className="size-6 text-gold" strokeWidth={1.75} />
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Premium photography and videography for weddings, celebrations, brands, and
              businesses across {siteConfig.city}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.instagram}
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={siteConfig.facebook}
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={siteConfig.youtube}
                aria-label="YouTube"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <YoutubeIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>{siteConfig.address}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Crafted with care in {siteConfig.city}.</p>
        </div>
      </div>
    </footer>
  );
}
