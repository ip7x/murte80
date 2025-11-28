import { Truck, Sparkles, Wrench, Trees, Wifi, Zap, Paintbrush, Shield } from "lucide-react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Moving Services",
    description: "Professional movers for local and long-distance relocations",
    icon: Truck,
    providerCount: 48,
  },
  {
    name: "Cleaning Services",
    description: "House cleaning, deep cleaning, and move-in/move-out services",
    icon: Sparkles,
    providerCount: 67,
  },
  {
    name: "Contractors",
    description: "General contractors for renovations and repairs",
    icon: Wrench,
    providerCount: 93,
  },
  {
    name: "Landscaping",
    description: "Lawn care, garden design, and outdoor maintenance",
    icon: Trees,
    providerCount: 42,
  },
  {
    name: "Internet & Cable",
    description: "Compare internet speeds and TV packages in your area",
    icon: Wifi,
    providerCount: 12,
  },
  {
    name: "Utilities",
    description: "Electric, gas, and water provider comparisons",
    icon: Zap,
    providerCount: 8,
  },
  {
    name: "Painting",
    description: "Interior and exterior painting professionals",
    icon: Paintbrush,
    providerCount: 54,
  },
  {
    name: "Home Security",
    description: "Security systems, cameras, and monitoring services",
    icon: Shield,
    providerCount: 23,
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore our wide range of home services and find the perfect provider
            for your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              {...category}
              onClick={() => console.log("Navigate to:", category.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
