import React from 'react';
import { Hero } from '../components/sections/Hero';
import { StatsBar } from '../components/sections/StatsBar';
import { ClientLogoStrip } from '../components/sections/ClientLogoStrip';
import { ServiceCardGrid } from '../components/sections/ServiceCardGrid';
import { ProjectCardGrid } from '../components/sections/ProjectCardGrid';
import { QualityAssurance } from '../components/sections/QualityAssurance';
import { TestimonialCarousel } from '../components/sections/TestimonialCarousel';
import { CTASection } from '../components/sections/CTASection';
import { useProjects } from '../hooks/useProjects';

export function Home() {
  const { projects } = useProjects();
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Client & Sector Logo Strip */}
      <ClientLogoStrip />

      {/* 3. Core Stats Bar */}
      <StatsBar />

      {/* 4. 5 Core Disciplines */}
      <ServiceCardGrid />

      {/* 5. Featured Projects */}
      <ProjectCardGrid
        projects={featuredProjects.length > 0 ? featuredProjects : projects}
        title="Featured Pharmaceutical & Biotech Facilities"
        subtitle="Selected engineering design, cleanroom qualification, and EPCM projects executed to cGMP compliance."
        limit={3}
      />

      {/* 6. Regulatory Quality Assurance Standards */}
      <QualityAssurance />

      {/* 7. Client Testimonials */}
      <TestimonialCarousel />

      {/* 8. Call to Action Banner */}
      <CTASection />
    </div>
  );
}
