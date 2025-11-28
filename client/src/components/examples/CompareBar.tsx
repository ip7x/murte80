import CompareBar from "../CompareBar";
import { type ServiceProvider } from "../ServiceCard";

const mockServices: ServiceProvider[] = [
  {
    id: "1",
    name: "Swift Moving Co.",
    category: "Moving",
    rating: 4.8,
    reviewCount: 256,
    priceRange: "$500-$2000",
    startingPrice: 499,
    location: "San Francisco",
    responseTime: "2 hours",
    verified: true,
    features: [],
    logoInitials: "SM",
  },
  {
    id: "2",
    name: "Pro Movers Inc.",
    category: "Moving",
    rating: 4.6,
    reviewCount: 189,
    priceRange: "$400-$1800",
    startingPrice: 399,
    location: "Oakland",
    responseTime: "4 hours",
    verified: true,
    features: [],
    logoInitials: "PM",
  },
];

export default function CompareBarExample() {
  return (
    <div className="h-32">
      <CompareBar
        selectedServices={mockServices}
        onRemove={(id) => console.log("Remove:", id)}
        onCompare={() => console.log("Compare clicked")}
        onClear={() => console.log("Clear all")}
      />
    </div>
  );
}
