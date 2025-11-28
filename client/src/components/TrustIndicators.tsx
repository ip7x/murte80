import { Shield, Star, Clock, Award } from "lucide-react";

const indicators = [
  {
    icon: Shield,
    value: "100%",
    label: "Verified Providers",
    description: "Every provider is background-checked and verified",
  },
  {
    icon: Star,
    value: "4.8",
    label: "Average Rating",
    description: "Based on 50,000+ genuine customer reviews",
  },
  {
    icon: Clock,
    value: "2 hrs",
    label: "Avg. Response Time",
    description: "Get quotes quickly from eager providers",
  },
  {
    icon: Award,
    value: "100K+",
    label: "Happy Homeowners",
    description: "Trusted by homeowners across the country",
  },
];

export default function TrustIndicators() {
  return (
    <section className="border-y bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((indicator) => (
            <div
              key={indicator.label}
              className="flex items-start gap-4"
              data-testid={`trust-${indicator.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <indicator.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{indicator.value}</p>
                <p className="font-medium">{indicator.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {indicator.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
