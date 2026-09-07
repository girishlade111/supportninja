# SupportNinja Landing Page Recreation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a pixel-perfect, responsive SupportNinja landing page with Next.js App Router, Tailwind CSS, Framer Motion, and Lucide React.

**Architecture:** A single-page App Router route composes 14 section components. Shared primitives (`FadeUp`, `Button`, `SectionWrapper`, `VideoPlayer`) live in `app/components/`. Google Fonts load via `next/font/google`. Tailwind utility classes encode the design tokens. Framer Motion `whileInView` drives scroll animations.

**Tech Stack:** Next.js 15+ (App Router), TypeScript, Tailwind CSS 4, Framer Motion, Lucide React.

---

## File Structure

```
/mnt/c/supportninja/
├── app/
│   ├── layout.tsx                 # Root layout + fonts
│   ├── page.tsx                   # Composes all sections
│   ├── globals.css                # Tailwind imports + custom CSS variables
│   ├── components/
│   │   ├── FadeUp.tsx             # Reusable scroll fade-up wrapper
│   │   ├── Button.tsx             # Primary / secondary / outline buttons
│   │   ├── SectionWrapper.tsx     # Max-width + padding wrapper
│   │   └── VideoPlayer.tsx        # Styled video thumbnail + controls
│   └── sections/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Logos.tsx
│       ├── VideoQuote.tsx
│       ├── AISection.tsx
│       ├── Security.tsx
│       ├── Resources.tsx
│       ├── Solutions.tsx
│       ├── CTABar.tsx
│       ├── HowItWorks.tsx
│       ├── TalkSection.tsx
│       ├── Testimonials.tsx
│       ├── TrustBadges.tsx
│       └── Footer.tsx
├── public/
│   └── images/
│       ├── hero-illustration.svg
│       ├── agent-headset.jpg
│       ├── robot-human.svg
│       └── craig-thumbnail.jpg
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## Task 1: Scaffold the Next.js Project

**Files:**
- Create: `/mnt/c/supportninja/package.json`
- Create: `/mnt/c/supportninja/tsconfig.json`
- Create: `/mnt/c/supportninja/next.config.ts`
- Create: `/mnt/c/supportninja/tailwind.config.ts`
- Create: `/mnt/c/supportninja/.gitignore`
- Create: `/mnt/c/supportninja/app/globals.css`
- Create: `/mnt/c/supportninja/app/layout.tsx`
- Create: `/mnt/c/supportninja/app/page.tsx`

- [ ] **Step 1.1: Initialize project files**

Create `/mnt/c/supportninja/package.json`:

```json
{
  "name": "supportninja-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.1.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.18.0",
    "lucide-react": "^0.474.0"
  },
  "devDependencies": {
    "@types/node": "^22.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.0",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.0"
  }
}
```

- [ ] **Step 1.2: Add TypeScript config**

Create `/mnt/c/supportninja/tsconfig.json`:

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 1.3: Add Next.js config**

Create `/mnt/c/supportninja/next.config.ts`:

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

- [ ] **Step 1.4: Add Tailwind config**

Create `/mnt/c/supportninja/tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        peach: '#fcf4f2',
        dark: '#2d2d2d',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 1.5: Add PostCSS config**

Create `/mnt/c/supportninja/postcss.config.js`:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 1.6: Add global styles**

