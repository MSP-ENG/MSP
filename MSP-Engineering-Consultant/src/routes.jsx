import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesOverview } from './pages/services/ServicesOverview';
import { Consultancy } from './pages/services/Consultancy';
import { EngineeringDesign } from './pages/services/EngineeringDesign';
import { ProjectExecution } from './pages/services/ProjectExecution';
import { Procurement } from './pages/services/Procurement';
import { ValidationDocumentation } from './pages/services/ValidationDocumentation';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Contact } from './pages/Contact';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServicesOverview />} />
      <Route path="/services/consultancy" element={<Consultancy />} />
      <Route path="/services/engineering-design" element={<EngineeringDesign />} />
      <Route path="/services/project-execution" element={<ProjectExecution />} />
      <Route path="/services/procurement" element={<Procurement />} />
      <Route path="/services/validation-documentation" element={<ValidationDocumentation />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
