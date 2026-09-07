import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = '',
  background = 'bg-white',
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${background} ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
