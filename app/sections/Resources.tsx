import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

export default function Resources() {
  return (
    <SectionWrapper className="py-16 lg:py-24">
      <FadeUp>
        <div className="overflow-hidden rounded-2xl bg-gray-100 lg:grid lg:grid-cols-2">
          {/* Results */}
          <div className="p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Results
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="h-32 bg-red-600 p-4 text-white">
                  <p className="text-sm font-semibold">Success Stories</p>
                  <p className="mt-1 text-lg font-bold">Global Investment Network</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-900">
                    From Bottleneck to Transformation...
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="h-32 bg-gray-500 p-4 text-white">
                  <p className="text-sm font-semibold">Success Stories</p>
                  <p className="mt-1 text-lg font-bold">Medicare Benefits Platform</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-900">
                    From Emergency Hire to Essential Partner...
                  </p>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-red-500 hover:underline"
            >
              See More Case Studies <span aria-hidden="true">-&gt;</span>
            </a>
          </div>

          {/* Thought Leadership */}
          <div className="bg-gray-900 p-8 text-white lg:rounded-r-2xl lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Thought Leadership
            </p>
            <div className="mt-6 overflow-hidden rounded-xl bg-gray-800">
              <div className="h-40 bg-gray-700" />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold">
                  Convert More Freemium Users...
                </h3>
                <p className="mt-2 text-gray-300">
                  Strategies for turning trial users into paying customers.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-white hover:underline"
            >
              See More Resources <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
