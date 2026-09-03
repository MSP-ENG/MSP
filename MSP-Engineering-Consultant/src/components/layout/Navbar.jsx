import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, Cpu, Compass, Layers, Wrench } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Projects & Clients', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const serviceCategories = [
    {
      title: 'Consultancy',
      slug: 'consultancy',
      desc: 'Master planning, feasibility studies, and USFDA regulatory roadmap advisory.',
      icon: <Compass className="w-5 h-5 text-primary" />
    },
    {
      title: 'Engineering Design',
      slug: 'engineering-design',
      desc: 'HVAC, ISO cleanrooms, process piping (WFI/PW), electrical, and BMS automation.',
      icon: <Layers className="w-5 h-5 text-primary" />
    },
    {
      title: 'Project Execution',
      slug: 'project-execution',
      desc: 'EPCM turnkey management, site supervision, and dynamic commissioning.',
      icon: <Wrench className="w-5 h-5 text-primary" />
    },
    {
      title: 'Procurement',
      slug: 'procurement',
      desc: 'Vendor pre-qualification, technical bid evaluation (TBE), and FAT/SAT testing.',
      icon: <Cpu className="w-5 h-5 text-primary" />
    },
    {
      title: 'Validation & Documentation',
      slug: 'validation-documentation',
      desc: 'DQ/IQ/OQ/PQ protocols, GAMP 5 CSV, HVAC certification, and thermal mapping.',
      icon: <ShieldCheck className="w-5 h-5 text-primary" />
    },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-surface/95 backdrop-blur-md shadow-ambient border-b border-outline-variant' 
        : 'bg-surface border-b border-outline-variant'
    }`}>
      

      {/* Main Navbar */}
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group py-1">
            <Logo className="h-12" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-semibold text-sm transition-colors duration-200 ${
                location.pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`font-semibold text-sm transition-colors duration-200 ${
                location.pathname === '/about' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                type="button"
                className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-200 py-6 ${
                  location.pathname.startsWith('/services') ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-primary' : ''}`} />
              </button>

              {/* Mega-Menu Dropdown */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-surface-container-lowest border border-outline-variant shadow-ambient-lg rounded-lg p-6 grid grid-cols-12 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="col-span-8 grid grid-cols-2 gap-4 border-r border-outline-variant pr-6">
                    <div className="col-span-2 flex justify-between items-center pb-2 border-b border-outline-variant">
                      <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Core Disciplines</span>
                      <Link to="/services" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                        View All Services <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    {serviceCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/services/${cat.slug}`}
                        className="p-3 rounded hover:bg-surface-container-low transition-colors group flex items-start gap-3"
                      >
                        <div className="p-2 bg-surface-container rounded group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors flex-shrink-0">
                          {cat.icon}
                        </div>
                        <div>
                          <h4 className="font-headline font-bold text-sm text-primary group-hover:text-primary-container">
                            {cat.title}
                          </h4>
                          <p className="text-xs text-on-surface-variant line-clamp-2 mt-0.5">
                            {cat.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Mega-Menu Featured Highlight */}
                  <div className="col-span-4 flex flex-col justify-between bg-surface-container-low p-4 rounded border border-outline-variant">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">Why Choose MSP</span>
                      <h4 className="font-headline font-bold text-sm text-primary mt-1">
                        Turnkey Pharma & Biotech Engineering
                      </h4>
                      <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                        28+ years of engineering rigor delivering USFDA and EU-GMP compliant cleanrooms, automated utilities, and full validation documentation.
                      </p>
                    </div>
                    <Link
                      to="/projects"
                      className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-container"
                    >
                      Explore Case Studies <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/projects" 
              className={`font-semibold text-sm transition-colors duration-200 ${
                location.pathname === '/projects' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Projects & Clients
            </Link>

            <Link 
              to="/contact" 
              className={`font-semibold text-sm transition-colors duration-200 ${
                location.pathname === '/contact' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              to="/contact" 
              variant="amber" 
              size="md"
            >
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Button to="/contact" variant="amber" size="sm">
              Consultation
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary hover:bg-surface-container rounded transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-outline-variant shadow-ambient-lg animate-in slide-in-from-top duration-200 px-4 py-6 flex flex-col gap-4">
          <Link
            to="/"
            className="font-bold text-base text-primary py-2 border-b border-outline-variant"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-bold text-base text-primary py-2 border-b border-outline-variant"
          >
            About Us
          </Link>
          
          <div className="py-2 border-b border-outline-variant">
            <div className="font-bold text-base text-primary mb-2">Services</div>
            <div className="pl-3 flex flex-col gap-2.5">
              {serviceCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/services/${cat.slug}`}
                  className="text-sm font-medium text-on-surface-variant hover:text-primary flex items-center justify-between"
                >
                  <span>{cat.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-outline" />
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/projects"
            className="font-bold text-base text-primary py-2 border-b border-outline-variant"
          >
            Projects & Clients
          </Link>
          <Link
            to="/contact"
            className="font-bold text-base text-primary py-2 border-b border-outline-variant"
          >
            Contact & Enquiries
          </Link>

          <div className="pt-2">
            <Button to="/contact" variant="amber" size="md" className="w-full">
              Request Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
