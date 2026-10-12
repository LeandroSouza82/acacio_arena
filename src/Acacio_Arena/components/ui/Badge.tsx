import type { ReactNode } from 'react';
import type { Accent } from '../../types';

interface BadgeProps {
  accent?: Accent;
  children: ReactNode;
}

export default function Badge({ accent = 'green', children }: BadgeProps) {
  return <span className={`badge badge--${accent}`}>{children}</span>;
}
