'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import SectionWrapper from '../components/SectionWrapper';

const solutions = [
  {
    title: 'Customer Experience',
    items: [
      'Customer Conversion',
      'Customer Onboarding',
      'Customer Support',
      'Technical Customer Support',
      'Customer Renewals',
    ],
  },
  {
    title: 'Finance & Accounting',
    items: [
      'Bookkeeping',
      'Accounts Payable',
      'Accounts Receivable',
      'Financial Reporting',
      'Expense Management',
    ],
  },
  {
    title: 'Content Moderation',
    items: [
      'Image Moderation',
      'Text Moderation',
      'Video Moderation',
      'Profile Verification',
      'Trust & Safety',
    ],
  },
  {
    title: 'Data Processing',
    items: [
      'Data Entry',
      'Data Cleansing',
      'Data Annotation',
      'Data Validation',
      'Transcription',
    ],
  },
];

export default function Solutions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper className="py-16 lg:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Our Solutions
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
            Scalable, Tech-Enabled Outsourcing Designed to Deliver Value
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/robot-human.svg"
            alt="Robot and human working together"
            className="mt-8 w-full max-w-md"
          />
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="grid gap-4">
            {solutions.map((solution, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={solution.title}
                  className="rounded-2xl bg-[#fcf4f2] p-6"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between text-left font-semibold text-gray-900"
                  >
                    {solution.title}
                    {isOpen ? (
                      <ChevronDown className="h-5 w-5 shrink-0" />
                    ) : (
                      <ChevronRight className="h-5 w-5 shrink-0" />
                    )}
                  </button>

                  {isOpen && solution.items && (
                    <ul className="mt-4 space-y-2 pl-4">
                      {solution.items.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-red-500"
                          >
                            {item}
                            <ChevronRight className="h-4 w-4 shrink-0" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
