import { useState } from "react";
import { Button } from "@/components/ui/button";
import ComparisonModal from "../ComparisonModal";
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
    features: ["Free estimates", "Licensed & insured", "Weekend availability"],
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
    features: ["Free estimates", "Same-day service", "24/7 support"],
    logoInitials: "PM",
  },
];

export default function ComparisonModalExample() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Comparison</Button>
      <ComparisonModal open={open} onOpenChange={setOpen} services={mockServices} />
    </>
  );
}
