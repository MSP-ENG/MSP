import React from 'react';
import { Link } from 'react-router-dom';

export function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'amber'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-4 py-2.5 text-sm font-semibold gap-2",
    lg: "px-6 py-3.5 text-base font-semibold gap-2.5"
  };

  const variantStyles = {
    primary: "bg-primary text-on-primary hover:bg-primary-container focus:ring-primary shadow-sm",
    secondary: "bg-surface-container text-primary hover:bg-surface-container-high border border-outline-variant focus:ring-primary",
    amber: "bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed-dim focus:ring-secondary font-bold shadow-sm",
    outline: "bg-transparent text-primary border border-primary hover:bg-surface-container-low focus:ring-primary",
    ghost: "bg-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container focus:ring-primary"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === 'string') {
      return <span className="material-symbols-outlined text-[18px]">{icon}</span>;
    }
    return icon;
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {icon && iconPosition === 'right' && renderIcon()}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClass}
      {...props}
    >
      {content}
    </button>
  );
}
