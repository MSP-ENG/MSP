import React from 'react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Button } from '../../components/ui/Button';
import { CTASection } from '../../components/sections/CTASection';
import { 
  Wind, 
  Layers, 
  Workflow, 
  Zap, 
  Sliders, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { SEED_SERVICES } from '../../data/seedData';

export function EngineeringDesign() {
  const designServices = SEED_SERVICES.filter(s => s.categorySlug === 'engineering-design');

  const engineeringSpecs = [
    { param: "Cleanroom Classification", standard: "ISO 14644-1 (ISO 5 to ISO 8 / Class A to D)", method: "Continuous laser particle counts" },
    { param: "Air Changes Per Hour (ACPH)", standard: "20 to 60+ ACPH (Dynamic room load sizing)", method: "CFD airflow pattern simulation" },
    { param: "Cascade Room Pressure Differentials", standard: "10 Pa - 15 Pa active differential gradients", method: "Active VAV damper control" },
    { param: "High Purity Piping Surface Finish", standard: "Ra ≤ 0.38 µm (15 µ-in) Electro-polished (EP)", method: "ASME BPE compliant boroscopy" },
    { param: "WFI / Clean Steam Loops", standard: "Self-draining minimum 1:100 slope, zero dead-legs (≤ 1.5D)", method: "3D BIM orbital weld verification" },
    { param: "SCADA & Telemetry Architecture", standard: "21 CFR Part 11 electronic records with audit trails", method: "Redundant PLC / SCADA failover" }
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
              { label: 'Engineering Design' }
            ]}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Discipline 02
            </span>
            <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-primary mt-2 leading-tight">
              Engineering Design Services
            </h1>
            <p className="font-body text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
              Precision-engineered solutions tailored for the pharmaceutical and biotech sectors. Our multidisciplinary approach ensures functional clarity, regulatory compliance, and structural integrity at every phase of the design lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Core Disciplines Grid */}
      <section className="section-padding bg-surface-container-low border-b border-outline-variant">
        <div className="container-custom">
          <div className="flex items-center gap-4 border-b border-outline-variant pb-4 mb-8">
            <h2 className="font-headline font-bold text-2xl sm:text-3xl text-primary">
              Core Engineering Disciplines
            </h2>
            <div className="flex-grow h-[1px] bg-outline-variant hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designServices.map((service) => (
              <div
                key={service.slug}
                className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col justify-between hover:shadow-ambient-lg hover:border-b-2 hover:border-b-primary transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors mb-4">
                    <Workflow className="w-6 h-6" />
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
                    <span>Request Discipline Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Engineering Benchmark Matrix */}
      <section className="section-padding bg-surface border-b border-outline-variant">
        <div className="container-custom">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Engineering Tolerances & Benchmarks
            </span>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl text-primary mt-1">
              Design Criteria & Standard Protocols
            </h2>
            <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
              We apply strict mathematical tolerances across all mechanical, cleanroom, and high-purity piping design matrices.
            </p>
          </div>

          <div className="border border-outline-variant rounded-lg overflow-hidden bg-surface-container-lowest shadow-ambient">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-on-primary text-xs uppercase tracking-wider font-headline">
                    <th className="py-4 px-6 font-bold">Engineering Parameter</th>
                    <th className="py-4 px-6 font-bold">Design Benchmark / Standard</th>
                    <th className="py-4 px-6 font-bold">Verification Methodology</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant text-xs sm:text-sm text-on-surface">
                  {engineeringSpecs.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 1 ? 'bg-surface-container-low/50 hover:bg-surface-container' : 'hover:bg-surface-container'}
                    >
                      <td className="py-4 px-6 font-bold text-primary">{spec.param}</td>
                      <td className="py-4 px-6 font-medium">{spec.standard}</td>
                      <td className="py-4 px-6 text-on-surface-variant">{spec.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3D BIM & Digital Twin Section */}
      <section className="section-padding bg-surface-container-low border-b border-outline-variant">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Advanced Digital Delivery
              </span>
              <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mt-1">
                Zero-Clash 3D BIM Coordination
              </h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant mt-4 leading-relaxed">
                Using Autodesk Revit, Plant 3D, and Navisworks Manage, we build full parametric 3D models before breaking ground. We coordinate HVAC ductwork, structural beams, electrical cable trays, and slope-critical process piping to resolve 100% of spatial clashes digitally.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded">
                  <div className="font-headline font-bold text-base text-primary">LOD 350 / 400 Modeling</div>
                  <div className="text-xs text-on-surface-variant mt-1">Fabrication-ready spool drawings and isometric extraction.</div>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded">
                  <div className="font-headline font-bold text-base text-primary">Zero Rework Guarantee</div>
                  <div className="text-xs text-on-surface-variant mt-1">Saves an average of 15-20% on mechanical piping installation budgets.</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-outline-variant shadow-ambient-lg bg-surface-container">
              <img
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
                alt="3D Engineering Process Piping Model"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Detailed Engineering for Your Upcoming Project?"
        subtitle="Speak directly with our Chief Design Engineers for load calculations, P&ID reviews, and BIM modeling quotes."
      />
    </div>
  );
}
