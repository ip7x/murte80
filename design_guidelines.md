# Design Guidelines: Greeting Card App

## Design Approach

**Style:** Modern, elegant, personal greeting card with Arabic support

**Core Principles:**
1. Dark, sophisticated background with subtle gradients
2. Soft, playful elements with floating decorations
3. Smooth animations and transitions
4. RTL (Right-to-Left) support for Arabic text

## Color Palette

**Primary Colors:**
- Background: Deep dark blue-gray (#1a1a2e to #16213e)
- Accent: Soft pink/rose for circles (#ffc0cb, #ff6b9d)
- Text: Pure white and soft gray tones
- Decorative circles: Semi-transparent white/pink outlines

**Gradient:**
- Main gradient: from dark purple-blue to darker navy
- Radial gradients for spotlight effects

## Typography

**Font Stack:**
- Arabic: Tajawal or Cairo (Google Fonts)
- Fallback: system-ui, sans-serif

**Hierarchy:**
- Greeting text: text-2xl to text-3xl, font-semibold
- Arrows/decorative: text-lg, font-normal
- Navigation dots: small rounded indicators

## Layout System

**Spacing:**
- Full viewport height for each slide
- Centered content with generous padding
- Floating elements positioned absolutely

**Structure:**
- Full-screen slides with swipe/click navigation
- Pagination dots at bottom
- Floating decorative circles scattered around

## Component Library

**Avatar:**
- Circular container with soft shadow
- 80-120px diameter
- Centered on screen

**Pagination Dots:**
- Small circles (8-10px)
- Active state: filled white
- Inactive: outline only or semi-transparent

**Decorative Circles:**
- Various sizes (small, medium, large)
- Semi-transparent white or pink
- Ring style (outline only)
- Positioned at random spots around viewport

**Slide Container:**
- Full viewport
- Flexbox centered content
- Smooth slide transitions

## Animation Patterns

**Entry Animations:**
- Fade in for main content
- Float/pulse for decorative circles
- Gentle scale for avatar

**Transitions:**
- Slide left/right for carousel
- Fade for content changes
- Smooth 300-500ms duration

**Floating Elements:**
- Gentle up/down float animation
- 3-5 second cycles
- Staggered timing for natural feel

## Interaction Patterns

- Swipe left/right on mobile
- Click arrows or dots to navigate
- Touch-friendly large tap targets
- Keyboard navigation support (left/right arrows)
