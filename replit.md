# Birthday V3 Premium

## Overview

A premium birthday celebration web application built with Next.js 15 that delivers an interactive and visually stunning birthday greeting experience. The application features animated elements, confetti effects, image carousels, and custom visual effects to create a memorable birthday celebration page. This is a client-side focused application with no backend services or database requirements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
**Next.js 15.5.4 with React 19**
- **Rationale**: Leverages the latest Next.js App Router for modern React development with server-side rendering capabilities and optimal performance
- **Font System**: Google Fonts integration (Kalam font family) for consistent typography across the application
- **Port Configuration**: Custom port 5000 with host binding to 0.0.0.0 for network accessibility

### Styling Architecture
**Tailwind CSS v4 with PostCSS**
- **Approach**: Utility-first CSS framework with custom animations and effects defined in globals.css
- **Custom Animations**: 
  - Spinning loader animation for loading states
  - Flicker animation for dynamic visual effects
  - Gradient-based spinner with blur and shadow effects
- **Theme**: Dark mode default (black background) with vibrant accent colors (purple/cyan gradients)

### Animation & Interaction Libraries
**Framer Motion v12**
- **Purpose**: Provides smooth, declarative animations for React components
- **Use Case**: Likely used for page transitions, element animations, and interactive gestures

**Canvas Confetti v1.9.3**
- **Purpose**: Particle-based confetti effects for celebratory moments
- **Integration**: Canvas-based rendering for performant particle animations

### UI Components & Icons
**Lucide React v0.545.0**
- **Purpose**: Icon library providing lightweight, customizable SVG icons
- **Benefits**: Tree-shakeable imports for optimized bundle size

**Swiper v12.0.2**
- **Purpose**: Touch-enabled carousel/slider functionality
- **Use Case**: Likely used for photo galleries or content sliders in the birthday presentation

### Path Aliasing
**Custom Path Resolution**
- **Configuration**: `@/*` aliases to `./src/*` directory
- **Rationale**: Simplifies imports and improves code maintainability by avoiding relative path complexity

### Build & Development Tools
**ESLint v9 with Next.js Config**
- **Purpose**: Code quality and consistency enforcement
- **Configuration**: Next.js-specific linting rules for best practices

### Design Patterns
**Component-Based Architecture**
- Modular React components for reusability
- Single-page application structure with dynamic content
- No routing beyond root layout (single celebration page)

**Visual Effects Strategy**
- CSS-based animations for performance
- Canvas-based particle effects for complex animations
- Gradient overlays and blur filters for depth and visual interest

## External Dependencies

### Runtime Libraries
- **next**: v15.5.4 - Core framework for React application
- **react**: v19.1.0 - UI library
- **react-dom**: v19.1.0 - React renderer for web
- **framer-motion**: v12.23.24 - Animation library
- **canvas-confetti**: v1.9.3 - Confetti particle effects
- **lucide-react**: v0.545.0 - Icon components
- **swiper**: v12.0.2 - Touch slider/carousel

### Development Dependencies
- **tailwindcss**: v4 - Utility-first CSS framework
- **@tailwindcss/postcss**: v4 - PostCSS integration
- **eslint**: v9 - Code linting
- **eslint-config-next**: v15.5.4 - Next.js ESLint configuration
- **@eslint/eslintrc**: v3 - ESLint configuration utilities

### Font Services
- **Google Fonts**: Kalam font family (weights: 300, 400, 700)

### No External APIs or Databases
This application is entirely frontend-focused with no:
- Database connections
- Authentication systems
- Backend API endpoints
- Third-party API integrations
- State management libraries (relying on React's built-in state)