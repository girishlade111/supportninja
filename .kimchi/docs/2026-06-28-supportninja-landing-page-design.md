# SupportNinja Landing Page Recreation — Design Spec

## 1. Context and Goals

**Design intent in one sentence:** Rebuild the SupportNinja marketing landing page as a responsive, animated, pixel-perfect Next.js app that starts with the navbar and omits the top promotional banner.

**Goals**
- Match the provided section-by-section brief as closely as possible.
- Use semantic HTML, accessible focus states, and responsive layouts.
- Implement scroll-triggered animations with Framer Motion.
- Produce a working static build that can be run locally and deployed.

## 2. Tech Stack

- **Framework:** Next.js 15+ App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts via `next/font/google`
  - Headings: `Playfair Display` (serif)
  - Body: `Inter` (sans-serif)

## 3. Design Tokens

### Typography
- Headings: `font-serif` (Playfair Display)
- Body: `font-sans` (Inter)
- Hero H1: `text-5xl lg:text-6xl font-bold leading-tight`
- Section H2: `text-3xl lg:text-4xl font-serif font-bold`
- Body text: `text-lg text-gray-600`
- Small uppercase labels: `text-sm uppercase tracking-wide font-semibold`

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `bg-peach` | `#fcf4f2` | Hero background |
| `bg-gray-100` | `#f3f4f6` | AI, Security, Trust, How It Works, Footer backgrounds |
| `bg-dark` | `#2d2d2d` | CTA bar |
| `bg-red-500` | `#ef4444` | Primary buttons, accents |
| `text-dark` | `#111827` | Main headings |
| `text-muted` | `#6b7280` | Body text, descriptions |

### Spacing
- Page max-width: `max-w-7xl mx-auto px-6`
- Section vertical padding: `py-16 lg:py-24`
- Component gaps: `gap-6`, `gap-8`, `gap-12`

### Radius
- Buttons: `rounded-full`
- Cards: `rounded-2xl` or `rounded-xl`
- Inputs/accordions: `rounded-lg`

### Motion
- Fade-up wrapper: `initial={{ opacity: 0, y: 30 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-100px" }}`, `transition={{ duration: 0.6, ease: "easeOut" }}`
- Stagger children: `staggerChildren: 0.1`
- Respect `prefers-reduced-motion`

## 4. Component Architecture

### Reusable Components
1. **FadeUp** — Framer Motion wrapper for scroll-triggered fade-up.
2. **Button** — Primary (red, rounded-full), Secondary (white outline/black text), Outline White.
3. **SectionWrapper** — `section` with `max-w-7xl mx-auto px-6`.
4. **VideoPlayer** — Styled video thumbnail with play overlay, progress bar, controls.

### Section Components (one file each)
1. `Navbar.tsx`
2. `Hero.tsx`
3. `Logos.tsx`
4. `VideoQuote.tsx`
5. `AISection.tsx`
6. `Security.tsx`
7. `Resources.tsx`
8. `Solutions.tsx`
9. `CTABar.tsx`
10. `HowItWorks.tsx`
11. `TalkSection.tsx`
12. `Testimonials.tsx`
13. `TrustBadges.tsx`
14. `Footer.tsx`

## 5. Section-by-Section Design

### 5.1 Navbar
- Flexbox `justify-between items-center`, `py-4`, `max-w-7xl mx-auto px-6`.
- Logo: "supportninja" with Lucide `Shuriken` icon (fallback to `Star`).
- Links: Solutions, Industries, How It Works, Careers, Resources with `ChevronDown`.
- Buttons: "Get a Quote" (red), "Find a Job" (white border black text).

### 5.2 Hero
- Background `#fcf4f2`.
- Two-column grid (`lg:grid-cols-2`), gap-12.
- Left: serif H1, two paragraphs, red CTA button with arrow.
- Right: CSS/SVG composite illustration with gray blob, magnifying glass, chart, lightbulb, documents.

