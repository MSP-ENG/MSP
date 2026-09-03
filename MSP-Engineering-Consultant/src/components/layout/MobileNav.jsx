import React from 'react';
import { NavLink } from 'react-router-dom';
import { Briefcase, Compass, LayoutGrid, CheckSquare, Phone } from 'lucide-react';

export function MobileNav() {
  const navItems = [
    { label: 'Consult', to: '/services/consultancy', icon: <Compass className="w-5 h-5" /> },
    { label: 'Design', to: '/services/engineering-design', icon: <LayoutGrid className="w-5 h-5" /> },
    { label: 'Projects', to: '/projects', icon: <Briefcase className="w-5 h-5" /> },
    { label: 'Validation', to: '/services/validation-documentation', icon: <CheckSquare className="w-5 h-5" /> },
    { label: 'Contact', to: '/contact', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest border-t border-outline-variant py-2 px-2 shadow-ambient" aria-label="Mobile Navigation">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 py-1 px-2.5 rounded text-[11px] font-semibold transition-all ${
                isActive
                  ? 'text-primary bg-surface-container font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
