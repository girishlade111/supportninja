'use client';

import { useEffect, useState } from 'react';
import { Star, ChevronDown, type LucideIcon } from 'lucide-react';
import Button from '../components/Button';

const navLinks = [
  'Solutions',
  'Industries',
  'How It Works',
  'Careers',
  'Resources',
];

function LogoIcon() {
  const [Icon, setIcon] = useState<LucideIcon>(Star);

  useEffect(() => {
    let cancelled = false;
    import('lucide-react').then((mod) => {
      if (!cancelled) {
        setIcon((mod as unknown as Record<string, LucideIcon>).Shuriken ?? Star);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return <Icon className="h-6 w-6 fill-current" />;
}

export default function Navbar() {
  return (
    <header className="bg-peach">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-xl font-bold text-gray-900">supportninja</span>
        </div>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-red-500"
              >
                {label}
                <ChevronDown className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button variant="primary" href="#">
            Get a Quote
          </Button>
          <Button variant="secondary" href="#">
            Find a Job
          </Button>
        </div>
      </nav>
    </header>
  );
}
