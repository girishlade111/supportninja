# Seamless Outsourcing That Helps Companies Grow — Design System Guidance

## 1. Context and Goals

**Design intent in one sentence:** Deliver a structured, accessible, implementation-first marketing site UI system that lets teams ship consistent pages quickly while staying on-brand for a B2B outsourcing audience.

This guidance applies to all marketing-site interfaces for **Seamless Outsourcing That Helps Companies Grow** (`https://www.supportninja.com/?ref=landingfolio`). It is built for buyers, teams, and decision-makers who need clear information and decisive actions.

**Goals**
- Every interface must feel cohesive, confident, and scannable.
- All components must be implementable directly from tokens, states, and acceptance criteria.
- The system must meet **WCAG 2.2 AA** without exception.
- Designers and engineers must share one source of truth for spacing, typography, color, motion, and interaction.

**Known page component density**
- Links: 118
- Buttons: 47
- Cards: 6
- Navigation instances: 6

---

## 2. Design Tokens and Foundations

Use **semantic tokens** in all component guidance. Raw hex, RGB, or pixel values must not appear in component specs or implementation.

### 2.1 Typography

| Token | Value | Usage |
|---|---|---|
| `font.family.primary` | `tenon` | Brand heading and display type |
| `font.family.stack` | `tenon, sans-serif` | Fallback stack for all text |
| `font.size.base` | `20.4583px` | Base body text size |
| `font.weight.base` | `400` | Default body weight |
| `font.lineHeight.base` | `32.7333px` | Default body line height |
| `font.size.xs` | `11px` | Captions, micro-labels, helper text |
| `font.size.sm` | `14.73px` | Small labels, metadata, tags |
| `font.size.md` | `16.37px` | Compact body, mobile nav labels |
| `font.size.lg` | `18px` | Standard UI labels, button text |
| `font.size.xl` | `20.46px` | Lead body, featured paragraphs |
| `font.size.2xl` | `22.5px` | Subsection headings |
| `font.size.3xl` | `24.55px` | Section headings |
| `font.size.4xl` | `40.92px` | Hero / page titles |

**Rules**
- All text must use `font.family.stack`.
- Type scale must not be overridden with one-off sizes.
- Line height must be `1.6` or tighter for headings; body must use `font.lineHeight.base` or `1.6` relative.

### 2.2 Color

| Token | Value | Usage |
|---|---|---|
| `color.text.primary` | `#2b2c30` | Primary body and headings on light surfaces |
| `color.text.secondary` | `#58595c` | Supporting text, descriptions, metadata |
| `color.text.tertiary` | `#fffcfa` | Text on dark or strong surfaces |
| `color.text.inverse` | `#ee4b4a` | Accent text, error states, urgent CTAs |
| `color.surface.base` | `#000000` | Deepest surfaces, footer, overlays |
| `color.surface.strong` | `#0c3a23` | Primary brand surface, nav, CTAs |
| `color.border.strong` | `rgb(191, 193, 185) rgb(43, 44, 48) rgb(43, 44, 48)` | Strong borders, rules, dividers |

**Rules**
- Text on `color.surface.base` or `color.surface.strong` must use `color.text.tertiary`.
- Error text, error borders, and destructive actions must use `color.text.inverse`.
- All color pairings must pass WCAG 2.2 AA contrast (4.5:1 for normal text, 3:1 for large text and UI components).

### 2.3 Spacing

| Token | Value | Usage |
|---|---|---|
| `space.1` | `3px` | Tight inline gaps, icon-to-text |
| `space.2` | `4.09px` | Compact internal padding |
| `space.3` | `5px` | Tight component internal gaps |
| `space.4` | `8.18px` | Default inline gaps |
| `space.5` | `8.69px` | Standard button padding vertical |
| `space.6` | `9.72px` | Standard input padding |
| `space.7` | `12.28px` | Card internal gaps |
| `space.8` | `14.32px` | Section micro-gaps |

