import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Award, CheckCircle } from 'lucide-react';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-primary text-on-primary pt-16 pb-28 lg:pb-16 border-t border-primary-container">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-primary-container/80">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link to="/" className="inline-block">
              <Logo inverted={true} className="h-12" />
            </Link>
            <p className="text-sm text-primary-fixed leading-relaxed mt-2">
              Premier engineering consultancy providing turnkey master planning, cleanroom design, MEP utilities, EPCM project management, and cGMP validation for pharmaceutical, API, and biotechnology leaders globally.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-flex items-center gap-1 bg-primary-container px-2.5 py-1 rounded text-xs text-primary-fixed font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-secondary-fixed" /> USFDA Aligned
              </span>
              <span className="inline-flex items-center gap-1 bg-primary-container px-2.5 py-1 rounded text-xs text-primary-fixed font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-secondary-fixed" /> EU-GMP & WHO
              </span>
              <span className="inline-flex items-center gap-1 bg-primary-container px-2.5 py-1 rounded text-xs text-primary-fixed font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-secondary-fixed" /> ISO 14644
              </span>
            </div>
          </div>

          {/* Col 2: Services Disciplines */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-headline font-bold text-base text-on-primary uppercase tracking-wider text-xs">
              Engineering Disciplines
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-primary-fixed">
              <li>
                <Link to="/services/consultancy" className="hover:text-secondary-fixed transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-secondary-container" /> Concept & Master Planning
                </Link>
              </li>
              <li>
                <Link to="/services/engineering-design" className="hover:text-secondary-fixed transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-secondary-container" /> HVAC & Cleanroom Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/engineering-design" className="hover:text-secondary-fixed transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-secondary-container" /> Process Piping & Utility Loops
                </Link>
              </li>
              <li>
                <Link to="/services/project-execution" className="hover:text-secondary-fixed transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-secondary-container" /> EPCM Project Management
                </Link>
              </li>
              <li>
                <Link to="/services/procurement" className="hover:text-secondary-fixed transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-secondary-container" /> Vendor Qualification & FAT/SAT
                </Link>
              </li>
              <li>
                <Link to="/services/validation-documentation" className="hover:text-secondary-fixed transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-secondary-container" /> DQ/IQ/OQ/PQ & CSV Validation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-headline font-bold text-base text-on-primary uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-primary-fixed">
              <li>
                <Link to="/" className="hover:text-secondary-fixed transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary-fixed transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary-fixed transition-colors">All Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-secondary-fixed transition-colors">Projects & Case Studies</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary-fixed transition-colors">Contact & Enquiries</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices & Contact */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-headline font-bold text-base text-on-primary uppercase tracking-wider text-xs">
              Corporate Office
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-primary-fixed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary-container flex-shrink-0 mt-0.5" />
                <span>
                  Samiksh Landmark,
                  Office No. 409 330/5 Tajpur Gadbadi Maa Vihar Colony,
                  Near Choithram Square A.B. Road Indore (M.P) India - 452012
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary-container flex-shrink-0" />
                <p className="hover:text-secondary-fixed transition-colors">+91-7568643588,+91-8319921950</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary-container flex-shrink-0" />
                <a href="mailto:info@mspconsultant.com" className="hover:text-secondary-fixed transition-colors">marketing@mspcon.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-primary-container">
          <div>
            © {new Date().getFullYear()} MSP Engineering Consultant. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Quality Policy (ISO 9001:2015)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
