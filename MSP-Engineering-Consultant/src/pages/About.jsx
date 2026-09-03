import React, { useState } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ShieldCheck, Target, Eye, Award, CheckCircle2, Users, ArrowRight, X, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTeam } from '../hooks/useTestimonials';
import { CTASection } from '../components/sections/CTASection';

const clients = [
  { name: "Ingenus",               domain: "ingenuspharmaceuticals.com" },
  { name: "Glenmark",               domain: "glenmarkpharma.com" },
  { name: "Lindström",              domain: "lindstromgroup.com" },
  { name: "Knovea",                 domain: "knovea.com" },
  { name: "ACG Capsules",           domain: "acg-world.com" },
  { name: "Symbiotec Pharmalab",    domain: "symbiotec.in" },
  { name: "WL",                     domain: "wlross.com" },
  { name: "SYMPA Pharma",           domain: "sympapharma.com" },
  { name: "Vishal",                 domain: "vishalgroup.com" },
  { name: "Dymed Pharma",           domain: "dymedpharma.com" },
  { name: "Cortega",                domain: "cortega.com" },
  { name: "Samson",                 domain: "samsonpharma.com" },
  { name: "GENO Pharmaceuticals",   domain: "genopharma.net" },
  { name: "Ami Xor",                domain: "amixor.com" },
  { name: "L2Mtech",                domain: "l2mtech.com" },
  { name: "KRISHGEN BioSystems",    domain: "krishgen.com" },
  { name: "RELSUS Health First",    domain: "relsus.in" },
  { name: "Balaji",                 domain: "balajipharma.com" },
  { name: "Great Galleon Ventures", domain: "greatgalleonventures.com" },
  { name: "Fortune",                domain: "fortunegroup.in" },
  { name: "Bridgestone",            domain: "bridgestone.com" },
  { name: "MAHLE",                  domain: "mahle.com" },
  { name: "LiuGong",                domain: "liugong.com" },
  { name: "SRF",                    domain: "srfindia.com" },
  { name: "Panasonic Energy",       domain: "panasonic.com" },
  { name: "Godrej",                 domain: "godrej.com" },
  { name: "TUFROPES",               domain: "tufropes.com" },
  { name: "MAN",                    domain: "man.eu" }
];

function ClientLogo({ name, domain }) {
  const [imgFailed, setImgFailed] = React.useState(false);
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();

  return (
    <div className="bg-white border border-outline-variant rounded-lg p-3 flex flex-col items-center justify-center gap-2 min-h-[80px] hover:border-primary hover:shadow-sm transition-all duration-200 group">
      {!imgFailed ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={`${name} logo`}
          className="h-8 w-auto max-w-[90px] object-contain"
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="h-8 w-10 rounded bg-primary flex items-center justify-center">
          <span className="text-[10px] font-extrabold text-on-primary">{initials}</span>
        </div>
      )}
      <span className="text-[9px] sm:text-[10px] font-semibold text-on-surface-variant text-center leading-tight group-hover:text-primary transition-colors line-clamp-2">
        {name}
      </span>
    </div>
  );
}

