-- ==============================================================================
-- MSP Engineering Consultant — Supabase Database Migration
-- Initial Schema & RLS Policies & Seed Data
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. Services Table
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category TEXT NOT NULL,
    sub_service TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    icon TEXT NOT NULL DEFAULT 'architecture',
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 2. Projects Table
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    sector TEXT NOT NULL CHECK (sector IN ('Pharmaceutical', 'API', 'Biotechnology', 'Manufacturing', 'Industrial')),
    location TEXT NOT NULL,
    scope TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 3. Team Members Table
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.team_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    bio TEXT NOT NULL,
    photo_url TEXT,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 4. Testimonials Table
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_name TEXT NOT NULL,
    company TEXT NOT NULL,
    quote TEXT NOT NULL,
    project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 5. Enquiries Table (Contact Form Submissions)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    project_type TEXT,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- Row Level Security (RLS) Policies
-- ------------------------------------------------------------------------------

-- Enable RLS on all tables
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Read-only public access for content tables
DROP POLICY IF EXISTS "Public can view services" ON public.services;
CREATE POLICY "Public can view services" ON public.services FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view projects" ON public.projects;
CREATE POLICY "Public can view projects" ON public.projects FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view team members" ON public.team_members;
CREATE POLICY "Public can view team members" ON public.team_members FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view testimonials" ON public.testimonials;
CREATE POLICY "Public can view testimonials" ON public.testimonials FOR SELECT USING (true);

-- Enquiries: public insert only; read/update restricted to authenticated users
DROP POLICY IF EXISTS "Public can submit enquiries" ON public.enquiries;
CREATE POLICY "Public can submit enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can view enquiries" ON public.enquiries;
CREATE POLICY "Authenticated users can view enquiries" ON public.enquiries FOR SELECT TO authenticated USING (true);

-- ------------------------------------------------------------------------------
-- SEED DATA
-- ------------------------------------------------------------------------------

