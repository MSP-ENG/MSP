import React from 'react';

export function Badge({
  children,
  variant = 'default', // 'default' | 'primary' | 'amber' | 'success' | 'outline'
  size = 'md',
  className = ''
}) {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm"
  };

  const variantStyles = {
    default: "bg-surface-container text-on-surface-variant border border-outline-variant",
    primary: "bg-primary-container text-primary-fixed border border-transparent",
    amber: "bg-secondary-fixed text-on-secondary-fixed font-semibold",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    outline: "bg-transparent text-primary border border-outline"
  };

  return (
    <span className={`inline-flex items-center gap-1 font-semibold rounded ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
