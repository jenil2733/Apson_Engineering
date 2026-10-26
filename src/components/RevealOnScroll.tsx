import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  as?: React.ElementType;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 750,
  direction = 'up',
  as: Component = 'div',
}) => {
  const { ref, isRevealed } = useScrollReveal({ delayMs: delay });

  const getTransform = () => {
    if (isRevealed) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 24px, 0)';
      case 'down':
        return 'translate3d(0, -20px, 0)';
      case 'left':
        return 'translate3d(-24px, 0, 0)';
      case 'right':
        return 'translate3d(24px, 0, 0)';
      case 'scale':
        return 'scale(0.95) translate3d(0, 16px, 0)';
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <Component
      ref={ref}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        willChange: 'opacity, transform',
      }}
      className={className}
    >
      {children}
    </Component>
  );
};
