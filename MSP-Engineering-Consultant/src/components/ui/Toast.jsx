import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export function Toast({
  show,
  onClose,
  type = 'success', // 'success' | 'error' | 'info'
  title,
  message,
  duration = 5000
}) {
  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-error flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-primary flex-shrink-0" />
  };

  const borders = {
    success: 'border-l-4 border-l-emerald-600 bg-surface-container-lowest',
    error: 'border-l-4 border-l-error bg-surface-container-lowest',
    info: 'border-l-4 border-l-primary bg-surface-container-lowest'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full shadow-ambient-lg border border-outline-variant rounded p-4 flex items-start gap-3 bg-surface-container-lowest animate-in fade-in slide-in-from-bottom-5 duration-300">
      {icons[type]}
      <div className="flex-1">
        {title && <h4 className="font-bold text-sm text-primary">{title}</h4>}
        <p className="text-xs md:text-sm text-on-surface-variant mt-0.5">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-outline hover:text-on-surface p-1 rounded transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center gap-2 text-xs md:text-sm text-on-surface-variant mb-6 flex-wrap" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {item.to && !isLast ? (
              <a href={item.to} className="hover:text-primary transition-colors hover:underline">
                {item.label}
              </a>
            ) : (
              <span className={isLast ? 'text-primary font-semibold' : ''}>
                {item.label}
              </span>
            )}
            {!isLast && <span className="text-outline">/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
