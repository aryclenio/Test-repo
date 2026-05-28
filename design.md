---
name: Salto & Brilho
colors:
  surface: "#f7fafd"
  surface-dim: "#d7dade"
  surface-bright: "#f7fafd"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f1f4f8"
  surface-container: "#ebeef2"
  surface-container-high: "#e5e8ec"
  surface-container-highest: "#e0e3e6"
  on-surface: "#181c1f"
  on-surface-variant: "#424842"
  inverse-surface: "#2d3134"
  inverse-on-surface: "#eef1f5"
  outline: "#737972"
  outline-variant: "#c2c8c0"
  surface-tint: "#4a654e"
  primary: "#4a654e"
  on-primary: "#ffffff"
  primary-container: "#8ba88e"
  on-primary-container: "#233d29"
  inverse-primary: "#b0ceb2"
  secondary: "#4d616d"
  on-secondary: "#ffffff"
  secondary-container: "#cde3f0"
  on-secondary-container: "#516571"
  tertiary: "#5e5e5c"
  on-tertiary: "#ffffff"
  tertiary-container: "#a2a19d"
  on-tertiary-container: "#373835"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#cceace"
  primary-fixed-dim: "#b0ceb2"
  on-primary-fixed: "#07200f"
  on-primary-fixed-variant: "#334d38"
  secondary-fixed: "#d0e6f3"
  secondary-fixed-dim: "#b4cad7"
  on-secondary-fixed: "#081e28"
  on-secondary-fixed-variant: "#364954"
  tertiary-fixed: "#e4e2de"
  tertiary-fixed-dim: "#c8c6c3"
  on-tertiary-fixed: "#1b1c1a"
  on-tertiary-fixed-variant: "#474744"
  background: "#f7fafd"
  on-background: "#181c1f"
  surface-variant: "#e0e3e6"
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 40px
    fontWeight: "700"
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 38px
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  headline-sm:
    fontFamily: Quicksand
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-md:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: "700"
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-margin: 24px
  gutter: 16px
---

## Brand & Style

The design system is centered on the concepts of nurturing, growth, and parental peace of mind. It aims to evoke an emotional response of calm confidence, transforming the often overwhelming data of infant development into a serene, guided journey.

The aesthetic is a refined **Minimalism** blended with **Soft Tactile** elements. It prioritizes heavy whitespace to reduce cognitive load for tired parents, utilizing gentle depth and organic shapes to create a digital environment that feels as safe and comforting as a nursery. The interface avoids sharp edges and aggressive transitions, opting instead for a fluid, breathing layout that celebrates small victories ("shines") and supports parents through challenging phases ("leaps").

## Colors

The palette uses low-saturation pastels to maintain a tranquil atmosphere.

- **Primary (Sage Green):** Represents growth and vitality. Used for primary actions, progress indicators, and "shine" moments.
- **Secondary (Dusty Blue):** Evokes peace and stability. Used for informational accents, secondary buttons, and sleep-related tracking.
- **Tertiary (Warm Cream):** The foundation of the UI. Used for page backgrounds and large surface areas to provide a softer look than pure white.
- **Neutral (Dark Charcoal):** Ensures high legibility and WCAG AA compliance. Used exclusively for text and critical iconography to maintain a grounded feel.

## Typography

This design system utilizes a dual-font approach to balance approachability with professional clarity.

**Quicksand** is reserved for headings and display text. Its rounded terminals and geometric construction feel friendly and optimistic. **Nunito Sans** is used for all body copy and labels; it retains a subtle roundness for consistency but offers better legibility at smaller scales and longer line lengths. Type should always be rendered in the Dark Charcoal neutral color to ensure maximum readability against the cream and pastel backgrounds.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous margins to prevent the UI from feeling cramped.

- **Mobile:** A 4-column grid with 24px side margins.
- **Desktop/Tablet:** A 12-column centered grid with a maximum content width of 1040px.

A 8px base unit drives the spacing scale. Vertical rhythm should be loose, utilizing the `lg` (40px) and `xl` (64px) units between major sections to emphasize a sense of "breathable" design. Components within cards should use `md` (24px) padding to match the external corner radii of the containers.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layers** and **Ambient Shadows**. Instead of traditional drop shadows, use highly diffused, low-opacity shadows with a subtle tint of the primary color (Sage).

1.  **Level 0 (Base):** Warm Cream surface.
2.  **Level 1 (Cards):** Pure white surface with a 15% opacity Sage shadow (Blur: 20px, Y: 8px).
3.  **Level 2 (Modals/Overlays):** Pure white surface with a 20% opacity Sage shadow (Blur: 40px, Y: 12px).

Avoid hard lines and inner shadows. Interactions should feel soft—when a user presses a button, it should appear to gently sink into the surface rather than disappear.

## Shapes

The shape language is defined by extreme roundness, mimicking the soft edges of baby products. All primary containers and cards use a minimum of **24px (rounded-lg)** or **48px (rounded-xl)** radii. Buttons and input fields use the **Pill-shaped** (full radius) approach to maximize the friendly, non-threatening aesthetic. Icons should feature rounded caps and joins to align with the typography.

## Components

- **Progress Bars:** Designed as "Leap Tracks." The track is a soft Dusty Blue; the filler is Sage Green. Use custom "Sun" (Milestone) and "Cloud" (Fussy Phase) icons as floating indicators above the track to signal upcoming developmental shifts.
- **Cards:** White backgrounds with 24px corner radii. Titles use Quicksand Semi-Bold. Content is padded at 24px.
- **Buttons:** Large, pill-shaped, and high-contrast. Primary buttons use Sage Green with White text; secondary buttons use a 1px Sage stroke with Sage text.
- **Timeline:** A vertical 4px dashed line in Dusty Blue. Milestone nodes are represented by Sage circles with minimalist line icons inside.
- **Input Fields:** Pill-shaped with a Warm Cream background and a subtle 1px border in Dusty Blue. Labels are always positioned outside the field for clarity.
- **Chips:** Small, pill-shaped tags used for categorizing tips (e.g., "Sleep," "Feeding," "Motor Skills"). Use light tints of the primary/secondary colors for the background.
