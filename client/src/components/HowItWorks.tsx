import { Search, GitCompare, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Services",
    description:
      "Enter your location and the type of service you need. Browse through our curated list of verified providers.",
  },
  {
    icon: GitCompare,
    title: "Compare Options",
    description:
      "Compare up to 3 providers side-by-side. Review pricing, features, and read real customer testimonials.",
  },
  {
    icon: MessageSquare,
    title: "Connect & Hire",
    description:
      "Contact your preferred provider directly. Get quotes, schedule services, and leave your own review.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-muted/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Finding the right home service provider has never been easier. Follow
            these simple steps to get started.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center"
              data-testid={`step-${index + 1}`}
            >
              <div className="relative mx-auto mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-background text-sm font-bold ring-2 ring-primary">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