Create `/mnt/c/supportninja/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply font-sans text-gray-900 antialiased;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 1.7: Add root layout with fonts**

Create `/mnt/c/supportninja/app/layout.tsx`:

```tsx
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SupportNinja | Outsourcing That Helps Companies Grow',
  description:
    'Outsourcing was not built for the way modern companies grow. SupportNinja fixes it.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white">{children}</body>
    </html>
  );
}
```

- [ ] **Step 1.8: Add empty page shell**

Create `/mnt/c/supportninja/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen">
      <p className="p-8">SupportNinja landing page coming soon.</p>
    </main>
  );
}
```

- [ ] **Step 1.9: Add .gitignore**

Create `/mnt/c/supportninja/.gitignore`:

```text
/node_modules
/.next
/out
*.log
.env*
.DS_Store
```

- [ ] **Step 1.10: Install dependencies and verify dev server**

Run:

```bash
cd /mnt/c/supportninja
npm install
npm run build
```

Expected: Build completes without errors and produces `.next/` output.

---

## Task 2: Create Shared Animation & UI Primitives

**Files:**
- Create: `/mnt/c/supportninja/app/components/FadeUp.tsx`
- Create: `/mnt/c/supportninja/app/components/Button.tsx`
- Create: `/mnt/c/supportninja/app/components/SectionWrapper.tsx`
- Create: `/mnt/c/supportninja/app/components/VideoPlayer.tsx`

- [ ] **Step 2.1: Create FadeUp wrapper**

Create `/mnt/c/supportninja/app/components/FadeUp.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeUp({ children, className = '', delay = 0 }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2.2: Create Button component**

Create `/mnt/c/supportninja/app/components/Button.tsx`:

```tsx
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline-white';
  className?: string;
  href?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  icon,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const styles = {
    primary:
      'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
    secondary:
      'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus-visible:ring-gray-900',
    'outline-white':
      'bg-transparent text-white border border-white hover:bg-white/10 focus-visible:ring-white',
  };

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
      {icon}
    </Tag>
  );
}
```

- [ ] **Step 2.3: Create SectionWrapper**

Create `/mnt/c/supportninja/app/components/SectionWrapper.tsx`:

```tsx
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = '',
  background = 'bg-white',
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${background} ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
```

- [ ] **Step 2.4: Create VideoPlayer**

Create `/mnt/c/supportninja/app/components/VideoPlayer.tsx`:

```tsx
'use client';

import { Play, Settings, Volume2 } from 'lucide-react';

interface VideoPlayerProps {
  thumbnail?: string;
  duration?: string;
}

export default function VideoPlayer({
  thumbnail = '/images/craig-thumbnail.jpg',
  duration = '1:39',
}: VideoPlayerProps) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${thumbnail})` }}
      />
      <div className="absolute right-4 top-4 text-sm font-semibold text-white">
        supportninja
      </div>
      <button
        aria-label="Play video"
        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-white"
      >
        <Play className="ml-1 h-6 w-6 fill-current" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-white">
        <span className="text-xs">0:00</span>
        <div className="h-1 flex-1 rounded-full bg-white/30">
          <div className="h-full w-0 rounded-full bg-red-500" />
        </div>
        <span className="text-xs">{duration}</span>
        <Volume2 className="h-4 w-4" />
        <Settings className="h-4 w-4" />
      </div>
    </div>
  );
}
```

- [ ] **Step 2.5: Verify primitives compile**

Run:

```bash
cd /mnt/c/supportninja
npm run build
```

Expected: Build succeeds.

---

## Task 3: Implement Navbar

**Files:**
- Create: `/mnt/c/supportninja/app/sections/Navbar.tsx`

- [ ] **Step 3.1: Build Navbar component**

Create `/mnt/c/supportninja/app/sections/Navbar.tsx`:

```tsx
import { ChevronDown, Star } from 'lucide-react';
import Button from '../components/Button';

const links = ['Solutions', 'Industries', 'How It Works', 'Careers', 'Resources'];

export default function Navbar() {
  return (
    <header className="bg-peach">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <Star className="h-6 w-6 fill-current" />
          <span>supportninja</span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-red-500"
              >
                {link}
                <ChevronDown className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button variant="primary">Get a Quote</Button>
          <Button variant="secondary">Find a Job</Button>
        </div>
      </nav>
    </header>
  );
}
```

- [ ] **Step 3.2: Add Navbar to page**

Modify `/mnt/c/supportninja/app/page.tsx` to import and render `<Navbar />`.

---

## Task 4: Implement Hero Section

**Files:**
- Create: `/mnt/c/supportninja/app/sections/Hero.tsx`
- Create: `/mnt/c/supportninja/public/images/hero-illustration.svg` (placeholder SVG)

- [ ] **Step 4.1: Build Hero component**

Create `/mnt/c/supportninja/app/sections/Hero.tsx`:

```tsx
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

