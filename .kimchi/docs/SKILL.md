\---

name: design-system-seamless-outsourcing-that-helps-companies-grow

description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.

\---



<!-- TYPEUI\_SH\_MANAGED\_START -->



\# Seamless Outsourcing That Helps Companies Grow



\## Mission

Deliver implementation-ready design-system guidance for Seamless Outsourcing That Helps Companies Grow that can be applied consistently across marketing site interfaces.



\## Brand

\- Product/brand: Seamless Outsourcing That Helps Companies Grow

\- URL: https://www.supportninja.com/?ref=landingfolio

\- Audience: buyers, teams, and decision-makers

\- Product surface: marketing site



\## Style Foundations

\- Visual style: structured, accessible, implementation-first

\- Main font style: `font.family.primary=tenon`, `font.family.stack=tenon, sans-serif`, `font.size.base=20.4583px`, `font.weight.base=400`, `font.lineHeight.base=32.7333px`

\- Typography scale: `font.size.xs=11px`, `font.size.sm=14.73px`, `font.size.md=16.37px`, `font.size.lg=18px`, `font.size.xl=20.46px`, `font.size.2xl=22.5px`, `font.size.3xl=24.55px`, `font.size.4xl=40.92px`

\- Color palette: `color.text.primary=#2b2c30`, `color.text.secondary=#58595c`, `color.text.tertiary=#fffcfa`, `color.text.inverse=#ee4b4a`, `color.surface.base=#000000`, `color.surface.strong=#0c3a23`, `color.border.strong=rgb(191, 193, 185) rgb(43, 44, 48) rgb(43, 44, 48)`

\- Spacing scale: `space.1=3px`, `space.2=4.09px`, `space.3=5px`, `space.4=8.18px`, `space.5=8.69px`, `space.6=9.72px`, `space.7=12.28px`, `space.8=14.32px`

\- Radius/shadow/motion tokens: `radius.xs=12px`, `radius.sm=25px`, `radius.md=48px`, `radius.lg=50px`, `radius.xl=68px`, `radius.2xl=69.56px` | `motion.duration.instant=200ms`, `motion.duration.fast=300ms`, `motion.duration.normal=500ms`



\## Accessibility

\- Target: WCAG 2.2 AA

\- Keyboard-first interactions required.

\- Focus-visible rules required.

\- Contrast constraints required.



\## Writing Tone

concise, confident, implementation-focused



\## Rules: Do

\- Use semantic tokens, not raw hex values in component guidance.

\- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.

\- Responsive behavior and edge-case handling should be specified for every component family.

\- Accessibility acceptance criteria must be testable in implementation.



\## Rules: Don't

\- Do not allow low-contrast text or hidden focus indicators.

\- Do not introduce one-off spacing or typography exceptions.

\- Do not use ambiguous labels or non-descriptive actions.



\## Guideline Authoring Workflow

1\. Restate design intent in one sentence.

2\. Define foundations and tokens.

3\. Define component anatomy, variants, and interactions.

4\. Add accessibility acceptance criteria.

5\. Add anti-patterns and migration notes.

6\. End with QA checklist.



\## Required Output Structure

\- Context and goals

\- Design tokens and foundations

\- Component-level rules (anatomy, variants, states, responsive behavior)

\- Accessibility requirements and testable acceptance criteria

\- Content and tone standards with examples

\- Anti-patterns and prohibited implementations

\- QA checklist



\## Component Rule Expectations

\- Include keyboard, pointer, and touch behavior.

\- Include spacing and typography token requirements.

\- Include long-content, overflow, and empty-state handling.



\## Quality Gates

\- Every non-negotiable rule must use "must".

\- Every recommendation should use "should".

\- Every accessibility rule must be testable in implementation.

\- Prefer system consistency over local visual exceptions.



<!-- TYPEUI\_SH\_MANAGED\_END -->



