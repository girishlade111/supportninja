# SupportNinja - AI-Powered Customer Support Platform

A modern, high-performance landing page for SupportNinja built with Next.js 15, React 19, and Tailwind CSS. Features smooth animations, responsive design, and a premium user experience.

## 🚀 Features

- **Next.js 15** with App Router for optimal performance
- **React 19** with Server Components
- **Tailwind CSS 3.4** for rapid, responsive styling
- **Framer Motion** for smooth, performant animations
- **TypeScript** for type safety and developer experience
- **ESLint** with Next.js config for code quality
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 AA compliant

## 📁 Project Structure

```
supportninja/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx       # Animated button with variants
│   │   ├── FadeUp.tsx       # Scroll-triggered fade animation
│   │   ├── SectionWrapper.tsx # Consistent section layout
│   │   └── VideoPlayer.tsx  # Custom video player component
│   ├── sections/            # Page sections
│   │   ├── Navbar.tsx       # Navigation with mobile menu
│   │   ├── Hero.tsx         # Hero section with CTA
│   │   ├── Logos.tsx        # Trusted company logos
│   │   ├── Solutions.tsx    # Solutions showcase
│   │   ├── HowItWorks.tsx   # Process explanation
│   │   ├── AISection.tsx    # AI capabilities highlight
│   │   ├── Security.tsx     # Security features
│   │   ├── Resources.tsx    # Resources section
│   │   ├── Testimonials.tsx # Customer testimonials
│   │   ├── TalkSection.tsx  # Contact/sales section
│   │   ├── CTABar.tsx       # Call-to-action bar
│   │   ├── TrustBadges.tsx  # Trust indicators
│   │   ├── VideoQuote.tsx   # Video testimonial
│   │   └── Footer.tsx       # Site footer
│   ├── globals.css          # Global styles & Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── public/
│   └── images/              # Static assets (SVGs, images)
├── .kimchi/                 # Design docs & specifications
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.js        # PostCSS configuration
├── .eslintrc.json           # ESLint configuration
└── package.json             # Dependencies & scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/girishlade111/supportninja.git
cd supportninja

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Design System

### Colors

- **Primary**: Brand blue (`#0066FF`) - Used for CTAs, links, accents
- **Secondary**: Dark navy (`#0F172A`) - Backgrounds, text
- **Accent**: Emerald (`#10B981`) - Success states, highlights
- **Neutral**: Slate scale for text, borders, backgrounds

### Typography

- **Headings**: Inter, system-ui sans-serif
- **Body**: Inter, system-ui sans-serif
- **Monospace**: JetBrains Mono for code

### Spacing

- Base unit: 4px (0.25rem)
- Consistent scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px

### Animations

- **Fade Up**: Elements animate in on scroll (IntersectionObserver)
- **Staggered**: Child elements animate with delay
- **Hover**: Subtle scale/color transitions (150-200ms)
- **Focus**: Visible focus rings for accessibility

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles where needed
- Focus management for interactive elements
- Color contrast ratios ≥ 4.5:1 (AA)
- Keyboard navigation support
- Reduced motion respect (`prefers-reduced-motion`)
- Alt text for all informative images

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm run start
```

The `build` command creates an optimized production build in `.next/`.

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```env
# Optional: Analytics, API keys, etc.
NEXT_PUBLIC_GA_ID=
```

### Tailwind Customization

Edit `tailwind.config.ts` to customize:
- Color palette
- Font families
- Spacing scale
- Breakpoints
- Animation durations

### TypeScript

Strict mode enabled. Edit `tsconfig.json` for:
- Path aliases (`@/*`)
- Target ES version
- Module resolution

## 🧪 Code Quality

### Linting

```bash
npm run lint
```

Checks for:
- Unused variables
- TypeScript errors
- React best practices
- Accessibility issues
- Import ordering

### Type Checking

```bash
npx tsc --noEmit
```

## 📦 Dependencies

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 15.1.6 | React framework |
| `react` | 19.0.0 | UI library |
| `react-dom` | 19.0.0 | DOM renderer |
| `framer-motion` | 11.18.0 | Animations |
| `lucide-react` | 0.474.0 | Icons |

### Development

| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | 5.7.0 | Type checking |
| `eslint` | 8.57.1 | Linting |
| `eslint-config-next` | 15.1.6 | Next.js ESLint rules |
| `tailwindcss` | 3.4.17 | CSS framework |
| `postcss` | 8.4.47 | CSS processing |
| `autoprefixer` | 10.4.20 | Vendor prefixes |

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/girishlade111/supportninja/issues)
- **Discussions**: [GitHub Discussions](https://github.com/girishlade111/supportninja/discussions)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Inter Font](https://rsms.me/inter/) - Typography

---

Built with ❤️ using Next.js 15 and modern web technologies.
---

**Built by Girish Lade** — [ladestack.in](https://ladestack.in)
