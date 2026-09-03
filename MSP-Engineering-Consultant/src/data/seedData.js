import madhupImg from '../assets/madhup-singh.jpeg';
import sanjeevImg from '../assets/sanjeev-kolhe.jpeg';
import avinashImg from '../assets/avinash-tayde.jpeg';
import devendraImg from '../assets/devendra-navale.jpeg';
import anuragImg from '../assets/anurag-songer.jpeg';
import amixorImg from '../assets/amixor.png';
import dycineoncologyImg from '../assets/dycine_oncology.png';
import dycineosdImg from '../assets/dycine_osd.png';
import relsusImg from '../assets/relsus.png';
import panasonicImg from '../assets/panasonic.png';
import l2mtechImg from '../assets/l2mtech.png';
import samsonImg from '../assets/samson.png';
import srfImg from '../assets/srf_limited.png';
import sympaImg from '../assets/sympa_pharma.png';
import tufnetsImg from '../assets/tufnets.png';
import welltekImg from '../assets/welltek.png';
import genoImg from '../assets/geno.png';
import soplImg from '../assets/sopl.png';
import fortuneImg from '../assets/fortune.png';

export const SEED_SERVICES = [
  // 1. Consultancy
  {
    id: "s1",
    category: "Consultancy",
    categorySlug: "consultancy",
    sub_service: "Concept & Master Planning",
    slug: "concept-master-planning",
    description: "Comprehensive site master planning, conceptual facility layout, capacity sizing, and regulatory roadmap definition.",
    icon: "lightbulb",
    sort_order: 1,
    deliverables: ["Site Master Plan", "Block Flow Diagrams", "Zoning Layouts", "Initial CAPEX Estimates"]
  },
  {
    id: "s2",
    category: "Consultancy",
    categorySlug: "consultancy",
    sub_service: "Regulatory Gap Analysis",
    slug: "regulatory-gap-analysis",
    description: "Audits and gap assessments aligning facility blueprints with USFDA, EU-GMP, WHO, and PIC/S compliance guidelines.",
    icon: "fact_check",
    sort_order: 2,
    deliverables: ["Compliance Audit Report", "Gap Remediation Matrix", "Risk Prioritization Matrix"]
  },
  {
    id: "s3",
    category: "Consultancy",
    categorySlug: "consultancy",
    sub_service: "Feasibility Studies & DPR",
    slug: "feasibility-studies-dpr",
    description: "Techno-economic feasibility assessments, CAPEX/OPEX modeling, and Detailed Project Reports.",
    icon: "assessment",
    sort_order: 3,
    deliverables: ["Techno-Commercial Report", "Financial ROI Analysis", "Technology Selection Benchmark"]
  },
  {
    id: "s4",
    category: "Consultancy",
    categorySlug: "consultancy",
    sub_service: "Containment & Biosafety Advisory",
    slug: "containment-biosafety-advisory",
    description: "Specialized risk assessment for HPAPI, oncology, cytotoxic, and BSL-2/BSL-3 bio-containment facilities.",
    icon: "security",
    sort_order: 4,
    deliverables: ["OEB/OEL Containment Strategy", "Air Balancing Strategy", "Effluent Inactivation Protocol"]
  },

  // 2. Engineering Design
  {
    id: "s5",
    category: "Engineering Design",
    categorySlug: "engineering-design",
    sub_service: "HVAC & Cleanroom Engineering",
    slug: "hvac-cleanroom-design",
    description: "High-efficiency AHU design, cascade pressure differentials, humidity control, and ISO 14644 cleanroom classifications.",
    icon: "air",
    sort_order: 5,
    deliverables: ["Heat Load Calculations", "Airflow Schematics", "AHU Sizing & Duct Routing", "Room Data Sheets"]
  },
  {
    id: "s6",
    category: "Engineering Design",
    categorySlug: "engineering-design",
    sub_service: "Process Piping & Utility Distribution",
    slug: "process-piping-utilities",
    description: "3D BIM modeling for WFI, Purified Water (PW), Clean Steam (CS), Compressed Air, and CIP/SIP distribution loops.",
    icon: "valve",
    sort_order: 6,
    deliverables: ["P&IDs", "Isometrics & Spool Drawings", "Loop Hydraulic Calculations", "3D Navisworks Clash Models"]
  },
  {
    id: "s7",
    category: "Engineering Design",
    categorySlug: "engineering-design",
    sub_service: "Cleanroom Architectural & Layouts",
    slug: "cleanroom-architectural",
    description: "Aseptic zoning, unidirectional personnel & material flow (PAL/MAL), and modular cleanroom wall/ceiling integration.",
    icon: "domain",
    sort_order: 7,
    deliverables: ["Classified Area Zoning", "PAL/MAL Interlock Matrix", "Coving & Modular Wall Specs"]
  },
  {
    id: "s8",
    category: "Engineering Design",
    categorySlug: "engineering-design",
    sub_service: "Electrical & Substation Design",
    slug: "electrical-substation-design",
    description: "High-tension & low-tension power distribution, DG synchronization, UPS backup grids, and hazardous area classification.",
    icon: "bolt",
    sort_order: 8,
    deliverables: ["Single Line Diagrams (SLD)", "Substation Layouts", "Cable Tray Routing", "Fault Current Calculations"]
  },
  {
    id: "s9",
    category: "Engineering Design",
    categorySlug: "engineering-design",
    sub_service: "Instrumentation & Automation (BMS/EMS)",
    slug: "instrumentation-automation-bms",
    description: "21 CFR Part 11 compliant SCADA, PLC architecture, and environmental monitoring instrumentation.",
    icon: "sensors",
    sort_order: 9,
    deliverables: ["I/O List & Loop Drawings", "BMS/EMS Control Architecture", "FDS/HDS Specifications"]
  },
  {
    id: "s10",
    category: "Engineering Design",
    categorySlug: "engineering-design",
    sub_service: "Civil & Structural Engineering",
    slug: "civil-structural-design",
    description: "Industrial structural analysis, heavy equipment foundation design, vibration mitigation, and seismic compliance.",
    icon: "architecture",
    sort_order: 10,
    deliverables: ["STAAD Pro Analysis", "Foundation & Plinth Drawings", "Structural Steel GA Drawings"]
  },

  // 3. Project Execution
  {
    id: "s11",
    category: "Project Execution",
    categorySlug: "project-execution",
    sub_service: "EPCM Project Management",
    slug: "epcm-project-management",
    description: "Turnkey engineering, procurement, construction management, and validation tracking under single-point responsibility.",
    icon: "engineering",
    sort_order: 11,
    deliverables: ["Integrated Master Schedule", "Risk Register", "Monthly Progress Audits", "Change Management Protocols"]
  },
  {
    id: "s12",
    category: "Project Execution",
    categorySlug: "project-execution",
    sub_service: "Site Supervision & Quality Control",
    slug: "site-supervision-qc",
    description: "On-site multidisciplinary supervision, inspection test plans (ITP), and weld radiography verification.",
    icon: "visibility",
    sort_order: 12,
    deliverables: ["Daily Site Reports", "Weld Boroscopy Logs", "Material Inward Inspection Records"]
  },
  {
    id: "s13",
    category: "Project Execution",
    categorySlug: "project-execution",
    sub_service: "Pre-Commissioning & Commissioning",
    slug: "pre-commissioning-commissioning",
    description: "System walk-throughs, water batching, loop testing, and functional dynamic commissioning.",
    icon: "speed",
    sort_order: 13,
    deliverables: ["Commissioning Master Matrix", "Loop Check Sheets", "Punch List Management Log"]
  },
  {
    id: "s14",
    category: "Project Execution",
    categorySlug: "project-execution",
    sub_service: "Cost & Schedule Control (Earned Value)",
    slug: "cost-schedule-control",
    description: "Integrated Primavera P6/MS Project tracking, critical path method (CPM) analysis, and budget burn monitoring.",
    icon: "timeline",
    sort_order: 14,
    deliverables: ["Earned Value Analysis (EVA)", "Cash Flow Forecasts", "Schedule Variance Reports"]
  },

  // 4. Procurement
  {
    id: "s15",
    category: "Procurement",
    categorySlug: "procurement",
    sub_service: "Vendor Pre-Qualification & Auditing",
    slug: "vendor-pre-qualification",
    description: "Rigorous technical and quality auditing of pharmaceutical equipment fabricators and OEM suppliers.",
    icon: "verified",
    sort_order: 15,
    deliverables: ["Vendor Audit Scorecards", "Technical Capability Index", "Fabrication Quality Clearance"]
  },
  {
    id: "s16",
    category: "Procurement",
    categorySlug: "procurement",
    sub_service: "Technical Bid Evaluation (TBE)",
    slug: "technical-bid-evaluation",
    description: "Line-by-line techno-commercial matrix comparison against User Requirement Specifications (URS).",
    icon: "compare_arrows",
    sort_order: 16,
    deliverables: ["TBE Comparative Matrix", "URS Compliance Deviation Sheet", "Commercial Equalization Report"]
  },
  {
    id: "s17",
    category: "Procurement",
    categorySlug: "procurement",
    sub_service: "Factory Acceptance Testing (FAT) Witnessing",
    slug: "fat-testing-witnessing",
    description: "On-site witnessing of FAT protocols, pressure testing, automation testing, and punch list resolution.",
    icon: "checklist_rtl",
    sort_order: 17,
    deliverables: ["FAT Protocol Execution Log", "Hydrotest & Passivation Certs", "FAT Punch List Clearance"]
  },
  {
    id: "s18",
    category: "Procurement",
    categorySlug: "procurement",
    sub_service: "Logistics & Site Acceptance Testing (SAT)",
    slug: "logistics-sat-coordination",
    description: "Oversight of specialized heavy rigging, site delivery, installation, and SAT protocol sign-off.",
    icon: "local_shipping",
    sort_order: 18,
    deliverables: ["Rigging & Transit Plan", "SAT Qualification Protocol", "Handover Certificate"]
  },

  // 5. Validation & Documentation
  {
    id: "s19",
    category: "Validation & Documentation",
    categorySlug: "validation-documentation",
    sub_service: "Validation Master Plan (VMP)",
    slug: "validation-master-plan",
    description: "Holistic strategic roadmap outlining validation philosophy, boundaries, and qualification matrix.",
    icon: "description",
    sort_order: 19,
    deliverables: ["VMP Core Document", "Validation Matrix", "Re-validation Frequency Schedule"]
  },
  {
    id: "s20",
    category: "Validation & Documentation",
    categorySlug: "validation-documentation",
    sub_service: "DQ, IQ, OQ, PQ Protocols & Execution",
    slug: "dq-iq-oq-pq-qualification",
    description: "Full qualification lifecycle execution from Design Qualification through to Performance Qualification.",
    icon: "task",
    sort_order: 20,
    deliverables: ["DQ/IQ/OQ/PQ Protocols", "Traceability Matrix", "Final Qualification Summary Report"]
  },
  {
    id: "s21",
    category: "Validation & Documentation",
    categorySlug: "validation-documentation",
    sub_service: "Computerized System Validation (CSV / GAMP 5)",
    slug: "computerized-system-validation",
    description: "GAMP 5 risk-based validation, data integrity compliance, and audit trail verification.",
    icon: "memory",
    sort_order: 21,
    deliverables: ["GAMP 5 Risk Assessment", "21 CFR Part 11 Assessment", "User Access & Audit Trail Verification"]
  },
  {
    id: "s22",
    category: "Validation & Documentation",
    categorySlug: "validation-documentation",
    sub_service: "HVAC Validation & Cleanroom Certification",
    slug: "hvac-cleanroom-certification",
    description: "Airflow velocity, ACPH, HEPA filter integrity (DOP/PAO), non-viable particle counting, and recovery testing.",
    icon: "verified_user",
    sort_order: 22,
    deliverables: ["ISO 14644 Certification", "DOP Filter Test Records", "Smoke Study Video Recordings"]
  },
  {
    id: "s23",
    category: "Validation & Documentation",
    categorySlug: "validation-documentation",
    sub_service: "Thermal & Humidity Mapping",
    slug: "thermal-humidity-mapping",
    description: "Multi-point data logger mapping for autoclaves, cold rooms, stability chambers, and warehouses.",
    icon: "thermostat",
    sort_order: 23,
    deliverables: ["24-72 Hr Thermal Plots", "Hot/Cold Spot Identification", "Mapping Summary Dossier"]
  },
  {
    id: "s24",
    category: "Validation & Documentation",
    categorySlug: "validation-documentation",
    sub_service: "Standard Operating Procedures (SOP) & Dossiers",
    slug: "sop-dossier-preparation",
    description: "Preparation of technical dossiers, preventive maintenance checklists, and regulatory submission packages.",
    icon: "menu_book",
    sort_order: 24,
    deliverables: ["Standard Operating Procedures", "Maintenance Schedules", "Regulatory Audit Dossiers"]
  }
];