-- 1. Services (24 Sub-Services across 5 Categories)
INSERT INTO public.services (category, sub_service, slug, description, icon, sort_order)
VALUES
  -- Category: Consultancy
  ('Consultancy', 'Concept & Master Planning', 'concept-master-planning', 'Comprehensive site master planning, conceptual facility layout, capacity sizing, and regulatory roadmap definition.', 'lightbulb', 1),
  ('Consultancy', 'Regulatory Gap Analysis', 'regulatory-gap-analysis', 'Audits and gap assessments aligning facility blueprints with USFDA, EU-GMP, WHO, and PIC/S compliance guidelines.', 'fact_check', 2),
  ('Consultancy', 'Feasibility Studies & DPR', 'feasibility-studies-dpr', 'Techno-economic feasibility assessments, CAPEX/OPEX modeling, and Detailed Project Reports.', 'assessment', 3),
  ('Consultancy', 'Containment & Biosafety Advisory', 'containment-biosafety-advisory', 'Specialized risk assessment for HPAPI, oncology, cytotoxic, and BSL-2/BSL-3 bio-containment facilities.', 'security', 4),

  -- Category: Engineering Design
  ('Engineering Design', 'HVAC & Cleanroom Engineering', 'hvac-cleanroom-design', 'High-efficiency AHU design, cascade pressure differentials, humidity control, and ISO 14644 cleanroom classifications.', 'air', 5),
  ('Engineering Design', 'Process Piping & Utility Distribution', 'process-piping-utilities', '3D BIM modeling for WFI, Purified Water (PW), Clean Steam (CS), Compressed Air, and CIP/SIP distribution loops.', 'valve', 6),
  ('Engineering Design', 'Cleanroom Architectural & Layouts', 'cleanroom-architectural', 'Aseptic zoning, unidirectional personnel & material flow (PAL/MAL), and modular cleanroom wall/ceiling integration.', 'domain', 7),
  ('Engineering Design', 'Electrical & Substation Design', 'electrical-substation-design', 'High-tension & low-tension power distribution, DG synchronization, UPS backup grids, and hazardous area classification.', 'bolt', 8),
  ('Engineering Design', 'Instrumentation & Building Automation (BMS/EMS)', 'instrumentation-automation-bms', '21 CFR Part 11 compliant SCADA, PLC architecture, and environmental monitoring instrumentation.', 'sensors', 9),
  ('Engineering Design', 'Civil & Structural Engineering', 'civil-structural-design', 'Industrial structural analysis, heavy equipment foundation design, vibration mitigation, and seismic compliance.', 'architecture', 10),

  -- Category: Project Execution
  ('Project Execution', 'EPCM Project Management', 'epcm-project-management', 'Turnkey engineering, procurement, construction management, and validation tracking under single-point responsibility.', 'engineering', 11),
  ('Project Execution', 'Site Supervision & Quality Control', 'site-supervision-qc', 'On-site multidisciplinary supervision, inspection test plans (ITP), and weld radiography verification.', 'visibility', 12),
  ('Project Execution', 'Pre-Commissioning & Commissioning', 'pre-commissioning-commissioning', 'System walk-throughs, water batching, loop testing, and functional dynamic commissioning.', 'speed', 13),
  ('Project Execution', 'Cost & Schedule Control (Earned Value)', 'cost-schedule-control', 'Integrated Primavera P6/MS Project tracking, critical path method (CPM) analysis, and budget burn monitoring.', 'timeline', 14),

  -- Category: Procurement
  ('Procurement', 'Vendor Pre-Qualification & Auditing', 'vendor-pre-qualification', 'Rigorous technical and quality auditing of pharmaceutical equipment fabricators and OEM suppliers.', 'verified', 15),
  ('Procurement', 'Technical Bid Evaluation (TBE)', 'technical-bid-evaluation', 'Line-by-line techno-commercial matrix comparison against User Requirement Specifications (URS).', 'compare_arrows', 16),
  ('Procurement', 'Factory Acceptance Testing (FAT) Witnessing', 'fat-testing-witnessing', 'On-site witnessing of FAT protocols, pressure testing, automation testing, and punch list resolution.', 'checklist_rtl', 17),
  ('Procurement', 'Logistics & Site Acceptance Testing (SAT)', 'logistics-sat-coordination', 'Oversight of specialized heavy rigging, site delivery, installation, and SAT protocol sign-off.', 'local_shipping', 18),

  -- Category: Validation & Documentation
  ('Validation & Documentation', 'Validation Master Plan (VMP)', 'validation-master-plan', 'Holistic strategic roadmap outlining validation philosophy, boundaries, and qualification matrix.', 'description', 19),
  ('Validation & Documentation', 'DQ, IQ, OQ, PQ Protocols & Execution', 'dq-iq-oq-pq-qualification', 'Full qualification lifecycle execution from Design Qualification through to Performance Qualification.', 'task', 20),
  ('Validation & Documentation', 'Computerized System Validation (CSV / GAMP 5)', 'computerized-system-validation', 'GAMP 5 risk-based validation, data integrity compliance, and audit trail verification.', 'memory', 21),
  ('Validation & Documentation', 'HVAC Validation & Cleanroom Certification', 'hvac-cleanroom-certification', 'Airflow velocity, ACPH, HEPA filter integrity (DOP/PAO), non-viable particle counting, and recovery testing.', 'verified_user', 22),
  ('Validation & Documentation', 'Thermal & Humidity Mapping', 'thermal-humidity-mapping', 'Multi-point data logger mapping for autoclaves, cold rooms, stability chambers, and warehouses.', 'thermostat', 23),
  ('Validation & Documentation', 'Standard Operating Procedures (SOP) & Dossiers', 'sop-dossier-preparation', 'Preparation of technical dossiers, preventive maintenance checklists, and regulatory submission packages.', 'menu_book', 24)
ON CONFLICT (slug) DO NOTHING;

-- 2. Projects
INSERT INTO public.projects (title, slug, sector, location, scope, description, image_url, featured)
VALUES
  (
    'Sterile Injectables & Lyophilization Facility',
    'sterile-injectables-lyophilization-facility',
    'Pharmaceutical',
    'Ahmedabad, India',
    'Turnkey HVAC, Cleanroom Class A/B, and Process Piping Design',
    'Comprehensive engineering design and validation for a 120,000 sq.ft state-of-the-art sterile oncology injectables facility. Included two high-capacity lyophilizers, isolated barrier systems (RABS), continuous environmental monitoring, and full USFDA compliance qualification.',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    true
  ),
  (
    'High Potency API (HPAPI) Synthesis Unit',
    'high-potency-api-synthesis-unit',
    'API',
    'Hyderabad, India',
    'Containment Engineering (OEB 5) & Solvent Recovery System',
    'Engineering consultancy and detailed piping design for an advanced HPAPI manufacturing plant requiring OEB 5 containment level (<1 µg/m³). Designed closed-loop isolator transfers, vacuum transfer systems, dedicated scrubbers, and automated solvent distillation plants.',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    true
  ),
  (
    'Monoclonal Antibody (mAb) Biotech Suite',
    'monoclonal-antibody-biotech-suite',
    'Biotechnology',
    'Pune, India',
    'Upstream & Downstream Process Architecture and WFI Distribution',
    'Concept-to-commissioning engineering for single-use bioreactor suites, chromatography purification skids, and automated CIP/SIP generation systems. Engineered an energy-efficient multi-effect WFI loop delivering 3,000 LPH compliant with European Pharmacopoeia standards.',
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    true
  ),
  (
    'Automated Oral Solid Dosage (OSD) Mega-Plant',
    'automated-osd-mega-plant',
    'Pharmaceutical',
    'Vadodara, India',
    'HVAC, Dust Extraction, and Automated Material Handling',
    'Greenfield project execution for a 4-billion tablets/year capacity facility. Integrated central dust collection, precise relative humidity control for effervescent manufacturing, and automated guided vehicle (AGV) clean corridors.',
    'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80',
    true
  ),
  (
    'Continuous Fermentation & Biosimilar Scale-up',
    'continuous-fermentation-biosimilar',
    'Biotechnology',
    'Bangalore, India',
    'Process Automation, SCADA Architecture, and Qualification',
    'Detailed automation and electrical design for industrial-scale microbial fermentation. Implemented redundant PLC/SCADA systems with 21 CFR Part 11 electronic batch records and automated harvest recovery loops.',
    'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
    false
  ),
  (
    'Specialty Chemical & Bulk Drug Intermediate Plant',
    'specialty-chemical-bulk-drug',
    'Manufacturing',
    'Dahej, India',
    'Class 1 Div 1 Hazardous Electrical Design & Zero Liquid Discharge (ZLD)',
    'Comprehensive safety and environmental engineering including hazardous area classification, explosion-proof electrical systems, scrubber engineering, and integrated ZLD effluent treatment plant.',
    'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    false
  )
