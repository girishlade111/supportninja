import {
  Award,
  ClipboardCheck,
  Database,
  Eye,
  FileText,
  Lock,
  Shield,
  UserCog,
} from 'lucide-react';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

const features = [
  {
    icon: Shield,
    title: 'Privacy-First Design',
    description: 'Built from the ground up to protect customer data.',
  },
  {
    icon: Award,
    title: 'Certified Compliant',
    description: 'SOC 2 Type II certified operations.',
  },
  {
    icon: Lock,
    title: 'Role-Based Access',
    description: 'Granular permissions for every team member.',
  },
  {
    icon: FileText,
    title: 'PII Redaction',
    description: 'Automated detection and redaction of sensitive data.',
  },
  {
    icon: Database,
    title: 'All Data Encrypted',
    description: 'Encryption in transit and at rest by default.',
  },
  {
    icon: UserCog,
    title: 'Human-in-the-Loop',
    description: 'Expert oversight on every automated decision.',
  },
  {
    icon: Eye,
    title: 'No Cross-Client Data',
    description: 'Strict data isolation between client environments.',
  },
  {
    icon: ClipboardCheck,
    title: 'Every System Reviewed',
    description: 'Continuous security audits and monitoring.',
  },
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
            <span className="font-semibold text-red-500">
              Privacy-First Principle
            </span>{' '}
            is our commitment to keeping your data and your customers&apos; data
            safe at every step.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <Icon className="h-8 w-8 text-emerald-800" />
                  <h3 className="mt-4 font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