export const SEED_PROJECTS = [
  {
    id: "p1",
    title: "ONCOLOGY PLANT- WELLTEK LIFESCIENCES PVT. LTD.",
    slug: "sterile-injectables-lyophilization-facility",
    sector: "Pharmaceutical",
    location: "SIP - PITHAMPUR (M.P.), India",
    scope: "Turnkey HVAC, Cleanroom Class A/B, and Process Piping Design",
    description: "Comprehensive engineering design and validation for a 120,000 sq.ft state-of-the-art sterile oncology injectables facility. Included two high-capacity lyophilizers, isolated barrier systems (RABS), continuous environmental monitoring, and full USFDA compliance qualification.",
    image_url: welltekImg,
    featured: true,
    stats: {
      area: "120,000 sq.ft",
      cleanroomClass: "ISO 5 (Class A/B)",
      compliance: "USFDA / EU-GMP",
      timeline: "14 Months"
    },
    highlights: [
      "Zero-downtime dual-chilled water system with automated switchover",
      "WFI loop with continuous 85°C recirculation and ozone sanitization",
      "First-pass approval during USFDA pre-approval inspection"
    ]
  },
  {
    id: "p2",
    title: "GENO PHARMACEUTICALS PVT. LTD.",
    slug: "high-potency-api-synthesis-unit",
    sector: "Pharmaceutical",
    location: "PITHAMPUR (M.P.), India",
    scope: "Containment Engineering (OEB 5) & Solvent Recovery System",
    description: "Engineering consultancy and detailed piping design for an advanced HPAPI manufacturing plant requiring OEB 5 containment level (<1 µg/m³). Designed closed-loop isolator transfers, vacuum transfer systems, dedicated scrubbers, and automated solvent distillation plants.",
    image_url: genoImg,
    featured: true,
    stats: {
      area: "75,000 sq.ft",
      cleanroomClass: "ISO 7 (OEB 5)",
      compliance: "SafeBridge Certified",
      timeline: "11 Months"
    },
    highlights: [
      "Negative pressure cascade barrier isolators with split-butterfly valves",
      "Automated solvent recovery with 94.5% recycling efficiency",
      "Complete hazardous area Class 1 Div 1 electrical distribution"
    ]
  },
  {
    id: "p3",
    title: "DYCINE PHARMACEUTICALS PVT. LTD. (OSD PLANT)",
    slug: "monoclonal-antibody-biotech-suite",
    sector: "pharmaceutical",
    location: "SIP - PITHAMPUR (M.P.), India",
    scope: "Upstream & Downstream Process Architecture and WFI Distribution",
    description: "Concept-to-commissioning engineering for single-use bioreactor suites, chromatography purification skids, and automated CIP/SIP generation systems. Engineered an energy-efficient multi-effect WFI loop delivering 3,000 LPH compliant with European Pharmacopoeia standards.",
    image_url: dycineosdImg,
    featured: true,
    stats: {
      area: "90,000 sq.ft",
      cleanroomClass: "ISO 6 & 7",
      compliance: "EU-GMP / WHO",
      timeline: "16 Months"
    },
    highlights: [
      "Hybrid ballroom cleanroom architecture for flexible single-use campaigns",
      "Fully automated 21 CFR Part 11 SCADA monitoring for bioreactors",
      "Sub-ambient cold storage room (-80°C to +4°C) with dual redundancy"
    ]
  },
  {
    id: "p4",
    title: "DYCINE PHARMACEUTICALS LTD. (ONCOLOGY)",
    slug: "automated-osd-mega-plant",
    sector: "Pharmaceutical",
    location: "SIP- PITHAMPUR (M.P.), India",
    scope: "HVAC, Dust Extraction, and Automated Material Handling",
    description: "Greenfield project execution for a 4-billion tablets/year capacity facility. Integrated central dust collection, precise relative humidity control for effervescent manufacturing, and automated guided vehicle (AGV) clean corridors.",
    image_url: dycineoncologyImg,
    featured: true,
    stats: {
      area: "210,000 sq.ft",
      cleanroomClass: "ISO 8",
      compliance: "USFDA / MHRA",
      timeline: "18 Months"
    },
    highlights: [
      "Dessicant dehumidifiers maintaining <15% RH for effervescent granules",
      "Central high-vacuum dust extraction system with explosion vents",
      "Gravity-fed multi-level granulation and compression suites"
    ]
  },
  {
    id: "p5",
    title: "L2Mtech INDIA PVT. LTD.",
    slug: "continuous-fermentation-biosimilar",
    sector: "Biotechnology",
    location: "MEDICAL DEVICE PARK UJJAIN (M.P.), India",
    scope: "Process Automation, SCADA Architecture, and Qualification",
    description: "Detailed automation and electrical design for industrial-scale microbial fermentation. Implemented redundant PLC/SCADA systems with 21 CFR Part 11 electronic batch records and automated harvest recovery loops.",
    image_url: l2mtechImg,
    featured: false,
    stats: {
      area: "65,000 sq.ft",
      cleanroomClass: "ISO 7",
      compliance: "WHO / DCGI",
      timeline: "10 Months"
    },
    highlights: [
      "Custom harvest filtration skids with automated delta-P feedback control",
      "Integrated steam-in-place (SIP) qualification cycle development",
      "Real-time dissolved oxygen and pH feedback telemetry loops"
    ]
  },
  {
    id: "p6",
    title: "RELSUS INDIA PVT. LTD.",
    slug: "specialty-chemical-bulk-drug",
    sector: "Industrial",
    location: "DMIC VIKRAM UDYOGPURI- UJJAIN (M.P.), India",
    scope: "Class 1 Div 1 Hazardous Electrical Design & Zero Liquid Discharge (ZLD)",
    description: "Comprehensive safety and environmental engineering including hazardous area classification, explosion-proof electrical systems, scrubber engineering, and integrated ZLD effluent treatment plant.",
    image_url: relsusImg,
    featured: false,
    stats: {
      area: "150,000 sq.ft",
      cleanroomClass: "Industrial Safe Zone",
      compliance: "PESO / GPCB / CPCB",
      timeline: "15 Months"
    },
    highlights: [
      "Flammable solvent vapor extraction with LEL sensors and nitrogen blanketing",
      "Zero Liquid Discharge (ZLD) plant with 98% water recovery",
      "Full Flameproof Ex-d certified motor and switchgear installation"
    ]
  },
  {
    id: "p7",
    title: "TUFNETS PRIVATE LIMITED (R&D CENTER)",
    slug: "specialty-chemical-bulk-drug",
    sector: "Industrial",
    location: "SEZ- PITHAMPUR (M.P.), India",
    scope: "Class 1 Div 1 Hazardous Electrical Design & Zero Liquid Discharge (ZLD)",
    description: "Comprehensive safety and environmental engineering including hazardous area classification, explosion-proof electrical systems, scrubber engineering, and integrated ZLD effluent treatment plant.",
    image_url: tufnetsImg,
    featured: false,
    stats: {
      area: "150,000 sq.ft",
      cleanroomClass: "Industrial Safe Zone",
      compliance: "PESO / GPCB / CPCB",
      timeline: "15 Months"
    },
    highlights: [
      "Flammable solvent vapor extraction with LEL sensors and nitrogen blanketing",
      "Zero Liquid Discharge (ZLD) plant with 98% water recovery",
      "Full Flameproof Ex-d certified motor and switchgear installation"
    ]
  },
  {
    id: "p8",
    title: "AMIXOR PHARMACUETICALS PVT. LTD. (DRY INJECTABLE)",
    slug: "specialty-chemical-bulk-drug",
    sector: "Pharmaceutical",
    location: "UJJAINI (M.P.), India",
    scope: "Class 1 Div 1 Hazardous Electrical Design & Zero Liquid Discharge (ZLD)",
    description: "Comprehensive safety and environmental engineering including hazardous area classification, explosion-proof electrical systems, scrubber engineering, and integrated ZLD effluent treatment plant.",
    image_url: amixorImg,
    featured: false,
    stats: {
      area: "150,000 sq.ft",
      cleanroomClass: "Industrial Safe Zone",
      compliance: "PESO / GPCB / CPCB",
      timeline: "15 Months"
    },
    highlights: [
      "Flammable solvent vapor extraction with LEL sensors and nitrogen blanketing",
      "Zero Liquid Discharge (ZLD) plant with 98% water recovery",
      "Full Flameproof Ex-d certified motor and switchgear installation"
    ]
  },
  {
    id: "p9",
    title: "SYMPA PHARMA PVT. LTD.",
    slug: "specialty-chemical-bulk-drug",
    sector: "Pharmaceutical",
    location: "INDUSTRIAL AREA JETAPUR-PALASYA, DIST- DHAR (M.P.), India",
    scope: "Class 1 Div 1 Hazardous Electrical Design & Zero Liquid Discharge (ZLD)",
    description: "Comprehensive safety and environmental engineering including hazardous area classification, explosion-proof electrical systems, scrubber engineering, and integrated ZLD effluent treatment plant.",
    image_url: sympaImg,
    featured: false,
    stats: {
      area: "150,000 sq.ft",
      cleanroomClass: "Industrial Safe Zone",
      compliance: "PESO / GPCB / CPCB",
      timeline: "15 Months"
    },
    highlights: [
      "Flammable solvent vapor extraction with LEL sensors and nitrogen blanketing",
      "Zero Liquid Discharge (ZLD) plant with 98% water recovery",
      "Full Flameproof Ex-d certified motor and switchgear installation"
    ]
  },
  {
    id: "p10",
    title: "SRF LIMITED COATING PLANT EXPANSION",
    slug: "specialty-chemical-bulk-drug",
    sector: "Pharmaceutical",
    location: "DTA - 01 PITHAMPUR (M.P.), India",
    scope: "Class 1 Div 1 Hazardous Electrical Design & Zero Liquid Discharge (ZLD)",
    description: "Comprehensive safety and environmental engineering including hazardous area classification, explosion-proof electrical systems, scrubber engineering, and integrated ZLD effluent treatment plant.",
    image_url: srfImg,
    featured: false,
    stats: {
      area: "150,000 sq.ft",
      cleanroomClass: "Industrial Safe Zone",
      compliance: "PESO / GPCB / CPCB",
      timeline: "15 Months"
    },
    highlights: [
      "Flammable solvent vapor extraction with LEL sensors and nitrogen blanketing",
      "Zero Liquid Discharge (ZLD) plant with 98% water recovery",
      "Full Flameproof Ex-d certified motor and switchgear installation"
    ]
  },
  {
    id: "p11",
    title: "SAMSON SCIENTIFICS AND SURGICAL PVT. LTD.",
    slug: "specialty-chemical-bulk-drug",
    sector: "Pharmaceutical",
    location: "MEDICAL DEVICE PARK UJJAIN (M.P.), India",
    scope: "Class 1 Div 1 Hazardous Electrical Design & Zero Liquid Discharge (ZLD)",
    description: "Comprehensive safety and environmental engineering including hazardous area classification, explosion-proof electrical systems, scrubber engineering, and integrated ZLD effluent treatment plant.",
    image_url: samsonImg,
    featured: false,
    stats: {
      area: "150,000 sq.ft",
      cleanroomClass: "Industrial Safe Zone",
      compliance: "PESO / GPCB / CPCB",
      timeline: "15 Months"
    },
    highlights: [
      "Flammable solvent vapor extraction with LEL sensors and nitrogen blanketing",
      "Zero Liquid Discharge (ZLD) plant with 98% water recovery",
      "Full Flameproof Ex-d certified motor and switchgear installation"
    ]
  },
  {
    id: "p12",
    title: "PANASONIC ENERGY INDIA LTD.",
    slug: "specialty-chemical-bulk-drug",
    sector: "Manufacturing",
    location: "PITHAMPUR (M.P.), India",
    scope: "Class 1 Div 1 Hazardous Electrical Design & Zero Liquid Discharge (ZLD)",
    description: "Comprehensive safety and environmental engineering including hazardous area classification, explosion-proof electrical systems, scrubber engineering, and integrated ZLD effluent treatment plant.",
    image_url: panasonicImg,
    featured: false,
    stats: {
      area: "150,000 sq.ft",
      cleanroomClass: "Industrial Safe Zone",
      compliance: "PESO / GPCB / CPCB",
      timeline: "15 Months"
    },
    highlights: [
      "Flammable solvent vapor extraction with LEL sensors and nitrogen blanketing",
      "Zero Liquid Discharge (ZLD) plant with 98% water recovery",
      "Full Flameproof Ex-d certified motor and switchgear installation"
    ]
  },
  {
    id: "p13",
    title: "FORTUNE PHARMACEUTICAL INDIA PVT. LTD.",
    slug: "sterile-injectables-lyophilization-facility",
    sector: "Pharmaceutical",
    location: "SIP - PITHAMPUR (M.P.), India",
    scope: "Turnkey HVAC, Cleanroom Class A/B, and Process Piping Design",
    description: "Comprehensive engineering design and validation for a 120,000 sq.ft state-of-the-art sterile oncology injectables facility. Included two high-capacity lyophilizers, isolated barrier systems (RABS), continuous environmental monitoring, and full USFDA compliance qualification.",
    image_url: fortuneImg,
    featured: true,
    stats: {
      area: "120,000 sq.ft",
      cleanroomClass: "ISO 5 (Class A/B)",
      compliance: "USFDA / EU-GMP",
      timeline: "14 Months"
    },
    highlights: [
      "Zero-downtime dual-chilled water system with automated switchover",
      "WFI loop with continuous 85°C recirculation and ozone sanitization",
      "First-pass approval during USFDA pre-approval inspection"
    ]
  },
  {
    id: "p14",
    title: "SOPL PVT. LTD.",
    slug: "sterile-injectables-lyophilization-facility",
    sector: "Biotechnology",
    location: "SIP - PITHAMPUR (M.P.), India",
    scope: "Turnkey HVAC, Cleanroom Class A/B, and Process Piping Design",
    description: "Comprehensive engineering design and validation for a 120,000 sq.ft state-of-the-art sterile oncology injectables facility. Included two high-capacity lyophilizers, isolated barrier systems (RABS), continuous environmental monitoring, and full USFDA compliance qualification.",
    image_url: soplImg,
    featured: true,
    stats: {
      area: "120,000 sq.ft",
      cleanroomClass: "ISO 5 (Class A/B)",
      compliance: "USFDA / EU-GMP",
      timeline: "14 Months"
    },
    highlights: [
      "Zero-downtime dual-chilled water system with automated switchover",
      "WFI loop with continuous 85°C recirculation and ozone sanitization",
      "First-pass approval during USFDA pre-approval inspection"
    ]
  }
];

