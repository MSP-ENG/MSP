import React from 'react';

export function Card({
  children,
  className = '',
  hoverEffect = true,
  interactive = false,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-surface-container-lowest border border-outline-variant rounded-lg p-6 ${
        hoverEffect ? 'hover:shadow-ambient-lg hover:border-b-2 hover:border-b-primary transition-all duration-300' : ''
      } ${interactive ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return <div className={`flex flex-col gap-2 mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }) {
  return <h3 className={`font-headline text-lg md:text-xl font-bold text-primary ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }) {
  return <p className={`font-body text-sm text-on-surface-variant leading-relaxed ${className}`}>{children}</p>;
}

export function CardContent({ children, className = '' }) {
  return <div className={`flex flex-col gap-3 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }) {
  return <div className={`mt-6 pt-4 border-t border-outline-variant flex items-center justify-between ${className}`}>{children}</div>;
}