### 5.3 Logos
- White background, centered uppercase label.
- `grid-cols-3 md:grid-cols-6` logo grid, grayscale `opacity-60 hover:opacity-100`.

### 5.4 Video/Quote
- Two columns, gap-12.
- Left: `VideoPlayer` with thumbnail, play button, progress bar, controls.
- Right: serif H2, paragraph, "Craig Crisler" highlighted red.

### 5.5 AI Section
- Background `bg-gray-100` with optional top wave SVG.
- Left: masked image of agent with headset, floating white card overlay.
- Right: serif H2, paragraph, dark green/black rounded-full button.

### 5.6 Security
- Continues gray background.
- Left: serif H2, paragraph, "Privacy-First Principle" red.
- Right: `grid-cols-2 gap-6` with 8 icon+title+description items.

### 5.7 Resources
- White background, light gray container `rounded-xl`.
- Left: "Results" with two case-study cards and link.
- Right: "Thought Leadership" dark panel with card and white link.

### 5.8 Solutions
- Two columns.
- Left: small header, serif H2, robot+human illustration.
- Right: accordion list (Customer Experience, Finance & Accounting, Content Moderation, Data Processing) with beige backgrounds and indented sub-lists.

### 5.9 CTA Bar
- Dark gray `#2d2d2d`, rounded-xl, `p-8`, flex justify-between.
- Serif H2, red and outline-white buttons.

### 5.10 How It Works
- Centered header, subtext max-w-2xl.
- `grid-cols-1 md:grid-cols-3` step cards with red "Step N" labels.

### 5.11 Talk Section
- Border top/bottom, flex justify-between.
- Serif H2 + navbar buttons.

### 5.12 Testimonials
- Centered header.
- Large peach card with quote icon, italic quote, author, arrow controls, pagination dots.

### 5.13 Trust Badges
- Gray-green tint background, flex wrap justify-center gap-8.
- ShieldCheck icons with compliance labels.

### 5.14 Footer
- Same gray-green background.
- Logo + 5-column link grid.
- Bottom bar with copyright and legal links.

## 6. Accessibility

- Semantic HTML: `<nav>`, `<section>`, `<header>`, `<footer>`, `<main>`.
- Buttons are real `<button>` elements; links are `<a>`.
- Focus-visible rings on all interactive elements.
- Respect `prefers-reduced-motion`.
- Touch targets ≥44px.

## 7. File Structure

```
/mnt/c/supportninja/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Logos.tsx
│   │   ├── VideoQuote.tsx
│   │   ├── AISection.tsx
│   │   ├── Security.tsx
│   │   ├── Resources.tsx
│   │   ├── Solutions.tsx
│   │   ├── CTABar.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── TalkSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TrustBadges.tsx
│   │   └── Footer.tsx
│   └── components/
│       ├── FadeUp.tsx
│       ├── Button.tsx
│       ├── SectionWrapper.tsx
│       └── VideoPlayer.tsx
├── public/
│   └── (placeholder images)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 8. Acceptance Criteria

- [ ] `npm run dev` starts without errors.
- [ ] `npm run build` completes successfully.
- [ ] Page renders all 14 sections in order.
- [ ] Navbar is fixed/sticky and omits the promotional banner.
- [ ] Hero uses `#fcf4f2` background and two-column layout.
- [ ] Logos grid is responsive and grayscale with hover opacity.
- [ ] Video player has play overlay and progress bar.
- [ ] AI section has floating card and masked image.
- [ ] Security grid has 8 items with icons.
- [ ] Resources section has Results + Thought Leadership split.
- [ ] Solutions accordion expands/collapses with sub-lists.
- [ ] CTA bar, How It Works, Talk, Testimonials, Trust Badges, and Footer match the brief.
- [ ] Framer Motion fade-up animations are present and respect reduced motion.
- [ ] Layout is responsive across mobile, tablet, and desktop.