export const SEED_TEAM = [
  {
    id: "t1",
    name: "Mr. Madhup Singh",
    qualification: "B.Tech (Civil Eng.)",
    title: "Director",
    bio: "Extensive expertise in Pharmaceuticals, APIs, and allied project management. Renowned for project coordination, scheduling, monitoring, cost optimization, and hands-on international leadership across Elixir (Saudi Arabia), Hester Bioscience (Tanzania), Himalaya (Dubai), and Glenmark Pharmaceuticals.",
    fullBio: [
      "Extensive expertise in Pharmaceuticals, APIs, and allied project management.",
      "Specializes in project coordination, scheduling, monitoring, and cost optimization.",
      "Skilled at navigating complexities and delivering innovative, result-oriented solutions.",
      "Proven track record in managing successful projects with precision and efficiency.",
      "Renowned as a problem solver, dedicated to achieving organizational goals.",
      "Hands-on experience leading international projects including Elixir Pharmaceuticals (Saudi Arabia), Hester Bioscience (Tanzania), Himalaya (Dubai), Glenmark Pharmaceuticals Ltd., and several other key initiatives."
    ],
    photo_url: madhupImg,
    sort_order: 1
  },
  {
    id: "t2",
    name: "Dr. Sanjeev N. Kolhe",
    qualification: "Ph.D.",
    title: "Director",
    bio: "Distinguished pharmaceutical industry leader with over 30 years of global experience spanning manufacturing, operations, R&D, quality systems, regulatory compliance (USFDA, MHRA, EU-GMP, WHO-GMP, TGA), and strategic leadership as CEO across Africa, Central Asia, Europe, and CIS region.",
    fullBio: [
      "Distinguished pharmaceutical industry leader with over 30 years of global experience spanning manufacturing, operations, R&D, quality systems, regulatory compliance, business development, and strategic leadership.",
      "Served as CEO for leading pharmaceutical organizations across Africa, Central Asia, Europe, and the CIS region, while also holding senior executive positions with major Indian multinational pharmaceutical companies.",
      "Successfully led greenfield and expansion projects, business establishment initiatives, international product registrations, regulatory audits (USFDA, MHRA, EU-GMP, WHO-GMP, TGA), and operational transformation programs.",
      "Proven track record in strategic planning, P&L management, project execution, quality management systems, technology transfer, product development, and global market expansion."
    ],
    photo_url: sanjeevImg,
    sort_order: 2
  },
  {
    id: "t3",
    name: "Mr. Avinash Tayde",
    qualification: "Science Graduate",
    title: "Technical Head",
    bio: "Over 35 years of expertise in the pharmaceutical industry driving results through innovation, leadership, and operational excellence. Comprehensive expertise in production planning, plant upgradation, and handling diverse dosage forms (tablets, capsules, injectables, liquids, and softgels).",
    fullBio: [
      "Over 35 years of expertise in the pharmaceutical industry, driving results through innovation, leadership, and operational excellence.",
      "Skilled in production, production planning and control (PPC), pharma projects, and plant upgradation.",
      "Proficient in handling various dosage forms, including tablets, capsules, oral and external liquids, semisolid preparations, oral powders, injectables, and soft gelatin capsules.",
      "Led numerous product technology transfer activities and process improvement initiatives; reviewed monthly plans and ensured efficient production by addressing breakdowns promptly.",
      "Prioritized manpower development, skill enhancement, and automation to build a culture of continuous learning."
    ],
    photo_url: avinashImg,
    sort_order: 3
  },
  {
    id: "t4",
    name: "Mr. Devendra Navale",
    qualification: "M.Pharm, M.Sc. Org Chemistry, DPQM, ISO Lead Auditor",
    title: "Chief Scientific Officer (CSO) & Quality Lead",
    bio: "Over 30 years of pharmaceutical quality and regulatory leadership. Former Vice President and Site Head of Global Quality and Compliance at Sun Pharma, with prior leadership at Lupin, Jubilant Lifesciences, Aurobindo, IPCA, and Ranbaxy. ISO Lead Auditor (IQA/IRCA & IATCA).",
    fullBio: [
      "Over 30 years of experience in the pharmaceutical industry with strong post-graduate degrees in Pharmacy and Chemistry.",
      "Former Vice President and Site Head of Global Quality and Compliance at Sun Pharma; renowned career at Lupin, Jubilant Lifesciences, Aurobindo, IPCA, and Ranbaxy.",
      "Spearheaded Quality & Compliance departments, overseeing all quality functions across multiple manufacturing sites.",
      "Developed and implemented comprehensive Quality Management Systems (QMS) ensuring compliance with FDA, EMA, and international regulatory bodies with minimal observations.",
      "ISO Lead Auditor certified by IQA/IRCA and IATCA."
    ],
    photo_url: devendraImg,
    sort_order: 4
  },
  {
    id: "t5",
    name: "Mr. Anurag Songer",
    qualification: "PMP®, M.E. (Structural)",
    title: "Project Management Lead",
    bio: "Seasoned leader with extensive experience in pharmaceuticals, APIs, and allied project management. Specializing in structural engineering, project coordination, scheduling, monitoring, and cost optimization, coordinating clients, contractors, and agencies for smooth delivery.",
    fullBio: [
      "Seasoned leader with extensive experience in pharmaceuticals, APIs, and allied project management.",
      "Specializes in project coordination, scheduling, monitoring, and cost optimization.",
      "Adept at coordinating with various stakeholders, including clients, contractors, and other agencies, to ensure smooth project progress.",
      "Meticulous structural engineering approach coupled with PMP® certified management acumen."
    ],
    photo_url: anuragImg,
    sort_order: 5
  }
];

