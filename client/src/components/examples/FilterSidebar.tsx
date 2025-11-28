import { useState } from "react";
import FilterSidebar, { type FilterState } from "../FilterSidebar";

const categories = ["Moving", "Cleaning", "Landscaping", "Plumbing", "Electrical"];

export default function FilterSidebarExample() {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 5000],
    rating: null,
    verified: false,
    categories: [],
  });

  return (
    <div className="max-w-xs">
      <FilterSidebar
        filters={filters}
        onFilterChange={setFilters}
        categories={categories}
      />
    </div>
  );
}
