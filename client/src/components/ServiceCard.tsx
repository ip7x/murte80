import { useState } from "react";
import { Check, MapPin, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StarRating from "./StarRating";

export interface ServiceProvider {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  startingPrice: number;
  location: string;
  responseTime: string;
  verified: boolean;
  features: string[];
  logoInitials: string;
}

interface ServiceCardProps {
  provider: ServiceProvider;
  isSelected?: boolean;
  onToggleCompare?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

export default function ServiceCard({
  provider,
  isSelected = false,
  onToggleCompare,
  onViewDetails,
}: ServiceCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Card
      className={`overflow-visible hover-elevate ${isSelected ? "ring-2 ring-primary" : ""}`}
      data-testid={`card-service-${provider.id}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-muted text-lg font-bold text-muted-foreground">
            {provider.logoInitials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <h3 className="font-heading text-lg font-semibold">{provider.name}</h3>
                <p className="text-sm text-muted-foreground">{provider.category}</p>
              </div>
              {provider.verified && (
                <Badge variant="secondary" className="shrink-0">
                  <Shield className="mr-1 h-3 w-3" />
                  Verified
                </Badge>
              )}
            </div>

            <div className="mt-2">
              <StarRating
                rating={provider.rating}
                showValue
                reviewCount={provider.reviewCount}
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {provider.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {provider.responseTime}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t pt-4">
          <div className="flex items-baseline justify-between gap-2 flex-wrap">
            <div>
              <span className="text-2xl font-bold">${provider.startingPrice}</span>
              <span className="text-sm text-muted-foreground"> starting</span>
            </div>
            <span className="text-sm text-muted-foreground">{provider.priceRange}</span>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {provider.features.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Check className="h-4 w-4 shrink-0 text-primary" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex gap-2 border-t px-6 py-4">
        <Button
          variant={isSelected ? "secondary" : "outline"}
          className="flex-1"
          onClick={() => onToggleCompare?.(provider.id)}
          data-testid={`button-compare-${provider.id}`}
        >
          {isSelected ? "Remove" : "Compare"}
        </Button>
        <Button
          className="flex-1"
          onClick={() => onViewDetails?.(provider.id)}
          data-testid={`button-view-${provider.id}`}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
