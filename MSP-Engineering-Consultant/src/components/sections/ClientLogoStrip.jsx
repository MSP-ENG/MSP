import React from 'react';
import { Building, Shield, Award, Cpu, FlaskConical, Stethoscope } from 'lucide-react';

export function ClientLogoStrip() {
  const sectors = [
    { label: "Sterile Formulations", icon: <FlaskConical className="w-5 h-5 text-primary" /> },
    { label: "High-Potency APIs", icon: <Shield className="w-5 h-5 text-primary" /> },
    { label: "Monoclonal Antibodies", icon: <Award className="w-5 h-5 text-primary" /> },
    { label: "Bioprocess Vaccines", icon: <Stethoscope className="w-5 h-5 text-primary" /> },
    { label: "Bulk Drug Intermediates", icon: <Building className="w-5 h-5 text-primary" /> },
    { label: "Medical Device Cleanrooms", icon: <Cpu className="w-5 h-5 text-primary" /> },
  ];

  return (
    <section className="py-8 bg-surface-container border-b border-outline-variant">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs font-bold uppercase tracking-wider text-primary whitespace-nowrap">
            Industry Focus Areas:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
            {sectors.map((s, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 flex items-center justify-center gap-2 text-xs font-semibold text-on-surface shadow-sm"
              >
                {s.icon}
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
