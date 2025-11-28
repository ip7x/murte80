import { Check, X as XIcon, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StarRating from "./StarRating";
import { type ServiceProvider } from "./ServiceCard";

interface ComparisonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  services: ServiceProvider[];
}

const comparisonFeatures = [
  "Free estimates",
  "Licensed & insured",
  "Same-day service",
  "Weekend availability",
  "24/7 support",
  "Money-back guarantee",
];

export default function ComparisonModal({
  open,
  onOpenChange,
  services,
}: ComparisonModalProps) {
  const getFeatureStatus = (service: ServiceProvider, feature: string) => {
    return service.features.some((f) =>
      f.toLowerCase().includes(feature.toLowerCase().split(" ")[0])
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            Compare Services
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <div className="grid gap-4" style={{ gridTemplateColumns: `1fr repeat(${services.length}, 1fr)` }}>
            <div className="font-medium text-muted-foreground">Provider</div>
            {services.map((service) => (
              <div key={service.id} className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-muted text-lg font-bold mx-auto">
                  {service.logoInitials}
                </div>
                <h3 className="mt-2 font-semibold">{service.name}</h3>
                {service.verified && (
                  <Badge variant="secondary" className="mt-1">Verified</Badge>
                )}
              </div>
            ))}

            <div className="col-span-full my-4 border-t" />

            <div className="font-medium text-muted-foreground">Rating</div>
            {services.map((service) => (
              <div key={service.id} className="text-center">
                <StarRating
                  rating={service.rating}
                  showValue
                  reviewCount={service.reviewCount}
                  size="sm"
                />
              </div>
            ))}

            <div className="font-medium text-muted-foreground">Starting Price</div>
            {services.map((service) => (
              <div key={service.id} className="text-center">
                <span className="text-2xl font-bold">${service.startingPrice}</span>
              </div>
            ))}

            <div className="font-medium text-muted-foreground">Price Range</div>
            {services.map((service) => (
              <div key={service.id} className="text-center text-sm text-muted-foreground">
                {service.priceRange}
              </div>
            ))}

            <div className="font-medium text-muted-foreground">Location</div>
            {services.map((service) => (
              <div key={service.id} className="text-center text-sm">
                {service.location}
              </div>
            ))}

            <div className="font-medium text-muted-foreground">Response Time</div>
            {services.map((service) => (
              <div key={service.id} className="text-center text-sm">
                {service.responseTime}
              </div>
            ))}

            <div className="col-span-full my-4 border-t" />

            <div className="col-span-full font-heading font-semibold">Features</div>

            {comparisonFeatures.map((feature) => (
              <>
                <div key={feature} className="text-sm text-muted-foreground">
                  {feature}
                </div>
                {services.map((service) => (
                  <div key={`${service.id}-${feature}`} className="text-center">
                    {getFeatureStatus(service, feature) ? (
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    ) : (
                      <XIcon className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                    )}
                  </div>
                ))}
              </>
            ))}

            <div className="col-span-full my-4 border-t" />

            <div />
            {services.map((service) => (
              <div key={service.id} className="text-center">
                <Button className="w-full" data-testid={`button-contact-${service.id}`}>
                  Contact
                </Button>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
