import { Star } from 'lucide-react';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';

const footerLinks = [
  {
    title: 'Solutions',
    links: [
      'Customer Experience',
      'Finance & Accounting',
      'Content Moderation',
      'Data Processing',
    ],
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
      <SectionWrapper background="bg-gray-100" className="py-16">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <Star className="h-6 w-6 fill-red-500 text-red-500" />
            <span>supportninja</span>
          </a>
          <Button variant="primary" href="#">
            Get a Quote
          </Button>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-gray-900">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-red-500"
                    >
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
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-red-500">
              Privacy
            </a>
            <a href="#" className="hover:text-red-500">
              Security
            </a>
            <a href="#" className="hover:text-red-500">
              Terms
            </a>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}
