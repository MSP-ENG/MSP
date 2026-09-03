import React, { useState } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { FormInput, FormSelect, FormTextarea } from '../components/ui/FormInput';
import { Button } from '../components/ui/Button';
import { Toast } from '../components/ui/Toast';
import { dataService, isSupabaseConfigured } from '../lib/supabaseClient';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'HVAC & Cleanroom Engineering',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', title: '', message: '' });

  const projectTypeOptions = [
    { value: 'HVAC & Cleanroom Engineering', label: 'HVAC & Cleanroom Engineering' },
    { value: 'Concept & Master Planning', label: 'Concept & Master Planning' },
    { value: 'Process Piping & Clean Utilities', label: 'Process Piping & Clean Utilities' },
    { value: 'Turnkey EPCM Project Execution', label: 'Turnkey EPCM Project Execution' },
    { value: 'Equipment Procurement & FAT/SAT', label: 'Equipment Procurement & FAT/SAT' },
    { value: 'Validation (DQ/IQ/OQ/PQ & CSV)', label: 'Validation (DQ/IQ/OQ/PQ & CSV)' },
    { value: 'General Consultation', label: 'General Consultation / Other' }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide brief details about your project or enquiry';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await dataService.submitEnquiry(formData);
      setToast({
        show: true,
        type: 'success',
        title: 'Enquiry Received Successfully',
        message: 'Thank you for reaching out. Our principal engineering consultant will review your specifications and contact you within 24 hours.'
      });
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: 'HVAC & Cleanroom Engineering',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setToast({
        show: true,
        type: 'error',
        title: 'Submission Failed',
        message: err.message || 'There was an issue submitting your enquiry. Please try again or email marketing@mspcon.in directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-surface py-12 md:py-16 border-b border-outline-variant">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Contact Us' }
            ]}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Connect with Principal Consultants
            </span>
            <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-primary mt-2 leading-tight">
              Request Facility Consultation & Technical Enquiries
            </h1>
            <p className="font-body text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
              Whether you are planning a greenfield formulation plant, cleanroom retrofit, or need qualification protocols, our engineering team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Office Location Cards */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 sm:p-10 shadow-ambient">
                <div className="mb-6">
                  <h2 className="font-headline font-bold text-xl sm:text-2xl text-primary">
                    Project Enquiry Form
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
                    Please provide your facility details. All information is protected under strict confidentiality (NDA).
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormInput
                      label="Full Name"
                      name="name"
                      placeholder="e.g. Dr. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      error={errors.name}
                    />

                    <FormInput
                      label="Company / Organization"
                      name="company"
                      placeholder="e.g. Nexus Life Sciences Ltd."
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormInput
                      label="Corporate Email"
                      name="email"
                      type="email"
                      placeholder="e.g. rajesh@nexuslifesciences.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      error={errors.email}
                    />

                    <FormInput
                      label="Phone / Mobile"
                      name="phone"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <FormSelect
                    label="Primary Discipline / Project Type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    options={projectTypeOptions}
                  />

                  <FormTextarea
                    label="Project Scope & Facility Requirements"
                    name="message"
                    rows={5}
                    placeholder="Describe your plant footprint, cleanroom classification (e.g. ISO 5/7), timeline, or regulatory targets (USFDA, WHO, EU-GMP)..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    error={errors.message}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="amber"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Submitting Enquiry...' : 'Submit Project Enquiry'}
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-on-surface-variant pt-2 border-t border-outline-variant">
                    <ShieldCheck className="w-4 h-4 text-secondary" />
                    <span>Your technical details are secure. We never share client contact data.</span>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Col: Office Info & Direct Channels */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Head Office Card */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 shadow-ambient flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-secondary-fixed" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-lg text-primary">Head-Office</h3>
                    <p className="text-xs text-on-surface-variant">Indore, India</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-xs sm:text-sm text-on-surface">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-primary block">MSP Engineering Consultant</span>
                      <span>
                        Samiksh Landmark, Office No. 409 330/5 Tajpur Gadbadi Maa Vihar Colony, Near Choithram Square A.B. Road Indore (M.P) India - 452012
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <span className="font-bold text-primary block">Direct Phone</span>
                      <a href="tel:+917568643588" className="hover:text-primary underline">+91-7568643588</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <span className="font-bold text-primary block">Email Inquiries</span>
                      <a href="mailto:marketing@mspcon.in" className="hover:text-primary underline">marketing@mspcon.in</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Engineering Hubs */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-ambient">
                <h4 className="font-headline font-bold text-base text-primary mb-3">
                  Regional Project Liaison Offices
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div className="p-3 bg-surface-container rounded border border-outline-variant/60">
                    <div className="font-bold text-primary">Hyderabad Hub</div>
                    <div className="text-on-surface-variant mt-0.5">Genome Valley API Support</div>
                  </div>
                  <div className="p-3 bg-surface-container rounded border border-outline-variant/60">
                    <div className="font-bold text-primary">Ahmedabad Hub</div>
                    <div className="text-on-surface-variant mt-0.5">Sanand & Changodar Liaison</div>
                  </div>
                  <div className="p-3 bg-surface-container rounded border border-outline-variant/60">
                    <div className="font-bold text-primary">Vadodara Hub</div>
                    <div className="text-on-surface-variant mt-0.5">Formulations & Sterile Desk</div>
                  </div>
                  <div className="p-3 bg-surface-container rounded border border-outline-variant/60">
                    <div className="font-bold text-primary">Indore Hub</div>
                    <div className="text-on-surface-variant mt-0.5">Biotech & Bioprocess Desk</div>
                  </div>
                </div>
                <h4 className="font-headline font-bold text-base text-primary mb-3">
                  Regional Project Liaison Offices
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-surface-container rounded border border-outline-variant/60">
                    <div className="font-bold text-primary">Hyderabad Hub</div>
                    <div className="text-on-surface-variant mt-0.5">Genome Valley API Support</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Toast Notification */}
      <Toast
        show={toast.show}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />
    </div>
  );
}