export function About() {
  const { team } = useTeam();
  const [selectedMember, setSelectedMember] = useState(null);

  const values = [
    {
      title: "Regulatory Compliance First",
      desc: "Every design choice is benchmarked against USFDA, EU-GMP, and WHO standards to guarantee first-pass audit clearances.",
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />
    },
    {
      title: "Engineering Rigor & 3D Coordination",
      desc: "Zero-clash 3D BIM process modeling to eliminate costly on-site piping rework and shorten commissioning lead times.",
      icon: <Award className="w-6 h-6 text-secondary" />
    },
    {
      title: "Energy & Environmental Stewardship",
      desc: "Optimizing HVAC air handling heat loads, energy recovery wheels, and Zero Liquid Discharge (ZLD) effluent loops.",
      icon: <CheckCircle2 className="w-6 h-6 text-secondary" />
    },
    {
      title: "Uncompromising Integrity",
      desc: "Transparent vendor technical evaluations, unbiased equipment sourcing, and strict client NDA confidentiality.",
      icon: <Target className="w-6 h-6 text-secondary" />
    }
  ];

  const methodology = [
    { step: "01", name: "Concept & Master Plan", desc: "Site zoning, URS alignment, and CAPEX modeling." },
    { step: "02", name: "Basic Engineering", desc: "Process flow diagrams (PFD), heat loads, and cleanroom zoning." },
    { step: "03", name: "Detailed 3D Design", desc: "P&IDs, piping isometrics, cable trays, and clash resolution." },
    { step: "04", name: "Procurement & TBE", desc: "Vendor pre-qualification, technical matrices, and FAT witnessing." },
    { step: "05", name: "Site Construction & QC", desc: "EPCM site supervision, weld boroscopy, and ITP audits." },
    { step: "06", name: "Commissioning & C&Q", desc: "DQ/IQ/OQ/PQ protocols, air mapping, and handover dossiers." },
  ];

  return (
    <div>
      {/* Hero Header */}
      <section className="bg-surface py-12 md:py-16 border-b border-outline-variant">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'About Us' }
            ]}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Company Profile & Key Persons
            </span>
            <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-primary mt-2 leading-tight">
              Engineering Trust for the World's Leading Pharma & Biotech Manufacturers
            </h1>
            <p className="font-body text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
              <strong>ISO 9001:2015</strong> Certified Company.

              Delivering innovative and superior solutions for over a decade

              Our comprehensive services encompass Architectural & Engineering Design tailored for various sectors including Pharmaceuticals, API, Bulk drugs, Biotechnology, Research & Development BSL 1 to BSL 5, Food & cosmetics, and other industries.

              Proficient in executing both <strong>Greenfield</strong> & <strong>Bownfield</strong> projects across enterprises of all sizes.

              Our Pharmaceutical plant designs adhere to stringent regulatory standards such as <strong>USFDA</strong>, <strong>MHRA</strong>, <strong>WHO Geneva</strong>, <strong>cGMP</strong>, <strong>PICS</strong>, <strong>TGA</strong>, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="section-padding bg-surface-container-low border-b border-outline-variant">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            

            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 shadow-ambient">
              <div className="w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-secondary-fixed" />
              </div>
              <h2 className="font-headline font-bold text-2xl text-primary mb-3">Our Mission</h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                To engineer compliant, sustainable, and energy-efficient pharmaceutical facilities through multidisciplinary collaboration, cutting-edge 3D BIM modeling, and rigorous cGMP qualification dossiers.
              </p>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 shadow-ambient">
              <div className="w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-secondary-fixed" />
              </div>
              <h2 className="font-headline font-bold text-2xl text-primary mb-3">Our Strength</h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Exceptionally skilles and driven team members
                Profound expertise equipped to tackle Intricate projects.
                Demonstrated track record of effectively executing projects across a spectrum of enterprises, ranging from small to large.
                Extensive global project experience spanning diverse locations.
                Client-centric methodology. delivering customized solutions.
                Established reputation for delivering projects punctually and with cost -efficiency.
              </p>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 shadow-ambient col-span-1 md:col-span-2">
              <div className="w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary-fixed" />
              </div>
              <h2 className="font-headline font-bold text-2xl text-primary mb-1">Our Clients</h2>
              <p className="font-body text-sm text-on-surface-variant mb-5">Trusted by leading pharmaceutical, biotech, and industrial organizations worldwide.</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {clients.map((c, i) => (
                  <ClientLogo key={i} name={c.name} domain={c.domain} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-surface border-b border-outline-variant">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Guiding Principles
            </span>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl text-primary mt-1">
              The MSP Engineering Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-headline font-bold text-base text-primary">{v.title}</h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Execution Methodology */}
      <section className="section-padding bg-surface-container-low border-b border-outline-variant">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Standard Operating Procedure
            </span>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl text-primary mt-1">
              6-Phase Facility Delivery Lifecycle
            </h2>
            <p className="font-body text-sm text-on-surface-variant mt-2">
              Our structured stage-gate process minimizes project risks and prevents budget overruns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((m, idx) => (
              <div key={idx} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col justify-between">
                <div>
                  <div className="font-headline font-extrabold text-2xl text-secondary mb-2">
                    {m.step}
                  </div>
                  <h3 className="font-headline font-bold text-base text-primary mb-1.5">
                    {m.name}
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Leadership Persons (5 Members) */}
      <section className="section-padding bg-surface border-b border-outline-variant" id="leadership">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Key Persons & Leadership Team
            </span>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl text-primary mt-1">
              Distinguished Industry Leaders & Technical Heads
            </h2>
            <p className="font-body text-sm text-on-surface-variant mt-2">
              Decades of global hands-on expertise in cleanroom architecture, process utilities, quality systems, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col shadow-ambient hover:shadow-ambient-lg hover:border-primary transition-all duration-300 group"
              >
                {/* Photo */}
                <div className="h-56 overflow-hidden bg-surface-container relative">
                  <img
                    src={member.photo_url}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      if (member.fallback_photo && e.currentTarget.src !== member.fallback_photo) {
                        e.currentTarget.src = member.fallback_photo;
                      }
                    }}
                  />
                  {member.qualification && (
                    <div className="absolute bottom-2 left-2 right-2 bg-primary/90 backdrop-blur-sm text-on-primary text-[10px] font-semibold py-1 px-2 rounded line-clamp-1">
                      {member.qualification}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-grow justify-between gap-3">
                  <div>
                    <h3 className="font-headline font-bold text-base text-primary group-hover:text-primary-container transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-secondary mt-0.5">
                      {member.title}
                    </div>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-2 line-clamp-4">
                      {member.bio}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className="w-full py-1.5 px-3 rounded border border-outline hover:border-primary hover:bg-surface-container text-primary font-headline font-bold text-xs flex items-center justify-center gap-1 transition-colors mt-2"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Profile Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl max-w-2xl w-full shadow-ambient-lg overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-primary text-on-primary p-6 flex justify-between items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-secondary-container flex-shrink-0">
                  <img
                    src={selectedMember.photo_url}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      if (selectedMember.fallback_photo && e.currentTarget.src !== selectedMember.fallback_photo) {
                        e.currentTarget.src = selectedMember.fallback_photo;
                      }
                    }}
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary-fixed">Key Person Profile</span>
                  <h3 className="font-headline font-bold text-xl sm:text-2xl text-on-primary">
                    {selectedMember.name}
                  </h3>
                  <div className="text-xs sm:text-sm text-primary-fixed mt-0.5 flex flex-wrap gap-2 items-center">
                    <span>{selectedMember.title}</span>
                    {selectedMember.qualification && (
                      <>
                        <span>•</span>
                        <span className="font-semibold text-secondary-fixed">{selectedMember.qualification}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-1 rounded-full text-on-primary/80 hover:text-on-primary hover:bg-primary-container transition-colors"
                aria-label="Close Profile"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex flex-col gap-4 text-xs sm:text-sm text-on-surface">
              <h4 className="font-headline font-bold text-base text-primary border-b border-outline-variant pb-2">
                Executive & Technical Expertise Summary
              </h4>

              {selectedMember.fullBio && Array.isArray(selectedMember.fullBio) ? (
                <ul className="flex flex-col gap-2.5">
                  {selectedMember.fullBio.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="leading-relaxed text-on-surface-variant">
                  {selectedMember.bio}
                </p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-surface-container border-t border-outline-variant flex justify-between items-center">
              <span className="text-xs text-on-surface-variant">MSP Engineering Consultant</span>
              <Button onClick={() => setSelectedMember(null)} variant="primary" size="sm">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <CTASection
        title="Collaborate with Our Principal Engineering Team"
        subtitle="Schedule a consultation with our key leadership team to evaluate your facility expansion or greenfield plans."
      />
    </div>
  );
}
