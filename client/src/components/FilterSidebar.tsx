import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface FilterState {
  priceRange: [number, number];
  rating: number | null;
  verified: boolean;
  categories: string[];
}

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  categories: string[];
}

function FilterContent({
  filters,
  onFilterChange,
  categories,
}: FilterSidebarProps) {
  const handlePriceChange = (value: number[]) => {
    onFilterChange({
      ...filters,
      priceRange: [value[0], value[1]] as [number, number],
    });
  };

  const handleRatingChange = (rating: number | null) => {
    onFilterChange({ ...filters, rating });
  };

  const handleVerifiedChange = (checked: boolean) => {
    onFilterChange({ ...filters, verified: checked });
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter((c) => c !== category);
    onFilterChange({ ...filters, categories: newCategories });
  };

  const clearFilters = () => {
    onFilterChange({
      priceRange: [0, 5000],
      rating: null,
      verified: false,
      categories: [],
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters} data-testid="button-clear-filters">
          Clear All
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="text-sm font-medium">Price Range</Label>
          <div className="mt-3 px-1">
            <Slider
              value={filters.priceRange}
              min={0}
              max={5000}
              step={100}
              onValueChange={handlePriceChange}
              data-testid="slider-price"
            />
          </div>
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <Label className="text-sm font-medium">Minimum Rating</Label>
          <div className="mt-3 flex flex-wrap gap-2">
            {[4, 3, 2].map((rating) => (
              <Button
                key={rating}
                variant={filters.rating === rating ? "secondary" : "outline"}
                size="sm"
                onClick={() =>
                  handleRatingChange(filters.rating === rating ? null : rating)
                }
                data-testid={`button-rating-${rating}`}
              >
                {rating}+ Stars
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="verified"
              checked={filters.verified}
              onCheckedChange={handleVerifiedChange}
              data-testid="checkbox-verified"
            />
            <Label htmlFor="verified" className="text-sm">
              Verified providers only
            </Label>
          </div>
        </div>

        <div className="border-t pt-4">
          <Label className="text-sm font-medium">Categories</Label>
          <div className="mt-3 space-y-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={(checked) =>
                    handleCategoryChange(category, !!checked)
                  }
                  data-testid={`checkbox-category-${category.toLowerCase()}`}
                />
                <Label htmlFor={category} className="text-sm">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FilterSidebar(props: FilterSidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:block lg:w-64 lg:shrink-0">
        <div className="sticky top-20 rounded-lg border bg-card p-6">
          <FilterContent {...props} />
        </div>
      </div>

      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2" data-testid="button-open-filters">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent {...props} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export type { FilterState };