export const SEED_TESTIMONIALS = [
  {
    id: "tm1",
    client_name: "Dr. Arvind Kelkar",
    role: "VP Operations",
    company: "BioNexus Therapeutics Ltd.",
    quote: "MSP Engineering delivered our sterile injectable facility 2 months ahead of schedule. Their mastery of USFDA cGMP regulations and cleanroom airflow dynamics was instrumental in our first-pass regulatory audit.",
    sector: "Pharmaceutical"
  },
  {
    id: "tm2",
    client_name: "Prakash Somani",
    role: "Director of Projects",
    company: "Aura Pharma Intermediates",
    quote: "The precision in process piping, WFI loop sizing, and 3D clash resolution saved us over 18% in rework and fabrication costs. MSP is our go-to engineering consultant.",
    sector: "API"
  },
  {
    id: "tm3",
    client_name: "Kavita Raman",
    role: "Head of QA & Compliance",
    company: "Zenith Biotech Formulations",
    quote: "Their validation team produced the most thorough DQ/IQ/OQ/PQ documentation dossiers we have ever seen. Flawless CSV implementation and seamless training for our site staff.",
    sector: "Biotechnology"
  },
  {
    id: "tm4",
    client_name: "Ramesh Chordia",
    role: "Managing Director",
    company: "Synergy Bulk Drugs Ltd.",
    quote: "From master planning to factory acceptance testing, MSP Engineering showed unmatched technical discipline, transparent project reporting, and prompt problem-solving.",
    sector: "Industrial"
  }
];

