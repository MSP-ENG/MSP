import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SERVICE_CATEGORIES, SEED_SERVICES } from '../../data/seedData';
import { Compass, LayoutGrid, Wrench, Cpu, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CTASection } from '../../components/sections/CTASection';

export function ServicesOverview() {
  const iconMap = {
    'consultancy': <Compass className="w-8 h-8 text-primary" />,
    'engineering-design': <LayoutGrid className="w-8 h-8 text-primary" />,
    'project-execution': <Wrench className="w-8 h-8 text-primary" />,
    'procurement': <Cpu className="w-8 h-8 text-primary" />,
    'validation-documentation': <ShieldCheck className="w-8 h-8 text-primary" />,
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-surface py-12 md:py-16 border-b border-outline-variant">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services Overview' }
            ]}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Comprehensive Engineering Catalog
            </span>
            <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-primary mt-2 leading-tight">
              Engineering Disciplines & Specialized Services
            </h1>
            <p className="font-body text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
              Explore our 24 specialized engineering sub-services spanning conceptual master planning, 3D BIM cleanroom modeling, procurement oversight, turnkey EPCM execution, and cGMP validation dossiers.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Core Disciplines Deep-Dive Sections */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-custom flex flex-col gap-16">
          {SERVICE_CATEGORIES.map((cat, index) => {
            const subServices = SEED_SERVICES.filter(s => s.categorySlug === cat.slug);

            return (
              <div
                key={cat.slug}
                id={cat.slug}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 sm:p-10 shadow-ambient scroll-mt-28"
              >
                {/* Category Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-outline-variant gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0">
                      {iconMap[cat.slug]}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                        Discipline 0{index + 1}
                      </span>
                      <h2 className="font-headline font-bold text-2xl sm:text-3xl text-primary">
                        {cat.title}
                      </h2>
                      <p className="font-body text-sm text-on-surface-variant mt-1 max-w-2xl leading-relaxed">
                        {cat.shortDesc}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/services/${cat.slug}`}
                    className="inline-flex items-center gap-2 bg-primary text-on-primary hover:bg-primary-container px-5 py-2.5 rounded font-headline font-bold text-xs self-start lg:self-center transition-colors"
                  >
                    <span>Discipline Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Sub-services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {subServices.map((sub) => (
                    <div
                      key={sub.slug}
                      className="bg-surface-container-low/60 border border-outline-variant rounded-lg p-5 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-headline font-bold text-base text-primary mb-2">
                          {sub.sub_service}
                        </h3>
                        <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">
                          {sub.description}
                        </p>

                        {sub.deliverables && (
                          <div className="border-t border-outline-variant/60 pt-3">
                            <span className="text-[11px] font-bold text-on-surface uppercase tracking-wider block mb-2">
                              Standard Deliverables:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {sub.deliverables.map((del, dIdx) => (
                                <div key={dIdx} className="flex items-center gap-1.5 text-xs text-on-surface">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                                  <span className="truncate">{del}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need a Customized Multidisciplinary Scope?"
        subtitle="We tailor our engineering and validation packages to your exact facility footprint and regulatory targets."
      />
    </div>
  );
}
