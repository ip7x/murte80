import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Home, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeToggle from "./ThemeToggle";

const categories = [
  { name: "Movers", href: "/services/movers" },
  { name: "Cleaners", href: "/services/cleaners" },
  { name: "Contractors", href: "/services/contractors" },
  { name: "Landscaping", href: "/services/landscaping" },
  { name: "Internet & Cable", href: "/services/internet" },
  { name: "Utilities", href: "/services/utilities" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
              <Home className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="hidden font-heading text-xl font-bold sm:inline-block">
              HomeCompare
            </span>
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {categories.map((category) => (
              <Link key={category.name} href={category.href}>
                <Button
                  variant={location === category.href ? "secondary" : "ghost"}
                  size="sm"
                  data-testid={`link-category-${category.name.toLowerCase()}`}
                >
                  {category.name}
                </Button>
              </Link>
            ))}
          </nav>

          <form onSubmit={handleSearch} className="hidden flex-1 max-w-md md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
          </form>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="hidden sm:inline-flex" data-testid="button-sign-in">
              Sign In
            </Button>
            <Button size="sm" data-testid="button-get-started">
              Get Started
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSearch} className="mb-4 md:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-mobile"
                />
              </div>
            </form>
            <nav className="flex flex-col gap-1">
              {categories.map((category) => (
                <Link key={category.name} href={category.href}>
                  <Button
                    variant={location === category.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-category-mobile-${category.name.toLowerCase()}`}
                  >
                    {category.name}
                  </Button>
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t sm:hidden">
                <Button variant="outline" className="w-full" data-testid="button-sign-in-mobile">
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
