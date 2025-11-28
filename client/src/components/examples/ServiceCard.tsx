import ServiceCard, { type ServiceProvider } from "../ServiceCard";

const mockProvider: ServiceProvider = {
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
};

export default function ServiceCardExample() {
  return (
    <div className="max-w-md">
      <ServiceCard
        provider={mockProvider}
        onToggleCompare={(id) => console.log("Toggle compare:", id)}
        onViewDetails={(id) => console.log("View details:", id)}
      />
    </div>
  );
}
