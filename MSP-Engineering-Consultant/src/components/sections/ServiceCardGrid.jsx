import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, LayoutGrid, Wrench, Cpu, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/seedData';

export function ServiceCardGrid({ title = "Our 5 Core Engineering Disciplines", subtitle = "Comprehensive lifecycle engineering tailored for aseptic pharmaceutical, biotech, and high-potency active ingredient manufacturing." }) {
  const iconMap = {
    'consultancy': <Compass className="w-6 h-6" />,
    'engineering-design': <LayoutGrid className="w-6 h-6" />,
    'project-execution': <Wrench className="w-6 h-6" />,
    'procurement': <Cpu className="w-6 h-6" />,
    'validation-documentation': <ShieldCheck className="w-6 h-6" />,
  };

  const disciplineDetails = {
    'consultancy': [
      'Concept & Master Site Planning',
      'Regulatory Gap Analysis (USFDA / WHO)',
      'Feasibility Studies & DPR',
      'Containment (HPAPI) & Biosafety Advisory'
    ],
    'engineering-design': [
      'HVAC & Cascade Cleanroom Engineering',
      'Process Piping (WFI, PW, Clean Steam)',
      'Aseptic Architectural PAL/MAL Flow',
      'Electrical & BMS/EMS Automation'
    ],
    'project-execution': [
      'Turnkey EPCM Project Management',
      'On-Site Quality Supervision & ITP',
      'Dynamic Pre-Commissioning & Loop Testing',
      'Primavera P6 Schedule & Cost Control'
    ],
    'procurement': [
      'Vendor Pre-Qualification & Auditing',
      'Technical Bid Evaluation (TBE Matrix)',
      'Factory Acceptance Testing (FAT)',
      'Site Acceptance Testing (SAT) Sign-Off'
    ],
    'validation-documentation': [
      'Validation Master Plan (VMP)',
      'DQ / IQ / OQ / PQ Protocols',
      'Computerized System Validation (GAMP 5)',
      'HVAC & Cleanroom ISO Certification'
    ]
  };

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-outline-variant pb-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              End-to-End Capabilities
            </span>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mt-1">
              {title}
            </h2>
            <p className="font-body text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
              {subtitle}
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-container group whitespace-nowrap"
          >
            <span>All 24 Sub-Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 5-Category Bento / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.slug}
              className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col justify-between hover:shadow-ambient-lg hover:border-b-2 hover:border-b-primary transition-all duration-300 group"
            >
              <div>
                {/* Icon & Count Badge */}
                <div className="flex justify-between items-center mb-5">
                  <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    {iconMap[category.slug]}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-surface-container text-on-surface-variant">
                    {category.count} Core Areas
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="font-headline font-bold text-lg text-primary group-hover:text-primary-container transition-colors">
                  {category.title}
                </h3>
                <p className="font-body text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  {category.shortDesc}
                </p>

                {/* Sub-discipline bullet list */}
                <ul className="mt-4 pt-4 border-t border-outline-variant/60 flex flex-col gap-2">
                  {disciplineDetails[category.slug]?.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-on-surface">
                      <Check className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-outline-variant">
                <Link
                  to={`/services/${category.slug}`}
                  className="text-xs font-bold text-primary group-hover:text-primary-container flex items-center justify-between"
                >
                  <span>Explore {category.title}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}

          {/* Quick Consultation Promo Tile */}
          <div className="bg-primary text-on-primary rounded-lg p-6 flex flex-col justify-between border border-primary-container shadow-ambient">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-fixed">
                Custom Engineering Mandate
              </span>
              <h3 className="font-headline font-bold text-xl text-on-primary mt-2">
                Have a Complex Greenfield or Retrofit Facility?
              </h3>
              <p className="text-xs text-primary-fixed mt-2 leading-relaxed">
                Our principal consultants will review your User Requirement Specifications (URS) and deliver a preliminary layout & gap assessment.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary-container">
              <Link
                to="/contact"
                className="w-full bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed-dim font-headline font-bold text-xs py-2.5 px-4 rounded flex items-center justify-center gap-2 transition-colors"
              >
                <span>Request Facility Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
