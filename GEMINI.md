# Gemini Project Context: Personal Portfolio

## Project Overview
A professional personal portfolio website for Farrel Adel Mohammad, a Software Engineer specializing in Fullstack development and AI/LLM integration. The project is built with a focus on an "Editorial Minimalist" aesthetic—restrained, typographically driven, and highly intentional.

## Tech Stack
- **Framework**: [Next.js 16.2.6](https://nextjs.org) (App Router)
- **Library**: [React 19.2.4](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com), [PostCSS](https://postcss.org)
- **Animation**: [Framer Motion 12.40.0](https://www.framer.com/motion/)
- **Fonts**: [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) (Serif), [DM Mono](https://fonts.google.com/specimen/DM+Mono) (Mono)

## Core Commands
- `npm run dev`: Starts the development server.
- `npm run build`: Compiles the project for production.
- `npm run start`: Runs the built production application.
- `npm run lint`: Executes ESLint for code quality checks.

## Architecture & Conventions
- **Component Structure**: Located in `/components`. Standard Next.js App Router structure in `/app`.
- **Design Register**: `brand` (Portfolio/Landing).
- **Styling Rules**:
    - Use **OKLCH** for all colors (defined in `DESIGN.md` and `globals.css`).
    - **Monochrome palette** only.
    - **Left-aligned** layout strictly enforced.
    - **Whitespace** is used for structure rather than cards or shadows.
    - **Thin Dividers** (0.5px–1px) for visual separation.
- **Typography**:
    - **Serif (EB Garamond)**: Identity, headings, emphasis.
    - **Mono (DM Mono)**: Structure, labels, metadata, UI elements.
    - Body line length capped at **65-75ch**.

## Specialized Workflows
### Impeccable Skill
This project includes a custom skill named `impeccable` (located in `.agents/skills/impeccable`). It provides specialized commands for UI/UX development:
- `craft`: End-to-end feature building.
- `shape`: UX/UI planning.
- `audit`: Technical quality checks (a11y, perf, responsive).
- `polish`: Final quality pass.
- `live`: Browser-based visual iteration.

## Content & Data
- **Source of Truth**: `spec/portfolio.md` contains the comprehensive professional history, project details, and skills of Farrel Adel Mohammad. Use this file when generating or updating portfolio content.
- **Project Highlighting**: Focus on Metocean Data, Terra Weather CRM, and AI Counselor as primary case studies.

## Key Documentation
- `PRODUCT.md`: Core purpose, users, and strategic principles.
- `DESIGN.md`: Detailed design system (colors, typography, motion).
- `spec/portfolio.md`: Master content document (Experience, Projects, Education).
- `spec/design-system.md`: Supplementary design specifications and research.
