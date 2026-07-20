---
name: Modern Technical Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#434655'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  code-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style
The design system is built for a professional software developer, emphasizing competence, technical precision, and absolute clarity. The brand personality is grounded and trustworthy, avoiding unnecessary decoration in favor of high-utility information density.

The style is **Minimalist-Modern** with a focus on functional aesthetics. It leverages significant whitespace to reduce cognitive load, allowing the developer's work to remain the primary focus. Visual interest is generated through precise typographic hierarchy and subtle interactive states rather than heavy graphical elements. The emotional response should be one of reliability and "invisible" high-quality engineering.

## Colors
The palette is centered on high-contrast accessibility. The primary background is a crisp white to ensure maximum legibility for long-form technical content. 

- **Primary (#2563EB):** A refined blue used for primary actions, links, and active navigation states.
- **Secondary (#059669):** An emerald green reserved for success states, status indicators (e.g., "Available for work"), and secondary accents.
- **Neutral (#1F2937):** A deep charcoal used for headings and body text to ensure WCAG AAA contrast levels.
- **Surface Neutrals:** Utilize light gray washes (#F3F4F6) for card backgrounds and input fields to subtly differentiate them from the primary page surface.

## Typography
This design system utilizes **Inter** for its exceptional legibility and neutral, professional character across all standard UI elements. To emphasize the technical nature of the portfolio, **Geist** is introduced for labels, tags, and code snippets, providing a precise, developer-centric feel.

Headlines use a tighter letter-spacing to maintain a strong visual "lockup" at larger sizes. Body text is optimized for readability with a generous line-height. Small labels and tags utilize an all-caps or medium-weight treatment in Geist to differentiate functional metadata from narrative content.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to ensure content remains readable and focused, while transitioning to a **Fluid** model on mobile devices.

- **Desktop:** A 12-column grid with a maximum container width of 1200px. Gutters are fixed at 24px to provide clear separation between project cards.
- **Spacing Rhythm:** Based on an 8px base unit. Vertical stack spacing (stack-xl) is used between major sections to emphasize the minimalist aesthetic.
- **Reflow:** On tablet (under 1024px), margins reduce to 40px and the 12-column grid collapses to 6 columns. On mobile (under 640px), the layout becomes a single-column stack with 20px side margins.

## Elevation & Depth
Depth is communicated through **Low-Contrast Outlines** and subtle **Tonal Layers**. This design system avoids heavy shadows to maintain a clean, flat aesthetic.

- **Level 0 (Base):** Pure white background.
- **Level 1 (Cards/Inputs):** A subtle 1px border (#E5E7EB). On hover, the border color transitions to the primary blue (#2563EB).
- **Interactive Depth:** Instead of traditional shadows, elevated states are signaled by a 2px offset "ghost" border or a very soft, high-diffusion ambient shadow (4% opacity black) to indicate hoverability without breaking the minimalist plane.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a professional edge that feels modern and engineered, while the slight rounding prevents the UI from feeling overly harsh or "brutalist."

- **Buttons & Inputs:** Use the standard `rounded` (4px).
- **Project Cards:** Use `rounded-lg` (8px) to provide a softer frame for images and content.
- **Tags/Chips:** Use `rounded-full` (pill) to clearly distinguish them as interactive or categorical metadata.

## Components

- **Buttons:** Primary buttons use a solid #2563EB fill with white text. Secondary buttons use a 1px border in #D1D5DB with #1F2937 text. All buttons have a minimum height of 44px to ensure touch-target accessibility.
- **Project Cards:** Cards feature a 1px border and 24px of internal padding. Images within cards should have a subtle 1px inner stroke to maintain edge definition against white backgrounds.
- **Navigation:** Top-level navigation items use `label-md` typography. The active state is indicated by a 2px bottom border in the primary blue, rather than a color change alone, aiding accessibility.
- **Input Fields:** Use a 1px #D1D5DB border. On focus, the border thickens to 2px in #2563EB with a 3px soft blue focus ring (outline-offset) for keyboard navigation visibility.
- **Chips/Tags:** Small, high-contrast pills using Geist. Backgrounds should be light washes of the accent colors (e.g., #EFF6FF for blue tags) with high-contrast text.
- **Lists:** Technical lists (e.g., Skillsets) should use a custom chevron icon in the primary color instead of standard bullets to reinforce the "engineered" aesthetic.