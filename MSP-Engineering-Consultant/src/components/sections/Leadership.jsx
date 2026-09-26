import React from 'react';
import { Link } from 'react-router-dom';

// Add more people here (e.g. a Chairman) and they line up automatically
const leaders = [
  {
    name: 'Mr. Madhup Singh',
    role: 'Director',
    photo: '/team/madhup-singh.jpeg', // file is at public/team/madhup-singh.jpeg
    to: '/team/madhup-singh',
  },
];

export function Leadership() {
  return (
    <section className="bg-primary py-10 md:py-10">
      <div className="container-custom">
        <h2 className="text-center font-headline font-bold uppercase text-3xl md:text-4xl text-secondary">
          The Leadership
        </h2>

        <div className="mt-1 flex flex-wrap justify-center gap-10 md:gap-16">
          {leaders.map((leader) => (
            <div key={leader.name} className="flex flex-col items-center text-center">
              <img
                src={leader.photo}
                alt={leader.name}
                className="w-80 h- object-cover object-top"
              />
              <h3 className="mt-8 text-xl md:text-2xl text-white font-medium">
                {leader.name}
              </h3>
              <p className="text-sm text-white/90 mt-1">{leader.role}</p>

              <Link
                to={leader.to}
                className="mt-8 inline-flex items-center justify-center w-48 py-4 border-2 border-white rounded text-white text-base hover:bg-white hover:text-primary transition-colors"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}