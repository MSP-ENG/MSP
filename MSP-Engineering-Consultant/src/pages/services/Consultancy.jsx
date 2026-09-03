import React from 'react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Button } from '../../components/ui/Button';
import { CTASection } from '../../components/sections/CTASection';
import { Compass, CheckCircle2, ArrowRight, ShieldCheck, FileSpreadsheet, MapPin } from 'lucide-react';
import { SEED_SERVICES } from '../../data/seedData';

export function Consultancy() {
  const consultServices = SEED_SERVICES.filter(s => s.categorySlug === 'consultancy');

  return (
    <div>
      <section className="bg-surface py-12 md:py-16 border-b border-outline-variant">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: 'Consultancy' }
            ]}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Discipline 01
            </span>
            <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-primary mt-2 leading-tight">
              Engineering Consultancy & Regulatory Advisory
            </h1>
            <p className="font-body text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
              Strategic master planning, regulatory gap audits, and techno-economic feasibility studies for greenfield pharma developments and brownfield modernization programs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-container-low border-b border-outline-variant">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultServices.map((service) => (
              <div
                key={service.slug}
                className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col justify-between hover:shadow-ambient-lg transition-all"
              >
                <div>
                  <div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center text-primary mb-4">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline font-bold text-lg text-primary">{service.sub_service}</h3>
                  <p className="font-body text-xs text-on-surface-variant mt-2 leading-relaxed">{service.description}</p>
                  
                  {service.deliverables && (
                    <div className="mt-4 pt-3 border-t border-outline-variant/60">
                      <span className="text-[11px] font-bold text-on-surface uppercase tracking-wider block mb-1.5">Deliverables:</span>
                      <ul className="flex flex-col gap-1 text-xs text-on-surface">
                        {service.deliverables.map((del, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant">
                  <Button to="/contact" variant="outline" size="sm" className="w-full justify-between">
                    <span>Consult on {service.sub_service}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Planning a New Facility or Upgrading an Existing Line?"
        subtitle="Our principal consultants bring over 28 years of regulatory insight to de-risk your capital investments."
      />
    </div>
  );
}
