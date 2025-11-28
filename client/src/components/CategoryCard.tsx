import { type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  providerCount: number;
  onClick?: () => void;
}

export default function CategoryCard({
  name,
  description,
  icon: Icon,
  providerCount,
  onClick,
}: CategoryCardProps) {
  return (
    <Card
      className="cursor-pointer hover-elevate active-elevate-2"
      onClick={onClick}
      data-testid={`card-category-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-lg font-semibold">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
            <p className="mt-2 text-sm font-medium text-primary">
              {providerCount} providers
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
