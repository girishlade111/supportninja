import Button from '../components/Button';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

export default function CTABar() {
  return (
    <SectionWrapper className="pb-8">
      <FadeUp>
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-dark p-8 md:flex-row">
          <h2 className="text-center font-serif text-2xl font-bold text-white md:text-left lg:text-3xl">
            Let&apos;s Build Your CX Advantage
          </h2>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button variant="primary" href="#">
              Speak With an Expert
            </Button>
            <Button variant="outline-white" href="#">
              Find a Job
            </Button>
          </div>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
