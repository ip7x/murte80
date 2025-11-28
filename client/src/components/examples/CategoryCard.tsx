import { Truck } from "lucide-react";
import CategoryCard from "../CategoryCard";

export default function CategoryCardExample() {
  return (
    <div className="max-w-sm">
      <CategoryCard
        name="Moving Services"
        description="Professional movers for local and long-distance relocations"
        icon={Truck}
        providerCount={48}
        onClick={() => console.log("Category clicked")}
      />
    </div>
  );
}
