import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

const steps = [
  {
    label: 'Step 1',
    title: 'Understand & Align',
    description:
      'We immerse ourselves in your business, goals, and customer journey.',
  },
  {
    label: 'Step 2',
    title: 'Train & Test',
    description:
      'We build playbooks, train agents, and run rigorous quality assurance.',
  },
  {
    label: 'Step 3',
    title: 'Optimize & Expand',
    description:
      'We measure performance and scale the team as your needs grow.',
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper background="bg-gray-100" className="py-16 lg:py-24">
      <FadeUp>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            How It Works
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
            From Signature to Scale — Here&apos;s How We Launch
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
            We move fast — with purpose. Our onboarding gets you from contract
            to full operations in weeks, not months.
          </p>
        </div>
      </FadeUp>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map((step, idx) => (
          <FadeUp key={step.label} delay={idx * 0.1}>
            <div className="h-full rounded-xl bg-gray-50 p-8">
              <p className="mb-4 font-serif text-xl font-semibold text-red-500">
                {step.label}
              </p>
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </SectionWrapper>
  );
}