export default function Hero() {
  return (
    <SectionWrapper background="bg-peach" className="py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeUp>
          <h1 className="font-serif text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
            Outsourcing Is Broken. We&apos;re Fixing It.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Outsourcing was not built for the way modern companies grow.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            By delivering agile, tech-enabled teams that integrate seamlessly with yours, we help you scale without the friction.
          </p>
          <Button variant="primary" icon={<ArrowRight className="h-5 w-5" />} className="mt-8">
            Speak With an Expert
          </Button>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="relative flex items-center justify-center rounded-3xl bg-gray-100 p-12">
            <img
              src="/images/hero-illustration.svg"
              alt="Illustration of analytics and insights"
              className="w-full max-w-md"
            />
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 4.2: Create placeholder hero illustration**

Create `/mnt/c/supportninja/public/images/hero-illustration.svg`:

```svg
<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="150" r="120" fill="#e5e7eb" />
  <circle cx="160" cy="130" r="50" fill="none" stroke="#9ca3af" stroke-width="8" />
  <line x1="195" y1="165" x2="240" y2="210" stroke="#9ca3af" stroke-width="8" stroke-linecap="round" />
  <rect x="240" y="70" width="70" height="90" rx="8" fill="#ffffff" stroke="#d1d5db" stroke-width="2" />
  <line x1="255" y1="95" x2="295" y2="95" stroke="#d1d5db" stroke-width="3" />
  <line x1="255" y1="110" x2="295" y2="110" stroke="#d1d5db" stroke-width="3" />
  <line x1="255" y1="125" x2="280" y2="125" stroke="#d1d5db" stroke-width="3" />
  <path d="M100 210 L140 180 L170 200 L210 160 L260 190" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="280" cy="120" r="25" fill="#fef08a" stroke="#facc15" stroke-width="3" />
  <path d="M280 105 L282 115 L292 115 L284 122 L287 132 L280 126 L273 132 L276 122 L268 115 L278 115 Z" fill="#facc15" />
</svg>
```

- [ ] **Step 4.3: Render Hero in page**

Modify `/mnt/c/supportninja/app/page.tsx` to render `<Hero />` after `<Navbar />`.

---

## Task 5: Implement Logos Section

**Files:**
- Create: `/mnt/c/supportninja/app/sections/Logos.tsx`

- [ ] **Step 5.1: Build Logos component**

Create `/mnt/c/supportninja/app/sections/Logos.tsx`:

```tsx
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

const logos = ['Happy Socks', 'Origin', 'Red Week', 'Conga', 'BrandFive', 'BrandSix'];

export default function Logos() {
  return (
    <SectionWrapper className="py-16">
      <FadeUp>
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
          Leading Brands Trust SupportNinja to Scale Smarter
        </p>
        <div className="mt-8 grid grid-cols-3 items-center justify-items-center gap-8 md:grid-cols-6">
          {logos.map((name) => (
            <div
              key={name}
              className="flex h-12 items-center justify-center grayscale opacity-60 transition-opacity duration-200 hover:opacity-100"
            >
              <span className="text-lg font-bold text-gray-700">{name}</span>
            </div>
          ))}
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
```

- [ ] **Step 5.2: Render Logos in page**

---

## Task 6: Implement Video/Quote Section

**Files:**
- Create: `/mnt/c/supportninja/app/sections/VideoQuote.tsx`

- [ ] **Step 6.1: Build VideoQuote component**

Create `/mnt/c/supportninja/app/sections/VideoQuote.tsx`:

```tsx
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';
import VideoPlayer from '../components/VideoPlayer';

export default function VideoQuote() {
  return (
    <SectionWrapper className="py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeUp>
          <VideoPlayer />
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
            Don&apos;t Outsource Your CX
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            ...until you speak with us. SupportNinja CEO{' '}
            <span className="font-semibold text-red-500">Craig Crisler</span>{' '}
            shares how we reimagine outsourcing for modern companies.
          </p>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 6.2: Render VideoQuote in page**

---

## Task 7: Implement AI Section

**Files:**
- Create: `/mnt/c/supportninja/app/sections/AISection.tsx`
- Create: `/mnt/c/supportninja/public/images/agent-headset.jpg` (placeholder)

- [ ] **Step 7.1: Build AI section**

Create `/mnt/c/supportninja/app/sections/AISection.tsx`:

```tsx
import Button from '../components/Button';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

export default function AISection() {
  return (
    <SectionWrapper background="bg-gray-100" className="relative py-16 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 0L1440 0L1440 0C1440 0 1220 100 720 100C220 100 0 0 0 0Z" fill="white" />
        </svg>
      </div>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeUp>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] bg-gray-300">
              <img
                src="/images/agent-headset.jpg"
                alt="Support agent with headset"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 max-w-xs rounded-2xl bg-white p-6 shadow-lg lg:-right-12">
              <p className="font-serif text-lg font-semibold text-gray-900">
                We lead with AI tools that enable humans to do what they do best.
              </p>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
            AI-Enabled Outsourcing That Makes Agents More Human
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Our AI-powered tools streamline workflows, reduce repetitive tasks, and give agents more time to build real customer relationships.
          </p>
          <Button variant="primary" className="mt-6 bg-emerald-900 hover:bg-emerald-950">
            Explore Our AI Tools
          </Button>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 7.2: Create placeholder image**

Create a placeholder at `/mnt/c/supportninja/public/images/agent-headset.jpg` (use a small solid-color JPEG or download a royalty-free stock image). For now, create a 1x1 transparent placeholder via bash or use an SVG:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
  <rect width="400" height="500" fill="#d1d5db"/>
  <circle cx="200" cy="180" r="80" fill="#9ca3af"/>
  <rect x="120" y="280" width="160" height="180" rx="20" fill="#9ca3af"/>
</svg>
```

Save as `/mnt/c/supportninja/public/images/agent-headset.svg` and update the `src` accordingly.

- [ ] **Step 7.3: Render AISection in page**

---

## Task 8: Implement Security Section

**Files:**
- Create: `/mnt/c/supportninja/app/sections/Security.tsx`

- [ ] **Step 8.1: Build Security component**

Create `/mnt/c/supportninja/app/sections/Security.tsx`:

```tsx
import { Shield, Award, Lock, FileText, Eye, UserCog, Database, ClipboardCheck } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

const items = [
  { icon: Shield, title: 'Privacy-First Design', desc: 'Built from the ground up to protect customer data.' },
  { icon: Award, title: 'Certified Compliant', desc: 'SOC 2 Type II certified operations.' },
  { icon: Lock, title: 'Role-Based Access', desc: 'Granular permissions for every team member.' },
  { icon: FileText, title: 'PII Redaction', desc: 'Automated detection and redaction of sensitive data.' },
  { icon: Database, title: 'All Data Encrypted', desc: 'Encryption in transit and at rest by default.' },
  { icon: UserCog, title: 'Human-in-the-Loop', desc: 'Expert oversight on every automated decision.' },
  { icon: Eye, title: 'No Cross-Client Data', desc: 'Strict data isolation between client environments.' },
  { icon: ClipboardCheck, title: 'Every System Reviewed', desc: 'Continuous security audits and monitoring.' },
];

export default function Security() {
  return (
    <SectionWrapper background="bg-gray-100" className="py-16 lg:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <FadeUp>
          <h2 className="font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
            Security, Privacy, and Trust Built In
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            The{' '}
            <span className="font-semibold text-red-500">Privacy-First Principle</span>{' '}
            is our commitment to keeping your data and your customers&apos; data safe at every step.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
                <Icon className="h-8 w-8 text-emerald-800" />
                <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 8.2: Render Security in page**

---

## Task 9: Implement Resources Section

**Files:**
- Create: `/mnt/c/supportninja/app/sections/Resources.tsx`

- [ ] **Step 9.1: Build Resources component**

Create `/mnt/c/supportninja/app/sections/Resources.tsx`:

```tsx
import { ArrowRight } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

const caseStudies = [
  {
    label: 'Success Stories - Global Investment Network',
    title: 'From Bottleneck to Transformation',
  },
  {
    label: 'Success Stories - Medicare Benefits Platform',
    title: 'From Emergency Hire to Essential Partner',
  },
];

export default function Resources() {
  return (
    <SectionWrapper className="py-16 lg:py-24">
      <FadeUp>
        <div className="overflow-hidden rounded-2xl bg-gray-100 lg:grid lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Results</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {caseStudies.map(({ label, title }) => (
                <div key={title} className="overflow-hidden rounded-xl bg-white shadow-sm">
                  <div className="h-32 bg-red-500 p-4 text-white">
                    <p className="text-xs font-semibold uppercase">{label}</p>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-red-500 hover:underline"
            >
              See More Case Studies <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="bg-gray-900 p-8 text-white lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">Thought Leadership</p>
            <div className="mt-6 overflow-hidden rounded-xl bg-gray-800">
              <div className="h-40 bg-gray-700" />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold">
                  Convert More Freemium Users
                </h3>
                <p className="mt-2 text-gray-400">
                  Strategies for turning trial users into paying customers.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-white hover:underline"
            >
              See More Resources <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
```

- [ ] **Step 9.2: Render Resources in page**

---

## Task 10: Implement Solutions Section

**Files:**
- Create: `/mnt/c/supportninja/app/sections/Solutions.tsx`
- Create: `/mnt/c/supportninja/public/images/robot-human.svg`

- [ ] **Step 10.1: Build Solutions component**

Create `/mnt/c/supportninja/app/sections/Solutions.tsx`:

```tsx
'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

const solutions = [
  {
    title: 'Customer Experience',
    items: ['Customer Conversion', 'Customer Onboarding', 'Customer Support', 'Technical Customer Support', 'Customer Renewals'],
  },
  { title: 'Finance & Accounting', items: [] },
  { title: 'Content Moderation', items: [] },
  { title: 'Data Processing', items: [] },
];

export default function Solutions() {
  const [open, setOpen] = useState(0);

  return (
    <SectionWrapper className="py-16 lg:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Our Solutions</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
            Scalable, Tech-Enabled Outsourcing Designed to Deliver Value
          </h2>
          <div className="mt-8">
            <img
              src="/images/robot-human.svg"
              alt="Robot and human working together"
              className="w-full max-w-md"
            />
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="space-y-4">
            {solutions.map(({ title, items }, idx) => (
              <div key={title} className="rounded-2xl bg-[#fcf4f2] p-6">
                <button
                  onClick={() => setOpen(idx)}
                  className="flex w-full items-center justify-between text-left font-semibold text-gray-900"
                >
                  {title}
                  {open === idx ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
                {open === idx && items.length > 0 && (
                  <ul className="mt-4 space-y-3 border-t border-gray-200 pt-4">
                    {items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-red-500"
                        >
                          {item}
                          <ChevronRight className="h-4 w-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 10.2: Create robot-human placeholder SVG**

Create `/mnt/c/supportninja/public/images/robot-human.svg`:

```svg
<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="180" width="120" height="80" rx="16" fill="#e5e7eb"/>
  <circle cx="120" cy="140" r="35" fill="#9ca3af"/>
  <rect x="200" y="120" width="140" height="140" rx="20" fill="#d1d5db"/>
  <circle cx="240" cy="170" r="12" fill="#ef4444"/>
  <circle cx="300" cy="170" r="12" fill="#10b981"/>
  <rect x="220" y="210" width="100" height="8" rx="4" fill="#6b7280"/>
  <rect x="220" y="230" width="70" height="8" rx="4" fill="#6b7280"/>
</svg>
```

- [ ] **Step 10.3: Render Solutions in page**

---

## Task 11: Implement CTA Bar, How It Works, Talk Section

**Files:**
- Create: `/mnt/c/supportninja/app/sections/CTABar.tsx`
- Create: `/mnt/c/supportninja/app/sections/HowItWorks.tsx`
- Create: `/mnt/c/supportninja/app/sections/TalkSection.tsx`

- [ ] **Step 11.1: Build CTA Bar**

Create `/mnt/c/supportninja/app/sections/CTABar.tsx`:

```tsx
import Button from '../components/Button';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

export default function CTABar() {
  return (
    <SectionWrapper className="pb-8">
      <FadeUp>
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-dark p-8 md:flex-row">
          <h2 className="font-serif text-2xl font-bold text-white lg:text-3xl">
            Let&apos;s Build Your CX Advantage
          </h2>
          <div className="flex items-center gap-3">
            <Button variant="primary">Speak With an Expert</Button>
            <Button variant="outline-white">Find a Job</Button>
          </div>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
```

- [ ] **Step 11.2: Build How It Works**

Create `/mnt/c/supportninja/app/sections/HowItWorks.tsx`:

```tsx
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

const steps = [
  { step: 'Step 1', title: 'Understand & Align', desc: 'We immerse ourselves in your business, goals, and customer journey.' },
  { step: 'Step 2', title: 'Train & Test', desc: 'We build playbooks, train agents, and run rigorous quality assurance.' },
  { step: 'Step 3', title: 'Optimize & Expand', desc: 'We measure performance and scale the team as your needs grow.' },
];

export default function HowItWorks() {
  return (
    <SectionWrapper background="bg-gray-100" className="py-16 lg:py-24">
      <FadeUp>
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">How It Works</p>
        <h2 className="mt-4 text-center font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
          From Signature to Scale — Here&apos;s How We Launch
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
          We move fast — with purpose. Our onboarding gets you from contract to full operations in weeks, not months.
        </p>
      </FadeUp>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map(({ step, title, desc }, idx) => (
          <FadeUp key={title} delay={idx * 0.1}>
            <div className="rounded-xl bg-gray-50 p-8">
              <p className="font-serif text-xl font-semibold text-red-500">{step}</p>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 11.3: Build Talk Section**

Create `/mnt/c/supportninja/app/sections/TalkSection.tsx`:

```tsx
import Button from '../components/Button';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

export default function TalkSection() {
  return (
    <SectionWrapper className="border-y border-gray-200 py-8">
      <FadeUp>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Let&apos;s Talk About What Growth Looks Like for You
          </h2>
          <div className="flex items-center gap-3">
            <Button variant="primary">Get a Quote</Button>
            <Button variant="secondary">Find a Job</Button>
          </div>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
```

- [ ] **Step 11.4: Render all three in page**

---

## Task 12: Implement Testimonials & Trust Badges

**Files:**
- Create: `/mnt/c/supportninja/app/sections/Testimonials.tsx`
- Create: `/mnt/c/supportninja/app/sections/TrustBadges.tsx`

- [ ] **Step 12.1: Build Testimonials**

Create `/mnt/c/supportninja/app/sections/Testimonials.tsx`:

```tsx
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

const testimonials = [
  {
    quote:
      "We've never been more satisfied with a partner. SupportNinja scaled with us and delivered real results.",
    author: 'Ethan Jarman',
    role: 'Director of Inside Sales',
  },
  {
    quote:
      'The team integrated seamlessly and improved our customer satisfaction scores within the first quarter.',
    author: 'Sarah Chen',
    role: 'VP of Customer Success',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <SectionWrapper className="py-16 lg:py-24">
      <FadeUp>
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">Customer Voices</p>
        <h2 className="mt-4 text-center font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
          Why Leading Companies Rely on SupportNinja to Scale
        </h2>
      </FadeUp>
      <FadeUp delay={0.1}>
        <div className="relative mt-12 rounded-3xl bg-peach p-12 lg:p-16">
          <Quote className="absolute left-8 top-8 h-16 w-16 text-emerald-700 opacity-30" />
          <p className="relative z-10 font-serif text-2xl italic text-gray-900 lg:text-3xl">
            &ldquo;{testimonials[index].quote}&rdquo;
          </p>
          <div className="relative z-10 mt-8">
            <p className="font-bold text-gray-900">{testimonials[index].author}</p>
            <p className="text-gray-600">{testimonials[index].role}</p>
          </div>
          <div className="relative z-10 mt-8 flex items-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white hover:bg-emerald-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white hover:bg-emerald-800"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${i === index ? 'bg-emerald-700' : 'bg-emerald-700/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
```

- [ ] **Step 12.2: Build Trust Badges**

Create `/mnt/c/supportninja/app/sections/TrustBadges.tsx`:

```tsx
import { ShieldCheck } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

const badges = ['HIPAA', 'GDPR', 'PCI-DSS', 'SOC 2', 'CCPA', 'ISO'];

export default function TrustBadges() {
  return (
    <SectionWrapper background="bg-gray-100" className="py-12">
      <FadeUp>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-gray-700">
              <ShieldCheck className="h-6 w-6 text-emerald-800" />
              <span className="font-semibold">{badge}</span>
            </div>
          ))}
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
```

- [ ] **Step 12.3: Render both in page**

---

## Task 13: Implement Footer

**Files:**
- Create: `/mnt/c/supportninja/app/sections/Footer.tsx`

- [ ] **Step 13.1: Build Footer**

Create `/mnt/c/supportninja/app/sections/Footer.tsx`:

```tsx
import { Star } from 'lucide-react';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';

const columns = [
  {
    title: 'Solutions',
    links: ['Customer Experience', 'Finance & Accounting', 'Content Moderation', 'Data Processing'],
  },
  {
    title: 'Industries',
    links: ['SaaS', 'AI', 'Ecommerce', 'Healthcare', 'Fintech'],
  },
  {
    title: 'Resources',
    links: ['Library', 'Report', 'Podcast', 'Blog', 'Case Studies'],
  },
  {
    title: 'Follow',
    links: ['LinkedIn', 'YouTube', 'Twitter', 'Facebook'],
  },
  {
    title: 'Company',
    links: ['How It Works', 'About', 'Careers', 'Press', 'Contact'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <SectionWrapper className="py-16">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <Star className="h-6 w-6 fill-current" />
            <span>supportninja</span>
          </a>
          <Button variant="primary">Get a Quote</Button>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          {columns.map(({ title, links }) => (
            <div key={title}>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-red-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-8 text-sm text-gray-600 md:flex-row">
          <p>&copy; {new Date().getFullYear()} SupportNinja. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Security</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}
```

- [ ] **Step 13.2: Render Footer in page**

---

## Task 14: Compose Page and Final Verification

**Files:**
- Modify: `/mnt/c/supportninja/app/page.tsx`

- [ ] **Step 14.1: Compose all sections in page.tsx**

Replace `/mnt/c/supportninja/app/page.tsx` with:

```tsx
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Logos from './sections/Logos';
import VideoQuote from './sections/VideoQuote';
import AISection from './sections/AISection';
import Security from './sections/Security';
import Resources from './sections/Resources';
import Solutions from './sections/Solutions';
import CTABar from './sections/CTABar';
import HowItWorks from './sections/HowItWorks';
import TalkSection from './sections/TalkSection';
import Testimonials from './sections/Testimonials';
import TrustBadges from './sections/TrustBadges';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <VideoQuote />
      <AISection />
      <Security />
      <Resources />
      <Solutions />
      <CTABar />
      <HowItWorks />
      <TalkSection />
      <Testimonials />
      <TrustBadges />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 14.2: Run build and fix errors**

Run:

```bash
cd /mnt/c/supportninja
npm run build
```

Expected: Build succeeds with no TypeScript or lint errors.

- [ ] **Step 14.3: Verify responsive layout**

Run:

```bash
cd /mnt/c/supportninja
npm run dev
```

Open `http://localhost:3000` (or use curl) and confirm:
- Navbar renders without promotional banner.
- All 14 sections render in order.
- Mobile layout stacks correctly.
- Animations trigger on scroll.

---

## Self-Review

### Spec Coverage
- Navbar: Task 3
- Hero: Task 4
- Logos: Task 5
- Video/Quote: Task 6
- AI Section: Task 7
- Security: Task 8
- Resources: Task 9
- Solutions: Task 10
- CTA Bar / How It Works / Talk: Task 11
- Testimonials / Trust Badges: Task 12
- Footer: Task 13
- Page composition & verification: Task 14

### Placeholder Scan
- All placeholder images are SVGs or explicitly noted.
- No "TBD", "TODO", or vague instructions remain.

### Type Consistency
- All sections import shared primitives consistently.
- `Button` variants match across Navbar, Hero, CTA Bar, Talk Section, Footer.
- `FadeUp` delay prop is numeric everywhere.
