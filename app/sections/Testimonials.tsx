'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

const testimonials = [
  {
    quote:
      "We've never been more satisfied with a partner. SupportNinja scaled with us and delivered real results.",
    name: 'Ethan Jarman',
    role: 'Director of Inside Sales',
  },
  {
    quote:
      'The team integrated seamlessly and improved our customer satisfaction scores within the first quarter.',
    name: 'Sarah Chen',
    role: 'VP of Customer Success',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  return (
    <SectionWrapper className="py-16 lg:py-24">
      <FadeUp>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
            Customer Voices
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
            Why Leading Companies Rely on SupportNinja to Scale
          </h2>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="relative mt-12 rounded-3xl bg-peach p-12 lg:p-16">
          <Quote
            className="absolute left-8 top-8 h-16 w-16 text-emerald-700 opacity-30"
            aria-hidden="true"
          />

          <blockquote className="relative z-10">
            <p className="font-serif text-2xl font-medium italic text-gray-900 lg:text-3xl">
              &ldquo;{current.quote}&rdquo;
            </p>

            <footer className="mt-8">
              <p className="text-lg font-bold text-gray-900">{current.name}</p>
              <p className="text-gray-600">{current.role}</p>
            </footer>
          </blockquote>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2" aria-label="Testimonial pagination">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === index ? 'bg-emerald-700' : 'bg-emerald-700/30 hover:bg-emerald-700/50'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white transition-colors hover:bg-emerald-800"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white transition-colors hover:bg-emerald-800"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
