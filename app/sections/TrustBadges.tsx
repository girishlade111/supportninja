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
            <div
              key={badge}
              className="flex items-center gap-2 text-gray-700"
            >
              <ShieldCheck className="h-6 w-6 text-emerald-800" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wide">{badge}</span>
            </div>
          ))}
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
