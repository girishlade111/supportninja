import Button from '../components/Button';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

export default function TalkSection() {
  return (
    <SectionWrapper className="border-y border-gray-200 py-8">
      <FadeUp>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h2 className="text-center font-serif text-2xl font-bold text-gray-900 md:text-left">
            Let&apos;s Talk About What Growth Looks Like for You
          </h2>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button variant="primary" href="#">
              Get a Quote
            </Button>
            <Button variant="secondary" href="#">
              Find a Job
            </Button>
          </div>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
