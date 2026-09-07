import Image from 'next/image';
import Button from '../components/Button';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

export default function AISection() {
  return (
    <SectionWrapper
      background="bg-gray-100"
      className="relative py-16 lg:py-24"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block h-16 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,0 L48,12 C96,24,192,48,288,53 C384,58,480,44,576,38 C672,32,768,34,864,44 C960,54,1056,72,1152,74 C1248,76,1344,62,1392,55 L1440,48 L1440,0 L1392,0 C1344,0,1248,0,1152,0 C1056,0,960,0,864,0 C768,0,672,0,576,0 C480,0,384,0,288,0 C192,0,96,0,48,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeUp>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-gray-300">
              <Image
                src="/images/agent-headset.svg"
                alt="Support agent wearing a headset"
                fill
                className="object-cover"
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
          <Button
            href="#"
            variant="primary"
            className="mt-6 bg-emerald-900 text-white hover:bg-emerald-950 focus-visible:ring-emerald-900"
          >
            Explore Our AI Tools
          </Button>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
