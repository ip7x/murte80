# HomeCompare - Home Services Comparison Platform

## Overview

HomeCompare is a web application that helps new homeowners find, compare, and connect with trusted service providers. The platform enables users to search for various home services (movers, cleaners, contractors, landscaping, utilities, etc.), compare providers side-by-side, read reviews, and make informed decisions based on pricing, ratings, and features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (SPA architecture)
- Single-page application with client-side route handling

**State Management:**
- TanStack React Query (v5) for server state management and data fetching
- Local React state (useState, useContext) for UI state
- Custom context providers (ThemeProvider) for global UI concerns

**UI Component System:**
- Shadcn/ui component library (New York style variant) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom theme configuration
- Design tokens defined in CSS variables for consistent theming
- Support for light/dark theme switching
- Responsive design with mobile-first approach

**Animation & Interactions:**
- Framer Motion for smooth page transitions and animations
- Embla Carousel for touch-friendly carousels
- Custom hover and active states using CSS classes

**Design Philosophy:**
- Modern, elegant design with dark theme emphasis
- Arabic RTL support mentioned in design guidelines (using Tajawal/Cairo fonts)
- Component-driven architecture with reusable UI elements
- Accessibility-first with Radix UI primitives

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- HTTP server creation using Node's built-in `http` module
- Middleware pipeline for JSON parsing, URL encoding, and request logging
- Custom request/response logging with timestamps

**Development vs Production:**
- Vite dev server integration in development mode with HMR
- Static file serving in production from pre-built dist directory
- ESBuild bundling for server code with selective dependency bundling
- Development tools (Replit plugins) conditionally loaded

**API Design:**
- RESTful API structure with `/api` prefix for all endpoints
- Route registration through centralized `registerRoutes` function
- Storage abstraction pattern for data operations

### Data Storage Solutions

**Database:**
- PostgreSQL as the primary database (via Neon serverless)
- Drizzle ORM for type-safe database queries and schema management
- Schema-first approach with migrations stored in `/migrations`

**Current Schema:**
- Users table with UUID primary keys, username, and password fields
- Zod integration via drizzle-zod for runtime validation

**Storage Abstraction:**
- `IStorage` interface defining CRUD operations
- In-memory storage implementation (`MemStorage`) for development/testing
- Easy swap to database-backed implementation without changing business logic

**Session Management:**
- Express-session with connect-pg-simple for PostgreSQL session store
- Session data persisted across server restarts

### External Dependencies

**UI & Component Libraries:**
- Radix UI: Comprehensive set of accessible, unstyled UI primitives (dialogs, dropdowns, tooltips, etc.)
- Shadcn/ui: Pre-styled component library built on Radix UI
- Lucide React: Icon library for consistent iconography
- Class Variance Authority (CVA): Type-safe variant management for components

**Form Management:**
- React Hook Form: Performant form handling with validation
- Hookform Resolvers: Integration layer for validation libraries
- Zod: Runtime type validation and schema definition

**Styling:**
- Tailwind CSS: Utility-first CSS framework
- PostCSS with Autoprefixer: CSS processing pipeline
- Custom theme configuration with CSS variables

**Date & Time:**
- date-fns: Modern JavaScript date utility library

**Database & ORM:**
- @neondatabase/serverless: Serverless PostgreSQL driver
- Drizzle ORM: Type-safe ORM with PostgreSQL dialect
- drizzle-kit: CLI tools for migrations and schema management

**Development Tools:**
- Replit-specific plugins for development experience (error overlay, cartographer, dev banner)
- TSX for running TypeScript in Node.js during development

**Build Optimization:**
- Selective server dependency bundling to reduce syscalls and improve cold start times
- Allowlist includes frequently used packages like express, drizzle-orm, cors, axios, etc.
- External packages excluded from bundle to reduce bundle size

**Type Safety:**
- Shared schema definitions between client and server in `/shared`
- TypeScript path aliases (@/, @shared/, @assets/) for clean imports
- Strict TypeScript configuration with incremental builds