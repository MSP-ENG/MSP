import React from 'react';
import { ShieldCheck, FileCheck, Award, CheckCircle, Flame, Layers } from 'lucide-react';

export function QualityAssurance() {
  const standards = [
    {
      title: "USFDA 21 CFR Part 210/211 & Part 11",
      desc: "Aseptic facility layout design, electronic records compliance, and closed-loop data integrity.",
      icon: <ShieldCheck className="w-5 h-5 text-secondary-container" />
    },
    {
      title: "ISO 14644-1/2/3 Cleanroom Classification",
      desc: "Precision airborne particle cleanliness design, recovery time verification, and differential pressure mapping.",
      icon: <Layers className="w-5 h-5 text-secondary-container" />
    },
    {
      title: "EU-GMP Annex 1 (Sterile Medicinal Products)",
      desc: "Contamination Control Strategy (CCS), RABS/Isolator barriers, and unidirectional flow dynamics.",
      icon: <Award className="w-5 h-5 text-secondary-container" />
    },
    {
      title: "ISPE Baseline Guides & GAMP 5",
      desc: "Risk-based commissioning, qualification frameworks, and computerized automation verification.",
      icon: <FileCheck className="w-5 h-5 text-secondary-container" />
    },
    {
      title: "ASME BPE High-Purity Piping Standards",
      desc: "Bio-processing equipment design, orbital welding specifications, and boroscopy verification.",
      icon: <CheckCircle className="w-5 h-5 text-secondary-container" />
    },
    {
      title: "NFPA / PESO Hazardous Area Compliance",
      desc: "Class 1 Div 1 solvent handling, explosion venting, and ATEX certified electrical infrastructure.",
      icon: <Flame className="w-5 h-5 text-secondary-container" />
    }
  ];

  return (
    <section className="section-padding bg-surface border-t border-outline-variant">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Global Compliance Framework
          </span>
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mt-1">
            Built for First-Pass Regulatory Approvals
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            Every drawing, calculation sheet, and validation protocol we deliver is aligned with stringent international regulatory bodies to ensure your manufacturing license is approved without delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col gap-3 hover:border-primary transition-colors"
            >
              <div className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center flex-shrink-0">
                {std.icon}
              </div>
              <h3 className="font-headline font-bold text-base text-primary">
                {std.title}
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                {std.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