**Rules**
- Spacing between related elements must use `space.4`–`space.7`.
- Layout sections must use multiples of `space.8` (for example, `space.8` × 2, × 3, × 4).
- No one-off margin or padding values are permitted.

### 2.4 Radius

| Token | Value | Usage |
|---|---|---|
| `radius.xs` | `12px` | Small tags, badges, chips |
| `radius.sm` | `25px` | Buttons, inputs, compact cards |
| `radius.md` | `48px` | Cards, media containers |
| `radius.lg` | `50px` | Large pills, hero containers |
| `radius.xl` | `68px` | Feature blocks, oversized pills |
| `radius.2xl` | `69.56px` | Full-bleed rounded sections (use sparingly) |

### 2.5 Motion

| Token | Value | Usage |
|---|---|---|
| `motion.duration.instant` | `200ms` | Hover, focus-visible ring fades |
| `motion.duration.fast` | `300ms` | Small transforms, icon shifts |
| `motion.duration.normal` | `500ms` | Large reveals, card transitions |

**Rules**
- Motion must use `ease-out` or `cubic-bezier(0.25, 0.1, 0.25, 1.0)`.
- Reduced motion (`prefers-reduced-motion: reduce`) must disable non-essential motion.
- No flashes, blinks, or auto-playing motion that violates WCAG 2.3.3.

---

## 3. Component-Level Rules

Every interactive component must define states for **default, hover, focus-visible, active, disabled, loading, and error**.

### 3.1 Links

**Density target:** 118 instances per page.

#### Anatomy
- Text label (required)
- Optional leading icon
- Optional trailing icon

#### Variants
| Variant | Usage |
|---|---|
| `default` | Inline body links |
| `subtle` | Footer, metadata, low-priority links |
| `cta` | Standalone call-to-action links |

#### Tokens
- Default: `color.text.primary` text, no underline.
- Hover: `color.text.inverse` text, underline with `motion.duration.instant`.
- Focus-visible: `2px` outline using `color.text.inverse` at `offset: 2px`.
- Active: `color.text.inverse`, underline.
- Disabled: `color.text.secondary` at 50% opacity, no underline, `cursor: not-allowed`.
- Error: `color.text.inverse` (if used as error action).

#### Spacing / Typography
- Inline links inherit surrounding `font.size` and `lineHeight`.
- Standalone CTA links must use `font.size.lg` and `font.weight.base`.
- Icon-to-text gap must be `space.2`.

#### Interactions
- **Keyboard:** `Tab` focuses; `Enter` activates.
- **Pointer:** Hover changes color and shows underline; click triggers active state.
- **Touch:** Tap target must be at least `44×44px`; increase padding if needed.

#### Overflow / Long Content
- Links must wrap naturally.
- Multi-line inline links must underline on all lines.
- CTA links must truncate with ellipsis only when constrained by container width; never truncate mid-word.

---

### 3.2 Buttons

**Density target:** 47 instances per page.

#### Anatomy
- Label (required)
- Optional leading icon
- Optional trailing icon
- Loading spinner slot (replaces icon when `loading=true`)

#### Variants
| Variant | Surface | Text | Usage |
|---|---|---|---|
| `primary` | `color.surface.strong` | `color.text.tertiary` | Main CTAs |
| `secondary` | transparent | `color.text.primary` | Outlined, bordered with `color.border.strong` |
| `tertiary` | transparent | `color.text.primary` | Low-emphasis actions |
| `destructive` | `color.text.inverse` | `color.text.tertiary` | Destructive actions |

