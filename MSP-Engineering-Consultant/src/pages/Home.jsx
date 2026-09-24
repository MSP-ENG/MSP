import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Leadership } from '../components/sections/Leadership';
import { StatsBar } from '../components/sections/StatsBar';
import { ClientLogoStrip } from '../components/sections/ClientLogoStrip';
import { ServiceCardGrid } from '../components/sections/ServiceCardGrid';
import { ProjectCardGrid } from '../components/sections/ProjectCardGrid';
import { QualityAssurance } from '../components/sections/QualityAssurance';
import { TestimonialCarousel } from '../components/sections/TestimonialCarousel';
import { CTASection } from '../components/sections/CTASection';
import { useProjects } from '../hooks/useProjects';
import { About } from './About';

export function Home() {
  const { projects } = useProjects();
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div>
      <Hero />
      <About/>
      <ServiceCardGrid />
      <ProjectCardGrid
        projects={featuredProjects.length > 0 ? featuredProjects : projects}
        title="Featured Pharmaceutical & Biotech Facilities"
        subtitle="Selected engineering design, cleanroom qualification, and EPCM projects executed to cGMP compliance."
        limit={3}
      />

  
      <TestimonialCarousel />

      <StatsBar />
      <ClientLogoStrip />

  
      <CTASection />
    </div>
  );
}
