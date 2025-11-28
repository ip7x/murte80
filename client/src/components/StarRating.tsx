import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  reviewCount?: number;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showValue = false,
  reviewCount,
}: StarRatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const stars = Array.from({ length: maxRating }, (_, i) => {
    const filled = i < Math.floor(rating);
    const halfFilled = !filled && i < rating;

    return (
      <span key={i} className="relative">
        <Star
          className={`${sizeClasses[size]} ${
            filled || halfFilled
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
        {halfFilled && (
          <Star
            className={`${sizeClasses[size]} absolute inset-0 fill-amber-400 text-amber-400`}
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      {showValue && (
        <span className={`${textSizeClasses[size]} font-medium text-foreground`}>
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className={`${textSizeClasses[size]} text-muted-foreground`}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
}