#### States
| State | Primary | Secondary | Tertiary | Destructive |
|---|---|---|---|---|
| Default | `color.surface.strong` bg, `color.text.tertiary` text | transparent bg, `color.text.primary` text, `color.border.strong` border | transparent bg, `color.text.primary` text | `color.text.inverse` bg, `color.text.tertiary` text |
| Hover | lighten 10%, `motion.duration.instant` | `color.surface.strong` at 8% fill | underline | darken 10% |
| Focus-visible | `2px` outline `color.text.inverse`, offset `space.2` | same | same | same |
| Active | darken 10% | `color.surface.strong` at 16% fill | `color.text.inverse` text | darken 15% |
| Disabled | `color.text.secondary` at 30% bg, 50% text | `color.text.secondary` at 50% text and border | `color.text.secondary` at 50% text | same as primary disabled |
| Loading | Disabled visual + spinner, `aria-busy="true"` | same | same | same |
| Error | `color.text.inverse` border, error message below | same | same | same |

#### Spacing / Typography
- Min height: `44px`.
- Horizontal padding: `space.7` minimum.
- Vertical padding: `space.5`.
- Border radius: `radius.sm`.
- Font: `font.size.lg`, `font.weight.base`, `font.family.stack`.
- Icon gap: `space.2`.

#### Interactions
- **Keyboard:** `Tab` focuses; `Space` or `Enter` activates; `focus-visible` ring shows.
- **Pointer:** Hover and active states apply on press.
- **Touch:** Full button area must be tappable; no hover reliance.

#### Loading
- Loading button must preserve layout width; spinner replaces icon or appears inline.
- Label must remain visible or be replaced by accessible loading text.

#### Overflow / Long Content
- Button label must not wrap.
- If label exceeds container, truncate with ellipsis and add `title` attribute.

---

### 3.3 Cards

**Density target:** 6 instances per page.

#### Anatomy
- Container
- Optional media region (image/video)
- Content region
- Heading
- Body text
- Optional footer with actions or metadata

#### Variants
| Variant | Usage |
|---|---|
| `default` | General content cards |
| `feature` | Highlighted offering cards |
| `testimonial` | Quote / social proof cards |

#### Tokens
- Background: `color.surface.base` or `color.surface.strong` depending on section context.
- Border radius: `radius.md`.
- Internal gap: `space.7`.
- Padding: `space.7` or `space.8`.
- Border: none or `1px solid color.border.strong` on light backgrounds.

#### States (when interactive)
| State | Behavior |
|---|---|
| Default | Static card |
| Hover | `motion.duration.fast` lift or shadow increase; only for linked cards |
| Focus-visible | `2px` outline on the entire card link |
| Active | Slight scale down (`0.99`) or darken |
| Disabled | `opacity: 0.5`, `cursor: not-allowed` |
| Loading | Skeleton or pulsing loader; `aria-busy="true"` |
| Error | Inline error message, red border using `color.text.inverse` |

#### Spacing / Typography
- Heading: `font.size.3xl` or `font.size.2xl`.
- Body: `font.size.md` or `font.size.lg`.
- Metadata: `font.size.sm`.

#### Interactions
- **Keyboard:** If the whole card is a link, it must be a single focus stop with `role="link"` or anchor wrapping valid children.
- **Pointer:** Hover applies only when the card is clickable.
- **Touch:** Tap anywhere on linked card navigates.

#### Overflow / Long Content
- Card content must not overflow container.
- Body text should clamp at 3 lines if needed; provide `aria-label` or full text elsewhere.
- Media must maintain aspect ratio and not stretch.

---

### 3.4 Navigation

**Density target:** 6 instances per page.

#### Anatomy
- Brand logo / wordmark
- Primary nav list
- Optional utility links
- Mobile menu trigger
- Optional search / CTA button

#### Variants
| Variant | Usage |
|---|---|
| `desktop` | Horizontal top navigation |
| `mobile` | Hamburger-driven drawer |
| `footer` | Vertical stacked links |

#### Tokens
- Background: `color.surface.base`.
- Text: `color.text.tertiary`.
- Active link: `color.text.inverse` or underline.
- Border: `1px solid color.border.strong` for dividers.
- Padding: `space.7` vertical, `space.8` horizontal.

