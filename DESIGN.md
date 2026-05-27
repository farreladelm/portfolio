# Design System: Editorial Minimalist

## Colors (OKLCH)
- **Background**: `oklch(0.20 0.005 0)` (Near black / Warm tint)
- **Text (Primary)**: `oklch(0.95 0.005 0)` (Off-white)
- **Text (Secondary/Muted)**: `oklch(0.65 0.005 0)` (Grey)
- **Divider**: `oklch(0.95 0.005 0 / 0.15)` (Subtle hairline)
- **Selection**: `oklch(0.95 0.005 0)` with near-black text

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
- **Scramble**: Matrix-style character decoding/scramble for identity text transitions.
- **Lines**: Draw from left.
- **Stagger**: Staggered entry for rows/bullets.

## Components
- **Navigation**: Sticky adaptive nav with backdrop blur and hairline border.
- **Hero**: Name, rotating Role with character scramble effect, and metadata tags.
- **Typographic Interlude**: Large scroll-triggered text reveal for narrative pacing.
- **Projects**: 2x2 grid, 1px divider gap, no cards or shadows.
- **Experience**: Clean accordion with date-role-company hierarchy.
- **About**: 7/5 grid split. Narrative on left, boxed metadata (Education/Certs) on right.
- **Skills**: Simple mono text list, horizontal rhythm.
- **Contact**: Bold hook + minimal link/button.
