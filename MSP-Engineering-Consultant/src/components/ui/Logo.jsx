import React from 'react';

export function Logo({
  className = "h-12 w-auto",
  inverted = false, // For dark backgrounds like footer
}) {
  return (
    <img
      src="/logo.png"
      alt="MSP Engineering Consultant"
      draggable={false}
      className={`select-none object-contain ${
        inverted ? 'bg-white rounded-md p-1.5' : 'mix-blend-multiply'
      } ${className}`}
    />
  );
}