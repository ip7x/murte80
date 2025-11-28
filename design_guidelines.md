# Design Guidelines: HomeOwner Service Comparison Platform

## Design Approach

**Reference-Based Approach** drawing from:
- **Airbnb**: Trust-building through reviews, clean service cards, professional photography
- **Zillow**: Homeowner-focused warmth and accessibility
- **Yelp**: Rating systems and review presentation
- **Linear**: Clean typography and refined spacing

**Core Principles:**
1. Trust through transparency - clear pricing, authentic reviews
2. Effortless comparison - scannable cards, side-by-side views
3. Welcoming professionalism - approachable but credible

## Typography

**Font Stack:**
- Primary: Inter (400, 500, 600) - UI elements, body text, pricing
- Accent: Sora (600, 700) - headings, category labels

**Hierarchy:**
- Hero headline: text-5xl to text-7xl, font-bold
- Section headers: text-3xl to text-4xl, font-semibold
- Card titles: text-xl, font-semibold
- Pricing: text-2xl to text-3xl, font-bold (emphasis on numbers)
- Body/reviews: text-base, font-normal
- Metadata (ratings, votes): text-sm, font-medium

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16
- Component padding: p-6, p-8
- Section spacing: py-12, py-16, py-20
- Card gaps: gap-6, gap-8
- Inline elements: space-x-2, space-x-4

**Grid System:**
- Service cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Comparison view: grid-cols-1 lg:grid-cols-3 (up to 3 services)
- Review testimonials: grid-cols-1 md:grid-cols-2
- Container max-width: max-w-7xl

## Component Library

**Navigation:**
- Sticky header with service category dropdown mega-menu
- Search bar with location input prominently placed
- Quick filter pills for popular categories

**Service Cards:**
- Consistent card structure: provider logo/image, star rating (prominent), pricing tier, key features list (3-4 items), review count, "Compare" and "View Details" CTAs
- Hover state: subtle lift with shadow enhancement

**Comparison Tool:**
- Side-by-side layout with synchronized scrolling
- Feature rows with checkmarks/crosses for quick scanning
- Sticky pricing header during scroll
- Highlight differences in features

**Review Components:**
- Star rating (5-star system, half-star precision)
- User avatar, name, verification badge
- Date and "Verified Purchase" indicator
- Review text with "Read more" expansion
- Helpful votes counter with upvote button
- Sort options: Most Recent, Highest Rated, Most Helpful

**Pricing Display:**
- Clear tier structure (Basic/Standard/Premium)
- Price per service/month prominently displayed
- Feature inclusions listed below pricing
- "Starting at" indicator for variable pricing

**Filters & Sorting:**
- Left sidebar on desktop (collapsible on mobile)
- Price range slider
- Service type checkboxes
- Rating filter (4+ stars, 3+ stars, etc.)
- Location radius selector

## Images

**Hero Section:**
- Large, welcoming hero image showing happy homeowners in a well-maintained home or moving into a new space
- Image should convey warmth, new beginnings, and domestic comfort
- Overlay with semi-transparent gradient for text readability
- Hero buttons with blurred glass-morphism backgrounds

**Service Provider Images:**
- Professional headshots or team photos for service providers
- Before/after photos where applicable (contractors, cleaners, landscapers)
- Company logos displayed consistently

**Testimonial Section:**
- Real customer photos (circular avatars, consistent sizing)
- Lifestyle imagery showing completed services/happy customers

**Category Icons:**
- Use Heroicons for service categories (home, truck for movers, sparkles for cleaning, wrench for contractors, etc.)

## Page Structure

**Homepage:**
1. Hero with search + location input + popular categories
2. Featured service categories (6-8 cards in grid)
3. How it Works (3-step process with icons)
4. Top-rated services showcase (4-6 cards)
5. Recent testimonials (3-4 featured reviews)
6. Trust indicators (verified reviews, service guarantee badges)
7. Footer with category links, company info, newsletter signup

**Service Listing Page:**
- Filter sidebar + main content area
- Results count and sort dropdown
- Service cards in 2-3 column grid
- Comparison sticky footer (when services selected)
- Load more or pagination

**Service Detail Page:**
- Provider header (logo, name, rating, contact CTA)
- Pricing tiers in horizontal comparison
- About section with service details
- Reviews section with filtering
- Similar services recommendations

## Interaction Patterns

- Smooth scroll to sections
- Fade-in animations for cards on scroll (subtle, performant)
- Filter updates with gentle transitions
- Comparison tool slides in from bottom on mobile
- Star ratings animate on hover
- Micro-interactions on helpful vote buttons

## Trust & Credibility Elements

- Verification badges throughout
- "Trusted by X homeowners" social proof
- Response rate/time indicators for service providers
- Money-back guarantee badges where applicable
- BBB ratings or similar certifications