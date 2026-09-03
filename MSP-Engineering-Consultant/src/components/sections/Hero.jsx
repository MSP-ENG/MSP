import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero({
  title = "Precision Engineering & Regulatory Mastery for Pharma & Biotech",
  subtitle = "From conceptual master planning to turnkey cleanroom engineering, high-purity piping, and USFDA/EU-GMP validation dossiers. Built with unwavering industrial precision.",
  showStats = true
}) {
  return (
    <section className="relative bg-surface overflow-hidden border-b border-outline-variant">
      {/* Background Subtle Gradient & Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#002a3c_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      
      <div className="container-custom pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant text-primary text-xs font-semibold w-max">
              <ShieldCheck className="w-4 h-4 text-secondary-container" />
              <span>USFDA • WHO-GMP • EU-GMP • ISO 14644 Compliant</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-primary leading-[1.15] tracking-tight">
              Engineering Cleanrooms & Process Facilities with <span className="text-secondary">Zero-Defect</span> Precision.
            </h1>

            {/* Sub-headline */}
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                to="/contact"
                variant="amber"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Facility Consultation
              </Button>
              <Button
                to="/services"
                variant="secondary"
                size="lg"
              >
                Explore 5 Core Disciplines
              </Button>
            </div>

            {/* Quick Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-outline-variant">
              <div className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>3D BIM Clash-Free Piping</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Cascade ISO Cleanrooms</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Turnkey EPCM & CSV</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic / Industrial Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-outline-variant shadow-ambient-lg bg-surface-container-lowest">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Aseptic Pharmaceutical Cleanroom and High-Purity Engineering"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-6 text-on-primary">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary-fixed mb-1">
                  <Zap className="w-3.5 h-3.5" /> FEATURED SPECIFICATION
                </div>
                <h3 className="font-headline font-bold text-lg text-on-primary">
                  Sterile Oncology & Lyophilization Suite
                </h3>
                <p className="text-xs text-primary-fixed mt-1">
                  ISO 5 Class A laminar airflow workstations with continuous particle monitoring and automated CIP/SIP loops.
                </p>
              </div>
            </div>

            {/* Floating Metric Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-container-lowest border border-outline-variant p-4 rounded shadow-ambient-lg items-center gap-3">
              <div className="w-12 h-12 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline font-bold text-xl">
                28+
              </div>
              <div>
                <div className="text-xs font-bold text-primary">Years Experience</div>
                <div className="text-[11px] text-on-surface-variant">40+ USFDA Approved Plants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
