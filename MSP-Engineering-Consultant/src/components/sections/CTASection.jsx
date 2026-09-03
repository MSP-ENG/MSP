import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, FileText } from 'lucide-react';
import { Button } from '../ui/Button';

export function CTASection({
  title = "Ready to Engineer Your Next cGMP Compliant Facility?",
  subtitle = "Connect with our principal engineering consultants for conceptual feasibility, cleanroom sizing, or turnkey EPCM oversight.",
  buttonText = "Schedule Facility Consultation",
  buttonLink = "/contact"
}) {
  return (
    <section className="bg-primary text-on-primary py-16 md:py-20 border-t border-primary-container relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary-container text-secondary-fixed text-xs font-bold uppercase tracking-wider mb-4 border border-secondary-fixed/20">
            <PhoneCall className="w-3.5 h-3.5" /> Start Your Project
          </span>

          <h2 className="font-headline font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-on-primary leading-tight">
            {title}
          </h2>

          <p className="font-body text-sm sm:text-base md:text-lg text-primary-fixed mt-4 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
            <Button
              to={buttonLink}
              variant="amber"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {buttonText}
            </Button>
            <Button
              to="/projects"
              variant="secondary"
              size="lg"
              className="bg-primary-container text-on-primary border-primary-container hover:bg-surface-tint"
            >
              Review Case Studies
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-primary-container/80 flex flex-wrap justify-center items-center gap-6 text-xs text-primary-fixed">
            <span>Direct Response within 24 Hours</span>
            <span>•</span>
            <span>NDA Protected Project Discussions</span>
            <span>•</span>
            <span>Direct Access to Principal Consultants</span>
          </div>
        </div>
      </div>
    </section>
  );
}
