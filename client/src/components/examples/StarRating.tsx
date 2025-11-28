import StarRating from "../StarRating";

export default function StarRatingExample() {
  return (
    <div className="flex flex-col gap-4">
      <StarRating rating={4.5} showValue reviewCount={128} />
      <StarRating rating={3} size="lg" showValue />
      <StarRating rating={5} size="sm" />
    </div>
  );
}