#### States
| State | Behavior |
|---|---|
| Default | `color.text.tertiary` text |
| Hover | `color.text.inverse` or underline |
| Focus-visible | `2px` outline `color.text.inverse`, offset `space.2` |
| Active | `color.text.inverse`, underline |
| Disabled | 50% opacity, no pointer events |
| Loading | Skeleton nav items |
| Error | Fallback static text if data fails |

#### Interactions
- **Keyboard:** `Tab` traverses links; `Enter` activates; mobile drawer traps focus.
- **Pointer:** Hover reveals dropdowns on desktop only; click required on touch.
- **Touch:** Mobile drawer opens with hamburger; close with close button or backdrop tap.

#### Responsive Behavior
- Desktop: horizontal layout.
- Tablet/Mobile: hamburger menu, full-height drawer, stacked links with `space.6` gap.

#### Overflow / Long Content
- Long nav labels must wrap within drawer.
- Desktop nav must not wrap; if space is insufficient, collapse to mobile earlier.

---

### 3.5 Form Inputs

Although not in the density list, marketing-site forms (email capture, contact) must follow the same system.

#### Anatomy
- Label (required)
- Input field
- Helper text
- Error message

#### Tokens
- Border: `1px solid color.border.strong`.
- Border radius: `radius.sm`.
- Padding: `space.6` vertical, `space.7` horizontal.
- Font: `font.size.lg`.

#### States
| State | Behavior |
|---|---|
| Default | `color.border.strong` border, `color.text.primary` text |
| Hover | Darken border |
| Focus-visible | `2px` outline `color.text.inverse`, border `color.text.inverse` |
| Active | Same as focus-visible |
| Disabled | `color.text.secondary` at 50%, `cursor: not-allowed` |
| Loading | Skeleton or `aria-busy="true"` |
| Error | Border and helper text use `color.text.inverse` |

#### Interactions
- **Keyboard:** `Tab` focuses; type to input.
- **Pointer:** Click to focus.
- **Touch:** Tap to focus; virtual keyboard must not obscure the input.

---

## 4. Accessibility Requirements and Testable Acceptance Criteria

**Target:** WCAG 2.2 AA.

### 4.1 Contrast
- All normal text must have a contrast ratio of at least **4.5:1** against its background.
- Large text (`font.size.3xl` and above, or bold `font.size.2xl` and above) must have at least **3:1**.
- UI components and graphical objects must have at least **3:1** against adjacent colors.

### 4.2 Focus
- All interactive elements must have a visible `focus-visible` indicator.
- Focus indicator must be at least `2px` thick and have sufficient contrast.
- Focus must not be removed unless it moves to another interactive element.

### 4.3 Keyboard
- All interactive components must be operable with keyboard alone.
- Tab order must follow visual order.
- No keyboard traps.

### 4.4 Touch
- All interactive targets must be at least **44×44px**.
- Touch actions must not rely solely on hover.

### 4.5 Motion
- Respect `prefers-reduced-motion`.
- No content that flashes more than 3 times per second.

### 4.6 Testable Acceptance Criteria
| # | Criterion | How to Test |
|---|---|---|
| A1 | All color pairings pass WCAG AA | Automated contrast checker (axe, Lighthouse) |
| A2 | Every interactive element has visible focus-visible state | Manual tab-through + screenshot diff |
| A3 | All buttons and links are keyboard-activatable | Manual keyboard test |
| A4 | Touch targets are ≥44×44px | Browser dev tools accessibility inspector |
| A5 | `prefers-reduced-motion: reduce` disables motion | System/OS reduced-motion toggle + observation |
| A6 | Error states use `color.text.inverse` and include accessible text | Screen reader verification |
| A7 | Loading buttons announce busy state | Screen reader verification of `aria-busy="true"` |
| A8 | Navigation drawer traps focus and has close control | Manual keyboard/screen-reader test |
| A9 | No links or buttons rely solely on color to communicate state | Manual visual review in grayscale |
| A10 | Form errors link field to message via `aria-describedby` | DOM / screen reader inspection |

