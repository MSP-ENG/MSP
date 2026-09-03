import React from 'react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Button } from '../../components/ui/Button';
import { CTASection } from '../../components/sections/CTASection';
import { 
  ShieldCheck, 
  FileCheck2, 
  Cpu, 
  Wind, 
  Thermometer, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  ClipboardList
} from 'lucide-react';
import { SEED_SERVICES } from '../../data/seedData';

export function ValidationDocumentation() {
  const valServices = SEED_SERVICES.filter(s => s.categorySlug === 'validation-documentation');

  const lifecycleStages = [
    {
      code: "DQ",
      name: "Design Qualification",
      desc: "Documented verification that the proposed design of facilities, systems, and equipment is suitable for the intended purpose and meets all URS criteria.",
      deliverable: "DQ Protocol & Traceability Matrix"
    },
    {
      code: "IQ",
      name: "Installation Qualification",
      desc: "Documented verification that the equipment and utility systems are installed in compliance with approved design drawings, manufacturer specifications, and cGMP standards.",
      deliverable: "IQ Protocol, MOC Certs & As-Built Verification"
    },
    {
      code: "OQ",
      name: "Operational Qualification",
      desc: "Documented verification that the equipment and systems operate in accordance with operational specifications throughout specified operating ranges and alarm limits.",
      deliverable: "OQ Protocol, Challenge Tests & Alarm Matrices"
    },
    {
      code: "PQ",
      name: "Performance Qualification",
      desc: "Documented verification that systems and processes perform consistently and reproducibly to produce product meeting predetermined quality specifications under routine loads.",
      deliverable: "PQ Report, Media Fill Records & Stability Logs"
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-surface py-12 md:py-16 border-b border-outline-variant">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: 'Validation & Documentation' }
            ]}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Discipline 05
            </span>
            <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-primary mt-2 leading-tight">
              Validation & Documentation Services
            </h1>
            <p className="font-body text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
              Complete qualification lifecycle management for pharmaceutical, biotech, and API facilities. We deliver audit-ready DQ/IQ/OQ/PQ protocols, GAMP 5 computerized system validation, and cleanroom ISO certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Core Validation Disciplines */}
      <section className="section-padding bg-surface-container-low border-b border-outline-variant">
        <div className="container-custom">
          <div className="flex items-center gap-4 border-b border-outline-variant pb-4 mb-8">
            <h2 className="font-headline font-bold text-2xl sm:text-3xl text-primary">
              Core Validation Offerings
            </h2>
            <div className="flex-grow h-[1px] bg-outline-variant hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valServices.map((service) => (
              <div
                key={service.slug}
                className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col justify-between hover:shadow-ambient-lg hover:border-b-2 hover:border-b-primary transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline font-bold text-lg text-primary group-hover:text-primary-container transition-colors">
                    {service.sub_service}
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  {service.deliverables && (
                    <div className="mt-4 pt-3 border-t border-outline-variant/60">
                      <span className="text-[11px] font-bold text-on-surface uppercase tracking-wider block mb-1.5">
                        Key Deliverables:
                      </span>
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
                  <Button
                    to="/contact"
                    variant="outline"
                    size="sm"
                    className="w-full justify-between"
                  >
                    <span>Request Protocol Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Stage Qualification Lifecycle Matrix */}
      <section className="section-padding bg-surface border-b border-outline-variant">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Qualification Framework
            </span>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl text-primary mt-1">
              End-to-End DQ / IQ / OQ / PQ Lifecycle
            </h2>
            <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
              Our validation protocols adhere to ISPE Commissioning & Qualification guidelines and international cGMP regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecycleStages.map((stage) => (
              <div
                key={stage.code}
                className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-primary text-on-primary font-headline font-extrabold text-xl flex items-center justify-center mb-4">
                    {stage.code}
                  </div>
                  <h3 className="font-headline font-bold text-lg text-primary mb-2">
                    {stage.name}
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">
                    {stage.desc}
                  </p>
                </div>
                <div className="border-t border-outline-variant pt-3 text-[11px] font-bold text-secondary">
                  Key Output: {stage.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSV & GAMP 5 Focus */}
      <section className="section-padding bg-surface-container-low border-b border-outline-variant">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Data Integrity & Compliance
              </span>
              <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mt-1">
                Computerized System Validation (CSV / GAMP 5)
              </h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant mt-4 leading-relaxed">
                Modern pharmaceutical plants rely heavily on automated SCADA, BMS, and electronic batch records. We provide full risk-based CSV in compliance with 21 CFR Part 11 and EU Annex 11.
              </p>

              <div className="flex flex-col gap-3 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-primary">User Access & Role Hierarchy Verification</span>
                    <p className="text-xs text-on-surface-variant">Preventing unauthorized recipe alterations and securing admin privileges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-primary">Time-Stamped Audit Trail Testing</span>
                    <p className="text-xs text-on-surface-variant">Verifying indelible logging of operator actions, alarms, and data overrides.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-primary">Backup & Disaster Recovery Protocols</span>
                    <p className="text-xs text-on-surface-variant">Validated routine database archival and failover recovery simulation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-outline-variant shadow-ambient-lg bg-surface-container">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                alt="Automated CSV and Pharmaceutical System Testing"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Prepare Your Plant for International Regulatory Audits"
        subtitle="Our validation specialists author and execute end-to-end qualification packages for USFDA, WHO, and EU-GMP inspections."
      />
    </div>
  );
}
