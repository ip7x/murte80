import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarRating from "./StarRating";
import avatar1 from "@assets/generated_images/male_testimonial_avatar.png";
import avatar2 from "@assets/generated_images/female_testimonial_avatar.png";
import avatar3 from "@assets/generated_images/asian_female_testimonial_avatar.png";

const testimonials = [
  {
    id: "1",
    content:
      "HomeCompare made finding reliable movers so easy! We compared three companies in minutes and found the perfect fit for our budget. The reviews were spot-on.",
    author: "Michael Thompson",
    avatar: avatar1,
    location: "San Francisco, CA",
    rating: 5,
    service: "Moving Services",
  },
  {
    id: "2",
    content:
      "As first-time homeowners, we had no idea where to start with landscaping. This platform helped us find an amazing contractor who transformed our backyard.",
    author: "Sarah Johnson",
    avatar: avatar2,
    location: "Austin, TX",
    rating: 5,
    service: "Landscaping",
  },
  {
    id: "3",
    content:
      "The comparison feature is a game-changer. I could see pricing side-by-side and make an informed decision. Saved us hundreds on our cleaning service!",
    author: "Emily Chen",
    avatar: avatar3,
    location: "Seattle, WA",
    rating: 5,
    service: "Cleaning Services",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            What Homeowners Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Join thousands of satisfied homeowners who found their perfect service
            providers through HomeCompare.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} data-testid={`testimonial-${testimonial.id}`}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                    <div className="mt-1">
                      <StarRating rating={testimonial.rating} size="sm" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-primary">
                  {testimonial.service}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
