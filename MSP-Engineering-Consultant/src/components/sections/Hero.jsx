import React, { useState, useEffect } from 'react';
import heroVideo from '../../videos/hero.mp4';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80';

const slides = [
  {
    heading: 'With more than 28 years of experience',
    text: 'From conceptual master planning to turnkey cleanroom engineering, high-purity piping, and USFDA/EU-GMP validation dossiers.',
    cta: { label: 'View Details', to: '/about' },
  },
  {
    heading: 'Engineering cleanrooms with zero-defect precision',
    text: 'ISO 5 Class A laminar airflow workstations with continuous particle monitoring and automated CIP/SIP loops.',
    cta: { label: 'Explore Services', to: '/services' },
  },
  {
    heading: '40+ USFDA approved plants delivered',
    text: 'Turnkey EPCM, validation and documentation for pharma, API and biotech facilities.',
    cta: { label: 'See Our Projects', to: '/projects' },
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);

  const next = () => setIndex((i) => (i + 1) % slides.length);

  // Auto-advance every 6 seconds (restarts when the slide changes)
  useEffect(() => {
    const timer = setTimeout(next, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  const slide = slides[index];

  return (
    <section className="relative w-full h-[85vh] min-h-[560px] overflow-hidden bg-primary">
      {/* Background: video, or photo if the video can't load */}
      {videoFailed ? (
        <img
          src={FALLBACK_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src = {heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onError={(e) => {
            console.error(
              'Hero video failed. Code:',
              e.currentTarget.error?.code,
              e.currentTarget.error?.message
            );
            setVideoFailed(true);
          }}
        >
        </video>
      )}

      {/* Dark overlay so the white text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Slide content */}
      <div className="container-custom relative z-10 h-full flex items-center">
        <div key={index} className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="font-headline font-extrabold uppercase text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
            {slide.heading}
          </h1>
          <p className="mt-5 max-w-xl text-white/90 text-base sm:text-lg leading-relaxed">
            {slide.text}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to={slide.cta.to}
              className="inline-flex items-center gap-2 bg-[#ffcc00] hover:bg-[#ffd633] text-black font-bold uppercase px-8 py-4 transition-colors"
            >
              {slide.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary font-bold uppercase px-8 py-[14px] transition-colors"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom strip: checklist + dots */}
      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="container-custom pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-6 text-white text-xs font-semibold">
            {['3D BIM Clash-Free Piping', 'Cascade ISO Cleanrooms', 'Turnkey EPCM & CSV'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffcc00]" />
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-[#ffcc00]' : 'w-2 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}