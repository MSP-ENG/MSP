import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function ProjectCardGrid({
  projects = [],
  title = "Featured Pharmaceutical & Industrial Projects",
  subtitle = "Delivering precision-built aseptic cleanrooms, HPAPI containment facilities, and biotech suites across India and international markets.",
  limit = null,
  showViewAll = true
}) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  const sectorBadgeVariants = {
    'Pharmaceutical': 'primary',
    'API': 'amber',
    'Biotechnology': 'success',
    'Manufacturing': 'default',
    'Industrial': 'outline'
  };

  return (
    <section className="section-padding bg-surface-container-low border-t border-outline-variant">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-outline-variant pb-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Proven Track Record
            </span>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mt-1">
              {title}
            </h2>
            <p className="font-body text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
              {subtitle}
            </p>
          </div>
          {showViewAll && (
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-container group whitespace-nowrap"
            >
              <span>View All Project Portfolios</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div
              key={project.slug}
              className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-ambient-lg transition-all duration-300 group"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-surface-container">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={sectorBadgeVariants[project.sector] || 'primary'}>
                      {project.sector}
                    </Badge>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-secondary-container text-on-secondary-container text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1 text-xs text-on-surface-variant mb-2">
                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-headline font-bold text-lg text-primary group-hover:text-primary-container transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs font-semibold text-primary/80 mt-2 bg-surface-container p-2 rounded line-clamp-1">
                    Scope: {project.scope}
                  </p>

                  <p className="font-body text-xs text-on-surface-variant mt-3 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights preview */}
                  {project.highlights && (
                    <div className="mt-4 pt-3 border-t border-outline-variant/60">
                      <div className="text-[11px] font-bold text-on-surface uppercase tracking-wider mb-1.5">
                        Key Metric:
                      </div>
                      <div className="flex items-start gap-1.5 text-xs text-on-surface">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{project.highlights[0]}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 pt-0">
                <Link
                  to={`/projects/${project.slug}`}
                  className="w-full py-2.5 px-4 rounded border border-outline hover:border-primary hover:bg-surface-container text-primary font-headline font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
