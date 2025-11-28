import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type ServiceProvider } from "./ServiceCard";

interface CompareBarProps {
  selectedServices: ServiceProvider[];
  onRemove: (id: string) => void;
  onCompare: () => void;
  onClear: () => void;
  maxItems?: number;
}

export default function CompareBar({
  selectedServices,
  onRemove,
  onCompare,
  onClear,
  maxItems = 3,
}: CompareBarProps) {
  if (selectedServices.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm font-medium">
              Compare ({selectedServices.length}/{maxItems}):
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {selectedServices.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center gap-2 rounded-md bg-muted px-3 py-1.5"
                >
                  <span className="text-sm font-medium">{service.name}</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-5 w-5"
                    onClick={() => onRemove(service.id)}
                    data-testid={`button-remove-compare-${service.id}`}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onClear} data-testid="button-clear-compare">
              Clear All
            </Button>
            <Button
              onClick={onCompare}
              disabled={selectedServices.length < 2}
              data-testid="button-compare-now"
            >
              Compare Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
