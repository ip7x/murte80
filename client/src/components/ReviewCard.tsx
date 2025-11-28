import { useState } from "react";
import { ThumbsUp, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import StarRating from "@/components/StarRating";

export interface Review {
  id: string;
  authorName: string;
  authorAvatar?: string;
  rating: number;
  date: string;
  serviceName: string;
  content: string;
  helpfulCount: number;
  verified: boolean;
}

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpfulCount);
  const [hasVoted, setHasVoted] = useState(false);

  const shouldTruncate = review.content.length > 200;
  const displayContent =
    shouldTruncate && !expanded
      ? review.content.slice(0, 200) + "..."
      : review.content;

  const handleHelpful = () => {
    if (!hasVoted) {
      setHelpfulCount((prev) => prev + 1);
      setHasVoted(true);
    }
  };

  return (
    <Card data-testid={`card-review-${review.id}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarImage src={review.authorAvatar} alt={review.authorName} />
            <AvatarFallback>
              {review.authorName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium">{review.authorName}</span>
                  {review.verified && (
                    <Badge variant="secondary" className="text-xs">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{review.serviceName}</p>
              </div>
              <span className="text-sm text-muted-foreground">{review.date}</span>
            </div>

            <div className="mt-2">
              <StarRating rating={review.rating} size="sm" />
            </div>

            <p className="mt-3 text-sm leading-relaxed">{displayContent}</p>

            {shouldTruncate && (
              <button
                className="h-auto p-0 text-sm text-primary hover:underline"
                onClick={() => setExpanded(!expanded)}
                data-testid={`button-expand-${review.id}`}
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}

            <div className="mt-4 flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className={hasVoted ? "text-primary" : ""}
                onClick={handleHelpful}
                disabled={hasVoted}
                data-testid={`button-helpful-${review.id}`}
              >
                <ThumbsUp className="mr-1 h-4 w-4" />
                Helpful ({helpfulCount})
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
