import React from 'react';
import { Building2, Award, ShieldCheck, Gauge } from 'lucide-react';

export function StatsBar() {
  const stats = [
    {
      value: "180+",
      label: "Projects Commissioned",
      desc: "Turnkey pharma & biotech suites",
      icon: <Building2 className="w-6 h-6 text-secondary-container" />
    },
    {
      value: "15M+",
      label: "Sq.Ft Engineered",
      desc: "ISO Class 5-8 cleanroom facilities",
      icon: <Gauge className="w-6 h-6 text-secondary-container" />
    },
    {
      value: "100%",
      label: "First-Pass Audit Rate",
      desc: "USFDA, WHO-GMP, EU-GMP Inspections",
      icon: <ShieldCheck className="w-6 h-6 text-secondary-container" />
    },
    {
      value: "28+",
      label: "Years of Engineering Rigor",
      desc: "Industrial & API consultancy legacy",
      icon: <Award className="w-6 h-6 text-secondary-container" />
    }
  ];

  return (
    <section className="bg-primary text-on-primary py-10 border-y border-primary-container">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1 border-l-2 border-primary-container pl-4">
              <div className="flex items-center gap-2">
                {stat.icon}
                <span className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl text-on-primary tracking-tight">
                  {stat.value}
                </span>
              </div>
              <div className="font-headline font-bold text-xs sm:text-sm text-secondary-fixed mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-primary-fixed leading-tight">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
