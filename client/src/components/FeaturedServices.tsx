import { useState } from "react";
import ServiceCard, { type ServiceProvider } from "./ServiceCard";
import CompareBar from "./CompareBar";
import ComparisonModal from "./ComparisonModal";

const featuredProviders: ServiceProvider[] = [
  {
    id: "1",
    name: "Swift Moving Co.",
    category: "Moving Services",
    rating: 4.8,
    reviewCount: 256,
    priceRange: "$500 - $2,000",
    startingPrice: 499,
    location: "San Francisco, CA",
    responseTime: "Responds in 2 hours",
    verified: true,
    features: [
      "Free in-home estimates",
      "Licensed and insured",
      "Packing services available",
    ],
    logoInitials: "SM",
  },
  {
    id: "2",
    name: "Sparkle Clean Pro",
    category: "Cleaning Services",
    rating: 4.9,
    reviewCount: 412,
    priceRange: "$100 - $350",
    startingPrice: 99,
    location: "Oakland, CA",
    responseTime: "Responds in 1 hour",
    verified: true,
    features: [
      "Eco-friendly products",
      "Same-day availability",
      "Satisfaction guaranteed",
    ],
    logoInitials: "SC",
  },
  {
    id: "3",
    name: "GreenThumb Landscaping",
    category: "Landscaping",
    rating: 4.7,
    reviewCount: 189,
    priceRange: "$200 - $1,500",
    startingPrice: 199,
    location: "San Jose, CA",
    responseTime: "Responds in 4 hours",
    verified: true,
    features: [
      "Free consultations",
      "Drought-resistant designs",
      "Weekly maintenance plans",
    ],
    logoInitials: "GT",
  },
  {
    id: "4",
    name: "Elite Home Repairs",
    category: "Contractors",
    rating: 4.6,
    reviewCount: 324,
    priceRange: "$150 - $5,000",
    startingPrice: 149,
    location: "Palo Alto, CA",
    responseTime: "Responds in 3 hours",
    verified: true,
    features: [
      "Licensed contractors",
      "5-year warranty",
      "Free estimates",
    ],
    logoInitials: "EH",
  },
];

export default function FeaturedServices() {
  const [selectedServices, setSelectedServices] = useState<ServiceProvider[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const handleToggleCompare = (id: string) => {
    const service = featuredProviders.find((p) => p.id === id);
    if (!service) return;

    if (selectedServices.find((s) => s.id === id)) {
      setSelectedServices(selectedServices.filter((s) => s.id !== id));
    } else if (selectedServices.length < 3) {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleRemove = (id: string) => {
    setSelectedServices(selectedServices.filter((s) => s.id !== id));
  };

  const handleClear = () => {
    setSelectedServices([]);
  };

  const handleCompare = () => {
    setShowComparison(true);
  };

  return (
    <section className="bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Top-Rated Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Discover our highest-rated service providers, trusted by thousands of
            homeowners in your area.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProviders.map((provider) => (
            <ServiceCard
              key={provider.id}
              provider={provider}
              isSelected={selectedServices.some((s) => s.id === provider.id)}
              onToggleCompare={handleToggleCompare}
              onViewDetails={(id) => console.log("View details:", id)}
            />
          ))}
        </div>

        <CompareBar
          selectedServices={selectedServices}
          onRemove={handleRemove}
          onCompare={handleCompare}
          onClear={handleClear}
        />

        <ComparisonModal
          open={showComparison}
          onOpenChange={setShowComparison}
          services={selectedServices}
        />
      </div>
    </section>
  );
}
