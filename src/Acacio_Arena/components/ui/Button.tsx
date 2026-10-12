import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'green' | 'sand' | 'ghost';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: Variant;
  href?: string;
  block?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = 'green',
  href,
  block = false,
  children,
  ...rest
}: ButtonProps) {
  const className = `btn btn--${variant}${block ? ' btn--block' : ''}`;

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        className={className}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
