import type { ReactNode } from 'react';
import type { Accent } from '../../types';

interface CardProps {
  accent?: Accent;
  children: ReactNode;
}

export default function Card({ accent, children }: CardProps) {
  return <article className={`card${accent ? ` card--${accent}` : ''}`}>{children}</article>;
}
