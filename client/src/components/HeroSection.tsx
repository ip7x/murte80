import { useState } from "react";
import { Search, MapPin, ArrowRight, Shield, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@assets/generated_images/happy_homeowners_new_house.png";

const popularCategories = [
  "Movers",
  "Cleaners",
  "Contractors",
  "Landscaping",
  "Internet",
];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", searchQuery, "Location:", location);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Happy homeowners in front of their new home"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Trusted Home Services
          </h1>
          <p className="mt-4 text-lg text-white/90 sm:text-xl">
            Compare prices, read real reviews, and connect with top-rated local
            professionals. Making homeownership easier, one service at a time.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="What service do you need?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 bg-white pl-11 text-foreground placeholder:text-muted-foreground"
                data-testid="input-hero-search"
              />
            </div>
            <div className="relative flex-1 sm:max-w-[200px]">
              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-12 bg-white pl-11 text-foreground placeholder:text-muted-foreground"
                data-testid="input-hero-location"
              />
            </div>
            <Button type="submit" size="lg" className="h-12" data-testid="button-hero-search">
              Search
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-sm text-white/70">Popular:</span>
            {popularCategories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="border-white/30 bg-white/10 text-white backdrop-blur-sm"
                onClick={() => setSearchQuery(category)}
                data-testid={`button-popular-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Verified Providers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-400" />
              <span>50,000+ Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Trusted by 100k+ Homeowners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
