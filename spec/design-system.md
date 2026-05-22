Design a professional personal portfolio website with a minimalist, editorial aesthetic. The design must feel intentional, restrained, and typographically driven — not decorative. Avoid generic portfolio patterns.

---

## 1. Design Principles

* Minimalist but not empty
* Strong use of whitespace as structure, not filler
* Monochrome palette only (black, white, greys)
* No accent colors, gradients, shadows, or visual noise
* Visual separation is achieved using:

  * 0.5px–1px divider lines
  * spacing
  * typography contrast

Layout should feel:

* Left-aligned
* Editorial (like a magazine or case study)
* Calm and confident (no loud hierarchy jumps)

---

## 2. Typography System

* Headings: EB Garamond
* Body & UI: DM Mono

Rules:

* Hierarchy is driven by typeface contrast, not font size differences
* Avoid dramatic size jumps between sections
* Serif for emphasis and identity
* Mono for structure, labels, metadata

---

## 3. Layout System

* Strict left alignment
* Consistent horizontal padding across sections
* Grid-based structure
* Avoid centered layouts entirely
* Use a label system:

  * Small uppercase section identifiers (e.g. PROJECTS, ABOUT)
  * Placed consistently above each section

---

## 4. Section Separation Rules

* Use thin divider lines (0.5px–1px) selectively, not systematically
* Section breaks should feel intentional, not repetitive

### When to Use a Section Divider

Use a divider only if:

* The previous section lacks a strong visual boundary
* The next section does not already introduce its own separator
* A visual rhythm reset is needed

### When NOT to Use a Section Divider

Do not use a divider if:

* The section already contains a strong internal separator
* The previous section already ends with a clear boundary
* It would create stacked lines (double separators)

### Priority Rule

Never stack lines for consistency. Prioritize visual clarity over system rigidity.

### Visual Intent

* Lines act as rhythm markers, not containers
* Whitespace is the primary separator
* Dividers support hierarchy, not define it

---

## 5. Sections & Layout

### Hero Section

Structure:
[name]
[role — very large]
[tags]

Rules:

* All content left-aligned
* Role format: {type} Engineer
* Role rotates between: Fullstack, Frontend, Backend, Software

Hierarchy:

* Name: normal size
* Role: dominant visual element
* Tags: small, mono, descriptive

Extras:

* Scroll indicator at bottom-right
* Subtle looping animation

---

### Project Showcase

Structure:
2x2 grid

[project] [project]
[project] [project]

→ see more

Rules:

* Acts as slider if more than 4 projects
* No gaps between grid items
* Use 1px dividers instead of cards
* No shadows or elevation

Each project includes:

* Name
* Short description
* Action (view project / case study)

Interaction:

* Subtle hover (text shift, underline, or opacity)

---

### Experience Section

Structure:
[date]   [role + company]   [+]
-------------------------------

Behavior:

* Accordion
* Default collapsed
* On click:

  * Expands to show achievement-based bullets
  * * rotates into ×

Rules:

* Each row has bottom border
* Button aligned far right
* Clean and scannable

---

### About Section

Structure:
[SECTION LABEL] -----------
[Large paragraph]
[Smaller supporting text]

Rules:

* Large paragraph = main narrative
* Smaller text = education + certifications
* No divider above (avoid stacked lines)

---

### Skills Section

Structure:
[SECTION LABEL]
[list of skills]

Rules:

* Simple text list (mono font)
* No pills, badges, or icons

---

### Contact Section

Structure:
[Large hook statement]
[Email button]

Rules:

* Hook is bold but not oversized
* Minimal CTA styling

---

## 6. Animation Guidelines

* Animations must be subtle and intentional
* Use easing and restraint

Specific animations:

* Hero: text reveals using clip + upward translate
* Section labels: divider lines draw from left
* Experience: staggered row entry
* About: line-by-line text reveal
* Scroll indicator: looping motion

Avoid:

* Bounce effects
* Overly smooth floating motion
* Attention-grabbing animations

---

## 7. What to Avoid

* Centered layouts
* Card-based UI with shadows
* Bright accent colors
* Gradient backgrounds
* Overuse of animations
* Generic SaaS-style sections

---

## 8. Overall Feel

* Feels like a designed document, not a template
* Quietly confident
* System-driven and intentional
* Minimal but not empty
