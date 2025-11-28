import { Link } from "wouter";
import { Home, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  services: [
    { name: "Moving", href: "/services/movers" },
    { name: "Cleaning", href: "/services/cleaners" },
    { name: "Contractors", href: "/services/contractors" },
    { name: "Landscaping", href: "/services/landscaping" },
    { name: "Internet & Cable", href: "/services/internet" },
    { name: "Utilities", href: "/services/utilities" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">HomeCompare</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Helping homeowners find and compare trusted service providers since
              2024. Your home deserves the best.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  size="icon"
                  variant="ghost"
                  asChild
                  data-testid={`button-social-${social.label.toLowerCase()}`}
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-heading font-semibold">Support</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold">Stay Updated</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for tips, deals, and new service
              providers in your area.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Newsletter signup");
              }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button type="submit" data-testid="button-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HomeCompare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