ON CONFLICT (slug) DO NOTHING;

-- 3. Team Members (Key Persons)
INSERT INTO public.team_members (name, title, bio, photo_url, sort_order)
VALUES
  (
    'Mr. Madhup Singh',
    'Director (B.Tech Civil Eng.)',
    'Extensive expertise in Pharmaceuticals, APIs, and allied project management. Renowned for project coordination, scheduling, monitoring, and hands-on international leadership across Elixir (Saudi Arabia), Hester Bioscience (Tanzania), Himalaya (Dubai), and Glenmark Pharmaceuticals.',
    'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80',
    1
  ),
  (
    'Dr. Sanjeev N. Kolhe',
    'Director (Ph.D.)',
    'Distinguished pharmaceutical industry leader with over 30 years of global experience spanning manufacturing, operations, R&D, quality systems, regulatory compliance (USFDA, MHRA, EU-GMP, WHO-GMP, TGA), and strategic leadership as CEO across Africa, Central Asia, Europe, and CIS region.',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    2
  ),
  (
    'Mr. Avinash Tayde',
    'Technical Head (Science Graduate)',
    'Over 35 years of expertise in the pharmaceutical industry driving results through innovation, leadership, and operational excellence. Comprehensive expertise in production planning, plant upgradation, and handling diverse dosage forms.',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    3
  ),
  (
    'Mr. Devendra Navale',
    'Chief Scientific Officer & Quality Lead (M.Pharm, M.Sc.)',
    'Over 30 years of pharmaceutical quality and regulatory leadership. Former Vice President and Site Head of Global Quality and Compliance at Sun Pharma; prior leadership at Lupin, Jubilant Lifesciences, Aurobindo, IPCA, and Ranbaxy. ISO Lead Auditor (IQA/IRCA & IATCA).',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    4
  ),
  (
    'Mr. Anurag Songer',
    'Project Management Lead (PMP®, M.E. Structural)',
    'Seasoned leader with extensive experience in pharmaceuticals, APIs, and allied project management. Specializing in structural engineering, project coordination, scheduling, monitoring, and cost optimization.',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    5
  )
ON CONFLICT DO NOTHING;

-- 4. Testimonials
INSERT INTO public.testimonials (client_name, company, quote)
VALUES
  (
    'Dr. Arvind Kelkar, VP Operations',
    'BioNexus Therapeutics Ltd.',
    'MSP Engineering delivered our sterile injectable facility 2 months ahead of schedule. Their mastery of USFDA cGMP regulations and cleanroom airflow dynamics was instrumental in our first-pass regulatory audit.'
  ),
  (
    'Prakash Somani, Director of Projects',
    'Aura Pharma Intermediates',
    'The precision in process piping, WFI loop sizing, and 3D clash resolution saved us over 18% in rework and fabrication costs. MSP is our go-to engineering consultant.'
  ),
  (
    'Kavita Raman, Head of QA & Compliance',
    'Zenith Biotech Formulations',
    'Their validation team produced the most thorough DQ/IQ/OQ/PQ documentation dossiers we have ever seen. Flawless CSV implementation and seamless training for our site staff.'
  ),
  (
    'Ramesh Chordia, Managing Director',
    'Synergy Bulk Drugs Ltd.',
    'From master planning to factory acceptance testing, MSP Engineering showed unmatched technical discipline, transparent project reporting, and prompt problem-solving.'
  )
ON CONFLICT DO NOTHING;
