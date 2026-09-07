import SectionWrapper from '../components/SectionWrapper';
import FadeUp from '../components/FadeUp';

const logos = [
  'Happy Socks',
  'Origin',
  'Red Week',
  'Conga',
  'BrandFive',
  'BrandSix',
];

export default function Logos() {
  return (
    <SectionWrapper className="py-16">
      <FadeUp>
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
          Leading Brands Trust SupportNinja to Scale Smarter
        </h2>
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
