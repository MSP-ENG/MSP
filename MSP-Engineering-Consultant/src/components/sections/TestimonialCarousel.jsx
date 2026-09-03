import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SEED_TESTIMONIALS } from '../../data/seedData';

export function TestimonialCarousel({ testimonials = SEED_TESTIMONIALS }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  if (!testimonials || testimonials.length === 0) return null;
  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-surface-container-low border-t border-outline-variant">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Client Endorsements
          </span>
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mt-1 mb-8">
            Trusted by Industry Leaders
          </h2>

          {/* Testimonial Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 sm:p-12 shadow-ambient-lg relative w-full flex flex-col items-center">
            <Quote className="w-12 h-12 text-secondary/30 mb-6" />

            <p className="font-body text-base sm:text-lg lg:text-xl text-primary italic leading-relaxed max-w-2xl">
              "{current.quote}"
            </p>

            <div className="mt-8 flex flex-col items-center gap-1 border-t border-outline-variant pt-6 w-full max-w-sm">
              <div className="font-headline font-bold text-base text-primary">
                {current.client_name}
              </div>
              <div className="text-xs font-semibold text-secondary">
                {current.company}
              </div>
              {current.sector && (
                <div className="text-[11px] text-on-surface-variant">
                  Sector: {current.sector}
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between w-full mt-8 pt-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-outline hover:border-primary hover:bg-surface-container flex items-center justify-center text-primary transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-primary w-6' : 'bg-outline-variant'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-outline hover:border-primary hover:bg-surface-container flex items-center justify-center text-primary transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
