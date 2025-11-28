import ReviewCard, { type Review } from "../ReviewCard";
import avatar1 from "@assets/generated_images/male_testimonial_avatar.png";

const mockReview: Review = {
  id: "1",
  authorName: "Michael Chen",
  authorAvatar: avatar1,
  rating: 5,
  date: "Nov 15, 2025",
  serviceName: "Swift Moving Co.",
  content:
    "Absolutely fantastic experience! The team arrived on time, handled all our furniture with care, and completed the move faster than expected. They even helped reassemble some of our larger pieces. Highly recommend to anyone looking for reliable movers.",
  helpfulCount: 24,
  verified: true,
};

export default function ReviewCardExample() {
  return (
    <div className="max-w-lg">
      <ReviewCard review={mockReview} />
    </div>
  );
}
