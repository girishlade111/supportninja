import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';
import VideoPlayer from '../components/VideoPlayer';

export default function VideoQuote() {
  return (
    <SectionWrapper className="py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeUp>
          <VideoPlayer />
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
            Don&apos;t Outsource Your CX
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            ...until you speak with us.{' '}
            <span className="font-semibold text-red-500">Craig Crisler</span>{' '}
            shares how we reimagine outsourcing for modern companies.
          </p>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