export const SERVICE_CATEGORIES = [
  {
    title: "Consultancy",
    slug: "consultancy",
    shortDesc: "Strategic master planning, regulatory advisory, and techno-economic feasibility studies.",
    icon: "business_center",
    heroBg: "bg-primary-container",
    count: 4
  },
  {
    title: "Engineering Design",
    slug: "engineering-design",
    shortDesc: "Precision HVAC, cleanroom architecture, process piping, electrical & BMS automation.",
    icon: "architecture",
    heroBg: "bg-primary",
    count: 6
  },
  {
    title: "Project Execution",
    slug: "project-execution",
    shortDesc: "End-to-end EPCM management, on-site quality supervision, and dynamic commissioning.",
    icon: "engineering",
    heroBg: "bg-tertiary-container",
    count: 4
  },
  {
    title: "Procurement",
    slug: "procurement",
    shortDesc: "Vendor qualification, technical bid evaluations, FAT witnessing, and SAT coordination.",
    icon: "shopping_cart",
    heroBg: "bg-primary-container",
    count: 4
  },
  {
    title: "Validation & Documentation",
    slug: "validation-documentation",
    shortDesc: "DQ/IQ/OQ/PQ execution, GAMP 5 CSV, HVAC certification, and regulatory dossiers.",
    icon: "verified_user",
    heroBg: "bg-primary",
    count: 6
  }
];
