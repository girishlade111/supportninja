import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import FadeUp from '../components/FadeUp';
import Button from '../components/Button';

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
            By delivering agile, tech-enabled teams that integrate seamlessly with
            yours, we help you scale without the friction.
          </p>
          <Button
            variant="primary"
            icon={<ArrowRight className="h-5 w-5" />}
            className="mt-8"
          >
            Speak With an Expert
          </Button>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="relative flex items-center justify-center rounded-3xl bg-gray-100 p-12">
            <Image
              src="/images/hero-illustration.svg"
              alt="Illustration of analytics, documents, and insights"
              width={448}
              height={448}
              className="w-full max-w-md"
              priority
            />
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
