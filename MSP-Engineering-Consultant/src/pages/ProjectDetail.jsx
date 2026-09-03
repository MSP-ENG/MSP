import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useProject } from '../hooks/useProjects';
import { MapPin, Calendar, CheckCircle2, ShieldCheck, ArrowLeft, ArrowRight, Building, Layers, Zap } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

export function ProjectDetail() {
  const { slug } = useParams();
  const { project, loading } = useProject(slug);

  if (loading) {
    return (
      <div className="container-custom py-24 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
        <p className="text-sm text-on-surface-variant mt-2">Loading project case study...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container-custom py-24 text-center">
        <h2 className="font-headline font-bold text-2xl text-primary">Case Study Not Found</h2>
        <p className="text-sm text-on-surface-variant mt-2 mb-6">
          The requested project could not be found or may have been relocated.
        </p>
        <Button to="/projects" variant="primary">
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-surface py-12 md:py-16 border-b border-outline-variant">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Projects & Clients', to: '/projects' },
              { label: project.title }
            ]}
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="primary">{project.sector}</Badge>
                <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                  <MapPin className="w-3.5 h-3.5 text-secondary" />
                  <span>{project.location}</span>
                </div>
              </div>

              <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
                {project.title}
              </h1>

              <p className="font-body text-base text-on-surface-variant mt-3 leading-relaxed">
                Scope: <span className="font-semibold text-primary">{project.scope}</span>
              </p>
            </div>

            <Button to="/contact" variant="amber" size="md">
              Inquire Similar Facility
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content & Specs Grid */}
      <section className="section-padding bg-surface-container-low border-b border-outline-variant">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Case Study Details & Image */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Featured Image */}
              <div className="rounded-lg overflow-hidden border border-outline-variant shadow-ambient-lg bg-surface-container">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

              {/* Comprehensive Project Overview */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 sm:p-8">
                <h2 className="font-headline font-bold text-xl sm:text-2xl text-primary mb-4">
                  Project Background & Engineering Execution
                </h2>
                <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>

                {/* Key Engineering Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-outline-variant">
                    <h3 className="font-headline font-bold text-base text-primary mb-3">
                      Key Technical Deliverables & Milestones:
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {project.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right Col: Facility Metric Box */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 shadow-ambient">
                <h3 className="font-headline font-bold text-lg text-primary mb-4 pb-3 border-b border-outline-variant">
                  Facility Specifications
                </h3>

                <div className="flex flex-col gap-4 text-xs sm:text-sm">
                  {project.stats?.area && (
                    <div className="flex justify-between items-center py-1.5 border-b border-outline-variant/60">
                      <span className="text-on-surface-variant">Built-Up Area</span>
                      <span className="font-bold text-primary">{project.stats.area}</span>
                    </div>
                  )}

                  {project.stats?.cleanroomClass && (
                    <div className="flex justify-between items-center py-1.5 border-b border-outline-variant/60">
                      <span className="text-on-surface-variant">Cleanroom Class</span>
                      <span className="font-bold text-primary">{project.stats.cleanroomClass}</span>
                    </div>
                  )}

                  {project.stats?.compliance && (
                    <div className="flex justify-between items-center py-1.5 border-b border-outline-variant/60">
                      <span className="text-on-surface-variant">Regulatory Target</span>
                      <span className="font-bold text-secondary">{project.stats.compliance}</span>
                    </div>
                  )}

                  {project.stats?.timeline && (
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-on-surface-variant">Execution Timeline</span>
                      <span className="font-bold text-primary">{project.stats.timeline}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Consultation Card */}
              <div className="bg-primary text-on-primary rounded-lg p-6 shadow-ambient border border-primary-container">
                <h4 className="font-headline font-bold text-base text-on-primary mb-2">
                  Require Similar Facility Engineering?
                </h4>
                <p className="text-xs text-primary-fixed leading-relaxed mb-4">
                  Our engineering team can assist with conceptual layout sizing, 3D modeling, and validation dossiers.
                </p>
                <Button to="/contact" variant="amber" size="sm" className="w-full">
                  Speak with Lead Consultant
                </Button>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-container"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
