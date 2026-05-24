# Design System: Editorial Minimalist

## Colors (OKLCH)
- **Background**: `oklch(0.99 0.005 0)` (Off-white/Warm white tint)
- **Text (Primary)**: `oklch(0.15 0.01 0)` (Near black)
- **Text (Secondary/Label)**: `oklch(0.45 0.005 0)` (Grey)
- **Divider**: `oklch(0.15 0.01 0 / 0.1)` (Light line)
- **Selection**: `oklch(0.15 0.01 0)` with white text

## Typography
- **Headings (Serif)**: EB Garamond
- **Body & UI (Mono)**: DM Mono
- **Hierarchy Rules**:
  - Driven by typeface contrast, not just size.
  - Avoid dramatic size jumps.
  - Serif for emphasis/identity.
  - Mono for structure/labels/metadata.
  - Body line length: 65-75ch.

## Layout
- **Alignment**: Strict left alignment.
- **Grid**: Grid-based structure, no centered layouts.
- **Padding**: Consistent horizontal padding.
- **Section Labels**: Small uppercase section identifiers (e.g. PROJECTS) above each section.
- **Dividers**: 0.5px–1px thin lines, used selectively (avoid stacking).

## Motion
- **Easing**: Exponential curves (ease-out-expo). No bounce.
- **Reveals**: Clip + upward translate for text.
- **Lines**: Draw from left.
- **Stagger**: Staggered entry for rows/bullets.

## Components
- **Hero**: Name, rotating Role (Fullstack, Frontend, Backend, Software), Tags.
- **Projects**: 2x2 grid, slider if >4, 1px dividers.
- **Experience**: Accordion, achievement-based bullets.
- **About**: Narrative paragraph + smaller supporting text.
- **Skills**: Simple mono text list.
- **Contact**: Bold hook + minimal Email button.
