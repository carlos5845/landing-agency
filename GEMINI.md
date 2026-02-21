# STANCOF Landing Page - Gemini Context

## Project Overview
This is a Next.js application for "STANCOF", a landing page featuring various sections like Blog, Contact, Methodology, About Us, and Services. The project is built with **Next.js 16 (App Router)**, **React 19**, and styled using **Tailwind CSS v4** with **shadcn/ui** components.

## Tech Stack
- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (using CSS variables and `oklch` colors)
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Animations:** GSAP (GreenSock Animation Platform) & `@gsap/react`
- **Package Manager:** pnpm

## Project Structure

### `src/app`
Contains the application routes and pages (App Router).
- `layout.tsx`: Root layout including `Navbar` and `Footer`.
- `page.tsx`: Landing page entry point, rendering `Hero` and `Seccion`.
- `globals.css`: Global styles, Tailwind directives, and CSS variable definitions.
- **Routes:**
  - `/blog`
  - `/contacto`
  - `/metodologia`
  - `/nosotros`
  - `/sectores`
  - `/servicios`: Contains nested routes for specific services (contabilidad-finanzas, economia, estadistica, sistemas-informacion).

### `src/components`
- `src/components/ui`: Contains reusable atomic UI components (shadcn/ui), e.g., `button.tsx`.

### `src/app/components`
Contains page-specific or layout components:
- `navbar.tsx`: Top navigation bar.
- `footer.tsx`: Page footer.
- `hero.tsx`: Hero section component.
- `seccion.tsx`: Generic section component.

### `src/lib`
- `utils.ts`: Utility functions (likely `cn` for class merging).

## Key Commands
Based on `package.json`:

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint
```

## Development Conventions
- **Styling:** Use Tailwind utility classes.
- **Theming:** CSS variables defined in `globals.css` control the theme. Colors use `oklch`.
- **Components:**
  - Atomic/Shared components go in `src/components/ui`.
  - Layout/Sectional components are currently located in `src/app/components`.
- **Fonts:** `Geist` and `Geist_Mono` are configured in `layout.tsx`.

## Configuration Files
- `next.config.ts`: Next.js configuration.
- `components.json`: shadcn/ui configuration.
- `tailwind.config` is likely implicitly handled by v4 or empty, relying on CSS variables in `globals.css`.
