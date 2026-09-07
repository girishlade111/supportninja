import { ReactNode, type ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline-white';
  className?: string;
  href?: string;
  icon?: ReactNode;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  icon,
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variantClasses = {
    primary:
      'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
    secondary:
      'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus-visible:ring-gray-900',
    'outline-white':
      'bg-transparent text-white border border-white hover:bg-white/10 focus-visible:ring-white',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {icon}
    </button>
  );
}
