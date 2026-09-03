import React from 'react';
import { Link } from 'react-router-dom';

export function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center gap-2 text-xs md:text-sm text-on-surface-variant mb-6 flex-wrap" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {item.to && !isLast ? (
              <Link to={item.to} className="hover:text-primary transition-colors hover:underline">
                {item.label}
              </Link>
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
