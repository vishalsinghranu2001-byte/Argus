# Argus — Style Reference (Zendesk-derived)

> Lime signal in a forest clearing — precision SaaS dressed in warm organic ink, where the single electric-green accent cuts through like a backlit leaf.

**Theme:** light

Near-black almost-green ink (#11110d) on warm off-white (#f5f5f2), punctuated by a single electric lime (#d1f470) that reads as both verdant and technological. Body text is near-black #11110d rather than pure black, giving a warm, organic undertone. Card surfaces use #f5f5f2 — a shade off white — so card lifts happen through warm contrast rather than shadows.

The tokens below are the actionable source of truth and are wired into `src/app/globals.css` (Tailwind v4 `@theme`).

## Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Electric Lime | `#d1f470` | `--color-electric-lime` | Primary CTAs, active indicators, key data highlights — the ONLY saturated color |
| Forest Canopy | `#203524` | `--color-forest-canopy` | Event/announcement surfaces — signals "special context" |
| Deep Grove | `#2d4c33` | `--color-deep-grove` | Secondary dark-green surfaces within event/feature blocks |
| Near-Black Ink | `#11110d` | `--color-near-black-ink` | Primary text, nav labels, body copy, button labels |
| Warm White | `#f5f5f2` | `--color-warm-white` | Card surfaces, section fills |
| Pure White | `#ffffff` | `--color-pure-white` | Hero/page background, text on dark surfaces |
| Midnight | `#000000` | `--color-midnight` | Top global announcement bar, high-contrast borders |
| Stone Divider | `#90918c` | `--color-stone-divider` | Subtle borders and dividers |

Subtle border: `rgba(17,17,13,0.11)`. Email input fill: `rgba(17,17,13,0.05)`.

## Typography

Single typeface system — custom humanist sans. **Substitute: Inter** (loaded via `next/font`).

- **Weights:** 300 (large hero headlines, 48px+), 400–500 (body/subheadings), 600–700 (UI labels, nav).
- **Global letter-spacing:** `0.054em` applied broadly — the airy spacing that distinguishes it from default Inter.

### Type Scale

| Role | Size | Line Height | Token |
|------|------|-------------|-------|
| caption | 14px | 1.44 | `--text-caption` |
| body | 16px | 1.56 | `--text-body` |
| subheading | 18px | 1.4 | `--text-subheading` |
| heading-sm | 26px | 1.3 | `--text-heading-sm` |
| heading | 32px | 1.25 | `--text-heading` |
| heading-lg | 48px | 1.15 | `--text-heading-lg` |
| display | 74px | 1.0 | `--text-display` |

## Spacing & Shape

- **Base unit:** 4px (matches Tailwind's default spacing scale — use `p-1`=4px, `p-8`=32px, etc.)
- **Page max-width:** 1200px, centered.
- **Section gap:** 80–120px. **Element gap:** 8–16px.

### Border Radius

| Element | Value | Token |
|---------|-------|-------|
| tags | 4px | `--radius-tag` |
| cards | **0px** (signature — flush rectangles) | — |
| inputs | 12px | `--radius-input` |
| buttons | 16px | `--radius-button` |
| icon buttons | 100% (circle) | — |
| event banner cards | 40px | `--radius-event` |

## Components

- **Primary Lime CTA:** bg `#d1f470`, text `#11110d`, radius 16px, padding 10px 20px, weight 600. On dark surfaces text switches to `#ffffff`, bg stays lime. Border matches background.
- **Ghost Link Button:** transparent, text `#11110d`, bottom border `rgba(17,17,13,0.11)` (underline affordance), radius 0.
- **Circular Icon Button:** transparent, 1px solid `#11110d`, perfect circle, 16px padding. Carousel arrows (← →), used in pairs.
- **Flat Content Card:** bg `#f5f5f2`, radius 0px, NO box-shadow, padding 32px 24px.
- **Email Input:** bg `rgba(17,17,13,0.05)`, radius 12px, padding 12px, 1px solid `#11110d`.
- **Announcement Banner:** full-width, bg `#000000` (top global) or `#203524` (event). 14px white text, lime linked CTA, dismiss X right-aligned.
- **Event Promo Card:** bg `#203524`, radius 40px, white logo + body (15px), two stacked CTAs (lime fill + outline ghost), photo flush-cropped on the right.
- **Logo Trust Bar:** monochrome `#11110d` logos, no borders/cards, uppercase overline label.
- **Testimonial Carousel:** bg `#f5f5f2`, quote 26–32px weight 300, square photo radius 16px, circular arrow nav, customer logos below at reduced opacity.
- **Product UI Screenshot Embed:** white card radius 16px, floating panel bleeding past the fold.

## Surfaces & Elevation

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page Canvas | `#ffffff` | Hero + primary background |
| 1 | Warm Surface | `#f5f5f2` | Cards, feature/testimonial sections |
| 2 | Forest Canopy | `#203524` | Event promo cards, banners |
| 3 | Deep Grove | `#2d4c33` | Secondary dark surfaces |

**Zero shadows throughout.** Depth = surface color stepping (white → warm off-white → forest), like nested paper sheets. Elevation through pigment, not light.

## Gradient System

Two lime gradients for decorative scroll/fade effects only — never button fills or section backgrounds:
1. Fade-in: `linear-gradient(to right, rgba(0,0,0,0), #d1f470)` — right-edge overlay on scrolling logo strips.
2. Dashed highlight: `linear-gradient(90deg, #d1f470 0%, #d1f470 40%, rgba(0,0,0,0) 40% 60%, #d1f470 60%, #d1f470 100%)` — animated underline / segmented indicator.

Both terminate in `#d1f470` — extensions of the single accent, not new colors.

## Do's and Don'ts

**Do**
- Use `#d1f470` exclusively for interactive CTAs and key data highlights — scarcity is the source of its stopping power.
- Apply 0px radius to content cards; elevation comes from `#f5f5f2` against white, not shadows.
- Use weight 300 at 48px+ — the lightweight large headline is the primary typographic signature.
- Keep global letter-spacing at 0.054em.
- Pair the lime CTA with a transparent/ghost secondary at equal weight — never stack two filled buttons.
- Use `#11110d` (not pure black) for all body text and UI labels.
- Reserve `#203524` for event/announcement surfaces only.

**Don't**
- Never add box-shadow to cards.
- Never exceed radius 16px on buttons or 40px on event cards — no full-pill (9999px) shapes.
- Never introduce a second accent color — `#d1f470` is the sole chromatic accent.
- Never use weight 700 for display headlines.
- Never use pure `#000000` for body text on light backgrounds.
- Never place two lime-background elements adjacent — the accent works through isolation.

## Similar Brands

Intercom, Notion, Linear, Freshdesk, Webflow — single bold accent on warm-neutral, weight-300 display headlines, product UI as hero, flat/no-shadow cards.
