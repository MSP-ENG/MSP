import React, { useState } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ProjectCardGrid } from '../components/sections/ProjectCardGrid';
import { useProjects } from '../hooks/useProjects';
import { Search, Filter, Layers } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

export function Projects() {
  const [activeSector, setActiveSector] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { projects, loading } = useProjects();

  const sectors = ['All', 'Pharmaceutical', 'API', 'Biotechnology', 'Manufacturing', 'Industrial'];

  const filteredProjects = projects.filter((p) => {
    const matchesSector = activeSector === 'All' || p.sector.toLowerCase() === activeSector.toLowerCase();
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.scope.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <section className="bg-surface py-12 md:py-16 border-b border-outline-variant">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Projects & Clients' }
            ]}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Proven Global Portfolio
            </span>
            <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-primary mt-2 leading-tight">
              Engineering Case Studies & Commissioned Facilities
            </h1>
            <p className="font-body text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
              Explore our track record across sterile injectables, high-potency API synthesis, monoclonal antibody suites, and automated solid dosage plants.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-surface-container-lowest py-6 border-b border-outline-variant sticky top-20 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Sector Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setActiveSector(sector)}
                  className={`px-4 py-2 rounded text-xs font-headline font-bold whitespace-nowrap transition-all select-none ${
                    activeSector === sector
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-primary'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 flex-shrink-0">
              <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-surface-container border border-outline-variant rounded text-xs text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="bg-surface-container-low min-h-[400px]">
        {filteredProjects.length === 0 ? (
          <div className="container-custom py-20 text-center flex flex-col items-center">
            <Layers className="w-12 h-12 text-outline mb-3" />
            <h3 className="font-headline font-bold text-lg text-primary">No Projects Found</h3>
            <p className="text-sm text-on-surface-variant mt-1">
              Try adjusting your sector filter or search keyword.
            </p>
            <button
              onClick={() => { setActiveSector('All'); setSearchQuery(''); }}
              className="mt-4 text-xs font-bold text-primary underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <ProjectCardGrid
            projects={filteredProjects}
            title={`${activeSector === 'All' ? 'Our Projects' : activeSector} (${filteredProjects.length})`}
            subtitle= "“Successfully delivered multiple high-impact projects, demonstrating expertise, innovation, and consistent excellence.”"
            showViewAll={false}
          />
        )}
      </div>

      {/* CTA */}
      <CTASection
        title="Ready to Build or Modernize Your Pharmaceutical Facility?"
        subtitle="Speak with our sector specialists to discover how we can engineer your facility to cGMP compliance."
      />
    </div>
  );
}