---

## 5. Content and Tone Standards

### 5.1 Tone
- **Concise:** Remove filler words. One idea per heading.
- **Confident:** Use active voice and definitive statements.
- **Implementation-focused:** Every rule must be actionable.

### 5.2 Labels and Actions
- Buttons must use action verbs: "Get Started", "Request a Quote", "Talk to Sales".
- Avoid ambiguous labels like "Click Here", "Learn More" (unless contextually clear), or "Submit".
- Links must describe the destination: "Read the outsourcing guide", not "Click here".

### 5.3 Examples
| Bad | Good |
|---|---|
| "Click here" | "Explore outsourcing services" |
| "Submit" | "Send message" |
| "Read more" | "Read the case study" |
| "Error" | "Enter a valid work email" |

### 5.4 Empty States
- Empty states must explain why content is missing and what to do next.
- Use `font.size.md` and `color.text.secondary` for empty-state body text.
- Provide a clear CTA when applicable.

---

## 6. Anti-Patterns and Prohibited Implementations

### 6.1 Anti-Patterns
- **Low-contrast text:** Never place `color.text.secondary` on `color.surface.strong` without verifying contrast.
- **Hidden focus indicators:** Never use `outline: none` without a replacement focus-visible style.
- **One-off values:** Never use raw hex, px, or rem values outside the token set.
- **Hover-only behavior:** Never require hover to reveal critical actions or information.
- **Icon-only buttons without labels:** If used, they must have `aria-label`.
- **Color-only error communication:** Errors must include text, not just red borders.
- **Non-descriptive actions:** Avoid vague button and link labels.

### 6.2 Prohibited Implementations
- Custom underlines that do not appear on keyboard focus for links.
- Buttons that trigger navigation without `role="link"` semantics if styled as links.
- Cards that contain multiple nested interactive elements without clear focus order.
- Navigation that does not collapse on mobile.
- Form inputs without associated labels.

### 6.3 Migration Notes
- Audit existing pages for raw hex values and replace with semantic tokens.
- Add missing focus-visible styles to all interactive elements.
- Verify all 118 links, 47 buttons, 6 cards, and 6 navigation instances against this guidance.
- Update component library tokens before adjusting page-level overrides.

---

## 7. QA Checklist

Use this checklist before shipping any page or component update.

### Foundations
- [ ] No raw hex, RGB, or px values appear in component code.
- [ ] Typography uses only the defined font tokens.
- [ ] Spacing uses only `space.1`–`space.8` or their multiples.
- [ ] Motion uses only defined duration tokens and respects reduced motion.

### Components
- [ ] Every interactive component defines default, hover, focus-visible, active, disabled, loading, and error states.
- [ ] Buttons have a minimum height of `44px` and clear labels.
- [ ] Links describe their destination.
- [ ] Cards handle overflow and long content gracefully.
- [ ] Navigation works on desktop and mobile.

### Accessibility
- [ ] Contrast ratios pass WCAG 2.2 AA.
- [ ] All interactive elements are keyboard-operable.
- [ ] Focus-visible indicators are visible and high-contrast.
- [ ] Touch targets are ≥44×44px.
- [ ] Reduced motion is respected.
- [ ] Form errors are associated with inputs.
- [ ] Loading states announce `aria-busy`.

### Content
- [ ] Labels are descriptive and action-oriented.
- [ ] Empty states explain next steps.
- [ ] No ambiguous actions remain.

### Final Review
- [ ] Run automated accessibility scan (axe / Lighthouse) and resolve critical/serious issues.
- [ ] Manual keyboard tab-through completed.
- [ ] Visual regression review for the four dense component families: links, buttons, cards, navigation.
